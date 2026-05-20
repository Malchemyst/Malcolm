import React, { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Node {
  x: number;
  y: number;
  z: number;
  baseAngle: number;
  baseTheta: number;
}

export function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number | null>(null);
  const rotationRef = useRef({ x: 0, y: 0 });

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

    // Create sphere vertices
    const initSphere = () => {
      const nodes: Node[] = [];
      const segments = 32;

      // Create nodes on sphere surface
      for (let i = 0; i <= segments; i++) {
        for (let j = 0; j <= segments; j++) {
          const phi = (i / segments) * Math.PI * 2;
          const theta = (j / segments) * Math.PI;

          nodes.push({
            x: 0,
            y: 0,
            z: 0,
            baseAngle: phi,
            baseTheta: theta
          });
        }
      }

      nodesRef.current = nodes;
    };
    initSphere();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX - canvas.width / 2) * 0.001;
      mouseRef.current.y = (e.clientY - canvas.height / 2) * 0.001;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Rotation matrix helpers
    const rotateY = (x: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: x * cos - z * sin,
        z: x * sin + z * cos
      };
    };

    const rotateX = (y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        y: y * cos - z * sin,
        z: y * sin + z * cos
      };
    };

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.005;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update rotation
      rotationRef.current.y = time * 0.5 + mouseRef.current.x;
      rotationRef.current.x = time * 0.3 + mouseRef.current.y;

      // Center the coordinate system
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      const radius = 200;
      const segments = 32;
      const isDark = theme === 'dark';

      // Calculate all node positions
      const projectedNodes = nodesRef.current.map((node) => {
        const x = radius * Math.sin(node.baseTheta) * Math.cos(node.baseAngle);
        const y = radius * Math.sin(node.baseTheta) * Math.sin(node.baseAngle);
        const z = radius * Math.cos(node.baseTheta);

        // Apply rotations
        let rotated = rotateY(x, z, rotationRef.current.y);
        let x2 = rotated.x;
        let z2 = rotated.z;

        rotated = rotateX(y, z2, rotationRef.current.x);
        let y2 = rotated.y;
        z2 = rotated.z;

        // Perspective projection
        const perspective = 600;
        const scale = perspective / (perspective + z2);
        const x3d = x2 * scale;
        const y3d = y2 * scale;

        return { x: x3d, y: y3d, z: z2, scale };
      });

      // Draw wireframe lines with WCAG-compliant contrast
      ctx.strokeStyle = isDark 
        ? 'rgba(201, 169, 97, 0.5)' 
        : 'rgba(135, 104, 42, 0.55)';
      ctx.lineWidth = 1;

      // Draw horizontal circles
      for (let j = 0; j <= segments; j++) {
        ctx.beginPath();
        for (let i = 0; i <= segments; i++) {
          const index = j * (segments + 1) + i;
          const node = projectedNodes[index];

          if (i === 0) {
            ctx.moveTo(node.x, node.y);
          } else {
            ctx.lineTo(node.x, node.y);
          }
        }
        ctx.stroke();
      }

      // Draw vertical lines
      for (let i = 0; i <= segments; i++) {
        ctx.beginPath();
        for (let j = 0; j <= segments; j++) {
          const index = j * (segments + 1) + i;
          const node = projectedNodes[index];

          if (j === 0) {
            ctx.moveTo(node.x, node.y);
          } else {
            ctx.lineTo(node.x, node.y);
          }
        }
        ctx.stroke();
      }

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
      className="fixed inset-0 pointer-events-none opacity-70"
      style={{ zIndex: 1 }}
    />
  );
}