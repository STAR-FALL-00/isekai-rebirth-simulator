const fs = require('fs');

let content = fs.readFileSync('generate-events.cjs', 'utf-8');

const oldBlock = `function generateTrashEvents(w) {
  if (w.prefix === 'cx') {
    return generateCultivationTrashEvents(w);
  }

  const T = [];`;

const newBlock = `function generateMagicTrashEvents(w) {
  const T = [];
  const { prefix } = w;

  // 阶段1（0-6）：被嘲笑，发现奥术数学
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 0, 6, 0.92, [
    \`魔法觉醒检测那日，{location}的检测水晶毫无反应。{npc}摇头叹息："魔法绝缘体...与魔法无缘。"所有人都用怜悯的目光看着你。\`,
    \`作为魔法绝缘之人，你只能看着同龄人在{location}召唤出小火球。他们嘲笑你是"魔法世界的废物"，连最基础的照明术都无法施展。\`,
  ], { talentExclusive: 'trash', effects: { special: -5, strength: -2, intelligence: 3 }, flags: ['trash_childhood_start'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 4, 10, 0.88, [
    \`你不甘心。每晚偷偷在{location}的图书馆里研读《魔法原理》，虽然你无法感知魔力，但你对魔法的"理论"理解却超过了大多数学生。\`,
    \`你在{location}的旧书摊淘到了一本残破的《奥术数学》。书中说："魔法不是天赋的专利，公式可以推导一切魔法现象。"你如获至宝。\`,
  ], { talentExclusive: 'trash', effects: { intelligence: 3, strength: 2, luck: 2 }, requiredFlags: ['trash_childhood_start'], flags: ['trash_childhood_1'] }));

  // 阶段2（12-25）：暗中积累，以公式推导施法
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 12, 18, 0.85, [
    \`你按照《奥术数学》的方法，用纯粹的数学公式推导魔法的运行规律。第一次尝试时，你在纸上画出了火球术的完整魔力回路——虽然你无法施法，但你的图纸让{npc}震惊不已。\`,
    \`别的天才一小时能掌握的火球术，你需要用三个月推导公式。但你在{location}日复一日，从未间断。{npc}偶然看到你的演算稿，震惊地说："这...这是理论魔法的雏形？"\`,
  ], { talentExclusive: 'trash', effects: { intelligence: 5, health: 3, special: 2 }, requiredFlags: ['trash_childhood_1'], flags: ['trash_growth_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 15, 22, 0.80, [
    \`你在{location}遇到了一位被学院边缘化的老教授。他看了你的奥术数学理论后，老泪纵横："三十年前，我也提出过类似理论。但他们嘲笑我，说魔法不是科学。你愿意和我一起证明它吗？"\`,
    \`{npc}被你的毅力打动，决定收你为记名弟子。他说："我这一生见过无数天才，但像你这样的'傻子'，还是第一个。"你终于有了导师。\`,
  ], { talentExclusive: 'trash', effects: { intelligence: 7, health: 5, charisma: 2 }, requiredFlags: ['trash_growth_0'], flags: ['trash_growth_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 18, 25, 0.75, [
    \`经过多年的研究，你在{location}推导出了"通用施法公式"——一个可以让魔法绝缘者也能施法的数学模型！但公式需要借助特殊的"魔力传导装置"才能实现。\`,
    \`你在{location}的工坊里，用铜线和水晶制作出了人生第一个"奥术计算器"。当你按下最后一个符文时，装置顶端亮起了一点微弱的火光——那是你人生第一次"施法"！\`,
  ], { talentExclusive: 'trash', effects: { intelligence: 8, strength: 3, luck: 3 }, requiredFlags: ['trash_growth_1'], flags: ['trash_growth_2'] }));

  // 阶段3（26-45）：崭露头角，以公式战胜天赋
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 26, 35, 0.78, [
    \`烈焰学院举办魔法大比，你以"理论展示"的身份报名参加。所有人都嘲笑你："一个魔法绝缘的废物，也配参加魔法大比？"\`,
    \`大比第一轮，你对上了初级法师。对方召唤出火球，威力惊人。你不慌不忙，启动了奥术计算器，输入了火球术的逆运算公式——对方的火球在半空中被你的"魔力中和场"熄灭了！全场寂静。\`,
  ], { talentExclusive: 'trash', effects: { intelligence: 8, charisma: 6, special: 3 }, requiredFlags: ['trash_growth_2'], flags: ['trash_adult_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 30, 40, 0.72, [
    \`你的"公式魔法"震惊了魔法界。{npc}说你是"万古以来第一个以魔法绝缘之身击败法师的人"。各大学院开始重新审视"理论魔法"这条被遗忘的道路。\`,
    \`你在{location}建立了一座小小的"公式魔法工坊"，专门招收被学院拒绝的学生。你说："天赋决定起点，但智慧和毅力决定终点。"\`,
  ], { talentExclusive: 'trash', effects: { charisma: 7, intelligence: 5, luck: 3 }, requiredFlags: ['trash_adult_0'], flags: ['trash_adult_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 45, 0.68, [
    \`昔日嘲笑你的同村法师在{location}与你重逢。他依然是初级法师，而你的公式已经能模拟出中级魔法。他跪地痛哭："当年是我有眼无珠..."你将他扶起。\`,
    \`{legend}的传承之地开启，你说服众人让你这个"魔法绝缘的废物"也进去试试。他们抱着看笑话的心态同意了——但很快，他们就笑不出来了。\`,
  ], { talentExclusive: 'trash', effects: { intelligence: 6, luck: 5, special: 4 }, requiredFlags: ['trash_adult_1'], flags: ['trash_adult_2'] }));

  // 逆袭关键事件 — 含选择分支
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 28, 42, 0.65, [
    \`魔法大比的决赛上，你对上了烈焰学院的天才法师。对方是高级法师，而你连魔力都无法感知。所有人都认为这是一场屠杀——但他们错了。\`,
    \`比赛开始前，{npc}暗中塞给你一块魔晶："这是'过载魔晶'，能让你的奥术计算器短时间内运算速度提升十倍，但事后会烧毁核心。用不用，你自己决定。"\`,
  ], {
    talentExclusive: 'trash',
    effects: { intelligence: 3 },
    requiredFlags: ['trash_adult_1'],
    flags: ['trash_climax_0'],
    chainPriority: 2,
    choices: [
      choice('使用过载魔晶，全力一战', 0.35, '过载魔晶让你的奥术计算器爆发出了前所未有的运算速度！你推导出了传说中的"禁咒公式"，全场震撼，万古未有！', '过载魔晶烧毁了你的计算器核心，虽然赢了比赛，但你需要数年才能重建设备', { intelligence: 15, charisma: 10, special: 5, health: -20 }, { intelligence: 5, charisma: 3, health: -30 }, ['branch_trash_fight'], ['branch_trash_fight_fail']),
      choice('拒绝魔晶，以本真之力战斗', 0.65, '你没有借助外力，仅凭基础公式与对方周旋。虽然最终惜败，但你赢得了所有人的尊重！', '你拒绝了魔晶，但实力差距太大，被一招击败。众人摇头："果然，废物就是废物。"', { charisma: 10, luck: 8, intelligence: 5 }, { charisma: -5, health: -15 }, ['branch_trash_persist'], ['branch_trash_persist_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 50, 0.60, [
    \`你在{location}遇到了一位神秘老者。他打量你许久，说："你的公式已经触及了魔法的本质。若想再进一步，需要进入真理之塔顶层——那里有'万能公式'，可以让魔法绝缘者拥有真正的施法能力。"\`,
    \`老者给了你两个选择：他可以帮你打开真理之塔的通道（九死一生）；或者传你一套更稳妥的进阶公式（进展缓慢但安全）。\`,
  ], {
    talentExclusive: 'trash',
    effects: { special: 3 },
    requiredFlags: ['trash_climax_0'],
    flags: ['trash_climax_1'],
    chainPriority: 2,
    choices: [
      choice('闯入真理之塔，向死而生', 0.30, '你闯入了真理之塔顶层，面对无数魔法陷阱和守护者。最终，你找到了"万能公式"——那一刻，你第一次真正感受到了魔力的流动！', '真理之塔的守护者超出了你的预期。虽然侥幸逃生，但你的奥术计算器被毁，需要数十年才能重建', { intelligence: 20, special: 10, health: -25 }, { health: -40, intelligence: 3 }, ['branch_trash_transform'], ['branch_trash_transform_fail']),
      choice('稳扎稳打，不求速成', 0.80, '你选择了更稳妥的道路。虽然进展缓慢，但根基无比扎实。老者点头："大器晚成，方得始终。"', '稳妥之路需要的时间远超你的寿元。你知道，自己可能等不到大成的那一天了', { intelligence: 10, strength: 5, health: 5 }, { intelligence: 3, luck: -3 }, ['branch_trash_persist2'], ['branch_trash_persist2_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 40, 55, 0.55, [
    \`你的故事传遍了魔法界。{location}的公式魔法工坊每天都有人慕名而来——不是天才，而是那些被判定为"废物"的孩子。\`,
    \`{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。不是因为我更强，而是因为我从未停下。"\`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 5, special: 5 }, requiredFlags: ['trash_climax_1'], flags: ['trash_climax_2'], chainPriority: 3 }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 45, 60, 0.50, [
    \`你推导出了"万能公式"，成为了万古以来第一个以魔法绝缘之躯施展禁咒的人。没有魔力、没有天赋，仅凭一台计算器和无数公式，你释放出了毁天灭地的魔法！\`,
    \`你成为了魔法界的传奇。后人称你为"公式贤者"，你的故事激励了无数被判定为魔法绝缘的人——魔法，终于不再是天赋者的专利。\`,
  ], { talentExclusive: 'trash', effects: { intelligence: 10, strength: 5, charisma: 10, special: 10 }, requiredFlags: ['trash_climax_2'], flags: ['trash_legend'], chainPriority: 3 }));

  // 废材老年
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 55, 80, 0.60, [
    \`你在{location}收徒传道，专门招收魔法绝缘的孩子。你说："天赋决定起点，但智慧和选择决定终点。"\`,
    \`你的弟子中有人发明了新的计算公式，有人以公式魔法成为了学院长老。{npc}感叹："你一人之力，改变了一个时代的魔法格局。"\`,
  ], { talentExclusive: 'trash', effects: { charisma: 8, intelligence: 5 }, requiredFlags: ['trash_legend'], flags: ['trash_elder_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 60, 90, 0.55, [
    \`大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。\`,
    \`你微笑着说："如果重来一次，我还是会选择做那个魔法绝缘的废物。因为正是'废物'二字，让我找到了属于自己的魔法。"\`,
  ], { talentExclusive: 'trash', effects: { charisma: 6, health: -5 }, requiredFlags: ['trash_elder_0'], flags: ['trash_elder_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 70, 100, 0.50, [
    \`你离世的那天，{location}下起了七彩的光雨——那是无数元素精灵在为你送行。\`,
    \`你的灵魂没有进入轮回，而是化作了一道公式之光，融入了真理之塔。后人传说，每当天才恃才傲物时，塔顶就会亮起一行公式——那是你在提醒他们：不要小看任何一个"废物"。\`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 10 }, requiredFlags: ['trash_elder_1'], flags: ['trash_ending'] }));

  return T;
}

function generateTrashEvents(w) {
  if (w.prefix === 'cx') {
    return generateCultivationTrashEvents(w);
  }
  if (w.prefix === 'mg') {
    return generateMagicTrashEvents(w);
  }

  const T = [];`;

if (!content.includes(oldBlock)) {
  console.error('ERROR: Trash marker not found');
  process.exit(1);
}

content = content.replace(oldBlock, newBlock);
console.log('Patched trash events');

fs.writeFileSync('generate-events.cjs', content);
console.log('Trash patch applied!');
