import { motion } from "framer-motion";
import { Maximize, Minimize } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

export const FullscreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log("Fullscreen error:", err);
      });
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "f" || e.key === "F") {
        // Don't trigger if user is typing in an input
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
          return;
        }
        toggleFullscreen();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [toggleFullscreen]);

  return (
    <motion.button
      onClick={toggleFullscreen}
      className="glass-card p-2 cursor-pointer hover:border-primary/60 transition-colors group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Toggle Fullscreen (F)"
    >
      {isFullscreen ? (
        <Minimize className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      ) : (
        <Maximize className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      )}
    </motion.button>
  );
};
