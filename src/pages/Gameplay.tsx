import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameContext } from '@/hooks/GameContext';
import type { Stats } from '@/engine/types';
import { TALENT_DISTRIBUTION, TALENT_COLORS } from '@/engine/types';
import { getAvailableEvents, pickEvent } from '@/engine/events';
import StatBar from '@/components/StatBar';
import EventCard from '@/components/EventCard';
import ChoiceButtons from '@/components/ChoiceButtons';

/* ───────────────────── typewriter hook ───────────────────── */

function useTypewriter(text: string, speed: number, enabled: boolean) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setDisplayed(text);
      setDone(true);
      return;
    }
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i >= text.length) {
        setDisplayed(text);
        setDone(true);
        clearInterval(interval);
      } else {
        setDisplayed(text.slice(0, i));
      }
    }, 1000 / speed);
    return () => clearInterval(interval);
  }, [text, speed, enabled]);

  return { displayed, done };
}

/* ───────────────────── sub-components ───────────────────── */

function TopBar({
  worldName,
  themeColor,
  age,
  health,
  maxHealth,
  statHealthName,
  autoPlay,
  setAutoPlay,
  fastForward,
  setFastForward,
  onBack,
}: {
  worldName: string;
  themeColor: string;
  age: number;
  health: number;
  maxHealth: number;
  statHealthName: string;
  autoPlay: boolean;
  setAutoPlay: (v: boolean) => void;
  fastForward: boolean;
  setFastForward: (v: boolean) => void;
  onBack: () => void;
}) {
  const hpPct = Math.max(0, Math.min(100, (health / maxHealth) * 100));
  const isLow = hpPct < 30;

  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="h-[56px] shrink-0 bg-bg-primary border-b border-border-subtle flex items-center px-4 justify-between z-20"
    >
      {/* Back + World */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-bg-tertiary border border-border-subtle flex items-center justify-center text-text-secondary hover:border-border-glow hover:text-text-primary transition-all duration-150 hover:scale-105"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div
          className="flex items-center gap-2 px-3 py-1 rounded-2xl text-sm font-bold font-body"
          style={{ backgroundColor: `${themeColor}18`, color: themeColor }}
        >
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }} />
          {worldName}
        </div>
      </div>

      {/* Age */}
      <motion.div
        key={age}
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
        className="absolute left-1/2 -translate-x-1/2 font-display text-xl font-bold text-text-primary"
      >
        第 {age} 年
      </motion.div>

      {/* HP + Speed */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end w-[140px]">
          <div className="flex items-center gap-2 text-xs font-body text-text-secondary mb-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill={isLow ? '#C84B4B' : '#4BC88A'} stroke="none">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>{statHealthName}</span>
            <span className="font-mono text-text-primary">{health}/{maxHealth}</span>
          </div>
          <div className="w-full h-2 bg-bg-tertiary rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: hpPct < 30 ? 'linear-gradient(90deg, #C84B4B, #FF6B6B)' : 'linear-gradient(90deg, #4BC88A, #2DD4A0)',
              }}
              animate={{ width: `${hpPct}%` }}
              transition={{ duration: 0.6, ease: [0.87, 0, 0.13, 1] as [number, number, number, number] }}
            />
          </div>
        </div>

        {/* Speed controls */}
        <div className="flex items-center gap-2">
          {[
            { key: 'pause', icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>), active: !autoPlay && !fastForward, onClick: () => { setAutoPlay(false); setFastForward(false); } },
            { key: 'play', icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>), active: autoPlay && !fastForward, onClick: () => { setAutoPlay(true); setFastForward(false); } },
            { key: 'ff', icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" /></svg>), active: fastForward, onClick: () => { setFastForward(true); setAutoPlay(true); } },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={btn.onClick}
              className="w-8 h-8 rounded-md flex items-center justify-center border transition-all duration-150"
              style={{
                backgroundColor: btn.active ? `${themeColor}20` : 'var(--bg-tertiary)',
                borderColor: btn.active ? themeColor : 'var(--border-subtle)',
                color: btn.active ? themeColor : 'var(--text-secondary)',
              }}
            >
              {btn.icon}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function RelationshipPanel({
  relationships,
  npcs,
  themeColor,
}: {
  relationships: Record<string, number>;
  npcs: { id: string; name: string; type: string }[];
  themeColor: string;
}) {
  const relEntries = Object.entries(relationships)
    .filter(([, val]) => val !== 0)
    .sort(([, a], [, b]) => b - a);

  const relLabel = (v: number) => {
    if (v >= 80) return '恋人';
    if (v >= 50) return '知己';
    if (v >= 20) return '朋友';
    if (v >= 0) return '相识';
    return '陌生';
  };

  return (
    <motion.div
      initial={{ x: 280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.2 }}
      className="w-[280px] shrink-0 bg-bg-secondary border-l border-border-subtle overflow-y-auto hidden lg:block"
    >
      <div className="p-5">
        <h3 className="text-xs font-bold font-body text-text-muted mb-3">羁绊</h3>
        <div className="w-full h-px bg-border-subtle mb-4" />

        {relEntries.length === 0 ? (
          <p className="text-xs font-body text-text-muted">还没有遇到重要的人...</p>
        ) : (
          <div className="space-y-4">
            {relEntries.map(([npcId, val]) => {
              const npc = npcs.find((n) => n.id === npcId);
              if (!npc) return null;
              const pct = Math.max(0, Math.min(100, ((val + 100) / 200) * 100));
              return (
                <motion.div
                  key={npcId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold font-body text-text-primary">{npc.name}</span>
                    <span className="text-[11px] font-body text-text-secondary">
                      {npc.type === 'romance' ? '💕' : npc.type === 'mentor' ? '👤' : '⚔'}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-bg-tertiary rounded-full overflow-hidden mb-1">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, backgroundColor: themeColor }}
                    />
                  </div>
                  <span className="text-[11px] font-body text-text-secondary">{relLabel(val)}</span>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Quick stats */}
      <div className="px-5 pb-5">
        <div className="w-full h-px bg-border-subtle mb-4" />
        <h3 className="text-xs font-bold font-body text-text-muted mb-3">生存统计</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-body text-text-secondary">遇到人物</span>
            <span className="font-mono text-text-primary">{relEntries.length}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────── main component ───────────────────── */

export default function Gameplay() {
  const navigate = useNavigate();
  const { state, advanceYear, selectChoice, updateStats, setEvent } = useGameContext();

  const [eventHistory, setEventHistory] = useState<Array<{ age: number; text: string; effects: Partial<Stats>; choices?: { text: string; effects: Partial<Stats>; successText?: string; failText?: string; successRate?: number; failEffects?: Partial<Stats>; flags?: string[] }[]; choiceMade?: number }>>([]);
  const [currentEvent, setCurrentEvent] = useState<{ age: number; text: string; effects: Partial<Stats>; choices?: { text: string; effects: Partial<Stats>; successText?: string; failText?: string; successRate?: number; failEffects?: Partial<Stats>; flags?: string[] }[] } | null>(null);
  const [currentChoices, setCurrentChoices] = useState<{ text: string; effects: Partial<Stats>; successText?: string; failText?: string; successRate?: number; failEffects?: Partial<Stats>; flags?: string[] }[] | null>(null);
  const [statDeltas, setStatDeltas] = useState<Partial<Stats>>({});
  const [showChoices, setShowChoices] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [fastForward, setFastForward] = useState(false);
  const [yearFlash, setYearFlash] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDying, setIsDying] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [hasRedirected, setHasRedirected] = useState(false);
  const [hasChosen, setHasChosen] = useState(false);
  const choiceMadeRef = useRef(false);

  const eventLogRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const initialized = useRef(false);

  const typewriterSpeed = fastForward ? 60 : 30;

  const { displayed: displayedText, done: typewriterDone } = useTypewriter(
    currentEvent?.text ?? '',
    typewriterSpeed,
    !!currentEvent
  );

  /* redirect if no active game */
  useEffect(() => {
    if (!state.isPlaying && !state.world && !hasRedirected) {
      setHasRedirected(true);
      navigate('/rebirth');
    }
  }, [state.isPlaying, state.world, navigate, hasRedirected]);

  /* derive world info */
  const world = state.world;
  const identity = state.identity;
  const themeColor = world?.themeColor ?? '#2DD4A0';
  const statNames = world?.statNames ?? {
    strength: '体质',
    intelligence: '悟性',
    charisma: '机缘',
    luck: '气运',
    health: '寿元',
    special: '灵根',
  };

  const statKeys = ['strength', 'intelligence', 'charisma', 'luck', 'health', 'special'] as (keyof Stats)[];

  /* initialize first event */
  useEffect(() => {
    if (!initialized.current && state.isPlaying && state.age === 0 && eventHistory.length === 0) {
      initialized.current = true;
      const birthEvent = {
        age: 0,
        text: `你转生到了${world?.name ?? '未知世界'}，成为${identity?.name ?? '无名之人'}。${identity?.description ?? ''} 你的传奇人生就此展开...`,
        effects: identity?.baseStats ?? {},
      };
      setCurrentEvent(birthEvent);
      setTypingComplete(false);
      setEventHistory([{ ...birthEvent }]);
    }
  }, [state.isPlaying, state.age, eventHistory.length, world, identity]);

  /* typewriter completion */
  useEffect(() => {
    if (typewriterDone && currentEvent) {
      setTypingComplete(true);
      // Don't re-show choices if user already made a choice
      if (hasChosen || choiceMadeRef.current) {
        setShowChoices(false);
        return;
      }
      if (currentEvent.choices && currentEvent.choices.length > 0) {
        setCurrentChoices(currentEvent.choices);
        setShowChoices(true);
      } else {
        setShowChoices(false);
        if (currentEvent.effects && Object.keys(currentEvent.effects).length > 0) {
          updateStats(currentEvent.effects);
          setStatDeltas(currentEvent.effects);
        }
      }
    }
  }, [typewriterDone, currentEvent]);

  /* auto-play timer */
  useEffect(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
    if (autoPlay && !showChoices && typingComplete && !isProcessing && !isDying && state.isPlaying) {
      const delay = fastForward ? 500 : 2000;
      autoPlayRef.current = setInterval(() => {
        handleNextYear();
      }, delay);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, fastForward, showChoices, typingComplete, isProcessing, isDying, state.isPlaying, currentEvent]);

  /* scroll to bottom of event log */
  useEffect(() => {
    if (eventLogRef.current) {
      eventLogRef.current.scrollTop = eventLogRef.current.scrollHeight;
    }
  }, [eventHistory.length]);

  /* advance to next year */
  const handleNextYear = useCallback(() => {
    if (isProcessing || isDying || !state.isPlaying) return;
    setIsProcessing(true);
    setShowChoices(false);
    setCurrentChoices(null);
    setTypingComplete(false);
    setStatDeltas({});

    // increment age via hook
    advanceYear();

    // check if should die
    const newAge = state.age + 1;
    const healthAfter = state.stats.health;
    const shouldDie = healthAfter <= 0 || newAge >= state.maxAge;

    // brief flash
    setYearFlash(true);
    setTimeout(() => setYearFlash(false), 200);

    const worldId = state.world?.id;
    const identityId = state.identity?.id;

    if (!worldId || !identityId) {
      setIsProcessing(false);
      return;
    }

    if (shouldDie) {
      const available = getAvailableEvents(worldId, newAge, state.stats, state.flags, identityId, state.talentLevel);
      const deathEvents = available.filter((e) => e.category === 'death');
      const picked = deathEvents.length > 0 ? pickEvent(deathEvents) : null;
      const deathEvent = {
        age: newAge,
        text: picked?.text ?? '你的生命力耗尽，最终离开了这个世界。',
        effects: picked?.effects ?? { health: -100 },
      };
      setCurrentEvent(deathEvent);
      setEventHistory((prev) => [...prev, { ...deathEvent }]);
      setIsDying(true);
      setIsProcessing(false);
      // redirect to ending after death animation
      setTimeout(() => {
        navigate('/ending');
      }, 6000);
      return;
    }

    // generate random event from template system based on current world
    const available = getAvailableEvents(worldId, newAge, state.stats, state.flags, identityId, state.talentLevel);
    const normalEvents = available.filter((e) => e.category !== 'death');
    const picked = pickEvent(normalEvents);

    if (picked) {
      const event = {
        age: newAge,
        text: picked.text,
        effects: picked.effects ?? {},
        choices: picked.choices?.map((c) => ({
          text: c.text,
          effects: c.effects,
          successText: c.successText,
          failText: c.failText,
          successRate: c.successRate,
          failEffects: c.failEffects,
          flags: c.flags,
        })),
      };
      setCurrentEvent(event);
      setEventHistory((prev) => [...prev, { ...event }]);
      choiceMadeRef.current = false;

      // sync to global state so selectChoice can read it
      setEvent({
        id: picked.id,
        worldId: picked.worldId,
        category: picked.category,
        minAge: newAge,
        maxAge: newAge,
        text: picked.text,
        choices: event.choices,
        effects: picked.effects,
        probability: picked.probability,
      });

      // apply passive effects (non-choice events)
      if (!event.choices && Object.keys(event.effects).length > 0) {
        updateStats(event.effects);
        setStatDeltas(event.effects);
      }
    } else {
      const fallback = {
        age: newAge,
        text: `平淡的一年过去了，你在${state.world?.name ?? '这个世界'}默默生活着。`,
        effects: { health: 1 } as Partial<Stats>,
      };
      setCurrentEvent(fallback);
      setEventHistory((prev) => [...prev, { ...fallback }]);
      updateStats(fallback.effects);
      setStatDeltas(fallback.effects);
    }

    setIsProcessing(false);
  }, [isProcessing, isDying, state.isPlaying, state.age, state.stats, state.maxAge, state.world, state.identity, state.flags, advanceYear, updateStats, setEvent, navigate]);

  /* handle choice selection */
  const handleChoice = useCallback(
    (choiceIndex: number) => {
      // Guard against double-clicks and clicks when choices are not showing
      if (choiceMadeRef.current || !showChoices || !currentEvent || !currentEvent.choices) return;
      const choice = currentEvent.choices[choiceIndex];
      if (!choice) return;

      setStatDeltas({});
      const result = selectChoice(choiceIndex);
      const actualEffects = result?.effects ?? choice.effects;
      const actualText = result?.text ?? choice.text;

      updateStats(actualEffects);
      setStatDeltas(actualEffects);

      setCurrentChoices(null);
      setShowChoices(false);
      setHasChosen(true);
      choiceMadeRef.current = true;

      // Build outcome display text
      const outcomeLine = result && actualText !== choice.text
        ? `\n【${result.success ? '成功' : '失败'}】${actualText}`
        : '';

      // Use functional update to avoid stale closure issues
      // Remove choices after selection to prevent typewriter effect from re-showing them
      setCurrentEvent((prev) => {
        if (!prev) return prev;
        return { ...prev, text: prev.text + outcomeLine, choices: undefined };
      });

      const finalText = currentEvent.text + outcomeLine;

      // update history to mark choice made
      setEventHistory((prev) => {
        const copy = [...prev];
        const last = copy[copy.length - 1];
        if (last) {
          copy[copy.length - 1] = {
            ...last,
            text: finalText,
            choiceMade: choiceIndex,
            effects: actualEffects,
            choices: currentEvent.choices,
          };
        }
        return copy;
      });

      // Add choice result flags to global state for story branching
      if (result?.success !== undefined) {
        const flagPrefix = result.success ? 'choice_success' : 'choice_fail';
        const eventFlag = `${flagPrefix}_${currentEvent.age}_${choiceIndex}`;
        // We can't easily update state.flags here without a setter,
        // but the flags from choice are already handled by selectChoice in useGame
      }

      // auto-advance after a short delay
      if (autoPlay) {
        setTimeout(() => handleNextYear(), fastForward ? 400 : 1000);
      }
    },
    [showChoices, currentEvent, selectChoice, updateStats, autoPlay, fastForward, handleNextYear]
  );

  // Reset hasChosen when a new event with choices appears
  useEffect(() => {
    if (showChoices && currentChoices && currentChoices.length > 0) {
      setHasChosen(false);
    }
  }, [showChoices, currentChoices]);

  /* skip typewriter on click */
  const skipTypewriter = useCallback(() => {
    if (!typingComplete && currentEvent) {
      // force complete by setting displayed to full text
      // we do this by toggling a state that forces typewriter to show full
      setTypingComplete(true);
      if (currentEvent.choices && currentEvent.choices.length > 0) {
        setCurrentChoices(currentEvent.choices);
        setShowChoices(true);
      }
    }
  }, [typingComplete, currentEvent]);

  /* derive age opacity for history cards */
  const getHistoryOpacity = (cardAge: number) => {
    const diff = state.age - cardAge;
    if (diff <= 1) return 1;
    if (diff <= 5) return 0.7;
    if (diff <= 10) return 0.4;
    return 0.2;
  };

  if (!world || !identity) {
    return (
      <div className="flex-1 flex items-center justify-center bg-bg-primary">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-accent-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-body text-text-secondary">正在进入转生世界...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-bg-primary overflow-hidden relative">
      {/* Year transition flash */}
      <AnimatePresence>
        {yearFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 pointer-events-none z-50"
            style={{ backgroundColor: themeColor }}
          />
        )}
      </AnimatePresence>

      {/* Death overlay */}
      <AnimatePresence>
        {isDying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3 }}
            className="absolute inset-0 pointer-events-none z-40"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          />
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <TopBar
        worldName={world.name}
        themeColor={themeColor}
        age={state.age}
        health={state.stats.health}
        maxHealth={state.maxAge}
        statHealthName={statNames.health}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
        fastForward={fastForward}
        setFastForward={setFastForward}
        onBack={() => { setAutoPlay(false); navigate('/rebirth'); }}
      />

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left - Stat Panel */}
        <motion.div
          initial={{ x: -280 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.2 }}
          className="w-[280px] shrink-0 bg-bg-secondary border-r border-border-subtle overflow-y-auto hidden md:block"
        >
          {/* Identity badge */}
          <div className="p-5 border-b border-border-subtle">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-display font-bold shrink-0"
                style={{ backgroundColor: `${themeColor}25`, color: themeColor, border: `2px solid ${themeColor}50` }}
              >
                {identity.name[0]}
              </div>
              <div>
                <div className="text-base font-bold font-body text-text-primary">{identity.name}</div>
                <div className="text-xs font-body text-text-secondary">
                  {world.name} · {identity.specialTrait}
                </div>
              </div>
            </div>
            <div className="text-xs font-mono text-text-muted mt-2">
              已存活: {state.age}年
              {state.talentLevel && (
                <span
                  className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold"
                  style={{
                    backgroundColor: `${TALENT_COLORS[state.talentLevel]}20`,
                    color: TALENT_COLORS[state.talentLevel],
                    border: `1px solid ${TALENT_COLORS[state.talentLevel]}40`,
                  }}
                >
                  {TALENT_DISTRIBUTION.find(d => d.level === state.talentLevel)?.label ?? state.talentLevel}
                </span>
              )}
            </div>
          </div>

          {/* Stat bars */}
          <div className="p-5 space-y-3">
            {statKeys.map((key) => (
              <StatBar
                key={key}
                label={statNames[key] ?? key}
                value={state.stats[key]}
                maxValue={200}
                color={themeColor}
                delta={statDeltas[key] ?? 0}
              />
            ))}
          </div>

          {/* Trait */}
          <div className="px-5 pb-5">
            <div className="w-full h-px bg-border-subtle mb-4" />
            <div className="text-xs font-bold font-body text-text-muted mb-2">天赋特质</div>
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-body font-bold"
              style={{ backgroundColor: `${themeColor}15`, color: themeColor, border: `1px solid ${themeColor}30` }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              {identity.specialTrait}
            </div>
          </div>
        </motion.div>

        {/* Center - Event Log */}
        <div
          ref={eventLogRef}
          className="flex-1 overflow-y-auto bg-bg-primary/50 p-4 sm:p-6 space-y-3 relative"
          onClick={skipTypewriter}
        >
          {/* Current event typewriter display */}
          <AnimatePresence mode="wait">
            {currentEvent && (
              <motion.div
                key={currentEvent.age}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
                className="bg-bg-secondary border rounded-xl p-5 shadow-lg cursor-pointer"
                style={{
                  borderColor: isDying ? '#C84B4B' : `${themeColor}50`,
                  boxShadow: isDying ? '0 4px 20px rgba(200,75,75,0.3)' : `0 4px 20px ${themeColor}15`,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-mono font-bold px-2.5 py-1 rounded"
                    style={{ backgroundColor: `${themeColor}25`, color: themeColor }}
                  >
                    第{currentEvent.age}年
                  </span>
                  {isDying && (
                    <span className="text-xs font-body text-accent-red font-bold px-2 py-0.5 rounded bg-accent-red/15">
                      大限已至
                    </span>
                  )}
                </div>

                <p className={`text-lg font-body leading-relaxed mb-4 ${isDying ? 'text-accent-red' : 'text-text-primary'}`} style={{ whiteSpace: 'pre-wrap' }}>
                  {typingComplete ? currentEvent.text : displayedText}
                  {!typingComplete && (
                    <span
                      className="inline-block w-[2px] h-[1.1em] ml-0.5 align-middle"
                      style={{
                        backgroundColor: themeColor,
                        animation: 'cursor-blink 1s step-end infinite',
                      }}
                    />
                  )}
                </p>

                {/* Event effects display */}
                {currentEvent.effects && Object.keys(currentEvent.effects).length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(currentEvent.effects).filter(([, v]) => (v ?? 0) !== 0).map(([key, val]) => {
                      const statLabel = statNames[key] ?? key;
                      const isPos = (val ?? 0) > 0;
                      return (
                        <motion.span
                          key={key}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                          className={`text-xs font-mono font-bold px-2 py-1 rounded-lg ${isPos ? 'text-accent-green' : 'text-accent-red'}`}
                          style={{ backgroundColor: isPos ? 'rgba(75, 200, 138, 0.15)' : 'rgba(200, 75, 75, 0.15)' }}
                        >
                          {statLabel} {isPos ? '+' : ''}{val}
                        </motion.span>
                      );
                    })}
                  </div>
                )}

                {/* Choice buttons */}
                <AnimatePresence>
                  {showChoices && currentChoices && (
                    <ChoiceButtons
                      choices={currentChoices.map((c, i) => ({
                        text: c.text,
                        onClick: () => handleChoice(i),
                      }))}
                      color={themeColor}
                      disabled={hasChosen}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Older events */}
          <div className="space-y-3">
            {eventHistory.slice(0, -1).reverse().map((evt, idx) => (
              <motion.div
                key={`${evt.age}-${eventHistory.length - 1 - idx}`}
                initial={false}
                animate={{ opacity: getHistoryOpacity(evt.age) }}
                transition={{ duration: 0.3 }}
              >
                <EventCard
                  age={evt.age}
                  text={evt.text}
                  effects={evt.effects}
                  color={themeColor}
                />
              </motion.div>
            ))}
          </div>

          {/* Spacer at bottom */}
          <div className="h-4" />
        </div>

        {/* Right - Relationship Panel */}
        <RelationshipPanel
          relationships={state.relationships}
          npcs={world.npcs}
          themeColor={themeColor}
        />
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.1 }}
        className="h-[48px] shrink-0 bg-bg-primary border-t border-border-subtle flex items-center px-4 justify-between z-20"
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoPlay((p) => !p)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-body text-text-secondary hover:text-text-primary bg-bg-tertiary border border-border-subtle hover:border-border-glow transition-all duration-150"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
            设置
          </button>
        </div>

        {/* Center: Auto-play indicator */}
        <div className="flex items-center gap-3">
          <AnimatePresence>
            {autoPlay && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 text-xs font-body text-text-secondary"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: themeColor, animation: 'pulse 1.5s infinite' }}
                />
                自动播放中...
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/ending')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-body text-text-secondary hover:text-text-primary bg-bg-tertiary border border-border-subtle hover:border-border-glow transition-all duration-150"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
            菜单
          </button>
        </div>
      </motion.div>

      {/* Floating Action Button: Next Year */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleNextYear}
        disabled={isProcessing || isDying || showChoices}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-bold text-bg-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 shadow-lg"
        style={{
          backgroundColor: isDying ? '#C84B4B' : themeColor,
          boxShadow: `0 4px 20px ${isDying ? 'rgba(200,75,75,0.4)' : themeColor + '40'}`,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
        {isDying ? '查看结局' : showChoices ? '请选择...' : '下一岁'}
      </motion.button>
    </div>
  );
}
