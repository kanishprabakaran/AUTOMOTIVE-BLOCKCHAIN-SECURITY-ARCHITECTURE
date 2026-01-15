import { motion } from "framer-motion";
import { Wrench, FileKey, Upload, Rocket, ShieldCheck, FileText, ArrowRight } from "lucide-react";

export const OTACompact = () => {
  const steps = [
    { icon: Wrench, label: "Build" },
    { icon: FileKey, label: "Sign" },
    { icon: Upload, label: "Upload" },
    { icon: Rocket, label: "Deploy" },
    { icon: ShieldCheck, label: "Verify" },
    { icon: FileText, label: "Report" },
  ];

  return (
    <motion.div
      className="glass-card py-3 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <div className="flex items-center gap-3">
        {/* Title */}
        <div className="text-center pr-3 border-r border-primary/20">
          <p className="font-orbitron text-[8px] text-primary font-bold tracking-wider">SECURE OTA</p>
          <p className="font-orbitron text-[8px] text-primary font-bold tracking-wider">UPDATES</p>
          <span className="tech-badge text-[7px] mt-1 py-0.5 px-1.5">📡 MQTT</span>
        </div>

        {/* Horizontal flow */}
        <div className="flex items-center gap-1">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <motion.div
                className="flex flex-col items-center gap-0.5"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.08, type: "spring" }}
              >
                <motion.div
                  className="w-7 h-7 rounded-full bg-background/80 border border-primary/40 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 5px hsl(189 100% 50% / 0.2)",
                      "0 0 12px hsl(189 100% 50% / 0.5)",
                      "0 0 5px hsl(189 100% 50% / 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                >
                  <step.icon className="w-3 h-3 text-primary" strokeWidth={2} />
                </motion.div>
                <span className="text-[7px] text-muted-foreground whitespace-nowrap">
                  {step.label}
                </span>
              </motion.div>
              
              {i < steps.length - 1 && (
                <motion.div
                  className="mx-1"
                  animate={{ x: [0, 3, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                >
                  <ArrowRight className="w-2.5 h-2.5 text-primary/60" />
                </motion.div>
              )}
            </div>
          ))}
          
          {/* Loop back indicator */}
          <motion.div
            className="ml-2 flex items-center gap-1 text-[8px] text-accent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>↻</span>
            <span>LOOP</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
