// AnimatedBackground.jsx
import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Get current positions of dots
      const dotPositions = [];
      dotsRef.current.forEach(dot => {
        if (dot) {
          const rect = dot.getBoundingClientRect();
          dotPositions.push({
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
          });
        }
      });
      
      // Draw lines between nearby dots
      for (let i = 0; i < dotPositions.length; i++) {
        for (let j = i + 1; j < dotPositions.length; j++) {
          const dot1 = dotPositions[i];
          const dot2 = dotPositions[j];
          
          const distance = Math.sqrt(
            Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2)
          );
          
          if (distance < 350) {
            const opacity = 1 - (distance / 350);
            
            const gradient = ctx.createLinearGradient(dot1.x, dot1.y, dot2.x, dot2.y);
            gradient.addColorStop(0, `rgba(223, 137, 8, ${opacity * 0.6})`);
            gradient.addColorStop(1, `rgba(180, 21, 255, ${opacity * 0.6})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    // Mouse interaction
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      dotsRef.current.forEach(dot => {
        if (dot) {
          const rect = dot.getBoundingClientRect();
          const dotX = rect.left + rect.width / 2;
          const dotY = rect.top + rect.height / 2;
          
          const distance = Math.sqrt(
            Math.pow(mouseX - dotX, 2) + Math.pow(mouseY - dotY, 2)
          );
          
          if (distance < 200) {
            const opacity = 1 - (distance / 200);
            
            const gradient = ctx.createLinearGradient(mouseX, mouseY, dotX, dotY);
            gradient.addColorStop(0, `rgba(223, 137, 8, ${opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(180, 21, 255, ${opacity * 0.8})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(dotX, dotY);
            ctx.stroke();
          }
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="animated-background">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={`dot dot-${index + 1}`}
            ref={(el) => (dotsRef.current[index] = el)}
          />
        ))}
      </div>
      <canvas ref={canvasRef} id="connecting-lines" />
    </>
  );
};

export default AnimatedBackground;