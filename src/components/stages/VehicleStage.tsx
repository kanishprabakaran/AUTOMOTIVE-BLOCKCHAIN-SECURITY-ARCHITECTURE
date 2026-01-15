import { motion } from "framer-motion";
import { Car } from "lucide-react";

interface VehicleStageProps {
  delay?: number;
}

export const VehicleStage = ({ delay = 0 }: VehicleStageProps) => {
  return (
    <motion.div
      className="glass-card-cyan flex flex-col items-center gap-3 w-[160px]"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Car icon with glow */}
      <motion.div
        className="relative"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full" />
        <Car className="w-16 h-16 text-primary relative z-10" strokeWidth={1.5} />
        
        {/* OBD Port glow */}
        <motion.div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-2 rounded-sm bg-accent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ boxShadow: "0 0 12px hsl(153 100% 50%)" }}
        />
      </motion.div>

      {/* Label */}
      <h3 className="font-orbitron text-xs text-primary font-bold tracking-wider">
        VEHICLE
      </h3>

      <div className="text-center space-y-1">
        <p className="text-[10px] text-muted-foreground">OBD-II Data Collection</p>
        <p className="text-[9px] text-muted-foreground/70">Real-time diagnostics</p>
      </div>

      {/* Animated data packets */}
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              x: [0, 20, 40],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.3,
              repeat: Infinity,
            }}
            style={{ boxShadow: "0 0 6px hsl(189 100% 50%)" }}
          />
        ))}
      </div>
    </motion.div>
  );
};
