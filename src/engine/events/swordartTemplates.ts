import type { EventTemplate } from './types';

// 浮空要塞 — Sword Art inspired event templates
export const swordartTemplates: EventTemplate[] = [
  // Childhood
  {
    id: 'sa_ch_01', category: 'childhood', minAge: 0, maxAge: 3, probability: 0.04,
    templates: [
      '你醒来时发现自己躺在{location}的石板上，面前浮现出一行发光的文字："欢迎来到浮空要塞，勇士。"{npc}惊讶地看着你，说你是百年一遇的天才。',
      '你降生的瞬间，{location}的系统钟声响了整整七声。{npc}跪地叩拜："传说中的「星纹之子」出现了！"',
      '你的第一声啼哭触发了{location}的隐藏机关，一把古老的剑从地底升起，落入你的怀中。',
    ],
    effects: { luck: 10, special: 8, strength: 5 },
  },
  {
    id: 'sa_ch_02', category: 'childhood', minAge: 2, maxAge: 7, probability: 0.15,
    templates: [
      '你在{location}玩耍时，体内突然涌出一股热流。{npc}惊讶地发现你竟是剑技亲和之资！',
      '三岁时，你在{location}无意间触发了古老的检测水晶，光芒比所有人都亮。',
      '{npc}为你进行资质测试，{legend}的印记在你身上一闪而逝——你是被选中的人。',
    ],
    effects: { special: 6, intelligence: 4 },
  },
  {
    id: 'sa_ch_03', category: 'childhood', minAge: 4, maxAge: 9, probability: 0.35,
    templates: [
      '你在{location}救了一只受伤的小兽，它其实是{legend}的化身，临走前留下了一枚晶核。',
      '{npc}在你满月时送了一块剑穗，后来你发现那是一件上古法器的碎片。',
      '你从小就能看见别人看不见的{legend}幻影，{npc}说这是剑技初现的征兆。',
      '你在{location}挖到了一坛古酿，喝了一口后浑身舒畅，经脉隐隐发热。',
    ],
    effects: { special: 4 },
  },
  {
    id: 'sa_ch_04', category: 'childhood', minAge: 0, maxAge: 6, probability: 0.52,
    templates: [
      '你生在普通人家，每天在{location}玩耍，日子平淡但快乐。',
      '{npc}教你读书识字，你学得有模有样。',
      '你在{location}认识了几个玩伴，度过了无忧无虑的童年。',
      '家里虽然不富裕，但{npc}总是把最好的留给你。',
    ],
    effects: { charisma: 2, luck: 1 },
  },
  {
    id: 'sa_ch_05', category: 'childhood', minAge: 3, maxAge: 10, probability: 0.73,
    templates: [
      '你在{location}帮{npc}干活，学会了很多生活技能。',
      '你的身体比同龄人强壮，{npc}说你是干农活的好料子。',
      '你喜欢在{location}发呆，常常一坐就是一整天。',
      '{npc}给你讲了一个关于{legend}的故事，你听得入了迷。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },

  // Growth
  {
    id: 'sa_gr_01', category: 'growth', minAge: 15, maxAge: 20, probability: 0.035,
    templates: [
      '你在{location}闭关三日，出关时眼中精光四射——你竟在战斗中顿悟了{legend}的传承！',
      '一场雷雨天，你在{location}被系统闪电击中非但没死，反而解锁了隐藏剑技！',
      '{legend}的残魂在{location}与你相遇，将毕生感悟传授于你。',
    ],
    effects: { intelligence: 10, special: 8, strength: 5 },
  },
  {
    id: 'sa_gr_02', category: 'growth', minAge: 14, maxAge: 22, probability: 0.145,
    templates: [
      '你在{location}苦修三年，终于突破了困扰多年的瓶颈，实力大增！',
      '{npc}带你外出历练，你在{location}击败了一个强敌，获得了珍贵的战利品。',
      '你发现了{legend}留下的试炼场，通过考验后获得了意想不到的收获。',
    ],
    effects: { strength: 6, special: 5 },
  },
  {
    id: 'sa_gr_03', category: 'growth', minAge: 13, maxAge: 24, probability: 0.33,
    templates: [
      '你在{location}遇到了一生的宿敌，你们不打不相识，反而成为了朋友。',
      '{npc}传授你一项绝技，你花了整整一年才学会，但威力惊人。',
      '你在{location}救了一个被追杀的人，他为了报答你，送了一件宝物。',
      '你和同辈在{location}比试，虽然输了但收获巨大。',
    ],
    effects: { strength: 4, luck: 2 },
  },
  {
    id: 'sa_gr_04', category: 'growth', minAge: 13, maxAge: 20, probability: 0.56,
    templates: [
      '你每天在{location}勤奋练习，虽然进步缓慢但根基扎实。',
      '{npc}督促你修炼，你不敢懈怠。',
      '你在{location}读了很多书，眼界开阔了不少。',
      '平平淡淡的一年，你在{location}默默积累着。',
    ],
    effects: { intelligence: 2, strength: 2 },
  },
  {
    id: 'sa_gr_05', category: 'growth', minAge: 16, maxAge: 25, probability: 0.75,
    templates: [
      '你在{location}结交了一些朋友，互相切磋进步。',
      '{npc}给你讲了很多前辈的故事，你深受启发。',
      '你在{location}处理了一些杂务，锻炼了自己的能力。',
      '这一年没什么特别的事发生，但你感觉自己在慢慢变强。',
    ],
    effects: { charisma: 2, luck: 2 },
  },

  // Adult
  {
    id: 'sa_ad_01', category: 'adult', minAge: 28, maxAge: 40, probability: 0.17,
    templates: [
      '你在{location}开宗立派，广收门徒，一时间名声大噪。',
      '你参与了{legend}相关的大规模事件，在关键时刻力挽狂澜。',
      '你在{location}建立了属于自己的势力，各方强者纷纷来投。',
    ],
    effects: { charisma: 8, strength: 5, special: 5 },
  },
  {
    id: 'sa_ad_02', category: 'adult', minAge: 26, maxAge: 45, probability: 0.3,
    templates: [
      '你在{location}收下了第一个弟子，将自己的所学倾囊相授。',
      '你和宿敌在{location}进行了最终决战，胜负难分。',
      '你成功炼制/制造了传说中的物品，引起了不小的轰动。',
    ],
    effects: { charisma: 6, luck: 3 },
  },
  {
    id: 'sa_ad_03', category: 'adult', minAge: 26, maxAge: 50, probability: 0.53,
    templates: [
      '你在{location}处理日常事务，势力稳步发展。',
      '{npc}来找你帮忙，你出手解决了他的难题。',
      '你在{location}度过了平静的一年，修为稳步提升。',
      '平平淡淡的一年，你在{location}默默修炼。',
    ],
    effects: { strength: 2, intelligence: 2, special: 2 },
  },

  // Elder
  {
    id: 'sa_el_01', category: 'elder', minAge: 50, maxAge: 120, probability: 0.6,
    templates: [
      '你在{location}钻研更高阶的剑技理论，试图突破当前等级的限制。',
      '你游历浮空要塞，在{location}见识了各种奇异的剑技现象，眼界大开。',
      '你开始招收学徒，在{location}传授毕生所学的剑术知识。',
    ],
    effects: { intelligence: 3, special: 2 },
  },
  {
    id: 'sa_el_02', category: 'elder', minAge: 100, maxAge: 220, probability: 0.36,
    templates: [
      '你的剑技造诣已臻巅峰，成为了{location}的传说级大剑士。',
      '{npc}专程从顶层赶来，希望你将研究成果贡献给攻略组。',
      '你将毕生剑技心得整理成《剑技全书》，存放在{location}的图书馆中。',
    ],
    effects: { intelligence: 8, charisma: 5 },
  },
  {
    id: 'sa_el_03', category: 'elder', minAge: 200, maxAge: 400, probability: 0.27,
    templates: [
      '你感应到了顶层花园的召唤，在{location}准备进行最终的攀登仪式。',
      '你回顾一生的剑技研究，在{location}寻找触及顶层花园的契机。',
      '{npc}带来消息：通往第100层的隐藏通路可能开启。',
    ],
    effects: { special: 10, intelligence: 5 },
  },
  {
    id: 'sa_el_04', category: 'elder', minAge: 400, maxAge: 700, probability: 0.16,
    templates: [
      '你已是传说中的贤者，在{location}静待成为解放者的那一刻。',
      '你将毕生对剑技本质的感悟刻入永恒水晶，留给后世有缘人。',
      '{npc}问你为何还不前往顶层，你笑答："我在等一个值得托付剑技火种的学徒。"',
    ],
    effects: { charisma: 10, special: 5 },
  },

  // Combat
  {
    id: 'sa_cb_01', category: 'combat', minAge: 20, maxAge: 40, probability: 0.04,
    templates: [
      '你在{location}以一己之力对抗十位同阶强者，最终大获全胜，一战成名！',
      '{legend}的敌人找上了你，你在{location}展开惊天大战，竟越级将其斩杀！',
      '你为了保护{location}的居民，独自对抗入侵的{legend}军团，创造了不可能的奇迹。',
    ],
    effects: { strength: 12, charisma: 8, health: -10 },
  },
  {
    id: 'sa_cb_02', category: 'combat', minAge: 18, maxAge: 45, probability: 0.16,
    templates: [
      '你参与了一场改变{location}格局的大规模战争，立下赫赫战功。',
      '{npc}挑战你的权威，你们在{location}大战三百回合，最终你险胜一招。',
      '你在{location}发现了{legend}留下的试炼场，通过了生死考验。',
    ],
    effects: { strength: 8, charisma: 4, health: -5 },
  },
  {
    id: 'sa_cb_03', category: 'combat', minAge: 15, maxAge: 35, probability: 0.29,
    templates: [
      '你在{location}遭遇强敌，展开了一场生死搏斗，最终险胜。',
      '你和{npc}在{location}切磋，双方都获益匪浅。',
      '你为了保护同伴，在{location}与敌人激战，受了轻伤。',
    ],
    effects: { strength: 5, health: -3 },
  },
  {
    id: 'sa_cb_04', category: 'combat', minAge: 25, maxAge: 50, probability: 0.43,
    templates: [
      '你在{location}参与了一场小规模冲突，表现出色。',
      '{npc}偷袭你，你在{location}勉强将其击退。',
      '你在{location}发现了敌人的据点，果断出击。',
    ],
    effects: { strength: 4, luck: 2 },
  },
  {
    id: 'sa_cb_05', category: 'combat', minAge: 15, maxAge: 40, probability: 0.57,
    templates: [
      '你在{location}进行了日常训练，技艺略有精进。',
      '你和同伴在{location}对练，互相学习。',
      '你在{location}演练新学的招式，逐渐熟练。',
    ],
    effects: { strength: 2 },
  },
  {
    id: 'sa_cb_06', category: 'combat', minAge: 30, maxAge: 60, probability: 0.7,
    templates: [
      '你在{location}指导后辈战斗技巧，自己也有所感悟。',
      '一场友好的比试在{location}举行，你获得了不错的名次。',
      '你在{location}观摩高手对决，学到了不少实战经验。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },

  // Romance
  {
    id: 'sa_rm_01', category: 'romance', minAge: 18, maxAge: 30, probability: 0.038,
    templates: [
      '你在{location}与{npc}相遇的瞬间，天地变色，{legend}的预言应验——你们是三生石上的命定之人。',
      '{npc}为了救你，不惜耗尽毕生修为。你跪在{location}发誓：此生不负。',
      '你们的故事被{legend}记载，成为了{location}永恒的传说。',
    ],
    effects: { charisma: 10, luck: 8, health: 5 },
  },
  {
    id: 'sa_rm_02', category: 'romance', minAge: 20, maxAge: 35, probability: 0.11,
    templates: [
      '你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。',
      '{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。',
      '你们经历了{legend}的考验，感情反而更加坚不可摧。',
    ],
    effects: { charisma: 6, luck: 4 },
  },
  {
    id: 'sa_rm_03', category: 'romance', minAge: 16, maxAge: 30, probability: 0.31,
    templates: [
      '你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。',
      '你和{npc}在{location}月下相会，互诉衷肠。',
      '{npc}因为你的才华而倾心，主动向你示好。',
    ],
    effects: { charisma: 4, luck: 3 },
  },
  {
    id: 'sa_rm_04', category: 'romance', minAge: 25, maxAge: 40, probability: 0.39,
    templates: [
      '你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。',
      '{npc}送你一件定情信物，你珍藏在身边。',
      '你们一起在{location}经历了危险，感情更加深厚。',
    ],
    effects: { charisma: 3, luck: 2 },
  },
  {
    id: 'sa_rm_05', category: 'romance', minAge: 20, maxAge: 45, probability: 0.57,
    templates: [
      '你在{location}认识了一个有趣的人，但关系尚不明确。',
      '{npc}对你有些好感，但你还没想好如何回应。',
      '你在{location}参加了一场聚会，结识了不少异性。',
    ],
    effects: { charisma: 2 },
  },
  {
    id: 'sa_rm_06', category: 'romance', minAge: 30, maxAge: 50, probability: 0.73,
    templates: [
      '你和{npc}保持着朋友以上、恋人未满的关系。',
      '你在{location}看到了别人恩爱的场景，心中有些羡慕。',
      '这一年感情上没有太大的波澜，你专注于其他事情。',
    ],
    effects: { luck: 1 },
  },

  // Cultivation (剑技修炼)
  {
    id: 'sa_cult_01', category: 'cultivation', minAge: 40, maxAge: 70, probability: 0.06,
    templates: [
      '你在{location}闭关九九八十一天，出关时天地共鸣，你已触摸到了{legend}的境界！',
      '你的剑技达到了前所未有的高度，{location}的灵气因为你而沸腾。',
      '{legend}的虚影亲自降临{location}，为你指点大道。',
    ],
    effects: { special: 12, intelligence: 10, strength: 5 },
  },
  {
    id: 'sa_cult_02', category: 'cultivation', minAge: 30, maxAge: 60, probability: 0.14,
    templates: [
      '你成功将{legend}的功法融会贯通，实力暴涨！',
      '你在{location}经历了一场奇遇，修为大涨，连{npc}都震惊不已。',
      '你突破了困扰多年的瓶颈，{location}的天地异象持续了三日三夜。',
    ],
    effects: { special: 8, intelligence: 5 },
  },
  {
    id: 'sa_cult_03', category: 'cultivation', minAge: 20, maxAge: 50, probability: 0.28,
    templates: [
      '你在{location}闭关修炼，领悟了新的境界。',
      '{npc}传授你一项绝技，你勤加练习，终于大成。',
      '你在{location}发现了一处灵气充沛的宝地，修炼事半功倍。',
    ],
    effects: { special: 5, intelligence: 3 },
  },
  {
    id: 'sa_cult_04', category: 'cultivation', minAge: 35, maxAge: 65, probability: 0.38,
    templates: [
      '你在修炼中遇到了瓶颈，{npc}指点你突破。',
      '你在{location}经历了一场奇遇，修为有所精进。',
      '你成功炼制/制造了辅助修炼的物品，效果显著。',
    ],
    effects: { special: 4, strength: 2 },
  },
  {
    id: 'sa_cult_05', category: 'cultivation', minAge: 13, maxAge: 40, probability: 0.51,
    templates: [
      '你在{location}按部就班地修炼，虽然没有突破但根基更加稳固。',
      '{npc}检查了你的修炼进度，表示满意。',
      '你在{location}研读剑技秘籍，对一些招式有了新的理解。',
    ],
    effects: { special: 2, intelligence: 1 },
  },
  {
    id: 'sa_cult_06', category: 'cultivation', minAge: 40, maxAge: 80, probability: 0.68,
    templates: [
      '你在{location}巩固已有的修为，为下一次突破做准备。',
      '这一年修炼进度平平，但你没有气馁。',
      '{npc}提醒你不可急于求成，你虚心接受。',
    ],
    effects: { special: 2 },
  },

  // Exploration
  {
    id: 'sa_ex_01', category: 'exploration', minAge: 25, maxAge: 50, probability: 0.06,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的核心传承，获得了改变命运的机缘！',
      '你在{location}找到了通往另一个维度的入口，{legend}的秘密向你敞开。',
      '你解开了一个困扰世人万年的谜题，{location}的真相让你震惊。',
    ],
    effects: { luck: 10, intelligence: 8, special: 6 },
  },
  {
    id: 'sa_ex_02', category: 'exploration', minAge: 20, maxAge: 45, probability: 0.12,
    templates: [
      '你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。',
      '你探索了一处危险的{location}，九死一生后带回了珍贵的宝物。',
      '{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。',
    ],
    effects: { luck: 6, strength: 4 },
  },
  {
    id: 'sa_ex_03', category: 'exploration', minAge: 15, maxAge: 40, probability: 0.3,
    templates: [
      '你深入{location}探险，发现了未知的秘密。',
      '你在{location}找到了一些有价值的物品，收获颇丰。',
      '你在{location}迷路了，却意外发现了一处隐蔽的洞天福地。',
    ],
    effects: { luck: 4, strength: 2 },
  },
  {
    id: 'sa_ex_04', category: 'exploration', minAge: 30, maxAge: 55, probability: 0.43,
    templates: [
      '你在{location}发现了一些古老的壁画，记录着失落的文明。',
      '你探索了一处废弃的{location}，找到了一些有用的物资。',
      '{npc}带你进入了一个秘密的{location}，你大开眼界。',
    ],
    effects: { intelligence: 3, luck: 3 },
  },
  {
    id: 'sa_ex_05', category: 'exploration', minAge: 13, maxAge: 35, probability: 0.57,
    templates: [
      '你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。',
      '你跟着{npc}去{location}采集了一些材料。',
      '你在{location}发现了一些普通的草药，聊胜于无。',
    ],
    effects: { luck: 2 },
  },
  {
    id: 'sa_ex_06', category: 'exploration', minAge: 35, maxAge: 70, probability: 0.73,
    templates: [
      '你在{location}进行了常规的巡查，一切正常。',
      '你重访了以前去过的{location}，有了一些新的发现。',
      '你在{location}休息了一段时间，养精蓄锐。',
    ],
    effects: { health: 2 },
  },

  // World Story
  {
    id: 'sa_ws_01', category: 'world_story', minAge: 40, maxAge: 70, probability: 0.055,
    templates: [
      '{legend}的封印彻底破碎，整个世界陷入了前所未有的动荡，你被卷入了漩涡中心！',
      '一场席卷整个浮空要塞的大战爆发了，{location}首当其冲，你必须做出选择。',
      '世界的规则开始改变，{legend}的意志降临，所有人都受到了影响。',
    ],
    effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 },
  },
  {
    id: 'sa_ws_02', category: 'world_story', minAge: 30, maxAge: 60, probability: 0.11,
    templates: [
      '你发现{location}隐藏着改变世界的秘密，各方势力为此展开了明争暗斗。',
      '{npc}告诉你一个关于世界起源的惊天秘密，你的世界观被彻底颠覆。',
      '传说中的{legend}即将降临，所有人都在做准备，{location}的气氛紧张到了极点。',
    ],
    effects: { intelligence: 6, charisma: 4 },
  },
  {
    id: 'sa_ws_03', category: 'world_story', minAge: 25, maxAge: 50, probability: 0.3,
    templates: [
      '{location}附近发生了局部冲突，你不得不卷入其中。',
      '{npc}带来了一个重要的消息，可能影响到{location}的未来。',
      '你注意到了{location}的一些异常现象，似乎有什么大事要发生。',
    ],
    effects: { charisma: 3, luck: 3 },
  },
  {
    id: 'sa_ws_04', category: 'world_story', minAge: 20, maxAge: 45, probability: 0.58,
    templates: [
      '你听到了一些关于{legend}的传闻，但真假难辨。',
      '{location}发生了一些小变化，但你没有太在意。',
      '{npc}跟你聊了聊最近的时事，你表示关注。',
    ],
    effects: { intelligence: 2 },
  },
  {
    id: 'sa_ws_05', category: 'world_story', minAge: 40, maxAge: 80, probability: 0.73,
    templates: [
      '世界依旧平静，{location}的生活一如既往。',
      '你听说了一些关于{legend}的新消息，但似乎没什么实质内容。',
      '这一年没什么大事发生，你在{location}安稳度日。',
    ],
    effects: { luck: 1 },
  },

  // Hidden
  {
    id: 'sa_hd_01', category: 'hidden', minAge: 60, maxAge: 120, probability: 0.065,
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
    id: 'sa_hd_02', category: 'hidden', minAge: 50, maxAge: 100, probability: 0.1,
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
    id: 'sa_hd_03', category: 'hidden', minAge: 35, maxAge: 80, probability: 0.34,
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
    id: 'sa_hd_04', category: 'hidden', minAge: 20, maxAge: 60, probability: 0.52,
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

  // Death
  {
    id: 'sa_dt_01', category: 'death', minAge: 0, maxAge: 100, probability: 0.35,
    templates: [
      '你在{location}遭遇不测，生命力迅速流逝。',
      '你的身体到达了极限，{npc}无能为力。',
      '{legend}的诅咒降临在你身上，你无法抵抗。',
    ],
    effects: { health: -60 },
  },
  {
    id: 'sa_dt_02', category: 'death', minAge: 0, maxAge: 150, probability: 0.45,
    templates: [
      '你在{location}进行了最后的战斗，英勇牺牲。',
      '寿元耗尽，你在{location}静静地闭上了眼睛。',
      '你走火入魔，在{location}化为灰烬。',
    ],
    effects: { health: -80 },
  },
  {
    id: 'sa_dt_03', category: 'death', minAge: 0, maxAge: 200, probability: 0.55,
    templates: [
      '你在{location}被强敌击杀，死不瞑目。',
      '你的伤势恶化，{npc}尽力抢救但回天乏术。',
      '{legend}的力量反噬，你在{location}形神俱灭。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'sa_dt_04', category: 'death', minAge: 0, maxAge: 250, probability: 0.65,
    templates: [
      '你在{location}寿终正寝，周围的人都来为你送行。',
      '你安详地在{location}离世，一生无憾。',
      '{npc}守在你的床前，目送你离开这个世界。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'sa_dt_05', category: 'death', minAge: 0, maxAge: 300, probability: 0.75,
    templates: [
      '你在{location}结束了这一生，灵魂化作流光消散。',
      '你的故事成为了{location}的传说，后人会记得你的名字。',
      '{legend}亲自前来接引你的灵魂，你感到一阵温暖。',
    ],
    effects: { health: -100 },
  },

  // Major Choices
  {
    id: 'sa_major_01', category: 'major', minAge: 14, maxAge: 22, probability: 0.55,
    templates: [
      '你站在{location}的广场上，系统的提示音响起："请选择你的战斗风格。"{npc}看着你，眼中满是期待。',
    ],
    effects: { intelligence: 2, charisma: 1 },
    choices: [
      { text: '单手持剑，追求极致速度与技巧', successRate: 0.72, successText: '你选择了单手剑之道。{npc}点头："速度即是一切。"你的剑技威力远超同阶，但防御变得异常薄弱', failText: '你选择了单手剑，但你的体质偏向力量型。每一次高速挥剑都让肌肉撕裂，痛苦不堪', effects: { intelligence: 10, special: 5, strength: 3 }, failEffects: { strength: 3, intelligence: 2, health: -10 }, flags: ['branch_speed_master'], failFlags: ['branch_speed_fail'] },
      { text: '双手重剑，追求破坏力与防御', successRate: 0.68, successText: '你选择了双手重剑之道。{npc}欣慰地说："重剑无锋，大巧不工。"你的攻击力攻守兼备，成为同届中最稳健的战斗者', failText: '你选择了双手重剑，但敏捷系的反噬让你身体日渐虚弱。{npc}摇头："力量与速度不可兼得，你选了最难走的路。"', effects: { health: 10, strength: 5, luck: 3 }, failEffects: { health: -5, intelligence: 2, strength: -3 }, flags: ['branch_power_master'], failFlags: ['branch_power_fail'] },
      { text: '双剑流，不求专精但求广博', successRate: 0.45, successText: '你选择了双剑流之路。{npc}皱眉："贪多嚼不烂，但...也许你能走出一条前人未走过的路。"多年后，你成为了罕见的"双剑大师"', failText: '双剑流消耗了你太多的精力，最终每一只手都停留在入门水平。{npc}叹息："早知如此，不如专精一剑。"', effects: { intelligence: 8, luck: 5, charisma: 3 }, failEffects: { intelligence: 3, strength: -3, health: -5 }, flags: ['branch_dual_master'], failFlags: ['branch_dual_fail'] },
    ],
    flags: ['major_seen_style'],
    chainPriority: 10,
  },
  {
    id: 'sa_major_02', category: 'major', minAge: 24, maxAge: 35, probability: 0.5,
    templates: [
      '你以优异成绩通过了第25层试炼，面临人生重大抉择。{npc}找到你，带来了三份邀请函——攻略组的正式邀请、独行剑客联盟的认可、以及神秘暗杀组织的秘密来信。',
    ],
    effects: { charisma: 2 },
    choices: [
      { text: '加入攻略组，投身团队战斗', successRate: 0.6, successText: '你进入了攻略组，在{location}开始了正式的团队攻略。多年后，你成为了攻略组的核心成员，名字刻在{location}的荣耀碑上', failText: '攻略组的团队氛围压抑而枯燥，你发现集体行动限制了你个人的成长，开始怀疑自己的选择', effects: { strength: 10, charisma: 8, luck: 5 }, failEffects: { strength: 5, charisma: -5, luck: -3 }, flags: ['branch_raid_team'], failFlags: ['branch_raid_fail'] },
      { text: '加入独行剑客联盟，追求个人极限', successRate: 0.65, successText: '你加入了独行剑客联盟，获得了大量单人攻略的经验和古老的剑技传承。在联盟支持下，你的实力突飞猛进', failText: '独行剑客联盟内部竞争激烈，你被卷入了派系纷争，虽然获得了力量，但失去了队友的信任', effects: { intelligence: 12, strength: 8, charisma: 3 }, failEffects: { strength: 5, charisma: -8, luck: -5 }, flags: ['branch_solo_path'], failFlags: ['branch_solo_fail'] },
      { text: '加入暗杀组织，走上灰色之路', successRate: 0.35, successText: '你加入了暗杀组织，开始执行隐秘任务。{npc}警告过你："灰色的力量需要代价。"但你已无法回头——而这条路，竟然通向了剑技的终极真理！', failText: '暗杀任务的反噬远超你的想象。你在{location}的第一次任务中失去了半条命，从此噩梦缠身', effects: { intelligence: 15, strength: 10, luck: -5 }, failEffects: { strength: 3, intelligence: 5, health: -30, luck: -10 }, flags: ['branch_assassin_path'], failFlags: ['branch_assassin_fail'] },
    ],
    flags: ['major_seen_faction'],
    chainPriority: 10,
  },
  {
    id: 'sa_major_03', category: 'major', minAge: 35, maxAge: 50, probability: 0.48,
    templates: [
      '你在{location}发现了一本禁忌的剑技典籍。书中记载：施展「终焉剑技」需要燃烧施法者的生命。{npc}警告你："那是与死亡的赌博。"',
    ],
    effects: { luck: -2 },
    choices: [
      { text: '以生命为代价，学习终焉剑技', successRate: 0.4, successText: '你以十年寿命为代价，掌握了终焉剑技。它成为了你最强大的底牌，陪你征战四方，无人可挡', failText: '学习终焉剑技的过程中，你的生命力被大量消耗。你虽然勉强掌握了它，但身体已经残缺不全', effects: { strength: 15, luck: -5, special: 5 }, failEffects: { health: -20, strength: 5, luck: -15 }, flags: ['branch_final_sword'], failFlags: ['branch_final_fail'] },
      { text: '拒绝学习，销毁典籍', successRate: 0.8, successText: '你拒绝了终焉剑技，将典籍付之一炬。{npc}欣慰地看着你："明智的选择。真正的力量，不需要出卖灵魂。"多年后，你以纯剑技修为超越了那些依靠禁术的人', failText: '你销毁了典籍，但暗杀组织因此视你为眼中钉。{npc}被牵连暗杀，你从此背负上了复仇的重担', effects: { charisma: 10, intelligence: 5, luck: 5 }, failEffects: { charisma: -5, luck: -10, health: -10 }, flags: ['branch_reject_final'], failFlags: ['branch_reject_fail'] },
      { text: '改良剑技，寻找不伤害生命的方法', successRate: 0.25, successText: '你花了十年时间改良终焉剑技，最终创造出了「新生剑技」——以剑气代替生命力。{legend}惊呼："你改变了剑技的规则！"', failText: '改良剑技失败了。你被终焉剑技的反噬困在了生死边缘，整整三年才恢复。出来后，你发现自己的剑技大幅衰退', effects: { intelligence: 15, luck: 5, special: 8 }, failEffects: { intelligence: 3, strength: -5, health: -15, luck: -5 }, flags: ['branch_modify_final'], failFlags: ['branch_modify_fail'] },
    ],
    flags: ['major_seen_forbidden'],
    chainPriority: 10,
  },
  {
    id: 'sa_major_04', category: 'major', minAge: 45, maxAge: 60, probability: 0.45,
    templates: [
      '第50层Boss房间的封印在{location}出现裂缝，怪物大军涌入安全区。{npc}站在你面前，满脸疲惫："这是千年一遇的楼层崩溃。你可以选择参战，也可以选择避难。"',
    ],
    effects: { health: -3 },
    choices: [
      { text: '投身战场，守护安全区', successRate: 0.5, successText: '你率领战斗小队奔赴前线，在{location}与怪物大军激战七天七夜。最终，你用生命为代价封印了裂缝。后人将你奉为英雄，你的雕像矗立在{location}的广场中央', failText: '你投身战场，但怪物大军的实力远超想象。你身受重伤，虽然侥幸存活，但从此剑技修为停滞不前', effects: { strength: 15, charisma: 10, health: -30 }, failEffects: { strength: 5, health: -25, luck: -5 }, flags: ['branch_defend_hero'], failFlags: ['branch_defend_fail'] },
      { text: '避难隐居，保全自身', successRate: 0.85, successText: '你选择了避难，在{location}的深处建立了避难所。楼层崩溃结束后，你成为了少数幸存的顶尖剑士。但每当夜深人静，你都会想起那些战死的朋友，良心难安', failText: '你避难隐居，但怪物裂缝不断扩大，最终吞噬了整个区域。你的避难所也未能幸免，你死在了睡梦中', effects: { luck: 10, health: 5, intelligence: 5 }, failEffects: { health: -100 }, flags: ['branch_hideout'], failFlags: ['branch_hideout_fail'] },
      { text: '寻找裂缝源头，从根源解决', successRate: 0.2, successText: '你冒险进入了Boss房间的最深处，找到了裂缝的源头——原来是第50层守护者的封印松动了。你用{legend}中传承的方法重新加固了封印，楼层崩溃戛然而止。你成为了浮空要塞的英雄', failText: 'Boss房间最深处的环境远超你的承受力。你虽然找到了裂缝源头，但身受重伤，勉强逃回安全区时已奄奄一息', effects: { intelligence: 15, strength: 10, special: 10 }, failEffects: { intelligence: 5, health: -40, strength: 3 }, flags: ['branch_source_fix'], failFlags: ['branch_source_fail'] },
    ],
    flags: ['major_seen_collapse'],
    chainPriority: 10,
  },
  {
    id: 'sa_major_05', category: 'major', minAge: 55, maxAge: 70, probability: 0.42,
    templates: [
      '{npc}临终前告诉你一个秘密：传说中「顶层钥匙」就藏在{location}的地下迷宫中。顶层钥匙可以打开第100层的大门——那里藏着这座塔真正的秘密。',
    ],
    effects: { luck: 2 },
    choices: [
      { text: '寻找顶层钥匙，追求真相', successRate: 0.3, successText: '你历经九死一生，终于在{location}找到了顶层钥匙。你打开了第100层的大门——然后你发现，真相不是祝福，而是诅咒。这座塔从未打算让任何人离开', failText: '你找到了顶层钥匙，但守护它的是远古守护者。你被守护者击中，虽然逃出生天，但身体留下了永远无法愈合的伤痕', effects: { health: 50, charisma: -5, luck: -10 }, failEffects: { health: -30, strength: 5, luck: -5 }, flags: ['branch_key_truth'], failFlags: ['branch_key_fail'] },
      { text: '寻找顶层钥匙，带领所有人离开', successRate: 0.35, successText: '你用顶层钥匙打开了第100层的大门，发现了离开浮空要塞的方法。但你面临一个艰难的选择：只有一个人能离开。你选择了牺牲自己，让其他人自由', failText: '你找到了离开的方法，但塔的系统察觉到了你的意图。你的权限被永久冻结，永远无法离开', effects: { charisma: -5, luck: -10, health: -10 }, failEffects: { charisma: -10, luck: -20, health: -20 }, flags: ['branch_key_escape'], failFlags: ['branch_key_escape_fail'] },
      { text: '销毁顶层钥匙，不让任何人利用它', successRate: 0.55, successText: '你找到了顶层钥匙，然后亲手摧毁了它。{npc}的灵魂在虚空中微笑："你做出了正确的选择。"从此，浮空要塞少了一份诱惑与纷争，大家学会了在塔中生活', failText: '销毁顶层钥匙的瞬间，它的能量爆发，将{location}夷为平地。你虽然幸存，但永远背负着沉重的罪孽', effects: { charisma: 15, luck: 10, special: 5 }, failEffects: { charisma: -15, luck: -15, health: -20 }, flags: ['branch_key_destroy'], failFlags: ['branch_key_destroy_fail'] },
    ],
    flags: ['major_seen_key'],
    chainPriority: 10,
  },
  {
    id: 'sa_major_06', category: 'major', minAge: 65, maxAge: 80, probability: 0.4,
    templates: [
      '你感应到了来自顶层花园的存在。它们不是神明，不是恶魔，而是比浮空要塞更古老的"系统意志"。它们在向你发出邀请：加入它们，成为塔的一部分，获得永恒的生命。',
    ],
    effects: { special: 5 },
    choices: [
      { text: '接受邀请，成为系统的一部分', successRate: 0.25, successText: '你接受了系统之邀，身体开始"数据化"。你失去了物质形态，但获得了在塔中自由穿梭的能力。千年后，你成为了传说中的"观察者"，见证无数冒险者的兴衰', failText: '系统的力量腐蚀了你的意识。你虽然获得了力量，但逐渐失去了自我，最终成为了塔中的"迷失NPC"，永世徘徊', effects: { special: 20, strength: 10, intelligence: 10 }, failEffects: { special: 10, strength: 5, charisma: -20, health: -20 }, flags: ['branch_system_join'], failFlags: ['branch_system_fail'] },
      { text: '拒绝邀请，守护冒险者', successRate: 0.75, successText: '你拒绝了系统之邀，选择守护冒险者。系统意志尊重了你的选择，留下了一句谜语："当你准备好时，顶层永远为你敞开。"多年后，你成为了浮空要塞最强大的守护者', failText: '系统意志因为你的拒绝而愤怒，它们在{location}引发了数据风暴。你带领剑士们平息了风暴，但生命力耗尽，从此修为衰退', effects: { charisma: 10, strength: 10, luck: 5 }, failEffects: { charisma: -5, strength: 3, health: -20 }, flags: ['branch_system_reject'], failFlags: ['branch_system_reject_fail'] },
      { text: '与系统谈判，寻求共存之道', successRate: 0.15, successText: '你没有接受也没有拒绝，而是与系统意志进行了长达十年的谈判。最终，你成为了冒险者与系统的"桥梁"，两个世界因为你的努力而建立了联系。你是万古以来最伟大的外交官', failText: '系统意志不理解"谈判"这个概念。你的"谈判"在它们看来是一种挑衅。它们攻击了你的精神，你花了二十年才恢复', effects: { intelligence: 20, charisma: 15, special: 10 }, failEffects: { intelligence: 5, charisma: -10, health: -25 }, flags: ['branch_system_diplomat'], failFlags: ['branch_system_diplomat_fail'] },
    ],
    flags: ['major_seen_system'],
    chainPriority: 10,
  },
  {
    id: 'sa_major_07', category: 'major', minAge: 70, maxAge: 85, probability: 0.38,
    templates: [
      '大限将至，你必须决定自己的传承。{npc}问："你是想把毕生所学传给弟子，还是将自己的剑技烙印融入浮空要塞，成为永恒的一部分？"',
    ],
    effects: { charisma: 3 },
    choices: [
      { text: '选择传人，让剑技延续', successRate: 0.7, successText: '你在{location}挑选了三位弟子，将毕生所学倾囊相授。千年后，你的弟子们开宗立派，你的剑技传承成为了浮空要塞的基石', failText: '你选择的弟子中有人背叛了你，将你的禁忌剑技泄露给了暗杀组织。你的名声毁于一旦，但剑技传承依然在暗中流传', effects: { charisma: 15, luck: 5, special: 5 }, failEffects: { charisma: -10, luck: -10, special: 3 }, flags: ['branch_legacy_student'], failFlags: ['branch_legacy_student_fail'] },
      { text: '融入浮空要塞，成为塔的一部分', successRate: 0.4, successText: '你在{location}施展了最后的剑技——"世界同化"。你的意识融入了浮空要塞，成为了系统网络的一部分。从此，每一个冒险者都能感受到你的存在，你以另一种形式获得了永生', failText: '同化仪式出现了偏差，你的意识被困在了系统与现实的夹缝中。你成为了"困灵"，永远游荡，无法安息', effects: { special: 20, charisma: 10 }, failEffects: { special: 5, charisma: -15, health: -30 }, flags: ['branch_legacy_tower'], failFlags: ['branch_legacy_tower_fail'] },
      { text: '著书立说，以文字传世', successRate: 0.6, successText: '你在{location}闭关十年，写下了《剑技真理解析》——一部涵盖了你所有剑技心得的巨著。这部书成为了后世的剑技圣经，你以文字的形式获得了不朽', failText: '你的著作被攻略组禁毁，认为其中包含"危险的思想"。虽然禁毁，但手抄本依然在黑市流传，你的思想反而因为禁毁而更加神秘', effects: { intelligence: 15, charisma: 10, luck: 3 }, failEffects: { intelligence: 5, charisma: -5, luck: -5 }, flags: ['branch_legacy_book'], failFlags: ['branch_legacy_book_fail'] },
    ],
    flags: ['major_seen_legacy'],
    chainPriority: 10,
  },

  // Identity Exclusive — 独行者 (lone_wolf)
  {
    id: 'sa_ie_lone_wolf_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就知道自己与别人不同。当其他孩子抱团玩耍时，你更喜欢独自在{location}练剑。{npc}说你是"天生独行者"。',
      '作为独行者，你在{location}的剑技测试中拒绝了所有组队邀请，独自面对试炼怪物。虽然伤痕累累，但你赢了。',
    ],
    effects: { intelligence: 5, special: 3 },
    flags: ['chain_lone_wolf_childhood_0'],
    identityExclusive: 'lone_wolf',
  },
  {
    id: 'sa_ie_lone_wolf_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你不依赖任何人。每晚偷偷在{location}的阁楼里研读剑技秘籍，一遍又一遍地练习最基础的剑招，直到掌心磨出茧子。',
      '你在{location}的旧书摊上发现了一本破损的《独行剑诀》。书中说："真正的剑士不需要队友，剑就是最好的伙伴。"你如获至宝。',
    ],
    effects: { special: 5 },
    flags: ['chain_lone_wolf_childhood_1'],
    identityExclusive: 'lone_wolf',
  },
  {
    id: 'sa_ie_lone_wolf_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '你十四岁那年，凭借独行的战绩闯入了{location}的百强榜——那是只有团队才能登上的榜单，你是唯一的独行者。',
      '别的玩家组队刷副本，你独自面对Boss。虽然每一次都九死一生，但你的剑技成长速度远超任何人。',
    ],
    effects: { special: 6, strength: 3 },
    flags: ['chain_lone_wolf_growth_0'],
    requiredFlags: ['chain_lone_wolf_childhood_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_lone_wolf_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}的百人混战中独自一人击败了整支公会小队。所有目击者都说看到了"黑色的闪电"。',
      '{npc}——一位被公会边缘化的老剑士——私下找到了你："孩子，你的独行之道...我在三十年前也走过。他们笑了我三十年。你愿意和我切磋吗？"',
    ],
    effects: { intelligence: 6, special: 4 },
    flags: ['chain_lone_wolf_growth_1'],
    requiredFlags: ['chain_lone_wolf_childhood_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_lone_wolf_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你的独行剑法已臻化境。但你面临一个抉择：加入公会获得资源，但失去独行之道；或者继续独行，但永远无法触及顶层。',
      '你在{location}建立了一间小小的"独行道场"，专门招收被公会拒绝的独行者。攻略组的会长亲自来警告你："你在破坏塔的秩序。"',
    ],
    effects: { special: 8 },
    flags: ['chain_lone_wolf_adult_0'],
    requiredFlags: ['chain_lone_wolf_growth_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_lone_wolf_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：攻略组愿意收你为正式成员，但要求你放弃独行之道、转为团队协作；或者继续坚持独行，但永远得不到公会核心资源。',
    ],
    choices: [
      { text: '坚持独行之道', successRate: 0.6, successText: '你选择了坚持独行之道。多年后，你成为了浮空要塞第一个独自通关第100层的人。', failText: '你选择了坚持独行，但第90层以后的Boss难度远超个人极限。你倒在了第95层。', effects: { intelligence: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_lone_wolf_path'], failFlags: ['branch_identity_lone_wolf_path_fail'], relationshipEffects: { 'shadow': 10 } },
      { text: '加入攻略组', successRate: 0.75, successText: '你选择了加入攻略组，虽然失去了独行之名，但获得了更强的力量。', failText: '你加入了攻略组，但团队配合让你窒息。你最终还是退出了，只是浪费了最好的年华。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_lone_wolf_new'], failFlags: ['branch_identity_lone_wolf_new_fail'], relationshipEffects: { 'dawn': 10 } },
    ],
    flags: ['chain_lone_wolf_adult_1'],
    requiredFlags: ['chain_lone_wolf_growth_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_lone_wolf_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你成功证明了"独行剑法"的可行性！一位被判定为"不适合团队"的独行者用你的方法击败了第80层Boss。那一刻，整个浮空要塞的秩序都动摇了。',
      '攻略组的使者找到了你："你的剑法...与顶层花园的「初始剑技」一模一样。千年前，有一位贤者也走过这条路。"',
    ],
    effects: { intelligence: 10, special: 5 },
    flags: ['chain_lone_wolf_special_0'],
    requiredFlags: ['chain_lone_wolf_adult_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 3,
  },
  {
    id: 'sa_ie_lone_wolf_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你成为了"独行剑法"的创始人。后人称你为"独行者的灯塔"。你的剑法让无数被判定为"不适合团队"的人拥有了攀登的权利——浮空要塞，终于不再是公会的专利。',
      '你在{location}的墓碑上刻着："剑不属于团队，剑属于所有渴望自由的人。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_lone_wolf_special_1'],
    requiredFlags: ['chain_lone_wolf_adult_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 3,
  },

  // Identity Exclusive — 公会领袖 (guild_master)
  {
    id: 'sa_ie_guild_master_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你出生在{location}的公会世家。你的 first 记忆，就是{npc}教你念第一个公会口号："团结，即力量。"',
      '作为公会领袖的后裔，你三岁就能指挥一群孩子完成团队游戏。{npc}赞叹："纯血领袖的统御力...这才是团队的真谛。"',
    ],
    effects: { charisma: 5, strength: 3 },
    flags: ['chain_guild_master_childhood_0'],
    identityExclusive: 'guild_master',
  },
  {
    id: 'sa_ie_guild_master_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你的童年充满了战术课、指挥课和领导力课。{location}的公会城堡中，你每天学习如何用最优雅的姿势挥剑，如何在战斗中指挥队友。',
      '六岁那年，你在{location}的公会聚会上成功调解了两个孩子的争斗。父亲没有责罚你，反而骄傲地说："这才是公会领袖的风范。"',
    ],
    effects: { charisma: 5 },
    flags: ['chain_guild_master_childhood_1'],
    identityExclusive: 'guild_master',
  },
  {
    id: 'sa_ie_guild_master_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十四岁，你以团队第一的成绩考入了家族指定的攻略组干部班。但你也发现，团队里的成员不是按实力排名，而是按家族势力排名。',
      '作为公会领袖的后裔，你不可避免地被卷入了公会政治。{location}的一次会议上，副会长暗示你若支持他继位会长，你将获得公会传承武器。',
    ],
    effects: { strength: 6, charisma: 3 },
    flags: ['chain_guild_master_growth_0'],
    requiredFlags: ['chain_guild_master_childhood_0'],
    identityExclusive: 'guild_master',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_guild_master_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '十八岁那年，你在{location}的公会档案室发现了一本禁书——上面记载了你的公会黑暗历史：第一任会长，其实是一个靠出卖队友发家的叛徒。',
      '{npc}——公会的老顾问——悄悄告诉你："每个公会都有黑历史。关键不是过去做了什么，而是你现在选择成为什么样的领袖。"',
    ],
    effects: { special: 6, intelligence: 3 },
    flags: ['chain_guild_master_growth_1'],
    requiredFlags: ['chain_guild_master_childhood_0'],
    identityExclusive: 'guild_master',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_guild_master_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你已是公会年轻一代中最强的领袖。但公会内部的权力斗争愈演愈烈——副会长想要夺取会长之位，而会长希望你能用武力"处理"掉他。',
      '你在{location}意外发现了副会长的秘密：他其实一直在暗中保护被公会排斥的独行者。他并非敌人，而是公会中唯一有良知的人。',
    ],
    effects: { charisma: 8, strength: 3 },
    flags: ['chain_guild_master_adult_0'],
    requiredFlags: ['chain_guild_master_growth_0'],
    identityExclusive: 'guild_master',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_guild_master_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：支持会长，消灭副会长，继承会长之位；或者支持副会长，揭发公会的黑暗历史，但会失去一切。',
    ],
    choices: [
      { text: '支持会长', successRate: 0.5, successText: '你选择了支持会长，成为了新任公会领袖。', failText: '你选择了支持会长，但副会长早有准备。你在一场政变中被逐出公会。', effects: { strength: 10, charisma: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_guild_master_path'], failFlags: ['branch_identity_guild_master_path_fail'], relationshipEffects: { 'blood_blade': 10 } },
      { text: '支持副会长', successRate: 0.75, successText: '你选择了支持副会长，虽然道路不同，但建立了更公正的新公会。', failText: '你选择了支持副会长，但被会长先发制人。你们被通缉，只能在塔中流亡。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_guild_master_new'], failFlags: ['branch_identity_guild_master_new_fail'], relationshipEffects: { 'dawn': 10 } },
    ],
    flags: ['chain_guild_master_adult_1'],
    requiredFlags: ['chain_guild_master_growth_0'],
    identityExclusive: 'guild_master',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_guild_master_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了揭发公会。消息传出后，旧公会一夜之间从浮空要塞除名。但你并不后悔——因为你解放了那些被公会秘密囚禁的"失败者"。',
      '你被旧公会驱逐，但也因此获得了自由。你开始游历各层，用自己的影响力帮助那些曾经被你公会压迫的人。{npc}说："你终于成为了真正的领袖。"',
    ],
    effects: { charisma: 10, intelligence: 3 },
    flags: ['chain_guild_master_special_0'],
    requiredFlags: ['chain_guild_master_adult_0'],
    identityExclusive: 'guild_master',
    chainPriority: 3,
  },
  {
    id: 'sa_ie_guild_master_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，新的公会在你的努力下重建。但这次，公会的大门向所有人敞开——不论出身，只看才华。后人称你为"改革者"。',
      '你在{location}的雕像下刻着："领袖不是出生的，是选择的。"',
    ],
    effects: { charisma: 10, strength: 3 },
    flags: ['chain_guild_master_special_1'],
    requiredFlags: ['chain_guild_master_adult_0'],
    identityExclusive: 'guild_master',
    chainPriority: 3,
  },

  // Identity Exclusive — 锻造师 (blacksmith)
  {
    id: 'sa_ie_blacksmith_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就在{location}的锻造坊中长大。你的父母是普通的冒险者，但你却能感受到金属的"情感"。{npc}说你是"被锻造之神选中的人"。',
      '作为锻造师，你五岁那年不小心让{location}的一块废铁发出了光芒。锻造师协会的使者找到了你的父母："这个孩子属于锻造坊。"',
    ],
    effects: { intelligence: 5, special: 3 },
    flags: ['chain_blacksmith_childhood_0'],
    identityExclusive: 'blacksmith',
  },
  {
    id: 'sa_ie_blacksmith_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你被带到了锻造师协会，接受正统训练。{location}的熔炉旁，你学会了如何与金属沟通，如何用锤子唤醒沉睡的剑魂。',
      '{npc}——一位千年锻造大师——告诉你："锻造师不是工匠，我们是武器的赋予者。我们的力量不是来自肌肉，而是来自理解。"',
    ],
    effects: { special: 5, intelligence: 3 },
    flags: ['chain_blacksmith_childhood_1'],
    identityExclusive: 'blacksmith',
  },
  {
    id: 'sa_ie_blacksmith_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}锻造出了人生第一把有"剑魂"的武器。虽然只是一把普通的短剑，但当它出鞘时，所有人都听到了一声龙吟。',
      '你开始在{location}专门为独行者锻造武器——因为独行者的武器磨损最快。你的名声逐渐传开，越来越多的冒险者愿意追随你。',
    ],
    effects: { intelligence: 6, special: 4 },
    flags: ['chain_blacksmith_growth_0'],
    requiredFlags: ['chain_blacksmith_childhood_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_blacksmith_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}遇到了一个难题：一位前线攻略者求你打造一把能击穿第50层Boss护甲的武器，但材料只有普通的铁矿石。',
      '{npc}告诉你："真正的锻造师，不是用好材料打造好武器，而是用普通材料打造传奇。"',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_blacksmith_growth_1'],
    requiredFlags: ['chain_blacksmith_childhood_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_blacksmith_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你已是锻造师协会最年轻的宗师。但协会希望你放弃为独行者锻造，转为服务大型公会。',
      '你在{location}遇到了一个被公会抛弃的独行者。他的武器断了，没有人愿意为他修理。你免费为他打造了一把新剑。',
    ],
    effects: { special: 8, charisma: 3 },
    flags: ['chain_blacksmith_adult_0'],
    requiredFlags: ['chain_blacksmith_growth_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_blacksmith_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：为大型公会服务，获得无尽财富和稀有材料；或者继续为所有冒险者锻造，但永远得不到最好的资源。',
    ],
    choices: [
      { text: '坚持为所有人锻造', successRate: 0.6, successText: '你选择了坚持为所有人锻造。虽然材料普通，但你的技艺让每一把武器都成为了传奇。', failText: '你坚持为所有人锻造，但大型公会切断了你的材料来源。你只能用最差的材料工作。', effects: { charisma: 10, special: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_blacksmith_path'], failFlags: ['branch_identity_blacksmith_path_fail'], relationshipEffects: { 'hammer': 10 } },
      { text: '为大型公会服务', successRate: 0.75, successText: '你选择了为大型公会服务，获得了稀有材料和财富。但你的心中总有一丝不安。', failText: '你为大型公会服务，但他们只把你当作工具。你的创造力被规则束缚，再也无法突破。', effects: { luck: 8, intelligence: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_blacksmith_new'], failFlags: ['branch_identity_blacksmith_new_fail'], relationshipEffects: { 'dawn': 10 } },
    ],
    flags: ['chain_blacksmith_adult_1'],
    requiredFlags: ['chain_blacksmith_growth_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_blacksmith_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你用普通材料打造出了传说中的「破晓之剑」。消息传出后，浮空要塞的所有冒险者都涌向你的锻造坊。大型公会不得不重新评估你的价值。',
      '{npc}为你检查武器后大惊失色："这不是普通的锻造...你在武器中注入了灵魂！这是传说中的「魂锻术」！"',
    ],
    effects: { intelligence: 10, special: 5 },
    flags: ['chain_blacksmith_special_0'],
    requiredFlags: ['chain_blacksmith_adult_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 3,
  },
  {
    id: 'sa_ie_blacksmith_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你成为了"魂锻术"的创始人。后人称你为"锻造之神"。你的技艺让无数被判定为"废材"的材料拥有了生命——锻造，终于不再是富人的专利。',
      '你在{location}的墓碑上刻着："每一把武器都有灵魂，只是等待被发现。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_blacksmith_special_1'],
    requiredFlags: ['chain_blacksmith_adult_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 3,
  },

  // Identity Exclusive — 驯兽师 (tamer)
  {
    id: 'sa_ie_tamer_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就知道自己与别人不同。当其他孩子害怕塔中的怪物时，你却能与它们沟通。{npc}说你是"被自然选中的人"。',
      '作为驯兽师，你五岁那年不小心让{location}的一只凶猛怪物安静了下来。驯兽师联盟的使者找到了你的父母："这个孩子属于森林。"',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['chain_tamer_childhood_0'],
    identityExclusive: 'tamer',
  },
  {
    id: 'sa_ie_tamer_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你被带到了驯兽师营地，接受训练。{location}的古树下，你学会了如何与怪物建立羁绊，如何用善意化解敌意。',
      '{npc}——一位千年驯兽大师——告诉你："驯兽师不是征服者，我们是桥梁。我们的力量不是来自控制，而是来自理解。"',
    ],
    effects: { special: 5, charisma: 3 },
    flags: ['chain_tamer_childhood_1'],
    identityExclusive: 'tamer',
  },
  {
    id: 'sa_ie_tamer_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}遇到了一群被猎杀的怪物幼崽。你想保护它们，但驯兽师长老说："人类也是自然的一部分。我们不能阻止生存，只能引导尊重。"',
      '你开始在人类世界和怪物世界之间往返，试图找到双方共存的方法。但两边都不信任你——人类认为你是怪物的间谍，怪物认为你是人类的叛徒。',
    ],
    effects: { charisma: 6, luck: 3 },
    flags: ['chain_tamer_growth_0'],
    requiredFlags: ['chain_tamer_childhood_0'],
    identityExclusive: 'tamer',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_tamer_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，{location}发生了一场大猎杀。你拼尽全力召唤怪物伙伴，但猎杀者太多。就在你快要力竭时，周围的怪物——狼、鹰、蛇——都来到了你身边，将力量借给了你。',
      '{npc}告诉你："你终于明白了驯兽师的真正力量——不是控制怪物，而是成为自然的一部分。"',
    ],
    effects: { charisma: 6, strength: 3 },
    flags: ['chain_tamer_growth_1'],
    requiredFlags: ['chain_tamer_childhood_0'],
    identityExclusive: 'tamer',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_tamer_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你面临着身份认同的危机。驯兽师联盟希望你彻底放弃人类身份，成为纯粹的"怪物之友"；而你的父母则希望你能回家，过普通人的生活。',
      '你在{location}遇到了一个人类冒险者和一只怪物组成的奇怪搭档。他们告诉你："我们不是人类，也不是怪物。我们只是我们自己。"',
    ],
    effects: { intelligence: 8, charisma: 3 },
    flags: ['chain_tamer_adult_0'],
    requiredFlags: ['chain_tamer_growth_0'],
    identityExclusive: 'tamer',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_tamer_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你可以选择：彻底回归自然，放弃人类身份，获得强大的怪物之力但失去人类社会的一切；或者保持人形，在人类和怪物之间做桥梁。',
    ],
    choices: [
      { text: '回归自然', successRate: 0.5, successText: '你选择了回归自然，成为了怪物们的领袖。', failText: '你选择了回归自然，但怪物世界比你想象的更加残酷。你差点死于怪物间的争斗。', effects: { charisma: 10, health: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_tamer_path'], failFlags: ['branch_identity_tamer_path_fail'], relationshipEffects: { 'feather': 10 } },
      { text: '保持人形', successRate: 0.75, successText: '你选择了保持人形，成为了人类与怪物之间的桥梁。', failText: '你选择了保持人形，但两边都不信任你。你成为了孤独的中间人。', effects: { luck: 8, charisma: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_tamer_new'], failFlags: ['branch_identity_tamer_new_fail'], relationshipEffects: { 'hammer': 10 } },
    ],
    flags: ['chain_tamer_adult_1'],
    requiredFlags: ['chain_tamer_growth_0'],
    identityExclusive: 'tamer',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_tamer_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你选择了做桥梁。你开始穿梭于人类城市和怪物巢穴之间，调解双方的冲突。虽然两边都有激进派反对你，但和平的曙光已经出现。',
      '你成为了驯兽师联盟中第一个"城市驯兽师"——你的道场不在森林中，而在城市的广场里。你说："怪物不在远方，怪物就在我们身边。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_tamer_special_0'],
    requiredFlags: ['chain_tamer_adult_0'],
    identityExclusive: 'tamer',
    chainPriority: 3,
  },
  {
    id: 'sa_ie_tamer_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，人类城市和怪物巢穴之间出现了一条"和平走廊"——那是你种下的。后人称你为"和平之种"。',
      '你在{location}的墓碑上没有刻名字，只刻了一片羽毛——因为你说："名字会消失，但和平永存。"',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_tamer_special_1'],
    requiredFlags: ['chain_tamer_adult_0'],
    identityExclusive: 'tamer',
    chainPriority: 3,
  },

  // Identity Exclusive — 情报商 (info_broker)
  {
    id: 'sa_ie_info_broker_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就有过目不忘的本领。当其他孩子还在玩耍时，你已经开始记录{location}中所有人的动向。{npc}说你是"天生的情报商"。',
      '作为情报商的后裔，你五岁那年就发现了{location}中一个隐藏的秘密通道。你的父母震惊地看着你——连他们都不知道这个通道的存在。',
    ],
    effects: { intelligence: 5, luck: 3 },
    flags: ['chain_info_broker_childhood_0'],
    identityExclusive: 'info_broker',
  },
  {
    id: 'sa_ie_info_broker_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你被带到了情报商协会，接受训练。{location}的阴影中，你学会了如何收集信息、如何辨别真伪、如何用情报换取利益。',
      '{npc}——一位传奇情报商——告诉你："情报不是力量，情报是权力的影子。知道得越多，死得越快——除非你懂得什么时候该沉默。"',
    ],
    effects: { intelligence: 5, charisma: 3 },
    flags: ['chain_info_broker_childhood_1'],
    identityExclusive: 'info_broker',
  },
  {
    id: 'sa_ie_info_broker_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}建立了自己的情报网络。虽然还只是一个小型网络，但你已经能预测到某些Boss的刷新时间。',
      '你开始在{location}贩卖情报——哪一层的怪物最弱，哪一条路最安全。你的情报准确率高达九成，名声迅速传开。',
    ],
    effects: { intelligence: 6, luck: 3 },
    flags: ['chain_info_broker_growth_0'],
    requiredFlags: ['chain_info_broker_childhood_0'],
    identityExclusive: 'info_broker',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_info_broker_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}发现了一份惊人的情报：某个大型公会正在秘密策划一场政变，目标是控制整个浮空要塞的资源分配。',
      '{npc}警告你："这份情报太危险了。如果你公布它，你将成为所有大型公会的敌人；如果你出售它，你将获得无尽的财富，但良心难安。"',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_info_broker_growth_1'],
    requiredFlags: ['chain_info_broker_childhood_0'],
    identityExclusive: 'info_broker',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_info_broker_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你已是浮空要塞最有影响力的情报商。但你也成为了众矢之的——有人想买你的情报，有人想杀你灭口。',
      '你在{location}遇到了一个被冤枉的独行者。他求你帮他找到真相。你免费为他提供了情报，帮他洗清了冤屈。',
    ],
    effects: { charisma: 8, intelligence: 3 },
    flags: ['chain_info_broker_adult_0'],
    requiredFlags: ['chain_info_broker_growth_0'],
    identityExclusive: 'info_broker',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_info_broker_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：将那份政变情报卖给最高出价者，获得无尽财富；或者免费公布它，守护浮空要塞的和平。',
    ],
    choices: [
      { text: '免费公布情报', successRate: 0.6, successText: '你选择了免费公布情报。虽然失去了财富，但你赢得了所有人的尊重。', failText: '你公布了情报，但没有人相信。大型公会反咬一口，说你是造谣者。你的情报网络被摧毁。', effects: { charisma: 10, intelligence: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_info_broker_path'], failFlags: ['branch_identity_info_broker_path_fail'], relationshipEffects: { 'dawn': 10 } },
      { text: '出售情报', successRate: 0.75, successText: '你选择了出售情报，获得了巨额财富。但你从此背负上了沉重的罪孽。', failText: '你出售了情报，但买家在得到情报后想杀你灭口。你虽然逃过一劫，但从此活在恐惧中。', effects: { luck: 8, intelligence: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_info_broker_new'], failFlags: ['branch_identity_info_broker_new_fail'], relationshipEffects: { 'blood_blade': 10 } },
    ],
    flags: ['chain_info_broker_adult_1'],
    requiredFlags: ['chain_info_broker_growth_0'],
    identityExclusive: 'info_broker',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_info_broker_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你成为了"自由情报"的创始人。你建立了一个公开的情报平台，所有人都可以免费获取基础情报。大型公会试图封杀你，但已经太晚了。',
      '{npc}感叹："你改变了情报的游戏规则。以前，情报是权力的工具；现在，情报是自由的武器。"',
    ],
    effects: { intelligence: 10, charisma: 5 },
    flags: ['chain_info_broker_special_0'],
    requiredFlags: ['chain_info_broker_adult_0'],
    identityExclusive: 'info_broker',
    chainPriority: 3,
  },
  {
    id: 'sa_ie_info_broker_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你的情报平台成为了浮空要塞的基石。没有人知道"自由情报商"的真实身份，但每当有人获得重要信息时，他们都会分享给平台。',
      '你在{location}的情报板上留下了最后的话："知识不属于垄断者，知识属于所有渴望真相的人。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_info_broker_special_1'],
    requiredFlags: ['chain_info_broker_adult_0'],
    identityExclusive: 'info_broker',
    chainPriority: 3,
  },

  // Identity Exclusive — 料理人 (chef)
  {
    id: 'sa_ie_chef_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就有异于常人的味觉。当其他孩子觉得{location}的补给品难以下咽时，你却能从中尝出不同的"情感"。{npc}说你是"被美食之神选中的人"。',
      '作为料理人，你五岁那年用普通的塔内食材做了一道菜，竟然让{location}的所有冒险者都流下了眼泪。他们说那道菜让他们想起了家乡。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['chain_chef_childhood_0'],
    identityExclusive: 'chef',
  },
  {
    id: 'sa_ie_chef_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你被带到了料理人协会，接受训练。{location}的厨房里，你学会了如何用塔内食材制作恢复料理，如何用美食治愈心灵的创伤。',
      '{npc}——一位传奇料理人——告诉你："料理不是填饱肚子，料理是给予希望。在这个死亡随时降临的世界里，一顿热饭就是最大的救赎。"',
    ],
    effects: { charisma: 5, intelligence: 3 },
    flags: ['chain_chef_childhood_1'],
    identityExclusive: 'chef',
  },
  {
    id: 'sa_ie_chef_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}的Boss攻略战中负责后勤。你的恢复料理让前线攻略者们的生命值持续回复，最终成功击杀了Boss。',
      '你开始在{location}开设移动餐车，专门为独行者提供便宜的恢复料理。你的名声逐渐传开，越来越多的冒险者愿意追随你。',
    ],
    effects: { charisma: 6, intelligence: 3 },
    flags: ['chain_chef_growth_0'],
    requiredFlags: ['chain_chef_childhood_0'],
    identityExclusive: 'chef',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_chef_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}遇到了一个难题：一位前线攻略者因长期战斗而失去了味觉，拒绝进食。他的生命值正在持续下降。',
      '{npc}告诉你："真正的料理人，不是做出美味的食物，而是做出能唤醒灵魂的食物。"',
    ],
    effects: { charisma: 6 },
    flags: ['chain_chef_growth_1'],
    requiredFlags: ['chain_chef_childhood_0'],
    identityExclusive: 'chef',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_chef_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你已是浮空要塞最受欢迎的料理人。但大型公会想垄断你的料理，只为他们的成员服务。',
      '你在{location}遇到了一群被公会抛弃的独行者。他们已经三天没有进食了。你免费为他们准备了丰盛的晚餐。',
    ],
    effects: { charisma: 8, health: 3 },
    flags: ['chain_chef_adult_0'],
    requiredFlags: ['chain_chef_growth_0'],
    identityExclusive: 'chef',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_chef_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：接受大型公会的垄断合同，获得无尽财富和稀有食材；或者继续为所有冒险者提供料理，但永远得不到最好的食材。',
    ],
    choices: [
      { text: '坚持为所有人料理', successRate: 0.6, successText: '你选择了坚持为所有人料理。虽然食材普通，但你的料理让每一个人都感受到了温暖。', failText: '你坚持为所有人料理，但大型公会切断了你的食材来源。你只能用最差的食材工作。', effects: { charisma: 10, health: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_chef_path'], failFlags: ['branch_identity_chef_path_fail'], relationshipEffects: { 'hammer': 10 } },
      { text: '接受垄断合同', successRate: 0.75, successText: '你选择了接受垄断合同，获得了稀有食材和财富。但你的心中总有一丝不安。', failText: '你接受了垄断合同，但公会的规则让你窒息。你的创造力被束缚，再也无法突破。', effects: { luck: 8, intelligence: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_chef_new'], failFlags: ['branch_identity_chef_new_fail'], relationshipEffects: { 'dawn': 10 } },
    ],
    flags: ['chain_chef_adult_1'],
    requiredFlags: ['chain_chef_growth_0'],
    identityExclusive: 'chef',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_chef_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你用普通食材做出了传说中的「希望之宴」。消息传出后，浮空要塞的所有冒险者都涌向你的餐厅。大型公会不得不重新评估你的价值。',
      '{npc}品尝了你的料理后泪流满面："这不是普通的料理...你在食物中注入了情感！这是传说中的「魂料理」！"',
    ],
    effects: { charisma: 10, health: 5 },
    flags: ['chain_chef_special_0'],
    requiredFlags: ['chain_chef_adult_0'],
    identityExclusive: 'chef',
    chainPriority: 3,
  },
  {
    id: 'sa_ie_chef_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你成为了"魂料理"的创始人。后人称你为"料理之神"。你的料理让无数濒临绝望的冒险者重新燃起了希望——美食，终于不再是富人的专利。',
      '你在{location}的餐厅门口刻着："每一顿饭都是一次重生，每一道菜都是一个希望。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_chef_special_1'],
    requiredFlags: ['chain_chef_adult_0'],
    identityExclusive: 'chef',
    chainPriority: 3,
  },

  // Identity Exclusive — 前线攻略者 (frontliner)
  {
    id: 'sa_ie_frontliner_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就不知恐惧为何物。当其他孩子躲避{location}的怪物时，你却主动迎上去。{npc}说你是"天生的战士"。',
      '作为前线攻略者的后裔，你五岁那年就敢独自面对{location}的训练用怪物。你的父母既骄傲又担忧。',
    ],
    effects: { strength: 5, health: 3 },
    flags: ['chain_frontliner_childhood_0'],
    identityExclusive: 'frontliner',
  },
  {
    id: 'sa_ie_frontliner_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你被带到了攻略者训练营，接受残酷的训练。{location}的战场上，你学会了如何承受伤害、如何保护队友、如何在死亡边缘战斗。',
      '{npc}——一位传奇前线攻略者——告诉你："前线不是荣耀，前线是牺牲。我们的力量不是来自剑技，而是来自不怕死的勇气。"',
    ],
    effects: { strength: 5, health: 3 },
    flags: ['chain_frontliner_childhood_1'],
    identityExclusive: 'frontliner',
  },
  {
    id: 'sa_ie_frontliner_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}的首次Boss战中冲在最前面。你承受了Boss的全力一击，虽然差点死亡，但为队友创造了击杀机会。',
      '你开始在{location}专门保护独行者——因为他们没有队友保护后背。你的名声逐渐传开，越来越多的独行者愿意与你同行。',
    ],
    effects: { strength: 6, health: 3 },
    flags: ['chain_frontliner_growth_0'],
    requiredFlags: ['chain_frontliner_childhood_0'],
    identityExclusive: 'frontliner',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_frontliner_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}的一场大战中独自面对十位强敌。你浑身是伤，但没有人能从你身后通过。',
      '{npc}告诉你："你终于明白了前线攻略者的真正意义——不是杀敌，而是守护。"',
    ],
    effects: { strength: 6, health: 3 },
    flags: ['chain_frontliner_growth_1'],
    requiredFlags: ['chain_frontliner_childhood_0'],
    identityExclusive: 'frontliner',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_frontliner_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你已是浮空要塞最可靠的前线攻略者。但你的身体已经伤痕累累——每一次战斗都在消耗你的生命。',
      '你在{location}遇到了一个年轻的独行者。他崇拜你，想要成为像你一样的前线攻略者。但你看着他健康的身体，心中五味杂陈。',
    ],
    effects: { strength: 8, health: -3 },
    flags: ['chain_frontliner_adult_0'],
    requiredFlags: ['chain_frontliner_growth_0'],
    identityExclusive: 'frontliner',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_frontliner_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：继续冲在最前线，直到战死；或者退居幕后，培养新人。',
    ],
    choices: [
      { text: '继续冲在前线', successRate: 0.6, successText: '你选择了继续冲在前线。虽然伤痕累累，但你成为了浮空要塞的传奇。', failText: '你继续冲在前线，但身体终于支撑不住。你在一场战斗中倒下了。', effects: { strength: 10, health: -5 }, failEffects: { health: -30, luck: -5 }, flags: ['branch_identity_frontliner_path'], failFlags: ['branch_identity_frontliner_path_fail'], relationshipEffects: { 'dawn': 10 } },
      { text: '退居幕后培养新人', successRate: 0.75, successText: '你选择了退居幕后，培养出了一批优秀的前线攻略者。', failText: '你选择了退居幕后，但发现自己无法适应平静的生活。你最终还是回到了前线。', effects: { charisma: 8, intelligence: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_frontliner_new'], failFlags: ['branch_identity_frontliner_new_fail'], relationshipEffects: { 'shadow': 10 } },
    ],
    flags: ['chain_frontliner_adult_1'],
    requiredFlags: ['chain_frontliner_growth_0'],
    identityExclusive: 'frontliner',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_frontliner_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你培养的学生中有人超越了你的巅峰记录。看着他在战场上冲锋陷阵，你流下了欣慰的泪水。',
      '{npc}赞叹："你不仅是最强的前线攻略者，也是最伟大的导师。你的精神将永远传承下去。"',
    ],
    effects: { charisma: 10, strength: 3 },
    flags: ['chain_frontliner_special_0'],
    requiredFlags: ['chain_frontliner_adult_0'],
    identityExclusive: 'frontliner',
    chainPriority: 3,
  },
  {
    id: 'sa_ie_frontliner_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你成为了"前线精神"的象征。后人称你为"不朽之盾"。你的故事激励了无数冒险者勇敢地站在最前面——因为有人在守护他们的后背。',
      '你在{location}的墓碑上刻着："前线不是最危险的地方，前线是最需要勇气的地方。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_frontliner_special_1'],
    requiredFlags: ['chain_frontliner_adult_0'],
    identityExclusive: 'frontliner',
    chainPriority: 3,
  },

  // Identity Exclusive — 治疗者 (healer)
  {
    id: 'sa_ie_healer_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就有治愈他人的天赋。当其他孩子还在玩耍时，你已经能用双手缓解{location}中受伤冒险者的疼痛。{npc}说你是"被治愈之神选中的人"。',
      '作为治疗者，你五岁那年不小心治愈了{location}一只受伤的小怪物。治疗者协会的使者找到了你的父母："这个孩子属于治疗院。"',
    ],
    effects: { intelligence: 5, charisma: 3 },
    flags: ['chain_healer_childhood_0'],
    identityExclusive: 'healer',
  },
  {
    id: 'sa_ie_healer_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你被带到了治疗者协会，接受训练。{location}的治疗院中，你学会了如何治疗各种伤势、如何解除毒素、如何在死亡边缘拉回生命。',
      '{npc}——一位传奇治疗者——告诉你："治疗者不是辅助，治疗者是希望。在这个死亡随时降临的世界里，一次成功的治疗就是最大的奇迹。"',
    ],
    effects: { intelligence: 5, charisma: 3 },
    flags: ['chain_healer_childhood_1'],
    identityExclusive: 'healer',
  },
  {
    id: 'sa_ie_healer_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}的一场Boss战中负责治疗。你的精准治疗让前线攻略者们持续战斗，最终成功击杀了Boss。',
      '你开始在{location}专门为独行者提供免费治疗——因为他们没有队友照顾。你的名声逐渐传开，越来越多的冒险者愿意保护你。',
    ],
    effects: { intelligence: 6, charisma: 3 },
    flags: ['chain_healer_growth_0'],
    requiredFlags: ['chain_healer_childhood_0'],
    identityExclusive: 'healer',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_healer_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}遇到了一个难题：一位前线攻略者受到了致命伤，常规治疗无效。你必须冒险使用禁术才能救他。',
      '{npc}告诉你："真正的治疗者，不是遵守规则，而是守护生命。但每一次越界，都要付出代价。"',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_healer_growth_1'],
    requiredFlags: ['chain_healer_childhood_0'],
    identityExclusive: 'healer',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_healer_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你已是浮空要塞最受人尊敬的治疗者。但治疗者协会希望你只治疗"有价值"的人，放弃那些"没有前途"的冒险者。',
      '你在{location}遇到了一群被公会抛弃的伤者。他们已经奄奄一息。你冒着被协会惩罚的风险，彻夜为他们治疗。',
    ],
    effects: { charisma: 8, intelligence: 3 },
    flags: ['chain_healer_adult_0'],
    requiredFlags: ['chain_healer_growth_0'],
    identityExclusive: 'healer',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_healer_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：遵守协会规则，只治疗"有价值"的人，获得地位和财富；或者治疗所有人，但永远被协会排斥。',
    ],
    choices: [
      { text: '治疗所有人', successRate: 0.6, successText: '你选择了治疗所有人。虽然被协会排斥，但你赢得了所有冒险者的爱戴。', failText: '你选择治疗所有人，但协会切断了你的资源来源。你无法获得稀有药材，救不了重伤者。', effects: { charisma: 10, intelligence: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_healer_path'], failFlags: ['branch_identity_healer_path_fail'], relationshipEffects: { 'feather': 10 } },
      { text: '遵守协会规则', successRate: 0.75, successText: '你选择了遵守协会规则，获得了地位和财富。但每当看到被放弃的伤者，你的心都在滴血。', failText: '你遵守了协会规则，但你的良心日夜折磨着你。你最终患上了严重的抑郁症。', effects: { luck: 8, intelligence: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_healer_new'], failFlags: ['branch_identity_healer_new_fail'], relationshipEffects: { 'dawn': 10 } },
    ],
    flags: ['chain_healer_adult_1'],
    requiredFlags: ['chain_healer_growth_0'],
    identityExclusive: 'healer',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_healer_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你用禁术救活了那位前线攻略者。消息传出后，浮空要塞的所有冒险者都将你奉为神明。治疗者协会不得不重新评估你的价值。',
      '{npc}检查了你的治疗记录后大惊失色："这不是普通的治疗...你在治疗中透支了自己的生命力！这是传说中的「生命共享」！"',
    ],
    effects: { intelligence: 10, health: -5 },
    flags: ['chain_healer_special_0'],
    requiredFlags: ['chain_healer_adult_0'],
    identityExclusive: 'healer',
    chainPriority: 3,
  },
  {
    id: 'sa_ie_healer_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你成为了"生命共享"的创始人。后人称你为"治愈之神"。你的治疗让无数濒临死亡的冒险者重新站了起来——生命，终于不再是富人的专利。',
      '你在{location}的治疗院门口刻着："每一个生命都值得被拯救，无论他有多弱小。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_healer_special_1'],
    requiredFlags: ['chain_healer_adult_0'],
    identityExclusive: 'healer',
    chainPriority: 3,
  },

  // Identity Exclusive — 商人 (merchant)
  {
    id: 'sa_ie_merchant_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就有敏锐的商业嗅觉。当其他孩子还在玩耍时，你已经开始在{location}之间倒卖小物件。{npc}说你是"天生的商人"。',
      '作为商人的后裔，你五岁那年就用一块石头换到了{location}的稀有道具。你的父母震惊地看着你——连他们都不知道那块石头的价值。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['chain_merchant_childhood_0'],
    identityExclusive: 'merchant',
  },
  {
    id: 'sa_ie_merchant_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你被带到了商人协会，接受训练。{location}的市场中，你学会了如何辨别物品价值、如何谈判、如何用信息差赚取利润。',
      '{npc}——一位传奇商人——告诉你："商人不是骗子，商人是价值的发现者。但记住，最好的交易是让双方都满意的交易。"',
    ],
    effects: { charisma: 5, intelligence: 3 },
    flags: ['chain_merchant_childhood_1'],
    identityExclusive: 'merchant',
  },
  {
    id: 'sa_ie_merchant_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}之间建立了第一条贸易路线。虽然只是一条小路线，但你已经能通过低买高卖赚取可观的利润。',
      '你开始在{location}专门为独行者提供便宜的装备——因为他们买不起公会商店的高价货。你的名声逐渐传开，越来越多的冒险者愿意光顾你的店铺。',
    ],
    effects: { charisma: 6, luck: 3 },
    flags: ['chain_merchant_growth_0'],
    requiredFlags: ['chain_merchant_childhood_0'],
    identityExclusive: 'merchant',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_merchant_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}发现了一笔惊人的商机：某个层落的道具因为信息不通而价格极低，但在另一个层落却是抢手货。',
      '{npc}警告你："这笔商机太明显了。如果你公布它，你将面临激烈的竞争；如果你独吞它，你将获得无尽的财富，但可能得罪当地的商人。"',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_merchant_growth_1'],
    requiredFlags: ['chain_merchant_childhood_0'],
    identityExclusive: 'merchant',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_merchant_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你已是浮空要塞最成功的商人之一。但大型公会想控制你的贸易路线，只为他们的成员服务。',
      '你在{location}遇到了一群被公会排斥的独行者。他们买不起装备，只能用最原始的武器战斗。你决定为他们提供分期付款的服务。',
    ],
    effects: { charisma: 8, luck: 3 },
    flags: ['chain_merchant_adult_0'],
    requiredFlags: ['chain_merchant_growth_0'],
    identityExclusive: 'merchant',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_merchant_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：接受大型公会的垄断合同，控制所有贸易路线；或者继续自由经营，但面临公会的打压。',
    ],
    choices: [
      { text: '坚持自由经营', successRate: 0.6, successText: '你选择了坚持自由经营。虽然面临打压，但你赢得了所有冒险者的信任。', failText: '你坚持自由经营，但大型公会切断了你的货源。你的店铺被迫关闭。', effects: { charisma: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_merchant_path'], failFlags: ['branch_identity_merchant_path_fail'], relationshipEffects: { 'hammer': 10 } },
      { text: '接受垄断合同', successRate: 0.75, successText: '你选择了接受垄断合同，控制了所有贸易路线。你成为了浮空要塞最富有的人。', failText: '你接受了垄断合同，但公会的规则让你窒息。你的商业直觉被规则束缚，再也无法突破。', effects: { luck: 8, intelligence: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_merchant_new'], failFlags: ['branch_identity_merchant_new_fail'], relationshipEffects: { 'blood_blade': 10 } },
    ],
    flags: ['chain_merchant_adult_1'],
    requiredFlags: ['chain_merchant_growth_0'],
    identityExclusive: 'merchant',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_merchant_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你建立了浮空要塞第一个"公平交易市场"。所有冒险者都可以在这里以合理的价格买卖物品。大型公会试图封杀你，但已经太晚了。',
      '{npc}感叹："你改变了商业的游戏规则。以前，贸易是权力的工具；现在，贸易是自由的桥梁。"',
    ],
    effects: { charisma: 10, luck: 5 },
    flags: ['chain_merchant_special_0'],
    requiredFlags: ['chain_merchant_adult_0'],
    identityExclusive: 'merchant',
    chainPriority: 3,
  },
  {
    id: 'sa_ie_merchant_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '百年后，你的公平交易市场成为了浮空要塞的基石。没有人知道"公平商人"的真实身份，但每当有人完成一笔公平交易时，他们都会默默感谢。',
      '你在{location}的市场门口刻着："财富不属于垄断者，财富属于所有勤劳的人。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_merchant_special_1'],
    requiredFlags: ['chain_merchant_adult_0'],
    identityExclusive: 'merchant',
    chainPriority: 3,
  },

  // Identity Exclusive — 角色扮演者 (roleplayer)
  {
    id: 'sa_ie_roleplayer_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你从小就沉浸在自己的世界里。当其他孩子在{location}玩耍时，你却扮演着一位勇敢的骑士。{npc}说你是"天生的演员"。',
      '作为角色扮演者，你五岁那年就在{location}举办了一场"怪物讨伐剧"。虽然只是一场游戏，但你的表演让所有观众都信以为真。',
    ],
    effects: { luck: 5, charisma: 3 },
    flags: ['chain_roleplayer_childhood_0'],
    identityExclusive: 'roleplayer',
  },
  {
    id: 'sa_ie_roleplayer_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.88,
    templates: [
      '你被带到了角色扮演者协会，接受训练。{location}的舞台上，你学会了如何扮演各种角色、如何用表演影响他人、如何在角色中找到真正的自己。',
      '{npc}——一位传奇角色扮演者——告诉你："角色扮演不是逃避，角色扮演是探索。每一个角色，都是你内心的一部分。"',
    ],
    effects: { luck: 5, charisma: 3 },
    flags: ['chain_roleplayer_childhood_1'],
    identityExclusive: 'roleplayer',
  },
  {
    id: 'sa_ie_roleplayer_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}的一场Boss战中扮演了"诱饵"的角色。你的表演让Boss完全忽视了真正的攻击者，最终Boss被成功击杀。',
      '你开始在{location}专门为紧张的冒险者们表演戏剧——因为在这个死亡随时降临的世界里，笑声是最珍贵的礼物。',
    ],
    effects: { charisma: 6, luck: 3 },
    flags: ['chain_roleplayer_growth_0'],
    requiredFlags: ['chain_roleplayer_childhood_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_roleplayer_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}扮演了一位"先知"。虽然你只是即兴表演，但你说出的预言竟然一一应验。所有人都说你是"被命运选中的人"。',
      '{npc}告诉你："你终于明白了角色扮演的真正力量——不是表演，而是创造。当你完全相信一个角色时，现实也会跟着改变。"',
    ],
    effects: { luck: 6, charisma: 3 },
    flags: ['chain_roleplayer_growth_1'],
    requiredFlags: ['chain_roleplayer_childhood_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 1,
  },
  {
    id: 'sa_ie_roleplayer_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '成年后，你已是浮空要塞最受欢迎的角色扮演者。但有些人认为你的行为"不正经"，在严肃的生死游戏中没有价值。',
      '你在{location}遇到了一位因长期战斗而精神崩溃的前线攻略者。他拒绝与人交流，但对你的表演产生了反应。',
    ],
    effects: { charisma: 8, luck: 3 },
    flags: ['chain_roleplayer_adult_0'],
    requiredFlags: ['chain_roleplayer_growth_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_roleplayer_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.9,
    templates: [
      '你面临抉择：放弃角色扮演，成为一个"正经"的冒险者；或者继续坚持，但永远被主流社会排斥。',
    ],
    choices: [
      { text: '坚持角色扮演', successRate: 0.6, successText: '你选择了坚持角色扮演。虽然被排斥，但你治愈了无数人的精神创伤。', failText: '你坚持角色扮演，但越来越多的人认为你是疯子。你最终被放逐到了塔的底层。', effects: { charisma: 10, luck: 5 }, failEffects: { health: -10, luck: -5 }, flags: ['branch_identity_roleplayer_path'], failFlags: ['branch_identity_roleplayer_path_fail'], relationshipEffects: { 'feather': 10 } },
      { text: '放弃角色扮演', successRate: 0.75, successText: '你选择了放弃角色扮演，成为了普通的冒险者。但你发现，没有表演的生活让你失去了灵魂。', failText: '你放弃了角色扮演，但你的天赋让你在新的道路上也无法出类拔萃。你成为了一个平庸的冒险者。', effects: { luck: 8, strength: 5 }, failEffects: { strength: -3 }, flags: ['branch_identity_roleplayer_new'], failFlags: ['branch_identity_roleplayer_new_fail'], relationshipEffects: { 'hammer': 10 } },
    ],
    flags: ['chain_roleplayer_adult_1'],
    requiredFlags: ['chain_roleplayer_growth_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 2,
  },
  {
    id: 'sa_ie_roleplayer_07', category: 'identity_exclusive', minAge: 10, maxAge: 30, probability: 0.75,
    templates: [
      '你扮演了一位"解放者"，号召所有被压迫的冒险者站起来反抗不公。虽然这只是一场表演，但你的话语激发了真正的革命。',
      '{npc}惊叹："你不仅是最伟大的演员，也是最伟大的领袖。你的表演让虚假成为了真实。"',
    ],
    effects: { charisma: 10, luck: 5 },
    flags: ['chain_roleplayer_special_0'],
    requiredFlags: ['chain_roleplayer_adult_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 3,
  },
  {
    id: 'sa_ie_roleplayer_08', category: 'identity_exclusive', minAge: 30, maxAge: 60, probability: 0.75,
    templates: [
      '你成为了"角色扮演之道"的创始人。后人称你为"千面之神"。你的表演让无数绝望的冒险者重新找到了生活的意义——在这个虚假的世界里，真实反而存在于表演之中。',
      '你在{location}的舞台幕布上刻着："人生不过是一场大戏，重要的是演好每一个角色。"',
    ],
    effects: { special: 10, health: -5 },
    flags: ['chain_roleplayer_special_1'],
    requiredFlags: ['chain_roleplayer_adult_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 3,
  },
];
