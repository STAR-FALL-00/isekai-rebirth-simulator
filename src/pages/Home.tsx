import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ─── Floating World Orb Data ─── */
const worldOrbs = [
  { color: '#2DD4A0', name: '修仙界' },
  { color: '#9B6BFF', name: '魔法大陆' },
  { color: '#00D4FF', name: '科幻星际' },
  { color: '#FF6B2D', name: '末日废土' },
  { color: '#FF2D55', name: '古代武侠' },
];

/* ─── Particle Field Component ─── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      phase: number;
    }

    const particles: Particle[] = [];
    const COUNT = 80;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: 2 + Math.random() * 4,
          alpha: 0.15 + Math.random() * 0.25,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    let mouseX = -1000;
    let mouseY = -1000;

    function onMouse(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const time = Date.now() * 0.001;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy + Math.sin(time + p.phase) * 0.15;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120 * 0.8;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 67, ${p.alpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 67, ${p.alpha * 0.15})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  );
}

/* ─── Home Page ─── */
export default function Home() {
  const titleChars = '异世界转生模拟器'.split('');

  return (
    <div className="relative min-h-[100dvh] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/home-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 26, 0.7) 100%)',
          }}
        />
      </div>

      {/* Particle Layer */}
      <ParticleField />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center px-4" style={{ marginTop: '-5vh' }}>
        {/* Title with character stagger animation */}
        <motion.div
          className="flex justify-center mb-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
          }}
        >
          {titleChars.map((char, i) => (
            <motion.span
              key={i}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-text-primary text-glow-gold inline-block"
              style={{ letterSpacing: '0.15em' }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="font-body text-sm sm:text-base text-text-secondary italic mb-8 sm:mb-10"
          style={{ letterSpacing: '0.2em' }}
        >
          踏上万劫轮回之路，书写属于你的传奇
        </motion.p>

        {/* Primary Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="mb-6"
        >
          <Link to="/rebirth">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-[200px] sm:w-[240px] h-12 sm:h-14 rounded-[28px] font-body text-lg sm:text-xl font-bold text-[#0A0A1A] flex items-center justify-center gap-2 transition-shadow duration-300"
              style={{
                background: 'linear-gradient(135deg, #D4A843, #B8922F)',
                border: '1px solid rgba(212, 168, 67, 0.5)',
                boxShadow: '0 4px 20px rgba(212, 168, 67, 0.3), 0 0 40px rgba(212, 168, 67, 0.1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 30px rgba(212, 168, 67, 0.5), 0 0 60px rgba(212, 168, 67, 0.2)';
                (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #E0B854, #C49E3A)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(212, 168, 67, 0.3), 0 0 40px rgba(212, 168, 67, 0.1)';
                (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #D4A843, #B8922F)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              开始转生
            </motion.button>
          </Link>
        </motion.div>

        {/* Secondary Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 1.2 } },
          }}
        >
          {[
            { to: '/gallery', icon: '📖', label: '图鉴' },
            { to: '/leaderboard', icon: '🏆', label: '排行榜' },
            { to: '#', icon: '⚙️', label: '设置' },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
                },
              }}
            >
              <Link to={item.to}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-[120px] h-11 rounded-[22px] glass-panel font-body text-sm font-bold text-text-primary flex items-center justify-center gap-2 hover:border-border-glow hover:bg-[rgba(26,26,58,0.8)] transition-all duration-200"
                >
                  <span className="text-text-secondary group-hover:text-text-primary">{item.icon}</span>
                  {item.label}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating World Orbs */}
        <motion.div
          className="flex items-center gap-4 sm:gap-6 mt-12 sm:mt-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 1.4 } },
          }}
        >
          {worldOrbs.map((orb, i) => (
            <motion.div
              key={orb.name}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
                },
              }}
              className="group relative"
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
              }}
            >
              <div
                className="w-6 h-6 rounded-full cursor-default transition-transform duration-200 group-hover:scale-150"
                style={{
                  backgroundColor: orb.color,
                  boxShadow: `0 0 12px ${orb.color}40`,
                }}
              />
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-body text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {orb.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Version */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.4 }}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 font-mono text-[11px] text-text-muted"
      >
        v1.0.0
      </motion.span>
    </div>
  );
}
