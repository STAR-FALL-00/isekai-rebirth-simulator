import { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameContext } from '@/hooks/GameContext';
import { worlds } from '@/engine/worlds';
import { rebirthItems, getRarityColor, getRarityLabel, calculateWorldWeights } from '@/engine/items';
import type { World } from '@/engine/types';
import BackButton from '@/components/BackButton';

/* ── World images ── */
const worldImages: Record<string, string> = {
  cultivation: '/world-cultivation.jpg',
  magic: '/world-magic.jpg',
  scifi: '/world-scifi.jpg',
  apocalypse: '/world-apocalypse.jpg',
  wuxia: '/world-wuxia.jpg',
};

/* ── Phases ── */
type Phase = 'preparation' | 'animating' | 'result';

/* ── Animation variants ── */
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

/* ═══════════════════════════════════════════════
   Rebirth Page — 转生准备界面
   ═══════════════════════════════════════════════ */
export default function Rebirth() {
  const navigate = useNavigate();
  const { state, startGame, equipItem, unequipItem } = useGameContext();
  const [phase, setPhase] = useState<Phase>('preparation');
  const [revealedWorld, setRevealedWorld] = useState<World | null>(null);
  const [revealedIdentity, setRevealedIdentity] = useState<string>('');
  const [shuffleIndex, setShuffleIndex] = useState(0);
  const shuffleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Calculate world probability preview ── */
  const weights = calculateWorldWeights(state.equippedItems, rebirthItems);
  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
  const probabilities = Object.fromEntries(
    Object.entries(weights).map(([k, v]) => [k, Math.round((v / totalWeight) * 100)])
  );

  /* ── Start the random rebirth animation ── */
  const handleStartRebirth = useCallback(() => {
    setPhase('animating');

    // Start shuffle animation
    let count = 0;
    const maxShuffles = 25; // ~3.5 seconds
    const intervalMs = 140;

    shuffleTimerRef.current = setInterval(() => {
      setShuffleIndex((prev) => (prev + 1) % worlds.length);
      count++;

      if (count >= maxShuffles) {
        if (shuffleTimerRef.current) clearInterval(shuffleTimerRef.current);

        // Execute actual random rebirth
        startGame();
        setPhase('result');
      }
    }, intervalMs);
  }, [startGame]);

  /* ── Show result after state updates ── */
  useEffect(() => {
    if (phase === 'result' && state.world && state.identity) {
      setRevealedWorld(state.world);
      setRevealedIdentity(state.identity.name);
    }
  }, [phase, state.world, state.identity]);

  /* ── Cleanup ── */
  useEffect(() => {
    return () => {
      if (shuffleTimerRef.current) clearInterval(shuffleTimerRef.current);
    };
  }, []);

  /* ── Enter game ── */
  const handleEnterGame = useCallback(() => {
    navigate('/play');
  }, [navigate]);

  /* ── Equipped items ── */
  const equippedItemList = rebirthItems.filter((item) => state.equippedItems.includes(item.id));
  const inventoryItems = state.inventory.filter((item) => !state.equippedItems.includes(item.id));

  /* ═══════════════════════════════════════════ */
  return (
    <div className="flex-1 flex flex-col relative overflow-hidden" style={{ backgroundColor: '#0A0A1A' }}>

      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {worlds.map((w, i) => (
          <motion.div
            key={w.id}
            className="absolute rounded-full"
            style={{
              width: '350px', height: '350px',
              backgroundColor: w.themeColor,
              filter: 'blur(140px)', opacity: 0.025,
              left: `${8 + i * 20}%`,
              top: i % 2 === 0 ? '15%' : '55%',
            }}
            animate={{ opacity: [0.015, 0.05, 0.015] }}
            transition={{ duration: 8, repeat: Infinity, delay: i * 1.5, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">

        {/* ═══════════ PHASE: PREPARATION ═══════════ */}
        {phase === 'preparation' && (
          <motion.div
            key="prep"
            initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="flex-1 flex flex-col items-center relative z-10 px-4 py-6 overflow-y-auto"
          >
            {/* Header */}
            <motion.div variants={fadeIn} className="text-center mb-6 mt-4">
              <div className="absolute top-4 left-4">
                <BackButton />
              </div>
              <h1 className="font-display text-3xl font-bold text-text-primary tracking-widest mb-2">
                准备转生
              </h1>
              <p className="font-body text-sm text-text-secondary">
                装备道具以影响你的转生命运，然后踏入轮回之门
              </p>
            </motion.div>

            <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-4 sm:gap-6">

              {/* ── Left: Equipped Items + Start Button ── */}
              <motion.div variants={fadeIn} className="flex-1 flex flex-col gap-5">

                {/* Equipped Items Area */}
                <div
                  className="rounded-2xl p-5 border border-border-subtle"
                  style={{ backgroundColor: '#12122A' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-lg font-bold text-text-primary tracking-wide">
                      已装备道具
                      <span className="text-xs font-body text-text-muted ml-2 font-normal">
                        ({state.equippedItems.length}/3)
                      </span>
                    </h2>
                    <span className="text-[10px] font-body text-text-muted">
                      道具在转生后被消耗
                    </span>
                  </div>

                  {/* Equipped slots */}
                  <div className="grid grid-cols-3 gap-3">
                    {[0, 1, 2].map((slotIdx) => {
                      const item = equippedItemList[slotIdx];
                      return (
                        <div
                          key={slotIdx}
                          className="aspect-square rounded-xl border border-dashed border-border-subtle flex flex-col items-center justify-center relative overflow-hidden"
                          style={{
                            backgroundColor: item ? `${getRarityColor(item.rarity)}11` : '#0A0A1A',
                            borderColor: item ? `${getRarityColor(item.rarity)}44` : '#2A2A5A',
                            borderStyle: item ? 'solid' : 'dashed',
                          }}
                        >
                          {item ? (
                            <>
                              <button
                                onClick={() => unequipItem(item.id)}
                                className="absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-text-muted hover:text-accent-red hover:bg-accent-red/10 transition-colors"
                                title="卸下"
                              >
                                ✕
                              </button>
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center mb-1"
                                style={{ backgroundColor: `${getRarityColor(item.rarity)}22` }}
                              >
                                <span className="text-lg">
                                  {item.rarity === 'legendary' ? '🔮' : item.rarity === 'epic' ? '💎' : item.rarity === 'rare' ? '🔷' : '📦'}
                                </span>
                              </div>
                              <span
                                className="text-[10px] font-body font-bold text-center px-1 leading-tight"
                                style={{ color: getRarityColor(item.rarity) }}
                              >
                                {item.name}
                              </span>
                            </>
                          ) : (
                            <span className="text-xs text-text-muted">空</span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* World probability preview */}
                  <div className="mt-4 pt-4 border-t border-border-subtle/50">
                    <h3 className="text-[11px] font-body text-text-muted mb-2 tracking-wider">
                      转生概率预览
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {worlds.map((w) => (
                        <div
                          key={w.id}
                          className="flex items-center gap-1.5 px-2 py-1 rounded-lg"
                          style={{ backgroundColor: `${w.themeColor}11` }}
                        >
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: w.themeColor }}
                          />
                          <span className="text-[10px] font-body" style={{ color: w.themeColor }}>
                            {w.name}
                          </span>
                          <span className="text-[10px] font-mono text-text-secondary ml-0.5">
                            {probabilities[w.id] ?? 20}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Start Rebirth Button */}
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(212,168,67,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleStartRebirth}
                  className="w-full py-4 rounded-2xl font-display text-xl font-bold tracking-widest transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #D4A843 0%, #B8922E 100%)',
                    color: '#0A0A1A',
                    boxShadow: '0 4px 24px rgba(212,168,67,0.25)',
                  }}
                >
                  🌀 踏入轮回之门
                </motion.button>

                {/* Hint */}
                <p className="text-center text-[11px] font-body text-text-muted">
                  {state.equippedItems.length > 0
                    ? `已装备 ${state.equippedItems.length} 个道具，转生后将自动消耗`
                    : '未装备道具，转生将完全随机'}
                </p>
              </motion.div>

              {/* ── Right: Inventory ── */}
              <motion.div variants={staggerContainer} className="flex-1 lg:max-w-md">
                <div
                  className="rounded-2xl p-5 border border-border-subtle h-full"
                  style={{ backgroundColor: '#12122A' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-lg font-bold text-text-primary tracking-wide">
                      道具仓库
                      <span className="text-xs font-body text-text-muted ml-2 font-normal">
                        ({state.inventory.length})
                      </span>
                    </h2>
                    <span className="text-[10px] font-body text-text-muted">
                      每次转生有20%概率获得新道具
                    </span>
                  </div>

                  {inventoryItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <span className="text-3xl mb-3 opacity-30">📭</span>
                      <p className="text-sm font-body text-text-muted">暂无可用道具</p>
                      <p className="text-[11px] font-body text-text-muted mt-1">
                        进行转生来收集道具
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-2 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
                      {inventoryItems.map((item) => (
                        <motion.div
                          key={item.id}
                          variants={fadeIn}
                          className="flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 group"
                          style={{
                            backgroundColor: '#0A0A1A',
                            borderColor: '#2A2A5A',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = `${getRarityColor(item.rarity)}66`;
                            e.currentTarget.style.backgroundColor = `${getRarityColor(item.rarity)}08`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#2A2A5A';
                            e.currentTarget.style.backgroundColor = '#0A0A1A';
                          }}
                        >
                          {/* Icon */}
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${getRarityColor(item.rarity)}22` }}
                          >
                            <span>
                              {item.rarity === 'legendary' ? '🔮' : item.rarity === 'epic' ? '💎' : item.rarity === 'rare' ? '🔷' : '📦'}
                            </span>
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span
                                className="text-sm font-body font-bold"
                                style={{ color: getRarityColor(item.rarity) }}
                              >
                                {item.name}
                              </span>
                              <span
                                className="text-[9px] px-1.5 py-0.5 rounded-full font-body"
                                style={{
                                  backgroundColor: `${getRarityColor(item.rarity)}22`,
                                  color: getRarityColor(item.rarity),
                                }}
                              >
                                {getRarityLabel(item.rarity)}
                              </span>
                            </div>
                            <p className="text-[11px] font-body text-text-secondary mt-0.5 leading-relaxed line-clamp-2">
                              {item.description}
                            </p>
                          </div>

                          {/* Equip button */}
                          <button
                            onClick={() => {
                              if (state.equippedItems.length < 3) {
                                equipItem(item.id);
                              }
                            }}
                            disabled={state.equippedItems.length >= 3}
                            className="shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-body font-bold transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                            style={{
                              backgroundColor: state.equippedItems.length < 3 ? `${getRarityColor(item.rarity)}22` : 'transparent',
                              color: state.equippedItems.length < 3 ? getRarityColor(item.rarity) : '#4A4A7A',
                              border: `1px solid ${state.equippedItems.length < 3 ? `${getRarityColor(item.rarity)}44` : '#2A2A5A'}`,
                            }}
                          >
                            {state.equippedItems.length >= 3 ? '已满' : '装备'}
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ═══════════ PHASE: ANIMATING ═══════════ */}
        {phase === 'animating' && (
          <motion.div
            key="animating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center relative z-10"
          >
            {/* Title */}
            <motion.h2
              className="font-display text-2xl font-bold text-text-primary tracking-widest mb-8"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              命运轮转中...
            </motion.h2>

            {/* Shuffling world cards */}
            <div className="relative w-[min(320px,85vw)] h-[min(420px,55vh)]">
              <AnimatePresence mode="popLayout">
                {worlds.map((world, idx) => {
                  const isActive = idx === shuffleIndex;
                  return (
                    <motion.div
                      key={world.id}
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      style={{
                        border: `3px solid ${world.themeColor}`,
                        boxShadow: isActive ? `0 0 60px ${world.themeColor}66` : 'none',
                        zIndex: isActive ? 10 : 1,
                      }}
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : 0.7,
                        opacity: isActive ? 1 : 0,
                        rotateY: isActive ? 0 : 15,
                      }}
                      transition={{ duration: 0.12, ease: 'easeOut' }}
                    >
                      <img
                        src={worldImages[world.id]}
                        alt={world.name}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0 flex items-end p-6"
                        style={{
                          background: 'linear-gradient(to top, #0A0A1A 0%, transparent 60%)',
                        }}
                      >
                        <h3
                          className="font-display text-3xl font-bold"
                          style={{ color: world.themeColor }}
                        >
                          {world.name}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Shuffling particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-accent-gold"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* ═══════════ PHASE: RESULT ═══════════ */}
        {phase === 'result' && revealedWorld && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col items-center justify-center relative z-10 px-6"
          >
            {/* Success text */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mb-6"
            >
              <h2 className="font-display text-xl font-bold text-accent-gold tracking-widest mb-1">
                转生成功
              </h2>
              <p className="font-body text-sm text-text-secondary">
                你的灵魂已经降临新的世界
              </p>
            </motion.div>

            {/* World card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
              className="w-[min(320px,90vw)] rounded-2xl overflow-hidden mb-6"
              style={{
                border: `3px solid ${revealedWorld.themeColor}`,
                boxShadow: `0 0 60px ${revealedWorld.themeColor}44, 0 20px 60px rgba(0,0,0,0.5)`,
              }}
            >
              <div className="relative h-[180px] sm:h-[220px]">
                <img
                  src={worldImages[revealedWorld.id]}
                  alt={revealedWorld.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center"
                  style={{
                    background: 'linear-gradient(to top, #0A0A1A 0%, transparent 50%)',
                  }}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="font-display text-3xl font-bold mb-1"
                    style={{ color: revealedWorld.themeColor }}
                  >
                    {revealedWorld.name}
                  </motion.h3>
                </div>
              </div>

              {/* Identity info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="p-5 text-center"
                style={{ backgroundColor: '#12122A' }}
              >
                <p className="text-[11px] font-body text-text-muted mb-1">你的身份</p>
                <p className="font-display text-xl font-bold text-text-primary mb-2">
                  {revealedIdentity}
                </p>
                <p className="text-xs font-body text-text-secondary">
                  {state.identity?.description}
                </p>

                {/* Equipped items consumed notice */}
                {state.equippedItems.length === 0 && equippedItemList.length > 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-[10px] font-body text-accent-gold mt-3"
                  >
                    道具效果已应用于本次转生
                  </motion.p>
                )}
              </motion.div>
            </motion.div>

            {/* Enter game button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${revealedWorld.themeColor}44` }}
              whileTap={{ scale: 0.97 }}
              onClick={handleEnterGame}
              className="px-10 py-3.5 rounded-2xl font-display text-lg font-bold tracking-widest transition-all duration-300"
              style={{
                backgroundColor: revealedWorld.themeColor,
                color: '#0A0A1A',
                boxShadow: `0 4px 24px ${revealedWorld.themeColor}33`,
              }}
            >
              开启新的人生 →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
