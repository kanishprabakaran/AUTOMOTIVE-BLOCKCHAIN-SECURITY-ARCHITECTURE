import { motion } from "framer-motion";
import { Link2, Lock, Database } from "lucide-react";

interface BlockchainStageProps {
  delay?: number;
}

export const BlockchainStage = ({ delay = 0 }: BlockchainStageProps) => {
  return (
    <motion.div
      className="flex flex-col gap-3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Public Ledger */}
      <motion.div
        className="glass-card-purple w-[170px]"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Link2 className="w-4 h-4 text-secondary" />
          <h4 className="font-orbitron text-[10px] text-secondary font-bold tracking-wider">
            PUBLIC LEDGER
          </h4>
        </div>
        <p className="text-[9px] text-muted-foreground mb-2">Ethereum / Polygon</p>
        <div className="space-y-1 text-[8px] text-muted-foreground/80">
          <p>• Transaction ID Storage</p>
          <p>• Immutable Record</p>
        </div>
        
        {/* Animated blocks */}
        <div className="flex gap-1 mt-2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-6 h-4 rounded-sm border border-secondary/50"
              style={{ background: "hsl(274 100% 65% / 0.2)" }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: delay + 0.5 + i * 0.2,
                repeat: Infinity,
                repeatDelay: 3,
                duration: 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Private Ledger */}
      <motion.div
        className="glass-card-green w-[170px]"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Lock className="w-4 h-4 text-accent" />
          <h4 className="font-orbitron text-[10px] text-accent font-bold tracking-wider">
            PRIVATE LEDGER
          </h4>
        </div>
        <div className="space-y-1 text-[8px] text-muted-foreground/80">
          <p>• Merkle Root</p>
          <p>• Complete Manifest</p>
          <p>• High-Speed Queries</p>
        </div>
        
        {/* Animated database rows */}
        <div className="flex items-center gap-1 mt-2">
          <Database className="w-3 h-3 text-accent/60" />
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-1 flex-1 rounded-full"
              style={{ background: "hsl(153 100% 50% / 0.4)" }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                delay: delay + i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
