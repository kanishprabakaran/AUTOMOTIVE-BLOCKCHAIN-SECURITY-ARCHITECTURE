import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { OTACircle } from "@/components/OTACircle";
import { StatusIndicators } from "@/components/StatusIndicators";
import { TechStackBadges } from "@/components/TechStackBadges";
import { TechBadge } from "@/components/TechBadge";
import { 
  Lock, Key, Radio, Globe, Zap, Shield, RefreshCw, BarChart3, Hexagon
} from "lucide-react";

const Index = () => {
  const floatingBadges = [
    { icon: Lock, label: "Merkle Tree Cryptography", position: "top-[18%] left-[3%]" },
    { icon: Key, label: "AWS KMS Encryption", position: "top-[25%] right-[3%]" },
    { icon: Radio, label: "MQTT Protocol", position: "bottom-[28%] left-[2%]" },
    { icon: Globe, label: "Dual-DLT Architecture", position: "top-[35%] left-[8%]" },
    { icon: Zap, label: "Real-Time Processing", position: "bottom-[35%] right-[3%]" },
    { icon: Shield, label: "Military-Grade Security", position: "top-[40%] right-[6%]" },
    { icon: RefreshCw, label: "SHA-256 Hashing", position: "bottom-[22%] right-[8%]" },
    { icon: BarChart3, label: "Batch Processing", position: "bottom-[25%] left-[6%]" },
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col">
        
        {/* TOP SECTION - Header (15%) */}
        <header className="h-[15%] flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Hexagon 
                className="w-10 h-10 text-primary" 
                strokeWidth={1.5}
                style={{ filter: "drop-shadow(0 0 10px hsl(189 100% 50% / 0.8))" }}
              />
            </motion.div>
            <div>
              <p className="font-orbitron text-sm text-primary font-bold tracking-wider">AUTOCHAIN</p>
              <p className="text-[9px] text-muted-foreground">SECURITY SYSTEMS</p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="text-center flex-1 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-orbitron text-2xl lg:text-4xl font-bold gradient-headline tracking-wide">
              AUTOMOTIVE BLOCKCHAIN SECURITY ARCHITECTURE
            </h1>
            <motion.p
              className="text-sm lg:text-base text-muted-foreground mt-2 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Real-Time Data Integrity from Road to Ledger
            </motion.p>
          </motion.div>

          {/* Status Indicators */}
          <StatusIndicators />
        </header>

        {/* MAIN CENTER - Architecture Flow (70%) */}
        <main className="h-[70%] flex items-center justify-center relative">
          <ArchitectureFlow />

          {/* Floating Tech Badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className={`absolute ${badge.position} hidden xl:block`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
            >
              <TechBadge icon={badge.icon} label={badge.label} delay={1 + i * 0.1} />
            </motion.div>
          ))}
        </main>

        {/* BOTTOM SECTION - OTA Loop & Footer (15%) */}
        <footer className="h-[15%] flex items-center justify-between px-6 lg:px-12">
          {/* Tech Stack Badges */}
          <TechStackBadges />

          {/* OTA Circle */}
          <div className="flex-1 flex justify-center">
            <OTACircle />
          </div>

          {/* Footer Text */}
          <motion.div
            className="text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="text-[10px] text-muted-foreground/60">
              Powered by <span className="text-primary">AWS</span> | Secured by <span className="text-secondary">Blockchain</span>
            </p>
            <p className="text-[8px] text-muted-foreground/40 mt-1">
              © 2024 AutoChain Security Systems
            </p>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
