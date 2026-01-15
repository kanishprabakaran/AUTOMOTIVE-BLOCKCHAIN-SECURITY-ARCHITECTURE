import { motion } from "framer-motion";
import { Wrench, FileKey, Upload, Rocket, ShieldCheck, FileText } from "lucide-react";

export const OTACircle = () => {
  const steps = [
    { icon: Wrench, label: "Build" },
    { icon: FileKey, label: "Sign" },
    { icon: Upload, label: "Upload" },
    { icon: Rocket, label: "Deploy" },
    { icon: ShieldCheck, label: "Verify" },
    { icon: FileText, label: "Report" },
  ];

  const radius = 70;
  const centerX = 90;
  const centerY = 90;

  return (
    <motion.div
      className="glass-card relative w-[180px] h-[180px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="font-orbitron text-[9px] text-primary font-bold">SECURE</p>
          <p className="font-orbitron text-[9px] text-primary font-bold">OTA UPDATES</p>
        </div>
      </div>

      {/* Rotating progress ring */}
      <motion.div
        className="absolute inset-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="60"
            fill="none"
            stroke="hsl(189 100% 50% / 0.1)"
            strokeWidth="2"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="60"
            fill="none"
            stroke="hsl(189 100% 50% / 0.6)"
            strokeWidth="2"
            strokeDasharray="60 320"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Step nodes */}
      {steps.map((step, i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return (
          <motion.div
            key={step.label}
            className="absolute flex flex-col items-center"
            style={{
              left: x - 12,
              top: y - 12,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 + i * 0.1, type: "spring" }}
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-background/80 border border-primary/50 flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 5px hsl(189 100% 50% / 0.3)",
                  "0 0 15px hsl(189 100% 50% / 0.6)",
                  "0 0 5px hsl(189 100% 50% / 0.3)",
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
            <span className="text-[7px] text-muted-foreground mt-0.5 whitespace-nowrap">
              {step.label}
            </span>
          </motion.div>
        );
      })}

      {/* MQTT badge */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 tech-badge"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
      >
        📡 MQTT
      </motion.div>
    </motion.div>
  );
};
