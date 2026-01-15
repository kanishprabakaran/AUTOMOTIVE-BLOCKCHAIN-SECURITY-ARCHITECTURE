import { motion } from "framer-motion";
import { VehicleStage } from "./stages/VehicleStage";
import { RaspberryPiStage } from "./stages/RaspberryPiStage";
import { AWSCloudStage } from "./stages/AWSCloudStage";
import { BlockchainStage } from "./stages/BlockchainStage";
import { VerificationStage } from "./stages/VerificationStage";
import { FlowLine } from "./FlowLine";

export const ArchitectureFlow = () => {
  return (
    <div className="flex items-center justify-center gap-2 lg:gap-4 px-4">
      {/* Vehicle Stage */}
      <VehicleStage delay={0.2} />

      {/* Flow Line 1 */}
      <div className="w-12 lg:w-20 flex-shrink-0">
        <FlowLine color="cyan" delay={0.5} />
      </div>

      {/* Raspberry Pi Stage */}
      <RaspberryPiStage delay={0.4} />

      {/* Flow Line 2 */}
      <div className="w-12 lg:w-20 flex-shrink-0">
        <FlowLine color="cyan" delay={0.8} />
      </div>

      {/* AWS Cloud Stage */}
      <AWSCloudStage delay={0.6} />

      {/* Flow Line 3 - splits */}
      <div className="relative w-12 lg:w-16 h-32 flex-shrink-0">
        {/* Main line */}
        <div className="absolute left-0 top-1/2 w-1/2 h-0.5" style={{ background: "hsl(189 100% 50% / 0.4)" }} />
        
        {/* Split point */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ boxShadow: "0 0 10px hsl(189 100% 50%)" }}
        />
        
        {/* Top branch - purple */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-1/2 h-0.5 origin-left"
          style={{ 
            background: "hsl(274 100% 65% / 0.4)",
            transform: "rotate(-30deg)",
          }}
        />
        
        {/* Bottom branch - green */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-1/2 h-0.5 origin-left"
          style={{ 
            background: "hsl(153 100% 50% / 0.4)",
            transform: "rotate(30deg)",
          }}
        />

        {/* Animated dots on branches */}
        {[0, 1].map((i) => (
          <motion.div
            key={`top-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              background: "hsl(274 100% 65%)",
              boxShadow: "0 0 8px hsl(274 100% 65%)",
            }}
            animate={{
              x: [0, 30],
              y: [0, -18],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 1.2 + i * 0.6,
              repeat: Infinity,
            }}
          />
        ))}
        {[0, 1].map((i) => (
          <motion.div
            key={`bottom-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              background: "hsl(153 100% 50%)",
              boxShadow: "0 0 8px hsl(153 100% 50%)",
            }}
            animate={{
              x: [0, 30],
              y: [0, 18],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 1.4 + i * 0.6,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Blockchain Stage */}
      <BlockchainStage delay={0.8} />

      {/* Flow Line 4 - merges */}
      <div className="relative w-12 lg:w-16 h-32 flex-shrink-0">
        {/* Top branch merging */}
        <motion.div
          className="absolute right-1/2 top-[35%] w-1/2 h-0.5 origin-right"
          style={{ 
            background: "hsl(274 100% 65% / 0.4)",
            transform: "rotate(30deg)",
          }}
        />
        
        {/* Bottom branch merging */}
        <motion.div
          className="absolute right-1/2 bottom-[35%] w-1/2 h-0.5 origin-right"
          style={{ 
            background: "hsl(153 100% 50% / 0.4)",
            transform: "rotate(-30deg)",
          }}
        />

        {/* Merge point */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warning"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ boxShadow: "0 0 10px hsl(45 100% 50%)" }}
        />

        {/* Final line to verification */}
        <div className="absolute right-0 top-1/2 w-1/2 h-0.5" style={{ background: "hsl(45 100% 50% / 0.4)" }} />

        {/* Animated dots */}
        {[0, 1].map((i) => (
          <motion.div
            key={`merge-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              background: "hsl(45 100% 50%)",
              boxShadow: "0 0 8px hsl(45 100% 50%)",
            }}
            animate={{
              x: [0, 25],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              delay: 1.8 + i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Verification Stage */}
      <VerificationStage delay={1} />
    </div>
  );
};
