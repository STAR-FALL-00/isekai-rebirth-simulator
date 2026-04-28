import type { EventTemplate } from './types';

// 龙族 — dragon_raja event templates
// Generated: 2026-04-27

export const dragonRajaTemplates: EventTemplate[] = [
  {
    id: 'dr_ch_01', category: 'childhood', minAge: 0, maxAge: 5, probability: 0.15,
    templates: [
      '你出生在{location}，出生那天窗外下起了金色的雨。{npc}说你是被龙神选中的人。',
      '襁褓中的你被放在{location}的祭坛上，龙文自动浮现在你的手臂上。',
      '你的童年在{location}度过，虽然看似平凡，但偶尔会在梦中听到龙语。',
    ],
    effects: { strength: 3, luck: 2 },
  },
  {
    id: 'dr_ch_02', category: 'childhood', minAge: 3, maxAge: 8, probability: 0.25,
    templates: [
      '你在{location}玩耍时，突然说出了几句古老的龙语，{npc}震惊地看着你。',
      '{npc}在{location}对你进行血统测试，仪器爆表——你的龙血浓度超乎想象。',
      '你在{location}救了一只受伤的黑猫，它其实是一只龙类的化身。',
    ],
    effects: { intelligence: 3, luck: 2 },
  },
  {
    id: 'dr_ch_03', category: 'childhood', minAge: 5, maxAge: 10, probability: 0.35,
    templates: [
      '血统觉醒那天，{location}的检测仪器发出刺耳警报。{npc}摇头：\'S级？不，这超出了S级的范畴...\'',
      '你在{location}被同龄人孤立，他们害怕你眼中偶尔闪过的金色竖瞳。',
      '{npc}安慰你：\'龙血不是诅咒，{legend}也曾像你一样迷茫。\'',
    ],
    effects: { strength: 2, charisma: -1 },
  },
  {
    id: 'dr_gr_01', category: 'growth', minAge: 10, maxAge: 18, probability: 0.18,
    templates: [
      '你在{location}意外觉醒了言灵能力，第一次释放就摧毁了半个训练场！',
      '{npc}在{location}传授你炼金术基础，你展现出惊人的天赋。',
      '你在{location}被一位神秘导师指点，言灵控制力大增。',
    ],
    effects: { intelligence: 5, strength: 3 },
  },
  {
    id: 'dr_gr_02', category: 'growth', minAge: 12, maxAge: 20, probability: 0.28,
    templates: [
      '你在{location}参加了一场混血种格斗大赛，虽然落败但觉醒了更强的龙血。',
      '{npc}带你前往{location}执行任务，你第一次面对真正的死侍。',
      '你在{location}结识了一群志同道合的混血种，互相切磋言灵。',
    ],
    effects: { strength: 3, charisma: 3 },
  },
  {
    id: 'dr_gr_03', category: 'growth', minAge: 14, maxAge: 22, probability: 0.38,
    templates: [
      '你在{location}的生死关头，龙化程度首次突破50%，力量暴增！',
      '{npc}赞许地看着你：\'从普通人到C级混血，你经历了地狱般的训练。\'',
      '你在{location}第一次完整释放言灵，{legend}的虚影在背后显现。',
    ],
    effects: { strength: 4, charisma: 2 },
  },
  {
    id: 'dr_ad_01', category: 'adult', minAge: 20, maxAge: 35, probability: 0.22,
    templates: [
      '你在{location}成为了执行部的正式专员，代号\'修罗\'。',
      '你参与了{legend}相关的大规模屠龙行动，在关键时刻力挽狂澜。',
      '{npc}将毕生所学传授于你，你在{location}苦修数年，血统再度提纯。',
    ],
    effects: { charisma: 5, strength: 4, luck: 3 },
  },
  {
    id: 'dr_ad_02', category: 'adult', minAge: 25, maxAge: 40, probability: 0.32,
    templates: [
      '你在{location}遭遇初代种，生死关头，体内的龙王之血突然觉醒！',
      '{npc}邀请你加入一场秘密行动，目标直指{legend}的龙巢。',
      '你在{location}的拍卖会上拍得一件炼金武器，战斗力大增。',
    ],
    effects: { special: 4, strength: 3 },
  },
  {
    id: 'dr_el_01', category: 'elder', minAge: 60, maxAge: 100, probability: 0.25,
    templates: [
      '你隐居在{location}，每日研究炼金术，但混血种世界仍有你的传说。',
      '你在{location}闭关压制龙化程度，{npc}亲自为你护法。',
      '你将毕生所学整理成册，存放在{location}的密党档案室。',
    ],
    effects: { intelligence: 5, charisma: 3 },
  },
  {
    id: 'dr_cb_01', category: 'combat', minAge: 15, maxAge: 30, probability: 0.15,
    templates: [
      '你在{location}遭遇一名死侍，对方乃是A级混血种堕落而成！',
      '一场恶战在{location}爆发，{npc}与你并肩作战对抗龙侍。',
      '{legend}的眷属找上了你，你们在{location}展开生死搏杀。',
    ],
    choices: [
      { text: '全力迎战，释放言灵', successRate: 0.6, successText: '你释放高阶言灵，一击重创死侍，赢得险胜！', failText: '言灵反噬，你虽然击败了敌人，但自己也身受重伤。', effects: { strength: 6, health: -10 }, failEffects: { health: -20, strength: 2 } },
      { text: '以炼金武器取胜', successRate: 0.75, successText: '你使用炼金武器精准斩杀死侍的核心，成功反杀！', failText: '炼金武器能量耗尽，你狼狈逃窜。', effects: { intelligence: 5, strength: 3 }, failEffects: { health: -15, luck: -3 } },
    ],
  },
  {
    id: 'dr_cb_02', category: 'combat', minAge: 20, maxAge: 40, probability: 0.25,
    templates: [
      '你在{location}遭遇龙类袭击，生死一线！',
      '执行部的任务将你带到了{location}，目标是一头复苏的次代种。',
      '{npc}在{location}被龙侍围攻，你毫不犹豫地冲了上去。',
    ],
    choices: [
      { text: '正面硬撼，龙化作战', successRate: 0.55, successText: '你龙化至70%，以强悍的肉身硬抗龙类攻击，最终将其击杀！', failText: '龙类的力量超乎想象，你龙化失控，险些沦为死侍。', effects: { strength: 5, special: 3, health: -8 }, failEffects: { health: -25, special: -5 } },
      { text: '言灵狙击，远程消耗', successRate: 0.8, successText: '你使用言灵远程消耗龙类体力，最终抓住机会一击必杀。', failText: '龙类的恢复能力超乎想象，你险些丧命。', effects: { strength: 3, intelligence: 3 }, failEffects: { health: -15 } },
    ],
  },
  {
    id: 'dr_cb_03', category: 'combat', minAge: 25, maxAge: 50, probability: 0.35,
    templates: [
      '你在{location}参加了一场混血种格斗大赛，对手皆是各学院精英。',
      '{legend}的龙巢试炼开启，你需在{location}击败龙侍守护者。',
      '你在{location}与宿敌凯撒再度相遇，旧怨新仇一起算！',
    ],
    choices: [
      { text: '释放最强言灵', successRate: 0.5, successText: '你的言灵威力惊人，一招定胜负！', failText: '对手早有防备，你的言灵被化解，反遭龙血侵蚀。', effects: { strength: 8, intelligence: 3 }, failEffects: { health: -20, special: -2 } },
      { text: '龙化肉搏，以力破巧', successRate: 0.7, successText: '你龙化至极限，以蛮力压制对手！', failText: '龙化过度，你差点失去理智。', effects: { strength: 6, special: 4 }, failEffects: { health: -15, special: -5 } },
    ],
  },
  {
    id: 'dr_rm_01', category: 'romance', minAge: 15, maxAge: 25, probability: 0.12,
    templates: [
      '你在{location}邂逅了诺诺，她红发的身影像一团燃烧的火焰。',
      '{npc}在{location}与你月下相会，龙血因她而沸腾。',
      '你救了陷入危险的诺诺，她决定以身相许，在{location}私定终身。',
    ],
    effects: { charisma: 4, luck: 3 },
    relationshipEffects: { nuonuo: 10 },
  },
  {
    id: 'dr_rm_02', category: 'romance', minAge: 18, maxAge: 30, probability: 0.18,
    templates: [
      '你在{location}遇到了绘梨衣，她像人偶一样美丽而脆弱。',
      '{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。',
      '你们经历了{legend}的考验，感情反而更加坚不可摧。',
    ],
    effects: { charisma: 5, luck: 4 },
    relationshipEffects: { hualilizi: 10 },
  },
  {
    id: 'dr_rm_03', category: 'romance', minAge: 20, maxAge: 35, probability: 0.22,
    templates: [
      '你在{location}与诺诺再度相遇，她的身份让你震惊不已。',
      '{npc}为了你，不惜与凯撒家族决裂。你发誓绝不辜负她。',
      '你们在{location}共同面对龙类，生死与共，感情升华。',
    ],
    choices: [
      { text: '接受她的感情', successRate: 0.8, successText: '你们正式结为伴侣，共同面对龙族的世界。', failText: '她的家族强行将她带走，你们被迫分离。', effects: { charisma: 6, luck: 4, health: 5 }, failEffects: { charisma: -3, health: -5 }, relationshipEffects: { nuonuo: 15 }, failRelationshipEffects: { nuonuo: -10 } },
      { text: '保持距离，专注屠龙', successRate: 1, successText: '你选择了屠龙之路，虽然心痛但无怨无悔。', failText: '', effects: { strength: 5, intelligence: 4 }, relationshipEffects: { nuonuo: -5 } },
    ],
  },
  {
    id: 'dr_cult_01', category: 'cultivation', minAge: 12, maxAge: 25, probability: 0.2,
    templates: [
      '你在{location}闭关苦修，龙血纯度终于突破到了新层次！',
      '{npc}传授你一套高深言灵，你在{location}日夜研习。',
      '你在{location}发现了一处龙族遗迹，血统共鸣让修炼事半功倍。',
    ],
    effects: { strength: 5, intelligence: 2 },
  },
  {
    id: 'dr_cult_02', category: 'cultivation', minAge: 20, maxAge: 40, probability: 0.3,
    templates: [
      '你在{location}吞噬了一滴{legend}的龙血精华，龙化程度大增！',
      '你成功炼制出一件高阶炼金武器，在{location}引起轰动。',
      '{npc}为你进行血统提纯仪式，你在{location}龙血沸腾。',
    ],
    effects: { special: 5, intelligence: 3 },
  },
  {
    id: 'dr_cult_03', category: 'cultivation', minAge: 30, maxAge: 55, probability: 0.4,
    templates: [
      '你在{location}获得了一卷龙文古籍，言灵掌控力暴涨！',
      '你将两种言灵融合，在{location}创造了全新的复合言灵。',
      '{npc}惊叹于你的血统纯度，称你为{legend}转世。',
    ],
    effects: { special: 6, strength: 4, intelligence: 3 },
  },
  {
    id: 'dr_ex_01', category: 'exploration', minAge: 15, maxAge: 30, probability: 0.18,
    templates: [
      '你深入{location}，发现了一处龙族墓穴的入口。',
      '你在{location}迷路，却意外闯入了一处隐藏的炼金实验室。',
      '{npc}告诉你{location}有炼金宝物，你前去寻找，果然不虚此行。',
    ],
    effects: { luck: 5, strength: 2 },
  },
  {
    id: 'dr_ex_02', category: 'exploration', minAge: 20, maxAge: 40, probability: 0.28,
    templates: [
      '你在{location}找到了{legend}留下的龙巢，虽然危险重重但你决定一探究竟。',
      '你探索了一处危险的{location}，九死一生后带回了珍贵的龙文石板。',
      '{npc}带你进入了一个秘密的{location}，你大开眼界。',
    ],
    effects: { luck: 4, intelligence: 3 },
  },
  {
    id: 'dr_ex_03', category: 'exploration', minAge: 25, maxAge: 50, probability: 0.38,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的龙王核心！',
      '你在{location}解开了一个困扰混血种千年的龙文谜题。',
      '你发现了{location}隐藏的龙族秘密，密党与龙类为此展开了明争暗斗。',
    ],
    effects: { luck: 6, intelligence: 4, special: 3 },
  },
  {
    id: 'dr_ws_01', category: 'world_story', minAge: 20, maxAge: 40, probability: 0.15,
    templates: [
      '龙王的复苏计划浮出水面，{location}成为了屠龙与护龙交锋的前线。',
      '{legend}的封印开始松动，整个混血种世界为之震动。',
      '{npc}带来消息：密党内部出现了龙王派叛徒！',
    ],
    effects: { charisma: 4, luck: 3 },
  },
  {
    id: 'dr_ws_02', category: 'world_story', minAge: 30, maxAge: 50, probability: 0.25,
    templates: [
      '你在{location}发现了龙类培育死侍的秘密工厂，决定一探究竟。',
      '一场席卷整个混血种世界的大战爆发了，{location}首当其冲。',
      '{npc}告诉你一个关于黑王尼德霍格的惊天秘密。',
    ],
    effects: { intelligence: 5, charisma: 3 },
  },
  {
    id: 'dr_ws_03', category: 'world_story', minAge: 40, maxAge: 60, probability: 0.35,
    templates: [
      '黑王遗迹在{location}现世，各方龙王后裔蜂拥而至。',
      '龙王{npc}亲自出手，目标直指你体内的龙王之血！',
      '你成为了阻止{legend}完全复苏的关键，命运的重担压在你肩上。',
    ],
    effects: { strength: 5, intelligence: 4, charisma: 4 },
  },
  {
    id: 'dr_hd_01', category: 'hidden', minAge: 30, maxAge: 60, probability: 0.08,
    templates: [
      '你在{location}发现了一块刻满龙文的石碑，上面记载着黑王陨落的真相。',
      '你解开了{legend}留下的谜题，获得了一份隐藏的龙王传承。',
    ],
    effects: { intelligence: 8, special: 5 },
    conditions: [{ stat: 'intelligence', min: 60 }],
  },
  {
    id: 'dr_hd_02', category: 'hidden', minAge: 50, maxAge: 80, probability: 0.12,
    templates: [
      '你超越了{legend}，看到了龙族历史之外的真相——原来一切都只是...',
      '你发现了这个世界的运行规则，{location}只是一场巨大棋局的一角。',
    ],
    effects: { intelligence: 10, special: 8 },
    conditions: [{ stat: 'intelligence', min: 100 }],
  },
  {
    id: 'dr_dt_01', category: 'death', minAge: 0, maxAge: 50, probability: 0.3,
    templates: [
      '你在{location}遭遇不测，生命力迅速流逝。',
      '你的身体到达了极限，{npc}无能为力。',
    ],
    effects: { health: -60 },
  },
  {
    id: 'dr_dt_02', category: 'death', minAge: 0, maxAge: 80, probability: 0.45,
    templates: [
      '你在{location}进行了最后的屠龙战斗，英勇牺牲。',
      '龙化失控，你在{location}化为龙类怪物，被同伴亲手终结。',
    ],
    effects: { health: -80 },
  },
  {
    id: 'dr_dt_03', category: 'death', minAge: 0, maxAge: 120, probability: 0.6,
    templates: [
      '你在{location}被龙王击杀，死不瞑目。',
      '寿元耗尽，你在{location}静静地闭上了眼睛。',
      '你的伤势恶化，{npc}尽力抢救但回天乏术。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'dr_ie_cassell_student_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在卡塞尔学院的{location}发现了一处隐藏的龙文图书馆。',
    ],
    effects: { intelligence: 4, luck: 3 },
    flags: ['chain_cassell_student_childhood_0'],
    identityExclusive: 'cassell_student',
  },
  {
    id: 'dr_ie_cassell_student_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '学院自由一日，你在{location}大显身手，击败了高年级学长。',
    ],
    effects: { strength: 4, charisma: 2 },
    requiredFlags: ['chain_cassell_student_childhood_0'],
    flags: ['chain_cassell_student_childhood_1'],
    identityExclusive: 'cassell_student',
    chainPriority: 1,
  },
  {
    id: 'dr_ie_cassell_student_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你代表卡塞尔参加学院杯，在{location}立下赫赫战功。',
    ],
    effects: { strength: 5, charisma: 3 },
    requiredFlags: ['chain_cassell_student_childhood_0'],
    flags: ['chain_cassell_student_adult_0'],
    identityExclusive: 'cassell_student',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_cassell_student_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '你发现了学院地下室的秘密实验，是上报校长还是暗中调查？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_cassell_student_path'], failFlags: ['branch_identity_cassell_student_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_cassell_student_new'], failFlags: ['branch_identity_cassell_student_new_fail'] },
    ],
    requiredFlags: ['chain_cassell_student_childhood_0'],
    flags: ['chain_cassell_student_adult_1'],
    identityExclusive: 'cassell_student',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_executioner_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}执行了一次高危任务，成功猎杀了一头次代种。',
    ],
    effects: { strength: 5, luck: 2 },
    flags: ['chain_executioner_childhood_0'],
    identityExclusive: 'executioner',
  },
  {
    id: 'dr_ie_executioner_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}邀请你加入精英小队，前往{location}调查龙类复苏事件。',
    ],
    effects: { strength: 3, charisma: 2 },
    requiredFlags: ['chain_executioner_childhood_0'],
    flags: ['chain_executioner_childhood_1'],
    identityExclusive: 'executioner',
    chainPriority: 1,
  },
  {
    id: 'dr_ie_executioner_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你在一次任务中救下了重要的线人，执行部声望大涨。',
    ],
    effects: { charisma: 5, luck: 3 },
    requiredFlags: ['chain_executioner_childhood_0'],
    flags: ['chain_executioner_adult_0'],
    identityExclusive: 'executioner',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_executioner_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '上级命令你处决一个疑似龙类混血的孩子，你如何抉择？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_executioner_path'], failFlags: ['branch_identity_executioner_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_executioner_new'], failFlags: ['branch_identity_executioner_new_fail'] },
    ],
    requiredFlags: ['chain_executioner_childhood_0'],
    flags: ['chain_executioner_adult_1'],
    identityExclusive: 'executioner',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_alchemist_dr_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}的实验室成功合成了一种新型炼金药剂。',
    ],
    effects: { intelligence: 5, special: 2 },
    flags: ['chain_alchemist_dr_childhood_0'],
    identityExclusive: 'alchemist_dr',
  },
  {
    id: 'dr_ie_alchemist_dr_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}邀请你参加炼金术研讨会，你在{location}展示了自己的研究成果。',
    ],
    effects: { intelligence: 4, charisma: 3 },
    requiredFlags: ['chain_alchemist_dr_childhood_0'],
    flags: ['chain_alchemist_dr_childhood_1'],
    identityExclusive: 'alchemist_dr',
    chainPriority: 1,
  },
  {
    id: 'dr_ie_alchemist_dr_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你破解了一件上古炼金武器的构造，在{location}引起轰动。',
    ],
    effects: { intelligence: 6, strength: 2 },
    requiredFlags: ['chain_alchemist_dr_childhood_0'],
    flags: ['chain_alchemist_dr_adult_0'],
    identityExclusive: 'alchemist_dr',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_alchemist_dr_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '有人委托你炼制控制龙血的禁药，报酬丰厚但违背伦理。',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_alchemist_dr_path'], failFlags: ['branch_identity_alchemist_dr_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_alchemist_dr_new'], failFlags: ['branch_identity_alchemist_dr_new_fail'] },
    ],
    requiredFlags: ['chain_alchemist_dr_childhood_0'],
    flags: ['chain_alchemist_dr_adult_1'],
    identityExclusive: 'alchemist_dr',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_dragon_blood_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}觉醒了更纯净的龙血，言灵威力暴涨。',
    ],
    effects: { strength: 5, special: 3 },
    flags: ['chain_dragon_blood_childhood_0'],
    identityExclusive: 'dragon_blood',
  },
  {
    id: 'dr_ie_dragon_blood_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '龙血觉醒让你在{location}展现出超乎常人的恢复能力。',
    ],
    effects: { strength: 4, health: 5 },
    requiredFlags: ['chain_dragon_blood_childhood_0'],
    flags: ['chain_dragon_blood_childhood_1'],
    identityExclusive: 'dragon_blood',
    chainPriority: 1,
  },
  {
    id: 'dr_ie_dragon_blood_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你以龙化形态作战，在{location}展现了令人生畏的力量。',
    ],
    effects: { strength: 6, special: 2 },
    requiredFlags: ['chain_dragon_blood_childhood_0'],
    flags: ['chain_dragon_blood_adult_0'],
    identityExclusive: 'dragon_blood',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_dragon_blood_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '龙血侵蚀加剧，你选择注射抑制剂还是拥抱龙化？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_dragon_blood_path'], failFlags: ['branch_identity_dragon_blood_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_dragon_blood_new'], failFlags: ['branch_identity_dragon_blood_new_fail'] },
    ],
    requiredFlags: ['chain_dragon_blood_childhood_0'],
    flags: ['chain_dragon_blood_adult_1'],
    identityExclusive: 'dragon_blood',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_ordinary_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}意外卷入了一场混血种战斗，却奇迹般地活了下来。',
    ],
    effects: { luck: 5, strength: 2 },
    flags: ['chain_ordinary_childhood_0'],
    identityExclusive: 'ordinary',
  },
  {
    id: 'dr_ie_ordinary_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}发现了你隐藏的混血种潜质，在{location}对你进行觉醒训练。',
    ],
    effects: { strength: 3, intelligence: 2 },
    requiredFlags: ['chain_ordinary_childhood_0'],
    flags: ['chain_ordinary_childhood_1'],
    identityExclusive: 'ordinary',
    chainPriority: 1,
  },
  {
    id: 'dr_ie_ordinary_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你以普通人的身份协助密党，在{location}立下了意想不到的功劳。',
    ],
    effects: { charisma: 4, luck: 3 },
    requiredFlags: ['chain_ordinary_childhood_0'],
    flags: ['chain_ordinary_adult_0'],
    identityExclusive: 'ordinary',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_ordinary_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '你知道了龙族的秘密，是加入密党还是请求记忆抹除？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_ordinary_path'], failFlags: ['branch_identity_ordinary_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_ordinary_new'], failFlags: ['branch_identity_ordinary_new_fail'] },
    ],
    requiredFlags: ['chain_ordinary_childhood_0'],
    flags: ['chain_ordinary_adult_1'],
    identityExclusive: 'ordinary',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_secret_party_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}发现了密党内部的龙类奸细，展开了一场暗战。',
    ],
    effects: { intelligence: 4, charisma: 2 },
    flags: ['chain_secret_party_childhood_0'],
    identityExclusive: 'secret_party',
  },
  {
    id: 'dr_ie_secret_party_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}带你进入密党核心档案室，你在{location}得知了惊人的历史真相。',
    ],
    effects: { intelligence: 5, luck: 2 },
    requiredFlags: ['chain_secret_party_childhood_0'],
    flags: ['chain_secret_party_childhood_1'],
    identityExclusive: 'secret_party',
    chainPriority: 1,
  },
  {
    id: 'dr_ie_secret_party_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你以密党身份斡旋各方势力，在{location}避免了一场内战。',
    ],
    effects: { charisma: 5, intelligence: 3 },
    requiredFlags: ['chain_secret_party_childhood_0'],
    flags: ['chain_secret_party_adult_0'],
    identityExclusive: 'secret_party',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_secret_party_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '密党要求你牺牲一个无辜者来阻止龙类计划，你如何抉择？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_secret_party_path'], failFlags: ['branch_identity_secret_party_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_secret_party_new'], failFlags: ['branch_identity_secret_party_new_fail'] },
    ],
    requiredFlags: ['chain_secret_party_childhood_0'],
    flags: ['chain_secret_party_adult_1'],
    identityExclusive: 'secret_party',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_watcher_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}发现了龙类复苏的早期征兆，及时上报避免了灾难。',
    ],
    effects: { intelligence: 4, luck: 3 },
    flags: ['chain_watcher_childhood_0'],
    identityExclusive: 'watcher',
  },
  {
    id: 'dr_ie_watcher_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}与你联手，在{location}监视一头疑似初代种的活动。',
    ],
    effects: { intelligence: 3, strength: 2 },
    requiredFlags: ['chain_watcher_childhood_0'],
    flags: ['chain_watcher_childhood_1'],
    identityExclusive: 'watcher',
    chainPriority: 1,
  },
  {
    id: 'dr_ie_watcher_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你独自守望了七年，终于在{location}等到了那头龙类的现身。',
    ],
    effects: { strength: 4, luck: 4 },
    requiredFlags: ['chain_watcher_childhood_0'],
    flags: ['chain_watcher_adult_0'],
    identityExclusive: 'watcher',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_watcher_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '你发现守望的目标其实是一个善良的龙类，是报告还是隐瞒？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_watcher_path'], failFlags: ['branch_identity_watcher_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_watcher_new'], failFlags: ['branch_identity_watcher_new_fail'] },
    ],
    requiredFlags: ['chain_watcher_childhood_0'],
    flags: ['chain_watcher_adult_1'],
    identityExclusive: 'watcher',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_dragon_slayer_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}独自猎杀了一头三代种，名声大噪。',
    ],
    effects: { strength: 5, charisma: 2 },
    flags: ['chain_dragon_slayer_childhood_0'],
    identityExclusive: 'dragon_slayer',
  },
  {
    id: 'dr_ie_dragon_slayer_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}传授你屠龙秘技，你在{location}日夜苦练。',
    ],
    effects: { strength: 4, intelligence: 2 },
    requiredFlags: ['chain_dragon_slayer_childhood_0'],
    flags: ['chain_dragon_slayer_childhood_1'],
    identityExclusive: 'dragon_slayer',
    chainPriority: 1,
  },
  {
    id: 'dr_ie_dragon_slayer_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你组建了屠龙小队，在{location}立下赫赫战功。',
    ],
    effects: { strength: 5, charisma: 3 },
    requiredFlags: ['chain_dragon_slayer_childhood_0'],
    flags: ['chain_dragon_slayer_adult_0'],
    identityExclusive: 'dragon_slayer',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_dragon_slayer_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '你发现要杀死的龙类其实是旧识，是执行使命还是放它一马？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_dragon_slayer_path'], failFlags: ['branch_identity_dragon_slayer_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_dragon_slayer_new'], failFlags: ['branch_identity_dragon_slayer_new_fail'] },
    ],
    requiredFlags: ['chain_dragon_slayer_childhood_0'],
    flags: ['chain_dragon_slayer_adult_1'],
    identityExclusive: 'dragon_slayer',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_merchant_dr_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}拍卖会上拍得了一件珍贵的炼金素材。',
    ],
    effects: { luck: 4, intelligence: 2 },
    flags: ['chain_merchant_dr_childhood_0'],
    identityExclusive: 'merchant_dr',
  },
  {
    id: 'dr_ie_merchant_dr_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}与你达成了一笔大生意，你在{location}建立了商业网络。',
    ],
    effects: { charisma: 4, luck: 3 },
    requiredFlags: ['chain_merchant_dr_childhood_0'],
    flags: ['chain_merchant_dr_childhood_1'],
    identityExclusive: 'merchant_dr',
    chainPriority: 1,
  },
  {
    id: 'dr_ie_merchant_dr_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你发现了炼金武器的商机，在{location}成为了知名供应商。',
    ],
    effects: { charisma: 5, intelligence: 3 },
    requiredFlags: ['chain_merchant_dr_childhood_0'],
    flags: ['chain_merchant_dr_adult_0'],
    identityExclusive: 'merchant_dr',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_merchant_dr_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '有人出天价请你走私龙血制品，高风险高回报，你做不做？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_merchant_dr_path'], failFlags: ['branch_identity_merchant_dr_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_merchant_dr_new'], failFlags: ['branch_identity_merchant_dr_new_fail'] },
    ],
    requiredFlags: ['chain_merchant_dr_childhood_0'],
    flags: ['chain_merchant_dr_adult_1'],
    identityExclusive: 'merchant_dr',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_archaeologist_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}发掘了一处龙族文明遗址，获得了珍贵的龙文资料。',
    ],
    effects: { intelligence: 5, luck: 3 },
    flags: ['chain_archaeologist_childhood_0'],
    identityExclusive: 'archaeologist',
  },
  {
    id: 'dr_ie_archaeologist_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}邀请你参与{location}的联合考古项目，发现了惊人的秘密。',
    ],
    effects: { intelligence: 4, charisma: 2 },
    requiredFlags: ['chain_archaeologist_childhood_0'],
    flags: ['chain_archaeologist_childhood_1'],
    identityExclusive: 'archaeologist',
    chainPriority: 1,
  },
  {
    id: 'dr_ie_archaeologist_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你破译了一段上古龙文，在{location}揭示了龙族历史的真相。',
    ],
    effects: { intelligence: 6, special: 2 },
    requiredFlags: ['chain_archaeologist_childhood_0'],
    flags: ['chain_archaeologist_adult_0'],
    identityExclusive: 'archaeologist',
    chainPriority: 2,
  },
  {
    id: 'dr_ie_archaeologist_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '你的发现可能颠覆整个混血种世界的认知，是公布还是封存？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_archaeologist_path'], failFlags: ['branch_identity_archaeologist_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_archaeologist_new'], failFlags: ['branch_identity_archaeologist_new_fail'] },
    ],
    requiredFlags: ['chain_archaeologist_childhood_0'],
    flags: ['chain_archaeologist_adult_1'],
    identityExclusive: 'archaeologist',
    chainPriority: 2,
  },
  {
    id: 'dr_te_01', category: 'trash_exclusive', minAge: 0, maxAge: 6, probability: 0.92,
    templates: [
      '血统检测那日，{location}的仪器毫无反应。{npc}摇头叹息：\'无龙血，与混血种世界无缘。\'',
      '作为普通人，你只能看着同龄人在{location}觉醒言灵。他们嘲笑你是\'废物\'。',
    ],
    effects: { strength: -3, intelligence: 3, luck: 2 },
    flags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'dr_te_02', category: 'trash_exclusive', minAge: 4, maxAge: 10, probability: 0.88,
    templates: [
      '你不甘心。每日凌晨，你在{location}的山顶对着朝阳吐纳，直到双臂麻木。{npc}路过时皱眉：\'没有龙血天赋，练这些有何用？\'',
      '你在{location}的古旧书摊淘到了半本残破的《言灵入门》。书页泛黄，你如获至宝。',
    ],
    effects: { strength: 2, intelligence: 2, luck: 2 },
    requiredFlags: ['trash_childhood_start'],
    flags: ['trash_childhood_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'dr_te_03', category: 'trash_exclusive', minAge: 12, maxAge: 18, probability: 0.85,
    templates: [
      '你按照古籍的方法，尝试以精神力模拟言灵。第一次尝试时，头痛欲裂。醒来时，你发现自己的感知敏锐了许多。',
      '别的天才一日可完成的训练，你需要一个月。但你在{location}日复一日，从未间断。',
    ],
    effects: { strength: 3, health: 3, intelligence: 2 },
    requiredFlags: ['trash_childhood_1'],
    flags: ['trash_growth_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'dr_te_04', category: 'trash_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '你在{location}救了一位被死侍重伤的执行部专员。他感激之下，传授了你一套独门格斗术。',
      '{npc}被你的毅力打动，决定收你为记名弟子。\'我这一生见过无数天才，但像你这样的傻子，还是第一个。\'你终于有了师父。',
    ],
    effects: { strength: 5, health: 4, charisma: 2 },
    requiredFlags: ['trash_growth_0'],
    flags: ['trash_growth_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'dr_te_05', category: 'trash_exclusive', minAge: 18, maxAge: 25, probability: 0.75,
    templates: [
      '经过多年的苦修，你在{location}遇到了瓶颈——依然没有龙血，但你的格斗术已臻化境。',
      '你在{location}的瀑布下闭关三月，终于将精神力与格斗术完美融合。出关时，你一击轰碎了测试石碑！',
    ],
    effects: { strength: 6, intelligence: 3, special: 3 },
    requiredFlags: ['trash_growth_1'],
    flags: ['trash_growth_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'dr_te_06', category: 'trash_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '卡塞尔学院举办自由一日，你这个\'无血统者\'报名参加。所有人都嘲笑你。',
      '比赛中，你对上了A级混血种。对方释放言灵，气势汹汹。你不躲不闪，一记重拳——对手倒地，全场寂静。',
    ],
    effects: { strength: 6, charisma: 5, special: 3 },
    requiredFlags: ['trash_growth_2'],
    flags: ['trash_adult_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'dr_te_07', category: 'trash_exclusive', minAge: 30, maxAge: 40, probability: 0.72,
    templates: [
      '你的\'废材逆袭\'震惊了混血种世界。{npc}说你是\'第一个以无血统击败A级的人\'。',
      '你在{location}建立了一座\'普通人训练营\'，专门招收被判定为\'废物\'的孩子。',
    ],
    effects: { charisma: 6, intelligence: 4, luck: 3 },
    requiredFlags: ['trash_adult_0'],
    flags: ['trash_adult_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'dr_te_08', category: 'trash_exclusive', minAge: 35, maxAge: 50, probability: 0.68,
    templates: [
      '昔日嘲笑你的同学在{location}与你重逢。他依然是B级，而你已能硬撼S级。他跪地痛哭。',
      '{legend}的龙巢开启，你说服众人让你这个\'无血统者\'也进去试试。他们同意了——但很快，他们就震惊了。',
    ],
    effects: { strength: 5, luck: 4, special: 4 },
    requiredFlags: ['trash_adult_1'],
    flags: ['trash_adult_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'dr_mc_15', category: 'major_choice', minAge: 15, maxAge: 15, probability: 0.98,
    templates: [
      '十五岁那年，你站在{location}的血统觉醒室里。昂热校长看着你：\'少年，你的血统很特殊。现在有三条路摆在你面前。\'',
    ],
    choices: [
      { text: '觉醒龙血，拥抱力量', successRate: 1.0, successText: '你选择了觉醒龙血。三年后，你已是一名B级混血种，言灵威力惊人。', failText: '', effects: { strength: 6, special: 5 }, flags: ['major_awaken'] },
      { text: '压制龙血，保持人性', successRate: 1.0, successText: '你选择了压制龙血。虽然没有强大的力量，但你保留了完整的人性。', failText: '', effects: { intelligence: 6, charisma: 5 }, flags: ['major_suppress'] },
      { text: '研究龙血，寻找平衡', successRate: 1.0, successText: '你选择了研究龙血。你成为了第一个掌握龙血而不被侵蚀的特例。', failText: '', effects: { intelligence: 5, special: 4, luck: 3 }, flags: ['major_study'] },
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  },
  {
    id: 'dr_mc_30', category: 'major_choice', minAge: 30, maxAge: 30, probability: 0.97,
    templates: [
      '三十岁那年，卡塞尔学院面临分裂危机。{npc}找到你：\'路明非，现在有三条路。加入执行部，成为精英；独自调查，寻找真相；或者逃离卡塞尔，过普通人的生活。\'',
    ],
    choices: [
      { text: '加入执行部，成为精英专员', successRate: 1.0, successText: '你加入了执行部，成为了王牌专员。十年后，你的名字令龙类闻风丧胆。', failText: '', effects: { strength: 10, charisma: 6, intelligence: 4 }, flags: ['major_execution'] },
      { text: '独自调查，寻找龙族真相', successRate: 1.0, successText: '你独自踏上了寻找真相的道路。五年后，你揭开了龙族历史的重大秘密。', failText: '', effects: { intelligence: 8, luck: 6 }, flags: ['major_investigate'] },
      { text: '逃离卡塞尔，过普通生活', successRate: 1.0, successText: '你逃离了卡塞尔，隐姓埋名过上了普通人的生活。虽然平凡，但你获得了内心的宁静。', failText: '', effects: { health: 10, luck: 8, charisma: 5 }, flags: ['major_escape'] },
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  },
  {
    id: 'dr_mc_45', category: 'major_choice', minAge: 45, maxAge: 45, probability: 0.96,
    templates: [
      '四十五岁那年，你面对一头复苏的龙王。{npc}告诉你：\'屠龙者有三条路。\'',
    ],
    choices: [
      { text: '屠龙，守护人类', successRate: 1.0, successText: '你举起了屠龙之剑，与龙王展开了惊天大战。最终，你以生命为代价将其斩杀！', failText: '', effects: { strength: 12, charisma: 8, health: -10 }, flags: ['major_dragon_slain'] },
      { text: '保护龙类，寻求共存', successRate: 1.0, successText: '你选择了保护龙类。你说服了密党，开启了人类与龙类共存的先河。', failText: '', effects: { charisma: 10, intelligence: 8 }, flags: ['major_protect'] },
      { text: '寻找平衡，中立调和', successRate: 1.0, successText: '你成为了人类与龙类之间的调停者。虽然两边都不讨好，但你避免了无数战争。', failText: '', effects: { intelligence: 10, luck: 6, charisma: 5 }, flags: ['major_balance'] },
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  },
  {
    id: 'dr_mc_60', category: 'major_choice', minAge: 60, maxAge: 60, probability: 0.95,
    templates: [
      '六十岁那年，黑王尼德霍格即将复苏，世界面临毁灭。{npc}跪在你面前：\'只有你能阻止他了。\'',
    ],
    choices: [
      { text: '牺牲自己，封印龙王', successRate: 1.0, successText: '你燃烧生命与龙血，以自身为祭品封印了黑王。世界得救，而你的名字被永远铭记。', failText: '', effects: { charisma: 15, strength: 10, health: -20 }, flags: ['major_sacrifice'] },
      { text: '与龙共存，缔结契约', successRate: 1.0, successText: '你与黑王缔结了古老的契约，人类与龙类迎来了和平共处的时代。', failText: '', effects: { charisma: 12, intelligence: 10, luck: 8 }, flags: ['major_coexist'] },
      { text: '成为新龙王，重塑秩序', successRate: 1.0, successText: '你吸收了黑王的力量，成为了新的龙王。你以龙王之力重塑了世界的秩序。', failText: '', effects: { strength: 15, special: 10, intelligence: 8 }, flags: ['major_new_dragon'] },
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  },
  {
    id: 'dr_rb_01', category: 'cultivation', minAge: 14, maxAge: 25, probability: 0.9,
    templates: [
      '你在{location}接受血统觉醒仪式。{npc}告诉你：\'D级混血是第一步，需要龙血>=20、言灵>=15。\'',
    ],
    choices: [
      { text: '全力觉醒，不留退路', successRate: 0.65, successText: '你孤注一掷，龙血沸腾——你成功觉醒为D级混血！', failText: '觉醒失败，龙血反噬，身体虚弱。', effects: { realm: 1, strength: 5, maxAge: 80 }, failEffects: { health: -25, strength: -5, maxAge: -10 } },
      { text: '循序渐进，稳妥觉醒', successRate: 0.9, successText: '你平安觉醒为D级混血，根基扎实。', failText: '仪式被死侍袭击打断，觉醒失败。', effects: { realm: 1, strength: 3, maxAge: 60 }, failEffects: { health: -10, maxAge: -5 } },
      { text: '放弃觉醒，继续观察', successRate: 1, successText: '你选择了继续观察。虽然没有觉醒，但你对龙血有了更深的理解。', failText: '', effects: { intelligence: 3, strength: 2 } },
    ],
    flags: ['realm_attempt_1'],
    chainPriority: 5,
  },
  {
    id: 'dr_rb_02', category: 'cultivation', minAge: 16, maxAge: 30, probability: 0.7,
    templates: [
      '你觉醒为D级混血的消息传开。{location}的混血种们纷纷前来祝贺。',
      '{npc}欣慰地看着你：\'从普通人到D级，你经历了常人难以想象的地狱。\'',
    ],
    effects: { charisma: 2, luck: 1 },
    requiredFlags: ['realm_breakthrough_1'],
    flags: ['realm_stable_1'],
    chainPriority: 2,
  },
  {
    id: 'dr_rb_03', category: 'cultivation', minAge: 20, maxAge: 35, probability: 0.85,
    templates: [
      '你在{location}闭关，触摸到C级的门槛。{npc}说：\'C级可释放完整言灵，需要龙血>=35、言灵>=30。\'',
    ],
    choices: [
      { text: '全力觉醒', successRate: 0.6, successText: '你成功突破到C级！言灵完整释放，威力惊人！', failText: '突破失败，龙血反噬。', effects: { realm: 1, strength: 5, maxAge: 120 }, failEffects: { health: -25, strength: -5, maxAge: -15 } },
      { text: '循序渐进', successRate: 0.85, successText: '你平安突破到C级。', failText: '意外打断，突破失败。', effects: { realm: 1, strength: 3, maxAge: 90 }, failEffects: { health: -10, maxAge: -5 } },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 3, strength: 2 } },
    ],
    requiredFlags: ['realm_breakthrough_1'],
    flags: ['realm_attempt_2'],
    chainPriority: 5,
  },
  {
    id: 'dr_rb_04', category: 'cultivation', minAge: 22, maxAge: 40, probability: 0.65,
    templates: [
      '你突破到C级，{location}的混血种们前来祝贺。',
      '{npc}点头：\'C级之境，你已能独当一面。\'',
    ],
    effects: { charisma: 2, luck: 1 },
    requiredFlags: ['realm_breakthrough_2'],
    flags: ['realm_stable_2'],
    chainPriority: 2,
  },
  {
    id: 'dr_rb_05', category: 'cultivation', minAge: 28, maxAge: 45, probability: 0.8,
    templates: [
      '你在{location}感应到B级的契机。{npc}说：\'B级是执行部精英的标准，需要龙血>=50。\'',
    ],
    choices: [
      { text: '全力觉醒', successRate: 0.55, successText: '你成功突破到B级！实力暴涨！', failText: '突破失败，身受重伤。', effects: { realm: 1, strength: 6, maxAge: 200 }, failEffects: { health: -30, strength: -5, maxAge: -20 } },
      { text: '循序渐进', successRate: 0.8, successText: '你平安突破到B级。', failText: '意外打断，突破失败。', effects: { realm: 1, strength: 4, maxAge: 160 }, failEffects: { health: -12, maxAge: -8 } },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 3, strength: 2 } },
    ],
    requiredFlags: ['realm_breakthrough_2'],
    flags: ['realm_attempt_3'],
    chainPriority: 5,
  },
  {
    id: 'dr_rb_06', category: 'cultivation', minAge: 30, maxAge: 50, probability: 0.6,
    templates: [
      '你成为B级混血种，{location}震动。',
      '{npc}赞叹：\'B级之境，你已是执行部的中坚力量。\'',
    ],
    effects: { charisma: 3, luck: 2 },
    requiredFlags: ['realm_breakthrough_3'],
    flags: ['realm_stable_3'],
    chainPriority: 2,
  },
  {
    id: 'dr_rb_07', category: 'cultivation', minAge: 35, maxAge: 55, probability: 0.75,
    templates: [
      '你在{location}触摸到A级的门槛。{npc}说：\'A级可龙化作战，需要龙血>=70、言灵>=60。\'',
    ],
    choices: [
      { text: '全力觉醒', successRate: 0.5, successText: '你成功突破到A级！龙化能力觉醒！', failText: '突破失败，龙化失控。', effects: { realm: 1, strength: 6, maxAge: 300 }, failEffects: { health: -30, strength: -8, maxAge: -20 } },
      { text: '循序渐进', successRate: 0.75, successText: '你平安突破到A级。', failText: '意外打断，突破失败。', effects: { realm: 1, strength: 4, maxAge: 240 }, failEffects: { health: -12, maxAge: -8 } },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 3, strength: 2 } },
    ],
    requiredFlags: ['realm_breakthrough_3'],
    flags: ['realm_attempt_4'],
    chainPriority: 5,
  },
  {
    id: 'dr_rb_08', category: 'cultivation', minAge: 37, maxAge: 60, probability: 0.55,
    templates: [
      '你突破到A级，{location}的混血种们敬畏地看着你。',
      '{npc}欣慰：\'A级之境，你已是一方强者。\'',
    ],
    effects: { charisma: 3, luck: 2 },
    requiredFlags: ['realm_breakthrough_4'],
    flags: ['realm_stable_4'],
    chainPriority: 2,
  },
  {
    id: 'dr_rb_09', category: 'cultivation', minAge: 45, maxAge: 70, probability: 0.7,
    templates: [
      '你在{location}感应到S级的契机。{npc}说：\'S级是传奇，需要龙血>=90、言灵>=80。\'',
    ],
    choices: [
      { text: '全力觉醒', successRate: 0.45, successText: '你成功突破到S级！{location}因你而风云变色！', failText: '突破失败，龙血暴走。', effects: { realm: 1, strength: 8, maxAge: 400 }, failEffects: { health: -35, strength: -10, maxAge: -25 } },
      { text: '循序渐进', successRate: 0.7, successText: '你平安突破到S级。', failText: '意外打断，突破失败。', effects: { realm: 1, strength: 5, maxAge: 320 }, failEffects: { health: -15, maxAge: -10 } },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 4, strength: 3 } },
    ],
    requiredFlags: ['realm_breakthrough_4'],
    flags: ['realm_attempt_5'],
    chainPriority: 5,
  },
  {
    id: 'dr_rb_10', category: 'cultivation', minAge: 47, maxAge: 75, probability: 0.5,
    templates: [
      '你成为S级混血种，{location}各方势力纷纷来投。',
      '{npc}感叹：\'S级之境，你已是传奇。\'',
    ],
    effects: { charisma: 4, luck: 3 },
    requiredFlags: ['realm_breakthrough_5'],
    flags: ['realm_stable_5'],
    chainPriority: 2,
  },
  {
    id: 'dr_rb_11', category: 'cultivation', minAge: 55, maxAge: 90, probability: 0.65,
    templates: [
      '你在{location}触摸到SS级的门槛。{npc}说：\'SS级已接近龙王，需要龙血>=120、言灵>=100。\'',
    ],
    choices: [
      { text: '全力觉醒', successRate: 0.4, successText: '你成功突破到SS级！整个{location}为之震动！', failText: '突破失败，差点沦为死侍。', effects: { realm: 1, strength: 10, maxAge: 600 }, failEffects: { health: -40, strength: -12, maxAge: -30 } },
      { text: '循序渐进', successRate: 0.65, successText: '你平安突破到SS级。', failText: '意外打断，突破失败。', effects: { realm: 1, strength: 6, maxAge: 480 }, failEffects: { health: -18, maxAge: -12 } },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 5, strength: 3 } },
    ],
    requiredFlags: ['realm_breakthrough_5'],
    flags: ['realm_attempt_6'],
    chainPriority: 5,
  },
  {
    id: 'dr_rb_12', category: 'cultivation', minAge: 57, maxAge: 95, probability: 0.45,
    templates: [
      '你突破到SS级，{location}的混血种们跪地朝拜。',
      '{npc}敬畏：\'SS级之境，你已站在混血种之巅。\'',
    ],
    effects: { charisma: 5, luck: 4 },
    requiredFlags: ['realm_breakthrough_6'],
    flags: ['realm_stable_6'],
    chainPriority: 2,
  },
  {
    id: 'dr_rb_13', category: 'cultivation', minAge: 70, maxAge: 120, probability: 0.55,
    templates: [
      '你在{location}感应到龙王级的契机。{npc}颤抖着说：\'龙王级...那是传说中的境界，需要龙血>=150、龙化>=100。\'',
    ],
    choices: [
      { text: '全力冲击，向死而生', successRate: 0.35, successText: '你燃烧生命与龙血，成功突破到龙王级！万古以来第一位人类龙王诞生！', failText: '突破失败，肉身崩溃，沦为龙类怪物。', effects: { realm: 1, strength: 15, special: 10, maxAge: 9999 }, failEffects: { health: -50, strength: -20, maxAge: -50 } },
      { text: '循序渐进，借龙血之力', successRate: 0.6, successText: '你借龙血之力，平安突破到龙王级。', failText: '龙血反噬，突破失败。', effects: { realm: 1, strength: 10, special: 6, maxAge: 800 }, failEffects: { health: -25, maxAge: -20 } },
      { text: '放弃突破，守护当下', successRate: 1, successText: '你选择了守护。虽然没有成为龙王，但你守护了所有珍视之人。', failText: '', effects: { charisma: 8, health: 10, luck: 6 } },
    ],
    requiredFlags: ['realm_breakthrough_6'],
    flags: ['realm_attempt_7'],
    chainPriority: 5,
  },
  {
    id: 'dr_rb_14', category: 'cultivation', minAge: 72, maxAge: 130, probability: 0.4,
    templates: [
      '你成为龙王级存在，{location}的天地因你而臣服。',
      '{npc}跪拜：\'参见龙王大人！\'你的传说，将永载史册。',
    ],
    effects: { charisma: 10, luck: 8, special: 5 },
    requiredFlags: ['realm_breakthrough_7'],
    flags: ['realm_stable_7'],
    chainPriority: 2,
  },
];