import type { EventTemplate } from './types';

// Fate/stay night — 约100 event templates
// Generated: 2026-04-27

export const fateTemplates: EventTemplate[] = [
  // 通用童年 (3)
  {
    id: 'ft_ch_01', category: 'childhood', minAge: 0, maxAge: 6, probability: 0.04,
    templates: [
      '你出生那天，{location}上空出现了罕见的魔力漩涡。{npc}断言你是千年一遇的魔术天才。',
      '你的第一声啼哭引发了{location}的魔力暴动，{npc}颤抖着说："这孩子...天生就连接着根源。"',
      '你降生的瞬间，{location}的樱花逆季绽放，{legend}的虚影在天际显现。',
    ],
    effects: { luck: 10, special: 8, charisma: 5 },
  },
  {
    id: 'ft_ch_02', category: 'childhood', minAge: 3, maxAge: 10, probability: 0.15,
    templates: [
      '你在{location}玩耍时，体内突然涌出一股热流。{npc}惊讶地发现你的魔术回路正在觉醒！',
      '五岁时，你在{location}无意间触发了一个古老的检测阵法，光芒比所有人都亮。',
      '{npc}为你进行魔术回路测试，发现你的回路数量远超常人。',
    ],
    effects: { intelligence: 6, strength: 4 },
  },
  {
    id: 'ft_ch_03', category: 'childhood', minAge: 4, maxAge: 12, probability: 0.55,
    templates: [
      '你在{location}救了一只受伤的小鸟，它其实是{legend}派来的使魔。',
      '{npc}在你满月时送了一块宝石，后来你发现那是一件圣遗物的碎片。',
      '你从小就能看见别人看不见的{legend}幻影，{npc}说这是魔术回路的征兆。',
      '你在{location}度过了平淡但快乐的童年，魔力在不知不觉中缓慢增长。',
    ],
    effects: { special: 3, luck: 2 },
  },
  // 通用成长 (3)
  {
    id: 'ft_gr_01', category: 'growth', minAge: 13, maxAge: 20, probability: 0.03,
    templates: [
      '你在{location}闭关三日，出关时眼中精光四射——你竟在冥想中顿悟了{legend}的传承！',
      '一场雷雨夜，你在{location}被魔力风暴击中非但没死，反而打通了全部魔术回路！',
      '{legend}的残魂在{location}与你相遇，将毕生魔术感悟传授于你。',
    ],
    effects: { intelligence: 10, special: 8, strength: 5 },
  },
  {
    id: 'ft_gr_02', category: 'growth', minAge: 14, maxAge: 22, probability: 0.15,
    templates: [
      '你在{location}苦修三年，终于突破了困扰多年的魔术瓶颈，实力大增！',
      '{npc}带你外出历练，你在{location}击败了一个强敌，获得了珍贵的战利品。',
      '你发现了{legend}留下的魔术试炼场，通过考验后获得了意想不到的收获。',
    ],
    effects: { strength: 6, special: 5 },
  },
  {
    id: 'ft_gr_03', category: 'growth', minAge: 13, maxAge: 25, probability: 0.55,
    templates: [
      '你每天在{location}勤奋练习魔术，虽然进步缓慢但根基扎实。',
      '{npc}督促你修炼魔术，你不敢懈怠。',
      '你在{location}读了很多魔术典籍，眼界开阔了不少。',
      '平平淡淡的一年，你在{location}默默积累着魔力。',
    ],
    effects: { intelligence: 2, strength: 2 },
  },
  // 通用成年 (2)
  {
    id: 'ft_ad_01', category: 'adult', minAge: 26, maxAge: 45, probability: 0.18,
    templates: [
      '你在{location}建立了属于自己的魔术工坊，各方魔术师纷纷来投。',
      '你参与了{legend}相关的大规模事件，在关键时刻力挽狂澜。',
      '你在{location}收下了第一个弟子，将自己的所学倾囊相授。',
    ],
    effects: { charisma: 8, strength: 5, special: 5 },
  },
  {
    id: 'ft_ad_02', category: 'adult', minAge: 26, maxAge: 50, probability: 0.55,
    templates: [
      '你在{location}处理日常魔术研究，实力稳步发展。',
      '{npc}来找你帮忙，你出手解决了他的难题。',
      '你在{location}度过了平静的一年，魔力稳步提升。',
    ],
    effects: { strength: 2, intelligence: 2, special: 2 },
  },
  // 通用老年 (1)
  {
    id: 'ft_el_01', category: 'elder', minAge: 50, maxAge: 120, probability: 0.55,
    templates: [
      '你在{location}钻研更高阶的魔术理论，试图突破冠位魔术师的限制。',
      '你开始招收魔术学徒，在{location}传授毕生所学的魔术知识。',
      '你已是{location}的传说级魔术师，后人将你的名字载入魔术史册。',
    ],
    effects: { intelligence: 3, special: 2 },
  },
  // 战斗 (3)
  {
    id: 'ft_cb_01', category: 'combat', minAge: 15, maxAge: 40, probability: 0.04,
    templates: [
      '你在{location}以一己之力对抗三位同阶魔术师，最终大获全胜，一战成名！',
      '{legend}的敌人找上了你，你在{location}展开惊天大战，竟越级将其斩杀！',
      '你为了保护{location}的居民，独自对抗入侵的{legend}军团，创造了不可能的奇迹。',
    ],
    effects: { strength: 12, charisma: 8, health: -10 },
  },
  {
    id: 'ft_cb_02', category: 'combat', minAge: 15, maxAge: 45, probability: 0.18,
    templates: [
      '你在{location}遭遇强敌，展开了一场生死搏斗，最终险胜。',
      '你和{npc}在{location}切磋魔术，双方都获益匪浅。',
      '你为了保护同伴，在{location}与死徒激战，受了轻伤。',
    ],
    effects: { strength: 5, health: -3 },
  },
  {
    id: 'ft_cb_03', category: 'combat', minAge: 15, maxAge: 40, probability: 0.55,
    templates: [
      '你在{location}进行了日常魔术训练，技艺略有精进。',
      '你和同伴在{location}对练魔术，互相学习。',
      '你在{location}演练新学的魔术，逐渐熟练。',
    ],
    effects: { strength: 2 },
  },
  // 恋爱/羁绊 (3)
  {
    id: 'ft_rm_01', category: 'romance', minAge: 15, maxAge: 30, probability: 0.04,
    templates: [
      '你在{location}与{npc}相遇的瞬间，天地变色——你们的命运之线紧紧缠绕在了一起。',
      '{npc}为了救你，不惜耗尽令咒。你跪在{location}发誓：此生不负。',
      '你们的故事被{legend}记载，成为了{location}永恒的传说。',
    ],
    effects: { charisma: 10, luck: 8, health: 5 },
  },
  {
    id: 'ft_rm_02', category: 'romance', minAge: 16, maxAge: 30, probability: 0.18,
    templates: [
      '你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。',
      '你和{npc}在{location}月下相会，互诉衷肠。',
      '{npc}因为你的魔术才华而倾心，主动向你示好。',
    ],
    effects: { charisma: 4, luck: 3 },
  },
  {
    id: 'ft_rm_03', category: 'romance', minAge: 20, maxAge: 45, probability: 0.55,
    templates: [
      '你在{location}认识了一个有趣的人，但关系尚不明确。',
      '{npc}对你有些好感，但你还没想好如何回应。',
      '这一年感情上没有太大的波澜，你专注于魔术修炼。',
    ],
    effects: { charisma: 2 },
  },
  // 修炼/提升 (3)
  {
    id: 'ft_cult_01', category: 'cultivation', minAge: 20, maxAge: 50, probability: 0.04,
    templates: [
      '你在{location}闭关九九八十一天，出关时天地共鸣，你已触摸到了{legend}的境界！',
      '你的魔术造诣达到了前所未有的高度，{location}的魔力因为你而沸腾。',
      '{legend}的虚影亲自降临{location}，为你指点大道。',
    ],
    effects: { special: 12, intelligence: 10, strength: 5 },
  },
  {
    id: 'ft_cult_02', category: 'cultivation', minAge: 18, maxAge: 45, probability: 0.18,
    templates: [
      '你成功将{legend}的魔术融会贯通，实力暴涨！',
      '你在{location}经历了一场奇遇，魔力大涨，连{npc}都震惊不已。',
      '你突破了困扰多年的魔术瓶颈，{location}的天地异象持续了三日三夜。',
    ],
    effects: { special: 8, intelligence: 5 },
  },
  {
    id: 'ft_cult_03', category: 'cultivation', minAge: 13, maxAge: 40, probability: 0.55,
    templates: [
      '你在{location}按部就班地修炼魔术，虽然没有突破但根基更加稳固。',
      '{npc}检查了你的魔术进度，表示满意。',
      '你在{location}研读魔术典籍，对一些招式有了新的理解。',
    ],
    effects: { special: 2, intelligence: 1 },
  },
  // 探索 (3)
  {
    id: 'ft_ex_01', category: 'exploration', minAge: 20, maxAge: 50, probability: 0.05,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的核心传承，获得了改变命运的机缘！',
      '你在{location}找到了通往根源的入口，{legend}的秘密向你敞开。',
      '你解开了一个困扰魔术师万年的谜题，{location}的真相让你震惊。',
    ],
    effects: { luck: 10, intelligence: 8, special: 6 },
  },
  {
    id: 'ft_ex_02', category: 'exploration', minAge: 15, maxAge: 40, probability: 0.18,
    templates: [
      '你深入{location}探险，发现了未知的魔术秘密。',
      '你在{location}找到了一些有价值的魔术物品，收获颇丰。',
      '你在{location}迷路了，却意外发现了一处隐蔽的魔力源泉。',
    ],
    effects: { luck: 4, strength: 2 },
  },
  {
    id: 'ft_ex_03', category: 'exploration', minAge: 13, maxAge: 35, probability: 0.55,
    templates: [
      '你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。',
      '你跟着{npc}去{location}采集了一些魔术材料。',
      '你在{location}发现了一些普通的魔术草药，聊胜于无。',
    ],
    effects: { luck: 2 },
  },
  // 世界主线 (3)
  {
    id: 'ft_ws_01', category: 'world_story', minAge: 30, maxAge: 60, probability: 0.05,
    templates: [
      '{legend}的封印彻底破碎，圣杯战争的真相浮出水面，你被卷入了漩涡中心！',
      '一场席卷整个魔术界的大战爆发了，{location}首当其冲，你必须做出选择。',
      '世界的规则开始改变，{legend}的意志降临，所有魔术师都受到了影响。',
    ],
    effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 },
  },
  {
    id: 'ft_ws_02', category: 'world_story', minAge: 25, maxAge: 50, probability: 0.18,
    templates: [
      '你发现{location}隐藏着改变世界的秘密，各方魔术势力为此展开了明争暗斗。',
      '{npc}告诉你一个关于根源的惊天秘密，你的世界观被彻底颠覆。',
      '传说中的{legend}即将降临，所有人都在做准备，{location}的气氛紧张到了极点。',
    ],
    effects: { intelligence: 6, charisma: 4 },
  },
  {
    id: 'ft_ws_03', category: 'world_story', minAge: 20, maxAge: 45, probability: 0.55,
    templates: [
      '你听到了一些关于{legend}的传闻，但真假难辨。',
      '{location}发生了一些小变化，但你没有太在意。',
      '{npc}跟你聊了聊最近的魔术界时事，你表示关注。',
    ],
    effects: { intelligence: 2 },
  },
  // 隐藏 (2)
  {
    id: 'ft_hd_01', category: 'hidden', minAge: 35, maxAge: 80, probability: 0.08,
    templates: [
      '你在{location}发现了一个被禁止入内的区域，里面藏着惊人的魔术秘密。',
      '你解开了{legend}留下的谜题，获得了一份隐藏的魔术传承。',
      '{npc}告诉你一个只有极少数魔术师知道的秘密，你感到责任重大。',
    ],
    effects: { intelligence: 10, special: 8 },
    conditions: [{ stat: 'intelligence', min: 100 }],
  },
  {
    id: 'ft_hd_02', category: 'hidden', minAge: 20, maxAge: 60, probability: 0.35,
    templates: [
      '你在{location}听到了一些奇怪的低语，但找不到来源。',
      '你做了一个关于{legend}的怪梦，醒来后记忆模糊。',
      '{npc}欲言又止，似乎想告诉你什么秘密但最终没说出口。',
    ],
    effects: { intelligence: 3 },
    conditions: [{ stat: 'intelligence', min: 60 }],
  },
  // 死亡 (3)
  {
    id: 'ft_dt_01', category: 'death', minAge: 0, maxAge: 100, probability: 0.35,
    templates: [
      '你在{location}遭遇不测，生命力迅速流逝。',
      '你的身体到达了极限，{npc}无能为力。',
      '{legend}的诅咒降临在你身上，你无法抵抗。',
    ],
    effects: { health: -60 },
  },
  {
    id: 'ft_dt_02', category: 'death', minAge: 0, maxAge: 150, probability: 0.55,
    templates: [
      '你在{location}进行了最后的战斗，英勇牺牲。',
      '寿元耗尽，你在{location}静静地闭上了眼睛。',
      '你走火入魔，在{location}化为灰烬。',
    ],
    effects: { health: -80 },
  },
  {
    id: 'ft_dt_03', category: 'death', minAge: 0, maxAge: 200, probability: 0.75,
    templates: [
      '你在{location}寿终正寝，周围的人都来为你送行。',
      '你安详地在{location}离世，一生无憾。',
      '{npc}守在你的床前，目送你离开这个世界。',
    ],
    effects: { health: -100 },
  },
  // 废材逆袭 (8)
  {
    id: 'ft_tr_01', category: 'trash_exclusive', minAge: 3, maxAge: 8, probability: 0.35,
    templates: [
      '你的魔术回路检测结果显示：仅有一条，且极度劣化。{npc}摇头叹息："这孩子...不适合魔术。"',
      '作为被判定为魔术废材的孩子，你在{location}的魔术觉醒仪式上手足无措——检测水晶几乎没有任何反应。',
    ],
    effects: { strength: 2, luck: 1 },
    talentExclusive: 'trash',
  },
  {
    id: 'ft_tr_02', category: 'trash_exclusive', minAge: 7, maxAge: 12, probability: 0.35,
    templates: [
      '你不甘心。每晚偷偷在{location}的阁楼里研读借来的《基础魔术入门》，一遍又一遍地练习最基础的魔力感知。',
      '你在{location}的旧书摊上发现了一本破损的《魔术数学导论》。书中说："回路可以弥补，公式可以超越天赋。"你如获至宝。',
    ],
    effects: { intelligence: 3 },
    talentExclusive: 'trash',
  },
  {
    id: 'ft_tr_03', category: 'trash_exclusive', minAge: 14, maxAge: 20, probability: 0.32,
    templates: [
      '你十四岁那年，凭借扎实的理论基础考入了魔术协会的自费班——你是唯一一个靠奖学金入学的回路劣化者。',
      '别的魔术师用高级魔术，你用一根捡来的树枝当触媒。但你的魔术精准度却超过了他们——因为你懂得计算魔力的流动轨迹。',
    ],
    effects: { special: 4 },
    talentExclusive: 'trash',
  },
  {
    id: 'ft_tr_04', category: 'trash_exclusive', minAge: 19, maxAge: 25, probability: 0.32,
    templates: [
      '二十岁那年，你在{location}的魔术考试中提出了一个大胆的理论："魔术可以用数学公式精确计算，不需要依赖回路。"教授们哄堂大笑。',
      '{npc}——一位被协会边缘化的老魔术师——私下找到了你："孩子，你的理论...我在三十年前就提出过。他们笑了我三十年。你愿意和我一起证明它吗？"',
    ],
    effects: { intelligence: 5 },
    talentExclusive: 'trash',
  },
  {
    id: 'ft_tr_05', category: 'trash_exclusive', minAge: 26, maxAge: 35, probability: 0.3,
    templates: [
      '成年后，你的"公式魔术"理论开始在小范围内传播。一些被判定为回路劣化的魔术师找到了你。',
      '你在{location}建立了一间小小的"公式魔术实验室"。魔术协会的会长亲自来警告你："你在颠覆魔术的根基。"',
    ],
    effects: { special: 5 },
    talentExclusive: 'trash',
  },
  {
    id: 'ft_tr_06', category: 'trash_exclusive', minAge: 10, maxAge: 30, probability: 0.28,
    templates: [
      '你成功证明了"公式魔术"的可行性！一位回路劣化的魔术师用你的方法施展出了人生第一个魔术。',
      '魔术协会的使者找到了你："你的理论...与协会顶层的根源之书上的记载一模一样。千年前，有一位贤者也走过这条路。"',
    ],
    effects: { intelligence: 8 },
    talentExclusive: 'trash',
  },
  {
    id: 'ft_tr_07', category: 'trash_exclusive', minAge: 30, maxAge: 50, probability: 0.28,
    templates: [
      '你成为了"公式魔术"的创始人。后人称你为"回路劣化者的救星"。你的理论让无数被判定为废材的人拥有了施展魔术的能力。',
      '你在{location}的墓碑上刻着："魔术不属于天赋者，魔术属于所有渴望真理的人。"',
    ],
    effects: { special: 8, charisma: 5 },
    talentExclusive: 'trash',
  },
  {
    id: 'ft_tr_08', category: 'trash_exclusive', minAge: 15, maxAge: 40, probability: 0.25,
    templates: [
      '你的"无回路魔术"被古老的封印指定局注意到。他们邀请你加入，因为你的魔术完全不同于传统体系，是规则的漏洞。',
      '在{location}的一次魔术对决中，你用纯公式魔术击败了一位冠位魔术师。全场寂静——然后爆发出雷鸣般的掌声。',
    ],
    effects: { strength: 6, charisma: 4 },
    talentExclusive: 'trash',
  },
  // 重大抉择 (4)
  {
    id: 'ft_major_01', category: 'major', minAge: 14, maxAge: 18, probability: 0.55,
    templates: [
      '十五岁那年，圣杯战争在{location}爆发。你面临着人生最重要的抉择——参加圣杯战争，还是拒绝这场杀戮？',
    ],
    effects: { intelligence: 2, charisma: 1 },
    choices: [
      { text: '参加圣杯战争，追求愿望', successRate: 0.65, successText: '你决定参加圣杯战争。在{location}的召唤阵中，你成功召唤出了从者。{npc}看着你，眼中满是期待："战争开始了，御主。"你的魔力与从者共鸣，实力大增', failText: '你参加了圣杯战争，但召唤出了不完整的从者。虽然勉强参战，但从一开始就处于劣势', effects: { strength: 10, intelligence: 5, special: 5 }, failEffects: { strength: 3, intelligence: 2, health: -10 }, flags: ['fate_join_war'], failFlags: ['fate_join_war_fail'] },
      { text: '拒绝战争，保护身边的人', successRate: 0.75, successText: '你拒绝了圣杯战争。{npc}点头："明智的选择。"你带着家人离开了{location}，虽然放弃了愿望，但保护了重要的人', failText: '你拒绝了战争，但其他御主不会放过知情者。你被卷入了战争的余波，不得不四处逃亡', effects: { luck: 10, charisma: 5, health: 5 }, failEffects: { health: -5, luck: -3 }, flags: ['fate_refuse_war'], failFlags: ['fate_refuse_war_fail'] },
      { text: '旁观战争，收集情报', successRate: 0.5, successText: '你选择了旁观。在{location}的阴影中，你记录下了每一场战斗的数据。这些情报后来成为了魔术协会的珍贵资料', failText: '你试图旁观，但被其他御主误认为潜在威胁。你被迫提前卷入战斗，腹背受敌', effects: { intelligence: 8, luck: 3 }, failEffects: { intelligence: 3, health: -15 }, flags: ['fate_watch_war'], failFlags: ['fate_watch_war_fail'] },
    ],
    flags: ['fate_major_15_seen'],
    chainPriority: 10,
  },
  {
    id: 'ft_major_02', category: 'major', minAge: 28, maxAge: 32, probability: 0.5,
    templates: [
      '三十岁那年，圣杯战争进入了最终阶段。你的从者已伤痕累累，而你面临着第二个重大抉择。',
    ],
    effects: { charisma: 2 },
    choices: [
      { text: '保护从者，放弃圣杯', successRate: 0.6, successText: '你选择了保护从者。在{location}的最后战场上，你用令咒命令从者撤退。虽然失去了圣杯，但你赢得了从者的忠诚与友情', failText: '你试图保护从者，但敌人的攻势太猛。从者为了保护你而消散，你独自逃离了战场', effects: { charisma: 10, luck: 5, health: 5 }, failEffects: { charisma: -5, health: -20, luck: -5 }, flags: ['fate_protect_servant'], failFlags: ['fate_protect_servant_fail'] },
      { text: '追求圣杯，不惜一切', successRate: 0.45, successText: '你选择了追求圣杯。在{location}的最终决战中，你击败了所有对手，触碰到了圣杯——但圣杯中的黑泥让你惊恐万分', failText: '你追求圣杯，但在最终决战中被其他御主联手击败。你的从者消散，愿望破灭', effects: { strength: 12, intelligence: 5, luck: -5 }, failEffects: { strength: 5, health: -30, luck: -10 }, flags: ['fate_pursue_grail'], failFlags: ['fate_pursue_grail_fail'] },
      { text: '破坏圣杯，终结战争', successRate: 0.35, successText: '你看穿了圣杯的本质，决定破坏它。在{location}的决战中，你用令咒命令从者摧毁圣杯。战争结束，你成为了无名英雄', failText: '你试图破坏圣杯，但圣杯的防御机制反噬了你。你身受重伤，圣杯战争继续进行', effects: { charisma: 15, intelligence: 10, special: 5 }, failEffects: { intelligence: 5, health: -25, strength: -5 }, flags: ['fate_destroy_grail'], failFlags: ['fate_destroy_grail_fail'] },
    ],
    flags: ['fate_major_30_seen'],
    chainPriority: 10,
  },
  {
    id: 'ft_major_03', category: 'major', minAge: 43, maxAge: 47, probability: 0.48,
    templates: [
      '四十五岁那年，你已经历了无数次战斗与抉择。现在，你必须决定自己人生的终极目标。',
    ],
    effects: { luck: -2 },
    choices: [
      { text: '成为正义的伙伴', successRate: 0.5, successText: '你选择了成为正义的伙伴。你游走于世界各地，消灭威胁人理的存在。{npc}说："你终于成为了真正的英雄。"但你知道，这份正义的代价是孤独', failText: '你追求正义，但在这条路上失去了太多。你的双手沾满了鲜血，分不清正义与杀戮的界限', effects: { strength: 15, charisma: 10, luck: -5 }, failEffects: { charisma: -10, luck: -10, health: -15 }, flags: ['fate_justice_partner'], failFlags: ['fate_justice_partner_fail'] },
      { text: '守护重要的人', successRate: 0.7, successText: '你放弃了宏大的理想，选择守护身边的人。{npc}微笑着说："这才是真正的幸福。"你与所爱之人隐居{location}，过上了平静的生活', failText: '你试图守护重要的人，但敌人找上了门。虽然你奋力抵抗，但重要的人还是受了重伤', effects: { luck: 10, health: 10, charisma: 5 }, failEffects: { health: -20, luck: -10, charisma: -5 }, flags: ['fate_protect_loved'], failFlags: ['fate_protect_loved_fail'] },
      { text: '到达根源', successRate: 0.25, successText: '你选择了追求根源。在{location}的深处，你解开了最后的封印，触碰到了世界的真理——那一刻，你理解了万物运行的规律，成为了超越人类的存在', failText: '你追求根源，但触碰到真理的瞬间，你的精神无法承受。你陷入了永恒的疯狂', effects: { intelligence: 20, special: 15, strength: 5 }, failEffects: { intelligence: -10, health: -40, charisma: -20 }, flags: ['fate_reach_root'], failFlags: ['fate_reach_root_fail'] },
    ],
    flags: ['fate_major_45_seen'],
    chainPriority: 10,
  },
  {
    id: 'ft_major_04', category: 'major', minAge: 58, maxAge: 62, probability: 0.45,
    templates: [
      '六十岁那年，大限将至。你回顾一生，面临着最后的抉择。',
    ],
    effects: { health: -3 },
    choices: [
      { text: '牺牲理想，成全他人', successRate: 0.55, successText: '你将自己的毕生所学传给了年轻一代，在{location}静静地等待终结。{npc}守在你身边："你的一生，是真正意义上的正义。"', failText: '你试图牺牲自己成全他人，但无人理解你的苦心。你的传承被误解，理想随之湮灭', effects: { charisma: 15, luck: 10 }, failEffects: { charisma: -15, luck: -10, health: -20 }, flags: ['fate_sacrifice_ideal'], failFlags: ['fate_sacrifice_ideal_fail'] },
      { text: '放弃重要的人，完成使命', successRate: 0.4, successText: '你选择了完成使命。在{location}的最后战场上，你独自面对最终的敌人。你赢得了胜利，但身边已空无一人', failText: '你放弃了重要的人去完成使命，但最终发现使命本身就是一个谎言。你失去了一切', effects: { strength: 15, intelligence: 10 }, failEffects: { charisma: -20, luck: -20, health: -30 }, flags: ['fate_abandon_loved'], failFlags: ['fate_abandon_loved_fail'] },
      { text: '创造第三条路，打破命运', successRate: 0.2, successText: '你没有选择任何一个极端，而是创造了第三条路。你同时守护了理想与重要的人，打破了命运的轮回。{npc}惊叹："你做到了连英灵都做不到的事。"', failText: '你试图创造第三条路，但命运的车轮无情碾过。你的努力化为泡影，但至少你抗争过', effects: { intelligence: 15, charisma: 15, luck: 10, special: 10 }, failEffects: { intelligence: 5, health: -20, luck: -5 }, flags: ['fate_third_path'], failFlags: ['fate_third_path_fail'] },
    ],
    flags: ['fate_major_60_seen'],
    chainPriority: 10,
  },
  // 境界突破 (14)
  {
    id: 'ft_realm_01', category: 'cultivation', minAge: 10, maxAge: 18, probability: 0.35,
    templates: [
      '你在{location}感受到了魔术回路的觉醒——你正式踏入了魔术师的大门！',
      '{npc}欣慰地看着你："从今天起，你不再是普通人，而是一名真正的魔术师了。"',
    ],
    effects: { realm: 1, strength: 5, intelligence: 5 },
    conditions: [{ stat: 'intelligence', min: 20 }],
  },
  {
    id: 'ft_realm_02', category: 'cultivation', minAge: 15, maxAge: 25, probability: 0.3,
    templates: [
      '你在{location}经历了一场生死之战，魔术回路在压力下大幅扩展——你晋升为魔术使！',
      '你的魔术已经可以影响周围的环境，{npc}赞叹："这种成长速度...你是天才吗？"',
    ],
    effects: { realm: 2, strength: 8, special: 5 },
    conditions: [{ stat: 'strength', min: 40 }],
  },
  {
    id: 'ft_realm_03', category: 'cultivation', minAge: 20, maxAge: 35, probability: 0.25,
    templates: [
      '你在{location}感悟到了魔术的本质，开始触及魔法使的境界——那已非常人所能及！',
      '{legend}的力量在你体内觉醒，你可以施展接近"魔法"级别的奇迹了。',
    ],
    effects: { realm: 3, intelligence: 10, special: 8 },
    conditions: [{ stat: 'intelligence', min: 70 }],
  },
  {
    id: 'ft_realm_04', category: 'cultivation', minAge: 30, maxAge: 50, probability: 0.2,
    templates: [
      '你的魔术造诣已臻巅峰，{location}的魔术师们尊你为冠位魔术师！',
      '{npc}专程从魔术协会赶来，希望你将研究成果贡献给协会。',
    ],
    effects: { realm: 4, charisma: 10, intelligence: 8 },
    conditions: [{ stat: 'special', min: 80 }],
  },
  {
    id: 'ft_realm_05', category: 'cultivation', minAge: 40, maxAge: 70, probability: 0.15,
    templates: [
      '你的魔术太过危险，魔术协会将你列为封印指定——但这恰恰证明了你的实力！',
      '{npc}警告你："封印指定意味着永无止境的追捕。但你已经超越了规则的束缚。"',
    ],
    effects: { realm: 5, strength: 12, special: 10 },
    conditions: [{ stat: 'strength', min: 100 }],
  },
  {
    id: 'ft_realm_06', category: 'cultivation', minAge: 50, maxAge: 100, probability: 0.1,
    templates: [
      '你感应到了根源的召唤，在{location}准备进行通往根源的仪式。',
      '你回顾一生的魔术研究，在{location}寻找触及根源的契机。',
    ],
    effects: { realm: 6, intelligence: 15, special: 12 },
    conditions: [{ stat: 'intelligence', min: 130 }],
  },
  {
    id: 'ft_realm_07', category: 'cultivation', minAge: 80, maxAge: 200, probability: 0.08,
    templates: [
      '你已是抑止力的化身，在{location}守护人理的延续。',
      '你将毕生的感悟融入世界的法则，成为了永恒存在的一部分。',
    ],
    effects: { realm: 7, charisma: 20, special: 15 },
    conditions: [{ stat: 'luck', min: 150 }],
  },
  {
    id: 'ft_realm_08', category: 'cultivation', minAge: 13, maxAge: 20, probability: 0.3,
    templates: [
      '你在{location}的修行中，魔术回路数量增加了一条！',
      '{npc}的指导让你的魔力控制能力大幅提升。',
    ],
    effects: { strength: 5, intelligence: 3 },
  },
  {
    id: 'ft_realm_09', category: 'cultivation', minAge: 18, maxAge: 30, probability: 0.28,
    templates: [
      '你成功炼成了属于自己的魔术礼装，实力大增！',
      '在{location}的工坊中，你完成了一件足以传世的魔术作品。',
    ],
    effects: { special: 6, charisma: 3 },
  },
  {
    id: 'ft_realm_10', category: 'cultivation', minAge: 25, maxAge: 40, probability: 0.25,
    templates: [
      '你领悟了{legend}的魔术奥义，实力再上一个台阶！',
      '{npc}惊叹："这种领悟速度...你已经超越了同辈所有人。"',
    ],
    effects: { intelligence: 8, strength: 5 },
  },
  {
    id: 'ft_realm_11', category: 'cultivation', minAge: 35, maxAge: 55, probability: 0.22,
    templates: [
      '你在{location}与强敌的战斗中发现了自己的魔术弱点，并加以改进。',
      '一次意外的失败反而让你突破了瓶颈，魔术水平大幅提升。',
    ],
    effects: { strength: 6, special: 5, health: -5 },
  },
  {
    id: 'ft_realm_12', category: 'cultivation', minAge: 45, maxAge: 70, probability: 0.18,
    templates: [
      '你开始研究禁忌魔术，在{location}的密室中获得了前所未有的力量。',
      '{legend}的秘密向你敞开，你的魔术已经触及了人类不应涉及的领域。',
    ],
    effects: { special: 10, intelligence: 5, luck: -3 },
  },
  {
    id: 'ft_realm_13', category: 'cultivation', minAge: 60, maxAge: 100, probability: 0.12,
    templates: [
      '你感应到了英灵座的存在，开始研究召唤与契约之术。',
      '在{location}的古籍中，你发现了关于英灵召唤的失传知识。',
    ],
    effects: { charisma: 8, special: 8 },
  },
  {
    id: 'ft_realm_14', category: 'cultivation', minAge: 70, maxAge: 150, probability: 0.1,
    templates: [
      '你的存在本身已经开始影响{location}的魔力流动，你正在向非人存在转变。',
      '{npc}看着你，既敬畏又担忧："你已经走得太远了...还是人类吗？"',
    ],
    effects: { special: 12, health: -5, intelligence: 5 },
  },
  // 身份专属 (40) — 每个身份4个
  // master(御主)
  {
    id: 'ft_ie_master_01', category: 'identity_exclusive', minAge: 10, maxAge: 18, probability: 0.82,
    templates: [
      '你的手上出现了令咒的纹路——你被选为圣杯战争的御主。{npc}告诉你："从明天起，你的生命不再只属于你自己。"',
      '你在{location}被卷入了一场魔术仪式，手背上的令咒纹路灼烧般疼痛。',
    ],
    effects: { strength: 5, luck: 3 },
    flags: ['chain_master_childhood_0'],
    identityExclusive: 'master',
  },
  {
    id: 'ft_ie_master_02', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '你成功召唤出了从者！金色的光芒中，{npc}的身影显现。你们缔结了契约，从此生死与共。',
      '在{location}的召唤阵中，你感受到了英灵的气息。一位强大的存在回应了你的召唤。',
    ],
    effects: { special: 8, charisma: 3 },
    flags: ['chain_master_growth_0'],
    requiredFlags: ['chain_master_childhood_0'],
    identityExclusive: 'master',
    chainPriority: 1,
  },
  {
    id: 'ft_ie_master_03', category: 'identity_exclusive', minAge: 20, maxAge: 35, probability: 0.78,
    templates: [
      '圣杯战争进入了白热化阶段。你的从者提议使用宝具一击定胜负，但这会消耗大量魔力。',
      '你在{location}遭遇了另一位御主。对方提出结盟，但你不知道是否可以信任他。',
    ],
    effects: { strength: 6, intelligence: 4 },
    flags: ['chain_master_adult_0'],
    requiredFlags: ['chain_master_growth_0'],
    identityExclusive: 'master',
    chainPriority: 2,
  },
  {
    id: 'ft_ie_master_04', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.75,
    templates: [
      '战争结束后，你面临着最后的抉择：用圣杯实现愿望，还是放弃圣杯保护从者？',
      '你的从者告诉你一个秘密：圣杯已经被污染了。真正的愿望，从来不需要依靠外物。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_master_special_0'],
    requiredFlags: ['chain_master_adult_0'],
    identityExclusive: 'master',
    chainPriority: 3,
  },
  // servant(从者)
  {
    id: 'ft_ie_servant_01', category: 'identity_exclusive', minAge: 0, maxAge: 5, probability: 0.82,
    templates: [
      '你以英灵之身被召唤到现世。{npc}是你的御主，你们之间的契约正在形成。',
      '在{location}的召唤阵中，你的灵基稳定下来。你回忆起了生前的记忆——那是一段辉煌的史诗。',
    ],
    effects: { strength: 8, special: 5 },
    flags: ['chain_servant_childhood_0'],
    identityExclusive: 'servant',
  },
  {
    id: 'ft_ie_servant_02', category: 'identity_exclusive', minAge: 5, maxAge: 15, probability: 0.8,
    templates: [
      '你作为从者参与了第一场战斗。你的宝具在{location}闪耀，敌人无不胆寒。',
      '{npc}命令你消灭一个敌人，但你发现对方其实是个无辜的普通人。你的剑，犹豫了。',
    ],
    effects: { strength: 6, charisma: 3 },
    flags: ['chain_servant_growth_0'],
    requiredFlags: ['chain_servant_childhood_0'],
    identityExclusive: 'servant',
    chainPriority: 1,
  },
  {
    id: 'ft_ie_servant_03', category: 'identity_exclusive', minAge: 15, maxAge: 30, probability: 0.78,
    templates: [
      '你的御主在战斗中受了重伤。你可以消耗自己的灵基来治愈他，但这意味着你会更快消失。',
      '在{location}的决战中，你发现敌人其实是生前的好友。命运的玩笑，让你不得不与他为敌。',
    ],
    effects: { special: 8, luck: 3 },
    flags: ['chain_servant_adult_0'],
    requiredFlags: ['chain_servant_growth_0'],
    identityExclusive: 'servant',
    chainPriority: 2,
  },
  {
    id: 'ft_ie_servant_04', category: 'identity_exclusive', minAge: 25, maxAge: 50, probability: 0.75,
    templates: [
      '战争即将结束。你可以选择回归英灵座，或者留在现世——但后者需要付出巨大的代价。',
      '你的御主用最后一划令咒命令你："活下去！"你感受到了前所未有的情感冲击。',
    ],
    effects: { charisma: 10, health: 5 },
    flags: ['chain_servant_special_0'],
    requiredFlags: ['chain_servant_adult_0'],
    identityExclusive: 'servant',
    chainPriority: 3,
  },
  // magus(魔术师)
  {
    id: 'ft_ie_magus_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.82,
    templates: [
      '你出生在一个古老的魔术世家。从小，你就被教导：魔术师的目标是到达根源。',
      '{npc}是你的魔术导师，他告诉你："魔术不是力量，是通往真理的道路。"',
    ],
    effects: { intelligence: 6, charisma: 2 },
    flags: ['chain_magus_childhood_0'],
    identityExclusive: 'magus',
  },
  {
    id: 'ft_ie_magus_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.8,
    templates: [
      '你在{location}进行魔术实验时意外打开了一个小型次元裂缝。虽然只有一瞬间，但你感受到了根源的气息。',
      '你的魔术研究引起了魔术协会的注意。{npc}警告你："有些知识，知道了就再也无法回头。"',
    ],
    effects: { intelligence: 8, special: 3 },
    flags: ['chain_magus_growth_0'],
    requiredFlags: ['chain_magus_childhood_0'],
    identityExclusive: 'magus',
    chainPriority: 1,
  },
  {
    id: 'ft_ie_magus_03', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.78,
    templates: [
      '你的研究触及了禁忌领域。魔术协会派人来阻止你，但你已经接近突破。',
      '在{location}的深夜，你成功施展了一个理论上不可能的魔术。{npc}震惊地看着你："你做到了...你触碰到了边缘。"',
    ],
    effects: { special: 10, intelligence: 5 },
    flags: ['chain_magus_adult_0'],
    requiredFlags: ['chain_magus_growth_0'],
    identityExclusive: 'magus',
    chainPriority: 2,
  },
  {
    id: 'ft_ie_magus_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '你终于站在了根源的入口前。但{npc}告诉你："进入根源意味着失去自我。你还确定吗？"',
      '你放弃了进入根源，选择将自己的研究成果留给后人。你说："真理不是用来占据的，是用来追寻的。"',
    ],
    effects: { charisma: 8, intelligence: 10 },
    flags: ['chain_magus_special_0'],
    requiredFlags: ['chain_magus_adult_0'],
    identityExclusive: 'magus',
    chainPriority: 3,
  },
  // church(教会代行者)
  {
    id: 'ft_ie_church_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.82,
    templates: [
      '你在教会的孤儿院长大。从小，你就被教导要消灭异端，保护人类的信仰。',
      '{npc}是你的导师，一位资深的代行者。他教你如何使用黑键和洗礼咏唱。',
    ],
    effects: { strength: 5, charisma: 3 },
    flags: ['chain_church_childhood_0'],
    identityExclusive: 'church',
  },
  {
    id: 'ft_ie_church_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.8,
    templates: [
      '你完成了第一次异端讨伐任务。当你将黑键刺入死徒的心脏时，你感受到了前所未有的冲击。',
      '在{location}的任务中，你发现所谓的"异端"其实是一个不愿伤害人类的好吸血鬼。你的信念，动摇了。',
    ],
    effects: { strength: 6, luck: 2 },
    flags: ['chain_church_growth_0'],
    requiredFlags: ['chain_church_childhood_0'],
    identityExclusive: 'church',
    chainPriority: 1,
  },
  {
    id: 'ft_ie_church_03', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.78,
    templates: [
      '教会命令你消灭{location}的一个"威胁"。但你调查后发现，那只是一个想要平静生活的混血儿。',
      '你在执行任务时遇到了{npc}。他说："代行者不是杀戮工具。记住，我们保护的是人，不是教条。"',
    ],
    effects: { charisma: 5, intelligence: 4 },
    flags: ['chain_church_adult_0'],
    requiredFlags: ['chain_church_growth_0'],
    identityExclusive: 'church',
    chainPriority: 2,
  },
  {
    id: 'ft_ie_church_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '你最终离开了教会，成为了独立的代行者。你不再盲目服从命令，而是用自己的判断来决定谁是真正的敌人。',
      '{npc}在你离开时对你说："你走了一条比我更艰难的路。但也许，这才是正确的路。"',
    ],
    effects: { luck: 8, charisma: 5 },
    flags: ['chain_church_special_0'],
    requiredFlags: ['chain_church_adult_0'],
    identityExclusive: 'church',
    chainPriority: 3,
  },
  // dead_apostle(死徒)
  {
    id: 'ft_ie_dead_apostle_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.82,
    templates: [
      '你发现自己对阳光过敏，而且越来越渴望血液。{npc}告诉你："你已经被初拥了，欢迎来到永生的世界。"',
      '在{location}的深夜，你第一次吸血。那种快感让你恐惧，又让你上瘾。',
    ],
    effects: { strength: 6, health: 5 },
    flags: ['chain_dead_apostle_childhood_0'],
    identityExclusive: 'dead_apostle',
  },
  {
    id: 'ft_ie_dead_apostle_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.8,
    templates: [
      '你开始学习死徒的固有能力。在{location}的黑暗中，你发现自己可以操控他人的血液。',
      '你的吸血冲动越来越强烈。{npc}警告你："如果不能控制欲望，你就会变成没有理智的食尸鬼。"',
    ],
    effects: { special: 7, strength: 3 },
    flags: ['chain_dead_apostle_growth_0'],
    requiredFlags: ['chain_dead_apostle_childhood_0'],
    identityExclusive: 'dead_apostle',
    chainPriority: 1,
  },
  {
    id: 'ft_ie_dead_apostle_03', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.78,
    templates: [
      '你遇到了教会代行者的追杀。在{location}的逃亡中，你不得不伤害无辜的人来恢复体力。',
      '你开始质疑自己的存在意义。永生真的是祝福吗？还是一种无法解脱的诅咒？',
    ],
    effects: { strength: 8, luck: -3 },
    flags: ['chain_dead_apostle_adult_0'],
    requiredFlags: ['chain_dead_apostle_growth_0'],
    identityExclusive: 'dead_apostle',
    chainPriority: 2,
  },
  {
    id: 'ft_ie_dead_apostle_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '你找到了控制吸血冲动的方法——通过吸取魔力而非血液来维持生命。你说："我不是怪物，我只是另一种生命形式。"',
      '{npc}告诉你一个秘密：存在一种方法可以让死徒恢复人类之身。但那需要牺牲另一个人的生命。你拒绝了。',
    ],
    effects: { intelligence: 8, charisma: 5 },
    flags: ['chain_dead_apostle_special_0'],
    requiredFlags: ['chain_dead_apostle_adult_0'],
    identityExclusive: 'dead_apostle',
    chainPriority: 3,
  },
  // guardian_fate(守护者)
  {
    id: 'ft_ie_guardian_01', category: 'identity_exclusive', minAge: 0, maxAge: 5, probability: 0.82,
    templates: [
      '你与抑止力签订了契约。从此，你将永远守护人理，直到时间的尽头。',
      '在{location}的虚空中，你的意识被重塑。{npc}告诉你："你现在是守护者了。你的使命是消灭威胁人理的存在。"',
    ],
    effects: { strength: 8, special: 5 },
    flags: ['chain_guardian_childhood_0'],
    identityExclusive: 'guardian_fate',
  },
  {
    id: 'ft_ie_guardian_02', category: 'identity_exclusive', minAge: 5, maxAge: 15, probability: 0.8,
    templates: [
      '你被派遣到{location}消灭一个即将毁灭世界的威胁。你的弓矢穿越时空，精准命中目标。',
      '你遇到了一个过去的自己——还是一个普通人类的自己。你无法与他相认，只能默默守护。',
    ],
    effects: { strength: 6, luck: 3 },
    flags: ['chain_guardian_growth_0'],
    requiredFlags: ['chain_guardian_childhood_0'],
    identityExclusive: 'guardian_fate',
    chainPriority: 1,
  },
  {
    id: 'ft_ie_guardian_03', category: 'identity_exclusive', minAge: 15, maxAge: 30, probability: 0.78,
    templates: [
      '你厌倦了无尽的杀戮。每一次守护都意味着无数生命的消逝。你开始质疑抑止力的正义性。',
      '在{location}的任务中，你故意放走了一个孩子——那个孩子长大后将成为威胁人理的存在。但你无法下手。',
    ],
    effects: { charisma: 5, intelligence: 4 },
    flags: ['chain_guardian_adult_0'],
    requiredFlags: ['chain_guardian_growth_0'],
    identityExclusive: 'guardian_fate',
    chainPriority: 2,
  },
  {
    id: 'ft_ie_guardian_04', category: 'identity_exclusive', minAge: 25, maxAge: 50, probability: 0.75,
    templates: [
      '你最终反抗了抑止力。在{location}的虚空中，你用自己的力量创造了一个平行世界——在那里，所有人都获得了幸福。',
      '{npc}看着你，既悲伤又欣慰："你是第一个反抗抑止力却未被消灭的守护者。也许，这就是希望。"',
    ],
    effects: { special: 10, luck: 5 },
    flags: ['chain_guardian_special_0'],
    requiredFlags: ['chain_guardian_adult_0'],
    identityExclusive: 'guardian_fate',
    chainPriority: 3,
  },
  // ordinary_fate(普通人)
  {
    id: 'ft_ie_ordinary_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.82,
    templates: [
      '你是一个普通人，没有魔术回路，没有特殊能力。你在{location}过着平凡的生活。',
      '但{npc}告诉你："平凡不是软弱。有时候，最普通的人反而能创造奇迹。"',
    ],
    effects: { luck: 5, charisma: 3 },
    flags: ['chain_ordinary_childhood_0'],
    identityExclusive: 'ordinary_fate',
  },
  {
    id: 'ft_ie_ordinary_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.8,
    templates: [
      '你被卷入了圣杯战争。没有魔术，没有从者，你只能依靠智慧和运气生存。',
      '在{location}的战斗中，你用一把普通的匕首偷袭了一位御主。虽然不光彩，但你活了下来。',
    ],
    effects: { intelligence: 5, luck: 4 },
    flags: ['chain_ordinary_growth_0'],
    requiredFlags: ['chain_ordinary_childhood_0'],
    identityExclusive: 'ordinary_fate',
    chainPriority: 1,
  },
  {
    id: 'ft_ie_ordinary_03', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.78,
    templates: [
      '你的勇气和机智赢得了从者的尊重。一位失去御主的从者主动与你缔结了契约！',
      '在{location}的危机中，你用自己的身体保护了重要的人。你的"平凡"，成为了最强大的力量。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_ordinary_adult_0'],
    requiredFlags: ['chain_ordinary_growth_0'],
    identityExclusive: 'ordinary_fate',
    chainPriority: 2,
  },
  {
    id: 'ft_ie_ordinary_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '战争结束了。你作为普通人活了下来，成为了传奇。人们称你为"最不可思议的御主"。',
      '你回到了平凡的生活。但你知道，那份勇气和信念将永远伴随着你。',
    ],
    effects: { charisma: 10, luck: 5 },
    flags: ['chain_ordinary_special_0'],
    requiredFlags: ['chain_ordinary_adult_0'],
    identityExclusive: 'ordinary_fate',
    chainPriority: 3,
  },
  // alchemist_fate(炼金术师)
  {
    id: 'ft_ie_alchemist_fate_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.82,
    templates: [
      '你从小就喜欢"混合东西"。在{location}的家中，你把各种材料混在一起——结果制造出了发光的液体。',
      '作为炼金术师的苗子，你对"转化"有着天生的敏感。{npc}说你可以"听见物质渴望成为黄金的声音"。',
    ],
    effects: { intelligence: 5, special: 3 },
    flags: ['chain_alchemist_fate_childhood_0'],
    identityExclusive: 'alchemist_fate',
  },
  {
    id: 'ft_ie_alchemist_fate_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.8,
    templates: [
      '你成功炼制出了人生第一瓶"贤者之石"的仿制品——虽然只有正品万分之一的效果，但已足够惊人。',
      '在{location}的实验中，你意外发现了一种新的元素转换公式。{npc}震惊不已："这是...全新的炼金术体系！"',
    ],
    effects: { intelligence: 8, special: 4 },
    flags: ['chain_alchemist_fate_growth_0'],
    requiredFlags: ['chain_alchemist_fate_childhood_0'],
    identityExclusive: 'alchemist_fate',
    chainPriority: 1,
  },
  {
    id: 'ft_ie_alchemist_fate_03', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.78,
    templates: [
      '你开始研究人体炼成——那是最禁忌的领域。{npc}警告你："有些门一旦打开，就再也关不上了。"',
      '在{location}的密室中，你成功完成了一次小规模的人体炼成。虽然付出了代价，但你的炼金术水平大幅提升。',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_alchemist_fate_adult_0'],
    requiredFlags: ['chain_alchemist_fate_growth_0'],
    identityExclusive: 'alchemist_fate',
    chainPriority: 2,
  },
  {
    id: 'ft_ie_alchemist_fate_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '你最终放弃了追求完美的黄金，转而研究如何让所有人都能使用的炼金术。',
      '你说："真正的贤者之石不是黄金，而是让每个人都能获得幸福的方法。"{npc}微笑着点头。',
    ],
    effects: { charisma: 8, intelligence: 5 },
    flags: ['chain_alchemist_fate_special_0'],
    requiredFlags: ['chain_alchemist_fate_adult_0'],
    identityExclusive: 'alchemist_fate',
    chainPriority: 3,
  },
  // archaeologist_fate(考古学家)
  {
    id: 'ft_ie_archaeologist_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.82,
    templates: [
      '你从小就对古老的事物着迷。在{location}的废墟中，你发现了第一块刻有神秘符文的石板。',
      '{npc}是你的启蒙老师，一位资深的考古学家。他教你如何解读古代魔术文明的遗迹。',
    ],
    effects: { intelligence: 5, luck: 3 },
    flags: ['chain_archaeologist_childhood_0'],
    identityExclusive: 'archaeologist_fate',
  },
  {
    id: 'ft_ie_archaeologist_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.8,
    templates: [
      '你在{location}的考古发掘中发现了一件圣遗物。虽然破碎，但你感受到了其中蕴含的强大魔力。',
      '你的研究成果引起了魔术协会的关注。{npc}警告你："有些历史，最好让它永远埋藏在地下。"',
    ],
    effects: { special: 6, intelligence: 3 },
    flags: ['chain_archaeologist_growth_0'],
    requiredFlags: ['chain_archaeologist_childhood_0'],
    identityExclusive: 'archaeologist_fate',
    chainPriority: 1,
  },
  {
    id: 'ft_ie_archaeologist_03', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.78,
    templates: [
      '你发现了{legend}的陵墓。在{location}的深处，你找到了关于圣杯战争起源的惊天秘密。',
      '你的发现让你成为了各方势力追逐的目标。你不得不一边逃亡，一边继续研究。',
    ],
    effects: { intelligence: 8, luck: 4 },
    flags: ['chain_archaeologist_adult_0'],
    requiredFlags: ['chain_archaeologist_growth_0'],
    identityExclusive: 'archaeologist_fate',
    chainPriority: 2,
  },
  {
    id: 'ft_ie_archaeologist_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '你最终公布了所有发现。虽然引起了轩然大波，但你相信：真相永远比谎言更有价值。',
      '{npc}在你晚年时说："你不仅是一个考古学家，你是历史的守护者。"',
    ],
    effects: { charisma: 8, intelligence: 5 },
    flags: ['chain_archaeologist_special_0'],
    requiredFlags: ['chain_archaeologist_adult_0'],
    identityExclusive: 'archaeologist_fate',
    chainPriority: 3,
  },
  // supervisor(圣杯战争监督)
  {
    id: 'ft_ie_supervisor_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.82,
    templates: [
      '你在教会中长大，被培养为未来的圣杯战争监督。从小，你就被教导维持秩序的重要性。',
      '{npc}是你的导师，一位资深的监督者。他教你如何判断是非，如何维持表面的公正。',
    ],
    effects: { charisma: 5, intelligence: 3 },
    flags: ['chain_supervisor_childhood_0'],
    identityExclusive: 'supervisor',
  },
  {
    id: 'ft_ie_supervisor_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.8,
    templates: [
      '你第一次担任圣杯战争的辅助监督。在{location}的战场上，你目睹了御主与从者的生死厮杀。',
      '一位御主向你求助，但你必须保持中立。那种无力感，让你彻夜难眠。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_supervisor_growth_0'],
    requiredFlags: ['chain_supervisor_childhood_0'],
    identityExclusive: 'supervisor',
    chainPriority: 1,
  },
  {
    id: 'ft_ie_supervisor_03', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.78,
    templates: [
      '你发现监督者内部有腐败——有人在暗中操纵圣杯战争的结果。你会揭发他们吗？',
      '在{location}的一次调查中，你发现了教会与魔术协会之间的秘密交易。真相让你心寒。',
    ],
    effects: { intelligence: 6, charisma: 3 },
    flags: ['chain_supervisor_adult_0'],
    requiredFlags: ['chain_supervisor_growth_0'],
    identityExclusive: 'supervisor',
    chainPriority: 2,
  },
  {
    id: 'ft_ie_supervisor_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '你最终选择了揭发腐败。虽然失去了职位，但你赢得了所有人的尊重。',
      '你说："监督者不是权力的工具，而是公正的守护者。"{npc}在你的墓前放了一朵白花。',
    ],
    effects: { charisma: 10, luck: 5 },
    flags: ['chain_supervisor_special_0'],
    requiredFlags: ['chain_supervisor_adult_0'],
    identityExclusive: 'supervisor',
    chainPriority: 3,
  },
];
