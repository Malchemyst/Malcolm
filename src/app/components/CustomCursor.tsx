import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const [cursorColor, setCursorColor] = React.useState({ ring: '#2d2419', dot: '#2d2419' });
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  React.useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Detect the element under cursor to determine background color
      const target = e.target as HTMLElement;
      detectBackgroundAndSetColor(target);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
      
      detectBackgroundAndSetColor(target);
    };

    const detectBackgroundAndSetColor = (element: HTMLElement) => {
      // Check if we're in a dark section (Work, About, Contact overlays)
      const isDarkSection = 
        element.closest('.overlay-dark') || // Dark overlays
        element.closest('[class*="bg-black"]') || 
        element.closest('[class*="bg-gray-900"]') ||
        element.closest('[class*="bg-[#1a1816]"]') ||
        // Check for specific dark backgrounds in Work section
        element.closest('.project-card') ||
        // Check for About/Contact sections which have dark backgrounds
        (element.closest('[class*="About"]') || element.textContent?.includes('About Me')) ||
        element.closest('[class*="Contact"]');

      if (isDarkSection) {
        // Light cursor for dark backgrounds
        setCursorColor({ 
          ring: '#e8e4dc', 
          dot: '#e8e4dc' 
        });
      } else {
        // Cursor color for light backgrounds (hero section)
        // Matching starfield colors but a tone darker
        if (theme === 'dark') {
          // In dark theme hero (dark background #1a1816)
          // Starfield color is rgb(201, 169, 97), cursor is darker: rgb(165, 135, 70)
          setCursorColor({ 
            ring: '#a58746', 
            dot: '#a58746' 
          });
        } else {
          // In light theme hero (light beige background #d4d0c8)
          // Starfield color is rgb(135, 104, 42), cursor is darker: rgb(100, 75, 30)
          setCursorColor({ 
            ring: '#644b1e', 
            dot: '#644b1e' 
          });
        }
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [theme]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer ring - follows with delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 400,
          mass: 0.2,
        }}
      >
        <div 
          className="w-10 h-10 rounded-full border-2 transition-all duration-200"
          style={{ borderColor: cursorColor.ring }}
        />
      </motion.div>

      {/* Inner dot - follows instantly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 500,
          mass: 0.1,
        }}
      >
        <div 
          className="w-2 h-2 rounded-full transition-all duration-200" 
          style={{ backgroundColor: cursorColor.dot }}
        />
      </motion.div>
    </>
  );
}