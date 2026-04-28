import { motion } from 'framer-motion';
import type { Stats } from '@/engine/types';

interface EventCardProps {
  age: number;
  text: string;
  effects?: Partial<Stats>;
  color?: string;
}

export default function EventCard({ age, text, effects, color = '#D4A843' }: EventCardProps) {
  const statEntries = effects ? Object.entries(effects).filter(([, v]) => v !== 0) : [];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="bg-bg-secondary border border-border-subtle rounded-xl p-4 sm:p-5 shadow-lg"
      style={{ boxShadow: `0 4px 20px ${color}15` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-xs font-mono font-bold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: `${color}25`, color }}
        >
          {age}岁
        </span>
      </div>

      <p className="text-sm sm:text-base font-body text-text-primary leading-relaxed mb-3" style={{ whiteSpace: 'pre-wrap' }}>{text}</p>

      {statEntries.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {statEntries.map(([key, val]) => (
            <span
              key={key}
              className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                (val ?? 0) > 0 ? 'text-accent-green' : 'text-accent-red'
              }`}
              style={{ backgroundColor: (val ?? 0) > 0 ? 'rgba(75, 200, 138, 0.15)' : 'rgba(200, 75, 75, 0.15)' }}
            >
              {(val ?? 0) > 0 ? '+' : ''}{val}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
