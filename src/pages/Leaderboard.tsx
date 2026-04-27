import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Medal,
  Clock,
  Star,
  Globe,
  Zap,
  ArrowLeft,
  Crown,
  Award,
  Sparkles,
} from 'lucide-react';
import { worlds } from '@/engine/worlds';

/* ──────────────────────── types ──────────────────────── */

interface LeaderboardEntry {
  rank: number;
  playerName: string;
  worldId: string;
  identityName: string;
  endingName: string;
  score: number;
  scoreLabel: string;
  topStat: { name: string; value: number };
  eventCount: number;
  achievementCount: number;
  date: string;
  isCurrentPlayer?: boolean;
}

interface PlayerStats {
  totalReincarnations: number;
  longestLife: { age: number; worldName: string; identityName: string };
  bestEnding: string;
  endingsCollected: number;
  totalEndings: number;
  achievementsUnlocked: number;
  totalAchievements: number;
  haremEndings: number;
  totalHaremEndings: number;
  hiddenEndings: number;
  totalHiddenEndings: number;
  worldExploration: Record<string, number>;
}

/* ──────────────────────── easing ──────────────────────── */

const easeGhost = [0.16, 1, 0.3, 1] as [number, number, number, number];
const easeSmooth = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

/* ──────────────────────── world color helper ──────────────────────── */

function getWorldColor(worldId: string): string {
  const map: Record<string, string> = {
    cultivation: '#2DD4A0',
    magic: '#9B6BFF',
    scifi: '#00D4FF',
    apocalypse: '#FF6B2D',
    wuxia: '#FF2D55',
  };
  return map[worldId] ?? '#4A4A8A';
}

function getWorldName(worldId: string): string {
  const w = worlds.find((x) => x.id === worldId);
  return w?.name ?? worldId;
}

/* ──────────────────────── mock data ──────────────────────── */

