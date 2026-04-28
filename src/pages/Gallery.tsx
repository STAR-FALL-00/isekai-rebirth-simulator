import { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Trophy, Lock, Unlock, ScrollText, Sparkles,
  Globe, Star, Zap, Eye, Heart, Target, X,
  Search, Clock
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type EndingCategory = 'normal' | 'good' | 'bad' | 'harem' | 'secret' | 'hidden';
type WorldId = 'all' | 'cultivation' | 'magic' | 'scifi' | 'apocalypse' | 'wuxia';
type CategoryFilter = 'all' | EndingCategory;
type AchievementCategory = 'all' | 'world' | 'stat' | 'special' | 'collection' | 'secret';

interface EndingItem {
  id: string;
  title: string;
  description: string;
  category: EndingCategory;
  worldId: WorldId;
  worldName: string;
  identityName: string;
  age: number;
  highestStat: { name: string; value: number };
  conditions: string;
  discovered: boolean;
  clue?: string;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  hint: string;
  category: AchievementCategory;
  unlocked: boolean;
  unlockedAt?: string;
  icon: string;
}

interface WorldProgress {
  id: WorldId;
  name: string;
  color: string;
  endingsFound: number;
  endingsTotal: number;
  achievementsUnlocked: number;
  achievementsTotal: number;
  hiddenFound: number;
  hiddenTotal: number;
  playCount: number;
  bestEnding: string;
  identityCompletion: number[];
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */
const WORLDS: { id: WorldId; name: string; color: string }[] = [
  { id: 'cultivation', name: '修仙界', color: '#2DD4A0' },
  { id: 'magic', name: '魔法大陆', color: '#9B6BFF' },
  { id: 'scifi', name: '科幻星际', color: '#00D4FF' },
  { id: 'apocalypse', name: '末日废土', color: '#FF6B2D' },
  { id: 'wuxia', name: '古代武侠', color: '#FF2D55' },
];

const ENDING_CATEGORIES: { id: CategoryFilter; label: string; color: string }[] = [
  { id: 'all', label: '全部', color: '#F0E6D3' },
  { id: 'normal', label: '普通', color: '#8A8AB8' },
  { id: 'good', label: '传奇', color: '#D4A843' },
  { id: 'bad', label: '悲剧', color: '#C84B4B' },
  { id: 'harem', label: '后宫', color: '#E86BB8' },
  { id: 'secret', label: '秘密', color: '#9B6BFF' },
  { id: 'hidden', label: '隐藏', color: '#FFD700' },
];

const ACHIEVEMENT_CATEGORIES: { id: AchievementCategory; label: string; color: string }[] = [
  { id: 'all', label: '全部', color: '#F0E6D3' },
  { id: 'world', label: '世界探索', color: '#2DD4A0' },
  { id: 'stat', label: '属性极限', color: '#D4A843' },
  { id: 'special', label: '特殊事件', color: '#9B6BFF' },
  { id: 'collection', label: '收集成就', color: '#4BC88A' },
  { id: 'secret', label: '隐藏秘密', color: '#FFD700' },
];

/* ------------------------------------------------------------------ */
/*  Mock Data — Endings (~30 per world, 150 total)                     */
/* ------------------------------------------------------------------ */
function generateEndings(): EndingItem[] {
  const endings: EndingItem[] = [];
  const worldMap: WorldId[] = ['cultivation', 'magic', 'scifi', 'apocalypse', 'wuxia'];
  const worldNames = ['修仙界', '魔法大陆', '科幻星际', '末日废土', '古代武侠'];

  const templates: Record<string, { titles: string[]; descs: string[] }> = {
    cultivation: {
      titles: ['一代剑仙', '羽化登仙', '万古魔尊', '丹道至尊', '符箓宗师', '御兽灵王', '三界之主的后宫', '真相之眼', '寿终正寝', '走火入魔', '众叛亲离', '天道之子', '破虚而行', '轮回转世', '凡尘仙人', '灵根觉醒', '宗门砥柱', '散修传奇', '妖化成人', '魔道巨擘', '仙凡之隔', '长生不老', '飞升失败', '隐居山林', '创立道统', '传承断绝', '仙魔同体', '夺舍重生', '因果轮回', '万法归一'],
      descs: ['你以无上剑道破碎虚空，留下了千古传颂的传说。', '修为圆满，羽化飞升，成为传说中的存在。', '堕入魔道，成为了令人闻风丧胆的魔尊。', '你的丹药可活死人肉白骨，万修来朝。', '一符破万法，你的符箓造诣举世无双。', '万兽臣服，你成为了灵兽之王。', '三界之美尽收囊中，谱写了一段佳话。', '你发现了世界的真相，一切不过是一场游戏。', '平淡的一生，却也问心无愧。', '心魔入侵，修为尽散，抱憾而终。'],
    },
    magic: {
      titles: ['大贤者', '禁咒法师', '元素掌控者', '龙语者', '暗影君王', '圣光之怒', '元素使的羁绊', '代码编织者', '魔法学徒', '魔力枯竭', '魔法爆炸', '奥术大师', '位面旅行者', '契约恶魔', '精灵之友', '巫师之王', '魔法创造者', '法则改写者', '魔力之源', '魔法灭绝', '学院长', '魔法商人', '冒险法师', '魔法骑士', '亡灵法师', '时之法师', '空间行者', '梦境编织者', '命运编织者', '魔法始祖'],
      descs: ['你的魔法学识冠绝古今，建立了伟大的魔法学院。', '禁咒在你手中如同儿戏，你是行走的毁灭。', '四大元素皆听你号令，你是元素的主宰。', '你学会了龙的语言，与龙族缔结了永恒的友谊。', '暗影是你的披风，你在黑暗中君临天下。', '圣光因你而炽烈，你是信仰的化身。', '与元素精灵使缔结灵魂契约，魔力共享。', '你发现了魔法的本质——它们是代码。'],
    },
    scifi: {
      titles: ['星际联邦之父', '机械狂潮', 'AI之主', '时空旅者', '银河霸主', '星际探险家', '星际舰队的女王们', '模拟的模拟', '殖民地总督', '星际海盗', '基因改造者', '量子意识', '纳米主宰', '星际商人', '深空探测者', '外星使节', '黑洞旅人', '星际猎人', '赛博行者', '虚拟现实', '星际难民', '末日幸存者', '宇宙观测者', '星际导师', '科技先驱', '太空农夫', '星际佣兵', '数据幽灵', '星际之子', '归零者'],
      descs: ['你统一了银河系殖民地，建立了伟大的联邦。', '你研发的AI毁灭了人类文明，你是始作俑者。', '你掌控了所有AI，成为了硅基生命的主宰。', '你穿越了时空，成为了时间的行者。', '你统一了银河系，成为了至高无上的霸主。', '你探索了未知的星域，发现了新的文明。'],
    },
    apocalypse: {
      titles: ['新世界的黎明', '孤狼末路', '变异之王', '废土之王', '避难所所长', '掠夺者首领', '避难所的温暖', '轮回之人', '辐射免疫者', '丧尸猎人', '末日科学家', '机械师', '废土医生', '新人类领袖', '旧世界遗民', '荒野求生者', '末日交易者', '废土游侠', '核冬天幸存者', '末日传教士', '废土诗人', '末日儿童', '最后的人类', '文明重建者', '废土农夫', '末日骑士', '拾荒之王', '末日艺术家', '记忆守护者', '希望之光'],
      descs: ['你在废墟上建立了新家园，大地重新开花。', '独来独往的你最终倒在了废土中，无人知晓。', '你成为了最强大的变异者，建立了变异国度。', '你统治了整片废土，成为了无可争议的王者。', '你的避难所保护了无数人，是希望的象征。', '你率领掠夺者四处劫掠，令人闻风丧胆。'],
    },
    wuxia: {
      titles: ['一代宗师', '众叛亲离', '武破虚空', '桃花坞里桃花仙', '江湖隐士', '武林盟主', '执笔者', '剑道独尊', '刀神', '暗器之王', '轻功天下第一', '内力深厚', '毒手药王', '神医', '神偷', '神捕', '镖局总镖头', '帮派帮主', '门派掌门', '独行侠', '双剑合璧', '琴剑合璧', '书生剑客', '酒中仙', '浪子回头', '佛门弟子', '道家真人', '魔教教主', '正道领袖', '武林神话'],
      descs: ['你开宗立派，武学理念影响了后世数百年。', '为求武学巅峰不择手段，最终众叛亲离。', '以武入道，破碎虚空，踏入了未知领域。', '携手红颜知己隐居桃花深处，笑看风云。', '看透了江湖纷争，选择了隐居山林。', '你统一了武林，成为了万人敬仰的盟主。'],
    },
  };

  const categories: EndingCategory[] = ['normal', 'normal', 'good', 'good', 'bad', 'bad', 'secret', 'harem', 'hidden'];
  const identities: Record<string, string[]> = {
    cultivation: ['凡人子弟', '宗门天才', '散修野客', '妖族血脉', '魔道遗孤', '转世仙人'],
    magic: ['平民学徒', '贵族法师', '荒野德鲁伊', '暗影刺客', '圣光骑士', '龙血混血'],
    scifi: ['殖民者后代', '星际贵族', '机械改造人', '外星混血', 'AI觉醒者', '时空旅者'],
    apocalypse: ['避难所居民', '掠夺者', '变异者', '科学家', '机械师', '新人类'],
    wuxia: ['农家少年', '世家子弟', '孤儿', '魔教后人', '朝廷密探', '异域来客'],
  };

  const clues = [
    '在某个世界中，当魅力达到极致...',
    '同时与多位角色建立深厚羁绊...',
    '找到所有隐藏事件的触发条件...',
    '在特定年份做出特殊选择...',
    '某项属性达到200时可能会触发...',
    '选择最难的身份开始游戏...',
    '在最低HP时触发特殊事件...',
    '收集特定的成就组合...',
  ];

  for (let w = 0; w < worldMap.length; w++) {
    const wId = worldMap[w]!;
    const wName = worldNames[w]!;
    const tmpl = templates[wId]!;
    const cats = categories.slice(); // copy

    for (let i = 0; i < 30; i++) {
      const cat = i < cats.length ? cats[i]! : categories[i % categories.length]!;
      const discovered = i < (w === 0 ? 7 : w === 1 ? 4 : w === 2 ? 3 : w === 3 ? 2 : 5);
      endings.push({
        id: `${wId}_${cat}_${String(i).padStart(2, '0')}`,
        title: discovered ? tmpl.titles[i] || tmpl.titles[0]! : '???',
        description: discovered ? (tmpl.descs[i] || tmpl.descs[0]!) : '尚未发现此结局...',
        category: cat,
        worldId: wId,
        worldName: wName,
        identityName: identities[wId]![i % 6]!,
        age: discovered ? [67, 127, 999, 33, 45, 82, 88, 76, 105, 245][i % 10] || 50 : 0,
        highestStat: discovered ? { name: ['悟性', '魔力', '智力', '知识', '武学'][w]!, value: 100 + (i % 100) } : { name: '???', value: 0 },
        conditions: discovered ? `达成于第${[67, 127, 999, 33, 45][i % 5]}年 \u00b7 ${identities[wId]![i % 6]!}` : '达成条件未知',
        discovered,
        clue: !discovered ? clues[i % clues.length]! : undefined,
      });
    }
  }
  return endings;
}

const ALL_ENDINGS = generateEndings();

/* ------------------------------------------------------------------ */
/*  Mock Data — Achievements (80+)                                    */
/* ------------------------------------------------------------------ */
function generateAchievements(): Achievement[] {
  const baseAchievements: Omit<Achievement, 'unlocked' | 'unlockedAt'>[] = [
    /* 世界探索 */
    { id: 'ach_w_cult_01', name: '修仙界入门', description: '第一次在修仙界转生', hint: '选择修仙界开始游戏', category: 'world', icon: 'globe' },
    { id: 'ach_w_cult_02', name: '剑仙之路', description: '在修仙界达成剑仙结局', hint: '在修仙界达成某个传奇结局', category: 'world', icon: 'sword' },
    { id: 'ach_w_cult_03', name: '魔道巨擘', description: '在修仙界达成魔尊结局', hint: '尝试走向不同的道路', category: 'world', icon: 'skull' },
    { id: 'ach_w_cult_04', name: '修仙界精通', description: '收集修仙界所有结局', hint: '收集一个世界的全部结局', category: 'world', icon: 'star' },
    { id: 'ach_w_magic_01', name: '魔法大陆的访客', description: '第一次在魔法大陆转生', hint: '选择魔法大陆开始游戏', category: 'world', icon: 'globe' },
    { id: 'ach_w_magic_02', name: '大贤者之路', description: '在魔法大陆达成贤者结局', hint: '在魔法大陆达成某个传奇结局', category: 'world', icon: 'sparkles' },
    { id: 'ach_w_magic_03', name: '魔法大陆精通', description: '收集魔法大陆所有结局', hint: '持续探索魔法大陆', category: 'world', icon: 'star' },
    { id: 'ach_w_scifi_01', name: '星际旅者', description: '第一次在科幻星际转生', hint: '选择科幻星际开始游戏', category: 'world', icon: 'globe' },
    { id: 'ach_w_scifi_02', name: '联邦之梦', description: '建立星际联邦', hint: '在科幻星际达成某个好结局', category: 'world', icon: 'rocket' },
    { id: 'ach_w_scifi_03', name: '星际精通', description: '收集科幻星际所有结局', hint: '探索星空的所有可能', category: 'world', icon: 'star' },
    { id: 'ach_w_apoc_01', name: '废土求生者', description: '第一次在末日废土转生', hint: '选择末日废土开始游戏', category: 'world', icon: 'globe' },
    { id: 'ach_w_apoc_02', name: '废土之光', description: '在末日废土建立新家园', hint: '在末日废土达成某个好结局', category: 'world', icon: 'sun' },
    { id: 'ach_w_apoc_03', name: '废土精通', description: '收集末日废土所有结局', hint: '在废土上不断尝试', category: 'world', icon: 'star' },
    { id: 'ach_w_wuxia_01', name: '江湖新人', description: '第一次在古代武侠转生', hint: '选择古代武侠开始游戏', category: 'world', icon: 'globe' },
    { id: 'ach_w_wuxia_02', name: '开宗立派', description: '在古代武侠成为一代宗师', hint: '在古代武侠达成某个传奇结局', category: 'world', icon: 'sword' },
    { id: 'ach_w_wuxia_03', name: '武侠精通', description: '收集古代武侠所有结局', hint: '踏遍江湖的所有角落', category: 'world', icon: 'star' },
    /* 属性极限 */
    { id: 'ach_s_max_01', name: '登峰造极', description: '任意属性达到180以上', hint: '专注提升某一项属性', category: 'stat', icon: 'zap' },
    { id: 'ach_s_max_02', name: '完美属性', description: '任意属性达到200', hint: '将某项属性提升到极限', category: 'stat', icon: 'trophy' },
    { id: 'ach_s_min_01', name: '一败涂地', description: '任意属性降到0', hint: '让某项属性降到最低点', category: 'stat', icon: 'trending-down' },
    { id: 'ach_s_bal_01', name: '均衡发展', description: '所有属性都超过100', hint: '不要偏科，全面发展', category: 'stat', icon: 'bar-chart' },
    { id: 'ach_s_str_01', name: '力大无穷', description: '力量属性达到200', hint: '专注提升力量属性', category: 'stat', icon: 'zap' },
    { id: 'ach_s_int_01', name: '智多星', description: '智力属性达到200', hint: '专注提升智力属性', category: 'stat', icon: 'brain' },
    { id: 'ach_s_chr_01', name: '万人迷', description: '魅力属性达到200', hint: '专注提升魅力属性', category: 'stat', icon: 'heart' },
    { id: 'ach_s_luck_01', name: '天命之子', description: '运气属性达到200', hint: '运气也是实力的一部分', category: 'stat', icon: 'clover' },
    /* 特殊事件 */
    { id: 'ach_sp_long_01', name: '长生久视', description: '在任意世界存活超过500年', hint: '活得更久一些', category: 'special', icon: 'clock' },
    { id: 'ach_sp_long_02', name: '超越时间', description: '存活超过1000年', hint: '寻找长生之法', category: 'special', icon: 'infinity' },
    { id: 'ach_sp_speed_01', name: '速通玩家', description: '50年内达成结局', hint: '快速达成结局', category: 'special', icon: 'timer' },
    { id: 'ach_sp_speed_02', name: '极速通关', description: '20年内达成结局', hint: '以最快的速度达成结局', category: 'special', icon: 'timer' },
    { id: 'ach_sp_death_01', name: '英年早逝', description: '10年内死亡', hint: '早早结束一生', category: 'special', icon: 'skull' },
    { id: 'ach_sp_event_01', name: '命运之子', description: '触发一个稀有事件', hint: '运气好可能触发稀有事件', category: 'special', icon: 'sparkles' },
    { id: 'ach_sp_event_02', name: '逆天改命', description: '改变预定的命运', hint: '做出不同的选择', category: 'special', icon: 'refresh' },
    { id: 'ach_sp_allworlds', name: '世界旅行者', description: '在所有5个世界都转生过', hint: '尝试不同的世界', category: 'special', icon: 'map' },
    /* 收集成就 */
    { id: 'ach_col_harem_01', name: '三界情缘', description: '在修仙界达成后宫结局', hint: '在修仙界建立深厚羁绊', category: 'collection', icon: 'heart' },
    { id: 'ach_col_harem_02', name: '元素之心', description: '与所有元素精灵缔结契约', hint: '在魔法大陆广交朋友', category: 'collection', icon: 'heart' },
    { id: 'ach_col_harem_03', name: '星海情缘', description: '在科幻星际达成后宫结局', hint: '在星际间建立羁绊', category: 'collection', icon: 'heart' },
    { id: 'ach_col_harem_04', name: '废土之花', description: '在末日废土达成后宫结局', hint: '在废土上找到温暖', category: 'collection', icon: 'heart' },
    { id: 'ach_col_harem_05', name: '桃花缘', description: '在古代武侠达成后宫结局', hint: '在江湖中找到红颜知己', category: 'collection', icon: 'heart' },
    { id: 'ach_col_harem_all', name: '后宫之王', description: '在所有世界达成后宫结局', hint: '在每个世界都找到真爱', category: 'collection', icon: 'crown' },
    { id: 'ach_col_ending_10', name: '传说收集者', description: '收集10个不同结局', hint: '多玩几次，收集结局', category: 'collection', icon: 'book' },
    { id: 'ach_col_ending_25', name: '传说大师', description: '收集25个不同结局', hint: '更深入地探索每个世界', category: 'collection', icon: 'book' },
    { id: 'ach_col_ending_50', name: '传说宗师', description: '收集50个不同结局', hint: '几乎探索了所有主要结局', category: 'collection', icon: 'book' },
    { id: 'ach_col_ending_all', name: '全知全能', description: '收集所有150+结局', hint: '真正的完美主义者', category: 'collection', icon: 'crown' },
    { id: 'ach_col_ach_10', name: '成就入门', description: '解锁10个成就', hint: '自然地解锁成就', category: 'collection', icon: 'trophy' },
    { id: 'ach_col_ach_25', name: '成就达人', description: '解锁25个成就', hint: '持续解锁更多成就', category: 'collection', icon: 'trophy' },
    { id: 'ach_col_ach_50', name: '成就大师', description: '解锁50个成就', hint: '成为成就猎手', category: 'collection', icon: 'trophy' },
    { id: 'ach_col_ach_all', name: '完美成就', description: '解锁所有成就', hint: '没有任何遗漏', category: 'collection', icon: 'crown' },
    /* 隐藏秘密 */
    { id: 'ach_sec_01', name: '打破第四面墙', description: '发现世界的真相', hint: '某些不对劲的地方值得注意', category: 'secret', icon: 'eye' },
    { id: 'ach_sec_02', name: '源代码', description: '发现魔法的本质', hint: '在魔法世界寻找异常', category: 'secret', icon: 'eye' },
    { id: 'ach_sec_03', name: '递归深渊', description: '发现模拟中的模拟', hint: '在科幻世界寻找真相', category: 'secret', icon: 'eye' },
    { id: 'ach_sec_04', name: '轮回记忆', description: '发现古老装置的秘密', hint: '在废土上寻找过去的痕迹', category: 'secret', icon: 'eye' },
    { id: 'ach_sec_05', name: '真相大白', description: '发现所有世界的真相', hint: '在每个世界都寻找隐藏的秘密', category: 'secret', icon: 'eye' },
    { id: 'ach_sec_06', name: '超越传说', description: '解锁第一个隐藏结局', hint: '某些结局的触发条件很特别', category: 'secret', icon: 'star' },
    { id: 'ach_sec_07', name: '隐藏猎人', description: '解锁5个隐藏结局', hint: '继续寻找隐藏结局', category: 'secret', icon: 'star' },
    { id: 'ach_sec_08', name: '真正的主角', description: '解锁所有隐藏结局', hint: '找到所有的隐藏结局', category: 'secret', icon: 'crown' },
    { id: 'ach_sec_09', name: '探索者', description: '发现第一个隐藏线索', hint: '注意游戏中的异常提示', category: 'secret', icon: 'search' },
    { id: 'ach_sec_10', name: '侦探', description: '发现所有隐藏线索', hint: '收集每一条隐藏线索', category: 'secret', icon: 'search' },
  ];

  // Add more filler achievements to reach 80+
  const fillerNames = ['初出茅庐', '小试牛刀', '渐入佳境', '炉火纯青', '出神入化',
    '百折不挠', '千锤百炼', '万古流芳', '名垂青史', '功成名就',
    '一帆风顺', '逆境求生', '绝处逢生', '化险为夷', '转危为安',
    '机缘巧合', '命中注定', '天命难违', '逆天而行', '改天换地',
    '默默无闻', '声名鹊起', '名满天下', '举世闻名', '万古长青',
    '独来独往', '群龙之首', '众星捧月', '孤家寡人', '桃李满天下',
    '学富五车', '才高八斗', '满腹经纶', '博古通今', '学贯中西',
    '武冠三军', '百战百胜', '攻无不克', '战无不胜', '所向披靡'];

  for (let i = 0; i < fillerNames.length; i++) {
    const cat = i < 8 ? 'world' : i < 16 ? 'stat' : i < 24 ? 'special' : i < 32 ? 'collection' : 'secret';
    baseAchievements.push({
      id: `ach_filler_${i}`,
      name: fillerNames[i]!,
      description: `完成特定条件解锁此成就`,
      hint: '在游戏中探索以发现如何解锁',
      category: cat as AchievementCategory,
      icon: 'zap',
    });
  }

  // Mark some as unlocked with dates
  return baseAchievements.map((a, i) => ({
    ...a,
    unlocked: i < 21,
    unlockedAt: i < 21 ? `2024-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}` : undefined,
  }));
}

const ALL_ACHIEVEMENTS = generateAchievements();

/* ------------------------------------------------------------------ */
/*  Mock Data — World Progress                                         */
/* ------------------------------------------------------------------ */
function generateWorldProgress(): WorldProgress[] {
  return [
    { id: 'cultivation', name: '修仙界', color: '#2DD4A0', endingsFound: 7, endingsTotal: 30, achievementsUnlocked: 12, achievementsTotal: 16, hiddenFound: 1, hiddenTotal: 3, playCount: 15, bestEnding: '一代剑仙', identityCompletion: [100, 100, 50, 0, 33, 0] },
    { id: 'magic', name: '魔法大陆', color: '#9B6BFF', endingsFound: 4, endingsTotal: 30, achievementsUnlocked: 8, achievementsTotal: 16, hiddenFound: 1, hiddenTotal: 3, playCount: 8, bestEnding: '大贤者', identityCompletion: [50, 100, 0, 0, 0, 33] },
    { id: 'scifi', name: '科幻星际', color: '#00D4FF', endingsFound: 3, endingsTotal: 30, achievementsUnlocked: 5, achievementsTotal: 16, hiddenFound: 1, hiddenTotal: 3, playCount: 5, bestEnding: '星际联邦之父', identityCompletion: [33, 100, 0, 0, 0, 0] },
    { id: 'apocalypse', name: '末日废土', color: '#FF6B2D', endingsFound: 2, endingsTotal: 30, achievementsUnlocked: 4, achievementsTotal: 16, hiddenFound: 1, hiddenTotal: 3, playCount: 4, bestEnding: '新世界的黎明', identityCompletion: [50, 0, 0, 100, 0, 0] },
    { id: 'wuxia', name: '古代武侠', color: '#FF2D55', endingsFound: 5, endingsTotal: 30, achievementsUnlocked: 10, achievementsTotal: 16, hiddenFound: 1, hiddenTotal: 3, playCount: 12, bestEnding: '一代宗师', identityCompletion: [100, 100, 50, 33, 0, 0] },
  ];
}

const WORLD_PROGRESS = generateWorldProgress();

/* ------------------------------------------------------------------ */
/*  Hidden Clues Data                                                  */
/* ------------------------------------------------------------------ */
const ALL_CLUES = [
  { id: 1, text: '当五个世界的命运交织在一起，真正的道路才会显现...', discovered: true, source: '修仙界 · 隐藏事件' },
  { id: 2, text: '代码与符文，本质并无不同。当0和1的排列组合触及灵魂...', discovered: true, source: '魔法大陆 · 真相之眼' },
  { id: 3, text: '如果这个世界是模拟的，那么运行模拟的设备又在哪个世界？', discovered: true, source: '科幻星际 · 模拟的模拟' },
  { id: 4, text: '五个末日，五种绝望。但如果你在每一次轮回中都做出不同的选择...', discovered: true, source: '末日废土 · 轮回之人' },
  { id: 5, text: '五个世界，一个真相。当你在每个世界都留下自己的痕迹...', discovered: true, source: '古代武侠 · 执笔者' },
  { id: 6, text: '你以为是你在阅读这个故事，但或许，故事也在阅读你。', discovered: true, source: '古代武侠 · 执笔者' },
  { id: 7, text: '???????????????????????', discovered: false, hint: '在某个世界中达到极致的...' },
  { id: 8, text: '???????????????????????', discovered: false, hint: '同时与多位角色建立深厚羁绊...' },
  { id: 9, text: '???????????????????????', discovered: false, hint: '找到所有隐藏事件的触发条件...' },
  { id: 10, text: '???????????????????????', discovered: false, hint: '当所有线索汇聚在一起...' },
];

/* ------------------------------------------------------------------ */
/*  Category config helpers                                            */
/* ------------------------------------------------------------------ */
function categoryColor(cat: EndingCategory): string {
  const map: Record<EndingCategory, string> = {
    normal: '#8A8AB8', good: '#D4A843', bad: '#C84B4B',
    harem: '#E86BB8', secret: '#9B6BFF', hidden: '#FFD700',
  };
  return map[cat];
}

function categoryLabel(cat: EndingCategory): string {
  const map: Record<EndingCategory, string> = {
    normal: '普通', good: '传奇', bad: '悲剧',
    harem: '后宫', secret: '秘密', hidden: '隐藏',
  };
  return map[cat];
}

/* ------------------------------------------------------------------ */
/*  Achievement Icon Component                                         */
/* ------------------------------------------------------------------ */
function AchievementIcon({ name, size = 20, color = '#D4A843' }: { name: string; size?: number; color?: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    globe: <Globe size={size} style={{ color }} />,
    star: <Star size={size} style={{ color }} />,
    sword: <Zap size={size} style={{ color }} />,
    skull: <Lock size={size} style={{ color }} />,
    sparkles: <Sparkles size={size} style={{ color }} />,
    rocket: <Zap size={size} style={{ color }} />,
    sun: <Star size={size} style={{ color }} />,
    trophy: <Trophy size={size} style={{ color }} />,
    zap: <Zap size={size} style={{ color }} />,
    brain: <Eye size={size} style={{ color }} />,
    heart: <Heart size={size} style={{ color }} />,
    clover: <Sparkles size={size} style={{ color }} />,
    'trending-down': <Target size={size} style={{ color }} />,
    'bar-chart': <ScrollText size={size} style={{ color }} />,
    clock: <Clock size={size} style={{ color }} />,
    infinity: <Sparkles size={size} style={{ color }} />,
    timer: <Clock size={size} style={{ color }} />,
    refresh: <RotateLeftIcon size={size} color={color} />,
    map: <Globe size={size} style={{ color }} />,
    crown: <Trophy size={size} style={{ color }} />,
    book: <ScrollText size={size} style={{ color }} />,
    eye: <Eye size={size} style={{ color }} />,
    search: <Search size={size} style={{ color }} />,
  };
  return <>{iconMap[name] || <Sparkles size={size} style={{ color }} />}</>;
}

function RotateLeftIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Circular Progress Ring                                             */
/* ------------------------------------------------------------------ */
function CircularProgress({ percentage, color, size = 80, strokeWidth = 6, children }: {
  percentage: number; color: string; size?: number; strokeWidth?: number; children?: React.ReactNode;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="#1A1A3A" strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Ending Detail Modal                                                */
/* ------------------------------------------------------------------ */
function EndingDetailModal({ ending, onClose }: { ending: EndingItem; onClose: () => void }) {
  const worldColor = WORLDS.find(w => w.id === ending.worldId)?.color || '#D4A843';
  const catColor = categoryColor(ending.category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(10, 10, 26, 0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
        className="relative w-full max-w-[min(600px,92vw)] max-h-[80vh] overflow-y-auto rounded-2xl border border-border-subtle bg-bg-secondary p-5 sm:p-8"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-glow transition-colors"
        >
          <X size={16} />
        </button>

        {/* Category badge */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold font-body"
            style={{ border: `1px solid ${catColor}`, color: catColor, background: `${catColor}15` }}
          >
            {categoryLabel(ending.category)}结局
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-2">
          「{ending.title}」
        </h2>

        {/* World */}
        <p className="font-body text-sm mb-4" style={{ color: worldColor }}>
          {ending.worldName} · {ending.identityName}
        </p>

        {/* Description */}
        <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
          {ending.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: '享年', value: `${ending.age}岁` },
            { label: '巅峰属性', value: `${ending.highestStat.name}` },
            { label: '属性值', value: `${ending.highestStat.value}` },
          ].map(s => (
            <div key={s.label} className="text-center px-3 py-2 rounded-lg bg-bg-tertiary/60 border border-border-subtle">
              <p className="font-body text-xs text-text-muted">{s.label}</p>
              <p className="font-mono text-sm font-bold text-text-primary">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Conditions */}
        <div className="px-4 py-3 rounded-lg bg-bg-tertiary/40 border border-border-subtle">
          <p className="font-body text-xs text-text-muted mb-1">达成条件</p>
          <p className="font-body text-sm text-text-secondary">{ending.conditions}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Gallery Page                                                  */
/* ------------------------------------------------------------------ */
export default function Gallery() {
  const navigate = useNavigate();
  const [activeWorldTab, setActiveWorldTab] = useState<WorldId>('all');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<CategoryFilter>('all');
  const [activeAchTab, setActiveAchTab] = useState<AchievementCategory>('all');
  const [selectedEnding, setSelectedEnding] = useState<EndingItem | null>(null);
  const [endingSearch, setEndingSearch] = useState('');

  const easeSmooth = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

  /* Filtered endings */
  const filteredEndings = useMemo(() => {
    let list = ALL_ENDINGS;
    if (activeWorldTab !== 'all') {
      list = list.filter(e => e.worldId === activeWorldTab);
    }
    if (activeCategoryFilter !== 'all') {
      list = list.filter(e => e.category === activeCategoryFilter);
    }
    if (endingSearch.trim()) {
      const q = endingSearch.toLowerCase();
      list = list.filter(e => e.title.toLowerCase().includes(q) || e.worldName.includes(q));
    }
    return list;
  }, [activeWorldTab, activeCategoryFilter, endingSearch]);

  /* Filtered achievements */
  const filteredAchievements = useMemo(() => {
    if (activeAchTab === 'all') return ALL_ACHIEVEMENTS;
    return ALL_ACHIEVEMENTS.filter(a => a.category === activeAchTab);
  }, [activeAchTab]);

  /* Stats */
  const totalFound = ALL_ENDINGS.filter(e => e.discovered).length;
  const totalEndings = ALL_ENDINGS.length;
  const totalAchUnlocked = ALL_ACHIEVEMENTS.filter(a => a.unlocked).length;
  const totalAchievements = ALL_ACHIEVEMENTS.length;
  const totalClues = ALL_CLUES.filter(c => c.discovered).length;

  /* Ref for scroll into view */
  const endingsGridRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-[100dvh] relative">
      {/* ── Background ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(/home-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.15,
        }}
      />
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'rgba(10, 10, 26, 0.88)' }} />

      {/* ── Content ── */}
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeSmooth }}
          className="sticky top-0 z-40 px-4 sm:px-6 py-4 border-b border-border-subtle"
          style={{ background: 'rgba(10, 10, 26, 0.9)', backdropFilter: 'blur(12px)' }}
        >
          <div className="max-w-[1280px] mx-auto flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-border-subtle bg-bg-tertiary text-text-secondary hover:text-text-primary hover:border-border-glow transition-colors duration-150"
            >
              <ArrowLeft size={16} />
            </motion.button>

            <h1 className="font-display text-2xl sm:text-3xl font-black text-text-primary" style={{ textShadow: '0 0 30px rgba(212, 168, 67, 0.3)' }}>
              传说图鉴
            </h1>

            <div className="text-right">
              <p className="font-mono text-xs text-text-secondary">{totalFound}/{totalEndings} 结局</p>
              <p className="font-mono text-xs text-text-secondary">{totalAchUnlocked}/{totalAchievements} 成就</p>
            </div>
          </div>
        </motion.header>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-20">

          {/* ═══════════ World Progress ═══════════ */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeSmooth }}
            className="mt-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              <h2 className="font-display text-xl font-bold text-text-primary">世界完成度</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {WORLD_PROGRESS.map((world, i) => {
                const pct = Math.round((world.endingsFound / world.endingsTotal) * 100);
                return (
                  <motion.div
                    key={world.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: easeSmooth }}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-2xl border border-border-subtle bg-bg-secondary p-4 sm:p-5 flex flex-col items-center"
                  >
                    {/* World color bar */}
                    <div className="w-full h-1 rounded-full mb-4" style={{ background: world.color }} />

                    <h3 className="font-display text-lg font-bold mb-3" style={{ color: world.color }}>{world.name}</h3>

                    <CircularProgress percentage={pct} color={world.color} size={90} strokeWidth={6}>
                      <div className="text-center">
                        <span className="font-mono text-xl font-bold text-text-primary">{pct}%</span>
                        <p className="font-mono text-[10px] text-text-secondary">{world.endingsFound}/{world.endingsTotal}</p>
                      </div>
                    </CircularProgress>

                    <div className="mt-4 w-full space-y-1.5">
                      <div className="flex justify-between">
                        <span className="font-body text-xs text-text-secondary">结局</span>
                        <span className="font-mono text-xs text-text-primary">{world.endingsFound}/{world.endingsTotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-xs text-text-secondary">成就</span>
                        <span className="font-mono text-xs text-text-primary">{world.achievementsUnlocked}/{world.achievementsTotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-xs text-text-secondary">隐藏</span>
                        <span className="font-mono text-xs text-text-primary">{world.hiddenFound}/{world.hiddenTotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-xs text-text-secondary">游玩</span>
                        <span className="font-mono text-xs text-text-primary">{world.playCount}次</span>
                      </div>
                    </div>

                    {/* Identity mini bars */}
                    <div className="mt-3 flex gap-1">
                      {world.identityCompletion.map((pct, j) => (
                        <div
                          key={j}
                          className="w-4 h-1 rounded-sm"
                          style={{ background: pct > 0 ? world.color : '#1A1A3A' }}
                          title={`身份${j + 1}: ${pct}%`}
                        />
                      ))}
                    </div>

                    {world.bestEnding && (
                      <p className="mt-2 font-body text-[10px] text-text-muted truncate max-w-full">
                        最佳: {world.bestEnding}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ═══════════ Ending Collection ═══════════ */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: easeSmooth }}
            className="mt-12"
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <h2 className="font-display text-xl font-bold text-text-primary">已收集结局</h2>
                <span className="font-mono text-sm text-text-secondary ml-2">{totalFound}/{totalEndings}</span>
              </div>

              {/* Search */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  value={endingSearch}
                  onChange={e => setEndingSearch(e.target.value)}
                  placeholder="搜索结局..."
                  className="pl-8 pr-4 py-1.5 rounded-full bg-bg-tertiary border border-border-subtle text-text-primary text-sm font-body focus:outline-none focus:border-border-glow w-40 sm:w-52"
                />
              </div>
            </div>

            {/* World tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {[{ id: 'all' as WorldId, name: '全部', color: '#F0E6D3' }, ...WORLDS].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveWorldTab(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-sm font-bold transition-all duration-200 ${
                    activeWorldTab === tab.id
                      ? 'bg-bg-tertiary border border-border-subtle text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: tab.color }} />
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {ENDING_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryFilter(cat.id)}
                  className={`px-3 py-1.5 rounded-full font-body text-xs font-bold transition-all duration-200 border ${
                    activeCategoryFilter === cat.id
                      ? 'border-border-glow text-text-primary bg-bg-tertiary'
                      : 'border-transparent text-text-muted hover:text-text-secondary'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Ending Grid */}
            <div ref={endingsGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              <AnimatePresence mode="wait">
                {filteredEndings.map((ending, i) => (
                  <motion.div
                    key={ending.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: i < 20 ? i * 0.03 : 0, ease: easeSmooth }}
                    whileHover={ending.discovered ? { scale: 1.03, y: -4 } : {}}
                    onClick={() => ending.discovered && setSelectedEnding(ending)}
                    className={`relative rounded-xl border p-3 sm:p-4 cursor-default ${
                      ending.discovered
                        ? 'bg-bg-secondary cursor-pointer'
                        : 'bg-bg-secondary/50 border-dashed'
                    }`}
                    style={ending.discovered ? {
                      borderColor: `${categoryColor(ending.category)}40`,
                    } : {
                      borderColor: '#2A2A5A',
                    }}
                  >
                    {/* Category badge */}
                    {ending.discovered && (
                      <span
                        className="absolute top-3 right-3 px-2 py-0.5 rounded-full font-body text-[10px] font-bold"
                        style={{
                          color: categoryColor(ending.category),
                          background: `${categoryColor(ending.category)}15`,
                          border: `1px solid ${categoryColor(ending.category)}30`,
                        }}
                      >
                        {categoryLabel(ending.category)}
                      </span>
                    )}

                    {/* Lock icon for undiscovered */}
                    {!ending.discovered && (
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-bg-tertiary flex items-center justify-center">
                          <Lock size={20} className="text-text-muted" />
                        </div>
                      </div>
                    )}

                    <h3 className={`font-body text-base font-bold mb-1 ${ending.discovered ? 'text-text-primary' : 'text-text-muted'}`}>
                      {ending.title}
                    </h3>

                    <p className={`font-body text-xs mb-3 line-clamp-1 ${ending.discovered ? 'text-text-secondary' : 'text-text-muted'}`}>
                      {ending.description}
                    </p>

                    {ending.discovered ? (
                      <>
                        <div className="h-px w-full mb-2" style={{ background: `${categoryColor(ending.category)}30` }} />
                        <p className="font-body text-[11px] text-text-muted truncate">
                          {ending.conditions}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-body text-[10px] px-1.5 py-0.5 rounded" style={{ background: `${WORLDS.find(w => w.id === ending.worldId)?.color}15`, color: WORLDS.find(w => w.id === ending.worldId)?.color }}>
                            {ending.worldName}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="h-px w-full bg-border-subtle/50 mb-2" />
                        <p className="font-body text-[11px] text-text-muted italic">
                          线索: {ending.clue}
                        </p>
                      </>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredEndings.length === 0 && (
              <div className="text-center py-16">
                <Search size={40} className="mx-auto text-text-muted mb-3" />
                <p className="font-body text-text-secondary">未找到匹配的结局</p>
              </div>
            )}
          </motion.section>

          {/* ═══════════ Achievements ═══════════ */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: easeSmooth }}
            className="mt-14"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              <h2 className="font-display text-xl font-bold text-text-primary">成就殿堂</h2>
              <span className="font-mono text-sm text-text-secondary ml-2">{totalAchUnlocked}/{totalAchievements}</span>
            </div>

            {/* Achievement category tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {ACHIEVEMENT_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveAchTab(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-sm font-bold transition-all duration-200 ${
                    activeAchTab === cat.id
                      ? 'bg-bg-tertiary border border-border-subtle text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {filteredAchievements.map((ach, i) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i < 30 ? i * 0.02 : 0, ease: easeSmooth }}
                  whileHover={ach.unlocked ? { scale: 1.05 } : { scale: 1.02 }}
                  className={`aspect-square rounded-xl border p-3 flex flex-col items-center justify-center text-center ${
                    ach.unlocked
                      ? 'bg-bg-secondary border-accent-gold/40'
                      : 'bg-bg-secondary/50 border-dashed border-border-subtle'
                  }`}
                  style={ach.unlocked ? { boxShadow: '0 0 20px rgba(212, 168, 67, 0.08)' } : {}}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    ach.unlocked ? 'bg-accent-gold/15' : 'bg-bg-tertiary'
                  }`}>
                    {ach.unlocked ? (
                      <AchievementIcon name={ach.icon} size={20} color="#D4A843" />
                    ) : (
                      <Lock size={18} className="text-text-muted" />
                    )}
                  </div>

                  {/* Name */}
                  <p className={`font-body text-xs font-bold mb-1 truncate w-full ${ach.unlocked ? 'text-text-primary' : 'text-text-muted'}`}>
                    {ach.unlocked ? ach.name : '???'}
                  </p>

                  {/* Description */}
                  <p className={`font-body text-[10px] leading-tight line-clamp-2 ${ach.unlocked ? 'text-text-secondary' : 'text-text-muted italic'}`}>
                    {ach.unlocked ? ach.description : ach.hint}
                  </p>

                  {/* Date */}
                  {ach.unlocked && ach.unlockedAt && (
                    <p className="font-mono text-[9px] text-text-muted mt-1.5">{ach.unlockedAt}</p>
                  )}

                  {/* Unlocked indicator */}
                  {ach.unlocked && (
                    <div className="absolute top-2 right-2">
                      <Unlock size={10} className="text-accent-gold" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ═══════════ Hidden Ending Clues ═══════════ */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: easeSmooth }}
            className="mt-14 mb-10"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              <h2
                className="font-display text-xl font-bold"
                style={{
                  background: 'linear-gradient(90deg, #2DD4A0, #9B6BFF, #00D4FF, #FF6B2D, #FF2D55)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                隐藏结局线索
              </h2>
              <span className="font-mono text-sm text-text-secondary ml-2">{totalClues}/10</span>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-bg-secondary p-5 sm:p-6">
              {/* Progress bar */}
              <div className="mb-5">
                <p className="font-body text-sm text-text-primary mb-2">
                  你已发现 <span className="text-accent-gold font-bold">{totalClues}</span>/10 条隐藏线索
                </p>
                <div className="w-full h-2 rounded-full bg-bg-tertiary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(totalClues / 10) * 100}%` }}
                    transition={{ duration: 1, ease: easeSmooth }}
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #2DD4A0, #9B6BFF, #00D4FF, #FF6B2D, #FF2D55)',
                    }}
                  />
                </div>
              </div>

              {/* Clue list */}
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
                {ALL_CLUES.map((clue, i) => (
                  <motion.div
                    key={clue.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: easeSmooth }}
                    className={`px-4 py-3 rounded-lg ${
                      clue.discovered
                        ? 'bg-bg-tertiary/60 border-l-[3px]'
                        : 'bg-bg-tertiary/30 border-l-[3px] border-dashed border-border-subtle'
                    }`}
                    style={clue.discovered ? {
                      borderLeftColor: '#FFD700',
                    } : {}}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {clue.discovered ? (
                        <Eye size={12} className="text-accent-gold" />
                      ) : (
                        <Lock size={12} className="text-text-muted" />
                      )}
                      <span className={`font-body text-xs font-bold ${clue.discovered ? 'text-text-primary' : 'text-text-muted'}`}>
                        {clue.discovered ? `线索 #${clue.id}` : `线索 #?`}
                      </span>
                      {clue.discovered && clue.source && (
                        <span className="font-body text-[10px] text-text-muted ml-auto">{clue.source}</span>
                      )}
                    </div>
                    <p className={`font-body text-sm leading-relaxed ${clue.discovered ? 'text-text-secondary italic' : 'text-text-muted'}`}>
                      {clue.discovered ? `"${clue.text}"` : clue.hint ? `提示: ${clue.hint}` : '????????????'}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* ── Ending Detail Modal ── */}
      <AnimatePresence>
        {selectedEnding && (
          <EndingDetailModal ending={selectedEnding} onClose={() => setSelectedEnding(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
