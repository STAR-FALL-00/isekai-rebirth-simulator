import type { EventTemplate } from './types';

// 某科学的超电磁炮 — 约100个核心事件模板
// World: railgun | Prefix: rg_ | Theme: #F39C12
// Stats map: 体能→strength, 计算力→intelligence, 人缘→charisma, 开发潜力→special, 生命力→health, 能力等级→luck
// Realms: 1无能力者 2低能力者 3异能力者 4强能力者 5大能力者 6超能力者 7绝对能力者 8系统外存在

export const railgunTemplates: EventTemplate[] = [
  // ═══════════════════════════════════════════════════════════════
  // 通用 childhood (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ch_01', category: 'childhood', minAge: 0, maxAge: 5, probability: 0.35,
    templates: [
      '你出生在学园都市的某所医院中。初次接受能力开发检测时，仪器发出了刺耳的警报——你的大脑计算力远超同龄人。{npc}震惊地看着数据，喃喃道："这可能是LEVEL 5的潜质。"',
      '你的童年在{location}的学区中度过。其他孩子在玩耍时，你已经开始拆解废弃的个人现实维持装置。{npc}说你是天生的能力者天才。',
      '你降生的那一刻，{location}的所有能力测量设备出现了短暂的共振现象。研究人员私下议论："那是超能力降临的预兆。"',
    ],
    effects: { special: 6, intelligence: 3 },
  },
  {
    id: 'rg_ch_02', category: 'childhood', minAge: 3, maxAge: 8, probability: 0.55,
    templates: [
      '你在{location}的废墟中捡到了一个破旧的御坂妹妹玩偶——那是旧时代流行的人形终端。你花了三个月把它修好，它成了你最好的朋友。',
      '{npc}送给你一个旧时代的能力开发模拟器。你每天都练习到深夜，能力评分不知不觉中超过了所有同龄人。',
      '你在{location}目睹了一场能力者之间的冲突。一枚失控的电磁脉冲在你身旁爆炸，但你奇迹般地毫发无伤。那一刻，你感觉到体内有什么东西在苏醒。',
    ],
    effects: { strength: 3, luck: 2 },
  },
  {
    id: 'rg_ch_03', category: 'childhood', minAge: 5, maxAge: 10, probability: 0.75,
    templates: [
      '你和同龄人在{location}玩能力者对战游戏，你总是获胜。但你也渐渐发现，自己和"普通"孩子有些不同——你的反应速度太快了。',
      '{npc}教你基础体能训练，你学得很快。虽然只是入门，但你的动作已经像模像样。',
      '你在{location}读到了关于"绝对能力者进化计划"的资料，第一次意识到学园都市的暗面有多残酷。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用 growth (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_gr_01', category: 'growth', minAge: 14, maxAge: 20, probability: 0.25,
    templates: [
      '你在{location}经历了第一次实战能力测试。当危机来临时，你眼中闪过一道电光——你的能力觉醒了！计算精度瞬间提升数倍。',
      '一场意外中，你在{location}徒手阻止了一名失控的能力者。你的表现引起了学园的注意。',
      '{legend}的遗产在{location}与你相遇，你继承了前代超能力者的意志。',
    ],
    effects: { luck: 10, special: 8, strength: 5 },
  },
  {
    id: 'rg_gr_02', category: 'growth', minAge: 13, maxAge: 22, probability: 0.45,
    templates: [
      '你在{location}的能力开发所中第一次接受真正的超能力训练。脑波监测仪关闭的瞬间，你感到了前所未有的使命感。',
      '{npc}传授你战术计算的基础知识。你花了整整一年才掌握大规模作战演算。',
      '你在{location}遇到了一生的宿敌，你们的能力相互碰撞，不分胜负。',
    ],
    effects: { intelligence: 5, special: 4 },
  },
  {
    id: 'rg_gr_03', category: 'growth', minAge: 15, maxAge: 25, probability: 0.65,
    templates: [
      '你每天在{location}勤奋训练，虽然进步缓慢但根基扎实。',
      '{npc}督促你学习能力维持理论，你不敢懈怠。',
      '你在{location}读了很多能力开发文献，对超能力理论有了更深的理解。',
      '平平淡淡的一年，你在{location}默默积累着。',
    ],
    effects: { strength: 2, intelligence: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用 adult (2)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ad_01', category: 'adult', minAge: 26, maxAge: 40, probability: 0.35,
    templates: [
      '你在{location}建立了自己的小队，广纳贤才，一时间名声大噪。',
      '你参与了{legend}相关的大规模事件，在关键时刻力挽狂澜。',
      '你在{location}指挥了一场关键的能力者冲突，各方势力纷纷来投。',
    ],
    effects: { charisma: 8, intelligence: 5, special: 5 },
  },
  {
    id: 'rg_ad_02', category: 'adult', minAge: 25, maxAge: 50, probability: 0.60,
    templates: [
      '你在{location}处理日常事务，势力稳步发展。',
      '{npc}来找你帮忙，你出手解决了他的难题。',
      '你在{location}度过了平静的一年，能力稳步提升。',
      '平平淡淡的一年，你在{location}默默研究能力理论。',
    ],
    effects: { strength: 2, intelligence: 2, special: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 通用 elder (1)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_el_01', category: 'elder', minAge: 50, maxAge: 80, probability: 0.55,
    templates: [
      '你在{location}的研究所中钻研更高深的能力理论与脑科学，试图突破当前境界的限制。',
      '你游历学园都市各学区，在{location}见识了各种奇异的能力现象，眼界大开。',
      '你开始招收学生，在{location}传授毕生所学的能力开发与运用经验。',
    ],
    effects: { intelligence: 3, special: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 战斗 combat (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_cb_01', category: 'combat', minAge: 18, maxAge: 35, probability: 0.20,
    templates: [
      '你在{location}以一己之力对抗十位敌能力者，最终大获全胜，一战成名！',
      '{legend}的精英部队找上了你，你在{location}展开惊天大战，竟越级将其击溃！',
      '你为了保护{location}的平民，独自对抗入侵的{legend}势力，创造了不可能的奇迹。',
    ],
    effects: { strength: 12, charisma: 8, health: -10 },
  },
  {
    id: 'rg_cb_02', category: 'combat', minAge: 16, maxAge: 40, probability: 0.40,
    templates: [
      '你参与了一场改变{location}格局的大规模能力者冲突，立下赫赫战功。',
      '{npc}挑战你的能力，你们在{location}大战三百回合，最终你险胜一招。',
      '你在{location}发现了{legend}留下的战斗试炼场，通过了生死考验。',
    ],
    effects: { strength: 8, charisma: 4, health: -5 },
  },
  {
    id: 'rg_cb_03', category: 'combat', minAge: 15, maxAge: 30, probability: 0.60,
    templates: [
      '你在{location}遭遇敌对能力者，展开了一场生死搏斗，最终险胜。',
      '你和{npc}在{location}切磋格斗技，双方都获益匪浅。',
      '你为了保护同伴，在{location}与敌人激战，受了轻伤。',
    ],
    effects: { strength: 5, health: -3 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 恋爱/羁绊 romance (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_rm_01', category: 'romance', minAge: 16, maxAge: 28, probability: 0.18,
    templates: [
      '你在{location}与{npc}相遇的瞬间，路边的自动贩卖机突然喷出了所有的饮料——那是你们能力共鸣的征兆。',
      '{npc}为了救你，不惜用自己的能力挡下了致命一击。你跪在{location}的医务室中发誓：此生不负。',
      '你们的故事被{legend}记载，成为了{location}永恒的传说。',
    ],
    effects: { charisma: 10, luck: 8, health: 5 },
  },
  {
    id: 'rg_rm_02', category: 'romance', minAge: 18, maxAge: 32, probability: 0.35,
    templates: [
      '你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。',
      '{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。',
      '你们经历了{legend}的考验，感情反而更加坚不可摧。',
    ],
    effects: { charisma: 6, luck: 4 },
  },
  {
    id: 'rg_rm_03', category: 'romance', minAge: 20, maxAge: 40, probability: 0.55,
    templates: [
      '你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。',
      '{npc}送你一件定情信物，你珍藏在身边。',
      '你们一起在{location}经历了危险，感情更加深厚。',
    ],
    effects: { charisma: 3, luck: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 修炼/提升 cultivation (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_cult_01', category: 'cultivation', minAge: 20, maxAge: 45, probability: 0.20,
    templates: [
      '你在{location}的能力开发所中进行三日三夜的深度冥想，出关时眼中电光四射——你竟在实战中领悟了{legend}的奥义！',
      '一场AIM力场风暴夜，你在{location}被高能辐射击中非但没死，反而解锁了大脑中的隐藏计算区域！',
      '{legend}的数据残魂在{location}与你相遇，将毕生能力感悟传授于你。',
    ],
    effects: { special: 12, intelligence: 10, strength: 5 },
  },
  {
    id: 'rg_cult_02', category: 'cultivation', minAge: 18, maxAge: 40, probability: 0.40,
    templates: [
      '你在{location}钻研三年，终于突破了困扰多年的能力瓶颈，实力大增！',
      '{npc}带你外出实战训练，你在{location}击败了一个强敌，获得了珍贵的战利品。',
      '你发现了{legend}留下的试炼场，通过考验后获得了意想不到的收获。',
    ],
    effects: { strength: 6, special: 5 },
  },
  {
    id: 'rg_cult_03', category: 'cultivation', minAge: 15, maxAge: 35, probability: 0.60,
    templates: [
      '你在{location}按部就班地训练和研究，虽然没有突破但根基更加稳固。',
      '{npc}检查了你的能力数据，表示满意。',
      '你在{location}研读能力开发文献，对一些超能力理论有了新的理解。',
    ],
    effects: { special: 2, intelligence: 1 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 探索 exploration (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ex_01', category: 'exploration', minAge: 20, maxAge: 45, probability: 0.18,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的核心科技传承，获得了改变命运的机缘！',
      '你在{location}找到了通往另一个学区的秘密通道，{legend}的秘密向你敞开。',
      '你解开了一个困扰世人多年的能力谜题，{location}的真相让你震惊。',
    ],
    effects: { luck: 10, intelligence: 8, special: 6 },
  },
  {
    id: 'rg_ex_02', category: 'exploration', minAge: 18, maxAge: 40, probability: 0.38,
    templates: [
      '你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。',
      '你探索了一处危险的{location}，九死一生后带回了珍贵的能力样本。',
      '{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。',
    ],
    effects: { luck: 6, strength: 4 },
  },
  {
    id: 'rg_ex_03', category: 'exploration', minAge: 15, maxAge: 35, probability: 0.58,
    templates: [
      '你深入{location}探险，发现了未知的秘密。',
      '你在{location}找到了一些有价值的物资，收获颇丰。',
      '你在{location}迷路了，却意外发现了一处隐蔽的研究设施。',
    ],
    effects: { luck: 4, strength: 2 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 世界主线 world_story (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ws_01', category: 'world_story', minAge: 30, maxAge: 55, probability: 0.20,
    templates: [
      '{legend}的封印彻底破碎，整个学园都市陷入了前所未有的动荡，你被卷入了漩涡中心！',
      '一场席卷整个{location}的大事件爆发了，各方势力首当其冲，你必须做出选择。',
      '树状图设计者的规则开始改变，{legend}的意志降临，所有能力者都受到了影响。',
    ],
    effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 },
  },
  {
    id: 'rg_ws_02', category: 'world_story', minAge: 25, maxAge: 50, probability: 0.40,
    templates: [
      '你发现{location}隐藏着改变战局的秘密，各方势力为此展开了明争暗斗。',
      '{npc}告诉你一个关于能力者起源的惊天秘密，你的世界观被彻底颠覆。',
      '传说中的{legend}即将降临，所有阵营都在做准备，{location}的气氛紧张到了极点。',
    ],
    effects: { intelligence: 6, charisma: 4 },
  },
  {
    id: 'rg_ws_03', category: 'world_story', minAge: 20, maxAge: 45, probability: 0.60,
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
    id: 'rg_hd_01', category: 'hidden', minAge: 45, maxAge: 80, probability: 0.08,
    templates: [
      '你超越了{legend}，看到了学园都市之外的真相——原来一切都只是...',
      '你发现了这个学园的运行规则，{location}只是一场巨大实验的一角。',
      '{legend}的真正身份让你震惊不已，你终于理解了能力者体系的根源。',
    ],
    effects: { intelligence: 15, special: 10 },
    conditions: [{ stat: 'intelligence', min: 120 }],
  },
  {
    id: 'rg_hd_02', category: 'hidden', minAge: 35, maxAge: 70, probability: 0.25,
    templates: [
      '你在{location}发现了一个被禁止入内的区域，里面藏着惊人的秘密。',
      '你解开了{legend}留下的谜题，获得了一份隐藏的能力传承。',
      '{npc}告诉你一个只有极少数人知道的秘密，你感到责任重大。',
    ],
    effects: { intelligence: 10, special: 8 },
    conditions: [{ stat: 'intelligence', min: 100 }],
  },

  // ═══════════════════════════════════════════════════════════════
  // 死亡 death (3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_dt_01', category: 'death', minAge: 15, maxAge: 35, probability: 0.12,
    templates: [
      '你在{location}遭遇了暗部的总攻，无数能力从你身旁掠过。虽然你拼尽全力，但最终还是被一位强大的能力者击中——在生命的最后一刻，你看到了金色的电光。',
      '{legend}亲自出手，你在{location}与之展开了最终决战。你输了，但你的勇气让所有目击者铭记。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'rg_dt_02', category: 'death', minAge: 25, maxAge: 55, probability: 0.18,
    templates: [
      '你为了保护{location}的平民，用自己的能力挡在了失控的实验体前。你的身体与能力一同化为了光芒，但那片街区得救了。',
      '{npc}背叛了你。当你在{location}的研究室中转身时，一发精准的能力贯穿了你的胸口。你倒下时，只看到TA冷漠的背影。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'rg_dt_03', category: 'death', minAge: 50, maxAge: 90, probability: 0.22,
    templates: [
      '你在{location}的研究所中安详地闭上了眼睛。你的一生见证了无数次冲突与和平，临终前，你说："如果还有来生，我希望学园都市不再需要能力等级。"',
      '你为了掩护队友撤退，独自殿后。当最后一个敌人倒下时，你的能力也已经耗尽。你微笑着打开通讯频道："任务完成。"',
    ],
    effects: { health: -100 },
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 identity_exclusive — academy_student 常盘台学生 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ie_academy_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在学园都市的贵族学区。从出生那一刻起，你就被寄予厚望——常盘台中学是所有能力者少女的终极梦想。',
      '作为未来的常盘台学生，你从小就在{location}的精英私塾中学习。你的同学都是名门闺秀，竞争异常激烈。',
    ],
    effects: { special: 5, intelligence: 3 },
    flags: ['chain_academy_childhood_0'],
    identityExclusive: 'academy_student',
  },
  {
    id: 'rg_ie_academy_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的能力测试中展现了惊人的潜力。一位匿名导师评价道："她有LEVEL 4以上的潜质，甚至可能触及LEVEL 5的领域。"',
      '你在{location}的图书馆发现了一本被禁的书——《树状图设计者的真相》。书中的内容让你彻夜难眠。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_academy_childhood_1'],
    identityExclusive: 'academy_student',
  },
  {
    id: 'rg_ie_academy_03', category: 'identity_exclusive', minAge: 12, maxAge: 18, probability: 0.80,
    templates: [
      '你以优异的成绩考入了常盘台中学。在{location}的入学典礼上，你第一次见到了传说中的超电磁炮——御坂美琴。',
      '你在{location}的能力开发课程中遇到了瓶颈。一位神秘的学姐出现，用一句话点醒了你："能力不是计算出来的，是相信出来的。"',
    ],
    effects: { special: 6 },
    flags: ['chain_academy_growth_0'],
    requiredFlags: ['chain_academy_childhood_0'],
    identityExclusive: 'academy_student',
    chainPriority: 1,
  },
  {
    id: 'rg_ie_academy_04', category: 'identity_exclusive', minAge: 16, maxAge: 24, probability: 0.75,
    templates: [
      '你成为了常盘台的风云人物。在{location}的能力展示会上，你的表演惊艳了全场。各大研究机构纷纷向你伸出橄榄枝。',
      '你开始质疑常盘台的教育体制。在{location}的深夜，你发现了一些关于"绝对能力者进化计划"的线索。',
    ],
    effects: { charisma: 5, intelligence: 4 },
    flags: ['chain_academy_growth_1'],
    requiredFlags: ['chain_academy_childhood_0'],
    identityExclusive: 'academy_student',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — judgement 风纪委员 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ie_judgement_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在学园都市的治安维护者家庭。你的父母都是风纪委员，你的童年充满了关于正义的故事。',
      '作为风纪委员之子，你从小就见惯了犯罪现场。五岁时，你帮助一位迷路的老奶奶找到了家。{npc}说："正义不需要超能力，只需要一颗心。"',
    ],
    effects: { strength: 3, charisma: 3 },
    flags: ['chain_judgement_childhood_0'],
    identityExclusive: 'judgement',
  },
  {
    id: 'rg_ie_judgement_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的学校中帮助老师维持秩序。你的公正和勇敢赢得了同学们的尊敬。',
      '{npc}是一位退役的风纪委员，他教你一个道理："真正的正义不是惩罚坏人，而是保护好人。"',
    ],
    effects: { strength: 4, charisma: 3 },
    flags: ['chain_judgement_childhood_1'],
    identityExclusive: 'judgement',
  },
  {
    id: 'rg_ie_judgement_03', category: 'identity_exclusive', minAge: 12, maxAge: 18, probability: 0.80,
    templates: [
      '你以优异的成绩通过了风纪委员的选拔考试。在{location}的宣誓仪式上，你说："我将成为这座城市的盾牌。"',
      '你在{location}的第一次巡逻中遇到了一个小偷。虽然你的能力不强，但你用智慧和勇气成功制服了他。',
    ],
    effects: { strength: 5, intelligence: 3 },
    flags: ['chain_judgement_growth_0'],
    requiredFlags: ['chain_judgement_childhood_0'],
    identityExclusive: 'judgement',
    chainPriority: 1,
  },
  {
    id: 'rg_ie_judgement_04', category: 'identity_exclusive', minAge: 16, maxAge: 24, probability: 0.75,
    templates: [
      '你成为了风纪委员中的精英。在{location}的一次重大事件中，你单枪匹马阻止了一场大规模暴乱。',
      '你开始接触到学园都市的暗面。在{location}的深夜，你发现了一些关于暗部操作的线索。你开始怀疑：风纪委员维护的，真的是正义吗？',
    ],
    effects: { charisma: 5, strength: 4 },
    flags: ['chain_judgement_growth_1'],
    requiredFlags: ['chain_judgement_childhood_0'],
    identityExclusive: 'judgement',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — dark_side 暗部成员 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ie_dark_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你的父母在学园都市的暗部冲突中失踪。你被{location}的地下组织收养，从小听着"生存"的故事长大。',
      '作为暗部的孩子，你七岁就开始学习潜行和情报收集。{npc}是你的导师，他说："在这个世界，只有情报和力量是真实的。"',
    ],
    effects: { strength: 3, intelligence: 3 },
    flags: ['chain_dark_childhood_0'],
    identityExclusive: 'dark_side',
  },
  {
    id: 'rg_ie_dark_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的地下基地中度过了整个童年。你的玩伴都是暗部的孩子，你们的游戏是模拟暗杀和情报战。',
      '你第一次执行侦察任务，潜入了{location}的研究设施。虽然只带回了一些照片，但你证明了自己的价值。',
    ],
    effects: { intelligence: 4, strength: 2 },
    flags: ['chain_dark_childhood_1'],
    identityExclusive: 'dark_side',
  },
  {
    id: 'rg_ie_dark_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.80,
    templates: [
      '十五岁那年，你正式加入了暗部。第一个任务是清除{location}的一名叛逃研究员。当你面对目标时，你发现自己的手在颤抖。',
      '你在{location}的暗部行动中结识了其他地下势力。你们原本互不信任，但共同的敌人让你们走到了一起。',
    ],
    effects: { strength: 5, intelligence: 3 },
    flags: ['chain_dark_growth_0'],
    requiredFlags: ['chain_dark_childhood_0'],
    identityExclusive: 'dark_side',
    chainPriority: 1,
  },
  {
    id: 'rg_ie_dark_04', category: 'identity_exclusive', minAge: 18, maxAge: 28, probability: 0.75,
    templates: [
      '你成为了暗部的精英成员。在{location}的一次行动中，你成功窃取了一份关于"绝对能力者进化计划"的机密文件。',
      '你开始质疑暗部的手段。一次行动中，你们误伤了一群无辜的平民。{npc}说："如果我们变成和他们一样的怪物，任务还有什么意义？"',
    ],
    effects: { charisma: 5, strength: 4 },
    flags: ['chain_dark_growth_1'],
    requiredFlags: ['chain_dark_childhood_0'],
    identityExclusive: 'dark_side',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — researcher 研究员 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ie_researcher_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在学园都市的科研机构中。你的父母都是顶尖的能力开发研究员，你的玩具是显微镜和脑波仪。',
      '作为研究员之子，你从小就对能力的原理充满了好奇。七岁时，你拆解了家里的家务机器人，成功将它改造成了一台小型AIM力场探测器。',
    ],
    effects: { intelligence: 6 },
    flags: ['chain_researcher_childhood_0'],
    identityExclusive: 'researcher',
  },
  {
    id: 'rg_ie_researcher_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的科学院附属学校中发现了自己对个人现实的独特见解。你的论文被一位匿名教授高度评价。',
      '你偷偷研究了树状图设计者的数据。{npc}发现后严厉警告你："那东西不是你能碰的，它会毁了你的一生。"',
    ],
    effects: { intelligence: 5, special: 2 },
    flags: ['chain_researcher_childhood_1'],
    identityExclusive: 'researcher',
  },
  {
    id: 'rg_ie_researcher_03', category: 'identity_exclusive', minAge: 18, maxAge: 26, probability: 0.80,
    templates: [
      '你被分配到{location}的研究中心，参与了新型能力开发药的研制。你提出的方案让药效提升了30%。',
      '你在研究AIM力场时，发现了一些被高层刻意隐瞒的数据。原来，学园都市的能力者等级体系并非完全科学——其中掺杂了政治因素。',
    ],
    effects: { intelligence: 7, special: 4 },
    flags: ['chain_researcher_growth_0'],
    requiredFlags: ['chain_researcher_childhood_0'],
    identityExclusive: 'researcher',
    chainPriority: 1,
  },
  {
    id: 'rg_ie_researcher_04', category: 'identity_exclusive', minAge: 25, maxAge: 38, probability: 0.75,
    templates: [
      '你的研究成果被军方征用，开发出了新型能力强化剂。当你看到它被用于暗部的人体实验时，你开始质疑科学的边界。',
      '你在{location}建立了一个独立研究所，致力于寻找安全的超能力开发方法。你说："科学不应该服务于黑暗，而应该服务于生命。"',
    ],
    effects: { intelligence: 8, charisma: 4 },
    flags: ['chain_researcher_growth_1'],
    requiredFlags: ['chain_researcher_childhood_0'],
    identityExclusive: 'researcher',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — level_0 无能力者 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ie_level0_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在学园都市的普通家庭。能力开发检测结果显示：你的大脑计算域完全无法产生个人现实——你是LEVEL 0，无能力者。',
      '作为无能力者，你从小就被同学嘲笑。在{location}的学校里，能力者孩子们叫你"缺陷品"。你握紧了拳头，发誓要证明自己。',
    ],
    effects: { strength: 4, charisma: 2 },
    flags: ['chain_level0_childhood_0'],
    identityExclusive: 'level_0',
  },
  {
    id: 'rg_ie_level0_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的操场上被一位LEVEL 3的能力者欺负。他没有使用能力，只是用拳头。你被打倒了七次，但第八次你站了起来。',
      '{npc}是一位退役的武术家，他看到了你的毅力，决定收你为徒。他说："能力不是一切。真正的强大在这里。"他指了指自己的心口。',
    ],
    effects: { strength: 5, charisma: 2 },
    flags: ['chain_level0_childhood_1'],
    identityExclusive: 'level_0',
  },
  {
    id: 'rg_ie_level0_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.80,
    templates: [
      '十五岁那年，你参加了学园都市的格斗大赛。面对众多能力者对手，你没有退缩。最终，你以纯体术打进了决赛。',
      '你在{location}遇到了上条当麻——那位以"幻想杀手"闻名的无能力者。他说："我也曾被嘲笑，但我从未放弃。你也一样。"',
    ],
    effects: { strength: 6, charisma: 3 },
    flags: ['chain_level0_growth_0'],
    requiredFlags: ['chain_level0_childhood_0'],
    identityExclusive: 'level_0',
    chainPriority: 1,
  },
  {
    id: 'rg_ie_level0_04', category: 'identity_exclusive', minAge: 18, maxAge: 28, probability: 0.75,
    templates: [
      '你成为了学园都市中无能力者的希望。在{location}的街头，你用自己的拳头保护了许多被能力者欺负的弱者。',
      '你开始质疑学园都市的等级制度。你说："LEVEL 0不是缺陷，是另一种可能。"你的言论在学园都市的无能力者中引起了巨大反响。',
    ],
    effects: { charisma: 6, strength: 4 },
    flags: ['chain_level0_growth_1'],
    requiredFlags: ['chain_level0_childhood_0'],
    identityExclusive: 'level_0',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — esper 能力者 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ie_esper_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在学园都市的能力者培育中心。从出生那一刻起，你的大脑就被优化到了极致。三岁时，你已经开始学习高等数学和量子物理。',
      '作为能力者，你从小就能感受到自己的与众不同。你的计算力、反应速度、体能都远超同龄人。{npc}说你是"完美的进化体"。',
    ],
    effects: { special: 5, intelligence: 3 },
    flags: ['chain_esper_childhood_0'],
    identityExclusive: 'esper',
  },
  {
    id: 'rg_ie_esper_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的能力者学校中遇到了第一次挑战。一位老师的观点让你困惑："能力真的是人类的终极形态吗？"',
      '你在{location}的图书馆发现了一本被禁的书——《能力者与非能力者共存论》。书中的观点让你彻夜难眠。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_esper_childhood_1'],
    identityExclusive: 'esper',
  },
  {
    id: 'rg_ie_esper_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.80,
    templates: [
      '十五岁那年，你第一次使用能力保护了身边的人。当电磁屏障展开的那一刻，你感到一种前所未有的充实感。',
      '你在{location}的实战中遇到了一位神秘的能力者。对方的计算力出神入化，你险些被击败。战后你才知道，那是一位传说中的LEVEL 5。',
    ],
    effects: { special: 6, strength: 3 },
    flags: ['chain_esper_growth_0'],
    requiredFlags: ['chain_esper_childhood_0'],
    identityExclusive: 'esper',
    chainPriority: 1,
  },
  {
    id: 'rg_ie_esper_04', category: 'identity_exclusive', minAge: 18, maxAge: 28, probability: 0.75,
    templates: [
      '你成为了小队的核心能力者。在{location}的战斗中，你以一敌三，成功掩护了友军撤退。你的名字开始出现在各学区的公告中。',
      '你在{location}遇到了一位和你实力相当的能力者对手。你们多次交锋，逐渐形成了一种奇怪的默契。',
    ],
    effects: { special: 7, intelligence: 3 },
    flags: ['chain_esper_growth_1'],
    requiredFlags: ['chain_esper_childhood_0'],
    identityExclusive: 'esper',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — teacher 教师 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ie_teacher_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一个教师家庭。你的父母都是学园都市的老师，你的童年在粉笔灰和教科书的气味中度过。',
      '作为教师之子，你从小就被教导知识的力量。五岁时，你教一只流浪猫做算术——虽然它没学会，但你发现自己喜欢教人。',
    ],
    effects: { intelligence: 5, charisma: 2 },
    flags: ['chain_teacher_childhood_0'],
    identityExclusive: 'teacher',
  },
  {
    id: 'rg_ie_teacher_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的学校中帮助成绩差的同学补习。你的耐心和清晰讲解让所有人都受益匪浅。',
      '{npc}是一位退役的能力开发导师，他告诉你："好老师不是把学生变得和自己一样，而是帮助他们成为最好的自己。"',
    ],
    effects: { charisma: 4, intelligence: 3 },
    flags: ['chain_teacher_childhood_1'],
    identityExclusive: 'teacher',
  },
  {
    id: 'rg_ie_teacher_03', category: 'identity_exclusive', minAge: 22, maxAge: 30, probability: 0.80,
    templates: [
      '你成为了一名正式教师。在{location}的学校里，你不仅要教授知识，还要帮助学生应对能力开发的压力。',
      '你班上的一个学生因为能力开发失败而陷入绝望。你花了整整三个月帮助他重建信心，最终他成功觉醒了自己的能力。',
    ],
    effects: { charisma: 6, intelligence: 4 },
    flags: ['chain_teacher_growth_0'],
    requiredFlags: ['chain_teacher_childhood_0'],
    identityExclusive: 'teacher',
    chainPriority: 1,
  },
  {
    id: 'rg_ie_teacher_04', category: 'identity_exclusive', minAge: 28, maxAge: 40, probability: 0.75,
    templates: [
      '你成为了{location}最受欢迎的教师。无论是能力者还是无能力者，在你的课堂上都受到了平等的对待。',
      '你开始在{location}推动教育改革，主张"能力等级不应决定学生的未来"。你的主张遭到了高层的打压，但学生们站了出来支持你。',
    ],
    effects: { charisma: 7, intelligence: 5 },
    flags: ['chain_teacher_growth_1'],
    requiredFlags: ['chain_teacher_childhood_0'],
    identityExclusive: 'teacher',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — merchant_rg 商人 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ie_merchant_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在学园都市的商业区。你的父母经营着一家能力开发道具店，你的童年在柜台和货架之间度过。',
      '作为商人之子，你从小就学会了如何与人讨价还价。七岁时，你成功地将一块普通的电池以三倍价格卖给了一位LEVEL 2能力者。',
    ],
    effects: { charisma: 5, intelligence: 2 },
    flags: ['chain_merchant_childhood_0'],
    identityExclusive: 'merchant_rg',
  },
  {
    id: 'rg_ie_merchant_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的学校中开展了第一次"商业实践"——贩卖自制的学习资料。虽然被老师批评，但你赚到了人生的第一桶金。',
      '{npc}是一位黑市商人，他看中了你的商业天赋，决定教你一些"正规的商业技巧"。',
    ],
    effects: { charisma: 4, intelligence: 3 },
    flags: ['chain_merchant_childhood_1'],
    identityExclusive: 'merchant_rg',
  },
  {
    id: 'rg_ie_merchant_03', category: 'identity_exclusive', minAge: 16, maxAge: 24, probability: 0.80,
    templates: [
      '你正式继承了家族生意。在{location}的商业竞争中，你凭借敏锐的眼光和灵活的头脑，让店铺的营业额翻了三倍。',
      '你在{location}发现了能力开发道具市场的一个空白——为无能力者设计的辅助装备。这个发现让你大赚了一笔。',
    ],
    effects: { charisma: 6, intelligence: 4 },
    flags: ['chain_merchant_growth_0'],
    requiredFlags: ['chain_merchant_childhood_0'],
    identityExclusive: 'merchant_rg',
    chainPriority: 1,
  },
  {
    id: 'rg_ie_merchant_04', category: 'identity_exclusive', minAge: 22, maxAge: 35, probability: 0.75,
    templates: [
      '你的商业帝国扩展到了整个学园都市。在{location}的新店开业典礼上，连一些LEVEL 5能力者都送来了贺礼。',
      '你开始涉足情报交易。{npc}警告你："情报比能力更危险，一旦卷入，就很难全身而退。"',
    ],
    effects: { charisma: 7, intelligence: 5 },
    flags: ['chain_merchant_growth_1'],
    requiredFlags: ['chain_merchant_childhood_0'],
    identityExclusive: 'merchant_rg',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — hacker_rg 黑客 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ie_hacker_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在学园都市的普通家庭。但与其他孩子不同，你学习说话的同时就在学习编程语言。三岁时，你黑进了家里的智能冰箱。',
      '作为天生的黑客，你八岁就破解了{location}的学校防火墙，修改了所有学生的成绩单。{npc}——学园都市网络安全科的探员——第一次敲响了你的家门。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_hacker_childhood_0'],
    identityExclusive: 'hacker_rg',
  },
  {
    id: 'rg_ie_hacker_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的废弃网络中心发现了一台古老的终端。它没有连接任何网络，但当你触摸键盘时，你的意识被瞬间吸入了一个由数据构成的世界。',
      '那个数据世界中有一个自称为"幽灵"的存在。它说："你是天生的数字幽灵，可以在网络与现实的夹缝中生存。跟我学，我教你真正的技术。"',
    ],
    effects: { special: 5 },
    flags: ['chain_hacker_childhood_1'],
    identityExclusive: 'hacker_rg',
  },
  {
    id: 'rg_ie_hacker_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.80,
    templates: [
      '十五岁那年，你已经可以在{location}的公共网络中来去自如。你发现了学园都市的一个秘密：所有学生的脑波数据都被暗中监控着。',
      '你加入了地下黑客组织"零日"。他们在{location}的秘密服务器里建立了一个"自由数据港"——一个没有审查、没有监控的数字乌托邦。',
    ],
    effects: { special: 6 },
    flags: ['chain_hacker_growth_0'],
    requiredFlags: ['chain_hacker_childhood_0'],
    identityExclusive: 'hacker_rg',
    chainPriority: 1,
  },
  {
    id: 'rg_ie_hacker_04', category: 'identity_exclusive', minAge: 20, maxAge: 30, probability: 0.75,
    templates: [
      '你成为了学园都市最令人闻风丧胆的黑客。学园都市管理层开出天价悬赏你的人头，但没有人能找到你的真身。',
      '{npc}代表一家 mega-corporation 向你提出了交易：为他们工作，获取无限的资源和保护；或者继续被追捕，直到某次失误让你万劫不复。',
    ],
    effects: { intelligence: 7, charisma: 3 },
    flags: ['chain_hacker_growth_1'],
    requiredFlags: ['chain_hacker_childhood_0'],
    identityExclusive: 'hacker_rg',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 身份专属 — reporter_rg 记者 (4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_ie_reporter_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '你出生在一个记者家庭。你的父母都是学园都市的调查记者，你的童年充满了他们的故事——关于真相、谎言和两者之间的一切。',
      '作为记者之子，你从小就被教育："真相是武器，也是盾牌。"{npc}是你母亲的同事，他教你如何用镜头和文字记录这个世界。',
    ],
    effects: { intelligence: 5, charisma: 2 },
    flags: ['chain_reporter_childhood_0'],
    identityExclusive: 'reporter_rg',
  },
  {
    id: 'rg_ie_reporter_02', category: 'identity_exclusive', minAge: 8, maxAge: 14, probability: 0.85,
    templates: [
      '你在{location}的学校创办了校报。第一期就揭露了食堂的卫生问题，引起了校方的不满。但你收到了同学们的支持。',
      '你偷偷采访了一位退役研究员。他告诉你能力开发的真相与官方宣传完全不同。你不知道该不该发表这篇报道。',
    ],
    effects: { intelligence: 4, charisma: 3 },
    flags: ['chain_reporter_childhood_1'],
    identityExclusive: 'reporter_rg',
  },
  {
    id: 'rg_ie_reporter_03', category: 'identity_exclusive', minAge: 18, maxAge: 26, probability: 0.80,
    templates: [
      '你成为了一名独立记者。在{location}的暗部冲突现场，你用镜头记录下了一位LEVEL 5能力者的战斗。那张照片后来成为了反等级运动的标志。',
      '你潜入{location}的研究设施，获取了一份被压制的调查报告——关于学园都市对无能力者的秘密歧视政策。',
    ],
    effects: { intelligence: 6, charisma: 4 },
    flags: ['chain_reporter_growth_0'],
    requiredFlags: ['chain_reporter_childhood_0'],
    identityExclusive: 'reporter_rg',
    chainPriority: 1,
  },
  {
    id: 'rg_ie_reporter_04', category: 'identity_exclusive', minAge: 25, maxAge: 38, probability: 0.75,
    templates: [
      '你的报道引起了轩然大波。{location}的学园都市管理层试图封杀你，但你的文章已经传遍了整个学区。',
      '你在{location}建立了一个独立的新闻网络，专门报道被主流媒体忽视的真相。你说："新闻工作者的职责不是取悦权力，而是服务公众。"',
    ],
    effects: { charisma: 7, intelligence: 5 },
    flags: ['chain_reporter_growth_1'],
    requiredFlags: ['chain_reporter_childhood_0'],
    identityExclusive: 'reporter_rg',
    chainPriority: 1,
  },

  // ═══════════════════════════════════════════════════════════════
  // 废材逆袭 trash_exclusive (8)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_te_01', category: 'trash_exclusive', minAge: 0, maxAge: 6, probability: 0.92,
    templates: [
      '能力检测那日，{location}的AIM测量仪播报结果："个人现实形成率：0.01%。判定为LEVEL 0，建议放弃能力开发。"全场一片死寂。',
      '作为被判定为无能力的人，你只能看着同龄人在{location}接受能力开发训练。他们嘲笑你是"进化的残次品"。',
    ],
    effects: { special: -5, strength: -2, intelligence: 3 },
    flags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'rg_te_02', category: 'trash_exclusive', minAge: 4, maxAge: 10, probability: 0.88,
    templates: [
      '你不甘心。每日深夜，你在{location}的废弃研究所翻找资料，自学脑科学。{npc}路过时皱眉："无能力的人，学这些有什么用？"',
      '你在{location}的废弃物处理中心淘到了半本残破的《个人现实开发手册》。书页破损，开篇写道："真正的力量不在能力，在大脑。"你如获至宝。',
    ],
    effects: { strength: 3, intelligence: 2, luck: 2 },
    flags: ['trash_childhood_1'],
    requiredFlags: ['trash_childhood_start'],
    talentExclusive: 'trash',
  },
  {
    id: 'rg_te_03', category: 'trash_exclusive', minAge: 12, maxAge: 18, probability: 0.85,
    templates: [
      '你按照手册的方法，在{location}的地下实验室搭建了一台简易AIM力场增幅器。第一次启动时，设备过载让你昏死过去。醒来时，你发现自己的计算力提升了三倍。',
      '别的天才一天能完成的能力演算，你需要一个月。但你在{location}日复一日地训练，从未间断。{npc}偶然看到你的数据，震惊地说："这...这是失传的手动演算技术？"',
    ],
    effects: { strength: 5, health: 3, special: 2 },
    flags: ['trash_growth_0'],
    requiredFlags: ['trash_childhood_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'rg_te_04', category: 'trash_exclusive', minAge: 15, maxAge: 22, probability: 0.80,
    templates: [
      '你在{location}救了一位被暗部重伤的退役能力开发者。他感激之下，将自己珍藏的"手动个人现实维持装置"送给了你——那是连学园都没有的老古董。',
      '{npc}被你的毅力打动，决定收你为学徒。他说："我这一生见过无数天才能力者，但像你这样的傻子，还是第一个。"你终于有了师父。',
    ],
    effects: { strength: 7, health: 5, charisma: 2 },
    flags: ['trash_growth_1'],
    requiredFlags: ['trash_growth_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'rg_te_05', category: 'trash_exclusive', minAge: 18, maxAge: 25, probability: 0.75,
    templates: [
      '经过多年的苦练，你在{location}遇到了一个瓶颈——手动演算已到达极限，再无法对抗真正的能力者。一位路过的老研究员告诉你："你需要找到树状图设计者的原始数据。"',
      '你在{location}的旧数据库中挖掘三月，终于找到了一段未知代码。用它改造你的演算系统后，计算速度提升了十倍——这技术不属于任何已知学派。',
    ],
    effects: { strength: 8, intelligence: 3, luck: 3 },
    flags: ['trash_growth_2'],
    requiredFlags: ['trash_growth_1'],
    talentExclusive: 'trash',
  },
  {
    id: 'rg_te_06', category: 'trash_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '学园都市举办全学区能力大赛，你以"民间研究者"的身份报名参加。所有人都嘲笑你："一个LEVEL 0的废物，也配参加能力者比赛？"',
      '大赛第一轮，你对上了学园精英能力者。对方是LEVEL 4的电磁系能力者，火力全开。你不依赖任何天赋，仅凭手动演算和自制装备——最终，你的上古代码护盾承受住了所有攻击，你用一记精准计算击败了对手。全场寂静。',
    ],
    effects: { strength: 8, charisma: 6, special: 3 },
    flags: ['trash_adult_0'],
    requiredFlags: ['trash_growth_2'],
    talentExclusive: 'trash',
  },
  {
    id: 'rg_te_07', category: 'trash_exclusive', minAge: 30, maxAge: 40, probability: 0.72,
    templates: [
      '你的"手动能力系统"震惊了脑科学界。{npc}说你是"万古以来第一个以LEVEL 0之身击败LEVEL 4的人"。各大学区开始重新审视"手动演算"这条被遗忘的道路。',
      '你在{location}建立了一座小小的"无能力者工坊"，专门招收能力开发失败的孩子。你说："天赋决定起点，但大脑和毅力决定终点。"',
    ],
    effects: { charisma: 7, intelligence: 5, luck: 3 },
    flags: ['trash_adult_1'],
    requiredFlags: ['trash_adult_0'],
    talentExclusive: 'trash',
  },
  {
    id: 'rg_te_08', category: 'trash_exclusive', minAge: 35, maxAge: 45, probability: 0.68,
    templates: [
      '昔日嘲笑你的能力检测员在{location}与你重逢。他依然拿着当年的检测报告，但手在颤抖。你接过报告，平静地说："这份LEVEL 0评级，是我最好的勋章。"',
      '{legend}的传说指向了一处上古研究设施，你说服探险队让你这个"LEVEL 0的废物"也加入。他们抱着看笑话的心态同意了——但很快，他们就发现只有你的手动系统不受设施AIM干扰场的影响。',
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
    id: 'rg_mc_01', category: 'major_choice', minAge: 15, maxAge: 15, probability: 0.98,
    templates: [
      '学园都市的能力开发机构来到{location}招募志愿者。你可以选择接受高强度的能力开发实验，也可以放弃能力之路专注科学研究，或者利用自己的力量帮助他人。这是命运的十字路口。',
    ],
    choices: [
      { text: '接受能力开发实验', successRate: 0.7, successText: '你躺进了开发舱。当AIM力场注入大脑的那一刻，你体内的某种力量苏醒了——金色的电光在你眼中闪现！你的能力等级飙升！', failText: '你试图接受开发，但大脑无法承受高强度的AIM力场。实验失败，你受了重伤。', effects: { luck: 10, special: 8, strength: 5 }, failEffects: { health: -30, special: -5 }, flags: ['rg_choice_15_esper'], failFlags: ['rg_choice_15_esper_fail'] },
      { text: '放弃能力，专注科学研究', successRate: 0.8, successText: '你选择了科学之路。虽然错过了成为超能力者的机会，但你的研究成果震惊了学界。多年后，你开发出了改变能力者世界的新技术。', failText: '你试图专注科学，但资金短缺让你的研究举步维艰。', effects: { intelligence: 10, charisma: 5 }, failEffects: { luck: -5, intelligence: 2 }, flags: ['rg_choice_15_science'], failFlags: ['rg_choice_15_science_fail'] },
      { text: '利用力量帮助他人', successRate: 0.85, successText: '你加入了志愿者组织，用自己的力量帮助{location}的弱者。你的善良和勇敢赢得了所有人的尊敬。一位老人说："能力不是等级的数字，是帮助他人的心。"', failText: '你在帮助他人时遭遇了暗部的袭击，虽然救了几个人，但自己也受了伤。', effects: { charisma: 10, strength: 5 }, failEffects: { health: -20, charisma: 2 }, flags: ['rg_choice_15_help'], failFlags: ['rg_choice_15_help_fail'] },
    ],
    flags: ['rg_major_seen_15'],
    chainPriority: 10,
  },
  {
    id: 'rg_mc_02', category: 'major_choice', minAge: 30, maxAge: 30, probability: 0.97,
    templates: [
      '学园都市的暗部向{location}伸出了橄榄枝。他们开出了惊人的条件：加入暗部，你将获得无限的资源和保护；拒绝的话，你将成为暗部的清除目标。同时，风纪委员也在招募你。这是灵魂的考验。',
    ],
    choices: [
      { text: '加入暗部，获取力量', successRate: 0.75, successText: '你选择了暗部。在接下来的岁月里，你执行了无数危险的任务，实力飞速提升。但你也渐渐发现，自己的双手沾满了无辜者的血。', failText: '你试图加入暗部，但因为背景审查失败而被拒绝。更糟糕的是，你因此成为了暗部的监视对象。', effects: { strength: 10, intelligence: 5 }, failEffects: { health: -20, luck: -5 }, flags: ['rg_choice_30_dark'], failFlags: ['rg_choice_30_dark_fail'] },
      { text: '坚守正义，加入风纪委员', successRate: 0.75, successText: '你选择了正义之路。作为风纪委员，你守护了{location}的和平。虽然资源有限，但你的良心前所未有的通明。', failText: '你试图加入风纪委员，但暗部的干预让你的申请被驳回。你陷入了孤立无援的境地。', effects: { charisma: 10, strength: 5 }, failEffects: { health: -25, luck: -5 }, flags: ['rg_choice_30_justice'], failFlags: ['rg_choice_30_justice_fail'] },
      { text: '逃离学园都市', successRate: 0.6, successText: '你做出了最艰难的选择——逃离。你带着家人和少数朋友，秘密离开了学园都市。虽然前途未卜，但你终于摆脱了这座城市的阴影。', failText: '你的逃亡计划被暗部截获。在{location}的边界，你们遭到了伏击。', effects: { luck: 10, health: 5, charisma: 5 }, failEffects: { health: -40, luck: -10 }, flags: ['rg_choice_30_escape'], failFlags: ['rg_choice_30_escape_fail'] },
    ],
    flags: ['rg_major_seen_30'],
    chainPriority: 10,
  },
  {
    id: 'rg_mc_03', category: 'major_choice', minAge: 45, maxAge: 45, probability: 0.96,
    templates: [
      '你发现了学园都市最大的黑暗——"绝对能力者进化计划"的真相。数以万计的御坂妹妹被制造出来，只为了被一方通行杀死。你可以选择对抗这个计划，也可以选择保护妹妹们，或者将真相公之于众。',
    ],
    choices: [
      { text: '对抗绝对能力者计划', successRate: 0.65, successText: '你发动了全面对抗。在{location}的街头，你与暗部展开了殊死搏斗。最终，你以惨痛的代价摧毁了计划的核心设施。但当你看到那些获救的妹妹们时，你觉得一切都值得。', failText: '你的对抗以惨败告终。暗部的力量远超你的想象，你失去了大半同伴。', effects: { strength: 15, charisma: 5 }, failEffects: { health: -50, strength: -10, charisma: -10 }, flags: ['rg_choice_45_fight'], failFlags: ['rg_choice_45_fight_fail'] },
      { text: '保护妹妹们，建立避难所', successRate: 0.7, successText: '你选择了保护。在{location}的秘密基地中，你建立了一个庇护所，收容了数百名御坂妹妹。虽然暗部不断追击，但你从未放弃。', failText: '你的庇护所被暗部发现。在突围中，你失去了许多重要的妹妹。', effects: { charisma: 12, luck: 8, health: 5 }, failEffects: { health: -30, charisma: -10 }, flags: ['rg_choice_45_protect'], failFlags: ['rg_choice_45_protect_fail'] },
      { text: '揭露真相，公之于众', successRate: 0.55, successText: '你冒着生命危险，将真相公之于众。学园都市陷入了短暂的混乱，但最终，公众的压力迫使高层终止了计划。你成为了英雄，但也成为了暗部的头号目标。', failText: '你的揭露被高层压制。媒体被控制，公众被蒙蔽，你成为了"造谣者"。', effects: { intelligence: 12, charisma: 8, luck: 5 }, failEffects: { health: -40, charisma: -15, luck: -10 }, flags: ['rg_choice_45_reveal'], failFlags: ['rg_choice_45_reveal_fail'] },
    ],
    flags: ['rg_major_seen_45'],
    chainPriority: 10,
  },
  {
    id: 'rg_mc_04', category: 'major_choice', minAge: 60, maxAge: 60, probability: 0.95,
    templates: [
      '你已触及了学园都市体系的顶峰。{npc}告诉你："你已触及了系统的边界。现在有三个选择：成为系统的一部分，享受永恒的权力；摧毁系统，解放所有被控制的能力者；或者超越系统，成为连树状图设计者都无法预测的存在。"',
    ],
    choices: [
      { text: '成为系统的一部分', successRate: 0.7, successText: '你选择了融入系统。你的意识与学园都市的核心网络融合，成为了永恒的守护者。虽然失去了肉体，但你获得了无上的知识和权力。', failText: '融合过程中出现了排斥反应。你的意识虽然部分上传，但大量记忆和情感永远丢失。', effects: { intelligence: 20, special: 15 }, failEffects: { health: -100, special: -30 }, flags: ['rg_choice_60_system'], failFlags: ['rg_choice_60_system_fail'] },
      { text: '摧毁系统，解放所有人', successRate: 0.6, successText: '你选择了革命。在{location}的核心设施中，你启动了自毁程序。学园都市的等级体系崩溃了，能力者们第一次获得了真正的自由。虽然你付出了生命的代价，但你的名字成为了自由的象征。', failText: '你的摧毁计划被系统防御机制阻止。你在爆炸中身受重伤，梦想破灭。', effects: { charisma: 15, luck: 10 }, failEffects: { health: -100 }, flags: ['rg_choice_60_destroy'], failFlags: ['rg_choice_60_destroy_fail'] },
      { text: '超越系统，成为未知', successRate: 0.5, successText: '你选择了第三条路。你利用自己的能力创建了一个"系统之外"的领域——在那里，能力等级不再有意义，每个人都拥有无限的可能性。你的存在成为了学园都市最大的谜题。', failText: '你的超越尝试失败了。系统将你标记为"异常存在"，你遭到了无休止的追杀。', effects: { luck: 15, special: 10, intelligence: 8 }, failEffects: { health: -60, luck: -15, special: -10 }, flags: ['rg_choice_60_beyond'], failFlags: ['rg_choice_60_beyond_fail'] },
    ],
    flags: ['rg_major_seen_60'],
    chainPriority: 10,
  },

  // ═══════════════════════════════════════════════════════════════
  // 境界突破 cultivation/realm (14)
  // Realms: 1无能力者→2低能力者→3异能力者→4强能力者→5大能力者→6超能力者→7绝对能力者→8系统外存在
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'rg_cult_r1', category: 'cultivation', minAge: 10, maxAge: 18, probability: 0.90,
    templates: [
      '你在{location}的能力开发所中经过了严苛的考核。当脑波监测仪显示你的个人现实开始形成时，你正式成为了一名低能力者——这是能力之路的起点。',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以优异的成绩通过考核，成为了正式的低能力者！', failText: '考核中出现了意外，你勉强通过，但受了轻伤。', effects: { realm: 1, special: 5, luck: 3, maxAge: 50 }, failEffects: { health: -15, special: 2 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail_1'] },
      { text: '稳扎稳打', successRate: 1, successText: '你选择了稳健的方式，顺利通过考核成为低能力者。', failText: '稳健的准备让你错过了最佳时机，考核被迫延期。', effects: { realm: 1, special: 3, intelligence: 3, maxAge: 45 }, failEffects: { intelligence: 2 }, flags: ['realm_breakthrough_1', 'realm_breakthrough_1_steady'], failFlags: ['realm_fail_1_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续训练，根基更加扎实。', failText: '', effects: { intelligence: 2, strength: 2 }, flags: ['realm_delay_1'], failFlags: [] },
    ],
    flags: ['realm_attempt_1'],
    chainPriority: 5,
  },
  {
    id: 'rg_cult_r1s', category: 'cultivation', minAge: 12, maxAge: 20, probability: 0.70,
    templates: [
      '你成为低能力者的消息在{location}传开。同学们纷纷前来祝贺，你的能力者生涯正式开始。',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_1'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 2,
  },
  {
    id: 'rg_cult_r1r', category: 'cultivation', minAge: 13, maxAge: 25, probability: 0.60,
    templates: [
      '上次考核失败后，你在{location}默默疗伤、重新训练。你再次感应到了突破的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了教训，一举成为正式的低能力者！', failText: '又一次失败。你开始怀疑自己是否真的适合能力开发...', effects: { realm: 1, special: 5, maxAge: 50 }, failEffects: { health: -30, special: -8 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail2_1'] },
    ],
    flags: ['realm_retry_1'],
    requiredFlags: ['realm_fail_1'],
    chainPriority: 3,
  },
  {
    id: 'rg_cult_r2', category: 'cultivation', minAge: 15, maxAge: 25, probability: 0.85,
    templates: [
      '你在{location}经历了无数次实战，终于触摸到了异能力者的门槛。{npc}告诉你："异能力者不是靠能力强度定义的，是靠在绝境中依然能保护重要之人的意志定义的。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你在{location}的测试中展现了稳定的个人现实——你成为了异能力者！', failText: '突破测试中你的能力失控，虽然生还但错过了晋升的机会。', effects: { realm: 1, special: 8, luck: 5, maxAge: 70 }, failEffects: { health: -30, special: -5 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail_2'] },
      { text: '稳扎稳打', successRate: 1, successText: '你以稳健的能力表现和出色的控制力，正式晋升为异能力者。', failText: '稳健的策略让你错失了关键测试机会，晋升被延期。', effects: { realm: 1, special: 5, intelligence: 5, maxAge: 60 }, failEffects: { intelligence: 2, luck: -3 }, flags: ['realm_breakthrough_2', 'realm_breakthrough_2_steady'], failFlags: ['realm_fail_2_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累，根基更加扎实。', failText: '', effects: { special: 3, intelligence: 2 }, flags: ['realm_delay_2'], failFlags: [] },
    ],
    flags: ['realm_attempt_2'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 5,
  },
  {
    id: 'rg_cult_r2s', category: 'cultivation', minAge: 17, maxAge: 30, probability: 0.70,
    templates: [
      '你成为异能力者的消息传遍了学区。同学们都知道了你的名字——{location}的"新星能力者"。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_2'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 2,
  },
  {
    id: 'rg_cult_r2r', category: 'cultivation', minAge: 18, maxAge: 35, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了异能力者的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为异能力者！', failText: '又一次失败...', effects: { realm: 1, special: 5, maxAge: 70 }, failEffects: { health: -40, special: -10 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail2_2'] },
    ],
    flags: ['realm_retry_2'],
    requiredFlags: ['realm_fail_2'],
    chainPriority: 3,
  },
  {
    id: 'rg_cult_r3', category: 'cultivation', minAge: 20, maxAge: 32, probability: 0.80,
    templates: [
      '你在{location}的能力开发所中历练多年，终于触摸到了强能力者的门槛。{npc}告诉你："强能力者意味着你的能力已经可以在实战中发挥重要作用。你的每一个能力都将被他人畏惧和尊敬。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以卓越的能力控制，正式晋升为强能力者！', failText: '晋升测试中出现了严重失误，你错过了这次机会。', effects: { realm: 1, special: 8, charisma: 5, maxAge: 100 }, failEffects: { health: -25, special: -5 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail_3'] },
      { text: '稳扎稳打', successRate: 1, successText: '你凭借稳健的能力表现和出色的控制力，正式成为强能力者。', failText: '稳健的准备被一场意外打乱，晋升失败。', effects: { realm: 1, special: 5, charisma: 5, maxAge: 85 }, failEffects: { health: -15, charisma: -3 }, flags: ['realm_breakthrough_3', 'realm_breakthrough_3_steady'], failFlags: ['realm_fail_3_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。', failText: '', effects: { special: 3, charisma: 2 }, flags: ['realm_delay_3'], failFlags: [] },
    ],
    flags: ['realm_attempt_3'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 5,
  },
  {
    id: 'rg_cult_r3s', category: 'cultivation', minAge: 22, maxAge: 38, probability: 0.70,
    templates: [
      '你成为强能力者的消息传遍了学区。同学们对你充满了敬畏，{location}的能力展示会上为你留出了特别的席位。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_3'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 2,
  },
  {
    id: 'rg_cult_r3r', category: 'cultivation', minAge: 24, maxAge: 42, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了强能力者的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为强能力者！', failText: '又一次失败...', effects: { realm: 1, special: 5, maxAge: 100 }, failEffects: { health: -35, special: -8 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail2_3'] },
    ],
    flags: ['realm_retry_3'],
    requiredFlags: ['realm_fail_3'],
    chainPriority: 3,
  },
  {
    id: 'rg_cult_r4', category: 'cultivation', minAge: 25, maxAge: 40, probability: 0.78,
    templates: [
      '你在{location}的战场上立下赫赫战功，终于触摸到了大能力者的门槛。{npc}告诉你："大能力者已是学园都市的精英阶层。你的名字将出现在重要档案中。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以卓越的能力表现和战略眼光，正式晋升为大能力者！', failText: '关键时刻的能力失控让你错失晋升机会。', effects: { realm: 1, special: 10, charisma: 5, maxAge: 140 }, failEffects: { health: -30, charisma: -5 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail_4'] },
      { text: '稳扎稳打', successRate: 1, successText: '你凭借多年的积累和稳健的表现，正式成为大能力者。', failText: '稳健的步伐被一场能力暴走打断，晋升失败。', effects: { realm: 1, special: 6, charisma: 6, maxAge: 115 }, failEffects: { health: -20, special: -3 }, flags: ['realm_breakthrough_4', 'realm_breakthrough_4_steady'], failFlags: ['realm_fail_4_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。', failText: '', effects: { special: 4, charisma: 3 }, flags: ['realm_delay_4'], failFlags: [] },
    ],
    flags: ['realm_attempt_4'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 5,
  },
  {
    id: 'rg_cult_r4s', category: 'cultivation', minAge: 28, maxAge: 45, probability: 0.70,
    templates: [
      '你成为大能力者的消息传遍了学园都市。{location}的能力者聚会上，你的名字成为了最高优先级的讨论对象。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_4'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 2,
  },
  {
    id: 'rg_cult_r4r', category: 'cultivation', minAge: 30, maxAge: 50, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了大能力者的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为大能力者！', failText: '又一次失败...', effects: { realm: 1, special: 6, maxAge: 140 }, failEffects: { health: -40, special: -10 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail2_4'] },
    ],
    flags: ['realm_retry_4'],
    requiredFlags: ['realm_fail_4'],
    chainPriority: 3,
  },
  {
    id: 'rg_cult_r5', category: 'cultivation', minAge: 35, maxAge: 55, probability: 0.75,
    templates: [
      '你在{location}的影响力已臻巅峰，终于触摸到了超能力者的门槛。{npc}告诉你："超能力者是学园都市的顶点之一。你的存在本身就将改变势力的平衡。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以无与伦比的能力威压，正式晋升为超能力者！', failText: '能力暴走让你错失晋升机会，你被送往了隔离设施。', effects: { realm: 1, special: 12, charisma: 5, maxAge: 190 }, failEffects: { health: -30, charisma: -10 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail_5'] },
      { text: '稳扎稳打', successRate: 1, successText: '你凭借数十年的积累和人脉，正式成为超能力者。', failText: '稳健的布局被政敌破坏，晋升失败。', effects: { realm: 1, special: 8, intelligence: 5, maxAge: 155 }, failEffects: { health: -20, luck: -5 }, flags: ['realm_breakthrough_5', 'realm_breakthrough_5_steady'], failFlags: ['realm_fail_5_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。', failText: '', effects: { special: 4, intelligence: 3 }, flags: ['realm_delay_5'], failFlags: [] },
    ],
    flags: ['realm_attempt_5'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 5,
  },
  {
    id: 'rg_cult_r5s', category: 'cultivation', minAge: 38, maxAge: 60, probability: 0.70,
    templates: [
      '你成为超能力者的消息震撼了整个学园都市。{location}的能力者集会上，无数能力者向你致敬。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_5'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 2,
  },
  {
    id: 'rg_cult_r5r', category: 'cultivation', minAge: 40, maxAge: 65, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了超能力者的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为超能力者！', failText: '又一次失败...', effects: { realm: 1, special: 8, maxAge: 190 }, failEffects: { health: -45, special: -12 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail2_5'] },
    ],
    flags: ['realm_retry_5'],
    requiredFlags: ['realm_fail_5'],
    chainPriority: 3,
  },
  {
    id: 'rg_cult_r6', category: 'cultivation', minAge: 45, maxAge: 70, probability: 0.72,
    templates: [
      '你在{location}的能力舞台上耕耘多年，终于触摸到了绝对能力者的门槛。{npc}告诉你："绝对能力者不是力量的巅峰，而是规则的制定者。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以无可争议的能力威压，正式成为绝对能力者！', failText: '能力暴走让你身败名裂，你被学园都市列为最高威胁。', effects: { realm: 1, special: 15, charisma: 8, maxAge: 260 }, failEffects: { health: -40, charisma: -15 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail_6'] },
      { text: '稳扎稳打', successRate: 1, successText: '你凭借数十年的积累和人望，正式成为绝对能力者。', failText: '稳健的步伐被一场暗杀打断，你重伤卧床数月。', effects: { realm: 1, special: 10, intelligence: 8, maxAge: 210 }, failEffects: { health: -30, intelligence: -5 }, flags: ['realm_breakthrough_6', 'realm_breakthrough_6_steady'], failFlags: ['realm_fail_6_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。', failText: '', effects: { special: 5, intelligence: 4 }, flags: ['realm_delay_6'], failFlags: [] },
    ],
    flags: ['realm_attempt_6'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 5,
  },
  {
    id: 'rg_cult_r6s', category: 'cultivation', minAge: 48, maxAge: 75, probability: 0.70,
    templates: [
      '你成为绝对能力者的消息传遍了人类世界。在{location}的就职典礼上，你说："我代表的不是一个等级，而是所有渴望突破极限的人。"',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_6'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 2,
  },
  {
    id: 'rg_cult_r6r', category: 'cultivation', minAge: 50, maxAge: 80, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了绝对能力者的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为绝对能力者！', failText: '又一次失败...', effects: { realm: 1, special: 10, maxAge: 260 }, failEffects: { health: -50, special: -15 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail2_6'] },
    ],
    flags: ['realm_retry_6'],
    requiredFlags: ['realm_fail_6'],
    chainPriority: 3,
  },
  {
    id: 'rg_cult_r7', category: 'cultivation', minAge: 60, maxAge: 90, probability: 0.68,
    templates: [
      '你在{location}的能力遗产已无人能及，终于触摸到了系统外存在的门槛。{npc}告诉你："系统外存在不是超越规则，而是成为规则本身。"',
    ],
    choices: [
      { text: '全力突破', successRate: 1, successText: '你以无上的智慧和力量，正式成为系统外存在！你的名字将永远铭刻于学园都市的历史中。', failText: '你的突破尝试被树状图设计者阻止，你身负重伤，梦想破灭。', effects: { realm: 1, special: 20, luck: 10, maxAge: 350 }, failEffects: { health: -50, special: -20 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail_7'] },
      { text: '稳扎稳打', successRate: 1, successText: '你凭借一生的努力和人望，正式成为系统外存在。', failText: '稳健的步伐被系统的防御机制碾碎，你的突破之梦再次延期。', effects: { realm: 1, special: 15, intelligence: 10, maxAge: 300 }, failEffects: { health: -30, luck: -8 }, flags: ['realm_breakthrough_7', 'realm_breakthrough_7_steady'], failFlags: ['realm_fail_7_steady'] },
      { text: '放弃突破', successRate: 1, successText: '你选择了继续积累。', failText: '', effects: { special: 6, intelligence: 5 }, flags: ['realm_delay_7'], failFlags: [] },
    ],
    flags: ['realm_attempt_7'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 5,
  },
  {
    id: 'rg_cult_r7s', category: 'cultivation', minAge: 62, maxAge: 95, probability: 0.70,
    templates: [
      '你成为系统外存在的消息传遍了整个学园都市。在{location}的纪念碑前，能力者和无能力者第一次并肩而立，共同向你致敬。',
    ],
    effects: { charisma: 5, luck: 3 },
    flags: ['realm_stable_7'],
    requiredFlags: ['realm_breakthrough_7'],
    chainPriority: 2,
  },
  {
    id: 'rg_cult_r7r', category: 'cultivation', minAge: 65, maxAge: 100, probability: 0.60,
    templates: [
      '上次突破失败后，你在{location}默默疗伤、重新积累。你再次感应到了系统外存在的契机。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你一举成为系统外存在！', failText: '又一次失败...', effects: { realm: 1, special: 15, maxAge: 350 }, failEffects: { health: -60, special: -20 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail2_7'] },
    ],
    flags: ['realm_retry_7'],
    requiredFlags: ['realm_fail_7'],
    chainPriority: 3,
  },
];
