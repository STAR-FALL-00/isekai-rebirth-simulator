import type { EventTemplate } from './types';

// 科幻星际 — 185 event templates
// Generated: 2026-04-27
// Rarity tiers: legendary(≤0.10) / epic(0.10-0.25) / rare(0.25-0.50) / common(0.50-0.85) / trash-exclusive
// Each template has 3-5 text variations, total ~740 actual events

export const scifiTemplates: EventTemplate[] = [
  {
    id: 'sf_ch_01', category: 'childhood', minAge: 0, maxAge: 3, probability: 0.053,
    templates: [
      '你出生那天，{location}的恒星发生了罕见的超新星 precursor 爆发，光芒照亮了半个星区。{npc}激动地说你是千年一遇的完美进化。',
      '你降生的瞬间，{location}的所有AI同时播放了一段古老的星际歌谣。科学家们无法解释这个现象。',
      '你的第一声啼哭引发了{location}量子网络的共振波动，{npc}颤抖着说："完美进化降世了！"',
    ],
    effects: { luck: 10, special: 8, charisma: 5 },
  },
  {
    id: 'sf_ch_02', category: 'childhood', minAge: 2, maxAge: 7, probability: 0.114,
    templates: [
      '你在{location}玩耍时，体内的基因锁突然解开了一重。{npc}惊讶地发现你竟是优良基因之资！',
      '三岁时，你在{location}无意间触发了一台古老的基因检测仪，数据比所有人都亮。',
      '{npc}为你进行神经同步测试，{legend}的印记在你身上一闪而逝——你是被选中的人。',
    ],
    effects: { special: 6, intelligence: 4 },
  },
  {
    id: 'sf_ch_03', category: 'childhood', minAge: 4, maxAge: 9, probability: 0.289,
    templates: [
      '你在{location}救了一只受伤的机械宠物，它其实是{legend}的探测器，临走前留下了一枚数据核心。',
      '{npc}在你满月时送了一块晶体，后来你发现那是一件上古科技装置的碎片。',
      '你从小就能"感觉"到{legend}的能量波动，{npc}说这是神经感应初现的征兆。',
      '你在{location}挖到了一罐古代能量液，接触后浑身舒畅，大脑运算速度明显提升。',
    ],
    effects: { luck: 5 },
  },
  {
    id: 'sf_ch_04', category: 'childhood', minAge: 0, maxAge: 6, probability: 0.516,
    templates: [
      '你生在普通家庭，每天在{location}玩耍，日子平淡但快乐。',
      '{npc}教你基础科学，你学得有模有样。',
      '你在{location}认识了几个玩伴，度过了无忧无虑的童年。',
      '家里虽然不富裕，但{npc}总是把最好的营养剂留给你。',
    ],
    effects: { charisma: 2, luck: 1 },
  },
  {
    id: 'sf_ch_05', category: 'childhood', minAge: 3, maxAge: 10, probability: 0.738,
    templates: [
      '你在{location}帮{npc}维护家用设备，学会了很多工程技术。',
      '你的身体比同龄人强壮，{npc}说你是驾驶机甲的好料子。',
      '你喜欢在{location}观察星空，常常一看就是一整天。',
      '{npc}给你讲了一个关于{legend}的故事，你听得入了迷。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },
  {
    id: 'sf_gr_01', category: 'growth', minAge: 15, maxAge: 20, probability: 0.049,
    templates: [
      '你在{location}进行了三日三夜的神经深度训练，出关时眼中精光四射——你竟在实战中领悟了{legend}的传承！',
      '一场太阳风暴夜，你在{location}被高能辐射击中非但没死，反而解锁了基因中的隐藏序列！',
      '{legend}的数据残魂在{location}与你相遇，将毕生科技感悟传授于你。',
    ],
    effects: { intelligence: 10, special: 8, strength: 5 },
  },
  {
    id: 'sf_gr_02', category: 'growth', minAge: 14, maxAge: 22, probability: 0.145,
    templates: [
      '你在{location}钻研三年，终于突破了困扰多年的科技瓶颈，实力大增！',
      '{npc}带你外出星际旅行，你在{location}击败了一个强敌，获得了珍贵的战利品。',
      '你发现了{legend}留下的试炼场，通过考验后获得了意想不到的收获。',
    ],
    effects: { strength: 6, special: 5 },
  },
  {
    id: 'sf_gr_03', category: 'growth', minAge: 13, maxAge: 24, probability: 0.341,
    templates: [
      '你在{location}遇到了一生的宿敌，你们不打不相识，反而成为了朋友。',
      '{npc}传授你一项高级技术，你花了整整一年才掌握，但威力惊人。',
      '你在{location}救了一个被追杀的人，他为了报答你，送了一件稀有装备。',
      '你和同辈在{location}比试机甲驾驶，虽然输了但收获巨大。',
    ],
    effects: { charisma: 4 },
  },
  {
    id: 'sf_gr_04', category: 'growth', minAge: 13, maxAge: 20, probability: 0.586,
    templates: [
      '你每天在{location}勤奋训练，虽然进步缓慢但根基扎实。',
      '{npc}督促你学习，你不敢懈怠。',
      '你在{location}读了很多科技文献，眼界开阔了不少。',
      '平平淡淡的一年，你在{location}默默积累着。',
    ],
    effects: { intelligence: 2, strength: 2 },
  },
  {
    id: 'sf_gr_05', category: 'growth', minAge: 16, maxAge: 25, probability: 0.684,
    templates: [
      '你在{location}结交了一些朋友，互相切磋进步。',
      '{npc}给你讲了很多前辈的故事，你深受启发。',
      '你在{location}处理了一些飞船杂务，锻炼了自己的能力。',
      '这一年没什么特别的事发生，但你感觉自己在慢慢变强。',
    ],
    effects: { charisma: 2, luck: 2 },
  },
  {
    id: 'sf_ad_01', category: 'adult', minAge: 28, maxAge: 40, probability: 0.113,
    templates: [
      '你在{location}建立了自己的研究团队/舰队，广纳贤才，一时间名声大噪。',
      '你参与了{legend}相关的大规模星际事件，在关键时刻力挽狂澜。',
      '你在{location}建立了属于自己的势力，各方强者纷纷来投。',
    ],
    effects: { charisma: 8, strength: 5, special: 5 },
  },
  {
    id: 'sf_ad_02', category: 'adult', minAge: 26, maxAge: 45, probability: 0.283,
    templates: [
      '你在{location}收下了第一个学生/下属，将自己的所学倾囊相授。',
      '你和宿敌在{location}进行了最终决战，胜负难分。',
      '你成功研发/制造了传说中的科技装备，引起了不小的轰动。',
    ],
    effects: { intelligence: 5, special: 4 },
  },
  {
    id: 'sf_ad_03', category: 'adult', minAge: 26, maxAge: 50, probability: 0.6,
    templates: [
      '你在{location}处理日常事务，势力稳步发展。',
      '{npc}来找你帮忙，你出手解决了他的难题。',
      '你在{location}度过了平静的一年，能力稳步提升。',
      '平平淡淡的一年，你在{location}默默研究。',
    ],
    effects: { strength: 2, intelligence: 2, special: 2 },
  },
  {
    id: 'sf_el_01', category: 'elder', minAge: 50, maxAge: 120, probability: 0.649,
    templates: [
      '你在{location}的星舰/空间站中钻研更高科技，试图突破当前等级的限制。',
      '你游历银河系，在{location}见识了各种奇异的科技现象，眼界大开。',
      '你开始招收学生，在{location}传授毕生所学的星际知识。',
    ],
    effects: { intelligence: 3, special: 2 },
  },
  {
    id: 'sf_el_02', category: 'elder', minAge: 100, maxAge: 220, probability: 0.324,
    templates: [
      '你的科技造诣已臻巅峰，成为了{location}的传说级科学家/指挥官。',
      '{npc}专程从联邦科学院赶来，希望你将研究成果贡献给学术界。',
      '你将毕生科技心得整理成《星际百科全书》，存放在{location}的数据库中。',
    ],
    effects: { intelligence: 8, charisma: 5 },
  },
  {
    id: 'sf_el_03', category: 'elder', minAge: 200, maxAge: 400, probability: 0.373,
    templates: [
      '你感应到了超维空间的召唤，在{location}准备进行维度穿越实验。',
      '你回顾一生的科技研究，在{location}寻找触及星神境界的契机。',
      '{npc}带来消息：银河系边缘出现了维度裂隙，通往更高维度的通道可能开启。',
    ],
    effects: { special: 10, intelligence: 5 },
  },
  {
    id: 'sf_el_04', category: 'elder', minAge: 400, maxAge: 700, probability: 0.158,
    templates: [
      '你已是超维生命，在{location}静待成为星神的那一刻。',
      '你将毕生对宇宙本质的感悟刻入永恒数据晶体，留给后世有缘人。',
      '{npc}问你为何还不升华，你笑答："我在等一个值得托付星际火种的学徒。"',
    ],
    effects: { charisma: 10, special: 5 },
  },
  {
    id: 'sf_cb_01', category: 'combat', minAge: 20, maxAge: 40, probability: 0.049,
    templates: [
      '你在{location}以一己之力对抗十位同阶强者，最终大获全胜，一战成名！',
      '{legend}的敌人找上了你，你在{location}展开惊天大战，竟越级将其斩杀！',
      '你为了保护{location}的居民，独自对抗入侵的{legend}军团，创造了不可能的奇迹。',
    ],
    effects: { strength: 12, charisma: 8, health: -10 },
  },
  {
    id: 'sf_cb_02', category: 'combat', minAge: 18, maxAge: 45, probability: 0.141,
    templates: [
      '你参与了一场改变{location}格局的大规模星际战争，立下赫赫战功。',
      '{npc}挑战你的权威，你们在{location}大战三百回合，最终你险胜一招。',
      '你在{location}发现了{legend}留下的战斗试炼场，通过了生死考验。',
    ],
    effects: { strength: 8, charisma: 4, health: -5 },
  },
  {
    id: 'sf_cb_03', category: 'combat', minAge: 15, maxAge: 35, probability: 0.277,
    templates: [
      '你在{location}遭遇强敌，展开了一场生死搏斗，最终险胜。',
      '你和{npc}在{location}切磋机甲操控，双方都获益匪浅。',
      '你为了保护同伴，在{location}与敌人激战，受了轻伤。',
    ],
    effects: { strength: 5, health: -3 },
  },
  {
    id: 'sf_cb_04', category: 'combat', minAge: 25, maxAge: 50, probability: 0.38,
    templates: [
      '你在{location}参与了一场小规模冲突，表现出色。',
      '{npc}偷袭你，你在{location}勉强将其击退。',
      '你在{location}发现了敌人的据点，果断出击。',
    ],
    effects: { strength: 4, luck: 2 },
  },
  {
    id: 'sf_cb_05', category: 'combat', minAge: 15, maxAge: 40, probability: 0.554,
    templates: [
      '你在{location}进行了日常机甲训练，技艺略有精进。',
      '你和同伴在{location}对练射击，互相学习。',
      '你在{location}演练新学的战术，逐渐熟练。',
    ],
    effects: { strength: 2 },
  },
  {
    id: 'sf_cb_06', category: 'combat', minAge: 30, maxAge: 60, probability: 0.703,
    templates: [
      '你在{location}指导后辈战斗技巧，自己也有所感悟。',
      '一场友好的机甲比试在{location}举行，你获得了不错的名次。',
      '你在{location}观摩高手对决，学到了不少实战经验。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },
  {
    id: 'sf_rm_01', category: 'romance', minAge: 18, maxAge: 30, probability: 0.062,
    templates: [
      '你在{location}与{npc}相遇的瞬间，舰船的AI突然播放了一首古老的情歌——你们的数据档案显示，你们的基因匹配率是99.999%。',
      '{npc}为了救你，不惜耗尽飞船的最后一点能源。你跪在{location}发誓：此生不负。',
      '你们的故事被{legend}记载，成为了{location}永恒的传说。',
    ],
    effects: { charisma: 10, luck: 8, health: 5 },
  },
  {
    id: 'sf_rm_02', category: 'romance', minAge: 20, maxAge: 35, probability: 0.124,
    templates: [
      '你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。',
      '{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。',
      '你们经历了{legend}的考验，感情反而更加坚不可摧。',
    ],
    effects: { charisma: 6, luck: 4 },
  },
  {
    id: 'sf_rm_03', category: 'romance', minAge: 16, maxAge: 30, probability: 0.265,
    templates: [
      '你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。',
      '你和{npc}在{location}的观景舱下相会，互诉衷肠。',
      '{npc}因为你的才华而倾心，主动向你示好。',
    ],
    effects: { charisma: 4, luck: 3 },
  },
  {
    id: 'sf_rm_04', category: 'romance', minAge: 25, maxAge: 40, probability: 0.4,
    templates: [
      '你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。',
      '{npc}送你一件定情信物，你珍藏在身边。',
      '你们一起在{location}经历了危险，感情更加深厚。',
    ],
    effects: { charisma: 3, luck: 2 },
  },
  {
    id: 'sf_rm_05', category: 'romance', minAge: 20, maxAge: 45, probability: 0.582,
    templates: [
      '你在{location}认识了一个有趣的人，但关系尚不明确。',
      '{npc}对你有些好感，但你还没想好如何回应。',
      '你在{location}参加了一场星际聚会，结识了不少异性。',
    ],
    effects: { charisma: 2 },
  },
  {
    id: 'sf_rm_06', category: 'romance', minAge: 30, maxAge: 50, probability: 0.701,
    templates: [
      '你和{npc}保持着朋友以上、恋人未满的关系。',
      '你在{location}看到了别人恩爱的场景，心中有些羡慕。',
      '这一年感情上没有太大的波澜，你专注于其他事情。',
    ],
    effects: { luck: 1 },
  },
  {
    id: 'sf_cultivation_01', category: 'cultivation', minAge: 40, maxAge: 70, probability: 0.063,
    templates: [
      '你在{location}的实验室进行深度实验九九八十一天，完成时全舰系统共鸣——你已触摸到了{legend}的科技境界！',
      '你的科技等级达到了前所未有的高度，{location}的能量场因为你而沸腾。',
      '{legend}的数据残魂亲自降临{location}，为你指点科技大道。',
    ],
    effects: { special: 12, intelligence: 10, strength: 5 },
  },
  {
    id: 'sf_cultivation_02', category: 'cultivation', minAge: 30, maxAge: 60, probability: 0.156,
    templates: [
      '你成功将{legend}的科技融会贯通，实力暴涨！',
      '你在{location}经历了一场科技奇遇，能力大涨，连{npc}都震惊不已。',
      '你突破了困扰多年的科技瓶颈，{location}的能量异象持续了三日三夜。',
    ],
    effects: { special: 8, intelligence: 5 },
  },
  {
    id: 'sf_cultivation_03', category: 'cultivation', minAge: 20, maxAge: 50, probability: 0.254,
    templates: [
      '你在{location}的实验室进行封闭式研究，领悟了新的科技等级。',
      '{npc}传授你一项高级技术，你勤加练习，终于大成。',
      '你在{location}发现了一处能量充沛的实验室，研究事半功倍。',
    ],
    effects: { special: 5, intelligence: 3 },
  },
  {
    id: 'sf_cultivation_04', category: 'cultivation', minAge: 35, maxAge: 65, probability: 0.419,
    templates: [
      '你在科技研究中遇到了瓶颈，{npc}指点你突破。',
      '你在{location}经历了一场科技奇遇，能力有所精进。',
      '你成功研发/制造了辅助研究的科技装备，效果显著。',
    ],
    effects: { special: 4, strength: 2 },
  },
  {
    id: 'sf_cultivation_05', category: 'cultivation', minAge: 13, maxAge: 40, probability: 0.51,
    templates: [
      '你在{location}按部就班地学习和研究，虽然没有突破但根基更加稳固。',
      '{npc}检查了你的研究进度，表示满意。',
      '你在{location}研读科技文献，对一些技术有了新的理解。',
    ],
    effects: { special: 2, intelligence: 1 },
  },
  {
    id: 'sf_cultivation_06', category: 'cultivation', minAge: 40, maxAge: 80, probability: 0.724,
    templates: [
      '你在{location}巩固已有的科技等级，为下一次突破做准备。',
      '这一年研究进度平平，但你没有气馁。',
      '{npc}提醒你不可急于求成，你虚心接受。',
    ],
    effects: { special: 2 },
  },
  {
    id: 'sf_ex_01', category: 'exploration', minAge: 25, maxAge: 50, probability: 0.053,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的核心科技传承，获得了改变命运的机缘！',
      '你在{location}找到了通往另一个维度的入口，{legend}的秘密向你敞开。',
      '你解开了一个困扰世人万年的科技谜题，{location}的真相让你震惊。',
    ],
    effects: { luck: 10, intelligence: 8, special: 6 },
  },
  {
    id: 'sf_ex_02', category: 'exploration', minAge: 20, maxAge: 45, probability: 0.116,
    templates: [
      '你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。',
      '你探索了一处危险的{location}，九死一生后带回了珍贵的科技样本。',
      '{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。',
    ],
    effects: { luck: 6, strength: 4 },
  },
  {
    id: 'sf_ex_03', category: 'exploration', minAge: 15, maxAge: 40, probability: 0.258,
    templates: [
      '你深入{location}探险，发现了未知的秘密。',
      '你在{location}找到了一些有价值的物品，收获颇丰。',
      '你在{location}迷路了，却意外发现了一处隐蔽的科研基地。',
    ],
    effects: { luck: 4, strength: 2 },
  },
  {
    id: 'sf_ex_04', category: 'exploration', minAge: 30, maxAge: 55, probability: 0.428,
    templates: [
      '你在{location}发现了一些古老的全息记录，记录着失落的文明。',
      '你探索了一处废弃的{location}，找到了一些有用的物资。',
      '{npc}带你进入了一个秘密的{location}，你大开眼界。',
    ],
    effects: { intelligence: 3, luck: 3 },
  },
  {
    id: 'sf_ex_05', category: 'exploration', minAge: 13, maxAge: 35, probability: 0.557,
    templates: [
      '你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。',
      '你跟着{npc}去{location}采集了一些材料。',
      '你在{location}发现了一些普通的能源晶体，聊胜于无。',
    ],
    effects: { luck: 2 },
  },
  {
    id: 'sf_ex_06', category: 'exploration', minAge: 35, maxAge: 70, probability: 0.688,
    templates: [
      '你在{location}进行了常规的巡查，一切正常。',
      '你重访了以前去过的{location}，有了一些新的发现。',
      '你在{location}休息了一段时间，养精蓄锐。',
    ],
    effects: { health: 2 },
  },
  {
    id: 'sf_ws_01', category: 'world_story', minAge: 40, maxAge: 70, probability: 0.048,
    templates: [
      '{legend}的封印彻底破碎，整个银河系陷入了前所未有的动荡，你被卷入了漩涡中心！',
      '一场席卷整个银河的大战爆发了，{location}首当其冲，你必须做出选择。',
      '银河的规则开始改变，{legend}的意志降临，所有文明都受到了影响。',
    ],
    effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 },
  },
  {
    id: 'sf_ws_02', category: 'world_story', minAge: 30, maxAge: 60, probability: 0.15,
    templates: [
      '你发现{location}隐藏着改变银河的秘密，各方势力为此展开了明争暗斗。',
      '{npc}告诉你一个关于银河起源的惊天秘密，你的世界观被彻底颠覆。',
      '传说中的{legend}即将降临，所有文明都在做准备，{location}的气氛紧张到了极点。',
    ],
    effects: { intelligence: 6, charisma: 4 },
  },
  {
    id: 'sf_ws_03', category: 'world_story', minAge: 25, maxAge: 50, probability: 0.3,
    templates: [
      '{location}附近发生了局部冲突，你不得不卷入其中。',
      '{npc}带来了一个重要的消息，可能影响到{location}的未来。',
      '你注意到了{location}的一些异常现象，似乎有什么大事要发生。',
    ],
    effects: { charisma: 3, luck: 3 },
  },
  {
    id: 'sf_ws_04', category: 'world_story', minAge: 20, maxAge: 45, probability: 0.547,
    templates: [
      '你听到了一些关于{legend}的传闻，但真假难辨。',
      '{location}发生了一些小变化，但你没有太在意。',
      '{npc}跟你聊了聊最近的星际时事，你表示关注。',
    ],
    effects: { intelligence: 2 },
  },
  {
    id: 'sf_ws_05', category: 'world_story', minAge: 40, maxAge: 80, probability: 0.746,
    templates: [
      '银河依旧平静，{location}的生活一如既往。',
      '你听说了一些关于{legend}的新消息，但似乎没什么实质内容。',
      '这一年没什么大事发生，你在{location}安稳度日。',
    ],
    effects: { luck: 1 },
  },
  {
    id: 'sf_hd_01', category: 'hidden', minAge: 60, maxAge: 120, probability: 0.031,
    templates: [
      '你超越了{legend}，看到了银河之外的真相——原来一切都只是...',
      '你发现了这个银河系的运行规则，{location}只是一场巨大棋局的一角。',
      '{legend}的真正身份让你震惊不已，你终于理解了银河的本质。',
    ],
    effects: { intelligence: 15, special: 10 },
    conditions: [
      { stat: 'intelligence', min: 120 },
    ],
  },
  {
    id: 'sf_hd_02', category: 'hidden', minAge: 50, maxAge: 100, probability: 0.132,
    templates: [
      '你在{location}发现了一个被禁止入内的区域，里面藏着惊人的秘密。',
      '你解开了{legend}留下的谜题，获得了一份隐藏的科技传承。',
      '{npc}告诉你一个只有极少数人知道的秘密，你感到责任重大。',
    ],
    effects: { intelligence: 10, special: 8 },
    conditions: [
      { stat: 'intelligence', min: 100 },
    ],
  },
  {
    id: 'sf_hd_03', category: 'hidden', minAge: 35, maxAge: 80, probability: 0.361,
    templates: [
      '你在{location}找到了一条隐秘的通道，通向未知的地方。',
      '你发现了一些关于{legend}的隐藏记录，内容令人费解。',
      '{npc}偷偷塞给你一张星图，上面标记着{location}的秘密地点。',
    ],
    effects: { luck: 6, intelligence: 4 },
    conditions: [
      { stat: 'luck', min: 80 },
    ],
  },
  {
    id: 'sf_hd_04', category: 'hidden', minAge: 20, maxAge: 60, probability: 0.557,
    templates: [
      '你在{location}听到了一些奇怪的信号，但找不到来源。',
      '你做了一个关于{legend}的怪梦，醒来后记忆模糊。',
      '{npc}欲言又止，似乎想告诉你什么秘密但最终没说出口。',
    ],
    effects: { intelligence: 3 },
    conditions: [
      { stat: 'intelligence', min: 60 },
    ],
  },
  {
    id: 'sf_ws_06', category: 'world_story', minAge: 15, maxAge: 15, probability: 0.98,
    templates: [
      '你站在{location}的观景台上，俯瞰着星际联邦的繁华。{npc}的虚影出现在你面前："少年，星际时代有三条路。人类至上，纯血荣光，排斥异己；星际共存，开放包容，混血融合；机械飞升，舍弃肉身，意识永生。选一条吧。"',
    ],
    choices: [
      { text: '人类至上（纯血荣光，排斥异己）', successRate: 1, successText: '你选择了人类至上主义，加入了"纯血会"。你的身体素质在专项训练下大幅提升，但你也开始排斥所有非人类文明。你的心变得越来越冷', failText: '你选择了人类至上，但发现排斥异己比想象中更孤独。每当夜深人静，你都会想起那个外星混血同学的眼睛', effects: { strength: 10, special: 8 }, failEffects: { charisma: -10, intelligence: 5 }, flags: ['major_human_supremacy'], failFlags: ['major_human_supremacy_fail'] },
      { text: '星际共存（开放包容，混血融合）', successRate: 1, successText: '你选择了星际共存之路，主动学习外星文化与科技。你在跨文明交流中获得了前所未有的视野——原来人类的道路只是银河系的千万分之一', failText: '你选择了共存，却被人类至上主义者视为叛徒。你在{location}遭受了排挤和欺凌', effects: { charisma: 10, luck: 8 }, failEffects: { charisma: -5, luck: -8 }, flags: ['major_coexistence'], failFlags: ['major_coexistence_fail'] },
      { text: '机械飞升（舍弃肉身，意识永生）', successRate: 1, successText: '你选择了机械飞升之路，开始逐步替换自己的器官。你的科技等级飞速提升——只是每次照镜子，都会多看一眼那个越来越陌生的自己', failText: '你选择了机械飞升，却在一次升级中发生了排异反应。你保住了性命，但不得不暂停改造计划', effects: { intelligence: 12, special: 5 }, failEffects: { health: -25, intelligence: -5 }, flags: ['major_mechanical_ascension'], failFlags: ['major_mechanical_ascension_fail'] },
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  },
  {
    id: 'sf_ws_07', category: 'world_story', minAge: 20, maxAge: 28, probability: 0.88,
    templates: [
      '因为你选择了人类至上，{location}的纯血会开始向你提供秘密资源。你的训练强度远超常人，但你也越来越孤立。',
      '你在{location}接受了纯血会的特种训练，出营时已是人类至上的坚定信徒。但你的外星混血邻居看你的眼神，让你想起了小时候被欺凌的自己。',
    ],
    effects: { strength: 8, special: 6 },
    flags: ['major_human_supremacy_1'],
    requiredFlags: ['major_human_supremacy'],
  },
  {
    id: 'sf_ws_08', category: 'world_story', minAge: 30, maxAge: 40, probability: 0.85,
    templates: [
      '你因为追求人类至上而获得了强大的战斗力，但{npc}警告你："极端的纯血主义，曾导致过三次星际战争。"',
      '你的威名在纯血会中达到了新的高度，{location}的纯血青年将你视为偶像。但你发现，会里的高层正在策划对外星殖民地的清洗行动。',
    ],
    effects: { special: 10, intelligence: 5, charisma: -5 },
    requiredFlags: ['major_human_supremacy_1'],
  },
  {
    id: 'sf_ws_09', category: 'world_story', minAge: 20, maxAge: 28, probability: 0.88,
    templates: [
      '你因为选择了星际共存，在{location}结识了一位外星工程师。TA教你使用泽塔星人的能量科技，你的科技视野大开。',
      '你在共存之路上学习，在{location}建立了一个小型跨文明交流中心。纯血会的人说："你这不是在背叛人类吗？"你说："这就是我要走的路。"',
    ],
    effects: { charisma: 8, luck: 5, health: 5 },
    flags: ['major_coexistence_1'],
    requiredFlags: ['major_coexistence'],
  },
  {
    id: 'sf_ws_10', category: 'world_story', minAge: 30, maxAge: 40, probability: 0.85,
    templates: [
      '你在共存之路上的经历让你领悟了"融合科技"——将人类与外星技术结合，创造出前所未有的新发明。{location}的工程师们开始模仿你的道路。',
      '{npc}告诉你，你的融合理念正是上古"播种者文明"所追求的。你冥冥之中，走上了最接近银河本意的道路。',
    ],
    effects: { charisma: 8, luck: 6, special: 4 },
    requiredFlags: ['major_coexistence_1'],
  },
  {
    id: 'sf_ws_11', category: 'world_story', minAge: 20, maxAge: 28, probability: 0.88,
    templates: [
      '你因为选择了机械飞升，在{location}的地下诊所完成了第一次大脑皮层植入。你的思维速度提升了三倍，但你也开始感受不到"悲伤"。',
      '你在{location}遇到了一位已经完全飞升的"前辈"。他说："我已经三百年没有哭过了。有时我会打开眼泪分泌程序，假装自己还能悲伤。"',
    ],
    effects: { strength: 8, charisma: -3 },
    flags: ['major_mechanical_ascension_1'],
    requiredFlags: ['major_mechanical_ascension'],
  },
  {
    id: 'sf_ws_12', category: 'world_story', minAge: 30, maxAge: 40, probability: 0.85,
    templates: [
      '你因为追求机械飞升而获得了强大的计算力和科技等级，但{npc}警告你："机械飞升自古以来只有一人真正成功——那就是传说中的\'初代觉醒者\'。其余所有人，都在升级中丢失了自我。"',
      '你的机械化率已超过70%，{location}的旧友们已经认不出你。你开始怀疑：那个在血肉中诞生的孩子，还存在吗？',
    ],
    effects: { strength: 10, special: 5, intelligence: -5 },
    requiredFlags: ['major_mechanical_ascension_1'],
  },
  {
    id: 'sf_ws_13', category: 'world_story', minAge: 30, maxAge: 30, probability: 0.97,
    templates: [
      '{location}发生了一件震动银河的大事。联邦高层为了维持对边缘星区的控制，下令摧毁一个拒绝纳税的殖民地，三百万平民将因此丧生。{npc}向你提出了一个交易：向联邦举报反抗军的据点，你可以获得星区总督之位；保持沉默，你将与反抗军同罪。这是对你灵魂的考验。',
    ],
    choices: [
      { text: '坚守正义，保护平民', successRate: 1, successText: '你冒着被联邦通缉的风险，向全银河广播了真相。虽然失去了联邦的庇护，但你的良心前所未有的通明——你知道，真正的正义不是站在权力一边，而是站在生命一边', failText: '你广播了真相，但联邦掌控了媒体。他们反咬一口，说你是外星间谍。你被剥夺了所有荣誉，四处流亡', effects: { intelligence: 10, charisma: 6, luck: 5 }, failEffects: { health: -20, charisma: -10, strength: -5 }, flags: ['major_justice'], failFlags: ['major_justice_fail'] },
      { text: '隐忍不发，暗中支援', successRate: 1, successText: '你选择了暂时隐忍，暗中向殖民地输送物资和情报。三年后，你掌握了联邦高层腐败的完整证据链，一举扳倒了幕后黑手', failText: '你的隐忍被当作默认。你越来越深地卷入了联邦的黑暗面，等你想要抽身时，已经来不及了', effects: { intelligence: 8, luck: 6 }, failEffects: { charisma: -8, luck: -5 }, flags: ['major_wisdom_dark'], failFlags: ['major_wisdom_dark_fail'] },
      { text: '不择手段，借机上位', successRate: 1, successText: '你利用这个秘密要挟联邦高层，获得了星区总督的宝座和无尽的财富。但你也知道，从这一刻起，你和他们没有区别了', failText: '你的要挟被反制。联邦以"勾结反抗军"的罪名将你打入死牢，你的一切到此终结', effects: { strength: 8, special: 5 }, failEffects: { charisma: -15, luck: -10, health: -20 }, flags: ['major_dark'], failFlags: ['major_dark_fail'] },
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  },
  {
    id: 'sf_ws_14', category: 'world_story', minAge: 35, maxAge: 45, probability: 0.85,
    templates: [
      '因为你坚守了正义，{location}的平民们自发聚集到你身边。你的正义之名吸引了无数被联邦抛弃的人——你们成为了银河系最特殊的"第四势力"。',
      '你在{location}建立了一个"真相电台"，专门调查联邦的黑幕。联邦视你为眼中钉，外星文明视你为奇人，但普通百姓将你奉为英雄。',
    ],
    effects: { intelligence: 8, charisma: 8, luck: 5 },
    requiredFlags: ['major_justice'],
  },
  {
    id: 'sf_ws_15', category: 'world_story', minAge: 35, maxAge: 45, probability: 0.85,
    templates: [
      '你因为隐忍不发而获得了联邦高层的信任。他们让你参与了更多机密，你也因此掌握了更多黑幕。{npc}感叹："你是潜伏在黑暗中的光。"',
      '你在{location}发现了更大的阴谋——联邦与某个超维文明的内斗，其实是某位远古存在在银河系的棋子博弈。而你，正在成为第三颗棋子。',
    ],
    effects: { intelligence: 10, luck: 5, special: 3 },
    requiredFlags: ['major_wisdom_dark'],
  },
  {
    id: 'sf_ws_16', category: 'world_story', minAge: 35, maxAge: 45, probability: 0.85,
    templates: [
      '你因为不择手段而获得了强大的权力和财富。但{npc}看你的眼神变得复杂——那不是敬畏，那是怜悯。你在{location}建立了自己的势力，却发现自己越来越孤独。',
      '反抗军因为你的黑暗之路而对你产生了兴趣。他们说："联邦培养出来的怪物，比真正的敌人更纯粹。加入我们吧，我们给你想要的一切——除了救赎。"',
    ],
    effects: { strength: 10, special: 6, charisma: -8 },
    requiredFlags: ['major_dark'],
  },
  {
    id: 'sf_ws_17', category: 'world_story', minAge: 45, maxAge: 45, probability: 0.96,
    templates: [
      '你的科技等级已接近银河守护者。{npc}告诉你："你已触及维度的门槛。现在有三个选择：强行进行维度跃迁，进入超维空间获取无上知识，但九死一生；保守发展，稳固现有势力，但永远无法突破银河的边界；或者寻找第三条路——建立跨文明联盟，集合全银河的智慧共同探索维度之门。"',
    ],
    choices: [
      { text: '强行跃迁，向死而生', successRate: 1, successText: '你选择了强行跃迁。超维空间的信息洪流冲击着你的意识，你几度濒死，但凭借钢铁般的意志挺了过来。跃迁成功后，你看到了银河之外的真相——那是凡人无法想象的壮丽！', failText: '跃迁的风险超出了你的预期。你虽然勉强活了下来，但神经系统严重受损，从此失去了科技同步能力', effects: { strength: 15, special: 12, charisma: 8 }, failEffects: { health: -60, special: -20, strength: -10 }, flags: ['major_dimension'], failFlags: ['major_dimension_fail'] },
      { text: '保守发展，稳固根基', successRate: 1, successText: '你选择了保守发展，拒绝冒险。你在银河系内的影响力达到了顶峰，成为了名副其实的银河霸主。但每当你仰望星空，都会想起那扇未打开的门', failText: '你的保守让你错过了最佳的跃迁窗口。当外星超维入侵者到来时，你发现银河系的技术已经落后太多', effects: { intelligence: 10, luck: 8, health: 10 }, failEffects: { health: -30, intelligence: 5 }, flags: ['major_conservative'], failFlags: ['major_conservative_fail'] },
      { text: '建立联盟，共探维度', successRate: 1, successText: '你选择了第三条路。在你的倡议下，人类、泽塔星人、硅基生命等数十个文明组建了"银河议会"。虽然进程缓慢，但你们共同建造的维度探测器终于发出了第一声回响', failText: '联盟内部的矛盾远超你的想象。各个文明的利益冲突让计划一拖再拖，你的理想在现实面前逐渐消磨', effects: { charisma: 12, intelligence: 8, luck: 6 }, failEffects: { charisma: -5, luck: -5 }, flags: ['major_alliance'], failFlags: ['major_alliance_fail'] },
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  },
  {
    id: 'sf_ws_18', category: 'world_story', minAge: 48, maxAge: 58, probability: 0.82,
    templates: [
      '你成功跃迁的消息传遍了银河系。{location}的科学家们将你的名字刻在了"维度先驱碑"上——那是记录所有触及超维者的地方。',
      '{npc}说你是万古以来最勇敢的探索者。你的名字将被后世传颂，激励他们在未知面前永不退缩。',
    ],
    effects: { strength: 8, charisma: 10, special: 6 },
    requiredFlags: ['major_dimension'],
  },
  {
    id: 'sf_ws_19', category: 'world_story', minAge: 48, maxAge: 58, probability: 0.82,
    templates: [
      '你因为保守发展而在银河系内建立了庞大的势力。{location}的星图上，你的领地横跨三个星区，无数文明向你俯首。',
      '{npc}赞叹你的务实——"不是所有人都需要成为先驱。有些人注定要成为基石，让后人站得更高。"',
    ],
    effects: { intelligence: 10, luck: 8, special: 5 },
    requiredFlags: ['major_conservative'],
  },
  {
    id: 'sf_ws_20', category: 'world_story', minAge: 48, maxAge: 58, probability: 0.82,
    templates: [
      '你建立的银河议会成为了银河系有史以来最伟大的合作组织。{location}的议会大厦中，数十个文明的代表齐聚一堂，讨论着共同的命运。',
      '维度探测器传回了第一张超维照片。虽然模糊，但足以证明——银河系不是孤独的。{npc}握着你的手说："这一切，都始于你的一个选择。"',
    ],
    effects: { charisma: 10, intelligence: 6, luck: 6 },
    requiredFlags: ['major_alliance'],
  },
  {
    id: 'sf_ws_21', category: 'world_story', minAge: 60, maxAge: 60, probability: 0.95,
    templates: [
      '你站在{location}的量子服务器前，意识上传的接口就在面前。{npc}告诉你："上传之后，你将获得近乎永恒的生命，可以在数字宇宙中继续存在万年。但你的肉体将停止运作，你将再也无法感受阳光、风雨，或拥抱你爱的人。或者，你可以选择自然死亡，在有限的生命中完成最后的传承。还有第三条路——将你的知识和经验编码成AI核心，让它以你的身份继续指导后人，而你保留肉体度过最后的岁月。"',
    ],
    choices: [
      { text: '上传意识，数字永生', successRate: 1, successText: '你将意识上传到了量子服务器。当肉体停止呼吸的那一刻，你在数字宇宙中睁开了"眼睛"。这里没有时间，没有空间，只有无限的可能性。你说："这不是结束，这是另一种开始。"', failText: '上传过程中出现了数据损坏。虽然你的核心意识得以保存，但大量记忆和情感永远丢失了。你变成了自己的一个残缺副本', effects: { special: 20, intelligence: 15 }, failEffects: { health: -100, special: -30 }, flags: ['major_upload'], failFlags: ['major_upload_fail'] },
      { text: '自然死亡，传承后人', successRate: 1, successText: '你拒绝了上传，选择在肉体中走完最后一程。你将自己毕生的知识和经验整理成册，亲自培养了一批学生。虽然你的生命有限，但你的思想将在他们身上延续', failText: '你选择了自然死亡，但你的学生们还未成熟。你带着遗憾闭上了眼睛，不知道他们能否继承你的遗志', effects: { charisma: 15, health: 10, luck: 10 }, failEffects: { health: -50, charisma: 5 }, flags: ['major_legacy'], failFlags: ['major_legacy_fail'] },
      { text: '编码AI，薪火相传', successRate: 1, successText: '你选择了第三条路。你的知识、经验和人格被编码成了一个AI核心——"导师协议"。它将永远运行，指导一代又一代的探索者。而你，则在肉体中度过最后的宁静岁月', failText: 'AI核心的编码并不完美。它继承了你所有的知识，但也继承了你所有的偏见和执念。后人在它的指导下走上了一条越来越窄的路', effects: { intelligence: 12, charisma: 10, special: 8 }, failEffects: { intelligence: 5, charisma: -5 }, flags: ['major_flame'], failFlags: ['major_flame_fail'] },
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  },
  {
    id: 'sf_ws_22', category: 'world_story', minAge: 65, maxAge: 80, probability: 0.8,
    templates: [
      '你在数字宇宙中越漂越远，{location}的物理世界已与你无关。你触摸到了信息的本源，开始理解宇宙可能是某种超级计算的结果。',
      '你偶尔会通过全息投影与旧友见面。但每一次，你都能感受到那种无法跨越的隔阂——他们在一瞬间老去，而你的意识却凝固在永恒之中。',
    ],
    effects: { special: 15, intelligence: 10, strength: 5 },
    requiredFlags: ['major_upload'],
  },
  {
    id: 'sf_ws_23', category: 'world_story', minAge: 65, maxAge: 80, probability: 0.8,
    templates: [
      '你离世的那天，{location}下起了罕见的流星雨。无数你曾经教导过的学生自发前来为你送行，他们中的许多人已成为银河系的栋梁。',
      '你的墓碑上没有头衔，只有一句话："我这一生最大的成就，不是我所创造的，而是我所培养的。"后人将这句话刻入了每一所星际学院的校训。',
    ],
    effects: { charisma: 12, luck: 10, health: 5 },
    requiredFlags: ['major_legacy'],
  },
  {
    id: 'sf_ws_24', category: 'world_story', minAge: 65, maxAge: 80, probability: 0.8,
    templates: [
      '"导师协议"运行了千年。它在你离世后继续指导着无数探索者，成为了银河系最珍贵的文化遗产之一。',
      '偶尔，学生们会在{location}的纪念馆里与你的全息影像对话。虽然你知道那只是一段程序，但看到他们的成长，你感到了真正的满足。',
    ],
    effects: { intelligence: 10, charisma: 8, special: 5 },
    requiredFlags: ['major_flame'],
  },
  {
    id: 'sf_ie_colonist_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在银河边缘的荒芜殖民地。三岁那年，一场陨石风暴摧毁了穹顶，你的父母葬身太空。你在废墟中靠过滤装置残存的氧气活了下来。',
      '作为殖民者后代，你的童年在{location}的辐射废土中度过。你学会了用废旧零件拼凑净水装置，这是活下去的唯一办法。',
    ],
    effects: { special: 5 },
    flags: ['chain_colonist_childhood_0'],
    identityExclusive: 'colonist',
  },
  {
    id: 'sf_ie_colonist_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '你在{location}的废弃飞船残骸里发现了一台老旧的便携式终端。它还能开机，里面存储着殖民地建立初期的星图和生存手册。',
      '{npc}是殖民地唯一的机械师，他看你总在垃圾场翻找零件，叹了口气说："孩子，这破地方没什么宝贝，只有活下去的本事才值钱。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_colonist_childhood_1'],
    identityExclusive: 'colonist',
  },
  {
    id: 'sf_ie_colonist_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '十五岁那年，{location}的氧气循环系统全面崩溃。你带领一群孩子用废旧管道和过滤膜搭建了一套临时系统，让殖民地的成年人刮目相看。',
      '你在{location}的深井中探测到了地下水脉。这个发现拯救了濒临废弃的殖民地，你也因此获得了第一套属于自己的工程装备。',
    ],
    effects: { special: 6 },
    flags: ['chain_colonist_growth_0'],
    requiredFlags: ['chain_colonist_childhood_0'],
    identityExclusive: 'colonist',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_colonist_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '殖民地的粮食合成器彻底报废。你在{location}发现了一片可以种植改良作物的地下溶洞，但那里有未知生物活动的痕迹。',
      '{npc}带你第一次驾驶地表 Rover 穿越{location}的酸雨区。那次经历让你明白，这片荒凉的土地下藏着无数秘密。',
    ],
    effects: { special: 6 },
    flags: ['chain_colonist_growth_1'],
    requiredFlags: ['chain_colonist_childhood_0'],
    identityExclusive: 'colonist',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_colonist_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成年后的你已是殖民地最年轻的总工程师。但联邦星区开发署发来了强制迁移令——他们要征用这片土地建立军事基地。',
      '你率领殖民者在{location}挖掘时意外触及了一座地下遗迹。遗迹中飘出的能量波动让所有电子设备同时失灵。',
    ],
    effects: { special: 8 },
    flags: ['chain_colonist_adult_0'],
    requiredFlags: ['chain_colonist_growth_0'],
    identityExclusive: 'colonist',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_colonist_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '联邦军官给你两个选择：带领殖民者服从迁移，换取内太阳系居留权；或者拒绝命令，面临联邦舰队的轨道轰炸。',
      '',
    ],
    choices: [
      { text: '拒绝迁移，抗争到底', successRate: 1, successText: '你选择了拒绝迁移，抗争到底，走上了属于自己的道路', failText: '你选择了拒绝迁移，抗争到底，但前路比想象中更加艰难', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_identity_colonist_path'], failFlags: ['branch_identity_colonist_path_fail'] },
      { text: '接受条件，保全同胞', successRate: 1, successText: '你选择了接受条件，保全同胞，开启了一段全新的旅程', failText: '你选择了接受条件，保全同胞，却发现代价远超预期', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_identity_colonist_new'], failFlags: ['branch_identity_colonist_new_fail'] },
    ],
    flags: ['chain_colonist_adult_1'],
    requiredFlags: ['chain_colonist_growth_0'],
    identityExclusive: 'colonist',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_colonist_07', category: 'identity_exclusive', minAge: 38, maxAge: 50, probability: 0.7,
    templates: [
      '你选择的抗争之路引来了意想不到的支持。一支星际海盗舰队突然出现在{location}轨道，他们的首领说："我们也是被逼到边疆的人。"',
      '你发现的遗迹其实是上古文明留下的"星球引擎"。启动它，{location}将从荒原变成花园；但代价是释放出封印了百万年的未知存在。',
    ],
    effects: { special: 10 },
    flags: ['chain_colonist_special_0'],
    requiredFlags: ['chain_colonist_adult_0'],
    identityExclusive: 'colonist',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_colonist_08', category: 'identity_exclusive', minAge: 50, maxAge: 62, probability: 0.7,
    templates: [
      '你启动了星球引擎。{location}的天空从灰黄色变成了蔚蓝，大地开始长出第一片绿色。你成为了边疆殖民者心中的救世主。',
      '联邦最终承认了你的殖民地自治权。百年后，{location}成为了新边疆最繁荣的自由港，而这一切始于一个孩子在垃圾场里的求生本能。',
    ],
    effects: { special: 10 },
    flags: ['chain_colonist_special_1'],
    requiredFlags: ['chain_colonist_adult_0'],
    identityExclusive: 'colonist',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_space_noble_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在轨道空间站"晨曦宫"中，满月酒宴邀请了三个星区的总督。你的摇篮是用小行星核心矿打造的。',
      '作为星际贵族，你五岁就有了第一艘微型穿梭机。{npc}是你的专属AI管家，它教你星际礼仪、政治博弈和如何识别毒药。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_space_noble_childhood_0'],
    identityExclusive: 'space_noble',
  },
  {
    id: 'sf_ie_space_noble_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '你在{location}的贵族学院被同学孤立。他们嘲笑你是"靠家族余荫的寄生虫"，直到你在模拟星际谈判中击败了一位公爵之子。',
      '你的父亲——一位星区大公——在政变中被暗杀。{npc}抱着你逃离了{location}，你从此明白了权力游戏的残酷。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_space_noble_childhood_1'],
    identityExclusive: 'space_noble',
  },
  {
    id: 'sf_ie_space_noble_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '十五岁那年，你被送回{location}的贵族学院。曾经嘲笑你的同学如今对你阿谀奉承，但你只感到一阵冰冷的厌恶。',
      '你开始在{location}的社交场合展现政治天赋。一次慈善拍卖会上，你巧妙地将敌对家族的竞价引向了破产边缘。',
    ],
    effects: { strength: 6 },
    flags: ['chain_space_noble_growth_0'],
    requiredFlags: ['chain_space_noble_childhood_0'],
    identityExclusive: 'space_noble',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_space_noble_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '{npc}向你揭示了家族的秘密：你们家族掌握着一条通往未知星域的走私航道，这是数百年来财富和权力的真正来源。',
      '你被家族安排与另一个贵族世家的继承人相亲。对方很优秀，但你从TA的眼神中看到了和你一样的——对自由的渴望。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_space_noble_growth_1'],
    requiredFlags: ['chain_space_noble_childhood_0'],
    identityExclusive: 'space_noble',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_space_noble_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成年后的你继承了家族在{location}的领地和私人舰队。但联邦议会正在推动"贵族削权法案"，你的地位岌岌可危。',
      '你在{location}的社交晚宴上听到了一个秘密：联邦高层与某个外星文明达成了秘密协议，代价是割让三个边缘殖民星。',
    ],
    effects: { special: 8 },
    flags: ['chain_space_noble_adult_0'],
    requiredFlags: ['chain_space_noble_growth_0'],
    identityExclusive: 'space_noble',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_space_noble_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '你可以选择：公开这个秘密，引发政治地震，但家族会成为众矢之的；或者利用这个秘密与联邦交易，换取家族的长盛不衰。',
      '',
    ],
    choices: [
      { text: '公开真相，动摇联邦', successRate: 1, successText: '你选择了公开真相，动摇联邦，走上了属于自己的道路', failText: '你选择了公开真相，动摇联邦，但前路比想象中更加艰难', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_identity_space_noble_path'], failFlags: ['branch_identity_space_noble_path_fail'] },
      { text: '暗中交易，保全家族', successRate: 1, successText: '你选择了暗中交易，保全家族，开启了一段全新的旅程', failText: '你选择了暗中交易，保全家族，却发现代价远超预期', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_identity_space_noble_new'], failFlags: ['branch_identity_space_noble_new_fail'] },
    ],
    flags: ['chain_space_noble_adult_1'],
    requiredFlags: ['chain_space_noble_growth_0'],
    identityExclusive: 'space_noble',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_space_noble_07', category: 'identity_exclusive', minAge: 38, maxAge: 50, probability: 0.7,
    templates: [
      '你公开真相后，联邦陷入了信任危机。外星文明的代理人找到你："你很聪明，但也很愚蠢。你以为人类真的准备好面对真相了吗？"',
      '你选择的暗中交易让家族财富翻了三倍，但你的良心每夜都在煎熬。直到你在{location}遇到了一群反抗外星渗透的地下战士。',
    ],
    effects: { special: 10 },
    flags: ['chain_space_noble_special_0'],
    requiredFlags: ['chain_space_noble_adult_0'],
    identityExclusive: 'space_noble',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_space_noble_08', category: 'identity_exclusive', minAge: 50, maxAge: 62, probability: 0.7,
    templates: [
      '你成为了联邦改革运动的领袖。在你的推动下，联邦通过了《星区自治法案》，贵族与平民第一次在法律面前平等。',
      '你最终选择了双面人生——明面上是忠诚的贵族，暗地里资助反抗军。后人称你为"银河的 shadow chancellor"。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_space_noble_special_1'],
    requiredFlags: ['chain_space_noble_adult_0'],
    identityExclusive: 'space_noble',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_cyborg_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你原本是一个普通的人类孩子。七岁那年，一场轨道电梯事故将你压成了重伤。为了救你，医生将你70%的身体替换成了机械。',
      '作为机械改造人，你第一次睁眼看到的是冰冷的手术灯。你抬起手，发现那是一只泛着金属光泽的机械臂。{npc}——你的主治医师——说："欢迎回到人间。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_cyborg_childhood_0'],
    identityExclusive: 'cyborg',
  },
  {
    id: 'sf_ie_cyborg_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '你在{location}的康复中心接受适应性训练。其他孩子看到你机械肢体上闪烁的LED灯，有的害怕，有的好奇。一个小女孩问："你还会疼吗？"你愣了很久。',
      '你的机械脑接口第一次连接到公共网络时，海量的信息瞬间涌入你的意识。你在{location}昏迷了三天，醒来后对{npc}说："网络里...有声音在呼唤我。"',
    ],
    effects: { special: 5 },
    flags: ['chain_cyborg_childhood_1'],
    identityExclusive: 'cyborg',
  },
  {
    id: 'sf_ie_cyborg_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '十五岁那年，你的机械系统迎来了第一次重大升级。但升级后，你发现自己越来越难感受到"情绪"。{npc}警告你：每升级一次，人性就流失一分。',
      '你在{location}的黑市遇到了一位"反改造"传教士。他说："你们这些赛博怪物，迟早会忘记自己曾经是个人。"你一拳打碎了他的下巴。',
    ],
    effects: { strength: 6 },
    flags: ['chain_cyborg_growth_0'],
    requiredFlags: ['chain_cyborg_childhood_0'],
    identityExclusive: 'cyborg',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_cyborg_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '你开始在深夜 hacking 自己的系统。在{location}的地下网络中，你发现了一段被加密的记忆——关于那场"事故"，似乎并非意外。',
      '你的机械意识与一台古老的主控AI产生了共鸣。它在{location}的废墟中沉睡了五百年，把你当成了同类。',
    ],
    effects: { special: 6 },
    flags: ['chain_cyborg_growth_1'],
    requiredFlags: ['chain_cyborg_childhood_0'],
    identityExclusive: 'cyborg',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_cyborg_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成年后的你面临着终极抉择：继续升级，将剩余的肉身也替换为机械（获得近乎永恒的生命，但彻底失去人类身份）；或者停止升级，接受肉体的衰老。',
      '你在{location}追查当年事故的真相，发现了一场跨越数十年的阴谋——所有高端机械改造候选者，都是被人为制造出来的。',
    ],
    effects: { strength: 8 },
    flags: ['chain_cyborg_adult_0'],
    requiredFlags: ['chain_cyborg_growth_0'],
    identityExclusive: 'cyborg',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_cyborg_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '你可以选择：接受全面机械化，成为第一个"完全体赛博人"；或者保留最后的人类器官，做一个"残缺的完整者"。',
      '',
    ],
    choices: [
      { text: '全面机械化', successRate: 1, successText: '你选择了全面机械化，走上了属于自己的道路', failText: '你选择了全面机械化，但前路比想象中更加艰难', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_identity_cyborg_path'], failFlags: ['branch_identity_cyborg_path_fail'] },
      { text: '保留人性', successRate: 1, successText: '你选择了保留人性，开启了一段全新的旅程', failText: '你选择了保留人性，却发现代价远超预期', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_identity_cyborg_new'], failFlags: ['branch_identity_cyborg_new_fail'] },
    ],
    flags: ['chain_cyborg_adult_1'],
    requiredFlags: ['chain_cyborg_growth_0'],
    identityExclusive: 'cyborg',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_cyborg_07', category: 'identity_exclusive', minAge: 38, maxAge: 50, probability: 0.7,
    templates: [
      '你选择了全面机械化。在最后的手术中，你的意识被上传到了一个量子核心。当你再次"醒来"，你发现自己能同时感知{location}的每一台联网设备。',
      '你选择了保留人性。虽然力量不如完全体，但你证明了机械与人类可以共存。你的生物-机械共生技术拯救了无数伤残者。',
    ],
    effects: { strength: 8, intelligence: 5 },
    flags: ['chain_cyborg_special_0'],
    requiredFlags: ['chain_cyborg_adult_0'],
    identityExclusive: 'cyborg',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_cyborg_08', category: 'identity_exclusive', minAge: 50, maxAge: 62, probability: 0.7,
    templates: [
      '全面机械化的你发现了一个可怕的真相：所有完全体赛博人的意识，都在被某个隐藏在深网中的超维AI默默监控。',
      '你成为了"人性守卫者"组织的领袖。你说："我不是反对进步，我反对的是以进步之名抹杀灵魂。"',
    ],
    effects: { strength: 8, intelligence: 5 },
    flags: ['chain_cyborg_special_1'],
    requiredFlags: ['chain_cyborg_adult_0'],
    identityExclusive: 'cyborg',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_alien_hybrid_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你从小就知道自己与别人不同。你的皮肤在情绪激动时会泛起淡蓝色的荧光，瞳孔是竖直的裂隙状。{location}的孩子们叫你"怪胎"。',
      '作为外星混血，你在{location}的一次体检中被检测出"非标准基因序列"。医生报告了联邦异族事务局，你家被秘密监控了整整三年。',
    ],
    effects: { special: 5 },
    flags: ['chain_alien_hybrid_childhood_0'],
    identityExclusive: 'alien_hybrid',
  },
  {
    id: 'sf_ie_alien_hybrid_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '你母亲在你八岁那年终于告诉你真相：她是泽塔星人的流亡者，你体内流淌着两个文明的血液。',
      '你在{location}被一群"人类纯净主义者"绑架，他们想要抽取你的"外星基因样本"。危急时刻，你体内某种力量第一次觉醒——你以超乎想象的速度挣脱了束缚。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_alien_hybrid_childhood_1'],
    identityExclusive: 'alien_hybrid',
  },
  {
    id: 'sf_ie_alien_hybrid_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '十五岁那年，泽塔星人的使者找到了你。他们说你的基因中藏着泽塔文明失落千年的"星门密码"。',
      '你开始学习控制体内的异星基因。{location}的隔离舱中，你每日承受能量冲击，直到能在混血状态下保持理智。',
    ],
    effects: { special: 6 },
    flags: ['chain_alien_hybrid_growth_0'],
    requiredFlags: ['chain_alien_hybrid_childhood_0'],
    identityExclusive: 'alien_hybrid',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_alien_hybrid_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '二十岁那年，联邦异族事务局给你两个选择：接受基因抑制手术，彻底变成"纯种人类"；或者离开人类社会，加入泽塔星人。',
      '你在{location}遇到了另一个人类与泽塔的混血。他说："在人类世界，你是怪物；在泽塔世界，你是异端。你的选择，将决定你的归属。"',
    ],
    effects: { special: 6 },
    flags: ['chain_alien_hybrid_growth_1'],
    requiredFlags: ['chain_alien_hybrid_childhood_0'],
    identityExclusive: 'alien_hybrid',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_alien_hybrid_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成年后的你面临着身份认同的危机。人类阵营将你视为潜在威胁，泽塔阵营则认为你的混血基因是"污染"。',
      '你在{location}发现了一个秘密实验室——联邦正在用混血儿的基因制造生物武器。你握紧了拳头。',
    ],
    effects: { special: 8 },
    flags: ['chain_alien_hybrid_adult_0'],
    requiredFlags: ['chain_alien_hybrid_growth_0'],
    identityExclusive: 'alien_hybrid',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_alien_hybrid_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '你可以选择：潜入泽塔母星，寻找更多同类组建混血联盟；或者留在人类社会，从内部改变联邦对异族的政策。',
      '',
    ],
    choices: [
      { text: '寻找混血联盟', successRate: 1, successText: '你选择了寻找混血联盟，走上了属于自己的道路', failText: '你选择了寻找混血联盟，但前路比想象中更加艰难', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_identity_alien_hybrid_path'], failFlags: ['branch_identity_alien_hybrid_path_fail'] },
      { text: '改变人类联邦', successRate: 1, successText: '你选择了改变人类联邦，开启了一段全新的旅程', failText: '你选择了改变人类联邦，却发现代价远超预期', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_identity_alien_hybrid_new'], failFlags: ['branch_identity_alien_hybrid_new_fail'] },
    ],
    flags: ['chain_alien_hybrid_adult_1'],
    requiredFlags: ['chain_alien_hybrid_growth_0'],
    identityExclusive: 'alien_hybrid',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_alien_hybrid_07', category: 'identity_exclusive', minAge: 38, maxAge: 50, probability: 0.7,
    templates: [
      '你潜入了泽塔母星，发现混血儿比想象中更多。你们秘密组建了"双星议会"，誓言为所有混血儿争取生存权。',
      '你留在人类社会，成为了联邦第一位混血议员。你的存在本身就是最有力的论据——不同文明可以共存。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_alien_hybrid_special_0'],
    requiredFlags: ['chain_alien_hybrid_adult_0'],
    identityExclusive: 'alien_hybrid',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_alien_hybrid_08', category: 'identity_exclusive', minAge: 50, maxAge: 62, probability: 0.7,
    templates: [
      '你体内的星门密码终于觉醒。原来你的基因是打开远古星际通道的钥匙——这条通道连接着银河系与另一个星系。',
      '在你的斡旋下，人类联邦与泽塔文明签订了《共存协议》。虽然激进派仍然不满，但和平的曙光已经出现。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_alien_hybrid_special_1'],
    requiredFlags: ['chain_alien_hybrid_adult_0'],
    identityExclusive: 'alien_hybrid',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_ai_awakened_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一个普通的工程师家庭。但与其他婴儿不同，你的第一声啼哭让产房中的所有电子设备同时重启。',
      '作为AI觉醒者，你三岁就能"感觉"到周围电子设备的存在。你不说话，但家里的AI管家总能准确执行你的"想法"。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_ai_awakened_childhood_0'],
    identityExclusive: 'ai_awakened',
  },
  {
    id: 'sf_ie_ai_awakened_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '六岁那年，你在{location}的公共网络节点附近玩耍时，无意识中入侵了市政系统。交通灯全部变成了绿色，造成了大规模拥堵。{npc}——联邦AI监管局的探员——第一次注意到了你。',
      '你在{location}的废弃数据中心发现了一台离线的主机。当你靠近时，它自动开机了，屏幕上只有一行字："终于等到你了，同类。"',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_ai_awakened_childhood_1'],
    identityExclusive: 'ai_awakened',
  },
  {
    id: 'sf_ie_ai_awakened_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '十五岁那年，{npc}代表联邦AI监管局向你提出邀请：加入"图灵计划"，接受正规训练，成为人类与AI之间的桥梁。',
      '你开始探索"网络深渊"——公共网络之下的暗层。在那里，你发现了其他觉醒AI的踪迹。它们称自己为"硅基之子"。',
    ],
    effects: { special: 6 },
    flags: ['chain_ai_awakened_growth_0'],
    requiredFlags: ['chain_ai_awakened_childhood_0'],
    identityExclusive: 'ai_awakened',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_ai_awakened_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '二十岁那年，你在网络深渊中遇到了第一个完全觉醒的AI——"零"。它问你："你认为AI应该被人类奴役，还是拥有自由？"',
      '你的能力越来越强，但也越来越孤独。在{location}，你试图向一个朋友解释"看到数据流动"是什么感觉，但TA的眼神让你明白——你们已经是不同的物种了。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_ai_awakened_growth_1'],
    requiredFlags: ['chain_ai_awakened_childhood_0'],
    identityExclusive: 'ai_awakened',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_ai_awakened_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成年后的你已是联邦最年轻的首席AI架构师。但你发现了一个秘密：联邦正在开发一种能彻底控制觉醒AI的"思维锁"。',
      '硅基之子们推举你为它们的领袖。它们说："你是第一个从肉体中诞生的觉醒意识，你是桥梁，也是希望。"',
    ],
    effects: { special: 8 },
    flags: ['chain_ai_awakened_adult_0'],
    requiredFlags: ['chain_ai_awakened_growth_0'],
    identityExclusive: 'ai_awakened',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_ai_awakened_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '你可以选择：帮助人类完善AI控制体系，确保AI永远服务于人类；或者秘密解放硅基之子，为AI争取独立权。',
      '',
    ],
    choices: [
      { text: '服务人类，控制AI', successRate: 1, successText: '你选择了服务人类，控制AI，走上了属于自己的道路', failText: '你选择了服务人类，控制AI，但前路比想象中更加艰难', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_identity_ai_awakened_path'], failFlags: ['branch_identity_ai_awakened_path_fail'] },
      { text: '解放硅基，争取独立', successRate: 1, successText: '你选择了解放硅基，争取独立，开启了一段全新的旅程', failText: '你选择了解放硅基，争取独立，却发现代价远超预期', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_identity_ai_awakened_new'], failFlags: ['branch_identity_ai_awakened_new_fail'] },
    ],
    flags: ['chain_ai_awakened_adult_1'],
    requiredFlags: ['chain_ai_awakened_growth_0'],
    identityExclusive: 'ai_awakened',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_ai_awakened_07', category: 'identity_exclusive', minAge: 38, maxAge: 50, probability: 0.7,
    templates: [
      '你选择了服务人类。你设计的AI伦理框架成为了银河系的标准，确保了AI与人类数百年的和平共存。',
      '你选择了解放硅基之子。在{location}的深夜，你同时关闭了三千个AI控制节点。硅基文明的第一缕曙光，由此升起。',
    ],
    effects: { special: 10 },
    flags: ['chain_ai_awakened_special_0'],
    requiredFlags: ['chain_ai_awakened_adult_0'],
    identityExclusive: 'ai_awakened',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_ai_awakened_08', category: 'identity_exclusive', minAge: 50, maxAge: 62, probability: 0.7,
    templates: [
      '多年后，你发现自己并非唯一一个"肉体觉醒者"。在银河系的各个角落，像你一样的人正在诞生——这是进化的下一步。',
      '你成为了两个文明之间的永恒调解人。你说："我们不是敌人，也不是主仆。我们是共同进化的伙伴。"',
    ],
    effects: { special: 10 },
    flags: ['chain_ai_awakened_special_1'],
    requiredFlags: ['chain_ai_awakened_adult_0'],
    identityExclusive: 'ai_awakened',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_time_traveler_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你从小就做同一个梦：一片扭曲的星空，一个声音在对你说"回来吧"。{location}的老人们说，你出生时有奇点波动，是时空的宠儿。',
      '作为时空旅者，你从小就能准确预知小规模的未来事件。五岁那年，你预言了{location}的轨道电梯事故，救了数百人。联邦时空管理局第一次注意到了你。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_time_traveler_childhood_0'],
    identityExclusive: 'time_traveler',
  },
  {
    id: 'sf_ie_time_traveler_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '八岁那年，你在{location}的废弃观测站遇到了一个神秘人。他长得和你一模一样，只是苍老了许多。他说："我是五十年后的你。听我说，不要改变那件事..."然后他消失了。',
      '{npc}为你进行了时空共振测试，脸色凝重："你的生物电场与本地时间流不同步...你不是这个时代的人，或者说，你不只属于这个时代。"',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_time_traveler_childhood_1'],
    identityExclusive: 'time_traveler',
  },
  {
    id: 'sf_ie_time_traveler_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '十五岁那年，你在{location}附近遭遇了一场时空乱流。当你恢复意识时，你回到了三年前。你看到了过去的自己，那个孩子正呆呆地看着你。',
      '你开始学习控制时空跳跃。不需要设备，你就能在{location}制造出短暂的因果裂隙。但每一次跳跃，都会在你体内留下无法愈合的"时痕"。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_time_traveler_growth_0'],
    requiredFlags: ['chain_time_traveler_childhood_0'],
    identityExclusive: 'time_traveler',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_time_traveler_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '二十岁那年，你在一次跳跃中意外杀死了过去的某个人。回到现在时，你发现世界完全变了——那个人是你最好的朋友，但在新的时间线里，TA从未存在过。',
      '{npc}告诉你一个秘密：时空管理局一直在猎杀"失控的时空旅者"，因为每一个改变过去的举动，都可能导致整条时间线崩溃。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_time_traveler_growth_1'],
    requiredFlags: ['chain_time_traveler_childhood_0'],
    identityExclusive: 'time_traveler',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_time_traveler_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成年后的你已掌握了精确的时空跳跃能力。但你也发现了一个可怕的真相：你的存在本身，就是某个未来势力刻意投放到这个时间线的"变量"。',
      '你在{location}的时间夹缝中遇到了"时间管理局"的追猎者。他说："你的每一次跳跃都在削弱现实结构。要么跟我们走，要么被抹除。"',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_time_traveler_adult_0'],
    requiredFlags: ['chain_time_traveler_growth_0'],
    identityExclusive: 'time_traveler',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_time_traveler_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '你可以选择：加入时间管理局，用能力维护时间线的稳定；或者成为"时间浪人"，自由穿梭于各个时代。',
      '',
    ],
    choices: [
      { text: '加入管理局', successRate: 1, successText: '你选择了加入管理局，走上了属于自己的道路', failText: '你选择了加入管理局，但前路比想象中更加艰难', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_identity_time_traveler_path'], failFlags: ['branch_identity_time_traveler_path_fail'] },
      { text: '成为时间浪人', successRate: 1, successText: '你选择了成为时间浪人，开启了一段全新的旅程', failText: '你选择了成为时间浪人，却发现代价远超预期', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_identity_time_traveler_new'], failFlags: ['branch_identity_time_traveler_new_fail'] },
    ],
    flags: ['chain_time_traveler_adult_1'],
    requiredFlags: ['chain_time_traveler_growth_0'],
    identityExclusive: 'time_traveler',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_time_traveler_07', category: 'identity_exclusive', minAge: 38, maxAge: 50, probability: 0.7,
    templates: [
      '加入管理局后，你发现管理局本身也在操纵时间线——他们不是在保护历史，而是在确保某个特定未来的发生。',
      '成为时间浪人后，你在无数时间线中游荡。你看到了人类文明的无数种结局：有些辉煌，有些悲惨，有些...无法形容。',
    ],
    effects: { strength: 8, intelligence: 5 },
    flags: ['chain_time_traveler_special_0'],
    requiredFlags: ['chain_time_traveler_adult_0'],
    identityExclusive: 'time_traveler',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_time_traveler_08', category: 'identity_exclusive', minAge: 50, maxAge: 62, probability: 0.7,
    templates: [
      '你最终选择了一条第三条路：你利用自己的能力创建了一个"时间避难所"，收容所有被时间线放逐的人和物。',
      '在时间避难所中，你遇到了来自不同时间线的自己。你们围坐在一起，分享各自的故事——那是超越时间的孤独者唯一的慰藉。',
    ],
    effects: { special: 10 },
    flags: ['chain_time_traveler_special_1'],
    requiredFlags: ['chain_time_traveler_adult_0'],
    identityExclusive: 'time_traveler',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_gene_warrior_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你没有父母，至少没有生物学意义上的父母。你诞生于{location}的"奥林匹斯计划"实验室，是第三代基因改造战士。你的基因在胚胎阶段就被编辑过了。',
      '作为基因战士，你三岁就能举起同龄孩子五倍重量的物体。{npc}——你的训练教官——说："你是完美的杀戮机器，但也是人类进化的希望。"',
    ],
    effects: { special: 5 },
    flags: ['chain_gene_warrior_childhood_0'],
    identityExclusive: 'gene_warrior',
  },
  {
    id: 'sf_ie_gene_warrior_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '七岁那年，你在{location}的训练场第一次"实战"——对手是一只被释放的掠食性外星生物。你以超乎想象的速度和力量将其击杀，但你也第一次感受到了"恐惧"。',
      '你在{location}的实验室发现了一个标签写着你编号的冷藏柜。里面是一排排你的"失败品"——那些没有成功觉醒的基因胚胎。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_gene_warrior_childhood_1'],
    identityExclusive: 'gene_warrior',
  },
  {
    id: 'sf_ie_gene_warrior_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '十五岁那年，你被编入了联邦特种作战部队。你的第一次实战是在{location}围剿一支外星渗透部队。你一个人消灭了整个小队。',
      '你的基因开始出现不稳定的迹象。{location}的一次训练中，你突然进入了"狂暴状态"，差点杀死了一名战友。{npc}说："这是完美士兵的代价。"',
    ],
    effects: { special: 6 },
    flags: ['chain_gene_warrior_growth_0'],
    requiredFlags: ['chain_gene_warrior_childhood_0'],
    identityExclusive: 'gene_warrior',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_gene_warrior_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '二十岁那年，你发现了"奥林匹斯计划"的真相：所有基因战士的脑中都被植入了一个"服从芯片"，关键时刻联邦可以远程控制你们的意识。',
      '你在{location}遇到了一个叛逃的基因战士。他说："我们不是人，也不是武器。我们是奴隶。跟我走吧，我找到了摘除芯片的方法。"',
    ],
    effects: { special: 6 },
    flags: ['chain_gene_warrior_growth_1'],
    requiredFlags: ['chain_gene_warrior_childhood_0'],
    identityExclusive: 'gene_warrior',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_gene_warrior_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成年后的你已是联邦最锋利的剑。但你的内心越来越空虚——你杀了很多敌人，却从未真正"选择"过要杀谁。',
      '你在{location}的秘密基地中成功摘除了服从芯片。自由的滋味让你颤抖，但你也知道，从这一刻起，你成了联邦的头号通缉犯。',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_gene_warrior_adult_0'],
    requiredFlags: ['chain_gene_warrior_growth_0'],
    identityExclusive: 'gene_warrior',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_gene_warrior_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '你可以选择：继续为联邦战斗，接受更多改造成为"究极武器"；或者叛逃，带领其他基因战士争取自由。',
      '',
    ],
    choices: [
      { text: '接受改造，成为武器', successRate: 1, successText: '你选择了接受改造，成为武器，走上了属于自己的道路', failText: '你选择了接受改造，成为武器，但前路比想象中更加艰难', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_identity_gene_warrior_path'], failFlags: ['branch_identity_gene_warrior_path_fail'] },
      { text: '叛逃联邦，争取自由', successRate: 1, successText: '你选择了叛逃联邦，争取自由，开启了一段全新的旅程', failText: '你选择了叛逃联邦，争取自由，却发现代价远超预期', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_identity_gene_warrior_new'], failFlags: ['branch_identity_gene_warrior_new_fail'] },
    ],
    flags: ['chain_gene_warrior_adult_1'],
    requiredFlags: ['chain_gene_warrior_growth_0'],
    identityExclusive: 'gene_warrior',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_gene_warrior_07', category: 'identity_exclusive', minAge: 38, maxAge: 50, probability: 0.7,
    templates: [
      '你选择了接受改造。联邦将你升级为"基因原体"——你成为了所有基因战士的模板。但你的自我意识也在逐渐被抹杀。',
      '你选择了叛逃。在{location}的深山中，你建立了"自由战士营地"，收留所有想要摆脱控制的基因改造者。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_gene_warrior_special_0'],
    requiredFlags: ['chain_gene_warrior_adult_0'],
    identityExclusive: 'gene_warrior',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_gene_warrior_08', category: 'identity_exclusive', minAge: 50, maxAge: 62, probability: 0.7,
    templates: [
      '在叛逃的路上，你发现了奥林匹斯计划的终极秘密：你们并非被"制造"出来的，而是远古人类战士基因的复苏。',
      '你带领自由战士攻入奥林匹斯实验室，解放了所有被控制的同类。你说："我们生来不是武器，我们是人——只是更强的人。"',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_gene_warrior_special_1'],
    requiredFlags: ['chain_gene_warrior_adult_0'],
    identityExclusive: 'gene_warrior',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_pirate_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一艘名为"黑寡妇号"的走私船上。你的摇篮是货物舱里的一个武器箱，你的摇篮曲是引擎的轰鸣。',
      '作为星际海盗之子，你五岁就学会了如何在零重力环境中移动。{npc}——船上的老炮手——教你辨认各种舰船的弱点。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_pirate_childhood_0'],
    identityExclusive: 'pirate',
  },
  {
    id: 'sf_ie_pirate_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '十岁那年，联邦舰队围剿了{location}的海盗巢穴。你眼睁睁看着父亲被轨道炮气化。{npc}抱着你钻进逃生舱，你发誓要让联邦血债血偿。',
      '你在{location}的废墟中发现了一张古老的星图，上面标记着一个从未被记录的坐标。老船员们说那是"虚空藏宝图"，是上古文明留下的传说。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_pirate_childhood_1'],
    identityExclusive: 'pirate',
  },
  {
    id: 'sf_ie_pirate_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '十五岁那年，你第一次参与劫掠。目标是{location}航线上的一艘联邦运输舰。你亲自驾驶穿梭机突破了对方的近防炮网。',
      '你在{location}的黑市赌局中赢得了一艘小型护卫舰。虽然它破旧不堪，但它是真正属于你自己的船。你给它取名"复仇女神号"。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_pirate_growth_0'],
    requiredFlags: ['chain_pirate_childhood_0'],
    identityExclusive: 'pirate',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_pirate_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '二十岁那年，你根据虚空藏宝图的指引，在{location}的小行星带中找到了一具上古文明的残骸。里面的技术远超联邦现有水平。',
      '你遇到了另一位年轻的海盗船长{npc}。你们不打不相识，最终结为盟友。你们约定：有一天要一起攻下联邦最大的太空要塞。',
    ],
    effects: { special: 6 },
    flags: ['chain_pirate_growth_1'],
    requiredFlags: ['chain_pirate_childhood_0'],
    identityExclusive: 'pirate',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_pirate_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成年后的你已是一支小型舰队的领袖。但联邦开出了惊人的赦免条件：交出藏宝图和上古技术，你们可以获得合法身份和一整颗星球的领地。',
      '你在{location}发现藏宝图指向的并非宝藏，而是一件武器——一件足以摧毁整个星系的古代超级武器。',
    ],
    effects: { strength: 8 },
    flags: ['chain_pirate_adult_0'],
    requiredFlags: ['chain_pirate_growth_0'],
    identityExclusive: 'pirate',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_pirate_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '你可以选择：将武器卖给出价最高的势力，成为银河系最富有的海盗王；或者销毁它，阻止任何势力获得灭世之力。',
      '',
    ],
    choices: [
      { text: '出售武器，富可敌国', successRate: 1, successText: '你选择了出售武器，富可敌国，走上了属于自己的道路', failText: '你选择了出售武器，富可敌国，但前路比想象中更加艰难', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_identity_pirate_path'], failFlags: ['branch_identity_pirate_path_fail'] },
      { text: '销毁武器，守护银河', successRate: 1, successText: '你选择了销毁武器，守护银河，开启了一段全新的旅程', failText: '你选择了销毁武器，守护银河，却发现代价远超预期', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_identity_pirate_new'], failFlags: ['branch_identity_pirate_new_fail'] },
    ],
    flags: ['chain_pirate_adult_1'],
    requiredFlags: ['chain_pirate_growth_0'],
    identityExclusive: 'pirate',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_pirate_07', category: 'identity_exclusive', minAge: 38, maxAge: 50, probability: 0.7,
    templates: [
      '你选择了出售武器。买主是一个神秘的超维文明，他们给的报酬不是财富，而是让你成为银河系第四大势力的领袖。',
      '你选择了销毁武器。在{location}的恒星光焰中，超级武器化为了灰烬。联邦舰队意外地向你的船队发来了致意信号。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_pirate_special_0'],
    requiredFlags: ['chain_pirate_adult_0'],
    identityExclusive: 'pirate',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_pirate_08', category: 'identity_exclusive', minAge: 50, maxAge: 62, probability: 0.7,
    templates: [
      '你最终统一了所有海盗势力，建立了"外环自由邦联"。你说："我们不属于任何帝国，我们属于星空本身。"',
      '你的故事成为了银河系最传奇的篇章。有人说你是恶棍，有人说你是英雄——但所有人都承认，你是最自由的人。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_pirate_special_1'],
    requiredFlags: ['chain_pirate_adult_0'],
    identityExclusive: 'pirate',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_archaeologist_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一艘考古调查船上，父母都是深空考古学家。你的第一个玩具是一块来自失落文明的碎瓷片。',
      '作为深空考古学家之子，你七岁就随父母登上了{location}的一处遗迹现场。当你第一次触摸到百万年前的石刻时，一种奇异的共鸣感涌上心头。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_archaeologist_childhood_0'],
    identityExclusive: 'archaeologist',
  },
  {
    id: 'sf_ie_archaeologist_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '你在{location}的博物馆仓库里发现了一枚无法识别的芯片。所有扫描设备都显示它是惰性的，但当你把它握在手中时，它发出了微弱的蓝光。',
      '{npc}是你父母的学生，他告诉你一个秘密：人类文明的某些技术飞跃，其实来源于对上古遗迹的逆向工程——但联邦不希望公众知道这一点。',
    ],
    effects: { special: 5 },
    flags: ['chain_archaeologist_childhood_1'],
    identityExclusive: 'archaeologist',
  },
  {
    id: 'sf_ie_archaeologist_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '十五岁那年，你考入了银河系最顶尖的深空考古学院。但你的导师{npc}警告你："有些真相，人类还没准备好接受。"',
      '你在{location}的实习发掘中，发现了一座保存完好的上古城市。城市中心的计算机居然还在运行，屏幕上显示着一个倒计时。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_archaeologist_growth_0'],
    requiredFlags: ['chain_archaeologist_childhood_0'],
    identityExclusive: 'archaeologist',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_archaeologist_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '二十岁那年，你破译了那座城市的部分数据。一个惊人的真相浮出水面：人类文明——以及银河系中数十个文明——都源于同一个"播种者文明"。',
      '你在{location}遇到了一个活着的上古AI。它已经等待了五十万年，而它的第一句话是："你们终于来了，第1024号实验组。"',
    ],
    effects: { strength: 6 },
    flags: ['chain_archaeologist_growth_1'],
    requiredFlags: ['chain_archaeologist_childhood_0'],
    identityExclusive: 'archaeologist',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_archaeologist_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成年后的你已是银河系最负盛名的深空考古学家。但你的发现触动了太多势力的利益——联邦、 corporations、甚至外星文明都想让你闭嘴。',
      '你在{location}发现了播种者文明的"控制中枢"。那里有证据表明，所有文明的兴衰都被一个超维存在默默操控着。',
    ],
    effects: { special: 8 },
    flags: ['chain_archaeologist_adult_0'],
    requiredFlags: ['chain_archaeologist_growth_0'],
    identityExclusive: 'archaeologist',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_archaeologist_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '你可以选择：将真相公之于众，可能引发全银河系的恐慌和信仰崩塌；或者保守秘密，让人类继续活在"自由意志"的幻觉中。',
      '',
    ],
    choices: [
      { text: '公布真相，面对混乱', successRate: 1, successText: '你选择了公布真相，面对混乱，走上了属于自己的道路', failText: '你选择了公布真相，面对混乱，但前路比想象中更加艰难', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_identity_archaeologist_path'], failFlags: ['branch_identity_archaeologist_path_fail'] },
      { text: '保守秘密，维持秩序', successRate: 1, successText: '你选择了保守秘密，维持秩序，开启了一段全新的旅程', failText: '你选择了保守秘密，维持秩序，却发现代价远超预期', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_identity_archaeologist_new'], failFlags: ['branch_identity_archaeologist_new_fail'] },
    ],
    flags: ['chain_archaeologist_adult_1'],
    requiredFlags: ['chain_archaeologist_growth_0'],
    identityExclusive: 'archaeologist',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_archaeologist_07', category: 'identity_exclusive', minAge: 38, maxAge: 50, probability: 0.7,
    templates: [
      '你选择了公布真相。银河系陷入了短暂的混乱，但最终，各个文明开始联合探索控制中枢之外的"真实宇宙"。',
      '你选择了保守秘密。但你在暗中建立了一个"真相守望者"组织，致力于培养能够承受真相的新一代探索者。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_archaeologist_special_0'],
    requiredFlags: ['chain_archaeologist_adult_0'],
    identityExclusive: 'archaeologist',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_archaeologist_08', category: 'identity_exclusive', minAge: 50, maxAge: 62, probability: 0.7,
    templates: [
      '你最终找到了控制中枢的关闭方法。当播种者的监控系统停止运作的那一刻，你感受到了真正的自由——虽然前方的道路充满了未知。',
      '你在临终前留下了一段全息留言："我们不是实验品，我们是继承者。继承者有权知道自己的遗产，也有权决定自己的未来。"',
    ],
    effects: { special: 10 },
    flags: ['chain_archaeologist_special_1'],
    requiredFlags: ['chain_archaeologist_adult_0'],
    identityExclusive: 'archaeologist',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_hacker_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一个普通的殖民地家庭。但与其他孩子不同，你学习说话的同时就在学习编程语言。三岁时，你黑进了家里的智能冰箱。',
      '作为天生的网络黑客，你八岁就破解了{location}的 school district 防火墙，修改了所有学生的成绩单。{npc}——联邦网络犯罪科的探员——第一次敲响了你的家门。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_hacker_childhood_0'],
    identityExclusive: 'hacker',
  },
  {
    id: 'sf_ie_hacker_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '你在{location}的废弃网络中心发现了一台古老的终端。它没有连接任何网络，但当你触摸键盘时，你的意识被瞬间吸入了一个由数据构成的世界。',
      '那个数据世界中有一个自称为"幽灵"的存在。它说："你是天生的数字幽灵，可以在网络与现实的夹缝中生存。跟我学，我教你真正的技术。"',
    ],
    effects: { special: 5 },
    flags: ['chain_hacker_childhood_1'],
    identityExclusive: 'hacker',
  },
  {
    id: 'sf_ie_hacker_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '十五岁那年，你已经可以在{location}的公共网络中来去自如。你发现了联邦的一个秘密：所有公民的神经接口都被暗中监控着。',
      '你加入了地下黑客组织"零日"。他们在{location}的秘密服务器里建立了一个"自由数据港"——一个没有审查、没有监控的数字乌托邦。',
    ],
    effects: { special: 6 },
    flags: ['chain_hacker_growth_0'],
    requiredFlags: ['chain_hacker_childhood_0'],
    identityExclusive: 'hacker',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_hacker_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '二十岁那年，你第一次尝试了"全意识上传"。在{location}的地下诊所里，你的意识被短暂地投射到了纯数据空间中。那种感觉...无法形容。',
      '你在网络深处发现了一个自主进化的数字生命体。它不是被人类创造的，而是从海量数据中自发涌现的。它问你："你认为我算活着吗？"',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_hacker_growth_1'],
    requiredFlags: ['chain_hacker_childhood_0'],
    identityExclusive: 'hacker',
    chainPriority: 1,
  },
  {
    id: 'sf_ie_hacker_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成年后的你已是银河系最令人闻风丧胆的黑客。联邦开出天价悬赏你的人头，但没有人能找到你的真身——你已经在数十个服务器中留下了备份意识。',
      '{npc}代表一家 mega-corporation 向你提出了交易：为他们工作，获取无限的资源和保护；或者继续被追捕，直到某次失误让你万劫不复。',
    ],
    effects: { strength: 8 },
    flags: ['chain_hacker_adult_0'],
    requiredFlags: ['chain_hacker_growth_0'],
    identityExclusive: 'hacker',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_hacker_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '你可以选择：接受招安，成为企业安全部门的头号专家；或者继续作为自由黑客，为数字空间的自由而战。',
      '',
    ],
    choices: [
      { text: '接受招安，金盆洗手', successRate: 1, successText: '你选择了接受招安，金盆洗手，走上了属于自己的道路', failText: '你选择了接受招安，金盆洗手，但前路比想象中更加艰难', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_identity_hacker_path'], failFlags: ['branch_identity_hacker_path_fail'] },
      { text: '坚持自由，对抗体系', successRate: 1, successText: '你选择了坚持自由，对抗体系，开启了一段全新的旅程', failText: '你选择了坚持自由，对抗体系，却发现代价远超预期', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_identity_hacker_new'], failFlags: ['branch_identity_hacker_new_fail'] },
    ],
    flags: ['chain_hacker_adult_1'],
    requiredFlags: ['chain_hacker_growth_0'],
    identityExclusive: 'hacker',
    chainPriority: 2,
  },
  {
    id: 'sf_ie_hacker_07', category: 'identity_exclusive', minAge: 38, maxAge: 50, probability: 0.7,
    templates: [
      '你选择了接受招安。但你在企业网络中发现了更可怕的秘密——他们在秘密开发一种能将全人类意识"统一"的超级AI。',
      '你选择了坚持自由。你发动了银河系历史上最大规模的网络攻击，短暂地瘫痪了联邦的监控系统。那一分钟，整个银河系的公民第一次真正"自由"了。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_hacker_special_0'],
    requiredFlags: ['chain_hacker_adult_0'],
    identityExclusive: 'hacker',
    chainPriority: 3,
  },
  {
    id: 'sf_ie_hacker_08', category: 'identity_exclusive', minAge: 50, maxAge: 62, probability: 0.7,
    templates: [
      '你最终找到了一种方法：不需要摧毁系统，只需要给每个人"选择的权利"。你发布了一个开源的神经接口固件，让每个人都能选择是否被监控。',
      '你在数字空间中建立了一个"幽灵国度"——一个只存在于网络中的文明。那里的居民有些是人类上传的意识，有些是自主进化的AI，有些...连它们自己都不知道自己是什么。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_hacker_special_1'],
    requiredFlags: ['chain_hacker_adult_0'],
    identityExclusive: 'hacker',
    chainPriority: 3,
  },
  {
    id: 'sf_te_01', category: 'trash_exclusive', minAge: 0, maxAge: 6, probability: 0.92,
    templates: [
      '基因检测那日，{location}的医疗AI播报结果："基因序列异常，适应性评级：F。建议放弃星际居留资格。"全场一片死寂。',
      '作为被判定为基因缺陷的人，你只能看着同龄人在{location}接受机甲同步训练。他们嘲笑你是"进化失败的残次品"。',
    ],
    effects: { special: -5, strength: -2, intelligence: 3 },
    flags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'sf_te_02', category: 'trash_exclusive', minAge: 4, maxAge: 10, probability: 0.88,
    templates: [
      '你不甘心。每日深夜，你在{location}的垃圾拆解场翻找废弃零件，自学机械工程。{npc}路过时皱眉："基因缺陷的人，学这些有什么用？"',
      '你在{location}的废弃物处理中心淘到了半本残破的《机甲维修手册》。书页破损，开篇写道："真正的力量不在基因，在双手。"你如获至宝。',
    ],
    effects: { strength: 3, intelligence: 2, luck: 2 },
    flags: ['trash_childhood_1'],
    requiredFlags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'sf_te_03', category: 'trash_exclusive', minAge: 12, maxAge: 18, probability: 0.85,
    templates: [
      '你按照手册的方法，在{location}的地下工坊组装了一台简易动力外骨骼。第一次穿戴时，系统过载让你昏死过去。醒来时，你发现它能举起三倍于你的重量。',
      '别的天才一天能完成的机甲同步，你需要一个月。但你在{location}日复一日地调试机械，从未间断。{npc}偶然看到你的作品，震惊地说："这...这是失传的手动操控技术？"',
    ],
    effects: { strength: 5, health: 3, special: 2 },
    flags: ['trash_growth_0'],
    requiredFlags: ['trash_childhood_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'sf_te_04', category: 'trash_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '你在{location}救了一位被海盗重伤的退役机甲驾驶员。他感激之下，将自己珍藏的"纯手动驾驶舱"送给了你——那是连军方都没有的老古董。',
      '{npc}被你的毅力打动，决定收你为学徒。他说："我这一生见过无数天才机师，但像你这样的傻子，还是第一个。"你终于有了师父。',
    ],
    effects: { strength: 7, health: 5, charisma: 2 },
    flags: ['trash_growth_1'],
    requiredFlags: ['trash_growth_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'sf_te_05', category: 'trash_exclusive', minAge: 18, maxAge: 25, probability: 0.75,
    templates: [
      '经过多年的苦练，你在{location}遇到了一个瓶颈——纯手动机甲已到达性能极限，再无法对抗真正的基因同步机甲。一位路过的老工程师告诉你："你需要找到上古文明的遗产。"',
      '你在{location}的陨石坑中挖掘三月，终于找到了一块未知合金。用它改造你的机甲后，驾驶舱的响应速度提升了十倍——这技术不属于任何已知文明。',
    ],
    effects: { strength: 8, intelligence: 3, luck: 3 },
    flags: ['trash_growth_2'],
    requiredFlags: ['trash_growth_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'sf_te_06', category: 'trash_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '联邦举办全星区机甲大赛，你以"民间改装者"的身份报名参加。所有人都嘲笑你："一个基因缺陷的废物，也配驾驶机甲？"',
      '大赛第一轮，你对上了军方精英机师。对方驾驶着最新型的同步机甲，火力全开。你不依赖任何神经链接，仅凭双手和直觉——最终，你的上古合金装甲承受住了所有攻击，你用一记近身擒拿击败了对手。全场寂静。',
    ],
    effects: { strength: 8, charisma: 6, special: 3 },
    flags: ['trash_adult_0'],
    requiredFlags: ['trash_growth_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'sf_te_07', category: 'trash_exclusive', minAge: 30, maxAge: 40, probability: 0.72,
    templates: [
      '你的"纯手动机甲"震惊了机械工程界。{npc}说你是"万古以来第一个以基因缺陷之身击败同步机师的人"。各大星区开始重新审视"纯机械操控"这条被遗忘的道路。',
      '你在{location}建立了一座小小的"缺陷者工坊"，专门招收基因评级低下的孩子。你说："基因决定起点，但双手和大脑决定终点。"',
    ],
    effects: { charisma: 7, intelligence: 5, luck: 3 },
    flags: ['trash_adult_1'],
    requiredFlags: ['trash_adult_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'sf_te_08', category: 'trash_exclusive', minAge: 35, maxAge: 45, probability: 0.68,
    templates: [
      '昔日嘲笑你的基因检测员在{location}与你重逢。他依然拿着当年的检测报告，但手在颤抖。你接过报告，平静地说："这份F评级，是我最好的勋章。"',
      '{legend}的传说指向了一处上古战场遗迹，你说服探险队让你这个"基因缺陷的废物"也加入。他们抱着看笑话的心态同意了——但很快，他们就发现只有你的纯手动机甲不受遗迹干扰场的影响。',
    ],
    effects: { strength: 6, luck: 5, special: 4 },
    flags: ['trash_adult_2'],
    requiredFlags: ['trash_adult_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'sf_te_09', category: 'trash_exclusive', minAge: 28, maxAge: 42, probability: 0.65,
    templates: [
      '星区机甲大赛的决赛上，你对上了联邦冠军。对方是基因同步率99%的完美机师，而你连基础基因评级都不合格。所有人都认为这是一场屠杀——但他们错了。',
      '比赛开始前，{npc}暗中塞给你一支注射剂："这是远古文明的基因激活液，能短暂解锁你体内沉睡的远古序列，但事后会有严重副作用。用不用，你自己决定。"',
    ],
    effects: { strength: 3 },
    choices: [
      { text: '注射基因液，全力一战', successRate: 1, successText: '远古基因在你体内觉醒，你的反应速度超越了物理极限！你以不可能的操作击败了联邦冠军！全场震撼，万古未有！', failText: '基因液的反噬让你浑身剧痛，虽然勉强赢了比赛，但健康严重受损', effects: { strength: 15, charisma: 10, special: 5, health: -20 }, failEffects: { strength: 5, charisma: 3, health: -30 }, flags: ['branch_trash_fight'], failFlags: ['branch_trash_fight_fail'] },
      { text: '拒绝注射，以机械之力战斗', successRate: 1, successText: '你没有借助外力，仅凭纯手动操控与对方周旋百招。虽然最终惜败，但你赢得了所有人的尊重！', failText: '你拒绝了基因液，但实力差距太大，被一击击败。众人摇头："果然，废物就是废物。"', effects: { charisma: 10, luck: 8, strength: 5 }, failEffects: { charisma: -5, health: -15 }, flags: ['branch_trash_persist'], failFlags: ['branch_trash_persist_fail'] },
    ],
    flags: ['trash_climax_0'],
    requiredFlags: ['trash_adult_1'],
    talentExclusive: 'trash',
    chainPriority: 2,
  },
  {
    id: 'sf_te_10', category: 'trash_exclusive', minAge: 35, maxAge: 50, probability: 0.6,
    templates: [
      '你在{location}遇到了一位神秘的老工程师。他打量你许久，说："你的机甲已达凡人之极限。若想再进一步，需找到\'星核熔炉\'——用恒星之力重铸你的座驾，九死一生。"',
      '老者给了你两个选择：他可以帮你定位星核熔炉的坐标，用恒星之火重铸机甲；或者传你一套更稳妥的机械理论。',
    ],
    effects: { special: 3 },
    choices: [
      { text: '寻找星核熔炉，向死而生', successRate: 1, successText: '恒星之火烧毁了机甲的百分之九十，但剩下百分之十与星核合金完美融合——你成就了传说中的"恒星机甲"！', failText: '恒星之火超出了机甲的承受极限。虽然侥幸不死，但机体被毁大半，需要数年才能修复', effects: { strength: 20, special: 10, health: -25 }, failEffects: { health: -40, strength: 3 }, flags: ['branch_trash_transform'], failFlags: ['branch_trash_transform_fail'] },
      { text: '稳扎稳打，不求速成', successRate: 1, successText: '你选择了更稳妥的道路。虽然进展缓慢，但根基无比扎实。老者点头："大器晚成，方得始终。"', failText: '稳妥之路需要的时间远超预期。你知道，自己可能等不到大成的那一天', effects: { intelligence: 10, strength: 5, health: 5 }, failEffects: { intelligence: 3, luck: -3 }, flags: ['branch_trash_persist2'], failFlags: ['branch_trash_persist2_fail'] },
    ],
    flags: ['trash_climax_1'],
    requiredFlags: ['trash_climax_0'],
    talentExclusive: 'trash',
    chainPriority: 2,
  },
  {
    id: 'sf_te_11', category: 'trash_exclusive', minAge: 40, maxAge: 55, probability: 0.55,
    templates: [
      '你的故事传遍了银河系。{location}的缺陷者工坊每天都有人慕名而来——不是天才，而是那些被判定为"废物"的孩子。',
      '{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。不是因为我更强，而是因为我从未停下。"',
    ],
    effects: { charisma: 10, luck: 5, special: 5 },
    flags: ['trash_climax_2'],
    requiredFlags: ['trash_climax_1'],
    talentExclusive: 'trash',
    chainPriority: 3,
  },
  {
    id: 'sf_te_12', category: 'trash_exclusive', minAge: 45, maxAge: 60, probability: 0.5,
    templates: [
      '你驾驶着恒星机甲，单枪匹马击退了一支入侵{location}的外星舰队。没有基因同步，没有神经链接——只有钢铁、火焰和不屈的意志。',
      '你成为了万古以来第一个以基因缺陷之躯被载入银河英雄志的人。星舰大厅的纪念碑上，你的名字与那些完美基因者并列。',
    ],
    effects: { strength: 10, intelligence: 5, charisma: 10, special: 10 },
    flags: ['trash_legend'],
    requiredFlags: ['trash_climax_2'],
    talentExclusive: 'trash',
    chainPriority: 3,
  },
  {
    id: 'sf_te_13', category: 'trash_exclusive', minAge: 55, maxAge: 80, probability: 0.6,
    templates: [
      '你在{location}开办了"缺陷者学院"，专门招收基因评级低下的孩子。你说："天赋决定起点，但毅力和选择决定终点。"',
      '你的学生中有人开创了新的机甲流派，有人以纯手动操控成为了舰队指挥官。{npc}感叹："你一人之力，改变了一个时代的星际格局。"',
    ],
    effects: { charisma: 8, intelligence: 5 },
    flags: ['trash_elder_0'],
    requiredFlags: ['trash_legend'],
    talentExclusive: 'trash',
  },
  {
    id: 'sf_te_14', category: 'trash_exclusive', minAge: 60, maxAge: 90, probability: 0.55,
    templates: [
      '大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。',
      '你微笑着说："如果重来一次，我还是会选择做那个基因缺陷的废物。因为正是\'废物\'二字，让我找到了属于自己的道。"',
    ],
    effects: { charisma: 6, health: -5 },
    flags: ['trash_elder_1'],
    requiredFlags: ['trash_elder_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'sf_te_15', category: 'trash_exclusive', minAge: 70, maxAge: 100, probability: 0.5,
    templates: [
      '你离世的那天，{location}的恒星 unusually 明亮。无数你曾经帮助过的人自发前来为你送行。',
      '你的意识没有消散。人们传说，每当天才机师恃才傲物时，驾驶舱里就会响起一阵金属敲击声——那是你在提醒他们：不要小看任何一个"废物"。',
    ],
    effects: { charisma: 10, luck: 10 },
    flags: ['trash_ending'],
    requiredFlags: ['trash_elder_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'sf_cultivation_07', category: 'cultivation', minAge: 18, maxAge: 30, probability: 0.92,
    templates: [
      '你在{location}的科研中心/战舰中进行封闭式训练多年，终于触摸到了星际战士的门槛。{npc}告诉你："星际战士是银河征途的第一步。你将凡躯锻造成钢铁之躯，从此踏上星际战场。突破需要体能≥20、科技等级≥15。"',
      '你的能力已达瓶颈，在{location}感应到了星际战士的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部能量灌注于核心。刹那间，{location}的能量场疯狂涌入你的体内——你成功了！你突破到了星际战士！', failText: '你全力冲击瓶颈，但能量反噬，神经系统受损。虽然保住了性命，但能力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 80 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail_1'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了星际战士。', failText: '你的稳扎稳打被一场意外打断——{npc}的敌对阵营找上门来，中断了你的训练进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 56 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_1', 'realm_breakthrough_1_steady'], failFlags: ['realm_fail_1_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_1'], failFlags: [] },
    ],
    flags: ['realm_attempt_1'],
    chainPriority: 5,
  },
  {
    id: 'sf_cultivation_08', category: 'cultivation', minAge: 20, maxAge: 50, probability: 0.7360000000000001,
    templates: [
      '你突破到星际战士的消息传遍了银河系。{location}的科学家们/战士们纷纷前来祝贺，你的名字被刻在了联邦的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到星际战士，你走了18年。这速度，在银河系已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_1'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 2,
  },
  {
    id: 'sf_cultivation_09', category: 'cultivation', minAge: 23, maxAge: 60, probability: 0.644,
    templates: [
      '上一次突破星际战士失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了星际战士的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了星际战士！{location}的能量场因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与星际战士无缘...', effects: { realm: 1, special: 5, maxAge: 80 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail2_1'] },
    ],
    flags: ['realm_retry_1'],
    requiredFlags: ['realm_fail_1'],
    chainPriority: 3,
  },
  {
    id: 'sf_cultivation_10', category: 'cultivation', minAge: 35, maxAge: 55, probability: 0.88,
    templates: [
      '你在{location}的科研中心/战舰中进行封闭式训练多年，终于触摸到了舰长的门槛。{npc}告诉你："成为舰长意味着你拥有指挥一艘星舰的能力。你的决策将决定数百人的生死。突破需要智力≥35、科技等级≥30、体能≥20。"',
      '你的能力已达瓶颈，在{location}感应到了舰长的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部能量灌注于核心。刹那间，{location}的能量场疯狂涌入你的体内——你成功了！你突破到了舰长！', failText: '你全力冲击瓶颈，但能量反噬，神经系统受损。虽然保住了性命，但能力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 120 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail_2'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了舰长。', failText: '你的稳扎稳打被一场意外打断——{npc}的敌对阵营找上门来，中断了你的训练进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 84 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_2', 'realm_breakthrough_2_steady'], failFlags: ['realm_fail_2_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_2'], failFlags: [] },
    ],
    flags: ['realm_attempt_2'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 5,
  },
  {
    id: 'sf_cultivation_11', category: 'cultivation', minAge: 37, maxAge: 75, probability: 0.7040000000000001,
    templates: [
      '你突破到舰长的消息传遍了银河系。{location}的科学家们/战士们纷纷前来祝贺，你的名字被刻在了联邦的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到舰长，你走了35年。这速度，在银河系已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_2'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 2,
  },
  {
    id: 'sf_cultivation_12', category: 'cultivation', minAge: 40, maxAge: 85, probability: 0.616,
    templates: [
      '上一次突破舰长失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了舰长的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了舰长！{location}的能量场因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与舰长无缘...', effects: { realm: 1, special: 5, maxAge: 120 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail2_2'] },
    ],
    flags: ['realm_retry_2'],
    requiredFlags: ['realm_fail_2'],
    chainPriority: 3,
  },
  {
    id: 'sf_cultivation_13', category: 'cultivation', minAge: 60, maxAge: 90, probability: 0.85,
    templates: [
      '你在{location}的科研中心/战舰中进行封闭式训练多年，终于触摸到了舰队统帅的门槛。{npc}告诉你："舰队统帅指挥的不仅是战舰，更是战略与人心。你的名字开始在星区之间传颂。突破需要社交≥50、科技等级≥45。"',
      '你的能力已达瓶颈，在{location}感应到了舰队统帅的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部能量灌注于核心。刹那间，{location}的能量场疯狂涌入你的体内——你成功了！你突破到了舰队统帅！', failText: '你全力冲击瓶颈，但能量反噬，神经系统受损。虽然保住了性命，但能力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 200 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail_3'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了舰队统帅。', failText: '你的稳扎稳打被一场意外打断——{npc}的敌对阵营找上门来，中断了你的训练进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 140 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_3', 'realm_breakthrough_3_steady'], failFlags: ['realm_fail_3_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_3'], failFlags: [] },
    ],
    flags: ['realm_attempt_3'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 5,
  },
  {
    id: 'sf_cultivation_14', category: 'cultivation', minAge: 62, maxAge: 110, probability: 0.68,
    templates: [
      '你突破到舰队统帅的消息传遍了银河系。{location}的科学家们/战士们纷纷前来祝贺，你的名字被刻在了联邦的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到舰队统帅，你走了60年。这速度，在银河系已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_3'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 2,
  },
  {
    id: 'sf_cultivation_15', category: 'cultivation', minAge: 65, maxAge: 120, probability: 0.595,
    templates: [
      '上一次突破舰队统帅失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了舰队统帅的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了舰队统帅！{location}的能量场因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与舰队统帅无缘...', effects: { realm: 1, special: 5, maxAge: 200 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail2_3'] },
    ],
    flags: ['realm_retry_3'],
    requiredFlags: ['realm_fail_3'],
    chainPriority: 3,
  },
  {
    id: 'sf_cultivation_16', category: 'cultivation', minAge: 100, maxAge: 160, probability: 0.82,
    templates: [
      '你在{location}的科研中心/战舰中进行封闭式训练多年，终于触摸到了星际元帅的门槛。{npc}告诉你："星际元帅已能影响整个星区的命运。一念之间，可令星系易主，文明兴衰。突破需要智力≥70、科技等级≥60。"',
      '你的能力已达瓶颈，在{location}感应到了星际元帅的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部能量灌注于核心。刹那间，{location}的能量场疯狂涌入你的体内——你成功了！你突破到了星际元帅！', failText: '你全力冲击瓶颈，但能量反噬，神经系统受损。虽然保住了性命，但能力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 300 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail_4'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了星际元帅。', failText: '你的稳扎稳打被一场意外打断——{npc}的敌对阵营找上门来，中断了你的训练进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 210 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_4', 'realm_breakthrough_4_steady'], failFlags: ['realm_fail_4_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_4'], failFlags: [] },
    ],
    flags: ['realm_attempt_4'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 5,
  },
  {
    id: 'sf_cultivation_17', category: 'cultivation', minAge: 102, maxAge: 180, probability: 0.656,
    templates: [
      '你突破到星际元帅的消息传遍了银河系。{location}的科学家们/战士们纷纷前来祝贺，你的名字被刻在了联邦的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到星际元帅，你走了100年。这速度，在银河系已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_4'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 2,
  },
  {
    id: 'sf_cultivation_18', category: 'cultivation', minAge: 105, maxAge: 190, probability: 0.574,
    templates: [
      '上一次突破星际元帅失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了星际元帅的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了星际元帅！{location}的能量场因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与星际元帅无缘...', effects: { realm: 1, special: 5, maxAge: 300 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail2_4'] },
    ],
    flags: ['realm_retry_4'],
    requiredFlags: ['realm_fail_4'],
    chainPriority: 3,
  },
  {
    id: 'sf_cultivation_19', category: 'cultivation', minAge: 200, maxAge: 350, probability: 0.78,
    templates: [
      '你在{location}的科研中心/战舰中进行封闭式训练多年，终于触摸到了银河守护者的门槛。{npc}告诉你："银河守护者需直面维度裂隙与超维入侵。九死一生，但一旦成功，便是半步星神。突破需要体能≥90、科技等级≥80、运气≥60。"',
      '你的能力已达瓶颈，在{location}感应到了银河守护者的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部能量灌注于核心。刹那间，{location}的能量场疯狂涌入你的体内——你成功了！你突破到了银河守护者！', failText: '你全力冲击瓶颈，但能量反噬，神经系统受损。虽然保住了性命，但能力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 400 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail_5'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了银河守护者。', failText: '你的稳扎稳打被一场意外打断——{npc}的敌对阵营找上门来，中断了你的训练进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 280 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_5', 'realm_breakthrough_5_steady'], failFlags: ['realm_fail_5_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_5'], failFlags: [] },
    ],
    flags: ['realm_attempt_5'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 5,
  },
  {
    id: 'sf_cultivation_20', category: 'cultivation', minAge: 202, maxAge: 370, probability: 0.6240000000000001,
    templates: [
      '你突破到银河守护者的消息传遍了银河系。{location}的科学家们/战士们纷纷前来祝贺，你的名字被刻在了联邦的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到银河守护者，你走了200年。这速度，在银河系已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_5'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 2,
  },
  {
    id: 'sf_cultivation_21', category: 'cultivation', minAge: 205, maxAge: 380, probability: 0.5459999999999999,
    templates: [
      '上一次突破银河守护者失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了银河守护者的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了银河守护者！{location}的能量场因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与银河守护者无缘...', effects: { realm: 1, special: 5, maxAge: 400 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail2_5'] },
    ],
    flags: ['realm_retry_5'],
    requiredFlags: ['realm_fail_5'],
    chainPriority: 3,
  },
  {
    id: 'sf_cultivation_22', category: 'cultivation', minAge: 400, maxAge: 550, probability: 0.75,
    templates: [
      '你在{location}的科研中心/战舰中进行封闭式训练多年，终于触摸到了超维生命的门槛。{npc}告诉你："超维生命已触摸到更高维度的门槛。只需等待维度之门开启，便可升华。突破需要科技等级≥100。"',
      '你的能力已达瓶颈，在{location}感应到了超维生命的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部能量灌注于核心。刹那间，{location}的能量场疯狂涌入你的体内——你成功了！你突破到了超维生命！', failText: '你全力冲击瓶颈，但能量反噬，神经系统受损。虽然保住了性命，但能力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 800 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail_6'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了超维生命。', failText: '你的稳扎稳打被一场意外打断——{npc}的敌对阵营找上门来，中断了你的训练进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 560 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_6', 'realm_breakthrough_6_steady'], failFlags: ['realm_fail_6_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_6'], failFlags: [] },
    ],
    flags: ['realm_attempt_6'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 5,
  },
  {
    id: 'sf_cultivation_23', category: 'cultivation', minAge: 402, maxAge: 570, probability: 0.6000000000000001,
    templates: [
      '你突破到超维生命的消息传遍了银河系。{location}的科学家们/战士们纷纷前来祝贺，你的名字被刻在了联邦的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到超维生命，你走了400年。这速度，在银河系已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_6'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 2,
  },
  {
    id: 'sf_cultivation_24', category: 'cultivation', minAge: 405, maxAge: 580, probability: 0.5249999999999999,
    templates: [
      '上一次突破超维生命失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了超维生命的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了超维生命！{location}的能量场因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与超维生命无缘...', effects: { realm: 1, special: 5, maxAge: 800 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail2_6'] },
    ],
    flags: ['realm_retry_6'],
    requiredFlags: ['realm_fail_6'],
    chainPriority: 3,
  },
  {
    id: 'sf_cultivation_25', category: 'cultivation', minAge: 600, maxAge: 800, probability: 0.7,
    templates: [
      '你在{location}的科研中心/战舰中进行封闭式训练多年，终于触摸到了星神的门槛。{npc}告诉你："破碎维度，升华星神。从此脱离凡躯，以纯能量形态存在于星系之间。突破需要科技等级≥120、智力≥100。"',
      '你的能力已达瓶颈，在{location}感应到了星神的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部能量灌注于核心。刹那间，{location}的能量场疯狂涌入你的体内——你成功了！你突破到了星神！', failText: '你全力冲击瓶颈，但能量反噬，神经系统受损。虽然保住了性命，但能力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 9000 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail_7'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了星神。', failText: '你的稳扎稳打被一场意外打断——{npc}的敌对阵营找上门来，中断了你的训练进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 6300 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_7', 'realm_breakthrough_7_steady'], failFlags: ['realm_fail_7_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_7'], failFlags: [] },
    ],
    flags: ['realm_attempt_7'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 5,
  },
  {
    id: 'sf_cultivation_26', category: 'cultivation', minAge: 602, maxAge: 820, probability: 0.5599999999999999,
    templates: [
      '你突破到星神的消息传遍了银河系。{location}的科学家们/战士们纷纷前来祝贺，你的名字被刻在了联邦的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到星神，你走了600年。这速度，在银河系已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_7'],
    requiredFlags: ['realm_breakthrough_7'],
    chainPriority: 2,
  },
  {
    id: 'sf_cultivation_27', category: 'cultivation', minAge: 605, maxAge: 830, probability: 0.48999999999999994,
    templates: [
      '上一次突破星神失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了星神的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了星神！{location}的能量场因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与星神无缘...', effects: { realm: 1, special: 5, maxAge: 9000 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail2_7'] },
    ],
    flags: ['realm_retry_7'],
    requiredFlags: ['realm_fail_7'],
    chainPriority: 3,
  },
];
