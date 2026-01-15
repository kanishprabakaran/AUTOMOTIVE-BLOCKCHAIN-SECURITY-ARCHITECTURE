import { motion } from "framer-motion";

export const TechStackBadges = () => {
  const techs = ["AWS", "Ethereum", "Polygon", "Raspberry Pi"];

  return (
    <motion.div
      className="flex gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
    >
      {techs.map((tech, i) => (
        <motion.div
          key={tech}
          className="px-3 py-1 rounded-md text-[10px] font-medium text-muted-foreground border border-primary/20 bg-background/50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 + i * 0.1 }}
          whileHover={{ 
            borderColor: "hsl(189 100% 50% / 0.6)",
            color: "hsl(189 100% 50%)",
          }}
        >
          {tech}
        </motion.div>
      ))}
    </motion.div>
  );
};
