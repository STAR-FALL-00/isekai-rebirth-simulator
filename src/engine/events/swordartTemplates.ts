import type { EventTemplate } from './types';

// 浮空要塞 — floating_citadel
// Generated: 2026-04-27
// Total ~170 templates

export const swordartTemplates: EventTemplate[] = [

  {
    id: 'fc_ch_01', category: 'childhood', minAge: 0, maxAge: 3, probability: 0.05,
    templates: [
      '你降生在起始之镇的{location}，天空被千层巨塔的阴影笼罩。{npc}抱着你说："欢迎来到这座塔。"',
      '你的第一声啼哭在{location}回荡，一位老者低声呢喃：{legend}的预言……开始了。',
      '起始之镇的钟声敲响，你在{location}降世。{npc}说，你是第一千名来到这座塔的孩子。',
    ],
    effects: { strength: 2, luck: 3 },
  },
  {
    id: 'fc_ch_02', category: 'childhood', minAge: 2, maxAge: 7, probability: 0.12,
    templates: [
      '你在{location}玩耍时捡到了一把生锈的短剑，虽然破旧，但握在手中时有种奇异的感觉。{npc}说这可能是某位冒险者留下的遗物。',
      '三岁时，你在{location}追逐一只发光的蝴蝶，无意间跑出了安全区边缘。{npc}惊慌失措地将你抱回。',
      '{npc}在{location}教你辨认塔中的基础植物，你学得比谁都快。',
    ],
    effects: { intelligence: 4, special: 2 },
  },
  {
    id: 'fc_ch_03', category: 'childhood', minAge: 4, maxAge: 9, probability: 0.29,
    templates: [
      '你在{location}救了一只受伤的小型使魔，它康复后一直跟随着你。{npc}说这是一种罕见的灵宠。',
      '{npc}给你讲了一个关于{legend}的故事——据说那是一位曾经到达第100层的冒险者。',
      '你在{location}发现了一块刻有奇怪符号的石板，{npc}也无法解读其中的含义。',
      '你从小就对塔的结构充满好奇，经常在{location}仰望上方的楼层。',
    ],
    effects: { luck: 5 },
  },
  {
    id: 'fc_ch_04', category: 'childhood', minAge: 0, maxAge: 6, probability: 0.52,
    templates: [
      '你生在起始之镇的普通家庭，每天在{location}玩耍，日子平淡但快乐。',
      '{npc}教你基础的算术和文字，你学得有模有样。',
      '你在{location}认识了几个玩伴，约定长大后一起攀登这座塔。',
      '家里虽然不富裕，但{npc}总是把最好的食物留给你。',
    ],
    effects: { charisma: 2, luck: 1 },
  },
  {
    id: 'fc_ch_05', category: 'childhood', minAge: 3, maxAge: 10, probability: 0.74,
    templates: [
      '你在{location}帮{npc}搬运货物，锻炼了自己的身体。',
      '你的身体比同龄人强壮，{npc}说你是成为前线攻略者的好料子。',
      '你喜欢在{location}听老冒险者们讲述各楼层的传说，常常一听就是一整天。',
      '{npc}给你讲了一个关于{legend}的故事，你听得入了迷。',
    ],
    effects: { strength: 2, intelligence: 1 },
  },
  {
    id: 'fc_gr_01', category: 'growth', minAge: 15, maxAge: 20, probability: 0.05,
    templates: [
      '你在{location}进行了三天三夜的剑技特训，出关时眼中精光四射——你竟在实战中领悟了{legend}的剑术！',
      '一场塔中怪物暴动夜，你在{location}被围困非但没死，反而在生死关头突破了自身极限！',
      '{legend}的剑术残影在{location}与你相遇，将毕生战斗感悟传授于你。',
    ],
    effects: { strength: 10, special: 8, intelligence: 5 },
  },
  {
    id: 'fc_gr_02', category: 'growth', minAge: 14, maxAge: 22, probability: 0.15,
    templates: [
      '你在{location}钻研三年，终于掌握了困扰多年的高级剑技，实力大增！',
      '{npc}带你外出冒险，你在{location}击败了一个强敌，获得了珍贵的战利品。',
      '你发现了{legend}留下的试炼场，通过考验后获得了意想不到的收获。',
    ],
    effects: { strength: 6, special: 5 },
  },
  {
    id: 'fc_gr_03', category: 'growth', minAge: 13, maxAge: 24, probability: 0.34,
    templates: [
      '你在{location}遇到了一生的宿敌，你们不打不相识，反而成为了朋友。',
      '{npc}传授你一项高级剑技，你花了整整一年才掌握，但威力惊人。',
      '你在{location}救了一个被PK者追杀的人，他为了报答你，送了一件稀有装备。',
      '你和同辈在{location}比试剑技，虽然输了但收获巨大。',
    ],
    effects: { charisma: 4 },
  },
  {
    id: 'fc_gr_04', category: 'growth', minAge: 13, maxAge: 20, probability: 0.59,
    templates: [
      '你每天在{location}勤奋训练剑技，虽然进步缓慢但根基扎实。',
      '{npc}督促你学习战斗技巧，你不敢懈怠。',
      '你在{location}读了很多关于塔中怪物的资料，眼界开阔了不少。',
      '平平淡淡的一年，你在{location}默默积累着。',
    ],
    effects: { intelligence: 2, strength: 2 },
  },
  {
    id: 'fc_gr_05', category: 'growth', minAge: 16, maxAge: 25, probability: 0.68,
    templates: [
      '你在{location}结交了一些冒险者朋友，互相切磋进步。',
      '{npc}给你讲了很多前辈攻略者的故事，你深受启发。',
      '你在{location}处理了一些冒险杂务，锻炼了自己的能力。',
      '这一年没什么特别的事发生，但你感觉自己在慢慢变强。',
    ],
    effects: { charisma: 2, luck: 2 },
  },
  {
    id: 'fc_ad_01', category: 'adult', minAge: 28, maxAge: 40, probability: 0.11,
    templates: [
      '你在{location}组建了自己的冒险队伍，广纳贤才，一时间名声大噪。',
      '你参与了{legend}相关的大规模楼层攻略事件，在关键时刻力挽狂澜。',
      '你在{location}建立了属于自己的公会，各方强者纷纷来投。',
    ],
    effects: { charisma: 8, strength: 5, special: 5 },
  },
  {
    id: 'fc_ad_02', category: 'adult', minAge: 26, maxAge: 45, probability: 0.28,
    templates: [
      '你在{location}收下了第一个学生，将自己的剑技倾囊相授。',
      '你和宿敌在{location}进行了最终决战，胜负难分。',
      '你成功锻造/获得了传说中的装备，引起了不小的轰动。',
    ],
    effects: { intelligence: 5, special: 4 },
  },
  {
    id: 'fc_ad_03', category: 'adult', minAge: 26, maxAge: 50, probability: 0.6,
    templates: [
      '你在{location}处理日常冒险事务，队伍稳步发展。',
      '{npc}来找你帮忙，你出手解决了他的难题。',
      '你在{location}度过了平静的一年，能力稳步提升。',
      '平平淡淡的一年，你在{location}默默研究剑技。',
    ],
    effects: { strength: 2, intelligence: 2, special: 2 },
  },
  {
    id: 'fc_el_01', category: 'elder', minAge: 60, maxAge: 120, probability: 0.65,
    templates: [
      '你在{location}的公会据点中钻研更高剑技，试图突破当前境界的限制。',
      '你游历塔的各楼层，在{location}见识了各种奇异的战斗技巧，眼界大开。',
      '你开始招收学生，在{location}传授毕生所学的剑术。',
    ],
    effects: { intelligence: 3, special: 2 },
  },
  {
    id: 'fc_el_02', category: 'elder', minAge: 100, maxAge: 220, probability: 0.32,
    templates: [
      '你的剑技造诣已臻巅峰，成为了{location}的传说级冒险者。',
      '{npc}专程从前线赶来，希望你将战斗心得贡献给攻略组。',
      '你将毕生剑术心得整理成《千层塔攻略全书》，存放在{location}的图书馆中。',
    ],
    effects: { intelligence: 8, charisma: 5 },
  },
  {
    id: 'fc_cb_01', category: 'combat', minAge: 15, maxAge: 35, probability: 0.05,
    templates: [
      '你在{location}遭遇了楼层守护者——一个高达数米的机械巨兽！它的攻击足以粉碎钢铁。',
      '{legend}的残余意识在{location}凝聚成了实体，向你发起了挑战。',
      '你在{location}误入楼层守护者的巢穴，退路已被封死，唯有死战！',
    ],
    effects: { strength: 12, charisma: 8, health: -10 },
    choices: [
      { text: '全力进攻，一击必杀', successRate: 0.6, successText: '你抓住守护者攻击的间隙，一击命中核心！巨兽轰然倒地，你获得了稀有装备。', failText: '你的攻击被守护者挡下，反而被重创。', effects: { strength: 15, special: 10, health: -20 }, failEffects: { health: -40, strength: -5 } },
      { text: '稳扎稳打，消耗战', successRate: 0.8, successText: '你凭借娴熟的走位和持久战技巧，慢慢磨死了守护者。虽然耗时，但损伤最小。', failText: '你的体力在消耗战中率先耗尽，险些丧命。', effects: { strength: 8, special: 5, health: -5 }, failEffects: { health: -30 } },
      { text: '逃跑求援', successRate: 0.5, successText: '你成功逃脱并带回了攻略组，虽然战利品要分给别人，但至少活了下来。', failText: '逃跑失败，你被守护者一击命中后背。', effects: { luck: 5, charisma: 3 }, failEffects: { health: -50 } },
    ],
  },
  {
    id: 'fc_cb_02', category: 'combat', minAge: 15, maxAge: 40, probability: 0.14,
    templates: [
      '你在{location}遇到了臭名昭著的PK者——红名玩家。他冷笑着向你举起了武器。',
      '一名隐藏在暗处的PK者在{location}偷袭了你，你只能仓促应战。',
      '{npc}被PK者围困，你挺身而出，在{location}展开了一场生死对决。',
    ],
    effects: { strength: 8, charisma: 4, health: -5 },
    choices: [
      { text: '正面对决，以剑说话', successRate: 0.7, successText: '你的剑技更胜一筹，PK者被你斩于剑下。他的名字从冒险者名册上永远消失了。', failText: 'PK者的战斗经验更丰富，你被他压制，身负重伤。', effects: { strength: 10, charisma: 5 }, failEffects: { health: -35, strength: -3 } },
      { text: '诱入陷阱，智取敌人', successRate: 0.8, successText: '你将PK者诱入{location}的怪物群，借刀杀人。虽然不够光明正大，但有效。', failText: 'PK者识破了你的计谋，反而将计就计重伤了你。', effects: { intelligence: 8, luck: 5 }, failEffects: { health: -25, intelligence: -3 } },
      { text: '呼叫守卫，安全区求助', successRate: 0.9, successText: '你成功逃回安全区，守卫赶走了PK者。安全，但没什么成长。', failText: '守卫来得太晚，你已经被PK者打成重伤。', effects: { charisma: 2, health: 2 }, failEffects: { health: -30 } },
    ],
  },
  {
    id: 'fc_cb_03', category: 'combat', minAge: 15, maxAge: 35, probability: 0.28,
    templates: [
      '你在{location}遭遇了一大群怪物的围攻，情况危急！',
      '你和同伴在{location}被怪物群包围，必须杀出一条血路。',
      '一场怪物暴动席卷了{location}，你被迫卷入战斗。',
    ],
    effects: { strength: 5, health: -3 },
    choices: [
      { text: '单枪匹马，冲入敌阵', successRate: 0.65, successText: '你如同一道黑色闪电冲入怪物群，剑光闪烁间，怪物纷纷倒下。', failText: '怪物数量太多，你很快就被淹没在兽潮中。', effects: { strength: 8, special: 3 }, failEffects: { health: -30 } },
      { text: '团队协作，阵型推进', successRate: 0.85, successText: '你和队友配合默契，稳步推进，最终全灭了怪物群。', failText: '队友配合失误，阵型被冲破，你受了不轻的伤。', effects: { strength: 4, charisma: 4 }, failEffects: { health: -20 } },
      { text: '寻找退路，保存实力', successRate: 0.75, successText: '你找到了一条隐蔽的退路，成功撤离，虽然放弃了战利品但保住了性命。', failText: '退路被怪物堵死，你陷入了绝境。', effects: { luck: 3, health: 3 }, failEffects: { health: -25 } },
    ],
  },
  {
    id: 'fc_cb_04', category: 'combat', minAge: 18, maxAge: 45, probability: 0.38,
    templates: [
      '你在{location}遭遇了一只精英怪物，它的速度远超普通怪物。',
      '{npc}在{location}被一只罕见的精英怪追杀，你出手相助。',
      '你发现了一只落单的精英怪，决定试试身手。',
    ],
    effects: { strength: 4, luck: 2 },
    choices: [
      { text: '速战速决', successRate: 0.7, successText: '你以迅雷不及掩耳之势解决了精英怪，获得了稀有材料。', failText: '精英怪的反击比你想象中更快，你受了伤。', effects: { strength: 6, special: 3 }, failEffects: { health: -15 } },
      { text: '观察弱点，伺机而动', successRate: 0.8, successText: '你仔细观察后发现了精英怪的弱点，一击制敌。', failText: '观察花费了太多时间，精英怪呼叫了同伴。', effects: { intelligence: 5, luck: 3 }, failEffects: { health: -10 } },
    ],
  },
  {
    id: 'fc_cb_05', category: 'combat', minAge: 15, maxAge: 40, probability: 0.55,
    templates: [
      '你在{location}进行了日常剑技训练，技艺略有精进。',
      '你和同伴在{location}对练，互相学习战斗技巧。',
      '你在{location}演练新学的剑技连携，逐渐熟练。',
    ],
    effects: { strength: 2 },
    choices: [
      { text: '加大训练强度', successRate: 0.8, successText: '高强度的训练让你的肌肉酸痛不已，但效果显著。', failText: '训练过度，你不慎拉伤了肌肉。', effects: { strength: 4, health: -2 }, failEffects: { health: -10 } },
      { text: '按部就班训练', successRate: 1, successText: '你保持稳定节奏，基础更加扎实。', failText: '', effects: { strength: 2, special: 1 } },
    ],
  },
  {
    id: 'fc_cb_06', category: 'combat', minAge: 30, maxAge: 60, probability: 0.7,
    templates: [
      '你在{location}指导后辈战斗技巧，自己也有所感悟。',
      '一场友好的比试在{location}举行，你获得了不错的名次。',
      '你在{location}观摩高手对决，学到了不少实战经验。',
    ],
    effects: { strength: 2, intelligence: 1 },
    choices: [
      { text: '全力以赴，展现实力', successRate: 0.9, successText: '你展现了前辈应有的实力，赢得了后辈的尊敬。', failText: '你一时大意，险些输给后辈，颜面尽失。', effects: { strength: 3, charisma: 3 }, failEffects: { charisma: -5 } },
      { text: '点到为止，指导为主', successRate: 1, successText: '你的指导让后辈受益匪浅，人缘大增。', failText: '', effects: { charisma: 4, intelligence: 2 } },
    ],
  },
  {
    id: 'fc_rm_01', category: 'romance', minAge: 15, maxAge: 30, probability: 0.06,
    templates: [
      '你在{location}与一位身着羽衣的少女擦肩而过。她回头看了你一眼，那目光仿佛穿透了千层塔的阴霾。',
      '一场楼层攻略战后，你在{location}的休息区遇到了使用细剑的金发少女。她说："你的剑，很有意思。"',
      '你在{location}救了一位被怪物围攻的少女，她轻抚长剑向你道谢，眼中似有星光。',
    ],
    effects: { charisma: 10, luck: 8, health: 5 },
    relationshipEffects: { feather: 20 },
    choices: [
      { text: '邀请她组队', successRate: 0.8, successText: '她微微一笑，点头同意。从此你们并肩作战。', failText: '她婉拒了你，说更喜欢独行。', effects: { charisma: 5, luck: 3 }, failEffects: { charisma: -2 }, relationshipEffects: { feather: 15 } },
      { text: '默默关注，保持尊重', successRate: 1, successText: '你的尊重让她记住了你。几次相遇后，你们成为了朋友。', failText: '', effects: { charisma: 3, luck: 2 }, relationshipEffects: { feather: 10 } },
    ],
  },
  {
    id: 'fc_rm_02', category: 'romance', minAge: 16, maxAge: 30, probability: 0.12,
    templates: [
      '你在{location}的铁匠铺遇到了一位肌肉结实的女锻造师。她抡起大锤的样子，有一种独特的美感。',
      '你的装备在{location}损坏，一位名叫铁锤的锻造师免费帮你修复，只要求你讲讲楼上的风景。',
      '你在{location}看到一位锻造师正在打造细剑，火花四溅中，她抬头看了你一眼。',
    ],
    effects: { charisma: 6, luck: 4 },
    relationshipEffects: { hammer: 15 },
    choices: [
      { text: '学习锻造，接近她', successRate: 0.75, successText: '你笨拙地拿起锤子，她笑着教你。感情在打铁声中升温。', failText: '你把铁砧砸坏了，她把你赶出了铺子。', effects: { intelligence: 4, charisma: 3 }, failEffects: { charisma: -3 }, relationshipEffects: { hammer: 10 } },
      { text: '送她稀有材料', successRate: 0.9, successText: '她惊喜地接过材料，答应为你打造专属武器。', failText: '材料被她嫌弃太普通，气氛尴尬。', effects: { charisma: 4, luck: 2 }, failEffects: { charisma: -1 }, relationshipEffects: { hammer: 8 } },
    ],
  },
  {
    id: 'fc_rm_03', category: 'romance', minAge: 15, maxAge: 35, probability: 0.27,
    templates: [
      '你在{location}遇到了血刃——一个以猎杀冒险者为乐的PK者。但他没有立刻动手，反而对你产生了兴趣。',
      '血刃在{location}拦住了你，说："我观察你很久了。你和我，其实是一种人。"',
      '一次意外的合作中，你和血刃在{location}背靠背战斗。战后，他扔给你一瓶回复药。',
    ],
    effects: { strength: 4, charisma: 3 },
    relationshipEffects: { blood_blade: 10 },
    choices: [
      { text: '试图感化他', successRate: 0.5, successText: '血刃沉默了许久，说："从来没有人对我说过这种话。"他的眼神变了。', failText: '血刃大笑："天真！"然后一剑刺穿了你的肩膀。', effects: { charisma: 8 }, failEffects: { health: -30 }, relationshipEffects: { blood_blade: 10 } },
      { text: '与他竞争，用实力说话', successRate: 0.7, successText: '你们约定以谁先到达更高楼层为赌约。血刃罕见地露出了笑容。', failText: '你输给了他，血刃不屑地离去。', effects: { strength: 5 }, failEffects: { charisma: -3 }, relationshipEffects: { blood_blade: 5 } },
    ],
  },
  {
    id: 'fc_rm_04', category: 'romance', minAge: 18, maxAge: 35, probability: 0.4,
    templates: [
      '你在{location}遇到了一位黑衣剑士。他沉默寡言，但剑技深不可测。他收你为徒。',
      '暗影在{location}观察了你很久，终于现身："你的剑，有潜力。跟我学吧。"',
      '你在{location}被怪物围困，一位黑衣剑士出手相救，只留下一句话："明天，来这里。"',
    ],
    effects: { strength: 3, special: 5 },
    relationshipEffects: { shadow: 15 },
    choices: [
      { text: '刻苦学习，不负师恩', successRate: 0.9, successText: '暗影点了点头："比我想象中更好。"', failText: '你的进步太慢，暗影失望地摇头。', effects: { strength: 4, special: 4 }, failEffects: { special: -2 }, relationshipEffects: { shadow: 10 } },
      { text: '询问他的过去', successRate: 0.6, successText: '暗影沉默了很久，终于讲述了他在更高楼层的往事。你们的羁绊加深了。', failText: '暗影冷冷地说："不该问的，别问。"', effects: { intelligence: 3, charisma: 2 }, failEffects: { charisma: -3 }, relationshipEffects: { shadow: 5 } },
    ],
  },
  {
    id: 'fc_rm_05', category: 'romance', minAge: 20, maxAge: 40, probability: 0.58,
    templates: [
      '你在{location}遇到了晨曦——一位总是带着温暖笑容的前辈冒险者。她教你如何在塔中生存。',
      '晨曦在{location}举办了一场新手讲座，你坐在第一排认真听讲。',
      '你在{location}迷路时，晨曦主动带你回到了安全区。',
    ],
    effects: { charisma: 3, luck: 2 },
    relationshipEffects: { dawn: 10 },
  },
  {
    id: 'fc_rm_06', category: 'romance', minAge: 25, maxAge: 50, probability: 0.7,
    templates: [
      '你在{location}遇到了巨像——一个身形巨大的 rival 冒险者。他把你视为竞争对手。',
      '巨像在{location}公开向你挑战，说只有强者才配继续攀登。',
      '你们在{location}同时发现了一个宝箱，彼此对视，火药味十足。',
    ],
    effects: { strength: 3, charisma: 2 },
    relationshipEffects: { colossus: 5 },
  },  {
    id: 'fc_cu_01', category: 'cultivation', minAge: 40, maxAge: 70, probability: 0.06,
    templates: [
      '你在{location}的修炼场进行深度闭关九九八十一天，完成时全塔共鸣——你已触摸到了{legend}的剑之境界！',
      '你的剑技等级达到了前所未有的高度，{location}的剑气因为你而沸腾。',
      '{legend}的剑意残魂亲自降临{location}，为你指点剑道大道。',
    ],
    effects: { special: 12, intelligence: 10, strength: 5 },
  },
  {
    id: 'fc_cu_02', category: 'cultivation', minAge: 30, maxAge: 60, probability: 0.16,
    templates: [
      '你成功将{legend}的剑技融会贯通，实力暴涨！',
      '你在{location}经历了一场剑技奇遇，能力大涨，连{npc}都震惊不已。',
      '你突破了困扰多年的剑技瓶颈，{location}的剑气异象持续了三日三夜。',
    ],
    effects: { special: 8, intelligence: 5 },
  },
  {
    id: 'fc_cu_03', category: 'cultivation', minAge: 20, maxAge: 50, probability: 0.25,
    templates: [
      '你在{location}的训练场进行封闭式修炼，领悟了新的剑技等级。',
      '{npc}传授你一项高级剑技，你勤加练习，终于大成。',
      '你在{location}发现了一处剑气充沛的修炼场，训练事半功倍。',
    ],
    effects: { special: 5, intelligence: 3 },
  },
  {
    id: 'fc_cu_04', category: 'cultivation', minAge: 15, maxAge: 40, probability: 0.42,
    templates: [
      '你在剑技修炼中遇到了瓶颈，{npc}指点你突破。',
      '你在{location}经历了一场战斗奇遇，能力有所精进。',
      '你成功锻造/获得了辅助修炼的装备，效果显著。',
    ],
    effects: { special: 4, strength: 2 },
  },
  {
    id: 'fc_cu_05', category: 'cultivation', minAge: 13, maxAge: 40, probability: 0.51,
    templates: [
      '你在{location}按部就班地学习和训练，虽然没有突破但根基更加稳固。',
      '{npc}检查了你的修炼进度，表示满意。',
      '你在{location}研读剑技文献，对一些招式有了新的理解。',
    ],
    effects: { special: 2, intelligence: 1 },
  },
  {
    id: 'fc_cu_06', category: 'cultivation', minAge: 10, maxAge: 35, probability: 0.72,
    templates: [
      '你在{location}巩固已有的剑技等级，为下一次突破做准备。',
      '这一年修炼进度平平，但你没有气馁。',
      '{npc}提醒你不可急于求成，你虚心接受。',
    ],
    effects: { special: 2 },
  },
  {
    id: 'fc_ex_01', category: 'exploration', minAge: 25, maxAge: 50, probability: 0.05,
    templates: [
      '你深入{location}最深处，发现了{legend}留下的核心剑技传承，获得了改变命运的机缘！',
      '你在{location}找到了通往隐藏楼层的入口，{legend}的秘密向你敞开。',
      '你解开了一个困扰世人万年的塔之谜题，{location}的真相让你震惊。',
    ],
    effects: { luck: 10, intelligence: 8, special: 6 },
  },
  {
    id: 'fc_ex_02', category: 'exploration', minAge: 20, maxAge: 45, probability: 0.12,
    templates: [
      '你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。',
      '你探索了一处危险的{location}，九死一生后带回了珍贵的装备图纸。',
      '{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。',
    ],
    effects: { luck: 6, strength: 4 },
  },
  {
    id: 'fc_ex_03', category: 'exploration', minAge: 15, maxAge: 40, probability: 0.26,
    templates: [
      '你深入{location}探险，发现了未知的秘密。',
      '你在{location}找到了一些有价值的物品，收获颇丰。',
      '你在{location}迷路了，却意外发现了一处隐蔽的安全屋。',
    ],
    effects: { luck: 4, strength: 2 },
  },
  {
    id: 'fc_ex_04', category: 'exploration', minAge: 18, maxAge: 45, probability: 0.43,
    templates: [
      '你在{location}发现了一些古老的冒险者日记，记录着失落的楼层信息。',
      '你探索了一处废弃的{location}，找到了一些有用的物资。',
      '{npc}带你进入了一个秘密的{location}，你大开眼界。',
    ],
    effects: { intelligence: 3, luck: 3 },
  },
  {
    id: 'fc_ex_05', category: 'exploration', minAge: 13, maxAge: 35, probability: 0.56,
    templates: [
      '你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。',
      '你跟着{npc}去{location}采集了一些材料。',
      '你在{location}发现了一些普通的晶体，聊胜于无。',
    ],
    effects: { luck: 2 },
  },
  {
    id: 'fc_ex_06', category: 'exploration', minAge: 35, maxAge: 70, probability: 0.69,
    templates: [
      '你在{location}进行了常规的巡查，一切正常。',
      '你重访了以前去过的{location}，有了一些新的发现。',
      '你在{location}休息了一段时间，养精蓄锐。',
    ],
    effects: { health: 2 },
  },
  {
    id: 'fc_ws_01', category: 'world_story', minAge: 40, maxAge: 70, probability: 0.05,
    templates: [
      '{legend}的封印彻底破碎，整个塔陷入了前所未有的动荡，你被卷入了漩涡中心！',
      '一场席卷全塔的大战爆发了，{location}首当其冲，你必须做出选择。',
      '塔的规则开始改变，{legend}的意志降临，所有冒险者都受到了影响。',
    ],
    effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 },
  },
  {
    id: 'fc_ws_02', category: 'world_story', minAge: 30, maxAge: 60, probability: 0.15,
    templates: [
      '你发现{location}隐藏着改变塔的秘密，各方势力为此展开了明争暗斗。',
      '{npc}告诉你一个关于塔起源的惊天秘密，你的世界观被彻底颠覆。',
      '传说中的{legend}即将降临，所有冒险者都在做准备，{location}的气氛紧张到了极点。',
    ],
    effects: { intelligence: 6, charisma: 4 },
  },
  {
    id: 'fc_ws_03', category: 'world_story', minAge: 25, maxAge: 50, probability: 0.3,
    templates: [
      '{location}附近发生了局部冲突，你不得不卷入其中。',
      '{npc}带来了一个重要的消息，可能影响到{location}的未来。',
      '你注意到了{location}的一些异常现象，似乎有什么大事要发生。',
    ],
    effects: { charisma: 3, luck: 3 },
  },
  {
    id: 'fc_ws_04', category: 'world_story', minAge: 20, maxAge: 45, probability: 0.55,
    templates: [
      '你听到了一些关于{legend}的传闻，但真假难辨。',
      '{location}发生了一些小变化，但你没有太在意。',
      '{npc}跟你聊了聊最近的塔中时事，你表示关注。',
    ],
    effects: { intelligence: 2 },
  },
  {
    id: 'fc_ws_05', category: 'world_story', minAge: 40, maxAge: 80, probability: 0.75,
    templates: [
      '塔依旧矗立，{location}的生活一如既往。',
      '你听说了一些关于{legend}的新消息，但似乎没什么实质内容。',
      '这一年没什么大事发生，你在{location}安稳度日。',
    ],
    effects: { luck: 1 },
  },
  {
    id: 'fc_hd_01', category: 'hidden', minAge: 60, maxAge: 120, probability: 0.03,
    templates: [
      '你超越了{legend}，看到了塔之外的真相——原来这座塔只是……',
      '你发现了这座塔的运行规则，{location}只是一场巨大棋局的一角。',
      '{legend}的真正身份让你震惊不已，你终于理解了塔的本质。',
    ],
    effects: { intelligence: 15, special: 10 },
    conditions: [{ stat: 'intelligence', min: 120 }],
  },
  {
    id: 'fc_hd_02', category: 'hidden', minAge: 50, maxAge: 100, probability: 0.13,
    templates: [
      '你在{location}发现了一个被禁止入内的区域，里面藏着惊人的秘密。',
      '你解开了{legend}留下的谜题，获得了一份隐藏的剑技传承。',
      '{npc}告诉你一个只有极少数人知道的秘密，你感到责任重大。',
    ],
    effects: { intelligence: 10, special: 8 },
    conditions: [{ stat: 'intelligence', min: 100 }],
  },
  {
    id: 'fc_hd_03', category: 'hidden', minAge: 35, maxAge: 80, probability: 0.36,
    templates: [
      '你在{location}找到了一条隐秘的通道，通向未知的地方。',
      '你发现了一些关于{legend}的隐藏记录，内容令人费解。',
      '{npc}偷偷塞给你一张地图，上面标记着{location}的秘密地点。',
    ],
    effects: { luck: 6, intelligence: 4 },
    conditions: [{ stat: 'luck', min: 80 }],
  },
  {
    id: 'fc_hd_04', category: 'hidden', minAge: 20, maxAge: 60, probability: 0.56,
    templates: [
      '你在{location}听到了一些奇怪的声音，但找不到来源。',
      '你做了一个关于{legend}的怪梦，醒来后记忆模糊。',
      '{npc}欲言又止，似乎想告诉你什么秘密但最终没说出口。',
    ],
    effects: { intelligence: 3 },
    conditions: [{ stat: 'intelligence', min: 60 }],
  },
  {
    id: 'fc_dt_01', category: 'death', minAge: 10, maxAge: 100, probability: 0.08,
    templates: [
      '你在{location}与怪物的战斗中生命值归零，眼前一片漆黑……',
      '一场激烈的战斗后，你的生命力耗尽，倒在了{location}的血泊中。',
      '你感到力量正在流失，视野逐渐模糊。{npc}的呼喊声越来越远……',
    ],
    effects: { health: -100 },
  },
  {
    id: 'fc_dt_02', category: 'death', minAge: 15, maxAge: 80, probability: 0.06,
    templates: [
      '你被一名PK者在{location}偷袭，来不及反应就失去了意识……',
      '在{location}，一个红名玩家从背后刺穿了你的心脏。',
      'PK者的笑容是你最后看到的画面。你在{location}倒下了。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'fc_dt_03', category: 'death', minAge: 20, maxAge: 100, probability: 0.05,
    templates: [
      '楼层守护者的致命一击将你击飞，你在{location}重重撞在墙上，再也没能站起来。',
      'BOSS的怒吼声中，你的剑断成两截。{location}成为了你的葬身之地。',
      '你低估了{legend}的力量，在{location}被彻底粉碎。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'fc_dt_04', category: 'death', minAge: 60, maxAge: 200, probability: 0.1,
    templates: [
      '你在{location}的公会据点中安详地闭上了眼睛。这一生，你攀登到了力所能及的楼层。',
      '寿终正寝。{npc}握着你的手，目送你离开这座塔。',
      '你的剑放在了床头。在{location}，你平静地走完了最后一程。',
    ],
    effects: { health: -100 },
  },
  {
    id: 'fc_dt_05', category: 'death', minAge: 15, maxAge: 60, probability: 0.04,
    templates: [
      '你站在{location}的塔边，俯瞰着下方的虚空。一个念头闪过脑海：如果从这跳下去……',
      '塔的第100层真的有自由吗？还是另一座塔的开始？你在{location}陷入了无尽的迷茫。',
      '你跨过了{location}的护栏，纵身跃入虚空。风在耳边呼啸，你闭上了眼睛。',
    ],
    effects: { health: -100 },
  },  {
    id: 'fc_ie_lone_wolf_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '从小就喜欢一个人玩耍，在起始之镇的角落独自练剑。其他孩子觉得你古怪，但你毫不在意。',
    ],
    effects: { special: 5 },
    flags: ['chain_lone_wolf_childhood_0'],
    identityExclusive: 'lone_wolf',
  },
  {
    id: 'fc_ie_lone_wolf_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '你拒绝了所有玩伴的邀请，独自探索安全区边缘。{npc}警告你危险，但你只是淡淡一笑。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_lone_wolf_childhood_1'],
    identityExclusive: 'lone_wolf',
  },
  {
    id: 'fc_ie_lone_wolf_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '第一次独自击败了一只怪物，证明了独行也可以很强。{npc}震惊地说："你居然一个人做到了？"',
    ],
    effects: { special: 6 },
    flags: ['chain_lone_wolf_growth_0'],
    requiredFlags: ['chain_lone_wolf_childhood_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_lone_wolf_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '在{location}遭遇危机，没有队友只能靠自己突围。你伤痕累累地走了出来，眼神更加坚定。',
    ],
    effects: { special: 6 },
    flags: ['chain_lone_wolf_growth_1'],
    requiredFlags: ['chain_lone_wolf_childhood_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_lone_wolf_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成为了著名的独行者冒险者，拒绝加入任何公会。{npc}说："你是我见过最固执的人。"',
    ],
    effects: { special: 8 },
    flags: ['chain_lone_wolf_adult_0'],
    requiredFlags: ['chain_lone_wolf_growth_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_lone_wolf_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '面临抉择：继续独行到底，还是暂时与他人合作？',
      '',
    ],
    effects: { special: 8 },
    choices: [
      { text: '选择激进之路', successRate: 1, successText: '你选择了激进之路，作为独行者踏上了属于自己的巅峰。', failText: '你选择了激进之路，但代价远超预期。', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_lone_wolf_path'], failFlags: ['branch_lone_wolf_path_fail'] },
      { text: '选择稳健之道', successRate: 1, successText: '你选择了稳健之道，作为独行者稳步前行。', failText: '你选择了稳健之道，却发现机遇稍纵即逝。', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_lone_wolf_new'], failFlags: ['branch_lone_wolf_new_fail'] },
    ],
    flags: ['chain_lone_wolf_adult_1'],
    requiredFlags: ['chain_lone_wolf_growth_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_lone_wolf_07', category: 'identity_exclusive', minAge: 10, maxAge: 35, probability: 0.7,
    templates: [
      '独自挑战楼层守护者，创造了独行者传说。整个塔都在谈论那个黑衣剑客。',
    ],
    effects: { special: 10 },
    flags: ['chain_lone_wolf_special_0'],
    requiredFlags: ['chain_lone_wolf_adult_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_lone_wolf_08', category: 'identity_exclusive', minAge: 38, maxAge: 60, probability: 0.7,
    templates: [
      '到达了前人未到的楼层，证明了独行者的极致。你站在高处，俯瞰下方的云海。',
    ],
    effects: { special: 10 },
    flags: ['chain_lone_wolf_special_1'],
    requiredFlags: ['chain_lone_wolf_adult_0'],
    identityExclusive: 'lone_wolf',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_guild_master_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '小时候就喜欢在起始之镇组织孩子们玩游戏。你总是自然而然地成为"队长"。',
    ],
    effects: { special: 5 },
    flags: ['chain_guild_master_childhood_0'],
    identityExclusive: 'guild_master',
  },
  {
    id: 'fc_ie_guild_master_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '成立了第一个"冒险者小队"，虽然成员只有三人。{npc}嘲笑你们过家家，但你很认真。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_guild_master_childhood_1'],
    identityExclusive: 'guild_master',
  },
  {
    id: 'fc_ie_guild_master_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '正式注册了小型公会，开始招募成员。{location}的冒险者公会里，你的名字第一次被登记。',
    ],
    effects: { special: 6 },
    flags: ['chain_guild_master_growth_0'],
    requiredFlags: ['chain_guild_master_childhood_0'],
    identityExclusive: 'guild_master',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_guild_master_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '带领公会成员完成了一次重要任务。虽然过程曲折，但最终成功了。',
    ],
    effects: { special: 6 },
    flags: ['chain_guild_master_growth_1'],
    requiredFlags: ['chain_guild_master_childhood_0'],
    identityExclusive: 'guild_master',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_guild_master_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '公会发展到中等规模，成为{location}的知名势力。各方冒险者纷纷来投。',
    ],
    effects: { special: 8 },
    flags: ['chain_guild_master_adult_0'],
    requiredFlags: ['chain_guild_master_growth_0'],
    identityExclusive: 'guild_master',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_guild_master_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '公会面临抉择：快速扩张还是精兵简政？',
      '',
    ],
    effects: { special: 8 },
    choices: [
      { text: '选择激进之路', successRate: 1, successText: '你选择了激进之路，作为公会领袖踏上了属于自己的巅峰。', failText: '你选择了激进之路，但代价远超预期。', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_guild_master_path'], failFlags: ['branch_guild_master_path_fail'] },
      { text: '选择稳健之道', successRate: 1, successText: '你选择了稳健之道，作为公会领袖稳步前行。', failText: '你选择了稳健之道，却发现机遇稍纵即逝。', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_guild_master_new'], failFlags: ['branch_guild_master_new_fail'] },
    ],
    flags: ['chain_guild_master_adult_1'],
    requiredFlags: ['chain_guild_master_growth_0'],
    identityExclusive: 'guild_master',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_guild_master_07', category: 'identity_exclusive', minAge: 10, maxAge: 35, probability: 0.7,
    templates: [
      '公会成为了楼层攻略的中坚力量。你站在队伍最前方，指挥若定。',
    ],
    effects: { special: 10 },
    flags: ['chain_guild_master_special_0'],
    requiredFlags: ['chain_guild_master_adult_0'],
    identityExclusive: 'guild_master',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_guild_master_08', category: 'identity_exclusive', minAge: 38, maxAge: 60, probability: 0.7,
    templates: [
      '建立了跨楼层的庞大公会联盟。你的名字被刻在了起始之镇的纪念碑上。',
    ],
    effects: { special: 10 },
    flags: ['chain_guild_master_special_1'],
    requiredFlags: ['chain_guild_master_adult_0'],
    identityExclusive: 'guild_master',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_blacksmith_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '在铁匠铺长大，从小对金属和火焰着迷。{npc}说你的小手握住锤子的姿势很标准。',
    ],
    effects: { special: 5 },
    flags: ['chain_blacksmith_childhood_0'],
    identityExclusive: 'blacksmith',
  },
  {
    id: 'fc_ie_blacksmith_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '打造出了第一把属于自己的小匕首。虽然粗糙，但那是你的骄傲。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_blacksmith_childhood_1'],
    identityExclusive: 'blacksmith',
  },
  {
    id: 'fc_ie_blacksmith_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '成为学徒锻造师，掌握了基础锻造技术。{npc}称赞你是百年一遇的锻造天才。',
    ],
    effects: { special: 6 },
    flags: ['chain_blacksmith_growth_0'],
    requiredFlags: ['chain_blacksmith_childhood_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_blacksmith_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '在一次实验中偶然发现了新的合金配方。{location}的铁匠铺因为你而声名鹊起。',
    ],
    effects: { special: 6 },
    flags: ['chain_blacksmith_growth_1'],
    requiredFlags: ['chain_blacksmith_childhood_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_blacksmith_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '开设了自己的锻造铺，名声渐起。每天都有冒险者排队找你打造装备。',
    ],
    effects: { special: 8 },
    flags: ['chain_blacksmith_adult_0'],
    requiredFlags: ['chain_blacksmith_growth_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_blacksmith_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '面临抉择：追求极致品质还是批量生产赚钱？',
      '',
    ],
    effects: { special: 8 },
    choices: [
      { text: '选择激进之路', successRate: 1, successText: '你选择了激进之路，作为锻造师踏上了属于自己的巅峰。', failText: '你选择了激进之路，但代价远超预期。', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_blacksmith_path'], failFlags: ['branch_blacksmith_path_fail'] },
      { text: '选择稳健之道', successRate: 1, successText: '你选择了稳健之道，作为锻造师稳步前行。', failText: '你选择了稳健之道，却发现机遇稍纵即逝。', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_blacksmith_new'], failFlags: ['branch_blacksmith_new_fail'] },
    ],
    flags: ['chain_blacksmith_adult_1'],
    requiredFlags: ['chain_blacksmith_growth_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_blacksmith_07', category: 'identity_exclusive', minAge: 10, maxAge: 35, probability: 0.7,
    templates: [
      '锻造出了传说中的武器，震动全塔。{npc}看着那把剑，眼中满是震撼。',
    ],
    effects: { special: 10 },
    flags: ['chain_blacksmith_special_0'],
    requiredFlags: ['chain_blacksmith_adult_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_blacksmith_08', category: 'identity_exclusive', minAge: 38, maxAge: 60, probability: 0.7,
    templates: [
      '成为了塔中最顶级的锻造大师。你的作品被收藏在博物馆中，供后人瞻仰。',
    ],
    effects: { special: 10 },
    flags: ['chain_blacksmith_special_1'],
    requiredFlags: ['chain_blacksmith_adult_0'],
    identityExclusive: 'blacksmith',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_tamer_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '救了一只受伤的小兽，它成为了你的第一个伙伴。{npc}说你们看起来很般配。',
    ],
    effects: { special: 5 },
    flags: ['chain_tamer_childhood_0'],
    identityExclusive: 'tamer',
  },
  {
    id: 'fc_ie_tamer_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '发现自己能听懂怪物的话语，虽然只是一点点。这让你对塔有了全新的认识。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_tamer_childhood_1'],
    identityExclusive: 'tamer',
  },
  {
    id: 'fc_ie_tamer_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '成功驯服了第一只战斗型怪物。{npc}吓得后退三步，但你笑着安抚了它。',
    ],
    effects: { special: 6 },
    flags: ['chain_tamer_growth_0'],
    requiredFlags: ['chain_tamer_childhood_0'],
    identityExclusive: 'tamer',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_tamer_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '你的驯兽技术引起了攻略组的注意。他们邀请你参与特殊任务。',
    ],
    effects: { special: 6 },
    flags: ['chain_tamer_growth_1'],
    requiredFlags: ['chain_tamer_childhood_0'],
    identityExclusive: 'tamer',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_tamer_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '拥有了一支小型怪物军团。{location}的冒险者们对你又敬又畏。',
    ],
    effects: { special: 8 },
    flags: ['chain_tamer_adult_0'],
    requiredFlags: ['chain_tamer_growth_0'],
    identityExclusive: 'tamer',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_tamer_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '面临抉择：深入野生区驯服稀有怪物，还是培育现有伙伴？',
      '',
    ],
    effects: { special: 8 },
    choices: [
      { text: '选择激进之路', successRate: 1, successText: '你选择了激进之路，作为驯兽师踏上了属于自己的巅峰。', failText: '你选择了激进之路，但代价远超预期。', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_tamer_path'], failFlags: ['branch_tamer_path_fail'] },
      { text: '选择稳健之道', successRate: 1, successText: '你选择了稳健之道，作为驯兽师稳步前行。', failText: '你选择了稳健之道，却发现机遇稍纵即逝。', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_tamer_new'], failFlags: ['branch_tamer_new_fail'] },
    ],
    flags: ['chain_tamer_adult_1'],
    requiredFlags: ['chain_tamer_growth_0'],
    identityExclusive: 'tamer',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_tamer_07', category: 'identity_exclusive', minAge: 10, maxAge: 35, probability: 0.7,
    templates: [
      '驯服了一只楼层守护者的幼崽。全塔震惊——从来没有人做到过。',
    ],
    effects: { special: 10 },
    flags: ['chain_tamer_special_0'],
    requiredFlags: ['chain_tamer_adult_0'],
    identityExclusive: 'tamer',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_tamer_08', category: 'identity_exclusive', minAge: 38, maxAge: 60, probability: 0.7,
    templates: [
      '成为了塔中独一无二的驯兽大师。你和你的伙伴们成为了传说中的组合。',
    ],
    effects: { special: 10 },
    flags: ['chain_tamer_special_1'],
    requiredFlags: ['chain_tamer_adult_0'],
    identityExclusive: 'tamer',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_info_broker_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '从小消息灵通，是起始之镇的"小灵通"。什么风吹草动都逃不过你的耳朵。',
    ],
    effects: { special: 5 },
    flags: ['chain_info_broker_childhood_0'],
    identityExclusive: 'info_broker',
  },
  {
    id: 'fc_ie_info_broker_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '开始收集和贩卖各种小道消息。你的第一份情报卖了一个铜板，但你很开心。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_info_broker_childhood_1'],
    identityExclusive: 'info_broker',
  },
  {
    id: 'fc_ie_info_broker_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '建立了第一条情报网络，覆盖多个楼层。{npc}成了你的第一个大客户。',
    ],
    effects: { special: 6 },
    flags: ['chain_info_broker_growth_0'],
    requiredFlags: ['chain_info_broker_childhood_0'],
    identityExclusive: 'info_broker',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_info_broker_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '获得了关于{legend}的重要情报。这份情报的价值足以改变塔的格局。',
    ],
    effects: { special: 6 },
    flags: ['chain_info_broker_growth_1'],
    requiredFlags: ['chain_info_broker_childhood_0'],
    identityExclusive: 'info_broker',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_info_broker_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成为了塔中有名的情报商，各路势力都来买消息。你的据点成了最热闹的地方。',
    ],
    effects: { special: 8 },
    flags: ['chain_info_broker_adult_0'],
    requiredFlags: ['chain_info_broker_growth_0'],
    identityExclusive: 'info_broker',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_info_broker_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '面临抉择：出售独家情报获利，还是保守秘密等待时机？',
      '',
    ],
    effects: { special: 8 },
    choices: [
      { text: '选择激进之路', successRate: 1, successText: '你选择了激进之路，作为情报商踏上了属于自己的巅峰。', failText: '你选择了激进之路，但代价远超预期。', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_info_broker_path'], failFlags: ['branch_info_broker_path_fail'] },
      { text: '选择稳健之道', successRate: 1, successText: '你选择了稳健之道，作为情报商稳步前行。', failText: '你选择了稳健之道，却发现机遇稍纵即逝。', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_info_broker_new'], failFlags: ['branch_info_broker_new_fail'] },
    ],
    flags: ['chain_info_broker_adult_1'],
    requiredFlags: ['chain_info_broker_growth_0'],
    identityExclusive: 'info_broker',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_info_broker_07', category: 'identity_exclusive', minAge: 10, maxAge: 35, probability: 0.7,
    templates: [
      '发现了塔的核心机密。{npc}警告你："知道得太多，会没命的。"',
    ],
    effects: { special: 10 },
    flags: ['chain_info_broker_special_0'],
    requiredFlags: ['chain_info_broker_adult_0'],
    identityExclusive: 'info_broker',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_info_broker_08', category: 'identity_exclusive', minAge: 38, maxAge: 60, probability: 0.7,
    templates: [
      '建立了覆盖全塔的情报帝国。你是塔中最神秘也最危险的人。',
    ],
    effects: { special: 10 },
    flags: ['chain_info_broker_special_1'],
    requiredFlags: ['chain_info_broker_adult_0'],
    identityExclusive: 'info_broker',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_chef_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '在起始之镇的酒馆帮厨，对料理产生兴趣。{npc}说你做的汤比主厨还好喝。',
    ],
    effects: { special: 5 },
    flags: ['chain_chef_childhood_0'],
    identityExclusive: 'chef',
  },
  {
    id: 'fc_ie_chef_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '发现塔中怪物的肉可以做成美味的料理。虽然听起来恶心，但味道出奇的好。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_chef_childhood_1'],
    identityExclusive: 'chef',
  },
  {
    id: 'fc_ie_chef_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '掌握了独特的怪物料理技术。{npc}吃完后泪流满面："这是我吃过最好吃的东西！"',
    ],
    effects: { special: 6 },
    flags: ['chain_chef_growth_0'],
    requiredFlags: ['chain_chef_childhood_0'],
    identityExclusive: 'chef',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_chef_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '你的料理被发现能临时提升冒险者属性。攻略组开始高价收购你的作品。',
    ],
    effects: { special: 6 },
    flags: ['chain_chef_growth_1'],
    requiredFlags: ['chain_chef_childhood_0'],
    identityExclusive: 'chef',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_chef_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '开设了塔中第一家怪物料理餐厅。{location}的冒险者们排起了长队。',
    ],
    effects: { special: 8 },
    flags: ['chain_chef_adult_0'],
    requiredFlags: ['chain_chef_growth_0'],
    identityExclusive: 'chef',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_chef_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '面临抉择：追求极致美味，还是研究战斗料理？',
      '',
    ],
    effects: { special: 8 },
    choices: [
      { text: '选择激进之路', successRate: 1, successText: '你选择了激进之路，作为料理人踏上了属于自己的巅峰。', failText: '你选择了激进之路，但代价远超预期。', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_chef_path'], failFlags: ['branch_chef_path_fail'] },
      { text: '选择稳健之道', successRate: 1, successText: '你选择了稳健之道，作为料理人稳步前行。', failText: '你选择了稳健之道，却发现机遇稍纵即逝。', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_chef_new'], failFlags: ['branch_chef_new_fail'] },
    ],
    flags: ['chain_chef_adult_1'],
    requiredFlags: ['chain_chef_growth_0'],
    identityExclusive: 'chef',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_chef_07', category: 'identity_exclusive', minAge: 10, maxAge: 35, probability: 0.7,
    templates: [
      '发明了一道能永久提升属性的传说料理。全塔的冒险者都疯狂了。',
    ],
    effects: { special: 10 },
    flags: ['chain_chef_special_0'],
    requiredFlags: ['chain_chef_adult_0'],
    identityExclusive: 'chef',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_chef_08', category: 'identity_exclusive', minAge: 38, maxAge: 60, probability: 0.7,
    templates: [
      '成为了塔中料理界的传奇。你的餐厅开遍了每一层。',
    ],
    effects: { special: 10 },
    flags: ['chain_chef_special_1'],
    requiredFlags: ['chain_chef_adult_0'],
    identityExclusive: 'chef',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_frontliner_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '从小就梦想成为到达第100层的人。{npc}摸着你的头说："那可不是件容易的事。"',
    ],
    effects: { special: 5 },
    flags: ['chain_frontliner_childhood_0'],
    identityExclusive: 'frontliner',
  },
  {
    id: 'fc_ie_frontliner_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '主动要求加入前线攻略组的预备队。训练艰苦，但你从未退缩。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_frontliner_childhood_1'],
    identityExclusive: 'frontliner',
  },
  {
    id: 'fc_ie_frontliner_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '正式成为前线攻略者，站在了人类的最前沿。{location}的战场上，你是第一个拔剑的人。',
    ],
    effects: { special: 6 },
    flags: ['chain_frontliner_growth_0'],
    requiredFlags: ['chain_frontliner_childhood_0'],
    identityExclusive: 'frontliner',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_frontliner_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '在一次攻略战中发挥了关键作用。你的英勇表现让所有人都记住了你的名字。',
    ],
    effects: { special: 6 },
    flags: ['chain_frontliner_growth_1'],
    requiredFlags: ['chain_frontliner_childhood_0'],
    identityExclusive: 'frontliner',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_frontliner_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成为了攻略组的核心成员。每次楼层攻略，你都是先锋。',
    ],
    effects: { special: 8 },
    flags: ['chain_frontliner_adult_0'],
    requiredFlags: ['chain_frontliner_growth_0'],
    identityExclusive: 'frontliner',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_frontliner_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '面临抉择：继续冲击更高楼层，还是回撤保护新手？',
      '',
    ],
    effects: { special: 8 },
    choices: [
      { text: '选择激进之路', successRate: 1, successText: '你选择了激进之路，作为前线攻略者踏上了属于自己的巅峰。', failText: '你选择了激进之路，但代价远超预期。', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_frontliner_path'], failFlags: ['branch_frontliner_path_fail'] },
      { text: '选择稳健之道', successRate: 1, successText: '你选择了稳健之道，作为前线攻略者稳步前行。', failText: '你选择了稳健之道，却发现机遇稍纵即逝。', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_frontliner_new'], failFlags: ['branch_frontliner_new_fail'] },
    ],
    flags: ['chain_frontliner_adult_1'],
    requiredFlags: ['chain_frontliner_growth_0'],
    identityExclusive: 'frontliner',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_frontliner_07', category: 'identity_exclusive', minAge: 10, maxAge: 35, probability: 0.7,
    templates: [
      '参与了楼层守护者的首次击杀。你的名字被写入了塔的历史。',
    ],
    effects: { special: 10 },
    flags: ['chain_frontliner_special_0'],
    requiredFlags: ['chain_frontliner_adult_0'],
    identityExclusive: 'frontliner',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_frontliner_08', category: 'identity_exclusive', minAge: 38, maxAge: 60, probability: 0.7,
    templates: [
      '成为了塔中攻略进度最快的冒险者。第100层就在前方，你一定能到达。',
    ],
    effects: { special: 10 },
    flags: ['chain_frontliner_special_1'],
    requiredFlags: ['chain_frontliner_adult_0'],
    identityExclusive: 'frontliner',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_healer_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '展现出强大的治愈天赋，能安抚伤口。{npc}说你的手有神奇的力量。',
    ],
    effects: { special: 5 },
    flags: ['chain_healer_childhood_0'],
    identityExclusive: 'healer',
  },
  {
    id: 'fc_ie_healer_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '开始系统学习塔中的治疗技能。你比任何人都刻苦。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_healer_childhood_1'],
    identityExclusive: 'healer',
  },
  {
    id: 'fc_ie_healer_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '成为了队伍中不可或缺的治疗者。没有你的队伍，死亡率高出三倍。',
    ],
    effects: { special: 6 },
    flags: ['chain_healer_growth_0'],
    requiredFlags: ['chain_healer_childhood_0'],
    identityExclusive: 'healer',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_healer_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '研发出了新的治疗方法，救活了许多濒死者。{npc}称你为"奇迹之子"。',
    ],
    effects: { special: 6 },
    flags: ['chain_healer_growth_1'],
    requiredFlags: ['chain_healer_childhood_0'],
    identityExclusive: 'healer',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_healer_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '组建了专门的治疗团队。{location}的医疗站因为你而人满为患。',
    ],
    effects: { special: 8 },
    flags: ['chain_healer_adult_0'],
    requiredFlags: ['chain_healer_growth_0'],
    identityExclusive: 'healer',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_healer_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '面临抉择：优先治疗前线强者，还是救助所有需要的人？',
      '',
    ],
    effects: { special: 8 },
    choices: [
      { text: '选择激进之路', successRate: 1, successText: '你选择了激进之路，作为治疗者踏上了属于自己的巅峰。', failText: '你选择了激进之路，但代价远超预期。', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_healer_path'], failFlags: ['branch_healer_path_fail'] },
      { text: '选择稳健之道', successRate: 1, successText: '你选择了稳健之道，作为治疗者稳步前行。', failText: '你选择了稳健之道，却发现机遇稍纵即逝。', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_healer_new'], failFlags: ['branch_healer_new_fail'] },
    ],
    flags: ['chain_healer_adult_1'],
    requiredFlags: ['chain_healer_growth_0'],
    identityExclusive: 'healer',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_healer_07', category: 'identity_exclusive', minAge: 10, maxAge: 35, probability: 0.7,
    templates: [
      '在一次大规模战斗中拯救了数百人。你的光芒照亮了整个战场。',
    ],
    effects: { special: 10 },
    flags: ['chain_healer_special_0'],
    requiredFlags: ['chain_healer_adult_0'],
    identityExclusive: 'healer',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_healer_08', category: 'identity_exclusive', minAge: 38, maxAge: 60, probability: 0.7,
    templates: [
      '掌握了传说中的治愈圣技。你成为了塔中所有生命的守护者。',
    ],
    effects: { special: 10 },
    flags: ['chain_healer_special_1'],
    requiredFlags: ['chain_healer_adult_0'],
    identityExclusive: 'healer',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_merchant_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '从小在起始之镇摆摊，展现出商业头脑。{npc}说你将来会成为大富翁。',
    ],
    effects: { special: 5 },
    flags: ['chain_merchant_childhood_0'],
    identityExclusive: 'merchant',
  },
  {
    id: 'fc_ie_merchant_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '第一次成功倒卖装备，赚取了第一桶金。你用这笔钱扩大了经营。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_merchant_childhood_1'],
    identityExclusive: 'merchant',
  },
  {
    id: 'fc_ie_merchant_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '建立了自己的商会，开始在多个楼层做生意。{npc}成了你的合作伙伴。',
    ],
    effects: { special: 6 },
    flags: ['chain_merchant_growth_0'],
    requiredFlags: ['chain_merchant_childhood_0'],
    identityExclusive: 'merchant',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_merchant_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '与各大公会建立了贸易关系。你的商队成为了塔中最繁忙的队伍。',
    ],
    effects: { special: 6 },
    flags: ['chain_merchant_growth_1'],
    requiredFlags: ['chain_merchant_childhood_0'],
    identityExclusive: 'merchant',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_merchant_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成为了塔中首屈一指的大商人。{location}的商业街上，最大的店铺属于你。',
    ],
    effects: { special: 8 },
    flags: ['chain_merchant_adult_0'],
    requiredFlags: ['chain_merchant_growth_0'],
    identityExclusive: 'merchant',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_merchant_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '面临抉择：垄断市场获利，还是公平贸易建立口碑？',
      '',
    ],
    effects: { special: 8 },
    choices: [
      { text: '选择激进之路', successRate: 1, successText: '你选择了激进之路，作为商人踏上了属于自己的巅峰。', failText: '你选择了激进之路，但代价远超预期。', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_merchant_path'], failFlags: ['branch_merchant_path_fail'] },
      { text: '选择稳健之道', successRate: 1, successText: '你选择了稳健之道，作为商人稳步前行。', failText: '你选择了稳健之道，却发现机遇稍纵即逝。', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_merchant_new'], failFlags: ['branch_merchant_new_fail'] },
    ],
    flags: ['chain_merchant_adult_1'],
    requiredFlags: ['chain_merchant_growth_0'],
    identityExclusive: 'merchant',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_merchant_07', category: 'identity_exclusive', minAge: 10, maxAge: 35, probability: 0.7,
    templates: [
      '发现了通往隐藏楼层的秘密商路。你的商品从此独一无二。',
    ],
    effects: { special: 10 },
    flags: ['chain_merchant_special_0'],
    requiredFlags: ['chain_merchant_adult_0'],
    identityExclusive: 'merchant',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_merchant_08', category: 'identity_exclusive', minAge: 38, maxAge: 60, probability: 0.7,
    templates: [
      '建立了跨越全塔的商业帝国。你证明了商人也能改变塔的命运。',
    ],
    effects: { special: 10 },
    flags: ['chain_merchant_special_1'],
    requiredFlags: ['chain_merchant_adult_0'],
    identityExclusive: 'merchant',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_roleplayer_01', category: 'identity_exclusive', minAge: 3, maxAge: 8, probability: 0.85,
    templates: [
      '喜欢在起始之镇扮演各种角色。今天是骑士，明天是魔法师。',
    ],
    effects: { special: 5 },
    flags: ['chain_roleplayer_childhood_0'],
    identityExclusive: 'roleplayer',
  },
  {
    id: 'fc_ie_roleplayer_02', category: 'identity_exclusive', minAge: 7, maxAge: 12, probability: 0.85,
    templates: [
      '开始认真研究塔中各职业的特点。你的模仿越来越逼真。',
    ],
    effects: { intelligence: 5 },
    flags: ['chain_roleplayer_childhood_1'],
    identityExclusive: 'roleplayer',
  },
  {
    id: 'fc_ie_roleplayer_03', category: 'identity_exclusive', minAge: 14, maxAge: 20, probability: 0.8,
    templates: [
      '成为了一名全能型冒险者，什么都会一点。{npc}说你是"万金油"。',
    ],
    effects: { special: 6 },
    flags: ['chain_roleplayer_growth_0'],
    requiredFlags: ['chain_roleplayer_childhood_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_roleplayer_04', category: 'identity_exclusive', minAge: 19, maxAge: 25, probability: 0.8,
    templates: [
      '你的"角色扮演"技巧在战斗中出奇制胜。敌人永远猜不到你的下一招。',
    ],
    effects: { special: 6 },
    flags: ['chain_roleplayer_growth_1'],
    requiredFlags: ['chain_roleplayer_childhood_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 1,
  },
  {
    id: 'fc_ie_roleplayer_05', category: 'identity_exclusive', minAge: 26, maxAge: 35, probability: 0.75,
    templates: [
      '成为了塔中有名的"千面冒险者"。{location}的舞台上，你是永远的焦点。',
    ],
    effects: { special: 8 },
    flags: ['chain_roleplayer_adult_0'],
    requiredFlags: ['chain_roleplayer_growth_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_roleplayer_06', category: 'identity_exclusive', minAge: 36, maxAge: 45, probability: 0.75,
    templates: [
      '面临抉择：专精一个角色，还是继续全能发展？',
      '',
    ],
    effects: { special: 8 },
    choices: [
      { text: '选择激进之路', successRate: 1, successText: '你选择了激进之路，作为角色扮演者踏上了属于自己的巅峰。', failText: '你选择了激进之路，但代价远超预期。', effects: { special: 10, strength: 5 }, failEffects: { intelligence: 5, health: -5 }, flags: ['branch_roleplayer_path'], failFlags: ['branch_roleplayer_path_fail'] },
      { text: '选择稳健之道', successRate: 1, successText: '你选择了稳健之道，作为角色扮演者稳步前行。', failText: '你选择了稳健之道，却发现机遇稍纵即逝。', effects: { luck: 5, charisma: 5 }, failEffects: { luck: -3 }, flags: ['branch_roleplayer_new'], failFlags: ['branch_roleplayer_new_fail'] },
    ],
    flags: ['chain_roleplayer_adult_1'],
    requiredFlags: ['chain_roleplayer_growth_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 2,
  },
  {
    id: 'fc_ie_roleplayer_07', category: 'identity_exclusive', minAge: 10, maxAge: 35, probability: 0.7,
    templates: [
      '成功扮演了楼层守护者，骗过了所有人。这场表演堪称完美。',
    ],
    effects: { special: 10 },
    flags: ['chain_roleplayer_special_0'],
    requiredFlags: ['chain_roleplayer_adult_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 3,
  },
  {
    id: 'fc_ie_roleplayer_08', category: 'identity_exclusive', minAge: 38, maxAge: 60, probability: 0.7,
    templates: [
      '你的真实身份成为了塔中最大的谜团。没有人知道你到底是谁。',
    ],
    effects: { special: 10 },
    flags: ['chain_roleplayer_special_1'],
    requiredFlags: ['chain_roleplayer_adult_0'],
    identityExclusive: 'roleplayer',
    chainPriority: 3,
  },
  {
    id: 'fc_te_01', category: 'trash_exclusive', minAge: 0, maxAge: 6, probability: 0.92,
    templates: [
      '你出生在起始之镇，但所有属性都低得可怜。其他孩子嘲笑你："这种废材也配攀登这座塔？"',
      '{npc}安慰你说："天赋不代表一切，在这座塔里，努力也能创造奇迹。"',
    ],
    effects: { strength: -2, luck: 1 },
    flags: ['trash_childhood'],
    talentExclusive: 'trash',
  },
  {
    id: 'fc_te_02', category: 'trash_exclusive', minAge: 4, maxAge: 10, probability: 0.88,
    templates: [
      '你尝试练剑，但连最弱的怪物都打不过。{location}的孩子们把你当作笑柄。',
      '{npc}叹了口气："也许……你不适合战斗。"你不甘心，但没有反驳。',
    ],
    effects: { strength: -1, intelligence: 2 },
    flags: ['trash_youth'],
    talentExclusive: 'trash',
  },
  {
    id: 'fc_te_03', category: 'trash_exclusive', minAge: 12, maxAge: 18, probability: 0.85,
    templates: [
      '同伴们抛下你独自前往更高楼层。你只能独自在底层苟活，靠采集草药维生。',
      '在{location}，你遇到了一位老者。他说："废材也有废材的活法。"',
    ],
    effects: { luck: 3, charisma: -2 },
    flags: ['trash_abandoned'],
    talentExclusive: 'trash',
  },
  {
    id: 'fc_te_04', category: 'trash_exclusive', minAge: 15, maxAge: 22, probability: 0.8,
    templates: [
      '你在{location}的废墟中发现了一本破旧的剑术手册。封面上写着"{legend}之秘"。',
      '这本手册被所有人当作垃圾，但你总觉得它不简单。',
    ],
    effects: { intelligence: 5, luck: 5 },
    flags: ['trash_discovery'],
    talentExclusive: 'trash',
  },
  {
    id: 'fc_te_05', category: 'trash_exclusive', minAge: 18, maxAge: 25, probability: 0.75,
    templates: [
      '你发现手册中记载的是失传的{legend}剑术——一种只有属性极低者才能修炼的特殊剑法！',
      '原来这不是废材的耻辱，而是隐藏职业的钥匙。你激动得彻夜未眠。',
    ],
    effects: { special: 10, intelligence: 5 },
    flags: ['trash_secret'],
    talentExclusive: 'trash',
  },
  {
    id: 'fc_te_06', category: 'trash_exclusive', minAge: 26, maxAge: 35, probability: 0.78,
    templates: [
      '你开始秘密修炼这套特殊剑法。实力突飞猛进，但你不向任何人展示。',
      '在{location}的深夜，你独自练习。剑光越来越凌厉。',
    ],
    effects: { strength: 8, special: 8 },
    flags: ['trash_training'],
    talentExclusive: 'trash',
  },
  {
    id: 'fc_te_07', category: 'trash_exclusive', minAge: 30, maxAge: 40, probability: 0.72,
    templates: [
      '第一次公开出手，你以惊人的剑技击败了曾经嘲笑你的人。{location}鸦雀无声。',
      '{npc}震惊地说："这……这是那个废材？不可能！"',
    ],
    effects: { strength: 10, charisma: 5 },
    flags: ['trash_shock'],
    talentExclusive: 'trash',
  },
  {
    id: 'fc_te_08', category: 'trash_exclusive', minAge: 35, maxAge: 45, probability: 0.68,
    templates: [
      '那些曾经嘲笑你的人纷纷来巴结你。你看着他们的嘴脸，心中五味杂陈。',
      '{npc}说："这就是塔的规则。强者永远被追随。"',
    ],
    effects: { charisma: 3, luck: 3 },
    flags: ['trash_fame'],
    talentExclusive: 'trash',
  },
  {
    id: 'fc_te_09', category: 'trash_exclusive', minAge: 28, maxAge: 42, probability: 0.65,
    templates: [
      '你面临抉择：原谅那些曾嘲笑你的人，还是让他们付出代价？',
      '',
    ],
    effects: { charisma: 5 },
    choices: [
      { text: '原谅他们，以德报怨', successRate: 1, successText: '你的宽容让所有人羞愧。他们成为了你最忠实的追随者。', failText: '你的宽容被当作软弱，有人再次背叛了你。', effects: { charisma: 10, luck: 5 }, failEffects: { charisma: -5 }, flags: ['trash_forgive'], failFlags: ['trash_forgive_fail'] },
      { text: '报复他们，以牙还牙', successRate: 1, successText: '你让他们尝到了被羞辱的滋味。从此无人敢轻视你。', failText: '报复让你陷入了仇恨的漩涡，无法自拔。', effects: { strength: 8, special: 3 }, failEffects: { charisma: -10, luck: -5 }, flags: ['trash_revenge'], failFlags: ['trash_revenge_fail'] },
      { text: '无视他们，专注自己', successRate: 1, successText: '你的专注让实力更上一层楼。别人的看法已不再重要。', failText: '你的冷漠让你变得孤立，虽然强大却很孤独。', effects: { intelligence: 5, special: 5 }, failEffects: { charisma: -3 }, flags: ['trash_ignore'], failFlags: ['trash_ignore_fail'] },
    ],
    flags: ['trash_choice'],
    talentExclusive: 'trash',
  },
  {
    id: 'fc_te_10', category: 'trash_exclusive', minAge: 35, maxAge: 50, probability: 0.6,
    templates: [
      '你挑战了楼层守护者并获胜。全塔震动——那个曾经的废材，如今已是强者。',
      '{npc}在人群中看着你，眼中满是难以置信。',
    ],
    effects: { strength: 12, special: 10 },
    flags: ['trash_boss'],
    talentExclusive: 'trash',
  },
  {
    id: 'fc_te_11', category: 'trash_exclusive', minAge: 40, maxAge: 55, probability: 0.55,
    templates: [
      '你成为了塔中的传说。每当有新来的冒险者自卑时，老玩家们就会讲述你的故事。',
      '{location}的广场上，树立起了你的雕像。那是所有废材的希望。',
    ],
    effects: { charisma: 10, luck: 8 },
    flags: ['trash_legend'],
    talentExclusive: 'trash',
  },
  {
    id: 'fc_te_12', category: 'trash_exclusive', minAge: 45, maxAge: 60, probability: 0.5,
    templates: [
      '你留下了传承，告诉世人废材也能逆袭。那本破旧的剑术手册，成为了塔中最珍贵的宝物。',
      '临终前，你说："在这座塔里，没有废材，只有还没发光的宝石。"',
    ],
    effects: { special: 15, charisma: 10 },
    flags: ['trash_ending'],
    talentExclusive: 'trash',
  },  {
    id: 'fc_mc_01', category: 'major_choice', minAge: 15, maxAge: 15, probability: 0.98,
    templates: [
      '你站在{location}的广场上，年满十五。{npc}告诉你："在这座塔里，选择比天赋更重要。现在，做出你的选择吧。"',
    ],
    choices: [
      { text: '加入公会，依靠团队', successRate: 1, successText: '你加入了「银翼公会」，在团队的保护下快速成长。虽然失去了部分自由，但你获得了前所未有的资源和支持。', failText: '你加入的公会内部腐败严重，新人被当作炮灰。你后悔莫及。', effects: { charisma: 10, strength: 5, health: 10 }, failEffects: { charisma: -5, health: -15 }, flags: ['major_guild'], failFlags: ['major_guild_fail'] },
      { text: '独自攀登，成为独行者', successRate: 1, successText: '你拒绝了所有邀请，独自踏入了荒野区。孤独，但自由。你的剑只为了自己而挥动。', failText: '独行的道路比想象中更残酷。你在{location}被怪物围攻，险些丧命。', effects: { strength: 10, special: 8, luck: 5 }, failEffects: { health: -30, strength: -3 }, flags: ['major_solo'], failFlags: ['major_solo_fail'] },
      { text: '收集情报，成为幕后之人', successRate: 1, successText: '你选择了情报之路。在{location}的阴影中，你开始编织属于自己的情报网络。知识就是力量。', failText: '你的情报网络被更强大的势力察觉，你成为了被追杀的目标。', effects: { intelligence: 12, luck: 8 }, failEffects: { health: -20, intelligence: -5 }, flags: ['major_info'], failFlags: ['major_info_fail'] },
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  },
  {
    id: 'fc_mc_02', category: 'major_choice', minAge: 30, maxAge: 30, probability: 0.97,
    templates: [
      '你的剑技已小有所成。{npc}告诉你："前方就是楼层守护者的巢穴。你有三个选择：挑战它，一战成名；继续练级，稳扎稳打；或者回到下层，帮助那些新手。"',
    ],
    choices: [
      { text: '挑战楼层守护者', successRate: 1, successText: '你踏入了守护者的巢穴。九死一生后，你站在了它的残骸之上。全塔都在谈论你的名字。', failText: '守护者远比传说中强大。你被重创，不得不逃回安全区疗伤。', effects: { strength: 15, special: 10, charisma: 8 }, failEffects: { health: -50, strength: -5 }, flags: ['major_boss'], failFlags: ['major_boss_fail'] },
      { text: '继续练级，厚积薄发', successRate: 1, successText: '你选择了稳扎稳打。虽然错过了一战成名的机会，但你的根基前所未有的扎实。', failText: '你的谨慎被当作怯懦。曾经追随你的人纷纷离去。', effects: { intelligence: 10, special: 8, health: 10 }, failEffects: { charisma: -10 }, flags: ['major_train'], failFlags: ['major_train_fail'] },
      { text: '回到下层，帮助新手', successRate: 1, successText: '你回到了起始之镇，手把手教导新手。他们眼中的崇拜让你想起了曾经的自己。', failText: '你的善意被某些新手利用。他们偷走了你的装备，消失在了人群中。', effects: { charisma: 12, luck: 6 }, failEffects: { charisma: -8, luck: -5 }, flags: ['major_help'], failFlags: ['major_help_fail'] },
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  },
  {
    id: 'fc_mc_03', category: 'major_choice', minAge: 45, maxAge: 45, probability: 0.96,
    templates: [
      '一场大规模的楼层崩塌事故发生了。无数冒险者被困在{location}。{npc}看着你："你有能力救他们，但也会消耗大量资源。你会怎么做？"',
    ],
    choices: [
      { text: '不惜代价，救助所有人', successRate: 1, successText: '你倾尽所有，救出了被困的冒险者。他们称你为"塔之光"，你的名字被永远铭记。', failText: '你救出了大部分人，但自己因资源耗尽而虚弱不堪。', effects: { charisma: 15, luck: 10, health: -10 }, failEffects: { health: -30, strength: -5 }, flags: ['major_save'], failFlags: ['major_save_fail'] },
      { text: '只救自己认识的人', successRate: 1, successText: '你救出了自己的朋友和队友。虽然被其他人指责自私，但至少你保护了自己人。', failText: '你的选择性救助引发了众怒。你成为了塔中被唾弃的对象。', effects: { strength: 5, charisma: -3 }, failEffects: { charisma: -15, luck: -10 }, flags: ['major_selective'], failFlags: ['major_selective_fail'] },
      { text: '趁乱获取利益', successRate: 1, successText: '你趁着混乱搜刮了死者的装备，发了横财。虽然良心不安，但实力确实提升了。', failText: '你的行为被人目击。你成为了塔中最令人不齿的存在。', effects: { strength: 8, intelligence: 5, charisma: -10 }, failEffects: { charisma: -20, luck: -10 }, flags: ['major_exploit'], failFlags: ['major_exploit_fail'] },
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  },
  {
    id: 'fc_mc_04', category: 'major_choice', minAge: 60, maxAge: 60, probability: 0.95,
    templates: [
      '你终于触及了塔的真相。{npc}告诉你："这座塔并非天然形成，而是由某种存在建造的牢笼。第100层没有自由，只有另一座塔。你有三个选择：向所有人揭露真相，引发混乱；继续攀登，哪怕知道是徒劳；或者在这座塔中建立新的秩序，让所有人都能有尊严地活着。"',
    ],
    choices: [
      { text: '揭露真相，引发变革', successRate: 1, successText: '你向全塔广播了真相。混乱之后，人们开始思考：如果100层不是终点，那什么才是真正的自由？', failText: '真相太过残酷，许多人精神崩溃，选择了跳楼。你成为了众矢之的。', effects: { intelligence: 15, charisma: 10 }, failEffects: { charisma: -15, health: -20 }, flags: ['major_reveal'], failFlags: ['major_reveal_fail'] },
      { text: '继续攀登，不问终点', successRate: 1, successText: '你选择继续攀登。哪怕知道100层不是终点，你也要亲眼看看。过程本身，就是意义。', failText: '你的执着让你忽视了身边的人。当你回头时，发现已经孤身一人。', effects: { strength: 10, special: 12, charisma: -5 }, failEffects: { charisma: -10, luck: -5 }, flags: ['major_climb'], failFlags: ['major_climb_fail'] },
      { text: '建立新秩序，守护当下', successRate: 1, successText: '你在这座塔中建立了新的秩序——不是以到达100层为目标，而是以每一层的幸福为目标。', failText: '新秩序遭遇了强大的阻力。旧势力不愿改变，你的理想在现实面前破碎。', effects: { charisma: 12, intelligence: 8, luck: 6 }, failEffects: { charisma: -8, strength: -5 }, flags: ['major_order'], failFlags: ['major_order_fail'] },
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  },
  {
    id: 'fc_rb_attempt_1', category: 'cultivation', minAge: 15, maxAge: 30, probability: 0.92,
    templates: [
      '你在{location}的修炼场进行深度闭关多年，终于触摸到了楼层突破者的门槛。{npc}告诉你："楼层突破者是攀登之路的重要里程碑。突破需要strength≥20、剑技≥15。"',
      '你的能力已达瓶颈，在{location}感应到了楼层突破者的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部剑意灌注于剑心。刹那间，{location}的剑气疯狂涌入你的体内——你成功了！你突破到了楼层突破者！', failText: '你全力冲击瓶颈，但剑气反噬，经脉受损。虽然保住了性命，但能力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 80 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail_1'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了楼层突破者。', failText: '你的稳扎稳打被一场意外打断——{{npc}}的敌人找上门来，中断了你的修炼进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 56 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_1', 'realm_breakthrough_1_steady'], failFlags: ['realm_fail_1_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_1'] },
    ],
    flags: ['realm_attempt_1'],
    chainPriority: 5,
  },
  {
    id: 'fc_rb_stable_1', category: 'cultivation', minAge: 17, maxAge: 50, probability: 0.75,
    templates: [
      '你突破到楼层突破者的消息传遍了塔。{location}的冒险者们纷纷前来祝贺，你的名字被刻在了起始之镇的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到楼层突破者，你走了15年。这速度，在这座塔里已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_1'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 2,
  },
  {
    id: 'fc_rb_retry_1', category: 'cultivation', minAge: 18, maxAge: 55, probability: 0.65,
    templates: [
      '上一次突破楼层突破者失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了楼层突破者的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了楼层突破者！{location}的剑气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与楼层突破者无缘...', effects: { realm: 1, special: 5, maxAge: 80 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_1'], failFlags: ['realm_fail2_1'] },
    ],
    flags: ['realm_retry_1'],
    requiredFlags: ['realm_fail_1'],
    chainPriority: 3,
  },
  {
    id: 'fc_rb_attempt_2', category: 'cultivation', minAge: 25, maxAge: 40, probability: 0.92,
    templates: [
      '你在{location}的修炼场进行深度闭关多年，终于触摸到了精英冒险者的门槛。{npc}告诉你："精英冒险者是攀登之路的重要里程碑。突破需要strength≥35、剑技≥30。"',
      '你的能力已达瓶颈，在{location}感应到了精英冒险者的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部剑意灌注于剑心。刹那间，{location}的剑气疯狂涌入你的体内——你成功了！你突破到了精英冒险者！', failText: '你全力冲击瓶颈，但剑气反噬，经脉受损。虽然保住了性命，但能力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 120 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail_2'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了精英冒险者。', failText: '你的稳扎稳打被一场意外打断——{{npc}}的敌人找上门来，中断了你的修炼进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 84 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_2', 'realm_breakthrough_2_steady'], failFlags: ['realm_fail_2_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_2'] },
    ],
    flags: ['realm_attempt_2'],
    requiredFlags: ['realm_breakthrough_1'],
    chainPriority: 5,
  },
  {
    id: 'fc_rb_stable_2', category: 'cultivation', minAge: 27, maxAge: 60, probability: 0.75,
    templates: [
      '你突破到精英冒险者的消息传遍了塔。{location}的冒险者们纷纷前来祝贺，你的名字被刻在了起始之镇的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到精英冒险者，你走了25年。这速度，在这座塔里已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_2'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 2,
  },
  {
    id: 'fc_rb_retry_2', category: 'cultivation', minAge: 28, maxAge: 65, probability: 0.65,
    templates: [
      '上一次突破精英冒险者失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了精英冒险者的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了精英冒险者！{location}的剑气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与精英冒险者无缘...', effects: { realm: 1, special: 5, maxAge: 120 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_2'], failFlags: ['realm_fail2_2'] },
    ],
    flags: ['realm_retry_2'],
    requiredFlags: ['realm_fail_2'],
    chainPriority: 3,
  },
  {
    id: 'fc_rb_attempt_3', category: 'cultivation', minAge: 35, maxAge: 55, probability: 0.92,
    templates: [
      '你在{location}的修炼场进行深度闭关多年，终于触摸到了楼层守护者级的门槛。{npc}告诉你："楼层守护者级是攀登之路的重要里程碑。突破需要intelligence≥50、剑技≥45。"',
      '你的能力已达瓶颈，在{location}感应到了楼层守护者级的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部剑意灌注于剑心。刹那间，{location}的剑气疯狂涌入你的体内——你成功了！你突破到了楼层守护者级！', failText: '你全力冲击瓶颈，但剑气反噬，经脉受损。虽然保住了性命，但能力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 200 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail_3'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了楼层守护者级。', failText: '你的稳扎稳打被一场意外打断——{{npc}}的敌人找上门来，中断了你的修炼进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 140 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_3', 'realm_breakthrough_3_steady'], failFlags: ['realm_fail_3_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_3'] },
    ],
    flags: ['realm_attempt_3'],
    requiredFlags: ['realm_breakthrough_2'],
    chainPriority: 5,
  },
  {
    id: 'fc_rb_stable_3', category: 'cultivation', minAge: 37, maxAge: 75, probability: 0.75,
    templates: [
      '你突破到楼层守护者级的消息传遍了塔。{location}的冒险者们纷纷前来祝贺，你的名字被刻在了起始之镇的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到楼层守护者级，你走了35年。这速度，在这座塔里已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_3'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 2,
  },
  {
    id: 'fc_rb_retry_3', category: 'cultivation', minAge: 38, maxAge: 80, probability: 0.65,
    templates: [
      '上一次突破楼层守护者级失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了楼层守护者级的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了楼层守护者级！{location}的剑气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与楼层守护者级无缘...', effects: { realm: 1, special: 5, maxAge: 200 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_3'], failFlags: ['realm_fail2_3'] },
    ],
    flags: ['realm_retry_3'],
    requiredFlags: ['realm_fail_3'],
    chainPriority: 3,
  },
  {
    id: 'fc_rb_attempt_4', category: 'cultivation', minAge: 50, maxAge: 75, probability: 0.92,
    templates: [
      '你在{location}的修炼场进行深度闭关多年，终于触摸到了传说剑士的门槛。{npc}告诉你："传说剑士是攀登之路的重要里程碑。突破需要special≥70、剑技≥50。"',
      '你的能力已达瓶颈，在{location}感应到了传说剑士的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部剑意灌注于剑心。刹那间，{location}的剑气疯狂涌入你的体内——你成功了！你突破到了传说剑士！', failText: '你全力冲击瓶颈，但剑气反噬，经脉受损。虽然保住了性命，但能力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 300 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail_4'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了传说剑士。', failText: '你的稳扎稳打被一场意外打断——{{npc}}的敌人找上门来，中断了你的修炼进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 210 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_4', 'realm_breakthrough_4_steady'], failFlags: ['realm_fail_4_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_4'] },
    ],
    flags: ['realm_attempt_4'],
    requiredFlags: ['realm_breakthrough_3'],
    chainPriority: 5,
  },
  {
    id: 'fc_rb_stable_4', category: 'cultivation', minAge: 52, maxAge: 95, probability: 0.75,
    templates: [
      '你突破到传说剑士的消息传遍了塔。{location}的冒险者们纷纷前来祝贺，你的名字被刻在了起始之镇的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到传说剑士，你走了50年。这速度，在这座塔里已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_4'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 2,
  },
  {
    id: 'fc_rb_retry_4', category: 'cultivation', minAge: 53, maxAge: 100, probability: 0.65,
    templates: [
      '上一次突破传说剑士失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了传说剑士的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了传说剑士！{location}的剑气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与传说剑士无缘...', effects: { realm: 1, special: 5, maxAge: 300 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_4'], failFlags: ['realm_fail2_4'] },
    ],
    flags: ['realm_retry_4'],
    requiredFlags: ['realm_fail_4'],
    chainPriority: 3,
  },
  {
    id: 'fc_rb_attempt_5', category: 'cultivation', minAge: 70, maxAge: 100, probability: 0.92,
    templates: [
      '你在{location}的修炼场进行深度闭关多年，终于触摸到了自由之人的门槛。{npc}告诉你："自由之人是攀登之路的重要里程碑。突破需要strength≥90、剑技≥80。"',
      '你的能力已达瓶颈，在{location}感应到了自由之人的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部剑意灌注于剑心。刹那间，{location}的剑气疯狂涌入你的体内——你成功了！你突破到了自由之人！', failText: '你全力冲击瓶颈，但剑气反噬，经脉受损。虽然保住了性命，但能力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 400 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail_5'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了自由之人。', failText: '你的稳扎稳打被一场意外打断——{{npc}}的敌人找上门来，中断了你的修炼进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 280 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_5', 'realm_breakthrough_5_steady'], failFlags: ['realm_fail_5_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_5'] },
    ],
    flags: ['realm_attempt_5'],
    requiredFlags: ['realm_breakthrough_4'],
    chainPriority: 5,
  },
  {
    id: 'fc_rb_stable_5', category: 'cultivation', minAge: 72, maxAge: 120, probability: 0.75,
    templates: [
      '你突破到自由之人的消息传遍了塔。{location}的冒险者们纷纷前来祝贺，你的名字被刻在了起始之镇的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到自由之人，你走了70年。这速度，在这座塔里已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_5'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 2,
  },
  {
    id: 'fc_rb_retry_5', category: 'cultivation', minAge: 73, maxAge: 125, probability: 0.65,
    templates: [
      '上一次突破自由之人失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了自由之人的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了自由之人！{location}的剑气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与自由之人无缘...', effects: { realm: 1, special: 5, maxAge: 400 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_5'], failFlags: ['realm_fail2_5'] },
    ],
    flags: ['realm_retry_5'],
    requiredFlags: ['realm_fail_5'],
    chainPriority: 3,
  },
  {
    id: 'fc_rb_attempt_6', category: 'cultivation', minAge: 100, maxAge: 150, probability: 0.92,
    templates: [
      '你在{location}的修炼场进行深度闭关多年，终于触摸到了超越者的门槛。{npc}告诉你："超越者是攀登之路的重要里程碑。突破需要intelligence≥100、剑技≥100。"',
      '你的能力已达瓶颈，在{location}感应到了超越者的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部剑意灌注于剑心。刹那间，{location}的剑气疯狂涌入你的体内——你成功了！你突破到了超越者！', failText: '你全力冲击瓶颈，但剑气反噬，经脉受损。虽然保住了性命，但能力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 800 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail_6'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了超越者。', failText: '你的稳扎稳打被一场意外打断——{{npc}}的敌人找上门来，中断了你的修炼进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 560 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_6', 'realm_breakthrough_6_steady'], failFlags: ['realm_fail_6_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_6'] },
    ],
    flags: ['realm_attempt_6'],
    requiredFlags: ['realm_breakthrough_5'],
    chainPriority: 5,
  },
  {
    id: 'fc_rb_stable_6', category: 'cultivation', minAge: 102, maxAge: 170, probability: 0.75,
    templates: [
      '你突破到超越者的消息传遍了塔。{location}的冒险者们纷纷前来祝贺，你的名字被刻在了起始之镇的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到超越者，你走了100年。这速度，在这座塔里已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_6'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 2,
  },
  {
    id: 'fc_rb_retry_6', category: 'cultivation', minAge: 103, maxAge: 175, probability: 0.65,
    templates: [
      '上一次突破超越者失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了超越者的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了超越者！{location}的剑气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与超越者无缘...', effects: { realm: 1, special: 5, maxAge: 800 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_6'], failFlags: ['realm_fail2_6'] },
    ],
    flags: ['realm_retry_6'],
    requiredFlags: ['realm_fail_6'],
    chainPriority: 3,
  },
  {
    id: 'fc_rb_attempt_7', category: 'cultivation', minAge: 150, maxAge: 220, probability: 0.92,
    templates: [
      '你在{location}的修炼场进行深度闭关多年，终于触摸到了塔之主的门槛。{npc}告诉你："塔之主是攀登之路的重要里程碑。突破需要special≥120、剑技≥100。"',
      '你的能力已达瓶颈，在{location}感应到了塔之主的契机。但突破之路充满风险，稍有不慎便可能意识崩溃。',
    ],
    choices: [
      { text: '全力冲击，不留退路', successRate: 1, successText: '你孤注一掷，将全部剑意灌注于剑心。刹那间，{location}的剑气疯狂涌入你的体内——你成功了！你突破到了塔之主！', failText: '你全力冲击瓶颈，但剑气反噬，经脉受损。虽然保住了性命，但能力大跌，需要数年才能恢复。', effects: { realm: 1, special: 5, intelligence: 3, maxAge: 9000 }, failEffects: { health: -30, special: -10, maxAge: -20 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail_7'] },
      { text: '稳扎稳打，徐徐图之', successRate: 1, successText: '你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了塔之主。', failText: '你的稳扎稳打被一场意外打断——{{npc}}的敌人找上门来，中断了你的修炼进程。突破失败。', effects: { realm: 1, special: 3, intelligence: 5, maxAge: 6300 }, failEffects: { health: -15, special: -5, maxAge: -10 }, flags: ['realm_breakthrough_7', 'realm_breakthrough_7_steady'], failFlags: ['realm_fail_7_steady'] },
      { text: '放弃突破，继续积累', successRate: 1, successText: '你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。', failText: '', effects: { intelligence: 3, special: 2, strength: 2 }, flags: ['realm_delay_7'] },
    ],
    flags: ['realm_attempt_7'],
    requiredFlags: ['realm_breakthrough_6'],
    chainPriority: 5,
  },
  {
    id: 'fc_rb_stable_7', category: 'cultivation', minAge: 152, maxAge: 240, probability: 0.75,
    templates: [
      '你突破到塔之主的消息传遍了塔。{location}的冒险者们纷纷前来祝贺，你的名字被刻在了起始之镇的"突破碑"上。',
      '{npc}看着你，眼中满是欣慰："从平民到塔之主，你走了150年。这速度，在这座塔里已是中上之资。"',
    ],
    effects: { charisma: 3, luck: 2 },
    flags: ['realm_stable_7'],
    requiredFlags: ['realm_breakthrough_7'],
    chainPriority: 2,
  },
  {
    id: 'fc_rb_retry_7', category: 'cultivation', minAge: 153, maxAge: 245, probability: 0.65,
    templates: [
      '上一次突破塔之主失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"',
      '你的伤势已愈，能力甚至比以前更加精进。你再次感应到了塔之主的契机——这一次，你更有把握。',
    ],
    choices: [
      { text: '再次冲击', successRate: 1, successText: '第二次冲击，你总结了上次的教训，一举突破到了塔之主！{location}的剑气因你而沸腾！', failText: '又一次失败。你开始怀疑，自己是否真的与塔之主无缘...', effects: { realm: 1, special: 5, maxAge: 9000 }, failEffects: { health: -40, special: -15, maxAge: -30 }, flags: ['realm_breakthrough_7'], failFlags: ['realm_fail2_7'] },
    ],
    flags: ['realm_retry_7'],
    requiredFlags: ['realm_fail_7'],
    chainPriority: 3,
  },
];
