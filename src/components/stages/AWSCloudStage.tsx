import { motion } from "framer-motion";
import { Cloud, Shield, Server, Key, Database, Bot } from "lucide-react";

interface AWSCloudStageProps {
  delay?: number;
}

export const AWSCloudStage = ({ delay = 0 }: AWSCloudStageProps) => {
  const services = [
    { icon: Shield, name: "IoT Core", desc: "Device Gateway", position: "top" },
    { icon: Server, name: "EC2", desc: "Processing Engine", position: "left" },
    { icon: Key, name: "KMS", desc: "Key Management", position: "right" },
    { icon: Database, name: "S3", desc: "Data Storage", position: "bottom-left" },
    { icon: Bot, name: "SageMaker", desc: "ML Inference", position: "bottom-right" },
  ];

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Cloud shape background */}
      <motion.div
        className="absolute -inset-4 rounded-3xl"
        style={{
          background: "radial-gradient(ellipse at center, hsl(189 100% 50% / 0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="glass-card-cyan w-[280px] relative">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Cloud className="w-6 h-6 text-primary" />
          <h3 className="font-orbitron text-sm text-primary font-bold tracking-wider">
            AWS CLOUD
          </h3>
        </div>

        {/* Services grid */}
        <div className="relative h-[180px]">
          {/* Center connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            {/* IoT Core to EC2 */}
            <motion.line
              x1="50%" y1="25%" x2="25%" y2="50%"
              stroke="hsl(189 100% 50% / 0.4)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: delay + 0.5 }}
            />
            {/* IoT Core to KMS */}
            <motion.line
              x1="50%" y1="25%" x2="75%" y2="50%"
              stroke="hsl(189 100% 50% / 0.4)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: delay + 0.6 }}
            />
            {/* EC2 to KMS */}
            <motion.line
              x1="25%" y1="50%" x2="75%" y2="50%"
              stroke="hsl(189 100% 50% / 0.4)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: delay + 0.7 }}
            />
            {/* EC2 to S3 */}
            <motion.line
              x1="25%" y1="50%" x2="30%" y2="85%"
              stroke="hsl(189 100% 50% / 0.4)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: delay + 0.8 }}
            />
            {/* KMS to SageMaker */}
            <motion.line
              x1="75%" y1="50%" x2="70%" y2="85%"
              stroke="hsl(189 100% 50% / 0.4)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: delay + 0.9 }}
            />
          </svg>

          {/* Service bubbles */}
          {services.map((service, i) => {
            const positions: Record<string, string> = {
              "top": "top-0 left-1/2 -translate-x-1/2",
              "left": "top-1/2 left-0 -translate-y-1/2",
              "right": "top-1/2 right-0 -translate-y-1/2",
              "bottom-left": "bottom-0 left-[15%]",
              "bottom-right": "bottom-0 right-[15%]",
            };

            return (
              <motion.div
                key={service.name}
                className={`absolute ${positions[service.position]} z-10`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.3 + i * 0.1, type: "spring" }}
              >
                <motion.div
                  className="flex flex-col items-center gap-1 p-2 rounded-lg bg-background/60 border border-primary/30 backdrop-blur-sm"
                  animate={{ boxShadow: ["0 0 10px hsl(189 100% 50% / 0.2)", "0 0 20px hsl(189 100% 50% / 0.4)", "0 0 10px hsl(189 100% 50% / 0.2)"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="text-[9px] font-bold text-foreground">{service.name}</span>
                  <span className="text-[7px] text-muted-foreground">{service.desc}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
