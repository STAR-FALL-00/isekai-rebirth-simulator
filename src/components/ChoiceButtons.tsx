import { motion } from 'framer-motion';

interface Choice {
  text: string;
  onClick: () => void;
}

interface ChoiceButtonsProps {
  choices: Choice[];
  color?: string;
  disabled?: boolean;
}

export default function ChoiceButtons({ choices, color = '#D4A843', disabled = false }: ChoiceButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      {choices.map((choice, i) => (
        <motion.button
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: i * 0.2,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
          }}
          whileHover={disabled ? undefined : { scale: 1.02 }}
          whileTap={disabled ? undefined : { scale: 0.97 }}
          onClick={() => {
            if (!disabled) choice.onClick();
          }}
          disabled={disabled}
          className={`flex-1 border rounded-xl px-5 py-4 text-left font-body transition-all duration-200 ${
            disabled
              ? 'bg-bg-tertiary/50 border-border-subtle/50 text-text-muted cursor-not-allowed opacity-60'
              : 'bg-bg-tertiary border-border-subtle text-text-primary hover:border-opacity-100 cursor-pointer'
          }`}
          style={{ '--hover-color': color } as React.CSSProperties}
          onMouseEnter={(e) => {
            if (disabled) return;
            (e.currentTarget as HTMLElement).style.borderColor = color;
            (e.currentTarget as HTMLElement).style.backgroundColor = `${color}15`;
          }}
          onMouseLeave={(e) => {
            if (disabled) return;
            (e.currentTarget as HTMLElement).style.borderColor = '';
            (e.currentTarget as HTMLElement).style.backgroundColor = '';
          }}
        >
          {choice.text}
        </motion.button>
      ))}
    </div>
  );
}
