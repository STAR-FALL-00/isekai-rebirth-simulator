import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const showOnPaths = ['/gallery', '/leaderboard'];
  const shouldShow = showOnPaths.some((p) => location.pathname.startsWith(p));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!shouldShow) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6"
      style={{
        backgroundColor: scrolled ? 'rgba(10, 10, 26, 0.7)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background-color 0.3s, backdrop-filter 0.3s',
      }}
    >
      <Link to="/" className="font-display text-xl font-bold text-accent-gold tracking-wider">
        转生
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/gallery"
          className="text-sm font-body text-text-secondary hover:text-text-primary transition-colors duration-200"
        >
          图鉴
        </Link>
        <Link
          to="/leaderboard"
          className="text-sm font-body text-text-secondary hover:text-text-primary transition-colors duration-200"
        >
          排行榜
        </Link>
      </div>
    </motion.nav>
  );
}
