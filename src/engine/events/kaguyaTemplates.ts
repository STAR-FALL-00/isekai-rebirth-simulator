import type { EventTemplate } from './types';

// 辉夜大小姐想让我告白 — 约100 event templates
// Generated: 2026-04-27

export const kaguyaTemplates: EventTemplate[] = [
  // 通用童年 (3)
  {
    id: 'kg_ch_01', category: 'childhood', minAge: 0, maxAge: 6, probability: 0.04,
    templates: [
      '你出生在一个显赫的家庭。从小，你就被教导要成为完美的存在。{npc}断言你将来一定能进入秀知院。',
      '你的第一声啼哭引发了全家的欢呼，{npc}颤抖着说："这孩子...天生就是为了站在顶点而生的。"',
      '你降生的瞬间，{location}的樱花逆季绽放，仿佛连自然都在为你庆祝。',
    ],
    effects: { luck: 10, special: 8, charisma: 5 },
  },
  {
    id: 'kg_ch_02', category: 'childhood', minAge: 3, maxAge: 10, probability: 0.15,
    templates: [
      '你在{location}玩耍时，展现出了远超同龄人的智慧。{npc}惊讶地发现你的头脑战天赋正在觉醒！',
      '五岁时，你在{location}无意间解开了一个复杂的逻辑谜题，让所有大人都自愧不如。',
      '{npc}为你进行智力测试，发现你的智商远超常人。',
    ],
    effects: { intelligence: 6, strength: 4 },
  },
  {
    id: 'kg_ch_03', category: 'childhood', minAge: 4, maxAge: 12, probability: 0.55,
    templates: [
      '你在{location}救了一只受伤的小猫，它成为了你童年最好的朋友。',
      '{npc}在你入学时送了一支钢笔，后来你发现那是父亲珍贵的遗物。',
      '你从小就能看穿别人的小心思，{npc}说这是一种特殊的天赋。',
      '你在{location}度过了平淡但快乐的童年，智商在不知不觉中缓慢增长。',
    ],
    effects: { special: 3, luck: 2 },
  },
  // 通用成长 (3)
  {
    id: 'kg_gr_01', category: 'growth', minAge: 13, maxAge: 20, probability: 0.03,
    templates: [
      '你在{location}苦读了三天三夜，考试成绩出来了——年级第一！你的头脑战天赋震惊全校。',
      '一次偶然的辩论中，你在{location}以三寸不烂之舌说服了所有人，成为了校园传说。',
      '{legend}的指导让你在{location}顿悟了策略的精髓，从此你的头脑战水平突飞猛进。',
    ],
    effects: { intelligence: 10, special: 8, strength: 5 },
  },
  {
    id: 'kg_gr_02', category: 'growth', minAge: 14, maxAge: 22, probability: 0.15,
    templates: [
      '你在{location}加入了学生会，开始接触到真正的"天才世界"。',
      '{npc}带你参加各种社团活动，你在{location}的表现赢得了众人的认可。',
      '你发现了{legend}留下的策略笔记，阅读后获益匪浅。',
    ],
    effects: { strength: 6, special: 5 },
  },
  {
    id: 'kg_gr_03', category: 'growth', minAge: 13, maxAge: 25, probability: 0.55,
    templates: [
      '你每天在{location}勤奋学习，虽然进步缓慢但根基扎实。',
      '{npc}督促你努力，你不敢懈怠。',
      '你在{location}读了很多策略书籍，眼界开阔了不少。',
      '平平淡淡的一年，你在{location}默默积累着经验。',
    ],
    effects: { intelligence: 2, strength: 2 },
  },
  // 通用成年 (2)
  {
    id: 'kg_ad_01', category: 'adult', minAge: 26, maxAge: 45, probability: 0.18,
    templates: [
      '你在{location}建立了自己的事业，各方人才纷纷来投。',
      '你参与了{legend}相关的大规模项目，在关键时刻力挽狂澜。',
      '你在{location}收下了第一个弟子，将自己的所学倾囊相授。',
    ],
    effects: { charisma: 8, strength: 5, special: 5 },
  },
  {
    id: 'kg_ad_02', category: 'adult', minAge: 26, maxAge: 50, probability: 0.55,
    templates: [
      '你在{location}处理日常工作，事业稳步发展。',
      '{npc}来找你帮忙，你出手解决了他的难题。',
      '你在{location}度过了平静的一年，能力稳步提升。',
    ],
    effects: { strength: 2, intelligence: 2, special: 2 },
  },
  // 通用老年 (1)
  {
    id: 'kg_el_01', category: 'elder', minAge: 50, maxAge: 120, probability: 0.55,
    templates: [
      '你在{location}钻研更高阶的管理理论，试图突破社会精英的限制。',
      '你开始招收学生，在{location}传授毕生所学的策略知识。',
      '你已是{location}的传说级人物，后人将你的名字载入史册。',
    ],
    effects: { intelligence: 3, special: 2 },
  },
  // 战斗 (3) — 在kaguya世界表现为"头脑战/竞争"
  {
    id: 'kg_cb_01', category: 'combat', minAge: 15, maxAge: 40, probability: 0.04,
    templates: [
      '你在{location}以一己之力在辩论赛中对抗三位对手，最终大获全胜，一战成名！',
      '{legend}的继承人找上了你，你们在{location}展开了一场惊天头脑战，你以绝对优势胜出！',
      '你为了保护{location}的学生会，独自对抗入侵的{legend}势力，创造了不可能的奇迹。',
    ],
    effects: { strength: 12, charisma: 8, health: -10 },
  },
  {
    id: 'kg_cb_02', category: 'combat', minAge: 15, maxAge: 45, probability: 0.18,
    templates: [
      '你在{location}遭遇强敌，展开了一场激烈的头脑战，最终险胜。',
      '你和{npc}在{location}进行策略对决，双方都获益匪浅。',
      '你为了保护同伴，在{location}与竞争对手激战，精力大损。',
    ],
    effects: { strength: 5, health: -3 },
  },
  {
    id: 'kg_cb_03', category: 'combat', minAge: 15, maxAge: 40, probability: 0.55,
    templates: [
      '你在{location}进行了日常策略训练，头脑略有精进。',
      '你和同伴在{location}模拟对决，互相学习。',
      '你在{location}演练新学的谈判技巧，逐渐熟练。',
    ],
    effects: { strength: 2 },
  },
  // 恋爱/羁绊 (3)
  {
    id: 'kg_rm_01', category: 'romance', minAge: 15, maxAge: 30, probability: 0.04,
    templates: [
      '你在{location}与{npc}相遇的瞬间，心跳加速——你们的恋爱头脑战正式开始了！',
      '{npc}为了救你，不惜暴露了自己的真实感情。你站在{location}发誓：一定要让对方先告白！',
      '你们的故事被{legend}记载，成为了{location}永恒的恋爱传说。',
    ],
    effects: { charisma: 10, luck: 8, health: 5 },
  },
  {
    id: 'kg_rm_02', category: 'romance', minAge: 16, maxAge: 30, probability: 0.18,
    templates: [
      '你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。',
      '你和{npc}在{location}月下相会，互诉衷肠。',
      '{npc}因为你的才华而倾心，主动向你示好。',
    ],
    effects: { charisma: 4, luck: 3 },
  },
  {
    id: 'kg_rm_03', category: 'romance', minAge: 20, maxAge: 45, probability: 0.55,
    templates: [
      '你在{location}认识了一个有趣的人，但关系尚不明确。',
      '{npc}对你有些好感，但你还没想好如何回应。',
      '这一年感情上没有太大的波澜，你专注于学业和事业。',
    ],
    effects: { charisma: 2 },
  },
  // 修炼/提升 (3)
  {
    id: 'kg_cult_01', category: 'cultivation', minAge: 20, maxAge: 50, probability: 0.04,
    templates: [
      '你在{location}闭关研究了九九八十一天，出关时眼神锐利——你已触摸到了{legend}的境界！',
      '你的策略造诣达到了前所未有的高度，{location}的人都为你的智慧而折服。',
      '{legend}亲自降临{location}，为你指点谋略大道。',
    ],
    effects: { special: 12, intelligence: 10, strength: 5 },
  },
  {
    id: 'kg_cult_02', category: 'cultivation', minAge: 18, maxAge: 45, probability: 0.18,
    templates: [
      '你成功将{legend}的策略融会贯通，实力暴涨！',
      '你在{location}经历了一场奇遇，谋略水平大涨，连{npc}都震惊不已。',
      '你突破了困扰多年的策略瓶颈，{location}的人都为你的成长而惊叹。',
    ],
    effects: { special: 8, intelligence: 5 },
  },
  {
    id: 'kg_cult_03', category: 'cultivation', minAge: 13, maxAge: 40, probability: 0.55,
    templates: [
      '你在{location}按部就班地学习和实践，虽然没有突破但根基更加稳固。',
      '{npc}检查了你的学习进度，表示满意。',
      '你在{location}研读策略典籍，对一些战术有了新的理解。',
    ],
    effects: { special: 2, intelligence: 1 },
  },
  // 探索 (3)
  {
    id: 'kg_ex_01', category: 'exploration', minAge: 20, maxAge: 50, probability: 0.05,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的核心策略笔记，获得了改变命运的机缘！',
      '你在{location}找到了通往成功之路的入口，{legend}的秘密向你敞开。',
      '你解开了一个困扰世人万年的谜题，{location}的真相让你震惊。',
    ],
    effects: { luck: 10, intelligence: 8, special: 6 },
  },
  {
    id: 'kg_ex_02', category: 'exploration', minAge: 15, maxAge: 40, probability: 0.18,
    templates: [
      '你深入{location}探险，发现了未知的秘密。',
      '你在{location}找到了一些有价值的资源，收获颇丰。',
      '你在{location}迷路了，却意外发现了一处隐蔽的学习圣地。',
    ],
    effects: { luck: 4, strength: 2 },
  },
  {
    id: 'kg_ex_03', category: 'exploration', minAge: 13, maxAge: 35, probability: 0.55,
    templates: [
      '你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。',
      '你跟着{npc}去{location}采集了一些资料。',
      '你在{location}发现了一些普通的信息，聊胜于无。',
    ],
    effects: { luck: 2 },
  },
  // 世界主线 (3)
  {
    id: 'kg_ws_01', category: 'world_story', minAge: 30, maxAge: 60, probability: 0.05,
    templates: [
      '{legend}的阴谋彻底暴露，秀知院的真相浮出水面，你被卷入了漩涡中心！',
      '一场席卷整个学园的大事件爆发了，{location}首当其冲，你必须做出选择。',
      '学园的规则开始改变，{legend}的意志降临，所有人都受到了影响。',
    ],
    effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 },
  },
  {
    id: 'kg_ws_02', category: 'world_story', minAge: 25, maxAge: 50, probability: 0.18,
    templates: [
      '你发现{location}隐藏着改变学园的秘密，各方势力为此展开了明争暗斗。',
      '{npc}告诉你一个关于学园的惊天秘密，你的世界观被彻底颠覆。',
      '传说中的{legend}即将降临，所有人都在做准备，{location}的气氛紧张到了极点。',
    ],
    effects: { intelligence: 6, charisma: 4 },
  },
  {
    id: 'kg_ws_03', category: 'world_story', minAge: 20, maxAge: 45, probability: 0.55,
    templates: [
      '你听到了一些关于{legend}的传闻，但真假难辨。',
      '{location}发生了一些小变化，但你没有太在意。',
      '{npc}跟你聊了聊最近的学园时事，你表示关注。',
    ],
    effects: { intelligence: 2 },
  },
  // 隐藏 (2)
  {
    id: 'kg_hd_01', category: 'hidden', minAge: 35, maxAge: 80, probability: 0.08,
    templates: [
      '你在{location}发现了一个被禁止入内的区域，里面藏着惊人的秘密。',
      '你解开了{legend}留下的谜题，获得了一份隐藏的传承。',
      '{npc}告诉你一个只有极少数人知道的秘密，你感到责任重大。',
    ],
    effects: { intelligence: 10, special: 8 },
    conditions: [{ stat: 'intelligence', min: 100 }],
  },
  {
    id: 'kg_hd_02', category: 'hidden', minAge: 20, maxAge: 60, probability: 0.35,
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
    id: 'kg_dt_01', category: 'death', minAge: 0, maxAge: 100, probability: 0.35,
    templates: [
      '你在{location}遭遇不测，精力迅速流逝。',
      '你的身体到达了极限，{npc}无能为力。',
      '{legend}的诅咒降临在你身上，你无法抵抗。',
    ],
    effects: { health: -60 },
  },
  {
    id: 'kg_dt_02', category: 'death', minAge: 0, maxAge: 150, probability: 0.55,
    templates: [
      '你在{location}进行了最后的竞争，英勇倒下。',
      '精力耗尽，你在{location}静静地闭上了眼睛。',
      '你走火入魔，在{location}化为灰烬。',
    ],
    effects: { health: -80 },
  },
  {
    id: 'kg_dt_03', category: 'death', minAge: 0, maxAge: 200, probability: 0.75,
    templates: [
      '你在{location}寿终正寝，周围的人都来为你送行。',
      '你安详地在{location}离世，一生无憾。',
      '{npc}守在你的床前，目送你离开这个世界。',
    ],
    effects: { health: -100 },
  },
  // 废材逆袭 (8)
  {
    id: 'kg_tr_01', category: 'trash_exclusive', minAge: 3, maxAge: 8, probability: 0.35,
    templates: [
      '你的入学测试结果显示：成绩垫底，且毫无特长。{npc}摇头叹息："这孩子...不适合秀知院。"',
      '作为被判定为废材的学生，你在{location}的入学仪式上手足无措——所有人都比你优秀。',
    ],
    effects: { strength: 2, luck: 1 },
    talentExclusive: 'trash',
  },
  {
    id: 'kg_tr_02', category: 'trash_exclusive', minAge: 7, maxAge: 12, probability: 0.35,
    templates: [
      '你不甘心。每晚偷偷在{location}的图书馆里研读借来的《基础策略入门》，一遍又一遍地练习最基础的逻辑推理。',
      '你在{location}的旧书摊上发现了一本破损的《谋略数学导论》。书中说："天赋可以弥补，公式可以超越天才。"你如获至宝。',
    ],
    effects: { intelligence: 3 },
    talentExclusive: 'trash',
  },
  {
    id: 'kg_tr_03', category: 'trash_exclusive', minAge: 14, maxAge: 20, probability: 0.32,
    templates: [
      '你十四岁那年，凭借扎实的基础考入了秀知院的自费班——你是唯一一个靠努力入学的差生。',
      '别的天才用高级策略，你用最基础的逻辑。但你的策略精准度却超过了他们——因为你懂得计算人心的流动轨迹。',
    ],
    effects: { special: 4 },
    talentExclusive: 'trash',
  },
  {
    id: 'kg_tr_04', category: 'trash_exclusive', minAge: 19, maxAge: 25, probability: 0.32,
    templates: [
      '二十岁那年，你在{location}的考试中提出了一个大胆的理论："策略可以用数学公式精确计算，不需要依赖天赋。"教授们哄堂大笑。',
      '{npc}——一位被学园边缘化的老教师——私下找到了你："孩子，你的理论...我在三十年前就提出过。他们笑了我三十年。你愿意和我一起证明它吗？"',
    ],
    effects: { intelligence: 5 },
    talentExclusive: 'trash',
  },
  {
    id: 'kg_tr_05', category: 'trash_exclusive', minAge: 26, maxAge: 35, probability: 0.3,
    templates: [
      '成年后，你的"公式策略"理论开始在小范围内传播。一些被判定为差生的人找到了你。',
      '你在{location}建立了一间小小的"策略实验室"。学园的校长亲自来警告你："你在颠覆教育的根基。"',
    ],
    effects: { special: 5 },
    talentExclusive: 'trash',
  },
  {
    id: 'kg_tr_06', category: 'trash_exclusive', minAge: 10, maxAge: 30, probability: 0.28,
    templates: [
      '你成功证明了"公式策略"的可行性！一位差生用你的方法考上了顶尖大学。',
      '学园的使者找到了你："你的理论...与学园顶层的智慧之书上的记载一模一样。千年前，有一位贤者也走过这条路。"',
    ],
    effects: { intelligence: 8 },
    talentExclusive: 'trash',
  },
  {
    id: 'kg_tr_07', category: 'trash_exclusive', minAge: 30, maxAge: 50, probability: 0.28,
    templates: [
      '你成为了"公式策略"的创始人。后人称你为"差生的救星"。你的理论让无数被判定为废材的人拥有了成功的机会。',
      '你在{location}的墓碑上刻着："成功不属于天赋者，成功属于所有渴望真理的人。"',
    ],
    effects: { special: 8, charisma: 5 },
    talentExclusive: 'trash',
  },
  {
    id: 'kg_tr_08', category: 'trash_exclusive', minAge: 15, maxAge: 40, probability: 0.25,
    templates: [
      '你的"无天赋策略"被古老的企业注意到。他们邀请你加入，因为你的策略完全不同于传统体系，是规则的漏洞。',
      '在{location}的一次商业对决中，你用纯公式策略击败了一位天才企业家。全场寂静——然后爆发出雷鸣般的掌声。',
    ],
    effects: { strength: 6, charisma: 4 },
    talentExclusive: 'trash',
  },
  // 重大抉择 (4)
  {
    id: 'kg_major_01', category: 'major', minAge: 14, maxAge: 18, probability: 0.55,
    templates: [
      '十五岁那年，你陷入了恋爱的漩涡。在秀知院，先告白的人就输了——你面临着人生最重要的抉择。',
    ],
    effects: { intelligence: 2, charisma: 1 },
    choices: [
      { text: '先告白就输了，坚持让对方先开口', successRate: 0.55, successText: '你决定坚持让对方先告白。在{location}的每一天都是一场精心策划的头脑战。你使出了浑身解数，终于让对方忍不住先开口了！你赢得了这场恋爱战争的胜利', failText: '你坚持让对方先告白，但对方也在等待你开口。你们就这样僵持着，错过了最佳的时机', effects: { special: 10, charisma: 5, luck: 5 }, failEffects: { luck: -5, charisma: -3 }, flags: ['kaguya_wait_confess'], failFlags: ['kaguya_wait_confess_fail'] },
      { text: '勇敢告白，不在乎输赢', successRate: 0.7, successText: '你决定勇敢告白。在{location}的樱花树下，你坦率地说出了自己的心意。对方愣了一下，然后露出了灿烂的笑容。原来，TA也一直在等这一刻', failText: '你勇敢告白了，但对方还没有准备好。虽然关系没有破裂，但气氛变得尴尬起来', effects: { charisma: 10, luck: 5, health: 5 }, failEffects: { charisma: -3, luck: -5 }, flags: ['kaguya_confess'], failFlags: ['kaguya_confess_fail'] },
      { text: '保持现状，享受暧昧', successRate: 0.6, successText: '你选择了保持现状。在{location}的日子里，你们享受着微妙的暧昧关系。虽然谁也没有告白，但那种心动的感觉比什么都美好', failText: '你选择了保持现状，但对方误以为你对他/她没有兴趣。渐渐地，你们的关系疏远了', effects: { luck: 8, health: 5 }, failEffects: { luck: -8, charisma: -5 }, flags: ['kaguya_status_quo'], failFlags: ['kaguya_status_quo_fail'] },
    ],
    flags: ['kaguya_major_15_seen'],
    chainPriority: 10,
  },
  {
    id: 'kg_major_02', category: 'major', minAge: 28, maxAge: 32, probability: 0.5,
    templates: [
      '三十岁那年，你已经在社会上站稳了脚跟。但面对感情，你依然犹豫不决。',
    ],
    effects: { charisma: 2 },
    choices: [
      { text: '表白心意，结束头脑战', successRate: 0.65, successText: '你终于决定结束这场漫长的头脑战。在{location}的烛光晚餐上，你坦率地说出了"我喜欢你"。对方的眼睛里闪着泪光："笨蛋，我早就知道了。"', failText: '你试图表白，但对方已经有了新的生活。你们的缘分，终究敌不过时间', effects: { charisma: 10, luck: 10, health: 5 }, failEffects: { charisma: -5, luck: -10, health: -5 }, flags: ['kaguya_confess_30'], failFlags: ['kaguya_confess_30_fail'] },
      { text: '继续头脑战，享受博弈', successRate: 0.5, successText: '你选择了继续头脑战。在{location}的博弈中，你和对方的关系越来越微妙。虽然谁也没有明说，但那份默契比什么都珍贵', failText: '你选择了继续头脑战，但对方厌倦了这种游戏。TA离开了，只留下一句话："我累了。"', effects: { special: 12, intelligence: 5 }, failEffects: { luck: -15, charisma: -5 }, flags: ['kaguya_mind_game'], failFlags: ['kaguya_mind_game_fail'] },
      { text: '放弃恋情，专注事业', successRate: 0.75, successText: '你选择了放弃恋情，全身心投入事业。多年后，你成为了行业的顶尖人物。虽然身边没有人陪伴，但你从未后悔', failText: '你放弃了恋情专注事业，但内心始终有一个空洞。你在深夜独自坐在{location}， wondering what if', effects: { strength: 15, intelligence: 10, charisma: -3 }, failEffects: { charisma: -10, luck: -5, health: -10 }, flags: ['kaguya_career_focus'], failFlags: ['kaguya_career_focus_fail'] },
    ],
    flags: ['kaguya_major_30_seen'],
    chainPriority: 10,
  },
  {
    id: 'kg_major_03', category: 'major', minAge: 43, maxAge: 47, probability: 0.48,
    templates: [
      '四十五岁那年，你已经事业有成。现在，你必须在爱情的面包之间做出最终选择。',
    ],
    effects: { luck: -2 },
    choices: [
      { text: '选择爱情', successRate: 0.6, successText: '你放弃了高薪职位，选择和心爱的人在一起。虽然生活不再奢华，但每一天都充满了幸福。{npc}说："你终于找到了真正的财富。"', failText: '你选择了爱情，但现实的残酷让你们的关系充满了矛盾。爱情终究敌不过柴米油盐', effects: { charisma: 15, luck: 10, health: 5 }, failEffects: { charisma: -10, luck: -10, health: -10 }, flags: ['kaguya_choose_love'], failFlags: ['kaguya_choose_love_fail'] },
      { text: '选择事业', successRate: 0.7, successText: '你选择了事业。在{location}的办公室里，你成为了行业领袖。虽然孤独，但你拥有了无数人梦寐以求的权力和财富', failText: '你选择了事业，但在登顶之后发现身边空无一人。你在深夜独自饮酒， wondering if it was worth it', effects: { strength: 15, intelligence: 10, charisma: 5 }, failEffects: { charisma: -15, luck: -10, health: -10 }, flags: ['kaguya_choose_career'], failFlags: ['kaguya_choose_career_fail'] },
      { text: '两者兼顾，挑战极限', successRate: 0.3, successText: '你没有选择任何一个极端，而是决定两者兼顾。虽然每天都很辛苦，但你同时拥有了自己爱的人和热爱的事业。{npc}惊叹："你做到了不可能的事！"', failText: '你试图两者兼顾，但最终两边都没有做好。事业受挫，爱情也产生了裂痕', effects: { strength: 10, charisma: 10, luck: 5, special: 5 }, failEffects: { strength: -5, charisma: -10, health: -15 }, flags: ['kaguya_both'], failFlags: ['kaguya_both_fail'] },
    ],
    flags: ['kaguya_major_45_seen'],
    chainPriority: 10,
  },
  {
    id: 'kg_major_04', category: 'major', minAge: 58, maxAge: 62, probability: 0.45,
    templates: [
      '六十岁那年，大限将至。你回顾一生，面临着最后的抉择。',
    ],
    effects: { health: -3 },
    choices: [
      { text: '与恋人共度余生', successRate: 0.65, successText: '你选择了与心爱的人一起度过最后的时光。在{location}的夕阳下，你们手牵着手，回忆着年轻时的点点滴滴。这是最完美的结局', failText: '你想与恋人共度余生，但对方已经先走一步。你独自守在{location}，泪如雨下', effects: { charisma: 15, luck: 10, health: 10 }, failEffects: { charisma: -15, luck: -15, health: -20 }, flags: ['kaguya_with_lover'], failFlags: ['kaguya_with_lover_fail'] },
      { text: '成为社会精英，名垂青史', successRate: 0.55, successText: '你选择了继续攀登社会的高峰。在{location}的颁奖台上，你接受了最高荣誉。全世界都在为你鼓掌，但你知道，这掌声中少了最重要的人', failText: '你追求社会精英的地位，但在最后关头被人暗算。你的名誉毁于一旦', effects: { strength: 15, intelligence: 10 }, failEffects: { charisma: -20, luck: -20, health: -30 }, flags: ['kaguya_elite'], failFlags: ['kaguya_elite_fail'] },
      { text: '回归平凡，安享晚年', successRate: 0.75, successText: '你选择了回归平凡。在{location}的小屋里，你种花养鸟，过着平静的生活。虽然没有辉煌，但内心无比安宁', failText: '你想回归平凡，但过去的光环让你无法融入普通人的生活。你成了孤独的隐士', effects: { luck: 15, health: 10, charisma: 5 }, failEffects: { charisma: -10, luck: -5, health: -10 }, flags: ['kaguya_ordinary'], failFlags: ['kaguya_ordinary_fail'] },
    ],
    flags: ['kaguya_major_60_seen'],
    chainPriority: 10,
  },
  // 境界突破 (14)
  {
    id: 'kg_realm_01', category: 'cultivation', minAge: 10, maxAge: 18, probability: 0.35,
    templates: [
      '你在{location}感受到了自己的成长——你正式踏入了学生会干事的大门！',
      '{npc}欣慰地看着你："从今天起，你不再只是普通学生，而是学生会的一员了。"',
    ],
    effects: { realm: 1, strength: 5, intelligence: 5 },
    conditions: [{ stat: 'intelligence', min: 20 }],
  },
  {
    id: 'kg_realm_02', category: 'cultivation', minAge: 15, maxAge: 25, probability: 0.3,
    templates: [
      '你在{location}经历了一场激烈的竞争，能力在压力下大幅提升——你晋升为学生会部长！',
      '你的策略已经可以影响整个部门，{npc}赞叹："这种成长速度...你是天才吗？"',
    ],
    effects: { realm: 2, strength: 8, special: 5 },
    conditions: [{ stat: 'strength', min: 40 }],
  },
  {
    id: 'kg_realm_03', category: 'cultivation', minAge: 20, maxAge: 35, probability: 0.25,
    templates: [
      '你在{location}感悟到了管理的本质，开始触及副会长的境界——那已非常人所能及！',
      '{legend}的力量在你体内觉醒，你可以施展接近"完美"级别的管理艺术了。',
    ],
    effects: { realm: 3, intelligence: 10, special: 8 },
    conditions: [{ stat: 'intelligence', min: 70 }],
  },
  {
    id: 'kg_realm_04', category: 'cultivation', minAge: 30, maxAge: 50, probability: 0.2,
    templates: [
      '你的管理能力已臻巅峰，{location}的师生们尊你为学生会长！',
      '{npc}专程从校外赶来，希望你将管理方法贡献给社会。',
    ],
    effects: { realm: 4, charisma: 10, intelligence: 8 },
    conditions: [{ stat: 'special', min: 80 }],
  },
  {
    id: 'kg_realm_05', category: 'cultivation', minAge: 40, maxAge: 70, probability: 0.15,
    templates: [
      '你的策略太过激进，社会将你视为变革者——但这恰恰证明了你的实力！',
      '{npc}警告你："成为社会精英意味着永无止境的压力。但你已经超越了普通人的束缚。"',
    ],
    effects: { realm: 5, strength: 12, special: 10 },
    conditions: [{ stat: 'strength', min: 100 }],
  },
  {
    id: 'kg_realm_06', category: 'cultivation', minAge: 50, maxAge: 100, probability: 0.1,
    templates: [
      '你感应到了企业家精神的召唤，在{location}准备创建自己的商业帝国。',
      '你回顾一生的策略研究，在{location}寻找触及商业巅峰的契机。',
    ],
    effects: { realm: 6, intelligence: 15, special: 12 },
    conditions: [{ stat: 'intelligence', min: 130 }],
  },
  {
    id: 'kg_realm_07', category: 'cultivation', minAge: 80, maxAge: 200, probability: 0.08,
    templates: [
      '你已是国家栋梁，在{location}守护着国家的未来。',
      '你将毕生的智慧融入社会的法则，成为了永恒存在的一部分。',
    ],
    effects: { realm: 7, charisma: 20, special: 15 },
    conditions: [{ stat: 'luck', min: 150 }],
  },
  {
    id: 'kg_realm_08', category: 'cultivation', minAge: 13, maxAge: 20, probability: 0.3,
    templates: [
      '你在{location}的学习中，策略思维大幅提升！',
      '{npc}的指导让你的谈判能力大幅提升。',
    ],
    effects: { strength: 5, intelligence: 3 },
  },
  {
    id: 'kg_realm_09', category: 'cultivation', minAge: 18, maxAge: 30, probability: 0.28,
    templates: [
      '你成功制定了一套属于自己的管理策略，实力大增！',
      '在{location}的办公室里，你完成了一份足以传世的商业计划书。',
    ],
    effects: { special: 6, charisma: 3 },
  },
  {
    id: 'kg_realm_10', category: 'cultivation', minAge: 25, maxAge: 40, probability: 0.25,
    templates: [
      '你领悟了{legend}的管理奥义，实力再上一个台阶！',
      '{npc}惊叹："这种领悟速度...你已经超越了同辈所有人。"',
    ],
    effects: { intelligence: 8, strength: 5 },
  },
  {
    id: 'kg_realm_11', category: 'cultivation', minAge: 35, maxAge: 55, probability: 0.22,
    templates: [
      '你在{location}与强敌的竞争中发现了自己的策略弱点，并加以改进。',
      '一次意外的失败反而让你突破了瓶颈，管理水平大幅提升。',
    ],
    effects: { strength: 6, special: 5, health: -5 },
  },
  {
    id: 'kg_realm_12', category: 'cultivation', minAge: 45, maxAge: 70, probability: 0.18,
    templates: [
      '你开始研究禁忌策略，在{location}的密室中获得了前所未有的力量。',
      '{legend}的秘密向你敞开，你的策略已经触及了社会不应涉及的领域。',
    ],
    effects: { special: 10, intelligence: 5, luck: -3 },
  },
  {
    id: 'kg_realm_13', category: 'cultivation', minAge: 60, maxAge: 100, probability: 0.12,
    templates: [
      '你感应到了领导力的存在，开始研究如何影响更多人。',
      '在{location}的古籍中，你发现了关于社会管理的失传知识。',
    ],
    effects: { charisma: 8, special: 8 },
  },
  {
    id: 'kg_realm_14', category: 'cultivation', minAge: 70, maxAge: 150, probability: 0.1,
    templates: [
      '你的存在本身已经开始影响{location}的社会风气，你正在向传奇人物转变。',
      '{npc}看着你，既敬畏又担忧："你已经走得太远了...还是普通人吗？"',
    ],
    effects: { special: 12, health: -5, intelligence: 5 },
  },
  // 身份专属 (40) — 每个身份4个
  // president(学生会会长)
  {
    id: 'kg_ie_president_01', category: 'identity_exclusive', minAge: 10, maxAge: 18, probability: 0.82,
    templates: [
      '你以全校第一的成绩进入了秀知院，并顺利当选为学生会会长。{npc}看着你，眼中满是期待。',
      '在{location}的就职典礼上，你发表了激动人心的演讲，全场掌声雷动。',
    ],
    effects: { strength: 5, luck: 3 },
    flags: ['chain_president_childhood_0'],
    identityExclusive: 'president',
  },
  {
    id: 'kg_ie_president_02', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '作为会长，你每天都要处理大量的学生会事务。{npc}经常和你暗中较劲，但你们的关系却越来越微妙。',
      '在{location}的学生会室里，你发现了{npc}偷偷为你准备的便当。你的心跳漏了一拍。',
    ],
    effects: { special: 8, charisma: 3 },
    flags: ['chain_president_growth_0'],
    requiredFlags: ['chain_president_childhood_0'],
    identityExclusive: 'president',
    chainPriority: 1,
  },
  {
    id: 'kg_ie_president_03', category: 'identity_exclusive', minAge: 20, maxAge: 35, probability: 0.78,
    templates: [
      '学生会面临着巨大的危机。你提出了一个大胆的计划，但所有人都反对。只有{npc}默默支持着你。',
      '在{location}的深夜，你和{npc}一起加班处理文件。那一刻，你们之间的距离前所未有地近。',
    ],
    effects: { strength: 6, intelligence: 4 },
    flags: ['chain_president_adult_0'],
    requiredFlags: ['chain_president_growth_0'],
    identityExclusive: 'president',
    chainPriority: 2,
  },
  {
    id: 'kg_ie_president_04', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.75,
    templates: [
      '毕业前夕，你终于明白了会长的真正意义——不是为了权力，而是为了守护重要的人。',
      '你对{npc}说："无论未来如何，我都会守护这个学生会。"{npc}红着脸转过了头。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_president_special_0'],
    requiredFlags: ['chain_president_adult_0'],
    identityExclusive: 'president',
    chainPriority: 3,
  },
  // vice_president(学生会副会长)
  {
    id: 'kg_ie_vice_president_01', category: 'identity_exclusive', minAge: 10, maxAge: 18, probability: 0.82,
    templates: [
      '你以优异的成绩进入了秀知院，并当选为副会长。{npc}是会长，你们的竞争从此开始。',
      '在{location}的竞选演讲中，你和{npc}针锋相对，但台下的人却觉得你们很般配。',
    ],
    effects: { strength: 5, luck: 3 },
    flags: ['chain_vice_president_childhood_0'],
    identityExclusive: 'vice_president',
  },
  {
    id: 'kg_ie_vice_president_02', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '作为副会长，你总是和会长唱反调。但{npc}知道，你的每一次反对都是为了学生会好。',
      '在{location}的学生会室里，你和{npc}因为一个方案争得面红耳赤。但争论结束后，你们却一起笑了起来。',
    ],
    effects: { special: 8, charisma: 3 },
    flags: ['chain_vice_president_growth_0'],
    requiredFlags: ['chain_vice_president_childhood_0'],
    identityExclusive: 'vice_president',
    chainPriority: 1,
  },
  {
    id: 'kg_ie_vice_president_03', category: 'identity_exclusive', minAge: 20, maxAge: 35, probability: 0.78,
    templates: [
      '学生会面临分裂危机。你和{npc}放下成见，联手化解了危机。那一刻，你们之间产生了前所未有的默契。',
      '在{location}的庆功宴上，{npc}悄悄对你说："谢谢你，副会长。没有你，我做不到。"',
    ],
    effects: { strength: 6, intelligence: 4 },
    flags: ['chain_vice_president_adult_0'],
    requiredFlags: ['chain_vice_president_growth_0'],
    identityExclusive: 'vice_president',
    chainPriority: 2,
  },
  {
    id: 'kg_ie_vice_president_04', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.75,
    templates: [
      '毕业前夕，你终于坦白了自己的感情。{npc}愣了一下，然后笑着说："我早就知道了，笨蛋。"',
      '你和{npc}约定：无论将来各自去了哪里，每年的今天都要回到{location}相见。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_vice_president_special_0'],
    requiredFlags: ['chain_vice_president_adult_0'],
    identityExclusive: 'vice_president',
    chainPriority: 3,
  },
  // secretary(书记)
  {
    id: 'kg_ie_secretary_01', category: 'identity_exclusive', minAge: 10, maxAge: 18, probability: 0.82,
    templates: [
      '你以活泼的性格和出众的才艺当选为书记。{npc}看着你说："有了你，学生会一定会很有趣。"',
      '在{location}的迎新会上，你的一首歌让全场沸腾。{npc}为你鼓掌，眼中满是欣赏。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['chain_secretary_childhood_0'],
    identityExclusive: 'secretary',
  },
  {
    id: 'kg_ie_secretary_02', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '作为书记，你总是用歌声和舞蹈活跃气氛。但{npc}发现，你独处时其实很安静。',
      '在{location}的音乐室里，你独自练习着新曲。{npc}推开门，你们四目相对，气氛微妙。',
    ],
    effects: { special: 8, charisma: 3 },
    flags: ['chain_secretary_growth_0'],
    requiredFlags: ['chain_secretary_childhood_0'],
    identityExclusive: 'secretary',
    chainPriority: 1,
  },
  {
    id: 'kg_ie_secretary_03', category: 'identity_exclusive', minAge: 20, maxAge: 35, probability: 0.78,
    templates: [
      '学生会举办了一场大型活动。你的组织才能大放异彩，所有人都对你刮目相看。',
      '在{location}的活动现场，{npc}悄悄对你说："你是我见过最努力的人。"你的脸红了。',
    ],
    effects: { strength: 6, intelligence: 4 },
    flags: ['chain_secretary_adult_0'],
    requiredFlags: ['chain_secretary_growth_0'],
    identityExclusive: 'secretary',
    chainPriority: 2,
  },
  {
    id: 'kg_ie_secretary_04', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.75,
    templates: [
      '毕业前夕，你举办了一场个人演唱会。{npc}坐在第一排，眼中含着泪光。',
      '你对{npc}说："我的每一首歌，都是为你而唱。"{npc}紧紧抱住了你。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_secretary_special_0'],
    requiredFlags: ['chain_secretary_adult_0'],
    identityExclusive: 'secretary',
    chainPriority: 3,
  },
  // accountant(会计)
  {
    id: 'kg_ie_accountant_01', category: 'identity_exclusive', minAge: 10, maxAge: 18, probability: 0.82,
    templates: [
      '你以精准的计算能力当选为会计。{npc}看着你说："数字不会说谎，希望你也是。"',
      '在{location}的财务审核中，你发现了一笔异常支出。{npc}对你刮目相看。',
    ],
    effects: { intelligence: 5, luck: 3 },
    flags: ['chain_accountant_childhood_0'],
    identityExclusive: 'accountant',
  },
  {
    id: 'kg_ie_accountant_02', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '作为会计，你总是阴郁地低着头。但{npc}发现，你的内心其实比任何人都温柔。',
      '在{location}的深夜，你发现{npc}独自哭泣。你没有说话，只是默默递上了手帕。',
    ],
    effects: { special: 8, charisma: 3 },
    flags: ['chain_accountant_growth_0'],
    requiredFlags: ['chain_accountant_childhood_0'],
    identityExclusive: 'accountant',
    chainPriority: 1,
  },
  {
    id: 'kg_ie_accountant_03', category: 'identity_exclusive', minAge: 20, maxAge: 35, probability: 0.78,
    templates: [
      '学生会的资金出现了巨大缺口。你夜以继日地工作，最终找到了解决方案。',
      '在{location}的办公室里，{npc}对你说："如果没有你，学生会早就垮了。"',
    ],
    effects: { strength: 6, intelligence: 4 },
    flags: ['chain_accountant_adult_0'],
    requiredFlags: ['chain_accountant_growth_0'],
    identityExclusive: 'accountant',
    chainPriority: 2,
  },
  {
    id: 'kg_ie_accountant_04', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.75,
    templates: [
      '毕业前夕，你终于露出了真心的笑容。{npc}说："你笑起来其实很好看。"',
      '你对{npc}说："谢谢你，没有放弃我。"{npc}红着脸转过了头。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_accountant_special_0'],
    requiredFlags: ['chain_accountant_adult_0'],
    identityExclusive: 'accountant',
    chainPriority: 3,
  },
  // ordinary_student(普通学生)
  {
    id: 'kg_ie_ordinary_student_01', category: 'identity_exclusive', minAge: 10, maxAge: 18, probability: 0.82,
    templates: [
      '你是一个普通学生，没有特殊的才能，也没有显赫的家世。但{npc}说："平凡也是一种力量。"',
      '在{location}的课堂上，你认真听讲的样子让{npc}记住了你。',
    ],
    effects: { luck: 5, charisma: 3 },
    flags: ['chain_ordinary_student_childhood_0'],
    identityExclusive: 'ordinary_student',
  },
  {
    id: 'kg_ie_ordinary_student_02', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '你加入了学生会，从杂务做起。虽然辛苦，但你在{location}学到了很多东西。',
      '{npc}发现了你的努力，悄悄为你准备了一杯咖啡。那一刻，你觉得一切辛苦都值得。',
    ],
    effects: { intelligence: 5, luck: 4 },
    flags: ['chain_ordinary_student_growth_0'],
    requiredFlags: ['chain_ordinary_student_childhood_0'],
    identityExclusive: 'ordinary_student',
    chainPriority: 1,
  },
  {
    id: 'kg_ie_ordinary_student_03', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.78,
    templates: [
      '你的踏实和努力终于得到了认可。在一次紧急事件中，你挺身而出，化解了危机。',
      '{npc}对你说："你虽然是普通学生，但你的心比任何人都不普通。"',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_ordinary_student_adult_0'],
    requiredFlags: ['chain_ordinary_student_growth_0'],
    identityExclusive: 'ordinary_student',
    chainPriority: 2,
  },
  {
    id: 'kg_ie_ordinary_student_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '毕业前夕，你被评为"最努力的学生"。{npc}在台下为你鼓掌，眼中满是骄傲。',
      '你对{npc}说："谢谢你让我相信，普通人也能创造奇迹。"',
    ],
    effects: { charisma: 10, luck: 5 },
    flags: ['chain_ordinary_student_special_0'],
    requiredFlags: ['chain_ordinary_student_adult_0'],
    identityExclusive: 'ordinary_student',
    chainPriority: 3,
  },
  // special_student(特招生)
  {
    id: 'kg_ie_special_student_01', category: 'identity_exclusive', minAge: 10, maxAge: 18, probability: 0.82,
    templates: [
      '你通过特招进入了秀知院。虽然起点比别人低，但{npc}说："努力可以弥补一切。"',
      '在{location}的入学仪式上，你感受到了来自各方的压力。但你没有退缩。',
    ],
    effects: { strength: 5, luck: 3 },
    flags: ['chain_special_student_childhood_0'],
    identityExclusive: 'special_student',
  },
  {
    id: 'kg_ie_special_student_02', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '作为特招生，你总是比别人更努力。{npc}发现了你的潜力，开始暗中帮助你。',
      '在{location}的图书馆里，{npc}主动坐到你身边，为你讲解难题。你们的关系开始拉近。',
    ],
    effects: { special: 8, charisma: 3 },
    flags: ['chain_special_student_growth_0'],
    requiredFlags: ['chain_special_student_childhood_0'],
    identityExclusive: 'special_student',
    chainPriority: 1,
  },
  {
    id: 'kg_ie_special_student_03', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.78,
    templates: [
      '你的努力终于得到了回报。在{location}的考试中，你超越了许多天才学生。',
      '{npc}对你说："你证明了，努力真的可以超越天赋。"',
    ],
    effects: { strength: 6, intelligence: 4 },
    flags: ['chain_special_student_adult_0'],
    requiredFlags: ['chain_special_student_growth_0'],
    identityExclusive: 'special_student',
    chainPriority: 2,
  },
  {
    id: 'kg_ie_special_student_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '毕业前夕，你成为了优秀毕业生代表。{npc}在台下微笑着，眼中含着泪光。',
      '你对{npc}说："谢谢你让我相信，努力的人不会被辜负。"',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_special_student_special_0'],
    requiredFlags: ['chain_special_student_adult_0'],
    identityExclusive: 'special_student',
    chainPriority: 3,
  },
  // teacher_kg(教师)
  {
    id: 'kg_ie_teacher_kg_01', category: 'identity_exclusive', minAge: 22, maxAge: 30, probability: 0.82,
    templates: [
      '你成为了秀知院的教师。面对一群天才学生，你感到了前所未有的压力。',
      '在{location}的办公室里，{npc}递给你一杯咖啡："老师，加油哦。"',
    ],
    effects: { intelligence: 5, charisma: 3 },
    flags: ['chain_teacher_kg_childhood_0'],
    identityExclusive: 'teacher_kg',
  },
  {
    id: 'kg_ie_teacher_kg_02', category: 'identity_exclusive', minAge: 25, maxAge: 35, probability: 0.8,
    templates: [
      '你发现{npc}在偷偷帮助你。原来，这个看似调皮的学生其实很关心你。',
      '在{location}的教室里，你和{npc}进行了一次深入的谈话。你们的关系超越了师生。',
    ],
    effects: { special: 8, charisma: 3 },
    flags: ['chain_teacher_kg_growth_0'],
    requiredFlags: ['chain_teacher_kg_childhood_0'],
    identityExclusive: 'teacher_kg',
    chainPriority: 1,
  },
  {
    id: 'kg_ie_teacher_kg_03', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.78,
    templates: [
      '学生会在你的指导下蒸蒸日上。你的教育方法被全校推广。',
      '{npc}对你说："老师，您是我最尊敬的人。"那一刻，你觉得所有的辛苦都值得。',
    ],
    effects: { strength: 6, intelligence: 4 },
    flags: ['chain_teacher_kg_adult_0'],
    requiredFlags: ['chain_teacher_kg_growth_0'],
    identityExclusive: 'teacher_kg',
    chainPriority: 2,
  },
  {
    id: 'kg_ie_teacher_kg_04', category: 'identity_exclusive', minAge: 40, maxAge: 65, probability: 0.75,
    templates: [
      '退休前夕，你的学生们为你举办了一场盛大的欢送会。{npc}代表全班发言，泣不成声。',
      '你对{npc}说："老师最大的幸福，就是看到你们成长为优秀的人。"',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_teacher_kg_special_0'],
    requiredFlags: ['chain_teacher_kg_adult_0'],
    identityExclusive: 'teacher_kg',
    chainPriority: 3,
  },
  // butler(管家)
  {
    id: 'kg_ie_butler_01', category: 'identity_exclusive', minAge: 15, maxAge: 25, probability: 0.82,
    templates: [
      '你成为了四宫家的管家。从小，你就被教导要完美地执行主人的命令。',
      '在{location}的宅邸中，你第一次见到了{npc}。她的优雅和美丽让你心跳加速。',
    ],
    effects: { strength: 5, luck: 3 },
    flags: ['chain_butler_childhood_0'],
    identityExclusive: 'butler',
  },
  {
    id: 'kg_ie_butler_02', category: 'identity_exclusive', minAge: 20, maxAge: 30, probability: 0.8,
    templates: [
      '作为管家，你总是默默守护着{npc}。但她发现，你也有自己的梦想和渴望。',
      '在{location}的花园里，{npc}问你："你快乐吗？"你愣住了，不知如何回答。',
    ],
    effects: { special: 8, charisma: 3 },
    flags: ['chain_butler_growth_0'],
    requiredFlags: ['chain_butler_childhood_0'],
    identityExclusive: 'butler',
    chainPriority: 1,
  },
  {
    id: 'kg_ie_butler_03', category: 'identity_exclusive', minAge: 25, maxAge: 45, probability: 0.78,
    templates: [
      '四宫家面临着巨大的危机。你用自己的智慧和勇气，帮助{npc}化解了危机。',
      '{npc}对你说："你不仅是我的管家，也是我最信任的人。"',
    ],
    effects: { strength: 6, intelligence: 4 },
    flags: ['chain_butler_adult_0'],
    requiredFlags: ['chain_butler_growth_0'],
    identityExclusive: 'butler',
    chainPriority: 2,
  },
  {
    id: 'kg_ie_butler_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '你最终选择了离开四宫家，去追求自己的人生。{npc}流着泪说："我会等你。"',
      '多年后，你功成名就。你回到{location}，发现{npc}依然在等你。',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_butler_special_0'],
    requiredFlags: ['chain_butler_adult_0'],
    identityExclusive: 'butler',
    chainPriority: 3,
  },
  // reporter_kg(记者)
  {
    id: 'kg_ie_reporter_kg_01', category: 'identity_exclusive', minAge: 10, maxAge: 18, probability: 0.82,
    templates: [
      '你加入了学园新闻部，成为了追逐八卦的记者。{npc}看着你说："你很有新闻嗅觉。"',
      '在{location}的新闻部室里，你发现了学生会长的秘密——那是一段不可告人的恋情。',
    ],
    effects: { luck: 5, charisma: 3 },
    flags: ['chain_reporter_kg_childhood_0'],
    identityExclusive: 'reporter_kg',
  },
  {
    id: 'kg_ie_reporter_kg_02', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '你拍到了{npc}的独家照片。但你发现，照片中的她其实只是一个渴望爱情的普通女孩。',
      '在{location}的暗房里，你盯着照片发呆。你第一次质疑：新闻的真相到底是什么？',
    ],
    effects: { intelligence: 5, luck: 4 },
    flags: ['chain_reporter_kg_growth_0'],
    requiredFlags: ['chain_reporter_kg_childhood_0'],
    identityExclusive: 'reporter_kg',
    chainPriority: 1,
  },
  {
    id: 'kg_ie_reporter_kg_03', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.78,
    templates: [
      '你面临抉择：曝光学生会长的恋情获得巨大的流量，还是保护她的隐私？',
      '最终，你选择了后者。{npc}对你说："谢谢你。你是我见过最有良知的记者。"',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_reporter_kg_adult_0'],
    requiredFlags: ['chain_reporter_kg_growth_0'],
    identityExclusive: 'reporter_kg',
    chainPriority: 2,
  },
  {
    id: 'kg_ie_reporter_kg_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '多年后，你成为了知名记者。但你最骄傲的，不是那些轰动的新闻，而是当年保护了那个女孩的决定。',
      '你对{npc}说："真正的记者，不是曝光一切，而是守护真相的温度。"',
    ],
    effects: { charisma: 10, luck: 5 },
    flags: ['chain_reporter_kg_special_0'],
    requiredFlags: ['chain_reporter_kg_adult_0'],
    identityExclusive: 'reporter_kg',
    chainPriority: 3,
  },
  // rich_second(富二代)
  {
    id: 'kg_ie_rich_second_01', category: 'identity_exclusive', minAge: 10, maxAge: 18, probability: 0.82,
    templates: [
      '你出生在财阀家庭，从小衣食无忧。但{npc}说："金钱买不到真正的幸福。"',
      '在{location}的豪宅里，你第一次感受到了孤独——即使拥有全世界，也填不满内心的空洞。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['chain_rich_second_childhood_0'],
    identityExclusive: 'rich_second',
  },
  {
    id: 'kg_ie_rich_second_02', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '你进入了秀知院，发现这里的天才不比你差。你开始质疑：除了钱，我还有什么？',
      '在{location}的课堂上，{npc}的才华让你震惊。你第一次想要靠自己的努力获得认可。',
    ],
    effects: { intelligence: 5, luck: 4 },
    flags: ['chain_rich_second_growth_0'],
    requiredFlags: ['chain_rich_second_childhood_0'],
    identityExclusive: 'rich_second',
    chainPriority: 1,
  },
  {
    id: 'kg_ie_rich_second_03', category: 'identity_exclusive', minAge: 20, maxAge: 40, probability: 0.78,
    templates: [
      '你拒绝了继承家业，选择靠自己的双手创业。所有人都觉得你疯了。',
      '在{location}的出租屋里，{npc}来看你。她没有嘲笑你，只是递给你一碗热汤："加油。"',
    ],
    effects: { charisma: 8, luck: 5 },
    flags: ['chain_rich_second_adult_0'],
    requiredFlags: ['chain_rich_second_growth_0'],
    identityExclusive: 'rich_second',
    chainPriority: 2,
  },
  {
    id: 'kg_ie_rich_second_04', category: 'identity_exclusive', minAge: 35, maxAge: 60, probability: 0.75,
    templates: [
      '多年后，你的创业公司成功了。在{location}的发布会上，你说："我最大的财富，不是金钱，而是遇到了相信我的人。"',
      '{npc}在台下微笑着，眼中闪着泪光。你知道，这一切都值得。',
    ],
    effects: { charisma: 10, luck: 5 },
    flags: ['chain_rich_second_special_0'],
    requiredFlags: ['chain_rich_second_adult_0'],
    identityExclusive: 'rich_second',
    chainPriority: 3,
  },
];
