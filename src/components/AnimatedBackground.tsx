import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      
      {/* Radial gradient overlays */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(189 100% 50% / 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(274 100% 65% / 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.id % 3 === 0 
              ? "hsl(189 100% 50% / 0.6)" 
              : particle.id % 3 === 1 
                ? "hsl(274 100% 65% / 0.6)"
                : "hsl(153 100% 50% / 0.4)",
            boxShadow: particle.id % 3 === 0 
              ? "0 0 6px hsl(189 100% 50% / 0.8)" 
              : particle.id % 3 === 1 
                ? "0 0 6px hsl(274 100% 65% / 0.8)"
                : "0 0 6px hsl(153 100% 50% / 0.6)",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Car silhouette watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg viewBox="0 0 640 240" className="w-[70%] h-auto">
          <path
            d="M620 180c0 11-9 20-20 20H40c-11 0-20-9-20-20v-40c0-11 9-20 20-20h60l20-40c10-20 30-32 52-32h196c22 0 42 12 52 32l20 40h160c11 0 20 9 20 20v40z"
            fill="currentColor"
          />
          <circle cx="140" cy="180" r="40" fill="currentColor" />
          <circle cx="500" cy="180" r="40" fill="currentColor" />
          <circle cx="140" cy="180" r="25" fill="hsl(var(--background))" />
          <circle cx="500" cy="180" r="25" fill="hsl(var(--background))" />
        </svg>
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette" />
    </div>
  );
};
