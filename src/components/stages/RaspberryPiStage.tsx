import { motion } from "framer-motion";
import { Cpu, Radio, Package, TreeDeciduous } from "lucide-react";

interface RaspberryPiStageProps {
  delay?: number;
}

export const RaspberryPiStage = ({ delay = 0 }: RaspberryPiStageProps) => {
  const features = [
    { icon: Radio, label: "TCP Data Reception", color: "primary" },
    { icon: Package, label: "Batch Processing (8 records)", color: "primary" },
    { icon: TreeDeciduous, label: "Merkle Root Generation", color: "accent" },
  ];

  return (
    <motion.div
      className="glass-card-cyan flex flex-col items-center gap-2 w-[180px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Circuit board icon */}
      <motion.div
        className="relative p-3 rounded-lg"
        style={{
          background: "linear-gradient(135deg, hsl(189 100% 50% / 0.1), hsl(153 100% 50% / 0.1))",
          border: "1px solid hsl(189 100% 50% / 0.3)",
        }}
        animate={{ boxShadow: ["0 0 15px hsl(189 100% 50% / 0.3)", "0 0 25px hsl(189 100% 50% / 0.5)", "0 0 15px hsl(189 100% 50% / 0.3)"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Cpu className="w-10 h-10 text-primary" strokeWidth={1.5} />
      </motion.div>

      <h3 className="font-orbitron text-xs text-primary font-bold tracking-wider">
        RASPBERRY PI
      </h3>

      {/* Feature cards */}
      <div className="space-y-1.5 w-full">
        {features.map((feature, i) => (
          <motion.div
            key={feature.label}
            className="flex items-center gap-2 px-2 py-1 rounded bg-background/30 border border-primary/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.3 + i * 0.1 }}
          >
            <feature.icon className={`w-3 h-3 ${feature.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
            <span className="text-[9px] text-muted-foreground">{feature.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Hash computation visual */}
      <motion.div
        className="code-text text-[8px] px-2 py-1 rounded bg-background/50 font-code"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        merkle_root = 0x7f9f...
      </motion.div>
    </motion.div>
  );
};