const mockEntries: Record<string, LeaderboardEntry[]> = {
  lifespan: [
    { rank: 1, playerName: '剑仙李逍遥', worldId: 'cultivation', identityName: '转世仙人', endingName: '天道之子', score: 847, scoreLabel: '847岁', topStat: { name: '体质', value: 200 }, eventCount: 342, achievementCount: 28, date: '今天', isCurrentPlayer: false },
    { rank: 2, playerName: '魔法少女小圆', worldId: 'magic', identityName: '龙血混血', endingName: '元素之主', score: 623, scoreLabel: '623岁', topStat: { name: '魔力', value: 198 }, eventCount: 289, achievementCount: 31, date: '昨天' },
    { rank: 3, playerName: '赛博行者', worldId: 'scifi', identityName: 'AI觉醒者', endingName: '机械飞升', score: 512, scoreLabel: '512岁', topStat: { name: '智力', value: 195 }, eventCount: 256, achievementCount: 24, date: '3天前' },
    { rank: 4, playerName: '废土之王', worldId: 'apocalypse', identityName: '新人类', endingName: '废土之王', score: 489, scoreLabel: '489岁', topStat: { name: '生存', value: 192 }, eventCount: 245, achievementCount: 22, date: '3天前' },
    { rank: 5, playerName: '绝世剑客', worldId: 'wuxia', identityName: '世家子弟', endingName: '一代宗师', score: 445, scoreLabel: '445岁', topStat: { name: '内力', value: 187 }, eventCount: 234, achievementCount: 26, date: '5天前' },
    { rank: 6, playerName: '青云弟子', worldId: 'cultivation', identityName: '宗门天才', endingName: '羽化登仙', score: 412, scoreLabel: '412岁', topStat: { name: '悟性', value: 185 }, eventCount: 198, achievementCount: 20, date: '1周前' },
    { rank: 7, playerName: '奥术大师', worldId: 'magic', identityName: '贵族法师', endingName: '大贤者', score: 398, scoreLabel: '398岁', topStat: { name: '魔力', value: 190 }, eventCount: 187, achievementCount: 19, date: '1周前' },
    { rank: 8, playerName: '时空旅人', worldId: 'scifi', identityName: '时空旅者', endingName: '维度行者', score: 356, scoreLabel: '356岁', topStat: { name: '智力', value: 188 }, eventCount: 176, achievementCount: 17, date: '2周前' },
    { rank: 9, playerName: '避难所所长', worldId: 'apocalypse', identityName: '科学家', endingName: '新纪元', score: 334, scoreLabel: '334岁', topStat: { name: '知识', value: 180 }, eventCount: 165, achievementCount: 15, date: '2周前' },
    { rank: 10, playerName: '魔道至尊', worldId: 'wuxia', identityName: '魔教后人', endingName: '魔道至尊', score: 312, scoreLabel: '312岁', topStat: { name: '内力', value: 175 }, eventCount: 154, achievementCount: 18, date: '2周前' },
    { rank: 11, playerName: '散修老李', worldId: 'cultivation', identityName: '散修野客', endingName: '逍遥散仙', score: 298, scoreLabel: '298岁', topStat: { name: '机缘', value: 170 }, eventCount: 143, achievementCount: 14, date: '3周前' },
    { rank: 12, playerName: '圣骑士长', worldId: 'magic', identityName: '圣光骑士', endingName: '圣光之盾', score: 287, scoreLabel: '287岁', topStat: { name: '生命', value: 200 }, eventCount: 138, achievementCount: 16, date: '3周前' },
    { rank: 13, playerName: '星际游侠', worldId: 'scifi', identityName: '外星混血', endingName: '星际传奇', score: 276, scoreLabel: '276岁', topStat: { name: '体能', value: 168 }, eventCount: 132, achievementCount: 13, date: '1个月前' },
    { rank: 14, playerName: '掠夺者首领', worldId: 'apocalypse', identityName: '掠夺者', endingName: '废土霸主', score: 265, scoreLabel: '265岁', topStat: { name: '生存', value: 165 }, eventCount: 127, achievementCount: 12, date: '1个月前' },
    { rank: 15, playerName: '朝廷密探007', worldId: 'wuxia', identityName: '朝廷密探', endingName: '暗影守护者', score: 254, scoreLabel: '254岁', topStat: { name: '武学', value: 162 }, eventCount: 121, achievementCount: 14, date: '1个月前' },
    { rank: 16, playerName: '妖族少主', worldId: 'cultivation', identityName: '妖族血脉', endingName: '万妖之王', score: 243, scoreLabel: '243岁', topStat: { name: '体质', value: 195 }, eventCount: 115, achievementCount: 11, date: '1个月前' },
    { rank: 17, playerName: '德鲁伊长老', worldId: 'magic', identityName: '荒野德鲁伊', endingName: '自然化身', score: 232, scoreLabel: '232岁', topStat: { name: '力量', value: 170 }, eventCount: 110, achievementCount: 13, date: '2个月前' },
    { rank: 18, playerName: '机械战神', worldId: 'scifi', identityName: '机械改造人', endingName: '机械飞升', score: 221, scoreLabel: '221岁', topStat: { name: '科技等级', value: 200 }, eventCount: 105, achievementCount: 10, date: '2个月前' },
    { rank: 19, playerName: '变异体女王', worldId: 'apocalypse', identityName: '变异者', endingName: '进化之巅', score: 210, scoreLabel: '210岁', topStat: { name: '变异度', value: 180 }, eventCount: 99, achievementCount: 9, date: '2个月前' },
    { rank: 20, playerName: '异域刀客', worldId: 'wuxia', identityName: '异域来客', endingName: '西域传奇', score: 199, scoreLabel: '199岁', topStat: { name: '福缘', value: 158 }, eventCount: 93, achievementCount: 8, date: '2个月前' },
  ],
  legendary: [
    { rank: 1, playerName: '神秘转生者', worldId: 'cultivation', identityName: '转世仙人', endingName: '天道之子', score: 10000, scoreLabel: '10000分', topStat: { name: '气运', value: 200 }, eventCount: 567, achievementCount: 45, date: '今天' },
    { rank: 2, playerName: '维度行者', worldId: 'scifi', identityName: '时空旅者', endingName: '维度行者', score: 9500, scoreLabel: '9500分', topStat: { name: '运气', value: 198 }, eventCount: 534, achievementCount: 42, date: '昨天' },
    { rank: 3, playerName: '元素之主', worldId: 'magic', identityName: '龙血混血', endingName: '元素之主', score: 9000, scoreLabel: '9000分', topStat: { name: '元素亲和', value: 200 }, eventCount: 498, achievementCount: 40, date: '3天前' },
    { rank: 4, playerName: '废土王者', worldId: 'apocalypse', identityName: '新人类', endingName: '废土之王', score: 8500, scoreLabel: '8500分', topStat: { name: '机遇', value: 195 }, eventCount: 476, achievementCount: 38, date: '5天前' },
    { rank: 5, playerName: '一代宗师', worldId: 'wuxia', identityName: '世家子弟', endingName: '一代宗师', score: 8000, scoreLabel: '8000分', topStat: { name: '内力', value: 196 }, eventCount: 445, achievementCount: 36, date: '1周前' },
    { rank: 6, playerName: '魔道至尊', worldId: 'wuxia', identityName: '魔教后人', endingName: '魔道至尊', score: 7800, scoreLabel: '7800分', topStat: { name: '内力', value: 194 }, eventCount: 423, achievementCount: 35, date: '1周前' },
    { rank: 7, playerName: '机械飞升者', worldId: 'scifi', identityName: 'AI觉醒者', endingName: '机械飞升', score: 7600, scoreLabel: '7600分', topStat: { name: '科技等级', value: 200 }, eventCount: 412, achievementCount: 34, date: '2周前' },
    { rank: 8, playerName: '圣光使者', worldId: 'magic', identityName: '圣光骑士', endingName: '圣光之盾', score: 7200, scoreLabel: '7200分', topStat: { name: '魅力', value: 190 }, eventCount: 389, achievementCount: 32, date: '2周前' },
    { rank: 9, playerName: '妖族大帝', worldId: 'cultivation', identityName: '妖族血脉', endingName: '万妖之王', score: 7000, scoreLabel: '7000分', topStat: { name: '体质', value: 199 }, eventCount: 378, achievementCount: 31, date: '2周前' },
    { rank: 10, playerName: '新纪元开创者', worldId: 'apocalypse', identityName: '科学家', endingName: '新纪元', score: 6800, scoreLabel: '6800分', topStat: { name: '知识', value: 192 }, eventCount: 356, achievementCount: 30, date: '3周前' },
    { rank: 11, playerName: '羽化登仙', worldId: 'cultivation', identityName: '宗门天才', endingName: '羽化登仙', score: 6600, scoreLabel: '6600分', topStat: { name: '悟性', value: 188 }, eventCount: 345, achievementCount: 28, date: '3周前' },
    { rank: 12, playerName: '暗影领主', worldId: 'magic', identityName: '暗影刺客', endingName: '暗影领主', score: 6400, scoreLabel: '6400分', topStat: { name: '力量', value: 185 }, eventCount: 334, achievementCount: 27, date: '1个月前' },
    { rank: 13, playerName: '星际传奇', worldId: 'scifi', identityName: '外星混血', endingName: '星际传奇', score: 6200, scoreLabel: '6200分', topStat: { name: '社交', value: 182 }, eventCount: 323, achievementCount: 26, date: '1个月前' },
    { rank: 14, playerName: '进化先驱', worldId: 'apocalypse', identityName: '变异者', endingName: '进化之巅', score: 6000, scoreLabel: '6000分', topStat: { name: '变异度', value: 196 }, eventCount: 312, achievementCount: 25, date: '1个月前' },
    { rank: 15, playerName: '朝廷守护者', worldId: 'wuxia', identityName: '朝廷密探', endingName: '暗影守护者', score: 5800, scoreLabel: '5800分', topStat: { name: '侠名', value: 188 }, eventCount: 298, achievementCount: 24, date: '1个月前' },
    { rank: 16, playerName: '散修逍遥', worldId: 'cultivation', identityName: '散修野客', endingName: '逍遥散仙', score: 5600, scoreLabel: '5600分', topStat: { name: '机缘', value: 185 }, eventCount: 287, achievementCount: 23, date: '2个月前' },
    { rank: 17, playerName: '自然之子', worldId: 'magic', identityName: '荒野德鲁伊', endingName: '自然化身', score: 5400, scoreLabel: '5400分', topStat: { name: '力量', value: 180 }, eventCount: 276, achievementCount: 22, date: '2个月前' },
    { rank: 18, playerName: '殖民英雄', worldId: 'scifi', identityName: '殖民者后代', endingName: '星际传奇', score: 5200, scoreLabel: '5200分', topStat: { name: '体能', value: 178 }, eventCount: 265, achievementCount: 21, date: '2个月前' },
    { rank: 19, playerName: '废土医生', worldId: 'apocalypse', identityName: '避难所居民', endingName: '废土之光', score: 5000, scoreLabel: '5000分', topStat: { name: '体质', value: 175 }, eventCount: 254, achievementCount: 20, date: '2个月前' },
    { rank: 20, playerName: '孤儿剑客', worldId: 'wuxia', identityName: '孤儿', endingName: '独行侠', score: 4800, scoreLabel: '4800分', topStat: { name: '福缘', value: 172 }, eventCount: 243, achievementCount: 19, date: '3个月前' },
  ],
  collection: [
    { rank: 1, playerName: '收集狂魔', worldId: 'magic', identityName: '贵族法师', endingName: '全知全能', score: 148, scoreLabel: '148个', topStat: { name: '魅力', value: 180 }, eventCount: 892, achievementCount: 78, date: '今天' },
    { rank: 2, playerName: '完美主义者', worldId: 'cultivation', identityName: '转世仙人', endingName: '天道之子', score: 142, scoreLabel: '142个', topStat: { name: '机缘', value: 175 }, eventCount: 845, achievementCount: 75, date: '昨天' },
    { rank: 3, playerName: '百科全书', worldId: 'scifi', identityName: 'AI觉醒者', endingName: '机械飞升', score: 135, scoreLabel: '135个', topStat: { name: '智力', value: 200 }, eventCount: 798, achievementCount: 72, date: '3天前' },
    { rank: 4, playerName: '废土学者', worldId: 'apocalypse', identityName: '科学家', endingName: '新纪元', score: 128, scoreLabel: '128个', topStat: { name: '知识', value: 188 }, eventCount: 734, achievementCount: 68, date: '5天前' },
    { rank: 5, playerName: '江湖百事通', worldId: 'wuxia', identityName: '农家少年', endingName: '一代宗师', score: 122, scoreLabel: '122个', topStat: { name: '侠名', value: 180 }, eventCount: 689, achievementCount: 65, date: '1周前' },
    { rank: 6, playerName: '灵根研究者', worldId: 'cultivation', identityName: '凡人子弟', endingName: '大器晚成', score: 115, scoreLabel: '115个', topStat: { name: '灵根', value: 185 }, eventCount: 634, achievementCount: 60, date: '1周前' },
    { rank: 7, playerName: '魔法研究员', worldId: 'magic', identityName: '平民学徒', endingName: '大贤者', score: 108, scoreLabel: '108个', topStat: { name: '魔力', value: 182 }, eventCount: 578, achievementCount: 56, date: '2周前' },
    { rank: 8, playerName: '星际探险家', worldId: 'scifi', identityName: '时空旅者', endingName: '维度行者', score: 102, scoreLabel: '102个', topStat: { name: '运气', value: 178 }, eventCount: 534, achievementCount: 52, date: '2周前' },
    { rank: 9, playerName: '废土拾荒王', worldId: 'apocalypse', identityName: '机械师', endingName: '废土之王', score: 95, scoreLabel: '95个', topStat: { name: '机遇', value: 175 }, eventCount: 498, achievementCount: 48, date: '3周前' },
    { rank: 10, playerName: '武林盟主', worldId: 'wuxia', identityName: '世家子弟', endingName: '一代宗师', score: 88, scoreLabel: '88个', topStat: { name: '内力', value: 190 }, eventCount: 456, achievementCount: 45, date: '3周前' },
    { rank: 11, playerName: '妖族探索者', worldId: 'cultivation', identityName: '妖族血脉', endingName: '万妖之王', score: 82, scoreLabel: '82个', topStat: { name: '体质', value: 188 }, eventCount: 423, achievementCount: 42, date: '1个月前' },
    { rank: 12, playerName: '暗影收藏家', worldId: 'magic', identityName: '暗影刺客', endingName: '暗影领主', score: 76, scoreLabel: '76个', topStat: { name: '力量', value: 180 }, eventCount: 389, achievementCount: 38, date: '1个月前' },
    { rank: 13, playerName: '机械大师', worldId: 'scifi', identityName: '机械改造人', endingName: '机械飞升', score: 70, scoreLabel: '70个', topStat: { name: '科技等级', value: 195 }, eventCount: 356, achievementCount: 35, date: '1个月前' },
    { rank: 14, playerName: '新人类先驱', worldId: 'apocalypse', identityName: '新人类', endingName: '进化之巅', score: 65, scoreLabel: '65个', topStat: { name: '变异度', value: 185 }, eventCount: 323, achievementCount: 32, date: '1个月前' },
    { rank: 15, playerName: '魔教收藏家', worldId: 'wuxia', identityName: '魔教后人', endingName: '魔道至尊', score: 60, scoreLabel: '60个', topStat: { name: '武学', value: 178 }, eventCount: 298, achievementCount: 30, date: '2个月前' },
    { rank: 16, playerName: '魔道遗孤', worldId: 'cultivation', identityName: '魔道遗孤', endingName: '魔道至尊', score: 55, scoreLabel: '55个', topStat: { name: '悟性', value: 176 }, eventCount: 276, achievementCount: 28, date: '2个月前' },
    { rank: 17, playerName: '圣光守护者', worldId: 'magic', identityName: '圣光骑士', endingName: '圣光之盾', score: 50, scoreLabel: '50个', topStat: { name: '生命', value: 200 }, eventCount: 254, achievementCount: 26, date: '2个月前' },
    { rank: 18, playerName: '外星使者', worldId: 'scifi', identityName: '外星混血', endingName: '星际传奇', score: 45, scoreLabel: '45个', topStat: { name: '社交', value: 172 }, eventCount: 232, achievementCount: 24, date: '2个月前' },
    { rank: 19, playerName: '掠夺之王', worldId: 'apocalypse', identityName: '掠夺者', endingName: '废土霸主', score: 40, scoreLabel: '40个', topStat: { name: '生存', value: 170 }, eventCount: 210, achievementCount: 22, date: '3个月前' },
    { rank: 20, playerName: '朝廷档案员', worldId: 'wuxia', identityName: '朝廷密探', endingName: '暗影守护者', score: 35, scoreLabel: '35个', topStat: { name: '侠名', value: 168 }, eventCount: 198, achievementCount: 20, date: '3个月前' },
  ],
  speedrun: [
    { rank: 1, playerName: '速通大师', worldId: 'wuxia', identityName: '孤儿', endingName: '独行侠', score: 18, scoreLabel: '18年', topStat: { name: '武学', value: 200 }, eventCount: 18, achievementCount: 12, date: '今天' },
    { rank: 2, playerName: '闪电侠', worldId: 'scifi', identityName: 'AI觉醒者', endingName: '机械飞升', score: 22, scoreLabel: '22年', topStat: { name: '智力', value: 200 }, eventCount: 22, achievementCount: 14, date: '昨天' },
    { rank: 3, playerName: '快刀手', worldId: 'magic', identityName: '暗影刺客', endingName: '暗影领主', score: 25, scoreLabel: '25年', topStat: { name: '力量', value: 188 }, eventCount: 25, achievementCount: 15, date: '3天前' },
    { rank: 4, playerName: ' rush', worldId: 'cultivation', identityName: '宗门天才', endingName: '羽化登仙', score: 28, scoreLabel: '28年', topStat: { name: '悟性', value: 185 }, eventCount: 28, achievementCount: 16, date: '3天前' },
    { rank: 5, playerName: '效率狂人', worldId: 'apocalypse', identityName: '新人类', endingName: '进化之巅', score: 31, scoreLabel: '31年', topStat: { name: '变异度', value: 180 }, eventCount: 31, achievementCount: 18, date: '5天前' },
    { rank: 6, playerName: '一剑封喉', worldId: 'wuxia', identityName: '异域来客', endingName: '西域传奇', score: 34, scoreLabel: '34年', topStat: { name: '内力', value: 178 }, eventCount: 34, achievementCount: 17, date: '1周前' },
    { rank: 7, playerName: '天才少年', worldId: 'cultivation', identityName: '宗门天才', endingName: '天道之子', score: 38, scoreLabel: '38年', topStat: { name: '气运', value: 195 }, eventCount: 38, achievementCount: 20, date: '1周前' },
    { rank: 8, playerName: '魔法神童', worldId: 'magic', identityName: '龙血混血', endingName: '元素之主', score: 41, scoreLabel: '41年', topStat: { name: '元素亲和', value: 192 }, eventCount: 41, achievementCount: 19, date: '2周前' },
    { rank: 9, playerName: '星际快车手', worldId: 'scifi', identityName: '机械改造人', endingName: '机械飞升', score: 44, scoreLabel: '44年', topStat: { name: '科技等级', value: 190 }, eventCount: 44, achievementCount: 21, date: '2周前' },
    { rank: 10, playerName: '末日求生专家', worldId: 'apocalypse', identityName: '避难所居民', endingName: '新纪元', score: 47, scoreLabel: '47年', topStat: { name: '知识', value: 185 }, eventCount: 47, achievementCount: 22, date: '2周前' },
    { rank: 11, playerName: '武道天才', worldId: 'wuxia', identityName: '世家子弟', endingName: '一代宗师', score: 52, scoreLabel: '52年', topStat: { name: '内力', value: 188 }, eventCount: 52, achievementCount: 23, date: '3周前' },
    { rank: 12, playerName: '修仙 rush', worldId: 'cultivation', identityName: '凡人子弟', endingName: '大器晚成', score: 56, scoreLabel: '56年', topStat: { name: '灵根', value: 182 }, eventCount: 56, achievementCount: 24, date: '3周前' },
    { rank: 13, playerName: '奥术 rush', worldId: 'magic', identityName: '贵族法师', endingName: '大贤者', score: 61, scoreLabel: '61年', topStat: { name: '魔力', value: 186 }, eventCount: 61, achievementCount: 25, date: '1个月前' },
    { rank: 14, playerName: '科技 rush', worldId: 'scifi', identityName: '殖民者后代', endingName: '星际传奇', score: 66, scoreLabel: '66年', topStat: { name: '体能', value: 180 }, eventCount: 66, achievementCount: 26, date: '1个月前' },
    { rank: 15, playerName: '废土 rush', worldId: 'apocalypse', identityName: '变异者', endingName: '进化之巅', score: 71, scoreLabel: '71年', topStat: { name: '变异度', value: 188 }, eventCount: 71, achievementCount: 27, date: '1个月前' },
    { rank: 16, playerName: '剑 rush', worldId: 'wuxia', identityName: '魔教后人', endingName: '魔道至尊', score: 78, scoreLabel: '78年', topStat: { name: '武学', value: 185 }, eventCount: 78, achievementCount: 28, date: '1个月前' },
    { rank: 17, playerName: '妖 rush', worldId: 'cultivation', identityName: '妖族血脉', endingName: '万妖之王', score: 85, scoreLabel: '85年', topStat: { name: '体质', value: 192 }, eventCount: 85, achievementCount: 29, date: '2个月前' },
    { rank: 18, playerName: '德鲁伊 rush', worldId: 'magic', identityName: '荒野德鲁伊', endingName: '自然化身', score: 92, scoreLabel: '92年', topStat: { name: '力量', value: 176 }, eventCount: 92, achievementCount: 30, date: '2个月前' },
    { rank: 19, playerName: '时空 rush', worldId: 'scifi', identityName: '时空旅者', endingName: '维度行者', score: 98, scoreLabel: '98年', topStat: { name: '运气', value: 190 }, eventCount: 98, achievementCount: 31, date: '2个月前' },
    { rank: 20, playerName: '机械 rush', worldId: 'apocalypse', identityName: '机械师', endingName: '废土之王', score: 105, scoreLabel: '105年', topStat: { name: '机遇', value: 170 }, eventCount: 105, achievementCount: 32, date: '2个月前' },
  ],
  exploration: [
    { rank: 1, playerName: '世界探索者', worldId: 'scifi', identityName: '时空旅者', endingName: '维度行者', score: 4876, scoreLabel: '4876事件', topStat: { name: '运气', value: 198 }, eventCount: 4876, achievementCount: 65, date: '今天' },
    { rank: 2, playerName: '全知者', worldId: 'magic', identityName: '贵族法师', endingName: '全知全能', score: 4521, scoreLabel: '4521事件', topStat: { name: '魔力', value: 196 }, eventCount: 4521, achievementCount: 62, date: '昨天' },
    { rank: 3, playerName: '修仙百事通', worldId: 'cultivation', identityName: '转世仙人', endingName: '天道之子', score: 4234, scoreLabel: '4234事件', topStat: { name: '机缘', value: 195 }, eventCount: 4234, achievementCount: 58, date: '3天前' },
    { rank: 4, playerName: '废土万事通', worldId: 'apocalypse', identityName: '新人类', endingName: '废土之王', score: 3890, scoreLabel: '3890事件', topStat: { name: '机遇', value: 190 }, eventCount: 3890, achievementCount: 54, date: '5天前' },
    { rank: 5, playerName: '江湖万事通', worldId: 'wuxia', identityName: '农家少年', endingName: '一代宗师', score: 3567, scoreLabel: '3567事件', topStat: { name: '福缘', value: 188 }, eventCount: 3567, achievementCount: 51, date: '1周前' },
    { rank: 6, playerName: '修真探索者', worldId: 'cultivation', identityName: '散修野客', endingName: '逍遥散仙', score: 3234, scoreLabel: '3234事件', topStat: { name: '气运', value: 185 }, eventCount: 3234, achievementCount: 48, date: '1周前' },
    { rank: 7, playerName: '魔法探险家', worldId: 'magic', identityName: '平民学徒', endingName: '大贤者', score: 2987, scoreLabel: '2987事件', topStat: { name: '幸运', value: 182 }, eventCount: 2987, achievementCount: 45, date: '2周前' },
    { rank: 8, playerName: '星际航海家', worldId: 'scifi', identityName: '外星混血', endingName: '星际传奇', score: 2765, scoreLabel: '2765事件', topStat: { name: '社交', value: 180 }, eventCount: 2765, achievementCount: 42, date: '2周前' },
    { rank: 9, playerName: '废土侦察兵', worldId: 'apocalypse', identityName: '变异者', endingName: '进化之巅', score: 2543, scoreLabel: '2543事件', topStat: { name: '变异度', value: 186 }, eventCount: 2543, achievementCount: 40, date: '3周前' },
    { rank: 10, playerName: '江湖游侠', worldId: 'wuxia', identityName: '孤儿', endingName: '独行侠', score: 2321, scoreLabel: '2321事件', topStat: { name: '内力', value: 178 }, eventCount: 2321, achievementCount: 38, date: '3周前' },
    { rank: 11, playerName: '妖族探索者', worldId: 'cultivation', identityName: '妖族血脉', endingName: '万妖之王', score: 2109, scoreLabel: '2109事件', topStat: { name: '体质', value: 192 }, eventCount: 2109, achievementCount: 36, date: '1个月前' },
    { rank: 12, playerName: '暗影探索者', worldId: 'magic', identityName: '暗影刺客', endingName: '暗影领主', score: 1987, scoreLabel: '1987事件', topStat: { name: '力量', value: 185 }, eventCount: 1987, achievementCount: 34, date: '1个月前' },
    { rank: 13, playerName: '科技探索者', worldId: 'scifi', identityName: 'AI觉醒者', endingName: '机械飞升', score: 1876, scoreLabel: '1876事件', topStat: { name: '智力', value: 200 }, eventCount: 1876, achievementCount: 32, date: '1个月前' },
    { rank: 14, playerName: '避难所探索者', worldId: 'apocalypse', identityName: '避难所居民', endingName: '新纪元', score: 1765, scoreLabel: '1765事件', topStat: { name: '知识', value: 180 }, eventCount: 1765, achievementCount: 30, date: '1个月前' },
    { rank: 15, playerName: '武林探索者', worldId: 'wuxia', identityName: '朝廷密探', endingName: '暗影守护者', score: 1654, scoreLabel: '1654事件', topStat: { name: '侠名', value: 176 }, eventCount: 1654, achievementCount: 28, date: '2个月前' },
    { rank: 16, playerName: '魔道探索者', worldId: 'cultivation', identityName: '魔道遗孤', endingName: '魔道至尊', score: 1543, scoreLabel: '1543事件', topStat: { name: '悟性', value: 180 }, eventCount: 1543, achievementCount: 26, date: '2个月前' },
    { rank: 17, playerName: '德鲁伊探索者', worldId: 'magic', identityName: '荒野德鲁伊', endingName: '自然化身', score: 1432, scoreLabel: '1432事件', topStat: { name: '元素亲和', value: 178 }, eventCount: 1432, achievementCount: 24, date: '2个月前' },
    { rank: 18, playerName: '机械探索者', worldId: 'scifi', identityName: '机械改造人', endingName: '机械飞升', score: 1321, scoreLabel: '1321事件', topStat: { name: '科技等级', value: 196 }, eventCount: 1321, achievementCount: 22, date: '2个月前' },
    { rank: 19, playerName: '掠夺探索者', worldId: 'apocalypse', identityName: '掠夺者', endingName: '废土霸主', score: 1210, scoreLabel: '1210事件', topStat: { name: '生存', value: 175 }, eventCount: 1210, achievementCount: 20, date: '3个月前' },
    { rank: 20, playerName: '世家探索者', worldId: 'wuxia', identityName: '世家子弟', endingName: '一代宗师', score: 1098, scoreLabel: '1098事件', topStat: { name: '福缘', value: 172 }, eventCount: 1098, achievementCount: 18, date: '3个月前' },
  ],
  achievements: [
    { rank: 1, playerName: '成就猎人', worldId: 'magic', identityName: '龙血混血', endingName: '全知全能', score: 78, scoreLabel: '78个', topStat: { name: '魅力', value: 190 }, eventCount: 1234, achievementCount: 78, date: '今天' },
    { rank: 2, playerName: '完美玩家', worldId: 'cultivation', identityName: '转世仙人', endingName: '天道之子', score: 76, scoreLabel: '76个', topStat: { name: '气运', value: 195 }, eventCount: 1156, achievementCount: 76, date: '昨天' },
    { rank: 3, playerName: '全成就大师', worldId: 'scifi', identityName: 'AI觉醒者', endingName: '机械飞升', score: 74, scoreLabel: '74个', topStat: { name: '智力', value: 200 }, eventCount: 1089, achievementCount: 74, date: '3天前' },
    { rank: 4, playerName: '废土成就王', worldId: 'apocalypse', identityName: '新人类', endingName: '废土之王', score: 68, scoreLabel: '68个', topStat: { name: '机遇', value: 188 }, eventCount: 987, achievementCount: 68, date: '5天前' },
    { rank: 5, playerName: '武林成就王', worldId: 'wuxia', identityName: '世家子弟', endingName: '一代宗师', score: 65, scoreLabel: '65个', topStat: { name: '侠名', value: 186 }, eventCount: 876, achievementCount: 65, date: '1周前' },
    { rank: 6, playerName: '修仙成就王', worldId: 'cultivation', identityName: '宗门天才', endingName: '羽化登仙', score: 62, scoreLabel: '62个', topStat: { name: '悟性', value: 185 }, eventCount: 798, achievementCount: 62, date: '1周前' },
    { rank: 7, playerName: '魔法成就王', worldId: 'magic', identityName: '贵族法师', endingName: '大贤者', score: 58, scoreLabel: '58个', topStat: { name: '魔力', value: 182 }, eventCount: 745, achievementCount: 58, date: '2周前' },
    { rank: 8, playerName: '科幻成就王', worldId: 'scifi', identityName: '时空旅者', endingName: '维度行者', score: 55, scoreLabel: '55个', topStat: { name: '运气', value: 180 }, eventCount: 698, achievementCount: 55, date: '2周前' },
    { rank: 9, playerName: '末日成就王', worldId: 'apocalypse', identityName: '科学家', endingName: '新纪元', score: 52, scoreLabel: '52个', topStat: { name: '知识', value: 178 }, eventCount: 654, achievementCount: 52, date: '3周前' },
    { rank: 10, playerName: '武侠成就王', worldId: 'wuxia', identityName: '魔教后人', endingName: '魔道至尊', score: 48, scoreLabel: '48个', topStat: { name: '内力', value: 176 }, eventCount: 587, achievementCount: 48, date: '3周前' },
    { rank: 11, playerName: '妖族成就者', worldId: 'cultivation', identityName: '妖族血脉', endingName: '万妖之王', score: 45, scoreLabel: '45个', topStat: { name: '体质', value: 188 }, eventCount: 534, achievementCount: 45, date: '1个月前' },
    { rank: 12, playerName: '暗影成就者', worldId: 'magic', identityName: '暗影刺客', endingName: '暗影领主', score: 42, scoreLabel: '42个', topStat: { name: '力量', value: 180 }, eventCount: 498, achievementCount: 42, date: '1个月前' },
    { rank: 13, playerName: '机械成就者', worldId: 'scifi', identityName: '机械改造人', endingName: '机械飞升', score: 40, scoreLabel: '40个', topStat: { name: '科技等级', value: 190 }, eventCount: 456, achievementCount: 40, date: '1个月前' },
    { rank: 14, playerName: '变异成就者', worldId: 'apocalypse', identityName: '变异者', endingName: '进化之巅', score: 38, scoreLabel: '38个', topStat: { name: '变异度', value: 185 }, eventCount: 423, achievementCount: 38, date: '1个月前' },
    { rank: 15, playerName: '游侠成就者', worldId: 'wuxia', identityName: '孤儿', endingName: '独行侠', score: 35, scoreLabel: '35个', topStat: { name: '福缘', value: 175 }, eventCount: 398, achievementCount: 35, date: '2个月前' },
    { rank: 16, playerName: '凡人成就者', worldId: 'cultivation', identityName: '凡人子弟', endingName: '大器晚成', score: 32, scoreLabel: '32个', topStat: { name: '灵根', value: 180 }, eventCount: 356, achievementCount: 32, date: '2个月前' },
    { rank: 17, playerName: '学徒成就者', worldId: 'magic', identityName: '平民学徒', endingName: '大贤者', score: 30, scoreLabel: '30个', topStat: { name: '幸运', value: 172 }, eventCount: 323, achievementCount: 30, date: '2个月前' },
    { rank: 18, playerName: '殖民成就者', worldId: 'scifi', identityName: '殖民者后代', endingName: '星际传奇', score: 28, scoreLabel: '28个', topStat: { name: '体能', value: 170 }, eventCount: 298, achievementCount: 28, date: '2个月前' },
    { rank: 19, playerName: '避难所英雄', worldId: 'apocalypse', identityName: '避难所居民', endingName: '废土之光', score: 25, scoreLabel: '25个', topStat: { name: '体质', value: 175 }, eventCount: 276, achievementCount: 25, date: '3个月前' },
    { rank: 20, playerName: '农家成就者', worldId: 'wuxia', identityName: '农家少年', endingName: '一代宗师', score: 22, scoreLabel: '22个', topStat: { name: '侠名', value: 168 }, eventCount: 254, achievementCount: 22, date: '3个月前' },
  ],
};

