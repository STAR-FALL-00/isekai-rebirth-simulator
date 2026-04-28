import type { GameEvent, EventTemplate, EventChoice, EventEffects } from './types';
import { cultivationTemplates } from './cultivationTemplates';
import { magicTemplates } from './magicTemplates';
import { scifiTemplates } from './scifiTemplates';
import { apocalypseTemplates } from './apocalypseTemplates';
import { wuxiaTemplates } from './wuxiaTemplates';
import { swordartTemplates } from './swordartTemplates';
import { threeBodyTemplates } from './threeBodyTemplates';
import { frierenTemplates } from './frierenTemplates';
import { gundamSeedTemplates } from './gundamSeedTemplates';
import { railgunTemplates } from './railgunTemplates';
import { doupoTemplates } from './doupoTemplates';
import { dragonRajaTemplates } from './dragonRajaTemplates';
import { fateTemplates } from './fateTemplates';
import { kaguyaTemplates } from './kaguyaTemplates';
import type { Stats } from '@/engine/types';

// ═══════════════════════════════════════════════════════════════
// Template → GameEvent expansion
// ═══════════════════════════════════════════════════════════════

const worldTemplates: Record<string, EventTemplate[]> = {
  cultivation: cultivationTemplates,
  magic: magicTemplates,
  scifi: scifiTemplates,
  apocalypse: apocalypseTemplates,
  wuxia: wuxiaTemplates,
  floating_citadel: swordartTemplates,
  doupo: doupoTemplates,
  dragon_raja: dragonRajaTemplates,
  gundam_seed: gundamSeedTemplates,
  railgun: railgunTemplates,
  three_body: threeBodyTemplates,
  frieren: frierenTemplates,
  fate: fateTemplates,
  kaguya: kaguyaTemplates,
};

