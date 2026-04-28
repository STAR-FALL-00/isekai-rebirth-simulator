import type { EventTemplate } from './types';

// 高达SEED — 约100个核心事件模板
// World: gundam_seed | Prefix: gs_ | Theme: #00B894
// Stats map: 格斗→strength, 战术→intelligence, 领导力→charisma, 调整率→special, 装甲→health, SEED觉醒→luck
// Realms: 1调整者平民 2士兵 3王牌机师 4舰长 5指挥官 6将军 7国家领袖 8和平缔造者

export const gundamSeedTemplates: EventTemplate[] = [
  // ═══════════════════════════════════════════════════════════════
  // 通用 childhood (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ch_01', category: 'childhood', minAge: 0, maxAge: 5, probability: 0.35,
    templates: [
      '你出生在{location}的殖民卫星中。初次接受基因适应性检测时，仪器发出了刺耳的警报——你的调整率远超同龄人。{npc}震惊地看着数据，喃喃道："这可能是SEED觉醒的征兆。"',
      '你的童年在{location}的军工厂区度过。其他孩子在玩耍时，你已经开始拆解废弃的机动战士零件。{npc}说你是天生的机械天才。',
      '你降生的那一刻，{location}的所有电子设备出现了短暂的共振现象。老人们私下议论："那是SEED降临的预兆。"',
    ],
    effects: { special: 6, intelligence: 3 },
  },
  {
    id: 'gs_ch_02', category: 'childhood', minAge: 3, maxAge: 8, probability: 0.55,
    templates: [
      '你在{location}的废墟中捡到了一块破碎的哈罗——那是旧时代流行的人工智能宠物。你花了三个月把它修好，它成了你最好的朋友。',
      '{npc}送给你一个旧时代的MS驾驶模拟器。你每天都练习到深夜，操作评分不知不觉中超过了所有同龄人。',
      '你在{location}目睹了一场ZAFT与地球联合军的冲突。一枚流弹在你身旁爆炸，但你奇迹般地毫发无伤。那一刻，你感觉到体内有什么东西在苏醒。',
    ],
    effects: { strength: 3, luck: 2 },
  },
  {
    id: 'gs_ch_03', category: 'childhood', minAge: 5, maxAge: 10, probability: 0.75,
    templates: [
      '你和同龄人在{location}玩模拟战斗游戏，你总是获胜。但你也渐渐发现，自己和"普通"孩子有些不同——你的反应速度太快了。',
      '{npc}教你基础格斗术，你学得很快。虽然只是入门，但你的动作已经像模像样。',
      '你在{location}读到了关于"中子干扰器"的资料，第一次意识到这个世界的战争有多残酷。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用 growth (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_gr_01', category: 'growth', minAge: 14, maxAge: 20, probability: 0.25,
    templates: [
      '你在{location}经历了第一次实战模拟训练。当危机来临时，你眼中闪过一道金色光芒——你的SEED觉醒了！操作精度瞬间提升数倍。',
      '一场意外中，你在{location}徒手制服了一名失控的调整者士兵。你的表现引起了军方的注意。',
      '{legend}的遗产在{location}与你相遇，你继承了前代调整者战士的意志。',
    ],
    effects: { luck: 10, special: 8, strength: 5 },
  },
  {
    id: 'gs_gr_02', category: 'growth', minAge: 13, maxAge: 22, probability: 0.45,
    templates: [
      '你在{location}的机库中第一次登上真正的机动战士。驾驶舱关闭的瞬间，你感到了前所未有的使命感。',
      '{npc}传授你战术指挥的基础知识。你花了整整一年才掌握大规模作战的调度。',
      '你在{location}遇到了一生的宿敌，你们驾驶机体比试，不分胜负。',
    ],
    effects: { intelligence: 5, special: 4 },
  },
  {
    id: 'gs_gr_03', category: 'growth', minAge: 15, maxAge: 25, probability: 0.65,
    templates: [
      '你每天在{location}勤奋训练，虽然进步缓慢但根基扎实。',
      '{npc}督促你学习机动战士维护，你不敢懈怠。',
      '你在{location}读了很多战争史文献，对战术有了更深的理解。',
      '平平淡淡的一年，你在{location}默默积累着。',
    ],
    effects: { strength: 2, intelligence: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用 adult (2)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ad_01', category: 'adult', minAge: 26, maxAge: 40, probability: 0.35,
    templates: [
      '你在{location}建立了自己的小队，广纳贤才，一时间名声大噪。',
      '你参与了{legend}相关的大规模战役，在关键时刻力挽狂澜。',
      '你在{location}指挥了一场关键的舰队战，各方势力纷纷来投。',
    ],
    effects: { charisma: 8, intelligence: 5, special: 5 },
  },
  {
    id: 'gs_ad_02', category: 'adult', minAge: 25, maxAge: 50, probability: 0.60,
    templates: [
      '你在{location}处理日常军务，势力稳步发展。',
      '{npc}来找你帮忙，你出手解决了他的难题。',
      '你在{location}度过了平静的一年，能力稳步提升。',
      '平平淡淡的一年，你在{location}默默研究战术。',
    ],
    effects: { strength: 2, intelligence: 2, special: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用 elder (1)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_el_01', category: 'elder', minAge: 50, maxAge: 80, probability: 0.55,
    templates: [
      '你在{location}的战舰中钻研更高深的战术与机体技术，试图突破当前境界的限制。',
      '你游历各殖民卫星，在{location}见识了各种奇异的战斗技术，眼界大开。',
      '你开始招收学生，在{location}传授毕生所学的驾驶与指挥经验。',
    ],
    effects: { intelligence: 3, special: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 战斗 combat (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_cb_01', category: 'combat', minAge: 18, maxAge: 35, probability: 0.20,
    templates: [
      '你在{location}以一己之力对抗十台敌机，最终大获全胜，一战成名！',
      '{legend}的精英部队找上了你，你在{location}展开惊天大战，竟越级将其击溃！',
      '你为了保护{location}的平民，独自对抗入侵的{legend}军团，创造了不可能的奇迹。',
    ],
    effects: { strength: 12, charisma: 8, health: -10 },
  },
  {
    id: 'gs_cb_02', category: 'combat', minAge: 16, maxAge: 40, probability: 0.40,
    templates: [
      '你参与了一场改变{location}格局的大规模会战，立下赫赫战功。',
      '{npc}挑战你的驾驶技术，你们在{location}大战三百回合，最终你险胜一招。',
      '你在{location}发现了{legend}留下的战斗试炼场，通过了生死考验。',
    ],
    effects: { strength: 8, charisma: 4, health: -5 },
  },
  {
    id: 'gs_cb_03', category: 'combat', minAge: 15, maxAge: 30, probability: 0.60,
    templates: [
      '你在{location}遭遇敌机，展开了一场生死搏斗，最终险胜。',
      '你和{npc}在{location}切磋格斗技，双方都获益匪浅。',
      '你为了保护同伴，在{location}与敌人激战，受了轻伤。',
    ],
    effects: { strength: 5, health: -3 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 恋爱/羁绊 romance (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_rm_01', category: 'romance', minAge: 16, maxAge: 28, probability: 0.18,
    templates: [
      '你在{location}与{npc}相遇的瞬间，哈罗突然播放了一首古老的歌谣——你们的眼神交汇，仿佛认识了千年。',
      '{npc}为了救你，不惜用自己的机体挡下了致命一击。你跪在{location}的机库中发誓：此生不负。',
      '你们的故事被{legend}记载，成为了{location}永恒的传说。',
    ],
    effects: { charisma: 10, luck: 8, health: 5 },
  },
  {
    id: 'gs_rm_02', category: 'romance', minAge: 18, maxAge: 32, probability: 0.35,
    templates: [
      '你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。',
      '{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。',
      '你们经历了{legend}的考验，感情反而更加坚不可摧。',
    ],
    effects: { charisma: 6, luck: 4 },
  },
  {
    id: 'gs_rm_03', category: 'romance', minAge: 20, maxAge: 40, probability: 0.55,
    templates: [
      '你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。',
      '{npc}送你一件定情信物，你珍藏在驾驶舱中。',
      '你们一起在{location}经历了危险，感情更加深厚。',
    ],
    effects: { charisma: 3, luck: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 修炼/提升 cultivation (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_cult_01', category: 'cultivation', minAge: 20, maxAge: 45, probability: 0.20,
    templates: [
      '你在{location}的驾驶舱中进行三日三夜的深度冥想，出关时眼中金光四射——你竟在实战中领悟了{legend}的奥义！',
      '一场太阳风暴夜，你在{location}被高能辐射击中非但没死，反而解锁了基因中的隐藏序列！',
      '{legend}的数据残魂在{location}与你相遇，将毕生战术感悟传授于你。',
    ],
    effects: { special: 12, intelligence: 10, strength: 5 },
  },
  {
    id: 'gs_cult_02', category: 'cultivation', minAge: 18, maxAge: 40, probability: 0.40,
    templates: [
      '你在{location}钻研三年，终于突破了困扰多年的驾驶瓶颈，实力大增！',
      '{npc}带你外出实战训练，你在{location}击败了一个强敌，获得了珍贵的战利品。',
      '你发现了{legend}留下的试炼场，通过考验后获得了意想不到的收获。',
    ],
    effects: { strength: 6, special: 5 },
  },
  {
    id: 'gs_cult_03', category: 'cultivation', minAge: 15, maxAge: 35, probability: 0.60,
    templates: [
      '你在{location}按部就班地训练和研究，虽然没有突破但根基更加稳固。',
      '{npc}检查了你的驾驶数据，表示满意。',
      '你在{location}研读战术文献，对一些机动战士操作有了新的理解。',
    ],
    effects: { special: 2, intelligence: 1 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 探索 exploration (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ex_01', category: 'exploration', minAge: 20, maxAge: 45, probability: 0.18,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的核心科技传承，获得了改变命运的机缘！',
      '你在{location}找到了通往另一个殖民卫星的秘密通道，{legend}的秘密向你敞开。',
      '你解开了一个困扰世人多年的战术谜题，{location}的真相让你震惊。',
    ],
    effects: { luck: 10, intelligence: 8, special: 6 },
  },
  {
    id: 'gs_ex_02', category: 'exploration', minAge: 18, maxAge: 40, probability: 0.38,
    templates: [
      '你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。',
      '你探索了一处危险的{location}，九死一生后带回了珍贵的机体零件。',
      '{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。',
    ],
    effects: { luck: 6, strength: 4 },
  },
  {
    id: 'gs_ex_03', category: 'exploration', minAge: 15, maxAge: 35, probability: 0.58,
    templates: [
      '你深入{location}探险，发现了未知的秘密。',
      '你在{location}找到了一些有价值的物资，收获颇丰。',
      '你在{location}迷路了，却意外发现了一处隐蔽的补给基地。',
    ],
    effects: { luck: 4, strength: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 世界主线 world_story (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ws_01', category: 'world_story', minAge: 30, maxAge: 55, probability: 0.20,
    templates: [
      '{legend}的封印彻底破碎，整个PLANT与地球联合陷入了前所未有的动荡，你被卷入了漩涡中心！',
      '一场席卷整个殖民卫星群的大战爆发了，{location}首当其冲，你必须做出选择。',
      '中子干扰器的规则开始改变，{legend}的意志降临，所有势力都受到了影响。',
    ],
    effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 },
  },
  {
    id: 'gs_ws_02', category: 'world_story', minAge: 25, maxAge: 50, probability: 0.40,
    templates: [
      '你发现{location}隐藏着改变战局的秘密，各方势力为此展开了明争暗斗。',
      '{npc}告诉你一个关于调整者起源的惊天秘密，你的世界观被彻底颠覆。',
      '传说中的{legend}即将降临，所有阵营都在做准备，{location}的气氛紧张到了极点。',
    ],
    effects: { intelligence: 6, charisma: 4 },
  },
  {
    id: 'gs_ws_03', category: 'world_story', minAge: 20, maxAge: 45, probability: 0.60,
    templates: [
      '{location}附近发生了局部冲突，你不得不卷入其中。',
      '{npc}带来了一个重要的消息，可能影响到{location}的未来。',
      '你注意到了{location}的一些异常现象，似乎有什么大事要发生。',
    ],
    effects: { charisma: 3, luck: 3 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 隐藏 hidden (2)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_hd_01', category: 'hidden', minAge: 45, maxAge: 80, probability: 0.08,
    templates: [
      '你超越了{legend}，看到了战争之外的真相——原来一切都只是...',
      '你发现了这个宇宙的运行规则，{location}只是一场巨大棋局的一角。',
      '{legend}的真正身份让你震惊不已，你终于理解了调整者与自然人矛盾的根源。',
    ],
    effects: { intelligence: 15, special: 10 },
    conditions: [{ stat: 'intelligence', min: 120 }],
  },
  {
    id: 'gs_hd_02', category: 'hidden', minAge: 35, maxAge: 70, probability: 0.25,
    templates: [
      '你在{location}发现了一个被禁止入内的区域，里面藏着惊人的秘密。',
      '你解开了{legend}留下的谜题，获得了一份隐藏的战术传承。',
      '{npc}告诉你一个只有极少数人知道的秘密，你感到责任重大。',
    ],
    effects: { intelligence: 10, special: 8 },
    conditions: [{ stat: 'intelligence', min: 100 }],
  },

  // ═══════════════════════════════════════════════════════════════
  // 死亡 death (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_dt_01', category: 'death', minAge: 15, maxAge: 35, probability: 0.12,
    templates: [
      '你在{location}遭遇了敌军的总攻，无数光束从你身旁掠过。虽然你拼尽全力，但最终还是被一台量产机包围——在生命的最后一刻，你看到了金色的SEED光芒。',
      '{legend}亲自出手，你在{location}与之展开了最终决战。你输了，但你的勇气让所有目击者铭记。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'gs_dt_02', category: 'death', minAge: 25, maxAge: 55, probability: 0.18,
    templates: [
      '你为了保护{location}的平民，驾驶受损的机体挡在了核弹前。你的身体与机体一同化为了宇宙中的尘埃，但那颗殖民卫星得救了。',
      '{npc}背叛了你。当你在{location}的机库中转身时，一发冷枪贯穿了你的驾驶服。你倒下时，只看到TA冷漠的背影。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'gs_dt_03', category: 'death', minAge: 50, maxAge: 90, probability: 0.22,
    templates: [
      '你在{location}的战舰中安详地闭上了眼睛。你的一生见证了无数次战争与和平，临终前，你说："如果还有来生，我希望这个世界不再需要机动战士。"',
      '你为了掩护队友撤退，独自殿后。当最后一台敌机倒下时，你的机体也已经残破不堪。你微笑着打开通讯频道："任务完成。"',
    ],
    effects: { health: -100 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 identity_exclusive — coordinator 调整者 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ie_coordinator_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在PLANT的调整者培育中心。从出生那一刻起，你的基因就被优化到了极致。三岁时，你已经开始学习高等数学。',
      '作为调整者，你从小就能感受到自己与自然人的不同。你的记忆力、反应速度、体能都远超同龄人。{npc}说你是"完美的进化体"。',
    ],
    effects: { special: 5, intelligence: 3 },
    flags: ['chain_coordinator_childhood_0'],
    identityExclusive: 'coordinator',
  },
  {
    id: 'gs_ie_coordinator_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的调整者学校中遇到了第一次挑战。一位老师的观点让你困惑："调整者真的是进化的终点吗？"',
      '你在{location}的图书馆发现了一本被禁的书——《调整者与自然人共存论》。书中的观点让你彻夜难眠。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_coordinator_childhood_1'],
    identityExclusive: 'coordinator',
  },
  {
    id: 'gs_ie_coordinator_03', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.80,
    templates: [
      '十五岁那年，ZAFT征兵处来到{location}。你面临着人生的第一个重大抉择：加入军队，为调整者的荣耀而战；还是继续学业，寻找不流血的解决之道？',
      '你的调整率测试数据被泄露，引起了ZAFT高层和地球联合情报部门的双重关注。{npc}警告你："你已经被卷入了风暴中心。"',
    ],
    effects: { special: 6 },
    flags: ['chain_coordinator_growth_0'],
    requiredFlags: ['chain_coordinator_childhood_0'],
    identityExclusive: 'coordinator',
    chainPriority: 1,
  },
  {
    id: 'gs_ie_coordinator_04', category: 'identity_exclusive', minAge: 20, maxAge: 30, probability: 0.75,
    templates: [
      '你驾驶着ZAFT的最新型机体出战，在{location}与地球联合军交锋。当你看到敌方驾驶员惊恐的眼神时，你第一次产生了疑问："他们也是人，不是吗？"',
      '你在{location}救下了一个濒死的自然人少年。他看着你的调整者特征，眼中没有仇恨，只有恐惧。那一刻，你的世界观动摇了。',
    ],
    effects: { charisma: 5, intelligence: 4 },
    flags: ['chain_coordinator_growth_1'],
    requiredFlags: ['chain_coordinator_childhood_0'],
    identityExclusive: 'coordinator',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — natural 自然人 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ie_natural_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在地球联合统治区的普通家庭。作为"旧人类"，你从小就被教育：调整者是篡夺神之领域的怪物。',
      '你的童年在{location}的地球贫民区度过。你常常仰望天空中的殖民卫星，幻想着那里的生活。{npc}说："别想了，那是另一个世界。"',
    ],
    effects: { strength: 3, luck: 2 },
    flags: ['chain_natural_childhood_0'],
    identityExclusive: 'natural',
  },
  {
    id: 'gs_ie_natural_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的学校被调整者同学欺负。他们嘲笑你是"未进化的猴子"。你握紧了拳头，发誓要证明自然人的价值。',
      '{npc}是一位退役的联合军老兵，他教你射击和格斗。他说："自然人的身体虽然没有被优化，但我们的意志从不输给任何人。"',
    ],
    effects: { strength: 5 },
    flags: ['chain_natural_childhood_1'],
    identityExclusive: 'natural',
  },
  {
    id: 'gs_ie_natural_03', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.80,
    templates: [
      '十五岁那年，你志愿加入了地球联合军。在新兵训练营中，你的成绩名列前茅——作为自然人，你证明了"旧人类"也能成为优秀的战士。',
      '你在{location}目睹了一场调整者针对自然人的恐怖袭击。仇恨在你心中燃烧，但你的一位自然人老师阻止了你："仇恨只会制造更多的仇恨。"',
    ],
    effects: { strength: 6, intelligence: 3 },
    flags: ['chain_natural_growth_0'],
    requiredFlags: ['chain_natural_childhood_0'],
    identityExclusive: 'natural',
    chainPriority: 1,
  },
  {
    id: 'gs_ie_natural_04', category: 'identity_exclusive', minAge: 20, maxAge: 30, probability: 0.75,
    templates: [
      '你驾驶着联合军的量产型机体GAT出战，在{location}与ZAFT交锋。当你击坠一台敌机时，你听到了驾驶员濒死的惨叫——那是和你一样年轻的声音。',
      '你在{location}的废墟中救下了一个调整者女孩。她的眼中没有傲慢，只有和你一样的恐惧。你们沉默地注视着彼此，仿佛第一次看到了"敌人"之外的东西。',
    ],
    effects: { charisma: 5, intelligence: 4 },
    flags: ['chain_natural_growth_1'],
    requiredFlags: ['chain_natural_childhood_0'],
    identityExclusive: 'natural',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — pilot 机师 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ie_pilot_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一个军人世家。你的父亲是一位王牌机师，他在你三岁时就开始教你认识MS的操作面板。',
      '作为未来的机师，你五岁就进入了{location}的少年军事学院。你的同学们都是精英后代，竞争异常激烈。',
    ],
    effects: { strength: 4, intelligence: 2 },
    flags: ['chain_pilot_childhood_0'],
    identityExclusive: 'pilot',
  },
  {
    id: 'gs_ie_pilot_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的模拟舱训练中打破了学院记录。教官{npc}看着你的数据，低声说："你和你父亲一样...不，你比他更有天赋。"',
      '你在一次训练中发生了意外，模拟舱过载导致你昏迷。醒来后，你发现自己对机动战士的操作产生了一种本能的直觉。',
    ],
    effects: { special: 5 },
    flags: ['chain_pilot_childhood_1'],
    identityExclusive: 'pilot',
  },
  {
    id: 'gs_ie_pilot_03', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.80,
    templates: [
      '十五岁那年，你第一次驾驶真正的MS出击。当推进器点火的瞬间，你感到血液在沸腾——这就是你出生就是为了做的事。',
      '你在{location}的实战中遇到了一台神秘的红色MS。对方的驾驶技术出神入化，你险些被击落。战后你才知道，那是一位传说中的王牌。',
    ],
    effects: { strength: 6, special: 3 },
    flags: ['chain_pilot_growth_0'],
    requiredFlags: ['chain_pilot_childhood_0'],
    identityExclusive: 'pilot',
    chainPriority: 1,
  },
  {
    id: 'gs_ie_pilot_04', category: 'identity_exclusive', minAge: 20, maxAge: 30, probability: 0.75,
    templates: [
      '你成为了小队的核心驾驶员。在{location}的战斗中，你以一敌三，成功掩护了友军撤退。你的名字开始出现在战报中。',
      '你在{location}遇到了一位和你实力相当的敌机驾驶员。你们多次交锋，逐渐形成了一种奇怪的默契——仿佛彼此都是对方的镜子。',
    ],
    effects: { strength: 7, intelligence: 3 },
    flags: ['chain_pilot_growth_1'],
    requiredFlags: ['chain_pilot_childhood_0'],
    identityExclusive: 'pilot',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — captain 舰长 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ie_captain_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一艘战舰上。你的母亲是大副，你的父亲是舰长。你的摇篮就是舰桥的战术显示屏下方。',
      '作为舰长之子，你从小就在{location}的舰桥上玩耍。你学会的第一句话不是"妈妈"，而是"全员第一战斗配置"。',
    ],
    effects: { intelligence: 5, charisma: 2 },
    flags: ['chain_captain_childhood_0'],
    identityExclusive: 'captain',
  },
  {
    id: 'gs_ie_captain_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的军校中学习舰队指挥。你的战术推演成绩始终排名第一，但你的实战模拟却屡屡失败——因为你总是试图拯救所有人。',
      '{npc}是你父亲的旧部，他教你一个道理："好的舰长不是让所有人都活着，而是让该活着的人活下去。"',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_captain_childhood_1'],
    identityExclusive: 'captain',
  },
  {
    id: 'gs_ie_captain_03', category: 'identity_exclusive', minAge: 20, maxAge: 28, probability: 0.80,
    templates: [
      '你被任命为{location}一艘护卫舰的副舰长。在一次遭遇战中，舰长阵亡，你临时接过了指挥权。你的冷静判断救了全舰三百人。',
      '你在{location}遇到了Murrue Ramius的传说——那位以一艘大天使号战舰改变战局的女舰长。你暗暗发誓，要成为像她一样的人。',
    ],
    effects: { charisma: 6, intelligence: 4 },
    flags: ['chain_captain_growth_0'],
    requiredFlags: ['chain_captain_childhood_0'],
    identityExclusive: 'captain',
    chainPriority: 1,
  },
  {
    id: 'gs_ie_captain_04', category: 'identity_exclusive', minAge: 26, maxAge: 38, probability: 0.75,
    templates: [
      '你正式成为舰长。在{location}的决战中，你的舰队以一敌五，凭借精妙的战术逆转了战局。各大势力开始传颂你的名字。',
      '你的战舰成为了中立者的避难所。无论是调整者还是自然人，只要踏上你的舰桥，就能获得庇护。{npc}说："你正在成为一面旗帜。"',
    ],
    effects: { charisma: 7, intelligence: 5 },
    flags: ['chain_captain_growth_1'],
    requiredFlags: ['chain_captain_childhood_0'],
    identityExclusive: 'captain',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — scientist_gs (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ie_scientist_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在PLANT的科研机构中。你的父母都是顶尖的基因工程师，你的玩具是显微镜和培养皿。',
      '作为科学家之子，你从小就对MS的构造充满了好奇。七岁时，你拆解了家里的家务机器人，成功将它改造成了一台小型无人机。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_scientist_childhood_0'],
    identityExclusive: 'scientist_gs',
  },
  {
    id: 'gs_ie_scientist_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的科学院附属学校中发现了自己对相位转移装甲（PS装甲）的独特见解。你的论文被一位匿名教授高度评价。',
      '你偷偷研究了中子干扰器的数据。{npc}发现后严厉警告你："那东西不是你能碰的，它会毁了你的一生。"',
    ],
    effects: { intelligence: 5, special: 2 },
    flags: ['chain_scientist_childhood_1'],
    identityExclusive: 'scientist_gs',
  },
  {
    id: 'gs_ie_scientist_03', category: 'identity_exclusive', minAge: 18, maxAge: 26, probability: 0.80,
    templates: [
      '你被分配到{location}的研发中心，参与了新型MS的开发。你提出的方案让机体的能源效率提升了30%。',
      '你在研究SEED觉醒机制时，发现了一些被高层刻意隐瞒的数据。原来，SEED并非调整者独有——自然人也有可能觉醒。',
    ],
    effects: { intelligence: 7, special: 4 },
    flags: ['chain_scientist_growth_0'],
    requiredFlags: ['chain_scientist_childhood_0'],
    identityExclusive: 'scientist_gs',
    chainPriority: 1,
  },
  {
    id: 'gs_ie_scientist_04', category: 'identity_exclusive', minAge: 25, maxAge: 38, probability: 0.75,
    templates: [
      '你的研究成果被军方征用，开发出了新型决战兵器。当你看到它摧毁了一座殖民卫星时，你开始质疑科学的边界。',
      '你在{location}建立了一个独立研究所，致力于寻找停止中子干扰器的方法。你说："科学不应该服务于战争，而应该服务于生命。"',
    ],
    effects: { intelligence: 8, charisma: 4 },
    flags: ['chain_scientist_growth_1'],
    requiredFlags: ['chain_scientist_childhood_0'],
    identityExclusive: 'scientist_gs',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — politician 政客 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ie_politician_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一个政治世家。你的祖父是PLANT评议会议员，你的父亲是地球联合的外交官。你从小就在权谋的氛围中长大。',
      '作为政客之子，你五岁就学会了说谎时保持微笑。{npc}是你家的管家，他说："在这个世界，真话比谎言更危险。"',
    ],
    effects: { charisma: 5, intelligence: 3 },
    flags: ['chain_politician_childhood_0'],
    identityExclusive: 'politician',
  },
  {
    id: 'gs_ie_politician_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的政治学院中学习。一次模拟谈判中，你以弱胜强，让一位高年级学长当众出丑。从那天起，没有人敢小看你了。',
      '你发现了父亲的一个秘密——他在暗中与敌方势力进行交易。你面临选择：揭发他，还是替他保守秘密？',
    ],
    effects: { charisma: 4, intelligence: 3 },
    flags: ['chain_politician_childhood_1'],
    identityExclusive: 'politician',
  },
  {
    id: 'gs_ie_politician_03', category: 'identity_exclusive', minAge: 20, maxAge: 30, probability: 0.80,
    templates: [
      '你以史上最年轻的身份进入了议会。在{location}的第一次演讲中，你提出了"调整者与自然人共存"的激进主张，全场哗然。',
      '你被派往{location}进行和平谈判。谈判桌上，你用三个小时说服了双方停火——虽然只有二十四小时，但那是战争开始以来第一次停火。',
    ],
    effects: { charisma: 7, intelligence: 4 },
    flags: ['chain_politician_growth_0'],
    requiredFlags: ['chain_politician_childhood_0'],
    identityExclusive: 'politician',
    chainPriority: 1,
  },
  {
    id: 'gs_ie_politician_04', category: 'identity_exclusive', minAge: 28, maxAge: 42, probability: 0.75,
    templates: [
      '你成为了PLANT与地球联合之间的秘密调解人。在{location}的一次秘密会晤中，你促成了一项历史性的战俘交换协议。',
      '你的政治对手试图用丑闻击垮你。但你早就料到了这一步，反手揭露了他们更大的罪行。{npc}感叹："你比你父亲更可怕。"',
    ],
    effects: { charisma: 8, intelligence: 5 },
    flags: ['chain_politician_growth_1'],
    requiredFlags: ['chain_politician_childhood_0'],
    identityExclusive: 'politician',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — rebel 反抗军 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ie_rebel_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你的父母在战争中被联合军杀害。你被{location}的反抗军孤儿院收养，从小听着"复仇"的故事长大。',
      '作为反抗军的孩子，你七岁就开始学习制造简易爆炸物和游击战术。{npc}是你的导师，他说："我们的武器很落后，但我们的意志比钢铁更硬。"',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_rebel_childhood_0'],
    identityExclusive: 'rebel',
  },
  {
    id: 'gs_ie_rebel_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的地下基地中度过了整个童年。你的玩伴都是反抗军的孩子，你们的游戏是模拟伏击和偷袭。',
      '你第一次执行侦察任务，潜入了{location}的敌军基地。虽然只带回了一些照片，但你证明了自己的价值。',
    ],
    effects: { intelligence: 4, strength: 2 },
    flags: ['chain_rebel_childhood_1'],
    identityExclusive: 'rebel',
  },
  {
    id: 'gs_ie_rebel_03', category: 'identity_exclusive', minAge: 15, maxAge: 22, probability: 0.80,
    templates: [
      '十五岁那年，你第一次驾驶缴获的MS出战。虽然机体老旧，但你在{location}成功击毁了一台敌方巡逻机。',
      '你在{location}的游击战中结识了其他反抗势力。你们原本互不信任，但共同的敌人让你们走到了一起。',
    ],
    effects: { strength: 6, intelligence: 3 },
    flags: ['chain_rebel_growth_0'],
    requiredFlags: ['chain_rebel_childhood_0'],
    identityExclusive: 'rebel',
    chainPriority: 1,
  },
  {
    id: 'gs_ie_rebel_04', category: 'identity_exclusive', minAge: 20, maxAge: 30, probability: 0.75,
    templates: [
      '你成为了反抗军的领袖之一。在{location}的决战中，你率领游击队奇袭了敌军补给线，为正面战场争取了宝贵的时间。',
      '你开始质疑反抗军的手段。一次行动中，你们误伤了一群平民。{npc}说："如果我们变成和他们一样的怪物，胜利还有什么意义？"',
    ],
    effects: { charisma: 6, strength: 4 },
    flags: ['chain_rebel_growth_1'],
    requiredFlags: ['chain_rebel_childhood_0'],
    identityExclusive: 'rebel',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — mercenary_gs 佣兵 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ie_mercenary_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一艘雇佣兵战舰上。你的母亲是一位机枪手，你的父亲是一位技师。你的摇篮就是机库的维修平台。',
      '作为佣兵之子，你从小就见惯了生死。五岁时，你目睹了一位佣兵战友的葬礼。{npc}说："在这个世界，只有合同和佣金是真实的。"',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_mercenary_childhood_0'],
    identityExclusive: 'mercenary_gs',
  },
  {
    id: 'gs_ie_mercenary_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的佣兵训练营中学习。这里没有朋友，只有竞争对手。你的成绩决定了你能接到什么级别的任务。',
      '你第一次随队出任务，在{location}保护一位商队。虽然遇到了小股劫匪，但你冷静的表现赢得了队长的认可。',
    ],
    effects: { strength: 4, intelligence: 2 },
    flags: ['chain_mercenary_childhood_1'],
    identityExclusive: 'mercenary_gs',
  },
  {
    id: 'gs_ie_mercenary_03', category: 'identity_exclusive', minAge: 16, maxAge: 24, probability: 0.80,
    templates: [
      '你正式成为独立佣兵。第一个任务是护送一架运输机穿越{location}的交战区。报酬丰厚，但风险同样巨大。',
      '你在{location}接到了一个奇怪的任务——护送一位神秘科学家离开PLANT。你不知道他的身份，但你知道这笔佣金足够你休息一整年。',
    ],
    effects: { strength: 5, luck: 4 },
    flags: ['chain_mercenary_growth_0'],
    requiredFlags: ['chain_mercenary_childhood_0'],
    identityExclusive: 'mercenary_gs',
    chainPriority: 1,
  },
  {
    id: 'gs_ie_mercenary_04', category: 'identity_exclusive', minAge: 22, maxAge: 35, probability: 0.75,
    templates: [
      '你的名声在佣兵界越来越响。ZAFT和联合军都想招揽你，但你始终保持中立。{npc}说："佣兵的价值就在于不属于任何一方。"',
      '你在{location}遇到了一位昔日的战友，如今他已经成为敌对阵营的军官。你们拔枪相向，但最终都选择了放下武器。',
    ],
    effects: { charisma: 5, strength: 5 },
    flags: ['chain_mercenary_growth_1'],
    requiredFlags: ['chain_mercenary_childhood_0'],
    identityExclusive: 'mercenary_gs',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — doctor_gs 医生 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ie_doctor_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一个医学世家。你的父母是{location}医院的外科医生，你的童年在消毒水的气味中度过。',
      '作为医生之子，你从小就被教导生命的可贵。五岁时，你救了一只受伤的小鸟，从此立志要拯救更多的生命。',
    ],
    effects: { intelligence: 5, charisma: 2 },
    flags: ['chain_doctor_childhood_0'],
    identityExclusive: 'doctor_gs',
  },
  {
    id: 'gs_ie_doctor_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的医学院预科中学习。你的解剖学成绩优异，但你最喜欢的课程是伦理学——"医生应该救治所有人，包括敌人吗？"',
      '{npc}是一位战地医生，他带你去了{location}的前线医院。在那里，你第一次看到了战争的残酷——调整者和自然人的伤口流的是同样颜色的血。',
    ],
    effects: { intelligence: 5, charisma: 2 },
    flags: ['chain_doctor_childhood_1'],
    identityExclusive: 'doctor_gs',
  },
  {
    id: 'gs_ie_doctor_03', category: 'identity_exclusive', minAge: 18, maxAge: 26, probability: 0.80,
    templates: [
      '你成为了一名正式的医生。在{location}的战地医院中，你每天要处理数十名伤员。疲惫让你几近崩溃，但每一个被救活的生命都让你坚持下去。',
      '你研发了一种新型的细胞修复技术，可以让重伤员在48小时内恢复到能继续战斗的状态。军方对你的研究成果表现出了极大的兴趣。',
    ],
    effects: { intelligence: 6, charisma: 3 },
    flags: ['chain_doctor_growth_0'],
    requiredFlags: ['chain_doctor_childhood_0'],
    identityExclusive: 'doctor_gs',
    chainPriority: 1,
  },
  {
    id: 'gs_ie_doctor_04', category: 'identity_exclusive', minAge: 25, maxAge: 38, probability: 0.75,
    templates: [
      '你成为了{location}战地医院的首席外科医生。无论是ZAFT的伤员还是联合军的战俘，你都一视同仁地救治。',
      '你在{location}建立了一所中立医院，向所有交战方开放。有人说你是疯子，有人说你是圣人。你说："我只是个医生。"',
    ],
    effects: { charisma: 7, intelligence: 5 },
    flags: ['chain_doctor_growth_1'],
    requiredFlags: ['chain_doctor_childhood_0'],
    identityExclusive: 'doctor_gs',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — reporter_gs 记者 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_ie_reporter_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一个记者家庭。你的父母都是战地记者，你的童年充满了他们的故事——关于真相、谎言和两者之间的一切。',
      '作为记者之子，你从小就被教育："真相是武器，也是盾牌。"{npc}是你母亲的同事，他教你如何用镜头和文字记录这个世界。',
    ],
    effects: { intelligence: 5, charisma: 2 },
    flags: ['chain_reporter_childhood_0'],
    identityExclusive: 'reporter_gs',
  },
  {
    id: 'gs_ie_reporter_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的学校创办了校报。第一期就揭露了食堂的卫生问题，引起了校方的不满。但你收到了同学们的支持。',
      '你偷偷采访了一位退役老兵。他告诉你战争的真相与官方宣传完全不同。你不知道该不该发表这篇报道。',
    ],
    effects: { intelligence: 4, charisma: 3 },
    flags: ['chain_reporter_childhood_1'],
    identityExclusive: 'reporter_gs',
  },
  {
    id: 'gs_ie_reporter_03', category: 'identity_exclusive', minAge: 18, maxAge: 26, probability: 0.80,
    templates: [
      '你成为了一名独立记者。在{location}的战场上，你用镜头记录下了一台MS被击毁的瞬间。那张照片后来成为了反战运动的标志。',
      '你潜入{location}的军事基地，获取了一份被压制的调查报告——关于联合军对平民区的秘密轰炸。',
    ],
    effects: { intelligence: 6, charisma: 4 },
    flags: ['chain_reporter_growth_0'],
    requiredFlags: ['chain_reporter_childhood_0'],
    identityExclusive: 'reporter_gs',
    chainPriority: 1,
  },
  {
    id: 'gs_ie_reporter_04', category: 'identity_exclusive', minAge: 25, maxAge: 38, probability: 0.75,
    templates: [
      '你的报道引起了轩然大波。{location}的政府试图封杀你，但你的文章已经传遍了整个殖民卫星群。',
      '你在{location}建立了一个独立的新闻网络，专门报道被主流媒体忽视的真相。你说："新闻工作者的职责不是取悦权力，而是服务公众。"',
    ],
    effects: { charisma: 7, intelligence: 5 },
    flags: ['chain_reporter_growth_1'],
    requiredFlags: ['chain_reporter_childhood_0'],
    identityExclusive: 'reporter_gs',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 废材逆袭 trash_exclusive (8)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_te_01', category: 'trash_exclusive', minAge: 0, maxAge: 6, probability: 0.92,
    templates: [
      '基因检测那日，{location}的医疗AI播报结果："基因序列异常，调整率评级：F。建议放弃军事训练资格。"全场一片死寂。',
      '作为被判定为基因缺陷的人，你只能看着同龄人在{location}接受MS驾驶训练。他们嘲笑你是"进化失败的残次品"。',
    ],
    effects: { special: -5, strength: -2, intelligence: 3 },
    flags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'gs_te_02', category: 'trash_exclusive', minAge: 4, maxAge: 10, probability: 0.88,
    templates: [
      '你不甘心。每日深夜，你在{location}的废弃机库翻找零件，自学机械工程。{npc}路过时皱眉："基因缺陷的人，学这些有什么用？"',
      '你在{location}的废弃物处理中心淘到了半本残破的《MS维修手册》。书页破损，开篇写道："真正的力量不在基因，在双手。"你如获至宝。',
    ],
    effects: { strength: 3, intelligence: 2, luck: 2 },
    flags: ['trash_childhood_1'],
    requiredFlags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'gs_te_03', category: 'trash_exclusive', minAge: 12, maxAge: 18, probability: 0.85,
    templates: [
      '你按照手册的方法，在{location}的地下工坊组装了一台简易动力装甲。第一次穿戴时，系统过载让你昏死过去。醒来时，你发现它能举起三倍于你的重量。',
      '别的天才一天能完成的MS同步，你需要一个月。但你在{location}日复一日地调试机械，从未间断。{npc}偶然看到你的作品，震惊地说："这...这是失传的手动操控技术？"',
    ],
    effects: { strength: 5, health: 3, special: 2 },
    flags: ['trash_growth_0'],
    requiredFlags: ['trash_childhood_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'gs_te_04', category: 'trash_exclusive', minAge: 15, maxAge: 22, probability: 0.80,
    templates: [
      '你在{location}救了一位被ZAFT重伤的退役MS驾驶员。他感激之下，将自己珍藏的"纯手动驾驶舱"送给了你——那是连军方都没有的老古董。',
      '{npc}被你的毅力打动，决定收你为学徒。他说："我这一生见过无数天才机师，但像你这样的傻子，还是第一个。"你终于有了师父。',
    ],
    effects: { strength: 7, health: 5, charisma: 2 },
    flags: ['trash_growth_1'],
    requiredFlags: ['trash_growth_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'gs_te_05', category: 'trash_exclusive', minAge: 18, maxAge: 25, probability: 0.75,
    templates: [
      '经过多年的苦练，你在{location}遇到了一个瓶颈——纯手动MS已到达性能极限，再无法对抗真正的调整者同步机师。一位路过的老技师告诉你："你需要找到上古机体的遗产。"',
      '你在{location}的陨石坑中挖掘三月，终于找到了一块未知合金。用它改造你的MS后，驾驶舱的响应速度提升了十倍——这技术不属于任何已知文明。',
    ],
    effects: { strength: 8, intelligence: 3, luck: 3 },
    flags: ['trash_growth_2'],
    requiredFlags: ['trash_growth_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'gs_te_06', category: 'trash_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      'ZAFT举办全殖民卫星MS大赛，你以"民间改装者"的身份报名参加。所有人都嘲笑你："一个基因缺陷的废物，也配驾驶MS？"',
      '大赛第一轮，你对上了ZAFT精英机师。对方驾驶着最新型的同步MS，火力全开。你不依赖任何神经链接，仅凭双手和直觉——最终，你的上古合金装甲承受住了所有攻击，你用一记近身擒拿击败了对手。全场寂静。',
    ],
    effects: { strength: 8, charisma: 6, special: 3 },
    flags: ['trash_adult_0'],
    requiredFlags: ['trash_growth_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'gs_te_07', category: 'trash_exclusive', minAge: 30, maxAge: 40, probability: 0.72,
    templates: [
      '你的"纯手动MS"震惊了机械工程界。{npc}说你是"万古以来第一个以基因缺陷之身击败调整者机师的人"。各大殖民卫星开始重新审视"纯机械操控"这条被遗忘的道路。',
      '你在{location}建立了一座小小的"缺陷者工坊"，专门招收基因评级低下的孩子。你说："基因决定起点，但双手和大脑决定终点。"',
    ],
    effects: { charisma: 7, intelligence: 5, luck: 3 },
    flags: ['trash_adult_1'],
    requiredFlags: ['trash_adult_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'gs_te_08', category: 'trash_exclusive', minAge: 35, maxAge: 45, probability: 0.68,
    templates: [
      '昔日嘲笑你的基因检测员在{location}与你重逢。他依然拿着当年的检测报告，但手在颤抖。你接过报告，平静地说："这份F评级，是我最好的勋章。"',
      '{legend}的传说指向了一处上古战场遗迹，你说服探险队让你这个"基因缺陷的废物"也加入。他们抱着看笑话的心态同意了——但很快，他们就发现只有你的纯手动MS不受遗迹干扰场的影响。',
    ],
    effects: { strength: 6, luck: 5, special: 4 },
    flags: ['trash_adult_2'],
    requiredFlags: ['trash_adult_1'],
    talentExclusive: 'trash',
  },

  // ═══════════════════════════════════════════════════════════════
  // 重大抉择 major_choice (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_mc_01', category: 'major_choice', minAge: 15, maxAge: 15, probability: 0.98,
    templates: [
      'ZAFT突袭了{location}，你的家人和朋友正处于战火之中。一台被击落的MS残骸就在你面前，驾驶舱还完好。你可以选择驾驶它战斗，也可以拒绝战斗寻找安全地带，或者帮助伤员撤离到后方。这是命运的十字路口。',
    ],
    choices: [
      { text: '驾驶MS，投身战斗', successRate: 0.7, successText: '你坐上了驾驶座。当OS启动的那一刻，你体内的某种力量苏醒了——金色的SEED光芒在你眼中闪现！你击退了敌人，保护了重要的人。', failText: '你试图驾驶MS，但缺乏训练的你很快失去了平衡。机体坠毁，你受了重伤。', effects: { strength: 10, luck: 8, special: 5 }, failEffects: { health: -30, strength: -5 }, flags: ['gs_choice_15_fight'], failFlags: ['gs_choice_15_fight_fail'] },
      { text: '拒绝战斗，寻找安全地带', successRate: 0.8, successText: '你选择了保护自己和身边的人，躲进了避难所。虽然错过了成为英雄的机会，但你活了下来。战争结束后，你开始思考：逃避是否也是一种选择？', failText: '你试图逃跑，但战火无情。一枚流弹击中了你的避难所，你受了重伤。', effects: { intelligence: 8, health: 5 }, failEffects: { health: -25, luck: -5 }, flags: ['gs_choice_15_flee'], failFlags: ['gs_choice_15_flee_fail'] },
      { text: '成为后方支援，救助伤员', successRate: 0.85, successText: '你加入了救护队，在枪林弹雨中救下了数十名伤员。你的冷静和勇敢赢得了所有人的尊敬。一位老兵说："战场不只有驾驶员才是英雄。"', failText: '你在救助伤员时被流弹波及，虽然救了几个人，但自己也受了伤。', effects: { charisma: 10, intelligence: 5 }, failEffects: { health: -20, charisma: 2 }, flags: ['gs_choice_15_support'], failFlags: ['gs_choice_15_support_fail'] },
    ],
    flags: ['gs_major_seen_15'],
    chainPriority: 10,
  },
  {
    id: 'gs_mc_02', category: 'major_choice', minAge: 30, maxAge: 30, probability: 0.97,
    templates: [
      '战争进入了最残酷的阶段。{location}发生了一起大规模屠杀事件——调整者平民和自然人难民同时遭到了袭击。你只能选择一方进行救援。这个选择将定义你余生的道路。',
    ],
    choices: [
      { text: '保护自然人', successRate: 0.75, successText: '你率领小队保护了自然人难民。当一位老人握着你的手说"谢谢"时，你意识到：生命没有贵贱之分。你的行为被联合军宣传为"自然人的英雄"。', failText: '你试图保护自然人，但力量不足。虽然救了一些人，但大多数人还是遇难了。', effects: { charisma: 10, strength: 5 }, failEffects: { health: -20, charisma: -5 }, flags: ['gs_choice_30_natural'], failFlags: ['gs_choice_30_natural_fail'] },
      { text: '保护调整者', successRate: 0.75, successText: '你选择了保护调整者平民。ZAFT高层向你致谢，但你也因此被视为联合军的叛徒。你说："我不是在选择阵营，我只是在选择生命。"', failText: '你试图保护调整者，但遭到了联合军的阻击。你勉强带着几个平民突围，但损失惨重。', effects: { intelligence: 10, special: 5 }, failEffects: { health: -25, luck: -5 }, flags: ['gs_choice_30_coordinator'], failFlags: ['gs_choice_30_coordinator_fail'] },
      { text: '寻求共存之道', successRate: 0.6, successText: '你做出了最艰难的选择——同时保护双方。你在枪林弹雨中建立了一条临时停火线，让调整者和自然人共同撤离。虽然伤亡惨重，但你的行为成为了后世"共存论"的象征。', failText: '你的理想主义在现实面前碰得粉碎。双方都不信任你，你的队伍遭到了夹击。', effects: { charisma: 15, luck: 10, intelligence: 5 }, failEffects: { health: -40, charisma: -10 }, flags: ['gs_choice_30_coexist'], failFlags: ['gs_choice_30_coexist_fail'] },
    ],
    flags: ['gs_major_seen_30'],
    chainPriority: 10,
  },
  {
    id: 'gs_mc_03', category: 'major_choice', minAge: 45, maxAge: 45, probability: 0.96,
    templates: [
      '你已是名震一方的统帅。{location}的局势到达了临界点——ZAFT和联合军都集结了最终决战兵力。你可以选择发动决战一劳永逸，也可以尝试和平谈判，或者带领支持者独立建国。',
    ],
    choices: [
      { text: '发动决战，终结战争', successRate: 0.65, successText: '你发动了全面决战。在{location}的宇宙中，数千台MS交织成死亡的光网。最终，你以惨痛的代价获得了胜利。但当你看到战报上的伤亡数字时，你沉默了。', failText: '决战以惨败告终。你的舰队被包围，你勉强突围，但失去了大半兵力。', effects: { strength: 15, intelligence: 5 }, failEffects: { health: -50, strength: -10, charisma: -10 }, flags: ['gs_choice_45_war'], failFlags: ['gs_choice_45_war_fail'] },
      { text: '和平谈判，寻求妥协', successRate: 0.55, successText: '你冒着被暗杀的风险，提出了和平谈判。经过数月的斡旋，双方终于签署了《停战协定》。虽然没有人完全满意，但战争终于结束了。你的名字被刻入了和平纪念碑。', failText: '谈判被极端分子破坏。你险些丧命，和平的希望再次破灭。', effects: { charisma: 15, luck: 10 }, failEffects: { health: -30, charisma: -10 }, flags: ['gs_choice_45_peace'], failFlags: ['gs_choice_45_peace_fail'] },
      { text: '独立建国，走第三条路', successRate: 0.5, successText: '你宣布{location}独立，建立了一个不隶属任何阵营的新国家。虽然遭到了双方的围攻，但你的理想吸引了无数追随者。多年后，这个小小的中立国成为了和平的灯塔。', failText: '独立建国的梦想在现实的夹缝中被碾碎。你的领土被双方瓜分，你成为了流亡者。', effects: { intelligence: 12, charisma: 8, luck: 5 }, failEffects: { health: -40, charisma: -15, luck: -10 }, flags: ['gs_choice_45_independent'], failFlags: ['gs_choice_45_independent_fail'] },
    ],
    flags: ['gs_major_seen_45'],
    chainPriority: 10,
  },
  {
    id: 'gs_mc_04', category: 'major_choice', minAge: 60, maxAge: 60, probability: 0.95,
    templates: [
      '战争已经持续了太久。{location}上空，最终兵器正在充能，一旦发射将摧毁整片殖民卫星群。你掌握着阻止它的关键——但代价是你的生命。{npc}握着你的手："这是你的选择。"',
    ],
    choices: [
      { text: '牺牲自己，结束战争', successRate: 0.7, successText: '你驾驶着满载炸药的MS冲向了最终兵器。在爆炸的火光中，你看到了金色的SEED光芒。战争结束了，而你的名字成为了永恒的传奇。', failText: '你的牺牲虽然破坏了最终兵器，但战争并未因此结束。你的死成为了又一笔被仇恨记录的账。', effects: { charisma: 20, luck: 15 }, failEffects: { health: -100 }, flags: ['gs_choice_60_sacrifice'], failFlags: ['gs_choice_60_sacrifice_fail'] },
      { text: '继续战斗，直到最后', successRate: 0.6, successText: '你选择了继续战斗。在接下来的十年里，你带领幸存者们建立了新的防线。虽然疲惫，但你从未放弃。最终，你见证了战争结束的那一天。', failText: '你选择了继续战斗，但岁月不饶人。你的机体在最后一次战斗中被击坠，你带着遗憾离开了这个世界。', effects: { strength: 10, intelligence: 5 }, failEffects: { health: -100 }, flags: ['gs_choice_60_fight'], failFlags: ['gs_choice_60_fight_fail'] },
      { text: '带着重要的人逃离', successRate: 0.75, successText: '你选择了活下去。带着{npc}和一群追随者，你逃到了宇宙的边缘。在那里，你们建立了一个远离战争的小社区。虽然渺小，但那是和平的种子。', failText: '你的逃亡之路充满了艰险。虽然最终到达了一个安全的地方，但你失去了许多重要的人。', effects: { luck: 10, health: 5, charisma: 5 }, failEffects: { health: -30, charisma: -5, luck: -5 }, flags: ['gs_choice_60_escape'], failFlags: ['gs_choice_60_escape_fail'] },
    ],
    flags: ['gs_major_seen_60'],
    chainPriority: 10,
  },

  // ═══════════════════════════════════════════════════════════════
  // 境界突破 cultivation/realm (14)
  // Realms: 1平民→2士兵→3王牌→4舰长→5指挥官→6将军→7领袖→8和平缔造者
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'gs_cult_r1', category: 'cultivation', minAge: 15, maxAge: 25, probability: 0.90,
    templates: [
      '你在{location}的军事训练营中经过了严苛的考核。当授衔仪式上的肩章被扣上时，你正式成为了一名士兵——这是踏上战场的起点。',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以优异的成绩通过考核，成为了正式的士兵！', failText: '考核中出现了意外，你勉强通过，但受了轻伤。', effects: { realm: 1, strength: 5, special: 3, maxAge: 60 }, failEffects: { health: -15, strength: 2 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail_1'] },
      { text: '稳扎稳打', successRate: 1, successText: '你选择了稳健的方式，顺利通过考核成为士兵。', failText: '稳健的准备让你错过了最佳时机，考核被迫延期。', effects: { realm: 1, strength: 3, intelligence: 3, maxAge: 50 }, failEffects: { intelligence: 2 }, flags: ['realm_breakthrough_1', 'realm_breakthrough_1_steady'], failFlags: ['realm_fail_1_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续训练，根基更加扎实。', failText: '', effects: { strength: 2, intelligence: 2 }, flags: ['realm_delay_1'], failFlags: [] },
    ],
    flags: ['realm_attempt_1'],
    chainPriority: 5,
  },
  {
    id: 'gs_cult_r1s', category: 'cultivation', minAge: 17, maxAge: 30, probability: 0.70,
    templates: [
      '你成为士兵的消息在{location}传开。战友们纷纷前来祝贺，你的军旅生涯正式开始。',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_1'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 2,
  },
  {
    id: 'gs_cult_r1r', category: 'cultivation', minAge: 18, maxAge: 35, probability: 0.60,
    templates: [
      '上次考核失败后，你在{location}默默疗伤、重新训练。你再次感应到了突破的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了教训，一举成为正式士兵！', failText: '又一次失败。你开始怀疑自己是否真的适合战场...', effects: { realm: 1, strength: 5, maxAge: 60 }, failEffects: { health: -30, strength: -8 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail2_1'] },
    ],
    flags: ['realm_retry_1'],
    requiredFlags: ['realm_fail_1'],
    chainPriority: 3,
  },
  {
    id: 'gs_cult_r2', category: 'cultivation', minAge: 20, maxAge: 35, probability: 0.85,
    templates: [
      '你在{location}经历了无数次实战，终于触摸到了王牌机师的门槛。{npc}告诉你："王牌机师不是靠击坠数定义的，是靠在绝望中依然能保护重要之人的意志定义的。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你在{location}的决战中一人击坠十台敌机，金色的SEED光芒闪耀——你成为了王牌机师！', failText: '突破之战中你的机体严重受损，虽然生还但错过了晋升的机会。', effects: { realm: 1, strength: 8, luck: 5, maxAge: 90 }, failEffects: { health: -30, special: -5 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail_2'] },
      { text: '稳扎稳打', successRate: 1, successText: '你以稳健的战绩和出色的指挥能力，正式晋升为王牌机师。', failText: '稳健的策略让你错失了关键战机，晋升被延期。', effects: { realm: 1, strength: 5, intelligence: 5, maxAge: 75 }, failEffects: { intelligence: 2, luck: -3 }, flags: ['realm_breakthrough_2', 'realm_breakthrough_2_steady'], failFlags: ['realm_fail_2_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累，根基更加扎实。', failText: '', effects: { strength: 3, intelligence: 2 }, flags: ['realm_delay_2'], failFlags: [] },
    ],
    flags: ['realm_attempt_2'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 5,
  },
  {
    id: 'gs_cult_r2s', category: 'cultivation', minAge: 22, maxAge: 40, probability: 0.70,
    templates: [
      '你成为王牌机师的消息传遍了战场。敌我双方都知道了你的名字——{location}的"金色恶魔"。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_2'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 2,
  },
  {
    id: 'gs_cult_r2r', category: 'cultivation', minAge: 23, maxAge: 45, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了王牌机师的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为王牌机师！', failText: '又一次失败...', effects: { realm: 1, strength: 5, maxAge: 90 }, failEffects: { health: -40, strength: -10 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail2_2'] },
    ],
    flags: ['realm_retry_2'],
    requiredFlags: ['realm_fail_2'],
    chainPriority: 3,
  },
  {
    id: 'gs_cult_r3', category: 'cultivation', minAge: 28, maxAge: 45, probability: 0.80,
    templates: [
      '你在{location}的舰队中历练多年，终于触摸到了舰长的门槛。{npc}告诉你："舰长指挥的不只是战舰，更是数百人的生命。你的每一个决定都将被历史铭记。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以卓越的指挥才能，正式晋升为舰长！', failText: '晋升考核中出现了严重失误，你错过了这次机会。', effects: { realm: 1, intelligence: 8, charisma: 5, maxAge: 130 }, failEffects: { health: -25, intelligence: -5 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail_3'] },
      { text: '稳扎稳打', successRate: 1, successText: '你凭借稳健的战绩和出色的管理能力，正式成为舰长。', failText: '稳健的准备被一场意外打乱，晋升失败。', effects: { realm: 1, intelligence: 5, charisma: 5, maxAge: 110 }, failEffects: { health: -15, charisma: -3 }, flags: ['realm_breakthrough_3', 'realm_breakthrough_3_steady'], failFlags: ['realm_fail_3_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。', failText: '', effects: { intelligence: 3, charisma: 2 }, flags: ['realm_delay_3'], failFlags: [] },
    ],
    flags: ['realm_attempt_3'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 5,
  },
  {
    id: 'gs_cult_r3s', category: 'cultivation', minAge: 30, maxAge: 50, probability: 0.70,
    templates: [
      '你成为舰长的消息传遍了舰队。船员们对你充满了敬意，{location}的港口为你鸣放了礼炮。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_3'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 2,
  },
  {
    id: 'gs_cult_r3r', category: 'cultivation', minAge: 32, maxAge: 55, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了舰长的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为舰长！', failText: '又一次失败...', effects: { realm: 1, intelligence: 5, maxAge: 130 }, failEffects: { health: -35, intelligence: -8 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail2_3'] },
    ],
    flags: ['realm_retry_3'],
    requiredFlags: ['realm_fail_3'],
    chainPriority: 3,
  },
  {
    id: 'gs_cult_r4', category: 'cultivation', minAge: 35, maxAge: 55, probability: 0.78,
    templates: [
      '你在{location}的战场上立下赫赫战功，终于触摸到了指挥官的门槛。{npc}告诉你："指挥官需要的不只是勇武，更是统筹全局的智慧。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以卓越的战绩和战略眼光，正式晋升为指挥官！', failText: '关键时刻的决策失误让你错失晋升机会。', effects: { realm: 1, intelligence: 10, charisma: 5, maxAge: 170 }, failEffects: { health: -30, charisma: -5 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail_4'] },
      { text: '稳扎稳打', successRate: 1, successText: '你凭借多年的积累和稳健的表现，正式成为指挥官。', failText: '稳健的步伐被一场政变打断，晋升失败。', effects: { realm: 1, intelligence: 6, charisma: 6, maxAge: 140 }, failEffects: { health: -20, intelligence: -3 }, flags: ['realm_breakthrough_4', 'realm_breakthrough_4_steady'], failFlags: ['realm_fail_4_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。', failText: '', effects: { intelligence: 4, charisma: 3 }, flags: ['realm_delay_4'], failFlags: [] },
    ],
    flags: ['realm_attempt_4'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 5,
  },
  {
    id: 'gs_cult_r4s', category: 'cultivation', minAge: 38, maxAge: 60, probability: 0.70,
    templates: [
      '你成为指挥官的消息传遍了各大势力。{location}的战略会议上，你的名字成为了最高优先级的讨论对象。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_4'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 2,
  },
  {
    id: 'gs_cult_r4r', category: 'cultivation', minAge: 40, maxAge: 65, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了指挥官的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为指挥官！', failText: '又一次失败...', effects: { realm: 1, intelligence: 6, maxAge: 170 }, failEffects: { health: -40, intelligence: -10 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail2_4'] },
    ],
    flags: ['realm_retry_4'],
    requiredFlags: ['realm_fail_4'],
    chainPriority: 3,
  },
  {
    id: 'gs_cult_r5', category: 'cultivation', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}的影响力已臻巅峰，终于触摸到了将军的门槛。{npc}告诉你："将军掌控的不是军队，而是国家的命运。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以无与伦比的威望和战绩，正式晋升为将军！', failText: '政治斗争让你错失晋升机会，你被调往边缘战区。', effects: { realm: 1, charisma: 12, strength: 5, maxAge: 220 }, failEffects: { health: -30, charisma: -10 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail_5'] },
      { text: '稳扎稳打', successRate: 1, successText: '你凭借数十年的积累和人脉，正式成为将军。', failText: '稳健的布局被政敌破坏，晋升失败。', effects: { realm: 1, charisma: 8, intelligence: 5, maxAge: 180 }, failEffects: { health: -20, luck: -5 }, flags: ['realm_breakthrough_5', 'realm_breakthrough_5_steady'], failFlags: ['realm_fail_5_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。', failText: '', effects: { charisma: 4, intelligence: 3 }, flags: ['realm_delay_5'], failFlags: [] },
    ],
    flags: ['realm_attempt_5'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 5,
  },
  {
    id: 'gs_cult_r5s', category: 'cultivation', minAge: 48, maxAge: 75, probability: 0.70,
    templates: [
      '你成为将军的消息震撼了整个宇宙。{location}的阅兵式上，数万将士向你敬礼。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_5'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 2,
  },
  {
    id: 'gs_cult_r5r', category: 'cultivation', minAge: 50, maxAge: 80, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了将军的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为将军！', failText: '又一次失败...', effects: { realm: 1, charisma: 8, maxAge: 220 }, failEffects: { health: -45, charisma: -12 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail2_5'] },
    ],
    flags: ['realm_retry_5'],
    requiredFlags: ['realm_fail_5'],
    chainPriority: 3,
  },
  {
    id: 'gs_cult_r6', category: 'cultivation', minAge: 55, maxAge: 85, probability: 0.72,
    templates: [
      '你在{location}的政治舞台上耕耘多年，终于触摸到了国家领袖的门槛。{npc}告诉你："领袖不是权力的巅峰，而是责任的深渊。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以无可争议的威望和智慧，正式成为国家领袖！', failText: '政治阴谋让你身败名裂，你被流放到了边缘卫星。', effects: { realm: 1, charisma: 15, intelligence: 8, maxAge: 280 }, failEffects: { health: -40, charisma: -15 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail_6'] },
      { text: '稳扎稳打', successRate: 1, successText: '你凭借数十年的政绩和人望，正式成为国家领袖。', failText: '稳健的步伐被一场暗杀打断，你重伤卧床数月。', effects: { realm: 1, charisma: 10, intelligence: 8, maxAge: 230 }, failEffects: { health: -30, intelligence: -5 }, flags: ['realm_breakthrough_6', 'realm_breakthrough_6_steady'], failFlags: ['realm_fail_6_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。', failText: '', effects: { charisma: 5, intelligence: 4 }, flags: ['realm_delay_6'], failFlags: [] },
    ],
    flags: ['realm_attempt_6'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 5,
  },
  {
    id: 'gs_cult_r6s', category: 'cultivation', minAge: 58, maxAge: 90, probability: 0.70,
    templates: [
      '你成为国家领袖的消息传遍了人类世界。在{location}的就职典礼上，你说："我代表的不是一个阵营，而是所有渴望和平的人。"',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_6'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 2,
  },
  {
    id: 'gs_cult_r6r', category: 'cultivation', minAge: 60, maxAge: 95, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了国家领袖的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为国家领袖！', failText: '又一次失败...', effects: { realm: 1, charisma: 10, maxAge: 280 }, failEffects: { health: -50, charisma: -15 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail2_6'] },
    ],
    flags: ['realm_retry_6'],
    requiredFlags: ['realm_fail_6'],
    chainPriority: 3,
  },
  {
    id: 'gs_cult_r7', category: 'cultivation', minAge: 70, maxAge: 110, probability: 0.68,
    templates: [
      '你在{location}的政治遗产已无人能及，终于触摸到了和平缔造者的门槛。{npc}告诉你："和平缔造者不是战胜敌人，而是让敌人不再需要战斗。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以无上的智慧和慈悲，正式成为和平缔造者！你的名字将永远与和平同在。', failText: '你的和平倡议被极端分子破坏，你身负重伤，梦想破灭。', effects: { realm: 1, charisma: 20, luck: 10, maxAge: 350 }, failEffects: { health: -50, charisma: -20 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail_7'] },
      { text: '稳扎稳打', successRate: 1, successText: '你凭借一生的努力和人望，正式成为和平缔造者。', failText: '稳健的步伐被战争的车轮碾碎，你的和平之梦再次延期。', effects: { realm: 1, charisma: 15, intelligence: 10, maxAge: 300 }, failEffects: { health: -30, luck: -8 }, flags: ['realm_breakthrough_7', 'realm_breakthrough_7_steady'], failFlags: ['realm_fail_7_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。', failText: '', effects: { charisma: 6, intelligence: 5 }, flags: ['realm_delay_7'], failFlags: [] },
    ],
    flags: ['realm_attempt_7'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 5,
  },
  {
    id: 'gs_cult_r7s', category: 'cultivation', minAge: 72, maxAge: 115, probability: 0.70,
    templates: [
      '你成为和平缔造者的消息传遍了整个宇宙。在{location}的和平纪念碑前，调整者和自然人第一次并肩而立，共同向你致敬。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_7'],
    requiredFlags: ['realm_breakthrough_7'],
    chainPriority: 2,
  },
  {
    id: 'gs_cult_r7r', category: 'cultivation', minAge: 75, maxAge: 120, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了和平缔造者的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为和平缔造者！', failText: '又一次失败...', effects: { realm: 1, charisma: 15, maxAge: 350 }, failEffects: { health: -60, charisma: -20 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail2_7'] },
    ],
    flags: ['realm_retry_7'],
    requiredFlags: ['realm_fail_7'],
    chainPriority: 3,
  },
];
