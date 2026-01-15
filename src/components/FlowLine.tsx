import { motion } from "framer-motion";

interface FlowLineProps {
  direction?: "horizontal" | "vertical" | "diagonal-down" | "diagonal-up";
  color?: "cyan" | "purple" | "green";
  delay?: number;
  className?: string;
}

export const FlowLine = ({ 
  direction = "horizontal", 
  color = "cyan",
  delay = 0,
  className = ""
}: FlowLineProps) => {
  const colors = {
    cyan: {
      line: "hsl(189 100% 50% / 0.4)",
      dot: "hsl(189 100% 50%)",
      glow: "0 0 10px hsl(189 100% 50% / 0.8)",
    },
    purple: {
      line: "hsl(274 100% 65% / 0.4)",
      dot: "hsl(274 100% 65%)",
      glow: "0 0 10px hsl(274 100% 65% / 0.8)",
    },
    green: {
      line: "hsl(153 100% 50% / 0.4)",
      dot: "hsl(153 100% 50%)",
      glow: "0 0 10px hsl(153 100% 50% / 0.8)",
    },
  };

  const isVertical = direction === "vertical";
  const isDiagonalDown = direction === "diagonal-down";
  const isDiagonalUp = direction === "diagonal-up";

  return (
    <div className={`relative ${className}`}>
      {/* Static line */}
      <div
        className={`${isVertical ? "w-0.5 h-full" : isDiagonalDown || isDiagonalUp ? "w-full h-0.5 origin-left" : "w-full h-0.5"}`}
        style={{
          background: colors[color].line,
          transform: isDiagonalDown ? "rotate(20deg)" : isDiagonalUp ? "rotate(-20deg)" : "none",
        }}
      />
      
      {/* Animated dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: colors[color].dot,
            boxShadow: colors[color].glow,
            left: isVertical ? "-3px" : "0",
            top: isVertical ? "0" : "-3px",
          }}
          animate={
            isVertical
              ? { top: ["0%", "100%"] }
              : { left: ["0%", "100%"] }
          }
          transition={{
            duration: 2,
            delay: delay + i * 0.6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