// Auto-map identity-exclusive events to a romance NPC for default relationship effects
const IDENTITY_ROMANCE_MAP: Record<string, Record<string, string>> = {
  cultivation: {
    genius: 'fairy_ling',
    commoner: 'twin_spirit',
    wanderer: 'fairy_ling',
    demon_blood: 'beast_emperor',
    demon_heritage: 'demon_lord',
    reincarnated: 'fairy_ling',
    spirit_body: 'twin_spirit',
    artifact_spirit: 'fairy_ling',
    buddhist: 'fairy_ling',
    ghost_cultivator: 'twin_spirit',
  },
  magic: {
    noble_mage: 'elf_princess',
    apprentice: 'fairy_queen',
    druid: 'fairy_queen',
    assassin: 'witch',
    paladin: 'elf_princess',
    dragon_blood: 'fairy_queen',
    necromancer: 'witch',
    summoner: 'fairy_queen',
    alchemist: 'elf_princess',
    battle_mage: 'witch',
  },
  scifi: {
    space_noble: 'ai_companion',
    colonist: 'engineer',
    cyborg: 'engineer',
    alien_hybrid: 'ai_companion',
    ai_awakened: 'ai_companion',
    time_traveler: 'engineer',
    gene_warrior: 'engineer',
    pirate: 'engineer',
    archaeologist: 'ai_companion',
    hacker: 'ai_companion',
  },
  apocalypse: {
    shelter: 'doctor',
    raider: 'scavenger',
    mutant: 'scavenger',
    scientist: 'doctor',
    mechanic: 'scavenger',
    new_human: 'doctor',
    doctor: 'doctor',
    scavenger: 'scavenger',
    preacher: 'doctor',
    beast_tamer: 'scavenger',
  },
  wuxia: {
    farmers_son: 'sword_fairy',
    aristocrat: 'poison_girl',
    orphan: 'sword_fairy',
    demon_disciple: 'poison_girl',
    spy: 'sword_fairy',
    foreigner: 'poison_girl',
    medic: 'poison_girl',
    poisoner: 'poison_girl',
    swordsman: 'sword_fairy',
    assassin_wuxia: 'poison_girl',
  },
  floating_citadel: {
    lone_wolf: 'feather',
    guild_master: 'dawn',
    blacksmith: 'hammer',
    tamer: 'feather',
    info_broker: 'feather',
    chef: 'dawn',
    frontliner: 'hammer',
    healer: 'dawn',
    merchant: 'feather',
    roleplayer: 'feather',
  },
  doupo: {
    xiao_clan: 'gu_xun_er',
    alchemist: 'yun_yun',
    beast_clan: 'medusa',
    yunlan: 'yun_yun',
    soul_hall: 'medusa',
    jia_nan: 'gu_xun_er',
    mercenary: 'medusa',
    royal: 'yun_yun',
    snake: 'medusa',
    ancient: 'gu_xun_er',
  },
  dragon_raja: {
    cassell_student: 'nuonuo',
    executioner: 'hualilizi',
    alchemist_dr: 'nuonuo',
    dragon_blood: 'hualilizi',
    ordinary: 'nuonuo',
    secret_party: 'hualilizi',
    watcher: 'nuonuo',
    dragon_slayer: 'hualilizi',
    merchant_dr: 'nuonuo',
    archaeologist: 'hualilizi',
  },
  gundam_seed: {
    coordinator: 'lacus',
    natural: 'cagalli',
    pilot: 'lacus',
    captain: 'cagalli',
    scientist_gs: 'lacus',
    politician: 'cagalli',
    rebel: 'lacus',
    mercenary_gs: 'cagalli',
    doctor_gs: 'lacus',
    reporter_gs: 'cagalli',
  },
  railgun: {
    academy_student: 'kuroko',
    judgement: 'uiharu',
    dark_side: 'kuroko',
    researcher: 'uiharu',
    level_0: 'kuroko',
    esper: 'uiharu',
    teacher: 'kuroko',
    merchant_rg: 'uiharu',
    hacker_rg: 'kuroko',
    reporter_rg: 'uiharu',
  },
  three_body: {
    physicist: 'cheng_xin',
    sociologist: 'sophon',
    engineer_3b: 'cheng_xin',
    soldier_3b: 'sophon',
    wallfacer: 'cheng_xin',
    wallbreaker: 'sophon',
    observer: 'cheng_xin',
    fugitive: 'sophon',
    guardian: 'cheng_xin',
    civilian_3b: 'sophon',
  },
  frieren: {
    elf: 'fern',
    human_mage: 'serie',
    hero_descendant: 'fern',
    monk: 'serie',
    warrior: 'fern',
    thief: 'serie',
    court_mage: 'fern',
    demon: 'serie',
    adventurer: 'fern',
    librarian: 'serie',
  },
  fate: {
    master: 'saber',
    servant: 'rin',
    magus: 'saber',
    church: 'rin',
    dead_apostle: 'saber',
    guardian_fate: 'rin',
    ordinary_fate: 'saber',
    alchemist_fate: 'rin',
    archaeologist_fate: 'saber',
    supervisor: 'rin',
  },
  kaguya: {
    president: 'chika',
    vice_president: 'hayasa',
    secretary: 'chika',
    accountant: 'hayasa',
    ordinary_student: 'chika',
    special_student: 'hayasa',
    teacher_kg: 'chika',
    butler: 'hayasa',
    reporter_kg: 'chika',
    rich_second: 'hayasa',
  },
};

