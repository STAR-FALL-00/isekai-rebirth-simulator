import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color: string;
  delta?: number;
}

export default function StatBar({ label, value, maxValue = 200, color, delta = 0 }: StatBarProps) {
  const [flashKey, setFlashKey] = useState(0);
  const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));
  const isPositive = delta > 0;
  const isNegative = delta < 0;

  useEffect(() => {
    if (delta !== 0) {
      setFlashKey((k) => k + 1);
    }
  }, [delta]);

  return (
    <div className="flex items-center gap-3 w-full relative">
      <span className="text-sm font-body text-text-secondary w-16 shrink-0 text-right">{label}</span>
      <div className="flex-1 h-3 bg-bg-tertiary rounded-full overflow-hidden border border-border-subtle">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}80, ${color})`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: [0.87, 0, 0.13, 1] as [number, number, number, number] }}
        />
      </div>
      <motion.span
        key={`val-${flashKey}`}
        className={`text-sm font-mono font-bold w-10 shrink-0 ${isPositive ? 'text-accent-green' : isNegative ? 'text-accent-red' : 'text-text-primary'}`}
        initial={delta !== 0 ? { scale: 1.4 } : false}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
      >
        {value}
      </motion.span>

      <AnimatePresence>
        {delta !== 0 && (
          <motion.span
            key={`float-${flashKey}`}
            initial={{ opacity: 1, y: 0, x: 0 }}
            animate={{ opacity: 0, y: -28, x: isPositive ? 8 : -8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className={`absolute right-0 -top-3 text-xs font-bold font-mono z-10 ${isPositive ? 'text-accent-green' : 'text-accent-red'}`}
          >
            {isPositive ? '+' : ''}{delta}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
