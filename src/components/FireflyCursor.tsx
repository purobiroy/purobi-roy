import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'motion/react';

export const FireflyCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Outer glow physics: Slight delay from the cursor for a fluid, atmospheric effect
  const glowSpringConfig = { damping: 25, stiffness: 150, mass: 0.6 };
  const glowX = useSpring(mouseX, glowSpringConfig);
  const glowY = useSpring(mouseY, glowSpringConfig);

  useEffect(() => {
    const updatePosition = (clientX: number, clientY: number, target: EventTarget | null) => {
      if (!isVisible) setIsVisible(true);
      
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Check if hovering over hero image
      const element = target as HTMLElement;
      const isHero = element?.closest?.('#hero-image-container');
      setIsHoveringHero(!!isHero);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY, e.target);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY, touch.target);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setIsVisible(true);
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY, touch.target);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && !isHoveringHero && (
        <motion.div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            x: glowX,
            y: glowY,
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        >
          {/* Outer Atmospheric Glow (Ultra Bright & Soft) */}
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-24 h-24 bg-lime/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          />
          
          {/* Inner Intense Glow (Soft but Bright) */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.2
            }}
            className="absolute top-0 left-0 w-12 h-12 bg-lime/80 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