// Word banks for template interpolation
const wordBanks: Record<string, Record<string, string[]>> = {
  cultivation: {
    location: ['村口老槐树', '后山禁地', '村东古井', '西边的瀑布', '北山石窟', '南坡竹林', '自家后院', '祠堂密室', '青云宗山门', '万妖森边缘', '幽冥渊入口', '天外天遗址', '上古剑冢', '丹鼎阁', '藏经楼'],
    npc: ['同门师妹', '散修女侠', '药宗圣女', '狐族少女', '张秀才', '云游道士', '世家小姐', '魔道妖女', '龙族公主', '佛门女弟子'],
    legend: ['上古剑仙', '九尾妖狐', '东海龙王', '昆仑圣母', '魔道至尊', '天道之子', '逍遥散仙'],
    discovery: ['发现了一块发光的石头', '听到了奇怪的声音', '看到了一道金光', '闻到了一股异香', '踩到了一块软软的东西'],
    reaction: ['你吓得跑回了家', '你好奇地走近查看', '你感觉体内有什么在涌动', '你记住这个地方，准备以后再来'],
  },
  magic: {
    location: ['魔法森林', '学院后院', '魔法井边', '禁忌图书馆', '元素祭坛', '妖精花园', '浮空城广场', '龙脊山脉', '暗影巷', '炼金工坊'],
    npc: ['魔法导师', '神秘商人', '精灵使者', '贵族小姐', '魔女', '学院同学'],
    legend: ['真理之塔', '元素之王', '暗影领主', '古代大法师', '创世神龙', '魔法之源'],
    discovery: ['发现了一本魔法书', '看到了奇异的光芒', '听到了元素的声音', '感受到了强大的魔力波动'],
    reaction: ['你小心翼翼地靠近', '你兴奋地去查看', '你感到一阵恐惧', '你记下了这个位置'],
  },
  scifi: {
    location: ['废弃空间站', '小行星带', '殖民星球表面', '地下实验室', '星际港口', '虚拟现实'],
    npc: ['AI助手', '星际商人', '外星生物', '科学家', '舰长', '机器人'],
    legend: ['创世引擎', '维度之门', '星际联邦', '远古文明', '黑洞之城', '量子网络'],
    discovery: ['检测到未知信号', '发现了古代遗迹', '收到了神秘讯息', '扫描到异常能量'],
    reaction: ['你决定前去调查', '你谨慎地记录数据', '你感到一阵兴奋', '你启动了防护系统'],
  },
  apocalypse: {
    location: ['废墟城市', '辐射区', '地下掩体', '变异森林', '垃圾场', '废弃军事基地'],
    npc: ['幸存者', '变异人', '科学家', '掠夺者', '商人', '老兵'],
    legend: ['战前文明', '净化装置', '地下城市', '新纪元', '废土之王', '绿洲传说'],
    discovery: ['发现了一个罐头', '检测到低辐射区域', '看到了远处的烟雾', '找到了一处水源'],
    reaction: ['你决定去查看', '你保持警惕', '你快速离开', '你记下了这个位置'],
  },
  wuxia: {
    location: ['华山之巅', '少林寺', '江南水乡', '西域大漠', '幽谷竹林', '江湖酒馆'],
    npc: ['老乞丐', '剑客', '武林前辈', '神秘女子', '朝廷命官', '魔教中人'],
    legend: ['倚天剑', '屠龙刀', '九阳神功', '降龙十八掌', '武林至尊', '华山论剑'],
    discovery: ['发现了一本秘籍', '看到了剑光', '听到了琴声', '闻到了酒香'],
    reaction: ['你拱手行礼', '你暗中戒备', '你好奇地靠近', '你默默记在心中'],
  },
  floating_citadel: {
    location: ['起始之镇', '一层草原', '二层森林', '三层迷宫', '湖边小屋', '交易市场', '锻造工坊', '公会大厅', 'Boss房间前', '安全区', '迷宫深处', '隐藏房间', '顶层花园', '地下监狱', '传送广场'],
    npc: ['独行剑客', '公会成员', '情报贩子', '锻造学徒', '治疗师', '驯兽师'],
    legend: ['千层塔建造者', '第一位解放者', '传说中的独行剑士', '黑铁骑士团', '虚空之刃'],
    discovery: ['发现了一把发光的剑', '看到了奇怪的代码', '找到了隐藏通路', '触发了系统提示'],
    reaction: ['你握紧武器准备战斗', '你决定先观察', '你感到心跳加速', '你记下了这个地点'],
  },
  doupo: {
    location: ['乌坦城', '魔兽山脉', '塔戈尔大沙漠', '云岚宗', '迦南学院', '魂殿分殿', '黑角域', '丹塔', '古界', '中州'],
    npc: ['药老', '云韵', '美杜莎', '薰儿', '小医仙', '纳兰嫣然', '海波东', '云山'],
    legend: ['陀舍古帝', '焚诀', '异火榜', '斗帝遗迹', '魂天帝', '虚无吞炎'],
    discovery: ['发现了一卷功法', '感应到异火波动', '看到了斗帝虚影', '闻到了丹香', '触发了远古封印'],
    reaction: ['你激动不已', '你谨慎地观察', '你感觉体内斗气翻涌', '你默默记下位置'],
  },
  dragon_raja: {
    location: ['卡塞尔学院', '执行部基地', '高天原', '青铜城', '北京地铁', '东京塔', '黑天鹅港', '蛇岐八家', '避风港', '尼伯龙根'],
    npc: ['昂热', '路明非', '诺诺', '绘梨衣', '凯撒', '楚子航', '芬格尔', '源稚生'],
    legend: ['黑王尼德霍格', '白王', '四大君主', '言灵周期表', '龙王之心', '龙族纪元'],
    discovery: ['检测到了龙血反应', '发现了龙文刻印', '收到了龙类的心跳信号', '扫描到异常言灵波动'],
    reaction: ['你握紧武器准备战斗', '你决定先观察', '你感到龙血沸腾', '你启动了炼金武器'],
  },
  gundam_seed: {
    location: ['PLANT殖民卫星', '地球联合基地', '奥布领地', '扎夫特军港', '废弃卫星', '中立贸易站', '宇宙坟场', '尤尼乌斯7号', '大天使号舰桥', '弥赛亚要塞', '永恒号战舰', '赫利奥波利斯'],
    npc: ['调整者老兵', '联合军军官', '奥布技师', '难民少女', '战地医生', '军火商人'],
    legend: ['自由高达', '正义高达', '神意高达', '创世纪', '中子干扰器', 'SEED觉醒者'],
    discovery: ['发现了一台废弃MS', '检测到了SEED反应', '收到了神秘通讯', '扫描到异常能量'],
    reaction: ['你决定前去调查', '你谨慎地记录数据', '你感到一阵兴奋', '你启动了OS系统'],
  },
  railgun: {
    location: ['常盘台中学', '第七学区', '学园都市暗巷', '风纪委员支部', '能力开发所', '地下研究所', '废弃工厂', '树状图设计者', '栅川中学', '无能力者学区', '学舍之园'],
    npc: ['风纪委员', '暗部成员', '能力研究者', '常盘台学生', '无能力者少年', '情报贩子'],
    legend: ['超电磁炮', '一方通行', '幻想杀手', '绝对能力者', '御坂网络', '树状图设计者'],
    discovery: ['检测到了AIM力场', '发现了能力样本', '收到了匿名讯息', '扫描到异常脑波'],
    reaction: ['你决定前去调查', '你谨慎地记录数据', '你感到一阵兴奋', '你启动了能力'],
  },
  three_body: {
    location: ['北京', '纽约', '联合国大厦', '太空电梯', '红岸基地', '木星太空城', '星舰人类', '地下掩体', '面壁者庄园', '深空观测站', '三体游戏', '末日战役遗址', '二向箔前线'],
    npc: ['科学家同事', '太空军战友', 'PDC官员', '流浪诗人', '老工程师', '难民'],
    legend: ['罗辑', '章北海', '三体文明', '黑暗森林', '水滴', '二向箔', '星舰地球', '小宇宙'],
    discovery: ['发现了一份绝密档案', '检测到了异常信号', '破解了一段加密信息', '找到了上古遗迹'],
    reaction: ['你决定深入调查', '你谨慎地记录数据', '你感到一阵不安', '你启动了应急预案'],
  },
  frieren: {
    location: ['中央诸国', '北方诸国', '南方诸国', '王都', '冒险者公会', '古代遗迹', '魔法森林', '战士之村', '僧侣修道院', '精灵森林', '魔王城遗址', '贤者之塔', '一级考试会场'],
    npc: ['冒险者同伴', '村民', '老魔法使', '吟游诗人', '商人', '学者'],
    legend: ['勇者辛美尔', '芙莉莲', '魔王', '一级魔法使', '古代大魔法使', '贤者', '龙', '魔族将军'],
    discovery: ['发现了一本古魔法书', '找到了勇者遗物', '触发了古代魔法阵', '发现了隐藏通道'],
    reaction: ['你小心翼翼地靠近', '你准备施展防御魔法', '你感到魔力波动', '你记下了这个位置'],
  },
  fate: {
    location: ['冬木市', '远坂邸', '爱因兹贝伦城堡', '言峰教会', '柳洞寺', '穗群原学园', '卫宫邸', '圆藏山', '教会地下', '新都'],
    npc: ['魔术导师', '神秘商人', '教会神父', '贵族魔术师', '魔女', '学院同学'],
    legend: ['圣杯', '英雄王', '骑士王', '远坂家', '爱因兹贝伦', '根源'],
    discovery: ['发现了一本魔术书', '看到了奇异的光芒', '听到了英灵的声音', '感受到了强大的魔力波动'],
    reaction: ['你小心翼翼地靠近', '你兴奋地去查看', '你感到一阵恐惧', '你记下了这个位置'],
  },
  kaguya: {
    location: ['秀知院学园', '学生会室', '图书馆', '食堂', '天台', '音乐室', '体育馆', '校门', '樱花大道', '教室'],
    npc: ['学生会成员', '同班同学', '风纪委员', '社团前辈', '班主任', '校园偶像'],
    legend: ['四宫家', '白银御行', '藤原千花', '石上优', '恋爱头脑战', '学生会传说'],
    discovery: ['发现了一封情书', '看到了告白的场景', '听到了恋爱的传闻', '找到了学生会秘密'],
    reaction: ['你小心翼翼地靠近', '你兴奋地去查看', '你感到一阵紧张', '你记下了这个位置'],
  },
};

