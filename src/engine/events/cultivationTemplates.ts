import type { EventTemplate } from './types';

// 修仙界 — 187 event templates
// Generated: 2026-04-27
// Rarity tiers: legendary(≤0.10) / epic(0.10-0.25) / rare(0.25-0.50) / common(0.50-0.85) / trash-exclusive
// Each template has 3-5 text variations, total ~748 actual events

export const cultivationTemplates: EventTemplate[] = [
  {
    id: 'cx_ch_01', category: 'childhood', minAge: 0, maxAge: 3, probability: 0.047,
    templates: [
      '你出生那天，{location}突然霞光万丈，紫气东来三千里。{npc}跪地叩拜，说你是千年一遇的混沌灵根。',
      '你降生的瞬间，{location}百花齐放，{legend}的虚影在天际显现，整个大陆为之震动。',
      '你的第一声啼哭引发了{location}的灵气暴动，{npc}颤抖着说："混沌灵根降世了！"',
    ],
    effects: { luck: 10, special: 8, charisma: 5 },
  },
  {
    id: 'cx_ch_02', category: 'childhood', minAge: 2, maxAge: 7, probability: 0.175,
    templates: [
      '你在{location}玩耍时，体内突然涌出一股热流。{npc}惊讶地发现你竟是上品灵根之资！',
      '三岁时，你在{location}无意间触发了古老的检测阵法，光芒比所有人都亮。',
      '{npc}为你进行资质测试，{legend}的印记在你身上一闪而逝——你是被选中的人。',
    ],
    effects: { special: 6, intelligence: 4 },
  },
  {
    id: 'cx_ch_03', category: 'childhood', minAge: 4, maxAge: 9, probability: 0.273,
    templates: [
      '你在{location}救了一只受伤的小动物，它其实是{legend}的化身，临走前留下了一枚灵珠。',
      '{npc}在你满月时送了一块玉佩，后来你发现那是一件上古法器的碎片。',
      '你从小就能看见别人看不见的{legend}幻影，{npc}说这是灵根初现的征兆。',
      '你在{location}挖到了一坛古酒，喝了一口后浑身舒畅，经脉隐隐发热。',
    ],
    effects: { luck: 5 },
  },
  {
    id: 'cx_ch_04', category: 'childhood', minAge: 0, maxAge: 6, probability: 0.531,
    templates: [
      '你生在普通人家，每天在{location}玩耍，日子平淡但快乐。',
      '{npc}教你读书识字，你学得有模有样。',
      '你在{location}认识了几个玩伴，度过了无忧无虑的童年。',
      '家里虽然不富裕，但{npc}总是把最好的留给你。',
    ],
    effects: { charisma: 2, luck: 1 },
  },
  {
    id: 'cx_ch_05', category: 'childhood', minAge: 3, maxAge: 10, probability: 0.702,
    templates: [
      '你在{location}帮{npc}干活，学会了很多生活技能。',
      '你的身体比同龄人强壮，{npc}说你是干农活的好料子。',
      '你喜欢在{location}发呆，常常一坐就是一整天。',
      '{npc}给你讲了一个关于{legend}的故事，你听得入了迷。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },
  {
    id: 'cx_gr_01', category: 'growth', minAge: 15, maxAge: 20, probability: 0.034,
    templates: [
      '你在{location}闭关三日，出关时眼中精光四射——你竟在战斗中顿悟了{legend}的传承！',
      '一场雷雨夜，你在{location}被天雷击中非但没死，反而打通了全身经脉！',
      '{legend}的残魂在{location}与你相遇，将毕生感悟传授于你。',
    ],
    effects: { intelligence: 10, special: 8, strength: 5 },
  },
  {
    id: 'cx_gr_02', category: 'growth', minAge: 14, maxAge: 22, probability: 0.175,
    templates: [
      '你在{location}苦修三年，终于突破了困扰多年的瓶颈，实力大增！',
      '{npc}带你外出历练，你在{location}击败了一个强敌，获得了珍贵的战利品。',
      '你发现了{legend}留下的试炼场，通过考验后获得了意想不到的收获。',
    ],
    effects: { strength: 6, special: 5 },
  },
  {
    id: 'cx_gr_03', category: 'growth', minAge: 13, maxAge: 24, probability: 0.32,
    templates: [
      '你在{location}遇到了一生的宿敌，你们不打不相识，反而成为了朋友。',
      '{npc}传授你一项绝技，你花了整整一年才学会，但威力惊人。',
      '你在{location}救了一个被追杀的人，他为了报答你，送了一件宝物。',
      '你和同辈在{location}比试，虽然输了但收获巨大。',
    ],
    effects: { intelligence: 5 },
  },
  {
    id: 'cx_gr_04', category: 'growth', minAge: 13, maxAge: 20, probability: 0.571,
    templates: [
      '你每天在{location}勤奋练习，虽然进步缓慢但根基扎实。',
      '{npc}督促你修炼，你不敢懈怠。',
      '你在{location}读了很多书，眼界开阔了不少。',
      '平平淡淡的一年，你在{location}默默积累着。',
    ],
    effects: { intelligence: 2, strength: 2 },
  },
  {
    id: 'cx_gr_05', category: 'growth', minAge: 16, maxAge: 25, probability: 0.729,
    templates: [
      '你在{location}结交了一些朋友，互相切磋进步。',
      '{npc}给你讲了很多前辈的故事，你深受启发。',
      '你在{location}处理了一些杂务，锻炼了自己的能力。',
      '这一年没什么特别的事发生，但你感觉自己在慢慢变强。',
    ],
    effects: { charisma: 2, luck: 2 },
  },
  {
    id: 'cx_ad_01', category: 'adult', minAge: 28, maxAge: 40, probability: 0.124,
    templates: [
      '你在{location}开宗立派，广收门徒，一时间名声大噪。',
      '你参与了{legend}相关的大规模事件，在关键时刻力挽狂澜。',
      '你在{location}建立了属于自己的势力，各方强者纷纷来投。',
    ],
    effects: { charisma: 8, strength: 5, special: 5 },
  },
  {
    id: 'cx_ad_02', category: 'adult', minAge: 26, maxAge: 45, probability: 0.351,
    templates: [
      '你在{location}收下了第一个弟子，将自己的所学倾囊相授。',
      '你和宿敌在{location}进行了最终决战，胜负难分。',
      '你成功炼制/制造了传说中的物品，引起了不小的轰动。',
    ],
    effects: { charisma: 6, luck: 3 },
  },
  {
    id: 'cx_ad_03', category: 'adult', minAge: 26, maxAge: 50, probability: 0.537,
    templates: [
      '你在{location}处理日常事务，势力稳步发展。',
      '{npc}来找你帮忙，你出手解决了他的难题。',
      '你在{location}度过了平静的一年，修为稳步提升。',
      '平平淡淡的一年，你在{location}默默修炼。',
    ],
    effects: { strength: 2, intelligence: 2, special: 2 },
  },
  {
    id: 'cx_el_01', category: 'elder', minAge: 50, maxAge: 120, probability: 0.605,
    templates: [
      '你在{location}闭关苦修，试图触摸更高境界的门槛。',
      '你游历天下，在{location}见识了各种奇人异事，道心更加坚定。',
      '你开始招收弟子，在{location}传授毕生所学。',
    ],
    effects: { intelligence: 3, special: 2 },
  },
  {
    id: 'cx_el_02', category: 'elder', minAge: 100, maxAge: 220, probability: 0.279,
    templates: [
      '你的修为已臻化境，成为了{location}的传说级人物。',
      '你开始着手准备最终的突破，{npc}专程前来为你护法。',
      '你将毕生所学整理成册，存放在{location}，等待有缘人。',
    ],
    effects: { intelligence: 8, charisma: 5 },
  },
  {
    id: 'cx_el_03', category: 'elder', minAge: 200, maxAge: 400, probability: 0.332,
    templates: [
      '你感应到了天劫的气息，在{location}布下重重阵法准备迎接。',
      '你回顾一生修行，在{location}寻找突破瓶颈的契机。',
      '{npc}带来消息：仙界通道出现了异常波动，飞升之机可能重现。',
    ],
    effects: { special: 10, intelligence: 5 },
  },
  {
    id: 'cx_el_04', category: 'elder', minAge: 400, maxAge: 700, probability: 0.149,
    templates: [
      '你已是大乘期修士，在{location}静待飞升之机的到来。',
      '你将毕生大道感悟刻入玉简，留给后世有缘人。',
      '{npc}问你为何不急于飞升，你笑答："我在等一个时代。"',
    ],
    effects: { charisma: 10, special: 5 },
  },
  {
    id: 'cx_cb_01', category: 'combat', minAge: 20, maxAge: 40, probability: 0.049,
    templates: [
      '你在{location}以一己之力对抗十位同阶强者，最终大获全胜，一战成名！',
      '{legend}的敌人找上了你，你在{location}展开惊天大战，竟越级将其斩杀！',
      '你为了保护{location}的居民，独自对抗入侵的{legend}军团，创造了不可能的奇迹。',
    ],
    effects: { strength: 12, charisma: 8, health: -10 },
  },
  {
    id: 'cx_cb_02', category: 'combat', minAge: 18, maxAge: 45, probability: 0.119,
    templates: [
      '你参与了一场改变{location}格局的大规模战争，立下赫赫战功。',
      '{npc}挑战你的权威，你们在{location}大战三百回合，最终你险胜一招。',
      '你在{location}发现了{legend}留下的试炼场，通过了生死考验。',
    ],
    effects: { strength: 8, charisma: 4, health: -5 },
  },
  {
    id: 'cx_cb_03', category: 'combat', minAge: 15, maxAge: 35, probability: 0.295,
    templates: [
      '你在{location}遭遇强敌，展开了一场生死搏斗，最终险胜。',
      '你和{npc}在{location}切磋，双方都获益匪浅。',
      '你为了保护同伴，在{location}与敌人激战，受了轻伤。',
    ],
    effects: { strength: 5, health: -3 },
  },
  {
    id: 'cx_cb_04', category: 'combat', minAge: 25, maxAge: 50, probability: 0.43,
    templates: [
      '你在{location}参与了一场小规模冲突，表现出色。',
      '{npc}偷袭你，你在{location}勉强将其击退。',
      '你在{location}发现了敌人的据点，果断出击。',
    ],
    effects: { strength: 4, luck: 2 },
  },
  {
    id: 'cx_cb_05', category: 'combat', minAge: 15, maxAge: 40, probability: 0.535,
    templates: [
      '你在{location}进行了日常训练，技艺略有精进。',
      '你和同伴在{location}对练，互相学习。',
      '你在{location}演练新学的招式，逐渐熟练。',
    ],
    effects: { strength: 2 },
  },
  {
    id: 'cx_cb_06', category: 'combat', minAge: 30, maxAge: 60, probability: 0.708,
    templates: [
      '你在{location}指导后辈战斗技巧，自己也有所感悟。',
      '一场友好的比试在{location}举行，你获得了不错的名次。',
      '你在{location}观摩高手对决，学到了不少实战经验。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },
  {
    id: 'cx_rm_01', category: 'romance', minAge: 18, maxAge: 30, probability: 0.037,
    templates: [
      '你在{location}与{npc}相遇的瞬间，天地变色，{legend}的预言应验——你们是三生石上的命定之人。',
      '{npc}为了救你，不惜耗尽毕生修为。你跪在{location}发誓：此生不负。',
      '你们的故事被{legend}记载，成为了{location}永恒的传说。',
    ],
    effects: { charisma: 10, luck: 8, health: 5 },
  },
  {
    id: 'cx_rm_02', category: 'romance', minAge: 20, maxAge: 35, probability: 0.131,
    templates: [
      '你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。',
      '{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。',
      '你们经历了{legend}的考验，感情反而更加坚不可摧。',
    ],
    effects: { charisma: 6, luck: 4 },
  },
  {
    id: 'cx_rm_03', category: 'romance', minAge: 16, maxAge: 30, probability: 0.282,
    templates: [
      '你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。',
      '你和{npc}在{location}月下相会，互诉衷肠。',
      '{npc}因为你的才华而倾心，主动向你示好。',
    ],
    effects: { charisma: 4, luck: 3 },
  },
  {
    id: 'cx_rm_04', category: 'romance', minAge: 25, maxAge: 40, probability: 0.427,
    templates: [
      '你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。',
      '{npc}送你一件定情信物，你珍藏在身边。',
      '你们一起在{location}经历了危险，感情更加深厚。',
    ],
    effects: { charisma: 3, luck: 2 },
  },
  {
    id: 'cx_rm_05', category: 'romance', minAge: 20, maxAge: 45, probability: 0.523,
    templates: [
      '你在{location}认识了一个有趣的人，但关系尚不明确。',
      '{npc}对你有些好感，但你还没想好如何回应。',
      '你在{location}参加了一场聚会，结识了不少异性。',
    ],
    effects: { charisma: 2 },
  },
  {
    id: 'cx_rm_06', category: 'romance', minAge: 30, maxAge: 50, probability: 0.733,
    templates: [
      '你和{npc}保持着朋友以上、恋人未满的关系。',
      '你在{location}看到了别人恩爱的场景，心中有些羡慕。',
      '这一年感情上没有太大的波澜，你专注于其他事情。',
    ],
    effects: { luck: 1 },
  },
  {
    id: 'cx_cultivation_01', category: 'cultivation', minAge: 40, maxAge: 70, probability: 0.049,
    templates: [
      '你在{location}闭关九九八十一天，出关时天地共鸣，你已触摸到了{legend}的境界！',
      '你的修为达到了前所未有的高度，{location}的灵气因为你而沸腾。',
      '{legend}的虚影亲自降临{location}，为你指点大道。',
    ],
    effects: { special: 12, intelligence: 10, strength: 5 },
  },
  {
    id: 'cx_cultivation_02', category: 'cultivation', minAge: 30, maxAge: 60, probability: 0.118,
    templates: [
      '你成功将{legend}的功法融会贯通，实力暴涨！',
      '你在{location}经历了一场奇遇，修为大涨，连{npc}都震惊不已。',
      '你突破了困扰多年的瓶颈，{location}的天地异象持续了三日三夜。',
    ],
    effects: { special: 8, intelligence: 5 },
  },
  {
    id: 'cx_cultivation_03', category: 'cultivation', minAge: 20, maxAge: 50, probability: 0.267,
    templates: [
      '你在{location}闭关修炼，领悟了新的境界。',
      '{npc}传授你一项绝技，你勤加练习，终于大成。',
      '你在{location}发现了一处灵气充沛的宝地，修炼事半功倍。',
    ],
    effects: { special: 5, intelligence: 3 },
  },
  {
    id: 'cx_cultivation_04', category: 'cultivation', minAge: 35, maxAge: 65, probability: 0.426,
    templates: [
      '你在修炼中遇到了瓶颈，{npc}指点你突破。',
      '你在{location}经历了一场奇遇，修为有所精进。',
      '你成功炼制/制造了辅助修炼的物品，效果显著。',
    ],
    effects: { special: 4, strength: 2 },
  },
  {
    id: 'cx_cultivation_05', category: 'cultivation', minAge: 13, maxAge: 40, probability: 0.527,
    templates: [
      '你在{location}按部就班地修炼，虽然没有突破但根基更加稳固。',
      '{npc}检查了你的修炼进度，表示满意。',
      '你在{location}研读功法秘籍，对一些招式有了新的理解。',
    ],
    effects: { special: 2, intelligence: 1 },
  },
  {
    id: 'cx_cultivation_06', category: 'cultivation', minAge: 40, maxAge: 80, probability: 0.678,
    templates: [
      '你在{location}巩固已有的修为，为下一次突破做准备。',
      '这一年修炼进度平平，但你没有气馁。',
      '{npc}提醒你不可急于求成，你虚心接受。',
    ],
    effects: { special: 2 },
  },
  {
    id: 'cx_ex_01', category: 'exploration', minAge: 25, maxAge: 50, probability: 0.063,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的核心传承，获得了改变命运的机缘！',
      '你在{location}找到了通往另一个维度的入口，{legend}的秘密向你敞开。',
      '你解开了一个困扰世人万年的谜题，{location}的真相让你震惊。',
    ],
    effects: { luck: 10, intelligence: 8, special: 6 },
  },
  {
    id: 'cx_ex_02', category: 'exploration', minAge: 20, maxAge: 45, probability: 0.118,
    templates: [
      '你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。',
      '你探索了一处危险的{location}，九死一生后带回了珍贵的宝物。',
      '{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。',
    ],
    effects: { luck: 6, strength: 4 },
  },
  {
    id: 'cx_ex_03', category: 'exploration', minAge: 15, maxAge: 40, probability: 0.288,
    templates: [
      '你深入{location}探险，发现了未知的秘密。',
      '你在{location}找到了一些有价值的物品，收获颇丰。',
      '你在{location}迷路了，却意外发现了一处隐蔽的洞天福地。',
    ],
    effects: { luck: 4, strength: 2 },
  },
  {
    id: 'cx_ex_04', category: 'exploration', minAge: 30, maxAge: 55, probability: 0.427,
    templates: [
      '你在{location}发现了一些古老的壁画，记录着失落的文明。',
      '你探索了一处废弃的{location}，找到了一些有用的物资。',
      '{npc}带你进入了一个秘密的{location}，你大开眼界。',
    ],
    effects: { intelligence: 3, luck: 3 },
  },
  {
    id: 'cx_ex_05', category: 'exploration', minAge: 13, maxAge: 35, probability: 0.536,
    templates: [
      '你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。',
      '你跟着{npc}去{location}采集了一些材料。',
      '你在{location}发现了一些普通的草药，聊胜于无。',
    ],
    effects: { luck: 2 },
  },
  {
    id: 'cx_ex_06', category: 'exploration', minAge: 35, maxAge: 70, probability: 0.735,
    templates: [
      '你在{location}进行了常规的巡查，一切正常。',
      '你重访了以前去过的{location}，有了一些新的发现。',
      '你在{location}休息了一段时间，养精蓄锐。',
    ],
    effects: { health: 2 },
  },
  {
    id: 'cx_ws_01', category: 'world_story', minAge: 40, maxAge: 70, probability: 0.053,
    templates: [
      '{legend}的封印彻底破碎，整个世界陷入了前所未有的动荡，你被卷入了漩涡中心！',
      '一场席卷整个世界的大战爆发了，{location}首当其冲，你必须做出选择。',
      '世界的规则开始改变，{legend}的意志降临，所有人都受到了影响。',
    ],
    effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 },
  },
  {
    id: 'cx_ws_02', category: 'world_story', minAge: 30, maxAge: 60, probability: 0.108,
    templates: [
      '你发现{location}隐藏着改变世界的秘密，各方势力为此展开了明争暗斗。',
      '{npc}告诉你一个关于世界起源的惊天秘密，你的世界观被彻底颠覆。',
      '传说中的{legend}即将降临，所有人都在做准备，{location}的气氛紧张到了极点。',
    ],
    effects: { intelligence: 6, charisma: 4 },
  },
  {
    id: 'cx_ws_03', category: 'world_story', minAge: 25, maxAge: 50, probability: 0.256,
    templates: [
      '{location}附近发生了局部冲突，你不得不卷入其中。',
      '{npc}带来了一个重要的消息，可能影响到{location}的未来。',
      '你注意到了{location}的一些异常现象，似乎有什么大事要发生。',
    ],
    effects: { charisma: 3, luck: 3 },
  },
  {
    id: 'cx_ws_04', category: 'world_story', minAge: 20, maxAge: 45, probability: 0.563,
    templates: [
      '你听到了一些关于{legend}的传闻，但真假难辨。',
      '{location}发生了一些小变化，但你没有太在意。',
      '{npc}跟你聊了聊最近的时事，你表示关注。',
    ],
    effects: { intelligence: 2 },
  },
  {
    id: 'cx_ws_05', category: 'world_story', minAge: 40, maxAge: 80, probability: 0.752,
    templates: [
      '世界依旧平静，{location}的生活一如既往。',
      '你听说了一些关于{legend}的新消息，但似乎没什么实质内容。',
      '这一年没什么大事发生，你在{location}安稳度日。',
    ],
    effects: { luck: 1 },
  },
  {
    id: 'cx_hd_01', category: 'hidden', minAge: 60, maxAge: 120, probability: 0.041,
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
    id: 'cx_hd_02', category: 'hidden', minAge: 50, maxAge: 100, probability: 0.149,
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
    id: 'cx_hd_03', category: 'hidden', minAge: 35, maxAge: 80, probability: 0.254,
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
    id: 'cx_hd_04', category: 'hidden', minAge: 20, maxAge: 60, probability: 0.515,
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
    id: 'cx_dt_01', category: 'death', minAge: 0, maxAge: 100, probability: 0.35,
    templates: [
      '你在{location}遭遇不测，生命力迅速流逝。',
      '你的身体到达了极限，{npc}无能为力。',
      '{legend}的诅咒降临在你身上，你无法抵抗。',
    ],
    effects: { health: -60 },
  },
  {
    id: 'cx_dt_02', category: 'death', minAge: 0, maxAge: 150, probability: 0.45,
    templates: [
      '你在{location}进行了最后的战斗，英勇牺牲。',
      '寿元耗尽，你在{location}静静地闭上了眼睛。',
      '你走火入魔，在{location}化为灰烬。',
    ],
    effects: { health: -80 },
  },
  {
    id: 'cx_dt_03', category: 'death', minAge: 0, maxAge: 200, probability: 0.55,
    templates: [
      '你在{location}被强敌击杀，死不瞑目。',
      '你的伤势恶化，{npc}尽力抢救但回天乏术。',
      '{legend}的力量反噬，你在{location}形神俱灭。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'cx_dt_04', category: 'death', minAge: 0, maxAge: 250, probability: 0.65,
    templates: [
      '你在{location}寿终正寝，周围的人都来为你送行。',
      '你安详地在{location}离世，一生无憾。',
      '{npc}守在你的床前，目送你离开这个世界。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'cx_dt_05', category: 'death', minAge: 0, maxAge: 300, probability: 0.75,
    templates: [
      '你在{location}结束了这一生，灵魂化作流光消散。',
      '你的故事成为了{location}的传说，后人会记得你的名字。',
      '{legend}亲自前来接引你的灵魂，你感到一阵温暖。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'cx_ws_06', category: 'world_story', minAge: 15, maxAge: 15, probability: 0.98,
    templates: [
      '你站在{location}的山巅，玄天剑尊的虚影出现在你面前："少年，修仙有三条路。长生大道，苦修飞升，断绝红尘；红尘历练，入世悟道，因果缠身；快意恩仇，以杀证道，血染长生。选一条吧。"',
    ],
    choices: [
      { text: '长生大道（苦修飞升，断绝红尘）', successRate: 1, successText: '你选择了长生大道，从此闭关苦修，不问世事。你的修为一日千里，但你的心也越来越冷', failText: '你选择了长生大道，但发现断绝红尘比想象中更难。每当夜深人静，你都会想起故乡的灯火', effects: { intelligence: 10, special: 8 }, failEffects: { charisma: -10, intelligence: 5 }, flags: ['major_longevity'], failFlags: ['major_longevity_fail'] },
      { text: '红尘历练（入世悟道，不避因果）', successRate: 1, successText: '你选择了红尘历练，下山入世。你在凡间经历了爱恨情仇，道心反而更加通透——原来修仙不是逃避，而是经历', failText: '你选择了红尘历练，却被红尘迷了眼。等你醒悟时，十年已过，修为毫无寸进', effects: { charisma: 10, luck: 8 }, failEffects: { charisma: -5, luck: -8 }, flags: ['major_worldly'], failFlags: ['major_worldly_fail'] },
      { text: '快意恩仇（以杀证道，血染长生）', successRate: 1, successText: '你选择了快意恩仇，以杀证道。你的剑下不留无名之鬼，每一战都让你的道心更加坚定——只是那剑上的血，再也洗不掉了', failText: '你选择了快意恩仇，却在某次战斗中杀错了人。那一刻，你的道心出现了裂痕', effects: { strength: 12, special: 5 }, failEffects: { health: -25, intelligence: -5 }, flags: ['major_killing'], failFlags: ['major_killing_fail'] },
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  },
  {
    id: 'cx_ws_07', category: 'world_story', minAge: 20, maxAge: 28, probability: 0.88,
    templates: [
      '因为你选择了长生大道，{location}的灵气开始主动向你汇聚。你的闭关洞府外，草木枯萎——你在无意识中吸取了周围的生命力。',
      '你在{location}苦修三年，出关时已是筑基后期。但你的同门师兄弟看你的眼神变了，他们说你的眼中"已经没有人的温度"。',
    ],
    effects: { intelligence: 8, special: 6 },
    flags: ['major_longevity_1'],
    requiredFlags: ['major_longevity'],
  },
  {
    id: 'cx_ws_08', category: 'world_story', minAge: 30, maxAge: 40, probability: 0.85,
    templates: [
      '你因为追求长生而获得了强大的修为，但{npc}警告你："长生不是无情。上古有位长生仙君，活了万年，最后却因为孤独而自断仙根。"',
      '你的修为达到了新的高度，{location}的天地异象持续了三日。但你发现，你已经想不起母亲的脸了。',
    ],
    effects: { special: 10, intelligence: 5, charisma: -5 },
    requiredFlags: ['major_longevity_1'],
  },
  {
    id: 'cx_ws_09', category: 'world_story', minAge: 20, maxAge: 28, probability: 0.88,
    templates: [
      '你因为选择了红尘历练，在{location}遇到了一个凡人女子。她不懂修仙，但她懂你的孤独。你们相爱了，但你知道，她的寿命不过百年。',
      '你在红尘中历练，在{location}建立了一座医馆，免费为凡人治病。{npc}说："你这不是在浪费时间吗？"你说："这就是我的道。"',
    ],
    effects: { charisma: 8, luck: 5, health: 5 },
    flags: ['major_worldly_1'],
    requiredFlags: ['major_worldly'],
  },
  {
    id: 'cx_ws_10', category: 'world_story', minAge: 30, maxAge: 40, probability: 0.85,
    templates: [
      '你在红尘之路上的经历让你领悟了"有情道"——不同于正统的"无情道"，有情道认为只有经历过爱恨，才能真正超脱。{location}的修士们开始模仿你的道路。',
      '{npc}告诉你，你的有情道正是上古"逍遥仙君"所追求的。你冥冥之中，走上了最接近天道本意的道路。',
    ],
    effects: { charisma: 8, luck: 6, special: 4 },
    requiredFlags: ['major_worldly_1'],
  },
  {
    id: 'cx_ws_11', category: 'world_story', minAge: 20, maxAge: 28, probability: 0.88,
    templates: [
      '你因为选择了快意恩仇，在{location}建立了自己的威名。你的剑下，恶人闻风丧胆。但你也开始被正道宗门警惕——你的杀气太重了。',
      '你在{location}遇到了血魔殿的人。他们邀请你加入："你的杀道与我们殊途同归。来吧，我们一起重塑这个虚伪的世界。"',
    ],
    effects: { strength: 8, charisma: -3 },
    flags: ['major_killing_1'],
    requiredFlags: ['major_killing'],
  },
  {
    id: 'cx_ws_12', category: 'world_story', minAge: 30, maxAge: 40, probability: 0.85,
    templates: [
      '你因为追求杀道而获得了强大的实力，但{npc}警告你："以杀证道，自古以来只有一人成功——那就是开创杀道的\'血河老祖\'。其余所有人，都变成了只知道杀戮的怪物。"',
      '你的杀意越来越重，{location}的飞鸟经过你上空都会坠亡。你开始怀疑：这真的是我要的道吗？',
    ],
    effects: { strength: 10, special: 5, intelligence: -5 },
    requiredFlags: ['major_killing_1'],
  },
  {
    id: 'cx_ws_13', category: 'world_story', minAge: 30, maxAge: 30, probability: 0.97,
    templates: [
      '{location}发生了一件震动天下的大事。血魔殿血祭了三个村庄的凡人，青云宗下令所有弟子必须参与剿魔。但你在调查中发现了真相——那些"被血祭"的凡人，其实是被青云宗自己处决的，目的是栽赃血魔殿、挑起正魔大战。{npc}向你提出了一个交易：公布真相，你将被正道追杀；保持沉默，你可以获得宗门核心资源。这是对你灵魂的考验。',
    ],
    choices: [
      { text: '坚守本心，公布真相', successRate: 1, successText: '你冒着被正道追杀的风险，公布了真相。虽然失去了宗门的庇护，但你的道心前所未有的通明——你知道，真正的正义不是站在正道一边，而是站在真相一边', failText: '你公布了真相，但没有人相信。青云宗反咬一口，说你是魔道间谍。你被逐出宗门，四处流亡', effects: { intelligence: 10, charisma: 6, luck: 5 }, failEffects: { health: -20, charisma: -10, strength: -5 }, flags: ['major_justice'], failFlags: ['major_justice_fail'] },
      { text: '隐忍不发，暗中调查', successRate: 1, successText: '你选择了暂时隐忍，暗中收集更多证据。三年后，你掌握了青云宗与魔道暗中交易的完整证据链，一举扳倒了幕后黑手', failText: '你的隐忍被当作默认。你越来越深地卷入了宗门的黑暗面，等你想要抽身时，已经来不及了', effects: { intelligence: 8, luck: 6 }, failEffects: { charisma: -8, luck: -5 }, flags: ['major_wisdom_dark'], failFlags: ['major_wisdom_dark_fail'] },
      { text: '不择手段，借机上位', successRate: 1, successText: '你利用这个秘密要挟青云宗高层，获得了大量资源和地位。但你也知道，从这一刻起，你和他们没有区别了', failText: '你的要挟被反制。青云宗以"勾结魔道"的罪名将你打入死牢，你的修仙之路到此终结', effects: { strength: 8, special: 5 }, failEffects: { charisma: -15, luck: -10, health: -20 }, flags: ['major_dark'], failFlags: ['major_dark_fail'] },
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  },
  {
    id: 'cx_ws_14', category: 'world_story', minAge: 35, maxAge: 45, probability: 0.85,
    templates: [
      '因为你坚守了本心，{location}的散修们自发聚集到你身边。你的正义之名吸引了无数被宗门抛弃的人——你们成为了修仙界最特殊的"第三方势力"。',
      '你在{location}建立了一个"真相阁"，专门调查正魔两道的黑幕。正道视你为眼中钉，魔道视你为肉中刺，但普通百姓将你奉为神明。',
    ],
    effects: { intelligence: 8, charisma: 8, luck: 5 },
    requiredFlags: ['major_justice'],
  },
  {
    id: 'cx_ws_15', category: 'world_story', minAge: 35, maxAge: 45, probability: 0.85,
    templates: [
      '你因为隐忍不发而获得了青云宗高层的信任。他们让你参与了更多机密，你也因此掌握了更多黑幕。{npc}感叹："你是潜伏在黑暗中的光。"',
      '你在{location}发现了更大的阴谋——青云宗与万法宗的内斗，其实是某位仙界大能在凡界的棋子博弈。而你，正在成为第三颗棋子。',
    ],
    effects: { intelligence: 10, luck: 5, special: 3 },
    requiredFlags: ['major_wisdom_dark'],
  },
  {
    id: 'cx_ws_16', category: 'world_story', minAge: 35, maxAge: 45, probability: 0.85,
    templates: [
      '你因为不择手段而获得了强大的力量和资源。但{npc}看你的眼神变得复杂——那不是敬畏，那是怜悯。你在{location}建立了自己的势力，却发现自己越来越孤独。',
      '血魔老祖因为你的黑暗之路而对你产生了兴趣。他说："正道培养出来的魔，比魔道更纯粹。你来血魔殿吧，我给你想要的一切。"',
    ],
    effects: { strength: 10, special: 6, charisma: -8 },
    requiredFlags: ['major_dark'],
  },
  {
    id: 'cx_ws_17', category: 'world_story', minAge: 45, maxAge: 45, probability: 0.96,
    templates: [
      '你修炼到了元婴后期，天劫即将来临。{npc}告诉你："你的积累已经足够，但天劫的强度与你的因果有关。你这一生杀孽太重/功德太高/因果太杂，天劫将比常人强三倍。你有两个选择：强行渡劫，九死一生；或者压制修为，以秘法延缓天劫，但每延缓一年，天劫就强一分。"',
    ],
    choices: [
      { text: '强行渡劫，向死而生', successRate: 1, successText: '你选择了强行渡劫。九九雷霆轰击而下，你几度濒死，但凭借强大的意志和肉身硬抗了过来。渡劫成功后，你的修为暴涨，直接突破到了化神期！', failText: '天劫之力超出了你的预期。你虽然勉强活了下来，但修为尽废，灵根受损，从此沦为凡人', effects: { strength: 15, special: 12, charisma: 8 }, failEffects: { health: -60, special: -20, strength: -10 }, flags: ['major_tribulation'], failFlags: ['major_tribulation_fail'] },
      { text: '压制修为，等待时机', successRate: 1, successText: '你选择了压制修为，寻找削弱天劫的方法。你游历天下，积累功德，最终找到了上古遗留的"渡劫阵法"，将天劫难度降低了一半', failText: '你压制了修为，但天劫的强度仍在增长。十年后，当你终于准备好时，发现天劫已经强大到了根本无法抵抗的程度', effects: { intelligence: 10, luck: 8, health: 10 }, failEffects: { health: -30, intelligence: 5 }, flags: ['major_wait'], failFlags: ['major_wait_fail'] },
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  },
  {
    id: 'cx_ws_18', category: 'world_story', minAge: 48, maxAge: 58, probability: 0.82,
    templates: [
      '你成功渡劫的消息传遍了修仙界。{location}的修士们将你的名字刻在了"渡劫碑"上——那是记录所有成功渡劫者的地方。',
      '{npc}说你是万古以来最勇敢的渡劫者。你的名字将被后世修士传颂，激励他们在天劫面前永不退缩。',
    ],
    effects: { strength: 8, charisma: 10, special: 6 },
    requiredFlags: ['major_tribulation'],
  },
  {
    id: 'cx_ws_19', category: 'world_story', minAge: 48, maxAge: 58, probability: 0.82,
    templates: [
      '你因为等待时机而错过了最佳的渡劫窗口，但你也因此积累了大量的功德和准备。当你最终渡劫时，虽然天劫更强，但你的准备也更充分。',
      '{npc}赞叹你的智慧——"天道酬勤，但更酬智。你不是靠蛮力战胜天劫的，你是靠智慧让天劫输给了你。"',
    ],
    effects: { intelligence: 10, luck: 8, special: 5 },
    requiredFlags: ['major_wait'],
  },
  {
    id: 'cx_ws_20', category: 'world_story', minAge: 60, maxAge: 60, probability: 0.95,
    templates: [
      '你站在{location}的天外天，仙界通道就在眼前。但你突然发现了一个惊天的秘密：仙界通道的封印不是自然形成的，而是仙界的某位大能故意设下的——他在阻止凡人飞升，独占仙界资源！你现在有两个选择：强行打破封印飞升，与仙界大能为敌；或者留在凡界，守护这片生你养你的土地。',
    ],
    choices: [
      { text: '打破封印，飞升仙界', successRate: 1, successText: '你一拳击碎了仙界通道的封印，飞升仙界。你发现仙界并非乐土，而是另一个充满争斗的世界。但你没有退缩——既然来了，就要改变它', failText: '你试图打破封印，但仙界大能的力量远超你的想象。你被封印反噬，身死道消，魂飞魄散', effects: { special: 20, intelligence: 15 }, failEffects: { health: -100, special: -30 }, flags: ['major_ascend'], failFlags: ['major_ascend_fail'] },
      { text: '留在凡界，守护故土', successRate: 1, successText: '你选择了留在凡界。你以化神期的修为成为了凡界的守护神，阻止仙界大能的阴谋。虽然你失去了永恒的生命，但你获得了永恒的意义', failText: '你留在凡界，但仙界大能的代理人开始追杀你。你虽然强大，但双拳难敌四手，最终被围攻致死', effects: { charisma: 15, health: 10, luck: 10 }, failEffects: { health: -50, charisma: 5 }, flags: ['major_stay'], failFlags: ['major_stay_fail'] },
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  },
  {
    id: 'cx_ws_21', category: 'world_story', minAge: 65, maxAge: 80, probability: 0.8,
    templates: [
      '你飞升仙界后，发现这里与凡界并无不同——有争斗、有阴谋、有不公。你说："既然我能改变凡界，就能改变仙界。"',
      '你在仙界找到了志同道合者，开始策划推翻那位垄断仙界资源的大能。你的战斗，才刚刚开始。',
    ],
    effects: { special: 15, intelligence: 10, strength: 5 },
    requiredFlags: ['major_ascend'],
  },
  {
    id: 'cx_ws_22', category: 'world_story', minAge: 65, maxAge: 80, probability: 0.8,
    templates: [
      '你留在凡界的举动感动了无数人。{location}建起了你的雕像，不是你的神像，而是一个普通老人的形象——因为你说："我不是神，我只是不想离开的凡人。"',
      '你以凡界守护神的身份活了两千年，见证了无数修士的飞升与陨落。临终前，你说："我不后悔。这片土地上的一草一木，都比仙界的琼楼玉宇更珍贵。"',
    ],
    effects: { charisma: 12, luck: 10, health: 5 },
    requiredFlags: ['major_stay'],
  },
  {
    id: 'cx_ie_commoner_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你生在青牛村一个普通农家。灵根检测那天，{npc}摇头叹息："五行杂灵根，下品之资，修仙无望。"村人看你的眼神从期待变成了怜悯。',
      '作为凡人子弟，你在{location}的灵根检测仪式上面色苍白——你的灵根黯淡如烛火将熄，{npc}当众宣布你与仙道无缘。',
    ],
    effects: { special: 5 },
    flags: ['chain_commoner_childhood_0'],
    identityExclusive: 'commoner',
  },
  {
    id: 'cx_ie_commoner_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你不甘心。每日清晨，你独自爬到{location}的最高处，对着朝阳吐纳。虽然感受不到灵气，但你总觉得身体里有什么在沉睡。',
      '被判定无修仙资质后，你在{location}发现了一处被藤蔓遮掩的石洞，洞口刻着古怪的符文，似在召唤着你。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_commoner_childhood_1'],
    identityExclusive: 'commoner',
  },
  {
    id: 'cx_ie_commoner_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '你在石洞中找到了一本残破的炼体功法——《金刚淬体诀》。没有灵根，便以肉身证道！你开始以妖兽之血淬炼体魄。',
      '十六岁那年，你在{location}遭遇了一头低阶妖兽。普通人本该必死，但你竟以肉身之力将其击杀！{npc}震惊地看着你。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_commoner_growth_0'],
    requiredFlags: ['chain_commoner_childhood_0'],
    identityExclusive: 'commoner',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_commoner_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '你的炼体之术小有所成。一次机缘巧合下，你在{location}救了一位青云宗外门弟子，他感激之下赠你一枚筑基丹。',
      '散修集市上，{npc}看出了你走的是体修之路，感慨道："以武入道，古来有之。小子，你可愿听我讲一段故事？"',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_commoner_growth_1'],
    requiredFlags: ['chain_commoner_childhood_0'],
    identityExclusive: 'commoner',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_commoner_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '凭借坚如精钢的肉身，你在{location}的宗门选拔中一鸣惊人。青云宗破格收你为外门弟子——史上第一个体修外门！',
      '你以体修之身踏入修仙界，却在{location}遭遇了正统修士的轻视。"区区蛮力，也配修仙？"你握紧了拳头。',
    ],
    effects: { strength: 8 },
    flags: ['chain_commoner_adult_0'],
    requiredFlags: ['chain_commoner_growth_0'],
    identityExclusive: 'commoner',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_commoner_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '成年后的你面临抉择：青云宗长老欣赏你的毅力，愿收你为真传，但要求你放弃体修、转修正统功法；或者继续体修，但永远得不到宗门核心资源。',
    ],
    choices: [
      { text: '坚持体修', successRate: 0.6, successText: '你选择了坚持体修，从此踏上了一条不归路。', failText: '你选择了坚持体修，但命运弄人，一切并未如你所愿。', effects: { strength: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_commoner_path'], failFlags: ['branch_identity_commoner_path_fail'], relationshipEffects: { 'elder_yun': 10 } },
      { text: '转修正统', successRate: 0.75, successText: '你选择了转修正统，虽然道路不同，但终点未必更差。', failText: '你选择了转修正统，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_commoner_new'], failFlags: ['branch_identity_commoner_new_fail'], relationshipEffects: { 'alchemy_master': 10 } },
    ],
    flags: ['chain_commoner_adult_1'],
    requiredFlags: ['chain_commoner_growth_0'],
    identityExclusive: 'commoner',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_commoner_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '一次生死危机中，你在{location}的肉身突破了极限，体内沉睡的某种力量被唤醒——原来你的灵根并非没有，而是被上古封印锁住了！',
      '{npc}为你检查身体后大惊失色："你的灵根...不，那不是灵根，那是传说中的混沌灵根！只是被九重封印镇压！"',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_commoner_special_0'],
    requiredFlags: ['chain_commoner_adult_0'],
    identityExclusive: 'commoner',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_commoner_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你找到了解开第一重封印的方法。封印解除的瞬间，天地灵气疯狂涌入你的体内——你的混沌灵根与金刚肉身完美融合，开创了前所未有的"体灵双修"之道！',
      '你成为了修仙界第一个同时走到体修与灵修巅峰的人。后人称你为"混沌金刚"，你的故事激励了无数被判定为废材的人。',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_commoner_special_1'],
    requiredFlags: ['chain_commoner_adult_0'],
    identityExclusive: 'commoner',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_genius_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生的那一夜，{location}上空紫气东来三千里，九霄雷动。青云宗玄天剑尊亲自下山，将你收为关门弟子。',
      '作为宗门天才，你三岁便能引气入体，五岁御剑飞行。{location}的弟子们看你的眼神中既有羡慕，也有嫉妒。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_genius_childhood_0'],
    identityExclusive: 'genius',
  },
  {
    id: 'cx_ie_genius_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '六岁那年的宗门大比，你以炼气之身击败了筑基弟子。{npc}赞叹："此子必成我青云宗千年以来第一人。"但你也感受到了沉甸甸的压力。',
      '你的童年没有玩耍，只有无尽的修炼。{location}的演武场上，你每日挥剑三千次，直到掌心磨出血泡。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_genius_childhood_1'],
    identityExclusive: 'genius',
  },
  {
    id: 'cx_ie_genius_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十四岁，你突破筑基期，创造了青云宗三千年来的最快纪录。但就在此时，你发现宗门内部暗流涌动——玄天剑尊年事已高，长老们开始争夺下任掌门之位。',
      '作为宗门天才，你不可避免地被卷入了派系斗争。{location}的一次夜谈中，大师兄暗示你若支持他继位，他将倾尽全力培养你。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_genius_growth_0'],
    requiredFlags: ['chain_genius_childhood_0'],
    identityExclusive: 'genius',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_genius_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '十八岁那年，你在{location}的秘境试炼中遭遇了心魔。幻境里，你看到了自己最恐惧的画面——被另一个更天才的人超越，沦为笑柄。',
      '你战胜了心魔，道心更加坚定。{npc}告诉你："天赋是上天给你的，但道心是你自己修来的。记住这一点。"',
    ],
    effects: { special: 6 },
    flags: ['chain_genius_growth_1'],
    requiredFlags: ['chain_genius_childhood_0'],
    identityExclusive: 'genius',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_genius_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已是青云宗最年轻的金丹修士。但宗门内部的斗争愈演愈烈——玄天剑尊闭关冲击化神，各大长老纷纷拉拢你站队。',
      '你在{location}意外发现了大师兄的秘密：他为了争夺掌门之位，竟然暗中与魔道交易！你握紧了手中的剑。',
    ],
    effects: { strength: 8 },
    flags: ['chain_genius_adult_0'],
    requiredFlags: ['chain_genius_growth_0'],
    identityExclusive: 'genius',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_genius_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你发现大师兄与魔道交易的事实。现在你有两个选择：向掌门举报，但可能被视为诬陷；或者暂时隐忍，寻找更多证据。',
    ],
    choices: [
      { text: '举报大师兄', successRate: 0.55, successText: '你选择了举报大师兄，从此踏上了一条不归路。', failText: '你选择了举报大师兄，但命运弄人，一切并未如你所愿。', effects: { strength: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_genius_path'], failFlags: ['branch_identity_genius_path_fail'], relationshipEffects: { 'elder_yun': 5 } },
      { text: '隐忍收集证据', successRate: 0.75, successText: '你选择了隐忍收集证据，虽然道路不同，但终点未必更差。', failText: '你选择了隐忍收集证据，却发现这条路比你想象的更加艰难。', effects: { intelligence: 8, special: 3 }, failEffects: { strength: -3 }, flags: ['branch_identity_genius_new'], failFlags: ['branch_identity_genius_new_fail'], relationshipEffects: { 'elder_yun': 10 } },
    ],
    flags: ['chain_genius_adult_1'],
    requiredFlags: ['chain_genius_growth_0'],
    identityExclusive: 'genius',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_genius_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '玄天剑尊出关后得知真相，亲手处决了大师兄。他将掌门信物交给了你："从今天起，你就是青云宗下一任掌门。"',
      '你拒绝了掌门之位。"我的道，不在宗门之内。"你离开青云宗，独自踏上了寻找仙界通道的旅途。{npc}目送你远去，眼中满是复杂。',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_genius_special_0'],
    requiredFlags: ['chain_genius_adult_0'],
    identityExclusive: 'genius',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_genius_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你成为了修仙界最年轻的化神期修士。有人问你成功的秘诀，你淡淡地说："所谓天才，不过是比旁人更早明白——修仙，修的从来不是天赋。"',
      '你在{location}创立了"新青云宗"，不分出身、不论灵根，有教无类。你的宗门成为了灵气复苏时代最耀眼的存在。',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_genius_special_1'],
    requiredFlags: ['chain_genius_adult_0'],
    identityExclusive: 'genius',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_wanderer_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你不知道自己的父母是谁。最早的记忆，是在{location}的街头乞讨。一个老乞丐教会了你如何在被妖兽追赶时活下来。',
      '作为散修野客，你从小就学会了在{location}的废墟中寻找食物。你比任何人都清楚——修仙界不属于弱者。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_wanderer_childhood_0'],
    identityExclusive: 'wanderer',
  },
  {
    id: 'cx_ie_wanderer_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '八岁那年，你在{location}的垃圾堆里捡到了半块破损的玉简。虽然无法读取完整内容，但你隐约感受到了其中的灵气波动。',
      '{npc}发现了你手中的玉简，脸色大变："这是...上古散修\'逍遥子\'的遗物！小子，你从哪里得到的？"',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_wanderer_childhood_1'],
    identityExclusive: 'wanderer',
  },
  {
    id: 'cx_ie_wanderer_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁的你独自进入了{location}的一处废弃洞府。洞府主人早已陨落，但留下了一柄断剑和一本《逍遥剑诀》。',
      '你在{location}遇到了一群散修强盗。他们想要你手中的玉简，你以断剑相搏，虽然浑身是伤，但最终保住了性命。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_wanderer_growth_0'],
    requiredFlags: ['chain_wanderer_childhood_0'],
    identityExclusive: 'wanderer',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_wanderer_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在散修集市结识了{npc}。他告诉你一个秘密：散修联盟正在酝酿一场起义，要打破宗门对资源的垄断。',
      '你开始在{location}专门帮助其他散修。你的名声逐渐传开，越来越多的散修愿意追随你。',
    ],
    effects: { special: 6 },
    flags: ['chain_wanderer_growth_1'],
    requiredFlags: ['chain_wanderer_childhood_0'],
    identityExclusive: 'wanderer',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_wanderer_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已是散修中的领袖人物。但大宗门注意到了你——青云宗派人招安，许诺你内门长老之位；万法宗则威胁要剿灭散修联盟。',
      '你在{location}的一次集会上发表了演讲："我们散修没有宗门的资源，没有长辈的庇护，但我们有自由！"台下爆发出雷鸣般的掌声。',
    ],
    effects: { special: 8 },
    flags: ['chain_wanderer_adult_0'],
    requiredFlags: ['chain_wanderer_growth_0'],
    identityExclusive: 'wanderer',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_wanderer_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '大宗门给了最后通牒：要么加入宗门，要么被剿灭。散修联盟内部也出现了分歧——有人主张投降，有人主张死战。',
    ],
    choices: [
      { text: '领导起义', successRate: 0.5, successText: '你选择了领导起义，从此踏上了一条不归路。', failText: '你选择了领导起义，但命运弄人，一切并未如你所愿。', effects: { strength: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_wanderer_path'], failFlags: ['branch_identity_wanderer_path_fail'], relationshipEffects: { 'demon_lord': 10 } },
      { text: '谈判妥协', successRate: 0.75, successText: '你选择了谈判妥协，虽然道路不同，但终点未必更差。', failText: '你选择了谈判妥协，却发现这条路比你想象的更加艰难。', effects: { intelligence: 8, special: 3 }, failEffects: { strength: -3 }, flags: ['branch_identity_wanderer_new'], failFlags: ['branch_identity_wanderer_new_fail'], relationshipEffects: { 'elder_yun': 10 } },
    ],
    flags: ['chain_wanderer_adult_1'],
    requiredFlags: ['chain_wanderer_growth_0'],
    identityExclusive: 'wanderer',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_wanderer_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '起义前夕，{npc}带来了一个惊人的消息：你是上古散修大能"逍遥子"的直系后裔！那块玉简中藏着逍遥子留下的完整传承。',
      '你接受了逍遥子的传承。原来上古时期，散修曾与宗门平起平坐，是某次大战后宗门才垄断了资源。你发誓要恢复散修的荣光。',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_wanderer_special_0'],
    requiredFlags: ['chain_wanderer_adult_0'],
    identityExclusive: 'wanderer',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_wanderer_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你带领散修联盟攻下了{location}，建立了第一个"散修城池"。城内不分出身，有教无类。消息传出，天下震动。',
      '百年后，你的散修城池成为了修仙界第五大势力。后人称你为"逍遥散仙"——不是因为你飞升了，而是因为你让无数人拥有了追求逍遥的权利。',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_wanderer_special_1'],
    requiredFlags: ['chain_wanderer_adult_0'],
    identityExclusive: 'wanderer',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_demon_blood_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就知道自己与别人不同。你的瞳孔会在月圆之夜变成金色，你的牙齿比常人更尖锐。{location}的孩子们叫你"怪物"。',
      '作为妖族血脉，你在{location}的一次玩耍中不小心露出了妖化特征——你的手臂上长出了鳞片。村民们惊恐地拿起了农具。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_demon_blood_childhood_0'],
    identityExclusive: 'demon_blood',
  },
  {
    id: 'cx_ie_demon_blood_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你的母亲在你五岁时离开了，只留下一块玉佩。{npc}告诉你："你的母亲不是人类，她来自万妖森。"',
      '你在{location}被一群猎人追赶，他们想要你的妖血炼丹。危急时刻，你体内的血脉第一次觉醒——你以超乎常人的速度逃入了深山。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_demon_blood_childhood_1'],
    identityExclusive: 'demon_blood',
  },
  {
    id: 'cx_ie_demon_blood_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}遇到了一位神秘的{npc}。他看出了你的血脉，说："龙族与虎族的混血...有趣。万兽帝君一直在找你这样的混血儿。"',
      '你开始学习控制体内的妖血。{location}的瀑布下，你每日承受水流的冲击，直到能在妖化状态下保持理智。',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_demon_blood_growth_0'],
    requiredFlags: ['chain_demon_blood_childhood_0'],
    identityExclusive: 'demon_blood',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_demon_blood_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，万兽帝君派人送来请帖，邀请你参加"妖王祭典"。但你的养父——一位正道修士——恳求你不要与妖族往来。',
      '你在{location}遇到了一个妖族少女。她告诉你："在人类世界，你是怪物；在妖族世界，你是天才。你的选择，将决定你的归属。"',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_demon_blood_growth_1'],
    requiredFlags: ['chain_demon_blood_childhood_0'],
    identityExclusive: 'demon_blood',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_demon_blood_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你面临着身份认同的危机。正道宗门发现了你的妖族血脉，要将你逐出人类城市；妖族则希望你完全化妖，为妖族效力。',
      '你在{location}遇到了一个人类修士与妖族女子的混血家庭。他们告诉你："我们不是人，也不是妖。我们只是我们自己。"',
    ],
    effects: { special: 8 },
    flags: ['chain_demon_blood_adult_0'],
    requiredFlags: ['chain_demon_blood_growth_0'],
    identityExclusive: 'demon_blood',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_demon_blood_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '万兽帝君给了你一个选择：彻底化妖，成为妖族大将军；或者保持人形，但永远不得再入万妖森。',
    ],
    choices: [
      { text: '彻底化妖', successRate: 0.5, successText: '你选择了彻底化妖，从此踏上了一条不归路。', failText: '你选择了彻底化妖，但命运弄人，一切并未如你所愿。', effects: { strength: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_demon_blood_path'], failFlags: ['branch_identity_demon_blood_path_fail'] },
      { text: '保持人形', successRate: 0.75, successText: '你选择了保持人形，虽然道路不同，但终点未必更差。', failText: '你选择了保持人形，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_demon_blood_new'], failFlags: ['branch_identity_demon_blood_new_fail'] },
    ],
    flags: ['chain_demon_blood_adult_1'],
    requiredFlags: ['chain_demon_blood_growth_0'],
    identityExclusive: 'demon_blood',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_demon_blood_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你发现了母亲的下落——她并未死去，而是被青云宗秘密囚禁了千年！青云宗想用她的龙族血脉炼制"化龙丹"。',
      '你闯入了青云宗的禁地，与玄天剑尊对峙。他冷冷地说："你的母亲是人妖和平的牺牲品。要怪，就怪这个容不下混血的世界。"',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_demon_blood_special_0'],
    requiredFlags: ['chain_demon_blood_adult_0'],
    identityExclusive: 'demon_blood',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_demon_blood_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你救出了母亲，但自己也身负重伤。在生死边缘，你体内的龙族与虎族血脉完美融合——你成为了前所未有的"龙虎混元体"！',
      '你成为了人妖两族的桥梁。在你的斡旋下，青云宗与万兽帝君签订了和平协议。虽然激进派仍然不满，但和平的曙光已经出现。',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_demon_blood_special_1'],
    requiredFlags: ['chain_demon_blood_adult_0'],
    identityExclusive: 'demon_blood',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_demon_heritage_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你最早的记忆是一片火海。{location}的夜晚，你躲在衣柜里，透过缝隙看到黑衣人屠杀你的全家。你紧紧咬住嘴唇，不敢出声。',
      '作为魔道遗孤，你被一位正道修士收养。他告诉你："你的父母是好人，只是走错了路。"但你从他的眼神中看到了怜悯和...恐惧。',
    ],
    effects: { special: 5 },
    flags: ['chain_demon_heritage_childhood_0'],
    identityExclusive: 'demon_heritage',
  },
  {
    id: 'cx_ie_demon_heritage_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '八岁那年，你在养父的书房发现了一本被封印的古籍。翻开第一页，你看到了你父亲的名字——"血魔殿左护法"。',
      '{npc}发现了你偷看古籍的事，叹了口气："既然天意如此，我便告诉你真相。你的父母是魔道中人，但他们从未杀过一个凡人。"',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_demon_heritage_childhood_1'],
    identityExclusive: 'demon_heritage',
  },
  {
    id: 'cx_ie_demon_heritage_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}遭遇危险时，体内的魔道血脉第一次觉醒——一股黑暗的力量从丹田涌出，你以超乎想象的速度反杀了敌人。',
      '你开始偷偷修炼父母留下的功法。《血神经》的修炼需要吸收精血，但你发誓只杀该死之人。{npc}发现了你的秘密，选择了沉默。',
    ],
    effects: { special: 6 },
    flags: ['chain_demon_heritage_growth_0'],
    requiredFlags: ['chain_demon_heritage_childhood_0'],
    identityExclusive: 'demon_heritage',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_demon_heritage_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，血魔殿的人找到了你。他们称你为"少主"，说血魔老祖一直在等你回去继承你父亲的衣钵。',
      '你在{location}遇到了一位青云宗弟子。他并不知道你的身份，却与你成为了朋友。你开始怀疑：正魔之分，真的那么绝对吗？',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_demon_heritage_growth_1'],
    requiredFlags: ['chain_demon_heritage_childhood_0'],
    identityExclusive: 'demon_heritage',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_demon_heritage_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你身份暴露。青云宗要将你处死，血魔殿要带你回去。你站在{location}的悬崖边，两面都是深渊。',
      '你的正道朋友为你求情，却被宗门处罚。你看着他为你受苦，心中的怒火与愧疚交织——这就是正道的"正义"吗？',
    ],
    effects: { strength: 8 },
    flags: ['chain_demon_heritage_adult_0'],
    requiredFlags: ['chain_demon_heritage_growth_0'],
    identityExclusive: 'demon_heritage',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_demon_heritage_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '血魔老祖亲自来见你。他说："你父亲是我最好的兄弟。加入我，我帮你摧毁这个虚伪的正义。"你的养父则说："别听他蛊惑，你有选择的权利。"',
    ],
    choices: [
      { text: '加入魔道', successRate: 0.5, successText: '你选择了加入魔道，从此踏上了一条不归路。', failText: '你选择了加入魔道，但命运弄人，一切并未如你所愿。', effects: { charisma: 10, health: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_demon_heritage_path'], failFlags: ['branch_identity_demon_heritage_path_fail'] },
      { text: '坚守正道', successRate: 0.75, successText: '你选择了坚守正道，虽然道路不同，但终点未必更差。', failText: '你选择了坚守正道，却发现这条路比你想象的更加艰难。', effects: { intelligence: 8, special: 3 }, failEffects: { strength: -3 }, flags: ['branch_identity_demon_heritage_new'], failFlags: ['branch_identity_demon_heritage_new_fail'] },
    ],
    flags: ['chain_demon_heritage_adult_1'],
    requiredFlags: ['chain_demon_heritage_growth_0'],
    identityExclusive: 'demon_heritage',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_demon_heritage_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你调查发现，当年灭你满门的不是正道，而是血魔殿内部的人——他们嫉妒你父亲的地位！血魔老祖知道真相，却选择了包庇凶手。',
      '你独自杀入了血魔殿，将当年参与灭门的凶手一一斩杀。血魔老祖没有阻止你，只是叹息："你比你父亲更狠。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_demon_heritage_special_0'],
    requiredFlags: ['chain_demon_heritage_adult_0'],
    identityExclusive: 'demon_heritage',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_demon_heritage_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你没有加入任何一方。你在{location}建立了一个"中立庇护所"，收留正魔两道的流亡者。你说："正义和邪恶都是标签，我只问本心。"',
      '后人称你为"魔道叛徒"、"正道异端"，但在那些被你救过的人心中，你是真正的英雄。你的庇护所成为了修仙界最神秘的存在。',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_demon_heritage_special_1'],
    requiredFlags: ['chain_demon_heritage_adult_0'],
    identityExclusive: 'demon_heritage',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_reincarnated_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就做同一个梦：一片金色的宫殿，一个声音在对你说"回来吧"。{location}的老人们说，你出生时有仙光护体，是仙人转世。',
      '作为转世仙人，你从小就能说出一些连{npc}都听不懂的古老语言。三岁那年，你指着天空吟诵了一段古文。{npc}震惊地说："这是...上古仙语？这孩子到底是什么来历？"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_reincarnated_childhood_0'],
    identityExclusive: 'reincarnated',
  },
  {
    id: 'cx_ie_reincarnated_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '六岁那年，你在{location}玩耍时突然头痛欲裂。无数画面涌入脑海——你看到了一片战场，看到了一个与你面貌相同的人正在与天道对抗。',
      '{npc}为你检查了神识，脸色凝重："你的识海中有封印...不，不是封印，是记忆壁垒。有人在阻止你记起前世。"',
    ],
    effects: { special: 5 },
    flags: ['chain_reincarnated_childhood_1'],
    identityExclusive: 'reincarnated',
  },
  {
    id: 'cx_ie_reincarnated_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}遇到了一个黑衣人。他看到你的瞬间，跪地痛哭："主人...三千年了，我终于找到您了！"',
      '你开始觉醒前世的能力。不需要学习，你就知道如何结丹、如何凝婴——这些都是你前世走过的路。但你也开始被因果缠身。',
    ],
    effects: { strength: 6 },
    flags: ['chain_reincarnated_growth_0'],
    requiredFlags: ['chain_reincarnated_childhood_0'],
    identityExclusive: 'reincarnated',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_reincarnated_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你的前世宿敌——一位仙界大能的传人——下凡来找你。他说："前世你偷走了我师父的仙器，这一世我要讨回来。"',
      '{npc}告诉你一个秘密：天机阁一直在暗中保护转世仙人，因为每一个转世仙人都可能是打破"飞升封印"的关键。',
    ],
    effects: { strength: 6 },
    flags: ['chain_reincarnated_growth_1'],
    requiredFlags: ['chain_reincarnated_childhood_0'],
    identityExclusive: 'reincarnated',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_reincarnated_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已突破元婴期。但你也发现了一个可怕的真相：你的前世并非自然死亡，而是被仙界的某位大能暗杀！',
      '你在{location}的梦境中与前世的自己对话。他说："不要追寻我的过去，活出你自己的人生。"但你已经无法回头。',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_reincarnated_adult_0'],
    requiredFlags: ['chain_reincarnated_growth_0'],
    identityExclusive: 'reincarnated',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_reincarnated_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：彻底觉醒前世记忆，获得仙人的力量，但会失去今生的自我；或者封印前世记忆，做一个普通的元婴修士。',
    ],
    choices: [
      { text: '觉醒前世', successRate: 0.45, successText: '你选择了觉醒前世，从此踏上了一条不归路。', failText: '你选择了觉醒前世，但命运弄人，一切并未如你所愿。', effects: { strength: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_reincarnated_path'], failFlags: ['branch_identity_reincarnated_path_fail'] },
      { text: '封印记忆', successRate: 0.75, successText: '你选择了封印记忆，虽然道路不同，但终点未必更差。', failText: '你选择了封印记忆，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_reincarnated_new'], failFlags: ['branch_identity_reincarnated_new_fail'] },
    ],
    flags: ['chain_reincarnated_adult_1'],
    requiredFlags: ['chain_reincarnated_growth_0'],
    identityExclusive: 'reincarnated',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_reincarnated_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了觉醒。记忆如潮水般涌来——你前世是仙界"逍遥仙君"，因为发现了仙界的阴谋而被暗杀。那个阴谋就是：阻止凡人飞升，独占仙界资源！',
      '你体内的仙力完全觉醒。虽然你只有元婴期的修为，但你的神识已经达到了仙人的层次。你开始能看到凡界与仙界之间的"封印"。',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_reincarnated_special_0'],
    requiredFlags: ['chain_reincarnated_adult_0'],
    identityExclusive: 'reincarnated',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_reincarnated_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你以凡人之躯，向仙界宣战。虽然所有人都认为你疯了，但你心中只有一个信念：三千年前的仇，该报了。',
      '你在{location}留下了最后的话："我不是在为自己报仇。我是在为所有被仙界欺骗的凡人讨一个公道。"然后，你化作一道金光，冲向了天际。',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_reincarnated_special_1'],
    requiredFlags: ['chain_reincarnated_adult_0'],
    identityExclusive: 'reincarnated',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_spirit_body_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生时，{location}方圆百里的灵气疯狂涌入你体内。接生婆吓得跪地叩拜："灵体天成...这是传说中的先天灵体！"',
      '作为先天灵体，你不需要修炼就能自动吸收灵气。但你的肉身极其脆弱——一次普通的摔倒就可能骨折。{npc}说你是"琉璃做的天才"。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_spirit_body_childhood_0'],
    identityExclusive: 'spirit_body',
  },
  {
    id: 'cx_ie_spirit_body_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '五岁那年，你在{location}遭遇了一场暴风雨。雷电击中了你，但你非但没有受伤，反而将雷电之力吸入了体内！{npc}震惊地看着这一幕。',
      '你的灵体开始与天地元素共鸣。你可以在{location}感受到地下灵脉的流动，听到花草树木的"声音"。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_spirit_body_childhood_1'],
    identityExclusive: 'spirit_body',
  },
  {
    id: 'cx_ie_spirit_body_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你的灵体与{location}的一条灵脉产生了共鸣。你的修为一日千里，但肉身却越来越虚弱——灵气太浓郁，你的肉体承受不住了。',
      '{npc}为你诊断后叹息："先天灵体是上天的恩赐，也是诅咒。你的灵根足以修炼到化神，但你的肉身可能撑不到金丹。"',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_spirit_body_growth_0'],
    requiredFlags: ['chain_spirit_body_childhood_0'],
    identityExclusive: 'spirit_body',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_spirit_body_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '你开始寻找强化肉身的方法。{location}的古籍中记载了一种"元素化身"之术——放弃肉身，将自身化为纯粹的元素之灵。',
      '你在{location}遇到了一位器宗长老。他说："我有一个疯狂的想法——用通天灵宝为你的肉身重塑根基。但成功率不到一成。"',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_spirit_body_growth_1'],
    requiredFlags: ['chain_spirit_body_childhood_0'],
    identityExclusive: 'spirit_body',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_spirit_body_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你面临着生死抉择：你的肉身已经到达了极限，再不做出选择，你可能会在突破金丹时肉身崩溃。',
      '你在{location}的一次修炼中，肉身真的崩溃了——但你的灵体却没有消散，而是漂浮在空中，化作了一团纯粹的灵气。',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_spirit_body_adult_0'],
    requiredFlags: ['chain_spirit_body_growth_0'],
    identityExclusive: 'spirit_body',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_spirit_body_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：彻底元素化，放弃肉身成为元素之灵（获得强大力量但失去人类身份）；或者冒险重塑肉身（可能成功也可能彻底陨落）。',
    ],
    choices: [
      { text: '元素化', successRate: 0.4, successText: '你选择了元素化，从此踏上了一条不归路。', failText: '你选择了元素化，但命运弄人，一切并未如你所愿。', effects: { intelligence: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_spirit_body_path'], failFlags: ['branch_identity_spirit_body_path_fail'] },
      { text: '重塑肉身', successRate: 0.75, successText: '你选择了重塑肉身，虽然道路不同，但终点未必更差。', failText: '你选择了重塑肉身，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_spirit_body_new'], failFlags: ['branch_identity_spirit_body_new_fail'] },
    ],
    flags: ['chain_spirit_body_adult_1'],
    requiredFlags: ['chain_spirit_body_growth_0'],
    identityExclusive: 'spirit_body',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_spirit_body_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了重塑肉身。器宗长老用通天灵宝为你重塑了根基——你的新肉身虽然不如天生灵体完美，但足够坚固。更重要的是，你保留了与元素的共鸣能力。',
      '你成为了修仙界第一个"后天重塑的先天灵体"。你的经历为无数肉身有缺陷的修士带来了希望。',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_spirit_body_special_0'],
    requiredFlags: ['chain_spirit_body_adult_0'],
    identityExclusive: 'spirit_body',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_spirit_body_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你选择了元素化。放弃肉身的瞬间，你感受到了前所未有的自由——你成为了风，成为了雷，成为了天地间最纯粹的元素。',
      '百年后，修仙界出现了一个传说：每当暴风雨来临，{location}就会出现一道人形闪电，那是你在守护着这片土地。',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_spirit_body_special_1'],
    requiredFlags: ['chain_spirit_body_adult_0'],
    identityExclusive: 'spirit_body',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_artifact_spirit_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就对法宝有一种奇特的感应。在{location}的古董摊上，你随手拿起一块破铜烂铁，眼泪却不由自主地流了下来。',
      '作为器灵转世，你经常做一些奇怪的梦：你梦见自己变成了一柄剑，被一位白衣仙人握在手中，斩妖除魔。',
      '{npc}发现了你的异常。他仔细检查后，面色凝重："你的魂魄中有一道器灵印记...你不是普通人类，你是上古法宝转世为人！"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_artifact_spirit_childhood_0'],
    identityExclusive: 'artifact_spirit',
  },
  {
    id: 'cx_ie_artifact_spirit_02', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你终于确定了自己的"本体"——一柄名为"斩仙"的上古神剑，据说失落在了{location}的葬仙谷中。',
      '你踏上了寻找本体的旅途。在{location}，你遇到了器宗的人。他们也想找到斩仙剑，但目的是将其"回收"炼化。',
    ],
    effects: { strength: 6 },
    flags: ['chain_artifact_spirit_growth_0'],
    requiredFlags: ['chain_artifact_spirit_childhood_0'],
    identityExclusive: 'artifact_spirit',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_artifact_spirit_03', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你终于在{location}找到了斩仙剑的线索——但它并不在葬仙谷，而是在青云宗的禁地剑冢之中！',
      '{npc}告诉你一个秘密：斩仙剑的器灵并非只有一个。千年前，剑身被毁，器灵分裂成了三份。你，只是其中一份。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_artifact_spirit_growth_1'],
    requiredFlags: ['chain_artifact_spirit_childhood_0'],
    identityExclusive: 'artifact_spirit',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_artifact_spirit_04', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你闯入了青云宗剑冢。当你触碰到斩仙剑的碎片时，无数记忆涌入脑海——你看到了自己被毁的那一战，看到了主人临终前的托付。',
      '另外两份器灵转世也找到了你。一个是你的"兄弟"，一个是你的"姐妹"。你们三人合体，就能恢复斩仙剑的完整力量。',
    ],
    effects: { special: 8 },
    flags: ['chain_artifact_spirit_adult_0'],
    requiredFlags: ['chain_artifact_spirit_growth_0'],
    identityExclusive: 'artifact_spirit',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_artifact_spirit_05', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：与另外两份器灵合体，恢复斩仙剑（获得无上力量但失去独立人格）；或者保持独立，放弃成为神器的机会。',
    ],
    choices: [
      { text: '合体恢复', successRate: 0.5, successText: '你选择了合体恢复，从此踏上了一条不归路。', failText: '你选择了合体恢复，但命运弄人，一切并未如你所愿。', effects: { charisma: 10, health: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_artifact_spirit_path'], failFlags: ['branch_identity_artifact_spirit_path_fail'] },
      { text: '保持独立', successRate: 0.75, successText: '你选择了保持独立，虽然道路不同，但终点未必更差。', failText: '你选择了保持独立，却发现这条路比你想象的更加艰难。', effects: { intelligence: 8, special: 3 }, failEffects: { strength: -3 }, flags: ['branch_identity_artifact_spirit_new'], failFlags: ['branch_identity_artifact_spirit_new_fail'] },
    ],
    flags: ['chain_artifact_spirit_adult_1'],
    requiredFlags: ['chain_artifact_spirit_growth_0'],
    identityExclusive: 'artifact_spirit',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_artifact_spirit_06', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了保持独立。另外两份器灵尊重了你的选择，但将各自的"剑意"赠予了你。你虽不是斩仙剑，却拥有了斩仙的剑意。',
      '你以人类之身，修炼出了堪比斩仙剑的剑意。青云宗的玄天剑尊与你切磋后，感叹："此子剑意，不在斩仙之下。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_artifact_spirit_special_0'],
    requiredFlags: ['chain_artifact_spirit_adult_0'],
    identityExclusive: 'artifact_spirit',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_artifact_spirit_07', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你开创了"器灵剑道"——不需要法宝，以身为剑，以意御气。你的弟子遍布天下，都是曾经的"器灵转世"或"法宝残魂"。',
      '你在{location}立下了一块碑，上面写着："器灵非器，人亦非器。唯有剑意，永存天地。"',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_artifact_spirit_special_1'],
    requiredFlags: ['chain_artifact_spirit_adult_0'],
    identityExclusive: 'artifact_spirit',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_buddhist_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你自幼在{location}的金刚寺长大。每天清晨，你跟着师父们诵经、打坐、挑水。你问师父："为什么要修行？"师父说："为了不被心中的魔吞噬。"',
      '作为佛门俗家弟子，你天生具有"佛心通明"的特质。{npc}说你的慧根极深，若入佛门，必成一代高僧。但你心中始终有一丝对红尘的向往。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_buddhist_childhood_0'],
    identityExclusive: 'buddhist',
  },
  {
    id: 'cx_ie_buddhist_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '八岁那年，你在{location}救了一只受伤的小狐狸。师父让你放生，但你偷偷养了起来。小狐狸临走前，用人类的语言对你说："谢谢。"',
      '{npc}发现了你的秘密，却没有责罚你。他说："众生平等，妖亦有情。你的慈悲心，比你的慧根更珍贵。"',
    ],
    effects: { special: 5 },
    flags: ['chain_buddhist_childhood_1'],
    identityExclusive: 'buddhist',
  },
  {
    id: 'cx_ie_buddhist_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你被派下山历练。{location}的红尘俗世让你大开眼界——酒肉、美色、权力，这些都是寺中没有的东西。',
      '你在{location}遇到了一位魔道女子。她并不邪恶，只是因为修炼了魔道功法而被正道追杀。你们成为了朋友。',
    ],
    effects: { strength: 6 },
    flags: ['chain_buddhist_growth_0'],
    requiredFlags: ['chain_buddhist_childhood_0'],
    identityExclusive: 'buddhist',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_buddhist_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年的一个夜晚，你做了一个梦：梦中你站在佛与魔的分界线上，左边是金光万丈的佛祖，右边是妩媚动人的魔女。她们同时向你伸出手。',
      '{npc}发现了你的心魔。他说："佛魔一念，不是要你选择佛、排斥魔。而是要你在心中找到那个\'一\'——那个让佛魔共存的本心。"',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_buddhist_growth_1'],
    requiredFlags: ['chain_buddhist_childhood_0'],
    identityExclusive: 'buddhist',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_buddhist_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你面临着最艰难的抉择：金刚寺住持希望你能正式剃度，成为佛门正统；而那位魔道女子则希望你能跟她走，过自由自在的生活。',
      '你在{location}遇到了一个被魔气侵蚀的村庄。正道修士主张烧毁村庄以绝后患，但你看到了村民眼中的恐惧——他们并非魔道，只是受害者。',
    ],
    effects: { special: 8 },
    flags: ['chain_buddhist_adult_0'],
    requiredFlags: ['chain_buddhist_growth_0'],
    identityExclusive: 'buddhist',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_buddhist_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：立地成佛，剃度出家，获得无上佛法但斩断红尘；或者还俗入世，以俗家之身行佛之事。',
    ],
    choices: [
      { text: '剃度出家', successRate: 0.55, successText: '你选择了剃度出家，从此踏上了一条不归路。', failText: '你选择了剃度出家，但命运弄人，一切并未如你所愿。', effects: { strength: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_buddhist_path'], failFlags: ['branch_identity_buddhist_path_fail'] },
      { text: '还俗入世', successRate: 0.75, successText: '你选择了还俗入世，虽然道路不同，但终点未必更差。', failText: '你选择了还俗入世，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_buddhist_new'], failFlags: ['branch_identity_buddhist_new_fail'] },
    ],
    flags: ['chain_buddhist_adult_1'],
    requiredFlags: ['chain_buddhist_growth_0'],
    identityExclusive: 'buddhist',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_buddhist_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了还俗入世。你创立了"行者宗"——不建寺庙、不授戒律，行走天下，哪里有苦难就去哪里。',
      '你的"行者宗"越来越壮大。金刚寺的无相佛亲自来见你，说："我年轻时也想过走你的路，但我没有勇气。你有。"',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_buddhist_special_0'],
    requiredFlags: ['chain_buddhist_adult_0'],
    identityExclusive: 'buddhist',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_buddhist_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你在一处{location}发现了上古佛修的遗迹。遗迹中有一行字："佛不在西天，佛在众生心中。"你泪如雨下——这正是你一直相信的。',
      '后人称你为"入世佛"。你的雕像没有供奉在寺庙里，而是立在每一座城市的中心。百姓们说："他不是什么高高在上的佛，他是我们的邻居。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_buddhist_special_1'],
    requiredFlags: ['chain_buddhist_adult_0'],
    identityExclusive: 'buddhist',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_ghost_cultivator_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就看得见"别人看不见的东西"。在{location}的深夜，你常常看到透明的人影在街头游荡。你告诉父母，他们却以为你在说胡话。',
      '作为鬼修传人，你五岁那年生了一场大病，高烧不退。危急时刻，一位黑袍人出现在你的床边，说："你的阳寿已尽，但你的阴命未尽。跟我走吧。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_ghost_cultivator_childhood_0'],
    identityExclusive: 'ghost_cultivator',
  },
  {
    id: 'cx_ie_ghost_cultivator_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你被黑袍人带到了{location}的幽冥渊边缘。他说："从这里开始，你将学会如何与死者对话，如何在阴阳两界之间行走。"',
      '{npc}是你的师父，一位活了两百年的鬼修。他告诉你："鬼修不是邪道。我们守护的是那些无法安息的灵魂。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_ghost_cultivator_childhood_1'],
    identityExclusive: 'ghost_cultivator',
  },
  {
    id: 'cx_ie_ghost_cultivator_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你第一次独立完成"引魂"——将一位战死修士的魂魄从战场带回幽冥渊，让他得以安息。{npc}说："你做得很好。"',
      '你在{location}遇到了一个不愿离去的鬼魂。她是一个母亲，死于难产，放心不下自己的孩子。你答应帮她看一眼孩子。',
    ],
    effects: { strength: 6 },
    flags: ['chain_ghost_cultivator_growth_0'],
    requiredFlags: ['chain_ghost_cultivator_childhood_0'],
    identityExclusive: 'ghost_cultivator',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_ghost_cultivator_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '你偷偷潜入人间，找到了那个孩子。他已经被好心人收养，生活得很好。你将这个消息告诉了那位母亲的鬼魂，她终于释然，化作点点荧光消散。',
      '这件事让你明白了鬼修的意义。{npc}说："我们不是死神的使者，我们是遗憾的终结者。"',
    ],
    effects: { charisma: 4, luck: 3 },
    flags: ['chain_ghost_cultivator_growth_1'],
    requiredFlags: ['chain_ghost_cultivator_childhood_0'],
    identityExclusive: 'ghost_cultivator',
    chainPriority: 1,
  },
  {
    id: 'cx_ie_ghost_cultivator_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后的你已成为鬼修中的翘楚。但你也发现了一个秘密：幽冥渊的阴阳通道正在扩大，如果不阻止，阴界的鬼物将入侵凡界！',
      '你在{location}遇到了万鬼宗的宗主鬼帝。他告诉你："阴阳通道的扩大不是意外，是有人在背后操控。那个人，想打开两界之门。"',
    ],
    effects: { intelligence: 8 },
    flags: ['chain_ghost_cultivator_adult_0'],
    requiredFlags: ['chain_ghost_cultivator_growth_0'],
    identityExclusive: 'ghost_cultivator',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_ghost_cultivator_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：牺牲自己，用魂魄封印阴阳通道（拯救凡界但永世不得超生）；或者寻找其他方法，但风险是通道可能在找到方法前彻底打开。',
    ],
    choices: [
      { text: '牺牲封印', successRate: 0.45, successText: '你选择了牺牲封印，从此踏上了一条不归路。', failText: '你选择了牺牲封印，但命运弄人，一切并未如你所愿。', effects: { intelligence: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_ghost_cultivator_path'], failFlags: ['branch_identity_ghost_cultivator_path_fail'] },
      { text: '寻找他法', successRate: 0.75, successText: '你选择了寻找他法，虽然道路不同，但终点未必更差。', failText: '你选择了寻找他法，却发现这条路比你想象的更加艰难。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_ghost_cultivator_new'], failFlags: ['branch_identity_ghost_cultivator_new_fail'] },
    ],
    flags: ['chain_ghost_cultivator_adult_1'],
    requiredFlags: ['chain_ghost_cultivator_growth_0'],
    identityExclusive: 'ghost_cultivator',
    chainPriority: 2,
  },
  {
    id: 'cx_ie_ghost_cultivator_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了寻找他法。在调查过程中，你震惊地发现——幕后黑手竟然是你的师父！他打开阴阳通道，是为了让死去的妻子复活。',
      '你面对师父，泪如雨下。他说："我知道这是错的。但三百年了，我还是放不下她。"你理解他的痛苦，但你不能让他毁灭世界。',
    ],
    effects: { intelligence: 10 },
    flags: ['chain_ghost_cultivator_special_0'],
    requiredFlags: ['chain_ghost_cultivator_adult_0'],
    identityExclusive: 'ghost_cultivator',
    chainPriority: 3,
  },
  {
    id: 'cx_ie_ghost_cultivator_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '最终，你找到了第三条路：不需要打开阴阳通道，只需要让师娘的一缕残魂短暂显形，与师父做最后的告别。',
      '师父释然了，他与你一起封印了阴阳通道。临终前，他说："鬼修守护死者，但更重要的是...守护生者的心。"你接过了他的衣钵，成为了新的鬼修领袖。',
    ],
    effects: { strength: 8, luck: 5 },
    flags: ['chain_ghost_cultivator_special_1'],
    requiredFlags: ['chain_ghost_cultivator_adult_0'],
    identityExclusive: 'ghost_cultivator',
    chainPriority: 3,
  },
  {
    id: 'cx_te_01', category: 'trash_exclusive', minAge: 0, maxAge: 6, probability: 0.92,
    templates: [
      '灵根检测那日，{location}的检测石毫无反应。{npc}摇头叹息："无灵根之体，与仙道无缘。"全村人都用怜悯的目光看着你。',
      '作为无灵根之人，你只能看着同龄人在{location}引气入体。他们嘲笑你是"修仙界的废物"，连最基础的御物术都无法施展。',
    ],
    effects: { special: -5, strength: -2, intelligence: 3 },
    flags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'cx_te_02', category: 'trash_exclusive', minAge: 4, maxAge: 10, probability: 0.88,
    templates: [
      '你不甘心。每日凌晨，你在{location}的山顶对着朝阳挥拳一千次，直到双臂麻木。{npc}路过时皱眉："没有灵根，练这些有何用？"',
      '你在{location}的古旧书摊淘到了半本残破的《金刚淬体诀》。书页泛黄，开篇写道："无灵根者，当以肉身证道，以武入仙。"你如获至宝。',
    ],
    effects: { strength: 3, intelligence: 2, luck: 2 },
    flags: ['trash_childhood_1'],
    requiredFlags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'cx_te_03', category: 'trash_exclusive', minAge: 12, maxAge: 18, probability: 0.85,
    templates: [
      '你按照《金刚淬体诀》的方法，以妖兽之血淬炼肉身。第一次淬体时，剧痛让你昏死过去。醒来时，你发现皮肤下隐隐有金光流转。',
      '别的天才一日可完成的修炼，你需要一个月。但你在{location}日复一日，从未间断。{npc}偶然看到你的训练，震惊地说："这...这是上古体修之法？"',
    ],
    effects: { strength: 5, health: 3, special: 2 },
    flags: ['trash_growth_0'],
    requiredFlags: ['trash_childhood_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'cx_te_04', category: 'trash_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '你在{location}救了一位被妖兽重伤的散修。他感激之下，传授了你一套独门炼体之术——"九转霸体诀"。这是连大宗门都没有的秘法！',
      '{npc}被你的毅力打动，决定收你为记名弟子。他说："我这一生见过无数天才，但像你这样的傻子，还是第一个。"你终于有了师父。',
    ],
    effects: { strength: 7, health: 5, charisma: 2 },
    flags: ['trash_growth_1'],
    requiredFlags: ['trash_growth_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'cx_te_05', category: 'trash_exclusive', minAge: 18, maxAge: 25, probability: 0.75,
    templates: [
      '经过多年的苦修，你在{location}遇到了一个瓶颈——肉身强度已到达极限，再无法寸进。一位路过的老者告诉你："体修之路，需以天劫淬体。"',
      '你在{location}的瀑布下闭关三月，终于突破了第一重肉身桎梏。出水时，你一拳轰碎了千斤巨石——这一拳，没有任何灵力，只有纯粹的力量。',
    ],
    effects: { strength: 8, intelligence: 3, luck: 3 },
    flags: ['trash_growth_2'],
    requiredFlags: ['trash_growth_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'cx_te_06', category: 'trash_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '青云宗举办宗门大比，你以"旁听散修"的身份报名参加。所有人都嘲笑你："一个无灵根的废物，也配参加大比？"',
      '大比第一轮，你对上了筑基期修士。对方祭出飞剑，剑光如虹。你不躲不闪，一拳击出——飞剑碎裂，对手倒飞十丈，全场寂静。',
    ],
    effects: { strength: 8, charisma: 6, special: 3 },
    flags: ['trash_adult_0'],
    requiredFlags: ['trash_growth_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'cx_te_07', category: 'trash_exclusive', minAge: 30, maxAge: 40, probability: 0.72,
    templates: [
      '你的"以力破法"震惊了修仙界。{npc}说你是"万古以来第一个以无灵根之身击败筑基修士的人"。各大宗门开始重新审视"体修"这条被遗忘的道路。',
      '你在{location}建立了一座小小的"体修道场"，专门招收无灵根或有缺陷的孩子。你说："灵根决定起点，毅力决定终点。"',
    ],
    effects: { charisma: 7, intelligence: 5, luck: 3 },
    flags: ['trash_adult_1'],
    requiredFlags: ['trash_adult_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'cx_te_08', category: 'trash_exclusive', minAge: 35, maxAge: 45, probability: 0.68,
    templates: [
      '昔日嘲笑你的同村修士在{location}与你重逢。他依然是炼气期，而你已能硬撼金丹。他跪地痛哭："当年是我有眼无珠..."你将他扶起。',
      '{legend}的传承之地开启，你说服众人让你这个"无灵根的废物"也进去试试。他们抱着看笑话的心态同意了——但很快，他们就笑不出来了。',
    ],
    effects: { strength: 6, luck: 5, special: 4 },
    flags: ['trash_adult_2'],
    requiredFlags: ['trash_adult_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'cx_te_09', category: 'trash_exclusive', minAge: 28, maxAge: 42, probability: 0.65,
    templates: [
      '宗门大比的决赛上，你对上了青云宗的天才弟子。对方是金丹期，而你连灵根都没有。所有人都认为这是一场屠杀——但他们错了。',
      '比赛开始前，{npc}暗中塞给你一颗丹药："这是\'燃血丹\'，能短时间内爆发三倍肉身力量，但事后会损伤根基。用不用，你自己决定。"',
    ],
    effects: { strength: 3 },
    choices: [
      { text: '服用燃血丹，全力一战', successRate: 0.35, successText: '燃血丹的力量让你肉身暴涨，一拳轰碎了对方的护体法宝！全场震撼，万古未有！', failText: '燃血丹的反噬让你经脉断裂，虽然赢了比赛，但修为倒退三年', effects: { strength: 15, charisma: 10, special: 5, health: -20 }, failEffects: { strength: 5, charisma: 3, health: -30 }, flags: ['branch_trash_fight'], failFlags: ['branch_trash_fight_fail'] },
      { text: '拒绝丹药，以本真之力战斗', successRate: 0.65, successText: '你没有借助外力，仅凭肉身与对方周旋百招。虽然最终惜败，但你赢得了所有人的尊重！', failText: '你拒绝了丹药，但实力差距太大，被一招击败。众人摇头："果然，废物就是废物。"', effects: { charisma: 10, luck: 8, strength: 5 }, failEffects: { charisma: -5, health: -15 }, flags: ['branch_trash_persist'], failFlags: ['branch_trash_persist_fail'] },
    ],
    flags: ['trash_climax_0'],
    requiredFlags: ['trash_adult_1'],
    talentExclusive: 'trash',
    chainPriority: 2,
  },
  {
    id: 'cx_te_10', category: 'trash_exclusive', minAge: 35, maxAge: 50, probability: 0.6,
    templates: [
      '你在{location}遇到了一位神秘老者。他打量你许久，说："你的肉身已达凡人之极限。若想再进一步，需以\'天劫淬体\'——用肉身硬抗天劫，以雷霆之力重塑根基。"',
      '老者给了你两个选择：他可以帮你引动小天劫，用雷霆淬炼肉身（九死一生）；或者传你一套更稳妥的炼体之法（进展缓慢但安全）。',
    ],
    effects: { special: 3 },
    choices: [
      { text: '以天劫淬体，向死而生', successRate: 0.3, successText: '九九雷霆轰击肉身，你几度昏死又几度醒来。最终，雷霆之力与你的肉身完美融合——你成就了传说中的"雷霆霸体"！', failText: '天劫之力超出了你的承受极限。虽然侥幸不死，但肉身被毁大半，需要数十年才能恢复', effects: { strength: 20, special: 10, health: -25 }, failEffects: { health: -40, strength: 3 }, flags: ['branch_trash_transform'], failFlags: ['branch_trash_transform_fail'] },
      { text: '稳扎稳打，不求速成', successRate: 0.8, successText: '你选择了更稳妥的道路。虽然进展缓慢，但根基无比扎实。老者点头："大器晚成，方得始终。"', failText: '稳妥之路需要的时间远超你的寿元。你知道，自己可能等不到大成的那一天了', effects: { intelligence: 10, strength: 5, health: 5 }, failEffects: { intelligence: 3, luck: -3 }, flags: ['branch_trash_persist2'], failFlags: ['branch_trash_persist2_fail'] },
    ],
    flags: ['trash_climax_1'],
    requiredFlags: ['trash_climax_0'],
    talentExclusive: 'trash',
    chainPriority: 2,
  },
  {
    id: 'cx_te_11', category: 'trash_exclusive', minAge: 40, maxAge: 55, probability: 0.55,
    templates: [
      '你的故事传遍了修仙界。{location}的体修道场每天都有人慕名而来——不是天才，而是那些被判定为"废物"的孩子。',
      '{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。不是因为我更强，而是因为我从未停下。"',
    ],
    effects: { charisma: 10, luck: 5, special: 5 },
    flags: ['trash_climax_2'],
    requiredFlags: ['trash_climax_1'],
    talentExclusive: 'trash',
    chainPriority: 3,
  },
  {
    id: 'cx_te_12', category: 'trash_exclusive', minAge: 45, maxAge: 60, probability: 0.5,
    templates: [
      '你以肉身硬抗天劫，突破到了传说中的"肉身成圣"之境。没有灵根、没有法术，仅凭一拳，便能轰碎山岳！',
      '你成为了万古以来第一个以无灵根之躯飞升仙界的人。仙界的大门在你面前敞开，你回头看向凡界，那个在{location}被嘲笑的孩子，如今已是传说。',
    ],
    effects: { strength: 10, intelligence: 5, charisma: 10, special: 10 },
    flags: ['trash_legend'],
    requiredFlags: ['trash_climax_2'],
    talentExclusive: 'trash',
    chainPriority: 3,
  },
  {
    id: 'cx_te_13', category: 'trash_exclusive', minAge: 55, maxAge: 80, probability: 0.6,
    templates: [
      '你在{location}收徒传道，专门招收无灵根的孩子。你说："天赋决定起点，但毅力和选择决定终点。"',
      '你的弟子中有人开创了新的体修流派，有人以体修之身成为了大宗门长老。{npc}感叹："你一人之力，改变了一个时代的修仙格局。"',
    ],
    effects: { charisma: 8, intelligence: 5 },
    flags: ['trash_elder_0'],
    requiredFlags: ['trash_legend'],
    talentExclusive: 'trash',
  },
  {
    id: 'cx_te_14', category: 'trash_exclusive', minAge: 60, maxAge: 90, probability: 0.55,
    templates: [
      '大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。',
      '你微笑着说："如果重来一次，我还是会选择做那个无灵根的废物。因为正是\'废物\'二字，让我找到了属于自己的道。"',
    ],
    effects: { charisma: 6, health: -5 },
    flags: ['trash_elder_1'],
    requiredFlags: ['trash_elder_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'cx_te_15', category: 'trash_exclusive', minAge: 70, maxAge: 100, probability: 0.5,
    templates: [
      '你离世的那天，{location}下起了金色的雨。无数你曾经帮助过的人自发前来为你送行。',
      '你的灵魂没有进入轮回，而是化作了一道金光，融入了天地之间。后人传说，每当天才恃才傲物时，天上就会响起一声雷鸣——那是你在提醒他们：不要小看任何一个"废物"。',
    ],
    effects: { charisma: 10, luck: 10 },
    flags: ['trash_ending'],
    requiredFlags: ['trash_elder_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'cx_cultivation_07', category: 'cultivation', minAge: 18, maxAge: 30, probability: 0.92,
    templates: [
      '你在{location}闭关多年，终于触摸到了筑基期的门槛。{npc}告诉你："筑基是修仙的第一步。你将凡体化为灵体，从此踏上长生之路。突破需要悟性≥20、灵根≥15。"',
      '你的修为已达瓶颈，在{location}感应到了筑基期的契机。但突破之路九死一生，稍有不慎便可能道消身殒。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.65, successText: '你孤注一掷，将全部灵力灌注于丹田。刹那间，天地变色，{location}的灵气疯狂涌入你的体内——你成功了！你突破到了筑基期！', failText: '你全力冲击瓶颈，但灵力反噬，经脉寸断。虽然保住了性命，但修为大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 80 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail_1'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.9, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了筑基期。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 56 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_1', 'realm_breakthrough_1_steady'], failFlags: ['realm_fail_1_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_1'], failFlags: [] },
    ],
    flags: ['realm_attempt_1'],
    chainPriority: 5,
  },
  {
    id: 'cx_cultivation_08', category: 'cultivation', minAge: 20, maxAge: 50, probability: 0.7360000000000001,
    templates: [
      '你突破到筑基期的消息传遍了修仙界。{location}的修士们纷纷前来祝贺，你的名字被刻在了宗门的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从炼气到筑基期，你走了18年。这速度，在修仙界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_1'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 2,
  },
  {
    id: 'cx_cultivation_09', category: 'cultivation', minAge: 23, maxAge: 60, probability: 0.644,
    templates: [
      '上一次突破筑基期失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，修为甚至比以前更加精进。你再次感应到了筑基期的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.75, successText: '第二次冲击，你总结了上次的教训，一举突破到了筑基期！{location}的灵气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与筑基期无缘...', effects: { realm: 1, special: 5, maxAge: 80 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail2_1'] },
    ],
    flags: ['realm_retry_1'],
    requiredFlags: ['realm_fail_1'],
    chainPriority: 3,
  },
  {
    id: 'cx_cultivation_10', category: 'cultivation', minAge: 35, maxAge: 55, probability: 0.88,
    templates: [
      '你在{location}闭关多年，终于触摸到了金丹期的门槛。{npc}告诉你："金丹一成，寿元大增。你体内凝结出一颗璀璨金丹，法力浑厚数倍。突破需要悟性≥35、灵根≥30、体质≥20。"',
      '你的修为已达瓶颈，在{location}感应到了金丹期的契机。但突破之路九死一生，稍有不慎便可能道消身殒。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.55, successText: '你孤注一掷，将全部灵力灌注于丹田。刹那间，天地变色，{location}的灵气疯狂涌入你的体内——你成功了！你突破到了金丹期！', failText: '你全力冲击瓶颈，但灵力反噬，经脉寸断。虽然保住了性命，但修为大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 120 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail_2'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.8, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了金丹期。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 84 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_2', 'realm_breakthrough_2_steady'], failFlags: ['realm_fail_2_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_2'], failFlags: [] },
    ],
    flags: ['realm_attempt_2'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 5,
  },
  {
    id: 'cx_cultivation_11', category: 'cultivation', minAge: 37, maxAge: 75, probability: 0.7040000000000001,
    templates: [
      '你突破到金丹期的消息传遍了修仙界。{location}的修士们纷纷前来祝贺，你的名字被刻在了宗门的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从炼气到金丹期，你走了35年。这速度，在修仙界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_2'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 2,
  },
  {
    id: 'cx_cultivation_12', category: 'cultivation', minAge: 40, maxAge: 85, probability: 0.616,
    templates: [
      '上一次突破金丹期失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，修为甚至比以前更加精进。你再次感应到了金丹期的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.65, successText: '第二次冲击，你总结了上次的教训，一举突破到了金丹期！{location}的灵气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与金丹期无缘...', effects: { realm: 1, special: 5, maxAge: 120 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail2_2'] },
    ],
    flags: ['realm_retry_2'],
    requiredFlags: ['realm_fail_2'],
    chainPriority: 3,
  },
  {
    id: 'cx_cultivation_13', category: 'cultivation', minAge: 60, maxAge: 90, probability: 0.85,
    templates: [
      '你在{location}闭关多年，终于触摸到了元婴期的门槛。{npc}告诉你："元婴出世，相当于第二条命。即使肉身被毁，元婴也可夺舍重生。突破需要悟性≥50、灵根≥45。"',
      '你的修为已达瓶颈，在{location}感应到了元婴期的契机。但突破之路九死一生，稍有不慎便可能道消身殒。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.45, successText: '你孤注一掷，将全部灵力灌注于丹田。刹那间，天地变色，{location}的灵气疯狂涌入你的体内——你成功了！你突破到了元婴期！', failText: '你全力冲击瓶颈，但灵力反噬，经脉寸断。虽然保住了性命，但修为大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 200 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail_3'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.7, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了元婴期。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 140 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_3', 'realm_breakthrough_3_steady'], failFlags: ['realm_fail_3_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_3'], failFlags: [] },
    ],
    flags: ['realm_attempt_3'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 5,
  },
  {
    id: 'cx_cultivation_14', category: 'cultivation', minAge: 62, maxAge: 110, probability: 0.68,
    templates: [
      '你突破到元婴期的消息传遍了修仙界。{location}的修士们纷纷前来祝贺，你的名字被刻在了宗门的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从炼气到元婴期，你走了60年。这速度，在修仙界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_3'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 2,
  },
  {
    id: 'cx_cultivation_15', category: 'cultivation', minAge: 65, maxAge: 120, probability: 0.595,
    templates: [
      '上一次突破元婴期失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，修为甚至比以前更加精进。你再次感应到了元婴期的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.55, successText: '第二次冲击，你总结了上次的教训，一举突破到了元婴期！{location}的灵气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与元婴期无缘...', effects: { realm: 1, special: 5, maxAge: 200 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail2_3'] },
    ],
    flags: ['realm_retry_3'],
    requiredFlags: ['realm_fail_3'],
    chainPriority: 3,
  },
  {
    id: 'cx_cultivation_16', category: 'cultivation', minAge: 100, maxAge: 160, probability: 0.82,
    templates: [
      '你在{location}闭关多年，终于触摸到了化神期的门槛。{npc}告诉你："化神期修士已能感应天地法则，一念之间可引动天地异象。突破需要悟性≥70、灵根≥60。"',
      '你的修为已达瓶颈，在{location}感应到了化神期的契机。但突破之路九死一生，稍有不慎便可能道消身殒。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.35, successText: '你孤注一掷，将全部灵力灌注于丹田。刹那间，天地变色，{location}的灵气疯狂涌入你的体内——你成功了！你突破到了化神期！', failText: '你全力冲击瓶颈，但灵力反噬，经脉寸断。虽然保住了性命，但修为大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 300 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail_4'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.6, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了化神期。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 210 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_4', 'realm_breakthrough_4_steady'], failFlags: ['realm_fail_4_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_4'], failFlags: [] },
    ],
    flags: ['realm_attempt_4'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 5,
  },
  {
    id: 'cx_cultivation_17', category: 'cultivation', minAge: 102, maxAge: 180, probability: 0.656,
    templates: [
      '你突破到化神期的消息传遍了修仙界。{location}的修士们纷纷前来祝贺，你的名字被刻在了宗门的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从炼气到化神期，你走了100年。这速度，在修仙界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_4'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 2,
  },
  {
    id: 'cx_cultivation_18', category: 'cultivation', minAge: 105, maxAge: 190, probability: 0.574,
    templates: [
      '上一次突破化神期失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，修为甚至比以前更加精进。你再次感应到了化神期的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.44999999999999996, successText: '第二次冲击，你总结了上次的教训，一举突破到了化神期！{location}的灵气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与化神期无缘...', effects: { realm: 1, special: 5, maxAge: 300 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail2_4'] },
    ],
    flags: ['realm_retry_4'],
    requiredFlags: ['realm_fail_4'],
    chainPriority: 3,
  },
  {
    id: 'cx_cultivation_19', category: 'cultivation', minAge: 200, maxAge: 350, probability: 0.78,
    templates: [
      '你在{location}闭关多年，终于触摸到了渡劫期的门槛。{npc}告诉你："渡劫期需直面天劫。九死一生，但一旦成功，便是半步仙人。突破需要悟性≥90、灵根≥80、体质≥60。"',
      '你的修为已达瓶颈，在{location}感应到了渡劫期的契机。但突破之路九死一生，稍有不慎便可能道消身殒。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.3, successText: '你孤注一掷，将全部灵力灌注于丹田。刹那间，天地变色，{location}的灵气疯狂涌入你的体内——你成功了！你突破到了渡劫期！', failText: '你全力冲击瓶颈，但灵力反噬，经脉寸断。虽然保住了性命，但修为大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 400 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail_5'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.55, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了渡劫期。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 280 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_5', 'realm_breakthrough_5_steady'], failFlags: ['realm_fail_5_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_5'], failFlags: [] },
    ],
    flags: ['realm_attempt_5'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 5,
  },
  {
    id: 'cx_cultivation_20', category: 'cultivation', minAge: 202, maxAge: 370, probability: 0.6240000000000001,
    templates: [
      '你突破到渡劫期的消息传遍了修仙界。{location}的修士们纷纷前来祝贺，你的名字被刻在了宗门的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从炼气到渡劫期，你走了200年。这速度，在修仙界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_5'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 2,
  },
  {
    id: 'cx_cultivation_21', category: 'cultivation', minAge: 205, maxAge: 380, probability: 0.5459999999999999,
    templates: [
      '上一次突破渡劫期失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，修为甚至比以前更加精进。你再次感应到了渡劫期的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.4, successText: '第二次冲击，你总结了上次的教训，一举突破到了渡劫期！{location}的灵气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与渡劫期无缘...', effects: { realm: 1, special: 5, maxAge: 400 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail2_5'] },
    ],
    flags: ['realm_retry_5'],
    requiredFlags: ['realm_fail_5'],
    chainPriority: 3,
  },
  {
    id: 'cx_cultivation_22', category: 'cultivation', minAge: 400, maxAge: 550, probability: 0.75,
    templates: [
      '你在{location}闭关多年，终于触摸到了大乘期的门槛。{npc}告诉你："大乘期已触摸到仙界门槛。只需等待仙界通道开启，便可飞升。突破需要灵根≥100。"',
      '你的修为已达瓶颈，在{location}感应到了大乘期的契机。但突破之路九死一生，稍有不慎便可能道消身殒。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.25, successText: '你孤注一掷，将全部灵力灌注于丹田。刹那间，天地变色，{location}的灵气疯狂涌入你的体内——你成功了！你突破到了大乘期！', failText: '你全力冲击瓶颈，但灵力反噬，经脉寸断。虽然保住了性命，但修为大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 800 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail_6'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.5, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了大乘期。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 560 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_6', 'realm_breakthrough_6_steady'], failFlags: ['realm_fail_6_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_6'], failFlags: [] },
    ],
    flags: ['realm_attempt_6'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 5,
  },
  {
    id: 'cx_cultivation_23', category: 'cultivation', minAge: 402, maxAge: 570, probability: 0.6000000000000001,
    templates: [
      '你突破到大乘期的消息传遍了修仙界。{location}的修士们纷纷前来祝贺，你的名字被刻在了宗门的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从炼气到大乘期，你走了400年。这速度，在修仙界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_6'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 2,
  },
  {
    id: 'cx_cultivation_24', category: 'cultivation', minAge: 405, maxAge: 580, probability: 0.5249999999999999,
    templates: [
      '上一次突破大乘期失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，修为甚至比以前更加精进。你再次感应到了大乘期的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.35, successText: '第二次冲击，你总结了上次的教训，一举突破到了大乘期！{location}的灵气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与大乘期无缘...', effects: { realm: 1, special: 5, maxAge: 800 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail2_6'] },
    ],
    flags: ['realm_retry_6'],
    requiredFlags: ['realm_fail_6'],
    chainPriority: 3,
  },
  {
    id: 'cx_cultivation_25', category: 'cultivation', minAge: 600, maxAge: 800, probability: 0.7,
    templates: [
      '你在{location}闭关多年，终于触摸到了飞升的门槛。{npc}告诉你："破碎虚空，羽化飞升。从此脱离凡界，进入仙界。突破需要灵根≥120、悟性≥100。"',
      '你的修为已达瓶颈，在{location}感应到了飞升的契机。但突破之路九死一生，稍有不慎便可能道消身殒。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.2, successText: '你孤注一掷，将全部灵力灌注于丹田。刹那间，天地变色，{location}的灵气疯狂涌入你的体内——你成功了！你突破到了飞升！', failText: '你全力冲击瓶颈，但灵力反噬，经脉寸断。虽然保住了性命，但修为大跌，需要数十年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 9000 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail_7'] },
      { text: '稳扎稳打，徐徐图之', successRate: 0.45, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了飞升。', failText: '你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 6300 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_7', 'realm_breakthrough_7_steady'], failFlags: ['realm_fail_7_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_7'], failFlags: [] },
    ],
    flags: ['realm_attempt_7'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 5,
  },
  {
    id: 'cx_cultivation_26', category: 'cultivation', minAge: 602, maxAge: 820, probability: 0.5599999999999999,
    templates: [
      '你突破到飞升的消息传遍了修仙界。{location}的修士们纷纷前来祝贺，你的名字被刻在了宗门的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从炼气到飞升，你走了600年。这速度，在修仙界已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_7'],
    requiredFlags: ['realm_breakthrough_7'],
    chainPriority: 2,
  },
  {
    id: 'cx_cultivation_27', category: 'cultivation', minAge: 605, maxAge: 830, probability: 0.48999999999999994,
    templates: [
      '上一次突破飞升失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，修为甚至比以前更加精进。你再次感应到了飞升的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 0.30000000000000004, successText: '第二次冲击，你总结了上次的教训，一举突破到了飞升！{location}的灵气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与飞升无缘...', effects: { realm: 1, special: 5, maxAge: 9000 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail2_7'] },
    ],
    flags: ['realm_retry_7'],
    requiredFlags: ['realm_fail_7'],
    chainPriority: 3,
  },
];
