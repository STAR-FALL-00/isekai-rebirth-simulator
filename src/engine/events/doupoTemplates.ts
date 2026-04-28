import type { EventTemplate } from './types';

// 斗破苍穹 — doupo event templates
// Generated: 2026-04-27

export const doupoTemplates: EventTemplate[] = [
  {
    id: 'dp_ch_01', category: 'childhood', minAge: 0, maxAge: 5, probability: 0.15,
    templates: [
      '你出生在{location}，啼哭声响彻整个院落。{npc}断言你体内斗气充盈，将来必成大器。',
      '襁褓中的你被放在{location}的石台上，一道微光闪过，{legend}的气息与你产生共鸣。',
      '你的童年在{location}度过，虽然斗气修炼缓慢，但你从未放弃。',
    ],
    effects: { strength: 3, luck: 2 },
  },
  {
    id: 'dp_ch_02', category: 'childhood', minAge: 3, maxAge: 8, probability: 0.25,
    templates: [
      '你在{location}玩耍时，意外发现了一株一品药草，{npc}惊讶于你的眼力。',
      '{npc}在{location}教你辨认药材，你展现出惊人的炼药天赋。',
      '你在{location}偷偷观摩强者战斗，心中暗暗发誓要成为那样的存在。',
    ],
    effects: { intelligence: 3, luck: 2 },
  },
  {
    id: 'dp_ch_03', category: 'childhood', minAge: 5, maxAge: 10, probability: 0.35,
    templates: [
      '斗气测试那天，{location}的测气石光芒黯淡。{npc}摇头叹息：\'斗之气三段...废物。\'',
      '你在{location}被同龄人欺凌，他们嘲笑你的斗气修为。你握紧拳头，默默忍受。',
      '{npc}安慰你：\'斗气强弱不是一切，{legend}当年也曾被人轻视。\'',
    ],
    effects: { strength: 2, charisma: -1 },
  },
  {
    id: 'dp_gr_01', category: 'growth', minAge: 10, maxAge: 18, probability: 0.18,
    templates: [
      '你在{location}意外获得一枚纳戒，里面藏着一卷玄阶功法！',
      '{npc}在{location}传授你一套基础斗技，你勤加练习，进步神速。',
      '你在{location}被一位神秘老者指点，茅塞顿开，斗气隐隐有突破迹象。',
    ],
    effects: { strength: 5, intelligence: 3 },
  },
  {
    id: 'dp_gr_02', category: 'growth', minAge: 12, maxAge: 20, probability: 0.28,
    templates: [
      '你在{location}参加了一场少年斗气大赛，虽然落败但收获颇丰。',
      '{npc}带你前往{location}历练，你第一次面对真正的生死危机。',
      '你在{location}结识了一群志同道合的朋友，互相切磋，共同进步。',
    ],
    effects: { strength: 3, charisma: 3 },
  },
  {
    id: 'dp_gr_03', category: 'growth', minAge: 14, maxAge: 22, probability: 0.38,
    templates: [
      '你日夜在{location}苦修，终于突破到了斗者境界！',
      '{npc}赞许地看着你：\'从斗之气三段到斗者，你用了三年。这不是天赋，是毅力。\'',
      '你在{location}第一次施展斗技，火焰腾空而起，{legend}的虚影一闪而逝。',
    ],
    effects: { strength: 4, charisma: 2 },
  },
  {
    id: 'dp_ad_01', category: 'adult', minAge: 20, maxAge: 35, probability: 0.22,
    templates: [
      '你在{location}建立了自己的势力，广收门徒，名震一方。',
      '你参与了{legend}相关的大规模事件，在关键时刻力挽狂澜。',
      '{npc}将毕生所学传授于你，你在{location}苦修数年，终成一代强者。',
    ],
    effects: { charisma: 5, strength: 4, luck: 3 },
  },
  {
    id: 'dp_ad_02', category: 'adult', minAge: 25, maxAge: 40, probability: 0.32,
    templates: [
      '你在{location}遭遇强敌，生死关头，体内的异火突然觉醒！',
      '{npc}邀请你加入一场秘密行动，目标直指{legend}的遗迹。',
      '你在{location}拍卖会上拍得一枚稀有丹药，实力再上一层楼。',
    ],
    effects: { special: 4, strength: 3 },
  },
  {
    id: 'dp_el_01', category: 'elder', minAge: 60, maxAge: 100, probability: 0.25,
    templates: [
      '你隐居在{location}，每日炼丹养花，但江湖上仍有你的传说。',
      '你在{location}闭关冲击更高境界，{npc}亲自为你护法。',
      '你将毕生所学整理成册，存放在{location}，等待有缘人。',
    ],
    effects: { intelligence: 5, charisma: 3 },
  },
  {
    id: 'dp_cb_01', category: 'combat', minAge: 15, maxAge: 30, probability: 0.15,
    templates: [
      '你在{location}遭遇一名强敌，对方乃是斗师级别！',
      '一场恶战在{location}爆发，{npc}与你并肩作战。',
      '{legend}的爪牙找上了你，你们在{location}展开生死搏杀。',
    ],
    choices: [
      { text: '全力迎战，以命相搏', successRate: 0.6, successText: '你激发体内全部斗气，一击重创对手，赢得险胜！', failText: '你虽然拼尽全力，但实力差距过大，重伤败退。', effects: { strength: 6, health: -10 }, failEffects: { health: -20, strength: 2 } },
      { text: '以智取胜，诱敌深入', successRate: 0.75, successText: '你利用地形优势将敌人引入陷阱，成功反杀！', failText: '你的计谋被识破，反遭伏击，狼狈逃窜。', effects: { intelligence: 5, strength: 3 }, failEffects: { health: -15, luck: -3 } },
    ],
  },
  {
    id: 'dp_cb_02', category: 'combat', minAge: 20, maxAge: 40, probability: 0.25,
    templates: [
      '你在{location}遭遇魔兽袭击，生死一线！',
      '佣兵工会的任务将你带到了{location}，目标是一头高阶魔兽。',
      '{npc}在{location}被敌人围攻，你毫不犹豫地冲了上去。',
    ],
    choices: [
      { text: '正面硬撼', successRate: 0.55, successText: '你以强悍的肉身硬抗魔兽攻击，最终将其击杀！', failText: '魔兽的利爪撕裂了你的防御，你身负重伤。', effects: { strength: 5, health: -8 }, failEffects: { health: -25 } },
      { text: '迂回游击', successRate: 0.8, successText: '你利用灵活的身法消耗魔兽体力，最终抓住机会一击必杀。', failText: '魔兽的速度超乎想象，你险些丧命。', effects: { strength: 3, luck: 2 }, failEffects: { health: -15 } },
    ],
  },
  {
    id: 'dp_cb_03', category: 'combat', minAge: 25, maxAge: 50, probability: 0.35,
    templates: [
      '你在{location}参加了一场宗门大比，对手皆是各派精英。',
      '{legend}的传承试炼开启，你需在{location}击败守护者。',
      '你在{location}与宿敌再度相遇，旧怨新仇一起算！',
    ],
    choices: [
      { text: '施展最强斗技', successRate: 0.5, successText: '你的绝招威力惊人，一招定胜负！', failText: '对手早有防备，你的绝招被化解，反受其害。', effects: { strength: 8, special: 3 }, failEffects: { health: -20, special: -2 } },
      { text: '稳扎稳打，寻找破绽', successRate: 0.7, successText: '你冷静观察，抓住对手破绽一击制胜！', failText: '对手没有露出明显破绽，战斗陷入僵局。', effects: { strength: 4, intelligence: 3 }, failEffects: { health: -10 } },
    ],
  },
  {
    id: 'dp_rm_01', category: 'romance', minAge: 15, maxAge: 25, probability: 0.12,
    templates: [
      '你在{location}邂逅了一位神秘女子，她的气息让你心神荡漾。',
      '{npc}在{location}与你月下相会，互诉衷肠。',
      '你救了一位落难的少女，她决定以身相许，在{location}私定终身。',
    ],
    effects: { charisma: 4, luck: 3 },
    relationshipEffects: { yun_yun: 10 },
  },
  {
    id: 'dp_rm_02', category: 'romance', minAge: 18, maxAge: 30, probability: 0.18,
    templates: [
      '你在{location}遇到了蛇人族的女王，她的美貌与危险同样致命。',
      '{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。',
      '你们经历了{legend}的考验，感情反而更加坚不可摧。',
    ],
    effects: { charisma: 5, luck: 4 },
    relationshipEffects: { medusa: 10 },
  },
  {
    id: 'dp_rm_03', category: 'romance', minAge: 20, maxAge: 35, probability: 0.22,
    templates: [
      '你在{location}与古族少女相遇，她的身份让你震惊不已。',
      '{npc}为了你，不惜与家族决裂。你发誓绝不辜负她。',
      '你们在{location}共同面对强敌，生死与共，感情升华。',
    ],
    choices: [
      { text: '接受她的感情', successRate: 0.8, successText: '你们正式结为伴侣，共同面对未来的风雨。', failText: '她的家族强行将她带走，你们被迫分离。', effects: { charisma: 6, luck: 4, health: 5 }, failEffects: { charisma: -3, health: -5 }, relationshipEffects: { gu_xun_er: 15 }, failRelationshipEffects: { gu_xun_er: -10 } },
      { text: '保持距离，专注修炼', successRate: 1, successText: '你选择了修炼之路，虽然心痛但无怨无悔。', failText: '', effects: { strength: 5, intelligence: 4 }, relationshipEffects: { gu_xun_er: -5 } },
    ],
  },
  {
    id: 'dp_cult_01', category: 'cultivation', minAge: 12, maxAge: 25, probability: 0.2,
    templates: [
      '你在{location}闭关苦修，斗气终于突破到了新层次！',
      '{npc}传授你一套高深功法，你在{location}日夜研习。',
      '你在{location}发现了一处灵气充沛的宝地，修炼事半功倍。',
    ],
    effects: { strength: 5, intelligence: 2 },
  },
  {
    id: 'dp_cult_02', category: 'cultivation', minAge: 20, maxAge: 40, probability: 0.3,
    templates: [
      '你在{location}吞噬了一缕{legend}的残火，异火之力大增！',
      '你成功炼制出一枚高阶丹药，在{location}引起轰动。',
      '{npc}为你护法，你在{location}冲击更高境界。',
    ],
    effects: { special: 5, intelligence: 3 },
  },
  {
    id: 'dp_cult_03', category: 'cultivation', minAge: 30, maxAge: 55, probability: 0.4,
    templates: [
      '你在{location}获得了一卷天阶功法，实力暴涨！',
      '你将两种异火融合，在{location}创造了全新的斗技。',
      '{npc}惊叹于你的修炼速度，称你为{legend}转世。',
    ],
    effects: { special: 6, strength: 4, intelligence: 3 },
  },
  {
    id: 'dp_ex_01', category: 'exploration', minAge: 15, maxAge: 30, probability: 0.18,
    templates: [
      '你深入{location}，发现了一处上古遗迹的入口。',
      '你在{location}迷路，却意外闯入了一处隐藏的洞府。',
      '{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。',
    ],
    effects: { luck: 5, strength: 2 },
  },
  {
    id: 'dp_ex_02', category: 'exploration', minAge: 20, maxAge: 40, probability: 0.28,
    templates: [
      '你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。',
      '你探索了一处危险的{location}，九死一生后带回了珍贵的宝物。',
      '{npc}带你进入了一个秘密的{location}，你大开眼界。',
    ],
    effects: { luck: 4, intelligence: 3 },
  },
  {
    id: 'dp_ex_03', category: 'exploration', minAge: 25, maxAge: 50, probability: 0.38,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的核心传承！',
      '你在{location}解开了一个困扰世人千年的谜题。',
      '你发现了{location}隐藏的秘密，各方势力为此展开了明争暗斗。',
    ],
    effects: { luck: 6, intelligence: 4, special: 3 },
  },
  {
    id: 'dp_ws_01', category: 'world_story', minAge: 20, maxAge: 40, probability: 0.15,
    templates: [
      '魂殿的阴谋浮出水面，{location}成为了正邪交锋的前线。',
      '{legend}的封印开始松动，整个斗气大陆为之震动。',
      '{npc}带来消息：云岚宗与魂殿暗中勾结，意图颠覆帝国！',
    ],
    effects: { charisma: 4, luck: 3 },
  },
  {
    id: 'dp_ws_02', category: 'world_story', minAge: 30, maxAge: 50, probability: 0.25,
    templates: [
      '你在{location}发现了魂殿的秘密据点，决定一探究竟。',
      '一场席卷整个斗气大陆的大战爆发了，{location}首当其冲。',
      '{npc}告诉你一个关于斗帝传承的惊天秘密。',
    ],
    effects: { intelligence: 5, charisma: 3 },
  },
  {
    id: 'dp_ws_03', category: 'world_story', minAge: 40, maxAge: 60, probability: 0.35,
    templates: [
      '斗帝遗迹在{location}现世，各方强者蜂拥而至。',
      '魂殿殿主{npc}亲自出手，目标直指你体内的异火！',
      '你成为了阻止{legend}复苏的关键，命运的重担压在你肩上。',
    ],
    effects: { strength: 5, intelligence: 4, charisma: 4 },
  },
  {
    id: 'dp_hd_01', category: 'hidden', minAge: 30, maxAge: 60, probability: 0.08,
    templates: [
      '你在{location}发现了一块刻满古文的石碑，上面记载着斗帝失踪的真相。',
      '你解开了{legend}留下的谜题，获得了一份隐藏的传承。',
    ],
    effects: { intelligence: 8, special: 5 },
    conditions: [{ stat: 'intelligence', min: 60 }],
  },
  {
    id: 'dp_hd_02', category: 'hidden', minAge: 50, maxAge: 80, probability: 0.12,
    templates: [
      '你超越了{legend}，看到了斗气大陆之外的真相——原来一切都只是...',
      '你发现了这个世界的运行规则，{location}只是一场巨大棋局的一角。',
    ],
    effects: { intelligence: 10, special: 8 },
    conditions: [{ stat: 'intelligence', min: 100 }],
  },
  {
    id: 'dp_dt_01', category: 'death', minAge: 0, maxAge: 50, probability: 0.3,
    templates: [
      '你在{location}遭遇不测，生命力迅速流逝。',
      '你的身体到达了极限，{npc}无能为力。',
    ],
    effects: { health: -60 },
  },
  {
    id: 'dp_dt_02', category: 'death', minAge: 0, maxAge: 80, probability: 0.45,
    templates: [
      '你在{location}进行了最后的战斗，英勇牺牲。',
      '异火反噬，你在{location}化为灰烬。',
    ],
    effects: { health: -80 },
  },
  {
    id: 'dp_dt_03', category: 'death', minAge: 0, maxAge: 120, probability: 0.6,
    templates: [
      '你在{location}被强敌击杀，死不瞑目。',
      '寿元耗尽，你在{location}静静地闭上了眼睛。',
      '你的伤势恶化，{npc}尽力抢救但回天乏术。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'dp_ie_xiao_clan_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在萧家的祠堂中发现了祖先留下的斗技残卷，上面记载着{legend}的部分传承。',
    ],
    effects: { strength: 3, luck: 2 },
    flags: ['chain_xiao_clan_childhood_0'],
    identityExclusive: 'xiao_clan',
  },
  {
    id: 'dp_ie_xiao_clan_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '萧家遭遇变故，你在{location}独自面对强敌，誓死守护家族荣耀。',
    ],
    effects: { strength: 4, charisma: 2 },
    requiredFlags: ['chain_xiao_clan_childhood_0'],
    flags: ['chain_xiao_clan_childhood_1'],
    identityExclusive: 'xiao_clan',
    chainPriority: 1,
  },
  {
    id: 'dp_ie_xiao_clan_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你代表萧家参加{location}的宗门大比，一战成名，重振萧家声威。',
    ],
    effects: { charisma: 5, strength: 3 },
    requiredFlags: ['chain_xiao_clan_childhood_0'],
    flags: ['chain_xiao_clan_adult_0'],
    identityExclusive: 'xiao_clan',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_xiao_clan_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '萧家长老欲将你许配给外族以换取联盟，你面临家族责任与个人自由的两难抉择。',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_xiao_clan_path'], failFlags: ['branch_identity_xiao_clan_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_xiao_clan_new'], failFlags: ['branch_identity_xiao_clan_new_fail'] },
    ],
    requiredFlags: ['chain_xiao_clan_childhood_0'],
    flags: ['chain_xiao_clan_adult_1'],
    identityExclusive: 'xiao_clan',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_alchemist_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}发现了一株罕见的六品药草，炼药成功率大幅提升。',
    ],
    effects: { intelligence: 4, luck: 3 },
    flags: ['chain_alchemist_childhood_0'],
    identityExclusive: 'alchemist',
  },
  {
    id: 'dp_ie_alchemist_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}邀请你参加炼药师大会，你在{location}展示了自己的炼丹技艺。',
    ],
    effects: { intelligence: 5, charisma: 2 },
    requiredFlags: ['chain_alchemist_childhood_0'],
    flags: ['chain_alchemist_childhood_1'],
    identityExclusive: 'alchemist',
    chainPriority: 1,
  },
  {
    id: 'dp_ie_alchemist_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你成功炼制出一枚七品丹药，在{location}引起轰动，各方势力争相拉拢。',
    ],
    effects: { intelligence: 6, special: 3 },
    requiredFlags: ['chain_alchemist_childhood_0'],
    flags: ['chain_alchemist_adult_0'],
    identityExclusive: 'alchemist',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_alchemist_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '一位神秘人委托你炼制禁丹，报酬丰厚但风险极大，你该如何抉择？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_alchemist_path'], failFlags: ['branch_identity_alchemist_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_alchemist_new'], failFlags: ['branch_identity_alchemist_new_fail'] },
    ],
    requiredFlags: ['chain_alchemist_childhood_0'],
    flags: ['chain_alchemist_adult_1'],
    identityExclusive: 'alchemist',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_beast_clan_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}觉醒了体内的远古魔兽血脉，力量暴涨。',
    ],
    effects: { strength: 5, health: 3 },
    flags: ['chain_beast_clan_childhood_0'],
    identityExclusive: 'beast_clan',
  },
  {
    id: 'dp_ie_beast_clan_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '魔兽家族内部爆发权力争斗，你在{location}被卷入漩涡中心。',
    ],
    effects: { strength: 4, charisma: 2 },
    requiredFlags: ['chain_beast_clan_childhood_0'],
    flags: ['chain_beast_clan_childhood_1'],
    identityExclusive: 'beast_clan',
    chainPriority: 1,
  },
  {
    id: 'dp_ie_beast_clan_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你化身为魔兽形态，在{location}展现了令人生畏的战斗能力。',
    ],
    effects: { strength: 6, special: 2 },
    requiredFlags: ['chain_beast_clan_childhood_0'],
    flags: ['chain_beast_clan_adult_0'],
    identityExclusive: 'beast_clan',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_beast_clan_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '人类修士欲猎杀你的族人换取赏金，你选择庇护族人还是明哲保身？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_beast_clan_path'], failFlags: ['branch_identity_beast_clan_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_beast_clan_new'], failFlags: ['branch_identity_beast_clan_new_fail'] },
    ],
    requiredFlags: ['chain_beast_clan_childhood_0'],
    flags: ['chain_beast_clan_adult_1'],
    identityExclusive: 'beast_clan',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_yunlan_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在云岚宗的藏经阁中发现了一卷失传的斗技，实力大增。',
    ],
    effects: { strength: 4, intelligence: 2 },
    flags: ['chain_yunlan_childhood_0'],
    identityExclusive: 'yunlan',
  },
  {
    id: 'dp_ie_yunlan_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '云岚宗内部派系斗争激烈，你在{location}被迫选择站队。',
    ],
    effects: { charisma: 3, luck: 2 },
    requiredFlags: ['chain_yunlan_childhood_0'],
    flags: ['chain_yunlan_childhood_1'],
    identityExclusive: 'yunlan',
    chainPriority: 1,
  },
  {
    id: 'dp_ie_yunlan_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你代表云岚宗出征，在{location}立下赫赫战功。',
    ],
    effects: { strength: 5, charisma: 3 },
    requiredFlags: ['chain_yunlan_childhood_0'],
    flags: ['chain_yunlan_adult_0'],
    identityExclusive: 'yunlan',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_yunlan_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '你发现云岚宗高层与魂殿暗中勾结，是揭发还是隐忍？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_yunlan_path'], failFlags: ['branch_identity_yunlan_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_yunlan_new'], failFlags: ['branch_identity_yunlan_new_fail'] },
    ],
    requiredFlags: ['chain_yunlan_childhood_0'],
    flags: ['chain_yunlan_adult_1'],
    identityExclusive: 'yunlan',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_soul_hall_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}执行魂殿任务，成功收割了一个强大的灵魂。',
    ],
    effects: { intelligence: 4, special: 3 },
    flags: ['chain_soul_hall_childhood_0'],
    identityExclusive: 'soul_hall',
  },
  {
    id: 'dp_ie_soul_hall_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}赏识你的能力，传授你魂殿秘法，灵魂力大增。',
    ],
    effects: { intelligence: 5, strength: 2 },
    requiredFlags: ['chain_soul_hall_childhood_0'],
    flags: ['chain_soul_hall_childhood_1'],
    identityExclusive: 'soul_hall',
    chainPriority: 1,
  },
  {
    id: 'dp_ie_soul_hall_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你在{location}发现了叛徒的踪迹，展开了一场惊心动魄的追捕。',
    ],
    effects: { strength: 4, charisma: 2 },
    requiredFlags: ['chain_soul_hall_childhood_0'],
    flags: ['chain_soul_hall_adult_0'],
    identityExclusive: 'soul_hall',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_soul_hall_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '魂殿命令你暗杀一位旧友，你在忠诚与情义间挣扎。',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_soul_hall_path'], failFlags: ['branch_identity_soul_hall_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_soul_hall_new'], failFlags: ['branch_identity_soul_hall_new_fail'] },
    ],
    requiredFlags: ['chain_soul_hall_childhood_0'],
    flags: ['chain_soul_hall_adult_1'],
    identityExclusive: 'soul_hall',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_jia_nan_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在迦南学院的{location}发现了一处隐藏的修炼宝地。',
    ],
    effects: { strength: 3, luck: 3 },
    flags: ['chain_jia_nan_childhood_0'],
    identityExclusive: 'jia_nan',
  },
  {
    id: 'dp_ie_jia_nan_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '学院大比中，你在{location}击败了强劲的对手，获得导师赏识。',
    ],
    effects: { strength: 4, charisma: 3 },
    requiredFlags: ['chain_jia_nan_childhood_0'],
    flags: ['chain_jia_nan_childhood_1'],
    identityExclusive: 'jia_nan',
    chainPriority: 1,
  },
  {
    id: 'dp_ie_jia_nan_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你参加了迦南学院组织的遗迹探险，在{location}获得了珍贵的传承。',
    ],
    effects: { intelligence: 5, luck: 3 },
    requiredFlags: ['chain_jia_nan_childhood_0'],
    flags: ['chain_jia_nan_adult_0'],
    identityExclusive: 'jia_nan',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_jia_nan_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '学院内出现了魂殿奸细，你选择暗中调查还是上报院长？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_jia_nan_path'], failFlags: ['branch_identity_jia_nan_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_jia_nan_new'], failFlags: ['branch_identity_jia_nan_new_fail'] },
    ],
    requiredFlags: ['chain_jia_nan_childhood_0'],
    flags: ['chain_jia_nan_adult_1'],
    identityExclusive: 'jia_nan',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_mercenary_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}完成了一个高难度佣兵任务，获得了丰厚的报酬。',
    ],
    effects: { strength: 4, luck: 2 },
    flags: ['chain_mercenary_childhood_0'],
    identityExclusive: 'mercenary',
  },
  {
    id: 'dp_ie_mercenary_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}邀请你加入一支精英佣兵小队，前往{location}执行秘密任务。',
    ],
    effects: { strength: 3, charisma: 2 },
    requiredFlags: ['chain_mercenary_childhood_0'],
    flags: ['chain_mercenary_childhood_1'],
    identityExclusive: 'mercenary',
    chainPriority: 1,
  },
  {
    id: 'dp_ie_mercenary_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你在一次任务中救下了重要的雇主，声望大涨。',
    ],
    effects: { charisma: 5, luck: 3 },
    requiredFlags: ['chain_mercenary_childhood_0'],
    flags: ['chain_mercenary_adult_0'],
    identityExclusive: 'mercenary',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_mercenary_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '一个任务要求你背叛同伴，高额赏金面前你如何抉择？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_mercenary_path'], failFlags: ['branch_identity_mercenary_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_mercenary_new'], failFlags: ['branch_identity_mercenary_new_fail'] },
    ],
    requiredFlags: ['chain_mercenary_childhood_0'],
    flags: ['chain_mercenary_adult_1'],
    identityExclusive: 'mercenary',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_royal_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在皇宫的密室中发现了祖先留下的丹方，炼药天赋觉醒。',
    ],
    effects: { intelligence: 4, special: 2 },
    flags: ['chain_royal_childhood_0'],
    identityExclusive: 'royal',
  },
  {
    id: 'dp_ie_royal_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '帝国政局动荡，你在{location}被卷入皇权争夺的漩涡。',
    ],
    effects: { charisma: 4, luck: 2 },
    requiredFlags: ['chain_royal_childhood_0'],
    flags: ['chain_royal_childhood_1'],
    identityExclusive: 'royal',
    chainPriority: 1,
  },
  {
    id: 'dp_ie_royal_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你以皇室身份出使{location}，展现了卓越的外交才能。',
    ],
    effects: { charisma: 5, intelligence: 3 },
    requiredFlags: ['chain_royal_childhood_0'],
    flags: ['chain_royal_adult_0'],
    identityExclusive: 'royal',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_royal_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '你发现了一位皇兄谋反的证据，揭发还是帮他隐瞒？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_royal_path'], failFlags: ['branch_identity_royal_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_royal_new'], failFlags: ['branch_identity_royal_new_fail'] },
    ],
    requiredFlags: ['chain_royal_childhood_0'],
    flags: ['chain_royal_adult_1'],
    identityExclusive: 'royal',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_snake_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}觉醒了蛇人族特有的毒斗气，实力大增。',
    ],
    effects: { strength: 4, special: 3 },
    flags: ['chain_snake_childhood_0'],
    identityExclusive: 'snake',
  },
  {
    id: 'dp_ie_snake_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '蛇人族与美杜莎女王的遗迹产生共鸣，你在{location}获得了传承。',
    ],
    effects: { special: 5, intelligence: 2 },
    requiredFlags: ['chain_snake_childhood_0'],
    flags: ['chain_snake_childhood_1'],
    identityExclusive: 'snake',
    chainPriority: 1,
  },
  {
    id: 'dp_ie_snake_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '人类帝国对蛇人族发起进攻，你在{location}率领族人奋力抵抗。',
    ],
    effects: { strength: 5, charisma: 3 },
    requiredFlags: ['chain_snake_childhood_0'],
    flags: ['chain_snake_adult_0'],
    identityExclusive: 'snake',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_snake_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '美杜莎女王要求你献祭灵魂换取力量，你接受还是反抗？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_snake_path'], failFlags: ['branch_identity_snake_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_snake_new'], failFlags: ['branch_identity_snake_new_fail'] },
    ],
    requiredFlags: ['chain_snake_childhood_0'],
    flags: ['chain_snake_adult_1'],
    identityExclusive: 'snake',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_ancient_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.88,
    templates: [
      '你在{location}触发了古族血脉觉醒仪式，斗气品质飞跃。',
    ],
    effects: { strength: 5, intelligence: 3 },
    flags: ['chain_ancient_childhood_0'],
    identityExclusive: 'ancient',
  },
  {
    id: 'dp_ie_ancient_02', category: 'identity_exclusive', minAge: 12, maxAge: 20, probability: 0.88,
    templates: [
      '{npc}带你进入古族禁地，你在{location}接受了先祖的传承。',
    ],
    effects: { strength: 4, special: 4 },
    requiredFlags: ['chain_ancient_childhood_0'],
    flags: ['chain_ancient_childhood_1'],
    identityExclusive: 'ancient',
    chainPriority: 1,
  },
  {
    id: 'dp_ie_ancient_03', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '古族内部的派系斗争波及到你，你在{location}展现了古族后裔的骄傲。',
    ],
    effects: { charisma: 4, strength: 3 },
    requiredFlags: ['chain_ancient_childhood_0'],
    flags: ['chain_ancient_adult_0'],
    identityExclusive: 'ancient',
    chainPriority: 2,
  },
  {
    id: 'dp_ie_ancient_04', category: 'identity_exclusive', minAge: 30, maxAge: 45, probability: 0.9,
    templates: [
      '古族长老要求你放弃外界的一切回归本族，你如何抉择？',
    ],
    choices: [
      { text: '坚持本心，走自己的道路', successRate: 0.7, successText: '你选择了坚持本心，在{location}闯出了属于自己的一片天地。', failText: '你的坚持换来了惨痛的代价，但你无怨无悔。', effects: { strength: 5, charisma: 3 }, failEffects: { health: -10, luck: -3 }, flags: ['branch_identity_ancient_path'], failFlags: ['branch_identity_ancient_path_fail'] },
      { text: '顺应形势，暂时妥协', successRate: 0.85, successText: '你选择了妥协，虽然心有不满，但保全了自身。', failText: '你的妥协被利用，陷入了更深的困境。', effects: { luck: 4, intelligence: 3 }, failEffects: { charisma: -5 }, flags: ['branch_identity_ancient_new'], failFlags: ['branch_identity_ancient_new_fail'] },
    ],
    requiredFlags: ['chain_ancient_childhood_0'],
    flags: ['chain_ancient_adult_1'],
    identityExclusive: 'ancient',
    chainPriority: 2,
  },
  {
    id: 'dp_te_01', category: 'trash_exclusive', minAge: 0, maxAge: 6, probability: 0.92,
    templates: [
      '斗气测试那日，{location}的测气石毫无反应。{npc}摇头叹息：\'毫无斗气，与修炼无缘。\'',
      '作为废材，你只能看着同龄人在{location}凝聚斗气。他们嘲笑你是\'萧家的耻辱\'，连最基础的斗技都无法施展。',
    ],
    effects: { strength: -3, intelligence: 3, luck: 2 },
    flags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'dp_te_02', category: 'trash_exclusive', minAge: 4, maxAge: 10, probability: 0.88,
    templates: [
      '你不甘心。每日凌晨，你在{location}的山顶对着朝阳吐纳，直到双臂麻木。{npc}路过时皱眉：\'没有斗气天赋，练这些有何用？\'',
      '你在{location}的古旧书摊淘到了半本残破的《焚诀》。书页泛黄，开篇写道：\'无天赋者，当以异火证道。\'你如获至宝。',
    ],
    effects: { strength: 2, intelligence: 2, luck: 2 },
    requiredFlags: ['trash_childhood_start'],
    flags: ['trash_childhood_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'dp_te_03', category: 'trash_exclusive', minAge: 12, maxAge: 18, probability: 0.85,
    templates: [
      '你按照《焚诀》的方法，尝试吸收一缕兽火。第一次淬体时，剧痛让你昏死过去。醒来时，你发现丹田处有一丝温热在流转。',
      '别的天才一日可完成的修炼，你需要一个月。但你在{location}日复一日，从未间断。{npc}偶然看到你的训练，震惊地说：\'这...这是上古焚诀？\'',
    ],
    effects: { strength: 4, health: 3, special: 2 },
    requiredFlags: ['trash_childhood_1'],
    flags: ['trash_growth_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'dp_te_04', category: 'trash_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '你在{location}救了一位被魔兽重伤的炼药师。他感激之下，传授了你一套独门控火之术——\'九转控火诀\'。',
      '{npc}被你的毅力打动，决定收你为记名弟子。他说：\'我这一生见过无数天才，但像你这样的傻子，还是第一个。\'你终于有了师父。',
    ],
    effects: { strength: 5, health: 4, charisma: 2 },
    requiredFlags: ['trash_growth_0'],
    flags: ['trash_growth_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'dp_te_05', category: 'trash_exclusive', minAge: 18, maxAge: 25, probability: 0.75,
    templates: [
      '经过多年的苦修，你在{location}遇到了一个瓶颈——斗气依然微弱，但你的控火之术已臻化境。一位路过的老者告诉你：\'废材逆袭，需以异火重塑经脉。\'',
      '你在{location}的岩浆旁闭关三月，终于将第一缕兽火融入经脉。出关时，你掌心升起一朵幽蓝火焰——这是属于你的异火！',
    ],
    effects: { strength: 6, intelligence: 3, special: 3 },
    requiredFlags: ['trash_growth_1'],
    flags: ['trash_growth_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'dp_te_06', category: 'trash_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '萧家举办家族大比，你这个\'废材\'报名参加。所有人都嘲笑你：\'一个斗之气一段的废物，也配参加大比？\'',
      '大比第一轮，你对上了斗者级别的对手。对方施展斗技，气焰嚣张。你不躲不闪，掌心异火升腾——对手瞬间败退，全场寂静。',
    ],
    effects: { strength: 6, charisma: 5, special: 3 },
    requiredFlags: ['trash_growth_2'],
    flags: ['trash_adult_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'dp_te_07', category: 'trash_exclusive', minAge: 30, maxAge: 40, probability: 0.72,
    templates: [
      '你的\'废材逆袭\'震惊了斗气大陆。{npc}说你是\'万古以来第一个以废材之身击败斗者的人\'。各大宗门开始重新审视\'异火炼体\'这条被遗忘的道路。',
      '你在{location}建立了一座小小的\'焚天道场\'，专门招收被判定为\'废材\'的孩子。你说：\'天赋决定起点，毅力决定终点。\'',
    ],
    effects: { charisma: 6, intelligence: 4, luck: 3 },
    requiredFlags: ['trash_adult_0'],
    flags: ['trash_adult_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'dp_te_08', category: 'trash_exclusive', minAge: 35, maxAge: 50, probability: 0.68,
    templates: [
      '昔日嘲笑你的同村修士在{location}与你重逢。他依然是斗者，而你已能硬撼斗师。他跪地痛哭：\'当年是我有眼无珠...\'你将他扶起。',
      '{legend}的传承之地开启，你说服众人让你这个\'废材\'也进去试试。他们抱着看笑话的心态同意了——但很快，他们就笑不出来了。',
    ],
    effects: { strength: 5, luck: 4, special: 4 },
    requiredFlags: ['trash_adult_1'],
    flags: ['trash_adult_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'dp_mc_15', category: 'major_choice', minAge: 15, maxAge: 15, probability: 0.98,
    templates: [
      '十五岁那年，你站在{location}的练武场上。萧家长老看着你：\'少年，你的斗气虽然低微，但你的心性难得。现在有三条路摆在你面前。\'',
    ],
    choices: [
      { text: '隐藏实力，暗中积蓄', successRate: 1.0, successText: '你选择了隐藏实力，默默积蓄力量。三年后，当所有人还在嘲笑你是废物时，你已悄然突破到了斗者境界。', failText: '', effects: { intelligence: 6, luck: 5 }, flags: ['major_hide'] },
      { text: '展露锋芒，震慑四方', successRate: 1.0, successText: '你选择了展露锋芒，在{location}一鸣惊人。虽然引来了无数挑战者，但也获得了珍贵的机会。', failText: '', effects: { strength: 6, charisma: 5 }, flags: ['major_show'] },
      { text: '暗中修炼，寻找异火', successRate: 1.0, successText: '你选择了暗中修炼，游历大陆寻找异火的踪迹。虽然路途艰险，但你坚信异火能改变你的命运。', failText: '', effects: { special: 5, intelligence: 4 }, flags: ['major_fire'] },
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  },
  {
    id: 'dp_mc_30', category: 'major_choice', minAge: 30, maxAge: 30, probability: 0.97,
    templates: [
      '三十岁那年，云岚宗与魂殿的阴谋逐渐浮出水面。{npc}找到你：\'萧炎，现在有三条路。挑战云岚宗，正面硬撼；隐忍发育，等待时机；或者结盟抗敌，联合各方势力。\'',
    ],
    choices: [
      { text: '挑战云岚宗，正面硬撼', successRate: 1.0, successText: '你单枪匹马杀上云岚宗，以一己之力对抗整个宗门。虽然伤痕累累，但你最终击败了云岚宗主，一战封神！', failText: '', effects: { strength: 10, charisma: 6, special: 4 }, flags: ['major_challenge'] },
      { text: '隐忍发育，等待时机', successRate: 1.0, successText: '你选择了隐忍。五年后，当你以斗皇之境再度出现时，云岚宗已不再是你的对手。', failText: '', effects: { intelligence: 8, luck: 6 }, flags: ['major_wait_yunlan'] },
      { text: '结盟抗敌，联合各方', successRate: 1.0, successText: '你游走于各大势力之间，成功组建了反魂殿联盟。虽然过程艰辛，但你成为了联盟的核心。', failText: '', effects: { charisma: 10, intelligence: 5 }, flags: ['major_alliance'] },
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  },
  {
    id: 'dp_mc_45', category: 'major_choice', minAge: 45, maxAge: 45, probability: 0.96,
    templates: [
      '四十五岁那年，你已是一方强者。{npc}告诉你：\'斗气大陆的巅峰，需要异火与传承。现在，你有三个选择。\'',
    ],
    choices: [
      { text: '吞噬异火，以火证道', successRate: 1.0, successText: '你冒险吞噬了{legend}的本源之火。九死一生后，你成功融合了三种异火，实力暴涨至斗宗境界！', failText: '', effects: { special: 12, strength: 8, health: -10 }, flags: ['major_devour_fire'] },
      { text: '寻找传承，继承衣钵', successRate: 1.0, successText: '你找到了斗帝留下的传承之地。经过重重考验，你获得了斗帝的衣钵，境界一日千里。', failText: '', effects: { intelligence: 10, strength: 6, luck: 5 }, flags: ['major_legacy'] },
      { text: '建立势力，广纳英才', successRate: 1.0, successText: '你在{location}建立了\'炎盟\'，广纳天下英才。十年后，炎盟成为了斗气大陆最顶尖的势力之一。', failText: '', effects: { charisma: 12, luck: 6 }, flags: ['major_faction'] },
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  },
  {
    id: 'dp_mc_60', category: 'major_choice', minAge: 60, maxAge: 60, probability: 0.95,
    templates: [
      '六十岁那年，魂天帝的阴谋即将得逞，斗气大陆面临灭顶之灾。{npc}跪在你面前：\'只有你能阻止他了。\'',
    ],
    choices: [
      { text: '拯救苍生，牺牲自己', successRate: 1.0, successText: '你燃烧生命与灵魂，以异火本源封印了魂天帝。斗气大陆得救，而你的名字被永远铭记。', failText: '', effects: { charisma: 15, strength: 10, health: -20 }, flags: ['major_save'] },
      { text: '追求力量，超越斗帝', successRate: 1.0, successText: '你选择了追求极致的力量。在生死边缘，你突破了斗帝境界，成为了万古以来的第一位新斗帝！', failText: '', effects: { strength: 15, special: 10, intelligence: 8 }, flags: ['major_power'] },
      { text: '隐居山林，不问世事', successRate: 1.0, successText: '你带着心爱的人隐居山林，过上了平静的生活。虽然放弃了拯救世界，但你获得了真正的幸福。', failText: '', effects: { health: 15, luck: 10, charisma: 5 }, flags: ['major_seclusion'] },
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  },
  {
    id: 'dp_rb_01', category: 'cultivation', minAge: 14, maxAge: 25, probability: 0.9,
    templates: [
      '你在{location}闭关多日，终于触摸到斗者的门槛。{npc}告诉你：\'斗者是修炼的第一步，需要力量>=20、灵魂力>=15。\'',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 0.65, successText: '你孤注一掷，将全部斗气灌注丹田。刹那间，{location}的灵气疯狂涌入——你成功突破到斗者！', failText: '你全力冲击瓶颈，但斗气反噬，经脉受损。虽然保住性命，但修为大跌。', effects: { realm: 1, strength: 5, maxAge: 80 }, failEffects: { health: -25, strength: -5, maxAge: -10 } },
      { text: '稳扎稳打，徐徐图之', successRate: 0.9, successText: '你选择了最稳妥的方式，缓缓磨平瓶颈。最终平安突破到斗者。', failText: '你的闭关被{npc}的仇家打断，突破失败。', effects: { realm: 1, strength: 3, maxAge: 60 }, failEffects: { health: -10, maxAge: -5 } },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。根基更加扎实，为日后突破打下基础。', failText: '', effects: { intelligence: 3, strength: 2 } },
    ],
    flags: ['realm_attempt_1'],
    chainPriority: 5,
  },
  {
    id: 'dp_rb_02', category: 'cultivation', minAge: 16, maxAge: 30, probability: 0.7,
    templates: [
      '你突破到斗者的消息传开。{location}的修士们纷纷前来祝贺。',
      '{npc}欣慰地看着你：\'从斗之气到斗者，你走了五年。这速度，已是中上之资。\'',
    ],
    effects: { charisma: 2, luck: 1 },
    requiredFlags: ['realm_breakthrough_1'],
    flags: ['realm_stable_1'],
    chainPriority: 2,
  },
  {
    id: 'dp_rb_03', category: 'cultivation', minAge: 20, maxAge: 35, probability: 0.85,
    templates: [
      '你在{location}闭关，触摸到斗师的门槛。{npc}说：\'斗师可斗气外放，需要力量>=35、灵魂力>=30。\'',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.6, successText: '你成功突破到斗师！斗气外放，威力惊人！', failText: '突破失败，斗气反噬，修为受损。', effects: { realm: 1, strength: 5, maxAge: 120 }, failEffects: { health: -25, strength: -5, maxAge: -15 } },
      { text: '稳扎稳打', successRate: 0.85, successText: '你平安突破到斗师，根基扎实。', failText: '意外打断，突破失败。', effects: { realm: 1, strength: 3, maxAge: 90 }, failEffects: { health: -10, maxAge: -5 } },
      { text: '放弃突破', successRate: 1, successText: '继续积累，根基更稳。', failText: '', effects: { intelligence: 3, strength: 2 } },
    ],
    requiredFlags: ['realm_breakthrough_1'],
    flags: ['realm_attempt_2'],
    chainPriority: 5,
  },
  {
    id: 'dp_rb_04', category: 'cultivation', minAge: 22, maxAge: 40, probability: 0.65,
    templates: [
      '你突破到斗师，{location}的修士们前来祝贺。',
      '{npc}点头：\'斗师之境，你已跻身强者之列。\'',
    ],
    effects: { charisma: 2, luck: 1 },
    requiredFlags: ['realm_breakthrough_2'],
    flags: ['realm_stable_2'],
    chainPriority: 2,
  },
  {
    id: 'dp_rb_05', category: 'cultivation', minAge: 28, maxAge: 45, probability: 0.8,
    templates: [
      '你在{location}感应到大斗师的契机。{npc}说：\'大斗师可凝聚斗气铠甲，需要力量>=50。\'',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.55, successText: '你凝聚出斗气铠甲，成功突破到大斗师！', failText: '突破失败，经脉受损。', effects: { realm: 1, strength: 6, maxAge: 200 }, failEffects: { health: -30, strength: -5, maxAge: -20 } },
      { text: '稳扎稳打', successRate: 0.8, successText: '你平安突破到大斗师。', failText: '意外打断，突破失败。', effects: { realm: 1, strength: 4, maxAge: 160 }, failEffects: { health: -12, maxAge: -8 } },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 3, strength: 2 } },
    ],
    requiredFlags: ['realm_breakthrough_2'],
    flags: ['realm_attempt_3'],
    chainPriority: 5,
  },
  {
    id: 'dp_rb_06', category: 'cultivation', minAge: 30, maxAge: 50, probability: 0.6,
    templates: [
      '你成为大斗师，{location}震动。',
      '{npc}赞叹：\'大斗师之境，你已是一方高手。\'',
    ],
    effects: { charisma: 3, luck: 2 },
    requiredFlags: ['realm_breakthrough_3'],
    flags: ['realm_stable_3'],
    chainPriority: 2,
  },
  {
    id: 'dp_rb_07', category: 'cultivation', minAge: 35, maxAge: 55, probability: 0.75,
    templates: [
      '你在{location}触摸到斗灵的门槛。{npc}说：\'斗灵可斗气化翼，翱翔天际，需要力量>=70、灵魂力>=60。\'',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.5, successText: '你斗气化翼，成功突破到斗灵，翱翔于{location}上空！', failText: '突破失败，反噬严重。', effects: { realm: 1, strength: 6, maxAge: 300 }, failEffects: { health: -30, strength: -8, maxAge: -20 } },
      { text: '稳扎稳打', successRate: 0.75, successText: '你平安突破到斗灵。', failText: '意外打断，突破失败。', effects: { realm: 1, strength: 4, maxAge: 240 }, failEffects: { health: -12, maxAge: -8 } },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 3, strength: 2 } },
    ],
    requiredFlags: ['realm_breakthrough_3'],
    flags: ['realm_attempt_4'],
    chainPriority: 5,
  },
  {
    id: 'dp_rb_08', category: 'cultivation', minAge: 37, maxAge: 60, probability: 0.55,
    templates: [
      '你突破到斗灵，{location}的灵气因你而沸腾。',
      '{npc}欣慰：\'斗灵之境，你已能独当一面。\'',
    ],
    effects: { charisma: 3, luck: 2 },
    requiredFlags: ['realm_breakthrough_4'],
    flags: ['realm_stable_4'],
    chainPriority: 2,
  },
  {
    id: 'dp_rb_09', category: 'cultivation', minAge: 45, maxAge: 70, probability: 0.7,
    templates: [
      '你在{location}感应到斗王的契机。{npc}说：\'斗王可掌控一方天地之力，需要力量>=90、灵魂力>=80。\'',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.45, successText: '你掌控天地之力，成功突破到斗王！{location}因你而风云变色！', failText: '突破失败，身受重伤。', effects: { realm: 1, strength: 8, maxAge: 400 }, failEffects: { health: -35, strength: -10, maxAge: -25 } },
      { text: '稳扎稳打', successRate: 0.7, successText: '你平安突破到斗王。', failText: '意外打断，突破失败。', effects: { realm: 1, strength: 5, maxAge: 320 }, failEffects: { health: -15, maxAge: -10 } },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 4, strength: 3 } },
    ],
    requiredFlags: ['realm_breakthrough_4'],
    flags: ['realm_attempt_5'],
    chainPriority: 5,
  },
  {
    id: 'dp_rb_10', category: 'cultivation', minAge: 47, maxAge: 75, probability: 0.5,
    templates: [
      '你成为斗王，{location}各方势力纷纷来投。',
      '{npc}感叹：\'斗王之境，你已是一方霸主。\'',
    ],
    effects: { charisma: 4, luck: 3 },
    requiredFlags: ['realm_breakthrough_5'],
    flags: ['realm_stable_5'],
    chainPriority: 2,
  },
  {
    id: 'dp_rb_11', category: 'cultivation', minAge: 55, maxAge: 90, probability: 0.65,
    templates: [
      '你在{location}触摸到斗皇的门槛。{npc}说：\'斗皇可引动天地异象，需要力量>=120、灵魂力>=100。\'',
    ],
    choices: [
      { text: '全力冲击', successRate: 0.4, successText: '你引动天地异象，成功突破到斗皇！整个{location}为之震动！', failText: '突破失败，差点走火入魔。', effects: { realm: 1, strength: 10, maxAge: 600 }, failEffects: { health: -40, strength: -12, maxAge: -30 } },
      { text: '稳扎稳打', successRate: 0.65, successText: '你平安突破到斗皇。', failText: '意外打断，突破失败。', effects: { realm: 1, strength: 6, maxAge: 480 }, failEffects: { health: -18, maxAge: -12 } },
      { text: '放弃突破', successRate: 1, successText: '继续积累。', failText: '', effects: { intelligence: 5, strength: 3 } },
    ],
    requiredFlags: ['realm_breakthrough_5'],
    flags: ['realm_attempt_6'],
    chainPriority: 5,
  },
  {
    id: 'dp_rb_12', category: 'cultivation', minAge: 57, maxAge: 95, probability: 0.45,
    templates: [
      '你突破到斗皇，{location}的修士们跪地朝拜。',
      '{npc}敬畏：\'斗皇之境，你已站在大陆之巅。\'',
    ],
    effects: { charisma: 5, luck: 4 },
    requiredFlags: ['realm_breakthrough_6'],
    flags: ['realm_stable_6'],
    chainPriority: 2,
  },
  {
    id: 'dp_rb_13', category: 'cultivation', minAge: 70, maxAge: 120, probability: 0.55,
    templates: [
      '你在{location}感应到斗帝的契机。{npc}颤抖着说：\'斗帝...那是传说中的境界，需要力量>=150、异火>=100。\'',
    ],
    choices: [
      { text: '全力冲击，向死而生', successRate: 0.35, successText: '你燃烧生命与异火，成功突破到斗帝！万古以来第一位新斗帝诞生！', failText: '突破失败，肉身崩溃，修为尽废。', effects: { realm: 1, strength: 15, special: 10, maxAge: 9999 }, failEffects: { health: -50, strength: -20, maxAge: -50 } },
      { text: '稳扎稳打，借天地之力', successRate: 0.6, successText: '你借天地之力，平安突破到斗帝。', failText: '天地之力反噬，突破失败。', effects: { realm: 1, strength: 10, special: 6, maxAge: 800 }, failEffects: { health: -25, maxAge: -20 } },
      { text: '放弃突破，守护当下', successRate: 1, successText: '你选择了守护。虽然没有成为斗帝，但你守护了所有珍视之人。', failText: '', effects: { charisma: 8, health: 10, luck: 6 } },
    ],
    requiredFlags: ['realm_breakthrough_6'],
    flags: ['realm_attempt_7'],
    chainPriority: 5,
  },
  {
    id: 'dp_rb_14', category: 'cultivation', minAge: 72, maxAge: 130, probability: 0.4,
    templates: [
      '你成为斗帝，{location}的天地因你而臣服。',
      '{npc}跪拜：\'参见斗帝大人！\'你的传说，将永载史册。',
    ],
    effects: { charisma: 10, luck: 8, special: 5 },
    requiredFlags: ['realm_breakthrough_7'],
    flags: ['realm_stable_7'],
    chainPriority: 2,
  },
];