// Fill in template placeholders
function interpolateTemplate(text: string, worldId: string): string {
  const bank = wordBanks[worldId] ?? {};
  let result = text;
  for (const [key, values] of Object.entries(bank)) {
    const regex = new RegExp(`\{${key}\}`, 'g');
    if (result.includes(`{${key}}`)) {
      const pick = values[Math.floor(Math.random() * values.length)];
      result = result.replace(regex, pick);
    }
  }
  return result;
}

// Expand a template into multiple GameEvents
function expandTemplate(worldId: string, template: EventTemplate): GameEvent[] {
  const events: GameEvent[] = [];
  const defaultRelEffects = (() => {
    if (!template.identityExclusive) return undefined;
    const map = IDENTITY_ROMANCE_MAP[worldId];
    if (!map) return undefined;
    const npcId = map[template.identityExclusive];
    if (!npcId) return undefined;
    return { [npcId]: 5 };
  })();

  for (const [index, tmpl] of template.templates.entries()) {
    const text = interpolateTemplate(tmpl, worldId);
    events.push({
      id: `${template.id}_v${index}`,
      worldId,
      category: template.category,
      age: Math.floor((template.minAge + template.maxAge) / 2),
      text,
      choices: template.choices,
      effects: template.effects,
      relationshipEffects: template.relationshipEffects ?? defaultRelEffects,
      requiredRelationship: template.requiredRelationship,
      conditions: template.conditions,
      requiredFlags: template.requiredFlags,
      flags: template.flags,
      probability: template.probability,
      identityExclusive: template.identityExclusive,
      talentExclusive: template.talentExclusive,
      chainPriority: template.chainPriority,
      rewardItem: template.rewardItem,
      tempEffects: template.tempEffects,
    });
  }
  return events;
}

