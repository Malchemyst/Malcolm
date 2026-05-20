import React, { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Star {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  twinkleOffset: number;
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initStars = () => {
      const stars: Star[] = [];
      const sphereRadius = 220; // Slightly larger than the visible sphere (200) for padding
      const centerX = 0;
      const centerY = 0;
      
      for (let i = 0; i < 800; i++) {
        let x, y;
        
        // Keep generating positions until we find one outside the sphere area
        do {
          x = Math.random() * canvas.width - canvas.width / 2;
          y = Math.random() * canvas.height - canvas.height / 2;
        } while (Math.sqrt(x * x + y * y) < sphereRadius);
        
        const z = Math.random() * 1000;
        stars.push({
          x,
          y,
          z,
          baseX: x,
          baseY: y,
          baseZ: z,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }
      starsRef.current = stars;
    };
    initStars();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX - canvas.width / 2;
      mouseRef.current.y = e.clientY - canvas.height / 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;

      // Clear canvas with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Center the coordinate system
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Draw stars
      starsRef.current.forEach((star, index) => {
        // Move stars forward in Z
        star.z -= 0.5;

        // Reset star if it goes behind the camera
        if (star.z <= 0) {
          const sphereRadius = 220;
          let x, y;
          
          // Keep generating positions until we find one outside the sphere area
          do {
            x = Math.random() * canvas.width - canvas.width / 2;
            y = Math.random() * canvas.height - canvas.height / 2;
          } while (Math.sqrt(x * x + y * y) < sphereRadius);
          
          star.x = x;
          star.y = y;
          star.z = 1000;
          star.baseX = star.x;
          star.baseY = star.y;
          star.baseZ = star.z;
        }

        // Project 3D to 2D first
        const scale = 1000 / (1000 + star.z);
        const x2d = star.x * scale;
        const y2d = star.y * scale;
        
        // Check if star is in sphere area after projection - don't draw if it is
        const sphereRadius = 220;
        const distanceFromCenter = Math.sqrt(x2d * x2d + y2d * y2d);
        if (distanceFromCenter < sphereRadius) {
          return; // Skip drawing this star
        }

        // Calculate distance from mouse to projected star position
        const dx = x2d - mouseRef.current.x;
        const dy = y2d - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDispersionDistance = 200;

        // Apply dispersion force
        if (distance < maxDispersionDistance && distance > 0) {
          // Repulsion force - stronger when closer
          const force = (1 - distance / maxDispersionDistance) * 8;
          const angle = Math.atan2(dy, dx);
          
          // Apply force in world space (inverse of scale to account for perspective)
          const worldForce = force / scale;
          star.x += Math.cos(angle) * worldForce;
          star.y += Math.sin(angle) * worldForce;
        }

        // Gradually return to base position
        const returnForce = 0.015;
        star.x += (star.baseX - star.x) * returnForce;
        star.y += (star.baseY - star.y) * returnForce;

        // Recalculate projection after applying forces
        const finalScale = 1000 / (1000 + star.z);
        const finalX2d = star.x * finalScale;
        const finalY2d = star.y * finalScale;

        // Calculate star properties based on depth
        const depth = 1 - star.z / 1000;
        const size = Math.max(0.5, depth * 2.5);
        
        // Twinkling effect with better visibility for WCAG
        const twinkle = Math.sin(time * 3 + star.twinkleOffset) * 0.2 + 0.8;
        const opacity = Math.max(0.35, Math.min(1, depth * twinkle));

        // Draw star with WCAG-compliant colors
        const starColor = theme === 'dark' 
          ? `rgba(201, 169, 97, ${opacity})` 
          : `rgba(135, 104, 42, ${opacity})`;
        
        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(finalX2d, finalY2d, size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow for brighter stars
        if (depth > 0.7 && twinkle > 0.85) {
          ctx.fillStyle = theme === 'dark'
            ? `rgba(232, 217, 159, ${opacity * 0.4})`
            : `rgba(201, 169, 97, ${opacity * 0.4})`;
          ctx.beginPath();
          ctx.arc(finalX2d, finalY2d, size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.restore();

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}