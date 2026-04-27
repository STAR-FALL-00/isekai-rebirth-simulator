import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(-1)}
      className="w-10 h-10 rounded-full flex items-center justify-center border border-border-subtle bg-bg-tertiary text-text-secondary hover:text-text-primary hover:border-border-glow transition-colors duration-150"
      aria-label="返回"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    </motion.button>
  );
}