// ═══════════════════════════════════════════════════════════════
// Generate ALL events for ALL worlds
// ═══════════════════════════════════════════════════════════════

export function generateAllEvents(): GameEvent[] {
  const allEvents: GameEvent[] = [];
  for (const [worldId, templates] of Object.entries(worldTemplates)) {
    for (const template of templates) {
      const expanded = expandTemplate(worldId, template);
      allEvents.push(...expanded);
    }
  }
  return allEvents;
}

// ═══════════════════════════════════════════════════════════════
// Get available events for a specific world + age + stats
// ═══════════════════════════════════════════════════════════════

export function getAvailableEvents(
  worldId: string,
  age: number,
  stats: Stats,
  flags: string[],
  identityId: string,
  talentLevel?: string,
  relationships?: Record<string, number>
): GameEvent[] {
  const templates = worldTemplates[worldId] ?? [];
  const available: GameEvent[] = [];

  for (const template of templates) {
    // Check age range
    if (age < template.minAge || age > template.maxAge) continue;

    // Check identity exclusive
    if (template.identityExclusive && template.identityExclusive !== identityId) continue;

    // Check talent exclusive
    if (template.talentExclusive) {
      if (template.talentExclusive === 'not_trash') {
        if (talentLevel === 'trash') continue;
      } else if (template.talentExclusive !== talentLevel) {
        continue;
      }
    }

    // Check required flags
    if (template.requiredFlags) {
      const hasAll = template.requiredFlags.every((f) => flags.includes(f));
      if (!hasAll) continue;
    }

    // Skip events that have already been triggered (their flags are already set)
    if (template.flags) {
      const alreadyTriggered = template.flags.some((f) => flags.includes(f));
      if (alreadyTriggered) continue;
    }

    // Check stat conditions
    if (template.conditions) {
      let pass = true;
      for (const cond of template.conditions) {
        const val = stats[cond.stat] ?? 0;
        if (cond.min !== undefined && val < cond.min) { pass = false; break; }
        if (cond.max !== undefined && val > cond.max) { pass = false; break; }
      }
      if (!pass) continue;
    }

    // Check relationship conditions
    if (template.requiredRelationship && relationships) {
      let pass = true;
      for (const [npcId, minVal] of Object.entries(template.requiredRelationship)) {
        if ((relationships[npcId] ?? 0) < minVal) {
          pass = false;
          break;
        }
      }
      if (!pass) continue;
    }

    // Expand and add
    const expanded = expandTemplate(worldId, template);
    // Pick one random variation per template
    if (expanded.length > 0) {
      const pick = expanded[Math.floor(Math.random() * expanded.length)];
      available.push(pick);
    }
  }

  return available;
}