const playerStats: PlayerStats = {
  totalReincarnations: 23,
  longestLife: { age: 156, worldName: '修仙界', identityName: '凡人子弟' },
  bestEnding: '一代宗师',
  endingsCollected: 45,
  totalEndings: 150,
  achievementsUnlocked: 32,
  totalAchievements: 80,
  haremEndings: 3,
  totalHaremEndings: 15,
  hiddenEndings: 1,
  totalHiddenEndings: 5,
  worldExploration: {
    cultivation: 70,
    magic: 45,
    scifi: 30,
    apocalypse: 55,
    wuxia: 60,
  },
};

/* ──────────────────────── tabs config ──────────────────────── */

const tabs = [
  { key: 'lifespan', label: '最长寿命', icon: Clock, desc: '谁活得更久' },
  { key: 'legendary', label: '最强传奇', icon: Trophy, desc: '最稀有结局' },
  { key: 'collection', label: '最多收集', icon: Star, desc: '收集最多结局' },
  { key: 'speedrun', label: '速通记录', icon: Zap, desc: '最快通关' },
  { key: 'exploration', label: '世界探索', icon: Globe, desc: '触发最多事件' },
  { key: 'achievements', label: '成就大师', icon: Award, desc: '最多成就' },
] as const;

/* ──────────────────────── medal component ──────────────────────── */

