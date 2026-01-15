import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const StatusIndicators = () => {
  const [transactions, setTransactions] = useState(1247893);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransactions((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Transactions", value: transactions.toLocaleString(), color: "primary" },
    { label: "Uptime", value: "99.99%", color: "accent" },
    { label: "Avg Latency", value: "127ms", color: "primary" },
  ];

  return (
    <motion.div
      className="glass-card flex flex-col gap-2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2 }}
    >
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex items-center gap-2">
          <motion.div
            className={`status-dot-active`}
            style={{
              background: stat.color === "accent" ? "hsl(var(--accent))" : "hsl(var(--primary))",
              boxShadow: stat.color === "accent" 
                ? "0 0 8px hsl(var(--accent))" 
                : "0 0 8px hsl(var(--primary))",
            }}
          />
          <span className="text-[9px] text-muted-foreground">{stat.label}:</span>
          <motion.span
            className={`text-[10px] font-bold ${stat.color === "accent" ? "text-accent" : "text-primary"}`}
            key={stat.value}
            initial={stat.label === "Transactions" ? { scale: 1.1 } : {}}
            animate={{ scale: 1 }}
          >
            {stat.value}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};
