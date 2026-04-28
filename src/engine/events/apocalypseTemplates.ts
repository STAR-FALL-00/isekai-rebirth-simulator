import type { EventTemplate } from './types';

// 末日废土 — 190 event templates
// Generated: 2026-04-27
// Rarity tiers: legendary(≤0.10) / epic(0.10-0.25) / rare(0.25-0.50) / common(0.50-0.85) / trash-exclusive
// Each template has 3-5 text variations, total ~760 actual events

export const apocalypseTemplates: EventTemplate[] = [
  {
    id: 'ap_ch_01', category: 'childhood', minAge: 0, maxAge: 3, probability: 0.037,
    templates: [
      '你出生那天，{location}突然辐射读数归零，所有仪器失效。{npc}跪地叩拜，说你是千年一遇的新人类始祖。',
      '你降生的瞬间，{location}的丧尸纷纷退避，{legend}的虚影在天际显现，整个废土为之震动。',
      '你的第一声啼哭引发了{location}的电力系统暴动，{npc}颤抖着说："新人类始祖降世了！"',
    ],
    effects: { luck: 10, special: 8, charisma: 5 },
  },
  {
    id: 'ap_ch_02', category: 'childhood', minAge: 2, maxAge: 7, probability: 0.124,
    templates: [
      '你在{location}玩耍时，体内突然涌出一股热流。{npc}惊讶地发现你竟是良性变异之资！',
      '三岁时，你在{location}无意间触发了战前的检测仪器，读数比所有人都高。',
      '{npc}为你进行基因检测，{legend}的印记在你身上一闪而逝——你是被选中的人。',
    ],
    effects: { special: 6, intelligence: 4 },
  },
  {
    id: 'ap_ch_03', category: 'childhood', minAge: 4, maxAge: 9, probability: 0.277,
    templates: [
      '你在{location}救了一只受伤的变异幼兽，它其实是{legend}的化身，临走前留下了一枚辐射结晶。',
      '{npc}在你满月时送了一块战前芯片，后来你发现那是一件失落科技的碎片。',
      '你从小就能看见别人看不见的{legend}幻影，{npc}说这是变异基因初现的征兆。',
      '你在{location}挖到了一罐战前罐头，吃了一半后浑身发热，体质隐隐增强。',
    ],
    effects: { intelligence: 4 },
  },
  {
    id: 'ap_ch_04', category: 'childhood', minAge: 0, maxAge: 6, probability: 0.568,
    templates: [
      '你生在普通人家，每天在{location}玩耍，日子平淡但快乐。',
      '{npc}教你读书识字，你学得有模有样。',
      '你在{location}认识了几个玩伴，度过了无忧无虑的童年。',
      '家里虽然不富裕，但{npc}总是把最好的留给你。',
    ],
    effects: { charisma: 2, luck: 1 },
  },
  {
    id: 'ap_ch_05', category: 'childhood', minAge: 3, maxAge: 10, probability: 0.708,
    templates: [
      '你在{location}帮{npc}干活，学会了很多生存技能。',
      '你的身体比同龄人强壮，{npc}说你是干粗活的好料子。',
      '你喜欢在{location}发呆，常常一坐就是一整天。',
      '{npc}给你讲了一个关于{legend}的故事，你听得入了迷。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },
  {
    id: 'ap_gr_01', category: 'growth', minAge: 15, maxAge: 20, probability: 0.058,
    templates: [
      '你在{location}独自求生三日，出关时眼中精光四射——你竟在生死搏斗中领悟了{legend}的传承！',
      '一场辐射风暴夜，你在{location}被高剂量辐射照射非但没死，反而激活了沉睡的基因！',
      '{legend}的残魂在{location}与你相遇，将毕生战斗技巧传授于你。',
    ],
    effects: { intelligence: 10, special: 8, strength: 5 },
  },
  {
    id: 'ap_gr_02', category: 'growth', minAge: 14, maxAge: 22, probability: 0.169,
    templates: [
      '你在{location}苦训三年，终于突破了困扰多年的瓶颈，实力大增！',
      '{npc}带你外出历练，你在{location}击败了一个强敌，获得了珍贵的战利品。',
      '你发现了{legend}留下的试炼场，通过考验后获得了意想不到的收获。',
    ],
    effects: { strength: 6, special: 5 },
  },
  {
    id: 'ap_gr_03', category: 'growth', minAge: 13, maxAge: 24, probability: 0.357,
    templates: [
      '你在{location}遇到了一生的宿敌，你们不打不相识，反而成为了朋友。',
      '{npc}传授你一项绝技，你花了整整一年才学会，但威力惊人。',
      '你在{location}救了一个被追杀的人，他为了报答你，送了一件宝物。',
      '你和同辈在{location}比试，虽然输了但收获巨大。',
    ],
    effects: { charisma: 4 },
  },
  {
    id: 'ap_gr_04', category: 'growth', minAge: 13, maxAge: 20, probability: 0.575,
    templates: [
      '你每天在{location}勤奋训练，虽然进步缓慢但根基扎实。',
      '{npc}督促你修炼，你不敢懈怠。',
      '你在{location}读了很多书，眼界开阔了不少。',
      '平平淡淡的一年，你在{location}默默积累着。',
    ],
    effects: { intelligence: 2, strength: 2 },
  },
  {
    id: 'ap_gr_05', category: 'growth', minAge: 16, maxAge: 25, probability: 0.759,
    templates: [
      '你在{location}结交了一些朋友，互相切磋进步。',
      '{npc}给你讲了很多前辈的故事，你深受启发。',
      '你在{location}处理了一些杂务，锻炼了自己的能力。',
      '这一年没什么特别的事发生，但你感觉自己在慢慢变强。',
    ],
    effects: { charisma: 2, luck: 2 },
  },
  {
    id: 'ap_ad_01', category: 'adult', minAge: 28, maxAge: 40, probability: 0.175,
    templates: [
      '你在{location}建立了自己的聚集地，广收追随者，一时间名声大噪。',
      '你参与了{legend}相关的大规模事件，在关键时刻力挽狂澜。',
      '你在{location}建立了属于自己的势力，各方强者纷纷来投。',
    ],
    effects: { charisma: 8, strength: 5, special: 5 },
  },
  {
    id: 'ap_ad_02', category: 'adult', minAge: 26, maxAge: 45, probability: 0.305,
    templates: [
      '你在{location}收下了第一个追随者，将自己的所学倾囊相授。',
      '你和宿敌在{location}进行了最终决战，胜负难分。',
      '你成功制造/修复了传说中的物品，引起了不小的轰动。',
    ],
    effects: { intelligence: 5, special: 4 },
  },
  {
    id: 'ap_ad_03', category: 'adult', minAge: 26, maxAge: 50, probability: 0.597,
    templates: [
      '你在{location}处理日常事务，势力稳步发展。',
      '{npc}来找你帮忙，你出手解决了他的难题。',
      '你在{location}度过了平静的一年，实力稳步提升。',
      '平平淡淡的一年，你在{location}默默修炼。',
    ],
    effects: { strength: 2, intelligence: 2, special: 2 },
  },
  {
    id: 'ap_el_01', category: 'elder', minAge: 50, maxAge: 120, probability: 0.504,
    templates: [
      '你在{location}闭关苦修，试图触摸更高境界的门槛。',
      '你游历废土，在{location}见识了各种奇人异事，意志更加坚定。',
      '你开始招收追随者，在{location}传授毕生所学。',
    ],
    effects: { intelligence: 3, special: 2 },
  },
  {
    id: 'ap_el_02', category: 'elder', minAge: 100, maxAge: 220, probability: 0.345,
    templates: [
      '你的实力已臻化境，成为了{location}的传说级人物。',
      '你开始着手准备最终的突破，{npc}专程前来为你护法。',
      '你将毕生所学整理成册，存放在{location}，等待有缘人。',
    ],
    effects: { intelligence: 8, charisma: 5 },
  },
  {
    id: 'ap_el_03', category: 'elder', minAge: 200, maxAge: 400, probability: 0.368,
    templates: [
      '你感应到了废土深处某种古老力量的召唤，在{location}布下重重防御准备迎接。',
      '你回顾一生战斗，在{location}寻找突破瓶颈的契机。',
      '{npc}带来消息：传说中的{legend}遗迹出现了异常波动，永恒的契机可能重现。',
    ],
    effects: { special: 10, intelligence: 5 },
  },
  {
    id: 'ap_el_04', category: 'elder', minAge: 400, maxAge: 700, probability: 0.143,
    templates: [
      '你已是永恒存在之下最强的生命，在{location}静待永恒契机的到来。',
      '你将毕生战斗感悟刻入数据芯片，留给后世有缘人。',
      '{npc}问你为何不急于追求永恒，你笑答："我在等一个时代。"',
    ],
    effects: { charisma: 10, special: 5 },
  },
  {
    id: 'ap_cb_01', category: 'combat', minAge: 20, maxAge: 40, probability: 0.061,
    templates: [
      '你在{location}以一己之力对抗十位同阶强者，最终大获全胜，一战成名！',
      '{legend}的敌人找上了你，你在{location}展开惊天大战，竟越级将其斩杀！',
      '你为了保护{location}的居民，独自对抗入侵的{legend}军团，创造了不可能的奇迹。',
    ],
    effects: { strength: 12, charisma: 8, health: -10 },
  },
  {
    id: 'ap_cb_02', category: 'combat', minAge: 18, maxAge: 45, probability: 0.14,
    templates: [
      '你参与了一场改变{location}格局的大规模战争，立下赫赫战功。',
      '{npc}挑战你的权威，你们在{location}大战三百回合，最终你险胜一招。',
      '你在{location}发现了{legend}留下的试炼场，通过了生死考验。',
    ],
    effects: { strength: 8, charisma: 4, health: -5 },
  },
  {
    id: 'ap_cb_03', category: 'combat', minAge: 15, maxAge: 35, probability: 0.285,
    templates: [
      '你在{location}遭遇强敌，展开了一场生死搏斗，最终险胜。',
      '你和{npc}在{location}切磋，双方都获益匪浅。',
      '你为了保护同伴，在{location}与敌人激战，受了轻伤。',
    ],
    effects: { strength: 5, health: -3 },
  },
  {
    id: 'ap_cb_04', category: 'combat', minAge: 25, maxAge: 50, probability: 0.388,
    templates: [
      '你在{location}参与了一场小规模冲突，表现出色。',
      '{npc}偷袭你，你在{location}勉强将其击退。',
      '你在{location}发现了敌人的据点，果断出击。',
    ],
    effects: { strength: 4, luck: 2 },
  },
  {
    id: 'ap_cb_05', category: 'combat', minAge: 15, maxAge: 40, probability: 0.585,
    templates: [
      '你在{location}进行了日常训练，技艺略有精进。',
      '你和同伴在{location}对练，互相学习。',
      '你在{location}演练新学的招式，逐渐熟练。',
    ],
    effects: { strength: 2 },
  },
  {
    id: 'ap_cb_06', category: 'combat', minAge: 30, maxAge: 60, probability: 0.728,
    templates: [
      '你在{location}指导后辈战斗技巧，自己也有所感悟。',
      '一场友好的比试在{location}举行，你获得了不错的名次。',
      '你在{location}观摩高手对决，学到了不少实战经验。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },
  {
    id: 'ap_rm_01', category: 'romance', minAge: 18, maxAge: 30, probability: 0.057,
    templates: [
      '你在{location}与{npc}相遇的瞬间，辐射检测仪突然爆表，{legend}的预言应验——你们是命中注定的伴侣。',
      '{npc}为了救你，不惜耗尽毕生积累的资源。你跪在{location}发誓：此生不负。',
      '你们的故事被{legend}记载，成为了{location}永恒的传说。',
    ],
    effects: { charisma: 10, luck: 8, health: 5 },
  },
  {
    id: 'ap_rm_02', category: 'romance', minAge: 20, maxAge: 35, probability: 0.102,
    templates: [
      '你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。',
      '{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。',
      '你们经历了{legend}的考验，感情反而更加坚不可摧。',
    ],
    effects: { charisma: 6, luck: 4 },
  },
  {
    id: 'ap_rm_03', category: 'romance', minAge: 16, maxAge: 30, probability: 0.286,
    templates: [
      '你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。',
      '你和{npc}在{location}月下相会，互诉衷肠。',
      '{npc}因为你的才华而倾心，主动向你示好。',
    ],
    effects: { charisma: 4, luck: 3 },
  },
  {
    id: 'ap_rm_04', category: 'romance', minAge: 25, maxAge: 40, probability: 0.382,
    templates: [
      '你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。',
      '{npc}送你一件定情信物，你珍藏在身边。',
      '你们一起在{location}经历了危险，感情更加深厚。',
    ],
    effects: { charisma: 3, luck: 2 },
  },
  {
    id: 'ap_rm_05', category: 'romance', minAge: 20, maxAge: 45, probability: 0.54,
    templates: [
      '你在{location}认识了一个有趣的人，但关系尚不明确。',
      '{npc}对你有些好感，但你还没想好如何回应。',
      '你在{location}参加了一场聚会，结识了不少异性。',
    ],
    effects: { charisma: 2 },
  },
  {
    id: 'ap_rm_06', category: 'romance', minAge: 30, maxAge: 50, probability: 0.721,
    templates: [
      '你和{npc}保持着朋友以上、恋人未满的关系。',
      '你在{location}看到了别人恩爱的场景，心中有些羡慕。',
      '这一年感情上没有太大的波澜，你专注于其他事情。',
    ],
    effects: { luck: 1 },
  },
  {
    id: 'ap_cultivation_01', category: 'cultivation', minAge: 40, maxAge: 70, probability: 0.037,
    templates: [
      '你在{location}独自求生九九八十一天，出关时天地共鸣，你已触摸到了{legend}的境界！',
      '你的实力达到了前所未有的高度，{location}的辐射能量因为你而沸腾。',
      '{legend}的虚影亲自降临{location}，为你指点大道。',
    ],
    effects: { special: 12, intelligence: 10, strength: 5 },
  },
  {
    id: 'ap_cultivation_02', category: 'cultivation', minAge: 30, maxAge: 60, probability: 0.155,
    templates: [
      '你成功将{legend}的技能融会贯通，实力暴涨！',
      '你在{location}经历了一场奇遇，实力大涨，连{npc}都震惊不已。',
      '你突破了困扰多年的瓶颈，{location}的天地异象持续了三日三夜。',
    ],
    effects: { special: 8, intelligence: 5 },
  },
  {
    id: 'ap_cultivation_03', category: 'cultivation', minAge: 20, maxAge: 50, probability: 0.3,
    templates: [
      '你在{location}闭关修炼，领悟了新的境界。',
      '{npc}传授你一项绝技，你勤加练习，终于大成。',
      '你在{location}发现了一处辐射充沛的宝地，修炼事半功倍。',
    ],
    effects: { special: 5, intelligence: 3 },
  },
  {
    id: 'ap_cultivation_04', category: 'cultivation', minAge: 35, maxAge: 65, probability: 0.381,
    templates: [
      '你在修炼中遇到了瓶颈，{npc}指点你突破。',
      '你在{location}经历了一场奇遇，实力有所精进。',
      '你成功制造/修复了辅助修炼的物品，效果显著。',
    ],
    effects: { special: 4, strength: 2 },
  },
  {
    id: 'ap_cultivation_05', category: 'cultivation', minAge: 13, maxAge: 40, probability: 0.563,
    templates: [
      '你在{location}按部就班地修炼，虽然没有突破但根基更加稳固。',
      '{npc}检查了你的修炼进度，表示满意。',
      '你在{location}研读战前文献，对一些技能有了新的理解。',
    ],
    effects: { special: 2, intelligence: 1 },
  },
  {
    id: 'ap_cultivation_06', category: 'cultivation', minAge: 40, maxAge: 80, probability: 0.756,
    templates: [
      '你在{location}巩固已有的修为，为下一次突破做准备。',
      '这一年修炼进度平平，但你没有气馁。',
      '{npc}提醒你不可急于求成，你虚心接受。',
    ],
    effects: { special: 2 },
  },
  {
    id: 'ap_ex_01', category: 'exploration', minAge: 25, maxAge: 50, probability: 0.049,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的核心传承，获得了改变命运的机缘！',
      '你在{location}找到了通往另一个区域的入口，{legend}的秘密向你敞开。',
      '你解开了一个困扰世人万年的谜题，{location}的真相让你震惊。',
    ],
    effects: { luck: 10, intelligence: 8, special: 6 },
  },
  {
    id: 'ap_ex_02', category: 'exploration', minAge: 20, maxAge: 45, probability: 0.167,
    templates: [
      '你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。',
      '你探索了一处危险的{location}，九死一生后带回了珍贵的宝物。',
      '{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。',
    ],
    effects: { luck: 6, strength: 4 },
  },
  {
    id: 'ap_ex_03', category: 'exploration', minAge: 15, maxAge: 40, probability: 0.293,
    templates: [
      '你深入{location}探险，发现了未知的秘密。',
      '你在{location}找到了一些有价值的物品，收获颇丰。',
      '你在{location}迷路了，却意外发现了一处隐蔽的安全屋。',
    ],
    effects: { luck: 4, strength: 2 },
  },
  {
    id: 'ap_ex_04', category: 'exploration', minAge: 30, maxAge: 55, probability: 0.406,
    templates: [
      '你在{location}发现了一些古老的壁画，记录着失落的文明。',
      '你探索了一处废弃的{location}，找到了一些有用的物资。',
      '{npc}带你进入了一个秘密的{location}，你大开眼界。',
    ],
    effects: { intelligence: 3, luck: 3 },
  },
  {
    id: 'ap_ex_05', category: 'exploration', minAge: 13, maxAge: 35, probability: 0.549,
    templates: [
      '你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。',
      '你跟着{npc}去{location}采集了一些材料。',
      '你在{location}发现了一些普通的草药，聊胜于无。',
    ],
    effects: { luck: 2 },
  },
  {
    id: 'ap_ex_06', category: 'exploration', minAge: 35, maxAge: 70, probability: 0.698,
    templates: [
      '你在{location}进行了常规的巡查，一切正常。',
      '你重访了以前去过的{location}，有了一些新的发现。',
      '你在{location}休息了一段时间，养精蓄锐。',
    ],
    effects: { health: 2 },
  },
  {
    id: 'ap_ws_01', category: 'world_story', minAge: 40, maxAge: 70, probability: 0.04,
    templates: [
      '{legend}的封印彻底破碎，整个废土陷入了前所未有的动荡，你被卷入了漩涡中心！',
      '一场席卷整个废土的大战爆发了，{location}首当其冲，你必须做出选择。',
      '废土的规则开始改变，{legend}的意志降临，所有人都受到了影响。',
    ],
    effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 },
  },
  {
    id: 'ap_ws_02', category: 'world_story', minAge: 30, maxAge: 60, probability: 0.123,
    templates: [
      '你发现{location}隐藏着改变废土的秘密，各方势力为此展开了明争暗斗。',
      '{npc}告诉你一个关于废土起源的惊天秘密，你的世界观被彻底颠覆。',
      '传说中的{legend}即将降临，所有人都在做准备，{location}的气氛紧张到了极点。',
    ],
    effects: { intelligence: 6, charisma: 4 },
  },
  {
    id: 'ap_ws_03', category: 'world_story', minAge: 25, maxAge: 50, probability: 0.323,
    templates: [
      '{location}附近发生了局部冲突，你不得不卷入其中。',
      '{npc}带来了一个重要的消息，可能影响到{location}的未来。',
      '你注意到了{location}的一些异常现象，似乎有什么大事要发生。',
    ],
    effects: { charisma: 3, luck: 3 },
  },
  {
    id: 'ap_ws_04', category: 'world_story', minAge: 20, maxAge: 45, probability: 0.503,
    templates: [
      '你听到了一些关于{legend}的传闻，但真假难辨。',
      '{location}发生了一些小变化，但你没有太在意。',
      '{npc}跟你聊了聊最近的时事，你表示关注。',
    ],
    effects: { intelligence: 2 },
  },
  {
    id: 'ap_ws_05', category: 'world_story', minAge: 40, maxAge: 80, probability: 0.683,
    templates: [
      '废土依旧平静，{location}的生活一如既往。',
      '你听说了一些关于{legend}的新消息，但似乎没什么实质内容。',
      '这一年没什么大事发生，你在{location}安稳度日。',
    ],
    effects: { luck: 1 },
  },
  {
    id: 'ap_hd_01', category: 'hidden', minAge: 60, maxAge: 120, probability: 0.053,
    templates: [
      '你超越了{legend}，看到了废土之外的真相——原来一切都只是...',
      '你发现了这个世界的运行规则，{location}只是一场巨大棋局的一角。',
      '{legend}的真正身份让你震惊不已，你终于理解了废土的本质。',
    ],
    effects: { intelligence: 15, special: 10 },
    conditions: [
      { stat: 'intelligence', min: 120 },
    ],
  },
  {
    id: 'ap_hd_02', category: 'hidden', minAge: 50, maxAge: 100, probability: 0.146,
    templates: [
      '你在{location}发现了一个被禁止入内的区域，里面藏着惊人的秘密。',
      '你解开了{legend}留下的谜题，获得了一份隐藏的传承。',
      '{npc}告诉你一个只有极少数人知道的秘密，你感到责任重大。',
    ],
    effects: { intelligence: 10, special: 8 },
    conditions: [
      { stat: 'intelligence', min: 100 },
    ],
  },
  {
    id: 'ap_hd_03', category: 'hidden', minAge: 35, maxAge: 80, probability: 0.349,
    templates: [
      '你在{location}找到了一条隐秘的通道，通向未知的地方。',
      '你发现了一些关于{legend}的隐藏记录，内容令人费解。',
      '{npc}偷偷塞给你一张地图，上面标记着{location}的秘密地点。',
    ],
    effects: { luck: 6, intelligence: 4 },
    conditions: [
      { stat: 'luck', min: 80 },
    ],
  },
  {
    id: 'ap_hd_04', category: 'hidden', minAge: 20, maxAge: 60, probability: 0.521,
    templates: [
      '你在{location}听到了一些奇怪的低语，但找不到来源。',
      '你做了一个关于{legend}的怪梦，醒来后记忆模糊。',
      '{npc}欲言又止，似乎想告诉你什么秘密但最终没说出口。',
    ],
    effects: { intelligence: 3 },
    conditions: [
      { stat: 'intelligence', min: 60 },
    ],
  },
  {
    id: 'ap_dt_01', category: 'death', minAge: 0, maxAge: 100, probability: 0.35,
    templates: [
      '你在{location}遭遇不测，生命力迅速流逝。',
      '你的身体到达了极限，{npc}无能为力。',
      '{legend}的诅咒降临在你身上，你无法抵抗。',
    ],
    effects: { health: -60 },
  },
  {
    id: 'ap_dt_02', category: 'death', minAge: 0, maxAge: 150, probability: 0.45,
    templates: [
      '你在{location}进行了最后的战斗，英勇牺牲。',
      '寿元耗尽，你在{location}静静地闭上了眼睛。',
      '你走火入魔，在{location}化为灰烬。',
    ],
    effects: { health: -80 },
  },
  {
    id: 'ap_dt_03', category: 'death', minAge: 0, maxAge: 200, probability: 0.55,
    templates: [
      '你在{location}被强敌击杀，死不瞑目。',
      '你的伤势恶化，{npc}尽力抢救但回天乏术。',
      '{legend}的力量反噬，你在{location}形神俱灭。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'ap_dt_04', category: 'death', minAge: 0, maxAge: 250, probability: 0.65,
    templates: [
      '你在{location}寿终正寝，周围的人都来为你送行。',
      '你安详地在{location}离世，一生无憾。',
      '{npc}守在你的床前，目送你离开这个世界。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'ap_dt_05', category: 'death', minAge: 0, maxAge: 300, probability: 0.75,
    templates: [
      '你在{location}结束了这一生，灵魂化作流光消散。',
      '你的故事成为了{location}的传说，后人会记得你的名字。',
      '{legend}亲自前来接引你的灵魂，你感到一阵温暖。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'ap_ws_06', category: 'world_story', minAge: 15, maxAge: 15, probability: 0.98,
    templates: [
      '你站在{location}的岔路口，{npc}告诉你："少年，废土上有三条路。留在避难所，安全但束缚；踏入废土，自由但危险；加入掠夺者，强大但堕落。选一条吧。"',
    ],
    choices: [
      { text: '留在避难所（安全但束缚）', successRate: 1, successText: '你选择了避难所的安全。你在地下掩体中接受了系统的训练，知识和技能突飞猛进。但每当听到地表的风声，你都会感到一丝遗憾', failText: '你选择了避难所，但封闭的生活让你窒息。你开始怀疑，这种安全是否真的值得', effects: { intelligence: 10, special: 8 }, failEffects: { charisma: -10, intelligence: 5 }, flags: ['major_shelter'], failFlags: ['major_shelter_fail'] },
      { text: '踏入废土（自由但危险）', successRate: 1, successText: '你选择了踏入废土。辐射、丧尸、掠夺者——每一步都可能是最后一步。但你也看到了地下从未有过的风景：落日、星空、和自由的风', failText: '你选择了废土，但现实比想象残酷。第一次遭遇掠夺者，你差点丧命', effects: { charisma: 10, luck: 8 }, failEffects: { charisma: -5, luck: -8 }, flags: ['major_wasteland'], failFlags: ['major_wasteland_fail'] },
      { text: '加入掠夺者（强大但堕落）', successRate: 1, successText: '你选择了掠夺者的道路。暴力成为了你的语言，恐惧成为了你的武器。你变得强大，但你的心也越来越冷', failText: '你选择了掠夺者，却在第一次劫掠中发现了自己无法逾越的道德底线。你逃走了，但已无法回头', effects: { strength: 12, special: 5 }, failEffects: { health: -25, intelligence: -5 }, flags: ['major_raider'], failFlags: ['major_raider_fail'] },
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  },
  {
    id: 'ap_ws_07', category: 'world_story', minAge: 20, maxAge: 28, probability: 0.88,
    templates: [
      '因为你选择了避难所，{location}的资源开始优先向你倾斜。你的知识储备远超同龄人，但你对外面世界的了解仅限于书本。',
      '你在{location}苦学五年，成为了避难所最年轻的技术专家。但你的同伴们说你的眼中"已经没有对自由的渴望"。',
    ],
    effects: { intelligence: 8, special: 6 },
    flags: ['major_shelter_1'],
    requiredFlags: ['major_shelter'],
  },
  {
    id: 'ap_ws_08', category: 'world_story', minAge: 30, maxAge: 40, probability: 0.85,
    templates: [
      '你因为追求知识而获得了强大的技术能力，但{npc}警告你："安全不是牢笼。战前的避难所居民，最终都因为封闭而灭亡。"',
      '你的技术达到了新的高度，{location}的电力系统因为你的改进而恢复了运转。但你发现，你已经想不起太阳的温度了。',
    ],
    effects: { special: 10, intelligence: 5, charisma: -5 },
    requiredFlags: ['major_shelter_1'],
  },
  {
    id: 'ap_ws_09', category: 'world_story', minAge: 20, maxAge: 28, probability: 0.88,
    templates: [
      '因为你选择了废土，在{location}遇到了一个流浪者家庭。他们不懂技术，但他们懂如何在辐射中生存。你们互相学习，成为了伙伴。',
      '你在废土中流浪，在{location}建立了一座小型农场，免费为路人提供食物和水。{npc}说："你这不是在浪费资源吗？"你说："这就是我的生存之道。"',
    ],
    effects: { charisma: 8, luck: 5, health: 5 },
    flags: ['major_wasteland_1'],
    requiredFlags: ['major_wasteland'],
  },
  {
    id: 'ap_ws_10', category: 'world_story', minAge: 30, maxAge: 40, probability: 0.85,
    templates: [
      '你在废土之路上的经历让你领悟了"共存道"——不同于避难所的"隔离道"，共存道认为只有经历过危险，才能真正理解生存。{location}的居民们开始模仿你的道路。',
      '{npc}告诉你，你的共存道正是战前"绿洲计划"所追求的。你冥冥之中，走上了最接近人类本意的道路。',
    ],
    effects: { charisma: 8, luck: 6, special: 4 },
    requiredFlags: ['major_wasteland_1'],
  },
  {
    id: 'ap_ws_11', category: 'world_story', minAge: 20, maxAge: 28, probability: 0.88,
    templates: [
      '因为你选择了掠夺者，在{location}建立了自己的威名。你的枪下，敌人闻风丧胆。但你也开始被其他定居点警惕——你的杀气太重了。',
      '你在{location}遇到了一个被掠夺者摧毁的村庄。幸存者看着你，眼中没有恐惧，只有仇恨。你开始怀疑：这真的是我要的生存之道吗？',
    ],
    effects: { strength: 8, charisma: -3 },
    flags: ['major_raider_1'],
    requiredFlags: ['major_raider'],
  },
  {
    id: 'ap_ws_12', category: 'world_story', minAge: 30, maxAge: 40, probability: 0.85,
    templates: [
      '你因为追求暴力而获得了强大的实力，但{npc}警告你："以暴制暴，自古以来只有一人成功——那就是开创掠夺者帝国的\'废土之王\'。其余所有人，都变成了只知道杀戮的怪物。"',
      '你的杀意越来越重，{location}的飞鸟经过你上空都会惊飞。你开始怀疑：这真的是我要的吗？',
    ],
    effects: { strength: 10, special: 5, intelligence: -5 },
    requiredFlags: ['major_raider_1'],
  },
  {
    id: 'ap_ws_13', category: 'world_story', minAge: 30, maxAge: 30, probability: 0.97,
    templates: [
      '{location}发生了一件震动废土的大事。一个神秘组织宣称找到了"净化装置"，可以消除全球辐射、恢复战前生态。但你在调查中发现了真相——那个装置需要牺牲所有变异者作为能量源。{npc}向你提出了一个交易：支持净化计划，你将成为新世界的英雄；反对它，你将被所有渴望净化的人追杀。这是对你灵魂的考验。',
    ],
    choices: [
      { text: '支持净化，消灭辐射', successRate: 1, successText: '你冒着被变异者追杀的风险，公开支持净化计划。虽然失去了变异者的信任，但你的决心前所未有地坚定——你知道，真正的未来不是适应辐射，而是消灭它', failText: '你支持了净化计划，但没有人相信你。变异者反咬一口，说你是种族灭绝的帮凶。你被驱逐，四处流亡', effects: { intelligence: 10, charisma: 6, luck: 5 }, failEffects: { health: -20, charisma: -10, strength: -5 }, flags: ['major_purify'], failFlags: ['major_purify_fail'] },
      { text: '反对净化，保护变异者', successRate: 1, successText: '你选择了反对净化计划，暗中联合变异者势力。三年后，你掌握了净化装置背后组织的完整阴谋，一举摧毁了他们的核心实验室', failText: '你的反对被当作默认。你越来越深地卷入了废土的黑暗面，等你想要抽身时，已经来不及了', effects: { intelligence: 8, luck: 6 }, failEffects: { charisma: -8, luck: -5 }, flags: ['major_protect_mutant'], failFlags: ['major_protect_mutant_fail'] },
      { text: '利用变异，建立统治', successRate: 1, successText: '你利用这个秘密要挟净化组织，获得了大量资源和地位。但你也知道，从这一刻起，你和他们没有区别了', failText: '你的要挟被反制。净化组织以"勾结变异者"的罪名将你列入追杀名单，你的废土之路到此终结', effects: { strength: 8, special: 5 }, failEffects: { charisma: -15, luck: -10, health: -20 }, flags: ['major_rule'], failFlags: ['major_rule_fail'] },
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  },
  {
    id: 'ap_ws_14', category: 'world_story', minAge: 35, maxAge: 45, probability: 0.85,
    templates: [
      '因为你支持了净化，{location}的纯人类们自发聚集到你身边。你的净化之名吸引了无数渴望恢复战前世界的人——你们成为了废土最特殊的"重建势力"。',
      '你在{location}建立了一个"净化研究所"，专门研究消除辐射的方法。变异者视你为眼中钉，但普通居民将你奉为神明。',
    ],
    effects: { intelligence: 8, charisma: 8, luck: 5 },
    requiredFlags: ['major_purify'],
  },
  {
    id: 'ap_ws_15', category: 'world_story', minAge: 35, maxAge: 45, probability: 0.85,
    templates: [
      '你因为保护变异者而获得了他们的信任。他们让你参与了更多机密，你也因此掌握了更多内幕。{npc}感叹："你是潜伏在黑暗中的光。"',
      '你在{location}发现了更大的阴谋——净化组织与某些大势力的内斗，其实是某位战前科学家留下的棋子博弈。而你，正在成为第三颗棋子。',
    ],
    effects: { intelligence: 10, luck: 5, special: 3 },
    requiredFlags: ['major_protect_mutant'],
  },
  {
    id: 'ap_ws_16', category: 'world_story', minAge: 35, maxAge: 45, probability: 0.85,
    templates: [
      '你因为不择手段而获得了强大的力量和资源。但{npc}看你的眼神变得复杂——那不是敬畏，那是怜悯。你在{location}建立了自己的势力，却发现自己越来越孤独。',
      '废土之王因为你的黑暗之路而对你产生了兴趣。他说："避难所培养出来的暴君，比掠夺者更纯粹。你来吧，我给你想要的一切。"',
    ],
    effects: { strength: 10, special: 6, charisma: -8 },
    requiredFlags: ['major_rule'],
  },
  {
    id: 'ap_ws_17', category: 'world_story', minAge: 45, maxAge: 45, probability: 0.96,
    templates: [
      '废土上的局势已经到了临界点。纯人类和变异者的冲突愈演愈烈，战争一触即发。{npc}告诉你："你有足够的声望和力量来影响这场战争的走向。你可以选择：推动人类统一，让所有人在一个旗帜下共存；支持变异者独立建国，承认他们与人类的平等地位；或者推动全面战争，让废土在毁灭中重生。"',
    ],
    choices: [
      { text: '推动人类统一，共存共荣', successRate: 1, successText: '你选择了推动统一。经过无数次谈判和妥协，你终于在{location}签署了《废土共存协议》——纯人类和变异者第一次在同一个政权下和平共处！', failText: '你试图推动统一，但双方的仇恨太深了。协议签署当天，刺客杀死了双方的代表，战争全面爆发', effects: { charisma: 15, intelligence: 10, luck: 5 }, failEffects: { health: -30, charisma: -10, strength: -10 }, flags: ['major_unify'], failFlags: ['major_unify_fail'] },
      { text: '支持变异者独立建国', successRate: 1, successText: '你选择了支持变异者独立。他们在{location}建立了"新纪元共和国"，成为了废土上第一个由变异者主导的国家。虽然纯人类不满，但和平的曙光已经出现', failText: '你支持了变异者独立，但纯人类势力发动了全面围剿。新成立的共和国在战火中摇摇欲坠', effects: { intelligence: 10, luck: 8, special: 10 }, failEffects: { health: -25, charisma: -8 }, flags: ['major_independent'], failFlags: ['major_independent_fail'] },
      { text: '推动全面战争，毁灭重生', successRate: 1, successText: '你选择了最极端的道路。战争席卷了整个废土，无数人在战火中丧生。但你也相信——只有彻底的毁灭，才能带来真正的新生', failText: '战争超出了你的控制。核冬天再次降临，废土变成了真正的地狱。你成为了历史的罪人', effects: { strength: 15, special: 10 }, failEffects: { health: -50, charisma: -20, intelligence: -10 }, flags: ['major_destroy'], failFlags: ['major_destroy_fail'] },
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  },
  {
    id: 'ap_ws_18', category: 'world_story', minAge: 48, maxAge: 58, probability: 0.82,
    templates: [
      '你成功推动统一的消息传遍了废土。{location}的居民们将你的名字刻在了"和平纪念碑"上——那是记录所有为和平做出贡献的人的地方。',
      '{npc}说你是废土历史上最伟大的谈判家。你的名字将被后世传颂，激励他们在仇恨面前永不放弃。',
    ],
    effects: { charisma: 10, luck: 8, special: 6 },
    requiredFlags: ['major_unify'],
  },
  {
    id: 'ap_ws_19', category: 'world_story', minAge: 48, maxAge: 58, probability: 0.82,
    templates: [
      '变异者共和国的建立改变了废土的格局。{location}的变异者们第一次有了自己的家园，他们称你为"建国之父"。',
      '{npc}赞叹你的勇气——"你不仅保护了变异者，你保护了所有被压迫者追求自由的权利。"',
    ],
    effects: { intelligence: 10, charisma: 8, special: 5 },
    requiredFlags: ['major_independent'],
  },
  {
    id: 'ap_ws_20', category: 'world_story', minAge: 48, maxAge: 58, probability: 0.82,
    templates: [
      '战争的硝烟散去后，{location}变成了一片废墟。但正如你所预言的，废墟中开始长出新的生命——比战前更顽强、更适应环境的生命。',
      '{npc}看着废墟中的嫩芽，说："你毁灭了一个世界，但也创造了一个新世界。历史会怎么评价你，取决于活下来的人。"',
    ],
    effects: { strength: 12, special: 8, charisma: -10 },
    requiredFlags: ['major_destroy'],
  },
  {
    id: 'ap_ws_21', category: 'world_story', minAge: 60, maxAge: 60, probability: 0.95,
    templates: [
      '你站在{location}的避难所主机前，人生的终局已经临近。战前遗留下来的主机可以上传你的意识，让你以数字生命的形式永远存在；或者你可以选择自然死亡，让你的肉体回归废土，成为传说；又或者，你可以将你的力量、知识和经验全部传承给下一代，然后平静地离去。',
    ],
    choices: [
      { text: '意识上传，数字永生', successRate: 1, successText: '你躺进了上传舱，意识被缓缓抽离肉体。当你再次"醒来"时，你已成为了避难所主机的一部分——你可以监控整个废土，保护所有你爱的人，直到永远', failText: '上传过程中出现了意外。你的意识数据受损，虽然存在，但已不再是完整的"你"。你成为了主机中一段混乱的代码', effects: { special: 20, intelligence: 15 }, failEffects: { health: -100, special: -30 }, flags: ['major_upload'], failFlags: ['major_upload_fail'] },
      { text: '自然死亡，成为传说', successRate: 1, successText: '你拒绝了上传。你在{location}度过了最后的时光，看着夕阳沉入地平线。你微笑着闭上了眼睛——你知道，你的故事将成为废土上最动人的传说', failText: '你选择了自然死亡，但临终前你发现，没有人记得你的贡献。你孤独地离开了这个世界', effects: { charisma: 15, health: 10, luck: 10 }, failEffects: { health: -50, charisma: 5 }, flags: ['major_legend'], failFlags: ['major_legend_fail'] },
      { text: '传承力量，培育后人', successRate: 1, successText: '你选择了传承。你将毕生所学、所有资源、甚至你的势力，都交给了一个年轻人。你说："我不是在结束，我是在开始。"然后，你平静地走向了最后的旅程', failText: '你试图传承，但继承人背叛了你。你一生的心血毁于一旦，带着遗憾离开了世界', effects: { charisma: 12, luck: 10, intelligence: 8 }, failEffects: { charisma: -15, luck: -10, health: -30 }, flags: ['major_legacy'], failFlags: ['major_legacy_fail'] },
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  },
  {
    id: 'ap_ws_22', category: 'world_story', minAge: 65, maxAge: 80, probability: 0.8,
    templates: [
      '你以数字生命的形式存在于主机中。你发现这里与凡界并无不同——有数据争斗、有系统漏洞、有不公。你说："既然我能改变废土，就能改变这里。"',
      '你在数字世界中找到了志同道合者，开始策划让主机更好地服务于所有废土居民。你的战斗，才刚刚开始。',
    ],
    effects: { special: 15, intelligence: 10, strength: 5 },
    requiredFlags: ['major_upload'],
  },
  {
    id: 'ap_ws_23', category: 'world_story', minAge: 65, maxAge: 80, probability: 0.8,
    templates: [
      '你离世的举动感动了无数人。{location}建起了你的雕像，不是你的神像，而是一个普通老人的形象——因为你说："我不是神，我只是不想离开废土的凡人。"',
      '你以凡人之躯活到了最后，见证了废土从毁灭到重生的全过程。临终前，你说："我不后悔。这片废土上的一草一木，都比数字世界更珍贵。"',
    ],
    effects: { charisma: 12, luck: 10, health: 5 },
    requiredFlags: ['major_legend'],
  },
  {
    id: 'ap_ws_24', category: 'world_story', minAge: 65, maxAge: 80, probability: 0.8,
    templates: [
      '你传承的力量在新一代手中发扬光大。{location}因为你培养的年轻人而变得更加繁荣。',
      '临终前，你看着继承人的背影，微笑着说："我留下的不是权力，不是财富，而是希望。只要有希望，废土就永远不会灭亡。"',
    ],
    effects: { charisma: 10, luck: 8, intelligence: 5 },
    requiredFlags: ['major_legacy'],
  },
  {
    id: 'ap_ie_shelter_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的地下掩体中。从出生起，你从未见过真正的太阳。{npc}告诉你："地表充满辐射和丧尸，只有这里才是安全的。"',
      '作为避难所居民，你在{location}的通风管道里度过了童年。你的玩具是废弃的电路板和生锈的螺丝。',
    ],
    effects: { special: 5 },
    flags: ['chain_shelter_childhood_0'],
    identityExclusive: 'shelter',
  },
  {
    id: 'ap_ie_shelter_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '五岁那年，{location}的净水系统故障，你目睹了第一批敢死队被派往地表抢修。他们回来时已不再是人类。',
      '你在{location}的图书馆里发现了一本战前画册，上面画着蓝天白云。你问{npc}："这是真的吗？"他沉默了很久。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_shelter_childhood_1'],
    identityExclusive: 'shelter',
  },
  {
    id: 'ap_ie_shelter_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，{location}发生了内部政变。你被迫在混乱中选择立场——支持现任管理者，还是加入反抗者。',
      '你偷偷溜进了{location}的禁闭区，发现那里关押着所谓的"变异者"。他们看起来和普通人没什么不同。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_shelter_growth_0'],
    requiredFlags: ['chain_shelter_childhood_0'],
    identityExclusive: 'shelter',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_shelter_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，{location}的食物储备即将耗尽。你被选入"地表初探队"，第一次踏上辐射遍地的废土。',
      '你遇到了一个地表流浪者{npc}，他告诉你避难所的高层一直在隐瞒真相——地表并非完全无法生存。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_shelter_growth_1'],
    requiredFlags: ['chain_shelter_childhood_0'],
    identityExclusive: 'shelter',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_shelter_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已经是{location}的资深居民。但你越来越无法忍受地下封闭的生活，你渴望看到真正的天空。',
      '你在{location}发现了一份战前档案，上面记载着地表辐射正在逐年衰减——也许重返地面的时机已经成熟。',
    ],
    effects: { special: 8 },
    flags: ['chain_shelter_adult_0'],
    requiredFlags: ['chain_shelter_growth_0'],
    identityExclusive: 'shelter',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_shelter_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：留在避难所，争取成为下一任管理者，维持现有的秩序；或者带领一批志同道合者离开，去地表建立新的家园。',
    ],
    choices: [
      { text: '留在避难所', successRate: 1, successText: '你选择了留在避难所，从此踏上了一条不归路。', failText: '你选择了留在避难所，但命运弄人，一切并未如你所愿。', effects: { charisma: 10, health: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_shelter_path'], failFlags: ['branch_identity_shelter_path_fail'] },
      { text: '重返地表', successRate: 1, successText: '你选择了重返地表，虽然道路不同，但终点未必更差。', failText: '你选择了重返地表，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_shelter_new'], failFlags: ['branch_identity_shelter_new_fail'] },
    ],
    flags: ['chain_shelter_adult_1'],
    requiredFlags: ['chain_shelter_growth_0'],
    identityExclusive: 'shelter',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_shelter_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你带领的队伍在{location}建立了第一个地表定居点。虽然辐射和丧尸仍是威胁，但你们种下了第一株在废土中发芽的植物。',
      '{npc}从避难所赶来，带来了震惊的消息：你离开后不久，避难所因内部冲突爆发了内战，死伤惨重。你的选择救了你。',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_shelter_special_0'],
    requiredFlags: ['chain_shelter_adult_0'],
    identityExclusive: 'shelter',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_shelter_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你的定居点发展成了废土上最著名的"曙光城"。城门口刻着你的话："我们不怕辐射，我们怕的是永远生活在黑暗中。"',
      '你成为了废土上第一个"地表复兴者"，你的故事激励了无数避难所居民走出地下，拥抱未知的废土。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_shelter_special_1'],
    requiredFlags: ['chain_shelter_adult_0'],
    identityExclusive: 'shelter',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_raider_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的一个掠夺者帮派中。你的第一个玩具是一把生锈的匕首，你的摇篮是一堆战利品。',
      '作为掠夺者的后代，你五岁就学会了如何在{location}的垃圾场里寻找可用的弹药。{npc}说你是"天生的战士"。',
    ],
    effects: { special: 5 },
    flags: ['chain_raider_childhood_0'],
    identityExclusive: 'raider',
  },
  {
    id: 'ap_ie_raider_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '八岁那年，你目睹了{npc}被敌对帮派伏击身亡。你握紧了那把生锈的匕首，发誓要让他付出代价。',
      '你在{location}的一次劫掠中被俘，但对方的老大看中了你眼中的狠劲，决定收养你作为帮派的"继承人"。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_raider_childhood_1'],
    identityExclusive: 'raider',
  },
  {
    id: 'ap_ie_raider_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你带领一队人马袭击了{location}的商队。但当你看到商队中有个和你一样大的孩子时，你的手第一次颤抖了。',
      '你在{location}与另一个帮派火并，以少胜多，一战成名。各大帮派开始传颂你的名字——"废土之狼"。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_raider_growth_0'],
    requiredFlags: ['chain_raider_childhood_0'],
    identityExclusive: 'raider',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_raider_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你成为了帮派最年轻的干部。但你也发现了老大的秘密：他暗中与避难所交易，出卖了自己人的情报。',
      '你在{location}遇到了一个独行佣兵。他告诉你："暴力可以统治一时，但不能统治一世。你想当一辈子的强盗，还是想当废土之王？"',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_raider_growth_1'],
    requiredFlags: ['chain_raider_childhood_0'],
    identityExclusive: 'raider',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_raider_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已是{location}最强大的掠夺者首领。但你开始厌倦无尽的杀戮——每次劫掠后，你都会做同一个噩梦。',
      '你的帮派内部出现了分裂。一部分人主张继续劫掠，另一部分人说应该建立秩序、保护弱者。',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_raider_adult_0'],
    requiredFlags: ['chain_raider_growth_0'],
    identityExclusive: 'raider',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_raider_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：镇压反对派，以暴力维持统治，成为废土最令人恐惧的暴君；或者改变帮派的路线，从掠夺者转型为守护者。',
    ],
    choices: [
      { text: '暴力统治', successRate: 1, successText: '你选择了暴力统治，从此踏上了一条不归路。', failText: '你选择了暴力统治，但命运弄人，一切并未如你所愿。', effects: { strength: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_raider_path'], failFlags: ['branch_identity_raider_path_fail'] },
      { text: '转型守护者', successRate: 1, successText: '你选择了转型守护者，虽然道路不同，但终点未必更差。', failText: '你选择了转型守护者，却发现这条路比你想象的更加艰难。', effects: { intelligence: 8, special: 3 }, failEffects: { strength: -3 }, flags: ['branch_identity_raider_new'], failFlags: ['branch_identity_raider_new_fail'] },
    ],
    flags: ['chain_raider_adult_1'],
    requiredFlags: ['chain_raider_growth_0'],
    identityExclusive: 'raider',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_raider_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了转型。你将帮派改名为"废土巡逻队"，专门保护商队和定居点。曾经的敌人们难以置信——"那个杀人如麻的掠夺者，竟然在保护我们？"',
      '{npc}带着旧部来挑战你。你说："时代变了。废土不需要更多的掠夺者，废土需要秩序。"你们展开了一场决定废土未来的决斗。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_raider_special_0'],
    requiredFlags: ['chain_raider_adult_0'],
    identityExclusive: 'raider',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_raider_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你赢了。旧部们跪地臣服。你建立了废土上第一个"掠夺得来的和平"——以战止战，以暴制暴，最终走向秩序。',
      '后人称你为"铁腕之王"。你的雕像手持断裂的匕首和绽放的玫瑰，象征着从毁灭到重生的转变。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_raider_special_1'],
    requiredFlags: ['chain_raider_adult_0'],
    identityExclusive: 'raider',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_mutant_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的辐射区边缘。你的身体从出生起就与常人不同——你的皮肤会在黑暗中发出微弱的荧光。',
      '作为变异者，你在{location}被其他孩子叫做"怪物"。他们不敢靠近你，因为传说变异者会传染辐射病。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_mutant_childhood_0'],
    identityExclusive: 'mutant',
  },
  {
    id: 'ap_ie_mutant_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '七岁那年，你在{location}遭遇了一群丧尸。危急时刻，你体内某种力量觉醒——你释放出一道能量波，将丧尸全部震碎！',
      '{npc}发现了你的异常，没有恐惧，反而兴奋地说："你是\'觉醒变异者\'的苗子！跟我走，我教你控制这股力量。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_mutant_childhood_1'],
    identityExclusive: 'mutant',
  },
  {
    id: 'ap_ie_mutant_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}的变异森林中修炼。你发现自己能与变异植物沟通，让它们为你作战。',
      '你的变异能力开始不稳定。一次暴走中，你不小心摧毁了{location}的一座房屋。{npc}帮助你学会了控制。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_mutant_growth_0'],
    requiredFlags: ['chain_mutant_childhood_0'],
    identityExclusive: 'mutant',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_mutant_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你遇到了"纯人类至上组织"。他们认为变异者是地球的污染源，必须被清除。你成为了他们的追杀目标。',
      '你在{location}救了一个纯人类女孩。她说："我以前以为所有变异者都是怪物。但你救了我的命。"',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_mutant_growth_1'],
    requiredFlags: ['chain_mutant_childhood_0'],
    identityExclusive: 'mutant',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_mutant_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已完全掌控了自己的变异能力。但你也面临抉择：继续进化，成为更强大的存在，但可能失去人性；或者保持现状，做一个有人性的变异者。',
      '纯人类至上组织在{location}发动了大规模清洗。你可以选择站在变异者一边反击，或者尝试和平对话。',
    ],
    effects: { strength: 8 },
    flags: ['chain_mutant_adult_0'],
    requiredFlags: ['chain_mutant_growth_0'],
    identityExclusive: 'mutant',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_mutant_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：彻底释放变异潜能，获得毁天灭地的力量，但会逐渐丧失自我意识；或者压制变异，保持人性，但永远达不到进化的巅峰。',
    ],
    choices: [
      { text: '彻底进化', successRate: 1, successText: '你选择了彻底进化，从此踏上了一条不归路。', failText: '你选择了彻底进化，但命运弄人，一切并未如你所愿。', effects: { intelligence: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_mutant_path'], failFlags: ['branch_identity_mutant_path_fail'] },
      { text: '保持人性', successRate: 1, successText: '你选择了保持人性，虽然道路不同，但终点未必更差。', failText: '你选择了保持人性，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_mutant_new'], failFlags: ['branch_identity_mutant_new_fail'] },
    ],
    flags: ['chain_mutant_adult_1'],
    requiredFlags: ['chain_mutant_growth_0'],
    identityExclusive: 'mutant',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_mutant_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了保持人性。虽然你的力量不如彻底进化的同类强大，但你证明了变异者也可以是守护者，而不是怪物。',
      '你建立了"变异者与人类共存联盟"，在{location}设立了第一个混居区。纯人类和变异者开始学会互相理解。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_mutant_special_0'],
    requiredFlags: ['chain_mutant_adult_0'],
    identityExclusive: 'mutant',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_mutant_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你成为了"觉醒变异者"境界的领袖。你说："变异不是诅咒，是地球给我们的礼物。关键是我们选择用它来毁灭，还是来保护。"',
      '你的混居区成为了废土上最繁荣的聚集地之一。后人称你为"平衡者"——在毁灭与守护之间，你选择了后者。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_mutant_special_1'],
    requiredFlags: ['chain_mutant_adult_0'],
    identityExclusive: 'mutant',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_scientist_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的一个战前地下实验室里。你的父母是最后一批科学家，他们保存着战前的所有知识。',
      '作为科学家的后代，你从小就被教导阅读战前文献。八岁时，你已能独立操作辐射检测仪。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_scientist_childhood_0'],
    identityExclusive: 'scientist',
  },
  {
    id: 'ap_ie_scientist_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你在{location}发现了一台还能运转的战前电脑。里面存储着大量失落的技术资料——能源、农业、医学。你如获至宝。',
      '{npc}告诉你一个秘密：你的父母正在研究一种能净化辐射的装置，但缺少一种稀有的战前材料。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_scientist_childhood_1'],
    identityExclusive: 'scientist',
  },
  {
    id: 'ap_ie_scientist_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你独自潜入了{location}的废弃军事基地，找到了父母需要的稀有材料——一块完整的聚变电池。',
      '你在{location}的实验室里完成了第一个独立发明：一种能过滤辐射水的简易装置。附近的定居点争相购买。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_scientist_growth_0'],
    requiredFlags: ['chain_scientist_childhood_0'],
    identityExclusive: 'scientist',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_scientist_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你的研究引起了避难所高层的注意。他们邀请你加入"文明重启计划"——一个试图恢复战前科技的宏大工程。',
      '但你也发现，"文明重启计划"的真正目的不是拯救所有人，而是让少数精英独占科技。',
    ],
    effects: { special: 6 },
    flags: ['chain_scientist_growth_1'],
    requiredFlags: ['chain_scientist_childhood_0'],
    identityExclusive: 'scientist',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_scientist_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已是一位著名科学家。你面临抉择：继续为避难所工作，获得无限的资源但服务于精英；或者离开，用科技帮助所有废土居民。',
      '你在{location}发现了一种能加速植物生长的辐射中和剂——这可能是解决废土粮食危机的关键。',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_scientist_adult_0'],
    requiredFlags: ['chain_scientist_growth_0'],
    identityExclusive: 'scientist',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_scientist_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：将中和剂的配方献给避难所，换取荣华富贵但让技术被垄断；或者公开配方，让所有定居点都能自产粮食。',
    ],
    choices: [
      { text: '献给避难所', successRate: 1, successText: '你选择了献给避难所，从此踏上了一条不归路。', failText: '你选择了献给避难所，但命运弄人，一切并未如你所愿。', effects: { strength: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_scientist_path'], failFlags: ['branch_identity_scientist_path_fail'] },
      { text: '公开配方', successRate: 1, successText: '你选择了公开配方，虽然道路不同，但终点未必更差。', failText: '你选择了公开配方，却发现这条路比你想象的更加艰难。', effects: { intelligence: 8, special: 3 }, failEffects: { strength: -3 }, flags: ['branch_identity_scientist_new'], failFlags: ['branch_identity_scientist_new_fail'] },
    ],
    flags: ['chain_scientist_adult_1'],
    requiredFlags: ['chain_scientist_growth_0'],
    identityExclusive: 'scientist',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_scientist_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了公开配方。中和剂很快传遍了整个废土，饿死的人越来越少。避难所高层暴怒，但已无法阻止技术的传播。',
      '你在{location}建立了"废土科学院"，不分出身、不论立场，所有对科学有兴趣的人都可以来学习。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_scientist_special_0'],
    requiredFlags: ['chain_scientist_adult_0'],
    identityExclusive: 'scientist',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_scientist_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你的科学院培养出了无数人才。他们修复了电网、净化了水源、甚至开始重建通讯网络。',
      '你临终前说："知识不应该被锁在保险柜里。战前文明之所以毁灭，就是因为知识只属于少数人。"',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_scientist_special_1'],
    requiredFlags: ['chain_scientist_adult_0'],
    identityExclusive: 'scientist',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_mechanic_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的一个废弃修车厂里。你的摇篮是一台翻倒的摩托车，你的第一个朋友是一把扳手。',
      '作为机械师的后代，你从小就展现出对机械的惊人天赋。五岁时，你拆开了一台收音机，又原样装了回去。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_mechanic_childhood_0'],
    identityExclusive: 'mechanic',
  },
  {
    id: 'ap_ie_mechanic_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你在{location}的垃圾场里找到了一台战前机器人的残骸。你花了整整一年，将它修复成了你的第一个"机械伙伴"。',
      '{npc}看中了你的天赋，收你为徒。他教你如何在废土中识别可用的零件，如何用有限的资源创造奇迹。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_mechanic_childhood_1'],
    identityExclusive: 'mechanic',
  },
  {
    id: 'ap_ie_mechanic_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你造出了人生第一辆战车——用一辆报废的吉普车底盘、一台摩托引擎和无数的铁皮焊接而成。',
      '你在{location}的废弃军事基地里发现了一整仓库的战前机械零件。你花了一个月，将它们全部搬运回了你的工坊。',
    ],
    effects: { strength: 6 },
    flags: ['chain_mechanic_growth_0'],
    requiredFlags: ['chain_mechanic_childhood_0'],
    identityExclusive: 'mechanic',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_mechanic_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你组建了废土上第一支"机械护卫队"——由你修复的战前机器人和改装战车组成的武装力量。',
      '但你也引来了麻烦。一个大型掠夺者帮派盯上了你的技术，威胁你为他们制造战争机器。',
    ],
    effects: { special: 6 },
    flags: ['chain_mechanic_growth_1'],
    requiredFlags: ['chain_mechanic_childhood_0'],
    identityExclusive: 'mechanic',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_mechanic_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已是废土上最著名的机械师。掠夺者帮派给你下了最后通牒：为他们制造战车，或者被毁灭。',
      '你在{location}的工坊里，面对着堆积如山的零件。你可以选择屈服于暴力，或者用你的机械军团反抗。',
    ],
    effects: { special: 8 },
    flags: ['chain_mechanic_adult_0'],
    requiredFlags: ['chain_mechanic_growth_0'],
    identityExclusive: 'mechanic',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_mechanic_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：为掠夺者制造战争机器，换取暂时的安全但成为帮凶；或者武装你的机械军团，与掠夺者正面决战。',
    ],
    choices: [
      { text: '屈服于暴力', successRate: 1, successText: '你选择了屈服于暴力，从此踏上了一条不归路。', failText: '你选择了屈服于暴力，但命运弄人，一切并未如你所愿。', effects: { intelligence: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_mechanic_path'], failFlags: ['branch_identity_mechanic_path_fail'] },
      { text: '武装反抗', successRate: 1, successText: '你选择了武装反抗，虽然道路不同，但终点未必更差。', failText: '你选择了武装反抗，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_mechanic_new'], failFlags: ['branch_identity_mechanic_new_fail'] },
    ],
    flags: ['chain_mechanic_adult_1'],
    requiredFlags: ['chain_mechanic_growth_0'],
    identityExclusive: 'mechanic',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_mechanic_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了反抗。你的机械军团在{location}与掠夺者展开了决战。机器人、战车、无人机——你用钢铁与智慧，击败了数倍于己的敌人。',
      '你成为了废土上的"钢铁守护者"。你宣布：任何掠夺者敢动无辜的定居点，就要先过你的机械军团这一关。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_mechanic_special_0'],
    requiredFlags: ['chain_mechanic_adult_0'],
    identityExclusive: 'mechanic',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_mechanic_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你的工坊发展成了"废土工业大学"。无数年轻人在那里学习机械知识，修复战前科技。',
      '你临终前，将你的最后一个发明——一台拥有自我学习能力的机器人——启动。你说："去保护那些无法保护自己的人。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_mechanic_special_1'],
    requiredFlags: ['chain_mechanic_adult_0'],
    identityExclusive: 'mechanic',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_new_human_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的一个秘密实验室里。你不是自然孕育的，而是战前基因工程的产物——"新人类计划"的最后一批实验体。',
      '作为新人类，你从小就被告知：你是人类的进化版，比旧人类更聪明、更强壮、更长寿。但你从未见过其他同类。',
    ],
    effects: { special: 5 },
    flags: ['chain_new_human_childhood_0'],
    identityExclusive: 'new_human',
  },
  {
    id: 'ap_ie_new_human_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '七岁那年，你在{location}的实验室里发现了其他"失败"的实验体——他们被冷冻在液氮罐中，永远沉睡。你开始质疑自己的存在意义。',
      '{npc}是你的监护人，一位旧人类科学家。他告诉你："新人类不是神，也不是怪物。你们只是人类的一种可能。"',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_new_human_childhood_1'],
    identityExclusive: 'new_human',
  },
  {
    id: 'ap_ie_new_human_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你第一次离开{location}，进入旧人类的世界。他们的目光中有恐惧、有嫉妒、也有好奇。',
      '你在{location}遇到了一个旧人类少年。他和你一样大，但比你瘦弱得多。你们成为了朋友——这是第一次跨物种的友谊。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_new_human_growth_0'],
    requiredFlags: ['chain_new_human_childhood_0'],
    identityExclusive: 'new_human',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_new_human_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，旧人类与新人类的冲突爆发了。有人主张新人类应该统治旧人类，有人主张和平共存。你站在十字路口。',
      '{npc}告诉你一个秘密：新人类计划并没有终止，实验室里还有数千个胚胎在等待唤醒。',
    ],
    effects: { strength: 6 },
    flags: ['chain_new_human_growth_1'],
    requiredFlags: ['chain_new_human_childhood_0'],
    identityExclusive: 'new_human',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_new_human_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已完全觉醒了自己的新人类能力。但你也发现了一个可怕的真相：新人类的基因存在缺陷，所有新人类都会在五十岁前因基因崩溃而死亡。',
      '你在{location}的实验室里，面对着数千个胚胎。你可以选择唤醒他们，延续新人类的火种；或者销毁他们，让新人类计划彻底终结。',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_new_human_adult_0'],
    requiredFlags: ['chain_new_human_growth_0'],
    identityExclusive: 'new_human',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_new_human_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：继续推进新人类计划，唤醒所有胚胎，建立一个新人类主导的世界；或者放弃新人类的优越性，寻找与旧人类融合的方法。',
    ],
    choices: [
      { text: '推进新人类计划', successRate: 1, successText: '你选择了推进新人类计划，从此踏上了一条不归路。', failText: '你选择了推进新人类计划，但命运弄人，一切并未如你所愿。', effects: { charisma: 10, health: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_new_human_path'], failFlags: ['branch_identity_new_human_path_fail'] },
      { text: '放弃优越性', successRate: 1, successText: '你选择了放弃优越性，虽然道路不同，但终点未必更差。', failText: '你选择了放弃优越性，却发现这条路比你想象的更加艰难。', effects: { intelligence: 8, special: 3 }, failEffects: { strength: -3 }, flags: ['branch_identity_new_human_new'], failFlags: ['branch_identity_new_human_new_fail'] },
    ],
    flags: ['chain_new_human_adult_1'],
    requiredFlags: ['chain_new_human_growth_0'],
    identityExclusive: 'new_human',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_new_human_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了放弃优越性。你与旧人类科学家合作，研究出了能将新人类基因优势稳定传递给下一代的技术——不再区分新旧，所有人类都可以变得更强大。',
      '你关闭了{location}的秘密实验室，释放了所有胚胎。你说："我们不叫新人类，也不叫旧人类。我们只是——人类。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_new_human_special_0'],
    requiredFlags: ['chain_new_human_adult_0'],
    identityExclusive: 'new_human',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_new_human_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你的技术让人类整体进化了一个台阶。没有新人类和旧人类的区别，只有愿意进化和拒绝进化的人。',
      '后人称你为"融合者"。你的墓碑上没有头衔，只有一句话："进化不是为了优越，是为了共存。"',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_new_human_special_1'],
    requiredFlags: ['chain_new_human_adult_0'],
    identityExclusive: 'new_human',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_doctor_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的一个临时诊所里。你的父母不是医生，但你是被{npc}从废墟中捡回来的弃婴——一场瘟疫中唯一的幸存者。',
      '作为废土医生的养子，你从小就在{location}的诊所里帮忙。你学会了如何缝合伤口、如何分辨草药、如何在缺乏药品的情况下救人。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_doctor_childhood_0'],
    identityExclusive: 'doctor',
  },
  {
    id: 'ap_ie_doctor_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '七岁那年，{location}爆发了一场辐射病。你看着{npc}连续三天三夜没有睡觉，救活了一个又一个人。你说："长大后，我也要成为这样的人。"',
      '你在{location}的旧医院里发现了一批战前药品。虽然大部分已经过期，但你和{npc}一起从中提炼出了有效成分。',
    ],
    effects: { special: 5 },
    flags: ['chain_doctor_childhood_1'],
    identityExclusive: 'doctor',
  },
  {
    id: 'ap_ie_doctor_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你第一次独立完成了手术——在{location}的一个废弃工厂里，用一把生锈的手术刀救了一个被丧尸咬伤的猎人。',
      '你在{location}遇到了一个神秘的流浪医生。他教会了你一种失传的技术：用变异植物的提取物来中和辐射。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_doctor_growth_0'],
    requiredFlags: ['chain_doctor_childhood_0'],
    identityExclusive: 'doctor',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_doctor_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你成为了{location}最年轻的主治医生。但你也发现，有些病不是医术能治好的——有些人的灵魂已经死了。',
      '你在{location}救了一个濒死的掠夺者。醒来后，他问你为什么要救敌人。你说："在我眼里，没有敌人，只有病人。"',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_doctor_growth_1'],
    requiredFlags: ['chain_doctor_childhood_0'],
    identityExclusive: 'doctor',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_doctor_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已是一位传奇医生。但废土上最可怕的瘟疫爆发了——"凋零病"，感染者在三天内化为灰烬。',
      '你在{location}的实验室里，发现凋零病不是自然产生的，而是某个组织制造的生化武器。你可以选择公开真相，或者保守秘密以防止恐慌。',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_doctor_adult_0'],
    requiredFlags: ['chain_doctor_growth_0'],
    identityExclusive: 'doctor',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_doctor_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：全力研究解药，不惜一切代价拯救感染者；或者将情报出售给避难所，换取安全但让更多人死去。',
    ],
    choices: [
      { text: '全力研究解药', successRate: 1, successText: '你选择了全力研究解药，从此踏上了一条不归路。', failText: '你选择了全力研究解药，但命运弄人，一切并未如你所愿。', effects: { strength: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_doctor_path'], failFlags: ['branch_identity_doctor_path_fail'] },
      { text: '出售情报换安全', successRate: 1, successText: '你选择了出售情报换安全，虽然道路不同，但终点未必更差。', failText: '你选择了出售情报换安全，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_doctor_new'], failFlags: ['branch_identity_doctor_new_fail'] },
    ],
    flags: ['chain_doctor_adult_1'],
    requiredFlags: ['chain_doctor_growth_0'],
    identityExclusive: 'doctor',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_doctor_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了全力研究解药。经过七天七夜不眠不休的实验，你终于在{location}找到了治愈凋零病的方法——用你自己的血液作为培养基。',
      '你救了数千人，但自己的身体也付出了巨大代价。{npc}看着你苍白的脸，说："你救了所有人，除了你自己。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_doctor_special_0'],
    requiredFlags: ['chain_doctor_adult_0'],
    identityExclusive: 'doctor',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_doctor_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你成为了废土上的"白衣天使"。无论你走到哪里，人们都会自发为你让路、为你提供补给。',
      '百年后，你的医术被整理成《废土医典》，成为了所有医生的必读书。书的第一页写着："在废土上，最稀缺的资源不是水，不是食物，是希望。"',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_doctor_special_1'],
    requiredFlags: ['chain_doctor_adult_0'],
    identityExclusive: 'doctor',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_scavenger_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的一个垃圾场里。你的第一个摇篮是一堆废铁，你的第一顿饭是从垃圾堆里翻出来的罐头。',
      '作为拾荒者的后代，你从小就练就了一双"火眼金睛"。在{location}的垃圾山里，你能一眼分辨出哪些废料有价值。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_scavenger_childhood_0'],
    identityExclusive: 'scavenger',
  },
  {
    id: 'ap_ie_scavenger_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '八岁那年，你在{location}的垃圾堆深处发现了一个密封的保险箱。里面没有金银珠宝，只有一本战前的技术手册和一张地图。',
      '{npc}告诉你："拾荒者不只是在捡垃圾，我们是在回收文明的碎片。每一块电路板、每一页纸，都是人类曾经辉煌的证明。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_scavenger_childhood_1'],
    identityExclusive: 'scavenger',
  },
  {
    id: 'ap_ie_scavenger_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你按照地图的指引，找到了{location}的一处战前仓库。里面堆满了未被破坏的物资——药品、工具、武器。你一夜暴富。',
      '你在{location}遇到了一个老拾荒者。他教会了你一门失传的手艺：如何将废铁锻造成坚固的护甲。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_scavenger_growth_0'],
    requiredFlags: ['chain_scavenger_childhood_0'],
    identityExclusive: 'scavenger',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_scavenger_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你建立了废土上最大的"回收商队"。你的车队穿梭于各个定居点之间，用垃圾换来的物资维系着废土的经济命脉。',
      '但你也引来了嫉妒。一个大型商会想要垄断废土的贸易，开始对你的商队进行打压和劫掠。',
    ],
    effects: { special: 6 },
    flags: ['chain_scavenger_growth_1'],
    requiredFlags: ['chain_scavenger_childhood_0'],
    identityExclusive: 'scavenger',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_scavenger_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已是废土上最著名的"拾荒王"。但商会的打压越来越激烈，他们甚至悬赏你的人头。',
      '你在{location}发现了一处战前地下金库，里面存储着足以改变废土格局的物资。但如何分配，成了最大的问题。',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_scavenger_adult_0'],
    requiredFlags: ['chain_scavenger_growth_0'],
    identityExclusive: 'scavenger',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_scavenger_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：独占金库，成为废土最富有的人；或者将物资分配给所有定居点，建立公平的贸易网络。',
    ],
    choices: [
      { text: '独占金库', successRate: 1, successText: '你选择了独占金库，从此踏上了一条不归路。', failText: '你选择了独占金库，但命运弄人，一切并未如你所愿。', effects: { intelligence: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_scavenger_path'], failFlags: ['branch_identity_scavenger_path_fail'] },
      { text: '公平分配', successRate: 1, successText: '你选择了公平分配，虽然道路不同，但终点未必更差。', failText: '你选择了公平分配，却发现这条路比你想象的更加艰难。', effects: { intelligence: 8, special: 3 }, failEffects: { strength: -3 }, flags: ['branch_identity_scavenger_new'], failFlags: ['branch_identity_scavenger_new_fail'] },
    ],
    flags: ['chain_scavenger_adult_1'],
    requiredFlags: ['chain_scavenger_growth_0'],
    identityExclusive: 'scavenger',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_scavenger_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了公平分配。各个定居点因为你而获得了发展的机会，商会的影响力被大大削弱。',
      '你在{location}建立了"废土交易所"，制定了废土上的第一条贸易规则：禁止垄断、禁止欺诈、保护商队安全。',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_scavenger_special_0'],
    requiredFlags: ['chain_scavenger_adult_0'],
    identityExclusive: 'scavenger',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_scavenger_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你的交易所成为了废土经济的心脏。商人们在这里交易、谈判、解决纠纷。',
      '后人称你为"废土财神"。但你的雕像手里握着的不是金币，而是一块废铁——提醒你也是从垃圾堆里走出来的。',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_scavenger_special_1'],
    requiredFlags: ['chain_scavenger_adult_0'],
    identityExclusive: 'scavenger',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_preacher_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的一座教堂废墟里。你的父母不是信徒，但你是被{npc}从丧尸口中救下来的孤儿——传教士收养了你。',
      '作为传教士的养子，你从小就听着战前宗教的故事长大。{npc}告诉你："信仰不是逃避现实，而是在绝望中找到继续活下去的理由。"',
    ],
    effects: { special: 5 },
    flags: ['chain_preacher_childhood_0'],
    identityExclusive: 'preacher',
  },
  {
    id: 'ap_ie_preacher_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '七岁那年，你在{location}遇到了一个濒临死亡的幸存者。他问你："神真的存在吗？为什么世界会变成这样？"你答不上来，但握着他的手直到他闭上眼睛。',
      '你在{location}的旧图书馆里发现了一本战前的《圣经》，但你更感兴趣的是里面夹着的笔记——一个科学家在末日来临前写下的思考。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_preacher_childhood_1'],
    identityExclusive: 'preacher',
  },
  {
    id: 'ap_ie_preacher_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你开始独自在{location}传教。你的话语没有宗教的教条，只有对生命的尊重和对希望的坚持。',
      '你在{location}遇到了一个"末日教派"，他们宣扬世界已经无法拯救，唯一的出路是毁灭一切。你与他们展开了激烈的辩论。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_preacher_growth_0'],
    requiredFlags: ['chain_preacher_childhood_0'],
    identityExclusive: 'preacher',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_preacher_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你的名声传遍了废土。人们称你为"希望使者"——不是因为你带来了神的奇迹，而是因为你让他们相信自己还有未来。',
      '但你也面临着诱惑。一个大型势力邀请你加入，条件是你要用信仰为他们服务、控制民众。',
    ],
    effects: { strength: 6 },
    flags: ['chain_preacher_growth_1'],
    requiredFlags: ['chain_preacher_childhood_0'],
    identityExclusive: 'preacher',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_preacher_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已是废土上最具影响力的精神领袖。但你也发现，权力正在腐蚀你的初心——越来越多的人崇拜你，而不是你传扬的理念。',
      '你在{location}做出了一个大胆的决定：解散你的追随者，让他们各自回到自己的生活中去，将希望的种子播撒到废土的每一个角落。',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_preacher_adult_0'],
    requiredFlags: ['chain_preacher_growth_0'],
    identityExclusive: 'preacher',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_preacher_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：继续维持你的宗教帝国，享受权力和崇拜；或者放弃一切，做一个孤独的传道者。',
    ],
    choices: [
      { text: '维持宗教帝国', successRate: 1, successText: '你选择了维持宗教帝国，从此踏上了一条不归路。', failText: '你选择了维持宗教帝国，但命运弄人，一切并未如你所愿。', effects: { strength: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_preacher_path'], failFlags: ['branch_identity_preacher_path_fail'] },
      { text: '放弃一切传道', successRate: 1, successText: '你选择了放弃一切传道，虽然道路不同，但终点未必更差。', failText: '你选择了放弃一切传道，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_preacher_new'], failFlags: ['branch_identity_preacher_new_fail'] },
    ],
    flags: ['chain_preacher_adult_1'],
    requiredFlags: ['chain_preacher_growth_0'],
    identityExclusive: 'preacher',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_preacher_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了放弃一切。你独自一人走在废土上，没有随从、没有护卫，只有一本旧书和一颗坚定的心。',
      '你在{location}的一个定居点停下来，为那里的人讲了一个故事——关于战前的人类如何面对灾难、如何互相扶持。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_preacher_special_0'],
    requiredFlags: ['chain_preacher_adult_0'],
    identityExclusive: 'preacher',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_preacher_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你的故事被传颂于废土的每一个角落。没有教堂供奉你，但每个营火旁都有人讲述"那个孤独的传道者"。',
      '后人称你为"废土圣徒"。但你知道，你不是圣徒，你只是一个在末日里不肯放弃希望的人。',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_preacher_special_1'],
    requiredFlags: ['chain_preacher_adult_0'],
    identityExclusive: 'preacher',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_beast_tamer_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的变异森林边缘。你的父母在一次兽潮中丧生，你是被一只变异母狼抚养长大的。',
      '作为驯兽师，你从小就能与变异兽沟通。其他孩子害怕{location}的变异犬，你却能和它们一起玩耍。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_beast_tamer_childhood_0'],
    identityExclusive: 'beast_tamer',
  },
  {
    id: 'ap_ie_beast_tamer_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '七岁那年，你在{location}救了一只受伤的变异幼兽。它成为了你的第一个伙伴——一只拥有火焰能力的变异犬。',
      '{npc}发现了你的天赋，告诉你："变异兽不是怪物，它们是这个世界的新居民。理解它们，你就能与它们共存。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_beast_tamer_childhood_1'],
    identityExclusive: 'beast_tamer',
  },
  {
    id: 'ap_ie_beast_tamer_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你驯服了{location}的一头变异巨熊。它成为了你的坐骑和守护者，让所有人都不敢轻视你。',
      '你在{location}遇到了一群猎杀变异兽的赏金猎人。他们屠杀变异兽只为获取它们的器官卖钱，你与他们对峙。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_beast_tamer_growth_0'],
    requiredFlags: ['chain_beast_tamer_childhood_0'],
    identityExclusive: 'beast_tamer',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_beast_tamer_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你组建了废土上第一支"兽群护卫队"——由你驯服的变异兽组成的特殊武装力量。',
      '但你也面临抉择：变异兽越来越聪明，有些甚至开始表现出与人类相当的智力。它们应该被当作工具，还是被当作同伴？',
    ],
    effects: { special: 6 },
    flags: ['chain_beast_tamer_growth_1'],
    requiredFlags: ['chain_beast_tamer_childhood_0'],
    identityExclusive: 'beast_tamer',
    chainPriority: 1,
  },
  {
    id: 'ap_ie_beast_tamer_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已是废土上最著名的驯兽师。你驯服的变异兽军团让所有人畏惧。但一只你从小养大的变异狼突然开口说话了——"我们不想再战斗了。"',
      '你在{location}遇到了变异兽的领袖——一头拥有智慧的变异虎。它提出了一个惊人的建议：人类与变异兽建立平等联盟。',
    ],
    effects: { special: 8 },
    flags: ['chain_beast_tamer_adult_0'],
    requiredFlags: ['chain_beast_tamer_growth_0'],
    identityExclusive: 'beast_tamer',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_beast_tamer_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：尊重变异兽的意愿，与它们建立平等联盟；或者拒绝它们的诉求，继续将变异兽当作工具和武器。',
    ],
    choices: [
      { text: '建立平等联盟', successRate: 1, successText: '你选择了建立平等联盟，从此踏上了一条不归路。', failText: '你选择了建立平等联盟，但命运弄人，一切并未如你所愿。', effects: { charisma: 10, health: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_beast_tamer_path'], failFlags: ['branch_identity_beast_tamer_path_fail'] },
      { text: '继续当作工具', successRate: 1, successText: '你选择了继续当作工具，虽然道路不同，但终点未必更差。', failText: '你选择了继续当作工具，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_beast_tamer_new'], failFlags: ['branch_identity_beast_tamer_new_fail'] },
    ],
    flags: ['chain_beast_tamer_adult_1'],
    requiredFlags: ['chain_beast_tamer_growth_0'],
    identityExclusive: 'beast_tamer',
    chainPriority: 2,
  },
  {
    id: 'ap_ie_beast_tamer_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了建立平等联盟。人类与变异兽开始在{location}共同生活、共同劳作、共同防御。这是废土上从未有过的景象。',
      '你的联盟吸引了越来越多的变异兽和人类加入。{npc}感叹："你做到了战前人类都做不到的事——与其他物种和平共存。"',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_beast_tamer_special_0'],
    requiredFlags: ['chain_beast_tamer_adult_0'],
    identityExclusive: 'beast_tamer',
    chainPriority: 3,
  },
  {
    id: 'ap_ie_beast_tamer_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，人类与变异兽的联盟成为了废土上最强大的势力之一。你们的城市里有人类的房屋，也有变异兽的巢穴。',
      '后人称你为"兽王"。但变异兽们叫你"第一朋友"——因为在所有人类中，你是第一个真正尊重它们的人。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_beast_tamer_special_1'],
    requiredFlags: ['chain_beast_tamer_adult_0'],
    identityExclusive: 'beast_tamer',
    chainPriority: 3,
  },
  {
    id: 'ap_te_01', category: 'trash_exclusive', minAge: 0, maxAge: 6, probability: 0.92,
    templates: [
      '基因检测那日，{location}的检测仪器显示你的身体对辐射极度敏感。{npc}摇头叹息："辐射弱体质，在废土上活不过二十岁。"所有人都用怜悯的目光看着你。',
      '作为辐射弱体质者，你无法像其他人一样在{location}的地表自由活动。哪怕是最轻微的辐射暴露，都会让你生病发烧。他们叫你"温室里的花朵"。',
    ],
    effects: { special: -5, strength: -2, intelligence: 3 },
    flags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'ap_te_02', category: 'trash_exclusive', minAge: 4, maxAge: 10, probability: 0.88,
    templates: [
      '你不甘心。每日在{location}的地下掩体里，你研究战前的医学文献，寻找对抗辐射的方法。{npc}路过时皱眉："弱体质就是弱体质，看书有什么用？"',
      '你在{location}的旧书堆里淘到了半本残破的《战前免疫学》。书中说："辐射并非不可战胜，关键在于激活人体自身的修复机制。"你如获至宝。',
    ],
    effects: { strength: 3, intelligence: 2, luck: 2 },
    flags: ['trash_childhood_1'],
    requiredFlags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'ap_te_03', category: 'trash_exclusive', minAge: 12, maxAge: 18, probability: 0.85,
    templates: [
      '你按照书中的方法，在{location}的实验室里调配了一种增强免疫力的药剂。第一次注射时，剧痛让你昏死过去。醒来时，你发现自己对辐射的耐受度提高了！',
      '别的强壮者可以赤手空拳在废土上生存，你不行。但你在{location}日复一日地研究药剂和装备，从未间断。{npc}偶然看到你的笔记，震惊地说："这...这是战前失传的医疗技术？"',
    ],
    effects: { strength: 5, health: 3, special: 2 },
    flags: ['trash_growth_0'],
    requiredFlags: ['trash_childhood_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'ap_te_04', category: 'trash_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '你在{location}救了一位被辐射严重烧伤的幸存者。你用自己的药剂救了他的命，他感激之下，传授了你一套独门的避难所工程技术——这是连大势力都没有的秘法！',
      '{npc}被你的毅力打动，决定收你为记名弟子。他说："我这一生见过无数强壮的战士，但像你这样的\'书呆子\'，还是第一个。"你终于有了师父。',
    ],
    effects: { strength: 7, health: 5, charisma: 2 },
    flags: ['trash_growth_1'],
    requiredFlags: ['trash_growth_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'ap_te_05', category: 'trash_exclusive', minAge: 18, maxAge: 25, probability: 0.75,
    templates: [
      '经过多年的研究，你在{location}遇到了一个瓶颈——药剂的效力已到达极限，再想提升，需要更先进的设备。一位路过的老科学家告诉你："知识之路，需要理论与实验的结合。"',
      '你在{location}的废弃医院里闭关三月，终于突破了第一重技术难关。出关时，你带着自己设计的防辐射服——虽然行动不便，但能让你在地表生存整整一天！',
    ],
    effects: { strength: 8, intelligence: 3, luck: 3 },
    flags: ['trash_growth_2'],
    requiredFlags: ['trash_growth_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'ap_te_06', category: 'trash_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '{location}举办了一场废土生存竞赛，你以"技术展示"的身份报名参加。所有人都嘲笑你："一个辐射弱体质的废物，也配参加生存竞赛？"',
      '竞赛第一轮，你对上了一名强壮的掠夺者。对方力大无穷，武器精良。你不慌不忙，启动了自制的干扰器——对方的武器系统瞬间瘫痪！全场寂静。',
    ],
    effects: { strength: 8, charisma: 6, special: 3 },
    flags: ['trash_adult_0'],
    requiredFlags: ['trash_growth_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'ap_te_07', category: 'trash_exclusive', minAge: 30, maxAge: 40, probability: 0.72,
    templates: [
      '你的"技术生存法"震惊了废土。{npc}说你是"万古以来第一个以辐射弱体质在废土上立足的人"。各大势力开始重新审视"技术"这条被遗忘的道路。',
      '你在{location}建立了一座小小的"技术庇护所"，专门招收被判定为"废物"的孩子。你说："体质决定起点，但智慧和毅力决定终点。"',
    ],
    effects: { charisma: 7, intelligence: 5, luck: 3 },
    flags: ['trash_adult_1'],
    requiredFlags: ['trash_adult_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'ap_te_08', category: 'trash_exclusive', minAge: 35, maxAge: 45, probability: 0.68,
    templates: [
      '昔日嘲笑你的同村壮汉在{location}与你重逢。他依然强壮，但已经落了一身辐射病。而你虽然瘦弱，却健康地活着。他跪地痛哭："当年是我有眼无珠..."你将他扶起。',
      '{legend}的传承之地开启，你说服众人让你这个"辐射弱体质的废物"也进去试试。他们抱着看笑话的心态同意了——但很快，他们就笑不出来了。',
    ],
    effects: { strength: 6, luck: 5, special: 4 },
    flags: ['trash_adult_2'],
    requiredFlags: ['trash_adult_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'ap_te_09', category: 'trash_exclusive', minAge: 28, maxAge: 42, probability: 0.65,
    templates: [
      '废土生存竞赛的决赛上，你对上了废土上最强壮的战士。对方是掠夺者帮派的老大，而你连一把像样的武器都没有。所有人都认为这是一场屠杀——但他们错了。',
      '比赛开始前，{npc}暗中塞给你一块芯片："这是战前的\'智能核心\'，能让你的设备短时间内运算速度提升十倍，但事后会烧毁核心。用不用，你自己决定。"',
    ],
    effects: { intelligence: 3 },
    choices: [
      { text: '使用智能核心，全力一战', successRate: 1, successText: '智能核心让你的设备爆发出了前所未有的运算速度！你黑入了对方的装甲系统，将其反锁——全场震撼，万古未有！', failText: '智能核心烧毁了你的主控设备，虽然赢了比赛，但你需要数年才能重建系统', effects: { intelligence: 15, charisma: 10, special: 5, health: -20 }, failEffects: { intelligence: 5, charisma: 3, health: -30 }, flags: ['branch_trash_fight'], failFlags: ['branch_trash_fight_fail'] },
      { text: '拒绝核心，以本真之力战斗', successRate: 1, successText: '你没有借助外力，仅凭基础装备与对方周旋百招。虽然最终惜败，但你赢得了所有人的尊重！', failText: '你拒绝了核心，但实力差距太大，被一招击败。众人摇头："果然，废物就是废物。"', effects: { charisma: 10, luck: 8, intelligence: 5 }, failEffects: { charisma: -5, health: -15 }, flags: ['branch_trash_persist'], failFlags: ['branch_trash_persist_fail'] },
    ],
    flags: ['trash_climax_0'],
    requiredFlags: ['trash_adult_1'],
    talentExclusive: 'trash',
    chainPriority: 2,
  },
  {
    id: 'ap_te_10', category: 'trash_exclusive', minAge: 35, maxAge: 50, probability: 0.6,
    templates: [
      '你在{location}遇到了一位神秘老科学家。他打量你许久，说："你的技术已经触及了战前文明的核心。若想再进一步，需要进入\'数据核心\'——那里有\'万能公式\'，可以让辐射弱体质者获得真正的生存能力。"',
      '老者给了你两个选择：他可以帮你打开数据核心的通道（九死一生）；或者传你一套更稳妥的进阶理论（进展缓慢但安全）。',
    ],
    effects: { special: 3 },
    choices: [
      { text: '闯入数据核心，向死而生', successRate: 1, successText: '你闯入了数据核心，面对无数自动防御系统和陷阱。最终，你找到了"万能公式"——那一刻，你第一次真正感受到了掌控命运的自由！', failText: '数据核心的防御系统超出了你的预期。虽然侥幸逃生，但你的主设备被毁，需要数十年才能重建', effects: { intelligence: 20, special: 10, health: -25 }, failEffects: { health: -40, intelligence: 3 }, flags: ['branch_trash_transform'], failFlags: ['branch_trash_transform_fail'] },
      { text: '稳扎稳打，不求速成', successRate: 1, successText: '你选择了更稳妥的道路。虽然进展缓慢，但根基无比扎实。老者点头："大器晚成，方得始终。"', failText: '稳妥之路需要的时间远超你的寿元。你知道，自己可能等不到大成的那一天了', effects: { intelligence: 10, strength: 5, health: 5 }, failEffects: { intelligence: 3, luck: -3 }, flags: ['branch_trash_persist2'], failFlags: ['branch_trash_persist2_fail'] },
    ],
    flags: ['trash_climax_1'],
    requiredFlags: ['trash_climax_0'],
    talentExclusive: 'trash',
    chainPriority: 2,
  },
  {
    id: 'ap_te_11', category: 'trash_exclusive', minAge: 40, maxAge: 55, probability: 0.55,
    templates: [
      '你的故事传遍了废土。{location}的技术庇护所每天都有人慕名而来——不是天才，而是那些被判定为"废物"的孩子。',
      '{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。不是因为我更强，而是因为我从未停下。"',
    ],
    effects: { charisma: 10, luck: 5, special: 5 },
    flags: ['trash_climax_2'],
    requiredFlags: ['trash_climax_1'],
    talentExclusive: 'trash',
    chainPriority: 3,
  },
  {
    id: 'ap_te_12', category: 'trash_exclusive', minAge: 45, maxAge: 60, probability: 0.5,
    templates: [
      '你推导出了"万能公式"，成为了废土历史上第一个以辐射弱体质之身建立独立势力的人。没有强壮的肌肉、没有变异能力，仅凭一台电脑和无数公式，你创造了属于自己的奇迹！',
      '你成为了废土上的传奇。后人称你为"智核"，你的故事激励了无数被判定为废物的人——废土，终于不再只属于强者。',
    ],
    effects: { intelligence: 10, strength: 5, charisma: 10, special: 10 },
    flags: ['trash_legend'],
    requiredFlags: ['trash_climax_2'],
    talentExclusive: 'trash',
    chainPriority: 3,
  },
  {
    id: 'ap_te_13', category: 'trash_exclusive', minAge: 55, maxAge: 80, probability: 0.6,
    templates: [
      '你在{location}收徒传道，专门招收辐射弱体质的孩子。你说："体质决定起点，但智慧和选择决定终点。"',
      '你的弟子中有人发明了新的医疗设备，有人以技术之身成为了大势力顾问。{npc}感叹："你一人之力，改变了一个时代的废土格局。"',
    ],
    effects: { charisma: 8, intelligence: 5 },
    flags: ['trash_elder_0'],
    requiredFlags: ['trash_legend'],
    talentExclusive: 'trash',
  },
  {
    id: 'ap_te_14', category: 'trash_exclusive', minAge: 60, maxAge: 90, probability: 0.55,
    templates: [
      '大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。',
      '你微笑着说："如果重来一次，我还是会选择做那个辐射弱体质的废物。因为正是\'废物\'二字，让我找到了属于自己的生存之道。"',
    ],
    effects: { charisma: 6, health: -5 },
    flags: ['trash_elder_1'],
    requiredFlags: ['trash_elder_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'ap_te_15', category: 'trash_exclusive', minAge: 70, maxAge: 100, probability: 0.5,
    templates: [
      '你离世的那天，{location}下起了绿色的雨——那是你发明的净化装置在工作。无数你曾经帮助过的人自发前来为你送行。',
      '你的精神没有消失，而是化作了一道数据流，融入了废土的通讯网络。后人传说，每当强者恃强凌弱时，某个频道就会响起一句警告——那是你在提醒他们：不要小看任何一个"废物"。',
    ],
    effects: { charisma: 10, luck: 10 },
    flags: ['trash_ending'],
    requiredFlags: ['trash_elder_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'ap_cultivation_07', category: 'cultivation', minAge: 15, maxAge: 25, probability: 0.92,
    templates: [
      '你在{location}历练多年，终于触摸到了废土行者的门槛。{npc}告诉你："废土行者是离开避难所的第一步。你将学会在辐射和丧尸的世界中独立生存。突破需要生存≥20、体质≥15。"',
      '你的实力已达瓶颈，在{location}感应到了废土行者的契机。但突破之路九死一生，稍有不慎便可能身死道消。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部力量灌注于自身。刹那间，天地变色，{location}的辐射能量疯狂涌入你的体内——你成功了！你突破到了废土行者！', failText: '你全力冲击瓶颈，但能量反噬，身体严重受损。虽然保住了性命，但实力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 80 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail_1'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了废土行者。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的历练。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 56 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_1', 'realm_breakthrough_1_steady'], failFlags: ['realm_fail_1_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_1'], failFlags: [] },
    ],
    flags: ['realm_attempt_1'],
    chainPriority: 5,
  },
  {
    id: 'ap_cultivation_08', category: 'cultivation', minAge: 17, maxAge: 45, probability: 0.7360000000000001,
    templates: [
      '你突破到废土行者的消息传遍了废土。{location}的居民们纷纷前来祝贺，你的名字被刻在了聚集地的"英雄碑"上。',
      '{npc}看着你，眼中满是欣慰："从避难所居民到废土行者，你走了15年。这速度，在废土上已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_1'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 2,
  },
  {
    id: 'ap_cultivation_09', category: 'cultivation', minAge: 20, maxAge: 55, probability: 0.644,
    templates: [
      '上一次突破废土行者失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，实力甚至比以前更加精进。你再次感应到了废土行者的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了废土行者！{location}的辐射因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与废土行者无缘...', effects: { realm: 1, special: 5, maxAge: 80 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail2_1'] },
    ],
    flags: ['realm_retry_1'],
    requiredFlags: ['realm_fail_1'],
    chainPriority: 3,
  },
  {
    id: 'ap_cultivation_10', category: 'cultivation', minAge: 30, maxAge: 45, probability: 0.88,
    templates: [
      '你在{location}历练多年，终于触摸到了聚集地领袖的门槛。{npc}告诉你："聚集地领袖能够统御一方。你建立了自己的据点，成为废土上不可忽视的力量。突破需要生存≥35、声望≥20、体质≥25。"',
      '你的实力已达瓶颈，在{location}感应到了聚集地领袖的契机。但突破之路九死一生，稍有不慎便可能身死道消。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部力量灌注于自身。刹那间，天地变色，{location}的辐射能量疯狂涌入你的体内——你成功了！你突破到了聚集地领袖！', failText: '你全力冲击瓶颈，但能量反噬，身体严重受损。虽然保住了性命，但实力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 120 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail_2'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了聚集地领袖。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的历练。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 84 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_2', 'realm_breakthrough_2_steady'], failFlags: ['realm_fail_2_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_2'], failFlags: [] },
    ],
    flags: ['realm_attempt_2'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 5,
  },
  {
    id: 'ap_cultivation_11', category: 'cultivation', minAge: 32, maxAge: 65, probability: 0.7040000000000001,
    templates: [
      '你突破到聚集地领袖的消息传遍了废土。{location}的居民们纷纷前来祝贺，你的名字被刻在了聚集地的"英雄碑"上。',
      '{npc}看着你，眼中满是欣慰："从避难所居民到聚集地领袖，你走了30年。这速度，在废土上已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_2'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 2,
  },
  {
    id: 'ap_cultivation_12', category: 'cultivation', minAge: 35, maxAge: 75, probability: 0.616,
    templates: [
      '上一次突破聚集地领袖失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，实力甚至比以前更加精进。你再次感应到了聚集地领袖的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了聚集地领袖！{location}的辐射因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与聚集地领袖无缘...', effects: { realm: 1, special: 5, maxAge: 120 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail2_2'] },
    ],
    flags: ['realm_retry_2'],
    requiredFlags: ['realm_fail_2'],
    chainPriority: 3,
  },
  {
    id: 'ap_cultivation_13', category: 'cultivation', minAge: 50, maxAge: 70, probability: 0.85,
    templates: [
      '你在{location}历练多年，终于触摸到了觉醒变异者的门槛。{npc}告诉你："觉醒变异者已能掌控体内的变异力量。你的身体发生了质变，获得了超乎常人的能力。突破需要生存≥50、变异度≥40。"',
      '你的实力已达瓶颈，在{location}感应到了觉醒变异者的契机。但突破之路九死一生，稍有不慎便可能身死道消。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部力量灌注于自身。刹那间，天地变色，{location}的辐射能量疯狂涌入你的体内——你成功了！你突破到了觉醒变异者！', failText: '你全力冲击瓶颈，但能量反噬，身体严重受损。虽然保住了性命，但实力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 200 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail_3'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了觉醒变异者。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的历练。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 140 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_3', 'realm_breakthrough_3_steady'], failFlags: ['realm_fail_3_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_3'], failFlags: [] },
    ],
    flags: ['realm_attempt_3'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 5,
  },
  {
    id: 'ap_cultivation_14', category: 'cultivation', minAge: 52, maxAge: 90, probability: 0.68,
    templates: [
      '你突破到觉醒变异者的消息传遍了废土。{location}的居民们纷纷前来祝贺，你的名字被刻在了聚集地的"英雄碑"上。',
      '{npc}看着你，眼中满是欣慰："从避难所居民到觉醒变异者，你走了50年。这速度，在废土上已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_3'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 2,
  },
  {
    id: 'ap_cultivation_15', category: 'cultivation', minAge: 55, maxAge: 100, probability: 0.595,
    templates: [
      '上一次突破觉醒变异者失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，实力甚至比以前更加精进。你再次感应到了觉醒变异者的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了觉醒变异者！{location}的辐射因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与觉醒变异者无缘...', effects: { realm: 1, special: 5, maxAge: 200 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail2_3'] },
    ],
    flags: ['realm_retry_3'],
    requiredFlags: ['realm_fail_3'],
    chainPriority: 3,
  },
  {
    id: 'ap_cultivation_16', category: 'cultivation', minAge: 80, maxAge: 110, probability: 0.82,
    templates: [
      '你在{location}历练多年，终于触摸到了废土之王的门槛。{npc}告诉你："废土之王已能号令一方。你的名字让敌人闻风丧胆，让追随者心甘情愿为你赴死。突破需要生存≥70、变异度≥60。"',
      '你的实力已达瓶颈，在{location}感应到了废土之王的契机。但突破之路九死一生，稍有不慎便可能身死道消。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部力量灌注于自身。刹那间，天地变色，{location}的辐射能量疯狂涌入你的体内——你成功了！你突破到了废土之王！', failText: '你全力冲击瓶颈，但能量反噬，身体严重受损。虽然保住了性命，但实力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 300 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail_4'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了废土之王。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的历练。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 210 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_4', 'realm_breakthrough_4_steady'], failFlags: ['realm_fail_4_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_4'], failFlags: [] },
    ],
    flags: ['realm_attempt_4'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 5,
  },
  {
    id: 'ap_cultivation_17', category: 'cultivation', minAge: 82, maxAge: 130, probability: 0.656,
    templates: [
      '你突破到废土之王的消息传遍了废土。{location}的居民们纷纷前来祝贺，你的名字被刻在了聚集地的"英雄碑"上。',
      '{npc}看着你，眼中满是欣慰："从避难所居民到废土之王，你走了80年。这速度，在废土上已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_4'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 2,
  },
  {
    id: 'ap_cultivation_18', category: 'cultivation', minAge: 85, maxAge: 140, probability: 0.574,
    templates: [
      '上一次突破废土之王失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，实力甚至比以前更加精进。你再次感应到了废土之王的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了废土之王！{location}的辐射因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与废土之王无缘...', effects: { realm: 1, special: 5, maxAge: 300 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail2_4'] },
    ],
    flags: ['realm_retry_4'],
    requiredFlags: ['realm_fail_4'],
    chainPriority: 3,
  },
  {
    id: 'ap_cultivation_19', category: 'cultivation', minAge: 130, maxAge: 170, probability: 0.78,
    templates: [
      '你在{location}历练多年，终于触摸到了末日领主的门槛。{npc}告诉你："末日领主需直面废土最残酷的考验。九死一生，但一旦成功，便是半步永恒。突破需要生存≥90、变异度≥80、体质≥60。"',
      '你的实力已达瓶颈，在{location}感应到了末日领主的契机。但突破之路九死一生，稍有不慎便可能身死道消。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部力量灌注于自身。刹那间，天地变色，{location}的辐射能量疯狂涌入你的体内——你成功了！你突破到了末日领主！', failText: '你全力冲击瓶颈，但能量反噬，身体严重受损。虽然保住了性命，但实力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 400 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail_5'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了末日领主。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的历练。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 280 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_5', 'realm_breakthrough_5_steady'], failFlags: ['realm_fail_5_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_5'], failFlags: [] },
    ],
    flags: ['realm_attempt_5'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 5,
  },
  {
    id: 'ap_cultivation_20', category: 'cultivation', minAge: 132, maxAge: 190, probability: 0.6240000000000001,
    templates: [
      '你突破到末日领主的消息传遍了废土。{location}的居民们纷纷前来祝贺，你的名字被刻在了聚集地的"英雄碑"上。',
      '{npc}看着你，眼中满是欣慰："从避难所居民到末日领主，你走了130年。这速度，在废土上已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_5'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 2,
  },
  {
    id: 'ap_cultivation_21', category: 'cultivation', minAge: 135, maxAge: 200, probability: 0.5459999999999999,
    templates: [
      '上一次突破末日领主失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，实力甚至比以前更加精进。你再次感应到了末日领主的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了末日领主！{location}的辐射因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与末日领主无缘...', effects: { realm: 1, special: 5, maxAge: 400 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail2_5'] },
    ],
    flags: ['realm_retry_5'],
    requiredFlags: ['realm_fail_5'],
    chainPriority: 3,
  },
  {
    id: 'ap_cultivation_22', category: 'cultivation', minAge: 200, maxAge: 260, probability: 0.75,
    templates: [
      '你在{location}历练多年，终于触摸到了新人类始祖的门槛。{npc}告诉你："新人类始祖已触摸到进化的门槛。你的基因已超越了普通人类的极限。突破需要变异度≥100。"',
      '你的实力已达瓶颈，在{location}感应到了新人类始祖的契机。但突破之路九死一生，稍有不慎便可能身死道消。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部力量灌注于自身。刹那间，天地变色，{location}的辐射能量疯狂涌入你的体内——你成功了！你突破到了新人类始祖！', failText: '你全力冲击瓶颈，但能量反噬，身体严重受损。虽然保住了性命，但实力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 800 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail_6'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了新人类始祖。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的历练。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 560 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_6', 'realm_breakthrough_6_steady'], failFlags: ['realm_fail_6_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_6'], failFlags: [] },
    ],
    flags: ['realm_attempt_6'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 5,
  },
  {
    id: 'ap_cultivation_23', category: 'cultivation', minAge: 202, maxAge: 280, probability: 0.6000000000000001,
    templates: [
      '你突破到新人类始祖的消息传遍了废土。{location}的居民们纷纷前来祝贺，你的名字被刻在了聚集地的"英雄碑"上。',
      '{npc}看着你，眼中满是欣慰："从避难所居民到新人类始祖，你走了200年。这速度，在废土上已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_6'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 2,
  },
  {
    id: 'ap_cultivation_24', category: 'cultivation', minAge: 205, maxAge: 290, probability: 0.5249999999999999,
    templates: [
      '上一次突破新人类始祖失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，实力甚至比以前更加精进。你再次感应到了新人类始祖的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了新人类始祖！{location}的辐射因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与新人类始祖无缘...', effects: { realm: 1, special: 5, maxAge: 800 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail2_6'] },
    ],
    flags: ['realm_retry_6'],
    requiredFlags: ['realm_fail_6'],
    chainPriority: 3,
  },
  {
    id: 'ap_cultivation_25', category: 'cultivation', minAge: 300, maxAge: 400, probability: 0.7,
    templates: [
      '你在{location}历练多年，终于触摸到了永恒存在的门槛。{npc}告诉你："超越生死，与废土同存。你已不再是普通的人类，而是永恒的存在。突破需要变异度≥120、知识≥100。"',
      '你的实力已达瓶颈，在{location}感应到了永恒存在的契机。但突破之路九死一生，稍有不慎便可能身死道消。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部力量灌注于自身。刹那间，天地变色，{location}的辐射能量疯狂涌入你的体内——你成功了！你突破到了永恒存在！', failText: '你全力冲击瓶颈，但能量反噬，身体严重受损。虽然保住了性命，但实力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 9000 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail_7'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了永恒存在。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的历练。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 6300 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_7', 'realm_breakthrough_7_steady'], failFlags: ['realm_fail_7_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_7'], failFlags: [] },
    ],
    flags: ['realm_attempt_7'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 5,
  },
  {
    id: 'ap_cultivation_26', category: 'cultivation', minAge: 302, maxAge: 420, probability: 0.5599999999999999,
    templates: [
      '你突破到永恒存在的消息传遍了废土。{location}的居民们纷纷前来祝贺，你的名字被刻在了聚集地的"英雄碑"上。',
      '{npc}看着你，眼中满是欣慰："从避难所居民到永恒存在，你走了300年。这速度，在废土上已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_7'],
    requiredFlags: ['realm_breakthrough_7'],
    chainPriority: 2,
  },
  {
    id: 'ap_cultivation_27', category: 'cultivation', minAge: 305, maxAge: 430, probability: 0.48999999999999994,
    templates: [
      '上一次突破永恒存在失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，实力甚至比以前更加精进。你再次感应到了永恒存在的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了永恒存在！{location}的辐射因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与永恒存在无缘...', effects: { realm: 1, special: 5, maxAge: 9000 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail2_7'] },
    ],
    flags: ['realm_retry_7'],
    requiredFlags: ['realm_fail_7'],
    chainPriority: 3,
  },
];
