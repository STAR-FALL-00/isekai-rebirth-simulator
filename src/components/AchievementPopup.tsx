import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AchievementUnlockResult } from '@/engine/achievement-engine';
import {
  Globe, Wand2, Rocket, Shield, Sword, Crown, Star, Zap, Trophy, Award,
  Map, BookOpen, Sparkles, Repeat, Infinity, Dumbbell, Brain, Heart, Clover,
  Activity, Gem, Hexagon, Feather, Cloud, Frown, Skull, AlertTriangle,
  TrendingDown, Cake, Timer, XCircle, Swords, Compass, Eye, RefreshCw,
  GitBranch, Flame, Sun, CloudRain, User, Crosshair, HeartHandshake,
  CheckCircle, Clock, Wind, Bolt, Lock, Library, Smile, Search, HelpCircle,
} from 'lucide-react';

const CATEGORY_COLORS: Record<string, string> = {
  world: '#2DD4A0',
  stat: '#00D4FF',
  event: '#FF6B2D',
  speed: '#FFD700',
  secret: '#9B6BFF',
  meta: '#FF2D55',
};

const CATEGORY_LABELS: Record<string, string> = {
  world: '世界探索',
  stat: '属性极限',
  event: '特殊事件',
  speed: '速通挑战',
  secret: '隐藏秘密',
  meta: '元成就',
};

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  globe: Globe,
  wand: Wand2,
  rocket: Rocket,
  shield: Shield,
  sword: Sword,
  crown: Crown,
  star: Star,
  zap: Zap,
  trophy: Trophy,
  award: Award,
  map: Map,
  book: BookOpen,
  'book-open': BookOpen,
  sparkles: Sparkles,
  repeat: Repeat,
  infinity: Infinity,
  dumbbell: Dumbbell,
  brain: Brain,
  heart: Heart,
  clover: Clover,
  activity: Activity,
  gem: Gem,
  hexagon: Hexagon,
  feather: Feather,
  cloud: Cloud,
  frown: Frown,
  skull: Skull,
  'alert-triangle': AlertTriangle,
  'trending-down': TrendingDown,
  cake: Cake,
  timer: Timer,
  'x-circle': XCircle,
  swords: Swords,
  compass: Compass,
  eye: Eye,
  'refresh-cw': RefreshCw,
  'git-branch': GitBranch,
  flame: Flame,
  sun: Sun,
  'cloud-rain': CloudRain,
  user: User,
  crosshair: Crosshair,
  peace: HeartHandshake,
  'check-circle': CheckCircle,
  clock: Clock,
  wind: Wind,
  bolt: Bolt,
  lock: Lock,
  library: Library,
  smile: Smile,
  search: Search,
};

function getIconComponent(iconName: string) {
  return ICON_MAP[iconName] || HelpCircle;
}

interface AchievementPopupProps {
  newAchievements: AchievementUnlockResult[];
  onDismiss?: (id: string) => void;
}

export default function AchievementPopup({ newAchievements, onDismiss }: AchievementPopupProps) {
  const [queue, setQueue] = useState<AchievementUnlockResult[]>([]);
  const [current, setCurrent] = useState<AchievementUnlockResult | null>(null);

  useEffect(() => {
    if (newAchievements.length > 0) {
      setQueue((prev) => {
        const existingIds = new Set(prev.map((a) => a.id));
        const filtered = newAchievements.filter((a) => !existingIds.has(a.id));
        return [...prev, ...filtered];
      });
    }
  }, [newAchievements]);

  useEffect(() => {
    if (!current && queue.length > 0) {
      const [next, ...rest] = queue;
      setCurrent(next);
      setQueue(rest);
      const timer = setTimeout(() => {
        setCurrent(null);
        if (next && onDismiss) onDismiss(next.id);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [current, queue, onDismiss]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2 pointer-events-none">
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
            className="pointer-events-auto flex items-center gap-4 px-5 py-4 rounded-xl border shadow-2xl min-w-[320px] max-w-[420px]"
            style={{
              backgroundColor: 'rgba(20, 20, 40, 0.95)',
              borderColor: `${CATEGORY_COLORS[current.category] ?? '#D4A843'}60`,
              boxShadow: `0 8px 32px ${CATEGORY_COLORS[current.category] ?? '#D4A843'}30`,
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${CATEGORY_COLORS[current.category] ?? '#D4A843'}25` }}
            >
              {(() => {
                const Icon = getIconComponent(current.icon);
                return (
                  <Icon
                    size={24}
                    style={{ color: CATEGORY_COLORS[current.category] ?? '#D4A843' }}
                  />
                );
              })()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span
                  className="text-[10px] font-bold font-body px-1.5 py-0.5 rounded uppercase tracking-wider"
                  style={{
                    backgroundColor: `${CATEGORY_COLORS[current.category] ?? '#D4A843'}20`,
                    color: CATEGORY_COLORS[current.category] ?? '#D4A843',
                  }}
                >
                  {CATEGORY_LABELS[current.category] ?? current.category}
                </span>
                <span className="text-[10px] font-body text-text-muted">成就解锁</span>
              </div>
              <p className="font-display text-sm font-bold text-text-primary truncate">
                {current.title}
              </p>
              <p className="font-body text-xs text-text-secondary truncate">
                {current.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
