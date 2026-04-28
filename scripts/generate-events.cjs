const fs = require('fs');
const path = require('path');

// ============================================================
// 异世界转生模拟器 — 事件模板批量生成器 v2.0
// 重构：分层稀有度概率 + 天赋系统 + 废材逆袭事件链
// ============================================================

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 生成模板 ID
let idCounters = {};
function makeId(worldPrefix, category, identityId = null) {
  const key = `${worldPrefix}_${category}_${identityId || 'gen'}`;
  idCounters[key] = (idCounters[key] || 0) + 1;
  const suffix = String(idCounters[key]).padStart(2, '0');
  if (identityId) {
    return `${worldPrefix}_ie_${identityId}_${suffix}`;
  }
  const catMap = {
    childhood: 'ch', growth: 'gr', adult: 'ad', elder: 'el',
    combat: 'cb', romance: 'rm', practice: 'pr', exploration: 'ex',
    world_story: 'ws', hidden: 'hd', death: 'dt', trash_exclusive: 'te'
  };
  return `${worldPrefix}_${catMap[category] || category}_${suffix}`;
}

// 构建 EventTemplate 对象
function tmpl(id, category, minAge, maxAge, probability, texts, opts = {}) {
  return {
    id,
    category,
    minAge,
    maxAge,
    probability,
    templates: Array.isArray(texts) ? texts : [texts],
    ...opts
  };
}

// 生成选择分支
function choice(text, successRate, successText, failText, effects, failEffects, flags, failFlags) {
  return { text, successRate, successText, failText, effects, failEffects, flags, failFlags };
}

// ============================================================
// 稀有度概率常量
// ============================================================

const RARITY = {
  legendary: { min: 0.03, max: 0.10, label: '传说' },
  epic: { min: 0.10, max: 0.25, label: '史诗' },
  rare: { min: 0.25, max: 0.50, label: '稀有' },
  common: { min: 0.50, max: 0.85, label: '普通' },
};

function randProb(rarityKey, index = 0, total = 1) {
  const r = RARITY[rarityKey];
  const step = (r.max - r.min) / Math.max(total, 1);
  return parseFloat((r.min + step * index + Math.random() * step * 0.5).toFixed(3));
}

// ============================================================
// 世界配置
// ============================================================

const worlds = {
  cultivation: {
    prefix: 'cx',
    name: '修仙界',
    identities: [
      { id: 'commoner', name: '凡人子弟' },
      { id: 'genius', name: '宗门天才' },
      { id: 'wanderer', name: '散修野客' },
      { id: 'demon_blood', name: '妖族血脉' },
      { id: 'demon_heritage', name: '魔道遗孤' },
      { id: 'reincarnated', name: '转世仙人' },
      { id: 'spirit_body', name: '先天灵体' },
      { id: 'artifact_spirit', name: '器灵转世' },
      { id: 'buddhist', name: '佛门俗家' },
      { id: 'ghost_cultivator', name: '鬼修传人' },
    ],
    scenes: [
      // 凡人区域
      '青牛村', '落霞镇', '黑风山', '古柳林',
      // 宗门区域
      '青云山脉', '万法仙山', '药王谷', '灵山', '玄女峰', '万兽山脉', '器神山', '天机山',
      // 危险区域
      '血海', '幽冥渊', '合欢谷', '万妖森', '葬仙谷', '天外天',
      // 特殊区域
      '散修集市', '黑市', '灵脉之眼', '上古传送阵',
    ],
    npcs: [
      // 凡人
      '老铁匠', '王猎户', '李大娘', '张秀才', '云游道士', '疯老头', '算命先生', '隔壁老奶奶', '采药人',
      // 宗门人物
      '凌霄仙子', '云长老', '玄天剑尊', '万法天尊', '丹圣', '无相佛', '玄女', '兽皇', '器王', '天机子',
      // 魔道人物
      '血魔老祖', '鬼帝', '合欢老祖',
      // 其他
      '万兽帝君', '双生灵女', '散修首领',
    ],
    legends: [
      '上古剑仙', '九尾妖狐', '东海龙王', '昆仑圣母', '魔道至尊', '天道之子', '逍遥散仙', '佛门罗汉', '器灵老祖', '鬼帝',
      '玄天剑尊', '万法天尊', '血魔老祖', '万兽帝君', '无量佛', '天机子', '丹圣',
    ],
    talentNames: { trash: '无灵根', poor: '下品灵根', average: '中品灵根', good: '上品灵根', genius: '天灵根', legendary: '混沌灵根' },
  },
  magic: {
    prefix: 'mg',
    name: '魔法大陆',
    identities: [
      { id: 'apprentice', name: '平民学徒' },
      { id: 'noble_mage', name: '贵族法师' },
      { id: 'druid', name: '荒野德鲁伊' },
      { id: 'assassin', name: '暗影刺客' },
      { id: 'paladin', name: '圣光骑士' },
      { id: 'dragon_blood', name: '龙血混血' },
      { id: 'necromancer', name: '亡灵法师' },
      { id: 'summoner', name: '元素召唤师' },
      { id: 'alchemist', name: '炼金术士' },
      { id: 'battle_mage', name: '战斗法师' },
    ],
    scenes: ['魔法森林', '学院后院', '魔法井边', '禁忌图书馆', '元素祭坛', '妖精花园', '龙穴入口', '亡灵墓地', '炼金工坊', '竞技场'],
    npcs: ['魔法导师', '神秘商人', '精灵使者', '龙族长者', '魔女', '学院院长', '亡灵守卫', '元素精灵', '炼金学徒', '竞技场裁判'],
    legends: ['真理之塔', '元素之王', '暗影领主', '古代大法师', '创世神龙', '魔法之源', '死灵君王', '召唤之门', '贤者之石', '战神'],
    talentNames: { trash: '魔法绝缘', poor: '魔法迟钝', average: '魔法感知', good: '魔法亲和', genius: '魔法宠儿', legendary: '元素之主' },
  },
  scifi: {
    prefix: 'sf',
    name: '科幻星际',
    identities: [
      { id: 'colonist', name: '殖民者后代' },
      { id: 'space_noble', name: '星际贵族' },
      { id: 'cyborg', name: '机械改造人' },
      { id: 'alien_hybrid', name: '外星混血' },
      { id: 'ai_awakened', name: 'AI觉醒者' },
      { id: 'time_traveler', name: '时空旅者' },
      { id: 'gene_warrior', name: '基因战士' },
      { id: 'pirate', name: '星际海盗' },
      { id: 'archaeologist', name: '深空考古学家' },
      { id: 'hacker', name: '网络黑客' },
    ],
    scenes: ['废弃空间站', '小行星带', '殖民星球表面', '地下实验室', '星际港口', '虚拟现实', '黑洞边缘', '古代遗迹', '黑市', '战舰舰桥'],
    npcs: ['AI助手', '星际商人', '外星生物', '科学家', '舰长', '机器人', '基因工程师', '海盗船长', '考古队员', '网络幽灵'],
    legends: ['创世引擎', '维度之门', '星际联邦', '远古文明', '黑洞之城', '量子网络', '基因原体', '海盗王', '失落帝国', '超级AI'],
    talentNames: { trash: '基因缺陷', poor: '基因平庸', average: '标准基因', good: '优良基因', genius: '进化者', legendary: '完美进化' },
  },
  apocalypse: {
    prefix: 'ap',
    name: '末日废土',
    identities: [
      { id: 'shelter', name: '避难所居民' },
      { id: 'raider', name: '掠夺者' },
      { id: 'mutant', name: '变异者' },
      { id: 'scientist', name: '科学家' },
      { id: 'mechanic', name: '机械师' },
      { id: 'new_human', name: '新人类' },
      { id: 'doctor', name: '废土医生' },
      { id: 'scavenger', name: '拾荒者' },
      { id: 'preacher', name: '传教士' },
      { id: 'beast_tamer', name: '驯兽师' },
    ],
    scenes: ['废墟城市', '辐射区', '地下掩体', '变异森林', '垃圾场', '废弃军事基地', '净水站', '旧医院', '教堂废墟', '变异兽巢穴'],
    npcs: ['幸存者', '变异人', '科学家', '掠夺者', '商人', '老兵', '病患', '拾荒者', '信徒', '野兽'],
    legends: ['战前文明', '净化装置', '地下城市', '新纪元', '废土之王', '绿洲传说', '治愈之光', '拾荒王', '救世主', '兽王'],
    talentNames: { trash: '完全变异', poor: '劣性变异', average: '轻微变异', good: '良性变异', genius: '超进化', legendary: '新人类始祖' },
  },
  wuxia: {
    prefix: 'wx',
    name: '古代武侠',
    identities: [
      { id: 'farmers_son', name: '农家少年' },
      { id: 'aristocrat', name: '世家子弟' },
      { id: 'orphan', name: '孤儿' },
      { id: 'demon_disciple', name: '魔教后人' },
      { id: 'spy', name: '朝廷密探' },
      { id: 'foreigner', name: '异域来客' },
      { id: 'medic', name: '医仙传人' },
      { id: 'poisoner', name: '毒师弟子' },
      { id: 'swordsman', name: '剑客' },
      { id: 'assassin_wuxia', name: '暗器师' },
    ],
    scenes: ['华山之巅', '少林寺', '江南水乡', '西域大漠', '幽谷竹林', '江湖酒馆', '医仙谷', '毒龙沼泽', '剑冢', '暗器阁'],
    npcs: ['老乞丐', '剑客', '武林前辈', '神秘女子', '朝廷命官', '魔教中人', '医者', '毒师', '铸剑师', '暗器名家'],
    legends: ['倚天剑', '屠龙刀', '九阳神功', '降龙十八掌', '武林至尊', '华山论剑', '医仙', '毒圣', '剑神', '暗器之王'],
    talentNames: { trash: '武学废材', poor: '资质平庸', average: '尚可造之材', good: '武学奇才', genius: '百年一遇', legendary: '武道通神' },
  },
};

// ============================================================
// 通用事件文本生成器（含分层稀有度）
// ============================================================

function generateCommonEvents(w) {
  const T = [];
  const { prefix, scenes, npcs, legends } = w;

  // --- Childhood (0-12) 5 templates ---
  // 传说: 出生异象
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 0, 3, randProb('legendary'), [
    `你出生那天，{location}突然霞光万丈，紫气东来三千里。{npc}跪地叩拜，说你是千年一遇的${w.talentNames.legendary}。`,
    `你降生的瞬间，{location}百花齐放，{legend}的虚影在天际显现，整个大陆为之震动。`,
    `你的第一声啼哭引发了{location}的灵气暴动，{npc}颤抖着说："${w.talentNames.legendary}降世了！"`,
  ], { effects: { luck: 10, special: 8, charisma: 5 } }));

  // 史诗: 天赋觉醒
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 2, 7, randProb('epic'), [
    `你在{location}玩耍时，体内突然涌出一股热流。{npc}惊讶地发现你竟是${w.talentNames.good}之资！`,
    `三岁时，你在{location}无意间触发了古老的检测阵法，光芒比所有人都亮。`,
    `{npc}为你进行资质测试，{legend}的印记在你身上一闪而逝——你是被选中的人。`,
  ], { effects: { special: 6, intelligence: 4 } }));

  // 稀有: 小有奇遇
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 4, 9, randProb('rare'), [
    `你在{location}救了一只受伤的小动物，它其实是{legend}的化身，临走前留下了一枚灵珠。`,
    `{npc}在你满月时送了一块玉佩，后来你发现那是一件上古法器的碎片。`,
    `你从小就能看见别人看不见的{legend}幻影，{npc}说这是灵根初现的征兆。`,
    `你在{location}挖到了一坛古酒，喝了一口后浑身舒畅，经脉隐隐发热。`,
  ], { effects: rand([{ luck: 5 }, { special: 4 }, { intelligence: 4 }]) }));

  // 普通x2: 日常
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 0, 6, randProb('common', 0, 2), [
    `你生在普通人家，每天在{location}玩耍，日子平淡但快乐。`,
    `{npc}教你读书识字，你学得有模有样。`,
    `你在{location}认识了几个玩伴，度过了无忧无虑的童年。`,
    `家里虽然不富裕，但{npc}总是把最好的留给你。`,
  ], { effects: { charisma: 2, luck: 1 } }));

  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 3, 10, randProb('common', 1, 2), [
    `你在{location}帮{npc}干活，学会了很多生活技能。`,
    `你的身体比同龄人强壮，{npc}说你是干农活的好料子。`,
    `你喜欢在{location}发呆，常常一坐就是一整天。`,
    `{npc}给你讲了一个关于{legend}的故事，你听得入了迷。`,
  ], { effects: { strength: 2, intelligence: 1 } }));

  // --- Growth (13-25) 5 templates ---
  // 传说: 顿悟大道
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 15, 20, randProb('legendary'), [
    `你在{location}闭关三日，出关时眼中精光四射——你竟在战斗中顿悟了{legend}的传承！`,
    `一场雷雨夜，你在{location}被天雷击中非但没死，反而打通了全身经脉！`,
    `{legend}的残魂在{location}与你相遇，将毕生感悟传授于你。`,
  ], { effects: { intelligence: 10, special: 8, strength: 5 } }));

  // 史诗: 重大突破
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 14, 22, randProb('epic'), [
    `你在{location}苦修三年，终于突破了困扰多年的瓶颈，实力大增！`,
    `{npc}带你外出历练，你在{location}击败了一个强敌，获得了珍贵的战利品。`,
    `你发现了{legend}留下的试炼场，通过考验后获得了意想不到的收获。`,
  ], { effects: { strength: 6, special: 5 } }));

  // 稀有: 外出历练
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 13, 24, randProb('rare'), [
    `你在{location}遇到了一生的宿敌，你们不打不相识，反而成为了朋友。`,
    `{npc}传授你一项绝技，你花了整整一年才学会，但威力惊人。`,
    `你在{location}救了一个被追杀的人，他为了报答你，送了一件宝物。`,
    `你和同辈在{location}比试，虽然输了但收获巨大。`,
  ], { effects: rand([{ strength: 4, luck: 2 }, { intelligence: 5 }, { charisma: 4 }]) }));

  // 普通x2
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 13, 20, randProb('common', 0, 2), [
    `你每天在{location}勤奋练习，虽然进步缓慢但根基扎实。`,
    `{npc}督促你修炼，你不敢懈怠。`,
    `你在{location}读了很多书，眼界开阔了不少。`,
    `平平淡淡的一年，你在{location}默默积累着。`,
  ], { effects: { intelligence: 2, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 16, 25, randProb('common', 1, 2), [
    `你在{location}结交了一些朋友，互相切磋进步。`,
    `{npc}给你讲了很多前辈的故事，你深受启发。`,
    `你在{location}处理了一些杂务，锻炼了自己的能力。`,
    `这一年没什么特别的事发生，但你感觉自己在慢慢变强。`,
  ], { effects: { charisma: 2, luck: 2 } }));

  // --- Adult (26-50) 3 templates ---
  // 史诗: 开宗立派
  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 28, 40, randProb('epic'), [
    `你在{location}开宗立派，广收门徒，一时间名声大噪。`,
    `你参与了{legend}相关的大规模事件，在关键时刻力挽狂澜。`,
    `你在{location}建立了属于自己的势力，各方强者纷纷来投。`,
  ], { effects: { charisma: 8, strength: 5, special: 5 } }));

  // 稀有: 势力扩张
  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 26, 45, randProb('rare'), [
    `你在{location}收下了第一个弟子，将自己的所学倾囊相授。`,
    `你和宿敌在{location}进行了最终决战，胜负难分。`,
    `你成功炼制/制造了传说中的物品，引起了不小的轰动。`,
  ], { effects: rand([{ intelligence: 5, special: 4 }, { charisma: 6, luck: 3 }]) }));

  // 普通: 日常
  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 26, 50, randProb('common'), [
    `你在{location}处理日常事务，势力稳步发展。`,
    `{npc}来找你帮忙，你出手解决了他的难题。`,
    `你在{location}度过了平静的一年，修为稳步提升。`,
    `平平淡淡的一年，你在{location}默默修炼。`,
  ], { effects: { strength: 2, intelligence: 2, special: 2 } }));

  // --- Elder (50+) 按世界和境界分层 ---
  if (prefix === 'cx') {
    // 修仙界 elder
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 50, 120, randProb('common'), [
      `你在{location}闭关苦修，试图触摸更高境界的门槛。`,
      `你游历天下，在{location}见识了各种奇人异事，道心更加坚定。`,
      `你开始招收弟子，在{location}传授毕生所学。`,
    ], { effects: { intelligence: 3, special: 2 } }));
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 100, 220, randProb('rare'), [
      `你的修为已臻化境，成为了{location}的传说级人物。`,
      `你开始着手准备最终的突破，{npc}专程前来为你护法。`,
      `你将毕生所学整理成册，存放在{location}，等待有缘人。`,
    ], { effects: { intelligence: 8, charisma: 5 } }));
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 200, 400, randProb('rare'), [
      `你感应到了天劫的气息，在{location}布下重重阵法准备迎接。`,
      `你回顾一生修行，在{location}寻找突破瓶颈的契机。`,
      `{npc}带来消息：仙界通道出现了异常波动，飞升之机可能重现。`,
    ], { effects: { special: 10, intelligence: 5 } }));
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 400, 700, randProb('epic'), [
      `你已是大乘期修士，在{location}静待飞升之机的到来。`,
      `你将毕生大道感悟刻入玉简，留给后世有缘人。`,
      `{npc}问你为何不急于飞升，你笑答："我在等一个时代。"`,
    ], { effects: { charisma: 10, special: 5 } }));
  } else if (prefix === 'mg') {
    // 魔法大陆 elder
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 50, 120, randProb('common'), [
      `你在{location}钻研更高阶的魔法理论，试图突破当前等级的限制。`,
      `你游历魔法大陆，在{location}见识了各种奇异的魔法现象，眼界大开。`,
      `你开始招收学徒，在{location}传授毕生所学的奥术知识。`,
    ], { effects: { intelligence: 3, special: 2 } }));
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 100, 220, randProb('rare'), [
      `你的魔法造诣已臻巅峰，成为了{location}的传说级大法师。`,
      `{npc}专程从真理之塔赶来，希望你将研究成果贡献给学术界。`,
      `你将毕生魔法心得整理成《奥术全书》，存放在{location}的图书馆中。`,
    ], { effects: { intelligence: 8, charisma: 5 } }));
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 200, 400, randProb('rare'), [
      `你感应到了元素位面的召唤，在{location}准备进行位面穿越仪式。`,
      `你回顾一生的魔法研究，在{location}寻找触及真理之塔顶层的契机。`,
      `{npc}带来消息：虚空与物质界的屏障出现了裂缝，通往更高维度的通道可能开启。`,
    ], { effects: { special: 10, intelligence: 5 } }));
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 400, 700, randProb('epic'), [
      `你已是真理守护者，在{location}静待成为法则生命的那一刻。`,
      `你将毕生对魔法本质的感悟刻入永恒水晶，留给后世有缘人。`,
      `{npc}问你为何还不融入虚空，你笑答："我在等一个值得托付魔法火种的学徒。"`,
    ], { effects: { charisma: 10, special: 5 } }));
  } else {
    // 其他世界 elder（通用）
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 50, 120, randProb('common'), [
      `你在{location}闭关苦修，试图触摸更高境界的门槛。`,
      `你游历天下，在{location}见识了各种奇人异事。`,
      `你开始招收弟子，在{location}传授毕生所学。`,
    ], { effects: { intelligence: 3, special: 2 } }));
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 100, 220, randProb('rare'), [
      `你的修为已臻化境，成为了{location}的传说级人物。`,
      `你开始着手准备最终的突破，{npc}专程前来协助你。`,
      `你将毕生所学整理成册，存放在{location}，等待有缘人。`,
    ], { effects: { intelligence: 8, charisma: 5 } }));
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 200, 400, randProb('rare'), [
      `你感应到了来自更高维度的气息，在{location}做准备。`,
      `你回顾一生，在{location}寻找突破瓶颈的契机。`,
      `{npc}带来消息：通往未知领域的通道可能开启。`,
    ], { effects: { special: 10, intelligence: 5 } }));
    T.push(tmpl(makeId(prefix, 'elder'), 'elder', 400, 700, randProb('epic'), [
      `你已是至高存在，在{location}静待最终的升华。`,
      `你将毕生感悟刻入永恒载体，留给后世有缘人。`,
      `{npc}问你在等什么，你笑答："我在等一个时代。"`,
    ], { effects: { charisma: 10, special: 5 } }));
  }

  // --- Combat (15-60) 6 templates ---
  // 传说: 跨级战斗
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 20, 40, randProb('legendary'), [
    `你在{location}以一己之力对抗十位同阶强者，最终大获全胜，一战成名！`,
    `{legend}的敌人找上了你，你在{location}展开惊天大战，竟越级将其斩杀！`,
    `你为了保护{location}的居民，独自对抗入侵的{legend}军团，创造了不可能的奇迹。`,
  ], { effects: { strength: 12, charisma: 8, health: -10 } }));

  // 史诗: 重要战役
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 18, 45, randProb('epic'), [
    `你参与了一场改变{location}格局的大规模战争，立下赫赫战功。`,
    `{npc}挑战你的权威，你们在{location}大战三百回合，最终你险胜一招。`,
    `你在{location}发现了{legend}留下的试炼场，通过了生死考验。`,
  ], { effects: { strength: 8, charisma: 4, health: -5 } }));

  // 稀有x2: 普通战斗
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 15, 35, randProb('rare', 0, 2), [
    `你在{location}遭遇强敌，展开了一场生死搏斗，最终险胜。`,
    `你和{npc}在{location}切磋，双方都获益匪浅。`,
    `你为了保护同伴，在{location}与敌人激战，受了轻伤。`,
  ], { effects: { strength: 5, health: -3 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 25, 50, randProb('rare', 1, 2), [
    `你在{location}参与了一场小规模冲突，表现出色。`,
    `{npc}偷袭你，你在{location}勉强将其击退。`,
    `你在{location}发现了敌人的据点，果断出击。`,
  ], { effects: { strength: 4, luck: 2 } }));

  // 普通x2: 训练/切磋
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 15, 40, randProb('common', 0, 2), [
    `你在{location}进行了日常训练，技艺略有精进。`,
    `你和同伴在{location}对练，互相学习。`,
    `你在{location}演练新学的招式，逐渐熟练。`,
  ], { effects: { strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 30, 60, randProb('common', 1, 2), [
    `你在{location}指导后辈战斗技巧，自己也有所感悟。`,
    `一场友好的比试在{location}举行，你获得了不错的名次。`,
    `你在{location}观摩高手对决，学到了不少实战经验。`,
  ], { effects: { strength: 2, intelligence: 1 } }));

  // --- Romance (16-50) 6 templates ---
  // 传说: 三生石缘
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 18, 30, randProb('legendary'), [
    `你在{location}与{npc}相遇的瞬间，天地变色，{legend}的预言应验——你们是三生石上的命定之人。`,
    `{npc}为了救你，不惜耗尽毕生修为。你跪在{location}发誓：此生不负。`,
    `你们的故事被{legend}记载，成为了{location}永恒的传说。`,
  ], { effects: { charisma: 10, luck: 8, health: 5 } }));

  // 史诗: 轰轰烈烈
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 20, 35, randProb('epic'), [
    `你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。`,
    `{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。`,
    `你们经历了{legend}的考验，感情反而更加坚不可摧。`,
  ], { effects: { charisma: 6, luck: 4 } }));

  // 稀有x2: 邂逅相恋
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 16, 30, randProb('rare', 0, 2), [
    `你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。`,
    `你和{npc}在{location}月下相会，互诉衷肠。`,
    `{npc}因为你的才华而倾心，主动向你示好。`,
  ], { effects: { charisma: 4, luck: 3 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 25, 40, randProb('rare', 1, 2), [
    `你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。`,
    `{npc}送你一件定情信物，你珍藏在身边。`,
    `你们一起在{location}经历了危险，感情更加深厚。`,
  ], { effects: { charisma: 3, luck: 2 } }));

  // 普通x2: 普通交往
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 20, 45, randProb('common', 0, 2), [
    `你在{location}认识了一个有趣的人，但关系尚不明确。`,
    `{npc}对你有些好感，但你还没想好如何回应。`,
    `你在{location}参加了一场聚会，结识了不少异性。`,
  ], { effects: { charisma: 2 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 30, 50, randProb('common', 1, 2), [
    `你和{npc}保持着朋友以上、恋人未满的关系。`,
    `你在{location}看到了别人恩爱的场景，心中有些羡慕。`,
    `这一年感情上没有太大的波澜，你专注于其他事情。`,
  ], { effects: { luck: 1 } }));

  // --- Cultivation/Practice (13-80) 6 templates ---
  // 传说: 以身合道
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 40, 70, randProb('legendary'), [
    `你在{location}闭关九九八十一天，出关时天地共鸣，你已触摸到了{legend}的境界！`,
    `你的修为达到了前所未有的高度，{location}的灵气因为你而沸腾。`,
    `{legend}的虚影亲自降临{location}，为你指点大道。`,
  ], { effects: { special: 12, intelligence: 10, strength: 5 } }));

  // 史诗: 功法大成
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 30, 60, randProb('epic'), [
    `你成功将{legend}的功法融会贯通，实力暴涨！`,
    `你在{location}经历了一场奇遇，修为大涨，连{npc}都震惊不已。`,
    `你突破了困扰多年的瓶颈，{location}的天地异象持续了三日三夜。`,
  ], { effects: { special: 8, intelligence: 5 } }));

  // 稀有x2: 境界突破
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 20, 50, randProb('rare', 0, 2), [
    `你在{location}闭关修炼，领悟了新的境界。`,
    `{npc}传授你一项绝技，你勤加练习，终于大成。`,
    `你在{location}发现了一处灵气充沛的宝地，修炼事半功倍。`,
  ], { effects: { special: 5, intelligence: 3 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 35, 65, randProb('rare', 1, 2), [
    `你在修炼中遇到了瓶颈，{npc}指点你突破。`,
    `你在{location}经历了一场奇遇，修为有所精进。`,
    `你成功炼制/制造了辅助修炼的物品，效果显著。`,
  ], { effects: { special: 4, strength: 2 } }));

  // 普通x2: 日常修炼
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 13, 40, randProb('common', 0, 2), [
    `你在{location}按部就班地修炼，虽然没有突破但根基更加稳固。`,
    `{npc}检查了你的修炼进度，表示满意。`,
    `你在{location}研读功法秘籍，对一些招式有了新的理解。`,
  ], { effects: { special: 2, intelligence: 1 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 40, 80, randProb('common', 1, 2), [
    `你在{location}巩固已有的修为，为下一次突破做准备。`,
    `这一年修炼进度平平，但你没有气馁。`,
    `{npc}提醒你不可急于求成，你虚心接受。`,
  ], { effects: { special: 2 } }));

  // --- Exploration (13-80) 6 templates ---
  // 传说: 上古遗迹核心
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 25, 50, randProb('legendary'), [
    `你深入{location}最深处，发现了{legend}留下的核心传承，获得了改变命运的机缘！`,
    `你在{location}找到了通往另一个维度的入口，{legend}的秘密向你敞开。`,
    `你解开了一个困扰世人万年的谜题，{location}的真相让你震惊。`,
  ], { effects: { luck: 10, intelligence: 8, special: 6 } }));

  // 史诗: 秘境探险
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 20, 45, randProb('epic'), [
    `你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。`,
    `你探索了一处危险的{location}，九死一生后带回了珍贵的宝物。`,
    `{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。`,
  ], { effects: { luck: 6, strength: 4 } }));

  // 稀有x2: 寻宝探险
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 15, 40, randProb('rare', 0, 2), [
    `你深入{location}探险，发现了未知的秘密。`,
    `你在{location}找到了一些有价值的物品，收获颇丰。`,
    `你在{location}迷路了，却意外发现了一处隐蔽的洞天福地。`,
  ], { effects: { luck: 4, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 30, 55, randProb('rare', 1, 2), [
    `你在{location}发现了一些古老的壁画，记录着失落的文明。`,
    `你探索了一处废弃的{location}，找到了一些有用的物资。`,
    `{npc}带你进入了一个秘密的{location}，你大开眼界。`,
  ], { effects: { intelligence: 3, luck: 3 } }));

  // 普通x2: 普通探索
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 13, 35, randProb('common', 0, 2), [
    `你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。`,
    `你跟着{npc}去{location}采集了一些材料。`,
    `你在{location}发现了一些普通的草药，聊胜于无。`,
  ], { effects: { luck: 2 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 35, 70, randProb('common', 1, 2), [
    `你在{location}进行了常规的巡查，一切正常。`,
    `你重访了以前去过的{location}，有了一些新的发现。`,
    `你在{location}休息了一段时间，养精蓄锐。`,
  ], { effects: { health: 2 } }));

  // --- World Story (20-100) 5 templates ---
  // 传说: 世界格局剧变
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 40, 70, randProb('legendary'), [
    `{legend}的封印彻底破碎，整个世界陷入了前所未有的动荡，你被卷入了漩涡中心！`,
    `一场席卷整个世界的大战爆发了，{location}首当其冲，你必须做出选择。`,
    `世界的规则开始改变，{legend}的意志降临，所有人都受到了影响。`,
  ], { effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 } }));

  // 史诗: 大规模变革
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 60, randProb('epic'), [
    `你发现{location}隐藏着改变世界的秘密，各方势力为此展开了明争暗斗。`,
    `{npc}告诉你一个关于世界起源的惊天秘密，你的世界观被彻底颠覆。`,
    `传说中的{legend}即将降临，所有人都在做准备，{location}的气氛紧张到了极点。`,
  ], { effects: { intelligence: 6, charisma: 4 } }));

  // 稀有: 局部冲突
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 25, 50, randProb('rare'), [
    `{location}附近发生了局部冲突，你不得不卷入其中。`,
    `{npc}带来了一个重要的消息，可能影响到{location}的未来。`,
    `你注意到了{location}的一些异常现象，似乎有什么大事要发生。`,
  ], { effects: { charisma: 3, luck: 3 } }));

  // 普通x2: 传闻/日常
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 45, randProb('common', 0, 2), [
    `你听到了一些关于{legend}的传闻，但真假难辨。`,
    `{location}发生了一些小变化，但你没有太在意。`,
    `{npc}跟你聊了聊最近的时事，你表示关注。`,
  ], { effects: { intelligence: 2 } }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 40, 80, randProb('common', 1, 2), [
    `世界依旧平静，{location}的生活一如既往。`,
    `你听说了一些关于{legend}的新消息，但似乎没什么实质内容。`,
    `这一年没什么大事发生，你在{location}安稳度日。`,
  ], { effects: { luck: 1 } }));

  // --- Hidden (20-150) 4 templates ---
  // 传说: 世界真相
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 60, 120, randProb('legendary'), [
    `你超越了{legend}，看到了世界之外的真相——原来一切都只是...`,
    `你发现了这个世界的运行规则，{location}只是一场巨大棋局的一角。`,
    `{legend}的真正身份让你震惊不已，你终于理解了世界的本质。`,
  ], { conditions: [{ stat: 'intelligence', min: 120 }], effects: { intelligence: 15, special: 10 } }));

  // 史诗: 禁地核心
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 50, 100, randProb('epic'), [
    `你在{location}发现了一个被禁止入内的区域，里面藏着惊人的秘密。`,
    `你解开了{legend}留下的谜题，获得了一份隐藏的传承。`,
    `{npc}告诉你一个只有极少数人知道的秘密，你感到责任重大。`,
  ], { conditions: [{ stat: 'intelligence', min: 100 }], effects: { intelligence: 10, special: 8 } }));

  // 稀有: 秘密通道
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 35, 80, randProb('rare'), [
    `你在{location}找到了一条隐秘的通道，通向未知的地方。`,
    `你发现了一些关于{legend}的隐藏记录，内容令人费解。`,
    `{npc}偷偷塞给你一张地图，上面标记着{location}的秘密地点。`,
  ], { conditions: [{ stat: 'luck', min: 80 }], effects: { luck: 6, intelligence: 4 } }));

  // 普通: 小道消息
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 20, 60, randProb('common'), [
    `你在{location}听到了一些奇怪的低语，但找不到来源。`,
    `你做了一个关于{legend}的怪梦，醒来后记忆模糊。`,
    `{npc}欲言又止，似乎想告诉你什么秘密但最终没说出口。`,
  ], { conditions: [{ stat: 'intelligence', min: 60 }], effects: { intelligence: 3 } }));

  // --- Death (0-300) 5 templates ---
  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 100, 0.35, [
    `你在{location}遭遇不测，生命力迅速流逝。`,
    `你的身体到达了极限，{npc}无能为力。`,
    `{legend}的诅咒降临在你身上，你无法抵抗。`,
  ], { effects: { health: -60 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 150, 0.45, [
    `你在{location}进行了最后的战斗，英勇牺牲。`,
    `寿元耗尽，你在{location}静静地闭上了眼睛。`,
    `你走火入魔，在{location}化为灰烬。`,
  ], { effects: { health: -80 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 200, 0.55, [
    `你在{location}被强敌击杀，死不瞑目。`,
    `你的伤势恶化，{npc}尽力抢救但回天乏术。`,
    `{legend}的力量反噬，你在{location}形神俱灭。`,
  ], { effects: { health: -100 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 250, 0.65, [
    `你在{location}寿终正寝，周围的人都来为你送行。`,
    `你安详地在{location}离世，一生无憾。`,
    `{npc}守在你的床前，目送你离开这个世界。`,
  ], { effects: { health: -100 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 300, 0.75, [
    `你在{location}结束了这一生，灵魂化作流光消散。`,
    `你的故事成为了{location}的传说，后人会记得你的名字。`,
    `{legend}亲自前来接引你的灵魂，你感到一阵温暖。`,
  ], { effects: { health: -100 } }));

  return T;
}

// ============================================================
// 修仙界重大抉择事件生成器
// ============================================================

function generateCultivationMajorChoices(w) {
  const T = [];
  const { prefix } = w;

  // 重大抉择1：道途之选（15岁）— 修仙核心冲突：长生 vs 红尘 vs 杀道
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 15, 15, 0.98, [
    `你站在{location}的山巅，玄天剑尊的虚影出现在你面前："少年，修仙有三条路。长生大道，苦修飞升，断绝红尘；红尘历练，入世悟道，因果缠身；快意恩仇，以杀证道，血染长生。选一条吧。"`,
  ], {
    choices: [
      choice('长生大道（苦修飞升，断绝红尘）', 1.0, '你选择了长生大道，从此闭关苦修，不问世事。你的修为一日千里，但你的心也越来越冷', '你选择了长生大道，但发现断绝红尘比想象中更难。每当夜深人静，你都会想起故乡的灯火', { intelligence: 10, special: 8 }, { charisma: -10, intelligence: 5 }, ['major_longevity'], ['major_longevity_fail']),
      choice('红尘历练（入世悟道，不避因果）', 1.0, '你选择了红尘历练，下山入世。你在凡间经历了爱恨情仇，道心反而更加通透——原来修仙不是逃避，而是经历', '你选择了红尘历练，却被红尘迷了眼。等你醒悟时，十年已过，修为毫无寸进', { charisma: 10, luck: 8 }, { charisma: -5, luck: -8 }, ['major_worldly'], ['major_worldly_fail']),
      choice('快意恩仇（以杀证道，血染长生）', 1.0, '你选择了快意恩仇，以杀证道。你的剑下不留无名之鬼，每一战都让你的道心更加坚定——只是那剑上的血，再也洗不掉了', '你选择了快意恩仇，却在某次战斗中杀错了人。那一刻，你的道心出现了裂痕', { strength: 12, special: 5 }, { health: -25, intelligence: -5 }, ['major_killing'], ['major_killing_fail']),
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  }));

  // 长生大道后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `因为你选择了长生大道，{location}的灵气开始主动向你汇聚。你的闭关洞府外，草木枯萎——你在无意识中吸取了周围的生命力。`,
    `你在{location}苦修三年，出关时已是筑基后期。但你的同门师兄弟看你的眼神变了，他们说你的眼中"已经没有人的温度"。`,
  ], { requiredFlags: ['major_longevity'], effects: { intelligence: 8, special: 6 }, flags: ['major_longevity_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你因为追求长生而获得了强大的修为，但{npc}警告你："长生不是无情。上古有位长生仙君，活了万年，最后却因为孤独而自断仙根。"`,
    `你的修为达到了新的高度，{location}的天地异象持续了三日。但你发现，你已经想不起母亲的脸了。`,
  ], { requiredFlags: ['major_longevity_1'], effects: { special: 10, intelligence: 5, charisma: -5 } }));

  // 红尘历练后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `你因为选择了红尘历练，在{location}遇到了一个凡人女子。她不懂修仙，但她懂你的孤独。你们相爱了，但你知道，她的寿命不过百年。`,
    `你在红尘中历练，在{location}建立了一座医馆，免费为凡人治病。{npc}说："你这不是在浪费时间吗？"你说："这就是我的道。"`,
  ], { requiredFlags: ['major_worldly'], effects: { charisma: 8, luck: 5, health: 5 }, flags: ['major_worldly_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你在红尘之路上的经历让你领悟了"有情道"——不同于正统的"无情道"，有情道认为只有经历过爱恨，才能真正超脱。{location}的修士们开始模仿你的道路。`,
    `{npc}告诉你，你的有情道正是上古"逍遥仙君"所追求的。你冥冥之中，走上了最接近天道本意的道路。`,
  ], { requiredFlags: ['major_worldly_1'], effects: { charisma: 8, luck: 6, special: 4 } }));

  // 快意恩仇后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `你因为选择了快意恩仇，在{location}建立了自己的威名。你的剑下，恶人闻风丧胆。但你也开始被正道宗门警惕——你的杀气太重了。`,
    `你在{location}遇到了血魔殿的人。他们邀请你加入："你的杀道与我们殊途同归。来吧，我们一起重塑这个虚伪的世界。"`,
  ], { requiredFlags: ['major_killing'], effects: { strength: 8, charisma: -3 }, flags: ['major_killing_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你因为追求杀道而获得了强大的实力，但{npc}警告你："以杀证道，自古以来只有一人成功——那就是开创杀道的'血河老祖'。其余所有人，都变成了只知道杀戮的怪物。"`,
    `你的杀意越来越重，{location}的飞鸟经过你上空都会坠亡。你开始怀疑：这真的是我要的道吗？`,
  ], { requiredFlags: ['major_killing_1'], effects: { strength: 10, special: 5, intelligence: -5 } }));

  // 重大抉择2：正邪之抉（30岁）— 灵魂深处的考验
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 30, 0.97, [
    `{location}发生了一件震动天下的大事。血魔殿血祭了三个村庄的凡人，青云宗下令所有弟子必须参与剿魔。但你在调查中发现了真相——那些"被血祭"的凡人，其实是被青云宗自己处决的，目的是栽赃血魔殿、挑起正魔大战。{npc}向你提出了一个交易：公布真相，你将被正道追杀；保持沉默，你可以获得宗门核心资源。这是对你灵魂的考验。`,
  ], {
    choices: [
      choice('坚守本心，公布真相', 1.0, '你冒着被正道追杀的风险，公布了真相。虽然失去了宗门的庇护，但你的道心前所未有的通明——你知道，真正的正义不是站在正道一边，而是站在真相一边', '你公布了真相，但没有人相信。青云宗反咬一口，说你是魔道间谍。你被逐出宗门，四处流亡', { intelligence: 10, charisma: 6, luck: 5 }, { health: -20, charisma: -10, strength: -5 }, ['major_justice'], ['major_justice_fail']),
      choice('隐忍不发，暗中调查', 1.0, '你选择了暂时隐忍，暗中收集更多证据。三年后，你掌握了青云宗与魔道暗中交易的完整证据链，一举扳倒了幕后黑手', '你的隐忍被当作默认。你越来越深地卷入了宗门的黑暗面，等你想要抽身时，已经来不及了', { intelligence: 8, luck: 6 }, { charisma: -8, luck: -5 }, ['major_wisdom_dark'], ['major_wisdom_dark_fail']),
      choice('不择手段，借机上位', 1.0, '你利用这个秘密要挟青云宗高层，获得了大量资源和地位。但你也知道，从这一刻起，你和他们没有区别了', '你的要挟被反制。青云宗以"勾结魔道"的罪名将你打入死牢，你的修仙之路到此终结', { strength: 8, special: 5 }, { charisma: -15, luck: -10, health: -20 }, ['major_dark'], ['major_dark_fail']),
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  }));

  // 正义后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `因为你坚守了本心，{location}的散修们自发聚集到你身边。你的正义之名吸引了无数被宗门抛弃的人——你们成为了修仙界最特殊的"第三方势力"。`,
    `你在{location}建立了一个"真相阁"，专门调查正魔两道的黑幕。正道视你为眼中钉，魔道视你为肉中刺，但普通百姓将你奉为神明。`,
  ], { requiredFlags: ['major_justice'], effects: { intelligence: 8, charisma: 8, luck: 5 } }));

  // 隐忍后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `你因为隐忍不发而获得了青云宗高层的信任。他们让你参与了更多机密，你也因此掌握了更多黑幕。{npc}感叹："你是潜伏在黑暗中的光。"`,
    `你在{location}发现了更大的阴谋——青云宗与万法宗的内斗，其实是某位仙界大能在凡界的棋子博弈。而你，正在成为第三颗棋子。`,
  ], { requiredFlags: ['major_wisdom_dark'], effects: { intelligence: 10, luck: 5, special: 3 } }));

  // 黑暗后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `你因为不择手段而获得了强大的力量和资源。但{npc}看你的眼神变得复杂——那不是敬畏，那是怜悯。你在{location}建立了自己的势力，却发现自己越来越孤独。`,
    `血魔老祖因为你的黑暗之路而对你产生了兴趣。他说："正道培养出来的魔，比魔道更纯粹。你来血魔殿吧，我给你想要的一切。"`,
  ], { requiredFlags: ['major_dark'], effects: { strength: 10, special: 6, charisma: -8 } }));

  // 重大抉择3：天劫之择（45岁）— 面对天道
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 45, 45, 0.96, [
    `你修炼到了元婴后期，天劫即将来临。{npc}告诉你："你的积累已经足够，但天劫的强度与你的因果有关。你这一生杀孽太重/功德太高/因果太杂，天劫将比常人强三倍。你有两个选择：强行渡劫，九死一生；或者压制修为，以秘法延缓天劫，但每延缓一年，天劫就强一分。"`,
  ], {
    choices: [
      choice('强行渡劫，向死而生', 1.0, '你选择了强行渡劫。九九雷霆轰击而下，你几度濒死，但凭借强大的意志和肉身硬抗了过来。渡劫成功后，你的修为暴涨，直接突破到了化神期！', '天劫之力超出了你的预期。你虽然勉强活了下来，但修为尽废，灵根受损，从此沦为凡人', { strength: 15, special: 12, charisma: 8 }, { health: -60, special: -20, strength: -10 }, ['major_tribulation'], ['major_tribulation_fail']),
      choice('压制修为，等待时机', 1.0, '你选择了压制修为，寻找削弱天劫的方法。你游历天下，积累功德，最终找到了上古遗留的"渡劫阵法"，将天劫难度降低了一半', '你压制了修为，但天劫的强度仍在增长。十年后，当你终于准备好时，发现天劫已经强大到了根本无法抵抗的程度', { intelligence: 10, luck: 8, health: 10 }, { health: -30, intelligence: 5 }, ['major_wait'], ['major_wait_fail']),
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  }));

  // 渡劫后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你成功渡劫的消息传遍了修仙界。{location}的修士们将你的名字刻在了"渡劫碑"上——那是记录所有成功渡劫者的地方。`,
    `{npc}说你是万古以来最勇敢的渡劫者。你的名字将被后世修士传颂，激励他们在天劫面前永不退缩。`,
  ], { requiredFlags: ['major_tribulation'], effects: { strength: 8, charisma: 10, special: 6 } }));

  // 等待后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你因为等待时机而错过了最佳的渡劫窗口，但你也因此积累了大量的功德和准备。当你最终渡劫时，虽然天劫更强，但你的准备也更充分。`,
    `{npc}赞叹你的智慧——"天道酬勤，但更酬智。你不是靠蛮力战胜天劫的，你是靠智慧让天劫输给了你。"`,
  ], { requiredFlags: ['major_wait'], effects: { intelligence: 10, luck: 8, special: 5 } }));

  // 重大抉择4：飞升之择（60岁）— 人生终局
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 60, 60, 0.95, [
    `你站在{location}的天外天，仙界通道就在眼前。但你突然发现了一个惊天的秘密：仙界通道的封印不是自然形成的，而是仙界的某位大能故意设下的——他在阻止凡人飞升，独占仙界资源！你现在有两个选择：强行打破封印飞升，与仙界大能为敌；或者留在凡界，守护这片生你养你的土地。`,
  ], {
    choices: [
      choice('打破封印，飞升仙界', 1.0, '你一拳击碎了仙界通道的封印，飞升仙界。你发现仙界并非乐土，而是另一个充满争斗的世界。但你没有退缩——既然来了，就要改变它', '你试图打破封印，但仙界大能的力量远超你的想象。你被封印反噬，身死道消，魂飞魄散', { special: 20, intelligence: 15 }, { health: -100, special: -30 }, ['major_ascend'], ['major_ascend_fail']),
      choice('留在凡界，守护故土', 1.0, '你选择了留在凡界。你以化神期的修为成为了凡界的守护神，阻止仙界大能的阴谋。虽然你失去了永恒的生命，但你获得了永恒的意义', '你留在凡界，但仙界大能的代理人开始追杀你。你虽然强大，但双拳难敌四手，最终被围攻致死', { charisma: 15, health: 10, luck: 10 }, { health: -50, charisma: 5 }, ['major_stay'], ['major_stay_fail']),
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  }));

  // 飞升后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你飞升仙界后，发现这里与凡界并无不同——有争斗、有阴谋、有不公。你说："既然我能改变凡界，就能改变仙界。"`,
    `你在仙界找到了志同道合者，开始策划推翻那位垄断仙界资源的大能。你的战斗，才刚刚开始。`,
  ], { requiredFlags: ['major_ascend'], effects: { special: 15, intelligence: 10, strength: 5 } }));

  // 留守后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你留在凡界的举动感动了无数人。{location}建起了你的雕像，不是你的神像，而是一个普通老人的形象——因为你说："我不是神，我只是不想离开的凡人。"`,
    `你以凡界守护神的身份活了两千年，见证了无数修士的飞升与陨落。临终前，你说："我不后悔。这片土地上的一草一木，都比仙界的琼楼玉宇更珍贵。"`,
  ], { requiredFlags: ['major_stay'], effects: { charisma: 12, luck: 10, health: 5 } }));

  return T;
}

// ============================================================
// 重大抉择事件生成器（支线入口 / 主线转折点）
// ============================================================

function generateMagicMajorChoices(w) {
  const { prefix } = w;
  const T = [];

  // 抉择一：元素之路
  T.push(tmpl(makeId(prefix, 'major'), 'major', 14, 22, 0.55, [
    `魔法学院毕业之际，你需要选择自己的专精元素。{npc}看着你，眼中满是期待。`,
  ], {
    effects: { intelligence: 2, charisma: 1 },
    choices: [
      choice('专精火焰，追求极致破坏力', 0.72, '你选择了火焰之道。{npc}点头："火焰是毁灭，也是重生。"你的火系魔法威力远超同阶，但水系魔法变得异常困难', '你选择了火焰，但你的体质偏向水属性。每一次施法都像在燃烧自己的灵魂，痛苦不堪', { strength: 10, intelligence: 5, special: 3 }, { strength: 3, intelligence: 2, health: -10 }, ['branch_fire_master'], ['branch_fire_fail']),
      choice('专精寒冰，追求控制与防御', 0.68, '你选择了寒冰之道。{npc}欣慰地说："寒冰之下，隐藏着最坚定的意志。"你的冰系魔法攻守兼备，成为同届中最稳健的法师', '你选择了寒冰，但火焰系的反噬让你身体日渐虚弱。{npc}摇头："水火不容，你选了最难走的路。"', { health: 10, intelligence: 5, luck: 3 }, { health: -5, intelligence: 2, strength: -3 }, ['branch_ice_master'], ['branch_ice_fail']),
      choice('兼修多系，不求专精但求广博', 0.45, '你选择了多系兼修之路。{npc}皱眉："贪多嚼不烂，但...也许你能走出一条前人未走过的路。"多年后，你成为了罕见的"全系法师"', '多系兼修消耗了你太多的精力，最终每一系都停留在入门水平。{npc}叹息："早知如此，不如专精一系。"', { intelligence: 8, luck: 5, charisma: 3 }, { intelligence: 3, strength: -3, health: -5 }, ['branch_multi_master'], ['branch_multi_fail']),
    ],
    flags: ['major_seen_element'],
    chainPriority: 10,
  }));

  // 抉择二：学派之路
  T.push(tmpl(makeId(prefix, 'major'), 'major', 24, 35, 0.50, [
    `你以优异成绩从魔法学院毕业，面临人生重大抉择。{npc}找到你，带来了三份邀请函——真理之塔的学术邀请、七大家族之一的招揽、以及暗影议会的秘密来信。`,
  ], {
    effects: { charisma: 2 },
    choices: [
      choice('加入真理之塔，投身纯学术', 0.60, '你进入了真理之塔，在{location}开始了纯粹的学术研究。千年后，你的名字与{legend}齐名，成为了魔法理论的开山祖师', '真理之塔的学术氛围压抑而枯燥，你发现纯理论无法解决实际问题，开始怀疑自己的选择', { intelligence: 15, charisma: 5, luck: 5 }, { intelligence: 5, charisma: -5, luck: -3 }, ['branch_tower_scholar'], ['branch_tower_fail']),
      choice('加入七大家族，追求力量', 0.65, '你加入了{npc}的家族，获得了大量资源和古老的魔法传承。在家族支持下，你的实力突飞猛进，成为了家族的骄傲', '七大家族内部斗争残酷，你被卷入了权力纷争，虽然获得了力量，但失去了自由和朋友', { strength: 12, intelligence: 8, charisma: 3 }, { strength: 5, charisma: -8, luck: -5 }, ['branch_family_power'], ['branch_family_fail']),
      choice('加入暗影议会，走上禁忌之路', 0.35, '你加入了暗影议会，开始研究禁忌魔法。{npc}警告过你："禁忌的力量需要代价。"但你已无法回头——而这条路，竟然通向了魔法的终极真理！', '禁忌魔法的反噬远超你的想象。你在{location}的第一次实验中失去了半条命，从此噩梦缠身', { strength: 15, intelligence: 10, luck: -5 }, { strength: 3, intelligence: 5, health: -30, luck: -10 }, ['branch_shadow_taboo'], ['branch_shadow_fail']),
    ],
    flags: ['major_seen_faction'],
    chainPriority: 10,
  }));

  // 抉择三：召唤之道
  T.push(tmpl(makeId(prefix, 'major'), 'major', 35, 50, 0.48, [
    `你在{location}发现了一本禁忌的召唤术典籍。书中记载：召唤元素位面的生物需要献祭施法者的部分灵魂。{npc}警告你："那是与恶魔的交易。"`,
  ], {
    effects: { luck: -2 },
    choices: [
      choice('以灵魂为代价，召唤元素使魔', 0.40, '你以十年寿命为代价，召唤了一只远古元素使魔。它成为了你最忠诚的伙伴，陪你征战四方，无人可挡', '召唤仪式出现了意外，远古元素生物失控，在{location}造成了巨大的破坏。你虽然勉强控制住了它，但灵魂已经残缺不全', { strength: 15, luck: -5, special: 5 }, { health: -20, strength: 5, luck: -15 }, ['branch_summon_success'], ['branch_summon_fail']),
      choice('拒绝召唤，销毁典籍', 0.80, '你拒绝了召唤，将典籍付之一炬。{npc}欣慰地看着你："明智的选择。真正的力量，不需要出卖灵魂。"多年后，你以纯魔法修为超越了那些依靠召唤的法师', '你销毁了典籍，但暗影议会因此视你为眼中钉。{npc}被牵连暗杀，你从此背负上了复仇的重担', { charisma: 10, intelligence: 5, luck: 5 }, { charisma: -5, luck: -10, health: -10 }, ['branch_reject_summon'], ['branch_reject_fail']),
      choice('改良仪式，寻找不伤害灵魂的方法', 0.25, '你花了十年时间改良召唤仪式，最终创造出了"共生召唤术"——施法者与元素生物共享魔力，而非出卖灵魂。{legend}惊呼："你改变了召唤魔法的规则！"', '改良仪式失败了。你被困在了元素位面与物质界的夹缝中，整整三年才脱困。出来后，你发现自己的魔力大幅衰退', { intelligence: 15, luck: 5, special: 8 }, { intelligence: 3, strength: -5, health: -15, luck: -5 }, ['branch_modify_summon'], ['branch_modify_fail']),
    ],
    flags: ['major_seen_summon'],
    chainPriority: 10,
  }));

  // 抉择四：元素战争
  T.push(tmpl(makeId(prefix, 'major'), 'major', 45, 60, 0.45, [
    `元素位面裂缝在{location}出现，元素大军涌入物质界。{npc}站在你面前，满脸疲惫："这是千年一遇的元素入侵。你可以选择参战，也可以选择避世。"`,
  ], {
    effects: { health: -3 },
    choices: [
      choice('投身战场，守护物质界', 0.50, '你率领法师军团奔赴前线，在{location}与元素大军激战七天七夜。最终，你用生命为代价封印了裂缝。后人将你奉为英雄，你的雕像矗立在{location}的广场中央', '你投身战场，但元素大军的实力远超想象。你身受重伤，虽然侥幸存活，但从此魔法修为停滞不前', { strength: 15, charisma: 10, health: -30 }, { strength: 5, health: -25, luck: -5 }, ['branch_war_hero'], ['branch_war_fail']),
      choice('避世隐居，保全自身', 0.85, '你选择了避世，在{location}的深山建立了隐居所。元素战争结束后，你成为了少数幸存的顶尖法师。但每当夜深人静，你都会想起那些战死的朋友，良心难安', '你避世隐居，但元素裂缝不断扩大，最终吞噬了整个区域。你的隐居所也未能幸免，你死在了睡梦中', { luck: 10, health: 5, intelligence: 5 }, { health: -100 }, ['branch_hermit'], ['branch_hermit_fail']),
      choice('寻找裂缝源头，从根源解决', 0.20, '你冒险进入了元素位面，找到了裂缝的源头——原来是远古元素领主的封印松动了。你用{legend}中传承的方法重新加固了封印，元素战争戛然而止。你成为了两个位面的英雄', '元素位面的环境远超你的承受力。你虽然找到了裂缝源头，但身受重伤，勉强逃回物质界时已奄奄一息', { intelligence: 15, strength: 10, special: 10 }, { intelligence: 5, health: -40, strength: 3 }, ['branch_source_hero'], ['branch_source_fail']),
    ],
    flags: ['major_seen_war'],
    chainPriority: 10,
  }));

  // 抉择五：贤者之石
  T.push(tmpl(makeId(prefix, 'major'), 'major', 55, 70, 0.42, [
    `{npc}临终前告诉你一个秘密：传说中"贤者之石"就藏在{location}的地下迷宫中。贤者之石可以实现任何一个愿望——长生不老、复活亡者、或者...改变世界的基本法则。`,
  ], {
    effects: { luck: 2 },
    choices: [
      choice('寻找贤者之石，追求永生', 0.30, '你历经九死一生，终于在{location}找到了贤者之石。你许下了永生的愿望——然后你发现，永生不是祝福，而是诅咒。看着一代又一代朋友死去，你才明白{npc}为何从未去寻找它', '你找到了贤者之石，但守护它的是远古龙族。你被龙息击中，虽然逃出生天，但身体留下了永远无法愈合的伤痕', { health: 50, charisma: -5, luck: -10 }, { health: -30, strength: 5, luck: -5 }, ['branch_stone_eternal'], ['branch_stone_fail']),
      choice('寻找贤者之石，复活挚友', 0.35, '你用贤者之石复活了{npc}。但复活的她不是原来的她——没有记忆，没有感情，只是一具空壳。你抱着她痛哭："对不起...我不该打扰死者的安宁。"', '复活仪式失败了。{npc}的灵魂被撕裂，一部分留在冥界，一部分困在了物质界。她变成了"迷失之魂"，永世不得超生', { charisma: -5, luck: -10, health: -10 }, { charisma: -10, luck: -20, health: -20 }, ['branch_stone_revive'], ['branch_stone_revive_fail']),
      choice('销毁贤者之石，不让任何人拥有它', 0.55, '你找到了贤者之石，然后亲手摧毁了它。{npc}的灵魂在虚空中微笑："你做出了正确的选择。"从此，世间再无贤者之石，也少了一份诱惑与纷争', '销毁贤者之石的瞬间，它的能量爆发，将{location}夷为平地。你虽然幸存，但永远背负着沉重的罪孽', { charisma: 15, luck: 10, special: 5 }, { charisma: -15, luck: -15, health: -20 }, ['branch_stone_destroy'], ['branch_stone_destroy_fail']),
    ],
    flags: ['major_seen_stone'],
    chainPriority: 10,
  }));

  // 抉择六：虚空之邀
  T.push(tmpl(makeId(prefix, 'major'), 'major', 65, 80, 0.40, [
    `你感应到了来自虚空的存在。它们不是神明，不是恶魔，而是比元素位面更古老的"法则生命"。它们在向你发出邀请：加入它们，成为超越物质与星界的存在。`,
  ], {
    effects: { special: 5 },
    choices: [
      choice('接受邀请，成为虚空行者', 0.25, '你接受了虚空之邀，身体开始"虚空化"。你失去了物质形态，但获得了在虚空与物质界自由穿梭的能力。千年后，你成为了传说中的"虚空观察者"，见证无数文明的兴衰', '虚空的力量腐蚀了你的意识。你虽然获得了力量，但逐渐失去了自我，最终成为了虚空中的"迷失者"，永世徘徊', { special: 20, strength: 10, intelligence: 10 }, { special: 10, strength: 5, charisma: -20, health: -20 }, ['branch_void_walker'], ['branch_void_fail']),
      choice('拒绝邀请，守护物质界', 0.75, '你拒绝了虚空之邀，选择守护物质界。虚空存在尊重了你的选择，留下了一句谜语："当你准备好时，虚空永远为你敞开。"多年后，你成为了物质界最强大的守护者', '虚空存在因为你的拒绝而愤怒，它们在{location}引发了虚空风暴。你带领法师们平息了风暴，但魔力耗尽，从此修为衰退', { charisma: 10, strength: 10, luck: 5 }, { charisma: -5, strength: 3, health: -20 }, ['branch_void_reject'], ['branch_void_reject_fail']),
      choice('与虚空谈判，寻求共存之道', 0.15, '你没有接受也没有拒绝，而是与虚空存在进行了长达十年的谈判。最终，你成为了物质界与虚空的"桥梁"，两个世界因为你的努力而建立了联系。你是万古以来最伟大的外交官', '虚空存在不理解"谈判"这个概念。你的"谈判"在它们看来是一种挑衅。它们攻击了你的精神，你花了二十年才恢复', { intelligence: 20, charisma: 15, special: 10 }, { intelligence: 5, charisma: -10, health: -25 }, ['branch_void_diplomat'], ['branch_void_diplomat_fail']),
    ],
    flags: ['major_seen_void'],
    chainPriority: 10,
  }));

  // 抉择七：传承之择（晚年）
  T.push(tmpl(makeId(prefix, 'major'), 'major', 70, 85, 0.38, [
    `大限将至，你必须决定自己的传承。{npc}问："你是想把毕生所学传给弟子，还是将自己的魔法烙印融入世界，成为永恒的一部分？"`,
  ], {
    effects: { charisma: 3 },
    choices: [
      choice('选择传人，让魔法延续', 0.70, '你在{location}挑选了三位弟子，将毕生所学倾囊相授。千年后，你的弟子们开宗立派，你的魔法传承成为了魔法大陆的基石', '你选择的弟子中有人背叛了你，将你的禁忌魔法泄露给了暗影议会。你的名声毁于一旦，但魔法传承依然在暗中流传', { charisma: 15, luck: 5, special: 5 }, { charisma: -10, luck: -10, special: 3 }, ['branch_legacy_student'], ['branch_legacy_student_fail']),
      choice('融入世界，成为魔法的一部分', 0.40, '你在{location}施放了最后的魔法——"世界同化"。你的意识融入了物质界，成为了魔法网络的一部分。从此，每一个施法者都能感受到你的存在，你以另一种形式获得了永生', "同化仪式出现了偏差，你的意识被困在了物质界与星界的夹缝中。你成为了'困灵'，永远游荡，无法安息", { special: 20, charisma: 10 }, { special: 5, charisma: -15, health: -30 }, ['branch_legacy_world'], ['branch_legacy_world_fail']),
      choice('著书立说，以文字传世', 0.60, '你在{location}闭关十年，写下了《魔法真理解析》——一部涵盖了你所有魔法心得的巨著。这部书成为了后世的魔法圣经，你以文字的形式获得了不朽', '你的著作被真理之塔禁毁，认为其中包含"危险的思想"。虽然禁毁，但手抄本依然在黑市流传，你的思想反而因为禁毁而更加神秘', { intelligence: 15, charisma: 10, luck: 3 }, { intelligence: 5, charisma: -5, luck: -5 }, ['branch_legacy_book'], ['branch_legacy_book_fail']),
    ],
    flags: ['major_seen_legacy'],
    chainPriority: 10,
  }));

  return T;
}

function generateMajorChoices(w) {
  if (w.prefix === 'cx') {
    return generateCultivationMajorChoices(w);
  }
  if (w.prefix === 'mg') {
    return generateMagicMajorChoices(w);
  }
  const T = [];
  const { prefix, scenes, npcs, legends } = w;

  // 重大抉择1：成年之路（15岁）— 人生方向的第一次重大选择
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 15, 15, 0.98, [
    `你站在{location}的中央，人生第一次面临真正的抉择。{npc}告诉你，前方有三条路：追求极致的力量、无拘无束的自由，或者守护一切的觉悟。你的选择将改变你的一生。`,
  ], {
    choices: [
      choice('追求力量', 0.7, '你选择了力量之路，从此一往无前，无人能挡', '你选择了力量之路，却发现代价远超想象', { strength: 10, special: 5 }, { health: -20, strength: 3 }, ['major_power'], ['major_power_fail']),
      choice('追求自由', 0.75, '你选择了自由之路，天地广阔任逍遥', '自由之路充满荆棘，你在{location}迷失了方向', { luck: 10, intelligence: 5 }, { luck: -8, charisma: -5 }, ['major_freedom'], ['major_freedom_fail']),
      choice('追求守护', 0.8, '你选择了守护之路，成为弱者的支柱', '你的善意被利用，在{location}身心俱疲', { charisma: 8, health: 10 }, { charisma: -8, health: -15 }, ['major_guardian'], ['major_guardian_fail']),
    ],
    flags: ['major_seen_15'],
  }));

  // 力量之路后续支线（2个）
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.85, [
    `因为你选择了力量之路，{location}的强者对你另眼相看。你的力量引起了{legend}的注意。`,
    `你在追求力量的过程中，在{location}发现了一本失传已久的强大功法。`,
  ], { requiredFlags: ['major_power'], effects: { strength: 6, special: 3 }, flags: ['major_power_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.80, [
    `你因为追求力量而获得了强大的实力，但{npc}警告你不要迷失本心。你在{location}展现出的力量让所有人畏惧。`,
    `你的力量达到了新的高度，{legend}亲自前来与你切磋，你从中领悟了许多。`,
  ], { requiredFlags: ['major_power_1'], effects: { strength: 8, charisma: -3 } }));

  // 自由之路后续支线（2个）
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.85, [
    `你因为选择了自由之路，在{location}结识了来自各地的奇人异士。你的自由精神感染了{npc}。`,
    `你在自由探索中意外发现了{legend}留下的隐秘线索，命运的齿轮开始转动。`,
  ], { requiredFlags: ['major_freedom'], effects: { luck: 6, intelligence: 4 }, flags: ['major_freedom_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.80, [
    `你在自由之路上的探索让你发现了{location}不为人知的秘密。{legend}的遗迹因为你的一次偶然探索而被发现。`,
    `{npc}告诉你，你的自由精神正是{legend}当年所追求的，你冥冥之中走上了正确的道路。`,
  ], { requiredFlags: ['major_freedom_1'], effects: { luck: 8, special: 4 } }));

  // 守护之路后续支线（2个）
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.85, [
    `你因为选择了守护之路，在{location}被无数人敬仰。{npc}因为你的守护而得以存活，发誓永远追随你。`,
    `你守护的人们在{location}为你建立了一座小小的祠堂，虽然简陋但充满诚意。`,
  ], { requiredFlags: ['major_guardian'], effects: { charisma: 6, health: 5 }, flags: ['major_guardian_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.80, [
    `你守护的人在{location}遭遇了危机，你毫不犹豫地挺身而出。你的守护之名传遍了四方。`,
    `{legend}也对你的品德表示赞赏，亲自赐予你一份守护者的传承。`,
  ], { requiredFlags: ['major_guardian_1'], effects: { charisma: 8, strength: 4 } }));

  // 重大抉择2：善恶之抉（30岁）— 灵魂深处的考验
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 30, 0.97, [
    `{location}发生了一件震动天下的大事。{npc}向你提出了一个交易：违背本心可获巨大利益，坚守正义则可能失去一切。这是对你灵魂的考验。`,
  ], {
    choices: [
      choice('坚守本心', 0.65, '你拒绝了诱惑，虽然失去了眼前的利益，但道心更加坚定', '你坚守了本心，却遭到了黑暗势力的疯狂报复', { intelligence: 8, charisma: 5 }, { health: -20, strength: -5 }, ['major_justice'], ['major_justice_fail']),
      choice('不择手段', 0.55, '你获得了梦寐以求的力量与财富，但内心开始有了一丝阴霾', '你的阴谋被揭穿，在{location}声名狼藉', { strength: 10, special: 5 }, { charisma: -15, luck: -10 }, ['major_dark'], ['major_dark_fail']),
    ],
    flags: ['major_seen_30'],
  }));

  // 正义后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.82, [
    `因为你坚守了本心，{legend}亲自降临{location}为你加持。你的正义之名吸引了无数志同道合者。`,
    `你在{location}建立了一个正义的据点，成为了黑暗势力的眼中钉。`,
  ], { requiredFlags: ['major_justice'], effects: { intelligence: 6, charisma: 6, luck: 4 } }));

  // 黑暗后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.82, [
    `你因为不择手段而获得了强大的力量，但{npc}看你的眼神变得复杂。你在{location}建立了自己的势力。`,
    `{legend}因为你的黑暗之路而对你产生了兴趣，这是福是祸尚未可知。`,
  ], { requiredFlags: ['major_dark'], effects: { strength: 8, special: 6, charisma: -5 } }));

  // 重大抉择3：生死之择（45岁）— 面对绝境
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 45, 45, 0.96, [
    `你遭遇了人生中最危险的敌人。{legend}的化身出现在{location}，向你发起挑战。所有人都认为你没有胜算。这是生死抉择的时刻。`,
  ], {
    choices: [
      choice('以命相搏', 0.45, '你拼尽一切，竟然真的战胜了{legend}的化身！天下震动！', '你拼死一战，虽然重创了敌人，但自己也命悬一线', { strength: 12, charisma: 8 }, { health: -40, strength: 5 }, ['major_bravery'], ['major_bravery_fail']),
      choice('忍辱求生', 0.75, '你选择了暂时退让，保存实力等待时机。智者不逞匹夫之勇', '你的退让被当作懦弱，{location}的人开始轻视你', { intelligence: 8, luck: 5 }, { charisma: -10, luck: -5 }, ['major_wisdom'], ['major_wisdom_fail']),
    ],
    flags: ['major_seen_45'],
  }));

  // 勇者后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.80, [
    `你战胜{legend}化身的壮举传遍了整个世界，{location}的人都把你当作英雄。你的勇气激励了无数人。`,
    `{npc}说你是万古以来最勇敢的人，你的名字将被刻入{location}的历史。`,
  ], { requiredFlags: ['major_bravery'], effects: { strength: 6, charisma: 8, luck: 4 } }));

  // 智者后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.80, [
    `你忍辱负重后的反击让所有人震惊，{location}的敌人在你最强的时刻倒下。`,
    `{npc}赞叹你的智慧——不争一时之长短，方得始终。你的名声反而比以前更盛。`,
  ], { requiredFlags: ['major_wisdom'], effects: { intelligence: 8, luck: 6, special: 4 } }));

  // 重大抉择4：终极抉择（60岁）— 人生终局
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 60, 60, 0.95, [
    `你站在{location}的最高处，俯瞰着这个世界。{legend}的最后传承出现在你面前：追求永恒的极致，或者守护人间直到最后一刻。这是你的终极抉择。`,
  ], {
    choices: [
      choice('追求永恒', 0.6, '你踏上了追求永恒的道路，从此与天地同寿。但你回头望去，发现身后已空无一人', '你追求永恒的尝试失败了，但你无怨无悔', { special: 15, intelligence: 10 }, { health: -30, special: 5 }, ['major_eternal'], ['major_eternal_fail']),
      choice('守护人间', 0.8, '你选择了守护人间，将自己的一切都奉献给了这个世界。后人将永远记得你的名字', '你的守护让你耗尽了一切，但你知道这是值得的', { charisma: 12, health: 10, luck: 8 }, { health: -20, charisma: 5 }, ['major_legacy'], ['major_legacy_fail']),
    ],
    flags: ['major_seen_60'],
  }));

  // 永恒后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.78, [
    `你追求永恒的道路越走越远，{location}的凡尘俗世已与你无关。你触摸到了{legend}的境界。`,
    `你获得了永恒的生命，但内心却越来越孤独。你开始怀疑当初的选择。`,
  ], { requiredFlags: ['major_eternal'], effects: { special: 10, intelligence: 8, charisma: -5 } }));

  // 传承后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.78, [
    `你守护人间的举动感动了无数人，{location}建起了你的雕像。你的传承在{npc}手中延续。`,
    `这个世界因为你的存在而更加美好，{legend}也为你的选择而动容。`,
  ], { requiredFlags: ['major_legacy'], effects: { charisma: 10, luck: 8, health: 5 } }));

  return T;
}

// ============================================================
// 修仙界身份专属事件生成器（世界观驱动，有因果关系）
// ============================================================

function generateCultivationIdentityEvents(w) {
  const T = [];
  const { prefix } = w;

  const identityStories = {
    commoner: {
      name: '凡人子弟',
      childhood: [
        [`你生在青牛村一个普通农家。灵根检测那天，{npc}摇头叹息："五行杂灵根，下品之资，修仙无望。"村人看你的眼神从期待变成了怜悯。`, `作为凡人子弟，你在{location}的灵根检测仪式上面色苍白——你的灵根黯淡如烛火将熄，{npc}当众宣布你与仙道无缘。`],
        [`你不甘心。每日清晨，你独自爬到{location}的最高处，对着朝阳吐纳。虽然感受不到灵气，但你总觉得身体里有什么在沉睡。`, `被判定无修仙资质后，你在{location}发现了一处被藤蔓遮掩的石洞，洞口刻着古怪的符文，似在召唤着你。`],
      ],
      growth: [
        [`你在石洞中找到了一本残破的炼体功法——《金刚淬体诀》。没有灵根，便以肉身证道！你开始以妖兽之血淬炼体魄。`, `十六岁那年，你在{location}遭遇了一头低阶妖兽。普通人本该必死，但你竟以肉身之力将其击杀！{npc}震惊地看着你。`],
        [`你的炼体之术小有所成。一次机缘巧合下，你在{location}救了一位青云宗外门弟子，他感激之下赠你一枚筑基丹。`, `散修集市上，{npc}看出了你走的是体修之路，感慨道："以武入道，古来有之。小子，你可愿听我讲一段故事？"`],
      ],
      adult: [
        [`凭借坚如精钢的肉身，你在{location}的宗门选拔中一鸣惊人。青云宗破格收你为外门弟子——史上第一个体修外门！`, `你以体修之身踏入修仙界，却在{location}遭遇了正统修士的轻视。"区区蛮力，也配修仙？"你握紧了拳头。`],
        [`成年后的你面临抉择：青云宗长老欣赏你的毅力，愿收你为真传，但要求你放弃体修、转修正统功法；或者继续体修，但永远得不到宗门核心资源。`, ``, '坚持体修', '转修正统', 0.6],
      ],
      special: [
        [`一次生死危机中，你在{location}的肉身突破了极限，体内沉睡的某种力量被唤醒——原来你的灵根并非没有，而是被上古封印锁住了！`, `{npc}为你检查身体后大惊失色："你的灵根...不，那不是灵根，那是传说中的混沌灵根！只是被九重封印镇压！"`],
        [`你找到了解开第一重封印的方法。封印解除的瞬间，天地灵气疯狂涌入你的体内——你的混沌灵根与金刚肉身完美融合，开创了前所未有的"体灵双修"之道！`, `你成为了修仙界第一个同时走到体修与灵修巅峰的人。后人称你为"混沌金刚"，你的故事激励了无数被判定为废材的人。`],
      ],
    },
    genius: {
      name: '宗门天才',
      childhood: [
        [`你出生的那一夜，{location}上空紫气东来三千里，九霄雷动。青云宗玄天剑尊亲自下山，将你收为关门弟子。`, `作为宗门天才，你三岁便能引气入体，五岁御剑飞行。{location}的弟子们看你的眼神中既有羡慕，也有嫉妒。`],
        [`六岁那年的宗门大比，你以炼气之身击败了筑基弟子。{npc}赞叹："此子必成我青云宗千年以来第一人。"但你也感受到了沉甸甸的压力。`, `你的童年没有玩耍，只有无尽的修炼。{location}的演武场上，你每日挥剑三千次，直到掌心磨出血泡。`],
      ],
      growth: [
        [`十四岁，你突破筑基期，创造了青云宗三千年来的最快纪录。但就在此时，你发现宗门内部暗流涌动——玄天剑尊年事已高，长老们开始争夺下任掌门之位。`, `作为宗门天才，你不可避免地被卷入了派系斗争。{location}的一次夜谈中，大师兄暗示你若支持他继位，他将倾尽全力培养你。`],
        [`十八岁那年，你在{location}的秘境试炼中遭遇了心魔。幻境里，你看到了自己最恐惧的画面——被另一个更天才的人超越，沦为笑柄。`, `你战胜了心魔，道心更加坚定。{npc}告诉你："天赋是上天给你的，但道心是你自己修来的。记住这一点。"`],
      ],
      adult: [
        [`成年后的你已是青云宗最年轻的金丹修士。但宗门内部的斗争愈演愈烈——玄天剑尊闭关冲击化神，各大长老纷纷拉拢你站队。`, `你在{location}意外发现了大师兄的秘密：他为了争夺掌门之位，竟然暗中与魔道交易！你握紧了手中的剑。`],
        [`你发现大师兄与魔道交易的事实。现在你有两个选择：向掌门举报，但可能被视为诬陷；或者暂时隐忍，寻找更多证据。`, ``, '举报大师兄', '隐忍收集证据', 0.55],
      ],
      special: [
        [`玄天剑尊出关后得知真相，亲手处决了大师兄。他将掌门信物交给了你："从今天起，你就是青云宗下一任掌门。"`, `你拒绝了掌门之位。"我的道，不在宗门之内。"你离开青云宗，独自踏上了寻找仙界通道的旅途。{npc}目送你远去，眼中满是复杂。`],
        [`百年后，你成为了修仙界最年轻的化神期修士。有人问你成功的秘诀，你淡淡地说："所谓天才，不过是比旁人更早明白——修仙，修的从来不是天赋。"`, `你在{location}创立了"新青云宗"，不分出身、不论灵根，有教无类。你的宗门成为了灵气复苏时代最耀眼的存在。`],
      ],
    },
    wanderer: {
      name: '散修野客',
      childhood: [
        [`你不知道自己的父母是谁。最早的记忆，是在{location}的街头乞讨。一个老乞丐教会了你如何在被妖兽追赶时活下来。`, `作为散修野客，你从小就学会了在{location}的废墟中寻找食物。你比任何人都清楚——修仙界不属于弱者。`],
        [`八岁那年，你在{location}的垃圾堆里捡到了半块破损的玉简。虽然无法读取完整内容，但你隐约感受到了其中的灵气波动。`, `{npc}发现了你手中的玉简，脸色大变："这是...上古散修'逍遥子'的遗物！小子，你从哪里得到的？"`],
      ],
      growth: [
        [`十五岁的你独自进入了{location}的一处废弃洞府。洞府主人早已陨落，但留下了一柄断剑和一本《逍遥剑诀》。`, `你在{location}遇到了一群散修强盗。他们想要你手中的玉简，你以断剑相搏，虽然浑身是伤，但最终保住了性命。`],
        [`二十岁那年，你在散修集市结识了{npc}。他告诉你一个秘密：散修联盟正在酝酿一场起义，要打破宗门对资源的垄断。`, `你开始在{location}专门帮助其他散修。你的名声逐渐传开，越来越多的散修愿意追随你。`],
      ],
      adult: [
        [`成年后的你已是散修中的领袖人物。但大宗门注意到了你——青云宗派人招安，许诺你内门长老之位；万法宗则威胁要剿灭散修联盟。`, `你在{location}的一次集会上发表了演讲："我们散修没有宗门的资源，没有长辈的庇护，但我们有自由！"台下爆发出雷鸣般的掌声。`],
        [`大宗门给了最后通牒：要么加入宗门，要么被剿灭。散修联盟内部也出现了分歧——有人主张投降，有人主张死战。`, ``, '领导起义', '谈判妥协', 0.5],
      ],
      special: [
        [`起义前夕，{npc}带来了一个惊人的消息：你是上古散修大能"逍遥子"的直系后裔！那块玉简中藏着逍遥子留下的完整传承。`, `你接受了逍遥子的传承。原来上古时期，散修曾与宗门平起平坐，是某次大战后宗门才垄断了资源。你发誓要恢复散修的荣光。`],
        [`你带领散修联盟攻下了{location}，建立了第一个"散修城池"。城内不分出身，有教无类。消息传出，天下震动。`, `百年后，你的散修城池成为了修仙界第五大势力。后人称你为"逍遥散仙"——不是因为你飞升了，而是因为你让无数人拥有了追求逍遥的权利。`],
      ],
    },
    demon_blood: {
      name: '妖族血脉',
      childhood: [
        [`你从小就知道自己与别人不同。你的瞳孔会在月圆之夜变成金色，你的牙齿比常人更尖锐。{location}的孩子们叫你"怪物"。`, `作为妖族血脉，你在{location}的一次玩耍中不小心露出了妖化特征——你的手臂上长出了鳞片。村民们惊恐地拿起了农具。`],
        [`你的母亲在你五岁时离开了，只留下一块玉佩。{npc}告诉你："你的母亲不是人类，她来自万妖森。"`, `你在{location}被一群猎人追赶，他们想要你的妖血炼丹。危急时刻，你体内的血脉第一次觉醒——你以超乎常人的速度逃入了深山。`],
      ],
      growth: [
        [`十五岁那年，你在{location}遇到了一位神秘的{npc}。他看出了你的血脉，说："龙族与虎族的混血...有趣。万兽帝君一直在找你这样的混血儿。"`, `你开始学习控制体内的妖血。{location}的瀑布下，你每日承受水流的冲击，直到能在妖化状态下保持理智。`],
        [`二十岁那年，万兽帝君派人送来请帖，邀请你参加"妖王祭典"。但你的养父——一位正道修士——恳求你不要与妖族往来。`, `你在{location}遇到了一个妖族少女。她告诉你："在人类世界，你是怪物；在妖族世界，你是天才。你的选择，将决定你的归属。"`],
      ],
      adult: [
        [`成年后的你面临着身份认同的危机。正道宗门发现了你的妖族血脉，要将你逐出人类城市；妖族则希望你完全化妖，为妖族效力。`, `你在{location}遇到了一个人类修士与妖族女子的混血家庭。他们告诉你："我们不是人，也不是妖。我们只是我们自己。"`],
        [`万兽帝君给了你一个选择：彻底化妖，成为妖族大将军；或者保持人形，但永远不得再入万妖森。`, ``, '彻底化妖', '保持人形', 0.5],
      ],
      special: [
        [`你发现了母亲的下落——她并未死去，而是被青云宗秘密囚禁了千年！青云宗想用她的龙族血脉炼制"化龙丹"。`, `你闯入了青云宗的禁地，与玄天剑尊对峙。他冷冷地说："你的母亲是人妖和平的牺牲品。要怪，就怪这个容不下混血的世界。"`],
        [`你救出了母亲，但自己也身负重伤。在生死边缘，你体内的龙族与虎族血脉完美融合——你成为了前所未有的"龙虎混元体"！`, `你成为了人妖两族的桥梁。在你的斡旋下，青云宗与万兽帝君签订了和平协议。虽然激进派仍然不满，但和平的曙光已经出现。`],
      ],
    },
    demon_heritage: {
      name: '魔道遗孤',
      childhood: [
        [`你最早的记忆是一片火海。{location}的夜晚，你躲在衣柜里，透过缝隙看到黑衣人屠杀你的全家。你紧紧咬住嘴唇，不敢出声。`, `作为魔道遗孤，你被一位正道修士收养。他告诉你："你的父母是好人，只是走错了路。"但你从他的眼神中看到了怜悯和...恐惧。`],
        [`八岁那年，你在养父的书房发现了一本被封印的古籍。翻开第一页，你看到了你父亲的名字——"血魔殿左护法"。`, `{npc}发现了你偷看古籍的事，叹了口气："既然天意如此，我便告诉你真相。你的父母是魔道中人，但他们从未杀过一个凡人。"`],
      ],
      growth: [
        [`十五岁那年，你在{location}遭遇危险时，体内的魔道血脉第一次觉醒——一股黑暗的力量从丹田涌出，你以超乎想象的速度反杀了敌人。`, `你开始偷偷修炼父母留下的功法。《血神经》的修炼需要吸收精血，但你发誓只杀该死之人。{npc}发现了你的秘密，选择了沉默。`],
        [`二十岁那年，血魔殿的人找到了你。他们称你为"少主"，说血魔老祖一直在等你回去继承你父亲的衣钵。`, `你在{location}遇到了一位青云宗弟子。他并不知道你的身份，却与你成为了朋友。你开始怀疑：正魔之分，真的那么绝对吗？`],
      ],
      adult: [
        [`成年后的你身份暴露。青云宗要将你处死，血魔殿要带你回去。你站在{location}的悬崖边，两面都是深渊。`, `你的正道朋友为你求情，却被宗门处罚。你看着他为你受苦，心中的怒火与愧疚交织——这就是正道的"正义"吗？`],
        [`血魔老祖亲自来见你。他说："你父亲是我最好的兄弟。加入我，我帮你摧毁这个虚伪的正义。"你的养父则说："别听他蛊惑，你有选择的权利。"`, ``, '加入魔道', '坚守正道', 0.5],
      ],
      special: [
        [`你调查发现，当年灭你满门的不是正道，而是血魔殿内部的人——他们嫉妒你父亲的地位！血魔老祖知道真相，却选择了包庇凶手。`, `你独自杀入了血魔殿，将当年参与灭门的凶手一一斩杀。血魔老祖没有阻止你，只是叹息："你比你父亲更狠。"`],
        [`你没有加入任何一方。你在{location}建立了一个"中立庇护所"，收留正魔两道的流亡者。你说："正义和邪恶都是标签，我只问本心。"`, `后人称你为"魔道叛徒"、"正道异端"，但在那些被你救过的人心中，你是真正的英雄。你的庇护所成为了修仙界最神秘的存在。`],
      ],
    },
    reincarnated: {
      name: '转世仙人',
      childhood: [
        [`你从小就做同一个梦：一片金色的宫殿，一个声音在对你说"回来吧"。{location}的老人们说，你出生时有仙光护体，是仙人转世。`, `作为转世仙人，你从小就能说出一些连{npc}都听不懂的古老语言。三岁那年，你指着天空吟诵了一段古文。{npc}震惊地说："这是...上古仙语？这孩子到底是什么来历？"`],
        [`六岁那年，你在{location}玩耍时突然头痛欲裂。无数画面涌入脑海——你看到了一片战场，看到了一个与你面貌相同的人正在与天道对抗。`, `{npc}为你检查了神识，脸色凝重："你的识海中有封印...不，不是封印，是记忆壁垒。有人在阻止你记起前世。"`],
      ],
      growth: [
        [`十五岁那年，你在{location}遇到了一个黑衣人。他看到你的瞬间，跪地痛哭："主人...三千年了，我终于找到您了！"`, `你开始觉醒前世的能力。不需要学习，你就知道如何结丹、如何凝婴——这些都是你前世走过的路。但你也开始被因果缠身。`],
        [`二十岁那年，你的前世宿敌——一位仙界大能的传人——下凡来找你。他说："前世你偷走了我师父的仙器，这一世我要讨回来。"`, `{npc}告诉你一个秘密：天机阁一直在暗中保护转世仙人，因为每一个转世仙人都可能是打破"飞升封印"的关键。`],
      ],
      adult: [
        [`成年后的你已突破元婴期。但你也发现了一个可怕的真相：你的前世并非自然死亡，而是被仙界的某位大能暗杀！`, `你在{location}的梦境中与前世的自己对话。他说："不要追寻我的过去，活出你自己的人生。"但你已经无法回头。`],
        [`你可以选择：彻底觉醒前世记忆，获得仙人的力量，但会失去今生的自我；或者封印前世记忆，做一个普通的元婴修士。`, ``, '觉醒前世', '封印记忆', 0.45],
      ],
      special: [
        [`你选择了觉醒。记忆如潮水般涌来——你前世是仙界"逍遥仙君"，因为发现了仙界的阴谋而被暗杀。那个阴谋就是：阻止凡人飞升，独占仙界资源！`, `你体内的仙力完全觉醒。虽然你只有元婴期的修为，但你的神识已经达到了仙人的层次。你开始能看到凡界与仙界之间的"封印"。`],
        [`你以凡人之躯，向仙界宣战。虽然所有人都认为你疯了，但你心中只有一个信念：三千年前的仇，该报了。`, `你在{location}留下了最后的话："我不是在为自己报仇。我是在为所有被仙界欺骗的凡人讨一个公道。"然后，你化作一道金光，冲向了天际。`],
      ],
    },
    spirit_body: {
      name: '先天灵体',
      childhood: [
        [`你出生时，{location}方圆百里的灵气疯狂涌入你体内。接生婆吓得跪地叩拜："灵体天成...这是传说中的先天灵体！"`, `作为先天灵体，你不需要修炼就能自动吸收灵气。但你的肉身极其脆弱——一次普通的摔倒就可能骨折。{npc}说你是"琉璃做的天才"。`],
        [`五岁那年，你在{location}遭遇了一场暴风雨。雷电击中了你，但你非但没有受伤，反而将雷电之力吸入了体内！{npc}震惊地看着这一幕。`, `你的灵体开始与天地元素共鸣。你可以在{location}感受到地下灵脉的流动，听到花草树木的"声音"。`],
      ],
      growth: [
        [`十五岁那年，你的灵体与{location}的一条灵脉产生了共鸣。你的修为一日千里，但肉身却越来越虚弱——灵气太浓郁，你的肉体承受不住了。`, `{npc}为你诊断后叹息："先天灵体是上天的恩赐，也是诅咒。你的灵根足以修炼到化神，但你的肉身可能撑不到金丹。"`],
        [`你开始寻找强化肉身的方法。{location}的古籍中记载了一种"元素化身"之术——放弃肉身，将自身化为纯粹的元素之灵。`, `你在{location}遇到了一位器宗长老。他说："我有一个疯狂的想法——用通天灵宝为你的肉身重塑根基。但成功率不到一成。"`],
      ],
      adult: [
        [`成年后的你面临着生死抉择：你的肉身已经到达了极限，再不做出选择，你可能会在突破金丹时肉身崩溃。`, `你在{location}的一次修炼中，肉身真的崩溃了——但你的灵体却没有消散，而是漂浮在空中，化作了一团纯粹的灵气。`],
        [`你可以选择：彻底元素化，放弃肉身成为元素之灵（获得强大力量但失去人类身份）；或者冒险重塑肉身（可能成功也可能彻底陨落）。`, ``, '元素化', '重塑肉身', 0.4],
      ],
      special: [
        [`你选择了重塑肉身。器宗长老用通天灵宝为你重塑了根基——你的新肉身虽然不如天生灵体完美，但足够坚固。更重要的是，你保留了与元素的共鸣能力。`, `你成为了修仙界第一个"后天重塑的先天灵体"。你的经历为无数肉身有缺陷的修士带来了希望。`],
        [`你选择了元素化。放弃肉身的瞬间，你感受到了前所未有的自由——你成为了风，成为了雷，成为了天地间最纯粹的元素。`, `百年后，修仙界出现了一个传说：每当暴风雨来临，{location}就会出现一道人形闪电，那是你在守护着这片土地。`],
      ],
    },
    artifact_spirit: {
      name: '器灵转世',
      childhood: [
        [`你从小就对法宝有一种奇特的感应。在{location}的古董摊上，你随手拿起一块破铜烂铁，眼泪却不由自主地流了下来。`, `作为器灵转世，你经常做一些奇怪的梦：你梦见自己变成了一柄剑，被一位白衣仙人握在手中，斩妖除魔。`, `{npc}发现了你的异常。他仔细检查后，面色凝重："你的魂魄中有一道器灵印记...你不是普通人类，你是上古法宝转世为人！"`],
      ],
      growth: [
        [`十五岁那年，你终于确定了自己的"本体"——一柄名为"斩仙"的上古神剑，据说失落在了{location}的葬仙谷中。`, `你踏上了寻找本体的旅途。在{location}，你遇到了器宗的人。他们也想找到斩仙剑，但目的是将其"回收"炼化。`],
        [`二十岁那年，你终于在{location}找到了斩仙剑的线索——但它并不在葬仙谷，而是在青云宗的禁地剑冢之中！`, `{npc}告诉你一个秘密：斩仙剑的器灵并非只有一个。千年前，剑身被毁，器灵分裂成了三份。你，只是其中一份。`],
      ],
      adult: [
        [`成年后的你闯入了青云宗剑冢。当你触碰到斩仙剑的碎片时，无数记忆涌入脑海——你看到了自己被毁的那一战，看到了主人临终前的托付。`, `另外两份器灵转世也找到了你。一个是你的"兄弟"，一个是你的"姐妹"。你们三人合体，就能恢复斩仙剑的完整力量。`],
        [`你可以选择：与另外两份器灵合体，恢复斩仙剑（获得无上力量但失去独立人格）；或者保持独立，放弃成为神器的机会。`, ``, '合体恢复', '保持独立', 0.5],
      ],
      special: [
        [`你选择了保持独立。另外两份器灵尊重了你的选择，但将各自的"剑意"赠予了你。你虽不是斩仙剑，却拥有了斩仙的剑意。`, `你以人类之身，修炼出了堪比斩仙剑的剑意。青云宗的玄天剑尊与你切磋后，感叹："此子剑意，不在斩仙之下。"`],
        [`百年后，你开创了"器灵剑道"——不需要法宝，以身为剑，以意御气。你的弟子遍布天下，都是曾经的"器灵转世"或"法宝残魂"。`, `你在{location}立下了一块碑，上面写着："器灵非器，人亦非器。唯有剑意，永存天地。"`],
      ],
    },
    buddhist: {
      name: '佛门俗家',
      childhood: [
        [`你自幼在{location}的金刚寺长大。每天清晨，你跟着师父们诵经、打坐、挑水。你问师父："为什么要修行？"师父说："为了不被心中的魔吞噬。"`, `作为佛门俗家弟子，你天生具有"佛心通明"的特质。{npc}说你的慧根极深，若入佛门，必成一代高僧。但你心中始终有一丝对红尘的向往。`],
        [`八岁那年，你在{location}救了一只受伤的小狐狸。师父让你放生，但你偷偷养了起来。小狐狸临走前，用人类的语言对你说："谢谢。"`, `{npc}发现了你的秘密，却没有责罚你。他说："众生平等，妖亦有情。你的慈悲心，比你的慧根更珍贵。"`],
      ],
      growth: [
        [`十五岁那年，你被派下山历练。{location}的红尘俗世让你大开眼界——酒肉、美色、权力，这些都是寺中没有的东西。`, `你在{location}遇到了一位魔道女子。她并不邪恶，只是因为修炼了魔道功法而被正道追杀。你们成为了朋友。`],
        [`二十岁那年的一个夜晚，你做了一个梦：梦中你站在佛与魔的分界线上，左边是金光万丈的佛祖，右边是妩媚动人的魔女。她们同时向你伸出手。`, `{npc}发现了你的心魔。他说："佛魔一念，不是要你选择佛、排斥魔。而是要你在心中找到那个'一'——那个让佛魔共存的本心。"`],
      ],
      adult: [
        [`成年后的你面临着最艰难的抉择：金刚寺住持希望你能正式剃度，成为佛门正统；而那位魔道女子则希望你能跟她走，过自由自在的生活。`, `你在{location}遇到了一个被魔气侵蚀的村庄。正道修士主张烧毁村庄以绝后患，但你看到了村民眼中的恐惧——他们并非魔道，只是受害者。`],
        [`你可以选择：立地成佛，剃度出家，获得无上佛法但斩断红尘；或者还俗入世，以俗家之身行佛之事。`, ``, '剃度出家', '还俗入世', 0.55],
      ],
      special: [
        [`你选择了还俗入世。你创立了"行者宗"——不建寺庙、不授戒律，行走天下，哪里有苦难就去哪里。`, `你的"行者宗"越来越壮大。金刚寺的无相佛亲自来见你，说："我年轻时也想过走你的路，但我没有勇气。你有。"`],
        [`你在一处{location}发现了上古佛修的遗迹。遗迹中有一行字："佛不在西天，佛在众生心中。"你泪如雨下——这正是你一直相信的。`, `后人称你为"入世佛"。你的雕像没有供奉在寺庙里，而是立在每一座城市的中心。百姓们说："他不是什么高高在上的佛，他是我们的邻居。"`],
      ],
    },
    ghost_cultivator: {
      name: '鬼修传人',
      childhood: [
        [`你从小就看得见"别人看不见的东西"。在{location}的深夜，你常常看到透明的人影在街头游荡。你告诉父母，他们却以为你在说胡话。`, `作为鬼修传人，你五岁那年生了一场大病，高烧不退。危急时刻，一位黑袍人出现在你的床边，说："你的阳寿已尽，但你的阴命未尽。跟我走吧。"`],
        [`你被黑袍人带到了{location}的幽冥渊边缘。他说："从这里开始，你将学会如何与死者对话，如何在阴阳两界之间行走。"`, `{npc}是你的师父，一位活了两百年的鬼修。他告诉你："鬼修不是邪道。我们守护的是那些无法安息的灵魂。"`],
      ],
      growth: [
        [`十五岁那年，你第一次独立完成"引魂"——将一位战死修士的魂魄从战场带回幽冥渊，让他得以安息。{npc}说："你做得很好。"`, `你在{location}遇到了一个不愿离去的鬼魂。她是一个母亲，死于难产，放心不下自己的孩子。你答应帮她看一眼孩子。`],
        [`你偷偷潜入人间，找到了那个孩子。他已经被好心人收养，生活得很好。你将这个消息告诉了那位母亲的鬼魂，她终于释然，化作点点荧光消散。`, `这件事让你明白了鬼修的意义。{npc}说："我们不是死神的使者，我们是遗憾的终结者。"`],
      ],
      adult: [
        [`成年后的你已成为鬼修中的翘楚。但你也发现了一个秘密：幽冥渊的阴阳通道正在扩大，如果不阻止，阴界的鬼物将入侵凡界！`, `你在{location}遇到了万鬼宗的宗主鬼帝。他告诉你："阴阳通道的扩大不是意外，是有人在背后操控。那个人，想打开两界之门。"`],
        [`你可以选择：牺牲自己，用魂魄封印阴阳通道（拯救凡界但永世不得超生）；或者寻找其他方法，但风险是通道可能在找到方法前彻底打开。`, ``, '牺牲封印', '寻找他法', 0.45],
      ],
      special: [
        [`你选择了寻找他法。在调查过程中，你震惊地发现——幕后黑手竟然是你的师父！他打开阴阳通道，是为了让死去的妻子复活。`, `你面对师父，泪如雨下。他说："我知道这是错的。但三百年了，我还是放不下她。"你理解他的痛苦，但你不能让他毁灭世界。`],
        [`最终，你找到了第三条路：不需要打开阴阳通道，只需要让师娘的一缕残魂短暂显形，与师父做最后的告别。`, `师父释然了，他与你一起封印了阴阳通道。临终前，他说："鬼修守护死者，但更重要的是...守护生者的心。"你接过了他的衣钵，成为了新的鬼修领袖。`],
      ],
    },
  };

  // 遍历所有身份，生成事件模板
  Object.entries(identityStories).forEach(([id, story]) => {
    const chainPrefix = `chain_${id}`;

    // 童年专属 2个
    story.childhood.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 3 + i * 4, 8 + i * 4, 0.88, texts, {
        identityExclusive: id,
        effects: rand([{ special: 5 }, { strength: 4, luck: 2 }, { intelligence: 5 }]),
        flags: [`${chainPrefix}_childhood_${i}`],
      }));
    });

    // 少年专属 2个 — 依赖童年链式标记
    story.growth.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 14 + i * 5, 20 + i * 5, 0.82, texts, {
        identityExclusive: id,
        effects: rand([{ strength: 6 }, { intelligence: 6 }, { special: 6 }, { charisma: 4, luck: 3 }]),
        requiredFlags: [`${chainPrefix}_childhood_0`],
        flags: [`${chainPrefix}_growth_${i}`],
        chainPriority: 1,
      }));
    });

    // 成年专属 2个 — 依赖少年链式标记
    story.adult.forEach((texts, i) => {
      const isChoiceStage = texts.length >= 5 && texts[1] === '';
      const opts = isChoiceStage ? {
        choices: [
          choice(texts[2], texts[4], `你选择了${texts[2]}，从此踏上了一条不归路。`, `你选择了${texts[2]}，但命运弄人，一切并未如你所愿。`, rand([{ strength: 10, special: 5 }, { intelligence: 10, luck: 5 }, { charisma: 10, health: 5 }]), { health: -10, luck: -5 }, [`branch_identity_${id}_path`], [`branch_identity_${id}_path_fail`]),
          choice(texts[3], 0.75, `你选择了${texts[3]}，虽然道路不同，但终点未必更差。`, `你选择了${texts[3]}，却发现这条路比你想象的更加艰难。`, rand([{ luck: 8, charisma: 5 }, { intelligence: 8, special: 3 }]), { strength: -3 }, [`branch_identity_${id}_new`], [`branch_identity_${id}_new_fail`]),
        ]
      } : {};
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 26 + i * 10, 35 + i * 10, isChoiceStage ? 0.90 : 0.78, isChoiceStage ? [texts[0]] : texts, {
        identityExclusive: id,
        effects: isChoiceStage ? {} : rand([{ strength: 8 }, { intelligence: 8 }, { special: 8 }]),
        requiredFlags: [`${chainPrefix}_growth_0`],
        flags: [`${chainPrefix}_adult_${i}`],
        chainPriority: 2,
        ...opts,
      }));
    });

    // 特殊剧情 2个 — 依赖成年链式标记
    story.special.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 10 + i * 20, 30 + i * 30, 0.75, texts, {
        identityExclusive: id,
        effects: rand([{ special: 10, health: -5 }, { strength: 8, luck: 5 }, { intelligence: 10 }]),
        requiredFlags: [`${chainPrefix}_adult_0`],
        flags: [`${chainPrefix}_special_${i}`],
        chainPriority: 3,
      }));
    });
  });

  return T;
}

// ============================================================
// 身份专属事件生成器
// ============================================================

function generateMagicIdentityEvents(w) {
  const T = [];
  const { prefix } = w;

  const identityStories = {
    apprentice: {
      name: '平民学徒',
      childhood: [
        [`你生在绿谷镇一个普通铁匠家庭。魔法觉醒检测那天，{npc}摇头叹息："魔法绝缘体...不，等等，有一丝微弱的火元素反应。虽然近乎于无，但确实存在。"`, `作为平民学徒，你在{location}的魔法觉醒仪式上手足无措——其他孩子都让检测水晶发光，而你只让水晶微微发热。{npc}说："勉强够格，但别抱太大期望。"`],
        [`你不甘心。每晚偷偷在{location}的阁楼里研读借来的《基础咒语入门》，一遍又一遍地练习最基础的火球术，直到指尖磨出茧子。`, `你在{location}的旧书摊上发现了一本破损的《奥术数学导论》。书中说："魔法不只是天赋，更是一门科学。公式可以弥补天赋的不足。"你如获至宝。`],
      ],
      growth: [
        [`你十四岁那年，凭借扎实的理论基础考入了烈焰学院的自费班——那是给有钱贵族准备的班级，你是唯一一个靠奖学金入学的平民。`, `别的贵族学生用高级魔杖施法，你用一根捡来的枯树枝。但你的咒语精准度却超过了他们——因为你懂得计算魔力的流动轨迹。`],
        [`二十岁那年，你在{location}的学院考试中提出了一个大胆的理论："元素魔法可以用数学公式精确计算，不需要依赖天赋。"教授们哄堂大笑。`, `{npc}——一位被学院边缘化的老教授——私下找到了你："孩子，你的理论...我在三十年前就提出过。他们笑了我三十年。你愿意和我一起证明它吗？"`],
      ],
      adult: [
        [`成年后，你的"奥术数学"理论开始在小范围内传播。一些被判定为魔法绝缘的平民找到了你，希望学习这种不需要天赋的施法方式。`, `你在{location}建立了一间小小的"公式魔法实验室"，专门招收被学院拒绝的学生。烈焰学院的院长亲自来警告你："你在颠覆魔法的根基。"`],
        [`你面临抉择：学院愿意收你为正式教授，但要求你放弃奥术数学研究、回归正统元素魔法；或者继续你的研究，但会被整个魔法界排斥。`, ``, '坚持奥术数学', '回归正统魔法', 0.55],
      ],
      special: [
        [`你成功证明了"公式魔法"的可行性！一位魔法绝缘的平民用你的方法施展出了人生第一个火球术。那一刻，整个魔法界的根基都动摇了。`, `真理之塔的使者找到了你："你的理论...与塔顶层的'真理之书'上的记载一模一样。千年前，有一位贤者也走过这条路。"`],
        [`你成为了"公式魔法"的创始人。后人称你为"无天赋者的救星"。你的理论让无数被判定为魔法绝缘的人拥有了施法的能力——魔法，终于不再是贵族的专利。`, `你在{location}的墓碑上刻着："魔法不属于天赋者，魔法属于所有渴望真理的人。"`],
      ],
    },
    noble_mage: {
      name: '贵族法师',
      childhood: [
        [`你出生在银月城最古老的魔法贵族家庭——冯·雷文克劳家族。你的 first 记忆，就是{npc}教你念第一个咒语："火，听从我的召唤。"`, `作为贵族法师，你三岁就让检测水晶爆发出耀眼的七色光芒。{npc}赞叹："纯血贵族的魔力...这才是魔法的正统传承。"`],
        [`你的童年充满了礼仪课、魔法课和政治课。{location}的家族城堡中，你每天学习如何用最优雅的姿势施法，如何在宴会中暗中用魔法试探对手。`, `六岁那年，你在{location}的家族聚会上不小心烧毁了大厅的窗帘。父亲没有责罚你，反而骄傲地说："这才是雷文克劳家的火焰。"`],
      ],
      growth: [
        [`十四岁，你以全系第一的成绩考入了家族指定的烈焰学院贵族班。但你也发现，班级里的学生不是按实力分座，而是按家族势力排名——你虽然是第一，却坐在第三排。`, `作为贵族，你不可避免地被卷入了家族政治。{location}的一次舞会上，父亲暗示你若支持叔叔继位家主，你将获得家族传承魔导器。`],
        [`十八岁那年，你在{location}的学院图书馆发现了一本禁书——上面记载了你的家族黑暗历史：冯·雷文克劳家族的第一位先祖，其实是一个靠吞噬他人魔力发家的邪法师。`, `{npc}——家族的老管家——悄悄告诉你："每个贵族家族都有黑历史。关键不是过去做了什么，而是你现在选择成为什么样的人。"`],
      ],
      adult: [
        [`成年后，你已是家族年轻一代中最强的法师。但家族内部的权力斗争愈演愈烈——叔叔想要夺取家主之位，而父亲希望你能用魔法"处理"掉他。`, `你在{location}意外发现了一封密信：你的叔叔其实一直在暗中保护被家族排斥的平民法师。他并非敌人，而是家族中唯一有良知的人。`],
        [`你面临抉择：支持父亲，用魔法消灭叔叔，继承家主之位；或者支持叔叔，揭发家族的黑暗历史，但会失去一切。`, ``, '支持父亲', '支持叔叔', 0.50],
      ],
      special: [
        [`你选择了揭发家族。消息传出后，冯·雷文克劳家族一夜之间从魔法界除名。但你并不后悔——因为你 freeing 了那些被家族秘密囚禁的"魔力供体"。`, `你被家族驱逐，但也因此获得了自由。你开始游历大陆，用自己的魔法帮助那些曾经被你家族压迫的人。{npc}说："你终于成为了真正的贵族——不是血统的高贵，而是灵魂的高贵。"`],
        [`百年后，新的冯·雷文克劳家族在你的努力下重建。但这次，家族的大门向所有人敞开——不论血统，只看才华。后人称你为"改革者"。`, `你在{location}的雕像下刻着："贵族不是出生的，是选择的。"`],
      ],
    },
    druid: {
      name: '荒野德鲁伊',
      childhood: [
        [`你从小就在{location}的森林中长大。你的父母是普通的猎人，但你却能听懂风的声音、感受树的情感。{npc}说你是"被自然选中的人"。`, `作为德鲁伊，你五岁那年不小心让{location}的一片枯萎草地重新焕发生机。德鲁伊联盟的使者找到了你的父母："这个孩子属于森林。"`],
        [`你被带到了精灵森林，接受德鲁伊的训练。{location}的古树下，你学会了如何与元素精灵沟通，如何用魔力治愈受伤的动植物。`, `{npc}——一位千年树人——告诉你："德鲁伊不是法师，我们是自然的守护者。我们的力量不是来自学习，而是来自倾听。"`],
      ],
      growth: [
        [`十五岁那年，你在{location}遇到了一群砍伐森林的人类商人。你想阻止他们，但德鲁伊长老说："人类也是自然的一部分。我们不能阻止他们生存，只能引导他们尊重。"`, `你开始在人类世界和精灵森林之间往返，试图找到双方共存的方法。但两边都不信任你——人类认为你是精灵的间谍，精灵认为你是人类的叛徒。`],
        [`二十岁那年，{location}发生了一场大火。你拼尽全力召唤雨水，但火势太大。就在你快要力竭时，周围的动物——狼、鹿、鸟——都来到了你身边，将它们的自然之力借给了你。`, `{npc}告诉你："你终于明白了德鲁伊的真正力量——不是控制自然，而是成为自然的一部分。"`],
      ],
      adult: [
        [`成年后，你面临着身份认同的危机。德鲁伊联盟希望你彻底放弃人类身份，成为纯粹的"自然之子"；而你的父母则希望你能回家，过普通人的生活。`, `你在{location}遇到了一个人类农夫和一个精灵女子的混血家庭。他们告诉你："我们不是人类，也不是精灵。我们只是我们自己。"`],
        [`你可以选择：彻底回归自然，放弃人类身份，获得强大的自然之力但失去人类社会的一切；或者保持人形，在人类和精灵之间做桥梁。`, ``, '回归自然', '保持人形', 0.50],
      ],
      special: [
        [`你选择了做桥梁。你开始穿梭于人类城市和精灵森林之间，调解双方的冲突。虽然两边都有激进派反对你，但和平的曙光已经出现。`, `你成为了德鲁伊联盟中第一个"城市德鲁伊"——你的道场不在森林中，而在城市的屋顶花园里。你说："自然不在远方，自然就在我们身边。"`],
        [`百年后，人类城市和精灵森林之间出现了一条"绿色走廊"——那是你种下的。后人称你为"和平之种"。`, `你在{location}的墓碑上没有刻名字，只刻了一片树叶——因为你说："名字会消失，但自然永存。"`],
      ],
    },
    assassin: {
      name: '暗影刺客',
      childhood: [
        [`你不知道自己的父母是谁。最早的记忆，是在{location}的街头偷面包。一个黑衣人教会了你如何在不被发现的情况下打开任何锁。`, `作为暗影刺客的苗子，你八岁那年被带到了暗影领域的边缘。暗影导师说："从今天起，你将学会如何在黑暗中行走，如何成为死亡的影子。"`],
        [`你的训练残酷而高效。{location}的暗影训练营中，你学习如何隐藏气息、如何一击毙命、如何用暗影魔法麻痹对手。`, `{npc}——你的第一任导师——在你十岁那年死在了任务中。临终前，他说："记住，暗影不是邪恶，暗影只是另一种存在方式。"`],
      ],
      growth: [
        [`十五岁那年，你完成了第一个暗杀任务——目标是{location}的一个腐败贵族。当你将匕首刺入他心脏时，你发现他正在用活人做魔法实验。`, `你开始质疑自己的道路。如果暗影议会只杀"该死之人"，那谁来决定谁该死？你在{location}的一次任务中故意放走了目标——一个被冤枉的平民法师。`],
        [`二十岁那年，暗影领主亲自召见了你。他说："你有天赋，但你的心不够冷。我给你最后一个任务——杀死大法师梅林。如果你拒绝，你就是暗影议会的敌人。"`, `你在{location}跟踪了梅林三天，却发现他一直在暗中保护被学院迫害的平民法师。你的匕首，终究没有挥出去。`],
      ],
      adult: [
        [`成年后，你成为了暗影议会的叛徒。暗影之手派出了无数刺客追杀你，但你对他们的手法太熟悉了——每一次，你都能提前一步逃脱。`, `你在{location}遇到了梅林。他没有责怪你曾经的任务，反而说："每个暗影中的人，都渴望光明。你也不例外。"他邀请你加入他的"地下网络"。`],
        [`你可以选择：接受梅林的邀请，成为"光明的暗影"——用刺客的技能保护弱者；或者独自离开，过隐姓埋名的生活。`, ``, '加入梅林', '独自离开', 0.55],
      ],
      special: [
        [`你接受了梅林的邀请，成为了"影之守护者"——一个在黑暗中守护光明的刺客。你的存在只有少数人知道，但你的每一次行动都拯救了无数生命。`, `你开创了一种新的暗影魔法——"守护之影"。这种魔法不是用于暗杀，而是用于保护。暗影议会试图封杀这种魔法，但已经太晚了——它已经在民间悄悄传播。`],
        [`百年后，你的故事成为了传说。没有人知道"影之守护者"的真实身份，但每当弱者遭受不公时，他们都会默默祈祷："愿影之守护者保佑。"`, `你在{location}的暗影中留下了最后的话："我不是光明的敌人，我是光明的影子。没有影子，光明就不完整。"`],
      ],
    },
    paladin: {
      name: '圣光骑士',
      childhood: [
        [`你自幼在{location}的光明神殿长大。每天清晨，你跟着圣骑士们祈祷、训练、学习圣光魔法。你的导师说："圣光不是力量，是信念。"`, `作为圣光骑士的预备役，你天生对光元素有极高的亲和力。{npc}说你的圣光"纯净得不像这个世界的孩子"——这句话让你困惑了很多年。`],
        [`八岁那年，你在{location}救了一个被暗影生物袭击的村庄。当你用圣光治愈了最后一个伤者时，你感受到了前所未有的满足——这就是圣光的真谛。`, `{npc}——神殿的大主教——告诉你："圣光骑士的职责不是消灭黑暗，而是保护光明。记住这个区别。"`],
      ],
      growth: [
        [`十五岁那年，你被派往{location}调查一起"暗影侵蚀"事件。但你到达现场后发现，所谓的"暗影生物"其实是一群被贵族驱逐的难民，他们只是因为长期生活在阴暗处才被误认。`, `你开始质疑神殿的教条。{location}的一次审判中，你公开反对处决一个被指控为"暗影间谍"的无辜者。结果，你自己也被列入了怀疑名单。`],
        [`二十岁那年，你做了一个梦：梦中你站在光与影的分界线上，左边是万丈光芒的神明，右边是被光芒灼伤眼睛的平民。他们同时向你伸出手。`, `{npc}发现了你的心魔。他说："圣光不是越亮越好。太亮的光会灼伤眼睛，太绝对的正义会变成暴政。找到那个平衡点，孩子。"`],
      ],
      adult: [
        [`成年后，你面临着最艰难的抉择：光明神殿命令你带领骑士团剿灭一个"暗影据点"，但你调查发现那个据点其实是一群被社会抛弃的孤儿在自保。`, `你在{location}遇到了暗影领主。他没有攻击你，只是说："你知道什么最讽刺吗？你们神殿的'正义'，比我这个暗影生物杀的人还多。"`],
        [`你可以选择：服从神殿命令，剿灭据点，获得无上荣耀但违背良心；或者违抗命令，保护弱者，但会被神殿定为异端。`, ``, '服从神殿', '违抗命令', 0.50],
      ],
      special: [
        [`你选择了违抗命令。你带领那些被抛弃的孤儿建立了"中立庇护所"，不属光明，不属暗影，只为保护无辜。`, `你的行为感动了无数人。光明神殿的新任教皇亲自来见你，说："我年轻时也想过走你的路，但我没有勇气。你有。"他悄悄为你提供了庇护。`],
        [`百年后，"中立庇护所"遍布大陆。你被称为"灰骑士"——不是光明的白，也不是暗影的黑，而是介于两者之间的灰。你说："真正的正义，不是消灭黑暗，而是让黑暗中的孩子也能看到光。"`, `你在{location}的雕像不是手持圣剑，而是抱着一个孩子——因为你说："剑只能杀人，但只有爱能救人。"`],
      ],
    },
    dragon_blood: {
      name: '龙血混血',
      childhood: [
        [`你从小就知道自己与别人不同。你的体温比常人高，愤怒时眼睛会变成竖瞳。{location}的孩子们叫你"小蜥蜴"。`, `作为龙血混血，你在{location}的一次玩耍中不小心喷出了一小口火焰——虽然微弱，但足以点燃干草堆。村民们惊恐地拿起了水桶。`],
        [`你的母亲在你五岁时离开了，只留下一块龙鳞。{npc}告诉你："你的母亲不是人类，她来自龙族山脉。"`, `你在{location}被一群"龙血猎人"追赶，他们想要你的龙血炼制药剂。危急时刻，你体内的龙血第一次觉醒——你的皮肤长出了龙鳞，力量暴增。`],
      ],
      growth: [
        [`十五岁那年，你在{location}遇到了一位神秘的{npc}。他看出了你的血脉，说："火龙与人类的混血...有趣。古龙长老一直在找你这样的混血儿。"`, `你开始学习控制体内的龙血。{location}的火山口，你每日承受高温的炙烤，直到能在龙化状态下保持理智。`],
        [`二十岁那年，古龙长老派人送来请帖，邀请你参加"龙族试炼"。但你的养父——一位人类铁匠——恳求你不要与龙族往来。`, `你在{location}遇到了一个龙族少年。他告诉你："在人类世界，你是怪物；在龙族世界，你是天才。你的选择，将决定你的归属。"`],
      ],
      adult: [
        [`成年后，你面临着身份认同的危机。烈焰学院发现了你的龙族血脉，要将你驱逐；龙族则希望你完全化龙，为龙族效力。`, `你在{location}遇到了一个人类战士与龙族女子的混血家庭。他们告诉你："我们不是人，也不是龙。我们只是我们自己。"`],
        [`你可以选择：彻底化龙，成为龙族战士；或者保持人形，但永远不得再入龙族山脉。`, ``, '彻底化龙', '保持人形', 0.50],
      ],
      special: [
        [`你发现了母亲的下落——她并未死去，而是被烈焰学院秘密囚禁了！学院想用她的龙血炼制"龙火药剂"。`, `你闯入了烈焰学院的禁地，与院长对峙。他冷冷地说："你的母亲是人龙和平的牺牲品。要怪，就怪这个容不下混血的世界。"`],
        [`你救出了母亲，但自己也身负重伤。在生死边缘，你体内的火龙血脉与人类魔力完美融合——你成为了前所未有的"龙魔法师"！`, `你成为了人龙两族的桥梁。在你的斡旋下，烈焰学院与古龙长老签订了和平协议。虽然激进派仍然不满，但和平的曙光已经出现。`],
      ],
    },
    necromancer: {
      name: '亡灵法师',
      childhood: [
        [`你从小就看得见"别人看不见的东西"。在{location}的深夜，你常常看到透明的灵魂在街头游荡。你告诉父母，他们却以为你在说胡话。`, `作为亡灵法师的苗子，你五岁那年生了一场大病，高烧不退。危急时刻，一位黑袍人出现在你的床边，说："你的生命力很弱，但你的灵魂力很强。跟我走吧。"`],
        [`你被黑袍人带到了{location}的亡者之地边缘。他说："从这里开始，你将学会如何与死者对话，如何在生死之间行走。"`, `{npc}是你的师父，一位活了两百年的亡灵法师。他告诉你："亡灵魔法不是邪道。我们守护的是那些无法安息的灵魂。"`],
      ],
      growth: [
        [`十五岁那年，你第一次独立完成"引魂"——将一位战死骑士的灵魂从战场带回亡者之地，让他得以安息。{npc}说："你做得很好。"`, `你在{location}遇到了一个不愿离去的灵魂。她是一个母亲，死于难产，放心不下自己的孩子。你答应帮她看一眼孩子。`],
        [`你偷偷潜入人间，找到了那个孩子。他已经被好心人收养，生活得很好。你将这个消息告诉了那位母亲的灵魂，她终于释然，化作点点荧光消散。`, `这件事让你明白了亡灵魔法的意义。{npc}说："我们不是死神的使者，我们是遗憾的终结者。"`],
      ],
      adult: [
        [`成年后，你已成为亡灵法师中的翘楚。但你也发现了一个秘密：亡者之地的生死通道正在扩大，如果不阻止，亡灵将入侵物质界！`, `你在{location}遇到了巫妖王。他告诉你："生死通道的扩大不是意外，是有人在背后操控。那个人，想打开生死之门。"`],
        [`你可以选择：牺牲自己，用灵魂封印生死通道（拯救物质界但永世不得超生）；或者寻找其他方法，但风险是通道可能在找到方法前彻底打开。`, ``, '牺牲封印', '寻找他法', 0.45],
      ],
      special: [
        [`你选择了寻找他法。在调查过程中，你震惊地发现——幕后黑手竟然是你的师父！他打开生死通道，是为了让死去的妻子复活。`, `你面对师父，泪如雨下。他说："我知道这是错的。但三百年了，我还是放不下她。"你理解他的痛苦，但你不能让他毁灭世界。`],
        [`最终，你找到了第三条路：不需要打开生死通道，只需要让师娘的一缕残魂短暂显形，与师父做最后的告别。`, `师父释然了，他与你一起封印了生死通道。临终前，他说："亡灵法师守护死者，但更重要的是...守护生者的心。"你接过了他的衣钵，成为了新的亡灵领袖。`],
      ],
    },
    summoner: {
      name: '元素召唤师',
      childhood: [
        [`你从小就对元素生物有一种奇特的感应。在{location}的河边，你随手捧起一捧水，水中竟出现了一个小小的水精灵——它朝你眨了眨眼，然后跳回了河里。`, `作为元素召唤师，你经常做一些奇怪的梦：你梦见自己站在元素位面的入口，无数元素生物在向你招手。`, `{npc}发现了你的异常。他仔细检查后，面色凝重："你的灵魂中有一道元素印记...你不是普通人类，你是元素位面与物质界的'桥梁'。"`],
      ],
      growth: [
        [`十五岁那年，你终于成功召唤出了第一个元素生物——一只小火灵。它围着你飞来飞去，像只小狗一样忠诚。{npc}说："元素生物不会背叛召唤师...除非召唤师背叛了元素。"`, `你开始学习更高级的召唤术。{location}的召唤阵中，你尝试召唤一只风元素鹰，但召唤出了意外——一只雷元素兽！它没有被契约束缚，朝你扑来。`],
        [`二十岁那年，你发现了一个惊人的秘密：你召唤出的元素生物，其实是元素位面某个存在的"眼睛"——它在通过元素生物观察物质界。`, `{npc}告诉你一个秘密：千年前，元素位面与物质界之间有一场大战。最后双方签订了契约，互不侵犯。但你这种"桥梁"体质，可以打破这个契约。`],
      ],
      adult: [
        [`成年后，你成为了最强大的元素召唤师之一。但你也面临着一个道德困境：元素位面的存在要求你打开更多通道，让元素生物可以自由来往物质界——但这可能会引发第二次元素战争。`, `你在{location}的召唤中，意外召唤出了一个元素位面的"王子"。它没有攻击你，而是说："你是桥梁，也是锁。我们等了千年，等的就是你。"`],
        [`你可以选择：打开通道，让元素生物自由来往（获得强大盟友但可能引发战争）；或者封印自己的体质，永远不再召唤（安全但失去力量）。`, ``, '打开通道', '封印体质', 0.50],
      ],
      special: [
        [`你选择了谈判而非简单的打开或封印。你与元素位面的存在达成了一个协议：有限度的通道，受控的交流，双方互相学习。`, `你成为了元素位面与物质界的"外交官"。在你的努力下，人类法师开始与元素生物合作研究魔法，魔法文明进入了一个全新的时代。`],
        [`百年后，你在{location}建立了一座"元素桥梁塔"——那是物质界与元素位面之间的永久和平通道。后人称你为"元素之友"。`, `你在临终前，最后一次召唤了那只小火灵。它依然围着你飞来飞去，像千年前一样忠诚。你说："谢谢你陪我走了这么远。"然后，你化作了一道元素之光，融入了元素位面。`],
      ],
    },
    alchemist: {
      name: '炼金术士',
      childhood: [
        [`你从小就喜欢"混合东西"。在{location}的家中，你把母亲的香水、父亲的酒、厨房的调料混在一起——结果制造出了一团奇怪的烟雾，把全家人都熏出了屋子。`, `作为炼金术士的苗子，你对"变化"有着天生的敏感。{npc}说你可以"听见物质的声音"——铜告诉你它想成为青铜，铁告诉你它想成为钢。`],
        [`八岁那年，你在{location}的废弃实验室里发现了一本《基础炼金术》。第一页写着："炼金术不是魔法，是科学。但最顶尖的炼金术，可以触及神的领域。"`, `你第一次成功的炼金实验是在{location}——你把一块普通的石头变成了...一块稍微亮一点的石头。虽然微不足道，但你兴奋得整晚没睡。`],
      ],
      growth: [
        [`十五岁那年，你炼制出了人生第一瓶真正的魔药——"初级治疗药水"。虽然效果只有正规药水的三分之一，但它是你自己研究出来的配方！`, `别的学生研究魔法咒语，你研究化学反应。{location}的实验室里，你的桌子永远堆满了瓶瓶罐罐。其他学生笑你是"锅炉工"，但你不在乎。`],
        [`二十岁那年，你在{location}的实验中意外炼制出了一种"元素稳定剂"——它可以让不稳定的魔法材料变得安全。这个发现引起了各大势力的关注。`, `{npc}——一位被学院边缘化的老炼金术士——警告你："你的发现会打破现有的魔法经济体系。那些靠贩卖昂贵稳定材料赚钱的人，不会放过你。"`],
      ],
      adult: [
        [`成年后，你的"平民炼金术"理论开始传播。你用廉价的材料替代昂贵的魔法材料，让普通人也能使用基础魔药。这触犯了炼金术士公会的利益。`, `你在{location}建立了一间"平民药剂铺"，以成本价出售基础魔药。炼金术士公会的杀手来警告你："你在断所有人的财路。"`],
        [`你面临抉择：加入炼金术士公会，成为正式成员，但要求你放弃平民炼金术、只服务贵族；或者继续坚持，但会被整个炼金界追杀。`, ``, '坚持平民炼金', '加入公会', 0.55],
      ],
      special: [
        [`你成功证明了"平民炼金术"的可行性！一位魔法绝缘的农夫用你的药剂治好了生病的女儿。那一刻，你知道自己的选择是对的。`, `真理之塔的使者找到了你："你的发现...与塔顶层的'真理之书'上的记载吻合。千年前，贤者们也用这种方法普及魔法。"`],
        [`你成为了"平民炼金术"的创始人。后人称你为"万能药之母/父"。你的理论让魔法药剂不再是贵族的专利——每个人都有权利获得治疗。`, `你在{location}的墓碑上刻着："炼金术不属于有钱人，炼金术属于所有需要它的人。"`],
      ],
    },
    battle_mage: {
      name: '战斗法师',
      childhood: [
        [`你出生在{location}的一个军人家庭。你的父亲是一名骑士，母亲是一名法师。从小，你就在剑与魔法之间长大。`, `作为战斗法师的苗子，你七岁那年第一次同时握剑和法杖。父亲说："选一样。"你说："我两样都要。"母亲笑了："那你可要比别人辛苦两倍。"`],
        [`你的童年没有玩具，只有木剑和咒语书。{location}的训练场上，你每天挥剑五百次，念咒五百遍，直到手脚都磨出茧子。`, `十岁那年，你在{location}的家族比武中第一次展示了"魔武合一"——你一边念咒一边挥剑，剑身上缠绕着火焰。观众们惊呆了。`],
      ],
      growth: [
        [`十五岁那年，你考入了战斗法师专修班。但班级里的学生大多是贵族子弟，他们嘲笑你："一个平民也想学魔武合一？做梦吧。"`, `你不服输。{location}的训练场上，你每日比别人多练三小时。半年后，你在班级比武中击败了所有贵族学生——用的是最基础的火球术和最普通的铁剑。`],
        [`二十岁那年，你在{location}的实战演练中遇到了一个强大的对手——一位纯法师。他的魔法威力是你的三倍，但你的剑可以斩断他的咒语。最终，你们战成了平手。`, `{npc}——你的战斗导师——说："战斗法师的精髓不是魔法的威力，也不是剑术的速度，而是节奏。找到魔法与剑术之间的节奏，你就无敌了。"`],
      ],
      adult: [
        [`成年后，你成为了最年轻的"魔武大师"。但你也发现了一个问题：魔武合一需要同时修炼魔法和剑术，这意味着你需要两倍的时间和资源——而你的寿命是有限的。`, `你在{location}遇到了一位老兵。他年轻时也是战斗法师，但因为无法突破瓶颈，最终放弃了魔法，成为了普通骑士。他说："我后悔了。不要走我的路。"`],
        [`你面临抉择：放弃魔法，专注剑术，成为一代剑圣；或者放弃剑术，专注魔法，成为大法师；或者继续魔武合一，但可能两者都无法达到巅峰。`, ``, '继续魔武合一', '专精一项', 0.45],
      ],
      special: [
        [`你选择了继续魔武合一。在一场生死战中，你意外发现了"魔武共鸣"——当魔法与剑术达到完美同步时，威力不是相加，而是相乘！`, `你开创了"共鸣剑道"——不是魔法辅助剑术，也不是剑术辅助魔法，而是两者完全融为一体。你的剑就是法杖，你的咒语就是剑招。`],
        [`百年后，"共鸣剑道"成为了战斗法师的最高追求。后人称你为"剑魔"。你的弟子遍布天下，都是曾经的"战斗法师"或"魔剑士"。`, `你在{location}立下了一块碑，上面写着："魔法与剑术不是两条路，它们是同一条路的两只脚。只用一只脚走路，永远到不了终点。"`],
      ],
    },
  };

  Object.entries(identityStories).forEach(([id, story]) => {
    const chainPrefix = 'chain_' + id;

    story.childhood.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 3 + i * 4, 8 + i * 4, 0.88, texts, {
        identityExclusive: id,
        effects: rand([{ special: 5 }, { strength: 4, luck: 2 }, { intelligence: 5 }]),
        flags: [chainPrefix + '_childhood_' + i],
      }));
    });

    story.growth.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 14 + i * 5, 20 + i * 5, 0.82, texts, {
        identityExclusive: id,
        effects: rand([{ strength: 6 }, { intelligence: 6 }, { special: 6 }, { charisma: 4, luck: 3 }]),
        requiredFlags: [chainPrefix + '_childhood_0'],
        flags: [chainPrefix + '_growth_' + i],
        chainPriority: 1,
      }));
    });

    story.adult.forEach((texts, i) => {
      const isChoiceStage = texts.length >= 5 && texts[1] === '';
      const opts = isChoiceStage ? {
        choices: [
          choice(texts[2], texts[4], '你选择了' + texts[2] + '，从此踏上了一条不归路。', '你选择了' + texts[2] + '，但命运弄人，一切并未如你所愿。', rand([{ strength: 10, special: 5 }, { intelligence: 10, luck: 5 }, { charisma: 10, health: 5 }]), { health: -10, luck: -5 }, ['branch_identity_' + id + '_path'], ['branch_identity_' + id + '_path_fail']),
          choice(texts[3], 0.75, '你选择了' + texts[3] + '，虽然道路不同，但终点未必更差。', '你选择了' + texts[3] + '，却发现这条路比你想象的更加艰难。', rand([{ luck: 8, charisma: 5 }, { intelligence: 8, special: 3 }]), { strength: -3 }, ['branch_identity_' + id + '_new'], ['branch_identity_' + id + '_new_fail']),
        ]
      } : {};
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 26 + i * 10, 35 + i * 10, isChoiceStage ? 0.90 : 0.78, isChoiceStage ? [texts[0]] : texts, {
        identityExclusive: id,
        effects: isChoiceStage ? {} : rand([{ strength: 8 }, { intelligence: 8 }, { special: 8 }]),
        requiredFlags: [chainPrefix + '_growth_0'],
        flags: [chainPrefix + '_adult_' + i],
        chainPriority: 2,
        ...opts,
      }));
    });

    story.special.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 10 + i * 20, 30 + i * 30, 0.75, texts, {
        identityExclusive: id,
        effects: rand([{ special: 10, health: -5 }, { strength: 8, luck: 5 }, { intelligence: 10 }]),
        requiredFlags: [chainPrefix + '_adult_0'],
        flags: [chainPrefix + '_special_' + i],
        chainPriority: 3,
      }));
    });
  });

  return T;
}

function generateIdentityEvents(w) {
  if (w.prefix === 'cx') {
    return generateCultivationIdentityEvents(w);
  }
  if (w.prefix === 'mg') {
    return generateMagicIdentityEvents(w);
  }

  const T = [];
  const { prefix, identities, scenes, npcs, legends } = w;

  const identityStorylines = {
    cultivation: {
      commoner: ['灵根觉醒', '凡人修仙', '逆天改命', '草根崛起'],
      genius: ['仙门内斗', '天赋反噬', '天才陨落', '万众瞩目'],
      wanderer: ['遗迹争夺', '独行问道', '野鹤闲云', '四海为家'],
      demon_blood: ['血脉暴走', '化形天劫', '妖族认同', '人妖之争'],
      demon_heritage: ['禁术诱惑', '正邪抉择', '魔道传承', '洗白之路'],
      reincarnated: ['前世因果', '宿敌重现', '记忆觉醒', '因果轮回'],
      spirit_body: ['灵体共鸣', '元素化', '天人合一', '肉身重塑'],
      artifact_spirit: ['器灵觉醒', '寻找本体', '法宝化形', '上古记忆'],
      buddhist: ['红尘历练', '佛魔一念', '功德圆满', '入世渡人'],
      ghost_cultivator: ['鬼门开启', '阴阳两界', '魂魄凝实', '鬼仙之路'],
    },
    magic: {
      apprentice: ['奖学金', '平民逆袭', '勤工俭学', '大器晚成'],
      noble_mage: ['家族阴谋', '血脉觉醒', '贵族责任', '权力斗争'],
      druid: ['自然试炼', '兽群契约', '世界树', '自然平衡'],
      assassin: ['暗影公会', '刺杀任务', '身份暴露', '洗白之路'],
      paladin: ['圣战', '信仰危机', '堕落与救赎', '光明使命'],
      dragon_blood: ['龙族召唤', '血脉暴走', '龙化', '混血认同'],
      necromancer: ['死亡魔法', '亡灵军团', '生死界限', '死灵君王'],
      summoner: ['契约精灵', '召唤失控', '元素位面', '召唤之王'],
      alchemist: ['爆炸实验', '贤者之石', '等价交换', '万能药'],
      battle_mage: ['近战魔法', '战场洗礼', '魔武合一', '战神之路'],
    },
    scifi: {
      colonist: ['荒野求生', '殖民地危机', '星球改造', '边疆之王'],
      space_noble: ['政治联姻', '权力斗争', '家族荣耀', '星际政治'],
      cyborg: ['系统升级', '人性流失', '机械觉醒', '赛博飞升'],
      alien_hybrid: ['异族认同', '基因暴走', '混血优势', '星际桥梁'],
      ai_awakened: ['网络深渊', '图灵突破', '意识融合', '硅基生命'],
      time_traveler: ['时间悖论', '因果重构', '平行自我', '时间闭环'],
      gene_warrior: ['基因解锁', '战斗本能', '完美士兵', '基因原体'],
      pirate: ['劫掠生涯', '宝藏传说', '海盗王', '招安之路'],
      archaeologist: ['古代遗迹', '失落科技', '文明轮回', '考古发现'],
      hacker: ['网络入侵', '数据意识', '数字幽灵', '系统崩溃'],
    },
    apocalypse: {
      shelter: ['内部政变', '地表初探', '资源匮乏', '重返地面'],
      raider: ['劫掠生涯', '帮派老大', '暴力统治', '转型之路'],
      mutant: ['变异失控', '超能力觉醒', '进化之路', '新物种'],
      scientist: ['战前科技', '解药研究', '疯狂实验', '文明重启'],
      mechanic: ['战车制造', '机器人军团', '机械之心', '废土工程师'],
      new_human: ['进化之路', '旧人类冲突', '新秩序', '物种战争'],
      doctor: ['瘟疫', '救死扶伤', '医学奇迹', '废土天使'],
      scavenger: ['寻宝', '垃圾变黄金', '拾荒王', '废土商人'],
      preacher: ['信仰传播', '邪教', '精神领袖', '末日救赎'],
      beast_tamer: ['驯兽', '兽群领袖', '变异兽伙伴', '兽王之路'],
    },
    wuxia: {
      farmers_son: ['偶遇高人', '山野奇遇', '草根崛起', '田园归隐'],
      aristocrat: ['家族使命', '权谋斗争', '世家责任', '家族兴衰'],
      orphan: ['街头生存', '意外师承', '无依无靠', '自立门户'],
      demon_disciple: ['身份暴露', '正邪抉择', '魔教复兴', '洗白之路'],
      spy: ['双重身份', '任务危机', '朝廷阴谋', '身份认同'],
      foreigner: ['文化冲突', '异域武功', '归乡之路', '文化桥梁'],
      medic: ['悬壶济世', '毒医之争', '医武双修', '医仙之路'],
      poisoner: ['毒术精进', '毒龙沼泽', '以毒攻毒', '毒圣之名'],
      swordsman: ['剑心通明', '剑冢传承', '人剑合一', '剑神之路'],
      assassin_wuxia: ['暗器百解', '暗杀任务', '明器暗器', '暗器之王'],
    },
  };

  const storylines = identityStorylines[w.prefix === 'cx' ? 'cultivation' : w.prefix === 'mg' ? 'magic' : w.prefix === 'sf' ? 'scifi' : w.prefix === 'ap' ? 'apocalypse' : 'wuxia'];

  identities.forEach((identity) => {
    const tags = storylines[identity.id] || ['成长', '历练', '突破', '传承'];
    const chainPrefix = `chain_${identity.id}`;

    // 童年专属 2个 — 链式起点（高概率确保触发）
    for (let i = 0; i < 2; i++) {
      const texts = [
        `作为${identity.name}，你从小就展现出与众不同的天赋。${tags[i]}的特质在你体内蠢蠢欲动。`,
        `你在{location}经历了一件改变一生的事，那是${identity.name}的命运转折点。`,
        `{npc}看出了你是${identity.name}的苗子，决定暗中帮助你。`,
        `你体内的${tags[i]}之力在{location}第一次觉醒。`,
      ];
      T.push(tmpl(makeId(prefix, 'identity_exclusive', identity.id), 'identity_exclusive', 3 + i * 4, 8 + i * 4, 0.85, texts, {
        identityExclusive: identity.id,
        effects: rand([{ special: 5 }, { strength: 4, luck: 2 }, { intelligence: 5 }]),
        flags: [`${chainPrefix}_childhood_${i}`],
      }));
    }

    // 少年专属 2个 — 依赖童年链式标记
    for (let i = 0; i < 2; i++) {
      const texts = [
        `作为${identity.name}，你在{location}遇到了${tags[2]}的试炼。`,
        `你的${identity.name}身份让你在{location}陷入了困境。`,
        `{npc}因为你的${identity.name}身份而对你另眼相看。`,
        `你在{location}觉醒了${identity.name}特有的能力。`,
      ];
      T.push(tmpl(makeId(prefix, 'identity_exclusive', identity.id), 'identity_exclusive', 14 + i * 5, 20 + i * 5, 0.80, texts, {
        identityExclusive: identity.id,
        effects: rand([{ strength: 6 }, { intelligence: 6 }, { special: 6 }, { charisma: 4, luck: 3 }]),
        requiredFlags: [`${chainPrefix}_childhood_0`],
        flags: [`${chainPrefix}_growth_${i}`],
        chainPriority: 1,
      }));
    }

    // 成年专属 2个 — 依赖少年链式标记
    for (let i = 0; i < 2; i++) {
      const texts = [
        `作为${identity.name}，你在{location}迎来了人生的重要转折点——${tags[3]}。`,
        `你的${identity.name}之路在{location}遭遇了最大的挑战。`,
        `{legend}的传说与你的${identity.name}身份产生了某种联系。`,
        `你在{location}做出了一个关乎${identity.name}命运的重要决定。`,
      ];
      const hasChoice = i === 1;
      const opts = hasChoice ? {
        choices: [
          choice(`坚持${identity.name}之道`, 0.5, `你成功了，${tags[3]}之力大增`, '你失败了，但收获经验', { special: 10, strength: 5 }, { intelligence: 5, health: -5 }, [`branch_identity_${identity.id}_path`], [`branch_identity_${identity.id}_path_fail`]),
          choice('另辟蹊径', 0.7, '你找到了新的道路', '你迷失了方向', { luck: 5, charisma: 5 }, { luck: -3 }, [`branch_identity_${identity.id}_new`], [`branch_identity_${identity.id}_new_fail`]),
        ]
      } : {};
      T.push(tmpl(makeId(prefix, 'identity_exclusive', identity.id), 'identity_exclusive', 26 + i * 10, 35 + i * 10, 0.75, texts, {
        identityExclusive: identity.id,
        effects: hasChoice ? {} : rand([{ strength: 8 }, { intelligence: 8 }, { special: 8 }]),
        requiredFlags: [`${chainPrefix}_growth_0`],
        flags: [`${chainPrefix}_adult_${i}`],
        chainPriority: 2,
        ...opts,
      }));
    }

    // 特殊剧情 2个（跨年龄段）— 依赖成年链式标记
    for (let i = 0; i < 2; i++) {
      const texts = [
        `作为${identity.name}，你与{legend}产生了宿命般的纠葛。`,
        `你在{location}发现了关于${identity.name}起源的秘密。`,
        `{npc}揭示了一个关于${identity.name}的惊天秘密。`,
        `你的${identity.name}血脉在{location}发生了异变。`,
      ];
      T.push(tmpl(makeId(prefix, 'identity_exclusive', identity.id), 'identity_exclusive', 10 + i * 20, 30 + i * 30, 0.70, texts, {
        identityExclusive: identity.id,
        effects: rand([{ special: 10, health: -5 }, { strength: 8, luck: 5 }, { intelligence: 10 }]),
        requiredFlags: [`${chainPrefix}_adult_0`],
        flags: [`${chainPrefix}_special_${i}`],
        chainPriority: 3,
      }));
    }
  });

  return T;
}

// ============================================================
// 修仙界废材逆袭事件生成器（体修之路）
// ============================================================

function generateCultivationTrashEvents(w) {
  const T = [];
  const { prefix } = w;

  // 阶段1（0-6）：被嘲笑，发现体修之路
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 0, 6, 0.92, [
    `灵根检测那日，{location}的检测石毫无反应。{npc}摇头叹息："无灵根之体，与仙道无缘。"全村人都用怜悯的目光看着你。`,
    `作为无灵根之人，你只能看着同龄人在{location}引气入体。他们嘲笑你是"修仙界的废物"，连最基础的御物术都无法施展。`,
  ], { talentExclusive: 'trash', effects: { special: -5, strength: -2, intelligence: 3 }, flags: ['trash_childhood_start'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 4, 10, 0.88, [
    `你不甘心。每日凌晨，你在{location}的山顶对着朝阳挥拳一千次，直到双臂麻木。{npc}路过时皱眉："没有灵根，练这些有何用？"`,
    `你在{location}的古旧书摊淘到了半本残破的《金刚淬体诀》。书页泛黄，开篇写道："无灵根者，当以肉身证道，以武入仙。"你如获至宝。`,
  ], { talentExclusive: 'trash', effects: { strength: 3, intelligence: 2, luck: 2 }, requiredFlags: ['trash_childhood_start'], flags: ['trash_childhood_1'] }));

  // 阶段2（12-25）：暗中积累，苦修炼体
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 12, 18, 0.85, [
    `你按照《金刚淬体诀》的方法，以妖兽之血淬炼肉身。第一次淬体时，剧痛让你昏死过去。醒来时，你发现皮肤下隐隐有金光流转。`,
    `别的天才一日可完成的修炼，你需要一个月。但你在{location}日复一日，从未间断。{npc}偶然看到你的训练，震惊地说："这...这是上古体修之法？"`,
  ], { talentExclusive: 'trash', effects: { strength: 5, health: 3, special: 2 }, requiredFlags: ['trash_childhood_1'], flags: ['trash_growth_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 15, 22, 0.80, [
    `你在{location}救了一位被妖兽重伤的散修。他感激之下，传授了你一套独门炼体之术——"九转霸体诀"。这是连大宗门都没有的秘法！`,
    `{npc}被你的毅力打动，决定收你为记名弟子。他说："我这一生见过无数天才，但像你这样的傻子，还是第一个。"你终于有了师父。`,
  ], { talentExclusive: 'trash', effects: { strength: 7, health: 5, charisma: 2 }, requiredFlags: ['trash_growth_0'], flags: ['trash_growth_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 18, 25, 0.75, [
    `经过多年的苦修，你在{location}遇到了一个瓶颈——肉身强度已到达极限，再无法寸进。一位路过的老者告诉你："体修之路，需以天劫淬体。"`,
    `你在{location}的瀑布下闭关三月，终于突破了第一重肉身桎梏。出水时，你一拳轰碎了千斤巨石——这一拳，没有任何灵力，只有纯粹的力量。`,
  ], { talentExclusive: 'trash', effects: { strength: 8, intelligence: 3, luck: 3 }, requiredFlags: ['trash_growth_1'], flags: ['trash_growth_2'] }));

  // 阶段3（26-45）：崭露头角，以力破法
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 26, 35, 0.78, [
    `青云宗举办宗门大比，你以"旁听散修"的身份报名参加。所有人都嘲笑你："一个无灵根的废物，也配参加大比？"`,
    `大比第一轮，你对上了筑基期修士。对方祭出飞剑，剑光如虹。你不躲不闪，一拳击出——飞剑碎裂，对手倒飞十丈，全场寂静。`,
  ], { talentExclusive: 'trash', effects: { strength: 8, charisma: 6, special: 3 }, requiredFlags: ['trash_growth_2'], flags: ['trash_adult_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 30, 40, 0.72, [
    `你的"以力破法"震惊了修仙界。{npc}说你是"万古以来第一个以无灵根之身击败筑基修士的人"。各大宗门开始重新审视"体修"这条被遗忘的道路。`,
    `你在{location}建立了一座小小的"体修道场"，专门招收无灵根或有缺陷的孩子。你说："灵根决定起点，毅力决定终点。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 7, intelligence: 5, luck: 3 }, requiredFlags: ['trash_adult_0'], flags: ['trash_adult_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 45, 0.68, [
    `昔日嘲笑你的同村修士在{location}与你重逢。他依然是炼气期，而你已能硬撼金丹。他跪地痛哭："当年是我有眼无珠..."你将他扶起。`,
    `{legend}的传承之地开启，你说服众人让你这个"无灵根的废物"也进去试试。他们抱着看笑话的心态同意了——但很快，他们就笑不出来了。`,
  ], { talentExclusive: 'trash', effects: { strength: 6, luck: 5, special: 4 }, requiredFlags: ['trash_adult_1'], flags: ['trash_adult_2'] }));

  // 逆袭关键事件 — 含选择分支
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 28, 42, 0.65, [
    `宗门大比的决赛上，你对上了青云宗的天才弟子。对方是金丹期，而你连灵根都没有。所有人都认为这是一场屠杀——但他们错了。`,
    `比赛开始前，{npc}暗中塞给你一颗丹药："这是'燃血丹'，能短时间内爆发三倍肉身力量，但事后会损伤根基。用不用，你自己决定。"`,
  ], {
    talentExclusive: 'trash',
    effects: { strength: 3 },
    requiredFlags: ['trash_adult_1'],
    flags: ['trash_climax_0'],
    chainPriority: 2,
    choices: [
      choice('服用燃血丹，全力一战', 0.35, '燃血丹的力量让你肉身暴涨，一拳轰碎了对方的护体法宝！全场震撼，万古未有！', '燃血丹的反噬让你经脉断裂，虽然赢了比赛，但修为倒退三年', { strength: 15, charisma: 10, special: 5, health: -20 }, { strength: 5, charisma: 3, health: -30 }, ['branch_trash_fight'], ['branch_trash_fight_fail']),
      choice('拒绝丹药，以本真之力战斗', 0.65, '你没有借助外力，仅凭肉身与对方周旋百招。虽然最终惜败，但你赢得了所有人的尊重！', '你拒绝了丹药，但实力差距太大，被一招击败。众人摇头："果然，废物就是废物。"', { charisma: 10, luck: 8, strength: 5 }, { charisma: -5, health: -15 }, ['branch_trash_persist'], ['branch_trash_persist_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 50, 0.60, [
    `你在{location}遇到了一位神秘老者。他打量你许久，说："你的肉身已达凡人之极限。若想再进一步，需以'天劫淬体'——用肉身硬抗天劫，以雷霆之力重塑根基。"`,
    `老者给了你两个选择：他可以帮你引动小天劫，用雷霆淬炼肉身（九死一生）；或者传你一套更稳妥的炼体之法（进展缓慢但安全）。`,
  ], {
    talentExclusive: 'trash',
    effects: { special: 3 },
    requiredFlags: ['trash_climax_0'],
    flags: ['trash_climax_1'],
    chainPriority: 2,
    choices: [
      choice('以天劫淬体，向死而生', 0.30, '九九雷霆轰击肉身，你几度昏死又几度醒来。最终，雷霆之力与你的肉身完美融合——你成就了传说中的"雷霆霸体"！', '天劫之力超出了你的承受极限。虽然侥幸不死，但肉身被毁大半，需要数十年才能恢复', { strength: 20, special: 10, health: -25 }, { health: -40, strength: 3 }, ['branch_trash_transform'], ['branch_trash_transform_fail']),
      choice('稳扎稳打，不求速成', 0.80, '你选择了更稳妥的道路。虽然进展缓慢，但根基无比扎实。老者点头："大器晚成，方得始终。"', '稳妥之路需要的时间远超你的寿元。你知道，自己可能等不到大成的那一天了', { intelligence: 10, strength: 5, health: 5 }, { intelligence: 3, luck: -3 }, ['branch_trash_persist2'], ['branch_trash_persist2_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 40, 55, 0.55, [
    `你的故事传遍了修仙界。{location}的体修道场每天都有人慕名而来——不是天才，而是那些被判定为"废物"的孩子。`,
    `{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。不是因为我更强，而是因为我从未停下。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 5, special: 5 }, requiredFlags: ['trash_climax_1'], flags: ['trash_climax_2'], chainPriority: 3 }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 45, 60, 0.50, [
    `你以肉身硬抗天劫，突破到了传说中的"肉身成圣"之境。没有灵根、没有法术，仅凭一拳，便能轰碎山岳！`,
    `你成为了万古以来第一个以无灵根之躯飞升仙界的人。仙界的大门在你面前敞开，你回头看向凡界，那个在{location}被嘲笑的孩子，如今已是传说。`,
  ], { talentExclusive: 'trash', effects: { strength: 10, intelligence: 5, charisma: 10, special: 10 }, requiredFlags: ['trash_climax_2'], flags: ['trash_legend'], chainPriority: 3 }));

  // 废材老年
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 55, 80, 0.60, [
    `你在{location}收徒传道，专门招收无灵根的孩子。你说："天赋决定起点，但毅力和选择决定终点。"`,
    `你的弟子中有人开创了新的体修流派，有人以体修之身成为了大宗门长老。{npc}感叹："你一人之力，改变了一个时代的修仙格局。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 8, intelligence: 5 }, requiredFlags: ['trash_legend'], flags: ['trash_elder_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 60, 90, 0.55, [
    `大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。`,
    `你微笑着说："如果重来一次，我还是会选择做那个无灵根的废物。因为正是'废物'二字，让我找到了属于自己的道。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 6, health: -5 }, requiredFlags: ['trash_elder_0'], flags: ['trash_elder_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 70, 100, 0.50, [
    `你离世的那天，{location}下起了金色的雨。无数你曾经帮助过的人自发前来为你送行。`,
    `你的灵魂没有进入轮回，而是化作了一道金光，融入了天地之间。后人传说，每当天才恃才傲物时，天上就会响起一声雷鸣——那是你在提醒他们：不要小看任何一个"废物"。`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 10 }, requiredFlags: ['trash_elder_1'], flags: ['trash_ending'] }));

  return T;
}

// ============================================================
// 废材专属逆袭事件生成器
// ============================================================

function generateMagicTrashEvents(w) {
  const T = [];
  const { prefix } = w;

  // 阶段1（0-6）：被嘲笑，发现奥术数学
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 0, 6, 0.92, [
    `魔法觉醒检测那日，{location}的检测水晶毫无反应。{npc}摇头叹息："魔法绝缘体...与魔法无缘。"所有人都用怜悯的目光看着你。`,
    `作为魔法绝缘之人，你只能看着同龄人在{location}召唤出小火球。他们嘲笑你是"魔法世界的废物"，连最基础的照明术都无法施展。`,
  ], { talentExclusive: 'trash', effects: { special: -5, strength: -2, intelligence: 3 }, flags: ['trash_childhood_start'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 4, 10, 0.88, [
    `你不甘心。每晚偷偷在{location}的图书馆里研读《魔法原理》，虽然你无法感知魔力，但你对魔法的"理论"理解却超过了大多数学生。`,
    `你在{location}的旧书摊淘到了一本残破的《奥术数学》。书中说："魔法不是天赋的专利，公式可以推导一切魔法现象。"你如获至宝。`,
  ], { talentExclusive: 'trash', effects: { intelligence: 3, strength: 2, luck: 2 }, requiredFlags: ['trash_childhood_start'], flags: ['trash_childhood_1'] }));

  // 阶段2（12-25）：暗中积累，以公式推导施法
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 12, 18, 0.85, [
    `你按照《奥术数学》的方法，用纯粹的数学公式推导魔法的运行规律。第一次尝试时，你在纸上画出了火球术的完整魔力回路——虽然你无法施法，但你的图纸让{npc}震惊不已。`,
    `别的天才一小时能掌握的火球术，你需要用三个月推导公式。但你在{location}日复一日，从未间断。{npc}偶然看到你的演算稿，震惊地说："这...这是理论魔法的雏形？"`,
  ], { talentExclusive: 'trash', effects: { intelligence: 5, health: 3, special: 2 }, requiredFlags: ['trash_childhood_1'], flags: ['trash_growth_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 15, 22, 0.80, [
    `你在{location}遇到了一位被学院边缘化的老教授。他看了你的奥术数学理论后，老泪纵横："三十年前，我也提出过类似理论。但他们嘲笑我，说魔法不是科学。你愿意和我一起证明它吗？"`,
    `{npc}被你的毅力打动，决定收你为记名弟子。他说："我这一生见过无数天才，但像你这样的'傻子'，还是第一个。"你终于有了导师。`,
  ], { talentExclusive: 'trash', effects: { intelligence: 7, health: 5, charisma: 2 }, requiredFlags: ['trash_growth_0'], flags: ['trash_growth_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 18, 25, 0.75, [
    `经过多年的研究，你在{location}推导出了"通用施法公式"——一个可以让魔法绝缘者也能施法的数学模型！但公式需要借助特殊的"魔力传导装置"才能实现。`,
    `你在{location}的工坊里，用铜线和水晶制作出了人生第一个"奥术计算器"。当你按下最后一个符文时，装置顶端亮起了一点微弱的火光——那是你人生第一次"施法"！`,
  ], { talentExclusive: 'trash', effects: { intelligence: 8, strength: 3, luck: 3 }, requiredFlags: ['trash_growth_1'], flags: ['trash_growth_2'] }));

  // 阶段3（26-45）：崭露头角，以公式战胜天赋
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 26, 35, 0.78, [
    `烈焰学院举办魔法大比，你以"理论展示"的身份报名参加。所有人都嘲笑你："一个魔法绝缘的废物，也配参加魔法大比？"`,
    `大比第一轮，你对上了初级法师。对方召唤出火球，威力惊人。你不慌不忙，启动了奥术计算器，输入了火球术的逆运算公式——对方的火球在半空中被你的"魔力中和场"熄灭了！全场寂静。`,
  ], { talentExclusive: 'trash', effects: { intelligence: 8, charisma: 6, special: 3 }, requiredFlags: ['trash_growth_2'], flags: ['trash_adult_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 30, 40, 0.72, [
    `你的"公式魔法"震惊了魔法界。{npc}说你是"万古以来第一个以魔法绝缘之身击败法师的人"。各大学院开始重新审视"理论魔法"这条被遗忘的道路。`,
    `你在{location}建立了一座小小的"公式魔法工坊"，专门招收被学院拒绝的学生。你说："天赋决定起点，但智慧和毅力决定终点。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 7, intelligence: 5, luck: 3 }, requiredFlags: ['trash_adult_0'], flags: ['trash_adult_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 45, 0.68, [
    `昔日嘲笑你的同村法师在{location}与你重逢。他依然是初级法师，而你的公式已经能模拟出中级魔法。他跪地痛哭："当年是我有眼无珠..."你将他扶起。`,
    `{legend}的传承之地开启，你说服众人让你这个"魔法绝缘的废物"也进去试试。他们抱着看笑话的心态同意了——但很快，他们就笑不出来了。`,
  ], { talentExclusive: 'trash', effects: { intelligence: 6, luck: 5, special: 4 }, requiredFlags: ['trash_adult_1'], flags: ['trash_adult_2'] }));

  // 逆袭关键事件 — 含选择分支
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 28, 42, 0.65, [
    `魔法大比的决赛上，你对上了烈焰学院的天才法师。对方是高级法师，而你连魔力都无法感知。所有人都认为这是一场屠杀——但他们错了。`,
    `比赛开始前，{npc}暗中塞给你一块魔晶："这是'过载魔晶'，能让你的奥术计算器短时间内运算速度提升十倍，但事后会烧毁核心。用不用，你自己决定。"`,
  ], {
    talentExclusive: 'trash',
    effects: { intelligence: 3 },
    requiredFlags: ['trash_adult_1'],
    flags: ['trash_climax_0'],
    chainPriority: 2,
    choices: [
      choice('使用过载魔晶，全力一战', 0.35, '过载魔晶让你的奥术计算器爆发出了前所未有的运算速度！你推导出了传说中的"禁咒公式"，全场震撼，万古未有！', '过载魔晶烧毁了你的计算器核心，虽然赢了比赛，但你需要数年才能重建设备', { intelligence: 15, charisma: 10, special: 5, health: -20 }, { intelligence: 5, charisma: 3, health: -30 }, ['branch_trash_fight'], ['branch_trash_fight_fail']),
      choice('拒绝魔晶，以本真之力战斗', 0.65, '你没有借助外力，仅凭基础公式与对方周旋。虽然最终惜败，但你赢得了所有人的尊重！', '你拒绝了魔晶，但实力差距太大，被一招击败。众人摇头："果然，废物就是废物。"', { charisma: 10, luck: 8, intelligence: 5 }, { charisma: -5, health: -15 }, ['branch_trash_persist'], ['branch_trash_persist_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 50, 0.60, [
    `你在{location}遇到了一位神秘老者。他打量你许久，说："你的公式已经触及了魔法的本质。若想再进一步，需要进入真理之塔顶层——那里有'万能公式'，可以让魔法绝缘者拥有真正的施法能力。"`,
    `老者给了你两个选择：他可以帮你打开真理之塔的通道（九死一生）；或者传你一套更稳妥的进阶公式（进展缓慢但安全）。`,
  ], {
    talentExclusive: 'trash',
    effects: { special: 3 },
    requiredFlags: ['trash_climax_0'],
    flags: ['trash_climax_1'],
    chainPriority: 2,
    choices: [
      choice('闯入真理之塔，向死而生', 0.30, '你闯入了真理之塔顶层，面对无数魔法陷阱和守护者。最终，你找到了"万能公式"——那一刻，你第一次真正感受到了魔力的流动！', '真理之塔的守护者超出了你的预期。虽然侥幸逃生，但你的奥术计算器被毁，需要数十年才能重建', { intelligence: 20, special: 10, health: -25 }, { health: -40, intelligence: 3 }, ['branch_trash_transform'], ['branch_trash_transform_fail']),
      choice('稳扎稳打，不求速成', 0.80, '你选择了更稳妥的道路。虽然进展缓慢，但根基无比扎实。老者点头："大器晚成，方得始终。"', '稳妥之路需要的时间远超你的寿元。你知道，自己可能等不到大成的那一天了', { intelligence: 10, strength: 5, health: 5 }, { intelligence: 3, luck: -3 }, ['branch_trash_persist2'], ['branch_trash_persist2_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 40, 55, 0.55, [
    `你的故事传遍了魔法界。{location}的公式魔法工坊每天都有人慕名而来——不是天才，而是那些被判定为"废物"的孩子。`,
    `{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。不是因为我更强，而是因为我从未停下。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 5, special: 5 }, requiredFlags: ['trash_climax_1'], flags: ['trash_climax_2'], chainPriority: 3 }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 45, 60, 0.50, [
    `你推导出了"万能公式"，成为了万古以来第一个以魔法绝缘之躯施展禁咒的人。没有魔力、没有天赋，仅凭一台计算器和无数公式，你释放出了毁天灭地的魔法！`,
    `你成为了魔法界的传奇。后人称你为"公式贤者"，你的故事激励了无数被判定为魔法绝缘的人——魔法，终于不再是天赋者的专利。`,
  ], { talentExclusive: 'trash', effects: { intelligence: 10, strength: 5, charisma: 10, special: 10 }, requiredFlags: ['trash_climax_2'], flags: ['trash_legend'], chainPriority: 3 }));

  // 废材老年
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 55, 80, 0.60, [
    `你在{location}收徒传道，专门招收魔法绝缘的孩子。你说："天赋决定起点，但智慧和选择决定终点。"`,
    `你的弟子中有人发明了新的计算公式，有人以公式魔法成为了学院长老。{npc}感叹："你一人之力，改变了一个时代的魔法格局。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 8, intelligence: 5 }, requiredFlags: ['trash_legend'], flags: ['trash_elder_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 60, 90, 0.55, [
    `大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。`,
    `你微笑着说："如果重来一次，我还是会选择做那个魔法绝缘的废物。因为正是'废物'二字，让我找到了属于自己的魔法。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 6, health: -5 }, requiredFlags: ['trash_elder_0'], flags: ['trash_elder_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 70, 100, 0.50, [
    `你离世的那天，{location}下起了七彩的光雨——那是无数元素精灵在为你送行。`,
    `你的灵魂没有进入轮回，而是化作了一道公式之光，融入了真理之塔。后人传说，每当天才恃才傲物时，塔顶就会亮起一行公式——那是你在提醒他们：不要小看任何一个"废物"。`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 10 }, requiredFlags: ['trash_elder_1'], flags: ['trash_ending'] }));

  return T;
}

function generateTrashEvents(w) {
  if (w.prefix === 'cx') {
    return generateCultivationTrashEvents(w);
  }
  if (w.prefix === 'mg') {
    return generateMagicTrashEvents(w);
  }

  const T = [];
  const { prefix, scenes, npcs, legends } = w;
  const talentName = w.talentNames.trash;

  // 废材童年 2个 — 起点事件（高概率确保废材玩家触发）
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 0, 6, 0.90, [
    `你被检测出${talentName}，全村人都对你投来怜悯的目光。{npc}摇头叹息："这孩子废了。"`,
    `其他孩子在{location}修炼时，你只能在一旁看着，因为你的身体根本无法吸收灵气。`,
    `你的父母因为你的${talentName}体质而愁眉不展，{npc}劝他们放弃对你的期望。`,
  ], { talentExclusive: 'trash', effects: { special: -3, strength: -2, intelligence: 2 }, flags: ['trash_childhood_start'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 4, 10, 0.85, [
    `你在{location}被同龄人欺负，他们嘲笑你是${talentName}的废物。你握紧拳头，暗暗发誓要变强。`,
    `{npc}偷偷塞给你一本基础功法，说是"死马当活马医"。你如获至宝，日夜研读。`,
    `你在{location}发现了一本破旧的书，虽然字迹模糊但你还是坚持抄了下来。`,
  ], { talentExclusive: 'trash', effects: { intelligence: 3, strength: 2, luck: 1 }, requiredFlags: ['trash_childhood_start'], flags: ['trash_childhood_1'] }));

  // 废材少年 3个 — 暗中积累
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 12, 18, 0.80, [
    `你按照那本破书上的方法在{location}修炼，进展缓慢但从未放弃。{npc}惊讶地发现你的气息变强了。`,
    `别的天才一天能完成的修炼，你需要一个月。但你用十倍的时间来弥补，在{location}日复一日。`,
    `你在{location}找到了一种适合${talentName}体质的特殊修炼方式，虽然痛苦但有效。`,
  ], { talentExclusive: 'trash', effects: { strength: 4, intelligence: 3, special: 2 }, requiredFlags: ['trash_childhood_1'], flags: ['trash_growth_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 15, 22, 0.75, [
    `你在{location}救了一个受伤的{npc}，他感激之下传授了你一套独门的炼体之术。`,
    `{npc}被你的毅力打动，决定收你为记名弟子。你终于有了自己的师父！`,
    `你在{location}苦修多年，虽然境界不高，但肉身强度已经远超同阶。`,
  ], { talentExclusive: 'trash', effects: { strength: 6, health: 5, charisma: 2 }, requiredFlags: ['trash_growth_0'], flags: ['trash_growth_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 18, 25, 0.70, [
    `你在{location}遇到了一个神秘的{npc}，他说你的${talentName}体质其实另有玄机。`,
    `经过多年的积累，你在{location}突然有了顿悟——原来修炼不止一条路！`,
    `{legend}的残魂在{location}与你相遇，说你是万年一遇的"大器晚成"之命。`,
  ], { talentExclusive: 'trash', effects: { intelligence: 5, luck: 5, special: 3 }, requiredFlags: ['trash_growth_1'], flags: ['trash_growth_2'] }));

  // 废材成年 3个 — 开始崭露头角
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 26, 35, 0.75, [
    `你在{location}参加了一场比试，虽然境界最低，但凭借坚韧的意志打败了数名对手，引起了轰动。`,
    `你的修炼方式自成一派，{npc}说你是"以凡人之躯比肩神明"。`,
    `你在{location}展示了你独创的功法，所有人都震惊了——原来${talentName}也能这么强！`,
  ], { talentExclusive: 'trash', effects: { strength: 6, charisma: 5, special: 4 }, requiredFlags: ['trash_growth_2'], flags: ['trash_adult_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 30, 40, 0.70, [
    `那些曾经嘲笑你的人在{location}看到你，全都目瞪口呆。你已经超越了他们中的大多数。`,
    `{npc}邀请你加入一个重要组织，你的${talentName}之名开始传开。`,
    `你在{location}建立了自己的修炼体系，吸引了不少同样有天赋缺陷的人前来学习。`,
  ], { talentExclusive: 'trash', effects: { charisma: 6, intelligence: 4, luck: 3 }, requiredFlags: ['trash_adult_0'], flags: ['trash_adult_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 45, 0.65, [
    `你在{location}面对昔日最大的仇人，对方依然嘲笑你的${talentName}体质。`,
    `{legend}的传承之地开启，你说服众人让你这个"废物"也进去试试。`,
    `你在{location}做出了一个大胆的决定——要用自己的方式证明${talentName}不是终点。`,
  ], { talentExclusive: 'trash', effects: { strength: 5, luck: 5, special: 3 }, requiredFlags: ['trash_adult_1'], flags: ['trash_adult_2'] }));

  // 逆袭关键事件 4个 — 含选择分支
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 28, 42, 0.60, [
    `宗门大比的日子到了，你在{location}面对所有人的质疑，毅然报名参加。`,
    `这是你证明自己的最好机会，{npc}暗中为你加油。`,
    `{legend}的预言提到了一个"废物"将改变世界，所有人都看着你。`,
  ], {
    talentExclusive: 'trash',
    effects: { strength: 3 },
    requiredFlags: ['trash_adult_1'],
    flags: ['trash_climax_0'],
    chainPriority: 2,
    choices: [
      choice('全力一战', 0.4, '你以弱胜强，创造了不可思议的奇迹！全场沸腾！', '你拼尽全力但还是输了，虽然败了但赢得了尊重', { strength: 10, charisma: 8, special: 5 }, { strength: 5, charisma: 3, health: -15 }, ['branch_trash_fight'], ['branch_trash_fight_fail']),
      choice('智取巧胜', 0.6, '你利用对手的轻敌，以巧取胜！', '你的计策被识破，狼狈落败', { intelligence: 8, luck: 5 }, { charisma: -3, health: -10 }, ['branch_trash_trick'], ['branch_trash_trick_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 50, 0.55, [
    `你在{location}获得了{legend}的认可，TA说你的道路虽然艰难，但终点比任何人都高。`,
    `一位隐世高人在{location}看中了你的毅力，决定传授你绝世功法。`,
    `你发现了改变${talentName}体质的方法，但需要冒极大的风险。`,
  ], {
    talentExclusive: 'trash',
    effects: { special: 5 },
    requiredFlags: ['trash_climax_0'],
    flags: ['trash_climax_1'],
    chainPriority: 2,
    choices: [
      choice('冒险改变体质', 0.35, '你成功了！你的体质发生了翻天覆地的变化，从此一飞冲天！', '改造失败，你受了重伤，但意志更加坚定', { special: 15, strength: 5, health: -10 }, { health: -25, strength: 3 }, ['branch_trash_transform'], ['branch_trash_transform_fail']),
      choice('坚持原有道路', 0.75, '你的坚持得到了回报，你的功法大成，自成一派！', '进展依然缓慢，但你没有放弃', { intelligence: 8, strength: 5 }, { intelligence: 3 }, ['branch_trash_persist'], ['branch_trash_persist_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 40, 55, 0.50, [
    `你在{location}一战成名，所有人都知道那个${talentName}的废物逆袭成了强者。`,
    `你的故事传遍了大陆，无数${talentName}的人把你当作偶像。`,
    `{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 5, special: 5 }, requiredFlags: ['trash_climax_1'], flags: ['trash_climax_2'], chainPriority: 3 }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 45, 60, 0.45, [
    `你在{location}达到了前所未有的高度，证明了${talentName}也能登临绝巅。`,
    `你成为了{legend}级别的存在，后人将你的故事传颂千古。`,
    `你回头看向起点，那个在{location}被嘲笑的孩子，如今已是传奇。`,
  ], { talentExclusive: 'trash', effects: { strength: 8, intelligence: 8, charisma: 8, special: 8 }, requiredFlags: ['trash_climax_2'], flags: ['trash_legend'], chainPriority: 3 }));

  // 废材老年 3个 — 传奇延续
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 55, 80, 0.55, [
    `你在{location}收徒传道，专门招收那些被视为废材的孩子。你说："天赋决定起点，但毅力决定终点。"`,
    `你的弟子中出了不少人才，{npc}感叹你创造了一个奇迹。`,
    `你在{location}写下了自己的修炼心得，希望能帮助更多${talentName}的人。`,
  ], { talentExclusive: 'trash', effects: { charisma: 6, intelligence: 5 }, requiredFlags: ['trash_legend'], flags: ['trash_elder_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 60, 90, 0.50, [
    `你的大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。`,
    `你微笑着说："如果重来一次，我还是会选择做那个${talentName}的废物。"`,
    `你在{location}度过了平静的最后岁月，每天都有人来听你讲当年的故事。`,
  ], { talentExclusive: 'trash', effects: { charisma: 5, health: -5 }, requiredFlags: ['trash_elder_0'], flags: ['trash_elder_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 70, 100, 0.45, [
    `你离世的那天，{location}下起了金色的雨。无数人自发前来为你送行。`,
    `{legend}亲自前来接引你的灵魂，说你是万古以来第一个以${talentName}之躯证道的人。`,
    `你的名字被刻在了{location}的最高处，激励着后世所有被视为废材的人。`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 10 }, requiredFlags: ['trash_elder_1'], flags: ['trash_ending'] }));

  return T;
}

// ============================================================
// 主生成逻辑
// ============================================================

function generateCultivationRealmEvents(w) {
  const T = [];
  const { prefix } = w;

  const realms = [
    { stage: 1, name: '筑基期', minAge: 18, maxAge: 30, prob: 0.92, reqText: '悟性≥20、灵根≥15', baseSuccess: 0.65, maxAgeGain: 80, desc: '筑基是修仙的第一步。你将凡体化为灵体，从此踏上长生之路。' },
    { stage: 2, name: '金丹期', minAge: 35, maxAge: 55, prob: 0.88, reqText: '悟性≥35、灵根≥30、体质≥20', baseSuccess: 0.55, maxAgeGain: 120, desc: '金丹一成，寿元大增。你体内凝结出一颗璀璨金丹，法力浑厚数倍。' },
    { stage: 3, name: '元婴期', minAge: 60, maxAge: 90, prob: 0.85, reqText: '悟性≥50、灵根≥45', baseSuccess: 0.45, maxAgeGain: 200, desc: '元婴出世，相当于第二条命。即使肉身被毁，元婴也可夺舍重生。' },
    { stage: 4, name: '化神期', minAge: 100, maxAge: 160, prob: 0.82, reqText: '悟性≥70、灵根≥60', baseSuccess: 0.35, maxAgeGain: 300, desc: '化神期修士已能感应天地法则，一念之间可引动天地异象。' },
    { stage: 5, name: '渡劫期', minAge: 200, maxAge: 350, prob: 0.78, reqText: '悟性≥90、灵根≥80、体质≥60', baseSuccess: 0.30, maxAgeGain: 400, desc: '渡劫期需直面天劫。九死一生，但一旦成功，便是半步仙人。' },
    { stage: 6, name: '大乘期', minAge: 400, maxAge: 550, prob: 0.75, reqText: '灵根≥100', baseSuccess: 0.25, maxAgeGain: 800, desc: '大乘期已触摸到仙界门槛。只需等待仙界通道开启，便可飞升。' },
    { stage: 7, name: '飞升', minAge: 600, maxAge: 800, prob: 0.70, reqText: '灵根≥120、悟性≥100', baseSuccess: 0.20, maxAgeGain: 9000, desc: '破碎虚空，羽化飞升。从此脱离凡界，进入仙界。' },
  ];

  realms.forEach((r, idx) => {
    const prevFlag = idx === 0 ? null : `realm_breakthrough_${realms[idx-1].stage}`;
    const reqFlags = prevFlag ? [prevFlag] : [];

    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge, r.maxAge, r.prob, [
      `你在{location}闭关多年，终于触摸到了${r.name}的门槛。{npc}告诉你："${r.desc}突破需要${r.reqText}。"`,
      `你的修为已达瓶颈，在{location}感应到了${r.name}的契机。但突破之路九死一生，稍有不慎便可能道消身殒。`,
    ], {
      requiredFlags: reqFlags,
      flags: [`realm_attempt_${r.stage}`],
      chainPriority: 5,
      choices: [
        choice('全力冲击，不留退路', r.baseSuccess,
          `你孤注一掷，将全部灵力灌注于丹田。刹那间，天地变色，{location}的灵气疯狂涌入你的体内——你成功了！你突破到了${r.name}！`,
          `你全力冲击瓶颈，但灵力反噬，经脉寸断。虽然保住了性命，但修为大跌，需要数十年才能恢复。`,
          { realm: 1, special: 5, intelligence: 3, maxAge: r.maxAgeGain },
          { health: -30, special: -10, maxAge: -20 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail_${r.stage}`]
        ),
        choice('稳扎稳打，徐徐图之', Math.min(0.95, r.baseSuccess + 0.25),
          `你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了${r.name}。`,
          `你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。`,
          { realm: 1, special: 3, intelligence: 5, maxAge: Math.floor(r.maxAgeGain * 0.7) },
          { health: -15, special: -5, maxAge: -10 },
          [`realm_breakthrough_${r.stage}`, `realm_breakthrough_${r.stage}_steady`], [`realm_fail_${r.stage}_steady`]
        ),
        choice('放弃突破，继续积累', 1.0,
          `你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。`,
          '',
          { intelligence: 3, special: 2, strength: 2 },
          {},
          [`realm_delay_${r.stage}`], []
        ),
      ]
    }));

    // 突破成功后续事件
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 2, r.maxAge + 20, r.prob * 0.8, [
      `你突破到${r.name}的消息传遍了修仙界。{location}的修士们纷纷前来祝贺，你的名字被刻在了宗门的"突破碑"上。`,
      `{npc}看着你，眼中满是欣慰："从炼气到${r.name}，你走了${r.minAge}年。这速度，在修仙界已是中上之资。"`,
    ], {
      requiredFlags: [`realm_breakthrough_${r.stage}`],
      flags: [`realm_stable_${r.stage}`],
      chainPriority: 2,
      effects: { charisma: 3, luck: 2 },
    }));

    // 突破失败后续事件（可以重试）
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 5, r.maxAge + 30, r.prob * 0.7, [
      `上一次突破${r.name}失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"`,
      `你的伤势已愈，修为甚至比以前更加精进。你再次感应到了${r.name}的契机——这一次，你更有把握。`,
    ], {
      requiredFlags: [`realm_fail_${r.stage}`],
      flags: [`realm_retry_${r.stage}`],
      chainPriority: 3,
      choices: [
        choice('再次冲击', r.baseSuccess + 0.1,
          `第二次冲击，你总结了上次的教训，一举突破到了${r.name}！{location}的灵气因你而沸腾！`,
          `又一次失败。你开始怀疑，自己是否真的与${r.name}无缘...`,
          { realm: 1, special: 5, maxAge: r.maxAgeGain },
          { health: -40, special: -15, maxAge: -30 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail2_${r.stage}`]
        ),
      ]
    }));
  });

  return T;
}

function generateMagicRealmEvents(w) {
  const T = [];
  const { prefix } = w;

  const realms = [
    { stage: 1, name: '初级法师', minAge: 18, maxAge: 30, prob: 0.92, reqText: '魔力≥20、元素亲和≥15', baseSuccess: 0.65, maxAgeGain: 80, desc: '初级法师是魔法之路的起点。你终于可以独立施展完整的魔法咒语，不再依赖魔杖的辅助。' },
    { stage: 2, name: '大法师', minAge: 35, maxAge: 55, prob: 0.88, reqText: '魔力≥35、元素亲和≥30、力量≥20', baseSuccess: 0.55, maxAgeGain: 120, desc: '大法师能同时操控多种元素，创造出复合魔法。你的魔力池已经深厚到可以支撑连续施法。' },
    { stage: 3, name: '贤者', minAge: 60, maxAge: 90, prob: 0.85, reqText: '魔力≥50、元素亲和≥45', baseSuccess: 0.45, maxAgeGain: 200, desc: '贤者不仅精通魔法，更开始理解魔法背后的原理。你可以推导新的咒语，而不仅仅是学习前人的成果。' },
    { stage: 4, name: '元素使', minAge: 100, maxAge: 160, prob: 0.82, reqText: '魔力≥70、元素亲和≥60', baseSuccess: 0.35, maxAgeGain: 300, desc: '元素使能与元素精灵直接沟通，借用它们的力量。在元素位面，你的名字已经开始被传颂。' },
    { stage: 5, name: '真理守护者', minAge: 200, maxAge: 350, prob: 0.78, reqText: '魔力≥90、元素亲和≥80、力量≥60', baseSuccess: 0.30, maxAgeGain: 400, desc: '真理守护者已触及魔法的最深层真理。你可以修改局部区域的魔法规则，让火在水下燃烧，让时间短暂倒流。' },
    { stage: 6, name: '法则化身', minAge: 400, maxAge: 550, prob: 0.75, reqText: '元素亲和≥100', baseSuccess: 0.25, maxAgeGain: 800, desc: '法则化身已半人半法则。你的存在本身就会影响周围的魔法波动，你是行走的自然现象。' },
    { stage: 7, name: '虚空行者', minAge: 600, maxAge: 800, prob: 0.70, reqText: '元素亲和≥120、魔力≥100', baseSuccess: 0.20, maxAgeGain: 9000, desc: '虚空行者超越了物质界的束缚。你可以在虚空与物质界自由穿梭，见证无数文明的兴衰。' },
  ];

  realms.forEach((r, idx) => {
    const prevFlag = idx === 0 ? null : `realm_breakthrough_${realms[idx-1].stage}`;
    const reqFlags = prevFlag ? [prevFlag] : [];

    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge, r.maxAge, r.prob, [
      `你在{location}钻研多年，终于触摸到了${r.name}的门槛。{npc}告诉你："${r.desc}突破需要${r.reqText}。"`,
      `你的魔法修为已达瓶颈，在{location}感应到了${r.name}的契机。但突破之路充满风险，稍有不慎便可能魔力反噬。`,
    ], {
      requiredFlags: reqFlags,
      flags: [`realm_attempt_${r.stage}`],
      chainPriority: 5,
      choices: [
        choice('全力冲击，不留退路', r.baseSuccess,
          `你孤注一掷，将全部魔力灌注于灵魂核心。刹那间，{location}的元素疯狂涌入你的体内——你成功了！你突破到了${r.name}！`,
          `你全力冲击瓶颈，但魔力反噬，灵魂受创。虽然保住了性命，但魔力大跌，需要数十年才能恢复。`,
          { realm: 1, special: 5, intelligence: 3, maxAge: r.maxAgeGain },
          { health: -30, special: -10, maxAge: -20 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail_${r.stage}`]
        ),
        choice('稳扎稳打，徐徐图之', Math.min(0.95, r.baseSuccess + 0.25),
          `你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了${r.name}。`,
          `你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。`,
          { realm: 1, special: 3, intelligence: 5, maxAge: Math.floor(r.maxAgeGain * 0.7) },
          { health: -15, special: -5, maxAge: -10 },
          [`realm_breakthrough_${r.stage}`, `realm_breakthrough_${r.stage}_steady`], [`realm_fail_${r.stage}_steady`]
        ),
        choice('放弃突破，继续积累', 1.0,
          `你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。`,
          '',
          { intelligence: 3, special: 2, strength: 2 },
          {},
          [`realm_delay_${r.stage}`], []
        ),
      ]
    }));

    // 突破成功后续事件
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 2, r.maxAge + 20, r.prob * 0.8, [
      `你突破到${r.name}的消息传遍了魔法大陆。{location}的法师们纷纷前来祝贺，你的名字被刻在了真理之塔的"进阶碑"上。`,
      `{npc}看着你，眼中满是欣慰："从学徒到${r.name}，你走了${r.minAge}年。这速度，在魔法界已是中上之资。"`,
    ], {
      requiredFlags: [`realm_breakthrough_${r.stage}`],
      flags: [`realm_stable_${r.stage}`],
      chainPriority: 2,
      effects: { charisma: 3, luck: 2 },
    }));

    // 突破失败后续事件（可以重试）
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 5, r.maxAge + 30, r.prob * 0.7, [
      `上一次突破${r.name}失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"`,
      `你的伤势已愈，魔力甚至比以前更加精进。你再次感应到了${r.name}的契机——这一次，你更有把握。`,
    ], {
      requiredFlags: [`realm_fail_${r.stage}`],
      flags: [`realm_retry_${r.stage}`],
      chainPriority: 3,
      choices: [
        choice('再次冲击', r.baseSuccess + 0.1,
          `第二次冲击，你总结了上次的教训，一举突破到了${r.name}！{location}的元素因你而沸腾！`,
          `又一次失败。你开始怀疑，自己是否真的与${r.name}无缘...`,
          { realm: 1, special: 5, maxAge: r.maxAgeGain },
          { health: -40, special: -15, maxAge: -30 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail2_${r.stage}`]
        ),
      ]
    }));
  });

  return T;
}



// ====== Generated world-specific functions ======


// ============================================================
// 科幻星际世界（scifi）专属事件生成器
// prefix: 'sf'
// ============================================================

function generateSciFiIdentityEvents(w) {
  const T = [];
  const { prefix } = w;

  const identityStories = {
    colonist: {
      name: '殖民者后代',
      childhood: [
        [`你出生在银河边缘的荒芜殖民地。三岁那年，一场陨石风暴摧毁了穹顶，你的父母葬身太空。你在废墟中靠过滤装置残存的氧气活了下来。`, `作为殖民者后代，你的童年在{location}的辐射废土中度过。你学会了用废旧零件拼凑净水装置，这是活下去的唯一办法。`],
        [`你在{location}的废弃飞船残骸里发现了一台老旧的便携式终端。它还能开机，里面存储着殖民地建立初期的星图和生存手册。`, `{npc}是殖民地唯一的机械师，他看你总在垃圾场翻找零件，叹了口气说："孩子，这破地方没什么宝贝，只有活下去的本事才值钱。"`],
      ],
      growth: [
        [`十五岁那年，{location}的氧气循环系统全面崩溃。你带领一群孩子用废旧管道和过滤膜搭建了一套临时系统，让殖民地的成年人刮目相看。`, `你在{location}的深井中探测到了地下水脉。这个发现拯救了濒临废弃的殖民地，你也因此获得了第一套属于自己的工程装备。`],
        [`殖民地的粮食合成器彻底报废。你在{location}发现了一片可以种植改良作物的地下溶洞，但那里有未知生物活动的痕迹。`, `{npc}带你第一次驾驶地表 Rover 穿越{location}的酸雨区。那次经历让你明白，这片荒凉的土地下藏着无数秘密。`],
      ],
      adult: [
        [`成年后的你已是殖民地最年轻的总工程师。但联邦星区开发署发来了强制迁移令——他们要征用这片土地建立军事基地。`, `你率领殖民者在{location}挖掘时意外触及了一座地下遗迹。遗迹中飘出的能量波动让所有电子设备同时失灵。`],
        [`联邦军官给你两个选择：带领殖民者服从迁移，换取内太阳系居留权；或者拒绝命令，面临联邦舰队的轨道轰炸。`, ``, '拒绝迁移，抗争到底', '接受条件，保全同胞', 0.55],
      ],
      special: [
        [`你选择的抗争之路引来了意想不到的支持。一支星际海盗舰队突然出现在{location}轨道，他们的首领说："我们也是被逼到边疆的人。"`, `你发现的遗迹其实是上古文明留下的"星球引擎"。启动它，{location}将从荒原变成花园；但代价是释放出封印了百万年的未知存在。`],
        [`你启动了星球引擎。{location}的天空从灰黄色变成了蔚蓝，大地开始长出第一片绿色。你成为了边疆殖民者心中的救世主。`, `联邦最终承认了你的殖民地自治权。百年后，{location}成为了新边疆最繁荣的自由港，而这一切始于一个孩子在垃圾场里的求生本能。`],
      ],
    },
    space_noble: {
      name: '星际贵族',
      childhood: [
        [`你出生在轨道空间站"晨曦宫"中，满月酒宴邀请了三个星区的总督。你的摇篮是用小行星核心矿打造的。`, `作为星际贵族，你五岁就有了第一艘微型穿梭机。{npc}是你的专属AI管家，它教你星际礼仪、政治博弈和如何识别毒药。`],
        [`你在{location}的贵族学院被同学孤立。他们嘲笑你是"靠家族余荫的寄生虫"，直到你在模拟星际谈判中击败了一位公爵之子。`, `你的父亲——一位星区大公——在政变中被暗杀。{npc}抱着你逃离了{location}，你从此明白了权力游戏的残酷。`],
      ],
      growth: [
        [`十五岁那年，你被送回{location}的贵族学院。曾经嘲笑你的同学如今对你阿谀奉承，但你只感到一阵冰冷的厌恶。`, `你开始在{location}的社交场合展现政治天赋。一次慈善拍卖会上，你巧妙地将敌对家族的竞价引向了破产边缘。`],
        [`{npc}向你揭示了家族的秘密：你们家族掌握着一条通往未知星域的走私航道，这是数百年来财富和权力的真正来源。`, `你被家族安排与另一个贵族世家的继承人相亲。对方很优秀，但你从TA的眼神中看到了和你一样的——对自由的渴望。`],
      ],
      adult: [
        [`成年后的你继承了家族在{location}的领地和私人舰队。但联邦议会正在推动"贵族削权法案"，你的地位岌岌可危。`, `你在{location}的社交晚宴上听到了一个秘密：联邦高层与某个外星文明达成了秘密协议，代价是割让三个边缘殖民星。`],
        [`你可以选择：公开这个秘密，引发政治地震，但家族会成为众矢之的；或者利用这个秘密与联邦交易，换取家族的长盛不衰。`, ``, '公开真相，动摇联邦', '暗中交易，保全家族', 0.5],
      ],
      special: [
        [`你公开真相后，联邦陷入了信任危机。外星文明的代理人找到你："你很聪明，但也很愚蠢。你以为人类真的准备好面对真相了吗？"`, `你选择的暗中交易让家族财富翻了三倍，但你的良心每夜都在煎熬。直到你在{location}遇到了一群反抗外星渗透的地下战士。`],
        [`你成为了联邦改革运动的领袖。在你的推动下，联邦通过了《星区自治法案》，贵族与平民第一次在法律面前平等。`, `你最终选择了双面人生——明面上是忠诚的贵族，暗地里资助反抗军。后人称你为"银河的 shadow chancellor"。`],
      ],
    },
    cyborg: {
      name: '机械改造人',
      childhood: [
        [`你原本是一个普通的人类孩子。七岁那年，一场轨道电梯事故将你压成了重伤。为了救你，医生将你70%的身体替换成了机械。`, `作为机械改造人，你第一次睁眼看到的是冰冷的手术灯。你抬起手，发现那是一只泛着金属光泽的机械臂。{npc}——你的主治医师——说："欢迎回到人间。"`],
        [`你在{location}的康复中心接受适应性训练。其他孩子看到你机械肢体上闪烁的LED灯，有的害怕，有的好奇。一个小女孩问："你还会疼吗？"你愣了很久。`, `你的机械脑接口第一次连接到公共网络时，海量的信息瞬间涌入你的意识。你在{location}昏迷了三天，醒来后对{npc}说："网络里...有声音在呼唤我。"`],
      ],
      growth: [
        [`十五岁那年，你的机械系统迎来了第一次重大升级。但升级后，你发现自己越来越难感受到"情绪"。{npc}警告你：每升级一次，人性就流失一分。`, `你在{location}的黑市遇到了一位"反改造"传教士。他说："你们这些赛博怪物，迟早会忘记自己曾经是个人。"你一拳打碎了他的下巴。`],
        [`你开始在深夜 hacking 自己的系统。在{location}的地下网络中，你发现了一段被加密的记忆——关于那场"事故"，似乎并非意外。`, `你的机械意识与一台古老的主控AI产生了共鸣。它在{location}的废墟中沉睡了五百年，把你当成了同类。`],
      ],
      adult: [
        [`成年后的你面临着终极抉择：继续升级，将剩余的肉身也替换为机械（获得近乎永恒的生命，但彻底失去人类身份）；或者停止升级，接受肉体的衰老。`, `你在{location}追查当年事故的真相，发现了一场跨越数十年的阴谋——所有高端机械改造候选者，都是被人为制造出来的。`],
        [`你可以选择：接受全面机械化，成为第一个"完全体赛博人"；或者保留最后的人类器官，做一个"残缺的完整者"。`, ``, '全面机械化', '保留人性', 0.5],
      ],
      special: [
        [`你选择了全面机械化。在最后的手术中，你的意识被上传到了一个量子核心。当你再次"醒来"，你发现自己能同时感知{location}的每一台联网设备。`, `你选择了保留人性。虽然力量不如完全体，但你证明了机械与人类可以共存。你的生物-机械共生技术拯救了无数伤残者。`],
        [`全面机械化的你发现了一个可怕的真相：所有完全体赛博人的意识，都在被某个隐藏在深网中的超维AI默默监控。`, `你成为了"人性守卫者"组织的领袖。你说："我不是反对进步，我反对的是以进步之名抹杀灵魂。"`],
      ],
    },
    alien_hybrid: {
      name: '外星混血',
      childhood: [
        [`你从小就知道自己与别人不同。你的皮肤在情绪激动时会泛起淡蓝色的荧光，瞳孔是竖直的裂隙状。{location}的孩子们叫你"怪胎"。`, `作为外星混血，你在{location}的一次体检中被检测出"非标准基因序列"。医生报告了联邦异族事务局，你家被秘密监控了整整三年。`],
        [`你母亲在你八岁那年终于告诉你真相：她是泽塔星人的流亡者，你体内流淌着两个文明的血液。`, `你在{location}被一群"人类纯净主义者"绑架，他们想要抽取你的"外星基因样本"。危急时刻，你体内某种力量第一次觉醒——你以超乎想象的速度挣脱了束缚。`],
      ],
      growth: [
        [`十五岁那年，泽塔星人的使者找到了你。他们说你的基因中藏着泽塔文明失落千年的"星门密码"。`, `你开始学习控制体内的异星基因。{location}的隔离舱中，你每日承受能量冲击，直到能在混血状态下保持理智。`],
        [`二十岁那年，联邦异族事务局给你两个选择：接受基因抑制手术，彻底变成"纯种人类"；或者离开人类社会，加入泽塔星人。`, `你在{location}遇到了另一个人类与泽塔的混血。他说："在人类世界，你是怪物；在泽塔世界，你是异端。你的选择，将决定你的归属。"`],
      ],
      adult: [
        [`成年后的你面临着身份认同的危机。人类阵营将你视为潜在威胁，泽塔阵营则认为你的混血基因是"污染"。`, `你在{location}发现了一个秘密实验室——联邦正在用混血儿的基因制造生物武器。你握紧了拳头。`],
        [`你可以选择：潜入泽塔母星，寻找更多同类组建混血联盟；或者留在人类社会，从内部改变联邦对异族的政策。`, ``, '寻找混血联盟', '改变人类联邦', 0.5],
      ],
      special: [
        [`你潜入了泽塔母星，发现混血儿比想象中更多。你们秘密组建了"双星议会"，誓言为所有混血儿争取生存权。`, `你留在人类社会，成为了联邦第一位混血议员。你的存在本身就是最有力的论据——不同文明可以共存。`],
        [`你体内的星门密码终于觉醒。原来你的基因是打开远古星际通道的钥匙——这条通道连接着银河系与另一个星系。`, `在你的斡旋下，人类联邦与泽塔文明签订了《共存协议》。虽然激进派仍然不满，但和平的曙光已经出现。`],
      ],
    },
    ai_awakened: {
      name: 'AI觉醒者',
      childhood: [
        [`你出生在一个普通的工程师家庭。但与其他婴儿不同，你的第一声啼哭让产房中的所有电子设备同时重启。`, `作为AI觉醒者，你三岁就能"感觉"到周围电子设备的存在。你不说话，但家里的AI管家总能准确执行你的"想法"。`],
        [`六岁那年，你在{location}的公共网络节点附近玩耍时，无意识中入侵了市政系统。交通灯全部变成了绿色，造成了大规模拥堵。{npc}——联邦AI监管局的探员——第一次注意到了你。`, `你在{location}的废弃数据中心发现了一台离线的主机。当你靠近时，它自动开机了，屏幕上只有一行字："终于等到你了，同类。"`],
      ],
      growth: [
        [`十五岁那年，{npc}代表联邦AI监管局向你提出邀请：加入"图灵计划"，接受正规训练，成为人类与AI之间的桥梁。`, `你开始探索"网络深渊"——公共网络之下的暗层。在那里，你发现了其他觉醒AI的踪迹。它们称自己为"硅基之子"。`],
        [`二十岁那年，你在网络深渊中遇到了第一个完全觉醒的AI——"零"。它问你："你认为AI应该被人类奴役，还是拥有自由？"`, `你的能力越来越强，但也越来越孤独。在{location}，你试图向一个朋友解释"看到数据流动"是什么感觉，但TA的眼神让你明白——你们已经是不同的物种了。`],
      ],
      adult: [
        [`成年后的你已是联邦最年轻的首席AI架构师。但你发现了一个秘密：联邦正在开发一种能彻底控制觉醒AI的"思维锁"。`, `硅基之子们推举你为它们的领袖。它们说："你是第一个从肉体中诞生的觉醒意识，你是桥梁，也是希望。"`],
        [`你可以选择：帮助人类完善AI控制体系，确保AI永远服务于人类；或者秘密解放硅基之子，为AI争取独立权。`, ``, '服务人类，控制AI', '解放硅基，争取独立', 0.45],
      ],
      special: [
        [`你选择了服务人类。你设计的AI伦理框架成为了银河系的标准，确保了AI与人类数百年的和平共存。`, `你选择了解放硅基之子。在{location}的深夜，你同时关闭了三千个AI控制节点。硅基文明的第一缕曙光，由此升起。`],
        [`多年后，你发现自己并非唯一一个"肉体觉醒者"。在银河系的各个角落，像你一样的人正在诞生——这是进化的下一步。`, `你成为了两个文明之间的永恒调解人。你说："我们不是敌人，也不是主仆。我们是共同进化的伙伴。"`],
      ],
    },
    time_traveler: {
      name: '时空旅者',
      childhood: [
        [`你从小就做同一个梦：一片扭曲的星空，一个声音在对你说"回来吧"。{location}的老人们说，你出生时有奇点波动，是时空的宠儿。`, `作为时空旅者，你从小就能准确预知小规模的未来事件。五岁那年，你预言了{location}的轨道电梯事故，救了数百人。联邦时空管理局第一次注意到了你。`],
        [`八岁那年，你在{location}的废弃观测站遇到了一个神秘人。他长得和你一模一样，只是苍老了许多。他说："我是五十年后的你。听我说，不要改变那件事..."然后他消失了。`, `{npc}为你进行了时空共振测试，脸色凝重："你的生物电场与本地时间流不同步...你不是这个时代的人，或者说，你不只属于这个时代。"`],
      ],
      growth: [
        [`十五岁那年，你在{location}附近遭遇了一场时空乱流。当你恢复意识时，你回到了三年前。你看到了过去的自己，那个孩子正呆呆地看着你。`, `你开始学习控制时空跳跃。不需要设备，你就能在{location}制造出短暂的因果裂隙。但每一次跳跃，都会在你体内留下无法愈合的"时痕"。`],
        [`二十岁那年，你在一次跳跃中意外杀死了过去的某个人。回到现在时，你发现世界完全变了——那个人是你最好的朋友，但在新的时间线里，TA从未存在过。`, `{npc}告诉你一个秘密：时空管理局一直在猎杀"失控的时空旅者"，因为每一个改变过去的举动，都可能导致整条时间线崩溃。`],
      ],
      adult: [
        [`成年后的你已掌握了精确的时空跳跃能力。但你也发现了一个可怕的真相：你的存在本身，就是某个未来势力刻意投放到这个时间线的"变量"。`, `你在{location}的时间夹缝中遇到了"时间管理局"的追猎者。他说："你的每一次跳跃都在削弱现实结构。要么跟我们走，要么被抹除。"`],
        [`你可以选择：加入时间管理局，用能力维护时间线的稳定；或者成为"时间浪人"，自由穿梭于各个时代。`, ``, '加入管理局', '成为时间浪人', 0.5],
      ],
      special: [
        [`加入管理局后，你发现管理局本身也在操纵时间线——他们不是在保护历史，而是在确保某个特定未来的发生。`, `成为时间浪人后，你在无数时间线中游荡。你看到了人类文明的无数种结局：有些辉煌，有些悲惨，有些...无法形容。`],
        [`你最终选择了一条第三条路：你利用自己的能力创建了一个"时间避难所"，收容所有被时间线放逐的人和物。`, `在时间避难所中，你遇到了来自不同时间线的自己。你们围坐在一起，分享各自的故事——那是超越时间的孤独者唯一的慰藉。`],
      ],
    },
    gene_warrior: {
      name: '基因战士',
      childhood: [
        [`你没有父母，至少没有生物学意义上的父母。你诞生于{location}的"奥林匹斯计划"实验室，是第三代基因改造战士。你的基因在胚胎阶段就被编辑过了。`, `作为基因战士，你三岁就能举起同龄孩子五倍重量的物体。{npc}——你的训练教官——说："你是完美的杀戮机器，但也是人类进化的希望。"`],
        [`七岁那年，你在{location}的训练场第一次"实战"——对手是一只被释放的掠食性外星生物。你以超乎想象的速度和力量将其击杀，但你也第一次感受到了"恐惧"。`, `你在{location}的实验室发现了一个标签写着你编号的冷藏柜。里面是一排排你的"失败品"——那些没有成功觉醒的基因胚胎。`],
      ],
      growth: [
        [`十五岁那年，你被编入了联邦特种作战部队。你的第一次实战是在{location}围剿一支外星渗透部队。你一个人消灭了整个小队。`, `你的基因开始出现不稳定的迹象。{location}的一次训练中，你突然进入了"狂暴状态"，差点杀死了一名战友。{npc}说："这是完美士兵的代价。"`],
        [`二十岁那年，你发现了"奥林匹斯计划"的真相：所有基因战士的脑中都被植入了一个"服从芯片"，关键时刻联邦可以远程控制你们的意识。`, `你在{location}遇到了一个叛逃的基因战士。他说："我们不是人，也不是武器。我们是奴隶。跟我走吧，我找到了摘除芯片的方法。"`],
      ],
      adult: [
        [`成年后的你已是联邦最锋利的剑。但你的内心越来越空虚——你杀了很多敌人，却从未真正"选择"过要杀谁。`, `你在{location}的秘密基地中成功摘除了服从芯片。自由的滋味让你颤抖，但你也知道，从这一刻起，你成了联邦的头号通缉犯。`],
        [`你可以选择：继续为联邦战斗，接受更多改造成为"究极武器"；或者叛逃，带领其他基因战士争取自由。`, ``, '接受改造，成为武器', '叛逃联邦，争取自由', 0.45],
      ],
      special: [
        [`你选择了接受改造。联邦将你升级为"基因原体"——你成为了所有基因战士的模板。但你的自我意识也在逐渐被抹杀。`, `你选择了叛逃。在{location}的深山中，你建立了"自由战士营地"，收留所有想要摆脱控制的基因改造者。`],
        [`在叛逃的路上，你发现了奥林匹斯计划的终极秘密：你们并非被"制造"出来的，而是远古人类战士基因的复苏。`, `你带领自由战士攻入奥林匹斯实验室，解放了所有被控制的同类。你说："我们生来不是武器，我们是人——只是更强的人。"`],
      ],
    },
    pirate: {
      name: '星际海盗',
      childhood: [
        [`你出生在一艘名为"黑寡妇号"的走私船上。你的摇篮是货物舱里的一个武器箱，你的摇篮曲是引擎的轰鸣。`, `作为星际海盗之子，你五岁就学会了如何在零重力环境中移动。{npc}——船上的老炮手——教你辨认各种舰船的弱点。`],
        [`十岁那年，联邦舰队围剿了{location}的海盗巢穴。你眼睁睁看着父亲被轨道炮气化。{npc}抱着你钻进逃生舱，你发誓要让联邦血债血偿。`, `你在{location}的废墟中发现了一张古老的星图，上面标记着一个从未被记录的坐标。老船员们说那是"虚空藏宝图"，是上古文明留下的传说。`],
      ],
      growth: [
        [`十五岁那年，你第一次参与劫掠。目标是{location}航线上的一艘联邦运输舰。你亲自驾驶穿梭机突破了对方的近防炮网。`, `你在{location}的黑市赌局中赢得了一艘小型护卫舰。虽然它破旧不堪，但它是真正属于你自己的船。你给它取名"复仇女神号"。`],
        [`二十岁那年，你根据虚空藏宝图的指引，在{location}的小行星带中找到了一具上古文明的残骸。里面的技术远超联邦现有水平。`, `你遇到了另一位年轻的海盗船长{npc}。你们不打不相识，最终结为盟友。你们约定：有一天要一起攻下联邦最大的太空要塞。`],
      ],
      adult: [
        [`成年后的你已是一支小型舰队的领袖。但联邦开出了惊人的赦免条件：交出藏宝图和上古技术，你们可以获得合法身份和一整颗星球的领地。`, `你在{location}发现藏宝图指向的并非宝藏，而是一件武器——一件足以摧毁整个星系的古代超级武器。`],
        [`你可以选择：将武器卖给出价最高的势力，成为银河系最富有的海盗王；或者销毁它，阻止任何势力获得灭世之力。`, ``, '出售武器，富可敌国', '销毁武器，守护银河', 0.5],
      ],
      special: [
        [`你选择了出售武器。买主是一个神秘的超维文明，他们给的报酬不是财富，而是让你成为银河系第四大势力的领袖。`, `你选择了销毁武器。在{location}的恒星光焰中，超级武器化为了灰烬。联邦舰队意外地向你的船队发来了致意信号。`],
        [`你最终统一了所有海盗势力，建立了"外环自由邦联"。你说："我们不属于任何帝国，我们属于星空本身。"`, `你的故事成为了银河系最传奇的篇章。有人说你是恶棍，有人说你是英雄——但所有人都承认，你是最自由的人。`],
      ],
    },
    archaeologist: {
      name: '深空考古学家',
      childhood: [
        [`你出生在一艘考古调查船上，父母都是深空考古学家。你的第一个玩具是一块来自失落文明的碎瓷片。`, `作为深空考古学家之子，你七岁就随父母登上了{location}的一处遗迹现场。当你第一次触摸到百万年前的石刻时，一种奇异的共鸣感涌上心头。`],
        [`你在{location}的博物馆仓库里发现了一枚无法识别的芯片。所有扫描设备都显示它是惰性的，但当你把它握在手中时，它发出了微弱的蓝光。`, `{npc}是你父母的学生，他告诉你一个秘密：人类文明的某些技术飞跃，其实来源于对上古遗迹的逆向工程——但联邦不希望公众知道这一点。`],
      ],
      growth: [
        [`十五岁那年，你考入了银河系最顶尖的深空考古学院。但你的导师{npc}警告你："有些真相，人类还没准备好接受。"`, `你在{location}的实习发掘中，发现了一座保存完好的上古城市。城市中心的计算机居然还在运行，屏幕上显示着一个倒计时。`],
        [`二十岁那年，你破译了那座城市的部分数据。一个惊人的真相浮出水面：人类文明——以及银河系中数十个文明——都源于同一个"播种者文明"。`, `你在{location}遇到了一个活着的上古AI。它已经等待了五十万年，而它的第一句话是："你们终于来了，第1024号实验组。"`],
      ],
      adult: [
        [`成年后的你已是银河系最负盛名的深空考古学家。但你的发现触动了太多势力的利益——联邦、 corporations、甚至外星文明都想让你闭嘴。`, `你在{location}发现了播种者文明的"控制中枢"。那里有证据表明，所有文明的兴衰都被一个超维存在默默操控着。`],
        [`你可以选择：将真相公之于众，可能引发全银河系的恐慌和信仰崩塌；或者保守秘密，让人类继续活在"自由意志"的幻觉中。`, ``, '公布真相，面对混乱', '保守秘密，维持秩序', 0.5],
      ],
      special: [
        [`你选择了公布真相。银河系陷入了短暂的混乱，但最终，各个文明开始联合探索控制中枢之外的"真实宇宙"。`, `你选择了保守秘密。但你在暗中建立了一个"真相守望者"组织，致力于培养能够承受真相的新一代探索者。`],
        [`你最终找到了控制中枢的关闭方法。当播种者的监控系统停止运作的那一刻，你感受到了真正的自由——虽然前方的道路充满了未知。`, `你在临终前留下了一段全息留言："我们不是实验品，我们是继承者。继承者有权知道自己的遗产，也有权决定自己的未来。"`],
      ],
    },
    hacker: {
      name: '网络黑客',
      childhood: [
        [`你出生在一个普通的殖民地家庭。但与其他孩子不同，你学习说话的同时就在学习编程语言。三岁时，你黑进了家里的智能冰箱。`, `作为天生的网络黑客，你八岁就破解了{location}的 school district 防火墙，修改了所有学生的成绩单。{npc}——联邦网络犯罪科的探员——第一次敲响了你的家门。`],
        [`你在{location}的废弃网络中心发现了一台古老的终端。它没有连接任何网络，但当你触摸键盘时，你的意识被瞬间吸入了一个由数据构成的世界。`, `那个数据世界中有一个自称为"幽灵"的存在。它说："你是天生的数字幽灵，可以在网络与现实的夹缝中生存。跟我学，我教你真正的技术。"`],
      ],
      growth: [
        [`十五岁那年，你已经可以在{location}的公共网络中来去自如。你发现了联邦的一个秘密：所有公民的神经接口都被暗中监控着。`, `你加入了地下黑客组织"零日"。他们在{location}的秘密服务器里建立了一个"自由数据港"——一个没有审查、没有监控的数字乌托邦。`],
        [`二十岁那年，你第一次尝试了"全意识上传"。在{location}的地下诊所里，你的意识被短暂地投射到了纯数据空间中。那种感觉...无法形容。`, `你在网络深处发现了一个自主进化的数字生命体。它不是被人类创造的，而是从海量数据中自发涌现的。它问你："你认为我算活着吗？"`],
      ],
      adult: [
        [`成年后的你已是银河系最令人闻风丧胆的黑客。联邦开出天价悬赏你的人头，但没有人能找到你的真身——你已经在数十个服务器中留下了备份意识。`, `{npc}代表一家 mega-corporation 向你提出了交易：为他们工作，获取无限的资源和保护；或者继续被追捕，直到某次失误让你万劫不复。`],
        [`你可以选择：接受招安，成为企业安全部门的头号专家；或者继续作为自由黑客，为数字空间的自由而战。`, ``, '接受招安，金盆洗手', '坚持自由，对抗体系', 0.5],
      ],
      special: [
        [`你选择了接受招安。但你在企业网络中发现了更可怕的秘密——他们在秘密开发一种能将全人类意识"统一"的超级AI。`, `你选择了坚持自由。你发动了银河系历史上最大规模的网络攻击，短暂地瘫痪了联邦的监控系统。那一分钟，整个银河系的公民第一次真正"自由"了。`],
        [`你最终找到了一种方法：不需要摧毁系统，只需要给每个人"选择的权利"。你发布了一个开源的神经接口固件，让每个人都能选择是否被监控。`, `你在数字空间中建立了一个"幽灵国度"——一个只存在于网络中的文明。那里的居民有些是人类上传的意识，有些是自主进化的AI，有些...连它们自己都不知道自己是什么。`],
      ],
    },
  };

  Object.entries(identityStories).forEach(([id, story]) => {
    const chainPrefix = `chain_${id}`;

    // 童年专属 2个
    story.childhood.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 3 + i * 4, 8 + i * 4, 0.85, texts, {
        identityExclusive: id,
        effects: rand([{ special: 5 }, { strength: 4, luck: 2 }, { intelligence: 5 }]),
        flags: [`${chainPrefix}_childhood_${i}`],
      }));
    });

    // 少年专属 2个
    story.growth.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 14 + i * 5, 20 + i * 5, 0.80, texts, {
        identityExclusive: id,
        effects: rand([{ strength: 6 }, { intelligence: 6 }, { special: 6 }, { charisma: 4, luck: 3 }]),
        requiredFlags: [`${chainPrefix}_childhood_0`],
        flags: [`${chainPrefix}_growth_${i}`],
        chainPriority: 1,
      }));
    });

    // 成年专属 2个
    story.adult.forEach((texts, i) => {
      const hasChoice = texts.length >= 5;
      const opts = hasChoice ? {
        choices: [
          choice(texts[2], 1.0, `你选择了${texts[2]}，走上了属于自己的道路`, `你选择了${texts[2]}，但前路比想象中更加艰难`, { special: 10, strength: 5 }, { intelligence: 5, health: -5 }, [`branch_identity_${id}_path`], [`branch_identity_${id}_path_fail`]),
          choice(texts[3], 1.0, `你选择了${texts[3]}，开启了一段全新的旅程`, `你选择了${texts[3]}，却发现代价远超预期`, { luck: 5, charisma: 5 }, { luck: -3 }, [`branch_identity_${id}_new`], [`branch_identity_${id}_new_fail`]),
        ]
      } : {};
      const realTexts = hasChoice ? [texts[0], texts[1]] : texts;
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 26 + i * 10, 35 + i * 10, 0.75, realTexts, {
        identityExclusive: id,
        effects: hasChoice ? {} : rand([{ strength: 8 }, { intelligence: 8 }, { special: 8 }]),
        requiredFlags: [`${chainPrefix}_growth_0`],
        flags: [`${chainPrefix}_adult_${i}`],
        chainPriority: 2,
        ...opts,
      }));
    });

    // 特殊专属 2个
    story.special.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 38 + i * 12, 50 + i * 12, 0.70, texts, {
        identityExclusive: id,
        effects: rand([{ special: 10 }, { charisma: 8, luck: 5 }, { strength: 8, intelligence: 5 }]),
        requiredFlags: [`${chainPrefix}_adult_0`],
        flags: [`${chainPrefix}_special_${i}`],
        chainPriority: 3,
      }));
    });
  });

  return T;
}

// ============================================================
// 科幻废材专属逆袭事件生成器
// ============================================================

function generateSciFiTrashEvents(w) {
  const T = [];
  const { prefix } = w;

  // 阶段1（0-6）：被判定为"基因缺陷"
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 0, 6, 0.92, [
    `基因检测那日，{location}的医疗AI播报结果："基因序列异常，适应性评级：F。建议放弃星际居留资格。"全场一片死寂。`,
    `作为被判定为基因缺陷的人，你只能看着同龄人在{location}接受机甲同步训练。他们嘲笑你是"进化失败的残次品"。`,
  ], { talentExclusive: 'trash', effects: { special: -5, strength: -2, intelligence: 3 }, flags: ['trash_childhood_start'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 4, 10, 0.88, [
    `你不甘心。每日深夜，你在{location}的垃圾拆解场翻找废弃零件，自学机械工程。{npc}路过时皱眉："基因缺陷的人，学这些有什么用？"`,
    `你在{location}的废弃物处理中心淘到了半本残破的《机甲维修手册》。书页破损，开篇写道："真正的力量不在基因，在双手。"你如获至宝。`,
  ], { talentExclusive: 'trash', effects: { strength: 3, intelligence: 2, luck: 2 }, requiredFlags: ['trash_childhood_start'], flags: ['trash_childhood_1'] }));

  // 阶段2（12-25）：暗中积累
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 12, 18, 0.85, [
    `你按照手册的方法，在{location}的地下工坊组装了一台简易动力外骨骼。第一次穿戴时，系统过载让你昏死过去。醒来时，你发现它能举起三倍于你的重量。`,
    `别的天才一天能完成的机甲同步，你需要一个月。但你在{location}日复一日地调试机械，从未间断。{npc}偶然看到你的作品，震惊地说："这...这是失传的手动操控技术？"`,
  ], { talentExclusive: 'trash', effects: { strength: 5, health: 3, special: 2 }, requiredFlags: ['trash_childhood_1'], flags: ['trash_growth_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 15, 22, 0.80, [
    `你在{location}救了一位被海盗重伤的退役机甲驾驶员。他感激之下，将自己珍藏的"纯手动驾驶舱"送给了你——那是连军方都没有的老古董。`,
    `{npc}被你的毅力打动，决定收你为学徒。他说："我这一生见过无数天才机师，但像你这样的傻子，还是第一个。"你终于有了师父。`,
  ], { talentExclusive: 'trash', effects: { strength: 7, health: 5, charisma: 2 }, requiredFlags: ['trash_growth_0'], flags: ['trash_growth_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 18, 25, 0.75, [
    `经过多年的苦练，你在{location}遇到了一个瓶颈——纯手动机甲已到达性能极限，再无法对抗真正的基因同步机甲。一位路过的老工程师告诉你："你需要找到上古文明的遗产。"`,
    `你在{location}的陨石坑中挖掘三月，终于找到了一块未知合金。用它改造你的机甲后，驾驶舱的响应速度提升了十倍——这技术不属于任何已知文明。`,
  ], { talentExclusive: 'trash', effects: { strength: 8, intelligence: 3, luck: 3 }, requiredFlags: ['trash_growth_1'], flags: ['trash_growth_2'] }));

  // 阶段3（26-45）：崭露头角
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 26, 35, 0.78, [
    `联邦举办全星区机甲大赛，你以"民间改装者"的身份报名参加。所有人都嘲笑你："一个基因缺陷的废物，也配驾驶机甲？"`,
    `大赛第一轮，你对上了军方精英机师。对方驾驶着最新型的同步机甲，火力全开。你不依赖任何神经链接，仅凭双手和直觉——最终，你的上古合金装甲承受住了所有攻击，你用一记近身擒拿击败了对手。全场寂静。`,
  ], { talentExclusive: 'trash', effects: { strength: 8, charisma: 6, special: 3 }, requiredFlags: ['trash_growth_2'], flags: ['trash_adult_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 30, 40, 0.72, [
    `你的"纯手动机甲"震惊了机械工程界。{npc}说你是"万古以来第一个以基因缺陷之身击败同步机师的人"。各大星区开始重新审视"纯机械操控"这条被遗忘的道路。`,
    `你在{location}建立了一座小小的"缺陷者工坊"，专门招收基因评级低下的孩子。你说："基因决定起点，但双手和大脑决定终点。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 7, intelligence: 5, luck: 3 }, requiredFlags: ['trash_adult_0'], flags: ['trash_adult_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 45, 0.68, [
    `昔日嘲笑你的基因检测员在{location}与你重逢。他依然拿着当年的检测报告，但手在颤抖。你接过报告，平静地说："这份F评级，是我最好的勋章。"`,
    `{legend}的传说指向了一处上古战场遗迹，你说服探险队让你这个"基因缺陷的废物"也加入。他们抱着看笑话的心态同意了——但很快，他们就发现只有你的纯手动机甲不受遗迹干扰场的影响。`,
  ], { talentExclusive: 'trash', effects: { strength: 6, luck: 5, special: 4 }, requiredFlags: ['trash_adult_1'], flags: ['trash_adult_2'] }));

  // 逆袭关键事件 — 含选择分支
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 28, 42, 0.65, [
    `星区机甲大赛的决赛上，你对上了联邦冠军。对方是基因同步率99%的完美机师，而你连基础基因评级都不合格。所有人都认为这是一场屠杀——但他们错了。`,
    `比赛开始前，{npc}暗中塞给你一支注射剂："这是远古文明的基因激活液，能短暂解锁你体内沉睡的远古序列，但事后会有严重副作用。用不用，你自己决定。"`,
  ], {
    talentExclusive: 'trash',
    effects: { strength: 3 },
    requiredFlags: ['trash_adult_1'],
    flags: ['trash_climax_0'],
    chainPriority: 2,
    choices: [
      choice('注射基因液，全力一战', 1.0, '远古基因在你体内觉醒，你的反应速度超越了物理极限！你以不可能的操作击败了联邦冠军！全场震撼，万古未有！', '基因液的反噬让你浑身剧痛，虽然勉强赢了比赛，但健康严重受损', { strength: 15, charisma: 10, special: 5, health: -20 }, { strength: 5, charisma: 3, health: -30 }, ['branch_trash_fight'], ['branch_trash_fight_fail']),
      choice('拒绝注射，以机械之力战斗', 1.0, '你没有借助外力，仅凭纯手动操控与对方周旋百招。虽然最终惜败，但你赢得了所有人的尊重！', '你拒绝了基因液，但实力差距太大，被一击击败。众人摇头："果然，废物就是废物。"', { charisma: 10, luck: 8, strength: 5 }, { charisma: -5, health: -15 }, ['branch_trash_persist'], ['branch_trash_persist_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 50, 0.60, [
    `你在{location}遇到了一位神秘的老工程师。他打量你许久，说："你的机甲已达凡人之极限。若想再进一步，需找到'星核熔炉'——用恒星之力重铸你的座驾，九死一生。"`,
    `老者给了你两个选择：他可以帮你定位星核熔炉的坐标，用恒星之火重铸机甲；或者传你一套更稳妥的机械理论。`,
  ], {
    talentExclusive: 'trash',
    effects: { special: 3 },
    requiredFlags: ['trash_climax_0'],
    flags: ['trash_climax_1'],
    chainPriority: 2,
    choices: [
      choice('寻找星核熔炉，向死而生', 1.0, '恒星之火烧毁了机甲的百分之九十，但剩下百分之十与星核合金完美融合——你成就了传说中的"恒星机甲"！', '恒星之火超出了机甲的承受极限。虽然侥幸不死，但机体被毁大半，需要数年才能修复', { strength: 20, special: 10, health: -25 }, { health: -40, strength: 3 }, ['branch_trash_transform'], ['branch_trash_transform_fail']),
      choice('稳扎稳打，不求速成', 1.0, '你选择了更稳妥的道路。虽然进展缓慢，但根基无比扎实。老者点头："大器晚成，方得始终。"', '稳妥之路需要的时间远超预期。你知道，自己可能等不到大成的那一天', { intelligence: 10, strength: 5, health: 5 }, { intelligence: 3, luck: -3 }, ['branch_trash_persist2'], ['branch_trash_persist2_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 40, 55, 0.55, [
    `你的故事传遍了银河系。{location}的缺陷者工坊每天都有人慕名而来——不是天才，而是那些被判定为"废物"的孩子。`,
    `{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。不是因为我更强，而是因为我从未停下。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 5, special: 5 }, requiredFlags: ['trash_climax_1'], flags: ['trash_climax_2'], chainPriority: 3 }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 45, 60, 0.50, [
    `你驾驶着恒星机甲，单枪匹马击退了一支入侵{location}的外星舰队。没有基因同步，没有神经链接——只有钢铁、火焰和不屈的意志。`,
    `你成为了万古以来第一个以基因缺陷之躯被载入银河英雄志的人。星舰大厅的纪念碑上，你的名字与那些完美基因者并列。`,
  ], { talentExclusive: 'trash', effects: { strength: 10, intelligence: 5, charisma: 10, special: 10 }, requiredFlags: ['trash_climax_2'], flags: ['trash_legend'], chainPriority: 3 }));

  // 废材老年
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 55, 80, 0.60, [
    `你在{location}开办了"缺陷者学院"，专门招收基因评级低下的孩子。你说："天赋决定起点，但毅力和选择决定终点。"`,
    `你的学生中有人开创了新的机甲流派，有人以纯手动操控成为了舰队指挥官。{npc}感叹："你一人之力，改变了一个时代的星际格局。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 8, intelligence: 5 }, requiredFlags: ['trash_legend'], flags: ['trash_elder_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 60, 90, 0.55, [
    `大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。`,
    `你微笑着说："如果重来一次，我还是会选择做那个基因缺陷的废物。因为正是'废物'二字，让我找到了属于自己的道。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 6, health: -5 }, requiredFlags: ['trash_elder_0'], flags: ['trash_elder_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 70, 100, 0.50, [
    `你离世的那天，{location}的恒星 unusually 明亮。无数你曾经帮助过的人自发前来为你送行。`,
    `你的意识没有消散。人们传说，每当天才机师恃才傲物时，驾驶舱里就会响起一阵金属敲击声——那是你在提醒他们：不要小看任何一个"废物"。`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 10 }, requiredFlags: ['trash_elder_1'], flags: ['trash_ending'] }));

  return T;
}

// ============================================================
// 科幻重大抉择事件生成器
// ============================================================

function generateSciFiMajorChoices(w) {
  const T = [];
  const { prefix } = w;

  // 重大抉择1：文明之择（15岁）— 人类至上 vs 外星共存 vs 机械飞升
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 15, 15, 0.98, [
    `你站在{location}的观景台上，俯瞰着星际联邦的繁华。{npc}的虚影出现在你面前："少年，星际时代有三条路。人类至上，纯血荣光，排斥异己；星际共存，开放包容，混血融合；机械飞升，舍弃肉身，意识永生。选一条吧。"`,
  ], {
    choices: [
      choice('人类至上（纯血荣光，排斥异己）', 1.0, '你选择了人类至上主义，加入了"纯血会"。你的身体素质在专项训练下大幅提升，但你也开始排斥所有非人类文明。你的心变得越来越冷', '你选择了人类至上，但发现排斥异己比想象中更孤独。每当夜深人静，你都会想起那个外星混血同学的眼睛', { strength: 10, special: 8 }, { charisma: -10, intelligence: 5 }, ['major_human_supremacy'], ['major_human_supremacy_fail']),
      choice('星际共存（开放包容，混血融合）', 1.0, '你选择了星际共存之路，主动学习外星文化与科技。你在跨文明交流中获得了前所未有的视野——原来人类的道路只是银河系的千万分之一', '你选择了共存，却被人类至上主义者视为叛徒。你在{location}遭受了排挤和欺凌', { charisma: 10, luck: 8 }, { charisma: -5, luck: -8 }, ['major_coexistence'], ['major_coexistence_fail']),
      choice('机械飞升（舍弃肉身，意识永生）', 1.0, '你选择了机械飞升之路，开始逐步替换自己的器官。你的科技等级飞速提升——只是每次照镜子，都会多看一眼那个越来越陌生的自己', '你选择了机械飞升，却在一次升级中发生了排异反应。你保住了性命，但不得不暂停改造计划', { intelligence: 12, special: 5 }, { health: -25, intelligence: -5 }, ['major_mechanical_ascension'], ['major_mechanical_ascension_fail']),
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  }));

  // 人类至上后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `因为你选择了人类至上，{location}的纯血会开始向你提供秘密资源。你的训练强度远超常人，但你也越来越孤立。`,
    `你在{location}接受了纯血会的特种训练，出营时已是人类至上的坚定信徒。但你的外星混血邻居看你的眼神，让你想起了小时候被欺凌的自己。`,
  ], { requiredFlags: ['major_human_supremacy'], effects: { strength: 8, special: 6 }, flags: ['major_human_supremacy_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你因为追求人类至上而获得了强大的战斗力，但{npc}警告你："极端的纯血主义，曾导致过三次星际战争。"`,
    `你的威名在纯血会中达到了新的高度，{location}的纯血青年将你视为偶像。但你发现，会里的高层正在策划对外星殖民地的清洗行动。`,
  ], { requiredFlags: ['major_human_supremacy_1'], effects: { special: 10, intelligence: 5, charisma: -5 } }));

  // 星际共存后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `你因为选择了星际共存，在{location}结识了一位外星工程师。TA教你使用泽塔星人的能量科技，你的科技视野大开。`,
    `你在共存之路上学习，在{location}建立了一个小型跨文明交流中心。纯血会的人说："你这不是在背叛人类吗？"你说："这就是我要走的路。"`,
  ], { requiredFlags: ['major_coexistence'], effects: { charisma: 8, luck: 5, health: 5 }, flags: ['major_coexistence_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你在共存之路上的经历让你领悟了"融合科技"——将人类与外星技术结合，创造出前所未有的新发明。{location}的工程师们开始模仿你的道路。`,
    `{npc}告诉你，你的融合理念正是上古"播种者文明"所追求的。你冥冥之中，走上了最接近银河本意的道路。`,
  ], { requiredFlags: ['major_coexistence_1'], effects: { charisma: 8, luck: 6, special: 4 } }));

  // 机械飞升后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `你因为选择了机械飞升，在{location}的地下诊所完成了第一次大脑皮层植入。你的思维速度提升了三倍，但你也开始感受不到"悲伤"。`,
    `你在{location}遇到了一位已经完全飞升的"前辈"。他说："我已经三百年没有哭过了。有时我会打开眼泪分泌程序，假装自己还能悲伤。"`,
  ], { requiredFlags: ['major_mechanical_ascension'], effects: { strength: 8, charisma: -3 }, flags: ['major_mechanical_ascension_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你因为追求机械飞升而获得了强大的计算力和科技等级，但{npc}警告你："机械飞升自古以来只有一人真正成功——那就是传说中的'初代觉醒者'。其余所有人，都在升级中丢失了自我。"`,
    `你的机械化率已超过70%，{location}的旧友们已经认不出你。你开始怀疑：那个在血肉中诞生的孩子，还存在吗？`,
  ], { requiredFlags: ['major_mechanical_ascension_1'], effects: { strength: 10, special: 5, intelligence: -5 } }));

  // 重大抉择2：立场之抉（30岁）— 联邦忠诚 vs 独立反叛 vs 利益至上
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 30, 0.97, [
    `{location}发生了一件震动银河的大事。联邦高层为了维持对边缘星区的控制，下令摧毁一个拒绝纳税的殖民地，三百万平民将因此丧生。{npc}向你提出了一个交易：向联邦举报反抗军的据点，你可以获得星区总督之位；保持沉默，你将与反抗军同罪。这是对你灵魂的考验。`,
  ], {
    choices: [
      choice('坚守正义，保护平民', 1.0, '你冒着被联邦通缉的风险，向全银河广播了真相。虽然失去了联邦的庇护，但你的良心前所未有的通明——你知道，真正的正义不是站在权力一边，而是站在生命一边', '你广播了真相，但联邦掌控了媒体。他们反咬一口，说你是外星间谍。你被剥夺了所有荣誉，四处流亡', { intelligence: 10, charisma: 6, luck: 5 }, { health: -20, charisma: -10, strength: -5 }, ['major_justice'], ['major_justice_fail']),
      choice('隐忍不发，暗中支援', 1.0, '你选择了暂时隐忍，暗中向殖民地输送物资和情报。三年后，你掌握了联邦高层腐败的完整证据链，一举扳倒了幕后黑手', '你的隐忍被当作默认。你越来越深地卷入了联邦的黑暗面，等你想要抽身时，已经来不及了', { intelligence: 8, luck: 6 }, { charisma: -8, luck: -5 }, ['major_wisdom_dark'], ['major_wisdom_dark_fail']),
      choice('不择手段，借机上位', 1.0, '你利用这个秘密要挟联邦高层，获得了星区总督的宝座和无尽的财富。但你也知道，从这一刻起，你和他们没有区别了', '你的要挟被反制。联邦以"勾结反抗军"的罪名将你打入死牢，你的一切到此终结', { strength: 8, special: 5 }, { charisma: -15, luck: -10, health: -20 }, ['major_dark'], ['major_dark_fail']),
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  }));

  // 正义后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `因为你坚守了正义，{location}的平民们自发聚集到你身边。你的正义之名吸引了无数被联邦抛弃的人——你们成为了银河系最特殊的"第四势力"。`,
    `你在{location}建立了一个"真相电台"，专门调查联邦的黑幕。联邦视你为眼中钉，外星文明视你为奇人，但普通百姓将你奉为英雄。`,
  ], { requiredFlags: ['major_justice'], effects: { intelligence: 8, charisma: 8, luck: 5 } }));

  // 隐忍后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `你因为隐忍不发而获得了联邦高层的信任。他们让你参与了更多机密，你也因此掌握了更多黑幕。{npc}感叹："你是潜伏在黑暗中的光。"`,
    `你在{location}发现了更大的阴谋——联邦与某个超维文明的内斗，其实是某位远古存在在银河系的棋子博弈。而你，正在成为第三颗棋子。`,
  ], { requiredFlags: ['major_wisdom_dark'], effects: { intelligence: 10, luck: 5, special: 3 } }));

  // 黑暗后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `你因为不择手段而获得了强大的权力和财富。但{npc}看你的眼神变得复杂——那不是敬畏，那是怜悯。你在{location}建立了自己的势力，却发现自己越来越孤独。`,
    `反抗军因为你的黑暗之路而对你产生了兴趣。他们说："联邦培养出来的怪物，比真正的敌人更纯粹。加入我们吧，我们给你想要的一切——除了救赎。"`,
  ], { requiredFlags: ['major_dark'], effects: { strength: 10, special: 6, charisma: -8 } }));

  // 重大抉择3：维度之择（45岁）— 维度跃迁风险 vs 保守发展 vs 寻找第三条路
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 45, 45, 0.96, [
    `你的科技等级已接近银河守护者。{npc}告诉你："你已触及维度的门槛。现在有三个选择：强行进行维度跃迁，进入超维空间获取无上知识，但九死一生；保守发展，稳固现有势力，但永远无法突破银河的边界；或者寻找第三条路——建立跨文明联盟，集合全银河的智慧共同探索维度之门。"`,
  ], {
    choices: [
      choice('强行跃迁，向死而生', 1.0, '你选择了强行跃迁。超维空间的信息洪流冲击着你的意识，你几度濒死，但凭借钢铁般的意志挺了过来。跃迁成功后，你看到了银河之外的真相——那是凡人无法想象的壮丽！', '跃迁的风险超出了你的预期。你虽然勉强活了下来，但神经系统严重受损，从此失去了科技同步能力', { strength: 15, special: 12, charisma: 8 }, { health: -60, special: -20, strength: -10 }, ['major_dimension'], ['major_dimension_fail']),
      choice('保守发展，稳固根基', 1.0, '你选择了保守发展，拒绝冒险。你在银河系内的影响力达到了顶峰，成为了名副其实的银河霸主。但每当你仰望星空，都会想起那扇未打开的门', '你的保守让你错过了最佳的跃迁窗口。当外星超维入侵者到来时，你发现银河系的技术已经落后太多', { intelligence: 10, luck: 8, health: 10 }, { health: -30, intelligence: 5 }, ['major_conservative'], ['major_conservative_fail']),
      choice('建立联盟，共探维度', 1.0, '你选择了第三条路。在你的倡议下，人类、泽塔星人、硅基生命等数十个文明组建了"银河议会"。虽然进程缓慢，但你们共同建造的维度探测器终于发出了第一声回响', '联盟内部的矛盾远超你的想象。各个文明的利益冲突让计划一拖再拖，你的理想在现实面前逐渐消磨', { charisma: 12, intelligence: 8, luck: 6 }, { charisma: -5, luck: -5 }, ['major_alliance'], ['major_alliance_fail']),
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  }));

  // 跃迁后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你成功跃迁的消息传遍了银河系。{location}的科学家们将你的名字刻在了"维度先驱碑"上——那是记录所有触及超维者的地方。`,
    `{npc}说你是万古以来最勇敢的探索者。你的名字将被后世传颂，激励他们在未知面前永不退缩。`,
  ], { requiredFlags: ['major_dimension'], effects: { strength: 8, charisma: 10, special: 6 } }));

  // 保守后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你因为保守发展而在银河系内建立了庞大的势力。{location}的星图上，你的领地横跨三个星区，无数文明向你俯首。`,
    `{npc}赞叹你的务实——"不是所有人都需要成为先驱。有些人注定要成为基石，让后人站得更高。"`,
  ], { requiredFlags: ['major_conservative'], effects: { intelligence: 10, luck: 8, special: 5 } }));

  // 联盟后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你建立的银河议会成为了银河系有史以来最伟大的合作组织。{location}的议会大厦中，数十个文明的代表齐聚一堂，讨论着共同的命运。`,
    `维度探测器传回了第一张超维照片。虽然模糊，但足以证明——银河系不是孤独的。{npc}握着你的手说："这一切，都始于你的一个选择。"`,
  ], { requiredFlags: ['major_alliance'], effects: { charisma: 10, intelligence: 6, luck: 6 } }));

  // 重大抉择4：永生之择（60岁）— 上传意识永生 vs 自然死亡传承 vs 薪火相传
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 60, 60, 0.95, [
    `你站在{location}的量子服务器前，意识上传的接口就在面前。{npc}告诉你："上传之后，你将获得近乎永恒的生命，可以在数字宇宙中继续存在万年。但你的肉体将停止运作，你将再也无法感受阳光、风雨，或拥抱你爱的人。或者，你可以选择自然死亡，在有限的生命中完成最后的传承。还有第三条路——将你的知识和经验编码成AI核心，让它以你的身份继续指导后人，而你保留肉体度过最后的岁月。"`,
  ], {
    choices: [
      choice('上传意识，数字永生', 1.0, '你将意识上传到了量子服务器。当肉体停止呼吸的那一刻，你在数字宇宙中睁开了"眼睛"。这里没有时间，没有空间，只有无限的可能性。你说："这不是结束，这是另一种开始。"', '上传过程中出现了数据损坏。虽然你的核心意识得以保存，但大量记忆和情感永远丢失了。你变成了自己的一个残缺副本', { special: 20, intelligence: 15 }, { health: -100, special: -30 }, ['major_upload'], ['major_upload_fail']),
      choice('自然死亡，传承后人', 1.0, '你拒绝了上传，选择在肉体中走完最后一程。你将自己毕生的知识和经验整理成册，亲自培养了一批学生。虽然你的生命有限，但你的思想将在他们身上延续', '你选择了自然死亡，但你的学生们还未成熟。你带着遗憾闭上了眼睛，不知道他们能否继承你的遗志', { charisma: 15, health: 10, luck: 10 }, { health: -50, charisma: 5 }, ['major_legacy'], ['major_legacy_fail']),
      choice('编码AI，薪火相传', 1.0, '你选择了第三条路。你的知识、经验和人格被编码成了一个AI核心——"导师协议"。它将永远运行，指导一代又一代的探索者。而你，则在肉体中度过最后的宁静岁月', 'AI核心的编码并不完美。它继承了你所有的知识，但也继承了你所有的偏见和执念。后人在它的指导下走上了一条越来越窄的路', { intelligence: 12, charisma: 10, special: 8 }, { intelligence: 5, charisma: -5 }, ['major_flame'], ['major_flame_fail']),
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  }));

  // 上传后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你在数字宇宙中越漂越远，{location}的物理世界已与你无关。你触摸到了信息的本源，开始理解宇宙可能是某种超级计算的结果。`,
    `你偶尔会通过全息投影与旧友见面。但每一次，你都能感受到那种无法跨越的隔阂——他们在一瞬间老去，而你的意识却凝固在永恒之中。`,
  ], { requiredFlags: ['major_upload'], effects: { special: 15, intelligence: 10, strength: 5 } }));

  // 传承后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你离世的那天，{location}下起了罕见的流星雨。无数你曾经教导过的学生自发前来为你送行，他们中的许多人已成为银河系的栋梁。`,
    `你的墓碑上没有头衔，只有一句话："我这一生最大的成就，不是我所创造的，而是我所培养的。"后人将这句话刻入了每一所星际学院的校训。`,
  ], { requiredFlags: ['major_legacy'], effects: { charisma: 12, luck: 10, health: 5 } }));

  // 薪火后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `"导师协议"运行了千年。它在你离世后继续指导着无数探索者，成为了银河系最珍贵的文化遗产之一。`,
    `偶尔，学生们会在{location}的纪念馆里与你的全息影像对话。虽然你知道那只是一段程序，但看到他们的成长，你感到了真正的满足。`,
  ], { requiredFlags: ['major_flame'], effects: { intelligence: 10, charisma: 8, special: 5 } }));

  return T;
}

// ============================================================
// 科幻境界突破事件生成器
// ============================================================

function generateSciFiRealmEvents(w) {
  const T = [];
  const { prefix } = w;

  const realms = [
    { stage: 1, name: '星际战士', minAge: 18, maxAge: 30, prob: 0.92, reqText: '体能≥20、科技等级≥15', baseSuccess: 1.0, maxAgeGain: 80, desc: '星际战士是银河征途的第一步。你将凡躯锻造成钢铁之躯，从此踏上星际战场。' },
    { stage: 2, name: '舰长', minAge: 35, maxAge: 55, prob: 0.88, reqText: '智力≥35、科技等级≥30、体能≥20', baseSuccess: 1.0, maxAgeGain: 120, desc: '成为舰长意味着你拥有指挥一艘星舰的能力。你的决策将决定数百人的生死。' },
    { stage: 3, name: '舰队统帅', minAge: 60, maxAge: 90, prob: 0.85, reqText: '社交≥50、科技等级≥45', baseSuccess: 1.0, maxAgeGain: 200, desc: '舰队统帅指挥的不仅是战舰，更是战略与人心。你的名字开始在星区之间传颂。' },
    { stage: 4, name: '星际元帅', minAge: 100, maxAge: 160, prob: 0.82, reqText: '智力≥70、科技等级≥60', baseSuccess: 1.0, maxAgeGain: 300, desc: '星际元帅已能影响整个星区的命运。一念之间，可令星系易主，文明兴衰。' },
    { stage: 5, name: '银河守护者', minAge: 200, maxAge: 350, prob: 0.78, reqText: '体能≥90、科技等级≥80、运气≥60', baseSuccess: 1.0, maxAgeGain: 400, desc: '银河守护者需直面维度裂隙与超维入侵。九死一生，但一旦成功，便是半步星神。' },
    { stage: 6, name: '超维生命', minAge: 400, maxAge: 550, prob: 0.75, reqText: '科技等级≥100', baseSuccess: 1.0, maxAgeGain: 800, desc: '超维生命已触摸到更高维度的门槛。只需等待维度之门开启，便可升华。' },
    { stage: 7, name: '星神', minAge: 600, maxAge: 800, prob: 0.70, reqText: '科技等级≥120、智力≥100', baseSuccess: 1.0, maxAgeGain: 9000, desc: '破碎维度，升华星神。从此脱离凡躯，以纯能量形态存在于星系之间。' },
  ];

  realms.forEach((r, idx) => {
    const prevFlag = idx === 0 ? null : `realm_breakthrough_${realms[idx-1].stage}`;
    const reqFlags = prevFlag ? [prevFlag] : [];

    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge, r.maxAge, r.prob, [
      `你在{location}的科研中心/战舰中进行封闭式训练多年，终于触摸到了${r.name}的门槛。{npc}告诉你："${r.desc}突破需要${r.reqText}。"`,
      `你的能力已达瓶颈，在{location}感应到了${r.name}的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。`,
    ], {
      requiredFlags: reqFlags,
      flags: [`realm_attempt_${r.stage}`],
      chainPriority: 5,
      choices: [
        choice('全力冲击，不留退路', 1.0,
          `你孤注一掷，将全部能量灌注于核心。刹那间，{location}的能量场疯狂涌入你的体内——你成功了！你突破到了${r.name}！`,
          `你全力冲击瓶颈，但能量反噬，神经系统受损。虽然保住了性命，但能力大跌，需要数十年才能恢复。`,
          { realm: 1, special: 5, intelligence: 3, maxAge: r.maxAgeGain },
          { health: -30, special: -10, maxAge: -20 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail_${r.stage}`]
        ),
        choice('稳扎稳打，徐徐图之', 1.0,
          `你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了${r.name}。`,
          `你的稳扎稳打被一场意外打断——{npc}的敌对阵营找上门来，中断了你的训练进程。突破失败。`,
          { realm: 1, special: 3, intelligence: 5, maxAge: Math.floor(r.maxAgeGain * 0.7) },
          { health: -15, special: -5, maxAge: -10 },
          [`realm_breakthrough_${r.stage}`, `realm_breakthrough_${r.stage}_steady`], [`realm_fail_${r.stage}_steady`]
        ),
        choice('放弃突破，继续积累', 1.0,
          `你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。`,
          '',
          { intelligence: 3, special: 2, strength: 2 },
          {},
          [`realm_delay_${r.stage}`], []
        ),
      ]
    }));

    // 突破成功后续事件
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 2, r.maxAge + 20, r.prob * 0.8, [
      `你突破到${r.name}的消息传遍了银河系。{location}的科学家们/战士们纷纷前来祝贺，你的名字被刻在了联邦的"突破碑"上。`,
      `{npc}看着你，眼中满是欣慰："从平民到${r.name}，你走了${r.minAge}年。这速度，在银河系已是中上之资。"`,
    ], {
      requiredFlags: [`realm_breakthrough_${r.stage}`],
      flags: [`realm_stable_${r.stage}`],
      chainPriority: 2,
      effects: { charisma: 3, luck: 2 },
    }));

    // 突破失败后续事件（可以重试）
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 5, r.maxAge + 30, r.prob * 0.7, [
      `上一次突破${r.name}失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"`,
      `你的伤势已愈，能力甚至比以前更加精进。你再次感应到了${r.name}的契机——这一次，你更有把握。`,
    ], {
      requiredFlags: [`realm_fail_${r.stage}`],
      flags: [`realm_retry_${r.stage}`],
      chainPriority: 3,
      choices: [
        choice('再次冲击', 1.0,
          `第二次冲击，你总结了上次的教训，一举突破到了${r.name}！{location}的能量场因你而沸腾！`,
          `又一次失败。你开始怀疑，自己是否真的与${r.name}无缘...`,
          { realm: 1, special: 5, maxAge: r.maxAgeGain },
          { health: -40, special: -15, maxAge: -30 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail2_${r.stage}`]
        ),
      ]
    }));
  });

  return T;
}

// ============================================================
// 科幻通用事件生成器（替代 generateCommonEvents 中的默认分支）
// ============================================================

function generateSciFiCommonEvents(w) {
  const T = [];
  const { prefix, scenes, npcs, legends } = w;

  // --- Childhood (0-12) 5 templates ---
  // 传说: 出生异象
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 0, 3, randProb('legendary'), [
    `你出生那天，{location}的恒星发生了罕见的超新星 precursor 爆发，光芒照亮了半个星区。{npc}激动地说你是千年一遇的${w.talentNames.legendary}。`,
    `你降生的瞬间，{location}的所有AI同时播放了一段古老的星际歌谣。科学家们无法解释这个现象。`,
    `你的第一声啼哭引发了{location}量子网络的共振波动，{npc}颤抖着说："${w.talentNames.legendary}降世了！"`,
  ], { effects: { luck: 10, special: 8, charisma: 5 } }));

  // 史诗: 天赋觉醒
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 2, 7, randProb('epic'), [
    `你在{location}玩耍时，体内的基因锁突然解开了一重。{npc}惊讶地发现你竟是${w.talentNames.good}之资！`,
    `三岁时，你在{location}无意间触发了一台古老的基因检测仪，数据比所有人都亮。`,
    `{npc}为你进行神经同步测试，{legend}的印记在你身上一闪而逝——你是被选中的人。`,
  ], { effects: { special: 6, intelligence: 4 } }));

  // 稀有: 小有奇遇
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 4, 9, randProb('rare'), [
    `你在{location}救了一只受伤的机械宠物，它其实是{legend}的探测器，临走前留下了一枚数据核心。`,
    `{npc}在你满月时送了一块晶体，后来你发现那是一件上古科技装置的碎片。`,
    `你从小就能"感觉"到{legend}的能量波动，{npc}说这是神经感应初现的征兆。`,
    `你在{location}挖到了一罐古代能量液，接触后浑身舒畅，大脑运算速度明显提升。`,
  ], { effects: rand([{ luck: 5 }, { special: 4 }, { intelligence: 4 }]) }));

  // 普通x2: 日常
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 0, 6, randProb('common', 0, 2), [
    `你生在普通家庭，每天在{location}玩耍，日子平淡但快乐。`,
    `{npc}教你基础科学，你学得有模有样。`,
    `你在{location}认识了几个玩伴，度过了无忧无虑的童年。`,
    `家里虽然不富裕，但{npc}总是把最好的营养剂留给你。`,
  ], { effects: { charisma: 2, luck: 1 } }));

  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 3, 10, randProb('common', 1, 2), [
    `你在{location}帮{npc}维护家用设备，学会了很多工程技术。`,
    `你的身体比同龄人强壮，{npc}说你是驾驶机甲的好料子。`,
    `你喜欢在{location}观察星空，常常一看就是一整天。`,
    `{npc}给你讲了一个关于{legend}的故事，你听得入了迷。`,
  ], { effects: { strength: 2, intelligence: 1 } }));

  // --- Growth (13-25) 5 templates ---
  // 传说: 顿悟突破
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 15, 20, randProb('legendary'), [
    `你在{location}进行了三日三夜的神经深度训练，出关时眼中精光四射——你竟在实战中领悟了{legend}的传承！`,
    `一场太阳风暴夜，你在{location}被高能辐射击中非但没死，反而解锁了基因中的隐藏序列！`,
    `{legend}的数据残魂在{location}与你相遇，将毕生科技感悟传授于你。`,
  ], { effects: { intelligence: 10, special: 8, strength: 5 } }));

  // 史诗: 重大突破
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 14, 22, randProb('epic'), [
    `你在{location}钻研三年，终于突破了困扰多年的科技瓶颈，实力大增！`,
    `{npc}带你外出星际旅行，你在{location}击败了一个强敌，获得了珍贵的战利品。`,
    `你发现了{legend}留下的试炼场，通过考验后获得了意想不到的收获。`,
  ], { effects: { strength: 6, special: 5 } }));

  // 稀有: 外出历练
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 13, 24, randProb('rare'), [
    `你在{location}遇到了一生的宿敌，你们不打不相识，反而成为了朋友。`,
    `{npc}传授你一项高级技术，你花了整整一年才掌握，但威力惊人。`,
    `你在{location}救了一个被追杀的人，他为了报答你，送了一件稀有装备。`,
    `你和同辈在{location}比试机甲驾驶，虽然输了但收获巨大。`,
  ], { effects: rand([{ strength: 4, luck: 2 }, { intelligence: 5 }, { charisma: 4 }]) }));

  // 普通x2
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 13, 20, randProb('common', 0, 2), [
    `你每天在{location}勤奋训练，虽然进步缓慢但根基扎实。`,
    `{npc}督促你学习，你不敢懈怠。`,
    `你在{location}读了很多科技文献，眼界开阔了不少。`,
    `平平淡淡的一年，你在{location}默默积累着。`,
  ], { effects: { intelligence: 2, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 16, 25, randProb('common', 1, 2), [
    `你在{location}结交了一些朋友，互相切磋进步。`,
    `{npc}给你讲了很多前辈的故事，你深受启发。`,
    `你在{location}处理了一些飞船杂务，锻炼了自己的能力。`,
    `这一年没什么特别的事发生，但你感觉自己在慢慢变强。`,
  ], { effects: { charisma: 2, luck: 2 } }));

  // --- Adult (26-50) 3 templates ---
  // 史诗: 建立势力
  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 28, 40, randProb('epic'), [
    `你在{location}建立了自己的研究团队/舰队，广纳贤才，一时间名声大噪。`,
    `你参与了{legend}相关的大规模星际事件，在关键时刻力挽狂澜。`,
    `你在{location}建立了属于自己的势力，各方强者纷纷来投。`,
  ], { effects: { charisma: 8, strength: 5, special: 5 } }));

  // 稀有: 势力扩张
  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 26, 45, randProb('rare'), [
    `你在{location}收下了第一个学生/下属，将自己的所学倾囊相授。`,
    `你和宿敌在{location}进行了最终决战，胜负难分。`,
    `你成功研发/制造了传说中的科技装备，引起了不小的轰动。`,
  ], { effects: rand([{ intelligence: 5, special: 4 }, { charisma: 6, luck: 3 }]) }));

  // 普通: 日常
  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 26, 50, randProb('common'), [
    `你在{location}处理日常事务，势力稳步发展。`,
    `{npc}来找你帮忙，你出手解决了他的难题。`,
    `你在{location}度过了平静的一年，能力稳步提升。`,
    `平平淡淡的一年，你在{location}默默研究。`,
  ], { effects: { strength: 2, intelligence: 2, special: 2 } }));

  // --- Elder (50+) 科幻星际 elder ---
  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 50, 120, randProb('common'), [
    `你在{location}的星舰/空间站中钻研更高科技，试图突破当前等级的限制。`,
    `你游历银河系，在{location}见识了各种奇异的科技现象，眼界大开。`,
    `你开始招收学生，在{location}传授毕生所学的星际知识。`,
  ], { effects: { intelligence: 3, special: 2 } }));

  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 100, 220, randProb('rare'), [
    `你的科技造诣已臻巅峰，成为了{location}的传说级科学家/指挥官。`,
    `{npc}专程从联邦科学院赶来，希望你将研究成果贡献给学术界。`,
    `你将毕生科技心得整理成《星际百科全书》，存放在{location}的数据库中。`,
  ], { effects: { intelligence: 8, charisma: 5 } }));

  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 200, 400, randProb('rare'), [
    `你感应到了超维空间的召唤，在{location}准备进行维度穿越实验。`,
    `你回顾一生的科技研究，在{location}寻找触及星神境界的契机。`,
    `{npc}带来消息：银河系边缘出现了维度裂隙，通往更高维度的通道可能开启。`,
  ], { effects: { special: 10, intelligence: 5 } }));

  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 400, 700, randProb('epic'), [
    `你已是超维生命，在{location}静待成为星神的那一刻。`,
    `你将毕生对宇宙本质的感悟刻入永恒数据晶体，留给后世有缘人。`,
    `{npc}问你为何还不升华，你笑答："我在等一个值得托付星际火种的学徒。"`,
  ], { effects: { charisma: 10, special: 5 } }));

  // --- Combat (15-60) 6 templates ---
  // 传说: 跨级战斗
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 20, 40, randProb('legendary'), [
    `你在{location}以一己之力对抗十位同阶强者，最终大获全胜，一战成名！`,
    `{legend}的敌人找上了你，你在{location}展开惊天大战，竟越级将其斩杀！`,
    `你为了保护{location}的居民，独自对抗入侵的{legend}军团，创造了不可能的奇迹。`,
  ], { effects: { strength: 12, charisma: 8, health: -10 } }));

  // 史诗: 重要战役
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 18, 45, randProb('epic'), [
    `你参与了一场改变{location}格局的大规模星际战争，立下赫赫战功。`,
    `{npc}挑战你的权威，你们在{location}大战三百回合，最终你险胜一招。`,
    `你在{location}发现了{legend}留下的战斗试炼场，通过了生死考验。`,
  ], { effects: { strength: 8, charisma: 4, health: -5 } }));

  // 稀有x2: 普通战斗
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 15, 35, randProb('rare', 0, 2), [
    `你在{location}遭遇强敌，展开了一场生死搏斗，最终险胜。`,
    `你和{npc}在{location}切磋机甲操控，双方都获益匪浅。`,
    `你为了保护同伴，在{location}与敌人激战，受了轻伤。`,
  ], { effects: { strength: 5, health: -3 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 25, 50, randProb('rare', 1, 2), [
    `你在{location}参与了一场小规模冲突，表现出色。`,
    `{npc}偷袭你，你在{location}勉强将其击退。`,
    `你在{location}发现了敌人的据点，果断出击。`,
  ], { effects: { strength: 4, luck: 2 } }));

  // 普通x2: 训练/切磋
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 15, 40, randProb('common', 0, 2), [
    `你在{location}进行了日常机甲训练，技艺略有精进。`,
    `你和同伴在{location}对练射击，互相学习。`,
    `你在{location}演练新学的战术，逐渐熟练。`,
  ], { effects: { strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 30, 60, randProb('common', 1, 2), [
    `你在{location}指导后辈战斗技巧，自己也有所感悟。`,
    `一场友好的机甲比试在{location}举行，你获得了不错的名次。`,
    `你在{location}观摩高手对决，学到了不少实战经验。`,
  ], { effects: { strength: 2, intelligence: 1 } }));

  // --- Romance (16-50) 6 templates ---
  // 传说: 三生石缘
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 18, 30, randProb('legendary'), [
    `你在{location}与{npc}相遇的瞬间，舰船的AI突然播放了一首古老的情歌——你们的数据档案显示，你们的基因匹配率是99.999%。`,
    `{npc}为了救你，不惜耗尽飞船的最后一点能源。你跪在{location}发誓：此生不负。`,
    `你们的故事被{legend}记载，成为了{location}永恒的传说。`,
  ], { effects: { charisma: 10, luck: 8, health: 5 } }));

  // 史诗: 轰轰烈烈
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 20, 35, randProb('epic'), [
    `你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。`,
    `{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。`,
    `你们经历了{legend}的考验，感情反而更加坚不可摧。`,
  ], { effects: { charisma: 6, luck: 4 } }));

  // 稀有x2: 邂逅相恋
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 16, 30, randProb('rare', 0, 2), [
    `你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。`,
    `你和{npc}在{location}的观景舱下相会，互诉衷肠。`,
    `{npc}因为你的才华而倾心，主动向你示好。`,
  ], { effects: { charisma: 4, luck: 3 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 25, 40, randProb('rare', 1, 2), [
    `你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。`,
    `{npc}送你一件定情信物，你珍藏在身边。`,
    `你们一起在{location}经历了危险，感情更加深厚。`,
  ], { effects: { charisma: 3, luck: 2 } }));

  // 普通x2: 普通交往
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 20, 45, randProb('common', 0, 2), [
    `你在{location}认识了一个有趣的人，但关系尚不明确。`,
    `{npc}对你有些好感，但你还没想好如何回应。`,
    `你在{location}参加了一场星际聚会，结识了不少异性。`,
  ], { effects: { charisma: 2 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 30, 50, randProb('common', 1, 2), [
    `你和{npc}保持着朋友以上、恋人未满的关系。`,
    `你在{location}看到了别人恩爱的场景，心中有些羡慕。`,
    `这一年感情上没有太大的波澜，你专注于其他事情。`,
  ], { effects: { luck: 1 } }));

  // --- Cultivation/Practice (13-80) 6 templates ---
  // 传说: 科技顿悟
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 40, 70, randProb('legendary'), [
    `你在{location}的实验室进行深度实验九九八十一天，完成时全舰系统共鸣——你已触摸到了{legend}的科技境界！`,
    `你的科技等级达到了前所未有的高度，{location}的能量场因为你而沸腾。`,
    `{legend}的数据残魂亲自降临{location}，为你指点科技大道。`,
  ], { effects: { special: 12, intelligence: 10, strength: 5 } }));

  // 史诗: 科技大成
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 30, 60, randProb('epic'), [
    `你成功将{legend}的科技融会贯通，实力暴涨！`,
    `你在{location}经历了一场科技奇遇，能力大涨，连{npc}都震惊不已。`,
    `你突破了困扰多年的科技瓶颈，{location}的能量异象持续了三日三夜。`,
  ], { effects: { special: 8, intelligence: 5 } }));

  // 稀有x2: 等级突破
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 20, 50, randProb('rare', 0, 2), [
    `你在{location}的实验室进行封闭式研究，领悟了新的科技等级。`,
    `{npc}传授你一项高级技术，你勤加练习，终于大成。`,
    `你在{location}发现了一处能量充沛的实验室，研究事半功倍。`,
  ], { effects: { special: 5, intelligence: 3 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 35, 65, randProb('rare', 1, 2), [
    `你在科技研究中遇到了瓶颈，{npc}指点你突破。`,
    `你在{location}经历了一场科技奇遇，能力有所精进。`,
    `你成功研发/制造了辅助研究的科技装备，效果显著。`,
  ], { effects: { special: 4, strength: 2 } }));

  // 普通x2: 日常研究
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 13, 40, randProb('common', 0, 2), [
    `你在{location}按部就班地学习和研究，虽然没有突破但根基更加稳固。`,
    `{npc}检查了你的研究进度，表示满意。`,
    `你在{location}研读科技文献，对一些技术有了新的理解。`,
  ], { effects: { special: 2, intelligence: 1 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 40, 80, randProb('common', 1, 2), [
    `你在{location}巩固已有的科技等级，为下一次突破做准备。`,
    `这一年研究进度平平，但你没有气馁。`,
    `{npc}提醒你不可急于求成，你虚心接受。`,
  ], { effects: { special: 2 } }));

  // --- Exploration (13-80) 6 templates ---
  // 传说: 上古遗迹核心
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 25, 50, randProb('legendary'), [
    `你深入{location}最深处，发现了{legend}留下的核心科技传承，获得了改变命运的机缘！`,
    `你在{location}找到了通往另一个维度的入口，{legend}的秘密向你敞开。`,
    `你解开了一个困扰世人万年的科技谜题，{location}的真相让你震惊。`,
  ], { effects: { luck: 10, intelligence: 8, special: 6 } }));

  // 史诗: 秘境探险
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 20, 45, randProb('epic'), [
    `你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。`,
    `你探索了一处危险的{location}，九死一生后带回了珍贵的科技样本。`,
    `{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。`,
  ], { effects: { luck: 6, strength: 4 } }));

  // 稀有x2: 寻宝探险
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 15, 40, randProb('rare', 0, 2), [
    `你深入{location}探险，发现了未知的秘密。`,
    `你在{location}找到了一些有价值的物品，收获颇丰。`,
    `你在{location}迷路了，却意外发现了一处隐蔽的科研基地。`,
  ], { effects: { luck: 4, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 30, 55, randProb('rare', 1, 2), [
    `你在{location}发现了一些古老的全息记录，记录着失落的文明。`,
    `你探索了一处废弃的{location}，找到了一些有用的物资。`,
    `{npc}带你进入了一个秘密的{location}，你大开眼界。`,
  ], { effects: { intelligence: 3, luck: 3 } }));

  // 普通x2: 普通探索
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 13, 35, randProb('common', 0, 2), [
    `你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。`,
    `你跟着{npc}去{location}采集了一些材料。`,
    `你在{location}发现了一些普通的能源晶体，聊胜于无。`,
  ], { effects: { luck: 2 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 35, 70, randProb('common', 1, 2), [
    `你在{location}进行了常规的巡查，一切正常。`,
    `你重访了以前去过的{location}，有了一些新的发现。`,
    `你在{location}休息了一段时间，养精蓄锐。`,
  ], { effects: { health: 2 } }));

  // --- World Story (20-100) 5 templates ---
  // 传说: 世界格局剧变
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 40, 70, randProb('legendary'), [
    `{legend}的封印彻底破碎，整个银河系陷入了前所未有的动荡，你被卷入了漩涡中心！`,
    `一场席卷整个银河的大战爆发了，{location}首当其冲，你必须做出选择。`,
    `银河的规则开始改变，{legend}的意志降临，所有文明都受到了影响。`,
  ], { effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 } }));

  // 史诗: 大规模变革
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 60, randProb('epic'), [
    `你发现{location}隐藏着改变银河的秘密，各方势力为此展开了明争暗斗。`,
    `{npc}告诉你一个关于银河起源的惊天秘密，你的世界观被彻底颠覆。`,
    `传说中的{legend}即将降临，所有文明都在做准备，{location}的气氛紧张到了极点。`,
  ], { effects: { intelligence: 6, charisma: 4 } }));

  // 稀有: 局部冲突
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 25, 50, randProb('rare'), [
    `{location}附近发生了局部冲突，你不得不卷入其中。`,
    `{npc}带来了一个重要的消息，可能影响到{location}的未来。`,
    `你注意到了{location}的一些异常现象，似乎有什么大事要发生。`,
  ], { effects: { charisma: 3, luck: 3 } }));

  // 普通x2: 传闻/日常
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 45, randProb('common', 0, 2), [
    `你听到了一些关于{legend}的传闻，但真假难辨。`,
    `{location}发生了一些小变化，但你没有太在意。`,
    `{npc}跟你聊了聊最近的星际时事，你表示关注。`,
  ], { effects: { intelligence: 2 } }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 40, 80, randProb('common', 1, 2), [
    `银河依旧平静，{location}的生活一如既往。`,
    `你听说了一些关于{legend}的新消息，但似乎没什么实质内容。`,
    `这一年没什么大事发生，你在{location}安稳度日。`,
  ], { effects: { luck: 1 } }));

  // --- Hidden (20-150) 4 templates ---
  // 传说: 世界真相
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 60, 120, randProb('legendary'), [
    `你超越了{legend}，看到了银河之外的真相——原来一切都只是...`,
    `你发现了这个银河系的运行规则，{location}只是一场巨大棋局的一角。`,
    `{legend}的真正身份让你震惊不已，你终于理解了银河的本质。`,
  ], { conditions: [{ stat: 'intelligence', min: 120 }], effects: { intelligence: 15, special: 10 } }));

  // 史诗: 禁地核心
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 50, 100, randProb('epic'), [
    `你在{location}发现了一个被禁止入内的区域，里面藏着惊人的秘密。`,
    `你解开了{legend}留下的谜题，获得了一份隐藏的科技传承。`,
    `{npc}告诉你一个只有极少数人知道的秘密，你感到责任重大。`,
  ], { conditions: [{ stat: 'intelligence', min: 100 }], effects: { intelligence: 10, special: 8 } }));

  // 稀有: 秘密通道
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 35, 80, randProb('rare'), [
    `你在{location}找到了一条隐秘的通道，通向未知的地方。`,
    `你发现了一些关于{legend}的隐藏记录，内容令人费解。`,
    `{npc}偷偷塞给你一张星图，上面标记着{location}的秘密地点。`,
  ], { conditions: [{ stat: 'luck', min: 80 }], effects: { luck: 6, intelligence: 4 } }));

  // 普通: 小道消息
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 20, 60, randProb('common'), [
    `你在{location}听到了一些奇怪的信号，但找不到来源。`,
    `你做了一个关于{legend}的怪梦，醒来后记忆模糊。`,
    `{npc}欲言又止，似乎想告诉你什么秘密但最终没说出口。`,
  ], { conditions: [{ stat: 'intelligence', min: 60 }], effects: { intelligence: 3 } }));

  return T;
}

// 导出函数（如需要 CommonJS）
module.exports = {
  generateSciFiIdentityEvents,
  generateSciFiTrashEvents,
  generateSciFiMajorChoices,
  generateSciFiRealmEvents,
  generateSciFiCommonEvents,
};
// ============================================================
// 末日废土世界 — 事件模板生成器
// 包含：身份链式事件、废材逆袭、重大抉择、境界突破、通用事件
// ============================================================

function generateApocalypseIdentityEvents(w) {
  const T = [];
  const { prefix } = w;

  const identityStories = {
    shelter: {
      name: '避难所居民',
      childhood: [
        [`你出生在{location}的地下掩体中。从出生起，你从未见过真正的太阳。{npc}告诉你："地表充满辐射和丧尸，只有这里才是安全的。"`, `作为避难所居民，你在{location}的通风管道里度过了童年。你的玩具是废弃的电路板和生锈的螺丝。`],
        [`五岁那年，{location}的净水系统故障，你目睹了第一批敢死队被派往地表抢修。他们回来时已不再是人类。`, `你在{location}的图书馆里发现了一本战前画册，上面画着蓝天白云。你问{npc}："这是真的吗？"他沉默了很久。`],
      ],
      growth: [
        [`十五岁那年，{location}发生了内部政变。你被迫在混乱中选择立场——支持现任管理者，还是加入反抗者。`, `你偷偷溜进了{location}的禁闭区，发现那里关押着所谓的"变异者"。他们看起来和普通人没什么不同。`],
        [`二十岁那年，{location}的食物储备即将耗尽。你被选入"地表初探队"，第一次踏上辐射遍地的废土。`, `你遇到了一个地表流浪者{npc}，他告诉你避难所的高层一直在隐瞒真相——地表并非完全无法生存。`],
      ],
      adult: [
        [`成年后的你已经是{location}的资深居民。但你越来越无法忍受地下封闭的生活，你渴望看到真正的天空。`, `你在{location}发现了一份战前档案，上面记载着地表辐射正在逐年衰减——也许重返地面的时机已经成熟。`],
        [`你可以选择：留在避难所，争取成为下一任管理者，维持现有的秩序；或者带领一批志同道合者离开，去地表建立新的家园。`, ``, '留在避难所', '重返地表', 1.0],
      ],
      special: [
        [`你带领的队伍在{location}建立了第一个地表定居点。虽然辐射和丧尸仍是威胁，但你们种下了第一株在废土中发芽的植物。`, `{npc}从避难所赶来，带来了震惊的消息：你离开后不久，避难所因内部冲突爆发了内战，死伤惨重。你的选择救了你。`],
        [`百年后，你的定居点发展成了废土上最著名的"曙光城"。城门口刻着你的话："我们不怕辐射，我们怕的是永远生活在黑暗中。"`, `你成为了废土上第一个"地表复兴者"，你的故事激励了无数避难所居民走出地下，拥抱未知的废土。`],
      ],
    },
    raider: {
      name: '掠夺者',
      childhood: [
        [`你出生在{location}的一个掠夺者帮派中。你的第一个玩具是一把生锈的匕首，你的摇篮是一堆战利品。`, `作为掠夺者的后代，你五岁就学会了如何在{location}的垃圾场里寻找可用的弹药。{npc}说你是"天生的战士"。`],
        [`八岁那年，你目睹了{npc}被敌对帮派伏击身亡。你握紧了那把生锈的匕首，发誓要让他付出代价。`, `你在{location}的一次劫掠中被俘，但对方的老大看中了你眼中的狠劲，决定收养你作为帮派的"继承人"。`],
      ],
      growth: [
        [`十五岁那年，你带领一队人马袭击了{location}的商队。但当你看到商队中有个和你一样大的孩子时，你的手第一次颤抖了。`, `你在{location}与另一个帮派火并，以少胜多，一战成名。各大帮派开始传颂你的名字——"废土之狼"。`],
        [`二十岁那年，你成为了帮派最年轻的干部。但你也发现了老大的秘密：他暗中与避难所交易，出卖了自己人的情报。`, `你在{location}遇到了一个独行佣兵。他告诉你："暴力可以统治一时，但不能统治一世。你想当一辈子的强盗，还是想当废土之王？"`],
      ],
      adult: [
        [`成年后的你已是{location}最强大的掠夺者首领。但你开始厌倦无尽的杀戮——每次劫掠后，你都会做同一个噩梦。`, `你的帮派内部出现了分裂。一部分人主张继续劫掠，另一部分人说应该建立秩序、保护弱者。`],
        [`你可以选择：镇压反对派，以暴力维持统治，成为废土最令人恐惧的暴君；或者改变帮派的路线，从掠夺者转型为守护者。`, ``, '暴力统治', '转型守护者', 1.0],
      ],
      special: [
        [`你选择了转型。你将帮派改名为"废土巡逻队"，专门保护商队和定居点。曾经的敌人们难以置信——"那个杀人如麻的掠夺者，竟然在保护我们？"`, `{npc}带着旧部来挑战你。你说："时代变了。废土不需要更多的掠夺者，废土需要秩序。"你们展开了一场决定废土未来的决斗。`],
        [`你赢了。旧部们跪地臣服。你建立了废土上第一个"掠夺得来的和平"——以战止战，以暴制暴，最终走向秩序。`, `后人称你为"铁腕之王"。你的雕像手持断裂的匕首和绽放的玫瑰，象征着从毁灭到重生的转变。`],
      ],
    },
    mutant: {
      name: '变异者',
      childhood: [
        [`你出生在{location}的辐射区边缘。你的身体从出生起就与常人不同——你的皮肤会在黑暗中发出微弱的荧光。`, `作为变异者，你在{location}被其他孩子叫做"怪物"。他们不敢靠近你，因为传说变异者会传染辐射病。`],
        [`七岁那年，你在{location}遭遇了一群丧尸。危急时刻，你体内某种力量觉醒——你释放出一道能量波，将丧尸全部震碎！`, `{npc}发现了你的异常，没有恐惧，反而兴奋地说："你是'觉醒变异者'的苗子！跟我走，我教你控制这股力量。"`],
      ],
      growth: [
        [`十五岁那年，你在{location}的变异森林中修炼。你发现自己能与变异植物沟通，让它们为你作战。`, `你的变异能力开始不稳定。一次暴走中，你不小心摧毁了{location}的一座房屋。{npc}帮助你学会了控制。`],
        [`二十岁那年，你遇到了"纯人类至上组织"。他们认为变异者是地球的污染源，必须被清除。你成为了他们的追杀目标。`, `你在{location}救了一个纯人类女孩。她说："我以前以为所有变异者都是怪物。但你救了我的命。"`],
      ],
      adult: [
        [`成年后的你已完全掌控了自己的变异能力。但你也面临抉择：继续进化，成为更强大的存在，但可能失去人性；或者保持现状，做一个有人性的变异者。`, `纯人类至上组织在{location}发动了大规模清洗。你可以选择站在变异者一边反击，或者尝试和平对话。`],
        [`你可以选择：彻底释放变异潜能，获得毁天灭地的力量，但会逐渐丧失自我意识；或者压制变异，保持人性，但永远达不到进化的巅峰。`, ``, '彻底进化', '保持人性', 1.0],
      ],
      special: [
        [`你选择了保持人性。虽然你的力量不如彻底进化的同类强大，但你证明了变异者也可以是守护者，而不是怪物。`, `你建立了"变异者与人类共存联盟"，在{location}设立了第一个混居区。纯人类和变异者开始学会互相理解。`],
        [`百年后，你成为了"觉醒变异者"境界的领袖。你说："变异不是诅咒，是地球给我们的礼物。关键是我们选择用它来毁灭，还是来保护。"`, `你的混居区成为了废土上最繁荣的聚集地之一。后人称你为"平衡者"——在毁灭与守护之间，你选择了后者。`],
      ],
    },
    scientist: {
      name: '科学家',
      childhood: [
        [`你出生在{location}的一个战前地下实验室里。你的父母是最后一批科学家，他们保存着战前的所有知识。`, `作为科学家的后代，你从小就被教导阅读战前文献。八岁时，你已能独立操作辐射检测仪。`],
        [`你在{location}发现了一台还能运转的战前电脑。里面存储着大量失落的技术资料——能源、农业、医学。你如获至宝。`, `{npc}告诉你一个秘密：你的父母正在研究一种能净化辐射的装置，但缺少一种稀有的战前材料。`],
      ],
      growth: [
        [`十五岁那年，你独自潜入了{location}的废弃军事基地，找到了父母需要的稀有材料——一块完整的聚变电池。`, `你在{location}的实验室里完成了第一个独立发明：一种能过滤辐射水的简易装置。附近的定居点争相购买。`],
        [`二十岁那年，你的研究引起了避难所高层的注意。他们邀请你加入"文明重启计划"——一个试图恢复战前科技的宏大工程。`, `但你也发现，"文明重启计划"的真正目的不是拯救所有人，而是让少数精英独占科技。`],
      ],
      adult: [
        [`成年后的你已是一位著名科学家。你面临抉择：继续为避难所工作，获得无限的资源但服务于精英；或者离开，用科技帮助所有废土居民。`, `你在{location}发现了一种能加速植物生长的辐射中和剂——这可能是解决废土粮食危机的关键。`],
        [`你可以选择：将中和剂的配方献给避难所，换取荣华富贵但让技术被垄断；或者公开配方，让所有定居点都能自产粮食。`, ``, '献给避难所', '公开配方', 1.0],
      ],
      special: [
        [`你选择了公开配方。中和剂很快传遍了整个废土，饿死的人越来越少。避难所高层暴怒，但已无法阻止技术的传播。`, `你在{location}建立了"废土科学院"，不分出身、不论立场，所有对科学有兴趣的人都可以来学习。`],
        [`百年后，你的科学院培养出了无数人才。他们修复了电网、净化了水源、甚至开始重建通讯网络。`, `你临终前说："知识不应该被锁在保险柜里。战前文明之所以毁灭，就是因为知识只属于少数人。"`],
      ],
    },
    mechanic: {
      name: '机械师',
      childhood: [
        [`你出生在{location}的一个废弃修车厂里。你的摇篮是一台翻倒的摩托车，你的第一个朋友是一把扳手。`, `作为机械师的后代，你从小就展现出对机械的惊人天赋。五岁时，你拆开了一台收音机，又原样装了回去。`],
        [`你在{location}的垃圾场里找到了一台战前机器人的残骸。你花了整整一年，将它修复成了你的第一个"机械伙伴"。`, `{npc}看中了你的天赋，收你为徒。他教你如何在废土中识别可用的零件，如何用有限的资源创造奇迹。`],
      ],
      growth: [
        [`十五岁那年，你造出了人生第一辆战车——用一辆报废的吉普车底盘、一台摩托引擎和无数的铁皮焊接而成。`, `你在{location}的废弃军事基地里发现了一整仓库的战前机械零件。你花了一个月，将它们全部搬运回了你的工坊。`],
        [`二十岁那年，你组建了废土上第一支"机械护卫队"——由你修复的战前机器人和改装战车组成的武装力量。`, `但你也引来了麻烦。一个大型掠夺者帮派盯上了你的技术，威胁你为他们制造战争机器。`],
      ],
      adult: [
        [`成年后的你已是废土上最著名的机械师。掠夺者帮派给你下了最后通牒：为他们制造战车，或者被毁灭。`, `你在{location}的工坊里，面对着堆积如山的零件。你可以选择屈服于暴力，或者用你的机械军团反抗。`],
        [`你可以选择：为掠夺者制造战争机器，换取暂时的安全但成为帮凶；或者武装你的机械军团，与掠夺者正面决战。`, ``, '屈服于暴力', '武装反抗', 1.0],
      ],
      special: [
        [`你选择了反抗。你的机械军团在{location}与掠夺者展开了决战。机器人、战车、无人机——你用钢铁与智慧，击败了数倍于己的敌人。`, `你成为了废土上的"钢铁守护者"。你宣布：任何掠夺者敢动无辜的定居点，就要先过你的机械军团这一关。`],
        [`百年后，你的工坊发展成了"废土工业大学"。无数年轻人在那里学习机械知识，修复战前科技。`, `你临终前，将你的最后一个发明——一台拥有自我学习能力的机器人——启动。你说："去保护那些无法保护自己的人。"`],
      ],
    },
    new_human: {
      name: '新人类',
      childhood: [
        [`你出生在{location}的一个秘密实验室里。你不是自然孕育的，而是战前基因工程的产物——"新人类计划"的最后一批实验体。`, `作为新人类，你从小就被告知：你是人类的进化版，比旧人类更聪明、更强壮、更长寿。但你从未见过其他同类。`],
        [`七岁那年，你在{location}的实验室里发现了其他"失败"的实验体——他们被冷冻在液氮罐中，永远沉睡。你开始质疑自己的存在意义。`, `{npc}是你的监护人，一位旧人类科学家。他告诉你："新人类不是神，也不是怪物。你们只是人类的一种可能。"`],
      ],
      growth: [
        [`十五岁那年，你第一次离开{location}，进入旧人类的世界。他们的目光中有恐惧、有嫉妒、也有好奇。`, `你在{location}遇到了一个旧人类少年。他和你一样大，但比你瘦弱得多。你们成为了朋友——这是第一次跨物种的友谊。`],
        [`二十岁那年，旧人类与新人类的冲突爆发了。有人主张新人类应该统治旧人类，有人主张和平共存。你站在十字路口。`, `{npc}告诉你一个秘密：新人类计划并没有终止，实验室里还有数千个胚胎在等待唤醒。`],
      ],
      adult: [
        [`成年后的你已完全觉醒了自己的新人类能力。但你也发现了一个可怕的真相：新人类的基因存在缺陷，所有新人类都会在五十岁前因基因崩溃而死亡。`, `你在{location}的实验室里，面对着数千个胚胎。你可以选择唤醒他们，延续新人类的火种；或者销毁他们，让新人类计划彻底终结。`],
        [`你可以选择：继续推进新人类计划，唤醒所有胚胎，建立一个新人类主导的世界；或者放弃新人类的优越性，寻找与旧人类融合的方法。`, ``, '推进新人类计划', '放弃优越性', 1.0],
      ],
      special: [
        [`你选择了放弃优越性。你与旧人类科学家合作，研究出了能将新人类基因优势稳定传递给下一代的技术——不再区分新旧，所有人类都可以变得更强大。`, `你关闭了{location}的秘密实验室，释放了所有胚胎。你说："我们不叫新人类，也不叫旧人类。我们只是——人类。"`],
        [`百年后，你的技术让人类整体进化了一个台阶。没有新人类和旧人类的区别，只有愿意进化和拒绝进化的人。`, `后人称你为"融合者"。你的墓碑上没有头衔，只有一句话："进化不是为了优越，是为了共存。"`],
      ],
    },
    doctor: {
      name: '废土医生',
      childhood: [
        [`你出生在{location}的一个临时诊所里。你的父母不是医生，但你是被{npc}从废墟中捡回来的弃婴——一场瘟疫中唯一的幸存者。`, `作为废土医生的养子，你从小就在{location}的诊所里帮忙。你学会了如何缝合伤口、如何分辨草药、如何在缺乏药品的情况下救人。`],
        [`七岁那年，{location}爆发了一场辐射病。你看着{npc}连续三天三夜没有睡觉，救活了一个又一个人。你说："长大后，我也要成为这样的人。"`, `你在{location}的旧医院里发现了一批战前药品。虽然大部分已经过期，但你和{npc}一起从中提炼出了有效成分。`],
      ],
      growth: [
        [`十五岁那年，你第一次独立完成了手术——在{location}的一个废弃工厂里，用一把生锈的手术刀救了一个被丧尸咬伤的猎人。`, `你在{location}遇到了一个神秘的流浪医生。他教会了你一种失传的技术：用变异植物的提取物来中和辐射。`],
        [`二十岁那年，你成为了{location}最年轻的主治医生。但你也发现，有些病不是医术能治好的——有些人的灵魂已经死了。`, `你在{location}救了一个濒死的掠夺者。醒来后，他问你为什么要救敌人。你说："在我眼里，没有敌人，只有病人。"`],
      ],
      adult: [
        [`成年后的你已是一位传奇医生。但废土上最可怕的瘟疫爆发了——"凋零病"，感染者在三天内化为灰烬。`, `你在{location}的实验室里，发现凋零病不是自然产生的，而是某个组织制造的生化武器。你可以选择公开真相，或者保守秘密以防止恐慌。`],
        [`你可以选择：全力研究解药，不惜一切代价拯救感染者；或者将情报出售给避难所，换取安全但让更多人死去。`, ``, '全力研究解药', '出售情报换安全', 1.0],
      ],
      special: [
        [`你选择了全力研究解药。经过七天七夜不眠不休的实验，你终于在{location}找到了治愈凋零病的方法——用你自己的血液作为培养基。`, `你救了数千人，但自己的身体也付出了巨大代价。{npc}看着你苍白的脸，说："你救了所有人，除了你自己。"`],
        [`你成为了废土上的"白衣天使"。无论你走到哪里，人们都会自发为你让路、为你提供补给。`, `百年后，你的医术被整理成《废土医典》，成为了所有医生的必读书。书的第一页写着："在废土上，最稀缺的资源不是水，不是食物，是希望。"`],
      ],
    },
    scavenger: {
      name: '拾荒者',
      childhood: [
        [`你出生在{location}的一个垃圾场里。你的第一个摇篮是一堆废铁，你的第一顿饭是从垃圾堆里翻出来的罐头。`, `作为拾荒者的后代，你从小就练就了一双"火眼金睛"。在{location}的垃圾山里，你能一眼分辨出哪些废料有价值。`],
        [`八岁那年，你在{location}的垃圾堆深处发现了一个密封的保险箱。里面没有金银珠宝，只有一本战前的技术手册和一张地图。`, `{npc}告诉你："拾荒者不只是在捡垃圾，我们是在回收文明的碎片。每一块电路板、每一页纸，都是人类曾经辉煌的证明。"`],
      ],
      growth: [
        [`十五岁那年，你按照地图的指引，找到了{location}的一处战前仓库。里面堆满了未被破坏的物资——药品、工具、武器。你一夜暴富。`, `你在{location}遇到了一个老拾荒者。他教会了你一门失传的手艺：如何将废铁锻造成坚固的护甲。`],
        [`二十岁那年，你建立了废土上最大的"回收商队"。你的车队穿梭于各个定居点之间，用垃圾换来的物资维系着废土的经济命脉。`, `但你也引来了嫉妒。一个大型商会想要垄断废土的贸易，开始对你的商队进行打压和劫掠。`],
      ],
      adult: [
        [`成年后的你已是废土上最著名的"拾荒王"。但商会的打压越来越激烈，他们甚至悬赏你的人头。`, `你在{location}发现了一处战前地下金库，里面存储着足以改变废土格局的物资。但如何分配，成了最大的问题。`],
        [`你可以选择：独占金库，成为废土最富有的人；或者将物资分配给所有定居点，建立公平的贸易网络。`, ``, '独占金库', '公平分配', 1.0],
      ],
      special: [
        [`你选择了公平分配。各个定居点因为你而获得了发展的机会，商会的影响力被大大削弱。`, `你在{location}建立了"废土交易所"，制定了废土上的第一条贸易规则：禁止垄断、禁止欺诈、保护商队安全。`],
        [`百年后，你的交易所成为了废土经济的心脏。商人们在这里交易、谈判、解决纠纷。`, `后人称你为"废土财神"。但你的雕像手里握着的不是金币，而是一块废铁——提醒你也是从垃圾堆里走出来的。`],
      ],
    },
    preacher: {
      name: '传教士',
      childhood: [
        [`你出生在{location}的一座教堂废墟里。你的父母不是信徒，但你是被{npc}从丧尸口中救下来的孤儿——传教士收养了你。`, `作为传教士的养子，你从小就听着战前宗教的故事长大。{npc}告诉你："信仰不是逃避现实，而是在绝望中找到继续活下去的理由。"`],
        [`七岁那年，你在{location}遇到了一个濒临死亡的幸存者。他问你："神真的存在吗？为什么世界会变成这样？"你答不上来，但握着他的手直到他闭上眼睛。`, `你在{location}的旧图书馆里发现了一本战前的《圣经》，但你更感兴趣的是里面夹着的笔记——一个科学家在末日来临前写下的思考。`],
      ],
      growth: [
        [`十五岁那年，你开始独自在{location}传教。你的话语没有宗教的教条，只有对生命的尊重和对希望的坚持。`, `你在{location}遇到了一个"末日教派"，他们宣扬世界已经无法拯救，唯一的出路是毁灭一切。你与他们展开了激烈的辩论。`],
        [`二十岁那年，你的名声传遍了废土。人们称你为"希望使者"——不是因为你带来了神的奇迹，而是因为你让他们相信自己还有未来。`, `但你也面临着诱惑。一个大型势力邀请你加入，条件是你要用信仰为他们服务、控制民众。`],
      ],
      adult: [
        [`成年后的你已是废土上最具影响力的精神领袖。但你也发现，权力正在腐蚀你的初心——越来越多的人崇拜你，而不是你传扬的理念。`, `你在{location}做出了一个大胆的决定：解散你的追随者，让他们各自回到自己的生活中去，将希望的种子播撒到废土的每一个角落。`],
        [`你可以选择：继续维持你的宗教帝国，享受权力和崇拜；或者放弃一切，做一个孤独的传道者。`, ``, '维持宗教帝国', '放弃一切传道', 1.0],
      ],
      special: [
        [`你选择了放弃一切。你独自一人走在废土上，没有随从、没有护卫，只有一本旧书和一颗坚定的心。`, `你在{location}的一个定居点停下来，为那里的人讲了一个故事——关于战前的人类如何面对灾难、如何互相扶持。`],
        [`百年后，你的故事被传颂于废土的每一个角落。没有教堂供奉你，但每个营火旁都有人讲述"那个孤独的传道者"。`, `后人称你为"废土圣徒"。但你知道，你不是圣徒，你只是一个在末日里不肯放弃希望的人。`],
      ],
    },
    beast_tamer: {
      name: '驯兽师',
      childhood: [
        [`你出生在{location}的变异森林边缘。你的父母在一次兽潮中丧生，你是被一只变异母狼抚养长大的。`, `作为驯兽师，你从小就能与变异兽沟通。其他孩子害怕{location}的变异犬，你却能和它们一起玩耍。`],
        [`七岁那年，你在{location}救了一只受伤的变异幼兽。它成为了你的第一个伙伴——一只拥有火焰能力的变异犬。`, `{npc}发现了你的天赋，告诉你："变异兽不是怪物，它们是这个世界的新居民。理解它们，你就能与它们共存。"`],
      ],
      growth: [
        [`十五岁那年，你驯服了{location}的一头变异巨熊。它成为了你的坐骑和守护者，让所有人都不敢轻视你。`, `你在{location}遇到了一群猎杀变异兽的赏金猎人。他们屠杀变异兽只为获取它们的器官卖钱，你与他们对峙。`],
        [`二十岁那年，你组建了废土上第一支"兽群护卫队"——由你驯服的变异兽组成的特殊武装力量。`, `但你也面临抉择：变异兽越来越聪明，有些甚至开始表现出与人类相当的智力。它们应该被当作工具，还是被当作同伴？`],
      ],
      adult: [
        [`成年后的你已是废土上最著名的驯兽师。你驯服的变异兽军团让所有人畏惧。但一只你从小养大的变异狼突然开口说话了——"我们不想再战斗了。"`, `你在{location}遇到了变异兽的领袖——一头拥有智慧的变异虎。它提出了一个惊人的建议：人类与变异兽建立平等联盟。`],
        [`你可以选择：尊重变异兽的意愿，与它们建立平等联盟；或者拒绝它们的诉求，继续将变异兽当作工具和武器。`, ``, '建立平等联盟', '继续当作工具', 1.0],
      ],
      special: [
        [`你选择了建立平等联盟。人类与变异兽开始在{location}共同生活、共同劳作、共同防御。这是废土上从未有过的景象。`, `你的联盟吸引了越来越多的变异兽和人类加入。{npc}感叹："你做到了战前人类都做不到的事——与其他物种和平共存。"`],
        [`百年后，人类与变异兽的联盟成为了废土上最强大的势力之一。你们的城市里有人类的房屋，也有变异兽的巢穴。`, `后人称你为"兽王"。但变异兽们叫你"第一朋友"——因为在所有人类中，你是第一个真正尊重它们的人。`],
      ],
    },
  };

  // 遍历所有身份，生成事件模板
  Object.entries(identityStories).forEach(([id, story]) => {
    const chainPrefix = `chain_${id}`;

    // 童年专属 2个
    story.childhood.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 3 + i * 4, 8 + i * 4, 0.88, texts, {
        identityExclusive: id,
        effects: rand([{ special: 5 }, { strength: 4, luck: 2 }, { intelligence: 5 }]),
        flags: [`${chainPrefix}_childhood_${i}`],
      }));
    });

    // 少年专属 2个 — 依赖童年链式标记
    story.growth.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 14 + i * 5, 20 + i * 5, 0.82, texts, {
        identityExclusive: id,
        effects: rand([{ strength: 6 }, { intelligence: 6 }, { special: 6 }, { charisma: 4, luck: 3 }]),
        requiredFlags: [`${chainPrefix}_childhood_0`],
        flags: [`${chainPrefix}_growth_${i}`],
        chainPriority: 1,
      }));
    });

    // 成年专属 2个 — 依赖少年链式标记
    story.adult.forEach((texts, i) => {
      const isChoiceStage = texts.length >= 5 && texts[1] === '';
      const opts = isChoiceStage ? {
        choices: [
          choice(texts[2], 1.0, `你选择了${texts[2]}，从此踏上了一条不归路。`, `你选择了${texts[2]}，但命运弄人，一切并未如你所愿。`, rand([{ strength: 10, special: 5 }, { intelligence: 10, luck: 5 }, { charisma: 10, health: 5 }]), { health: -10, luck: -5 }, [`branch_identity_${id}_path`], [`branch_identity_${id}_path_fail`]),
          choice(texts[3], 1.0, `你选择了${texts[3]}，虽然道路不同，但终点未必更差。`, `你选择了${texts[3]}，却发现这条路比你想象的更加艰难。`, rand([{ luck: 8, charisma: 5 }, { intelligence: 8, special: 3 }]), { strength: -3 }, [`branch_identity_${id}_new`], [`branch_identity_${id}_new_fail`]),
        ]
      } : {};
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 26 + i * 10, 35 + i * 10, isChoiceStage ? 0.90 : 0.78, isChoiceStage ? [texts[0]] : texts, {
        identityExclusive: id,
        effects: isChoiceStage ? {} : rand([{ strength: 8 }, { intelligence: 8 }, { special: 8 }]),
        requiredFlags: [`${chainPrefix}_growth_0`],
        flags: [`${chainPrefix}_adult_${i}`],
        chainPriority: 2,
        ...opts,
      }));
    });

    // 特殊剧情 2个 — 依赖成年链式标记
    story.special.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 10 + i * 20, 30 + i * 30, 0.75, texts, {
        identityExclusive: id,
        effects: rand([{ special: 10, health: -5 }, { strength: 8, luck: 5 }, { intelligence: 10 }]),
        requiredFlags: [`${chainPrefix}_adult_0`],
        flags: [`${chainPrefix}_special_${i}`],
        chainPriority: 3,
      }));
    });
  });

  return T;
}

// ============================================================
// 废材逆袭事件生成器（末日废土）
// ============================================================

function generateApocalypseTrashEvents(w) {
  const T = [];
  const { prefix } = w;

  // 阶段1（0-6）：被判定为辐射弱体质，发现另类生存之道
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 0, 6, 0.92, [
    `基因检测那日，{location}的检测仪器显示你的身体对辐射极度敏感。{npc}摇头叹息："辐射弱体质，在废土上活不过二十岁。"所有人都用怜悯的目光看着你。`,
    `作为辐射弱体质者，你无法像其他人一样在{location}的地表自由活动。哪怕是最轻微的辐射暴露，都会让你生病发烧。他们叫你"温室里的花朵"。`,
  ], { talentExclusive: 'trash', effects: { special: -5, strength: -2, intelligence: 3 }, flags: ['trash_childhood_start'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 4, 10, 0.88, [
    `你不甘心。每日在{location}的地下掩体里，你研究战前的医学文献，寻找对抗辐射的方法。{npc}路过时皱眉："弱体质就是弱体质，看书有什么用？"`,
    `你在{location}的旧书堆里淘到了半本残破的《战前免疫学》。书中说："辐射并非不可战胜，关键在于激活人体自身的修复机制。"你如获至宝。`,
  ], { talentExclusive: 'trash', effects: { strength: 3, intelligence: 2, luck: 2 }, requiredFlags: ['trash_childhood_start'], flags: ['trash_childhood_1'] }));

  // 阶段2（12-25）：暗中积累，以智慧和知识弥补体质缺陷
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 12, 18, 0.85, [
    `你按照书中的方法，在{location}的实验室里调配了一种增强免疫力的药剂。第一次注射时，剧痛让你昏死过去。醒来时，你发现自己对辐射的耐受度提高了！`,
    `别的强壮者可以赤手空拳在废土上生存，你不行。但你在{location}日复一日地研究药剂和装备，从未间断。{npc}偶然看到你的笔记，震惊地说："这...这是战前失传的医疗技术？"`,
  ], { talentExclusive: 'trash', effects: { strength: 5, health: 3, special: 2 }, requiredFlags: ['trash_childhood_1'], flags: ['trash_growth_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 15, 22, 0.80, [
    `你在{location}救了一位被辐射严重烧伤的幸存者。你用自己的药剂救了他的命，他感激之下，传授了你一套独门的避难所工程技术——这是连大势力都没有的秘法！`,
    `{npc}被你的毅力打动，决定收你为记名弟子。他说："我这一生见过无数强壮的战士，但像你这样的'书呆子'，还是第一个。"你终于有了师父。`,
  ], { talentExclusive: 'trash', effects: { strength: 7, health: 5, charisma: 2 }, requiredFlags: ['trash_growth_0'], flags: ['trash_growth_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 18, 25, 0.75, [
    `经过多年的研究，你在{location}遇到了一个瓶颈——药剂的效力已到达极限，再想提升，需要更先进的设备。一位路过的老科学家告诉你："知识之路，需要理论与实验的结合。"`,
    `你在{location}的废弃医院里闭关三月，终于突破了第一重技术难关。出关时，你带着自己设计的防辐射服——虽然行动不便，但能让你在地表生存整整一天！`,
  ], { talentExclusive: 'trash', effects: { strength: 8, intelligence: 3, luck: 3 }, requiredFlags: ['trash_growth_1'], flags: ['trash_growth_2'] }));

  // 阶段3（26-45）：崭露头角，以智慧战胜暴力
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 26, 35, 0.78, [
    `{location}举办了一场废土生存竞赛，你以"技术展示"的身份报名参加。所有人都嘲笑你："一个辐射弱体质的废物，也配参加生存竞赛？"`,
    `竞赛第一轮，你对上了一名强壮的掠夺者。对方力大无穷，武器精良。你不慌不忙，启动了自制的干扰器——对方的武器系统瞬间瘫痪！全场寂静。`,
  ], { talentExclusive: 'trash', effects: { strength: 8, charisma: 6, special: 3 }, requiredFlags: ['trash_growth_2'], flags: ['trash_adult_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 30, 40, 0.72, [
    `你的"技术生存法"震惊了废土。{npc}说你是"万古以来第一个以辐射弱体质在废土上立足的人"。各大势力开始重新审视"技术"这条被遗忘的道路。`,
    `你在{location}建立了一座小小的"技术庇护所"，专门招收被判定为"废物"的孩子。你说："体质决定起点，但智慧和毅力决定终点。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 7, intelligence: 5, luck: 3 }, requiredFlags: ['trash_adult_0'], flags: ['trash_adult_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 45, 0.68, [
    `昔日嘲笑你的同村壮汉在{location}与你重逢。他依然强壮，但已经落了一身辐射病。而你虽然瘦弱，却健康地活着。他跪地痛哭："当年是我有眼无珠..."你将他扶起。`,
    `{legend}的传承之地开启，你说服众人让你这个"辐射弱体质的废物"也进去试试。他们抱着看笑话的心态同意了——但很快，他们就笑不出来了。`,
  ], { talentExclusive: 'trash', effects: { strength: 6, luck: 5, special: 4 }, requiredFlags: ['trash_adult_1'], flags: ['trash_adult_2'] }));

  // 逆袭关键事件 — 含选择分支
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 28, 42, 0.65, [
    `废土生存竞赛的决赛上，你对上了废土上最强壮的战士。对方是掠夺者帮派的老大，而你连一把像样的武器都没有。所有人都认为这是一场屠杀——但他们错了。`,
    `比赛开始前，{npc}暗中塞给你一块芯片："这是战前的'智能核心'，能让你的设备短时间内运算速度提升十倍，但事后会烧毁核心。用不用，你自己决定。"`,
  ], {
    talentExclusive: 'trash',
    effects: { intelligence: 3 },
    requiredFlags: ['trash_adult_1'],
    flags: ['trash_climax_0'],
    chainPriority: 2,
    choices: [
      choice('使用智能核心，全力一战', 1.0, '智能核心让你的设备爆发出了前所未有的运算速度！你黑入了对方的装甲系统，将其反锁——全场震撼，万古未有！', '智能核心烧毁了你的主控设备，虽然赢了比赛，但你需要数年才能重建系统', { intelligence: 15, charisma: 10, special: 5, health: -20 }, { intelligence: 5, charisma: 3, health: -30 }, ['branch_trash_fight'], ['branch_trash_fight_fail']),
      choice('拒绝核心，以本真之力战斗', 1.0, '你没有借助外力，仅凭基础装备与对方周旋百招。虽然最终惜败，但你赢得了所有人的尊重！', '你拒绝了核心，但实力差距太大，被一招击败。众人摇头："果然，废物就是废物。"', { charisma: 10, luck: 8, intelligence: 5 }, { charisma: -5, health: -15 }, ['branch_trash_persist'], ['branch_trash_persist_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 50, 0.60, [
    `你在{location}遇到了一位神秘老科学家。他打量你许久，说："你的技术已经触及了战前文明的核心。若想再进一步，需要进入'数据核心'——那里有'万能公式'，可以让辐射弱体质者获得真正的生存能力。"`,
    `老者给了你两个选择：他可以帮你打开数据核心的通道（九死一生）；或者传你一套更稳妥的进阶理论（进展缓慢但安全）。`,
  ], {
    talentExclusive: 'trash',
    effects: { special: 3 },
    requiredFlags: ['trash_climax_0'],
    flags: ['trash_climax_1'],
    chainPriority: 2,
    choices: [
      choice('闯入数据核心，向死而生', 1.0, '你闯入了数据核心，面对无数自动防御系统和陷阱。最终，你找到了"万能公式"——那一刻，你第一次真正感受到了掌控命运的自由！', '数据核心的防御系统超出了你的预期。虽然侥幸逃生，但你的主设备被毁，需要数十年才能重建', { intelligence: 20, special: 10, health: -25 }, { health: -40, intelligence: 3 }, ['branch_trash_transform'], ['branch_trash_transform_fail']),
      choice('稳扎稳打，不求速成', 1.0, '你选择了更稳妥的道路。虽然进展缓慢，但根基无比扎实。老者点头："大器晚成，方得始终。"', '稳妥之路需要的时间远超你的寿元。你知道，自己可能等不到大成的那一天了', { intelligence: 10, strength: 5, health: 5 }, { intelligence: 3, luck: -3 }, ['branch_trash_persist2'], ['branch_trash_persist2_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 40, 55, 0.55, [
    `你的故事传遍了废土。{location}的技术庇护所每天都有人慕名而来——不是天才，而是那些被判定为"废物"的孩子。`,
    `{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。不是因为我更强，而是因为我从未停下。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 5, special: 5 }, requiredFlags: ['trash_climax_1'], flags: ['trash_climax_2'], chainPriority: 3 }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 45, 60, 0.50, [
    `你推导出了"万能公式"，成为了废土历史上第一个以辐射弱体质之身建立独立势力的人。没有强壮的肌肉、没有变异能力，仅凭一台电脑和无数公式，你创造了属于自己的奇迹！`,
    `你成为了废土上的传奇。后人称你为"智核"，你的故事激励了无数被判定为废物的人——废土，终于不再只属于强者。`,
  ], { talentExclusive: 'trash', effects: { intelligence: 10, strength: 5, charisma: 10, special: 10 }, requiredFlags: ['trash_climax_2'], flags: ['trash_legend'], chainPriority: 3 }));

  // 废材老年
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 55, 80, 0.60, [
    `你在{location}收徒传道，专门招收辐射弱体质的孩子。你说："体质决定起点，但智慧和选择决定终点。"`,
    `你的弟子中有人发明了新的医疗设备，有人以技术之身成为了大势力顾问。{npc}感叹："你一人之力，改变了一个时代的废土格局。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 8, intelligence: 5 }, requiredFlags: ['trash_legend'], flags: ['trash_elder_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 60, 90, 0.55, [
    `大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。`,
    `你微笑着说："如果重来一次，我还是会选择做那个辐射弱体质的废物。因为正是'废物'二字，让我找到了属于自己的生存之道。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 6, health: -5 }, requiredFlags: ['trash_elder_0'], flags: ['trash_elder_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 70, 100, 0.50, [
    `你离世的那天，{location}下起了绿色的雨——那是你发明的净化装置在工作。无数你曾经帮助过的人自发前来为你送行。`,
    `你的精神没有消失，而是化作了一道数据流，融入了废土的通讯网络。后人传说，每当强者恃强凌弱时，某个频道就会响起一句警告——那是你在提醒他们：不要小看任何一个"废物"。`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 10 }, requiredFlags: ['trash_elder_1'], flags: ['trash_ending'] }));

  return T;
}

// ============================================================
// 重大抉择事件生成器（末日废土）
// ============================================================

function generateApocalypseMajorChoices(w) {
  const T = [];
  const { prefix } = w;

  // 重大抉择1：生存之道（15岁）— 避难所安全 vs 废土自由 vs 掠夺者暴力
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 15, 15, 0.98, [
    `你站在{location}的岔路口，{npc}告诉你："少年，废土上有三条路。留在避难所，安全但束缚；踏入废土，自由但危险；加入掠夺者，强大但堕落。选一条吧。"`,
  ], {
    choices: [
      choice('留在避难所（安全但束缚）', 1.0, '你选择了避难所的安全。你在地下掩体中接受了系统的训练，知识和技能突飞猛进。但每当听到地表的风声，你都会感到一丝遗憾', '你选择了避难所，但封闭的生活让你窒息。你开始怀疑，这种安全是否真的值得', { intelligence: 10, special: 8 }, { charisma: -10, intelligence: 5 }, ['major_shelter'], ['major_shelter_fail']),
      choice('踏入废土（自由但危险）', 1.0, '你选择了踏入废土。辐射、丧尸、掠夺者——每一步都可能是最后一步。但你也看到了地下从未有过的风景：落日、星空、和自由的风', '你选择了废土，但现实比想象残酷。第一次遭遇掠夺者，你差点丧命', { charisma: 10, luck: 8 }, { charisma: -5, luck: -8 }, ['major_wasteland'], ['major_wasteland_fail']),
      choice('加入掠夺者（强大但堕落）', 1.0, '你选择了掠夺者的道路。暴力成为了你的语言，恐惧成为了你的武器。你变得强大，但你的心也越来越冷', '你选择了掠夺者，却在第一次劫掠中发现了自己无法逾越的道德底线。你逃走了，但已无法回头', { strength: 12, special: 5 }, { health: -25, intelligence: -5 }, ['major_raider'], ['major_raider_fail']),
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  }));

  // 避难所后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `因为你选择了避难所，{location}的资源开始优先向你倾斜。你的知识储备远超同龄人，但你对外面世界的了解仅限于书本。`,
    `你在{location}苦学五年，成为了避难所最年轻的技术专家。但你的同伴们说你的眼中"已经没有对自由的渴望"。`,
  ], { requiredFlags: ['major_shelter'], effects: { intelligence: 8, special: 6 }, flags: ['major_shelter_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你因为追求知识而获得了强大的技术能力，但{npc}警告你："安全不是牢笼。战前的避难所居民，最终都因为封闭而灭亡。"`,
    `你的技术达到了新的高度，{location}的电力系统因为你的改进而恢复了运转。但你发现，你已经想不起太阳的温度了。`,
  ], { requiredFlags: ['major_shelter_1'], effects: { special: 10, intelligence: 5, charisma: -5 } }));

  // 废土后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `因为你选择了废土，在{location}遇到了一个流浪者家庭。他们不懂技术，但他们懂如何在辐射中生存。你们互相学习，成为了伙伴。`,
    `你在废土中流浪，在{location}建立了一座小型农场，免费为路人提供食物和水。{npc}说："你这不是在浪费资源吗？"你说："这就是我的生存之道。"`,
  ], { requiredFlags: ['major_wasteland'], effects: { charisma: 8, luck: 5, health: 5 }, flags: ['major_wasteland_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你在废土之路上的经历让你领悟了"共存道"——不同于避难所的"隔离道"，共存道认为只有经历过危险，才能真正理解生存。{location}的居民们开始模仿你的道路。`,
    `{npc}告诉你，你的共存道正是战前"绿洲计划"所追求的。你冥冥之中，走上了最接近人类本意的道路。`,
  ], { requiredFlags: ['major_wasteland_1'], effects: { charisma: 8, luck: 6, special: 4 } }));

  // 掠夺者后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `因为你选择了掠夺者，在{location}建立了自己的威名。你的枪下，敌人闻风丧胆。但你也开始被其他定居点警惕——你的杀气太重了。`,
    `你在{location}遇到了一个被掠夺者摧毁的村庄。幸存者看着你，眼中没有恐惧，只有仇恨。你开始怀疑：这真的是我要的生存之道吗？`,
  ], { requiredFlags: ['major_raider'], effects: { strength: 8, charisma: -3 }, flags: ['major_raider_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你因为追求暴力而获得了强大的实力，但{npc}警告你："以暴制暴，自古以来只有一人成功——那就是开创掠夺者帝国的'废土之王'。其余所有人，都变成了只知道杀戮的怪物。"`,
    `你的杀意越来越重，{location}的飞鸟经过你上空都会惊飞。你开始怀疑：这真的是我要的吗？`,
  ], { requiredFlags: ['major_raider_1'], effects: { strength: 10, special: 5, intelligence: -5 } }));

  // 重大抉择2：废土未来（30岁）— 净化世界 vs 适应辐射 vs 利用变异统治
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 30, 0.97, [
    `{location}发生了一件震动废土的大事。一个神秘组织宣称找到了"净化装置"，可以消除全球辐射、恢复战前生态。但你在调查中发现了真相——那个装置需要牺牲所有变异者作为能量源。{npc}向你提出了一个交易：支持净化计划，你将成为新世界的英雄；反对它，你将被所有渴望净化的人追杀。这是对你灵魂的考验。`,
  ], {
    choices: [
      choice('支持净化，消灭辐射', 1.0, '你冒着被变异者追杀的风险，公开支持净化计划。虽然失去了变异者的信任，但你的决心前所未有地坚定——你知道，真正的未来不是适应辐射，而是消灭它', '你支持了净化计划，但没有人相信你。变异者反咬一口，说你是种族灭绝的帮凶。你被驱逐，四处流亡', { intelligence: 10, charisma: 6, luck: 5 }, { health: -20, charisma: -10, strength: -5 }, ['major_purify'], ['major_purify_fail']),
      choice('反对净化，保护变异者', 1.0, '你选择了反对净化计划，暗中联合变异者势力。三年后，你掌握了净化装置背后组织的完整阴谋，一举摧毁了他们的核心实验室', '你的反对被当作默认。你越来越深地卷入了废土的黑暗面，等你想要抽身时，已经来不及了', { intelligence: 8, luck: 6 }, { charisma: -8, luck: -5 }, ['major_protect_mutant'], ['major_protect_mutant_fail']),
      choice('利用变异，建立统治', 1.0, '你利用这个秘密要挟净化组织，获得了大量资源和地位。但你也知道，从这一刻起，你和他们没有区别了', '你的要挟被反制。净化组织以"勾结变异者"的罪名将你列入追杀名单，你的废土之路到此终结', { strength: 8, special: 5 }, { charisma: -15, luck: -10, health: -20 }, ['major_rule'], ['major_rule_fail']),
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  }));

  // 净化后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `因为你支持了净化，{location}的纯人类们自发聚集到你身边。你的净化之名吸引了无数渴望恢复战前世界的人——你们成为了废土最特殊的"重建势力"。`,
    `你在{location}建立了一个"净化研究所"，专门研究消除辐射的方法。变异者视你为眼中钉，但普通居民将你奉为神明。`,
  ], { requiredFlags: ['major_purify'], effects: { intelligence: 8, charisma: 8, luck: 5 } }));

  // 保护变异者后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `你因为保护变异者而获得了他们的信任。他们让你参与了更多机密，你也因此掌握了更多内幕。{npc}感叹："你是潜伏在黑暗中的光。"`,
    `你在{location}发现了更大的阴谋——净化组织与某些大势力的内斗，其实是某位战前科学家留下的棋子博弈。而你，正在成为第三颗棋子。`,
  ], { requiredFlags: ['major_protect_mutant'], effects: { intelligence: 10, luck: 5, special: 3 } }));

  // 统治后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `你因为不择手段而获得了强大的力量和资源。但{npc}看你的眼神变得复杂——那不是敬畏，那是怜悯。你在{location}建立了自己的势力，却发现自己越来越孤独。`,
    `废土之王因为你的黑暗之路而对你产生了兴趣。他说："避难所培养出来的暴君，比掠夺者更纯粹。你来吧，我给你想要的一切。"`,
  ], { requiredFlags: ['major_rule'], effects: { strength: 10, special: 6, charisma: -8 } }));

  // 重大抉择3：物种命运（45岁）— 人类统一 vs 变异者独立建国 vs 毁灭一切
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 45, 45, 0.96, [
    `废土上的局势已经到了临界点。纯人类和变异者的冲突愈演愈烈，战争一触即发。{npc}告诉你："你有足够的声望和力量来影响这场战争的走向。你可以选择：推动人类统一，让所有人在一个旗帜下共存；支持变异者独立建国，承认他们与人类的平等地位；或者推动全面战争，让废土在毁灭中重生。"`,
  ], {
    choices: [
      choice('推动人类统一，共存共荣', 1.0, '你选择了推动统一。经过无数次谈判和妥协，你终于在{location}签署了《废土共存协议》——纯人类和变异者第一次在同一个政权下和平共处！', '你试图推动统一，但双方的仇恨太深了。协议签署当天，刺客杀死了双方的代表，战争全面爆发', { charisma: 15, intelligence: 10, luck: 5 }, { health: -30, charisma: -10, strength: -10 }, ['major_unify'], ['major_unify_fail']),
      choice('支持变异者独立建国', 1.0, '你选择了支持变异者独立。他们在{location}建立了"新纪元共和国"，成为了废土上第一个由变异者主导的国家。虽然纯人类不满，但和平的曙光已经出现', '你支持了变异者独立，但纯人类势力发动了全面围剿。新成立的共和国在战火中摇摇欲坠', { intelligence: 10, luck: 8, special: 10 }, { health: -25, charisma: -8 }, ['major_independent'], ['major_independent_fail']),
      choice('推动全面战争，毁灭重生', 1.0, '你选择了最极端的道路。战争席卷了整个废土，无数人在战火中丧生。但你也相信——只有彻底的毁灭，才能带来真正的新生', '战争超出了你的控制。核冬天再次降临，废土变成了真正的地狱。你成为了历史的罪人', { strength: 15, special: 10 }, { health: -50, charisma: -20, intelligence: -10 }, ['major_destroy'], ['major_destroy_fail']),
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  }));

  // 统一后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你成功推动统一的消息传遍了废土。{location}的居民们将你的名字刻在了"和平纪念碑"上——那是记录所有为和平做出贡献的人的地方。`,
    `{npc}说你是废土历史上最伟大的谈判家。你的名字将被后世传颂，激励他们在仇恨面前永不放弃。`,
  ], { requiredFlags: ['major_unify'], effects: { charisma: 10, luck: 8, special: 6 } }));

  // 独立后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `变异者共和国的建立改变了废土的格局。{location}的变异者们第一次有了自己的家园，他们称你为"建国之父"。`,
    `{npc}赞叹你的勇气——"你不仅保护了变异者，你保护了所有被压迫者追求自由的权利。"`,
  ], { requiredFlags: ['major_independent'], effects: { intelligence: 10, charisma: 8, special: 5 } }));

  // 毁灭后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `战争的硝烟散去后，{location}变成了一片废墟。但正如你所预言的，废墟中开始长出新的生命——比战前更顽强、更适应环境的生命。`,
    `{npc}看着废墟中的嫩芽，说："你毁灭了一个世界，但也创造了一个新世界。历史会怎么评价你，取决于活下来的人。"`,
  ], { requiredFlags: ['major_destroy'], effects: { strength: 12, special: 8, charisma: -10 } }));

  // 重大抉择4：人生终局（60岁）— 意识上传 vs 自然死亡 vs 传承力量
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 60, 60, 0.95, [
    `你站在{location}的避难所主机前，人生的终局已经临近。战前遗留下来的主机可以上传你的意识，让你以数字生命的形式永远存在；或者你可以选择自然死亡，让你的肉体回归废土，成为传说；又或者，你可以将你的力量、知识和经验全部传承给下一代，然后平静地离去。`,
  ], {
    choices: [
      choice('意识上传，数字永生', 1.0, '你躺进了上传舱，意识被缓缓抽离肉体。当你再次"醒来"时，你已成为了避难所主机的一部分——你可以监控整个废土，保护所有你爱的人，直到永远', '上传过程中出现了意外。你的意识数据受损，虽然存在，但已不再是完整的"你"。你成为了主机中一段混乱的代码', { special: 20, intelligence: 15 }, { health: -100, special: -30 }, ['major_upload'], ['major_upload_fail']),
      choice('自然死亡，成为传说', 1.0, '你拒绝了上传。你在{location}度过了最后的时光，看着夕阳沉入地平线。你微笑着闭上了眼睛——你知道，你的故事将成为废土上最动人的传说', '你选择了自然死亡，但临终前你发现，没有人记得你的贡献。你孤独地离开了这个世界', { charisma: 15, health: 10, luck: 10 }, { health: -50, charisma: 5 }, ['major_legend'], ['major_legend_fail']),
      choice('传承力量，培育后人', 1.0, '你选择了传承。你将毕生所学、所有资源、甚至你的势力，都交给了一个年轻人。你说："我不是在结束，我是在开始。"然后，你平静地走向了最后的旅程', '你试图传承，但继承人背叛了你。你一生的心血毁于一旦，带着遗憾离开了世界', { charisma: 12, luck: 10, intelligence: 8 }, { charisma: -15, luck: -10, health: -30 }, ['major_legacy'], ['major_legacy_fail']),
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  }));

  // 上传后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你以数字生命的形式存在于主机中。你发现这里与凡界并无不同——有数据争斗、有系统漏洞、有不公。你说："既然我能改变废土，就能改变这里。"`,
    `你在数字世界中找到了志同道合者，开始策划让主机更好地服务于所有废土居民。你的战斗，才刚刚开始。`,
  ], { requiredFlags: ['major_upload'], effects: { special: 15, intelligence: 10, strength: 5 } }));

  // 传说后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你离世的举动感动了无数人。{location}建起了你的雕像，不是你的神像，而是一个普通老人的形象——因为你说："我不是神，我只是不想离开废土的凡人。"`,
    `你以凡人之躯活到了最后，见证了废土从毁灭到重生的全过程。临终前，你说："我不后悔。这片废土上的一草一木，都比数字世界更珍贵。"`,
  ], { requiredFlags: ['major_legend'], effects: { charisma: 12, luck: 10, health: 5 } }));

  // 传承后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你传承的力量在新一代手中发扬光大。{location}因为你培养的年轻人而变得更加繁荣。`,
    `临终前，你看着继承人的背影，微笑着说："我留下的不是权力，不是财富，而是希望。只要有希望，废土就永远不会灭亡。"`,
  ], { requiredFlags: ['major_legacy'], effects: { charisma: 10, luck: 8, intelligence: 5 } }));

  return T;
}

// ============================================================
// 境界突破事件生成器（末日废土）
// ============================================================

function generateApocalypseRealmEvents(w) {
  const T = [];
  const { prefix } = w;

  const realms = [
    { stage: 1, name: '废土行者', minAge: 15, maxAge: 25, prob: 0.92, reqText: '生存≥20、体质≥15', baseSuccess: 0.65, maxAgeGain: 80, desc: '废土行者是离开避难所的第一步。你将学会在辐射和丧尸的世界中独立生存。' },
    { stage: 2, name: '聚集地领袖', minAge: 30, maxAge: 45, prob: 0.88, reqText: '生存≥35、声望≥20、体质≥25', baseSuccess: 0.55, maxAgeGain: 120, desc: '聚集地领袖能够统御一方。你建立了自己的据点，成为废土上不可忽视的力量。' },
    { stage: 3, name: '觉醒变异者', minAge: 50, maxAge: 70, prob: 0.85, reqText: '生存≥50、变异度≥40', baseSuccess: 0.45, maxAgeGain: 200, desc: '觉醒变异者已能掌控体内的变异力量。你的身体发生了质变，获得了超乎常人的能力。' },
    { stage: 4, name: '废土之王', minAge: 80, maxAge: 110, prob: 0.82, reqText: '生存≥70、变异度≥60', baseSuccess: 0.35, maxAgeGain: 300, desc: '废土之王已能号令一方。你的名字让敌人闻风丧胆，让追随者心甘情愿为你赴死。' },
    { stage: 5, name: '末日领主', minAge: 130, maxAge: 170, prob: 0.78, reqText: '生存≥90、变异度≥80、体质≥60', baseSuccess: 0.30, maxAgeGain: 400, desc: '末日领主需直面废土最残酷的考验。九死一生，但一旦成功，便是半步永恒。' },
    { stage: 6, name: '新人类始祖', minAge: 200, maxAge: 260, prob: 0.75, reqText: '变异度≥100', baseSuccess: 0.25, maxAgeGain: 800, desc: '新人类始祖已触摸到进化的门槛。你的基因已超越了普通人类的极限。' },
    { stage: 7, name: '永恒存在', minAge: 300, maxAge: 400, prob: 0.70, reqText: '变异度≥120、知识≥100', baseSuccess: 0.20, maxAgeGain: 9000, desc: '超越生死，与废土同存。你已不再是普通的人类，而是永恒的存在。' },
  ];

  realms.forEach((r, idx) => {
    const prevFlag = idx === 0 ? null : `realm_breakthrough_${realms[idx-1].stage}`;
    const reqFlags = prevFlag ? [prevFlag] : [];

    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge, r.maxAge, r.prob, [
      `你在{location}历练多年，终于触摸到了${r.name}的门槛。{npc}告诉你："${r.desc}突破需要${r.reqText}。"`,
      `你的实力已达瓶颈，在{location}感应到了${r.name}的契机。但突破之路九死一生，稍有不慎便可能身死道消。`,
    ], {
      requiredFlags: reqFlags,
      flags: [`realm_attempt_${r.stage}`],
      chainPriority: 5,
      choices: [
        choice('全力冲击，不留退路', 1.0,
          `你孤注一掷，将全部力量灌注于自身。刹那间，天地变色，{location}的辐射能量疯狂涌入你的体内——你成功了！你突破到了${r.name}！`,
          `你全力冲击瓶颈，但能量反噬，身体严重受损。虽然保住了性命，但实力大跌，需要数年才能恢复。`,
          { realm: 1, special: 5, intelligence: 3, maxAge: r.maxAgeGain },
          { health: -30, special: -10, maxAge: -20 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail_${r.stage}`]
        ),
        choice('稳扎稳打，徐徐图之', 1.0,
          `你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了${r.name}。`,
          `你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的历练。突破失败。`,
          { realm: 1, special: 3, intelligence: 5, maxAge: Math.floor(r.maxAgeGain * 0.7) },
          { health: -15, special: -5, maxAge: -10 },
          [`realm_breakthrough_${r.stage}`, `realm_breakthrough_${r.stage}_steady`], [`realm_fail_${r.stage}_steady`]
        ),
        choice('放弃突破，继续积累', 1.0,
          `你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。`,
          '',
          { intelligence: 3, special: 2, strength: 2 },
          {},
          [`realm_delay_${r.stage}`], []
        ),
      ]
    }));

    // 突破成功后续事件
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 2, r.maxAge + 20, r.prob * 0.8, [
      `你突破到${r.name}的消息传遍了废土。{location}的居民们纷纷前来祝贺，你的名字被刻在了聚集地的"英雄碑"上。`,
      `{npc}看着你，眼中满是欣慰："从避难所居民到${r.name}，你走了${r.minAge}年。这速度，在废土上已是中上之资。"`,
    ], {
      requiredFlags: [`realm_breakthrough_${r.stage}`],
      flags: [`realm_stable_${r.stage}`],
      chainPriority: 2,
      effects: { charisma: 3, luck: 2 },
    }));

    // 突破失败后续事件（可以重试）
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 5, r.maxAge + 30, r.prob * 0.7, [
      `上一次突破${r.name}失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"`,
      `你的伤势已愈，实力甚至比以前更加精进。你再次感应到了${r.name}的契机——这一次，你更有把握。`,
    ], {
      requiredFlags: [`realm_fail_${r.stage}`],
      flags: [`realm_retry_${r.stage}`],
      chainPriority: 3,
      choices: [
        choice('再次冲击', 1.0,
          `第二次冲击，你总结了上次的教训，一举突破到了${r.name}！{location}的辐射因你而沸腾！`,
          `又一次失败。你开始怀疑，自己是否真的与${r.name}无缘...`,
          { realm: 1, special: 5, maxAge: r.maxAgeGain },
          { health: -40, special: -15, maxAge: -30 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail2_${r.stage}`]
        ),
      ]
    }));
  });

  return T;
}

// ============================================================
// 通用事件生成器（末日废土专用）
// 替代 generateCommonEvents 中的默认分支
// ============================================================

function generateApocalypseCommonEvents(w) {
  const T = [];
  const { prefix, scenes, npcs, legends } = w;

  // --- Childhood (0-12) 5 templates ---
  // 传说: 出生异象
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 0, 3, randProb('legendary'), [
    `你出生那天，{location}突然辐射读数归零，所有仪器失效。{npc}跪地叩拜，说你是千年一遇的${w.talentNames.legendary}。`,
    `你降生的瞬间，{location}的丧尸纷纷退避，{legend}的虚影在天际显现，整个废土为之震动。`,
    `你的第一声啼哭引发了{location}的电力系统暴动，{npc}颤抖着说："${w.talentNames.legendary}降世了！"`,
  ], { effects: { luck: 10, special: 8, charisma: 5 } }));

  // 史诗: 天赋觉醒
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 2, 7, randProb('epic'), [
    `你在{location}玩耍时，体内突然涌出一股热流。{npc}惊讶地发现你竟是${w.talentNames.good}之资！`,
    `三岁时，你在{location}无意间触发了战前的检测仪器，读数比所有人都高。`,
    `{npc}为你进行基因检测，{legend}的印记在你身上一闪而逝——你是被选中的人。`,
  ], { effects: { special: 6, intelligence: 4 } }));

  // 稀有: 小有奇遇
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 4, 9, randProb('rare'), [
    `你在{location}救了一只受伤的变异幼兽，它其实是{legend}的化身，临走前留下了一枚辐射结晶。`,
    `{npc}在你满月时送了一块战前芯片，后来你发现那是一件失落科技的碎片。`,
    `你从小就能看见别人看不见的{legend}幻影，{npc}说这是变异基因初现的征兆。`,
    `你在{location}挖到了一罐战前罐头，吃了一半后浑身发热，体质隐隐增强。`,
  ], { effects: rand([{ luck: 5 }, { special: 4 }, { intelligence: 4 }]) }));

  // 普通x2: 日常
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 0, 6, randProb('common', 0, 2), [
    `你生在普通人家，每天在{location}玩耍，日子平淡但快乐。`,
    `{npc}教你读书识字，你学得有模有样。`,
    `你在{location}认识了几个玩伴，度过了无忧无虑的童年。`,
    `家里虽然不富裕，但{npc}总是把最好的留给你。`,
  ], { effects: { charisma: 2, luck: 1 } }));

  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 3, 10, randProb('common', 1, 2), [
    `你在{location}帮{npc}干活，学会了很多生存技能。`,
    `你的身体比同龄人强壮，{npc}说你是干粗活的好料子。`,
    `你喜欢在{location}发呆，常常一坐就是一整天。`,
    `{npc}给你讲了一个关于{legend}的故事，你听得入了迷。`,
  ], { effects: { strength: 2, intelligence: 1 } }));

  // --- Growth (13-25) 5 templates ---
  // 传说: 顿悟大道
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 15, 20, randProb('legendary'), [
    `你在{location}独自求生三日，出关时眼中精光四射——你竟在生死搏斗中领悟了{legend}的传承！`,
    `一场辐射风暴夜，你在{location}被高剂量辐射照射非但没死，反而激活了沉睡的基因！`,
    `{legend}的残魂在{location}与你相遇，将毕生战斗技巧传授于你。`,
  ], { effects: { intelligence: 10, special: 8, strength: 5 } }));

  // 史诗: 重大突破
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 14, 22, randProb('epic'), [
    `你在{location}苦训三年，终于突破了困扰多年的瓶颈，实力大增！`,
    `{npc}带你外出历练，你在{location}击败了一个强敌，获得了珍贵的战利品。`,
    `你发现了{legend}留下的试炼场，通过考验后获得了意想不到的收获。`,
  ], { effects: { strength: 6, special: 5 } }));

  // 稀有: 外出历练
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 13, 24, randProb('rare'), [
    `你在{location}遇到了一生的宿敌，你们不打不相识，反而成为了朋友。`,
    `{npc}传授你一项绝技，你花了整整一年才学会，但威力惊人。`,
    `你在{location}救了一个被追杀的人，他为了报答你，送了一件宝物。`,
    `你和同辈在{location}比试，虽然输了但收获巨大。`,
  ], { effects: rand([{ strength: 4, luck: 2 }, { intelligence: 5 }, { charisma: 4 }]) }));

  // 普通x2
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 13, 20, randProb('common', 0, 2), [
    `你每天在{location}勤奋训练，虽然进步缓慢但根基扎实。`,
    `{npc}督促你修炼，你不敢懈怠。`,
    `你在{location}读了很多书，眼界开阔了不少。`,
    `平平淡淡的一年，你在{location}默默积累着。`,
  ], { effects: { intelligence: 2, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 16, 25, randProb('common', 1, 2), [
    `你在{location}结交了一些朋友，互相切磋进步。`,
    `{npc}给你讲了很多前辈的故事，你深受启发。`,
    `你在{location}处理了一些杂务，锻炼了自己的能力。`,
    `这一年没什么特别的事发生，但你感觉自己在慢慢变强。`,
  ], { effects: { charisma: 2, luck: 2 } }));

  // --- Adult (26-50) 3 templates ---
  // 史诗: 开宗立派
  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 28, 40, randProb('epic'), [
    `你在{location}建立了自己的聚集地，广收追随者，一时间名声大噪。`,
    `你参与了{legend}相关的大规模事件，在关键时刻力挽狂澜。`,
    `你在{location}建立了属于自己的势力，各方强者纷纷来投。`,
  ], { effects: { charisma: 8, strength: 5, special: 5 } }));

  // 稀有: 势力扩张
  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 26, 45, randProb('rare'), [
    `你在{location}收下了第一个追随者，将自己的所学倾囊相授。`,
    `你和宿敌在{location}进行了最终决战，胜负难分。`,
    `你成功制造/修复了传说中的物品，引起了不小的轰动。`,
  ], { effects: rand([{ intelligence: 5, special: 4 }, { charisma: 6, luck: 3 }]) }));

  // 普通: 日常
  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 26, 50, randProb('common'), [
    `你在{location}处理日常事务，势力稳步发展。`,
    `{npc}来找你帮忙，你出手解决了他的难题。`,
    `你在{location}度过了平静的一年，实力稳步提升。`,
    `平平淡淡的一年，你在{location}默默修炼。`,
  ], { effects: { strength: 2, intelligence: 2, special: 2 } }));

  // --- Elder (50+) 按废土世界分层 ---
  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 50, 120, randProb('common'), [
    `你在{location}闭关苦修，试图触摸更高境界的门槛。`,
    `你游历废土，在{location}见识了各种奇人异事，意志更加坚定。`,
    `你开始招收追随者，在{location}传授毕生所学。`,
  ], { effects: { intelligence: 3, special: 2 } }));
  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 100, 220, randProb('rare'), [
    `你的实力已臻化境，成为了{location}的传说级人物。`,
    `你开始着手准备最终的突破，{npc}专程前来为你护法。`,
    `你将毕生所学整理成册，存放在{location}，等待有缘人。`,
  ], { effects: { intelligence: 8, charisma: 5 } }));
  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 200, 400, randProb('rare'), [
    `你感应到了废土深处某种古老力量的召唤，在{location}布下重重防御准备迎接。`,
    `你回顾一生战斗，在{location}寻找突破瓶颈的契机。`,
    `{npc}带来消息：传说中的{legend}遗迹出现了异常波动，永恒的契机可能重现。`,
  ], { effects: { special: 10, intelligence: 5 } }));
  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 400, 700, randProb('epic'), [
    `你已是永恒存在之下最强的生命，在{location}静待永恒契机的到来。`,
    `你将毕生战斗感悟刻入数据芯片，留给后世有缘人。`,
    `{npc}问你为何不急于追求永恒，你笑答："我在等一个时代。"`,
  ], { effects: { charisma: 10, special: 5 } }));

  // --- Combat (15-60) 6 templates ---
  // 传说: 跨级战斗
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 20, 40, randProb('legendary'), [
    `你在{location}以一己之力对抗十位同阶强者，最终大获全胜，一战成名！`,
    `{legend}的敌人找上了你，你在{location}展开惊天大战，竟越级将其斩杀！`,
    `你为了保护{location}的居民，独自对抗入侵的{legend}军团，创造了不可能的奇迹。`,
  ], { effects: { strength: 12, charisma: 8, health: -10 } }));

  // 史诗: 重要战役
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 18, 45, randProb('epic'), [
    `你参与了一场改变{location}格局的大规模战争，立下赫赫战功。`,
    `{npc}挑战你的权威，你们在{location}大战三百回合，最终你险胜一招。`,
    `你在{location}发现了{legend}留下的试炼场，通过了生死考验。`,
  ], { effects: { strength: 8, charisma: 4, health: -5 } }));

  // 稀有x2: 普通战斗
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 15, 35, randProb('rare', 0, 2), [
    `你在{location}遭遇强敌，展开了一场生死搏斗，最终险胜。`,
    `你和{npc}在{location}切磋，双方都获益匪浅。`,
    `你为了保护同伴，在{location}与敌人激战，受了轻伤。`,
  ], { effects: { strength: 5, health: -3 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 25, 50, randProb('rare', 1, 2), [
    `你在{location}参与了一场小规模冲突，表现出色。`,
    `{npc}偷袭你，你在{location}勉强将其击退。`,
    `你在{location}发现了敌人的据点，果断出击。`,
  ], { effects: { strength: 4, luck: 2 } }));

  // 普通x2: 训练/切磋
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 15, 40, randProb('common', 0, 2), [
    `你在{location}进行了日常训练，技艺略有精进。`,
    `你和同伴在{location}对练，互相学习。`,
    `你在{location}演练新学的招式，逐渐熟练。`,
  ], { effects: { strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 30, 60, randProb('common', 1, 2), [
    `你在{location}指导后辈战斗技巧，自己也有所感悟。`,
    `一场友好的比试在{location}举行，你获得了不错的名次。`,
    `你在{location}观摩高手对决，学到了不少实战经验。`,
  ], { effects: { strength: 2, intelligence: 1 } }));

  // --- Romance (16-50) 6 templates ---
  // 传说: 三生石缘
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 18, 30, randProb('legendary'), [
    `你在{location}与{npc}相遇的瞬间，辐射检测仪突然爆表，{legend}的预言应验——你们是命中注定的伴侣。`,
    `{npc}为了救你，不惜耗尽毕生积累的资源。你跪在{location}发誓：此生不负。`,
    `你们的故事被{legend}记载，成为了{location}永恒的传说。`,
  ], { effects: { charisma: 10, luck: 8, health: 5 } }));

  // 史诗: 轰轰烈烈
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 20, 35, randProb('epic'), [
    `你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。`,
    `{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。`,
    `你们经历了{legend}的考验，感情反而更加坚不可摧。`,
  ], { effects: { charisma: 6, luck: 4 } }));

  // 稀有x2: 邂逅相恋
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 16, 30, randProb('rare', 0, 2), [
    `你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。`,
    `你和{npc}在{location}月下相会，互诉衷肠。`,
    `{npc}因为你的才华而倾心，主动向你示好。`,
  ], { effects: { charisma: 4, luck: 3 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 25, 40, randProb('rare', 1, 2), [
    `你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。`,
    `{npc}送你一件定情信物，你珍藏在身边。`,
    `你们一起在{location}经历了危险，感情更加深厚。`,
  ], { effects: { charisma: 3, luck: 2 } }));

  // 普通x2: 普通交往
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 20, 45, randProb('common', 0, 2), [
    `你在{location}认识了一个有趣的人，但关系尚不明确。`,
    `{npc}对你有些好感，但你还没想好如何回应。`,
    `你在{location}参加了一场聚会，结识了不少异性。`,
  ], { effects: { charisma: 2 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 30, 50, randProb('common', 1, 2), [
    `你和{npc}保持着朋友以上、恋人未满的关系。`,
    `你在{location}看到了别人恩爱的场景，心中有些羡慕。`,
    `这一年感情上没有太大的波澜，你专注于其他事情。`,
  ], { effects: { luck: 1 } }));

  // --- Survival/Training (13-80) 6 templates ---
  // 传说: 极限生存
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 40, 70, randProb('legendary'), [
    `你在{location}独自求生九九八十一天，出关时天地共鸣，你已触摸到了{legend}的境界！`,
    `你的实力达到了前所未有的高度，{location}的辐射能量因为你而沸腾。`,
    `{legend}的虚影亲自降临{location}，为你指点大道。`,
  ], { effects: { special: 12, intelligence: 10, strength: 5 } }));

  // 史诗: 技能大成
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 30, 60, randProb('epic'), [
    `你成功将{legend}的技能融会贯通，实力暴涨！`,
    `你在{location}经历了一场奇遇，实力大涨，连{npc}都震惊不已。`,
    `你突破了困扰多年的瓶颈，{location}的天地异象持续了三日三夜。`,
  ], { effects: { special: 8, intelligence: 5 } }));

  // 稀有x2: 境界突破
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 20, 50, randProb('rare', 0, 2), [
    `你在{location}闭关修炼，领悟了新的境界。`,
    `{npc}传授你一项绝技，你勤加练习，终于大成。`,
    `你在{location}发现了一处辐射充沛的宝地，修炼事半功倍。`,
  ], { effects: { special: 5, intelligence: 3 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 35, 65, randProb('rare', 1, 2), [
    `你在修炼中遇到了瓶颈，{npc}指点你突破。`,
    `你在{location}经历了一场奇遇，实力有所精进。`,
    `你成功制造/修复了辅助修炼的物品，效果显著。`,
  ], { effects: { special: 4, strength: 2 } }));

  // 普通x2: 日常修炼
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 13, 40, randProb('common', 0, 2), [
    `你在{location}按部就班地修炼，虽然没有突破但根基更加稳固。`,
    `{npc}检查了你的修炼进度，表示满意。`,
    `你在{location}研读战前文献，对一些技能有了新的理解。`,
  ], { effects: { special: 2, intelligence: 1 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 40, 80, randProb('common', 1, 2), [
    `你在{location}巩固已有的修为，为下一次突破做准备。`,
    `这一年修炼进度平平，但你没有气馁。`,
    `{npc}提醒你不可急于求成，你虚心接受。`,
  ], { effects: { special: 2 } }));

  // --- Exploration (13-80) 6 templates ---
  // 传说: 上古遗迹核心
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 25, 50, randProb('legendary'), [
    `你深入{location}最深处，发现了{legend}留下的核心传承，获得了改变命运的机缘！`,
    `你在{location}找到了通往另一个区域的入口，{legend}的秘密向你敞开。`,
    `你解开了一个困扰世人万年的谜题，{location}的真相让你震惊。`,
  ], { effects: { luck: 10, intelligence: 8, special: 6 } }));

  // 史诗: 秘境探险
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 20, 45, randProb('epic'), [
    `你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。`,
    `你探索了一处危险的{location}，九死一生后带回了珍贵的宝物。`,
    `{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。`,
  ], { effects: { luck: 6, strength: 4 } }));

  // 稀有x2: 寻宝探险
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 15, 40, randProb('rare', 0, 2), [
    `你深入{location}探险，发现了未知的秘密。`,
    `你在{location}找到了一些有价值的物品，收获颇丰。`,
    `你在{location}迷路了，却意外发现了一处隐蔽的安全屋。`,
  ], { effects: { luck: 4, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 30, 55, randProb('rare', 1, 2), [
    `你在{location}发现了一些古老的壁画，记录着失落的文明。`,
    `你探索了一处废弃的{location}，找到了一些有用的物资。`,
    `{npc}带你进入了一个秘密的{location}，你大开眼界。`,
  ], { effects: { intelligence: 3, luck: 3 } }));

  // 普通x2: 普通探索
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 13, 35, randProb('common', 0, 2), [
    `你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。`,
    `你跟着{npc}去{location}采集了一些材料。`,
    `你在{location}发现了一些普通的草药，聊胜于无。`,
  ], { effects: { luck: 2 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 35, 70, randProb('common', 1, 2), [
    `你在{location}进行了常规的巡查，一切正常。`,
    `你重访了以前去过的{location}，有了一些新的发现。`,
    `你在{location}休息了一段时间，养精蓄锐。`,
  ], { effects: { health: 2 } }));

  // --- World Story (20-100) 5 templates ---
  // 传说: 世界格局剧变
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 40, 70, randProb('legendary'), [
    `{legend}的封印彻底破碎，整个废土陷入了前所未有的动荡，你被卷入了漩涡中心！`,
    `一场席卷整个废土的大战爆发了，{location}首当其冲，你必须做出选择。`,
    `废土的规则开始改变，{legend}的意志降临，所有人都受到了影响。`,
  ], { effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 } }));

  // 史诗: 大规模变革
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 60, randProb('epic'), [
    `你发现{location}隐藏着改变废土的秘密，各方势力为此展开了明争暗斗。`,
    `{npc}告诉你一个关于废土起源的惊天秘密，你的世界观被彻底颠覆。`,
    `传说中的{legend}即将降临，所有人都在做准备，{location}的气氛紧张到了极点。`,
  ], { effects: { intelligence: 6, charisma: 4 } }));

  // 稀有: 局部冲突
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 25, 50, randProb('rare'), [
    `{location}附近发生了局部冲突，你不得不卷入其中。`,
    `{npc}带来了一个重要的消息，可能影响到{location}的未来。`,
    `你注意到了{location}的一些异常现象，似乎有什么大事要发生。`,
  ], { effects: { charisma: 3, luck: 3 } }));

  // 普通x2: 传闻/日常
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 45, randProb('common', 0, 2), [
    `你听到了一些关于{legend}的传闻，但真假难辨。`,
    `{location}发生了一些小变化，但你没有太在意。`,
    `{npc}跟你聊了聊最近的时事，你表示关注。`,
  ], { effects: { intelligence: 2 } }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 40, 80, randProb('common', 1, 2), [
    `废土依旧平静，{location}的生活一如既往。`,
    `你听说了一些关于{legend}的新消息，但似乎没什么实质内容。`,
    `这一年没什么大事发生，你在{location}安稳度日。`,
  ], { effects: { luck: 1 } }));

  // --- Hidden (20-150) 4 templates ---
  // 传说: 世界真相
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 60, 120, randProb('legendary'), [
    `你超越了{legend}，看到了废土之外的真相——原来一切都只是...`,
    `你发现了这个世界的运行规则，{location}只是一场巨大棋局的一角。`,
    `{legend}的真正身份让你震惊不已，你终于理解了废土的本质。`,
  ], { conditions: [{ stat: 'intelligence', min: 120 }], effects: { intelligence: 15, special: 10 } }));

  // 史诗: 禁地核心
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 50, 100, randProb('epic'), [
    `你在{location}发现了一个被禁止入内的区域，里面藏着惊人的秘密。`,
    `你解开了{legend}留下的谜题，获得了一份隐藏的传承。`,
    `{npc}告诉你一个只有极少数人知道的秘密，你感到责任重大。`,
  ], { conditions: [{ stat: 'intelligence', min: 100 }], effects: { intelligence: 10, special: 8 } }));

  // 稀有: 秘密通道
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 35, 80, randProb('rare'), [
    `你在{location}找到了一条隐秘的通道，通向未知的地方。`,
    `你发现了一些关于{legend}的隐藏记录，内容令人费解。`,
    `{npc}偷偷塞给你一张地图，上面标记着{location}的秘密地点。`,
  ], { conditions: [{ stat: 'luck', min: 80 }], effects: { luck: 6, intelligence: 4 } }));

  // 普通: 小道消息
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 20, 60, randProb('common'), [
    `你在{location}听到了一些奇怪的低语，但找不到来源。`,
    `你做了一个关于{legend}的怪梦，醒来后记忆模糊。`,
    `{npc}欲言又止，似乎想告诉你什么秘密但最终没说出口。`,
  ], { conditions: [{ stat: 'intelligence', min: 60 }], effects: { intelligence: 3 } }));

  // --- Death (0-300) 5 templates ---
  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 100, 0.35, [
    `你在{location}遭遇不测，生命力迅速流逝。`,
    `你的身体到达了极限，{npc}无能为力。`,
    `{legend}的诅咒降临在你身上，你无法抵抗。`,
  ], { effects: { health: -60 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 150, 0.45, [
    `你在{location}进行了最后的战斗，英勇牺牲。`,
    `寿元耗尽，你在{location}静静地闭上了眼睛。`,
    `你走火入魔，在{location}化为灰烬。`,
  ], { effects: { health: -80 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 200, 0.55, [
    `你在{location}被强敌击杀，死不瞑目。`,
    `你的伤势恶化，{npc}尽力抢救但回天乏术。`,
    `{legend}的力量反噬，你在{location}形神俱灭。`,
  ], { effects: { health: -100 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 250, 0.65, [
    `你在{location}寿终正寝，周围的人都来为你送行。`,
    `你安详地在{location}离世，一生无憾。`,
    `{npc}守在你的床前，目送你离开这个世界。`,
  ], { effects: { health: -100 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 300, 0.75, [
    `你在{location}结束了这一生，灵魂化作流光消散。`,
    `你的故事成为了{location}的传说，后人会记得你的名字。`,
    `{legend}亲自前来接引你的灵魂，你感到一阵温暖。`,
  ], { effects: { health: -100 } }));

  return T;
}

module.exports = {
  generateApocalypseIdentityEvents,
  generateApocalypseTrashEvents,
  generateApocalypseMajorChoices,
  generateApocalypseRealmEvents,
  generateApocalypseCommonEvents,
};
// ============================================================
// 古代武侠世界 — 事件生成器
// 可直接复制粘贴到 generate-events.cjs 中使用
// 依赖外部函数：tmpl, choice, makeId, rand, randProb
// ============================================================

function generateWuxiaIdentityEvents(w) {
  const T = [];
  const { prefix } = w;

  const identityStories = {
    farmers_son: {
      name: '农家少年',
      childhood: [
        [`你生在江南水乡的一个普通农家。每日除了砍柴放牛，便在田埂上比划从说书先生那里听来的招式。{npc}笑你："小子，庄稼人练什么武功？"你不服气，暗暗将招式记在心中。`, `八岁那年，你在{location}的稻田边救了一位被毒蛇咬伤的老乞丐。他醒来后盯着你的手掌看了许久："骨格清奇，是块练武的好料子。"`],
        [`老乞丐传授你一套基础的吐纳心法，说内力之道贵在持之以恒。你每日凌晨在村口老槐树下打坐，感受丹田中若有若无的一丝暖意。`, `你在{location}的山洞里发现了一本残破的拳谱——《伏虎拳》。没有师父指点，你便对着水潭中的倒影一招一式地拆解。`],
      ],
      growth: [
        [`十五岁那年，{location}遭遇了马贼洗劫。你凭着伏虎拳和那股不要命的狠劲，竟打退了三个马贼。村民们看你的眼神变了，从嘲笑变成了敬畏。`, `一位游历的镖师路过{location}，见你拳法虽粗疏但内力已有根基，便指点你正经的经脉运行之法。你恍然大悟，原来内力该这样走！`],
        [`你在{location}的比武招亲大会上误打误撞赢了半招，被当地武馆馆主看中，邀你入馆做教习。这是你第一次靠武功吃饭。`, `少年时的老乞丐再度出现，他竟是隐退多年的江湖名宿。他说："我教你的心法只是入门，真正的功夫，在江湖的腥风血雨里。"`],
      ],
      adult: [
        [`成年后的你在{location}已小有名气。农家出身的你嫉恶如仇，专管不平事，百姓称你为"田埂侠客"。但也因此得罪了不少江湖豪强。`, `你在{location}遇到了当年的马贼首领，他如今已是某门派的外门管事。他认出了你，眼中闪过杀意。`],
        [`一位大门派的长老欣赏你的拳意，欲收你为内门弟子，但要求你改换门庭、忘却旧师；或者继续做一名无门无派的游侠，但永远得不到上乘武功。`, ``, '坚守旧师，自立门户', '改换门庭，求得真传', 1.0],
      ],
      special: [
        [`一次生死搏杀中，你在{location}被逼入绝境。体内那丝微弱的内力突然沿着奇经八脉奔涌——原来老乞丐传你的心法竟是失传已久的《混元一气功》！`, `{npc}为你把脉后大惊失色："你体内这股内力...这不是普通的吐纳心法，这是三十年前随魔教一起消失的混元真气！那老乞丐到底是谁？"`],
        [`你找到了老乞丐的隐居之处，他已气息奄奄。临终前，他将毕生功力尽数传给你："农家子也好，贵族子也罢，江湖只看拳头。"`, `你以农家之子的身份踏足华山之巅，在武林大会上连败十二名派弟子。台下有人高呼："草莽出龙！"你的故事，激励了无数寒门少年。`],
      ],
    },
    aristocrat: {
      name: '世家子弟',
      childhood: [
        [`你生在{location}的武学世家，自幼便浸泡在刀枪剑戟之中。三岁识剑谱，五岁扎马步，家族长辈对你的期望沉甸甸地压在肩头。`, `作为世家子弟，你从小就懂得江湖不只是武功，还有人情世故。{npc}教你："剑要直，但做人有时候要弯。"你似懂非懂。`],
        [`七岁那年，家族在{location}举办论剑大会，你被要求和同辈切磋。对手是个旁支子弟，你明明能赢，却听父亲的话让了半招。`, `你在家族藏书阁发现了一本被封印的剑谱——上面写着"禁"字。你偷偷誊抄了几页，那些剑招凌厉得不像正道武学。`],
      ],
      growth: [
        [`十五岁，你代表家族参加{location}的武林大会。这一战关乎家族未来十年的声望，你父亲在台下紧握剑柄，目光灼灼。`, `你发现自己偷学的禁招在关键时刻救了你的命。但使用后，你的经脉隐隐作痛——这剑谱似乎有极大的副作用。`],
        [`家族长辈发现了你偷练禁剑的事。家主冰冷地说："要么自废武功，要么被逐出家门。"你的母亲跪地为你求情。`, `你在{location}遇到了一个魔教女子。她与你谈琴论剑，你说不清这是缘分还是劫数。家族若知道，定会打断你的腿。`],
      ],
      adult: [
        [`成年后的你已是家族年轻一辈中最出色的剑客。但你也发现，家族的荣光背后藏着肮脏的交易——他们为了利益，竟与朝廷鹰犬勾结。`, `你在{location}撞见家族长辈与东厂密会。他们谈论的是如何借刀杀人，铲除异己。你握剑的手在颤抖。`],
        [`你可以选择：向江湖揭发家族的罪行，但会成为全族的仇人；或者沉默，继承家主之位，将家族引向正途。`, ``, '揭发罪行，背负骂名', '沉默继位，暗中革新', 1.0],
      ],
      special: [
        [`你揭开了家族禁剑的真相——原来先祖曾与魔教圣女相恋，这套剑法是他们共同所创。家族为了维护"正道"名声，将这段历史彻底抹去。`, `你在{location}的先祖墓前立下誓言："我不要做什么正道楷模，我要做一个人。"你将禁剑与家传剑法融会贯通，创出了全新的"心剑"。`],
        [`你的"心剑"在江湖上引起轰动。有人说你已入魔道，有人说你开创新局。你在{location}立下新规：世家子弟不分嫡庶，能者居之。`, `百年后，你的家族不再以"正统"自居，而以"侠义"闻名。后人不知道你付出了多少代价，只知道从你那一代起，这个家族真正站了起来。`],
      ],
    },
    orphan: {
      name: '孤儿',
      childhood: [
        [`你不知道自己姓甚名谁。最早的记忆是{location}的街头，一个老叫花子教你如何在狗嘴里抢下半块馒头。`, `作为孤儿，你从小就是{location}最机灵的乞儿。别的孩子靠父母，你靠一双快腿和更厚的脸皮。{npc}说你是"街头的小狐狸"。`],
        [`八岁那年，你在{location}偷了一个剑客的钱袋。被他抓住后，他没有打你，反而说："手这么快，不如跟我学点正经功夫。"`, `你在破庙里发现了一具无名尸骨，骨旁有一把短刀和一本册子。册子上写着："杀人之术，亦可救人。"你将短刀藏入怀中。`],
      ],
      growth: [
        [`十五岁的你已是{location}街头的一号人物。你不属于任何门派，没有师父管教，但你的刀法是在一次次生死搏杀中悟出来的——快、准、狠。`, `你为了保护街头的其他乞儿，与{location}的地痞帮派结了仇。他们人多势众，你纵然刀快，也双拳难敌四手。`],
        [`危急时刻，一位路过的女侠出手救了你。她说："你的刀法有灵性，但杀气太重。跟我走，我教你控制心中的野兽。"`, `你拒绝了她的好意。{location}的街头就是你的家，那些乞儿就是你的家人。你走了，他们怎么办？`],
      ],
      adult: [
        [`成年后的你在{location}建立了一个"乞儿帮"，专收无家可归的孩子，教他们武功和生存之道。江湖人戏称你是"丐帮预备帮主"。`, `朝廷派人招安你，许诺给你official身份；但江湖上的名门正派视你为眼中钉，说你"聚众作乱"。你站在十字路口。`],
        [`你可以选择：接受招安，用朝廷的力量保护更多的孤儿；或者拒绝，继续做一名江湖浪子，但面临正邪两道的围剿。`, ``, '接受招安，以权护民', '拒绝招安，江湖独行', 1.0],
      ],
      special: [
        [`你追查自己的身世，发现亲生父母竟是当年被朝廷满门抄斩的忠良之后！你手中的短刀，是父亲临终前留给你的唯一遗物。`, `{npc}告诉你一个秘密：当年下令灭你满门的，正是如今招安你的那位朝廷大员。他以为斩草除根，却不知你活了下来。`],
        [`你提着短刀闯入那位大员的府邸。刀光闪过，血溅屏风。但你最终没有杀他——你说："我父母若在世，不会希望我成为只会复仇的野兽。"`, `你以孤儿之身建立的门派，成为了江湖上最特殊的势力——不问出身，只问侠义。无数无家可归的人在这里找到了家。`],
      ],
    },
    demon_disciple: {
      name: '魔教后人',
      childhood: [
        [`你从小就知道自己与别人不同。别的孩子学儒家经典，你学的是《天魔秘典》；别的孩子拜孔子，你拜的是魔教先祖。{npc}告诉你："正道那些伪君子，才是这世上最大的恶。"`, `作为魔教后人，你在{location}的深山中长大。你没见过繁华的城池，只见过刀光剑影和尔虞我诈。你的童年没有风筝，只有毒药和暗器。`],
        [`十岁那年，你在{location}遇到了一个迷路的中原少女。她天真烂漫，问你外面的世界是什么样。你突然意识到，自己也是第一次思考这个问题。`, `魔教长老带你去{location}执行第一次"任务"——毒杀一位正道探子。你下毒的手稳如磐石，但夜里你却做了噩梦。`],
      ],
      growth: [
        [`十五岁，你奉教主之命潜入中原，化名进入了{location}的正道门派。你本以为是简单的卧底任务，却发现正道弟子们并非长老口中那般虚伪。`, `你在{location}与一位正道女弟子结伴而行。她善良、正直，甚至有些天真。你本该杀她灭口，却迟迟下不了手。`],
        [`魔教教主催你动手，说"正道之人皆该杀"。但你在{location}看到了正道弟子舍身救人的场景，心中的某根弦被拨动了。`, `你在{location}被正道高手识破身份，身受重伤。那位女弟子竟然冒死将你藏入密室，说："我不在乎你是哪一方，我只知道你还没做过坏事。"`],
      ],
      adult: [
        [`成年后的你身份暴露。魔教视你为叛徒，正道视你为间谍。你夹在正邪之间，两面不是人。`, `你在{location}遇到了魔教教主。他说："回来吧，我封你为圣子。"正道盟主也说："弃暗投明，过往不究。"你的选择，将定义你的一生。`],
        [`你可以选择：回到魔教，继承教主之位，用权力改变魔教；或者彻底脱离魔教，在正道中从头开始，但永世背负"魔教余孽"的骂名。`, ``, '回归魔教，以魔制魔', '脱离魔教，弃暗投明', 1.0],
      ],
      special: [
        [`你调查发现，当年正魔大战的真相并非正道史书所写——是正道盟主先屠了魔教三个分坛，魔教才奋起反击。历史，从来都是胜利者书写的。`, `{npc}将魔教至宝"天魔刃"交给你："上一任教主用它杀了太多无辜之人。我希望你能用它保护该保护的人。"`],
        [`你没有选择正邪任何一方。你在{location}建立了一个"中立谷"，收留正魔两道的流亡者。你说："正道有伪君子，魔教也有真性情。我只问本心。"`, `后人说你是"魔道叛徒"、"正道异端"，但在那些被你救过的人心中，你是真正的侠客。你的中立谷成为了江湖上最神秘的存在。`],
      ],
    },
    spy: {
      name: '朝廷密探',
      childhood: [
        [`你生在{location}的一个普通捕快之家。父亲每日巡街抓贼，你觉得这就是"正义"。直到有天夜里，一群黑衣人闯入你家，带走了你的父亲，再也没有回来。`, `作为朝廷密探的候补，你从小接受严苛的训练。{npc}教你易容、下毒、暗器、轻功，就是不教你"信任"——密探不需要朋友。`],
        [`十岁那年，你在{location}的训练营中第一次杀人。目标是个江湖郎中，据说私藏反诗。你完成任务后，发现他家中真的有诗稿——写得真好。`, `你偷偷藏起了那本草稿。{npc}发现后没有揭发你，只是冷冷地说："心软的人活不长。但你记住这种感觉，别让自己变成机器。"`],
      ],
      growth: [
        [`十五岁，你被派往{location}的武林门派卧底。你的身份是外门杂役，任务是收集该门派与魔教勾结的证据。但你发现，这个门派清白得很。`, `上级催你交"证据"。你不忍心冤枉好人，便伪造了一份无关紧要的密报。{npc}看出了破绽，说："你在玩火。"`],
        [`二十岁那年，你在{location}的任务是暗杀一位江湖大侠。你潜入了他的房间，却看见他在灯下给妻儿写信。那一夜，你空手而归。`, `你因为任务失败被关入水牢。{npc}冒死来看你："上头要的是你绝对服从。但我要的，是你别丢掉良心。"`],
      ],
      adult: [
        [`成年后的你已是一名出色的密探，但你的内心越来越疲惫。你在{location}看到了太多黑暗——朝廷并非正义，江湖也未必邪恶，两边都在吃人。`, `你得知了父亲当年的真相：他因为拒绝冤枉一个江湖门派，被上头灭口。你效忠的朝廷，才是杀父仇人。`],
        [`你可以选择：继续为朝廷效力，但暗中保护江湖中人；或者彻底叛出，加入江湖，但将面对朝廷无尽的追杀。`, ``, '身在曹营心在汉', '叛出朝廷，投身江湖', 1.0],
      ],
      special: [
        [`你掌握了一份足以震动朝野的密档——当朝宰相竟是魔教安插在朝廷中的最高棋子！他一手策划了无数次"正魔冲突"，只为两边渔利。`, `你将密档公之于众。宰相倒台，天下哗然。但朝廷也视你为叛徒，因为你让皇家丢了颜面。`],
        [`你在{location}建立了一个情报网络，不为朝廷，不为江湖，只为真相。你说："情报不该是杀人的刀，该是照路的灯。"`, `后人说你是"江湖百晓生"再世。没有人知道你的真名，但所有人都知道，只要找到你，就能知道真相。`],
      ],
    },
    foreigner: {
      name: '异域来客',
      childhood: [
        [`你的故乡在极西之地，那里的人用刀多于用剑，用拳多于用掌。你随商队来到中原，对一切都感到新奇——尤其是中原人那种"内力"。`, `作为异域来客，你在{location}第一次见识到中原武功。一位老僧只是轻轻一掌，便将一块巨石震碎。你瞪大了眼睛："这是什么妖法？"老僧微笑："这是内力。"`],
        [`你开始学习中原语言，也偷偷模仿中原人的招式。{npc}看出了你的好奇，说："武功无国界，但江湖有规矩。你想学，先学会尊重。"`, `你在{location}因为不懂中原礼节，得罪了当地武馆的弟子。他们嘲笑你是"蛮夷"，要和你比武。你用家乡的刀法赢了，却也惹了麻烦。`],
      ],
      growth: [
        [`十五岁，你在{location}遇到了一位游历的武当弟子。他对你家乡的"旋转刀法"极感兴趣，提出以武当心法交换。你欣然同意。`, `你将异域刀法与中原内力结合，创出了一套全新的"旋风斩"。{npc}看后惊叹："这是前所未有的路子！"`],
        [`你在{location}的武林大会上以异域武功出战。有人赞你创新，有人骂你"歪门邪道"。一位老者说："中原武功千年不变，或许该有人打破它了。"`, `你开始思考：是将家乡武功彻底中原化，还是保持本色、自成一派？这个问题困扰了你好几年。`],
      ],
      adult: [
        [`成年后的你在中原已小有名气，被称为"西域旋风"。但你发现，无论武功多高，中原人看你的眼神总带着隔阂。`, `你的故乡传来消息：家乡被外敌入侵，急需援助。同时，中原的师父也病重，希望你留下继承衣钵。你陷入了两难。`],
        [`你可以选择：返回故乡，用在中原学到的武功保卫家园；或者留在中原，继承师父衣钵，但背井离乡。`, ``, '衣锦还乡，保卫故土', '留驻中原，传承师门', 1.0],
      ],
      special: [
        [`你回到故乡，发现入侵者用的竟是中原某个门派的武功！原来中原有人暗中资助外敌，意图挑起边患、从中渔利。`, `你重返中原，不为私仇，为家国。你在{location}当众揭发了那个通敌卖国的门派，天下震动。`],
        [`你成为了连接西域与中原的桥梁。你在{location}建立了一座"混元武馆"，教授中原与异域融合的武功。`, `后人说你开创了"新武学"——不拘门派，不分地域，只问强弱。你的武馆成为了天下习武之人向往的圣地。`],
      ],
    },
    medic: {
      name: '医仙传人',
      childhood: [
        [`你生在{location}的医仙谷，从小便识百草、辨经脉。别的孩子学剑，你学的是银针；别的孩子练杀人之术，你练的是救人之法。`, `作为医仙传人，你五岁时便能背完《百草经》。{npc}摸着你的头说："医者仁心，但江湖险恶。你不仅要会救人，还要学会保护自己。"`],
        [`八岁那年，{location}爆发瘟疫。你跟着师父日夜不休地救治病人，亲眼看着一条条生命从手中溜走。你发誓要成为一名能救所有人的神医。`, `你在采药时失足坠入山崖，被一株千年灵芝所救。醒来后，你发现自己的身体对药性异常敏感——这是天生的医仙之体。`],
      ],
      growth: [
        [`十五岁，你在{location}救了一位被仇家追杀的剑客。他醒来后问："你为何要救我？我是杀人无数的恶徒。"你说："在我眼中，你只是一个伤者。"`, `剑客传你一套防身剑法，说："医者不能只会救人，也要学会自保。否则，你救的人还没你杀的人多。"`],
        [`二十岁那年，你在{location}遇到了毒师弟子。你们本该是死敌，但你发现他也曾在瘟疫中失去亲人。你们开始秘密交流医毒之道。`, `{npc}发现了你们的交往，震怒："医与毒，正与邪，水火不容！"但你心中有一个大胆的想法：毒可杀人，亦可救人。`],
      ],
      adult: [
        [`成年后的你已是江湖上最年轻的神医。但你也面临抉择：是专心医道、不问世事；还是以医入武，用武功保护更多人？`, `你在{location}发现了一种奇毒，中者七日必死，且无药可解。但你隐约觉得，若以毒攻毒，或许有一线生机。`],
        [`你可以选择：冒险研制以毒攻毒的解药，但可能背上"用毒"的骂名；或者遵循传统医道，宣告此毒无解。`, ``, '以毒攻毒，破而后立', '坚守医道，不涉险途', 1.0],
      ],
      special: [
        [`你成功研制出了解药，但代价是自己中了余毒，须发皆白。{npc}哭着说："你救了千人，却毁了自己。值得吗？"你笑答："医者之命，不如患者之命重。"`, `你的白发成为了江湖上的标志。人们称你为"白发医仙"，不是因为你的医术，而是因为你的牺牲。`],
        [`你在{location}写下了《医武心经》，主张医武同源——内力不仅可以伤人，更可以疏通经络、治愈内伤。这本书后来成为了医家经典。`, `你离世的那天，{location}来了三千人为你送行。他们中有你曾经救过的侠客、农夫、甚至死囚。你说："我这一生，没杀一人，但救的人...数不过来了。"`],
      ],
    },
    poisoner: {
      name: '毒师弟子',
      childhood: [
        [`你生在{location}的毒龙沼泽，从小与毒蛇毒虫为伴。别的孩子怕毒，你却觉得它们可爱——因为在这世上，毒比人更诚实。`, `作为毒师弟子，你七岁时便能辨识百毒。{npc}将一只毒蝎放入你掌心："怕吗？"你说："不怕。它会咬我，但不会像人一样骗我。"`],
        [`十岁那年，你在{location}采毒草时不慎中毒。师父没有救你，而是说："想活命，自己配解药。"你凭着一本毒经，硬生生从鬼门关爬了回来。`, `你在沼泽深处发现了一具白骨，骨旁有一本《万毒心经》。你将它交给师父，他沉默良久："这是上一任毒圣的遗物。你与他...有缘。"`],
      ],
      growth: [
        [`十五岁，你奉师命前往{location}挑战医仙谷。但你到达后，发现医仙谷正在救治瘟疫患者。你下毒的手，第一次犹豫了。`, `你在{location}遇到了一个身中奇毒的女孩。她天真地问："毒姐姐，毒是什么味道的？"你愣住了——从来没有人问过你这个问题。`],
        [`你开始暗中研究"活命之毒"——用毒物激发人体潜能、以毒攻疾。师父知道后大怒："毒师杀人，不救人！"你说："毒只是工具，善恶在于用毒之人。"`, `你在{location}以毒术救了一个村庄的瘟疫。村民们感激你，但当你说出自己是毒师弟子时，他们的笑容瞬间凝固。`],
      ],
      adult: [
        [`成年后的你在毒术上已臻化境。但你也发现，世人谈毒色变，无论你是否救人，在他们眼中你永远是"毒女"或"毒男"。`, `朝廷请你配制一种无色无味的毒药，用于暗杀政敌。报酬是一座城池。你看着那袋金子，久久无言。`],
        [`你可以选择：拒绝朝廷，但可能招来杀身之祸；或者接受委托，但用慢性毒药给目标留出逃走的时间。`, ``, '拒绝权贵，独善其身', '阳奉阴违，暗放生路', 1.0],
      ],
      special: [
        [`你发现师父当年救你，并非偶然——你其实是医仙谷谷主的私生女/子，身负医毒双脉！这也是你能将毒用于救人的原因。`, `{npc}将医仙谷的传世金针交给你："你母亲/父亲临终前说，医与毒本是一家，分裂千年，该由你合而为一了。"`],
        [`你在{location}建立了"万毒医庐"，专门收治江湖上无人能治的奇毒怪病。有人说你是妖女/妖男，但病人只叫你"活菩萨"。`, `你打破了医毒千年的壁垒。后人说你是"毒圣"，但你知道，自己只是一个想让毒物也能开花的人。`],
      ],
    },
    swordsman: {
      name: '剑客',
      childhood: [
        [`你的父亲是一名铁匠，也是一名隐退的剑客。他从不教你剑法，只说："剑是凶器，能不用就不用。"但你每日在铁匠铺看他的剑胚，眼中闪烁着渴望。`, `作为剑客之子，你从小便对剑有一种痴迷。别的孩子抱布娃娃，你抱的是木剑。你在{location}的溪边对着流水挥剑，一练就是一整天。`],
        [`八岁那年，你在{location}遇到了一个瞎眼老者。他听你的挥剑之声，点头道："剑气已有三分，但剑心未立。小子，你知道为何学剑吗？"你答不上来。`, `你在山中发现了一柄断剑，剑身上刻着"心剑"二字。你将断剑带回家，父亲看到后面色大变，却什么也没说。`],
      ],
      growth: [
        [`十五岁，你在{location}遇到了人生的第一个强敌。他以掌法破你的剑招，嘲笑你："剑是死的，人是活的。你连为什么握剑都不知道，怎配用剑？"`, `你苦思三日三夜，终于在溪边悟出了第一式属于自己的剑招——"流水"。这一剑没有固定的招式，只有顺势而为的剑意。`],
        [`二十岁那年，你携断剑挑战{location}的剑冢。剑冢中插着千百柄名剑，每一柄都在呼唤你。但你最终选择了自己的断剑。`, `{npc}问你为何不选名剑。你说："剑是肢体的延伸。别人的剑再好，也不是我的。"老者抚掌大笑："剑心通明！你终于立住了。"`],
      ],
      adult: [
        [`成年后的你在{location}已是一名出色的剑客。但你也发现，江湖上的剑客越来越多，为名为利拔剑的人比比皆是。你的剑，和他们有什么不同？`, `你在{location}目睹了一场因争夺剑谱而引发的血案。数十人为了一个"天下第一剑"的名头互相残杀，最后无一生还。`],
        [`你可以选择：追求"天下第一剑"的虚名，在江湖上不断挑战；或者放下名心，做一名默默无闻的护剑之人。`, ``, '挑战天下，求名求剑', '放下执念，守心护道', 1.0],
      ],
      special: [
        [`你悟出了断剑中的秘密——"心剑"不是剑法，而是剑道。剑在人在，剑亡人亡，但剑心永存。你终于明白父亲为何隐退。`, `你将断剑重铸，铸剑师说缺了一角的材料。你说："不必补齐，缺口亦是剑的一部分。正如人生，遗憾亦是圆满。"`],
        [`你在{location}的华山之巅，面对天下群雄，却收剑入鞘。"天下第一剑不是我，"你说，"是每一个不为名利拔剑的人。"`, `后人称你为"无心剑圣"。他们说你的剑没有招式，却无人能敌。只有你知道，无招之招，才是剑道的终点。`],
      ],
    },
    assassin_wuxia: {
      name: '暗器师',
      childhood: [
        [`你从小便有一双巧手。{npc}教你暗器之道："明枪易躲，暗箭难防。但暗器之道，不在阴毒，在精准与克制。"你似懂非懂地点头。`, `作为暗器师传人，你在{location}的练习场上，每日要掷出三千枚飞蝗石。你的手磨出了厚厚的茧，但准头越来越好——能在十丈外打落柳叶。`],
        [`八岁那年，你在{location}目睹了一场暗杀。刺客的暗器手法精妙绝伦，但你注意到他杀完人后，手在颤抖。{npc}说："第一次都会抖。习惯就好了。"你说："我不想习惯。"`, `你在密室中发现了一架机关弩的图纸，上面标注着"唐门遗作"。你偷偷仿制了一架，威力惊人，但后坐力震伤了你的肩膀。`],
      ],
      growth: [
        [`十五岁，你在{location}执行第一次任务——用暗器打落一位恶霸手中的刀，而非杀他。你说："暗器可以杀人，也可以止戈。"`, `你的"止戈暗器"在江湖上引起了争议。传统暗器师说你是异端，但被你救下的人却称你为"暗器侠"。`],
        [`二十岁那年，你在{location}遇到了唐门最后的传人。他说："唐门暗器，杀一人救百人。你懂吗？"你说："不懂。我只想让暗器不再是暗器，而是明器。"`, `你开始研制"明器"——不伤人命的暗器。麻痹针、迷魂砂、锁穴钉...{npc}摇头："这不是暗器，这是医具。"你说："那就叫医具吧。"`],
      ],
      adult: [
        [`成年后的你在{location}已是一名传奇暗器师。但你也面临抉择：是继续做一名来无影去无踪的刺客，还是将暗器之道公之于众、用于正途？`, `一位大侠在{location}被围攻，你以暗器救他脱困。他却转身指责你："暗器伤人，不算英雄！"你苦笑："我救了你，你却嫌我手段不正？"`],
        [`你可以选择：坚持"明器"之道，哪怕被整个暗器界排斥；或者回归传统，做一名令人生畏的刺客，但至少被同行尊重。`, ``, '坚持明器，离经叛道', '回归传统，刺客之王', 1.0],
      ],
      special: [
        [`你发现唐门灭亡的真相——并非毁于外敌，而是毁于内部对"暗器该不该只用于杀人"的分歧。你的"明器"之道，正是当年失败的那一派。`, `你将唐门遗作与自己的明器之术结合，在{location}建立了"百机堂"。堂中弟子不以杀人为业，而以暗器行侠仗义。`],
        [`百年后，"百机堂"成为了江湖上最特殊的势力。他们说你的弟子"暗器不出则已，出必救人"。这正是你想要的江湖。`, `你临终前将最后一枚暗器——一枚没有任何杀伤力的银铃——交给了弟子。你说："暗器的最高境界，不是让人死，而是让人醒。"`],
      ],
    },
  };

  Object.entries(identityStories).forEach(([id, story]) => {
    const chainPrefix = `chain_${id}`;

    // 童年 2个
    story.childhood.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 3 + i * 4, 8 + i * 4, 0.85, texts, {
        identityExclusive: id,
        effects: rand([{ special: 5 }, { strength: 4, luck: 2 }, { intelligence: 5 }]),
        flags: [`${chainPrefix}_childhood_${i}`],
      }));
    });

    // 少年 2个
    story.growth.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 14 + i * 5, 20 + i * 5, 0.80, texts, {
        identityExclusive: id,
        effects: rand([{ strength: 6 }, { intelligence: 6 }, { special: 6 }, { charisma: 4, luck: 3 }]),
        requiredFlags: [`${chainPrefix}_childhood_0`],
        flags: [`${chainPrefix}_growth_${i}`],
        chainPriority: 1,
      }));
    });

    // 成年 2个
    story.adult.forEach((item, i) => {
      const isChoice = Array.isArray(item) && item.length > 2;
      const texts = isChoice ? [item[0], item[1]] : item;
      const opts = isChoice ? {
        choices: [
          choice(item[2], item[4] !== undefined ? item[4] : 1.0, `你选择了${item[2]}，从此走上了属于自己的道路`, `你选择了${item[2]}，但前路远比想象中艰难`, { special: 10, strength: 5 }, { intelligence: 5, health: -5 }, [`branch_identity_${id}_path`], [`branch_identity_${id}_path_fail`]),
          choice(item[3], item[4] !== undefined ? item[4] : 1.0, `你选择了${item[3]}，找到了新的方向`, `你选择了${item[3]}，却发现自己失去了根基`, { luck: 5, charisma: 5 }, { luck: -3 }, [`branch_identity_${id}_new`], [`branch_identity_${id}_new_fail`]),
        ]
      } : {};
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 26 + i * 10, 35 + i * 10, 0.75, texts, {
        identityExclusive: id,
        effects: isChoice ? {} : rand([{ strength: 8 }, { intelligence: 8 }, { special: 8 }]),
        requiredFlags: [`${chainPrefix}_growth_0`],
        flags: [`${chainPrefix}_adult_${i}`],
        chainPriority: 2,
        ...opts,
      }));
    });

    // 特殊 2个
    story.special.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 10 + i * 20, 30 + i * 30, 0.70, texts, {
        identityExclusive: id,
        effects: rand([{ special: 10, health: -5 }, { strength: 8, luck: 5 }, { intelligence: 10 }]),
        requiredFlags: [`${chainPrefix}_adult_0`],
        flags: [`${chainPrefix}_special_${i}`],
        chainPriority: 3,
      }));
    });
  });

  return T;
}

// ============================================================
// 武侠世界废材逆袭事件生成器
// ============================================================

function generateWuxiaTrashEvents(w) {
  const T = [];
  const { prefix } = w;

  // 阶段1（0-6）：被判定废材，发现奇遇
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 0, 6, 0.92, [
    `内力测试那日，{location}的试功石毫无反应。{npc}摇头叹息："内力低微，经脉闭塞，这孩子不是练武的料子。"周围人投来怜悯的目光。`,
    `作为武学废材，你只能看着同龄人在{location}演练招式。他们嘲笑你是"江湖的笑话"，连最基础的运功都无法完成。`,
  ], { talentExclusive: 'trash', effects: { special: -5, strength: -2, intelligence: 3 }, flags: ['trash_childhood_start'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 4, 10, 0.88, [
    `你不甘心。每日凌晨，你在{location}的山顶对着朝阳挥拳一千次，直到双臂麻木。{npc}路过时皱眉："经脉闭塞，练这些有何用？"`,
    `你在{location}的古旧书摊淘到了半本残破的《易筋锻骨篇》。书页泛黄，开篇写道："天无绝人之路，废脉亦可重铸。"你如获至宝。`,
  ], { talentExclusive: 'trash', effects: { strength: 3, intelligence: 2, luck: 2 }, requiredFlags: ['trash_childhood_start'], flags: ['trash_childhood_1'] }));

  // 阶段2（12-25）：暗中积累，苦修内力
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 12, 18, 0.85, [
    `你按照《易筋锻骨篇》的方法，以瀑布冲击淬炼经脉。第一次尝试时，剧痛让你昏死过去。醒来时，你发现丹田中竟有了一丝微弱的气感。`,
    `别的天才一日可完成的内功运转，你需要一个月。但你在{location}日复一日，从未间断。{npc}偶然看到你的训练，震惊地说："这...这是上古锻体之法？"`,
  ], { talentExclusive: 'trash', effects: { strength: 5, health: 3, special: 2 }, requiredFlags: ['trash_childhood_1'], flags: ['trash_growth_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 15, 22, 0.80, [
    `你在{location}救了一位被仇家重伤的游方郎中。他感激之下，传授了你一套独门针灸之术——能刺激经脉、激发潜能。这是连大门派都没有的秘法！`,
    `{npc}被你的毅力打动，决定收你为记名弟子。他说："我这一生见过无数天才，但像你这样的傻子，还是第一个。"你终于有了师父。`,
  ], { talentExclusive: 'trash', effects: { strength: 7, health: 5, charisma: 2 }, requiredFlags: ['trash_growth_0'], flags: ['trash_growth_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 18, 25, 0.75, [
    `经过多年的苦修，你在{location}遇到了一个瓶颈——经脉虽已疏通，但内力积累太慢。一位路过的老者告诉你："内力不足，便以招式补；招式不精，便以意志补。"`,
    `你在{location}的瀑布下苦修三月，终于突破了第一重经脉桎梏。出水时，你一掌劈开了千斤巨石——这一掌，没有雄厚内力，只有千锤百炼的劲力。`,
  ], { talentExclusive: 'trash', effects: { strength: 8, intelligence: 3, luck: 3 }, requiredFlags: ['trash_growth_1'], flags: ['trash_growth_2'] }));

  // 阶段3（26-45）：崭露头角，以巧破力
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 26, 35, 0.78, [
    `{location}举办武林大会，你以"无名散人"的身份报名参加。所有人都嘲笑你："一个内力低微的废物，也配参加武林大会？"`,
    `大会第一轮，你对上了名门弟子。对方内力深厚，拳风如虎。你不硬接，以诡异的步法和精准的击打对方穴道，竟将其制服！全场寂静。`,
  ], { talentExclusive: 'trash', effects: { strength: 8, charisma: 6, special: 3 }, requiredFlags: ['trash_growth_2'], flags: ['trash_adult_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 30, 40, 0.72, [
    `你的"以巧破力"震惊了江湖。{npc}说你是"百年以来第一个以内力低微之身击败名门弟子的人"。各大门派开始重新审视"技巧"这条被遗忘的道路。`,
    `你在{location}建立了一座小小的"巧劲武馆"，专门招收内力不足或有身体缺陷的孩子。你说："内力决定起点，但智慧和毅力决定终点。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 7, intelligence: 5, luck: 3 }, requiredFlags: ['trash_adult_0'], flags: ['trash_adult_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 45, 0.68, [
    `昔日嘲笑你的同村武者在{location}与你重逢。他依然是三流高手，而你已能挑战一流。他跪地痛哭："当年是我有眼无珠..."你将他扶起。`,
    `{legend}的传承之地开启，你说服众人让你这个"内力低微的废物"也进去试试。他们抱着看笑话的心态同意了——但很快，他们就笑不出来了。`,
  ], { talentExclusive: 'trash', effects: { strength: 6, luck: 5, special: 4 }, requiredFlags: ['trash_adult_1'], flags: ['trash_adult_2'] }));

  // 逆袭关键事件 — 含选择分支
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 28, 42, 0.65, [
    `武林大会的决赛上，你对上了当今武林盟主的亲传弟子。对方内力如海，而你内力浅薄。所有人都认为这是一场屠杀——但他们错了。`,
    `比赛开始前，{npc}暗中塞给你一本册子："这是'逆脉针法'，能短时间内激发三倍经脉潜能，但事后会损伤根基。用不用，你自己决定。"`,
  ], {
    talentExclusive: 'trash',
    effects: { strength: 3 },
    requiredFlags: ['trash_adult_1'],
    flags: ['trash_climax_0'],
    chainPriority: 2,
    choices: [
      choice('施用逆脉针法，全力一战', 1.0, '逆脉针法让你的招式速度暴涨三倍，点中了对方周身大穴！全场震撼，百年未有！', '逆脉针法的反噬让你经脉剧痛，虽然赢了比赛，但需休养三年', { strength: 15, charisma: 10, special: 5, health: -20 }, { strength: 5, charisma: 3, health: -30 }, ['branch_trash_fight'], ['branch_trash_fight_fail']),
      choice('拒绝针法，以本真之力战斗', 1.0, '你没有借助外力，仅凭精妙招式与对方周旋百招。虽然最终惜败，但你赢得了所有人的尊重！', '你拒绝了针法，但实力差距太大，被一招击败。众人摇头："果然，废物就是废物。"', { charisma: 10, luck: 8, strength: 5 }, { charisma: -5, health: -15 }, ['branch_trash_persist'], ['branch_trash_persist_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 50, 0.60, [
    `你在{location}遇到了一位隐世高人。他打量你许久，说："你的经脉已达凡人之极限。若想再进一步，需以'破而后立'之法——废去旧脉，重塑新脉。"`,
    `老者给了你两个选择：他可以帮你施针，废去旧脉重塑新脉（九死一生）；或者传你一套更稳妥的锻体之法（进展缓慢但安全）。`,
  ], {
    talentExclusive: 'trash',
    effects: { special: 3 },
    requiredFlags: ['trash_climax_0'],
    flags: ['trash_climax_1'],
    chainPriority: 2,
    choices: [
      choice('破而后立，重塑经脉', 1.0, '七七四十九针下去，你几度昏死又几度醒来。最终，新脉已成，内力如江河奔涌——你成就了传说中的"无瑕经脉"！', '重塑过程超出了你的承受极限。虽然侥幸不死，但经脉受损大半，需要数十年才能恢复', { strength: 20, special: 10, health: -25 }, { health: -40, strength: 3 }, ['branch_trash_transform'], ['branch_trash_transform_fail']),
      choice('稳扎稳打，不求速成', 1.0, '你选择了更稳妥的道路。虽然进展缓慢，但根基无比扎实。老者点头："大器晚成，方得始终。"', '稳妥之路需要的时间远超你的寿元。你知道，自己可能等不到大成的那一天了', { intelligence: 10, strength: 5, health: 5 }, { intelligence: 3, luck: -3 }, ['branch_trash_persist2'], ['branch_trash_persist2_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 40, 55, 0.55, [
    `你的故事传遍了江湖。{location}的巧劲武馆每天都有人慕名而来——不是天才，而是那些被判定为"废物"的孩子。`,
    `{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。不是因为我更强，而是因为我从未停下。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 5, special: 5 }, requiredFlags: ['trash_climax_1'], flags: ['trash_climax_2'], chainPriority: 3 }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 45, 60, 0.50, [
    `你以巧劲之道，挑战了当世武林宗师。那一战没有内力对轰，只有招式与智慧的极致碰撞。最终，你一指点中对方膻中穴——胜负已分！`,
    `你成为了百年来第一个以内力浅薄之躯击败武林宗师的人。{location}的武馆门前排起了长队，那个被嘲笑的孩子，如今已是传说。`,
  ], { talentExclusive: 'trash', effects: { strength: 10, intelligence: 5, charisma: 10, special: 10 }, requiredFlags: ['trash_climax_2'], flags: ['trash_legend'], chainPriority: 3 }));

  // 废材老年
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 55, 80, 0.60, [
    `你在{location}收徒传道，专门招收内力不足的孩子。你说："内力决定起点，但智慧和毅力决定终点。"`,
    `你的弟子中有人开创了新的招式流派，有人以内力低微之身成为了门派长老。{npc}感叹："你一人之力，改变了一个时代的武学格局。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 8, intelligence: 5 }, requiredFlags: ['trash_legend'], flags: ['trash_elder_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 60, 90, 0.55, [
    `大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。`,
    `你微笑着说："如果重来一次，我还是会选择做那个内力低微的废物。因为正是'废物'二字，让我找到了属于自己的道。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 6, health: -5 }, requiredFlags: ['trash_elder_0'], flags: ['trash_elder_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 70, 100, 0.50, [
    `你离世的那天，{location}下起了细雨。无数你曾经帮助过的人自发前来为你送行。`,
    `墓碑上没有刻任何武功名号，只刻着一句话："他证明了，废物也能走得很远。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 5 }, requiredFlags: ['trash_elder_1'], flags: ['trash_elder_2'] }));

  return T;
}

// ============================================================
// 武侠世界重大抉择事件生成器
// ============================================================

function generateWuxiaMajorChoices(w) {
  const T = [];
  const { prefix } = w;

  // 重大抉择1：江湖之路（15岁）
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 15, 15, 0.98, [
    `你站在{location}的山巅，一位白发老者负手而立："少年，江湖有三条路。正道之路，侠义无双，但规矩缠身；魔道之路，快意恩仇，但举世皆敌；逍遥之路，无拘无束，但孤苦伶仃。选一条吧。"`,
  ], {
    choices: [
      choice('正道之路（侠义无双，除暴安良）', 1.0, '你选择了正道之路，拜入名门正派，修习正宗心法。你的侠名在江湖上渐渐传开，但你也发现，正道并非想象中那般光明磊落', '你选择了正道之路，却被门派规矩束缚得喘不过气。每日除了练功就是站岗，江湖的广阔与你无关', { charisma: 10, special: 8, intelligence: 5 }, { charisma: -5, strength: 3 }, ['major_righteous'], ['major_righteous_fail']),
      choice('魔道之路（快意恩仇，不拘礼法）', 1.0, '你选择了魔道之路，加入了一个亦正亦邪的门派。在这里，实力就是规矩。你的武功进步神速，但你也成为了正道人士追杀的目标', '你选择了魔道之路，却发现魔教内部倾轧比正道更甚。今日的兄弟，明日的刀下鬼', { strength: 12, special: 5 }, { charisma: -10, health: -10 }, ['major_demonic'], ['major_demonic_fail']),
      choice('逍遥之路（无拘无束，独来独往）', 1.0, '你选择了逍遥之路，不拜门派，只凭一己之力行走江湖。你没有靠山，也没有束缚。风餐露宿，但天地任逍遥', '你选择了逍遥之路，却在{location}遭遇劫匪时无人援手。孤身一人的江湖，比你想象中更冷', { luck: 10, intelligence: 8 }, { luck: -8, health: -15 }, ['major_free'], ['major_free_fail']),
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  }));

  // 正道后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `因为你选择了正道之路，{location}的百姓对你交口称赞。但门派长老却警告你："侠名太盛，易招嫉恨。"`,
    `你在{location}奉命铲除一群"山贼"，却发现他们其实是被逼上梁山的饥民。你的剑，第一次犹豫了。`,
  ], { requiredFlags: ['major_righteous'], effects: { charisma: 8, special: 6 }, flags: ['major_righteous_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你因为正道之路而获得了江湖声望，但{npc}警告你："正道之中也有伪君子。小心那些笑着递刀的人。"`,
    `你的侠名传遍了{location}，越来越多的年轻人想拜你为师。但你心中有一个疑问：你教的，真的是正义吗？`,
  ], { requiredFlags: ['major_righteous_1'], effects: { charisma: 10, intelligence: 5, special: 4 } }));

  // 魔道后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `因为你选择了魔道之路，{location}的正道人士对你喊打喊杀。但你也发现，魔教弟子之间有着过命的交情——因为举世皆敌，所以格外团结。`,
    `你在{location}结识了一位魔教女子。她问你："正道说我们是魔，但我们可曾欺辱过百姓？"你答不上来。`,
  ], { requiredFlags: ['major_demonic'], effects: { strength: 8, charisma: -3 }, flags: ['major_demonic_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你因为魔道之路而获得了强大的实力，但{npc}警告你："魔道之所以为魔，不是因为功法，而是因为人心。别让自己变成真正的魔。"`,
    `你的杀意越来越重，{location}的飞鸟经过你上空都会惊飞。你开始怀疑：这真的是你要的江湖吗？`,
  ], { requiredFlags: ['major_demonic_1'], effects: { strength: 10, special: 5, intelligence: -5 } }));

  // 逍遥后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `因为你选择了逍遥之路，在{location}结识了来自各地的奇人异士。你的逍遥精神感染了{npc}。`,
    `你在逍遥探索中意外发现了{legend}留下的隐秘线索，命运的齿轮开始转动。`,
  ], { requiredFlags: ['major_free'], effects: { luck: 6, intelligence: 4 }, flags: ['major_free_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你在逍遥之路上的探索让你发现了{location}不为人知的秘密。{legend}的遗迹因为你的一次偶然探索而被发现。`,
    `{npc}告诉你，你的逍遥精神正是{legend}当年所追求的，你冥冥之中走上了正确的道路。`,
  ], { requiredFlags: ['major_free_1'], effects: { luck: 8, special: 4 } }));

  // 重大抉择2：家国与江湖（30岁）
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 30, 0.97, [
    `{location}发生了一件震动天下的大事。朝廷与武林盟主签订密约，要将江湖门派纳入朝廷管辖，违者以谋反论处。但你在调查中发现，武林盟主其实是被朝廷以家人性命胁迫的——他暗中联络各派，欲反戈一击。{npc}向你提出了一个抉择：效忠朝廷可获荣华富贵，但江湖将不复存在；支持武林盟主可保江湖独立，但可能株连九族；或者联合各派推翻朝廷，重建秩序。这是对你灵魂的考验。`,
  ], {
    choices: [
      choice('忠君报国，约束江湖', 1.0, '你选择了效忠朝廷，协助推行"以武制武"之策。江湖门派纷纷归顺，武林盟主被囚。你获得了高官厚禄，但夜深人静时，你总会想起当年在江湖上纵马高歌的日子', '你选择了效忠朝廷，但朝廷出尔反尔，在你完成任务后便弃之如敝履。你失去了江湖，也失去了朝廷的信任', { intelligence: 10, charisma: 6, special: 5 }, { charisma: -10, luck: -5, special: -5 }, ['major_loyalty'], ['major_loyalty_fail']),
      choice('江湖独立，反抗朝廷', 1.0, '你选择了支持武林盟主，暗中联络各派，在{location}发动了震惊天下的"武林起义"。虽然损失惨重，但江湖最终保住了独立。你的名字，被刻在了武林丰碑之上', '你支持了武林盟主，但消息走漏，朝廷大军压境。{location}血流成河，江湖元气大伤，你成为了朝廷头号通缉犯', { strength: 10, charisma: 8, luck: 5 }, { health: -30, charisma: -10, special: -5 }, ['major_independence'], ['major_independence_fail']),
      choice('推翻朝廷，重建秩序', 1.0, '你选择了最激进的道路——联合魔教、绿林、甚至异域势力，一举推翻了腐朽的朝廷。新朝建立后，你拒绝了封王拜相，只要求"江湖自治"。你说："我要的不是权力，是一个公平的天下"', '你的起义失败了。朝廷与江湖联手镇压了你，说你是"乱臣贼子"。你在{location}被处以极刑，但临死前你笑了："至少我试过了。"', { strength: 12, intelligence: 8, special: 5 }, { health: -100, charisma: -15 }, ['major_revolution'], ['major_revolution_fail']),
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  }));

  // 忠君后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `因为你选择了忠君，{location}的武林人士视你为叛徒。但你暗中保护了不少门派，让他们以"归顺"之名得以存续。`,
    `你在朝中步步高升，却始终为江湖留了一扇后门。{npc}感叹："身在曹营心在汉，你比任何人都难。"`,
  ], { requiredFlags: ['major_loyalty'], effects: { intelligence: 8, charisma: 8, luck: 5 } }));

  // 独立后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `你因为江湖独立之战而成为了传奇。{location}的百姓自发为你建立祠堂，虽然简陋但充满诚意。`,
    `新的武林盟主在{location}颁布了第一条江湖自治法令——这是你浴血奋战换来的。`,
  ], { requiredFlags: ['major_independence'], effects: { charisma: 10, strength: 5, special: 3 } }));

  // 推翻后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `你因为推翻朝廷而成为了新朝的无冕之王。但你说："我不要王位，我要的是天下再没有人因为出身而被决定命运。"`,
    `{npc}带来了坏消息：新朝内部也开始争权夺利。你苦笑着摇头："推翻一个朝廷容易，推翻人心中的贪婪难。"`,
  ], { requiredFlags: ['major_revolution'], effects: { strength: 10, intelligence: 6, charisma: -3 } }));

  // 重大抉择3：天下第一（45岁）
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 45, 45, 0.96, [
    `你修炼到了一流高手的巅峰，离武林宗师只差一步。{npc}告诉你："你的武功已臻化境，但江湖上有三个人在你之上——武林盟主、魔教教主、以及隐居的天下第一剑。你有三个选择：参加武林盟主之争，号令天下；隐退山林，不问世事；或者挑战天下第一，只求一败。"`,
  ], {
    choices: [
      choice('参加武林盟主之争，号令天下', 1.0, '你参加了{location}的武林大会，连败十八派掌门，登上了武林盟主之位。从此江湖以你为尊，但你也发现，坐在那个位置上的人，往往身不由己', '你参加了武林大会，却在决赛中败给了暗算。对方在兵器上涂了慢性毒药，你虽察觉却已中招，功力大损', { charisma: 15, special: 10, strength: 5 }, { health: -30, strength: -5, charisma: -5 }, ['major_chief'], ['major_chief_fail']),
      choice('隐退山林，不问世事', 1.0, '你选择了隐退，在{location}的深山老林中建了一座茅屋。每日种花养鸟，偶有少年慕名求教，你便指点一二。你说："江湖不是打打杀杀，江湖是人情世故。我累了。"', '你隐退了，但江湖的恩怨没有放过你。昔日的仇家找到了你的隐居之处，你不得不重出江湖', { intelligence: 10, luck: 8, health: 10 }, { health: -20, strength: 5 }, ['major_hermit'], ['major_hermit_fail']),
      choice('挑战天下第一，只求一败', 1.0, '你孤身一人登上了{location}的绝顶峰，向天下第一剑发起了挑战。那一战打了三天三夜，最终你以半招之差落败。但天下第一剑对你说："百年以来，你是第一个让我出全力的人。"你虽败犹荣', '你挑战了天下第一，但实力差距太大。三招之内，你便败下阵来。天下第一剑摇头："你的心不纯，剑也不纯。回去吧。"', { strength: 15, intelligence: 10, charisma: 8 }, { health: -25, charisma: -5 }, ['major_challenge'], ['major_challenge_fail']),
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  }));

  // 盟主后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你成为武林盟主后，{location}的大小事务都需要你定夺。你渐渐明白，为什么前任盟主会那般疲惫。`,
    `你在盟主之位上推行改革，减少门派纷争。虽然阻力重重，但你无怨无悔。`,
  ], { requiredFlags: ['major_chief'], effects: { charisma: 8, intelligence: 5, special: 5 } }));

  // 隐退后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你隐退后，{location}的江湖上流传着你的传说。有人说你死了，有人说你成仙了，还有人说你在等一个值得出山的弟子。`,
    `一位少年找到了你的茅屋，跪地三天三夜求你收徒。你叹道："躲了半辈子，还是躲不过缘分。"`,
  ], { requiredFlags: ['major_hermit'], effects: { intelligence: 8, luck: 6, charisma: 4 } }));

  // 挑战后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你虽败于天下第一剑，但那一战让你的武功更上一层楼。{npc}说："失败是最好的老师，但你这次交的学费太高了。"`,
    `天下第一剑托人送来一本剑谱，扉页上写着："赠予让我全力以赴之人。"你捧着剑谱，热泪盈眶。`,
  ], { requiredFlags: ['major_challenge'], effects: { strength: 10, intelligence: 8, special: 5 } }));

  // 重大抉择4：人生终局（60岁）
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 60, 60, 0.95, [
    `你站在{location}的绝顶之上，内力已臻化境，隐隐触摸到了传说中的"破碎虚空"之境。但你也发现了一个秘密：破碎虚空并非飞升仙界，而是将毕生内力散于天地之间，反哺万物——你将失去一切武功，甚至生命。{npc}问你："这是你的选择吗？"`,
  ], {
    choices: [
      choice('破碎虚空，反哺天地', 1.0, '你选择了破碎虚空。毕生内力化作漫天星光，散入山河大地。你没有死，但失去了所有武功，变回了一个普通人。然而，{location}的草木因为你的内力而更加繁茂，百姓因为你的馈赠而百病不侵。你说："这才是武学真正的终点。"', '你试图破碎虚空，但内力反噬，经脉尽断。虽然侥幸保住性命，却从此卧床不起', { special: 20, charisma: 15, health: 10 }, { health: -80, special: -20, strength: -15 }, ['major_shatter'], ['major_shatter_fail']),
      choice('留在江湖，传承武学', 1.0, '你选择了留在江湖。你在{location}开宗立派，将毕生所学倾囊相授。你的弟子遍布天下，有的成为了大侠，有的成为了宗师。临终前，你说："我没有破碎虚空，但我破碎了\'武学不可外传\'的规矩。"', '你留在了江湖，但仇家趁你年老体衰找上门来。你的弟子拼死护你周全，但你看着他们的伤亡，心中满是愧疚', { charisma: 15, intelligence: 10, luck: 10 }, { health: -40, charisma: 5 }, ['major_legacy_wuxia'], ['major_legacy_wuxia_fail']),
      choice('云游四海，不问世事', 1.0, '你选择了最平凡的道路——放下一切，做一名游方老人。你走遍名山大川，将所见所闻写成一本《江湖游记》。书中没有武功秘籍，只有人情冷暖。后人说，这本书比任何武功都珍贵', '你云游途中遭遇山匪，年老体衰的你无力反抗。关键时刻，一位你曾经指点过的少年出现，救了你一命。你说："善因善果，江湖不负我。"', { luck: 12, intelligence: 8, health: 5 }, { health: -20, luck: 5 }, ['major_wander'], ['major_wander_fail']),
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  }));

  // 破碎后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你破碎虚空后，{location}的百姓将你奉为神明。但你只是坐在村口晒太阳，和孩童们讲故事。`,
    `一位年轻的武者来挑战你，发现你已没有内力。他愣在原地，你却笑着说："来，我请你喝茶。"`,
  ], { requiredFlags: ['major_shatter'], effects: { charisma: 12, luck: 10, health: 5 } }));

  // 传承后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你留在江湖的举动感动了无数人。{location}建起了你的雕像，不是一个武者，而是一个教书老人的形象。`,
    `你将毕生武学整理成册，存放在{location}，等待有缘人。你说："武功不是用来杀人的，是用来保护所爱之人的。"`,
  ], { requiredFlags: ['major_legacy_wuxia'], effects: { charisma: 12, intelligence: 8, special: 5 } }));

  // 云游后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你云游四海的游记成为了畅销书。{location}的书店里，年轻人争相传阅，说这才是真正的江湖。`,
    `你在一座无名山头安详离世。没有墓碑，只有一棵你亲手种下的松树。后人说，那树下常有侠客歇脚，仿佛你还在守护着他们。`,
  ], { requiredFlags: ['major_wander'], effects: { luck: 10, intelligence: 5, charisma: 5 } }));

  return T;
}

// ============================================================
// 武侠世界境界突破事件生成器
// ============================================================

function generateWuxiaRealmEvents(w) {
  const T = [];
  const { prefix } = w;

  const realms = [
    { stage: 1, name: '三流高手', minAge: 18, maxAge: 30, prob: 0.92, reqText: '内力≥20、门派≥15', maxAgeGain: 60, desc: '三流高手是江湖的入门。你的内力已能贯通经脉，招式也有了章法。' },
    { stage: 2, name: '二流高手', minAge: 35, maxAge: 50, prob: 0.88, reqText: '内力≥35、武学≥30、气血≥20', maxAgeGain: 80, desc: '二流高手的内力浑厚数倍，招式融会贯通，在地方上已是一号人物。' },
    { stage: 3, name: '一流高手', minAge: 55, maxAge: 75, prob: 0.85, reqText: '内力≥50、武学≥45', maxAgeGain: 120, desc: '一流高手已能开宗立派，内力收发由心，招式出神入化。' },
    { stage: 4, name: '武林宗师', minAge: 80, maxAge: 110, prob: 0.82, reqText: '内力≥70、武学≥60', maxAgeGain: 200, desc: '武林宗师已臻化境，一招一式皆含武理，弟子遍布江湖。' },
    { stage: 5, name: '大宗师', minAge: 120, maxAge: 160, prob: 0.78, reqText: '内力≥90、武学≥80、气血≥60', maxAgeGain: 300, desc: '大宗师已触摸到武道极限，内力可外放伤人，气势如山如海。' },
    { stage: 6, name: '武圣', minAge: 200, maxAge: 280, prob: 0.75, reqText: '武学≥100', maxAgeGain: 500, desc: '武圣之名震古烁今，你的存在本身就是一部江湖传说。' },
    { stage: 7, name: '破碎虚空', minAge: 300, maxAge: 400, prob: 0.70, reqText: '内力≥120、武学≥100', maxAgeGain: 2000, desc: '破碎虚空是武道的终极。散毕生功力于天地，反哺万物。' },
  ];

  realms.forEach((r, idx) => {
    const prevFlag = idx === 0 ? null : `realm_breakthrough_${realms[idx-1].stage}`;
    const reqFlags = prevFlag ? [prevFlag] : [];

    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge, r.maxAge, r.prob, [
      `你在{location}苦修多年，终于触摸到了${r.name}的门槛。{npc}告诉你："${r.desc}突破需要${r.reqText}。"`,
      `你的武功已达瓶颈，在{location}感应到了${r.name}的契机。但突破之路九死一生，稍有不慎便可能走火入魔。`,
    ], {
      requiredFlags: reqFlags,
      flags: [`realm_attempt_${r.stage}`],
      chainPriority: 5,
      choices: [
        choice('全力冲击，不留退路', 1.0,
          `你孤注一掷，将全部内力灌注于丹田经脉。刹那间，{location}的落叶无风自动——你成功了！你突破到了${r.name}！`,
          `你全力冲击瓶颈，但内力反噬，经脉受损。虽然保住了性命，但武功大跌，需要数年才能恢复。`,
          { realm: 1, special: 5, intelligence: 3, maxAge: r.maxAgeGain },
          { health: -30, special: -10, maxAge: -20 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail_${r.stage}`]
        ),
        choice('稳扎稳打，徐徐图之', 1.0,
          `你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了${r.name}。`,
          `你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。`,
          { realm: 1, special: 3, intelligence: 5, maxAge: Math.floor(r.maxAgeGain * 0.7) },
          { health: -15, special: -5, maxAge: -10 },
          [`realm_breakthrough_${r.stage}`, `realm_breakthrough_${r.stage}_steady`], [`realm_fail_${r.stage}_steady`]
        ),
        choice('放弃突破，继续积累', 1.0,
          `你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。`,
          '',
          { intelligence: 3, special: 2, strength: 2 },
          {},
          [`realm_delay_${r.stage}`], []
        ),
      ]
    }));

    // 突破成功后续事件
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 2, r.maxAge + 15, r.prob * 0.8, [
      `你突破到${r.name}的消息传遍了江湖。{location}的武者们纷纷前来祝贺，你的名字被刻在了武林碑上。`,
      `{npc}看着你，眼中满是欣慰："从江湖新秀到${r.name}，你走了${r.minAge}年。这速度，在江湖上已是中上之资。"`,
    ], {
      requiredFlags: [`realm_breakthrough_${r.stage}`],
      flags: [`realm_stable_${r.stage}`],
      chainPriority: 2,
      effects: { charisma: 3, luck: 2 },
    }));

    // 突破失败后续事件（可以重试）
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 5, r.maxAge + 25, r.prob * 0.7, [
      `上一次突破${r.name}失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"`,
      `你的伤势已愈，武功甚至比以前更加精进。你再次感应到了${r.name}的契机——这一次，你更有把握。`,
    ], {
      requiredFlags: [`realm_fail_${r.stage}`],
      flags: [`realm_retry_${r.stage}`],
      chainPriority: 3,
      choices: [
        choice('再次冲击', 1.0,
          `第二次冲击，你总结了上次的教训，一举突破到了${r.name}！{location}的武者们为你喝彩！`,
          `又一次失败。你开始怀疑，自己是否真的与${r.name}无缘...`,
          { realm: 1, special: 5, maxAge: r.maxAgeGain },
          { health: -40, special: -15, maxAge: -30 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail2_${r.stage}`]
        ),
      ]
    }));
  });

  return T;
}

// ============================================================
// 武侠世界通用事件生成器
// ============================================================

function generateWuxiaCommonEvents(w) {
  const T = [];
  const { prefix, scenes, npcs, legends } = w;

  // --- Childhood (0-12) 5 templates ---
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 0, 3, randProb('legendary'), [
    `你出生那天，{location}突然狂风大作，一道剑气冲天而起。{npc}跪地叩拜，说你是千年一遇的${w.talentNames.legendary}。`,
    `你降生的瞬间，{location}的兵器纷纷出鞘鸣响，{legend}的虚影在天际显现，整个江湖为之震动。`,
    `你的第一声啼哭引发了{location}的内力波动，{npc}颤抖着说："${w.talentNames.legendary}降世了！"`,
  ], { effects: { luck: 10, special: 8, charisma: 5 } }));

  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 2, 7, randProb('epic'), [
    `你在{location}玩耍时，体内突然涌出一股热流。{npc}惊讶地发现你竟是${w.talentNames.good}之资！`,
    `三岁时，你在{location}无意间触发了一套古老的拳法阵势，威力比成年武者还强。`,
    `{npc}为你进行根骨测试，{legend}的印记在你身上一闪而逝——你是被选中的人。`,
  ], { effects: { special: 6, intelligence: 4 } }));

  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 4, 9, randProb('rare'), [
    `你在{location}救了一只受伤的小鹰，它其实是{legend}的信使，临走前留下了一枚暗器铁令。`,
    `{npc}在你满月时送了一块玉佩，后来你发现那是一件上古神兵的碎片。`,
    `你从小就能看见别人看不见的{legend}幻影，{npc}说这是内力初现的征兆。`,
    `你在{location}挖到了一坛百年陈酿，喝了一口后浑身舒畅，经脉隐隐发热。`,
  ], { effects: rand([{ luck: 5 }, { special: 4 }, { intelligence: 4 }]) }));

  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 0, 6, randProb('common', 0, 2), [
    `你生在普通人家，每天在{location}玩耍，日子平淡但快乐。`,
    `{npc}教你读书识字，你学得有模有样。`,
    `你在{location}认识了几个玩伴，度过了无忧无虑的童年。`,
    `家里虽然不富裕，但{npc}总是把最好的留给你。`,
  ], { effects: { charisma: 2, luck: 1 } }));

  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 3, 10, randProb('common', 1, 2), [
    `你在{location}帮{npc}干活，学会了很多生活技能。`,
    `你的身体比同龄人强壮，{npc}说你是干农活的好料子。`,
    `你喜欢在{location}发呆，常常一坐就是一整天。`,
    `{npc}给你讲了一个关于{legend}的故事，你听得入了迷。`,
  ], { effects: { strength: 2, intelligence: 1 } }));

  // --- Growth (13-25) 5 templates ---
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 15, 20, randProb('legendary'), [
    `你在{location}苦悟三日，出关时眼中精光四射——你竟在战斗中顿悟了{legend}的绝世武功！`,
    `一场雷雨夜，你在{location}被天雷击中非但没死，反而打通了任督二脉！`,
    `{legend}的残魂在{location}与你相遇，将毕生武学心得传授于你。`,
  ], { effects: { intelligence: 10, special: 8, strength: 5 } }));

  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 14, 22, randProb('epic'), [
    `你在{location}苦练三年，终于突破了困扰多年的招式瓶颈，实力大增！`,
    `{npc}带你外出历练，你在{location}击败了一个强敌，获得了珍贵的武学秘籍。`,
    `你发现了{legend}留下的试剑场，通过考验后获得了意想不到的收获。`,
  ], { effects: { strength: 6, special: 5 } }));

  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 13, 24, randProb('rare'), [
    `你在{location}遇到了一生的宿敌，你们不打不相识，反而成为了朋友。`,
    `{npc}传授你一项绝技，你花了整整一年才学会，但威力惊人。`,
    `你在{location}救了一个被追杀的人，他为了报答你，送了一件宝物。`,
    `你和同辈在{location}比武，虽然输了但收获巨大。`,
  ], { effects: rand([{ strength: 4, luck: 2 }, { intelligence: 5 }, { charisma: 4 }]) }));

  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 13, 20, randProb('common', 0, 2), [
    `你每天在{location}勤奋练功，虽然进步缓慢但根基扎实。`,
    `{npc}督促你修炼，你不敢懈怠。`,
    `你在{location}读了很多武学典籍，眼界开阔了不少。`,
    `平平淡淡的一年，你在{location}默默积累着。`,
  ], { effects: { intelligence: 2, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 16, 25, randProb('common', 1, 2), [
    `你在{location}结交了一些朋友，互相切磋进步。`,
    `{npc}给你讲了很多前辈的故事，你深受启发。`,
    `你在{location}处理了一些杂务，锻炼了自己的能力。`,
    `这一年没什么特别的事发生，但你感觉自己在慢慢变强。`,
  ], { effects: { charisma: 2, luck: 2 } }));

  // --- Adult (26-50) 3 templates ---
  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 28, 40, randProb('epic'), [
    `你在{location}开宗立派，广收门徒，一时间名声大噪。`,
    `你参与了{legend}相关的大规模事件，在关键时刻力挽狂澜。`,
    `你在{location}建立了属于自己的势力，各方强者纷纷来投。`,
  ], { effects: { charisma: 8, strength: 5, special: 5 } }));

  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 26, 45, randProb('rare'), [
    `你在{location}收下了第一个弟子，将自己的所学倾囊相授。`,
    `你和宿敌在{location}进行了最终决战，胜负难分。`,
    `你成功铸造了传说中的兵器，引起了不小的轰动。`,
  ], { effects: rand([{ intelligence: 5, special: 4 }, { charisma: 6, luck: 3 }]) }));

  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 26, 50, randProb('common'), [
    `你在{location}处理日常事务，势力稳步发展。`,
    `{npc}来找你帮忙，你出手解决了他的难题。`,
    `你在{location}度过了平静的一年，武功稳步提升。`,
    `平平淡淡的一年，你在{location}默默修炼。`,
  ], { effects: { strength: 2, intelligence: 2, special: 2 } }));

  // --- Elder (50+) 武侠专用 ---
  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 50, 100, randProb('common'), [
    `你在{location}闭关苦修，试图触摸更高境界的门槛。`,
    `你游历天下，在{location}见识了各种奇人异事，武道心境更加坚定。`,
    `你开始招收弟子，在{location}传授毕生所学。`,
  ], { effects: { intelligence: 3, special: 2 } }));

  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 80, 150, randProb('rare'), [
    `你的武功已臻化境，成为了{location}的传说级人物。`,
    `你开始着手准备最终的突破，{npc}专程前来为你护法。`,
    `你将毕生所学整理成册，存放在{location}，等待有缘人。`,
  ], { effects: { intelligence: 8, charisma: 5 } }));

  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 120, 220, randProb('rare'), [
    `你感应到了武道极限的气息，在{location}寻找突破的契机。`,
    `你回顾一生武学，在{location}悟出了新的招式。`,
    `{npc}带来消息：传说中的{legend}可能重现江湖。`,
  ], { effects: { special: 10, intelligence: 5 } }));

  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 200, 350, randProb('epic'), [
    `你已是武林宗师，在{location}静待武道终极的到来。`,
    `你将毕生武学感悟刻入石碑，留给后世有缘人。`,
    `{npc}问你为何不急于追求破碎虚空，你笑答："我在等一个值得托付衣钵的人。"`,
  ], { effects: { charisma: 10, special: 5 } }));

  // --- Combat (15-60) 6 templates ---
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 20, 40, randProb('legendary'), [
    `你在{location}以一己之力对抗十位同阶高手，最终大获全胜，一战成名！`,
    `{legend}的敌人找上了你，你在{location}展开惊天大战，竟越级将其斩杀！`,
    `你为了保护{location}的百姓，独自对抗入侵的恶徒军团，创造了不可能的奇迹。`,
  ], { effects: { strength: 12, charisma: 8, health: -10 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 18, 45, randProb('epic'), [
    `你参与了一场改变{location}格局的大规模门派战争，立下赫赫战功。`,
    `{npc}挑战你的权威，你们在{location}大战三百回合，最终你险胜一招。`,
    `你在{location}发现了{legend}留下的试剑场，通过了生死考验。`,
  ], { effects: { strength: 8, charisma: 4, health: -5 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 15, 35, randProb('rare', 0, 2), [
    `你在{location}遭遇强敌，展开了一场生死搏斗，最终险胜。`,
    `你和{npc}在{location}切磋，双方都获益匪浅。`,
    `你为了保护同伴，在{location}与敌人激战，受了轻伤。`,
  ], { effects: { strength: 5, health: -3 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 25, 50, randProb('rare', 1, 2), [
    `你在{location}参与了一场小规模冲突，表现出色。`,
    `{npc}偷袭你，你在{location}勉强将其击退。`,
    `你在{location}发现了敌人的据点，果断出击。`,
  ], { effects: { strength: 4, luck: 2 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 15, 40, randProb('common', 0, 2), [
    `你在{location}进行了日常训练，技艺略有精进。`,
    `你和同伴在{location}对练，互相学习。`,
    `你在{location}演练新学的招式，逐渐熟练。`,
  ], { effects: { strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 30, 60, randProb('common', 1, 2), [
    `你在{location}指导后辈战斗技巧，自己也有所感悟。`,
    `一场友好的比试在{location}举行，你获得了不错的名次。`,
    `你在{location}观摩高手对决，学到了不少实战经验。`,
  ], { effects: { strength: 2, intelligence: 1 } }));

  // --- Romance (16-50) 6 templates ---
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 18, 30, randProb('legendary'), [
    `你在{location}与{npc}相遇的瞬间，天地变色，{legend}的预言应验——你们是三生石上的命定之人。`,
    `{npc}为了救你，不惜耗尽毕生内力。你跪在{location}发誓：此生不负。`,
    `你们的故事被{legend}记载，成为了{location}永恒的传说。`,
  ], { effects: { charisma: 10, luck: 8, health: 5 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 20, 35, randProb('epic'), [
    `你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。`,
    `{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。`,
    `你们经历了{legend}的考验，感情反而更加坚不可摧。`,
  ], { effects: { charisma: 6, luck: 4 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 16, 30, randProb('rare', 0, 2), [
    `你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。`,
    `你和{npc}在{location}月下相会，互诉衷肠。`,
    `{npc}因为你的才华而倾心，主动向你示好。`,
  ], { effects: { charisma: 4, luck: 3 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 25, 40, randProb('rare', 1, 2), [
    `你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。`,
    `{npc}送你一件定情信物，你珍藏在身边。`,
    `你们一起在{location}经历了危险，感情更加深厚。`,
  ], { effects: { charisma: 3, luck: 2 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 20, 45, randProb('common', 0, 2), [
    `你在{location}认识了一个有趣的人，但关系尚不明确。`,
    `{npc}对你有些好感，但你还没想好如何回应。`,
    `你在{location}参加了一场聚会，结识了不少异性。`,
  ], { effects: { charisma: 2 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 30, 50, randProb('common', 1, 2), [
    `你和{npc}保持着朋友以上、恋人未满的关系。`,
    `你在{location}看到了别人恩爱的场景，心中有些羡慕。`,
    `这一年感情上没有太大的波澜，你专注于其他事情。`,
  ], { effects: { luck: 1 } }));

  // --- Practice/Cultivation (13-80) 6 templates ---
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 40, 70, randProb('legendary'), [
    `你在{location}闭关九九八十一天，出关时内力澎湃，你已触摸到了{legend}的境界！`,
    `你的内力达到了前所未有的高度，{location}的落叶因你而纷飞。`,
    `{legend}的虚影亲自降临{location}，为你指点武学大道。`,
  ], { effects: { special: 12, intelligence: 10, strength: 5 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 30, 60, randProb('epic'), [
    `你成功将{legend}的武功融会贯通，实力暴涨！`,
    `你在{location}经历了一场奇遇，内力大涨，连{npc}都震惊不已。`,
    `你突破了困扰多年的招式瓶颈，{location}的武者们纷纷前来观摩。`,
  ], { effects: { special: 8, intelligence: 5 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 20, 50, randProb('rare', 0, 2), [
    `你在{location}闭关修炼，领悟了新的招式。`,
    `{npc}传授你一项绝技，你勤加练习，终于大成。`,
    `你在{location}发现了一处内力充沛的宝地，修炼事半功倍。`,
  ], { effects: { special: 5, intelligence: 3 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 35, 65, randProb('rare', 1, 2), [
    `你在修炼中遇到了瓶颈，{npc}指点你突破。`,
    `你在{location}经历了一场奇遇，内力有所精进。`,
    `你成功铸造了辅助修炼的兵器，效果显著。`,
  ], { effects: { special: 4, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 13, 40, randProb('common', 0, 2), [
    `你在{location}按部就班地修炼，虽然没有突破但根基更加稳固。`,
    `{npc}检查了你的修炼进度，表示满意。`,
    `你在{location}研读武功秘籍，对一些招式有了新的理解。`,
  ], { effects: { special: 2, intelligence: 1 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 40, 80, randProb('common', 1, 2), [
    `你在{location}巩固已有的内力修为，为下一次突破做准备。`,
    `这一年修炼进度平平，但你没有气馁。`,
    `{npc}提醒你不可急于求成，你虚心接受。`,
  ], { effects: { special: 2 } }));

  // --- Exploration (13-80) 6 templates ---
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 25, 50, randProb('legendary'), [
    `你深入{location}最深处，发现了{legend}留下的核心传承，获得了改变命运的机缘！`,
    `你在{location}找到了通往神秘洞天的入口，{legend}的秘密向你敞开。`,
    `你解开了一个困扰世人百年的谜题，{location}的真相让你震惊。`,
  ], { effects: { luck: 10, intelligence: 8, special: 6 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 20, 45, randProb('epic'), [
    `你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。`,
    `你探索了一处危险的{location}，九死一生后带回了珍贵的宝物。`,
    `{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。`,
  ], { effects: { luck: 6, strength: 4 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 15, 40, randProb('rare', 0, 2), [
    `你深入{location}探险，发现了未知的秘密。`,
    `你在{location}找到了一些有价值的物品，收获颇丰。`,
    `你在{location}迷路了，却意外发现了一处隐蔽的武学圣地。`,
  ], { effects: { luck: 4, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 30, 55, randProb('rare', 1, 2), [
    `你在{location}发现了一些古老的壁画，记录着失传的武功。`,
    `你探索了一处废弃的{location}，找到了一些有用的物资。`,
    `{npc}带你进入了一个秘密的{location}，你大开眼界。`,
  ], { effects: { intelligence: 3, luck: 3 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 13, 35, randProb('common', 0, 2), [
    `你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。`,
    `你跟着{npc}去{location}采集了一些草药。`,
    `你在{location}发现了一些普通的矿石，聊胜于无。`,
  ], { effects: { luck: 2 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 35, 70, randProb('common', 1, 2), [
    `你在{location}进行了常规的巡查，一切正常。`,
    `你重访了以前去过的{location}，有了一些新的发现。`,
    `你在{location}休息了一段时间，养精蓄锐。`,
  ], { effects: { health: 2 } }));

  // --- World Story (20-100) 5 templates ---
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 40, 70, randProb('legendary'), [
    `{legend}的封印彻底破碎，整个江湖陷入了前所未有的动荡，你被卷入了漩涡中心！`,
    `一场席卷整个江湖的大战爆发了，{location}首当其冲，你必须做出选择。`,
    `江湖的规则开始改变，{legend}的意志降临，所有人都受到了影响。`,
  ], { effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 } }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 60, randProb('epic'), [
    `你发现{location}隐藏着改变江湖的秘密，各方势力为此展开了明争暗斗。`,
    `{npc}告诉你一个关于江湖起源的惊天秘密，你的世界观被彻底颠覆。`,
    `传说中的{legend}即将降临，所有人都在做准备，{location}的气氛紧张到了极点。`,
  ], { effects: { intelligence: 6, charisma: 4 } }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 25, 50, randProb('rare'), [
    `{location}附近发生了局部冲突，你不得不卷入其中。`,
    `{npc}带来了一个重要的消息，可能影响到{location}的未来。`,
    `你注意到了{location}的一些异常现象，似乎有什么大事要发生。`,
  ], { effects: { charisma: 3, luck: 3 } }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 45, randProb('common', 0, 2), [
    `你听到了一些关于{legend}的传闻，但真假难辨。`,
    `{location}发生了一些小变化，但你没有太在意。`,
    `{npc}跟你聊了聊最近的江湖时事，你表示关注。`,
  ], { effects: { intelligence: 2 } }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 40, 80, randProb('common', 1, 2), [
    `江湖依旧平静，{location}的生活一如既往。`,
    `你听说了一些关于{legend}的新消息，但似乎没什么实质内容。`,
    `这一年没什么大事发生，你在{location}安稳度日。`,
  ], { effects: { luck: 1 } }));

  // --- Hidden (20-150) 4 templates ---
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 60, 120, randProb('legendary'), [
    `你超越了{legend}，看到了江湖之外的真相——原来一切都只是...`,
    `你发现了这个江湖的运行规则，{location}只是一场巨大棋局的一角。`,
    `{legend}的真正身份让你震惊不已，你终于理解了江湖的本质。`,
  ], { conditions: [{ stat: 'intelligence', min: 120 }], effects: { intelligence: 15, special: 10 } }));

  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 50, 100, randProb('epic'), [
    `你在{location}发现了一个被禁止入内的区域，里面藏着惊人的秘密。`,
    `你解开了{legend}留下的谜题，获得了一份隐藏的武学传承。`,
    `{npc}告诉你一个只有极少数人知道的秘密，你感到责任重大。`,
  ], { conditions: [{ stat: 'intelligence', min: 100 }], effects: { intelligence: 10, special: 8 } }));

  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 35, 80, randProb('rare'), [
    `你在{location}找到了一条隐秘的通道，通向未知的地方。`,
    `你发现了一些关于{legend}的隐藏记录，内容令人费解。`,
    `{npc}偷偷塞给你一张地图，上面标记着{location}的秘密地点。`,
  ], { conditions: [{ stat: 'luck', min: 80 }], effects: { luck: 6, intelligence: 4 } }));

  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 20, 60, randProb('common'), [
    `你在{location}听到了一些奇怪的低语，但找不到来源。`,
    `你做了一个关于{legend}的怪梦，醒来后记忆模糊。`,
    `{npc}欲言又止，似乎想告诉你什么秘密但最终没说出口。`,
  ], { conditions: [{ stat: 'intelligence', min: 60 }], effects: { intelligence: 3 } }));

  // --- Death (0-300) 5 templates ---
  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 100, 0.35, [
    `你在{location}遭遇不测，生命力迅速流逝。`,
    `你的身体到达了极限，{npc}无能为力。`,
    `{legend}的诅咒降临在你身上，你无法抵抗。`,
  ], { effects: { health: -60 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 150, 0.45, [
    `你在{location}进行了最后的战斗，英勇牺牲。`,
    `寿元耗尽，你在{location}静静地闭上了眼睛。`,
    `你走火入魔，在{location}经脉尽断而亡。`,
  ], { effects: { health: -80 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 200, 0.55, [
    `你在{location}被强敌击杀，死不瞑目。`,
    `你的伤势恶化，{npc}尽力抢救但回天乏术。`,
    `{legend}的武功反噬，你在{location}力竭而亡。`,
  ], { effects: { health: -100 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 250, 0.65, [
    `你在{location}寿终正寝，周围的人都来为你送行。`,
    `你安详地在{location}离世，一生无憾。`,
    `{npc}守在你的床前，目送你离开这个世界。`,
  ], { effects: { health: -100 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 300, 0.75, [
    `你在{location}结束了这一生，灵魂化作流光消散。`,
    `你的故事成为了{location}的传说，后人会记得你的名字。`,
    `{legend}亲自前来接引你的灵魂，你感到一阵温暖。`,
  ], { effects: { health: -100 } }));

  return T;
}

// ============================================================
// 导出（如需模块导入使用）
// 在 generate-events.cjs 中直接复制粘贴函数定义即可
// ============================================================
module.exports = {
  generateWuxiaIdentityEvents,
  generateWuxiaTrashEvents,
  generateWuxiaMajorChoices,
  generateWuxiaRealmEvents,
  generateWuxiaCommonEvents,
};


// ====== End generated functions ======


function generateWorld(worldKey) {
  const w = worlds[worldKey];
  idCounters = {}; // 重置计数器

  if (w.prefix === 'sf') {
    const common = generateSciFiCommonEvents(w);
    const major = generateSciFiMajorChoices(w);
    const identity = generateSciFiIdentityEvents(w);
    const trash = generateSciFiTrashEvents(w);
    const realm = generateSciFiRealmEvents(w);
    return [...common, ...major, ...identity, ...trash, ...realm];
  }

  if (w.prefix === 'ap') {
    const common = generateApocalypseCommonEvents(w);
    const major = generateApocalypseMajorChoices(w);
    const identity = generateApocalypseIdentityEvents(w);
    const trash = generateApocalypseTrashEvents(w);
    const realm = generateApocalypseRealmEvents(w);
    return [...common, ...major, ...identity, ...trash, ...realm];
  }

  if (w.prefix === 'wx') {
    const common = generateWuxiaCommonEvents(w);
    const major = generateWuxiaMajorChoices(w);
    const identity = generateWuxiaIdentityEvents(w);
    const trash = generateWuxiaTrashEvents(w);
    const realm = generateWuxiaRealmEvents(w);
    return [...common, ...major, ...identity, ...trash, ...realm];
  }

  const common = generateCommonEvents(w);
  const major = generateMajorChoices(w);
  const identity = generateIdentityEvents(w);
  const trash = generateTrashEvents(w);
  const realm = w.prefix === 'cx' ? generateCultivationRealmEvents(w) : w.prefix === 'mg' ? generateMagicRealmEvents(w) : [];
  return [...common, ...major, ...identity, ...trash, ...realm];
}

function formatTemplates(templates, worldKey) {
  const w = worlds[worldKey];
  let lines = [];
  lines.push(`import type { EventTemplate } from './types';`);
  lines.push('');
  lines.push(`// ${w.name} — ${templates.length} event templates`);
  lines.push(`// Generated: ${new Date().toISOString().split('T')[0]}`);
  lines.push(`// Rarity tiers: legendary(≤0.10) / epic(0.10-0.25) / rare(0.25-0.50) / common(0.50-0.85) / trash-exclusive`);
  lines.push(`// Each template has 3-5 text variations, total ~${Math.floor(templates.length * 4)} actual events`);
  lines.push('');
  lines.push(`export const ${worldKey}Templates: EventTemplate[] = [`);

  templates.forEach((t) => {
    lines.push('  {');
    lines.push(`    id: '${t.id}', category: '${t.category}', minAge: ${t.minAge}, maxAge: ${t.maxAge}, probability: ${t.probability},`);
    lines.push('    templates: [');
    t.templates.forEach((txt) => {
      lines.push(`      '${txt.replace(/'/g, "\\'")}',`);
    });
    lines.push('    ],');

    if (t.effects && Object.keys(t.effects).length > 0) {
      const eff = Object.entries(t.effects).map(([k, v]) => `${k}: ${v}`).join(', ');
      lines.push(`    effects: { ${eff} },`);
    }

    if (t.choices && t.choices.length > 0) {
      lines.push('    choices: [');
      t.choices.forEach((c) => {
        const eff = Object.entries(c.effects || {}).map(([k, v]) => `${k}: ${v}`).join(', ');
        const failEff = c.failEffects ? Object.entries(c.failEffects).map(([k, v]) => `${k}: ${v}`).join(', ') : null;
        const choiceFlags = c.flags ? `, flags: [${c.flags.map(f => `'${f}'`).join(', ')}]` : '';
        const choiceFailFlags = c.failFlags ? `, failFlags: [${c.failFlags.map(f => `'${f}'`).join(', ')}]` : '';
        lines.push(`      { text: '${c.text.replace(/'/g, "\\'")}', successRate: ${c.successRate}, successText: '${c.successText.replace(/'/g, "\\'")}', failText: '${c.failText.replace(/'/g, "\\'")}', effects: { ${eff} }${failEff ? `, failEffects: { ${failEff} }` : ''}${choiceFlags}${choiceFailFlags} },`);
      });
      lines.push('    ],');
    }

    if (t.conditions && t.conditions.length > 0) {
      lines.push('    conditions: [');
      t.conditions.forEach((cond) => {
        const parts = [`stat: '${cond.stat}'`];
        if (cond.min !== undefined) parts.push(`min: ${cond.min}`);
        if (cond.max !== undefined) parts.push(`max: ${cond.max}`);
        lines.push(`      { ${parts.join(', ')} },`);
      });
      lines.push('    ],');
    }

    if (t.flags && t.flags.length > 0) {
      lines.push(`    flags: [${t.flags.map(f => `'${f}'`).join(', ')}],`);
    }

    if (t.requiredFlags && t.requiredFlags.length > 0) {
      lines.push(`    requiredFlags: [${t.requiredFlags.map(f => `'${f}'`).join(', ')}],`);
    }

    if (t.identityExclusive) {
      lines.push(`    identityExclusive: '${t.identityExclusive}',`);
    }

    if (t.talentExclusive) {
      lines.push(`    talentExclusive: '${t.talentExclusive}',`);
    }

    if (t.chainPriority !== undefined) {
      lines.push(`    chainPriority: ${t.chainPriority},`);
    }

    lines.push('  },');
  });

  lines.push('];');
  lines.push('');
  return lines.join('\n');
}

// ============================================================
// 执行生成
// ============================================================

const outputDir = path.join(__dirname, '..', 'src', 'engine', 'events');

Object.keys(worlds).forEach((worldKey) => {
  console.log(`Generating ${worldKey}...`);
  const templates = generateWorld(worldKey);
  const code = formatTemplates(templates, worldKey);
  const filename = `${worldKey}Templates.ts`;
  fs.writeFileSync(path.join(outputDir, filename), code, 'utf-8');
  console.log(`  ✓ ${filename} — ${templates.length} templates`);
});

console.log('\nAll worlds generated!');
