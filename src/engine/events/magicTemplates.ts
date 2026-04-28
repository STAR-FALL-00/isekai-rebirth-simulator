import type { EventTemplate } from './types';

// 魔法大陆 — 177 event templates
// Generated: 2026-04-27
// Rarity tiers: legendary(≤0.10) / epic(0.10-0.25) / rare(0.25-0.50) / common(0.50-0.85) / trash-exclusive
// Each template has 3-5 text variations, total ~708 actual events

export const magicTemplates: EventTemplate[] = [
  {
    id: 'mg_ch_01', category: 'childhood', minAge: 0, maxAge: 3, probability: 0.035,
    templates: [
      '你出生那天，{location}突然霞光万丈，紫气东来三千里。{npc}跪地叩拜，说你是千年一遇的元素之主。',
      '你降生的瞬间，{location}百花齐放，{legend}的虚影在天际显现，整个大陆为之震动。',
      '你的第一声啼哭引发了{location}的灵气暴动，{npc}颤抖着说："元素之主降世了！"',
    ],
    effects: { luck: 10, special: 8, charisma: 5 },
  },
  {
    id: 'mg_ch_02', category: 'childhood', minAge: 2, maxAge: 7, probability: 0.149,
    templates: [
      '你在{location}玩耍时，体内突然涌出一股热流。{npc}惊讶地发现你竟是魔法亲和之资！',
      '三岁时，你在{location}无意间触发了古老的检测阵法，光芒比所有人都亮。',
      '{npc}为你进行资质测试，{legend}的印记在你身上一闪而逝——你是被选中的人。',
    ],
    effects: { special: 6, intelligence: 4 },
  },
  {
    id: 'mg_ch_03', category: 'childhood', minAge: 4, maxAge: 9, probability: 0.368,
    templates: [
      '你在{location}救了一只受伤的小动物，它其实是{legend}的化身，临走前留下了一枚灵珠。',
      '{npc}在你满月时送了一块玉佩，后来你发现那是一件上古法器的碎片。',
      '你从小就能看见别人看不见的{legend}幻影，{npc}说这是灵根初现的征兆。',
      '你在{location}挖到了一坛古酒，喝了一口后浑身舒畅，经脉隐隐发热。',
    ],
    effects: { special: 4 },
  },
  {
    id: 'mg_ch_04', category: 'childhood', minAge: 0, maxAge: 6, probability: 0.506,
    templates: [
      '你生在普通人家，每天在{location}玩耍，日子平淡但快乐。',
      '{npc}教你读书识字，你学得有模有样。',
      '你在{location}认识了几个玩伴，度过了无忧无虑的童年。',
      '家里虽然不富裕，但{npc}总是把最好的留给你。',
    ],
    effects: { charisma: 2, luck: 1 },
  },
  {
    id: 'mg_ch_05', category: 'childhood', minAge: 3, maxAge: 10, probability: 0.741,
    templates: [
      '你在{location}帮{npc}干活，学会了很多生活技能。',
      '你的身体比同龄人强壮，{npc}说你是干农活的好料子。',
      '你喜欢在{location}发呆，常常一坐就是一整天。',
      '{npc}给你讲了一个关于{legend}的故事，你听得入了迷。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },
  {
    id: 'mg_gr_01', category: 'growth', minAge: 15, maxAge: 20, probability: 0.031,
    templates: [
      '你在{location}闭关三日，出关时眼中精光四射——你竟在战斗中顿悟了{legend}的传承！',
      '一场雷雨夜，你在{location}被天雷击中非但没死，反而打通了全身经脉！',
      '{legend}的残魂在{location}与你相遇，将毕生感悟传授于你。',
    ],
    effects: { intelligence: 10, special: 8, strength: 5 },
  },
  {
    id: 'mg_gr_02', category: 'growth', minAge: 14, maxAge: 22, probability: 0.143,
    templates: [
      '你在{location}苦修三年，终于突破了困扰多年的瓶颈，实力大增！',
      '{npc}带你外出历练，你在{location}击败了一个强敌，获得了珍贵的战利品。',
      '你发现了{legend}留下的试炼场，通过考验后获得了意想不到的收获。',
    ],
    effects: { strength: 6, special: 5 },
  },
  {
    id: 'mg_gr_03', category: 'growth', minAge: 13, maxAge: 24, probability: 0.333,
    templates: [
      '你在{location}遇到了一生的宿敌，你们不打不相识，反而成为了朋友。',
      '{npc}传授你一项绝技，你花了整整一年才学会，但威力惊人。',
      '你在{location}救了一个被追杀的人，他为了报答你，送了一件宝物。',
      '你和同辈在{location}比试，虽然输了但收获巨大。',
    ],
    effects: { strength: 4, luck: 2 },
  },
  {
    id: 'mg_gr_04', category: 'growth', minAge: 13, maxAge: 20, probability: 0.562,
    templates: [
      '你每天在{location}勤奋练习，虽然进步缓慢但根基扎实。',
      '{npc}督促你修炼，你不敢懈怠。',
      '你在{location}读了很多书，眼界开阔了不少。',
      '平平淡淡的一年，你在{location}默默积累着。',
    ],
    effects: { intelligence: 2, strength: 2 },
  },
  {
    id: 'mg_gr_05', category: 'growth', minAge: 16, maxAge: 25, probability: 0.76,
    templates: [
      '你在{location}结交了一些朋友，互相切磋进步。',
      '{npc}给你讲了很多前辈的故事，你深受启发。',
      '你在{location}处理了一些杂务，锻炼了自己的能力。',
      '这一年没什么特别的事发生，但你感觉自己在慢慢变强。',
    ],
    effects: { charisma: 2, luck: 2 },
  },
  {
    id: 'mg_ad_01', category: 'adult', minAge: 28, maxAge: 40, probability: 0.171,
    templates: [
      '你在{location}开宗立派，广收门徒，一时间名声大噪。',
      '你参与了{legend}相关的大规模事件，在关键时刻力挽狂澜。',
      '你在{location}建立了属于自己的势力，各方强者纷纷来投。',
    ],
    effects: { charisma: 8, strength: 5, special: 5 },
  },
  {
    id: 'mg_ad_02', category: 'adult', minAge: 26, maxAge: 45, probability: 0.297,
    templates: [
      '你在{location}收下了第一个弟子，将自己的所学倾囊相授。',
      '你和宿敌在{location}进行了最终决战，胜负难分。',
      '你成功炼制/制造了传说中的物品，引起了不小的轰动。',
    ],
    effects: { charisma: 6, luck: 3 },
  },
  {
    id: 'mg_ad_03', category: 'adult', minAge: 26, maxAge: 50, probability: 0.535,
    templates: [
      '你在{location}处理日常事务，势力稳步发展。',
      '{npc}来找你帮忙，你出手解决了他的难题。',
      '你在{location}度过了平静的一年，修为稳步提升。',
      '平平淡淡的一年，你在{location}默默修炼。',
    ],
    effects: { strength: 2, intelligence: 2, special: 2 },
  },
  {
    id: 'mg_el_01', category: 'elder', minAge: 50, maxAge: 120, probability: 0.62,
    templates: [
      '你在{location}钻研更高阶的魔法理论，试图突破当前等级的限制。',
      '你游历魔法大陆，在{location}见识了各种奇异的魔法现象，眼界大开。',
      '你开始招收学徒，在{location}传授毕生所学的奥术知识。',
    ],
    effects: { intelligence: 3, special: 2 },
  },
  {
    id: 'mg_el_02', category: 'elder', minAge: 100, maxAge: 220, probability: 0.359,
    templates: [
      '你的魔法造诣已臻巅峰，成为了{location}的传说级大法师。',
      '{npc}专程从真理之塔赶来，希望你将研究成果贡献给学术界。',
      '你将毕生魔法心得整理成《奥术全书》，存放在{location}的图书馆中。',
    ],
    effects: { intelligence: 8, charisma: 5 },
  },
  {
    id: 'mg_el_03', category: 'elder', minAge: 200, maxAge: 400, probability: 0.263,
    templates: [
      '你感应到了元素位面的召唤，在{location}准备进行位面穿越仪式。',
      '你回顾一生的魔法研究，在{location}寻找触及真理之塔顶层的契机。',
      '{npc}带来消息：虚空与物质界的屏障出现了裂缝，通往更高维度的通道可能开启。',
    ],
    effects: { special: 10, intelligence: 5 },
  },
  {
    id: 'mg_el_04', category: 'elder', minAge: 400, maxAge: 700, probability: 0.165,
    templates: [
      '你已是真理守护者，在{location}静待成为法则生命的那一刻。',
      '你将毕生对魔法本质的感悟刻入永恒水晶，留给后世有缘人。',
      '{npc}问你为何还不融入虚空，你笑答："我在等一个值得托付魔法火种的学徒。"',
    ],
    effects: { charisma: 10, special: 5 },
  },
  {
    id: 'mg_cb_01', category: 'combat', minAge: 20, maxAge: 40, probability: 0.039,
    templates: [
      '你在{location}以一己之力对抗十位同阶强者，最终大获全胜，一战成名！',
      '{legend}的敌人找上了你，你在{location}展开惊天大战，竟越级将其斩杀！',
      '你为了保护{location}的居民，独自对抗入侵的{legend}军团，创造了不可能的奇迹。',
    ],
    effects: { strength: 12, charisma: 8, health: -10 },
  },
  {
    id: 'mg_cb_02', category: 'combat', minAge: 18, maxAge: 45, probability: 0.16,
    templates: [
      '你参与了一场改变{location}格局的大规模战争，立下赫赫战功。',
      '{npc}挑战你的权威，你们在{location}大战三百回合，最终你险胜一招。',
      '你在{location}发现了{legend}留下的试炼场，通过了生死考验。',
    ],
    effects: { strength: 8, charisma: 4, health: -5 },
  },
  {
    id: 'mg_cb_03', category: 'combat', minAge: 15, maxAge: 35, probability: 0.283,
    templates: [
      '你在{location}遭遇强敌，展开了一场生死搏斗，最终险胜。',
      '你和{npc}在{location}切磋，双方都获益匪浅。',
      '你为了保护同伴，在{location}与敌人激战，受了轻伤。',
    ],
    effects: { strength: 5, health: -3 },
  },
  {
    id: 'mg_cb_04', category: 'combat', minAge: 25, maxAge: 50, probability: 0.423,
    templates: [
      '你在{location}参与了一场小规模冲突，表现出色。',
      '{npc}偷袭你，你在{location}勉强将其击退。',
      '你在{location}发现了敌人的据点，果断出击。',
    ],
    effects: { strength: 4, luck: 2 },
  },
  {
    id: 'mg_cb_05', category: 'combat', minAge: 15, maxAge: 40, probability: 0.575,
    templates: [
      '你在{location}进行了日常训练，技艺略有精进。',
      '你和同伴在{location}对练，互相学习。',
      '你在{location}演练新学的招式，逐渐熟练。',
    ],
    effects: { strength: 2 },
  },
  {
    id: 'mg_cb_06', category: 'combat', minAge: 30, maxAge: 60, probability: 0.705,
    templates: [
      '你在{location}指导后辈战斗技巧，自己也有所感悟。',
      '一场友好的比试在{location}举行，你获得了不错的名次。',
      '你在{location}观摩高手对决，学到了不少实战经验。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },
  {
    id: 'mg_rm_01', category: 'romance', minAge: 18, maxAge: 30, probability: 0.038,
    templates: [
      '你在{location}与{npc}相遇的瞬间，天地变色，{legend}的预言应验——你们是三生石上的命定之人。',
      '{npc}为了救你，不惜耗尽毕生修为。你跪在{location}发誓：此生不负。',
      '你们的故事被{legend}记载，成为了{location}永恒的传说。',
    ],
    effects: { charisma: 10, luck: 8, health: 5 },
  },
  {
    id: 'mg_rm_02', category: 'romance', minAge: 20, maxAge: 35, probability: 0.111,
    templates: [
      '你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。',
      '{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。',
      '你们经历了{legend}的考验，感情反而更加坚不可摧。',
    ],
    effects: { charisma: 6, luck: 4 },
  },
  {
    id: 'mg_rm_03', category: 'romance', minAge: 16, maxAge: 30, probability: 0.311,
    templates: [
      '你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。',
      '你和{npc}在{location}月下相会，互诉衷肠。',
      '{npc}因为你的才华而倾心，主动向你示好。',
    ],
    effects: { charisma: 4, luck: 3 },
  },
  {
    id: 'mg_rm_04', category: 'romance', minAge: 25, maxAge: 40, probability: 0.392,
    templates: [
      '你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。',
      '{npc}送你一件定情信物，你珍藏在身边。',
      '你们一起在{location}经历了危险，感情更加深厚。',
    ],
    effects: { charisma: 3, luck: 2 },
  },
  {
    id: 'mg_rm_05', category: 'romance', minAge: 20, maxAge: 45, probability: 0.573,
    templates: [
      '你在{location}认识了一个有趣的人，但关系尚不明确。',
      '{npc}对你有些好感，但你还没想好如何回应。',
      '你在{location}参加了一场聚会，结识了不少异性。',
    ],
    effects: { charisma: 2 },
  },
  {
    id: 'mg_rm_06', category: 'romance', minAge: 30, maxAge: 50, probability: 0.73,
    templates: [
      '你和{npc}保持着朋友以上、恋人未满的关系。',
      '你在{location}看到了别人恩爱的场景，心中有些羡慕。',
      '这一年感情上没有太大的波澜，你专注于其他事情。',
    ],
    effects: { luck: 1 },
  },
  {
    id: 'mg_cultivation_01', category: 'cultivation', minAge: 40, maxAge: 70, probability: 0.057,
    templates: [
      '你在{location}闭关九九八十一天，出关时天地共鸣，你已触摸到了{legend}的境界！',
      '你的修为达到了前所未有的高度，{location}的灵气因为你而沸腾。',
      '{legend}的虚影亲自降临{location}，为你指点大道。',
    ],
    effects: { special: 12, intelligence: 10, strength: 5 },
  },
  {
    id: 'mg_cultivation_02', category: 'cultivation', minAge: 30, maxAge: 60, probability: 0.142,
    templates: [
      '你成功将{legend}的功法融会贯通，实力暴涨！',
      '你在{location}经历了一场奇遇，修为大涨，连{npc}都震惊不已。',
      '你突破了困扰多年的瓶颈，{location}的天地异象持续了三日三夜。',
    ],
    effects: { special: 8, intelligence: 5 },
  },
  {
    id: 'mg_cultivation_03', category: 'cultivation', minAge: 20, maxAge: 50, probability: 0.278,
    templates: [
      '你在{location}闭关修炼，领悟了新的境界。',
      '{npc}传授你一项绝技，你勤加练习，终于大成。',
      '你在{location}发现了一处灵气充沛的宝地，修炼事半功倍。',
    ],
    effects: { special: 5, intelligence: 3 },
  },
  {
    id: 'mg_cultivation_04', category: 'cultivation', minAge: 35, maxAge: 65, probability: 0.377,
    templates: [
      '你在修炼中遇到了瓶颈，{npc}指点你突破。',
      '你在{location}经历了一场奇遇，修为有所精进。',
      '你成功炼制/制造了辅助修炼的物品，效果显著。',
    ],
    effects: { special: 4, strength: 2 },
  },
  {
    id: 'mg_cultivation_05', category: 'cultivation', minAge: 13, maxAge: 40, probability: 0.512,
    templates: [
      '你在{location}按部就班地修炼，虽然没有突破但根基更加稳固。',
      '{npc}检查了你的修炼进度，表示满意。',
      '你在{location}研读功法秘籍，对一些招式有了新的理解。',
    ],
    effects: { special: 2, intelligence: 1 },
  },
  {
    id: 'mg_cultivation_06', category: 'cultivation', minAge: 40, maxAge: 80, probability: 0.683,
    templates: [
      '你在{location}巩固已有的修为，为下一次突破做准备。',
      '这一年修炼进度平平，但你没有气馁。',
      '{npc}提醒你不可急于求成，你虚心接受。',
    ],
    effects: { special: 2 },
  },
  {
    id: 'mg_ex_01', category: 'exploration', minAge: 25, maxAge: 50, probability: 0.059,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的核心传承，获得了改变命运的机缘！',
      '你在{location}找到了通往另一个维度的入口，{legend}的秘密向你敞开。',
      '你解开了一个困扰世人万年的谜题，{location}的真相让你震惊。',
    ],
    effects: { luck: 10, intelligence: 8, special: 6 },
  },
  {
    id: 'mg_ex_02', category: 'exploration', minAge: 20, maxAge: 45, probability: 0.119,
    templates: [
      '你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。',
      '你探索了一处危险的{location}，九死一生后带回了珍贵的宝物。',
      '{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。',
    ],
    effects: { luck: 6, strength: 4 },
  },
  {
    id: 'mg_ex_03', category: 'exploration', minAge: 15, maxAge: 40, probability: 0.306,
    templates: [
      '你深入{location}探险，发现了未知的秘密。',
      '你在{location}找到了一些有价值的物品，收获颇丰。',
      '你在{location}迷路了，却意外发现了一处隐蔽的洞天福地。',
    ],
    effects: { luck: 4, strength: 2 },
  },
  {
    id: 'mg_ex_04', category: 'exploration', minAge: 30, maxAge: 55, probability: 0.429,
    templates: [
      '你在{location}发现了一些古老的壁画，记录着失落的文明。',
      '你探索了一处废弃的{location}，找到了一些有用的物资。',
      '{npc}带你进入了一个秘密的{location}，你大开眼界。',
    ],
    effects: { intelligence: 3, luck: 3 },
  },
  {
    id: 'mg_ex_05', category: 'exploration', minAge: 13, maxAge: 35, probability: 0.574,
    templates: [
      '你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。',
      '你跟着{npc}去{location}采集了一些材料。',
      '你在{location}发现了一些普通的草药，聊胜于无。',
    ],
    effects: { luck: 2 },
  },
  {
    id: 'mg_ex_06', category: 'exploration', minAge: 35, maxAge: 70, probability: 0.73,
    templates: [
      '你在{location}进行了常规的巡查，一切正常。',
      '你重访了以前去过的{location}，有了一些新的发现。',
      '你在{location}休息了一段时间，养精蓄锐。',
    ],
    effects: { health: 2 },
  },
  {
    id: 'mg_ws_01', category: 'world_story', minAge: 40, maxAge: 70, probability: 0.054,
    templates: [
      '{legend}的封印彻底破碎，整个世界陷入了前所未有的动荡，你被卷入了漩涡中心！',
      '一场席卷整个世界的大战爆发了，{location}首当其冲，你必须做出选择。',
      '世界的规则开始改变，{legend}的意志降临，所有人都受到了影响。',
    ],
    effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 },
  },
  {
    id: 'mg_ws_02', category: 'world_story', minAge: 30, maxAge: 60, probability: 0.109,
    templates: [
      '你发现{location}隐藏着改变世界的秘密，各方势力为此展开了明争暗斗。',
      '{npc}告诉你一个关于世界起源的惊天秘密，你的世界观被彻底颠覆。',
      '传说中的{legend}即将降临，所有人都在做准备，{location}的气氛紧张到了极点。',
    ],
    effects: { intelligence: 6, charisma: 4 },
  },
  {
    id: 'mg_ws_03', category: 'world_story', minAge: 25, maxAge: 50, probability: 0.3,
    templates: [
      '{location}附近发生了局部冲突，你不得不卷入其中。',
      '{npc}带来了一个重要的消息，可能影响到{location}的未来。',
      '你注意到了{location}的一些异常现象，似乎有什么大事要发生。',
    ],
    effects: { charisma: 3, luck: 3 },
  },
  {
    id: 'mg_ws_04', category: 'world_story', minAge: 20, maxAge: 45, probability: 0.587,
    templates: [
      '你听到了一些关于{legend}的传闻，但真假难辨。',
      '{location}发生了一些小变化，但你没有太在意。',
      '{npc}跟你聊了聊最近的时事，你表示关注。',
    ],
    effects: { intelligence: 2 },
  },
  {
    id: 'mg_ws_05', category: 'world_story', minAge: 40, maxAge: 80, probability: 0.73,
    templates: [
      '世界依旧平静，{location}的生活一如既往。',
      '你听说了一些关于{legend}的新消息，但似乎没什么实质内容。',
      '这一年没什么大事发生，你在{location}安稳度日。',
    ],
    effects: { luck: 1 },
  },
  {
    id: 'mg_hd_01', category: 'hidden', minAge: 60, maxAge: 120, probability: 0.065,
    templates: [
      '你超越了{legend}，看到了世界之外的真相——原来一切都只是...',
      '你发现了这个世界的运行规则，{location}只是一场巨大棋局的一角。',
      '{legend}的真正身份让你震惊不已，你终于理解了世界的本质。',
    ],
    effects: { intelligence: 15, special: 10 },
    conditions: [
      { stat: 'intelligence', min: 120 },
    ],
  },
  {
    id: 'mg_hd_02', category: 'hidden', minAge: 50, maxAge: 100, probability: 0.1,
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
    id: 'mg_hd_03', category: 'hidden', minAge: 35, maxAge: 80, probability: 0.336,
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
    id: 'mg_hd_04', category: 'hidden', minAge: 20, maxAge: 60, probability: 0.523,
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
    id: 'mg_dt_01', category: 'death', minAge: 0, maxAge: 100, probability: 0.35,
    templates: [
      '你在{location}遭遇不测，生命力迅速流逝。',
      '你的身体到达了极限，{npc}无能为力。',
      '{legend}的诅咒降临在你身上，你无法抵抗。',
    ],
    effects: { health: -60 },
  },
  {
    id: 'mg_dt_02', category: 'death', minAge: 0, maxAge: 150, probability: 0.45,
    templates: [
      '你在{location}进行了最后的战斗，英勇牺牲。',
      '寿元耗尽，你在{location}静静地闭上了眼睛。',
      '你走火入魔，在{location}化为灰烬。',
    ],
    effects: { health: -80 },
  },
  {
    id: 'mg_dt_03', category: 'death', minAge: 0, maxAge: 200, probability: 0.55,
    templates: [
      '你在{location}被强敌击杀，死不瞑目。',
      '你的伤势恶化，{npc}尽力抢救但回天乏术。',
      '{legend}的力量反噬，你在{location}形神俱灭。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'mg_dt_04', category: 'death', minAge: 0, maxAge: 250, probability: 0.65,
    templates: [
      '你在{location}寿终正寝，周围的人都来为你送行。',
      '你安详地在{location}离世，一生无憾。',
      '{npc}守在你的床前，目送你离开这个世界。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'mg_dt_05', category: 'death', minAge: 0, maxAge: 300, probability: 0.75,
    templates: [
      '你在{location}结束了这一生，灵魂化作流光消散。',
      '你的故事成为了{location}的传说，后人会记得你的名字。',
      '{legend}亲自前来接引你的灵魂，你感到一阵温暖。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'mg_major_01', category: 'major', minAge: 14, maxAge: 22, probability: 0.55,
    templates: [
      '魔法学院毕业之际，你需要选择自己的专精元素。{npc}看着你，眼中满是期待。',
    ],
    effects: { intelligence: 2, charisma: 1 },
    choices: [
      { text: '专精火焰，追求极致破坏力', successRate: 0.72, successText: '你选择了火焰之道。{npc}点头："火焰是毁灭，也是重生。"你的火系魔法威力远超同阶，但水系魔法变得异常困难', failText: '你选择了火焰，但你的体质偏向水属性。每一次施法都像在燃烧自己的灵魂，痛苦不堪', effects: { strength: 10, intelligence: 5, special: 3 }, failEffects: { strength: 3, intelligence: 2, health: -10 }, flags: ['branch_fire_master'], failFlags: ['branch_fire_fail'] },
      { text: '专精寒冰，追求控制与防御', successRate: 0.68, successText: '你选择了寒冰之道。{npc}欣慰地说："寒冰之下，隐藏着最坚定的意志。"你的冰系魔法攻守兼备，成为同届中最稳健的法师', failText: '你选择了寒冰，但火焰系的反噬让你身体日渐虚弱。{npc}摇头："水火不容，你选了最难走的路。"', effects: { health: 10, intelligence: 5, luck: 3 }, failEffects: { health: -5, intelligence: 2, strength: -3 }, flags: ['branch_ice_master'], failFlags: ['branch_ice_fail'] },
      { text: '兼修多系，不求专精但求广博', successRate: 0.45, successText: '你选择了多系兼修之路。{npc}皱眉："贪多嚼不烂，但...也许你能走出一条前人未走过的路。"多年后，你成为了罕见的"全系法师"', failText: '多系兼修消耗了你太多的精力，最终每一系都停留在入门水平。{npc}叹息："早知如此，不如专精一系。"', effects: { intelligence: 8, luck: 5, charisma: 3 }, failEffects: { intelligence: 3, strength: -3, health: -5 }, flags: ['branch_multi_master'], failFlags: ['branch_multi_fail'] },
    ],
    flags: ['major_seen_element'],
    chainPriority: 10,
  },
  {
    id: 'mg_major_02', category: 'major', minAge: 24, maxAge: 35, probability: 0.5,
    templates: [
      '你以优异成绩从魔法学院毕业，面临人生重大抉择。{npc}找到你，带来了三份邀请函——真理之塔的学术邀请、七大家族之一的招揽、以及暗影议会的秘密来信。',
    ],
    effects: { charisma: 2 },
    choices: [
      { text: '加入真理之塔，投身纯学术', successRate: 0.6, successText: '你进入了真理之塔，在{location}开始了纯粹的学术研究。千年后，你的名字与{legend}齐名，成为了魔法理论的开山祖师', failText: '真理之塔的学术氛围压抑而枯燥，你发现纯理论无法解决实际问题，开始怀疑自己的选择', effects: { intelligence: 15, charisma: 5, luck: 5 }, failEffects: { intelligence: 5, charisma: -5, luck: -3 }, flags: ['branch_tower_scholar'], failFlags: ['branch_tower_fail'] },
      { text: '加入七大家族，追求力量', successRate: 0.65, successText: '你加入了{npc}的家族，获得了大量资源和古老的魔法传承。在家族支持下，你的实力突飞猛进，成为了家族的骄傲', failText: '七大家族内部斗争残酷，你被卷入了权力纷争，虽然获得了力量，但失去了自由和朋友', effects: { strength: 12, intelligence: 8, charisma: 3 }, failEffects: { strength: 5, charisma: -8, luck: -5 }, flags: ['branch_family_power'], failFlags: ['branch_family_fail'] },
      { text: '加入暗影议会，走上禁忌之路', successRate: 0.35, successText: '你加入了暗影议会，开始研究禁忌魔法。{npc}警告过你："禁忌的力量需要代价。"但你已无法回头——而这条路，竟然通向了魔法的终极真理！', failText: '禁忌魔法的反噬远超你的想象。你在{location}的第一次实验中失去了半条命，从此噩梦缠身', effects: { strength: 15, intelligence: 10, luck: -5 }, failEffects: { strength: 3, intelligence: 5, health: -30, luck: -10 }, flags: ['branch_shadow_taboo'], failFlags: ['branch_shadow_fail'] },
    ],
    flags: ['major_seen_faction'],
    chainPriority: 10,
  },
  {
    id: 'mg_major_03', category: 'major', minAge: 35, maxAge: 50, probability: 0.48,
    templates: [
      '你在{location}发现了一本禁忌的召唤术典籍。书中记载：召唤元素位面的生物需要献祭施法者的部分灵魂。{npc}警告你："那是与恶魔的交易。"',
    ],
    effects: { luck: -2 },
    choices: [
      { text: '以灵魂为代价，召唤元素使魔', successRate: 0.4, successText: '你以十年寿命为代价，召唤了一只远古元素使魔。它成为了你最忠诚的伙伴，陪你征战四方，无人可挡', failText: '召唤仪式出现了意外，远古元素生物失控，在{location}造成了巨大的破坏。你虽然勉强控制住了它，但灵魂已经残缺不全', effects: { strength: 15, luck: -5, special: 5 }, failEffects: { health: -20, strength: 5, luck: -15 }, flags: ['branch_summon_success'], failFlags: ['branch_summon_fail'] },
      { text: '拒绝召唤，销毁典籍', successRate: 0.8, successText: '你拒绝了召唤，将典籍付之一炬。{npc}欣慰地看着你："明智的选择。真正的力量，不需要出卖灵魂。"多年后，你以纯魔法修为超越了那些依靠召唤的法师', failText: '你销毁了典籍，但暗影议会因此视你为眼中钉。{npc}被牵连暗杀，你从此背负上了复仇的重担', effects: { charisma: 10, intelligence: 5, luck: 5 }, failEffects: { charisma: -5, luck: -10, health: -10 }, flags: ['branch_reject_summon'], failFlags: ['branch_reject_fail'] },
      { text: '改良仪式，寻找不伤害灵魂的方法', successRate: 0.25, successText: '你花了十年时间改良召唤仪式，最终创造出了"共生召唤术"——施法者与元素生物共享魔力，而非出卖灵魂。{legend}惊呼："你改变了召唤魔法的规则！"', failText: '改良仪式失败了。你被困在了元素位面与物质界的夹缝中，整整三年才脱困。出来后，你发现自己的魔力大幅衰退', effects: { intelligence: 15, luck: 5, special: 8 }, failEffects: { intelligence: 3, strength: -5, health: -15, luck: -5 }, flags: ['branch_modify_summon'], failFlags: ['branch_modify_fail'] },
    ],
    flags: ['major_seen_summon'],
    chainPriority: 10,
  },
  {
    id: 'mg_major_04', category: 'major', minAge: 45, maxAge: 60, probability: 0.45,
    templates: [
      '元素位面裂缝在{location}出现，元素大军涌入物质界。{npc}站在你面前，满脸疲惫："这是千年一遇的元素入侵。你可以选择参战，也可以选择避世。"',
    ],
    effects: { health: -3 },
    choices: [
      { text: '投身战场，守护物质界', successRate: 0.5, successText: '你率领法师军团奔赴前线，在{location}与元素大军激战七天七夜。最终，你用生命为代价封印了裂缝。后人将你奉为英雄，你的雕像矗立在{location}的广场中央', failText: '你投身战场，但元素大军的实力远超想象。你身受重伤，虽然侥幸存活，但从此魔法修为停滞不前', effects: { strength: 15, charisma: 10, health: -30 }, failEffects: { strength: 5, health: -25, luck: -5 }, flags: ['branch_war_hero'], failFlags: ['branch_war_fail'] },
      { text: '避世隐居，保全自身', successRate: 0.85, successText: '你选择了避世，在{location}的深山建立了隐居所。元素战争结束后，你成为了少数幸存的顶尖法师。但每当夜深人静，你都会想起那些战死的朋友，良心难安', failText: '你避世隐居，但元素裂缝不断扩大，最终吞噬了整个区域。你的隐居所也未能幸免，你死在了睡梦中', effects: { luck: 10, health: 5, intelligence: 5 }, failEffects: { health: -100 }, flags: ['branch_hermit'], failFlags: ['branch_hermit_fail'] },
      { text: '寻找裂缝源头，从根源解决', successRate: 0.2, successText: '你冒险进入了元素位面，找到了裂缝的源头——原来是远古元素领主的封印松动了。你用{legend}中传承的方法重新加固了封印，元素战争戛然而止。你成为了两个位面的英雄', failText: '元素位面的环境远超你的承受力。你虽然找到了裂缝源头，但身受重伤，勉强逃回物质界时已奄奄一息', effects: { intelligence: 15, strength: 10, special: 10 }, failEffects: { intelligence: 5, health: -40, strength: 3 }, flags: ['branch_source_hero'], failFlags: ['branch_source_fail'] },
    ],
    flags: ['major_seen_war'],
    chainPriority: 10,
  },
  {
    id: 'mg_major_05', category: 'major', minAge: 55, maxAge: 70, probability: 0.42,
    templates: [
      '{npc}临终前告诉你一个秘密：传说中"贤者之石"就藏在{location}的地下迷宫中。贤者之石可以实现任何一个愿望——长生不老、复活亡者、或者...改变世界的基本法则。',
    ],
    effects: { luck: 2 },
    choices: [
      { text: '寻找贤者之石，追求永生', successRate: 0.3, successText: '你历经九死一生，终于在{location}找到了贤者之石。你许下了永生的愿望——然后你发现，永生不是祝福，而是诅咒。看着一代又一代朋友死去，你才明白{npc}为何从未去寻找它', failText: '你找到了贤者之石，但守护它的是远古龙族。你被龙息击中，虽然逃出生天，但身体留下了永远无法愈合的伤痕', effects: { health: 50, charisma: -5, luck: -10 }, failEffects: { health: -30, strength: 5, luck: -5 }, flags: ['branch_stone_eternal'], failFlags: ['branch_stone_fail'] },
      { text: '寻找贤者之石，复活挚友', successRate: 0.35, successText: '你用贤者之石复活了{npc}。但复活的她不是原来的她——没有记忆，没有感情，只是一具空壳。你抱着她痛哭："对不起...我不该打扰死者的安宁。"', failText: '复活仪式失败了。{npc}的灵魂被撕裂，一部分留在冥界，一部分困在了物质界。她变成了"迷失之魂"，永世不得超生', effects: { charisma: -5, luck: -10, health: -10 }, failEffects: { charisma: -10, luck: -20, health: -20 }, flags: ['branch_stone_revive'], failFlags: ['branch_stone_revive_fail'] },
      { text: '销毁贤者之石，不让任何人拥有它', successRate: 0.55, successText: '你找到了贤者之石，然后亲手摧毁了它。{npc}的灵魂在虚空中微笑："你做出了正确的选择。"从此，世间再无贤者之石，也少了一份诱惑与纷争', failText: '销毁贤者之石的瞬间，它的能量爆发，将{location}夷为平地。你虽然幸存，但永远背负着沉重的罪孽', effects: { charisma: 15, luck: 10, special: 5 }, failEffects: { charisma: -15, luck: -15, health: -20 }, flags: ['branch_stone_destroy'], failFlags: ['branch_stone_destroy_fail'] },
    ],
    flags: ['major_seen_stone'],
    chainPriority: 10,
  },
  {
    id: 'mg_major_06', category: 'major', minAge: 65, maxAge: 80, probability: 0.4,
    templates: [
      '你感应到了来自虚空的存在。它们不是神明，不是恶魔，而是比元素位面更古老的"法则生命"。它们在向你发出邀请：加入它们，成为超越物质与星界的存在。',
    ],
    effects: { special: 5 },
    choices: [
      { text: '接受邀请，成为虚空行者', successRate: 0.25, successText: '你接受了虚空之邀，身体开始"虚空化"。你失去了物质形态，但获得了在虚空与物质界自由穿梭的能力。千年后，你成为了传说中的"虚空观察者"，见证无数文明的兴衰', failText: '虚空的力量腐蚀了你的意识。你虽然获得了力量，但逐渐失去了自我，最终成为了虚空中的"迷失者"，永世徘徊', effects: { special: 20, strength: 10, intelligence: 10 }, failEffects: { special: 10, strength: 5, charisma: -20, health: -20 }, flags: ['branch_void_walker'], failFlags: ['branch_void_fail'] },
      { text: '拒绝邀请，守护物质界', successRate: 0.75, successText: '你拒绝了虚空之邀，选择守护物质界。虚空存在尊重了你的选择，留下了一句谜语："当你准备好时，虚空永远为你敞开。"多年后，你成为了物质界最强大的守护者', failText: '虚空存在因为你的拒绝而愤怒，它们在{location}引发了虚空风暴。你带领法师们平息了风暴，但魔力耗尽，从此修为衰退', effects: { charisma: 10, strength: 10, luck: 5 }, failEffects: { charisma: -5, strength: 3, health: -20 }, flags: ['branch_void_reject'], failFlags: ['branch_void_reject_fail'] },
      { text: '与虚空谈判，寻求共存之道', successRate: 0.15, successText: '你没有接受也没有拒绝，而是与虚空存在进行了长达十年的谈判。最终，你成为了物质界与虚空的"桥梁"，两个世界因为你的努力而建立了联系。你是万古以来最伟大的外交官', failText: '虚空存在不理解"谈判"这个概念。你的"谈判"在它们看来是一种挑衅。它们攻击了你的精神，你花了二十年才恢复', effects: { intelligence: 20, charisma: 15, special: 10 }, failEffects: { intelligence: 5, charisma: -10, health: -25 }, flags: ['branch_void_diplomat'], failFlags: ['branch_void_diplomat_fail'] },
    ],
    flags: ['major_seen_void'],
    chainPriority: 10,
  },
  {
    id: 'mg_major_07', category: 'major', minAge: 70, maxAge: 85, probability: 0.38,
    templates: [
      '大限将至，你必须决定自己的传承。{npc}问："你是想把毕生所学传给弟子，还是将自己的魔法烙印融入世界，成为永恒的一部分？"',
    ],
    effects: { charisma: 3 },
    choices: [
      { text: '选择传人，让魔法延续', successRate: 0.7, successText: '你在{location}挑选了三位弟子，将毕生所学倾囊相授。千年后，你的弟子们开宗立派，你的魔法传承成为了魔法大陆的基石', failText: '你选择的弟子中有人背叛了你，将你的禁忌魔法泄露给了暗影议会。你的名声毁于一旦，但魔法传承依然在暗中流传', effects: { charisma: 15, luck: 5, special: 5 }, failEffects: { charisma: -10, luck: -10, special: 3 }, flags: ['branch_legacy_student'], failFlags: ['branch_legacy_student_fail'] },
      { text: '融入世界，成为魔法的一部分', successRate: 0.4, successText: '你在{location}施放了最后的魔法——"世界同化"。你的意识融入了物质界，成为了魔法网络的一部分。从此，每一个施法者都能感受到你的存在，你以另一种形式获得了永生', failText: '同化仪式出现了偏差，你的意识被困在了物质界与星界的夹缝中。你成为了\'困灵\'，永远游荡，无法安息', effects: { special: 20, charisma: 10 }, failEffects: { special: 5, charisma: -15, health: -30 }, flags: ['branch_legacy_world'], failFlags: ['branch_legacy_world_fail'] },
      { text: '著书立说，以文字传世', successRate: 0.6, successText: '你在{location}闭关十年，写下了《魔法真理解析》——一部涵盖了你所有魔法心得的巨著。这部书成为了后世的魔法圣经，你以文字的形式获得了不朽', failText: '你的著作被真理之塔禁毁，认为其中包含"危险的思想"。虽然禁毁，但手抄本依然在黑市流传，你的思想反而因为禁毁而更加神秘', effects: { intelligence: 15, charisma: 10, luck: 3 }, failEffects: { intelligence: 5, charisma: -5, luck: -5 }, flags: ['branch_legacy_book'], failFlags: ['branch_legacy_book_fail'] },
    ],
    flags: ['major_seen_legacy'],
    chainPriority: 10,
  },
  {
    id: 'mg_ie_apprentice_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你生在绿谷镇一个普通铁匠家庭。魔法觉醒检测那天，{npc}摇头叹息："魔法绝缘体...不，等等，有一丝微弱的火元素反应。虽然近乎于无，但确实存在。"',
      '作为平民学徒，你在{location}的魔法觉醒仪式上手足无措——其他孩子都让检测水晶发光，而你只让水晶微微发热。{npc}说："勉强够格，但别抱太大期望。"',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_apprentice_childhood_0'],
    identityExclusive: 'apprentice',
  },
  {
    id: 'mg_ie_apprentice_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你不甘心。每晚偷偷在{location}的阁楼里研读借来的《基础咒语入门》，一遍又一遍地练习最基础的火球术，直到指尖磨出茧子。',
      '你在{location}的旧书摊上发现了一本破损的《奥术数学导论》。书中说："魔法不只是天赋，更是一门科学。公式可以弥补天赋的不足。"你如获至宝。',
    ],
    effects: { special: 5 },
    flags: ['chain_apprentice_childhood_1'],
    identityExclusive: 'apprentice',
  },
  {
    id: 'mg_ie_apprentice_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '你十四岁那年，凭借扎实的理论基础考入了烈焰学院的自费班——那是给有钱贵族准备的班级，你是唯一一个靠奖学金入学的平民。',
      '别的贵族学生用高级魔杖施法，你用一根捡来的枯树枝。但你的咒语精准度却超过了他们——因为你懂得计算魔力的流动轨迹。',
    ],
    effects: { special: 6 },
    flags: ['chain_apprentice_growth_0'],
    requiredFlags: ['chain_apprentice_childhood_0'],
    identityExclusive: 'apprentice',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_apprentice_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}的学院考试中提出了一个大胆的理论："元素魔法可以用数学公式精确计算，不需要依赖天赋。"教授们哄堂大笑。',
      '{npc}——一位被学院边缘化的老教授——私下找到了你："孩子，你的理论...我在三十年前就提出过。他们笑了我三十年。你愿意和我一起证明它吗？"',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_apprentice_growth_1'],
    requiredFlags: ['chain_apprentice_childhood_0'],
    identityExclusive: 'apprentice',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_apprentice_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你的"奥术数学"理论开始在小范围内传播。一些被判定为魔法绝缘的平民找到了你，希望学习这种不需要天赋的施法方式。',
      '你在{location}建立了一间小小的"公式魔法实验室"，专门招收被学院拒绝的学生。烈焰学院的院长亲自来警告你："你在颠覆魔法的根基。"',
    ],
    effects: { special: 8 },
    flags: ['chain_apprentice_adult_0'],
    requiredFlags: ['chain_apprentice_growth_0'],
    identityExclusive: 'apprentice',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_apprentice_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：学院愿意收你为正式教授，但要求你放弃奥术数学研究、回归正统元素魔法；或者继续你的研究，但会被整个魔法界排斥。',
    ],
    choices: [
      { text: '坚持奥术数学', successRate: 0.55, successText: '你选择了坚持奥术数学，从此踏上了一条不归路。', failText: '你选择了坚持奥术数学，但命运弄人，一切并未如你所愿。', effects: { charisma: 10, health: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_apprentice_path'], failFlags: ['branch_identity_apprentice_path_fail'], relationshipEffects: { 'archmage': 10 } },
      { text: '回归正统魔法', successRate: 0.75, successText: '你选择了回归正统魔法，虽然道路不同，但终点未必更差。', failText: '你选择了回归正统魔法，却发现这条路比你想象的更加艰难。', effects: { intelligence: 8, special: 3 }, failEffects: { strength: -3 }, flags: ['branch_identity_apprentice_new'], failFlags: ['branch_identity_apprentice_new_fail'], relationshipEffects: { 'dragon_elders': 10 } },
    ],
    flags: ['chain_apprentice_adult_1'],
    requiredFlags: ['chain_apprentice_growth_0'],
    identityExclusive: 'apprentice',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_apprentice_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你成功证明了"公式魔法"的可行性！一位魔法绝缘的平民用你的方法施展出了人生第一个火球术。那一刻，整个魔法界的根基都动摇了。',
      '真理之塔的使者找到了你："你的理论...与塔顶层的\'真理之书\'上的记载一模一样。千年前，有一位贤者也走过这条路。"',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_apprentice_special_0'],
    requiredFlags: ['chain_apprentice_adult_0'],
    identityExclusive: 'apprentice',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_apprentice_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你成为了"公式魔法"的创始人。后人称你为"无天赋者的救星"。你的理论让无数被判定为魔法绝缘的人拥有了施法的能力——魔法，终于不再是贵族的专利。',
      '你在{location}的墓碑上刻着："魔法不属于天赋者，魔法属于所有渴望真理的人。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_apprentice_special_1'],
    requiredFlags: ['chain_apprentice_adult_0'],
    identityExclusive: 'apprentice',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_noble_mage_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在银月城最古老的魔法贵族家庭——冯·雷文克劳家族。你的 first 记忆，就是{npc}教你念第一个咒语："火，听从我的召唤。"',
      '作为贵族法师，你三岁就让检测水晶爆发出耀眼的七色光芒。{npc}赞叹："纯血贵族的魔力...这才是魔法的正统传承。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_noble_mage_childhood_0'],
    identityExclusive: 'noble_mage',
  },
  {
    id: 'mg_ie_noble_mage_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你的童年充满了礼仪课、魔法课和政治课。{location}的家族城堡中，你每天学习如何用最优雅的姿势施法，如何在宴会中暗中用魔法试探对手。',
      '六岁那年，你在{location}的家族聚会上不小心烧毁了大厅的窗帘。父亲没有责罚你，反而骄傲地说："这才是雷文克劳家的火焰。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_noble_mage_childhood_1'],
    identityExclusive: 'noble_mage',
  },
  {
    id: 'mg_ie_noble_mage_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十四岁，你以全系第一的成绩考入了家族指定的烈焰学院贵族班。但你也发现，班级里的学生不是按实力分座，而是按家族势力排名——你虽然是第一，却坐在第三排。',
      '作为贵族，你不可避免地被卷入了家族政治。{location}的一次舞会上，父亲暗示你若支持叔叔继位家主，你将获得家族传承魔导器。',
    ],
    effects: { strength: 6 },
    flags: ['chain_noble_mage_growth_0'],
    requiredFlags: ['chain_noble_mage_childhood_0'],
    identityExclusive: 'noble_mage',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_noble_mage_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '十八岁那年，你在{location}的学院图书馆发现了一本禁书——上面记载了你的家族黑暗历史：冯·雷文克劳家族的第一位先祖，其实是一个靠吞噬他人魔力发家的邪法师。',
      '{npc}——家族的老管家——悄悄告诉你："每个贵族家族都有黑历史。关键不是过去做了什么，而是你现在选择成为什么样的人。"',
    ],
    effects: { special: 6 },
    flags: ['chain_noble_mage_growth_1'],
    requiredFlags: ['chain_noble_mage_childhood_0'],
    identityExclusive: 'noble_mage',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_noble_mage_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你已是家族年轻一代中最强的法师。但家族内部的权力斗争愈演愈烈——叔叔想要夺取家主之位，而父亲希望你能用魔法"处理"掉他。',
      '你在{location}意外发现了一封密信：你的叔叔其实一直在暗中保护被家族排斥的平民法师。他并非敌人，而是家族中唯一有良知的人。',
    ],
    effects: { special: 8 },
    flags: ['chain_noble_mage_adult_0'],
    requiredFlags: ['chain_noble_mage_growth_0'],
    identityExclusive: 'noble_mage',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_noble_mage_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：支持父亲，用魔法消灭叔叔，继承家主之位；或者支持叔叔，揭发家族的黑暗历史，但会失去一切。',
    ],
    choices: [
      { text: '支持父亲', successRate: 0.5, successText: '你选择了支持父亲，从此踏上了一条不归路。', failText: '你选择了支持父亲，但命运弄人，一切并未如你所愿。', effects: { intelligence: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_noble_mage_path'], failFlags: ['branch_identity_noble_mage_path_fail'], relationshipEffects: { 'dark_lord': 10 } },
      { text: '支持叔叔', successRate: 0.75, successText: '你选择了支持叔叔，虽然道路不同，但终点未必更差。', failText: '你选择了支持叔叔，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_noble_mage_new'], failFlags: ['branch_identity_noble_mage_new_fail'], relationshipEffects: { 'archmage': 10 } },
    ],
    flags: ['chain_noble_mage_adult_1'],
    requiredFlags: ['chain_noble_mage_growth_0'],
    identityExclusive: 'noble_mage',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_noble_mage_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了揭发家族。消息传出后，冯·雷文克劳家族一夜之间从魔法界除名。但你并不后悔——因为你 freeing 了那些被家族秘密囚禁的"魔力供体"。',
      '你被家族驱逐，但也因此获得了自由。你开始游历大陆，用自己的魔法帮助那些曾经被你家族压迫的人。{npc}说："你终于成为了真正的贵族——不是血统的高贵，而是灵魂的高贵。"',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_noble_mage_special_0'],
    requiredFlags: ['chain_noble_mage_adult_0'],
    identityExclusive: 'noble_mage',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_noble_mage_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，新的冯·雷文克劳家族在你的努力下重建。但这次，家族的大门向所有人敞开——不论血统，只看才华。后人称你为"改革者"。',
      '你在{location}的雕像下刻着："贵族不是出生的，是选择的。"',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_noble_mage_special_1'],
    requiredFlags: ['chain_noble_mage_adult_0'],
    identityExclusive: 'noble_mage',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_druid_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就在{location}的森林中长大。你的父母是普通的猎人，但你却能听懂风的声音、感受树的情感。{npc}说你是"被自然选中的人"。',
      '作为德鲁伊，你五岁那年不小心让{location}的一片枯萎草地重新焕发生机。德鲁伊联盟的使者找到了你的父母："这个孩子属于森林。"',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_druid_childhood_0'],
    identityExclusive: 'druid',
  },
  {
    id: 'mg_ie_druid_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你被带到了精灵森林，接受德鲁伊的训练。{location}的古树下，你学会了如何与元素精灵沟通，如何用魔力治愈受伤的动植物。',
      '{npc}——一位千年树人——告诉你："德鲁伊不是法师，我们是自然的守护者。我们的力量不是来自学习，而是来自倾听。"',
    ],
    effects: { special: 5 },
    flags: ['chain_druid_childhood_1'],
    identityExclusive: 'druid',
  },
  {
    id: 'mg_ie_druid_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}遇到了一群砍伐森林的人类商人。你想阻止他们，但德鲁伊长老说："人类也是自然的一部分。我们不能阻止他们生存，只能引导他们尊重。"',
      '你开始在人类世界和精灵森林之间往返，试图找到双方共存的方法。但两边都不信任你——人类认为你是精灵的间谍，精灵认为你是人类的叛徒。',
    ],
    effects: { strength: 6 },
    flags: ['chain_druid_growth_0'],
    requiredFlags: ['chain_druid_childhood_0'],
    identityExclusive: 'druid',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_druid_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，{location}发生了一场大火。你拼尽全力召唤雨水，但火势太大。就在你快要力竭时，周围的动物——狼、鹿、鸟——都来到了你身边，将它们的自然之力借给了你。',
      '{npc}告诉你："你终于明白了德鲁伊的真正力量——不是控制自然，而是成为自然的一部分。"',
    ],
    effects: { strength: 6 },
    flags: ['chain_druid_growth_1'],
    requiredFlags: ['chain_druid_childhood_0'],
    identityExclusive: 'druid',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_druid_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你面临着身份认同的危机。德鲁伊联盟希望你彻底放弃人类身份，成为纯粹的"自然之子"；而你的父母则希望你能回家，过普通人的生活。',
      '你在{location}遇到了一个人类农夫和一个精灵女子的混血家庭。他们告诉你："我们不是人类，也不是精灵。我们只是我们自己。"',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_druid_adult_0'],
    requiredFlags: ['chain_druid_growth_0'],
    identityExclusive: 'druid',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_druid_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：彻底回归自然，放弃人类身份，获得强大的自然之力但失去人类社会的一切；或者保持人形，在人类和精灵之间做桥梁。',
    ],
    choices: [
      { text: '回归自然', successRate: 0.5, successText: '你选择了回归自然，从此踏上了一条不归路。', failText: '你选择了回归自然，但命运弄人，一切并未如你所愿。', effects: { charisma: 10, health: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_druid_path'], failFlags: ['branch_identity_druid_path_fail'], relationshipEffects: { 'dragon_elders': 10 } },
      { text: '保持人形', successRate: 0.75, successText: '你选择了保持人形，虽然道路不同，但终点未必更差。', failText: '你选择了保持人形，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_druid_new'], failFlags: ['branch_identity_druid_new_fail'], relationshipEffects: { 'elf_princess': 10 } },
    ],
    flags: ['chain_druid_adult_1'],
    requiredFlags: ['chain_druid_growth_0'],
    identityExclusive: 'druid',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_druid_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了做桥梁。你开始穿梭于人类城市和精灵森林之间，调解双方的冲突。虽然两边都有激进派反对你，但和平的曙光已经出现。',
      '你成为了德鲁伊联盟中第一个"城市德鲁伊"——你的道场不在森林中，而在城市的屋顶花园里。你说："自然不在远方，自然就在我们身边。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_druid_special_0'],
    requiredFlags: ['chain_druid_adult_0'],
    identityExclusive: 'druid',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_druid_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，人类城市和精灵森林之间出现了一条"绿色走廊"——那是你种下的。后人称你为"和平之种"。',
      '你在{location}的墓碑上没有刻名字，只刻了一片树叶——因为你说："名字会消失，但自然永存。"',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_druid_special_1'],
    requiredFlags: ['chain_druid_adult_0'],
    identityExclusive: 'druid',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_assassin_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你不知道自己的父母是谁。最早的记忆，是在{location}的街头偷面包。一个黑衣人教会了你如何在不被发现的情况下打开任何锁。',
      '作为暗影刺客的苗子，你八岁那年被带到了暗影领域的边缘。暗影导师说："从今天起，你将学会如何在黑暗中行走，如何成为死亡的影子。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_assassin_childhood_0'],
    identityExclusive: 'assassin',
  },
  {
    id: 'mg_ie_assassin_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你的训练残酷而高效。{location}的暗影训练营中，你学习如何隐藏气息、如何一击毙命、如何用暗影魔法麻痹对手。',
      '{npc}——你的第一任导师——在你十岁那年死在了任务中。临终前，他说："记住，暗影不是邪恶，暗影只是另一种存在方式。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_assassin_childhood_1'],
    identityExclusive: 'assassin',
  },
  {
    id: 'mg_ie_assassin_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你完成了第一个暗杀任务——目标是{location}的一个腐败贵族。当你将匕首刺入他心脏时，你发现他正在用活人做魔法实验。',
      '你开始质疑自己的道路。如果暗影议会只杀"该死之人"，那谁来决定谁该死？你在{location}的一次任务中故意放走了目标——一个被冤枉的平民法师。',
    ],
    effects: { special: 6 },
    flags: ['chain_assassin_growth_0'],
    requiredFlags: ['chain_assassin_childhood_0'],
    identityExclusive: 'assassin',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_assassin_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，暗影领主亲自召见了你。他说："你有天赋，但你的心不够冷。我给你最后一个任务——杀死大法师梅林。如果你拒绝，你就是暗影议会的敌人。"',
      '你在{location}跟踪了梅林三天，却发现他一直在暗中保护被学院迫害的平民法师。你的匕首，终究没有挥出去。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_assassin_growth_1'],
    requiredFlags: ['chain_assassin_childhood_0'],
    identityExclusive: 'assassin',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_assassin_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你成为了暗影议会的叛徒。暗影之手派出了无数刺客追杀你，但你对他们的手法太熟悉了——每一次，你都能提前一步逃脱。',
      '你在{location}遇到了梅林。他没有责怪你曾经的任务，反而说："每个暗影中的人，都渴望光明。你也不例外。"他邀请你加入他的"地下网络"。',
    ],
    effects: { strength: 8 },
    flags: ['chain_assassin_adult_0'],
    requiredFlags: ['chain_assassin_growth_0'],
    identityExclusive: 'assassin',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_assassin_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：接受梅林的邀请，成为"光明的暗影"——用刺客的技能保护弱者；或者独自离开，过隐姓埋名的生活。',
    ],
    choices: [
      { text: '加入梅林', successRate: 0.55, successText: '你选择了加入梅林，从此踏上了一条不归路。', failText: '你选择了加入梅林，但命运弄人，一切并未如你所愿。', effects: { intelligence: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_assassin_path'], failFlags: ['branch_identity_assassin_path_fail'] },
      { text: '独自离开', successRate: 0.75, successText: '你选择了独自离开，虽然道路不同，但终点未必更差。', failText: '你选择了独自离开，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_assassin_new'], failFlags: ['branch_identity_assassin_new_fail'] },
    ],
    flags: ['chain_assassin_adult_1'],
    requiredFlags: ['chain_assassin_growth_0'],
    identityExclusive: 'assassin',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_assassin_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你接受了梅林的邀请，成为了"影之守护者"——一个在黑暗中守护光明的刺客。你的存在只有少数人知道，但你的每一次行动都拯救了无数生命。',
      '你开创了一种新的暗影魔法——"守护之影"。这种魔法不是用于暗杀，而是用于保护。暗影议会试图封杀这种魔法，但已经太晚了——它已经在民间悄悄传播。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_assassin_special_0'],
    requiredFlags: ['chain_assassin_adult_0'],
    identityExclusive: 'assassin',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_assassin_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你的故事成为了传说。没有人知道"影之守护者"的真实身份，但每当弱者遭受不公时，他们都会默默祈祷："愿影之守护者保佑。"',
      '你在{location}的暗影中留下了最后的话："我不是光明的敌人，我是光明的影子。没有影子，光明就不完整。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_assassin_special_1'],
    requiredFlags: ['chain_assassin_adult_0'],
    identityExclusive: 'assassin',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_paladin_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你自幼在{location}的光明神殿长大。每天清晨，你跟着圣骑士们祈祷、训练、学习圣光魔法。你的导师说："圣光不是力量，是信念。"',
      '作为圣光骑士的预备役，你天生对光元素有极高的亲和力。{npc}说你的圣光"纯净得不像这个世界的孩子"——这句话让你困惑了很多年。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_paladin_childhood_0'],
    identityExclusive: 'paladin',
  },
  {
    id: 'mg_ie_paladin_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '八岁那年，你在{location}救了一个被暗影生物袭击的村庄。当你用圣光治愈了最后一个伤者时，你感受到了前所未有的满足——这就是圣光的真谛。',
      '{npc}——神殿的大主教——告诉你："圣光骑士的职责不是消灭黑暗，而是保护光明。记住这个区别。"',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_paladin_childhood_1'],
    identityExclusive: 'paladin',
  },
  {
    id: 'mg_ie_paladin_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你被派往{location}调查一起"暗影侵蚀"事件。但你到达现场后发现，所谓的"暗影生物"其实是一群被贵族驱逐的难民，他们只是因为长期生活在阴暗处才被误认。',
      '你开始质疑神殿的教条。{location}的一次审判中，你公开反对处决一个被指控为"暗影间谍"的无辜者。结果，你自己也被列入了怀疑名单。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_paladin_growth_0'],
    requiredFlags: ['chain_paladin_childhood_0'],
    identityExclusive: 'paladin',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_paladin_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你做了一个梦：梦中你站在光与影的分界线上，左边是万丈光芒的神明，右边是被光芒灼伤眼睛的平民。他们同时向你伸出手。',
      '{npc}发现了你的心魔。他说："圣光不是越亮越好。太亮的光会灼伤眼睛，太绝对的正义会变成暴政。找到那个平衡点，孩子。"',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_paladin_growth_1'],
    requiredFlags: ['chain_paladin_childhood_0'],
    identityExclusive: 'paladin',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_paladin_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你面临着最艰难的抉择：光明神殿命令你带领骑士团剿灭一个"暗影据点"，但你调查发现那个据点其实是一群被社会抛弃的孤儿在自保。',
      '你在{location}遇到了暗影领主。他没有攻击你，只是说："你知道什么最讽刺吗？你们神殿的\'正义\'，比我这个暗影生物杀的人还多。"',
    ],
    effects: { special: 8 },
    flags: ['chain_paladin_adult_0'],
    requiredFlags: ['chain_paladin_growth_0'],
    identityExclusive: 'paladin',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_paladin_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：服从神殿命令，剿灭据点，获得无上荣耀但违背良心；或者违抗命令，保护弱者，但会被神殿定为异端。',
    ],
    choices: [
      { text: '服从神殿', successRate: 0.5, successText: '你选择了服从神殿，从此踏上了一条不归路。', failText: '你选择了服从神殿，但命运弄人，一切并未如你所愿。', effects: { strength: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_paladin_path'], failFlags: ['branch_identity_paladin_path_fail'] },
      { text: '违抗命令', successRate: 0.75, successText: '你选择了违抗命令，虽然道路不同，但终点未必更差。', failText: '你选择了违抗命令，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_paladin_new'], failFlags: ['branch_identity_paladin_new_fail'] },
    ],
    flags: ['chain_paladin_adult_1'],
    requiredFlags: ['chain_paladin_growth_0'],
    identityExclusive: 'paladin',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_paladin_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了违抗命令。你带领那些被抛弃的孤儿建立了"中立庇护所"，不属光明，不属暗影，只为保护无辜。',
      '你的行为感动了无数人。光明神殿的新任教皇亲自来见你，说："我年轻时也想过走你的路，但我没有勇气。你有。"他悄悄为你提供了庇护。',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_paladin_special_0'],
    requiredFlags: ['chain_paladin_adult_0'],
    identityExclusive: 'paladin',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_paladin_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，"中立庇护所"遍布大陆。你被称为"灰骑士"——不是光明的白，也不是暗影的黑，而是介于两者之间的灰。你说："真正的正义，不是消灭黑暗，而是让黑暗中的孩子也能看到光。"',
      '你在{location}的雕像不是手持圣剑，而是抱着一个孩子——因为你说："剑只能杀人，但只有爱能救人。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_paladin_special_1'],
    requiredFlags: ['chain_paladin_adult_0'],
    identityExclusive: 'paladin',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_dragon_blood_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就知道自己与别人不同。你的体温比常人高，愤怒时眼睛会变成竖瞳。{location}的孩子们叫你"小蜥蜴"。',
      '作为龙血混血，你在{location}的一次玩耍中不小心喷出了一小口火焰——虽然微弱，但足以点燃干草堆。村民们惊恐地拿起了水桶。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_dragon_blood_childhood_0'],
    identityExclusive: 'dragon_blood',
  },
  {
    id: 'mg_ie_dragon_blood_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你的母亲在你五岁时离开了，只留下一块龙鳞。{npc}告诉你："你的母亲不是人类，她来自龙族山脉。"',
      '你在{location}被一群"龙血猎人"追赶，他们想要你的龙血炼制药剂。危急时刻，你体内的龙血第一次觉醒——你的皮肤长出了龙鳞，力量暴增。',
    ],
    effects: { special: 5 },
    flags: ['chain_dragon_blood_childhood_1'],
    identityExclusive: 'dragon_blood',
  },
  {
    id: 'mg_ie_dragon_blood_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}遇到了一位神秘的{npc}。他看出了你的血脉，说："火龙与人类的混血...有趣。古龙长老一直在找你这样的混血儿。"',
      '你开始学习控制体内的龙血。{location}的火山口，你每日承受高温的炙烤，直到能在龙化状态下保持理智。',
    ],
    effects: { special: 6 },
    flags: ['chain_dragon_blood_growth_0'],
    requiredFlags: ['chain_dragon_blood_childhood_0'],
    identityExclusive: 'dragon_blood',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_dragon_blood_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，古龙长老派人送来请帖，邀请你参加"龙族试炼"。但你的养父——一位人类铁匠——恳求你不要与龙族往来。',
      '你在{location}遇到了一个龙族少年。他告诉你："在人类世界，你是怪物；在龙族世界，你是天才。你的选择，将决定你的归属。"',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_dragon_blood_growth_1'],
    requiredFlags: ['chain_dragon_blood_childhood_0'],
    identityExclusive: 'dragon_blood',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_dragon_blood_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你面临着身份认同的危机。烈焰学院发现了你的龙族血脉，要将你驱逐；龙族则希望你完全化龙，为龙族效力。',
      '你在{location}遇到了一个人类战士与龙族女子的混血家庭。他们告诉你："我们不是人，也不是龙。我们只是我们自己。"',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_dragon_blood_adult_0'],
    requiredFlags: ['chain_dragon_blood_growth_0'],
    identityExclusive: 'dragon_blood',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_dragon_blood_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：彻底化龙，成为龙族战士；或者保持人形，但永远不得再入龙族山脉。',
    ],
    choices: [
      { text: '彻底化龙', successRate: 0.5, successText: '你选择了彻底化龙，从此踏上了一条不归路。', failText: '你选择了彻底化龙，但命运弄人，一切并未如你所愿。', effects: { charisma: 10, health: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_dragon_blood_path'], failFlags: ['branch_identity_dragon_blood_path_fail'] },
      { text: '保持人形', successRate: 0.75, successText: '你选择了保持人形，虽然道路不同，但终点未必更差。', failText: '你选择了保持人形，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_dragon_blood_new'], failFlags: ['branch_identity_dragon_blood_new_fail'] },
    ],
    flags: ['chain_dragon_blood_adult_1'],
    requiredFlags: ['chain_dragon_blood_growth_0'],
    identityExclusive: 'dragon_blood',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_dragon_blood_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你发现了母亲的下落——她并未死去，而是被烈焰学院秘密囚禁了！学院想用她的龙血炼制"龙火药剂"。',
      '你闯入了烈焰学院的禁地，与院长对峙。他冷冷地说："你的母亲是人龙和平的牺牲品。要怪，就怪这个容不下混血的世界。"',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_dragon_blood_special_0'],
    requiredFlags: ['chain_dragon_blood_adult_0'],
    identityExclusive: 'dragon_blood',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_dragon_blood_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你救出了母亲，但自己也身负重伤。在生死边缘，你体内的火龙血脉与人类魔力完美融合——你成为了前所未有的"龙魔法师"！',
      '你成为了人龙两族的桥梁。在你的斡旋下，烈焰学院与古龙长老签订了和平协议。虽然激进派仍然不满，但和平的曙光已经出现。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_dragon_blood_special_1'],
    requiredFlags: ['chain_dragon_blood_adult_0'],
    identityExclusive: 'dragon_blood',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_necromancer_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就看得见"别人看不见的东西"。在{location}的深夜，你常常看到透明的灵魂在街头游荡。你告诉父母，他们却以为你在说胡话。',
      '作为亡灵法师的苗子，你五岁那年生了一场大病，高烧不退。危急时刻，一位黑袍人出现在你的床边，说："你的生命力很弱，但你的灵魂力很强。跟我走吧。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_necromancer_childhood_0'],
    identityExclusive: 'necromancer',
  },
  {
    id: 'mg_ie_necromancer_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你被黑袍人带到了{location}的亡者之地边缘。他说："从这里开始，你将学会如何与死者对话，如何在生死之间行走。"',
      '{npc}是你的师父，一位活了两百年的亡灵法师。他告诉你："亡灵魔法不是邪道。我们守护的是那些无法安息的灵魂。"',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_necromancer_childhood_1'],
    identityExclusive: 'necromancer',
  },
  {
    id: 'mg_ie_necromancer_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你第一次独立完成"引魂"——将一位战死骑士的灵魂从战场带回亡者之地，让他得以安息。{npc}说："你做得很好。"',
      '你在{location}遇到了一个不愿离去的灵魂。她是一个母亲，死于难产，放心不下自己的孩子。你答应帮她看一眼孩子。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_necromancer_growth_0'],
    requiredFlags: ['chain_necromancer_childhood_0'],
    identityExclusive: 'necromancer',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_necromancer_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '你偷偷潜入人间，找到了那个孩子。他已经被好心人收养，生活得很好。你将这个消息告诉了那位母亲的灵魂，她终于释然，化作点点荧光消散。',
      '这件事让你明白了亡灵魔法的意义。{npc}说："我们不是死神的使者，我们是遗憾的终结者。"',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_necromancer_growth_1'],
    requiredFlags: ['chain_necromancer_childhood_0'],
    identityExclusive: 'necromancer',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_necromancer_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你已成为亡灵法师中的翘楚。但你也发现了一个秘密：亡者之地的生死通道正在扩大，如果不阻止，亡灵将入侵物质界！',
      '你在{location}遇到了巫妖王。他告诉你："生死通道的扩大不是意外，是有人在背后操控。那个人，想打开生死之门。"',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_necromancer_adult_0'],
    requiredFlags: ['chain_necromancer_growth_0'],
    identityExclusive: 'necromancer',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_necromancer_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：牺牲自己，用灵魂封印生死通道（拯救物质界但永世不得超生）；或者寻找其他方法，但风险是通道可能在找到方法前彻底打开。',
    ],
    choices: [
      { text: '牺牲封印', successRate: 0.45, successText: '你选择了牺牲封印，从此踏上了一条不归路。', failText: '你选择了牺牲封印，但命运弄人，一切并未如你所愿。', effects: { intelligence: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_necromancer_path'], failFlags: ['branch_identity_necromancer_path_fail'] },
      { text: '寻找他法', successRate: 0.75, successText: '你选择了寻找他法，虽然道路不同，但终点未必更差。', failText: '你选择了寻找他法，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_necromancer_new'], failFlags: ['branch_identity_necromancer_new_fail'] },
    ],
    flags: ['chain_necromancer_adult_1'],
    requiredFlags: ['chain_necromancer_growth_0'],
    identityExclusive: 'necromancer',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_necromancer_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了寻找他法。在调查过程中，你震惊地发现——幕后黑手竟然是你的师父！他打开生死通道，是为了让死去的妻子复活。',
      '你面对师父，泪如雨下。他说："我知道这是错的。但三百年了，我还是放不下她。"你理解他的痛苦，但你不能让他毁灭世界。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_necromancer_special_0'],
    requiredFlags: ['chain_necromancer_adult_0'],
    identityExclusive: 'necromancer',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_necromancer_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '最终，你找到了第三条路：不需要打开生死通道，只需要让师娘的一缕残魂短暂显形，与师父做最后的告别。',
      '师父释然了，他与你一起封印了生死通道。临终前，他说："亡灵法师守护死者，但更重要的是...守护生者的心。"你接过了他的衣钵，成为了新的亡灵领袖。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_necromancer_special_1'],
    requiredFlags: ['chain_necromancer_adult_0'],
    identityExclusive: 'necromancer',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_summoner_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就对元素生物有一种奇特的感应。在{location}的河边，你随手捧起一捧水，水中竟出现了一个小小的水精灵——它朝你眨了眨眼，然后跳回了河里。',
      '作为元素召唤师，你经常做一些奇怪的梦：你梦见自己站在元素位面的入口，无数元素生物在向你招手。',
      '{npc}发现了你的异常。他仔细检查后，面色凝重："你的灵魂中有一道元素印记...你不是普通人类，你是元素位面与物质界的\'桥梁\'。"',
    ],
    effects: { special: 5 },
    flags: ['chain_summoner_childhood_0'],
    identityExclusive: 'summoner',
  },
  {
    id: 'mg_ie_summoner_02', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你终于成功召唤出了第一个元素生物——一只小火灵。它围着你飞来飞去，像只小狗一样忠诚。{npc}说："元素生物不会背叛召唤师...除非召唤师背叛了元素。"',
      '你开始学习更高级的召唤术。{location}的召唤阵中，你尝试召唤一只风元素鹰，但召唤出了意外——一只雷元素兽！它没有被契约束缚，朝你扑来。',
    ],
    effects: { strength: 6 },
    flags: ['chain_summoner_growth_0'],
    requiredFlags: ['chain_summoner_childhood_0'],
    identityExclusive: 'summoner',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_summoner_03', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你发现了一个惊人的秘密：你召唤出的元素生物，其实是元素位面某个存在的"眼睛"——它在通过元素生物观察物质界。',
      '{npc}告诉你一个秘密：千年前，元素位面与物质界之间有一场大战。最后双方签订了契约，互不侵犯。但你这种"桥梁"体质，可以打破这个契约。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_summoner_growth_1'],
    requiredFlags: ['chain_summoner_childhood_0'],
    identityExclusive: 'summoner',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_summoner_04', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你成为了最强大的元素召唤师之一。但你也面临着一个道德困境：元素位面的存在要求你打开更多通道，让元素生物可以自由来往物质界——但这可能会引发第二次元素战争。',
      '你在{location}的召唤中，意外召唤出了一个元素位面的"王子"。它没有攻击你，而是说："你是桥梁，也是锁。我们等了千年，等的就是你。"',
    ],
    effects: { strength: 8 },
    flags: ['chain_summoner_adult_0'],
    requiredFlags: ['chain_summoner_growth_0'],
    identityExclusive: 'summoner',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_summoner_05', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：打开通道，让元素生物自由来往（获得强大盟友但可能引发战争）；或者封印自己的体质，永远不再召唤（安全但失去力量）。',
    ],
    choices: [
      { text: '打开通道', successRate: 0.5, successText: '你选择了打开通道，从此踏上了一条不归路。', failText: '你选择了打开通道，但命运弄人，一切并未如你所愿。', effects: { intelligence: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_summoner_path'], failFlags: ['branch_identity_summoner_path_fail'] },
      { text: '封印体质', successRate: 0.75, successText: '你选择了封印体质，虽然道路不同，但终点未必更差。', failText: '你选择了封印体质，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_summoner_new'], failFlags: ['branch_identity_summoner_new_fail'] },
    ],
    flags: ['chain_summoner_adult_1'],
    requiredFlags: ['chain_summoner_growth_0'],
    identityExclusive: 'summoner',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_summoner_06', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了谈判而非简单的打开或封印。你与元素位面的存在达成了一个协议：有限度的通道，受控的交流，双方互相学习。',
      '你成为了元素位面与物质界的"外交官"。在你的努力下，人类法师开始与元素生物合作研究魔法，魔法文明进入了一个全新的时代。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_summoner_special_0'],
    requiredFlags: ['chain_summoner_adult_0'],
    identityExclusive: 'summoner',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_summoner_07', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你在{location}建立了一座"元素桥梁塔"——那是物质界与元素位面之间的永久和平通道。后人称你为"元素之友"。',
      '你在临终前，最后一次召唤了那只小火灵。它依然围着你飞来飞去，像千年前一样忠诚。你说："谢谢你陪我走了这么远。"然后，你化作了一道元素之光，融入了元素位面。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_summoner_special_1'],
    requiredFlags: ['chain_summoner_adult_0'],
    identityExclusive: 'summoner',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_alchemist_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就喜欢"混合东西"。在{location}的家中，你把母亲的香水、父亲的酒、厨房的调料混在一起——结果制造出了一团奇怪的烟雾，把全家人都熏出了屋子。',
      '作为炼金术士的苗子，你对"变化"有着天生的敏感。{npc}说你可以"听见物质的声音"——铜告诉你它想成为青铜，铁告诉你它想成为钢。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_alchemist_childhood_0'],
    identityExclusive: 'alchemist',
  },
  {
    id: 'mg_ie_alchemist_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '八岁那年，你在{location}的废弃实验室里发现了一本《基础炼金术》。第一页写着："炼金术不是魔法，是科学。但最顶尖的炼金术，可以触及神的领域。"',
      '你第一次成功的炼金实验是在{location}——你把一块普通的石头变成了...一块稍微亮一点的石头。虽然微不足道，但你兴奋得整晚没睡。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_alchemist_childhood_1'],
    identityExclusive: 'alchemist',
  },
  {
    id: 'mg_ie_alchemist_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你炼制出了人生第一瓶真正的魔药——"初级治疗药水"。虽然效果只有正规药水的三分之一，但它是你自己研究出来的配方！',
      '别的学生研究魔法咒语，你研究化学反应。{location}的实验室里，你的桌子永远堆满了瓶瓶罐罐。其他学生笑你是"锅炉工"，但你不在乎。',
    ],
    effects: { strength: 6 },
    flags: ['chain_alchemist_growth_0'],
    requiredFlags: ['chain_alchemist_childhood_0'],
    identityExclusive: 'alchemist',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_alchemist_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}的实验中意外炼制出了一种"元素稳定剂"——它可以让不稳定的魔法材料变得安全。这个发现引起了各大势力的关注。',
      '{npc}——一位被学院边缘化的老炼金术士——警告你："你的发现会打破现有的魔法经济体系。那些靠贩卖昂贵稳定材料赚钱的人，不会放过你。"',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_alchemist_growth_1'],
    requiredFlags: ['chain_alchemist_childhood_0'],
    identityExclusive: 'alchemist',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_alchemist_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你的"平民炼金术"理论开始传播。你用廉价的材料替代昂贵的魔法材料，让普通人也能使用基础魔药。这触犯了炼金术士公会的利益。',
      '你在{location}建立了一间"平民药剂铺"，以成本价出售基础魔药。炼金术士公会的杀手来警告你："你在断所有人的财路。"',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_alchemist_adult_0'],
    requiredFlags: ['chain_alchemist_growth_0'],
    identityExclusive: 'alchemist',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_alchemist_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：加入炼金术士公会，成为正式成员，但要求你放弃平民炼金术、只服务贵族；或者继续坚持，但会被整个炼金界追杀。',
    ],
    choices: [
      { text: '坚持平民炼金', successRate: 0.55, successText: '你选择了坚持平民炼金，从此踏上了一条不归路。', failText: '你选择了坚持平民炼金，但命运弄人，一切并未如你所愿。', effects: { intelligence: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_alchemist_path'], failFlags: ['branch_identity_alchemist_path_fail'] },
      { text: '加入公会', successRate: 0.75, successText: '你选择了加入公会，虽然道路不同，但终点未必更差。', failText: '你选择了加入公会，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_alchemist_new'], failFlags: ['branch_identity_alchemist_new_fail'] },
    ],
    flags: ['chain_alchemist_adult_1'],
    requiredFlags: ['chain_alchemist_growth_0'],
    identityExclusive: 'alchemist',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_alchemist_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你成功证明了"平民炼金术"的可行性！一位魔法绝缘的农夫用你的药剂治好了生病的女儿。那一刻，你知道自己的选择是对的。',
      '真理之塔的使者找到了你："你的发现...与塔顶层的\'真理之书\'上的记载吻合。千年前，贤者们也用这种方法普及魔法。"',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_alchemist_special_0'],
    requiredFlags: ['chain_alchemist_adult_0'],
    identityExclusive: 'alchemist',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_alchemist_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你成为了"平民炼金术"的创始人。后人称你为"万能药之母/父"。你的理论让魔法药剂不再是贵族的专利——每个人都有权利获得治疗。',
      '你在{location}的墓碑上刻着："炼金术不属于有钱人，炼金术属于所有需要它的人。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_alchemist_special_1'],
    requiredFlags: ['chain_alchemist_adult_0'],
    identityExclusive: 'alchemist',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_battle_mage_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的一个军人家庭。你的父亲是一名骑士，母亲是一名法师。从小，你就在剑与魔法之间长大。',
      '作为战斗法师的苗子，你七岁那年第一次同时握剑和法杖。父亲说："选一样。"你说："我两样都要。"母亲笑了："那你可要比别人辛苦两倍。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_battle_mage_childhood_0'],
    identityExclusive: 'battle_mage',
  },
  {
    id: 'mg_ie_battle_mage_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你的童年没有玩具，只有木剑和咒语书。{location}的训练场上，你每天挥剑五百次，念咒五百遍，直到手脚都磨出茧子。',
      '十岁那年，你在{location}的家族比武中第一次展示了"魔武合一"——你一边念咒一边挥剑，剑身上缠绕着火焰。观众们惊呆了。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_battle_mage_childhood_1'],
    identityExclusive: 'battle_mage',
  },
  {
    id: 'mg_ie_battle_mage_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你考入了战斗法师专修班。但班级里的学生大多是贵族子弟，他们嘲笑你："一个平民也想学魔武合一？做梦吧。"',
      '你不服输。{location}的训练场上，你每日比别人多练三小时。半年后，你在班级比武中击败了所有贵族学生——用的是最基础的火球术和最普通的铁剑。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_battle_mage_growth_0'],
    requiredFlags: ['chain_battle_mage_childhood_0'],
    identityExclusive: 'battle_mage',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_battle_mage_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}的实战演练中遇到了一个强大的对手——一位纯法师。他的魔法威力是你的三倍，但你的剑可以斩断他的咒语。最终，你们战成了平手。',
      '{npc}——你的战斗导师——说："战斗法师的精髓不是魔法的威力，也不是剑术的速度，而是节奏。找到魔法与剑术之间的节奏，你就无敌了。"',
    ],
    effects: { special: 6 },
    flags: ['chain_battle_mage_growth_1'],
    requiredFlags: ['chain_battle_mage_childhood_0'],
    identityExclusive: 'battle_mage',
    chainPriority: 1,
  },
  {
    id: 'mg_ie_battle_mage_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你成为了最年轻的"魔武大师"。但你也发现了一个问题：魔武合一需要同时修炼魔法和剑术，这意味着你需要两倍的时间和资源——而你的寿命是有限的。',
      '你在{location}遇到了一位老兵。他年轻时也是战斗法师，但因为无法突破瓶颈，最终放弃了魔法，成为了普通骑士。他说："我后悔了。不要走我的路。"',
    ],
    effects: { special: 8 },
    flags: ['chain_battle_mage_adult_0'],
    requiredFlags: ['chain_battle_mage_growth_0'],
    identityExclusive: 'battle_mage',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_battle_mage_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：放弃魔法，专注剑术，成为一代剑圣；或者放弃剑术，专注魔法，成为大法师；或者继续魔武合一，但可能两者都无法达到巅峰。',
    ],
    choices: [
      { text: '继续魔武合一', successRate: 0.45, successText: '你选择了继续魔武合一，从此踏上了一条不归路。', failText: '你选择了继续魔武合一，但命运弄人，一切并未如你所愿。', effects: { charisma: 10, health: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_battle_mage_path'], failFlags: ['branch_identity_battle_mage_path_fail'] },
      { text: '专精一项', successRate: 0.75, successText: '你选择了专精一项，虽然道路不同，但终点未必更差。', failText: '你选择了专精一项，却发现这条路比你想象的更加艰难。', effects: { intelligence: 8, special: 3 }, failEffects: { strength: -3 }, flags: ['branch_identity_battle_mage_new'], failFlags: ['branch_identity_battle_mage_new_fail'] },
    ],
    flags: ['chain_battle_mage_adult_1'],
    requiredFlags: ['chain_battle_mage_growth_0'],
    identityExclusive: 'battle_mage',
    chainPriority: 2,
  },
  {
    id: 'mg_ie_battle_mage_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了继续魔武合一。在一场生死战中，你意外发现了"魔武共鸣"——当魔法与剑术达到完美同步时，威力不是相加，而是相乘！',
      '你开创了"共鸣剑道"——不是魔法辅助剑术，也不是剑术辅助魔法，而是两者完全融为一体。你的剑就是法杖，你的咒语就是剑招。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_battle_mage_special_0'],
    requiredFlags: ['chain_battle_mage_adult_0'],
    identityExclusive: 'battle_mage',
    chainPriority: 3,
  },
  {
    id: 'mg_ie_battle_mage_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，"共鸣剑道"成为了战斗法师的最高追求。后人称你为"剑魔"。你的弟子遍布天下，都是曾经的"战斗法师"或"魔剑士"。',
      '你在{location}立下了一块碑，上面写着："魔法与剑术不是两条路，它们是同一条路的两只脚。只用一只脚走路，永远到不了终点。"',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_battle_mage_special_1'],
    requiredFlags: ['chain_battle_mage_adult_0'],
    identityExclusive: 'battle_mage',
    chainPriority: 3,
  },
  {
    id: 'mg_te_01', category: 'trash_exclusive', minAge: 0, maxAge: 6, probability: 0.92,
    templates: [
      '魔法觉醒检测那日，{location}的检测水晶毫无反应。{npc}摇头叹息："魔法绝缘体...与魔法无缘。"所有人都用怜悯的目光看着你。',
      '作为魔法绝缘之人，你只能看着同龄人在{location}召唤出小火球。他们嘲笑你是"魔法世界的废物"，连最基础的照明术都无法施展。',
    ],
    effects: { special: -5, strength: -2, intelligence: 3 },
    flags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'mg_te_02', category: 'trash_exclusive', minAge: 4, maxAge: 10, probability: 0.88,
    templates: [
      '你不甘心。每晚偷偷在{location}的图书馆里研读《魔法原理》，虽然你无法感知魔力，但你对魔法的"理论"理解却超过了大多数学生。',
      '你在{location}的旧书摊淘到了一本残破的《奥术数学》。书中说："魔法不是天赋的专利，公式可以推导一切魔法现象。"你如获至宝。',
    ],
    effects: { intelligence: 3, strength: 2, luck: 2 },
    flags: ['trash_childhood_1'],
    requiredFlags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'mg_te_03', category: 'trash_exclusive', minAge: 12, maxAge: 18, probability: 0.85,
    templates: [
      '你按照《奥术数学》的方法，用纯粹的数学公式推导魔法的运行规律。第一次尝试时，你在纸上画出了火球术的完整魔力回路——虽然你无法施法，但你的图纸让{npc}震惊不已。',
      '别的天才一小时能掌握的火球术，你需要用三个月推导公式。但你在{location}日复一日，从未间断。{npc}偶然看到你的演算稿，震惊地说："这...这是理论魔法的雏形？"',
    ],
    effects: { intelligence: 5, health: 3, special: 2 },
    flags: ['trash_growth_0'],
    requiredFlags: ['trash_childhood_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'mg_te_04', category: 'trash_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '你在{location}遇到了一位被学院边缘化的老教授。他看了你的奥术数学理论后，老泪纵横："三十年前，我也提出过类似理论。但他们嘲笑我，说魔法不是科学。你愿意和我一起证明它吗？"',
      '{npc}被你的毅力打动，决定收你为记名弟子。他说："我这一生见过无数天才，但像你这样的\'傻子\'，还是第一个。"你终于有了导师。',
    ],
    effects: { intelligence: 7, health: 5, charisma: 2 },
    flags: ['trash_growth_1'],
    requiredFlags: ['trash_growth_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'mg_te_05', category: 'trash_exclusive', minAge: 18, maxAge: 25, probability: 0.75,
    templates: [
      '经过多年的研究，你在{location}推导出了"通用施法公式"——一个可以让魔法绝缘者也能施法的数学模型！但公式需要借助特殊的"魔力传导装置"才能实现。',
      '你在{location}的工坊里，用铜线和水晶制作出了人生第一个"奥术计算器"。当你按下最后一个符文时，装置顶端亮起了一点微弱的火光——那是你人生第一次"施法"！',
    ],
    effects: { intelligence: 8, strength: 3, luck: 3 },
    flags: ['trash_growth_2'],
    requiredFlags: ['trash_growth_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'mg_te_06', category: 'trash_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '烈焰学院举办魔法大比，你以"理论展示"的身份报名参加。所有人都嘲笑你："一个魔法绝缘的废物，也配参加魔法大比？"',
      '大比第一轮，你对上了初级法师。对方召唤出火球，威力惊人。你不慌不忙，启动了奥术计算器，输入了火球术的逆运算公式——对方的火球在半空中被你的"魔力中和场"熄灭了！全场寂静。',
    ],
    effects: { intelligence: 8, charisma: 6, special: 3 },
    flags: ['trash_adult_0'],
    requiredFlags: ['trash_growth_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'mg_te_07', category: 'trash_exclusive', minAge: 30, maxAge: 40, probability: 0.72,
    templates: [
      '你的"公式魔法"震惊了魔法界。{npc}说你是"万古以来第一个以魔法绝缘之身击败法师的人"。各大学院开始重新审视"理论魔法"这条被遗忘的道路。',
      '你在{location}建立了一座小小的"公式魔法工坊"，专门招收被学院拒绝的学生。你说："天赋决定起点，但智慧和毅力决定终点。"',
    ],
    effects: { charisma: 7, intelligence: 5, luck: 3 },
    flags: ['trash_adult_1'],
    requiredFlags: ['trash_adult_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'mg_te_08', category: 'trash_exclusive', minAge: 35, maxAge: 45, probability: 0.68,
    templates: [
      '昔日嘲笑你的同村法师在{location}与你重逢。他依然是初级法师，而你的公式已经能模拟出中级魔法。他跪地痛哭："当年是我有眼无珠..."你将他扶起。',
      '{legend}的传承之地开启，你说服众人让你这个"魔法绝缘的废物"也进去试试。他们抱着看笑话的心态同意了——但很快，他们就笑不出来了。',
    ],
    effects: { intelligence: 6, luck: 5, special: 4 },
    flags: ['trash_adult_2'],
    requiredFlags: ['trash_adult_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'mg_te_09', category: 'trash_exclusive', minAge: 28, maxAge: 42, probability: 0.65,
    templates: [
      '魔法大比的决赛上，你对上了烈焰学院的天才法师。对方是高级法师，而你连魔力都无法感知。所有人都认为这是一场屠杀——但他们错了。',
      '比赛开始前，{npc}暗中塞给你一块魔晶："这是\'过载魔晶\'，能让你的奥术计算器短时间内运算速度提升十倍，但事后会烧毁核心。用不用，你自己决定。"',
    ],
    effects: { intelligence: 3 },
    choices: [
      { text: '使用过载魔晶，全力一战', successRate: 0.35, successText: '过载魔晶让你的奥术计算器爆发出了前所未有的运算速度！你推导出了传说中的"禁咒公式"，全场震撼，万古未有！', failText: '过载魔晶烧毁了你的计算器核心，虽然赢了比赛，但你需要数年才能重建设备', effects: { intelligence: 15, charisma: 10, special: 5, health: -20 }, failEffects: { intelligence: 5, charisma: 3, health: -30 }, flags: ['branch_trash_fight'], failFlags: ['branch_trash_fight_fail'] },
      { text: '拒绝魔晶，以本真之力战斗', successRate: 0.65, successText: '你没有借助外力，仅凭基础公式与对方周旋。虽然最终惜败，但你赢得了所有人的尊重！', failText: '你拒绝了魔晶，但实力差距太大，被一招击败。众人摇头："果然，废物就是废物。"', effects: { charisma: 10, luck: 8, intelligence: 5 }, failEffects: { charisma: -5, health: -15 }, flags: ['branch_trash_persist'], failFlags: ['branch_trash_persist_fail'] },
    ],
    flags: ['trash_climax_0'],
    requiredFlags: ['trash_adult_1'],
    talentExclusive: 'trash',
    chainPriority: 2,
  },
  {
    id: 'mg_te_10', category: 'trash_exclusive', minAge: 35, maxAge: 50, probability: 0.6,
    templates: [
      '你在{location}遇到了一位神秘老者。他打量你许久，说："你的公式已经触及了魔法的本质。若想再进一步，需要进入真理之塔顶层——那里有\'万能公式\'，可以让魔法绝缘者拥有真正的施法能力。"',
      '老者给了你两个选择：他可以帮你打开真理之塔的通道（九死一生）；或者传你一套更稳妥的进阶公式（进展缓慢但安全）。',
    ],
    effects: { special: 3 },
    choices: [
      { text: '闯入真理之塔，向死而生', successRate: 0.3, successText: '你闯入了真理之塔顶层，面对无数魔法陷阱和守护者。最终，你找到了"万能公式"——那一刻，你第一次真正感受到了魔力的流动！', failText: '真理之塔的守护者超出了你的预期。虽然侥幸逃生，但你的奥术计算器被毁，需要数十年才能重建', effects: { intelligence: 20, special: 10, health: -25 }, failEffects: { health: -40, intelligence: 3 }, flags: ['branch_trash_transform'], failFlags: ['branch_trash_transform_fail'] },
      { text: '稳扎稳打，不求速成', successRate: 0.8, successText: '你选择了更稳妥的道路。虽然进展缓慢，但根基无比扎实。老者点头："大器晚成，方得始终。"', failText: '稳妥之路需要的时间远超你的寿元。你知道，自己可能等不到大成的那一天了', effects: { intelligence: 10, strength: 5, health: 5 }, failEffects: { intelligence: 3, luck: -3 }, flags: ['branch_trash_persist2'], failFlags: ['branch_trash_persist2_fail'] },
    ],
    flags: ['trash_climax_1'],
    requiredFlags: ['trash_climax_0'],
    talentExclusive: 'trash',
    chainPriority: 2,
  },
  {
    id: 'mg_te_11', category: 'trash_exclusive', minAge: 40, maxAge: 55, probability: 0.55,
    templates: [
      '你的故事传遍了魔法界。{location}的公式魔法工坊每天都有人慕名而来——不是天才，而是那些被判定为"废物"的孩子。',
      '{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。不是因为我更强，而是因为我从未停下。"',
    ],
    effects: { charisma: 10, luck: 5, special: 5 },
    flags: ['trash_climax_2'],
    requiredFlags: ['trash_climax_1'],
    talentExclusive: 'trash',
    chainPriority: 3,
  },
  {
    id: 'mg_te_12', category: 'trash_exclusive', minAge: 45, maxAge: 60, probability: 0.5,
    templates: [
      '你推导出了"万能公式"，成为了万古以来第一个以魔法绝缘之躯施展禁咒的人。没有魔力、没有天赋，仅凭一台计算器和无数公式，你释放出了毁天灭地的魔法！',
      '你成为了魔法界的传奇。后人称你为"公式贤者"，你的故事激励了无数被判定为魔法绝缘的人——魔法，终于不再是天赋者的专利。',
    ],
    effects: { intelligence: 10, strength: 5, charisma: 10, special: 10 },
    flags: ['trash_legend'],
    requiredFlags: ['trash_climax_2'],
    talentExclusive: 'trash',
    chainPriority: 3,
  },
  {
    id: 'mg_te_13', category: 'trash_exclusive', minAge: 55, maxAge: 80, probability: 0.6,
    templates: [
      '你在{location}收徒传道，专门招收魔法绝缘的孩子。你说："天赋决定起点，但智慧和选择决定终点。"',
      '你的弟子中有人发明了新的计算公式，有人以公式魔法成为了学院长老。{npc}感叹："你一人之力，改变了一个时代的魔法格局。"',
    ],
    effects: { charisma: 8, intelligence: 5 },
    flags: ['trash_elder_0'],
    requiredFlags: ['trash_legend'],
    talentExclusive: 'trash',
  },
  {
    id: 'mg_te_14', category: 'trash_exclusive', minAge: 60, maxAge: 90, probability: 0.55,
    templates: [
      '大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。',
      '你微笑着说："如果重来一次，我还是会选择做那个魔法绝缘的废物。因为正是\'废物\'二字，让我找到了属于自己的魔法。"',
    ],
    effects: { charisma: 6, health: -5 },
    flags: ['trash_elder_1'],
    requiredFlags: ['trash_elder_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'mg_te_15', category: 'trash_exclusive', minAge: 70, maxAge: 100, probability: 0.5,
    templates: [
      '你离世的那天，{location}下起了七彩的光雨——那是无数元素精灵在为你送行。',
      '你的灵魂没有进入轮回，而是化作了一道公式之光，融入了真理之塔。后人传说，每当天才恃才傲物时，塔顶就会亮起一行公式——那是你在提醒他们：不要小看任何一个"废物"。',
    ],
    effects: { charisma: 10, luck: 10 },
    flags: ['trash_ending'],
    requiredFlags: ['trash_elder_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'mg_cultivation_07', category: 'cultivation', minAge: 18, maxAge: 30, probability: 0.92,
    templates: [
      '你在{location}钻研多年，终于触摸到了初级法师的门槛。{npc}告诉你："初级法师是魔法之路的起点。你终于可以独立施展完整的魔法咒语，不再依赖魔杖的辅助。突破需要魔力≥20、元素亲和≥15。"',
      '你的魔法修为已达瓶颈，在{location}感应到了初级法师的契机。但突破之路充满风险，稍有不慎便可能魔力反噬。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.65, successText: '你孤注一掷，将全部魔力灌注于灵魂核心。刹那间，{location}的元素疯狂涌入你的体内——你成功了！你突破到了初级法师！', failText: '你全力冲击瓶颈，但魔力反噬，灵魂受创。虽然保住了性命，但魔力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 80 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail_1'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.9, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了初级法师。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 56 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_1', 'realm_breakthrough_1_steady'], failFlags: ['realm_fail_1_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_1'], failFlags: [] },
    ],
    flags: ['realm_attempt_1'],
    chainPriority: 5,
  },
  {
    id: 'mg_cultivation_08', category: 'cultivation', minAge: 20, maxAge: 50, probability: 0.7360000000000001,
    templates: [
      '你突破到初级法师的消息传遍了魔法大陆。{location}的法师们纷纷前来祝贺，你的名字被刻在了真理之塔的"进阶碑"上。',
      '{npc}看着你，眼中满是欣慰："从学徒到初级法师，你走了18年。这速度，在魔法界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_1'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 2,
  },
  {
    id: 'mg_cultivation_09', category: 'cultivation', minAge: 23, maxAge: 60, probability: 0.644,
    templates: [
      '上一次突破初级法师失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，魔力甚至比以前更加精进。你再次感应到了初级法师的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.75, successText: '第二次冲击，你总结了上次的教训，一举突破到了初级法师！{location}的元素因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与初级法师无缘...', effects: { realm: 1, special: 5, maxAge: 80 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail2_1'] },
    ],
    flags: ['realm_retry_1'],
    requiredFlags: ['realm_fail_1'],
    chainPriority: 3,
  },
  {
    id: 'mg_cultivation_10', category: 'cultivation', minAge: 35, maxAge: 55, probability: 0.88,
    templates: [
      '你在{location}钻研多年，终于触摸到了大法师的门槛。{npc}告诉你："大法师能同时操控多种元素，创造出复合魔法。你的魔力池已经深厚到可以支撑连续施法。突破需要魔力≥35、元素亲和≥30、力量≥20。"',
      '你的魔法修为已达瓶颈，在{location}感应到了大法师的契机。但突破之路充满风险，稍有不慎便可能魔力反噬。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.55, successText: '你孤注一掷，将全部魔力灌注于灵魂核心。刹那间，{location}的元素疯狂涌入你的体内——你成功了！你突破到了大法师！', failText: '你全力冲击瓶颈，但魔力反噬，灵魂受创。虽然保住了性命，但魔力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 120 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail_2'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.8, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了大法师。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 84 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_2', 'realm_breakthrough_2_steady'], failFlags: ['realm_fail_2_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_2'], failFlags: [] },
    ],
    flags: ['realm_attempt_2'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 5,
  },
  {
    id: 'mg_cultivation_11', category: 'cultivation', minAge: 37, maxAge: 75, probability: 0.7040000000000001,
    templates: [
      '你突破到大法师的消息传遍了魔法大陆。{location}的法师们纷纷前来祝贺，你的名字被刻在了真理之塔的"进阶碑"上。',
      '{npc}看着你，眼中满是欣慰："从学徒到大法师，你走了35年。这速度，在魔法界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_2'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 2,
  },
  {
    id: 'mg_cultivation_12', category: 'cultivation', minAge: 40, maxAge: 85, probability: 0.616,
    templates: [
      '上一次突破大法师失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，魔力甚至比以前更加精进。你再次感应到了大法师的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.65, successText: '第二次冲击，你总结了上次的教训，一举突破到了大法师！{location}的元素因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与大法师无缘...', effects: { realm: 1, special: 5, maxAge: 120 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail2_2'] },
    ],
    flags: ['realm_retry_2'],
    requiredFlags: ['realm_fail_2'],
    chainPriority: 3,
  },
  {
    id: 'mg_cultivation_13', category: 'cultivation', minAge: 60, maxAge: 90, probability: 0.85,
    templates: [
      '你在{location}钻研多年，终于触摸到了贤者的门槛。{npc}告诉你："贤者不仅精通魔法，更开始理解魔法背后的原理。你可以推导新的咒语，而不仅仅是学习前人的成果。突破需要魔力≥50、元素亲和≥45。"',
      '你的魔法修为已达瓶颈，在{location}感应到了贤者的契机。但突破之路充满风险，稍有不慎便可能魔力反噬。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.45, successText: '你孤注一掷，将全部魔力灌注于灵魂核心。刹那间，{location}的元素疯狂涌入你的体内——你成功了！你突破到了贤者！', failText: '你全力冲击瓶颈，但魔力反噬，灵魂受创。虽然保住了性命，但魔力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 200 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail_3'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.7, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了贤者。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 140 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_3', 'realm_breakthrough_3_steady'], failFlags: ['realm_fail_3_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_3'], failFlags: [] },
    ],
    flags: ['realm_attempt_3'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 5,
  },
  {
    id: 'mg_cultivation_14', category: 'cultivation', minAge: 62, maxAge: 110, probability: 0.68,
    templates: [
      '你突破到贤者的消息传遍了魔法大陆。{location}的法师们纷纷前来祝贺，你的名字被刻在了真理之塔的"进阶碑"上。',
      '{npc}看着你，眼中满是欣慰："从学徒到贤者，你走了60年。这速度，在魔法界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_3'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 2,
  },
  {
    id: 'mg_cultivation_15', category: 'cultivation', minAge: 65, maxAge: 120, probability: 0.595,
    templates: [
      '上一次突破贤者失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，魔力甚至比以前更加精进。你再次感应到了贤者的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.55, successText: '第二次冲击，你总结了上次的教训，一举突破到了贤者！{location}的元素因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与贤者无缘...', effects: { realm: 1, special: 5, maxAge: 200 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail2_3'] },
    ],
    flags: ['realm_retry_3'],
    requiredFlags: ['realm_fail_3'],
    chainPriority: 3,
  },
  {
    id: 'mg_cultivation_16', category: 'cultivation', minAge: 100, maxAge: 160, probability: 0.82,
    templates: [
      '你在{location}钻研多年，终于触摸到了元素使的门槛。{npc}告诉你："元素使能与元素精灵直接沟通，借用它们的力量。在元素位面，你的名字已经开始被传颂。突破需要魔力≥70、元素亲和≥60。"',
      '你的魔法修为已达瓶颈，在{location}感应到了元素使的契机。但突破之路充满风险，稍有不慎便可能魔力反噬。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.35, successText: '你孤注一掷，将全部魔力灌注于灵魂核心。刹那间，{location}的元素疯狂涌入你的体内——你成功了！你突破到了元素使！', failText: '你全力冲击瓶颈，但魔力反噬，灵魂受创。虽然保住了性命，但魔力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 300 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail_4'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.6, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了元素使。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 210 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_4', 'realm_breakthrough_4_steady'], failFlags: ['realm_fail_4_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_4'], failFlags: [] },
    ],
    flags: ['realm_attempt_4'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 5,
  },
  {
    id: 'mg_cultivation_17', category: 'cultivation', minAge: 102, maxAge: 180, probability: 0.656,
    templates: [
      '你突破到元素使的消息传遍了魔法大陆。{location}的法师们纷纷前来祝贺，你的名字被刻在了真理之塔的"进阶碑"上。',
      '{npc}看着你，眼中满是欣慰："从学徒到元素使，你走了100年。这速度，在魔法界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_4'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 2,
  },
  {
    id: 'mg_cultivation_18', category: 'cultivation', minAge: 105, maxAge: 190, probability: 0.574,
    templates: [
      '上一次突破元素使失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，魔力甚至比以前更加精进。你再次感应到了元素使的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.44999999999999996, successText: '第二次冲击，你总结了上次的教训，一举突破到了元素使！{location}的元素因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与元素使无缘...', effects: { realm: 1, special: 5, maxAge: 300 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail2_4'] },
    ],
    flags: ['realm_retry_4'],
    requiredFlags: ['realm_fail_4'],
    chainPriority: 3,
  },
  {
    id: 'mg_cultivation_19', category: 'cultivation', minAge: 200, maxAge: 350, probability: 0.78,
    templates: [
      '你在{location}钻研多年，终于触摸到了真理守护者的门槛。{npc}告诉你："真理守护者已触及魔法的最深层真理。你可以修改局部区域的魔法规则，让火在水下燃烧，让时间短暂倒流。突破需要魔力≥90、元素亲和≥80、力量≥60。"',
      '你的魔法修为已达瓶颈，在{location}感应到了真理守护者的契机。但突破之路充满风险，稍有不慎便可能魔力反噬。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.3, successText: '你孤注一掷，将全部魔力灌注于灵魂核心。刹那间，{location}的元素疯狂涌入你的体内——你成功了！你突破到了真理守护者！', failText: '你全力冲击瓶颈，但魔力反噬，灵魂受创。虽然保住了性命，但魔力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 400 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail_5'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.55, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了真理守护者。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 280 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_5', 'realm_breakthrough_5_steady'], failFlags: ['realm_fail_5_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_5'], failFlags: [] },
    ],
    flags: ['realm_attempt_5'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 5,
  },
  {
    id: 'mg_cultivation_20', category: 'cultivation', minAge: 202, maxAge: 370, probability: 0.6240000000000001,
    templates: [
      '你突破到真理守护者的消息传遍了魔法大陆。{location}的法师们纷纷前来祝贺，你的名字被刻在了真理之塔的"进阶碑"上。',
      '{npc}看着你，眼中满是欣慰："从学徒到真理守护者，你走了200年。这速度，在魔法界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_5'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 2,
  },
  {
    id: 'mg_cultivation_21', category: 'cultivation', minAge: 205, maxAge: 380, probability: 0.5459999999999999,
    templates: [
      '上一次突破真理守护者失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，魔力甚至比以前更加精进。你再次感应到了真理守护者的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.4, successText: '第二次冲击，你总结了上次的教训，一举突破到了真理守护者！{location}的元素因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与真理守护者无缘...', effects: { realm: 1, special: 5, maxAge: 400 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail2_5'] },
    ],
    flags: ['realm_retry_5'],
    requiredFlags: ['realm_fail_5'],
    chainPriority: 3,
  },
  {
    id: 'mg_cultivation_22', category: 'cultivation', minAge: 400, maxAge: 550, probability: 0.75,
    templates: [
      '你在{location}钻研多年，终于触摸到了法则化身的门槛。{npc}告诉你："法则化身已半人半法则。你的存在本身就会影响周围的魔法波动，你是行走的自然现象。突破需要元素亲和≥100。"',
      '你的魔法修为已达瓶颈，在{location}感应到了法则化身的契机。但突破之路充满风险，稍有不慎便可能魔力反噬。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.25, successText: '你孤注一掷，将全部魔力灌注于灵魂核心。刹那间，{location}的元素疯狂涌入你的体内——你成功了！你突破到了法则化身！', failText: '你全力冲击瓶颈，但魔力反噬，灵魂受创。虽然保住了性命，但魔力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 800 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail_6'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.5, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了法则化身。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 560 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_6', 'realm_breakthrough_6_steady'], failFlags: ['realm_fail_6_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_6'], failFlags: [] },
    ],
    flags: ['realm_attempt_6'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 5,
  },
  {
    id: 'mg_cultivation_23', category: 'cultivation', minAge: 402, maxAge: 570, probability: 0.6000000000000001,
    templates: [
      '你突破到法则化身的消息传遍了魔法大陆。{location}的法师们纷纷前来祝贺，你的名字被刻在了真理之塔的"进阶碑"上。',
      '{npc}看着你，眼中满是欣慰："从学徒到法则化身，你走了400年。这速度，在魔法界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_6'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 2,
  },
  {
    id: 'mg_cultivation_24', category: 'cultivation', minAge: 405, maxAge: 580, probability: 0.5249999999999999,
    templates: [
      '上一次突破法则化身失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，魔力甚至比以前更加精进。你再次感应到了法则化身的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.35, successText: '第二次冲击，你总结了上次的教训，一举突破到了法则化身！{location}的元素因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与法则化身无缘...', effects: { realm: 1, special: 5, maxAge: 800 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail2_6'] },
    ],
    flags: ['realm_retry_6'],
    requiredFlags: ['realm_fail_6'],
    chainPriority: 3,
  },
  {
    id: 'mg_cultivation_25', category: 'cultivation', minAge: 600, maxAge: 800, probability: 0.7,
    templates: [
      '你在{location}钻研多年，终于触摸到了虚空行者的门槛。{npc}告诉你："虚空行者超越了物质界的束缚。你可以在虚空与物质界自由穿梭，见证无数文明的兴衰。突破需要元素亲和≥120、魔力≥100。"',
      '你的魔法修为已达瓶颈，在{location}感应到了虚空行者的契机。但突破之路充满风险，稍有不慎便可能魔力反噬。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.2, successText: '你孤注一掷，将全部魔力灌注于灵魂核心。刹那间，{location}的元素疯狂涌入你的体内——你成功了！你突破到了虚空行者！', failText: '你全力冲击瓶颈，但魔力反噬，灵魂受创。虽然保住了性命，但魔力大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 9000 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail_7'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.45, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了虚空行者。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 6300 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_7', 'realm_breakthrough_7_steady'], failFlags: ['realm_fail_7_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_7'], failFlags: [] },
    ],
    flags: ['realm_attempt_7'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 5,
  },
  {
    id: 'mg_cultivation_26', category: 'cultivation', minAge: 602, maxAge: 820, probability: 0.5599999999999999,
    templates: [
      '你突破到虚空行者的消息传遍了魔法大陆。{location}的法师们纷纷前来祝贺，你的名字被刻在了真理之塔的"进阶碑"上。',
      '{npc}看着你，眼中满是欣慰："从学徒到虚空行者，你走了600年。这速度，在魔法界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_7'],
    requiredFlags: ['realm_breakthrough_7'],
    chainPriority: 2,
  },
  {
    id: 'mg_cultivation_27', category: 'cultivation', minAge: 605, maxAge: 830, probability: 0.48999999999999994,
    templates: [
      '上一次突破虚空行者失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，魔力甚至比以前更加精进。你再次感应到了虚空行者的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.30000000000000004, successText: '第二次冲击，你总结了上次的教训，一举突破到了虚空行者！{location}的元素因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与虚空行者无缘...', effects: { realm: 1, special: 5, maxAge: 9000 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail2_7'] },
    ],
    flags: ['realm_retry_7'],
    requiredFlags: ['realm_fail_7'],
    chainPriority: 3,
  },
];
