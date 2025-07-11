'use client'
import { motion } from "framer-motion";

interface FloatingElementsProps {
  variant?: "circles" | "squares" | "mixed";
  count?: number;
  className?: string;
}

const FloatingElements = ({ variant = "mixed", count = 6, className = "" }: FloatingElementsProps) => {
  const elements = [];

  for (let i = 0; i < count; i++) {
    const size = Math.random() * 40 + 20;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 15;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    const isCircle = variant === "circles" || (variant === "mixed" && Math.random() > 0.5);
    
    elements.push(
      <motion.div
        key={i}
        className={`absolute pointer-events-none ${isCircle ? 'rounded-full' : 'rounded-lg'}`}
        style={{
          width: size,
          height: size,
          left: `${x}%`,
          top: `${y}%`,
          background: `linear-gradient(135deg, ${
            Math.random() > 0.5 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(0, 180, 219, 0.1)'
          }, transparent)`,
          border: `1px solid ${
            Math.random() > 0.5 ? 'rgba(139, 92, 246, 0.2)' : 'rgba(0, 180, 219, 0.2)'
          }`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, -10, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {elements}
    </div>
  );
};

export default FloatingElements;