// ═══════════════════════════════════════════════════════════════
// Pick a random event weighted by probability
// ═══════════════════════════════════════════════════════════════

export function pickEvent(events: GameEvent[]): GameEvent | null {
  if (events.length === 0) return null;

  // 1. Check for chain events (highest priority)
  const chainEvents = events.filter((e) => e.chainPriority && e.chainPriority > 0);
  if (chainEvents.length > 0) {
    const maxPriority = Math.max(...chainEvents.map((e) => e.chainPriority || 0));
    const highest = chainEvents.filter((e) => e.chainPriority === maxPriority);
    return highest[Math.floor(Math.random() * highest.length)];
  }

  // 2. Normal probability filter + weighted random
  const roll = Math.random();
  const eligible = events.filter((e) => e.probability >= roll);
  if (eligible.length === 0) return null;

  const totalWeight = eligible.reduce((sum, e) => sum + e.probability, 0);
  let random = Math.random() * totalWeight;

  for (const event of eligible) {
    random -= event.probability;
    if (random <= 0) return event;
  }

  return eligible[eligible.length - 1];
}

// ═══════════════════════════════════════════════════════════════
// Apply event effects to stats
// ═══════════════════════════════════════════════════════════════

export function applyEffects(stats: Stats, effects: EventEffects): Stats {
  const newStats = { ...stats };
  for (const key of Object.keys(effects) as (keyof Stats)[]) {
    const val = effects[key];
    if (val !== undefined) {
      newStats[key] = Math.max(0, Math.min(200, (newStats[key] ?? 0) + val));
    }
  }
  return newStats;
}

// ═══════════════════════════════════════════════════════════════
// Process a choice outcome
// ═══════════════════════════════════════════════════════════════

export function processChoice(choice: EventChoice): {
  success: boolean;
  text: string;
  effects: EventEffects;
  flags?: string[];
  rewardItem?: string;
  tempEffects?: EventEffects;
} {
  const roll = Math.random();
  const success = roll <= choice.successRate;

  return {
    success,
    text: success ? choice.successText : choice.failText,
    effects: success ? choice.effects : (choice.failEffects ?? choice.effects),
    flags: choice.flags,
    rewardItem: success ? choice.rewardItem : undefined,
    tempEffects: success ? choice.tempEffects : undefined,
  };
}

// ═══════════════════════════════════════════════════════════════
// Event counts per world
// ═══════════════════════════════════════════════════════════════

export function getEventCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const [worldId, templates] of Object.entries(worldTemplates)) {
    counts[worldId] = templates.reduce((sum, t) => sum + t.templates.length, 0);
  }
  counts.total = Object.values(counts).reduce((a, b) => a + b, 0);
  return counts;
}
