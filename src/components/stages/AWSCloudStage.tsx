import { motion } from "framer-motion";
import { Cloud, Shield, Server, Key, Database, Bot } from "lucide-react";

interface AWSCloudStageProps {
  delay?: number;
}

export const AWSCloudStage = ({ delay = 0 }: AWSCloudStageProps) => {
  const services = [
    { icon: Shield, name: "IoT Core", desc: "Device Gateway" },
    { icon: Server, name: "EC2", desc: "Processing" },
    { icon: Key, name: "KMS", desc: "Encryption" },
    { icon: Database, name: "S3", desc: "Storage" },
    { icon: Bot, name: "SageMaker", desc: "ML Inference" },
  ];

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Glow background */}
      <motion.div
        className="absolute -inset-6 rounded-3xl"
        style={{
          background: "radial-gradient(ellipse at center, hsl(189 100% 50% / 0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="glass-card-cyan w-[240px] relative">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Cloud className="w-5 h-5 text-primary" />
          <h3 className="font-orbitron text-xs text-primary font-bold tracking-wider">
            AWS CLOUD
          </h3>
        </div>

        {/* Services - Clean Grid Layout */}
        <div className="space-y-2">
          {/* Top row - IoT Core centered */}
          <div className="flex justify-center">
            <ServiceBubble service={services[0]} index={0} delay={delay} />
          </div>

          {/* Connection lines from IoT Core down */}
          <div className="flex justify-center">
            <motion.div
              className="w-px h-3 bg-primary/40"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: delay + 0.4 }}
            />
          </div>

          {/* Middle row - EC2, KMS */}
          <div className="flex justify-center gap-6">
            <ServiceBubble service={services[1]} index={1} delay={delay} />
            <ServiceBubble service={services[2]} index={2} delay={delay} />
          </div>

          {/* Connection lines down */}
          <div className="flex justify-center gap-16">
            <motion.div
              className="w-px h-3 bg-primary/40"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: delay + 0.6 }}
            />
            <motion.div
              className="w-px h-3 bg-primary/40"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: delay + 0.6 }}
            />
          </div>

          {/* Bottom row - S3, SageMaker */}
          <div className="flex justify-center gap-6">
            <ServiceBubble service={services[3]} index={3} delay={delay} />
            <ServiceBubble service={services[4]} index={4} delay={delay} />
          </div>
        </div>

        {/* Horizontal connection line between EC2 and KMS */}
        <motion.div
          className="absolute top-[52%] left-1/2 -translate-x-1/2 w-12 h-px bg-primary/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: delay + 0.5 }}
        />
      </div>
    </motion.div>
  );
};

interface ServiceBubbleProps {
  service: { icon: React.ElementType; name: string; desc: string };
  index: number;
  delay: number;
}

const ServiceBubble = ({ service, index, delay }: ServiceBubbleProps) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      className="flex flex-col items-center gap-1 p-2 rounded-lg bg-background/60 border border-primary/30 backdrop-blur-sm min-w-[70px]"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 0.3 + index * 0.1, type: "spring" }}
      whileHover={{ scale: 1.05, borderColor: "hsl(189 100% 50% / 0.6)" }}
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 8px hsl(189 100% 50% / 0.2)",
            "0 0 16px hsl(189 100% 50% / 0.4)",
            "0 0 8px hsl(189 100% 50% / 0.2)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        className="rounded-full p-1"
      >
        <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
      </motion.div>
      <span className="text-[9px] font-bold text-foreground">{service.name}</span>
      <span className="text-[7px] text-muted-foreground">{service.desc}</span>
    </motion.div>
  );
};
