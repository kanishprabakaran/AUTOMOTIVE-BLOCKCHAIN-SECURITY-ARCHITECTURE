import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TechBadgeProps {
  icon: LucideIcon;
  label: string;
  delay?: number;
  className?: string;
}

export const TechBadge = ({ icon: Icon, label, delay = 0, className = "" }: TechBadgeProps) => {
  return (
    <motion.div
      className={`tech-badge ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring" }}
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="w-3 h-3 text-primary" />
      <span className="text-muted-foreground">{label}</span>
    </motion.div>
  );
};
