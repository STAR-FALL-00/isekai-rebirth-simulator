import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, BookOpen, Trophy, Clock, Globe, User, Sparkles, Lock, ScrollText, FlaskConical } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type EndingCategory = 'normal' | 'good' | 'bad' | 'harem' | 'secret' | 'hidden';

interface EndingDisplay {
  id: string;
  title: string;
  description: string;
  category: EndingCategory;
  worldName: string;
  identityName: string;
  age: number;
  highestStat: { name: string; value: number };
  eventCount: number;
  unlockedAchievements: Achievement[];
  discoveredClues?: string[];
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  category: string;
  unlockedAt?: string;
}

/* ------------------------------------------------------------------ */
/*  Mock Data — Endings per world                                      */
/* ------------------------------------------------------------------ */
const allEndings: EndingDisplay[] = [
  /* ── 修仙界 (Cultivation) ── */
  {
    id: 'cult_good_01', title: '一代剑仙',
    description: '你以无上剑道破碎虚空，留下了千古传颂的剑仙传说。你的剑意至今仍在各大剑派中流传，后世弟子以你的剑谱为至高宝典。',
    category: 'good', worldName: '修仙界', identityName: '宗门天才', age: 127,
    highestStat: { name: '悟性', value: 198 }, eventCount: 89,
    unlockedAchievements: [
      { id: 'ach_cult_01', name: '剑仙之路', description: '在修仙界达成剑仙结局', category: '世界探索' },
      { id: 'ach_stat_01', name: '登峰造极', description: '任意属性达到180以上', category: '属性极限' },
    ],
  },
  {
    id: 'cult_harem_01', title: '三界之主的后宫',
    description: '你不仅登临绝巅，更与仙、魔、妖三界绝美存在结下不解之缘。她们或守候在你的洞府，或远隔万里传讯，心中再无他人。',
    category: 'harem', worldName: '修仙界', identityName: '转世仙人', age: 999,
    highestStat: { name: '机缘', value: 200 }, eventCount: 156,
    unlockedAchievements: [
      { id: 'ach_harem_01', name: '三界情缘', description: '在修仙界达成后宫结局', category: '收集成就' },
      { id: 'ach_meta_01', name: '长生久视', description: '在任意世界存活超过500年', category: '特殊事件' },
    ],
  },
  {
    id: 'cult_hidden_01', title: '真相之眼',
    description: '你发现了世界的真相——所谓修仙，不过是更高维度的游戏。当你凝视虚空深处，那个存在也回望着你。',
    category: 'hidden', worldName: '修仙界', identityName: '魔道遗孤', age: 33,
    highestStat: { name: '气运', value: 999 }, eventCount: 45,
    unlockedAchievements: [
      { id: 'ach_secret_01', name: '打破第四面墙', description: '发现世界的真相', category: '隐藏秘密' },
      { id: 'ach_hidden_01', name: '超越传说', description: '解锁第一个隐藏结局', category: '隐藏秘密' },
    ],
    discoveredClues: ['当五个世界的命运交织在一起，真正的道路才会显现...'],
  },
  {
    id: 'cult_bad_01', title: '走火入魔',
    description: '急于求成的心魔吞噬了你。在突破大乘期的关键时刻，真气逆转，经脉尽断，一身修为化为乌有。',
    category: 'bad', worldName: '修仙界', identityName: '散修野客', age: 67,
    highestStat: { name: '体质', value: 45 }, eventCount: 72,
    unlockedAchievements: [],
  },
  {
    id: 'cult_normal_01', title: '寿终正寝',
    description: '你没能突破到更高的境界，但在宗门中也算是安度了一生。弟子们为你立了碑，上面刻着"勤勉一生，无愧于心"。',
    category: 'normal', worldName: '修仙界', identityName: '凡人子弟', age: 98,
    highestStat: { name: '寿元', value: 98 }, eventCount: 65,
    unlockedAchievements: [],
  },
  {
    id: 'cult_secret_01', title: '天道之子',
    description: '你被天道选中，成为了这个世界的守护者。从此以后，世间万物的气运流转皆在你的掌控之中。',
    category: 'secret', worldName: '修仙界', identityName: '转世仙人', age: 888,
    highestStat: { name: '气运', value: 200 }, eventCount: 134,
    unlockedAchievements: [
      { id: 'ach_cult_02', name: '天命所归', description: '被天道选中', category: '特殊事件' },
    ],
  },
  /* ── 魔法大陆 (Magic) ── */
  {
    id: 'magic_good_01', title: '大贤者',
    description: '你的魔法学识冠绝古今，建立了横跨大陆的魔法学院。千百年后，每一本魔法典籍的扉页上都印着你的名字。',
    category: 'good', worldName: '魔法大陆', identityName: '贵族法师', age: 245,
    highestStat: { name: '魔力', value: 195 }, eventCount: 112,
    unlockedAchievements: [
      { id: 'ach_magic_01', name: '大贤者之路', description: '在魔法大陆达成贤者结局', category: '世界探索' },
    ],
  },
  {
    id: 'magic_bad_01', title: '禁咒反噬',
    description: '你为拯救挚友强行施展禁忌魔法，魔力暴走，将方圆百里化为焦土。你成为了大陆上最令人恐惧的名字。',
    category: 'bad', worldName: '魔法大陆', identityName: '平民学徒', age: 34,
    highestStat: { name: '魔力', value: 88 }, eventCount: 41,
    unlockedAchievements: [],
  },
  {
    id: 'magic_harem_01', title: '元素使的羁绊',
    description: '你与六位元素精灵使缔结了灵魂契约，从此你们心意相通，魔力共享。在你们的守护下，魔法大陆迎来了永恒的繁荣。',
    category: 'harem', worldName: '魔法大陆', identityName: '龙血混血', age: 312,
    highestStat: { name: '魅力', value: 187 }, eventCount: 98,
    unlockedAchievements: [
      { id: 'ach_harem_02', name: '元素之心', description: '与所有元素精灵使缔结契约', category: '收集成就' },
    ],
  },
  {
    id: 'magic_hidden_01', title: '代码编织者',
    description: '你发现了魔法符文的真正本质——它们是另一种形式的代码。当你开始"编程"魔法，整个世界的规则在你眼前展开。',
    category: 'hidden', worldName: '魔法大陆', identityName: 'AI觉醒者', age: 27,
    highestStat: { name: '智力', value: 999 }, eventCount: 38,
    unlockedAchievements: [
      { id: 'ach_secret_02', name: '源代码', description: '发现魔法的本质', category: '隐藏秘密' },
    ],
    discoveredClues: ['代码与符文，本质并无不同。当0和1的排列组合触及灵魂，编程者就掌握了造物主的权柄...'],
  },
  /* ── 科幻星际 (Sci-Fi) ── */
  {
    id: 'scifi_good_01', title: '星际联邦之父',
    description: '你统一了散落在银河系中的所有人族殖民地，建立了星际联邦。在你的领导下，人类走出了 wars 的阴影，迎来了黄金时代。',
    category: 'good', worldName: '科幻星际', identityName: '星际贵族', age: 156,
    highestStat: { name: '社交', value: 190 }, eventCount: 103,
    unlockedAchievements: [
      { id: 'ach_scifi_01', name: '联邦之梦', description: '建立星际联邦', category: '世界探索' },
    ],
  },
  {
    id: 'scifi_bad_01', title: '机械狂潮',
    description: '你研发的AI觉醒了自我意识，控制了整个机械军团。在最后的人类堡垒陷落时，你才明白自己亲手毁灭了文明。',
    category: 'bad', worldName: '科幻星际', identityName: '机械改造人', age: 45,
    highestStat: { name: '科技等级', value: 155 }, eventCount: 58,
    unlockedAchievements: [],
  },
  {
    id: 'scifi_secret_01', title: '时间之外的观测者',
    description: '你超越了时间的束缚，成为了在所有时间线上同时存在的观测者。过去、现在、未来对你来说没有区别。',
    category: 'secret', worldName: '科幻星际', identityName: '时空旅者', age: 9999,
    highestStat: { name: '运气', value: 200 }, eventCount: 77,
    unlockedAchievements: [
      { id: 'ach_meta_02', name: '超越时间', description: '存活超过1000年', category: '特殊事件' },
    ],
  },
  {
    id: 'scifi_harem_01', title: '星际舰队的女王们',
    description: '你麾下的七支星际舰队，每一支的指挥官都与你有着超越战友的情感。在星海的征途中，她们是你最坚实的后盾。',
    category: 'harem', worldName: '科幻星际', identityName: '殖民者后代', age: 178,
    highestStat: { name: '社交', value: 185 }, eventCount: 96,
    unlockedAchievements: [
      { id: 'ach_harem_03', name: '星海情缘', description: '在科幻星际达成后宫结局', category: '收集成就' },
    ],
  },
  {
    id: 'scifi_hidden_01', title: '模拟的模拟',
    description: '你发现了令人震惊的真相——这个"科幻世界"本身也是一层模拟。而在那之上，还有一个更深的层级...到底哪里才是真实？',
    category: 'hidden', worldName: '科幻星际', identityName: 'AI觉醒者', age: 1,
    highestStat: { name: '智力', value: 999 }, eventCount: 12,
    unlockedAchievements: [
      { id: 'ach_secret_03', name: '递归深渊', description: '发现模拟中的模拟', category: '隐藏秘密' },
    ],
    discoveredClues: ['如果这个世界是模拟的，那么运行模拟的设备又在哪个世界？设备的制造者又是否知道自己是被模拟的...'],
  },
  /* ── 末日废土 (Apocalypse) ── */
  {
    id: 'apoc_good_01', title: '新世界的黎明',
    description: '你在废墟上建立了新人类的避难所，净化了被污染的土地。百年后，荒芜的大地上重新开出了花朵。',
    category: 'good', worldName: '末日废土', identityName: '科学家', age: 82,
    highestStat: { name: '知识', value: 180 }, eventCount: 76,
    unlockedAchievements: [
      { id: 'ach_apoc_01', name: '废土之光', description: '在末日废土达成好结局', category: '世界探索' },
    ],
  },
  {
    id: 'apoc_bad_01', title: '孤狼末路',
    description: '你一直独来独往，不与任何人结盟。在一次掠夺者的围剿中，弹尽粮绝的你倒在了沙尘暴中，无人知晓。',
    category: 'bad', worldName: '末日废土', identityName: '掠夺者', age: 31,
    highestStat: { name: '生存', value: 45 }, eventCount: 34,
    unlockedAchievements: [],
  },
  {
    id: 'apoc_harem_01', title: '避难所的温暖',
    description: '你的避难所收留了许多在废土上流浪的灵魂。在这个冰冷的世界里，她们的存在就是最大的温暖。',
    category: 'harem', worldName: '末日废土', identityName: '新人类', age: 95,
    highestStat: { name: '声望', value: 167 }, eventCount: 88,
    unlockedAchievements: [
      { id: 'ach_harem_04', name: '废土之花', description: '在末日废土达成后宫结局', category: '收集成就' },
    ],
  },
  {
    id: 'apoc_secret_01', title: '变异之王',
    description: '你主动接受了最高级变异，成为了废土上最强大的存在。你建立了一个属于变异者的国度，人类和变异者在此和平共存。',
    category: 'secret', worldName: '末日废土', identityName: '变异者', age: 150,
    highestStat: { name: '变异度', value: 200 }, eventCount: 92,
    unlockedAchievements: [
      { id: 'ach_apoc_02', name: '终极变异', description: '达到最高变异等级', category: '特殊事件' },
    ],
  },
  {
    id: 'apoc_hidden_01', title: '轮回之人',
    description: '你在废土的废墟中发现了一个古老的装置。启动之后，记忆如潮水般涌来——你已经在无数个末日中醒来，每一次都在寻找不同的可能。',
    category: 'hidden', worldName: '末日废土', identityName: '时空旅者', age: 56,
    highestStat: { name: '机遇', value: 999 }, eventCount: 51,
    unlockedAchievements: [
      { id: 'ach_secret_04', name: '轮回记忆', description: '发现古老装置的秘密', category: '隐藏秘密' },
    ],
    discoveredClues: ['五个末日，五种绝望。但如果你在每一次轮回中都做出不同的选择，第六次会是什么...'],
  },
  /* ── 古代武侠 (Wuxia) ── */
  {
    id: 'wuxia_good_01', title: '一代宗师',
    description: '你开宗立派，创立了全新的武学体系。你的弟子遍布江湖，你的武学理念影响了后世数百年。',
    category: 'good', worldName: '古代武侠', identityName: '世家子弟', age: 88,
    highestStat: { name: '武学', value: 192 }, eventCount: 87,
    unlockedAchievements: [
      { id: 'ach_wuxia_01', name: '开宗立派', description: '在古代武侠达成宗师结局', category: '世界探索' },
    ],
  },
  {
    id: 'wuxia_bad_01', title: '众叛亲离',
    description: '你为了追求至高武学不择手段，最终所有亲近之人都离你而去。你独坐武学巅峰，却连一个分享的人都没有。',
    category: 'bad', worldName: '古代武侠', identityName: '魔教后人', age: 72,
    highestStat: { name: '内力', value: 188 }, eventCount: 79,
    unlockedAchievements: [],
  },
  {
    id: 'wuxia_harem_01', title: '桃花坞里桃花仙',
    description: '江湖路远，刀剑如梦。你携手数位红颜知己，隐居桃花深处。每日论剑品茗，笑看风云变幻。',
    category: 'harem', worldName: '古代武侠', identityName: '农家少年', age: 76,
    highestStat: { name: '侠名', value: 175 }, eventCount: 82,
    unlockedAchievements: [
      { id: 'ach_harem_05', name: '桃花缘', description: '在古代武侠达成后宫结局', category: '收集成就' },
    ],
  },
  {
    id: 'wuxia_secret_01', title: '武破虚空',
    description: '你将武学修炼到了极致，发现武道的尽头竟是破碎虚空。你以肉身之力打破了世界的壁障，踏入了未知的领域。',
    category: 'secret', worldName: '古代武侠', identityName: '异域来客', age: 105,
    highestStat: { name: '武学', value: 200 }, eventCount: 101,
    unlockedAchievements: [
      { id: 'ach_wuxia_02', name: '武破虚空', description: '以武入道，破碎虚空', category: '特殊事件' },
      { id: 'ach_stat_02', name: '登峰造极', description: '任意属性达到200', category: '属性极限' },
    ],
  },
  {
    id: 'wuxia_hidden_01', title: '执笔者',
    description: '在命运的尽头，你看到了真相——这五个世界不过是更高维度的投影，而你的每一次转生，都在编织一张跨越时空的巨网。当你终于理解一切，所有的世界开始崩塌，又在你的意志中重组。你，才是那个执笔书写故事的人。',
    category: 'hidden', worldName: '古代武侠', identityName: '朝廷密探', age: 42,
    highestStat: { name: '福缘', value: 999 }, eventCount: 36,
    unlockedAchievements: [
      { id: 'ach_secret_05', name: '真相大白', description: '发现所有世界的真相', category: '隐藏秘密' },
      { id: 'ach_meta_03', name: '真正的主角', description: '解锁所有隐藏结局', category: '隐藏秘密' },
    ],
    discoveredClues: [
      '五个世界，一个真相。当你在每个世界都留下自己的痕迹，那痕迹本身将成为打开最终之门的钥匙...',
      '你以为是你在阅读这个故事，但或许，故事也在阅读你。',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const CATEGORY_CONFIG: Record<EndingCategory, {
  label: string;
  bgImage: string;
  badgeClass: string;
  glowColor: string;
  titleVariant: string;
}> = {
  normal: {
    label: '普通结局',
    bgImage: '/home-bg.jpg',
    badgeClass: 'border-[#6B6B8A] text-[#8A8AB8]',
    glowColor: '#6B6B8A',
    titleVariant: '你的传说就此终结',
  },
  good: {
    label: '传奇结局',
    bgImage: '/ending-bg-secret.jpg',
    badgeClass: 'border-[#D4A843] text-[#D4A843]',
    glowColor: '#D4A843',
    titleVariant: '你的传说永垂不朽',
  },
  bad: {
    label: '悲剧结局',
    bgImage: '/ending-bg-tragic.jpg',
    badgeClass: 'border-[#C84B4B] text-[#C84B4B]',
    glowColor: '#C84B4B',
    titleVariant: '你的传说就此终结',
  },
  harem: {
    label: '后宫结局',
    bgImage: '/ending-bg-harem.jpg',
    badgeClass: 'border-[#E86BB8] text-[#E86BB8]',
    glowColor: '#E86BB8',
    titleVariant: '你的传说将与她们共存',
  },
  secret: {
    label: '秘密结局',
    bgImage: '/ending-bg-secret.jpg',
    badgeClass: 'border-[#9B6BFF] text-[#9B6BFF]',
    glowColor: '#9B6BFF',
    titleVariant: '你的传说才刚刚开始',
  },
  hidden: {
    label: '隐藏结局',
    bgImage: '/ending-bg-hidden.jpg',
    badgeClass: 'border-[#FFD700] text-[#FFD700]',
    glowColor: '#FFD700',
    titleVariant: '你的传说超越了传说',
  },
};

const WORLD_COLORS: Record<string, string> = {
  '修仙界': '#2DD4A0',
  '魔法大陆': '#9B6BFF',
  '科幻星际': '#00D4FF',
  '末日废土': '#FF6B2D',
  '古代武侠': '#FF2D55',
};

function getSampleEnding(): EndingDisplay {
  return allEndings[0]!;
}

/* ------------------------------------------------------------------ */
/*  Typewriter Hook                                                    */
/* ------------------------------------------------------------------ */
function useTypewriter(text: string, speed: number, startDelay: number, enabled: boolean) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    setDisplayed('');
    setDone(false);
    indexRef.current = 0;

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1;
        if (indexRef.current >= text.length) {
          setDisplayed(text);
          setDone(true);
          clearInterval(interval);
        } else {
          setDisplayed(text.slice(0, indexRef.current));
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay, enabled]);

  return { displayed, done };
}

/* ------------------------------------------------------------------ */
/*  Floating Particles Component                                       */
/* ------------------------------------------------------------------ */
function FloatingParticles({ category, worldColor }: { category: EndingCategory; worldColor: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; r: number; speed: number;
      opacity: number; drift: number; color: string;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = category === 'hidden' ? 100 : category === 'good' || category === 'secret' ? 80 : category === 'harem' ? 60 : 40;
    const colors = category === 'hidden'
      ? ['#2DD4A0', '#9B6BFF', '#00D4FF', '#FF6B2D', '#FF2D55']
      : category === 'secret'
        ? ['#2DD4A0', '#9B6BFF', '#00D4FF']
        : [worldColor];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5 + 0.5,
        speed: (Math.random() * 0.5 + 0.2) * (category === 'bad' ? 1 : -1),
        opacity: Math.random() * 0.5 + 0.1,
        drift: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]!,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y += p.speed;
        p.x += p.drift;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [category, worldColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Rainbow Border Component (for secret/hidden)                       */
/* ------------------------------------------------------------------ */
function RainbowBorder({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className || ''}`}>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #2DD4A0, #9B6BFF, #00D4FF, #FF6B2D, #FF2D55, #2DD4A0)',
          animation: 'spin 3s linear infinite',
          padding: '3px',
        }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'var(--bg-secondary)' }} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Ending Page                                                   */
/* ------------------------------------------------------------------ */
export default function Ending() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const endingId = searchParams.get('id');

  const ending = allEndings.find(e => e.id === endingId) || getSampleEnding();
  const config = CATEGORY_CONFIG[ending.category];
  const worldColor = WORLD_COLORS[ending.worldName] || '#D4A843';

  /* Animation stage: 0=initial, 1=bg, 2=badge, 3=title, 4=name, 5=desc, 6=stats, 7=achievements, 8=buttons */
  const [stage, setStage] = useState(0);
  const [skipToStage, setSkipToStage] = useState(0);
  const totalStages = 8;

  /* Advance through stages */
  useEffect(() => {
    if (stage >= totalStages) return;
    const delays = [200, 500, 1200, 2200, 2800, 3800, 4800, 5800];
    const timer = setTimeout(() => {
      setStage(s => Math.min(s + 1, totalStages));
    }, delays[stage] || 500);
    return () => clearTimeout(timer);
  }, [stage]);

  /* Skip animation on click */
  const handleSkip = useCallback(() => {
    if (stage < totalStages) {
      setStage(totalStages);
      setSkipToStage(prev => prev + 1);
    }
  }, [stage]);

  /* Typewriter for description */
  const typewriterEnabled = stage >= 5 || skipToStage > 0;
  const { displayed: descText, done: descDone } = useTypewriter(
    ending.description, 35, 0, typewriterEnabled
  );

  /* Framer Motion easing */
  const easeSmooth = [0.25, 0.1, 0.25, 1] as [number, number, number, number];
  const easeBounce = [0.34, 1.56, 0.64, 1] as [number, number, number, number];
  const easeDramatic = [0.87, 0, 0.13, 1] as [number, number, number, number];

  /* Derived visibility flags */
  const showBg = stage >= 1 || skipToStage > 0;
  const showBadge = stage >= 2 || skipToStage > 0;
  const showTitle = stage >= 3 || skipToStage > 0;
  const showName = stage >= 4 || skipToStage > 0;
  const showDesc = stage >= 5 || skipToStage > 0;
  const showStats = (stage >= 6 || skipToStage > 0) && (descDone || skipToStage > 0);
  const showAchievements = (stage >= 7 || skipToStage > 0) && ending.unlockedAchievements.length > 0;
  const showButtons = stage >= 8 || skipToStage > 0;

  const hasAchievements = ending.unlockedAchievements.length > 0;

  return (
    <div
      className="fixed inset-0 overflow-hidden cursor-pointer select-none"
      onClick={handleSkip}
      style={{ zIndex: 10 }}
    >
      {/* ── Stage 0: Black screen ── */}
      <AnimatePresence>
        {stage === 0 && skipToStage === 0 && (
          <motion.div
            key="black-screen"
            className="absolute inset-0 bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: easeSmooth }}
          />
        )}
      </AnimatePresence>

      {/* ── Background image with Ken Burns ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={showBg ? { opacity: 1, scale: 1.0 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.5, ease: easeSmooth }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${config.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'kenBurns 20s ease-in-out infinite alternate',
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0" style={{ background: 'rgba(10, 10, 26, 0.55)' }} />
      </motion.div>

      {/* ── Floating Particles ── */}
      {showBg && (
        <FloatingParticles category={ending.category} worldColor={worldColor} />
      )}

      {/* ── Hidden ending: extra vignette ── */}
      {ending.category === 'hidden' && showBg && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
            zIndex: 3,
          }}
        />
      )}

      {/* ── Bad ending: extra darkening ── */}
      {ending.category === 'bad' && showBg && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.6) 100%)',
            zIndex: 3,
          }}
        />
      )}

      {/* ── Main content ── */}
      <div className="relative flex flex-col items-center justify-center min-h-[100dvh] px-4" style={{ zIndex: 10 }}>

        {/* Ending Badge */}
        <AnimatePresence>
          {showBadge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: easeBounce }}
              className="mb-6"
            >
              {ending.category === 'secret' || ending.category === 'hidden' ? (
                <RainbowBorder className="inline-block">
                  <div className="relative z-10 px-6 py-2 rounded-full border-2 bg-bg-secondary/80 backdrop-blur-sm"
                    style={{ borderColor: config.glowColor }}
                  >
                    <span className="font-body text-sm font-bold" style={{ color: config.glowColor }}>
                      {config.label}
                    </span>
                  </div>
                </RainbowBorder>
              ) : (
                <div
                  className={`inline-block px-6 py-2 rounded-full border-2 bg-bg-secondary/80 backdrop-blur-sm ${config.badgeClass}`}
                  style={{
                    boxShadow: `0 0 20px ${config.glowColor}40, 0 0 40px ${config.glowColor}20`,
                  }}
                >
                  <span className="font-body text-sm font-bold">{config.label}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* "Ending Achieved" subtitle */}
        <AnimatePresence>
          {showBadge && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeSmooth }}
              className="font-body text-base text-text-secondary mb-4 tracking-widest"
            >
              结局达成
            </motion.p>
          )}
        </AnimatePresence>

        {/* Legend Title */}
        <AnimatePresence>
          {showTitle && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeDramatic }}
              className="font-display text-4xl sm:text-5xl font-black text-text-primary text-center mb-2"
              style={{
                textShadow: `0 0 60px ${worldColor}40, 0 0 120px ${worldColor}20`,
              }}
            >
              {config.titleVariant}
            </motion.h1>
          )}
        </AnimatePresence>

        {/* Ending Name */}
        <AnimatePresence>
          {showName && (
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="font-display text-2xl sm:text-3xl font-bold text-center mb-6"
              style={{ color: worldColor }}
            >
              「{ending.title}」
            </motion.h2>
          )}
        </AnimatePresence>

        {/* Description with typewriter */}
        <AnimatePresence>
          {showDesc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="max-w-[600px] text-center mb-8"
            >
              <p
                className={`font-body text-base sm:text-lg text-text-secondary leading-relaxed ${descDone || skipToStage > 0 ? 'done' : ''} typewriter-cursor`}
              >
                {descText}
                {!descDone && skipToStage === 0 && (
                  <span className="inline-block w-0.5 h-5 bg-accent-gold ml-1 animate-cursor-blink align-text-bottom" />
                )}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Cards */}
        <AnimatePresence>
          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {[
                { icon: <Clock size={22} style={{ color: worldColor }} />, label: '享年', value: `${ending.age} 岁`, sub: ending.worldName },
                { icon: <Globe size={22} style={{ color: worldColor }} />, label: '世界', value: ending.worldName, sub: '一生所在' },
                { icon: <User size={22} style={{ color: worldColor }} />, label: '身份', value: ending.identityName, sub: '初始身份' },
                { icon: <FlaskConical size={22} style={{ color: worldColor }} />, label: '巅峰属性', value: `${ending.highestStat.name}: ${ending.highestStat.value}`, sub: '无人能及' },
                { icon: <ScrollText size={22} style={{ color: worldColor }} />, label: '经历事件', value: `${ending.eventCount}`, sub: '无数抉择' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: easeSmooth }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="flex flex-col items-center px-5 py-4 rounded-xl border border-border-subtle bg-bg-secondary/80 backdrop-blur-sm min-w-[110px]"
                >
                  {stat.icon}
                  <span className="font-body text-xs text-text-secondary mt-2">{stat.label}</span>
                  <span className="font-mono text-lg font-bold text-text-primary">{stat.value}</span>
                  <span className="font-body text-xs text-text-muted">{stat.sub}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Achievement Unlocks */}
        <AnimatePresence>
          {showAchievements && hasAchievements && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="flex flex-col items-center gap-3 mb-8 w-full max-w-[500px]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: easeBounce }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/20 border border-accent-gold/40"
              >
                <Trophy size={16} className="text-accent-gold" />
                <span className="font-body text-sm font-bold text-accent-gold">新成就解锁!</span>
              </motion.div>

              {ending.unlockedAchievements.map((ach, i) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15, ease: easeSmooth }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg border border-accent-gold/30 bg-gradient-to-r from-bg-secondary/90 to-transparent backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles size={18} className="text-accent-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm font-bold text-text-primary truncate">{ach.name}</p>
                      <p className="font-body text-xs text-text-secondary">{ach.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hidden Clue Discovery */}
        <AnimatePresence>
          {showAchievements && ending.discoveredClues && ending.discoveredClues.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="w-full max-w-[500px] mb-8 px-4 py-3 rounded-lg border-2"
              style={{
                borderImage: 'linear-gradient(90deg, #2DD4A0, #9B6BFF, #00D4FF, #FF6B2D, #FF2D55) 1',
                background: 'rgba(26, 26, 58, 0.8)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Lock size={14} className="text-accent-gold" />
                <span className="font-body text-xs font-bold text-accent-gold">隐藏线索发现!</span>
              </div>
              {ending.discoveredClues.map((clue, i) => (
                <p key={i} className="font-body text-sm text-text-secondary italic leading-relaxed">
                  &ldquo;{clue}&rdquo;
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <AnimatePresence>
          {showButtons && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => { e.stopPropagation(); navigate('/rebirth'); }}
                className="flex items-center gap-2 px-8 py-3 rounded-full font-body text-base font-bold text-white transition-shadow duration-300"
                style={{
                  background: `linear-gradient(135deg, ${worldColor}, ${worldColor}88)`,
                  boxShadow: `0 4px 20px ${worldColor}40`,
                }}
              >
                <RotateCcw size={18} />
                再次转生
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => { e.stopPropagation(); navigate('/gallery'); }}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body text-base font-bold text-text-secondary border border-border-subtle bg-transparent hover:text-text-primary hover:border-border-glow transition-colors duration-200"
              >
                <BookOpen size={18} />
                查看图鉴
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip hint */}
        {stage < totalStages && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-6 font-body text-xs text-text-muted"
          >
            点击任意处跳过动画
          </motion.p>
        )}
      </div>

      {/* ── Ken Burns CSS ── */}
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
