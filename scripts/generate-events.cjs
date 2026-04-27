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
    scenes: ['村口老槐树', '后山禁地', '村东古井', '西边的瀑布', '北山石窟', '南坡竹林', '自家后院', '祠堂密室', '灵脉之眼', '渡劫台'],
    npcs: ['老铁匠', '王猎户', '李大娘', '张秀才', '云游道士', '疯老头', '算命先生', '隔壁老奶奶', '采药人', '守山弟子'],
    legends: ['上古剑仙', '九尾妖狐', '东海龙王', '昆仑圣母', '魔道至尊', '天道之子', '逍遥散仙', '佛门罗汉', '器灵老祖', '鬼帝'],
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

  // --- Elder (51+) 2 templates ---
  // 稀有: 收徒传道
  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 55, 80, randProb('rare'), [
    `你的修为已臻化境，成为了{location}的传说级人物。`,
    `你开始着手准备最终的突破，{npc}专程前来为你护法。`,
    `你将毕生所学整理成册，存放在{location}，等待有缘人。`,
  ], { effects: { intelligence: 8, charisma: 5 } }));

  // 普通: 颐养天年
  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 51, 100, randProb('common'), [
    `你在{location}颐养天年，每日种花养鱼，不问世事。`,
    `你的身体开始衰退，但精神愈发强大。`,
    `你决定将力量传承给下一代，{npc}成为了你的传人。`,
  ], { effects: { health: -3, intelligence: 3 } }));

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
// 重大抉择事件生成器（支线入口 / 主线转折点）
// ============================================================

function generateMajorChoices(w) {
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
// 身份专属事件生成器
// ============================================================

function generateIdentityEvents(w) {
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
// 废材专属逆袭事件生成器
// ============================================================

function generateTrashEvents(w) {
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

function generateWorld(worldKey) {
  const w = worlds[worldKey];
  idCounters = {}; // 重置计数器
  const common = generateCommonEvents(w);
  const major = generateMajorChoices(w);
  const identity = generateIdentityEvents(w);
  const trash = generateTrashEvents(w);
  return [...common, ...major, ...identity, ...trash];
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