function MedalIcon({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D4A84320] border-2 border-[#D4A843] shadow-[0_0_12px_rgba(212,168,67,0.3)]">
        <Crown className="w-5 h-5 text-[#D4A843]" />
      </div>
    );
  }
  if (rank === 2) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C0C0C020] border-2 border-[#C0C0C060] shadow-[0_0_10px_rgba(192,192,192,0.15)]">
        <Medal className="w-5 h-5 text-[#C0C0C0]" />
      </div>
    );
  }
  if (rank === 3) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#CD7F3220] border-2 border-[#CD7F3260] shadow-[0_0_10px_rgba(205,127,50,0.15)]">
        <Award className="w-5 h-5 text-[#CD7F32]" />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center w-10 h-10">
      <span className="font-mono text-lg font-bold text-[#4A4A7A]">{rank}</span>
    </div>
  );
}

/* ──────────────────────── ranking card (top 3) ──────────────────────── */

function TopRankingCard({
  entry,
  delay,
}: {
  entry: LeaderboardEntry;
  delay: number;
}) {
  const worldColor = getWorldColor(entry.worldId);

  const borderColor = entry.rank === 1 ? '#D4A843' : entry.rank === 2 ? '#C0C0C060' : '#CD7F3260';
  const shadowColor = entry.rank === 1 ? 'rgba(212,168,67,0.15)' : entry.rank === 2 ? 'rgba(192,192,192,0.1)' : 'rgba(205,127,50,0.1)';
  const scale = entry.rank === 1 ? 1 : entry.rank === 2 ? 0.98 : 0.96;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: easeGhost }}
      className="relative mb-4"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
    >
      <div
        className="relative rounded-2xl p-5 transition-all duration-150 hover:scale-[1.01] cursor-pointer"
        style={{
          background: `linear-gradient(135deg, #12122A 0%, #12122Aee 100%)`,
          border: `2px solid ${borderColor}`,
          boxShadow: `0 4px 24px ${shadowColor}, inset 0 1px 0 rgba(255,255,255,0.05)`,
        }}
      >
        {/* left accent bar */}
        <div
          className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
          style={{ backgroundColor: borderColor }}
        />

        <div className="flex items-center gap-4">
          {/* medal */}
          <MedalIcon rank={entry.rank} />

          {/* avatar */}
          <div
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-[#0A0A1A] font-bold text-lg"
            style={{ background: `linear-gradient(135deg, ${worldColor}, ${worldColor}80)` }}
          >
            {entry.playerName[0]}
          </div>

          {/* info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-body text-base font-bold text-[#F0E6D3] truncate">
                {entry.playerName}
              </span>
              {entry.isCurrentPlayer && (
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ backgroundColor: `${worldColor}30`, color: worldColor }}
                >
                  你
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-[#8A8AB8] font-body text-[13px]">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: worldColor }}
              />
              {getWorldName(entry.worldId)} · {entry.identityName} · {entry.endingName}
            </div>
            <div className="flex items-center gap-3 mt-1 font-mono text-xs text-[#4A4A7A]">
              <span>最高: {entry.topStat.name} {entry.topStat.value}</span>
              <span>·</span>
              <span>事件 {entry.eventCount}</span>
              <span>·</span>
              <span>成就 {entry.achievementCount}</span>
            </div>
          </div>

          {/* score */}
          <div className="text-right flex-shrink-0">
            <div className="font-mono text-2xl font-bold text-[#F0E6D3]">{entry.scoreLabel}</div>
            <div className="font-body text-xs text-[#4A4A7A] mt-0.5">{entry.date}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────── standard ranking card ──────────────────────── */

function StandardRankingCard({
  entry,
  delay,
}: {
  entry: LeaderboardEntry;
  delay: number;
}) {
  const worldColor = getWorldColor(entry.worldId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease: easeSmooth }}
      whileHover={{ scale: 1.01, backgroundColor: 'rgba(26,26,58,0.8)' }}
      className="relative mb-2 rounded-xl p-3.5 cursor-pointer transition-colors duration-150"
      style={{
        backgroundColor: '#12122A',
        border: '1px solid #2A2A5A',
      }}
    >
      <div className="flex items-center gap-3">
        {/* rank */}
        <div className="flex-shrink-0 w-10 text-center">
          <span className="font-mono text-lg font-bold text-[#4A4A7A]">{entry.rank}</span>
        </div>

        {/* avatar */}
        <div
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[#0A0A1A] font-bold text-sm"
          style={{ background: `linear-gradient(135deg, ${worldColor}, ${worldColor}80)` }}
        >
          {entry.playerName[0]}
        </div>

        {/* info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-body text-[15px] font-bold text-[#F0E6D3]">
              {entry.playerName}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[#8A8AB8] font-body text-[12px]">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: worldColor }}
            />
            {getWorldName(entry.worldId)} · {entry.identityName}
          </div>
        </div>

        {/* ending + score */}
        <div className="text-right flex-shrink-0">
          <div className="font-mono text-xl font-bold text-[#F0E6D3]">{entry.scoreLabel}</div>
          <div className="font-body text-[11px] text-[#4A4A7A]">{entry.date}</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────── main component ──────────────────────── */

export default function Leaderboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('lifespan');

  const entries = mockEntries[activeTab] ?? [];

  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);

  const worldList = [
    { id: 'cultivation', label: '修仙界' },
    { id: 'magic', label: '魔法大陆' },
    { id: 'scifi', label: '科幻星际' },
    { id: 'apocalypse', label: '末日废土' },
    { id: 'wuxia', label: '古代武侠' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0A0A1A] min-h-[100dvh]">
      {/* ──────── Header ──────── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easeGhost }}
        className="relative px-6 pt-6 pb-4"
      >
        {/* back button */}
        <button
          onClick={() => navigate('/')}
          className="absolute left-6 top-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-105"
          style={{ backgroundColor: '#1A1A3A', border: '1px solid #2A2A5A' }}
        >
          <ArrowLeft className="w-5 h-5 text-[#8A8AB8]" />
        </button>

        {/* title */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-1">
            <Trophy className="w-7 h-7 text-[#D4A843]" />
            <h1
              className="font-display text-[36px] font-black text-[#F0E6D3]"
              style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}
            >
              传奇排行榜
            </h1>
            <Trophy className="w-7 h-7 text-[#D4A843]" />
          </div>
          <p className="font-body text-sm text-[#8A8AB8]">最强转生者排名，看看你排第几</p>
        </div>

        {/* personal quick view */}
        <div className="absolute right-6 top-6 text-right">
          <div className="font-mono text-sm text-[#D4A843]">你的排名: #156</div>
          <div className="font-mono text-xs text-[#8A8AB8] mt-0.5">最佳: 156年</div>
        </div>
      </motion.header>

      {/* ──────── Category Tabs ──────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: easeGhost }}
        className="px-6 py-4"
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="relative flex items-center gap-2 px-4 py-2 rounded-full font-body text-[15px] font-bold transition-all duration-200"
                style={{
                  backgroundColor: isActive ? '#1A1A3A' : 'transparent',
                  border: isActive ? '1px solid #2A2A5A' : '1px solid transparent',
                  color: isActive ? '#F0E6D3' : '#8A8AB8',
                }}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-[#D4A843]"
                    transition={{ duration: 0.3, ease: easeSmooth }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ──────── Ranking List ──────── */}
      <div className="flex-1 px-6 pb-6 max-w-4xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {/* top 3 */}
            <div className="mb-2">
              {top3.map((entry, i) => (
                <TopRankingCard key={entry.rank} entry={entry} delay={i * 0.15} />
              ))}
            </div>

            {/* rest */}
            <div>
              {rest.map((entry, i) => (
                <StandardRankingCard key={entry.rank} entry={entry} delay={0.5 + i * 0.04} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ──────── Player Stats Section ──────── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: easeGhost }}
        className="px-6 pb-10 max-w-4xl mx-auto w-full"
      >
        <h2 className="font-display text-[22px] font-bold text-[#F0E6D3] mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#D4A843]" />
          你的传奇足迹
        </h2>

        <div
          className="rounded-2xl p-6"
          style={{
            backgroundColor: '#12122A',
            border: '1px solid #2A2A5A',
          }}
        >
          {/* stats grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-6">
            {/* total reincarnations */}
            <div className="text-center p-4 rounded-xl transition-all duration-150 hover:scale-[1.02]" style={{ backgroundColor: '#1A1A3A40' }}>
              <div className="font-body text-[13px] text-[#4A4A7A] mb-1">总转生次数</div>
              <div className="font-mono text-2xl font-bold text-[#F0E6D3]">{playerStats.totalReincarnations}次</div>
              <div className="font-body text-[12px] text-[#8A8AB8] mt-0.5">—</div>
            </div>

            {/* longest life */}
            <div className="text-center p-4 rounded-xl transition-all duration-150 hover:scale-[1.02]" style={{ backgroundColor: '#1A1A3A40' }}>
              <div className="font-body text-[13px] text-[#4A4A7A] mb-1">最长寿命</div>
              <div className="font-mono text-2xl font-bold text-[#F0E6D3]">{playerStats.longestLife.age}年</div>
              <div className="font-body text-[12px] text-[#8A8AB8] mt-0.5">
                {playerStats.longestLife.worldName} · {playerStats.longestLife.identityName}
              </div>
            </div>

            {/* best ending */}
            <div className="text-center p-4 rounded-xl transition-all duration-150 hover:scale-[1.02]" style={{ backgroundColor: '#1A1A3A40' }}>
              <div className="font-body text-[13px] text-[#4A4A7A] mb-1">最传奇结局</div>
              <div className="font-mono text-xl font-bold text-[#D4A843]">{playerStats.bestEnding}</div>
              <div className="font-body text-[12px] text-[#8A8AB8] mt-0.5">—</div>
            </div>

            {/* endings collected */}
            <div className="text-center p-4 rounded-xl transition-all duration-150 hover:scale-[1.02]" style={{ backgroundColor: '#1A1A3A40' }}>
              <div className="font-body text-[13px] text-[#4A4A7A] mb-1">收集结局</div>
              <div className="font-mono text-2xl font-bold text-[#F0E6D3]">
                {playerStats.endingsCollected}/{playerStats.totalEndings}
              </div>
              <div className="font-body text-[12px] text-[#8A8AB8] mt-0.5">
                {Math.round((playerStats.endingsCollected / playerStats.totalEndings) * 100)}%
              </div>
            </div>

            {/* achievements */}
            <div className="text-center p-4 rounded-xl transition-all duration-150 hover:scale-[1.02]" style={{ backgroundColor: '#1A1A3A40' }}>
              <div className="font-body text-[13px] text-[#4A4A7A] mb-1">解锁成就</div>
              <div className="font-mono text-2xl font-bold text-[#F0E6D3]">
                {playerStats.achievementsUnlocked}/{playerStats.totalAchievements}
              </div>
              <div className="font-body text-[12px] text-[#8A8AB8] mt-0.5">
                {Math.round((playerStats.achievementsUnlocked / playerStats.totalAchievements) * 100)}%
              </div>
            </div>

            {/* harem endings */}
            <div className="text-center p-4 rounded-xl transition-all duration-150 hover:scale-[1.02]" style={{ backgroundColor: '#1A1A3A40' }}>
              <div className="font-body text-[13px] text-[#4A4A7A] mb-1">后宫结局</div>
              <div className="font-mono text-2xl font-bold text-[#F0E6D3]">
                {playerStats.haremEndings}/{playerStats.totalHaremEndings}
              </div>
              <div className="font-body text-[12px] text-[#8A8AB8] mt-0.5">
                {Math.round((playerStats.haremEndings / playerStats.totalHaremEndings) * 100)}%
              </div>
            </div>

            {/* hidden endings */}
            <div className="text-center p-4 rounded-xl transition-all duration-150 hover:scale-[1.02]" style={{ backgroundColor: '#1A1A3A40' }}>
              <div className="font-body text-[13px] text-[#4A4A7A] mb-1">隐藏结局</div>
              <div className="font-mono text-2xl font-bold text-[#F0E6D3]">
                {playerStats.hiddenEndings}/{playerStats.totalHiddenEndings}
              </div>
              <div className="font-body text-[12px] text-[#8A8AB8] mt-0.5">
                {Math.round((playerStats.hiddenEndings / playerStats.totalHiddenEndings) * 100)}%
              </div>
            </div>

            {/* world exploration summary */}
            <div className="text-center p-4 rounded-xl transition-all duration-150 hover:scale-[1.02]" style={{ backgroundColor: '#1A1A3A40' }}>
              <div className="font-body text-[13px] text-[#4A4A7A] mb-1">世界探索</div>
              <div className="font-mono text-2xl font-bold text-[#F0E6D3]">
                {Object.values(playerStats.worldExploration).filter((v) => v > 50).length}/5
              </div>
              <div className="font-body text-[12px] text-[#8A8AB8] mt-0.5">深度探索</div>
            </div>

            {/* overall completion */}
            <div className="text-center p-4 rounded-xl transition-all duration-150 hover:scale-[1.02]" style={{ backgroundColor: '#1A1A3A40' }}>
              <div className="font-body text-[13px] text-[#4A4A7A] mb-1">总完成度</div>
              <div className="font-mono text-2xl font-bold text-[#D4A843]">
                {Math.round(
                  ((playerStats.endingsCollected / playerStats.totalEndings) * 0.4 +
                    (playerStats.achievementsUnlocked / playerStats.totalAchievements) * 0.3 +
                    Object.values(playerStats.worldExploration).reduce((a, b) => a + b, 0) / 500 * 0.3) *
                    100
                )}%
              </div>
              <div className="font-body text-[12px] text-[#8A8AB8] mt-0.5">综合评分</div>
            </div>
          </div>

          {/* world exploration bars */}
          <div className="border-t border-[#2A2A5A] pt-4">
            <h3 className="font-body text-sm font-bold text-[#8A8AB8] mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              世界探索进度
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {worldList.map((w) => {
                const pct = playerStats.worldExploration[w.id] ?? 0;
                const color = getWorldColor(w.id);
                return (
                  <div key={w.id} className="group">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-body text-xs font-bold" style={{ color }}>
                        {w.label}
                      </span>
                      <span className="font-mono text-xs text-[#8A8AB8]">{pct}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#1A1A3A' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, ease: easeSmooth, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
