import type { EventTemplate } from './types';

// 三体世界 — 约100个事件模板
// 属性: 意志(strength)/理性(intelligence)/影响力(charisma)/机遇(luck)/生存(health)/科技(special)
// 境界: 平民→学者→工程师→科学家→面壁者→执剑人→文明守护者→宇宙级存在

export const threeBodyTemplates: EventTemplate[] = [
  // ═══════════════════════════════════════════════════════════════
  // 通用童年 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_ch_01', category: 'childhood', minAge: 0, maxAge: 5, probability: 0.55,
    templates: [
      '你出生在危机纪元初期的地球，天空中时常能看到太空电梯的轨迹。{npc}抱着你说："孩子，你来的不是最好的时代，但也不是最坏的。"',
      '你的童年在{location}度过，那时的天空还没有被智子封锁，物理学仍然存在。',
      '{location}的幼儿园里，老师教你们认识星空。你指着三体星的方向问："那里也有小朋友吗？"全场沉默。',
    ],
    effects: { luck: 3, health: 2 },
  },
  {
    id: 'tb_ch_02', category: 'childhood', minAge: 3, maxAge: 8, probability: 0.42,
    templates: [
      '你在{location}第一次接触到基础科学书籍，那些公式和定律让你着迷。{npc}说你有成为科学家的潜质。',
      '七岁那年，你在{location}目睹了第一次"物理学不存在了"的恐慌。大人们惊慌失措，而你只是静静地看着。',
      '你的父母带你去看了面壁者的全球直播。你指着屏幕上的罗辑问："他一个人真的能拯救世界吗？"',
    ],
    effects: { intelligence: 3, special: 2 },
  },
  {
    id: 'tb_ch_03', category: 'childhood', minAge: 5, maxAge: 10, probability: 0.68,
    templates: [
      '你在{location}和伙伴们玩"黑暗森林"游戏，大家躲在角落里互相猜忌。你突然明白了什么。',
      '危机纪元的童年没有童话，只有生存训练。你在{location}学会了辨认警报声和紧急避难路线。',
      '{npc}送你一台老式望远镜，你常常在{location}观察星空，想象着四百光年外的三体世界。',
    ],
    effects: { strength: 2, luck: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用成长 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_gr_01', category: 'growth', minAge: 12, maxAge: 18, probability: 0.48,
    templates: [
      '你在{location}的中学里成绩优异，尤其对天体物理表现出惊人的天赋。老师推荐你参加PDC青年科学营。',
      '青春期的你在{location}开始思考宇宙社会学的基本定理。你在笔记本上写下："生存是文明的第一需要。"',
      '{npc}注意到了你的才华，私下对你说："如果物理学真的被锁死了，你会选择做什么？"',
    ],
    effects: { intelligence: 5, special: 3 },
  },
  {
    id: 'tb_gr_02', category: 'growth', minAge: 15, maxAge: 22, probability: 0.58,
    templates: [
      '你在{location}经历了人生第一次重大抉择。是投身基础科学研究，还是转向应用技术？',
      '大学时代的你在{location}加入了行星防御理事会的学生组织，开始接触人类抵抗运动的边缘。',
      '你在{location}遇到了一位神秘的老教授，他低声对你说："有些知识，三体人不想让我们知道。"',
    ],
    effects: { charisma: 3, luck: 3 },
  },
  {
    id: 'tb_gr_03', category: 'growth', minAge: 18, maxAge: 25, probability: 0.62,
    templates: [
      '你在{location}完成了学业，拿到了人类稀缺的高等学位。PDC的人才部门对你很感兴趣。',
      '毕业那天，{npc}送给你一本《三体》游戏手册。"了解你的敌人，"他说，"是战胜他们的第一步。"',
      '你在{location}参加了一次模拟面壁者选拔测试。虽然没有被选上，但你第一次体会到了独自承担责任的重量。',
    ],
    effects: { intelligence: 4, strength: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用成年 (2)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_ad_01', category: 'adult', minAge: 28, maxAge: 40, probability: 0.52,
    templates: [
      '成年后的你在{location}拥有了一份重要的工作。你的决策开始影响他人的命运，这让你既兴奋又恐惧。',
      '你在{location}建立了家庭。看着孩子的眼睛，你第一次真正理解了"为了人类的延续"这句话的分量。',
    ],
    effects: { charisma: 4, health: 3 },
  },
  {
    id: 'tb_ad_02', category: 'adult', minAge: 30, maxAge: 50, probability: 0.64,
    templates: [
      '岁月在{location}静静流淌。你每天处理着看似平凡的事务，但你知道，文明的延续正是由无数个平凡构成的。',
      '{npc}来找你商量一件机密事宜。在{location}的深夜，你们讨论了逃亡主义、黑暗森林和人类可能的未来。',
    ],
    effects: { intelligence: 3, strength: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用老年 (1)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_el_01', category: 'elder', minAge: 60, maxAge: 100, probability: 0.56,
    templates: [
      '你在{location}的晚年生活平静而充实。你开始将自己的经验整理成书，希望留给后人一些有用的东西。',
      '年事已高的你常常坐在{location}的窗前，看着那颗遥远的比邻星。你知道，也许在你死后很久，答案才会揭晓。',
      '{npc}来拜访你这位老人。你将自己一生的思考倾囊相授，仿佛在进行某种传承。',
    ],
    effects: { charisma: 5, intelligence: 3 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 战斗 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_cb_01', category: 'combat', minAge: 20, maxAge: 40, probability: 0.35,
    templates: [
      '你在{location}遭遇了地球三体组织的袭击。凭借冷静的头脑和求生的意志，你成功脱险并协助逮捕了几名叛军。',
      '太空军演习中，你在{location}指挥一支小型舰队完成了不可能的战术机动。上级对你的表现赞不绝口。',
    ],
    effects: { strength: 6, intelligence: 3, health: -3 },
  },
  {
    id: 'tb_cb_02', category: 'combat', minAge: 25, maxAge: 50, probability: 0.44,
    templates: [
      '你在{location}参与了一次针对ETO的秘密行动。枪火与计算交织的夜里，你意识到人类最大的敌人有时是自己。',
      '三体探测器"水滴"摧毁舰队的消息传来时，你正在{location}。幸存者的负罪感和愤怒让你彻夜难眠。',
    ],
    effects: { strength: 4, charisma: 2, health: -5 },
  },
  {
    id: 'tb_cb_03', category: 'combat', minAge: 30, maxAge: 60, probability: 0.58,
    templates: [
      '你在{location}经历了末日战役后的重建工作。真正的战斗不是毁灭，而是在废墟上重建希望。',
      '{npc}和你在{location}就"用黑暗森林威慑是否道德"展开了激烈的辩论。没有赢家，但你们都更理解了对方。',
    ],
    effects: { strength: 3, charisma: 3 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 恋爱/羁绊 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_rm_01', category: 'romance', minAge: 18, maxAge: 30, probability: 0.38,
    templates: [
      '你在{location}遇到了{npc}。在这个朝不保夕的时代，你们选择了相互依靠。',
      '末日阴影下的爱情格外珍贵。你和{npc}在{location}许下了或许是人类历史上最脆弱的誓言。',
    ],
    effects: { charisma: 5, luck: 3, health: 3 },
    relationshipEffects: { cheng_xin: 8 },
  },
  {
    id: 'tb_rm_02', category: 'romance', minAge: 25, maxAge: 40, probability: 0.46,
    templates: [
      '你和{npc}在{location}的关系经历了考验。当智子在全世界展开监视时，你们学会了用眼神交流。',
      '{npc}送给你一块来自太空电梯的碎片作为定情信物。"如果世界毁灭，"TA说，"至少我们拥有过彼此。"',
    ],
    effects: { charisma: 4, strength: 2 },
    relationshipEffects: { sophon: 8 },
  },
  {
    id: 'tb_rm_03', category: 'romance', minAge: 35, maxAge: 55, probability: 0.52,
    templates: [
      '多年的陪伴让你和{npc}之间产生了超越语言的默契。在{location}的一个平凡夜晚，你们共同仰望星空。',
      '{npc}对你说："如果我必须做出选择，我会选择你——不是选择人类，不是选择文明，只是选择你。"',
    ],
    effects: { charisma: 3, luck: 2, health: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 修炼/提升 (cultivation) (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_cult_01', category: 'cultivation', minAge: 20, maxAge: 40, probability: 0.42,
    templates: [
      '你在{location}的实验室里度过了无数个不眠之夜。一个突破性的发现让你的科技水平大幅提升。',
      '{npc}与你彻夜长谈，分享了关于宇宙社会学的深层见解。你的理性思维能力得到了质的飞跃。',
    ],
    effects: { intelligence: 6, special: 4 },
  },
  {
    id: 'tb_cult_02', category: 'cultivation', minAge: 30, maxAge: 50, probability: 0.54,
    templates: [
      '你在{location}成功主持了一个重大项目，从曲率引擎到智子屏蔽，你的技术造诣日益增长。',
      '经过多年的积累，你在{location}发表了一篇震动学界的论文——虽然智子封锁了高能物理，但应用技术的道路依然广阔。',
    ],
    effects: { special: 5, charisma: 3 },
  },
  {
    id: 'tb_cult_03', category: 'cultivation', minAge: 40, maxAge: 70, probability: 0.62,
    templates: [
      '你在{location}成为了某个领域的权威。年轻一辈的科学家慕名而来，你感受到了传承的重量。',
      '岁月和经历让你对黑暗森林法则有了更深的理解。在{location}的深夜，你写下了新的宇宙社会学推论。',
    ],
    effects: { intelligence: 4, strength: 3 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 探索 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_ex_01', category: 'exploration', minAge: 25, maxAge: 45, probability: 0.36,
    templates: [
      '你在{location}发现了一批被PDC封存的古老档案，里面记录着面壁计划初期的绝密资料。',
      '一次偶然的机会，你在{location}接触到了三体游戏的早期版本，从中窥见了三体文明的一角。',
    ],
    effects: { luck: 5, intelligence: 3 },
  },
  {
    id: 'tb_ex_02', category: 'exploration', minAge: 30, maxAge: 55, probability: 0.48,
    templates: [
      '你参与了一次对{location}地下设施的探索，那里曾经是某个面壁者的秘密实验室。',
      '在{location}的废墟中，你发现了一台仍能运作的智子屏蔽装置原型。这是无价之宝。',
    ],
    effects: { special: 5, luck: 3 },
  },
  {
    id: 'tb_ex_03', category: 'exploration', minAge: 35, maxAge: 65, probability: 0.56,
    templates: [
      '你在{location}的深空观测站工作，捕捉到了一组异常的引力波信号。这可能是人类第一次直接观测到黑暗森林打击。',
      '{npc}带你去了一个{location}的秘密地点，那里保存着人类最完整的文明火种备份。',
    ],
    effects: { intelligence: 4, charisma: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 世界主线 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_ws_01', category: 'world_story', minAge: 25, maxAge: 50, probability: 0.44,
    templates: [
      '你在{location}亲历了面壁计划的某个关键时刻。当罗辑在联合国大厅中被宣布为面壁者时，你就在人群中。',
      '执剑人交接的历史性时刻，你在{location}见证了人类命运的转折。程心放下了那个红色开关。',
    ],
    effects: { strength: 4, intelligence: 4 },
  },
  {
    id: 'tb_ws_02', category: 'world_story', minAge: 40, maxAge: 70, probability: 0.52,
    templates: [
      '广播纪元到来，你在{location}经历了人类历史上最恐慌也最团结的时期。三体星系被摧毁的消息让所有人既恐惧又庆幸。',
      '{npc}对你说："黑暗森林的坐标已经暴露，太阳系不再是安全的家园。"你知道，逃亡的时代开始了。',
    ],
    effects: { charisma: 5, luck: 3 },
  },
  {
    id: 'tb_ws_03', category: 'world_story', minAge: 60, maxAge: 100, probability: 0.48,
    templates: [
      '二维化的太阳系在{location}的观测屏上缓缓展开，像一幅梵高的星空。你是少数逃出太阳系的幸运儿之一。',
      '宇宙末法时代，你在{location}的小宇宙中度过了最后的岁月。人类的文明之火，竟以这种方式延续了下来。',
    ],
    effects: { strength: 6, intelligence: 5 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 隐藏 (2)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_hd_01', category: 'hidden', minAge: 50, maxAge: 90, probability: 0.22,
    templates: [
      '你在{location}的绝密档案中发现了令人震惊的真相：黑暗森林法则本身可能是一个更大的陷阱。',
      '一个自称"归零者"的神秘存在通过智子与你接触。TA说："你们所理解的一切，都只是更高维度的一角。"',
    ],
    effects: { intelligence: 10, special: 8 },
    conditions: [{ stat: 'intelligence', min: 80 }],
  },
  {
    id: 'tb_hd_02', category: 'hidden', minAge: 70, maxAge: 120, probability: 0.18,
    templates: [
      '你在{location}破解了一段来自宇宙深处的信号。那不是任何已知文明的通讯，而是某种...宇宙本身的低语。',
      '{npc}临终前告诉你一个秘密：TA曾与三体人有过心灵层面的交流，而三体人真正的恐惧不是黑暗森林，而是某种更古老的存在。',
    ],
    effects: { luck: 8, strength: 5 },
    conditions: [{ stat: 'luck', min: 70 }],
  },

  // ═══════════════════════════════════════════════════════════════
  // 死亡 (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_dt_01', category: 'death', minAge: 20, maxAge: 50, probability: 0.28,
    templates: [
      '你在{location}遭遇了ETO的暗杀。临死前，你将自己发现的秘密通过预置程序发送了出去。死亡不是终点。',
      '三体探测器突破了防线。在{location}的最后时刻，你选择引爆了设施，与敌人同归于尽。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'tb_dt_02', category: 'death', minAge: 40, maxAge: 80, probability: 0.32,
    templates: [
      '黑暗森林打击降临太阳系。你在{location}看着二向箔缓缓展开，没有选择逃亡。"让我看着人类文明最后一刻。"',
      '你参与的曲率飞船实验发生了事故。在{location}的最后瞬间，你完成了最关键的数据记录，为后人留下了宝贵的信息。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'tb_dt_03', category: 'death', minAge: 60, maxAge: 120, probability: 0.24,
    templates: [
      '你在{location}度过了最后的岁月。没有轰轰烈烈的死亡，只是静静地闭上了眼睛。但你的思想已经写入了人类的文明博物馆。',
      '{npc}握着你的手，陪你走完了最后一程。你的死亡不是悲剧，而是漫长历史中自然的一页。',
    ],
    effects: { health: -100 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 重大抉择 (4) — 15岁/30岁/45岁/60岁
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_mc_15', category: 'major_choice', minAge: 15, maxAge: 15, probability: 0.95,
    templates: [
      '十五岁那年，你站在{location}的岔路口。{npc}问你："危机纪元已经到来，你想走哪条路？基础科学虽然被智子封锁，但仍是文明的灯塔；工程应用能在当下拯救最多的人；而社会学，是理解我们处境的关键。"',
    ],
    choices: [
      { text: '研究基础科学', successRate: 1, successText: '你选择了基础科学。虽然知道智子封锁了高能物理的前沿，但你相信，科学的根基永远不会被完全摧毁。你成为了少数坚守理论物理的学者。', failText: '你投身基础科学，但实验室的接连失败让你心灰意冷。智子的封锁比想象中更严密。', effects: { intelligence: 10, special: 5 }, failEffects: { intelligence: -5, strength: -3 }, flags: ['major_science'], failFlags: ['major_science_fail'] },
      { text: '投身工程应用', successRate: 1, successText: '你选择了工程应用。在智子封锁的阴影下，应用技术的突破成为人类最现实的希望。你参与了恒星飞船的早期设计。', failText: '你投身工程，但项目因为资源争夺而被取消。你学会了一个道理：在危机纪元，连理想都是奢侈品。', effects: { special: 8, strength: 5 }, failEffects: { special: -3, luck: -3 }, flags: ['major_engineering'], failFlags: ['major_engineering_fail'] },
      { text: '关注社会', successRate: 1, successText: '你选择了关注社会。你开始研究宇宙社会学，试图理解人类在这个残酷宇宙中的位置。黑暗森林法则的雏形在你脑海中浮现。', failText: '你关注社会，但你的理论被主流学界视为危言耸听。孤独和误解伴随了你的整个青年时代。', effects: { charisma: 8, intelligence: 5 }, failEffects: { charisma: -5, luck: -3 }, flags: ['major_society'], failFlags: ['major_society_fail'] },
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  },
  {
    id: 'tb_mc_30', category: 'major_choice', minAge: 30, maxAge: 30, probability: 0.92,
    templates: [
      '三十岁那年，面壁计划进入了关键阶段。{npc}找到你："你可以成为面壁者，用欺骗对抗三体；可以成为破壁人，揭示真相；或者保持旁观，让历史自行发展。选择吧。"',
    ],
    choices: [
      { text: '成为面壁者', successRate: 0.3, successText: '你被选中成为面壁者！联合国的授勋仪式上，你看着台下的人群，知道自己将背负全人类的命运独自前行。', failText: '你申请成为面壁者，但委员会认为你缺乏足够的战略欺骗能力。你只能以顾问身份参与计划。', effects: { strength: 10, charisma: 8, special: 5 }, failEffects: { strength: 3, charisma: -3 }, flags: ['major_wallfacer'], failFlags: ['major_wallfacer_fail'] },
      { text: '成为破壁人', successRate: 0.4, successText: '你成为了破壁人。你以惊人的洞察力揭穿了某位面壁者的战略意图，虽然手段残酷，但你认为这是必要的真相。', failText: '你试图成为破壁人，但你的分析出现了致命错误。你误读了一个无辜者的意图，造成了不可挽回的伤害。', effects: { intelligence: 10, strength: 5 }, failEffects: { intelligence: -5, charisma: -5 }, flags: ['major_wallbreaker'], failFlags: ['major_wallbreaker_fail'] },
      { text: '旁观', successRate: 1, successText: '你选择了旁观。你不属于任何阵营，只是冷静地记录着一切。历史会证明，旁观者有时比参与者看得更清楚。', failText: '你的旁观被误解为冷漠。在极端的时代，中立本身就是一种罪过。', effects: { intelligence: 8, luck: 5 }, failEffects: { charisma: -5, strength: -3 }, flags: ['major_observer'], failFlags: ['major_observer_fail'] },
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  },
  {
    id: 'tb_mc_45', category: 'major_choice', minAge: 45, maxAge: 45, probability: 0.9,
    templates: [
      '四十五岁，广播纪元到来。三体星系已被摧毁，太阳系的坐标也已暴露。{npc}问你："守护地球是浪漫的坚持，逃离太阳系是理性的选择，与三体谈判是危险的尝试。你怎么选？"',
    ],
    choices: [
      { text: '守护地球', successRate: 0.6, successText: '你选择了守护地球。你加入了掩体计划，在木星背后建造太空城。你知道这可能只是延缓末日，但你无法离开母亲行星。', failText: '你守护地球，但掩体计划在资源争夺中举步维艰。你看着自己的理想一点点被现实磨平。', effects: { strength: 10, charisma: 6 }, failEffects: { strength: -5, health: -10 }, flags: ['major_guard_earth'], failFlags: ['major_guard_earth_fail'] },
      { text: '逃离太阳系', successRate: 0.5, successText: '你选择了逃离。你登上了星舰人类的一艘飞船，成为逃亡主义的一员。回头看，蓝色的地球越来越小，你的眼泪在失重中漂浮。', failText: '你试图逃离，但飞船在加速过程中发生了故障。你虽然没有死，但失去了离开太阳系的机会。', effects: { luck: 8, intelligence: 5 }, failEffects: { luck: -5, health: -15 }, flags: ['major_escape'], failFlags: ['major_escape_fail'] },
      { text: '与三体谈判', successRate: 0.2, successText: '你以惊人的勇气提出了与三体残存势力谈判的方案。虽然风险巨大，但你们最终达成了一个脆弱的共存协议。这是人类历史上最大胆的外交突破。', failText: '谈判破裂了。三体人利用谈判的机会获取了人类防御系统的情报。你被冠以叛徒的罪名。', effects: { charisma: 10, intelligence: 8 }, failEffects: { charisma: -10, strength: -5 }, flags: ['major_negotiate'], failFlags: ['major_negotiate_fail'] },
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  },
  {
    id: 'tb_mc_60', category: 'major_choice', minAge: 60, maxAge: 60, probability: 0.88,
    templates: [
      '六十岁，你成为了执剑人候选人。{npc}将引力波发射器的控制器放在你面前："按下按钮，两个世界毁灭；放下按钮，人类被三体奴役；或者，寻找第三条路。这是最后的抉择。"',
    ],
    choices: [
      { text: '按下按钮', successRate: 0.8, successText: '你按下了按钮。引力波以光速向宇宙广播了两个世界的坐标。你完成了威慑，也注定了两个文明的末日。你是人类最冷酷的守护者。', failText: '你试图按下按钮，但系统在最后关头发生了故障。三体舰队已经出发，而威慑失败了。', effects: { strength: 15, intelligence: 5 }, failEffects: { strength: -5, health: -20 }, flags: ['major_press'], failFlags: ['major_press_fail'] },
      { text: '放下按钮', successRate: 1, successText: '你放下了按钮。你选择了爱，选择了信任，选择了不切实际的希望。后人会指责你软弱，但在那一刻，你选择了做人而不是做神。', failText: '你放下按钮，但三体人并没有遵守承诺。人类的命运比你想象的更加残酷。', effects: { charisma: 10, health: 5 }, failEffects: { charisma: -5, health: -10 }, flags: ['major_release'], failFlags: ['major_release_fail'] },
      { text: '寻找第三条路', successRate: 0.25, successText: '你拒绝了两难的选择。你利用毕生所学，找到了一个绕过黑暗森林法则的方法。虽然代价巨大，但两个文明都获得了存续的可能。你是真正的天才。', failText: '第三条路只是一个美好的幻想。你的方案在实验阶段就失败了，而你已经浪费了最后的威慑时机。', effects: { intelligence: 15, luck: 10 }, failEffects: { intelligence: -10, luck: -10 }, flags: ['major_third'], failFlags: ['major_third_fail'] },
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  },

  // ═══════════════════════════════════════════════════════════════
  // 废材逆袭 (8)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tb_tr_01', category: 'trash_exclusive', minAge: 0, maxAge: 6, probability: 0.92,
    templates: [
      '你的基因检测报告显示：智力发展迟缓，体能低于平均水平，无特殊才能。{location}的医生说："这孩子...可能连普通工作都难以胜任。"',
      '作为被判定为"平庸"的人，你在{location}的孤儿院长大。其他孩子被领养时，你总是被剩下的那个。',
    ],
    effects: { special: -5, intelligence: -3, strength: -2 },
    flags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'tb_tr_02', category: 'trash_exclusive', minAge: 5, maxAge: 12, probability: 0.88,
    templates: [
      '你不甘心。在{location}的垃圾堆里，你翻找着被丢弃的旧书，自学基础数学和物理。{npc}嘲笑你："废物就该认命。"',
      '你在{location}的废弃图书馆里发现了一台老式电脑，竟然还能运行。它成为了你唯一的老师。',
    ],
    effects: { intelligence: 3, strength: 2, luck: 2 },
    flags: ['trash_childhood_1'],
    requiredFlags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'tb_tr_03', category: 'trash_exclusive', minAge: 12, maxAge: 18, probability: 0.85,
    templates: [
      '你按照书本的方法，在{location}搭建了一个简易的物理实验室。第一次实验就差点引发火灾，但你从中学到了比课本更多的东西。',
      '别的天才一天能理解的公式，你需要一个月。但你在{location}日复一日地推演，从未间断。{npc}偶然看到你的笔记，震惊地说："这...这是独创的解题思路？"',
    ],
    effects: { intelligence: 5, special: 3, health: 2 },
    flags: ['trash_growth_0'],
    requiredFlags: ['trash_childhood_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'tb_tr_04', category: 'trash_exclusive', minAge: 16, maxAge: 24, probability: 0.8,
    templates: [
      '你在{location}救了一位被ETO袭击的老科学家。他感激之下，将自己珍藏的手稿送给了你——那是关于智子屏蔽的早期猜想。',
      '{npc}被你的毅力打动，决定给你一次机会。他说："我这一生见过无数天才，但像你这样的傻子，还是第一个。"',
    ],
    effects: { intelligence: 6, special: 4, charisma: 2 },
    flags: ['trash_growth_1'],
    requiredFlags: ['trash_growth_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'tb_tr_05', category: 'trash_exclusive', minAge: 20, maxAge: 30, probability: 0.78,
    templates: [
      '经过多年的苦读，你在{location}提出了一个大胆假设：智子虽然锁死了高能物理，但宏观层面的工程技术仍有巨大的创新空间。',
      '你在{location}的废弃工厂里验证了自己的理论。虽然设备简陋，但实验结果证明你是对的。',
    ],
    effects: { special: 6, intelligence: 4, luck: 3 },
    flags: ['trash_growth_2'],
    requiredFlags: ['trash_growth_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'tb_tr_06', category: 'trash_exclusive', minAge: 25, maxAge: 35, probability: 0.75,
    templates: [
      'PDC举办科技创新大赛，你以"民间研究者"的身份报名。所有人都嘲笑你："一个基因平庸的废物，也配搞科研？"',
      '大赛上，你的宏工程技术展示震惊了评委。一个曾经被判定为"无才能"的人，竟然解决了困扰学界多年的工程难题。全场寂静。',
    ],
    effects: { intelligence: 8, charisma: 5, special: 4 },
    flags: ['trash_adult_0'],
    requiredFlags: ['trash_growth_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'tb_tr_07', category: 'trash_exclusive', minAge: 30, maxAge: 45, probability: 0.72,
    templates: [
      '你的理论在{location}引发了讨论。{npc}说你是"第一个以平庸之姿突破智子封锁的人"。你开始被邀请参与真正的科研项目。',
      '你在{location}建立了一个小型实验室，专门招收被判定为"无才能"的年轻人。你说："天赋决定起点，但坚持决定终点。"',
    ],
    effects: { charisma: 6, intelligence: 5, special: 3 },
    flags: ['trash_adult_1'],
    requiredFlags: ['trash_adult_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'tb_tr_08', category: 'trash_exclusive', minAge: 40, maxAge: 60, probability: 0.65,
    templates: [
      '昔日嘲笑你的基因检测员在{location}与你重逢。他依然拿着当年的报告，但手在颤抖。你平静地说："这份平庸的判定，是我最好的起点。"',
      '你成为了危机纪元最著名的自学成才者。在{location}的纪念碑上，你的名字与那些天才并列——虽然你花了更长的时间，但你从未放弃。',
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
    id: 'tb_realm_1', category: 'cultivation', minAge: 15, maxAge: 30, probability: 0.9,
    templates: [
      '你在{location}的学术生涯中迎来了第一个重要节点。{npc}告诉你："学者之路是理解世界的第一步。你需要理性≥15、科技≥10才能突破。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 1, successText: '你孤注一掷，将全部精力投入研究。当第一篇论文被顶级期刊接受时，你正式踏入了学者之列！', failText: '你全力冲击学术门槛，但一篇关键论文被质疑数据造假。虽然最终证明清白，但时机已逝。', effects: { realm: 1, intelligence: 5, maxAge: 80 }, failEffects: { health: -20, intelligence: -5 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail_1'] },
      { text: '稳扎稳打', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓积累。虽然耗时更长，但你最终平安突破到了学者。', failText: '你的稳扎稳打被一场ETO袭击打断，实验室被毁。突破失败。', effects: { realm: 1, intelligence: 3, maxAge: 56 }, failEffects: { health: -15, special: -5 }, flags: ['realm_breakthrough_1', 'realm_breakthrough_1_steady'], failFlags: ['realm_fail_1_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实。', failText: '', effects: { intelligence: 3, special: 2 }, flags: ['realm_delay_1'], failFlags: [] },
    ],
    flags: ['realm_attempt_1'],
    chainPriority: 5,
  },
  {
    id: 'tb_realm_1_stable', category: 'cultivation', minAge: 17, maxAge: 35, probability: 0.7,
    templates: [
      '你突破到学者的消息在{location}传开。年轻的学子们开始以你为榜样。',
      '{npc}看着你，眼中满是欣慰："从平民到学者，你走了15年。这速度，在危机纪元已是难得。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_1'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 2,
  },
  {
    id: 'tb_realm_1_retry', category: 'cultivation', minAge: 20, maxAge: 40, probability: 0.75,
    templates: [
      '上一次突破失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了学者！', failText: '又一次失败。你开始怀疑，自己是否真的与学者无缘...', effects: { realm: 1, intelligence: 5, maxAge: 80 }, failEffects: { health: -30, intelligence: -10 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail2_1'] },
    ],
    flags: ['realm_retry_1'],
    requiredFlags: ['realm_fail_1'],
    chainPriority: 3,
  },
  {
    id: 'tb_realm_2', category: 'cultivation', minAge: 25, maxAge: 45, probability: 0.85,
    templates: [
      '你在{location}的工程实践中触摸到了工程师的门槛。{npc}告诉你："工程师是将理论化为现实的桥梁。突破需要理性≥30、科技≥25。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 1, successText: '你成功主持了一个重大工程项目！当恒星飞船的第一台引擎点火时，你正式成为了工程师！', failText: '项目发生了严重事故，虽然你死里逃生，但声誉和能力都受到了重创。', effects: { realm: 1, special: 5, maxAge: 120 }, failEffects: { health: -25, special: -8 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail_2'] },
      { text: '稳扎稳打', successRate: 1, successText: '你以稳健的作风完成了多个小型项目，最终被工程界认可为工程师。', failText: '你的项目因资金问题被中途取消。突破失败。', effects: { realm: 1, special: 3, maxAge: 84 }, failEffects: { charisma: -5, luck: -5 }, flags: ['realm_breakthrough_2', 'realm_breakthrough_2_steady'], failFlags: ['realm_fail_2_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。', failText: '', effects: { special: 3, strength: 2 }, flags: ['realm_delay_2'], failFlags: [] },
    ],
    flags: ['realm_attempt_2'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 5,
  },
  {
    id: 'tb_realm_2_stable', category: 'cultivation', minAge: 27, maxAge: 50, probability: 0.68,
    templates: [
      '你突破到工程师的消息传遍了{location}。各大工程团队争相邀请你加入。',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_2'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 2,
  },
  {
    id: 'tb_realm_2_retry', category: 'cultivation', minAge: 30, maxAge: 55, probability: 0.72,
    templates: [
      '上一次突破失败后，你在{location}重新积累。{npc}鼓励你再次尝试。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '你一举突破到了工程师！', failText: '又一次失败...', effects: { realm: 1, special: 5, maxAge: 120 }, failEffects: { health: -35, special: -12 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail2_2'] },
    ],
    flags: ['realm_retry_2'],
    requiredFlags: ['realm_fail_2'],
    chainPriority: 3,
  },
  {
    id: 'tb_realm_3', category: 'cultivation', minAge: 35, maxAge: 60, probability: 0.82,
    templates: [
      '你在{location}的科研成果终于结出了硕果。{npc}告诉你："科学家是接近真理的人。突破需要理性≥45、科技≥40。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 1, successText: '你的论文在《自然》发表，理论被多个实验验证！你正式成为了科学家！', failText: '你的理论被一个实验证伪。学术声誉受损，突破失败。', effects: { realm: 1, intelligence: 5, maxAge: 200 }, failEffects: { intelligence: -10, charisma: -5 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail_3'] },
      { text: '稳扎稳打', successRate: 1, successText: '你以扎实的研究逐步积累声望，最终成为公认的科学家。', failText: '你的稳健被ETO的袭击打断。突破失败。', effects: { realm: 1, intelligence: 3, maxAge: 140 }, failEffects: { health: -15, luck: -5 }, flags: ['realm_breakthrough_3', 'realm_breakthrough_3_steady'], failFlags: ['realm_fail_3_steady'] },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 3, special: 2 }, flags: ['realm_delay_3'], failFlags: [] },
    ],
    flags: ['realm_attempt_3'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 5,
  },
  {
    id: 'tb_realm_3_stable', category: 'cultivation', minAge: 37, maxAge: 65, probability: 0.65,
    templates: [
      '你突破到科学家的消息在学术界引起轰动。{location}的科研机构纷纷向你抛出橄榄枝。',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_3'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 2,
  },
  {
    id: 'tb_realm_3_retry', category: 'cultivation', minAge: 40, maxAge: 70, probability: 0.7,
    templates: [
      '上一次突破失败后，你重新积累。{npc}鼓励你再次尝试。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '你一举突破到了科学家！', failText: '又一次失败...', effects: { realm: 1, intelligence: 5, maxAge: 200 }, failEffects: { health: -40, intelligence: -15 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail2_3'] },
    ],
    flags: ['realm_retry_3'],
    requiredFlags: ['realm_fail_3'],
    chainPriority: 3,
  },
  {
    id: 'tb_realm_4', category: 'cultivation', minAge: 45, maxAge: 80, probability: 0.78,
    templates: [
      '你在{location}被联合国秘密召见。{npc}告诉你："面壁者需要独自承担全人类的命运。突破需要影响力≥50、理性≥60。你愿意吗？"',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.8, successText: '你被正式任命为面壁者！在联合国大厅，你独自面对着全人类和智子的监视。', failText: '面壁计划委员会认为你缺乏足够的战略欺骗能力。突破失败。', effects: { realm: 1, strength: 8, charisma: 5, maxAge: 300 }, failEffects: { charisma: -8, strength: -5 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail_4'] },
      { text: '稳扎稳打', successRate: 0.6, successText: '你以多年的布局和谋划，最终被认可为面壁者。', failText: '你的计划被破壁人提前识破。突破失败。', effects: { realm: 1, charisma: 5, maxAge: 210 }, failEffects: { charisma: -10, health: -10 }, flags: ['realm_breakthrough_4', 'realm_breakthrough_4_steady'], failFlags: ['realm_fail_4_steady'] },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { strength: 3, intelligence: 3 }, flags: ['realm_delay_4'], failFlags: [] },
    ],
    flags: ['realm_attempt_4'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 5,
  },
  {
    id: 'tb_realm_4_stable', category: 'cultivation', minAge: 47, maxAge: 85, probability: 0.62,
    templates: [
      '你成为面壁者的消息震惊了{location}。人类最后的希望，此刻系于你一人之手。',
    ],
    effects: { charisma: 5, strength: 3 },
    flags: ['realm_stable_4'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 2,
  },
  {
    id: 'tb_realm_5', category: 'cultivation', minAge: 55, maxAge: 100, probability: 0.75,
    templates: [
      '你在{location}触摸到了执剑人的门槛。{npc}告诉你："执剑人手握两个世界的命运。一念之间，两个文明存亡。突破需要意志≥70、理性≥75。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.7, successText: '你接过了引力波发射器的控制权！从此，三体世界和人类世界的命运，悬于你一人之手。', failText: '你在执剑人选拔中败给了另一位候选人。那种冷酷的决断力，是你所不具备的。', effects: { realm: 1, strength: 10, maxAge: 400 }, failEffects: { strength: -10, health: -20 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail_5'] },
      { text: '稳扎稳打', successRate: 0.5, successText: '你以惊人的毅力和冷静的头脑，最终成为了第二任执剑人。', failText: '你的稳健在执剑人的位置上变成了优柔寡断。威慑失败了。', effects: { realm: 1, strength: 5, maxAge: 280 }, failEffects: { strength: -8, charisma: -8 }, flags: ['realm_breakthrough_5', 'realm_breakthrough_5_steady'], failFlags: ['realm_fail_5_steady'] },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { strength: 3, intelligence: 3 }, flags: ['realm_delay_5'], failFlags: [] },
    ],
    flags: ['realm_attempt_5'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 5,
  },
  {
    id: 'tb_realm_5_stable', category: 'cultivation', minAge: 57, maxAge: 105, probability: 0.6,
    templates: [
      '你成为执剑人的那一刻，{location}的所有人都在注视着你。你是人类最孤独的守护者。',
    ],
    effects: { strength: 5, charisma: 3 },
    flags: ['realm_stable_5'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 2,
  },
  {
    id: 'tb_realm_6', category: 'cultivation', minAge: 80, maxAge: 150, probability: 0.72,
    templates: [
      '你在{location}触摸到了文明守护者的门槛。{npc}告诉你："文明守护者需超越个人生死，为人类的延续做出终极抉择。突破需要科技≥80、意志≥90。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.6, successText: '你成为了文明守护者！在黑暗森林的宇宙中，你为人类文明的延续点燃了最后的火种。', failText: '你在最后的考验中犹豫了。文明守护者需要的不是善良，而是决断。突破失败。', effects: { realm: 1, strength: 8, special: 5, maxAge: 800 }, failEffects: { strength: -10, health: -25 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail_6'] },
      { text: '稳扎稳打', successRate: 0.4, successText: '你以数百年的积累，最终成为了文明守护者。', failText: '稳健让你错过了最关键的窗口期。突破失败。', effects: { realm: 1, special: 5, maxAge: 560 }, failEffects: { special: -8, luck: -5 }, flags: ['realm_breakthrough_6', 'realm_breakthrough_6_steady'], failFlags: ['realm_fail_6_steady'] },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { strength: 3, special: 3 }, flags: ['realm_delay_6'], failFlags: [] },
    ],
    flags: ['realm_attempt_6'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 5,
  },
  {
    id: 'tb_realm_6_stable', category: 'cultivation', minAge: 82, maxAge: 155, probability: 0.58,
    templates: [
      '你成为文明守护者的消息传遍了残存的人类世界。{location}的幸存者将你视为最后的希望。',
    ],
    effects: { charisma: 5, strength: 5 },
    flags: ['realm_stable_6'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 2,
  },
  {
    id: 'tb_realm_7', category: 'cultivation', minAge: 150, maxAge: 300, probability: 0.65,
    templates: [
      '你在{location}触摸到了宇宙级存在的门槛。{npc}告诉你："成为宇宙级存在，意味着超越人类文明的边界，在宇宙的尺度上思考。突破需要科技≥100、理性≥100。"',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.5, successText: '你升华了！你的意识与宇宙融为一体，你既是个人，也是文明，更是宇宙本身的一部分。', failText: '升华失败了。你的身体无法承受如此巨大的信息量。突破失败。', effects: { realm: 1, special: 10, intelligence: 10, maxAge: 9000 }, failEffects: { health: -50, special: -20 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail_7'] },
      { text: '稳扎稳打', successRate: 0.3, successText: '你以无尽的时间积累，最终成为了宇宙级存在。', failText: '稳健让你在关键时刻缺乏足够的能量。突破失败。', effects: { realm: 1, intelligence: 8, maxAge: 6300 }, failEffects: { intelligence: -10, health: -20 }, flags: ['realm_breakthrough_7', 'realm_breakthrough_7_steady'], failFlags: ['realm_fail_7_steady'] },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 5, special: 5 }, flags: ['realm_delay_7'], failFlags: [] },
    ],
    flags: ['realm_attempt_7'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 5,
  },
  {
    id: 'tb_realm_7_stable', category: 'cultivation', minAge: 152, maxAge: 310, probability: 0.55,
    templates: [
      '你成为宇宙级存在的那一刻，整个星系都感知到了你的觉醒。你是人类文明在宇宙中的最高形态。',
    ],
    effects: { charisma: 10, strength: 10 },
    flags: ['realm_stable_7'],
    requiredFlags: ['realm_breakthrough_7'],
    chainPriority: 2,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属事件 (40) — 10身份 × 4事件链
  // ═══════════════════════════════════════════════════════════════

  // --- physicist (物理学家) ---
  {
    id: 'tb_ie_physicist_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你从小就对星空着迷。六岁那年，你用{location}的废旧零件组装了一台简易望远镜，第一次看清了土星的环。',
      '你的父母带你去科技馆，你在{location}的粒子对撞模型前站了整整三个小时，不肯离开。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_physicist_childhood_0'],
    identityExclusive: 'physicist',
  },
  {
    id: 'tb_ie_physicist_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}独立完成了第一个物理实验。虽然结果与课本一致，但你从中发现了课本上没有提到的一个细节。',
      '你在{location}遇到了一位退休物理学家。他看着你演算的草稿，眼中闪过光芒："这孩子...有当年杨冬的影子。"',
    ],
    effects: { intelligence: 6, special: 3 },
    flags: ['chain_physicist_growth_0'],
    requiredFlags: ['chain_physicist_childhood_0'],
    identityExclusive: 'physicist',
    chainPriority: 1,
  },
  {
    id: 'tb_ie_physicist_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你在{location}的实验室工作。智子封锁让高能物理陷入停滞，但你转向了弦论的数学结构研究——那是智子还无法干涉的领域。',
      '你发表的一篇论文在{location}引发了激烈争论。你提出了一个大胆假设：物理学并非被"锁死"，只是在等待新的观测手段。',
    ],
    effects: { intelligence: 8, special: 5 },
    flags: ['chain_physicist_adult_0'],
    requiredFlags: ['chain_physicist_growth_0'],
    identityExclusive: 'physicist',
    chainPriority: 2,
  },
  {
    id: 'tb_ie_physicist_04', category: 'identity_exclusive', minAge: 45, maxAge: 65, probability: 0.75,
    templates: [
      '你在{location}终于取得了突破性进展。你证明了在宏观尺度上，可以绕过智子对微观粒子的干扰，间接验证高能物理理论。',
      '{npc}握着你的手说："你做到了。即使在智子的阴影下，人类对真理的追求也从未停止。"',
    ],
    effects: { intelligence: 10, special: 8, charisma: 5 },
    flags: ['chain_physicist_special_0'],
    requiredFlags: ['chain_physicist_adult_0'],
    identityExclusive: 'physicist',
    chainPriority: 3,
  },

  // --- sociologist (社会学家) ---
  {
    id: 'tb_ie_sociologist_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你从小就喜欢观察人群。在{location}的公园里，你坐在长椅上，一看就是一整天，记录着陌生人的互动模式。',
      '你的第一个"研究"对象是{location}的邻里关系。你画了一张复杂的关系图，连大人们都惊叹你的洞察力。',
    ],
    effects: { intelligence: 4, charisma: 3 },
    flags: ['chain_sociologist_childhood_0'],
    identityExclusive: 'sociologist',
  },
  {
    id: 'tb_ie_sociologist_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你在{location}的图书馆读到了罗辑的宇宙社会学公理。你彻夜未眠，在笔记本上写满了推论。',
      '你在{location}组织了一场学生辩论，主题是"黑暗森林法则是否适用于人类内部"。你的论点让在场的老师都为之侧目。',
    ],
    effects: { intelligence: 5, charisma: 4 },
    flags: ['chain_sociologist_growth_0'],
    requiredFlags: ['chain_sociologist_childhood_0'],
    identityExclusive: 'sociologist',
    chainPriority: 1,
  },
  {
    id: 'tb_ie_sociologist_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你在{location}发表了关于"危机纪元社会心理演变"的系列论文。你准确预测了后来大低谷的出现。',
      'PDC聘请你为顾问，分析人类社会在持久压力下的崩溃阈值。你在{location}的报告中写道："希望是比黄金更稀缺的资源。"',
    ],
    effects: { charisma: 6, intelligence: 5 },
    flags: ['chain_sociologist_adult_0'],
    requiredFlags: ['chain_sociologist_growth_0'],
    identityExclusive: 'sociologist',
    chainPriority: 2,
  },
  {
    id: 'tb_ie_sociologist_04', category: 'identity_exclusive', minAge: 45, maxAge: 65, probability: 0.75,
    templates: [
      '你在{location}完成了一生最重要的著作《黑暗森林之后》。你提出了超越黑暗森林的新模型，为人类文明指明了可能的出路。',
      '{npc}读完后沉默良久："如果罗辑是执剑人，你就是指路者。"',
    ],
    effects: { intelligence: 10, charisma: 8, strength: 5 },
    flags: ['chain_sociologist_special_0'],
    requiredFlags: ['chain_sociologist_adult_0'],
    identityExclusive: 'sociologist',
    chainPriority: 3,
  },

  // --- engineer_3b (工程师) ---
  {
    id: 'tb_ie_engineer_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你从小就喜欢拆东西。在{location}的家里，你拆过的收音机、闹钟、电视机不计其数，虽然装回去的成功率不到一半。',
      '你用{location}废品站的零件组装了一辆能动的玩具车。当它在街道上跑起来时，你第一次体会到了创造的快乐。',
    ],
    effects: { special: 5, strength: 2 },
    flags: ['chain_engineer_childhood_0'],
    identityExclusive: 'engineer_3b',
  },
  {
    id: 'tb_ie_engineer_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你独立设计了一个小型核聚变装置模型。虽然无法真正运行，但{location}的老师们都被你的设计思路折服。',
      '你在{location}的工科竞赛中，用废弃材料建造了一座能抵御模拟陨石冲击的微型穹顶。评委们称你为"未来的建造师"。',
    ],
    effects: { special: 6, intelligence: 3 },
    flags: ['chain_engineer_growth_0'],
    requiredFlags: ['chain_engineer_childhood_0'],
    identityExclusive: 'engineer_3b',
    chainPriority: 1,
  },
  {
    id: 'tb_ie_engineer_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你参与了恒星飞船引擎的设计工作。在{location}的试验场，你亲眼看着自己设计的引擎第一次成功点火。',
      '你负责{location}太空城的结构工程。面对智子干扰下的材料失效问题，你发明了一种全新的复合结构。',
    ],
    effects: { special: 8, strength: 4 },
    flags: ['chain_engineer_adult_0'],
    requiredFlags: ['chain_engineer_growth_0'],
    identityExclusive: 'engineer_3b',
    chainPriority: 2,
  },
  {
    id: 'tb_ie_engineer_04', category: 'identity_exclusive', minAge: 45, maxAge: 65, probability: 0.75,
    templates: [
      '你在{location}完成了人类历史上第一艘真正意义上的恒星飞船。当它离开太阳系的那一刻，你在控制室里泪流满面。',
      '{npc}拍着你的肩膀说："你建造的不仅是一艘船，更是人类文明的方舟。"',
    ],
    effects: { special: 10, charisma: 6, intelligence: 5 },
    flags: ['chain_engineer_special_0'],
    requiredFlags: ['chain_engineer_adult_0'],
    identityExclusive: 'engineer_3b',
    chainPriority: 3,
  },

  // --- soldier_3b (军人) ---
  {
    id: 'tb_ie_soldier_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你出生在军人世家。在{location}的军区大院里，你从小听着军号声长大，玩具都是各种模型枪和飞船。',
      '六岁那年，你在{location}看到了太空军阅兵式。那些银白色的战舰飞过天空时，你暗暗发誓要成为其中一员。',
    ],
    effects: { strength: 5, special: 2 },
    flags: ['chain_soldier_childhood_0'],
    identityExclusive: 'soldier_3b',
  },
  {
    id: 'tb_ie_soldier_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.82,
    templates: [
      '十五岁那年，你进入了太空军少年预备学校。在{location}的训练场上，你第一次体验到零重力格斗的残酷。',
      '你在{location}的战术模拟赛中，以少胜多击败了一支由高年级组成的舰队。教官们称你为"天生的战术家"。',
    ],
    effects: { strength: 6, intelligence: 3 },
    flags: ['chain_soldier_growth_0'],
    requiredFlags: ['chain_soldier_childhood_0'],
    identityExclusive: 'soldier_3b',
    chainPriority: 1,
  },
  {
    id: 'tb_ie_soldier_03', category: 'identity_exclusive', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '成年后的你成为了太空军的一名中层指挥官。在{location}的演习中，你的舰队完成了被认为不可能的战术机动。',
      '末日战役中，你所在的舰队在{location}附近幸存下来。你亲眼看着战友的战舰被水滴摧毁，那种无力感至今折磨着你。',
    ],
    effects: { strength: 8, health: 5 },
    flags: ['chain_soldier_adult_0'],
    requiredFlags: ['chain_soldier_growth_0'],
    identityExclusive: 'soldier_3b',
    chainPriority: 2,
  },
  {
    id: 'tb_ie_soldier_04', category: 'identity_exclusive', minAge: 45, maxAge: 65, probability: 0.75,
    templates: [
      '你在{location}成为了太空军的高级将领。你指挥的舰队守护着人类最后的太空堡垒，是三体世界也不敢轻视的力量。',
      '{npc}对你说："你手中的每一艘战舰，都是千万人的希望。不要让他们失望。"',
    ],
    effects: { strength: 10, charisma: 6, special: 5 },
    flags: ['chain_soldier_special_0'],
    requiredFlags: ['chain_soldier_adult_0'],
    identityExclusive: 'soldier_3b',
    chainPriority: 3,
  },

  // --- wallfacer (面壁者) ---
  {
    id: 'tb_ie_wallfacer_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你从小就习惯隐藏自己的想法。在{location}的游戏中，你总能骗过所有玩伴，让他们猜不透你的真实意图。',
      '你在{location}的图书馆读到了一本关于古代战略家的书。你被那种"以天下为棋盘"的气魄深深吸引。',
    ],
    effects: { strength: 3, intelligence: 4 },
    flags: ['chain_wallfacer_childhood_0'],
    identityExclusive: 'wallfacer',
  },
  {
    id: 'tb_ie_wallfacer_02', category: 'identity_exclusive', minAge: 15, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}的学术会议上发表了一篇论文。表面上是关于天体物理，但细心的同行发现其中隐藏着一个惊人的战略构想。',
      '你在{location}与一位PDC高级官员对弈。你故意输了三局，然后在第四局以精妙布局反败为胜。他说："你适合做一个战略家。"',
    ],
    effects: { intelligence: 6, strength: 4 },
    flags: ['chain_wallfacer_growth_0'],
    requiredFlags: ['chain_wallfacer_childhood_0'],
    identityExclusive: 'wallfacer',
    chainPriority: 1,
  },
  {
    id: 'tb_ie_wallfacer_03', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.78,
    templates: [
      '你被任命为面壁者后，在{location}开始了长达数年的孤独谋划。你表面上的研究方向是一个精心设计的幌子。',
      '破壁人开始追踪你的真实意图。在{location}的一次"偶然"泄露中，你故意让对方获取了一份假情报。',
    ],
    effects: { strength: 8, intelligence: 6 },
    flags: ['chain_wallfacer_adult_0'],
    requiredFlags: ['chain_wallfacer_growth_0'],
    identityExclusive: 'wallfacer',
    chainPriority: 2,
  },
  {
    id: 'tb_ie_wallfacer_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}揭晓了真正的面壁计划。当真相大白的那一刻，全世界都为之震撼——你的骗局骗过了三体人，也骗过了所有人类。',
      '{npc}看着你说："你是历史上最伟大的骗子，也是最伟大的守护者。"',
    ],
    effects: { strength: 10, charisma: 8, intelligence: 8 },
    flags: ['chain_wallfacer_special_0'],
    requiredFlags: ['chain_wallfacer_adult_0'],
    identityExclusive: 'wallfacer',
    chainPriority: 3,
  },

  // --- wallbreaker (破壁人) ---
  {
    id: 'tb_ie_wallbreaker_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你从小就擅长看穿谎言。在{location}的家庭聚会上，你总能准确判断谁在说谎，这让大人们既惊讶又不安。',
      '你在{location}的棋艺俱乐部里从未输过——不是因为你棋力最强，而是因为你总能看穿对手的真实意图。',
    ],
    effects: { intelligence: 5, strength: 2 },
    flags: ['chain_wallbreaker_childhood_0'],
    identityExclusive: 'wallbreaker',
  },
  {
    id: 'tb_ie_wallbreaker_02', category: 'identity_exclusive', minAge: 15, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}的学术竞赛中，仅用了十分钟就找到了对手论文中的致命漏洞。你的分析能力让评委们惊叹。',
      '你在{location}遇到了一位神秘人物。他告诉你，有一种更高层次的"推理"——不是找出错误，而是看穿精心设计的骗局。',
    ],
    effects: { intelligence: 7, special: 3 },
    flags: ['chain_wallbreaker_growth_0'],
    requiredFlags: ['chain_wallbreaker_childhood_0'],
    identityExclusive: 'wallbreaker',
    chainPriority: 1,
  },
  {
    id: 'tb_ie_wallbreaker_03', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.78,
    templates: [
      '你接受了破壁人的使命。在{location}，你开始分析第一位面壁者的公开行为，试图找出他隐藏的真实战略。',
      '经过数年的追踪，你在{location}发现了关键线索——那位面壁者看似荒谬的行为背后，隐藏着一个惊天的计划。',
    ],
    effects: { intelligence: 8, strength: 4 },
    flags: ['chain_wallbreaker_adult_0'],
    requiredFlags: ['chain_wallbreaker_growth_0'],
    identityExclusive: 'wallbreaker',
    chainPriority: 2,
  },
  {
    id: 'tb_ie_wallbreaker_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}公开揭露了面壁者的真实计划。当真相被说出的那一刻，那位面壁者面如死灰，而全世界为之震动。',
      '{npc}对你说："你的智慧是可怕的武器。但请记住，看穿一切的人，往往也是最孤独的。"',
    ],
    effects: { intelligence: 12, charisma: 5, strength: 5 },
    flags: ['chain_wallbreaker_special_0'],
    requiredFlags: ['chain_wallbreaker_adult_0'],
    identityExclusive: 'wallbreaker',
    chainPriority: 3,
  },

  // --- observer (观察员) ---
  {
    id: 'tb_ie_observer_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你从小就不太合群。在{location}的操场上，别的孩子在玩耍，而你只是坐在一旁，冷静地观察着一切。',
      '你在{location}的日记本里记录着周围人的一举一动。你说这不是偷窥，而是"数据采集"。',
    ],
    effects: { intelligence: 4, luck: 3 },
    flags: ['chain_observer_childhood_0'],
    identityExclusive: 'observer',
  },
  {
    id: 'tb_ie_observer_02', category: 'identity_exclusive', minAge: 15, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你加入了一个神秘的观察组织。在{location}，你开始接受专业的情报分析和文明观察训练。',
      '你在{location}完成了一份关于"危机纪元人类社会结构演变"的报告。你的客观冷静让上级印象深刻。',
    ],
    effects: { intelligence: 5, special: 4 },
    flags: ['chain_observer_growth_0'],
    requiredFlags: ['chain_observer_childhood_0'],
    identityExclusive: 'observer',
    chainPriority: 1,
  },
  {
    id: 'tb_ie_observer_03', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.78,
    templates: [
      '成年后的你被派往{location}执行长期观察任务。你记录着人类与三体对抗的每一个细节，不作评判，只作记录。',
      '你在{location}目睹了ETO的覆灭。作为观察员，你没有介入，但你详细记录了整个过程，作为文明冲突的珍贵资料。',
    ],
    effects: { intelligence: 6, luck: 5 },
    flags: ['chain_observer_adult_0'],
    requiredFlags: ['chain_observer_growth_0'],
    identityExclusive: 'observer',
    chainPriority: 2,
  },
  {
    id: 'tb_ie_observer_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}完成了毕生最重要的著作《三体危机全记录》。这是一部没有任何立场、只有事实的巨著。',
      '{npc}对你说："你的记录将成为未来文明了解这段历史的唯一真实窗口。这是比任何武器都重要的贡献。"',
    ],
    effects: { intelligence: 10, charisma: 5, special: 8 },
    flags: ['chain_observer_special_0'],
    requiredFlags: ['chain_observer_adult_0'],
    identityExclusive: 'observer',
    chainPriority: 3,
  },

  // --- fugitive (逃亡者) ---
  {
    id: 'tb_ie_fugitive_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你从小就对地球没有太多归属感。在{location}的夏夜里，你仰望着星空，觉得自己不属于这里。',
      '你的父母在{location}的太空电梯工作，你从小就听着关于宇宙的故事长大。地球对你来说，只是一个起点。',
    ],
    effects: { luck: 5, strength: 2 },
    flags: ['chain_fugitive_childhood_0'],
    identityExclusive: 'fugitive',
  },
  {
    id: 'tb_ie_fugitive_02', category: 'identity_exclusive', minAge: 15, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你秘密报名了星舰人类的招募计划。在{location}的地下测试场，你展现出了惊人的太空生存能力。',
      '你在{location}遇到了章北海。他看着你说："逃亡不是怯懦，而是文明延续的必要选择。"这句话影响了你的一生。',
    ],
    effects: { luck: 6, strength: 3 },
    flags: ['chain_fugitive_growth_0'],
    requiredFlags: ['chain_fugitive_childhood_0'],
    identityExclusive: 'fugitive',
    chainPriority: 1,
  },
  {
    id: 'tb_ie_fugitive_03', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.78,
    templates: [
      '成年后的你终于登上了恒星飞船。当{location}的地球在视野中变成一个小蓝点时，你哭了，但你知道这是正确的选择。',
      '星舰上的生活在{location}的舱室中展开。你学会了在封闭空间中保持理智，在资源匮乏中生存。',
    ],
    effects: { strength: 6, luck: 5, health: 5 },
    flags: ['chain_fugitive_adult_0'],
    requiredFlags: ['chain_fugitive_growth_0'],
    identityExclusive: 'fugitive',
    chainPriority: 2,
  },
  {
    id: 'tb_ie_fugitive_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}的新星球上建立了第一个定居点。你成为了新世界的先驱者，人类的火种因你而在另一片星空下燃烧。',
      '{npc}对你说："你选择了离开，但你的离开让人类文明得以延续。这不是背叛，这是最大的忠诚。"',
    ],
    effects: { strength: 8, luck: 8, charisma: 5 },
    flags: ['chain_fugitive_special_0'],
    requiredFlags: ['chain_fugitive_adult_0'],
    identityExclusive: 'fugitive',
    chainPriority: 3,
  },

  // --- guardian (文明守护者) ---
  {
    id: 'tb_ie_guardian_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你从小就有一种强烈的责任感。在{location}的幼儿园，当有孩子被欺负时，总是你第一个站出来保护弱者。',
      '你在{location}的课本上读到"人类命运共同体"这个词时，第一次感受到了一种超越个人的使命感。',
    ],
    effects: { strength: 5, charisma: 3 },
    flags: ['chain_guardian_childhood_0'],
    identityExclusive: 'guardian',
  },
  {
    id: 'tb_ie_guardian_02', category: 'identity_exclusive', minAge: 15, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你加入了地球防卫军。在{location}的训练营里，你以最刻苦的态度对待每一次训练。',
      '你在{location}的战术课上提出了一个大胆想法：与其等待三体舰队到来，不如在太空中建立多层防线。教官们对你的前瞻性印象深刻。',
    ],
    effects: { strength: 6, special: 3 },
    flags: ['chain_guardian_growth_0'],
    requiredFlags: ['chain_guardian_childhood_0'],
    identityExclusive: 'guardian',
    chainPriority: 1,
  },
  {
    id: 'tb_ie_guardian_03', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.78,
    templates: [
      '成年后的你成为了掩体计划的核心执行者之一。在{location}的木星太空城，你监督着人类最后的避难所的建设。',
      '当逃亡主义盛行时，你在{location}公开发表演讲："我们可以离开，但地球是人类的发源地。只要还有一个人在，文明就没有终结。"',
    ],
    effects: { strength: 8, charisma: 5 },
    flags: ['chain_guardian_adult_0'],
    requiredFlags: ['chain_guardian_growth_0'],
    identityExclusive: 'guardian',
    chainPriority: 2,
  },
  {
    id: 'tb_ie_guardian_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}迎来了最后的时刻。当二向箔缓缓展开时，你选择留在地球上，用自己的生命为更多人争取逃亡的时间。',
      '{npc}在通讯器中最后对你说："你的牺牲会被记住。只要人类还存在，你的名字就不会被遗忘。"',
    ],
    effects: { strength: 12, charisma: 10, health: -30 },
    flags: ['chain_guardian_special_0'],
    requiredFlags: ['chain_guardian_adult_0'],
    identityExclusive: 'guardian',
    chainPriority: 3,
  },

  // --- civilian_3b (普通民众) ---
  {
    id: 'tb_ie_civilian_01', category: 'identity_exclusive', minAge: 3, maxAge: 10, probability: 0.85,
    templates: [
      '你是一个普通的孩子，出生在{location}的一个普通家庭。危机纪元对你的影响，主要是电视里那些令人不安的新闻。',
      '你在{location}的小学里，和 millions 其他孩子一样，过着看似平凡的生活。但在夜晚，你常常梦见星空和未知的恐惧。',
    ],
    effects: { luck: 3, health: 3 },
    flags: ['chain_civilian_childhood_0'],
    identityExclusive: 'civilian_3b',
  },
  {
    id: 'tb_ie_civilian_02', category: 'identity_exclusive', minAge: 15, maxAge: 25, probability: 0.82,
    templates: [
      '二十岁那年，你在{location}找到了一份工作。不是科学家，不是军人，只是维持社会运转的千万普通人之一。',
      '你在{location}经历了第一次ETO恐怖袭击。那一刻你意识到，即使是普通人，也无法在这个时代置身事外。',
    ],
    effects: { strength: 4, luck: 3 },
    flags: ['chain_civilian_growth_0'],
    requiredFlags: ['chain_civilian_childhood_0'],
    identityExclusive: 'civilian_3b',
    chainPriority: 1,
  },
  {
    id: 'tb_ie_civilian_03', category: 'identity_exclusive', minAge: 30, maxAge: 50, probability: 0.78,
    templates: [
      '成年后的你在{location}建立了自己的家庭。你最大的愿望不是拯救世界，只是让孩子们能平安长大。',
      '大低谷时期，你在{location}经历了物资短缺的痛苦。但你和邻居们互相扶持，证明了即使在最黑暗的时代，人性的光芒也不会熄灭。',
    ],
    effects: { charisma: 5, health: 5 },
    flags: ['chain_civilian_adult_0'],
    requiredFlags: ['chain_civilian_growth_0'],
    identityExclusive: 'civilian_3b',
    chainPriority: 2,
  },
  {
    id: 'tb_ie_civilian_04', category: 'identity_exclusive', minAge: 45, maxAge: 70, probability: 0.75,
    templates: [
      '你在{location}的晚年生活平静而满足。你没有改变世界的壮举，但你在自己的位置上尽了全力。',
      '{npc}对你说："文明不是由英雄独自支撑的。正是无数个像你这样的普通人，构成了人类最坚实的根基。"',
    ],
    effects: { charisma: 6, luck: 5, health: 5 },
    flags: ['chain_civilian_special_0'],
    requiredFlags: ['chain_civilian_adult_0'],
    identityExclusive: 'civilian_3b',
    chainPriority: 3,
  },
];
