import { motion } from "framer-motion";
import { ShieldCheck, Check } from "lucide-react";

interface VerificationStageProps {
  delay?: number;
}

export const VerificationStage = ({ delay = 0 }: VerificationStageProps) => {
  const checks = [
    "Public DLT Match",
    "Private DLT Match",
    "Transaction Verified",
    "100% Integrity",
  ];

  return (
    <motion.div
      className="glass-card-gold flex flex-col items-center gap-3 w-[150px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring" }}
    >
      {/* Shield icon with pulse */}
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="absolute inset-0 blur-xl rounded-full"
          style={{ background: "hsl(45 100% 50% / 0.4)" }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <ShieldCheck 
          className="w-14 h-14 text-warning relative z-10" 
          strokeWidth={1.5}
          style={{ filter: "drop-shadow(0 0 10px hsl(45 100% 50% / 0.8))" }}
        />
      </motion.div>

      <h3 className="font-orbitron text-xs text-warning font-bold tracking-wider">
        VERIFIED
      </h3>

      {/* Checkmarks */}
      <div className="space-y-1.5 w-full">
        {checks.map((check, i) => (
          <motion.div
            key={check}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.5 + i * 0.15 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              <Check className="w-3 h-3 text-accent" strokeWidth={3} />
            </motion.div>
            <span className="text-[9px] text-muted-foreground">{check}</span>
          </motion.div>
        ))}
      </div>

      {/* Success pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-warning/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};
