import type { EventTemplate } from './types';

// 葬送的芙莉莲世界 — 约100个事件模板
// 属性: 魔力(strength)/精神(intelligence)/羁绊(charisma)/命运(luck)/寿命(health)/魔法理解(special)
// 境界: 魔法学徒→初级魔法使→中级魔法使→上级魔法使→宫廷魔法使→大魔法使→贤者→魔法之神

export const frierenTemplates: EventTemplate[] = [
  // ═══════════════════════════════════════════════════════════════
  // 通用童年 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_ch_01', category: 'childhood', minAge: 0, maxAge: 5, probability: 0.55,
    templates: [
      '你出生在一个宁静的村庄。{location}的风中带着青草的香气，你的童年没有战争，只有阳光和童话。',
      '你的母亲在{location}教你唱古老的歌谣。那些旋律中隐藏着已经失传的魔法咒语，只是你们当时还不知道。',
      '你在{location}的田野里追逐蝴蝶，一个路过的老魔法师停下脚步看着你："这孩子...身上有魔力的味道。"',
    ],
    effects: { luck: 3, health: 2 },
  },
  {
    id: 'fr_ch_02', category: 'childhood', minAge: 3, maxAge: 8, probability: 0.42,
    templates: [
      '你在{location}第一次展现了魔法天赋。当玩具掉进水井时，你无意中的一挥手，让它自己浮了上来。',
      '六岁那年，{npc}送给你一本破旧的魔法入门书。书页泛黄，但里面的知识成为了你魔法之路的起点。',
    ],
    effects: { strength: 3, special: 2 },
  },
  {
    id: 'fr_ch_03', category: 'childhood', minAge: 5, maxAge: 10, probability: 0.68,
    templates: [
      '你在{location}和村里的孩子们玩耍。他们用木剑扮演勇者斗恶龙，而你总是扮演那个在最后关头施展魔法拯救大家的魔法使。',
      '一个流浪的吟游诗人路过{location}，讲述了勇者一行的传说。你听得入迷，第一次知道了"冒险"这个词的含义。',
    ],
    effects: { charisma: 2, luck: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用成长 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_gr_01', category: 'growth', minAge: 12, maxAge: 18, probability: 0.48,
    templates: [
      '你在{location}的魔法学院里学习。你的老师说你天赋不错，但总是走神——你更喜欢在图书馆看勇者的传记。',
      '青春期的你在{location}第一次参加了魔法实战训练。你的攻击魔法威力不大，但防御魔法却异常坚固。',
    ],
    effects: { strength: 4, special: 3 },
  },
  {
    id: 'fr_gr_02', category: 'growth', minAge: 15, maxAge: 22, probability: 0.58,
    templates: [
      '你在{location}经历了第一次离别。最好的朋友搬去了远方的城市，你第一次感受到了时间流逝带来的伤感。',
      '你在{location}遇到了一位神秘的魔法使。她看着你说："魔法的本质不是力量，而是理解。你理解了吗？"',
    ],
    effects: { intelligence: 4, charisma: 3 },
  },
  {
    id: 'fr_gr_03', category: 'growth', minAge: 18, maxAge: 25, probability: 0.62,
    templates: [
      '你在{location}完成了魔法学徒的学业。导师在你的毕业证书上写道："此子前途无量，但需谨记——最强大的魔法是人心。"',
      '毕业那天，{npc}送给你一根魔杖。那不是名贵的材料，但握在手中时，你能感受到一种温暖的共鸣。',
    ],
    effects: { strength: 3, special: 4 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用成年 (2)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_ad_01', category: 'adult', minAge: 28, maxAge: 40, probability: 0.52,
    templates: [
      '成年后的你在{location}拥有了自己的生活。或许是一名冒险者，或许是一位学者，又或许只是某个村庄的守护者。',
      '你在{location}见证了人类朋友的成长。他们变老、结婚、生子，而你依然停留在原地。这种感受复杂而难以言说。',
    ],
    effects: { charisma: 4, intelligence: 3 },
  },
  {
    id: 'fr_ad_02', category: 'adult', minAge: 30, maxAge: 50, probability: 0.64,
    templates: [
      '岁月在{location}静静流淌。你处理着日常的事务，偶尔施展魔法帮助村民，生活平淡却充实。',
      '{npc}来找你一起喝茶。你们聊着过去的故事，那些冒险的回忆在茶香中变得格外温柔。',
    ],
    effects: { intelligence: 3, charisma: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用老年 (1)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_el_01', category: 'elder', minAge: 60, maxAge: 120, probability: 0.56,
    templates: [
      '年事已高的你在{location}过着隐居生活。你开始整理一生收集的魔法知识，希望留给后人一些有用的东西。',
      '你在{location}的午后阳光下打盹。梦境中，那些已故朋友的面容依然清晰，仿佛他们从未离开。',
      '{npc}来拜访你这位老人。你将自己一生的魔法心得倾囊相授，仿佛在进行某种跨越时间的传承。',
    ],
    effects: { special: 5, intelligence: 3 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 战斗 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_cb_01', category: 'combat', minAge: 18, maxAge: 35, probability: 0.38,
    templates: [
      '你在{location}遭遇了一只凶猛的魔物。凭借冷静的施法和精准的魔力控制，你成功将其击退。',
      '冒险途中，你在{location}与一群强盗对峙。你的魔法光芒照亮了夜空，让他们知难而退。',
    ],
    effects: { strength: 6, intelligence: 3, health: -3 },
  },
  {
    id: 'fr_cb_02', category: 'combat', minAge: 25, maxAge: 45, probability: 0.46,
    templates: [
      '你在{location}与一位强大的魔族展开了激战。对方的魔力深不可测，但你凭借对魔法的深刻理解，找到了破绽。',
      '一场保护{location}的战斗中，你透支了魔力。虽然胜利了，但那种虚脱感让你意识到自己的极限。',
    ],
    effects: { strength: 5, special: 4, health: -5 },
  },
  {
    id: 'fr_cb_03', category: 'combat', minAge: 30, maxAge: 55, probability: 0.54,
    templates: [
      '你在{location}经历了一场生死之战。真正强大的魔法使不是靠魔力取胜，而是靠对战斗节奏的完美掌控。',
      '{npc}和你在{location}并肩作战。战斗结束后，你们坐在废墟上，分享着一瓶热茶。那种默契无需言语。',
    ],
    effects: { strength: 4, charisma: 3 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 恋爱/羁绊 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_rm_01', category: 'romance', minAge: 18, maxAge: 30, probability: 0.38,
    templates: [
      '你在{location}遇到了{npc}。TA认真练习魔法的样子让你想起了年轻时的自己。',
      '末日阴影下的爱情格外珍贵？不，在这个世界，最珍贵的是在漫长岁月中，依然有人愿意陪伴你。',
    ],
    effects: { charisma: 5, luck: 3, health: 3 },
    relationshipEffects: { fern: 8 },
  },
  {
    id: 'fr_rm_02', category: 'romance', minAge: 25, maxAge: 40, probability: 0.46,
    templates: [
      '你和{npc}在{location}一起旅行。TA虽然年轻，但对魔法的理解有着独特的视角，让你受益匪浅。',
      '{npc}送给你一朵永远不会凋谢的魔法花。"即使我不在了，"TA说，"这朵花也会陪着你。"',
    ],
    effects: { charisma: 4, intelligence: 2 },
    relationshipEffects: { serie: 8 },
  },
  {
    id: 'fr_rm_03', category: 'romance', minAge: 35, maxAge: 55, probability: 0.52,
    templates: [
      '多年的陪伴让你和{npc}之间产生了超越语言的羁绊。在{location}的一个平凡夜晚，你们共同仰望星空。',
      '{npc}对你说："我知道对于长生种来说，人类的生命只是一瞬。但即使是一瞬，我也想让它发光。"',
    ],
    effects: { charisma: 3, luck: 2, health: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 修炼/提升 (cultivation) (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_cult_01', category: 'cultivation', minAge: 20, maxAge: 40, probability: 0.42,
    templates: [
      '你在{location}的魔法书堆中度过了无数个不眠之夜。一个突破性的理解让你的魔法造诣大幅提升。',
      '{npc}与你彻夜长谈，分享了关于魔法本质的深层见解。你对魔法的理解达到了新的高度。',
    ],
    effects: { intelligence: 6, special: 4 },
  },
  {
    id: 'fr_cult_02', category: 'cultivation', minAge: 30, maxAge: 50, probability: 0.54,
    templates: [
      '你在{location}成功施展了一个古老的高难度魔法。那种魔力流淌的感觉让你确信，自己的实力又上了一个台阶。',
      '经过多年的积累，你在{location}独创了一种新的魔法应用方式。虽然不是颠覆性的创新，但实用的价值得到了广泛认可。',
    ],
    effects: { special: 5, strength: 3 },
  },
  {
    id: 'fr_cult_03', category: 'cultivation', minAge: 40, maxAge: 70, probability: 0.62,
    templates: [
      '你在{location}成为了某个魔法流派的权威。年轻的魔法使慕名而来，你感受到了传承的重量。',
      '岁月和经历让你对魔法的本质有了更深的理解。在{location}的深夜，你写下了新的魔法理论。',
    ],
    effects: { intelligence: 4, special: 4 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 探索 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_ex_01', category: 'exploration', minAge: 20, maxAge: 40, probability: 0.36,
    templates: [
      '你在{location}发现了一座被遗忘的魔法遗迹。墙壁上的符文记录着千年前的魔法知识。',
      '一次偶然的机会，你在{location}的地下洞穴中发现了一池发光的泉水。那是纯净的魔力源泉。',
    ],
    effects: { luck: 5, special: 3 },
  },
  {
    id: 'fr_ex_02', category: 'exploration', minAge: 25, maxAge: 50, probability: 0.48,
    templates: [
      '你深入{location}的古代迷宫，在那里找到了勇者时代遗留的魔法道具。虽然只是碎片，但蕴含的力量依然惊人。',
      '在{location}的废墟中，你发现了一本魔法日记。作者是你一位已故的同行，里面记录着他对魔法的最后思考。',
    ],
    effects: { special: 5, intelligence: 3 },
  },
  {
    id: 'fr_ex_03', category: 'exploration', minAge: 30, maxAge: 60, probability: 0.56,
    templates: [
      '你在{location}的旅途中遇到了一位隐居的老魔法使。他将自己毕生收集的魔法书赠予了你。',
      '{npc}带你去了一个{location}的秘密地点，那里保存着世界上最完整的古代魔法图书馆。',
    ],
    effects: { intelligence: 4, luck: 3 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 世界主线 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_ws_01', category: 'world_story', minAge: 20, maxAge: 40, probability: 0.44,
    templates: [
      '你在{location}见证了魔族与人类的又一次冲突。那些只会杀戮的魔族让你想起了勇者时代结束的悲伤。',
      '一级魔法使考试的公告贴在了{location}的广场上。你看着那张纸，想起了自己当年的考试经历。',
    ],
    effects: { strength: 4, intelligence: 3 },
  },
  {
    id: 'fr_ws_02', category: 'world_story', minAge: 40, maxAge: 70, probability: 0.52,
    templates: [
      '勇者的传说在{location}依然流传。你站在辛美尔的雕像前，那些冒险的回忆如潮水般涌来。',
      '{npc}对你说："勇者的时代已经结束，但新的时代正在开始。你准备好迎接它了吗？"',
    ],
    effects: { charisma: 5, special: 3 },
  },
  {
    id: 'fr_ws_03', category: 'world_story', minAge: 60, maxAge: 100, probability: 0.48,
    templates: [
      '你在{location}看到了人类文明的变迁。曾经熟悉的村庄变成了城市，曾经的朋友变成了历史。',
      '千年之后，你在{location}的小酒馆里听到了关于"葬送的芙莉莲"的传说。原来，你自己已经成为了历史的一部分。',
    ],
    effects: { intelligence: 5, charisma: 4 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 隐藏 (2)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_hd_01', category: 'hidden', minAge: 50, maxAge: 90, probability: 0.22,
    templates: [
      '你在{location}的古代文献中发现了令人震惊的真相：魔族并非天生邪恶，而是某种更古老魔法的副作用产物。',
      '一个自称"时间守望者"的神秘存在在{location}与你接触。TA说："你所理解的魔法，只是真正力量的一角。"',
    ],
    effects: { intelligence: 10, special: 8 },
    conditions: [{ stat: 'intelligence', min: 80 }],
  },
  {
    id: 'fr_hd_02', category: 'hidden', minAge: 70, maxAge: 150, probability: 0.18,
    templates: [
      '你在{location}解读了一段来自魔王城最深处的古老咒语。那不是攻击魔法，而是关于"情感"的魔法——让长生种理解短暂生命的魔法。',
      '{npc}临终前告诉你一个秘密：TA曾在梦中见到勇者辛美尔的灵魂，而那位勇者说："真正的魔法，是让人心相连的力量。"',
    ],
    effects: { luck: 8, charisma: 6 },
    conditions: [{ stat: 'luck', min: 70 }],
  },

  // ═══════════════════════════════════════════════════════════════
  // 死亡 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_dt_01', category: 'death', minAge: 20, maxAge: 50, probability: 0.28,
    templates: [
      '你在{location}遭遇了强大的魔族。临死前，你将自己最后的魔力化作一道屏障，保护了身后的同伴。',
      '一场魔法实验在{location}发生了事故。失控的魔力吞噬了你，但你的数据为后人留下了宝贵的教训。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'fr_dt_02', category: 'death', minAge: 40, maxAge: 80, probability: 0.32,
    templates: [
      '你在{location}与魔族将军展开了最后的决战。你选择了使用同归于尽的禁咒，为了消灭敌人而牺牲了自己。',
      '长寿的种族也有极限。你在{location}感受到了生命力的枯竭，平静地接受了终结。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'fr_dt_03', category: 'death', minAge: 60, maxAge: 200, probability: 0.24,
    templates: [
      '你在{location}度过了最后的岁月。没有轰轰烈烈的死亡，只是像一片落叶般静静飘落。',
      '{npc}握着你的手，陪你走完了最后一程。你的死亡不是悲剧，而是漫长旅途中自然的一站。',
    ],
    effects: { health: -100 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 重大抉择 (4) — 15岁/30岁/45岁/60岁
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_mc_15', category: 'major_choice', minAge: 15, maxAge: 15, probability: 0.95,
    templates: [
      '十五岁那年，你站在{location}的岔路口。{npc}问你："你有魔法的天赋，但前路如何走？独自旅行能增长见识，寻找同伴能获得羁绊，而研究魔法则是提升实力的捷径。"',
    ],
    choices: [
      { text: '独自旅行', successRate: 1, successText: '你选择了独自旅行。你背起行囊，走向了未知的世界。那些独处的时光让你对魔法有了独特的理解。', failText: '独自旅行的道路比想象中孤独。你在{location}迷失了方向，差点无法生还。', effects: { intelligence: 8, luck: 5 }, failEffects: { health: -15, luck: -5 }, flags: ['major_travel'], failFlags: ['major_travel_fail'] },
      { text: '寻找同伴', successRate: 1, successText: '你选择了寻找同伴。在旅途中，你遇到了值得信赖的伙伴。你们一起分享食物、故事和魔法心得。', failText: '你寻找同伴，但遇到的人却背叛了你。你第一次体会到了人心的复杂。', effects: { charisma: 8, strength: 4 }, failEffects: { charisma: -5, strength: -3 }, flags: ['major_companion'], failFlags: ['major_companion_fail'] },
      { text: '研究魔法', successRate: 1, successText: '你选择了研究魔法。你隐居在{location}的图书馆中，日夜苦读。当同龄人还在练习基础魔法时，你已经掌握了高深的理论。', failText: '你埋头研究，但理论无法转化为实力。你在实战中屡屡受挫，意识到自己走偏了路。', effects: { special: 10, intelligence: 5 }, failEffects: { special: -3, strength: -5 }, flags: ['major_research'], failFlags: ['major_research_fail'] },
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  },
  {
    id: 'fr_mc_30', category: 'major_choice', minAge: 30, maxAge: 30, probability: 0.92,
    templates: [
      '三十岁那年，你已经是一名成熟的魔法使。{npc}问你："你的魔力日益精进，现在有三个选择：挑战强大的魔族证明实力，寻找古代魔法探索未知，或者守护一个村庄过平静的生活。你怎么选？"',
    ],
    choices: [
      { text: '挑战魔族', successRate: 0.5, successText: '你挑战了一位强大的魔族！经过激烈的战斗，你以精妙的魔法战术击败了对手。你的名字开始在冒险者之间传颂。', failText: '你挑战魔族，但实力差距太大。虽然勉强逃脱，但你受了重伤，魔力也大损。', effects: { strength: 10, charisma: 5 }, failEffects: { strength: -5, health: -25 }, flags: ['major_demon'], failFlags: ['major_demon_fail'] },
      { text: '寻找古代魔法', successRate: 0.6, successText: '你踏上了寻找古代魔法的旅程。在{location}的遗迹深处，你发现了一种失传已久的防御魔法，其精妙程度远超现代魔法。', failText: '你寻找古代魔法，但在遗迹中触发了致命的陷阱。虽然保住了性命，但一无所获。', effects: { special: 10, intelligence: 5 }, failEffects: { health: -20, luck: -5 }, flags: ['major_ancient'], failFlags: ['major_ancient_fail'] },
      { text: '守护村庄', successRate: 1, successText: '你选择了守护{location}的村庄。日子平淡，但每当看到孩子们安心的笑容，你就知道这就是你想要的生活。', failText: '你守护村庄，但魔族的袭击超出了你的能力范围。村庄被毁，你带着深深的自责离开了。', effects: { charisma: 8, health: 5 }, failEffects: { charisma: -5, health: -15 }, flags: ['major_guard'], failFlags: ['major_guard_fail'] },
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  },
  {
    id: 'fr_mc_45', category: 'major_choice', minAge: 45, maxAge: 45, probability: 0.9,
    templates: [
      '四十五岁，勇者时代已经过去了很多年。{npc}问你："那些与勇者同行的回忆，是甜蜜的负担还是珍贵的财富？面对过去、创造未来、或者继续孤独，你怎么选？"',
    ],
    choices: [
      { text: '面对过去的勇者回忆', successRate: 1, successText: '你选择了面对过去。你重走了当年与勇者一起走过的路，在{location}的每一个熟悉角落，你都找到了那些埋藏在时光中的宝藏。', failText: '你试图面对过去，但那些回忆太过沉重。你在{location}的一座雕像前崩溃大哭，无法自持。', effects: { intelligence: 8, charisma: 6 }, failEffects: { intelligence: -3, health: -10 }, flags: ['major_past'], failFlags: ['major_past_fail'] },
      { text: '创造新的回忆', successRate: 1, successText: '你选择了创造新的回忆。你收了一位弟子，开始了新的旅程。那些新鲜的体验和羁绊，让你的心重新变得温暖。', failText: '你试图创造新的回忆，但新的人际关系总是让你想起已故的旧友。你发现自己无法真正投入。', effects: { charisma: 10, luck: 5 }, failEffects: { charisma: -5, luck: -3 }, flags: ['major_new'], failFlags: ['major_new_fail'] },
      { text: '继续孤独前行', successRate: 1, successText: '你选择了继续孤独前行。你说："有些路只能一个人走。"虽然寂寞，但你也获得了独自思考的自由。', failText: '孤独最终压垮了你。你在{location}的一个雨夜，第一次质疑自己选择的道路是否正确。', effects: { intelligence: 8, strength: 5 }, failEffects: { charisma: -5, health: -10 }, flags: ['major_lonely'], failFlags: ['major_lonely_fail'] },
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  },
  {
    id: 'fr_mc_60', category: 'major_choice', minAge: 60, maxAge: 60, probability: 0.88,
    templates: [
      '六十岁，对于人类来说已是晚年，但对于长生种来说只是开始。{npc}问你："你见证了无数人类的生老病死。是接受这种短暂，寻找永生之法，还是将你的魔法传承下去？"',
    ],
    choices: [
      { text: '接受人类的短暂', successRate: 1, successText: '你选择了接受。你不再为离别而悲伤，而是珍惜每一次相遇。你说："正是因为短暂，才显得珍贵。"', failText: '你试图接受，但又一次目睹朋友离世时，你发现接受比想象中更难。', effects: { intelligence: 10, charisma: 5 }, failEffects: { intelligence: -3, health: -10 }, flags: ['major_accept'], failFlags: ['major_accept_fail'] },
      { text: '寻找永生之法', successRate: 0.3, successText: '你踏上了寻找永生之法的旅程。在{location}的古代遗迹中，你找到了一种能延长生命的禁咒。虽然代价巨大，但你获得了更多的时间去理解这个世界。', failText: '你寻找永生之法，但所有线索都指向同一个答案：真正的永生不存在。你浪费了数十年，最终一无所获。', effects: { health: 20, special: 8 }, failEffects: { health: -10, luck: -10 }, flags: ['major_immortal'], failFlags: ['major_immortal_fail'] },
      { text: '传承魔法', successRate: 1, successText: '你选择了传承。你广收门徒，将自己的魔法知识和人生经验倾囊相授。看着弟子们成长，你第一次理解了"延续"的意义。', failText: '你试图传承，但弟子们各有各的道路，没有人能完全继承你的衣钵。你感到了一丝寂寞。', effects: { charisma: 10, special: 6 }, failEffects: { charisma: -3, special: -3 }, flags: ['major_teach'], failFlags: ['major_teach_fail'] },
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  },

  // ═══════════════════════════════════════════════════════════════
  // 废材逆袭 (8)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_tr_01', category: 'trash_exclusive', minAge: 0, maxAge: 6, probability: 0.92,
    templates: [
      '你的魔法天赋测试结果显示：魔力微弱，精神力平庸，没有特殊才能。{location}的魔法导师摇头说："这孩子...可能连基础魔法都难以掌握。"',
      '作为被判定为"魔法废材"的人，你在{location}的魔法学院里总是被嘲笑。你的火球术只能点燃一根蜡烛。',
    ],
    effects: { special: -5, strength: -3, intelligence: -2 },
    flags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'fr_tr_02', category: 'trash_exclusive', minAge: 5, maxAge: 12, probability: 0.88,
    templates: [
      '你不甘心。在{location}的图书馆角落里，你翻找着被遗弃的旧魔法书，自学那些被认为"过时"的基础理论。{npc}嘲笑你："废材就该认命。"',
      '你在{location}发现了一本关于"一般攻击魔法"的古老教材。书上说，最强大的魔法往往来自最简单的原理。你如获至宝。',
    ],
    effects: { intelligence: 3, strength: 2, luck: 2 },
    flags: ['trash_childhood_1'],
    requiredFlags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'fr_tr_03', category: 'trash_exclusive', minAge: 12, maxAge: 18, probability: 0.85,
    templates: [
      '你按照古书的方法，在{location}反复练习最基础的魔法。别的同学一天就能掌握的法术，你需要一个月。但你从未间断。',
      '你在{location}的魔法考试中，用最简单的一般攻击魔法，精准地击中了目标的核心。{npc}震惊地说："这...这是只有大魔法使才能做到的精度？"',
    ],
    effects: { strength: 5, special: 3, intelligence: 2 },
    flags: ['trash_growth_0'],
    requiredFlags: ['trash_childhood_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'fr_tr_04', category: 'trash_exclusive', minAge: 16, maxAge: 24, probability: 0.8,
    templates: [
      '你在{location}救了一位被魔物袭击的老魔法使。他感激之下，将自己珍藏的古魔法笔记送给了你。',
      '{npc}被你的毅力打动，决定给你一次机会。她说："我这一生见过无数天才，但像你这样的笨蛋，还是第一个。"',
    ],
    effects: { special: 6, intelligence: 4, charisma: 2 },
    flags: ['trash_growth_1'],
    requiredFlags: ['trash_growth_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'fr_tr_05', category: 'trash_exclusive', minAge: 20, maxAge: 30, probability: 0.78,
    templates: [
      '经过多年的苦练，你在{location}提出了一个大胆假设：魔力强弱并非决定魔法使实力的关键，对魔法的"理解深度"才是。',
      '你在{location}的实战中验证了自己的理论。虽然你的魔力只有同级魔法使的一半，但你的魔法效果却远超他们。',
    ],
    effects: { special: 6, intelligence: 4, luck: 3 },
    flags: ['trash_growth_2'],
    requiredFlags: ['trash_growth_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'fr_tr_06', category: 'trash_exclusive', minAge: 25, maxAge: 35, probability: 0.75,
    templates: [
      '一级魔法使考试在{location}举行，你以"弱者"的身份报名。所有人都嘲笑你："一个魔力微弱的废材，也配参加一级考试？"',
      '考试当天，你用精准到极致的一般攻击魔法，击败了所有对手。一个曾经被判定为"无才能"的人，竟然展现出了大魔法使级别的魔法理解。全场寂静。',
    ],
    effects: { special: 8, charisma: 5, strength: 4 },
    flags: ['trash_adult_0'],
    requiredFlags: ['trash_growth_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'fr_tr_07', category: 'trash_exclusive', minAge: 30, maxAge: 45, probability: 0.72,
    templates: [
      '你通过了一级魔法使考试的消息震动了{location}。{npc}说你是"第一个以魔力微弱之躯击败天才的人"。',
      '你在{location}建立了一个小型魔法教室，专门招收被判定为"无才能"的孩子。你说："魔力决定起点，但理解决定终点。"',
    ],
    effects: { charisma: 6, intelligence: 5, special: 3 },
    flags: ['trash_adult_1'],
    requiredFlags: ['trash_adult_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'fr_tr_08', category: 'trash_exclusive', minAge: 40, maxAge: 60, probability: 0.65,
    templates: [
      '昔日嘲笑你的魔法导师在{location}与你重逢。他依然记得当年给你打的最低分，但眼神中已经满是敬佩。',
      '你成为了魔法史上最著名的自学成才者。在{location}的魔法学院，你的名字与那些天才并列——虽然你花了更长的时间，但你从未放弃。',
    ],
    effects: { charisma: 8, intelligence: 5, special: 5 },
    flags: ['trash_legend'],
    requiredFlags: ['trash_adult_1'],
    talentExclusive: 'trash',
  },

  // ═══════════════════════════════════════════════════════════════
  // 境界突破 (14) — 1-7境界，每个境界2个事件（突破+稳定/重试）
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fr_realm_1', category: 'cultivation', minAge: 12, maxAge: 25, probability: 0.9,
    templates: [
      '你在{location}的魔法学习中迎来了第一个重要节点。{npc}告诉你："初级魔法使是魔法之路的真正起点。你需要精神≥15、魔法理解≥10才能突破。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 1, successText: '你全身心投入修炼，终于掌握了初级魔法使的核心技术！你的魔力更加精纯，施法更加流畅。', failText: '你全力冲击，但魔力反噬让你受了内伤。虽然保住了性命，但魔法修为受损。', effects: { realm: 1, strength: 5, maxAge: 80 }, failEffects: { health: -20, strength: -5 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail_1'] },
      { text: '稳扎稳打', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓积累。虽然耗时更长，但你最终平安突破到了初级魔法使。', failText: '你的修炼被一场魔物袭击打断。突破失败。', effects: { realm: 1, strength: 3, maxAge: 56 }, failEffects: { health: -15, special: -5 }, flags: ['realm_breakthrough_1', 'realm_breakthrough_1_steady'], failFlags: ['realm_fail_1_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实。', failText: '', effects: { intelligence: 3, special: 2 }, flags: ['realm_delay_1'], failFlags: [] },
    ],
    flags: ['realm_attempt_1'],
    chainPriority: 5,
  },
  {
    id: 'fr_realm_1_stable', category: 'cultivation', minAge: 14, maxAge: 28, probability: 0.7,
    templates: [
      '你突破到初级魔法使的消息在{location}传开。年轻的魔法学徒们开始以你为榜样。',
      '{npc}看着你，眼中满是欣慰："从学徒到初级魔法使，你走了12年。这速度，已属难得。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_1'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 2,
  },
  {
    id: 'fr_realm_1_retry', category: 'cultivation', minAge: 16, maxAge: 32, probability: 0.75,
    templates: [
      '上一次突破失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了初级魔法使！', failText: '又一次失败。你开始怀疑，自己是否真的与初级魔法使无缘...', effects: { realm: 1, strength: 5, maxAge: 80 }, failEffects: { health: -30, strength: -10 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail2_1'] },
    ],
    flags: ['realm_retry_1'],
    requiredFlags: ['realm_fail_1'],
    chainPriority: 3,
  },
  {
    id: 'fr_realm_2', category: 'cultivation', minAge: 20, maxAge: 40, probability: 0.85,
    templates: [
      '你在{location}的魔法实践中触摸到了中级魔法使的门槛。{npc}告诉你："中级魔法使需要理解魔法的本质，而非只是模仿。突破需要精神≥30、魔法理解≥25。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 1, successText: '你成功掌握了中级魔法的核心奥义！你的施法不再拘泥于形式，而是随心所欲。', failText: '冲击失败，魔力暴走。虽然被及时制止，但你对魔法的信心受到了打击。', effects: { realm: 1, special: 5, maxAge: 120 }, failEffects: { health: -25, special: -8 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail_2'] },
      { text: '稳扎稳打', successRate: 1, successText: '你以稳健的修炼逐步积累，最终成为了中级魔法使。', failText: '你的修炼因外界干扰而中断。突破失败。', effects: { realm: 1, special: 3, maxAge: 84 }, failEffects: { charisma: -5, luck: -5 }, flags: ['realm_breakthrough_2', 'realm_breakthrough_2_steady'], failFlags: ['realm_fail_2_steady'] },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { special: 3, intelligence: 2 }, flags: ['realm_delay_2'], failFlags: [] },
    ],
    flags: ['realm_attempt_2'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 5,
  },
  {
    id: 'fr_realm_2_stable', category: 'cultivation', minAge: 22, maxAge: 45, probability: 0.68,
    templates: [
      '你突破到中级魔法使的消息传遍了{location}。各大魔法公会争相邀请你加入。',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_2'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 2,
  },
  {
    id: 'fr_realm_2_retry', category: 'cultivation', minAge: 25, maxAge: 50, probability: 0.72,
    templates: [
      '上一次突破失败后，你在{location}重新积累。{npc}鼓励你再次尝试。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '你一举突破到了中级魔法使！', failText: '又一次失败...', effects: { realm: 1, special: 5, maxAge: 120 }, failEffects: { health: -35, special: -12 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail2_2'] },
    ],
    flags: ['realm_retry_2'],
    requiredFlags: ['realm_fail_2'],
    chainPriority: 3,
  },
  {
    id: 'fr_realm_3', category: 'cultivation', minAge: 30, maxAge: 55, probability: 0.82,
    templates: [
      '你在{location}的魔法修炼中触摸到了上级魔法使的门槛。{npc}告诉你："上级魔法使已能独当一面。突破需要精神≥45、魔法理解≥40。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 1, successText: '你成功突破！上级魔法使的力量在你体内流淌，你感受到了质的飞跃。', failText: '突破失败，魔力回路受损。需要长时间修养。', effects: { realm: 1, intelligence: 5, maxAge: 200 }, failEffects: { intelligence: -10, charisma: -5 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail_3'] },
      { text: '稳扎稳打', successRate: 1, successText: '你以扎实的修炼最终成为了上级魔法使。', failText: '稳健被魔族袭击打断。突破失败。', effects: { realm: 1, intelligence: 3, maxAge: 140 }, failEffects: { health: -15, luck: -5 }, flags: ['realm_breakthrough_3', 'realm_breakthrough_3_steady'], failFlags: ['realm_fail_3_steady'] },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 3, special: 2 }, flags: ['realm_delay_3'], failFlags: [] },
    ],
    flags: ['realm_attempt_3'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 5,
  },
  {
    id: 'fr_realm_3_stable', category: 'cultivation', minAge: 32, maxAge: 58, probability: 0.65,
    templates: [
      '你突破到上级魔法使的消息在魔法界引起轰动。{location}的魔法公会纷纷向你抛出橄榄枝。',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_3'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 2,
  },
  {
    id: 'fr_realm_3_retry', category: 'cultivation', minAge: 35, maxAge: 65, probability: 0.7,
    templates: [
      '上一次突破失败后，你重新积累。{npc}鼓励你再次尝试。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '你一举突破到了上级魔法使！', failText: '又一次失败...', effects: { realm: 1, intelligence: 5, maxAge: 200 }, failEffects: { health: -40, intelligence: -15 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail2_3'] },
    ],
    flags: ['realm_retry_3'],
    requiredFlags: ['realm_fail_3'],
    chainPriority: 3,
  },
  {
    id: 'fr_realm_4', category: 'cultivation', minAge: 40, maxAge: 75, probability: 0.78,
    templates: [
      '你在{location}触摸到了宫廷魔法使的门槛。{npc}告诉你："宫廷魔法使不仅要有实力，还要有守护他人的觉悟。突破需要羁绊≥50、精神≥60。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.8, successText: '你成为了宫廷魔法使！王国的旗帜因你而更加闪耀。', failText: '选拔委员会认为你缺乏足够的威望。突破失败。', effects: { realm: 1, charisma: 8, maxAge: 300 }, failEffects: { charisma: -8, strength: -5 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail_4'] },
      { text: '稳扎稳打', successRate: 0.6, successText: '你以多年的功绩最终被册封为宫廷魔法使。', failText: '计划被政敌破坏。突破失败。', effects: { realm: 1, charisma: 5, maxAge: 210 }, failEffects: { charisma: -10, health: -10 }, flags: ['realm_breakthrough_4', 'realm_breakthrough_4_steady'], failFlags: ['realm_fail_4_steady'] },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { strength: 3, intelligence: 3 }, flags: ['realm_delay_4'], failFlags: [] },
    ],
    flags: ['realm_attempt_4'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 5,
  },
  {
    id: 'fr_realm_4_stable', category: 'cultivation', minAge: 42, maxAge: 80, probability: 0.62,
    templates: [
      '你成为宫廷魔法使的消息震惊了{location}。王国的子民因你而感到安心。',
    ],
    effects: { charisma: 5, strength: 3 },
    flags: ['realm_stable_4'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 2,
  },
  {
    id: 'fr_realm_5', category: 'cultivation', minAge: 55, maxAge: 100, probability: 0.75,
    templates: [
      '你在{location}触摸到了大魔法使的门槛。{npc}告诉你："大魔法使是魔法界的巅峰存在。突破需要魔力≥70、魔法理解≥75。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.7, successText: '你成为了大魔法使！你的魔力威压让方圆十里的魔物都瑟瑟发抖。', failText: '你在突破中魔力失控，虽然保住了性命，但实力大损。', effects: { realm: 1, strength: 10, maxAge: 400 }, failEffects: { strength: -10, health: -20 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail_5'] },
      { text: '稳扎稳打', successRate: 0.5, successText: '你以惊人的毅力最终成为了大魔法使。', failText: '稳健让你在关键时刻缺乏爆发力。突破失败。', effects: { realm: 1, strength: 5, maxAge: 280 }, failEffects: { strength: -8, charisma: -8 }, flags: ['realm_breakthrough_5', 'realm_breakthrough_5_steady'], failFlags: ['realm_fail_5_steady'] },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { strength: 3, intelligence: 3 }, flags: ['realm_delay_5'], failFlags: [] },
    ],
    flags: ['realm_attempt_5'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 5,
  },
  {
    id: 'fr_realm_5_stable', category: 'cultivation', minAge: 57, maxAge: 105, probability: 0.6,
    templates: [
      '你成为大魔法使的那一刻，{location}的所有魔法使都感知到了你的觉醒。',
    ],
    effects: { strength: 5, charisma: 3 },
    flags: ['realm_stable_5'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 2,
  },
  {
    id: 'fr_realm_6', category: 'cultivation', minAge: 80, maxAge: 150, probability: 0.72,
    templates: [
      '你在{location}触摸到了贤者的门槛。{npc}告诉你："贤者需超越力量的追求，理解魔法的终极意义。突破需要魔法理解≥80、精神≥90。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.6, successText: '你成为了贤者！你的存在本身就是魔法的化身，言出法随，万物响应。', failText: '你在最后的考验中迷失了方向。突破失败。', effects: { realm: 1, intelligence: 8, special: 5, maxAge: 800 }, failEffects: { intelligence: -10, health: -25 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail_6'] },
      { text: '稳扎稳打', successRate: 0.4, successText: '你以无尽的智慧积累最终成为了贤者。', failText: '稳健让你错过了最关键的顿悟。突破失败。', effects: { realm: 1, special: 5, maxAge: 560 }, failEffects: { special: -8, luck: -5 }, flags: ['realm_breakthrough_6', 'realm_breakthrough_6_steady'], failFlags: ['realm_fail_6_steady'] },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { strength: 3, special: 3 }, flags: ['realm_delay_6'], failFlags: [] },
    ],
    flags: ['realm_attempt_6'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 5,
  },
  {
    id: 'fr_realm_6_stable', category: 'cultivation', minAge: 82, maxAge: 155, probability: 0.58,
    templates: [
      '你成为贤者的消息传遍了整个大陆。{location}的魔法使们将你视为活着的传说。',
    ],
    effects: { charisma: 5, intelligence: 5 },
    flags: ['realm_stable_6'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 2,
  },
  {
    id: 'fr_realm_7', category: 'cultivation', minAge: 150, maxAge: 300, probability: 0.65,
    templates: [
      '你在{location}触摸到了魔法之神的门槛。{npc}告诉你："成为魔法之神，意味着与魔法的本源融为一体。突破需要魔法理解≥100、精神≥100。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.5, successText: '你升华了！你的意识与魔法的本源相连，你即是魔法，魔法即是你。', failText: '升华失败，你的精神无法承受如此庞大的魔力洪流。突破失败。', effects: { realm: 1, special: 10, intelligence: 10, maxAge: 9000 }, failEffects: { health: -50, special: -20 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail_7'] },
      { text: '稳扎稳打', successRate: 0.3, successText: '你以无尽的时间积累最终成为了魔法之神。', failText: '稳健让你在关键时刻缺乏足够的顿悟。突破失败。', effects: { realm: 1, intelligence: 8, maxAge: 6300 }, failEffects: { intelligence: -10, health: -20 }, flags: ['realm_breakthrough_7', 'realm_breakthrough_7_steady'], failFlags: ['realm_fail_7_steady'] },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 5, special: 5 }, flags: ['realm_delay_7'], failFlags: [] },
    ],
    flags: ['realm_attempt_7'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 5,
  },
  {
    id: 'fr_realm_7_stable', category: 'cultivation', minAge: 152, maxAge: 310, probability: 0.55,
    templates: [
      '你成为魔法之神的那一刻，整个世界的魔力都产生了共鸣。你是魔法史上最崇高的存在。',
    ],
    effects: { charisma: 10, strength: 10 },
    flags: ['realm_stable_7'],
    requiredFlags: ['realm_breakthrough_7'],
    chainPriority: 2,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属事件 (40) — 10身份 × 4事件链
  // ═══════════════════════════════════════════════════════════════

  // --- elf (精灵族) ---
  {
    id: 'fr_ie_elf_01', category: 'identity_exclusive', minAge: 3, maxAge: 15, probability: 0.85,
    templates: [
      '你出生在精灵族的村落。在{location}的千年古树下，你第一次感受到了魔力的流动——那是精灵族与生俱来的天赋。',
      '你的童年漫长而宁静。在{location}，你看着人类村庄一代代更替，而自己依然是那个孩子。',
    ],
    effects: { strength: 5, special: 3 },
    flags: ['chain_elf_childhood_0'],
    identityExclusive: 'elf',
  },
  {
    id: 'fr_ie_elf_02', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.82,
    templates: [
      '五十岁那年（对精灵来说仍是少年），你在{location}遇到了勇者辛美尔。他的热情和短暂让你第一次对"人类"产生了好奇。',
      '你在{location}与一位人类魔法使成为了朋友。她说："你的生命那么长，一定有很多故事吧？"你愣了一下——原来从没有人问过你这个问题。',
    ],
    effects: { charisma: 5, intelligence: 4 },
    flags: ['chain_elf_growth_0'],
    requiredFlags: ['chain_elf_childhood_0'],
    identityExclusive: 'elf',
    chainPriority: 1,
  },
  {
    id: 'fr_ie_elf_03', category: 'identity_exclusive', minAge: 60, maxAge: 100, probability: 0.78,
    templates: [
      '成年后的你开始了独自旅行。在{location}，你收集着古代魔法的碎片，试图理解那些已经被遗忘的知识。',
      '你在{location}再次遇到了当年那位人类朋友——她已是一位老妇人。她微笑着说："你还是那么年轻。"你第一次感受到了时间的残酷。',
    ],
    effects: { intelligence: 6, special: 5 },
    flags: ['chain_elf_adult_0'],
    requiredFlags: ['chain_elf_growth_0'],
    identityExclusive: 'elf',
    chainPriority: 2,
  },
  {
    id: 'fr_ie_elf_04', category: 'identity_exclusive', minAge: 120, maxAge: 200, probability: 0.75,
    templates: [
      '你在{location}终于找到了传说中的"感情魔法"。那是一种让长生种理解短暂生命的古老法术——原来，精灵族的祖先早已预料到了你们的孤独。',
      '{npc}对你说："你终于理解了。不是人类的生命太短暂，而是你的生命太长——长到忘记了如何珍惜。"',
    ],
    effects: { intelligence: 10, charisma: 8, special: 8 },
    flags: ['chain_elf_special_0'],
    requiredFlags: ['chain_elf_adult_0'],
    identityExclusive: 'elf',
    chainPriority: 3,
  },

  // --- human_mage (人类魔法使) ---
  {
    id: 'fr_ie_human_mage_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你出生在一个人类村庄。在{location}的魔法测试中，你展现出了惊人的天赋——你的魔力虽不如精灵，但学习速度却快得惊人。',
      '你的父母虽然不富裕，但省吃俭用供你去{location}的魔法学校。你知道，自己的机会来之不易。',
    ],
    effects: { strength: 3, intelligence: 4 },
    flags: ['chain_human_mage_childhood_0'],
    identityExclusive: 'human_mage',
  },
  {
    id: 'fr_ie_human_mage_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}的魔法竞赛中击败了一名精灵族学生。全场震惊——人类怎么可能战胜精灵？',
      '你在{location}遇到了芙莉莲。她看着你的魔法，难得地点了点头："人类的魔法虽然粗糙，但有一种独特的效率。"',
    ],
    effects: { strength: 5, special: 4 },
    flags: ['chain_human_mage_growth_0'],
    requiredFlags: ['chain_human_mage_childhood_0'],
    identityExclusive: 'human_mage',
    chainPriority: 1,
  },
  {
    id: 'fr_ie_human_mage_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你已经成为了一名优秀的魔法使。在{location}，你用短暂的人类生命创造出了精灵需要数百年才能掌握的魔法技巧。',
      '你在{location}参加了一级魔法使考试。考官对你的评价是："此子的魔力并非最强，但对魔法的理解已臻化境。"',
    ],
    effects: { intelligence: 6, special: 5 },
    flags: ['chain_human_mage_adult_0'],
    requiredFlags: ['chain_human_mage_growth_0'],
    identityExclusive: 'human_mage',
    chainPriority: 2,
  },
  {
    id: 'fr_ie_human_mage_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}完成了自己最重要的魔法理论。你证明了人类虽然寿命短暂，但创造力却是任何长生种都无法比拟的。',
      '{npc}握着你的手说："你用短短几十年做到了精灵几百年做不到的事。人类的价值，不在长度，而在密度。"',
    ],
    effects: { intelligence: 10, special: 8, charisma: 5 },
    flags: ['chain_human_mage_special_0'],
    requiredFlags: ['chain_human_mage_adult_0'],
    identityExclusive: 'human_mage',
    chainPriority: 3,
  },

  // --- hero_descendant (勇者后裔) ---
  {
    id: 'fr_ie_hero_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你出生在勇者辛美尔的后裔家族。在{location}的祖屋里，挂满了那位传奇勇者的画像和遗物。',
      '你的祖母常常坐在{location}的壁炉边，给你讲述勇者的故事。她说："你的血脉中流淌着英雄的力量。"',
    ],
    effects: { strength: 3, charisma: 4 },
    flags: ['chain_hero_childhood_0'],
    identityExclusive: 'hero_descendant',
  },
  {
    id: 'fr_ie_hero_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}拔出了祖传的勇者之剑。那把剑已经沉寂了五十年，但在你手中发出了微弱的光芒。',
      '你在{location}遇到了芙莉莲。她看着你，眼神复杂："你很像他。不是长相，是眼神。"',
    ],
    effects: { strength: 5, charisma: 4 },
    flags: ['chain_hero_growth_0'],
    requiredFlags: ['chain_hero_childhood_0'],
    identityExclusive: 'hero_descendant',
    chainPriority: 1,
  },
  {
    id: 'fr_ie_hero_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你开始了自己的冒险。在{location}，你救助了一个被魔物袭击的村庄——就像当年的勇者一样。',
      '你在{location}发现了一处勇者当年留下的遗迹。那里的魔法陷阱只有勇者血脉才能解开，你从中获得了一份珍贵的传承。',
    ],
    effects: { strength: 6, luck: 5 },
    flags: ['chain_hero_adult_0'],
    requiredFlags: ['chain_hero_growth_0'],
    identityExclusive: 'hero_descendant',
    chainPriority: 2,
  },
  {
    id: 'fr_ie_hero_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}终于走出了勇者的阴影。人们不再叫你"勇者的后裔"，而是叫你自己的名字。这是你最骄傲的成就。',
      '{npc}对你说："辛美尔会很高兴的。他从不希望有人活在他的阴影下——他希望有人超越他。"',
    ],
    effects: { strength: 8, charisma: 8, intelligence: 5 },
    flags: ['chain_hero_special_0'],
    requiredFlags: ['chain_hero_adult_0'],
    identityExclusive: 'hero_descendant',
    chainPriority: 3,
  },

  // --- monk (僧侣) ---
  {
    id: 'fr_ie_monk_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你被遗弃在{location}的修道院门口。僧侣们收养了你，教你祈祷、治疗和信仰的力量。',
      '你的童年在{location}的晨钟暮鼓中度过。你发现自己对神圣魔法有着天然的亲和力。',
    ],
    effects: { intelligence: 4, health: 3 },
    flags: ['chain_monk_childhood_0'],
    identityExclusive: 'monk',
  },
  {
    id: 'fr_ie_monk_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}第一次使用治愈魔法救了一个重伤的旅人。那种拯救生命的感觉让你确定了自己的道路。',
      '你在{location}的修行中遇到了瓶颈。主持对你说："神圣魔法的极限不在魔力，而在慈悲。"',
    ],
    effects: { intelligence: 5, charisma: 3 },
    flags: ['chain_monk_growth_0'],
    requiredFlags: ['chain_monk_childhood_0'],
    identityExclusive: 'monk',
    chainPriority: 1,
  },
  {
    id: 'fr_ie_monk_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你成为了一名游历僧侣。在{location}，你用治愈魔法救助了无数人，也见证了无数生离死别。',
      '你在{location}遇到了一位濒死的魔族。在信仰和慈悲之间，你最终选择了治疗他。那一夜，你对自己的信仰有了更深的理解。',
    ],
    effects: { charisma: 6, intelligence: 5 },
    flags: ['chain_monk_adult_0'],
    requiredFlags: ['chain_monk_growth_0'],
    identityExclusive: 'monk',
    chainPriority: 2,
  },
  {
    id: 'fr_ie_monk_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}建立了一座新的修道院，不分种族、不分信仰，任何需要治愈的人都可以得到帮助。',
      '{npc}对你说："你做到了连圣典都没有记载的事——用慈悲超越了对与错的界限。这才是真正的神圣。"',
    ],
    effects: { charisma: 10, intelligence: 6, health: 5 },
    flags: ['chain_monk_special_0'],
    requiredFlags: ['chain_monk_adult_0'],
    identityExclusive: 'monk',
    chainPriority: 3,
  },

  // --- warrior (战士) ---
  {
    id: 'fr_ie_warrior_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你出生在战士之村。在{location}的训练场上，你从小看着大人们挥舞巨剑、劈开岩石。',
      '你的父亲教你第一句话不是"妈妈"，而是"战斗"。在{location}，弱肉强食是唯一的教育。',
    ],
    effects: { strength: 5, health: 3 },
    flags: ['chain_warrior_childhood_0'],
    identityExclusive: 'warrior',
  },
  {
    id: 'fr_ie_warrior_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}的成年礼上，独自击败了一只巨魔。全村人为欢呼，但你只关心一件事：还能变得更强吗？',
      '你在{location}遇到了修塔尔克。他看着你的剑法，露出了兴奋的笑容："来打一架吧！"那一架，你输了，但你也找到了目标。',
    ],
    effects: { strength: 6, health: 3 },
    flags: ['chain_warrior_growth_0'],
    requiredFlags: ['chain_warrior_childhood_0'],
    identityExclusive: 'warrior',
    chainPriority: 1,
  },
  {
    id: 'fr_ie_warrior_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你成为了一名强大的战士。在{location}，你用肉身和巨剑守护了无数人——不需要魔法，只需要勇气和力量。',
      '你在{location}与一只龙族展开了激战。当你浑身是血、却依然站在龙面前时，你明白了战士的真正意义不是胜利，而是永不退缩。',
    ],
    effects: { strength: 8, health: 5 },
    flags: ['chain_warrior_adult_0'],
    requiredFlags: ['chain_warrior_growth_0'],
    identityExclusive: 'warrior',
    chainPriority: 2,
  },
  {
    id: 'fr_ie_warrior_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}成为了战士之村的最强者。但比起这个头衔，你更骄傲的是——你从未在战斗中放弃过任何人。',
      '{npc}对你说："你证明了战士不只是一把武器。你有保护他人的意志，这才是最强大的力量。"',
    ],
    effects: { strength: 10, charisma: 6, health: 5 },
    flags: ['chain_warrior_special_0'],
    requiredFlags: ['chain_warrior_adult_0'],
    identityExclusive: 'warrior',
    chainPriority: 3,
  },

  // --- thief (盗贼) ---
  {
    id: 'fr_ie_thief_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你出生在{location}的贫民窟。在那里，偷窃不是罪恶，而是生存的本能。',
      '你从小手脚灵活。在{location}，你能从任何人口袋里取出东西而不被发现——包括那个严厉的老守卫。',
    ],
    effects: { luck: 5, strength: 2 },
    flags: ['chain_thief_childhood_0'],
    identityExclusive: 'thief',
  },
  {
    id: 'fr_ie_thief_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}遇到了一位传奇盗贼。他看着你灵活的手指，说："偷东西只是技巧，找到真正重要的东西才是艺术。"',
      '你在{location}的遗迹探险中，凭借敏锐的眼光发现了一个被所有人忽略的隐藏通道。那次发现让你获得了第一桶金。',
    ],
    effects: { luck: 6, intelligence: 3 },
    flags: ['chain_thief_growth_0'],
    requiredFlags: ['chain_thief_childhood_0'],
    identityExclusive: 'thief',
    chainPriority: 1,
  },
  {
    id: 'fr_ie_thief_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你成为了遗迹探险的专家。在{location}，你的开锁和陷阱解除技术救了无数冒险者的命。',
      '你在{location}发现了一份古代地图，指向传说中的"贤者之塔"。那可能是你一生最重要的发现。',
    ],
    effects: { luck: 6, special: 4 },
    flags: ['chain_thief_adult_0'],
    requiredFlags: ['chain_thief_growth_0'],
    identityExclusive: 'thief',
    chainPriority: 2,
  },
  {
    id: 'fr_ie_thief_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}找到了传说中的宝藏——不是金银财宝，而是一本记录着失落魔法的典籍。',
      '{npc}对你说："你找到了比黄金更珍贵的东西。一个真正的盗贼，偷的不是财富，而是被遗忘的知识。"',
    ],
    effects: { luck: 8, intelligence: 6, special: 6 },
    flags: ['chain_thief_special_0'],
    requiredFlags: ['chain_thief_adult_0'],
    identityExclusive: 'thief',
    chainPriority: 3,
  },

  // --- court_mage (宫廷法师) ---
  {
    id: 'fr_ie_court_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你出生在贵族家庭。在{location}的宫殿里，你从小学习礼仪、政治和魔法——宫廷法师需要的不仅是力量，还有智慧。',
      '你的魔法启蒙老师是一位退休的宫廷法师。在{location}的书房里，他教你如何用魔法服务权力，而不是被权力奴役。',
    ],
    effects: { intelligence: 4, charisma: 3 },
    flags: ['chain_court_childhood_0'],
    identityExclusive: 'court_mage',
  },
  {
    id: 'fr_ie_court_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}的宫廷魔法竞赛中获胜。国王亲自为你颁奖，但你注意到王子眼中的嫉妒。',
      '你在{location}学会了政治魔法的精髓——不是最强大的魔法最有用，而是最恰到好处的魔法最有价值。',
    ],
    effects: { charisma: 5, intelligence: 4 },
    flags: ['chain_court_growth_0'],
    requiredFlags: ['chain_court_childhood_0'],
    identityExclusive: 'court_mage',
    chainPriority: 1,
  },
  {
    id: 'fr_ie_court_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你成为了王室的宫廷法师。在{location}，你用魔法维护着王国的秩序，也用智慧周旋于各方势力之间。',
      '你在{location}阻止了一场针对王室的政变。你的魔法没有杀死任何人，只是让所有人说出了真相。',
    ],
    effects: { charisma: 6, intelligence: 5 },
    flags: ['chain_court_adult_0'],
    requiredFlags: ['chain_court_growth_0'],
    identityExclusive: 'court_mage',
    chainPriority: 2,
  },
  {
    id: 'fr_ie_court_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}成为了王国最有影响力的宫廷法师。但你始终记得老师的话：权力是工具，不是目的。',
      '{npc}对你说："你做到了最难得的事——在权力的中心保持了本心。这比任何魔法都更难。"',
    ],
    effects: { charisma: 10, intelligence: 6, special: 5 },
    flags: ['chain_court_special_0'],
    requiredFlags: ['chain_court_adult_0'],
    identityExclusive: 'court_mage',
    chainPriority: 3,
  },

  // --- demon (魔族) ---
  {
    id: 'fr_ie_demon_01', category: 'identity_exclusive', minAge: 3, maxAge: 15, probability: 0.85,
    templates: [
      '你出生在魔族的领地。在{location}的黑暗中，你从小被教导：人类是敌人，魔法是武器，情感是弱点。',
      '你的童年充满了战斗训练。在{location}，弱小的魔族会被淘汰——那是你们种族的法则。',
    ],
    effects: { strength: 5, special: 3 },
    flags: ['chain_demon_childhood_0'],
    identityExclusive: 'demon',
  },
  {
    id: 'fr_ie_demon_02', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.82,
    templates: [
      '五十岁那年（对魔族来说仍是少年），你在{location}第一次与人类魔法使交战。对方的顽强让你困惑——为什么弱小的人类不肯放弃？',
      '你在{location}俘虏了一个人类女孩。她问你："你们魔族真的不会理解感情吗？"你没有回答，但那个问题困扰了你很久。',
    ],
    effects: { strength: 5, intelligence: 4 },
    flags: ['chain_demon_growth_0'],
    requiredFlags: ['chain_demon_childhood_0'],
    identityExclusive: 'demon',
    chainPriority: 1,
  },
  {
    id: 'fr_ie_demon_03', category: 'identity_exclusive', minAge: 60, maxAge: 100, probability: 0.78,
    templates: [
      '成年后的你成为了魔族中的强者。但在{location}的一次战斗中，你放走了一个手无寸铁的人类孩子——你自己也不知道为什么。',
      '你在{location}遇到了芙莉莲。她说："你和其他魔族不同。你的魔法中...有一种奇怪的东西。"',
    ],
    effects: { intelligence: 6, special: 5 },
    flags: ['chain_demon_adult_0'],
    requiredFlags: ['chain_demon_growth_0'],
    identityExclusive: 'demon',
    chainPriority: 2,
  },
  {
    id: 'fr_ie_demon_04', category: 'identity_exclusive', minAge: 120, maxAge: 200, probability: 0.75,
    templates: [
      '你在{location}做出了魔族历史上从未有过的事——你与人类达成了和解。不是因为软弱，而是因为你终于理解了什么是"值得保护的"。',
      '{npc}对你说："你是第一个理解人类的魔族。也许，这就是魔族进化的下一步。"',
    ],
    effects: { intelligence: 10, charisma: 6, special: 8 },
    flags: ['chain_demon_special_0'],
    requiredFlags: ['chain_demon_adult_0'],
    identityExclusive: 'demon',
    chainPriority: 3,
  },

  // --- adventurer (冒险者) ---
  {
    id: 'fr_ie_adventurer_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你出生在冒险者公会附近。在{location}的酒馆里，你从小听着各路冒险者的传奇故事长大。',
      '你的第一个"冒险"是在{location}的后山寻找传说中的宝藏。你只找到了一块漂亮的石头，但那种探索的快乐让你上瘾。',
    ],
    effects: { luck: 5, strength: 2 },
    flags: ['chain_adventurer_childhood_0'],
    identityExclusive: 'adventurer',
  },
  {
    id: 'fr_ie_adventurer_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你正式注册了冒险者身份。在{location}的公会大厅里，你接下了第一个任务——护送商队穿越危险地带。',
      '你在{location}的冒险中结识了一群志同道合的伙伴。你们约定：总有一天要一起挑战S级迷宫。',
    ],
    effects: { strength: 4, luck: 4 },
    flags: ['chain_adventurer_growth_0'],
    requiredFlags: ['chain_adventurer_childhood_0'],
    identityExclusive: 'adventurer',
    chainPriority: 1,
  },
  {
    id: 'fr_ie_adventurer_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你已经是一名资深冒险者。在{location}，你完成了无数任务，从最低级的采集到最高级的魔物讨伐。',
      '你在{location}的一次探险中，发现了一处未被记载的古代遗迹。那里面可能隐藏着改变世界的秘密。',
    ],
    effects: { luck: 6, strength: 4 },
    flags: ['chain_adventurer_adult_0'],
    requiredFlags: ['chain_adventurer_growth_0'],
    identityExclusive: 'adventurer',
    chainPriority: 2,
  },
  {
    id: 'fr_ie_adventurer_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}终于完成了终极冒险——找到了传说中的"世界尽头"。那里的风景让你明白，冒险的意义不在于终点，而在于旅途本身。',
      '{npc}对你说："你走过了比任何人都长的路。而那些路，终将成为后人的指引。"',
    ],
    effects: { luck: 8, charisma: 6, strength: 5 },
    flags: ['chain_adventurer_special_0'],
    requiredFlags: ['chain_adventurer_adult_0'],
    identityExclusive: 'adventurer',
    chainPriority: 3,
  },

  // --- librarian (图书管理员) ---
  {
    id: 'fr_ie_librarian_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你被遗弃在{location}的图书馆门口。馆长收养了你，从此你在书架之间长大。',
      '你的童年没有玩伴，只有书。在{location}，你读完了馆里的每一本书，包括那些被禁止阅读的禁书。',
    ],
    effects: { intelligence: 5, special: 2 },
    flags: ['chain_librarian_childhood_0'],
    identityExclusive: 'librarian',
  },
  {
    id: 'fr_ie_librarian_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}发现了一本被遗忘的魔法书。书中的知识远超你的理解，但你决心要读懂它。',
      '你在{location}遇到了一位来访的学者。他与你讨论了一整晚的古代魔法理论，临走时说："这孩子...将来会成为伟大的学者。"',
    ],
    effects: { intelligence: 6, special: 3 },
    flags: ['chain_librarian_growth_0'],
    requiredFlags: ['chain_librarian_childhood_0'],
    identityExclusive: 'librarian',
    chainPriority: 1,
  },
  {
    id: 'fr_ie_librarian_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你成为了{location}图书馆的馆长。你用毕生所学整理古籍，让那些被遗忘的知识重见天日。',
      '你在{location}发现了一批勇者时代的原始记录。那些文件揭示了历史上许多未被记载的真相。',
    ],
    effects: { intelligence: 7, special: 5 },
    flags: ['chain_librarian_adult_0'],
    requiredFlags: ['chain_librarian_growth_0'],
    identityExclusive: 'librarian',
    chainPriority: 2,
  },
  {
    id: 'fr_ie_librarian_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}完成了人类历史上最完整的魔法百科全书。那不仅是知识的汇总，更是文明的传承。',
      '{npc}对你说："你守护的不是书，而是人类的记忆。只要图书馆还在，文明就不会真正消亡。"',
    ],
    effects: { intelligence: 12, charisma: 5, special: 8 },
    flags: ['chain_librarian_special_0'],
    requiredFlags: ['chain_librarian_adult_0'],
    identityExclusive: 'librarian',
    chainPriority: 3,
  },
];
