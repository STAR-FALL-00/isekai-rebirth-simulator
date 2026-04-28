// ============================================================
// 古代武侠世界 — 事件生成器
// 可直接复制粘贴到 generate-events.cjs 中使用
// 依赖外部函数：tmpl, choice, makeId, rand, randProb
// ============================================================

function generateWuxiaIdentityEvents(w) {
  const T = [];
  const { prefix } = w;

  const identityStories = {
    farmers_son: {
      name: '农家少年',
      childhood: [
        [`你生在江南水乡的一个普通农家。每日除了砍柴放牛，便在田埂上比划从说书先生那里听来的招式。{npc}笑你："小子，庄稼人练什么武功？"你不服气，暗暗将招式记在心中。`, `八岁那年，你在{location}的稻田边救了一位被毒蛇咬伤的老乞丐。他醒来后盯着你的手掌看了许久："骨格清奇，是块练武的好料子。"`],
        [`老乞丐传授你一套基础的吐纳心法，说内力之道贵在持之以恒。你每日凌晨在村口老槐树下打坐，感受丹田中若有若无的一丝暖意。`, `你在{location}的山洞里发现了一本残破的拳谱——《伏虎拳》。没有师父指点，你便对着水潭中的倒影一招一式地拆解。`],
      ],
      growth: [
        [`十五岁那年，{location}遭遇了马贼洗劫。你凭着伏虎拳和那股不要命的狠劲，竟打退了三个马贼。村民们看你的眼神变了，从嘲笑变成了敬畏。`, `一位游历的镖师路过{location}，见你拳法虽粗疏但内力已有根基，便指点你正经的经脉运行之法。你恍然大悟，原来内力该这样走！`],
        [`你在{location}的比武招亲大会上误打误撞赢了半招，被当地武馆馆主看中，邀你入馆做教习。这是你第一次靠武功吃饭。`, `少年时的老乞丐再度出现，他竟是隐退多年的江湖名宿。他说："我教你的心法只是入门，真正的功夫，在江湖的腥风血雨里。"`],
      ],
      adult: [
        [`成年后的你在{location}已小有名气。农家出身的你嫉恶如仇，专管不平事，百姓称你为"田埂侠客"。但也因此得罪了不少江湖豪强。`, `你在{location}遇到了当年的马贼首领，他如今已是某门派的外门管事。他认出了你，眼中闪过杀意。`],
        [`一位大门派的长老欣赏你的拳意，欲收你为内门弟子，但要求你改换门庭、忘却旧师；或者继续做一名无门无派的游侠，但永远得不到上乘武功。`, ``, '坚守旧师，自立门户', '改换门庭，求得真传', 1.0],
      ],
      special: [
        [`一次生死搏杀中，你在{location}被逼入绝境。体内那丝微弱的内力突然沿着奇经八脉奔涌——原来老乞丐传你的心法竟是失传已久的《混元一气功》！`, `{npc}为你把脉后大惊失色："你体内这股内力...这不是普通的吐纳心法，这是三十年前随魔教一起消失的混元真气！那老乞丐到底是谁？"`],
        [`你找到了老乞丐的隐居之处，他已气息奄奄。临终前，他将毕生功力尽数传给你："农家子也好，贵族子也罢，江湖只看拳头。"`, `你以农家之子的身份踏足华山之巅，在武林大会上连败十二名派弟子。台下有人高呼："草莽出龙！"你的故事，激励了无数寒门少年。`],
      ],
    },
    aristocrat: {
      name: '世家子弟',
      childhood: [
        [`你生在{location}的武学世家，自幼便浸泡在刀枪剑戟之中。三岁识剑谱，五岁扎马步，家族长辈对你的期望沉甸甸地压在肩头。`, `作为世家子弟，你从小就懂得江湖不只是武功，还有人情世故。{npc}教你："剑要直，但做人有时候要弯。"你似懂非懂。`],
        [`七岁那年，家族在{location}举办论剑大会，你被要求和同辈切磋。对手是个旁支子弟，你明明能赢，却听父亲的话让了半招。`, `你在家族藏书阁发现了一本被封印的剑谱——上面写着"禁"字。你偷偷誊抄了几页，那些剑招凌厉得不像正道武学。`],
      ],
      growth: [
        [`十五岁，你代表家族参加{location}的武林大会。这一战关乎家族未来十年的声望，你父亲在台下紧握剑柄，目光灼灼。`, `你发现自己偷学的禁招在关键时刻救了你的命。但使用后，你的经脉隐隐作痛——这剑谱似乎有极大的副作用。`],
        [`家族长辈发现了你偷练禁剑的事。家主冰冷地说："要么自废武功，要么被逐出家门。"你的母亲跪地为你求情。`, `你在{location}遇到了一个魔教女子。她与你谈琴论剑，你说不清这是缘分还是劫数。家族若知道，定会打断你的腿。`],
      ],
      adult: [
        [`成年后的你已是家族年轻一辈中最出色的剑客。但你也发现，家族的荣光背后藏着肮脏的交易——他们为了利益，竟与朝廷鹰犬勾结。`, `你在{location}撞见家族长辈与东厂密会。他们谈论的是如何借刀杀人，铲除异己。你握剑的手在颤抖。`],
        [`你可以选择：向江湖揭发家族的罪行，但会成为全族的仇人；或者沉默，继承家主之位，将家族引向正途。`, ``, '揭发罪行，背负骂名', '沉默继位，暗中革新', 1.0],
      ],
      special: [
        [`你揭开了家族禁剑的真相——原来先祖曾与魔教圣女相恋，这套剑法是他们共同所创。家族为了维护"正道"名声，将这段历史彻底抹去。`, `你在{location}的先祖墓前立下誓言："我不要做什么正道楷模，我要做一个人。"你将禁剑与家传剑法融会贯通，创出了全新的"心剑"。`],
        [`你的"心剑"在江湖上引起轰动。有人说你已入魔道，有人说你开创新局。你在{location}立下新规：世家子弟不分嫡庶，能者居之。`, `百年后，你的家族不再以"正统"自居，而以"侠义"闻名。后人不知道你付出了多少代价，只知道从你那一代起，这个家族真正站了起来。`],
      ],
    },
    orphan: {
      name: '孤儿',
      childhood: [
        [`你不知道自己姓甚名谁。最早的记忆是{location}的街头，一个老叫花子教你如何在狗嘴里抢下半块馒头。`, `作为孤儿，你从小就是{location}最机灵的乞儿。别的孩子靠父母，你靠一双快腿和更厚的脸皮。{npc}说你是"街头的小狐狸"。`],
        [`八岁那年，你在{location}偷了一个剑客的钱袋。被他抓住后，他没有打你，反而说："手这么快，不如跟我学点正经功夫。"`, `你在破庙里发现了一具无名尸骨，骨旁有一把短刀和一本册子。册子上写着："杀人之术，亦可救人。"你将短刀藏入怀中。`],
      ],
      growth: [
        [`十五岁的你已是{location}街头的一号人物。你不属于任何门派，没有师父管教，但你的刀法是在一次次生死搏杀中悟出来的——快、准、狠。`, `你为了保护街头的其他乞儿，与{location}的地痞帮派结了仇。他们人多势众，你纵然刀快，也双拳难敌四手。`],
        [`危急时刻，一位路过的女侠出手救了你。她说："你的刀法有灵性，但杀气太重。跟我走，我教你控制心中的野兽。"`, `你拒绝了她的好意。{location}的街头就是你的家，那些乞儿就是你的家人。你走了，他们怎么办？`],
      ],
      adult: [
        [`成年后的你在{location}建立了一个"乞儿帮"，专收无家可归的孩子，教他们武功和生存之道。江湖人戏称你是"丐帮预备帮主"。`, `朝廷派人招安你，许诺给你official身份；但江湖上的名门正派视你为眼中钉，说你"聚众作乱"。你站在十字路口。`],
        [`你可以选择：接受招安，用朝廷的力量保护更多的孤儿；或者拒绝，继续做一名江湖浪子，但面临正邪两道的围剿。`, ``, '接受招安，以权护民', '拒绝招安，江湖独行', 1.0],
      ],
      special: [
        [`你追查自己的身世，发现亲生父母竟是当年被朝廷满门抄斩的忠良之后！你手中的短刀，是父亲临终前留给你的唯一遗物。`, `{npc}告诉你一个秘密：当年下令灭你满门的，正是如今招安你的那位朝廷大员。他以为斩草除根，却不知你活了下来。`],
        [`你提着短刀闯入那位大员的府邸。刀光闪过，血溅屏风。但你最终没有杀他——你说："我父母若在世，不会希望我成为只会复仇的野兽。"`, `你以孤儿之身建立的门派，成为了江湖上最特殊的势力——不问出身，只问侠义。无数无家可归的人在这里找到了家。`],
      ],
    },
    demon_disciple: {
      name: '魔教后人',
      childhood: [
        [`你从小就知道自己与别人不同。别的孩子学儒家经典，你学的是《天魔秘典》；别的孩子拜孔子，你拜的是魔教先祖。{npc}告诉你："正道那些伪君子，才是这世上最大的恶。"`, `作为魔教后人，你在{location}的深山中长大。你没见过繁华的城池，只见过刀光剑影和尔虞我诈。你的童年没有风筝，只有毒药和暗器。`],
        [`十岁那年，你在{location}遇到了一个迷路的中原少女。她天真烂漫，问你外面的世界是什么样。你突然意识到，自己也是第一次思考这个问题。`, `魔教长老带你去{location}执行第一次"任务"——毒杀一位正道探子。你下毒的手稳如磐石，但夜里你却做了噩梦。`],
      ],
      growth: [
        [`十五岁，你奉教主之命潜入中原，化名进入了{location}的正道门派。你本以为是简单的卧底任务，却发现正道弟子们并非长老口中那般虚伪。`, `你在{location}与一位正道女弟子结伴而行。她善良、正直，甚至有些天真。你本该杀她灭口，却迟迟下不了手。`],
        [`魔教教主催你动手，说"正道之人皆该杀"。但你在{location}看到了正道弟子舍身救人的场景，心中的某根弦被拨动了。`, `你在{location}被正道高手识破身份，身受重伤。那位女弟子竟然冒死将你藏入密室，说："我不在乎你是哪一方，我只知道你还没做过坏事。"`],
      ],
      adult: [
        [`成年后的你身份暴露。魔教视你为叛徒，正道视你为间谍。你夹在正邪之间，两面不是人。`, `你在{location}遇到了魔教教主。他说："回来吧，我封你为圣子。"正道盟主也说："弃暗投明，过往不究。"你的选择，将定义你的一生。`],
        [`你可以选择：回到魔教，继承教主之位，用权力改变魔教；或者彻底脱离魔教，在正道中从头开始，但永世背负"魔教余孽"的骂名。`, ``, '回归魔教，以魔制魔', '脱离魔教，弃暗投明', 1.0],
      ],
      special: [
        [`你调查发现，当年正魔大战的真相并非正道史书所写——是正道盟主先屠了魔教三个分坛，魔教才奋起反击。历史，从来都是胜利者书写的。`, `{npc}将魔教至宝"天魔刃"交给你："上一任教主用它杀了太多无辜之人。我希望你能用它保护该保护的人。"`],
        [`你没有选择正邪任何一方。你在{location}建立了一个"中立谷"，收留正魔两道的流亡者。你说："正道有伪君子，魔教也有真性情。我只问本心。"`, `后人说你是"魔道叛徒"、"正道异端"，但在那些被你救过的人心中，你是真正的侠客。你的中立谷成为了江湖上最神秘的存在。`],
      ],
    },
    spy: {
      name: '朝廷密探',
      childhood: [
        [`你生在{location}的一个普通捕快之家。父亲每日巡街抓贼，你觉得这就是"正义"。直到有天夜里，一群黑衣人闯入你家，带走了你的父亲，再也没有回来。`, `作为朝廷密探的候补，你从小接受严苛的训练。{npc}教你易容、下毒、暗器、轻功，就是不教你"信任"——密探不需要朋友。`],
        [`十岁那年，你在{location}的训练营中第一次杀人。目标是个江湖郎中，据说私藏反诗。你完成任务后，发现他家中真的有诗稿——写得真好。`, `你偷偷藏起了那本草稿。{npc}发现后没有揭发你，只是冷冷地说："心软的人活不长。但你记住这种感觉，别让自己变成机器。"`],
      ],
      growth: [
        [`十五岁，你被派往{location}的武林门派卧底。你的身份是外门杂役，任务是收集该门派与魔教勾结的证据。但你发现，这个门派清白得很。`, `上级催你交"证据"。你不忍心冤枉好人，便伪造了一份无关紧要的密报。{npc}看出了破绽，说："你在玩火。"`],
        [`二十岁那年，你在{location}的任务是暗杀一位江湖大侠。你潜入了他的房间，却看见他在灯下给妻儿写信。那一夜，你空手而归。`, `你因为任务失败被关入水牢。{npc}冒死来看你："上头要的是你绝对服从。但我要的，是你别丢掉良心。"`],
      ],
      adult: [
        [`成年后的你已是一名出色的密探，但你的内心越来越疲惫。你在{location}看到了太多黑暗——朝廷并非正义，江湖也未必邪恶，两边都在吃人。`, `你得知了父亲当年的真相：他因为拒绝冤枉一个江湖门派，被上头灭口。你效忠的朝廷，才是杀父仇人。`],
        [`你可以选择：继续为朝廷效力，但暗中保护江湖中人；或者彻底叛出，加入江湖，但将面对朝廷无尽的追杀。`, ``, '身在曹营心在汉', '叛出朝廷，投身江湖', 1.0],
      ],
      special: [
        [`你掌握了一份足以震动朝野的密档——当朝宰相竟是魔教安插在朝廷中的最高棋子！他一手策划了无数次"正魔冲突"，只为两边渔利。`, `你将密档公之于众。宰相倒台，天下哗然。但朝廷也视你为叛徒，因为你让皇家丢了颜面。`],
        [`你在{location}建立了一个情报网络，不为朝廷，不为江湖，只为真相。你说："情报不该是杀人的刀，该是照路的灯。"`, `后人说你是"江湖百晓生"再世。没有人知道你的真名，但所有人都知道，只要找到你，就能知道真相。`],
      ],
    },
    foreigner: {
      name: '异域来客',
      childhood: [
        [`你的故乡在极西之地，那里的人用刀多于用剑，用拳多于用掌。你随商队来到中原，对一切都感到新奇——尤其是中原人那种"内力"。`, `作为异域来客，你在{location}第一次见识到中原武功。一位老僧只是轻轻一掌，便将一块巨石震碎。你瞪大了眼睛："这是什么妖法？"老僧微笑："这是内力。"`],
        [`你开始学习中原语言，也偷偷模仿中原人的招式。{npc}看出了你的好奇，说："武功无国界，但江湖有规矩。你想学，先学会尊重。"`, `你在{location}因为不懂中原礼节，得罪了当地武馆的弟子。他们嘲笑你是"蛮夷"，要和你比武。你用家乡的刀法赢了，却也惹了麻烦。`],
      ],
      growth: [
        [`十五岁，你在{location}遇到了一位游历的武当弟子。他对你家乡的"旋转刀法"极感兴趣，提出以武当心法交换。你欣然同意。`, `你将异域刀法与中原内力结合，创出了一套全新的"旋风斩"。{npc}看后惊叹："这是前所未有的路子！"`],
        [`你在{location}的武林大会上以异域武功出战。有人赞你创新，有人骂你"歪门邪道"。一位老者说："中原武功千年不变，或许该有人打破它了。"`, `你开始思考：是将家乡武功彻底中原化，还是保持本色、自成一派？这个问题困扰了你好几年。`],
      ],
      adult: [
        [`成年后的你在中原已小有名气，被称为"西域旋风"。但你发现，无论武功多高，中原人看你的眼神总带着隔阂。`, `你的故乡传来消息：家乡被外敌入侵，急需援助。同时，中原的师父也病重，希望你留下继承衣钵。你陷入了两难。`],
        [`你可以选择：返回故乡，用在中原学到的武功保卫家园；或者留在中原，继承师父衣钵，但背井离乡。`, ``, '衣锦还乡，保卫故土', '留驻中原，传承师门', 1.0],
      ],
      special: [
        [`你回到故乡，发现入侵者用的竟是中原某个门派的武功！原来中原有人暗中资助外敌，意图挑起边患、从中渔利。`, `你重返中原，不为私仇，为家国。你在{location}当众揭发了那个通敌卖国的门派，天下震动。`],
        [`你成为了连接西域与中原的桥梁。你在{location}建立了一座"混元武馆"，教授中原与异域融合的武功。`, `后人说你开创了"新武学"——不拘门派，不分地域，只问强弱。你的武馆成为了天下习武之人向往的圣地。`],
      ],
    },
    medic: {
      name: '医仙传人',
      childhood: [
        [`你生在{location}的医仙谷，从小便识百草、辨经脉。别的孩子学剑，你学的是银针；别的孩子练杀人之术，你练的是救人之法。`, `作为医仙传人，你五岁时便能背完《百草经》。{npc}摸着你的头说："医者仁心，但江湖险恶。你不仅要会救人，还要学会保护自己。"`],
        [`八岁那年，{location}爆发瘟疫。你跟着师父日夜不休地救治病人，亲眼看着一条条生命从手中溜走。你发誓要成为一名能救所有人的神医。`, `你在采药时失足坠入山崖，被一株千年灵芝所救。醒来后，你发现自己的身体对药性异常敏感——这是天生的医仙之体。`],
      ],
      growth: [
        [`十五岁，你在{location}救了一位被仇家追杀的剑客。他醒来后问："你为何要救我？我是杀人无数的恶徒。"你说："在我眼中，你只是一个伤者。"`, `剑客传你一套防身剑法，说："医者不能只会救人，也要学会自保。否则，你救的人还没你杀的人多。"`],
        [`二十岁那年，你在{location}遇到了毒师弟子。你们本该是死敌，但你发现他也曾在瘟疫中失去亲人。你们开始秘密交流医毒之道。`, `{npc}发现了你们的交往，震怒："医与毒，正与邪，水火不容！"但你心中有一个大胆的想法：毒可杀人，亦可救人。`],
      ],
      adult: [
        [`成年后的你已是江湖上最年轻的神医。但你也面临抉择：是专心医道、不问世事；还是以医入武，用武功保护更多人？`, `你在{location}发现了一种奇毒，中者七日必死，且无药可解。但你隐约觉得，若以毒攻毒，或许有一线生机。`],
        [`你可以选择：冒险研制以毒攻毒的解药，但可能背上"用毒"的骂名；或者遵循传统医道，宣告此毒无解。`, ``, '以毒攻毒，破而后立', '坚守医道，不涉险途', 1.0],
      ],
      special: [
        [`你成功研制出了解药，但代价是自己中了余毒，须发皆白。{npc}哭着说："你救了千人，却毁了自己。值得吗？"你笑答："医者之命，不如患者之命重。"`, `你的白发成为了江湖上的标志。人们称你为"白发医仙"，不是因为你的医术，而是因为你的牺牲。`],
        [`你在{location}写下了《医武心经》，主张医武同源——内力不仅可以伤人，更可以疏通经络、治愈内伤。这本书后来成为了医家经典。`, `你离世的那天，{location}来了三千人为你送行。他们中有你曾经救过的侠客、农夫、甚至死囚。你说："我这一生，没杀一人，但救的人...数不过来了。"`],
      ],
    },
    poisoner: {
      name: '毒师弟子',
      childhood: [
        [`你生在{location}的毒龙沼泽，从小与毒蛇毒虫为伴。别的孩子怕毒，你却觉得它们可爱——因为在这世上，毒比人更诚实。`, `作为毒师弟子，你七岁时便能辨识百毒。{npc}将一只毒蝎放入你掌心："怕吗？"你说："不怕。它会咬我，但不会像人一样骗我。"`],
        [`十岁那年，你在{location}采毒草时不慎中毒。师父没有救你，而是说："想活命，自己配解药。"你凭着一本毒经，硬生生从鬼门关爬了回来。`, `你在沼泽深处发现了一具白骨，骨旁有一本《万毒心经》。你将它交给师父，他沉默良久："这是上一任毒圣的遗物。你与他...有缘。"`],
      ],
      growth: [
        [`十五岁，你奉师命前往{location}挑战医仙谷。但你到达后，发现医仙谷正在救治瘟疫患者。你下毒的手，第一次犹豫了。`, `你在{location}遇到了一个身中奇毒的女孩。她天真地问："毒姐姐，毒是什么味道的？"你愣住了——从来没有人问过你这个问题。`],
        [`你开始暗中研究"活命之毒"——用毒物激发人体潜能、以毒攻疾。师父知道后大怒："毒师杀人，不救人！"你说："毒只是工具，善恶在于用毒之人。"`, `你在{location}以毒术救了一个村庄的瘟疫。村民们感激你，但当你说出自己是毒师弟子时，他们的笑容瞬间凝固。`],
      ],
      adult: [
        [`成年后的你在毒术上已臻化境。但你也发现，世人谈毒色变，无论你是否救人，在他们眼中你永远是"毒女"或"毒男"。`, `朝廷请你配制一种无色无味的毒药，用于暗杀政敌。报酬是一座城池。你看着那袋金子，久久无言。`],
        [`你可以选择：拒绝朝廷，但可能招来杀身之祸；或者接受委托，但用慢性毒药给目标留出逃走的时间。`, ``, '拒绝权贵，独善其身', '阳奉阴违，暗放生路', 1.0],
      ],
      special: [
        [`你发现师父当年救你，并非偶然——你其实是医仙谷谷主的私生女/子，身负医毒双脉！这也是你能将毒用于救人的原因。`, `{npc}将医仙谷的传世金针交给你："你母亲/父亲临终前说，医与毒本是一家，分裂千年，该由你合而为一了。"`],
        [`你在{location}建立了"万毒医庐"，专门收治江湖上无人能治的奇毒怪病。有人说你是妖女/妖男，但病人只叫你"活菩萨"。`, `你打破了医毒千年的壁垒。后人说你是"毒圣"，但你知道，自己只是一个想让毒物也能开花的人。`],
      ],
    },
    swordsman: {
      name: '剑客',
      childhood: [
        [`你的父亲是一名铁匠，也是一名隐退的剑客。他从不教你剑法，只说："剑是凶器，能不用就不用。"但你每日在铁匠铺看他的剑胚，眼中闪烁着渴望。`, `作为剑客之子，你从小便对剑有一种痴迷。别的孩子抱布娃娃，你抱的是木剑。你在{location}的溪边对着流水挥剑，一练就是一整天。`],
        [`八岁那年，你在{location}遇到了一个瞎眼老者。他听你的挥剑之声，点头道："剑气已有三分，但剑心未立。小子，你知道为何学剑吗？"你答不上来。`, `你在山中发现了一柄断剑，剑身上刻着"心剑"二字。你将断剑带回家，父亲看到后面色大变，却什么也没说。`],
      ],
      growth: [
        [`十五岁，你在{location}遇到了人生的第一个强敌。他以掌法破你的剑招，嘲笑你："剑是死的，人是活的。你连为什么握剑都不知道，怎配用剑？"`, `你苦思三日三夜，终于在溪边悟出了第一式属于自己的剑招——"流水"。这一剑没有固定的招式，只有顺势而为的剑意。`],
        [`二十岁那年，你携断剑挑战{location}的剑冢。剑冢中插着千百柄名剑，每一柄都在呼唤你。但你最终选择了自己的断剑。`, `{npc}问你为何不选名剑。你说："剑是肢体的延伸。别人的剑再好，也不是我的。"老者抚掌大笑："剑心通明！你终于立住了。"`],
      ],
      adult: [
        [`成年后的你在{location}已是一名出色的剑客。但你也发现，江湖上的剑客越来越多，为名为利拔剑的人比比皆是。你的剑，和他们有什么不同？`, `你在{location}目睹了一场因争夺剑谱而引发的血案。数十人为了一个"天下第一剑"的名头互相残杀，最后无一生还。`],
        [`你可以选择：追求"天下第一剑"的虚名，在江湖上不断挑战；或者放下名心，做一名默默无闻的护剑之人。`, ``, '挑战天下，求名求剑', '放下执念，守心护道', 1.0],
      ],
      special: [
        [`你悟出了断剑中的秘密——"心剑"不是剑法，而是剑道。剑在人在，剑亡人亡，但剑心永存。你终于明白父亲为何隐退。`, `你将断剑重铸，铸剑师说缺了一角的材料。你说："不必补齐，缺口亦是剑的一部分。正如人生，遗憾亦是圆满。"`],
        [`你在{location}的华山之巅，面对天下群雄，却收剑入鞘。"天下第一剑不是我，"你说，"是每一个不为名利拔剑的人。"`, `后人称你为"无心剑圣"。他们说你的剑没有招式，却无人能敌。只有你知道，无招之招，才是剑道的终点。`],
      ],
    },
    assassin_wuxia: {
      name: '暗器师',
      childhood: [
        [`你从小便有一双巧手。{npc}教你暗器之道："明枪易躲，暗箭难防。但暗器之道，不在阴毒，在精准与克制。"你似懂非懂地点头。`, `作为暗器师传人，你在{location}的练习场上，每日要掷出三千枚飞蝗石。你的手磨出了厚厚的茧，但准头越来越好——能在十丈外打落柳叶。`],
        [`八岁那年，你在{location}目睹了一场暗杀。刺客的暗器手法精妙绝伦，但你注意到他杀完人后，手在颤抖。{npc}说："第一次都会抖。习惯就好了。"你说："我不想习惯。"`, `你在密室中发现了一架机关弩的图纸，上面标注着"唐门遗作"。你偷偷仿制了一架，威力惊人，但后坐力震伤了你的肩膀。`],
      ],
      growth: [
        [`十五岁，你在{location}执行第一次任务——用暗器打落一位恶霸手中的刀，而非杀他。你说："暗器可以杀人，也可以止戈。"`, `你的"止戈暗器"在江湖上引起了争议。传统暗器师说你是异端，但被你救下的人却称你为"暗器侠"。`],
        [`二十岁那年，你在{location}遇到了唐门最后的传人。他说："唐门暗器，杀一人救百人。你懂吗？"你说："不懂。我只想让暗器不再是暗器，而是明器。"`, `你开始研制"明器"——不伤人命的暗器。麻痹针、迷魂砂、锁穴钉...{npc}摇头："这不是暗器，这是医具。"你说："那就叫医具吧。"`],
      ],
      adult: [
        [`成年后的你在{location}已是一名传奇暗器师。但你也面临抉择：是继续做一名来无影去无踪的刺客，还是将暗器之道公之于众、用于正途？`, `一位大侠在{location}被围攻，你以暗器救他脱困。他却转身指责你："暗器伤人，不算英雄！"你苦笑："我救了你，你却嫌我手段不正？"`],
        [`你可以选择：坚持"明器"之道，哪怕被整个暗器界排斥；或者回归传统，做一名令人生畏的刺客，但至少被同行尊重。`, ``, '坚持明器，离经叛道', '回归传统，刺客之王', 1.0],
      ],
      special: [
        [`你发现唐门灭亡的真相——并非毁于外敌，而是毁于内部对"暗器该不该只用于杀人"的分歧。你的"明器"之道，正是当年失败的那一派。`, `你将唐门遗作与自己的明器之术结合，在{location}建立了"百机堂"。堂中弟子不以杀人为业，而以暗器行侠仗义。`],
        [`百年后，"百机堂"成为了江湖上最特殊的势力。他们说你的弟子"暗器不出则已，出必救人"。这正是你想要的江湖。`, `你临终前将最后一枚暗器——一枚没有任何杀伤力的银铃——交给了弟子。你说："暗器的最高境界，不是让人死，而是让人醒。"`],
      ],
    },
  };

  Object.entries(identityStories).forEach(([id, story]) => {
    const chainPrefix = `chain_${id}`;

    // 童年 2个
    story.childhood.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 3 + i * 4, 8 + i * 4, 0.85, texts, {
        identityExclusive: id,
        effects: rand([{ special: 5 }, { strength: 4, luck: 2 }, { intelligence: 5 }]),
        flags: [`${chainPrefix}_childhood_${i}`],
      }));
    });

    // 少年 2个
    story.growth.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 14 + i * 5, 20 + i * 5, 0.80, texts, {
        identityExclusive: id,
        effects: rand([{ strength: 6 }, { intelligence: 6 }, { special: 6 }, { charisma: 4, luck: 3 }]),
        requiredFlags: [`${chainPrefix}_childhood_0`],
        flags: [`${chainPrefix}_growth_${i}`],
        chainPriority: 1,
      }));
    });

    // 成年 2个
    story.adult.forEach((item, i) => {
      const isChoice = Array.isArray(item) && item.length > 2;
      const texts = isChoice ? [item[0], item[1]] : item;
      const opts = isChoice ? {
        choices: [
          choice(item[2], item[4] !== undefined ? item[4] : 1.0, `你选择了${item[2]}，从此走上了属于自己的道路`, `你选择了${item[2]}，但前路远比想象中艰难`, { special: 10, strength: 5 }, { intelligence: 5, health: -5 }, [`branch_identity_${id}_path`], [`branch_identity_${id}_path_fail`]),
          choice(item[3], item[4] !== undefined ? item[4] : 1.0, `你选择了${item[3]}，找到了新的方向`, `你选择了${item[3]}，却发现自己失去了根基`, { luck: 5, charisma: 5 }, { luck: -3 }, [`branch_identity_${id}_new`], [`branch_identity_${id}_new_fail`]),
        ]
      } : {};
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 26 + i * 10, 35 + i * 10, 0.75, texts, {
        identityExclusive: id,
        effects: isChoice ? {} : rand([{ strength: 8 }, { intelligence: 8 }, { special: 8 }]),
        requiredFlags: [`${chainPrefix}_growth_0`],
        flags: [`${chainPrefix}_adult_${i}`],
        chainPriority: 2,
        ...opts,
      }));
    });

    // 特殊 2个
    story.special.forEach((texts, i) => {
      T.push(tmpl(makeId(prefix, 'identity_exclusive', id), 'identity_exclusive', 10 + i * 20, 30 + i * 30, 0.70, texts, {
        identityExclusive: id,
        effects: rand([{ special: 10, health: -5 }, { strength: 8, luck: 5 }, { intelligence: 10 }]),
        requiredFlags: [`${chainPrefix}_adult_0`],
        flags: [`${chainPrefix}_special_${i}`],
        chainPriority: 3,
      }));
    });
  });

  return T;
}

// ============================================================
// 武侠世界废材逆袭事件生成器
// ============================================================

function generateWuxiaTrashEvents(w) {
  const T = [];
  const { prefix } = w;

  // 阶段1（0-6）：被判定废材，发现奇遇
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 0, 6, 0.92, [
    `内力测试那日，{location}的试功石毫无反应。{npc}摇头叹息："内力低微，经脉闭塞，这孩子不是练武的料子。"周围人投来怜悯的目光。`,
    `作为武学废材，你只能看着同龄人在{location}演练招式。他们嘲笑你是"江湖的笑话"，连最基础的运功都无法完成。`,
  ], { talentExclusive: 'trash', effects: { special: -5, strength: -2, intelligence: 3 }, flags: ['trash_childhood_start'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 4, 10, 0.88, [
    `你不甘心。每日凌晨，你在{location}的山顶对着朝阳挥拳一千次，直到双臂麻木。{npc}路过时皱眉："经脉闭塞，练这些有何用？"`,
    `你在{location}的古旧书摊淘到了半本残破的《易筋锻骨篇》。书页泛黄，开篇写道："天无绝人之路，废脉亦可重铸。"你如获至宝。`,
  ], { talentExclusive: 'trash', effects: { strength: 3, intelligence: 2, luck: 2 }, requiredFlags: ['trash_childhood_start'], flags: ['trash_childhood_1'] }));

  // 阶段2（12-25）：暗中积累，苦修内力
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 12, 18, 0.85, [
    `你按照《易筋锻骨篇》的方法，以瀑布冲击淬炼经脉。第一次尝试时，剧痛让你昏死过去。醒来时，你发现丹田中竟有了一丝微弱的气感。`,
    `别的天才一日可完成的内功运转，你需要一个月。但你在{location}日复一日，从未间断。{npc}偶然看到你的训练，震惊地说："这...这是上古锻体之法？"`,
  ], { talentExclusive: 'trash', effects: { strength: 5, health: 3, special: 2 }, requiredFlags: ['trash_childhood_1'], flags: ['trash_growth_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 15, 22, 0.80, [
    `你在{location}救了一位被仇家重伤的游方郎中。他感激之下，传授了你一套独门针灸之术——能刺激经脉、激发潜能。这是连大门派都没有的秘法！`,
    `{npc}被你的毅力打动，决定收你为记名弟子。他说："我这一生见过无数天才，但像你这样的傻子，还是第一个。"你终于有了师父。`,
  ], { talentExclusive: 'trash', effects: { strength: 7, health: 5, charisma: 2 }, requiredFlags: ['trash_growth_0'], flags: ['trash_growth_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 18, 25, 0.75, [
    `经过多年的苦修，你在{location}遇到了一个瓶颈——经脉虽已疏通，但内力积累太慢。一位路过的老者告诉你："内力不足，便以招式补；招式不精，便以意志补。"`,
    `你在{location}的瀑布下苦修三月，终于突破了第一重经脉桎梏。出水时，你一掌劈开了千斤巨石——这一掌，没有雄厚内力，只有千锤百炼的劲力。`,
  ], { talentExclusive: 'trash', effects: { strength: 8, intelligence: 3, luck: 3 }, requiredFlags: ['trash_growth_1'], flags: ['trash_growth_2'] }));

  // 阶段3（26-45）：崭露头角，以巧破力
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 26, 35, 0.78, [
    `{location}举办武林大会，你以"无名散人"的身份报名参加。所有人都嘲笑你："一个内力低微的废物，也配参加武林大会？"`,
    `大会第一轮，你对上了名门弟子。对方内力深厚，拳风如虎。你不硬接，以诡异的步法和精准的击打对方穴道，竟将其制服！全场寂静。`,
  ], { talentExclusive: 'trash', effects: { strength: 8, charisma: 6, special: 3 }, requiredFlags: ['trash_growth_2'], flags: ['trash_adult_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 30, 40, 0.72, [
    `你的"以巧破力"震惊了江湖。{npc}说你是"百年以来第一个以内力低微之身击败名门弟子的人"。各大门派开始重新审视"技巧"这条被遗忘的道路。`,
    `你在{location}建立了一座小小的"巧劲武馆"，专门招收内力不足或有身体缺陷的孩子。你说："内力决定起点，但智慧和毅力决定终点。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 7, intelligence: 5, luck: 3 }, requiredFlags: ['trash_adult_0'], flags: ['trash_adult_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 45, 0.68, [
    `昔日嘲笑你的同村武者在{location}与你重逢。他依然是三流高手，而你已能挑战一流。他跪地痛哭："当年是我有眼无珠..."你将他扶起。`,
    `{legend}的传承之地开启，你说服众人让你这个"内力低微的废物"也进去试试。他们抱着看笑话的心态同意了——但很快，他们就笑不出来了。`,
  ], { talentExclusive: 'trash', effects: { strength: 6, luck: 5, special: 4 }, requiredFlags: ['trash_adult_1'], flags: ['trash_adult_2'] }));

  // 逆袭关键事件 — 含选择分支
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 28, 42, 0.65, [
    `武林大会的决赛上，你对上了当今武林盟主的亲传弟子。对方内力如海，而你内力浅薄。所有人都认为这是一场屠杀——但他们错了。`,
    `比赛开始前，{npc}暗中塞给你一本册子："这是'逆脉针法'，能短时间内激发三倍经脉潜能，但事后会损伤根基。用不用，你自己决定。"`,
  ], {
    talentExclusive: 'trash',
    effects: { strength: 3 },
    requiredFlags: ['trash_adult_1'],
    flags: ['trash_climax_0'],
    chainPriority: 2,
    choices: [
      choice('施用逆脉针法，全力一战', 1.0, '逆脉针法让你的招式速度暴涨三倍，点中了对方周身大穴！全场震撼，百年未有！', '逆脉针法的反噬让你经脉剧痛，虽然赢了比赛，但需休养三年', { strength: 15, charisma: 10, special: 5, health: -20 }, { strength: 5, charisma: 3, health: -30 }, ['branch_trash_fight'], ['branch_trash_fight_fail']),
      choice('拒绝针法，以本真之力战斗', 1.0, '你没有借助外力，仅凭精妙招式与对方周旋百招。虽然最终惜败，但你赢得了所有人的尊重！', '你拒绝了针法，但实力差距太大，被一招击败。众人摇头："果然，废物就是废物。"', { charisma: 10, luck: 8, strength: 5 }, { charisma: -5, health: -15 }, ['branch_trash_persist'], ['branch_trash_persist_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 35, 50, 0.60, [
    `你在{location}遇到了一位隐世高人。他打量你许久，说："你的经脉已达凡人之极限。若想再进一步，需以'破而后立'之法——废去旧脉，重塑新脉。"`,
    `老者给了你两个选择：他可以帮你施针，废去旧脉重塑新脉（九死一生）；或者传你一套更稳妥的锻体之法（进展缓慢但安全）。`,
  ], {
    talentExclusive: 'trash',
    effects: { special: 3 },
    requiredFlags: ['trash_climax_0'],
    flags: ['trash_climax_1'],
    chainPriority: 2,
    choices: [
      choice('破而后立，重塑经脉', 1.0, '七七四十九针下去，你几度昏死又几度醒来。最终，新脉已成，内力如江河奔涌——你成就了传说中的"无瑕经脉"！', '重塑过程超出了你的承受极限。虽然侥幸不死，但经脉受损大半，需要数十年才能恢复', { strength: 20, special: 10, health: -25 }, { health: -40, strength: 3 }, ['branch_trash_transform'], ['branch_trash_transform_fail']),
      choice('稳扎稳打，不求速成', 1.0, '你选择了更稳妥的道路。虽然进展缓慢，但根基无比扎实。老者点头："大器晚成，方得始终。"', '稳妥之路需要的时间远超你的寿元。你知道，自己可能等不到大成的那一天了', { intelligence: 10, strength: 5, health: 5 }, { intelligence: 3, luck: -3 }, ['branch_trash_persist2'], ['branch_trash_persist2_fail']),
    ]
  }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 40, 55, 0.55, [
    `你的故事传遍了江湖。{location}的巧劲武馆每天都有人慕名而来——不是天才，而是那些被判定为"废物"的孩子。`,
    `{npc}跪在你面前，为当年嘲笑你而道歉。你扶起他，说："我走的路，比你们都长。不是因为我更强，而是因为我从未停下。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 5, special: 5 }, requiredFlags: ['trash_climax_1'], flags: ['trash_climax_2'], chainPriority: 3 }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 45, 60, 0.50, [
    `你以巧劲之道，挑战了当世武林宗师。那一战没有内力对轰，只有招式与智慧的极致碰撞。最终，你一指点中对方膻中穴——胜负已分！`,
    `你成为了百年来第一个以内力浅薄之躯击败武林宗师的人。{location}的武馆门前排起了长队，那个被嘲笑的孩子，如今已是传说。`,
  ], { talentExclusive: 'trash', effects: { strength: 10, intelligence: 5, charisma: 10, special: 10 }, requiredFlags: ['trash_climax_2'], flags: ['trash_legend'], chainPriority: 3 }));

  // 废材老年
  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 55, 80, 0.60, [
    `你在{location}收徒传道，专门招收内力不足的孩子。你说："内力决定起点，但智慧和毅力决定终点。"`,
    `你的弟子中有人开创了新的招式流派，有人以内力低微之身成为了门派长老。{npc}感叹："你一人之力，改变了一个时代的武学格局。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 8, intelligence: 5 }, requiredFlags: ['trash_legend'], flags: ['trash_elder_0'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 60, 90, 0.55, [
    `大限将至，但你毫无遗憾。{npc}问你后不后悔走这条艰难的路。`,
    `你微笑着说："如果重来一次，我还是会选择做那个内力低微的废物。因为正是'废物'二字，让我找到了属于自己的道。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 6, health: -5 }, requiredFlags: ['trash_elder_0'], flags: ['trash_elder_1'] }));

  T.push(tmpl(makeId(prefix, 'trash_exclusive'), 'trash_exclusive', 70, 100, 0.50, [
    `你离世的那天，{location}下起了细雨。无数你曾经帮助过的人自发前来为你送行。`,
    `墓碑上没有刻任何武功名号，只刻着一句话："他证明了，废物也能走得很远。"`,
  ], { talentExclusive: 'trash', effects: { charisma: 10, luck: 5 }, requiredFlags: ['trash_elder_1'], flags: ['trash_elder_2'] }));

  return T;
}

// ============================================================
// 武侠世界重大抉择事件生成器
// ============================================================

function generateWuxiaMajorChoices(w) {
  const T = [];
  const { prefix } = w;

  // 重大抉择1：江湖之路（15岁）
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 15, 15, 0.98, [
    `你站在{location}的山巅，一位白发老者负手而立："少年，江湖有三条路。正道之路，侠义无双，但规矩缠身；魔道之路，快意恩仇，但举世皆敌；逍遥之路，无拘无束，但孤苦伶仃。选一条吧。"`,
  ], {
    choices: [
      choice('正道之路（侠义无双，除暴安良）', 1.0, '你选择了正道之路，拜入名门正派，修习正宗心法。你的侠名在江湖上渐渐传开，但你也发现，正道并非想象中那般光明磊落', '你选择了正道之路，却被门派规矩束缚得喘不过气。每日除了练功就是站岗，江湖的广阔与你无关', { charisma: 10, special: 8, intelligence: 5 }, { charisma: -5, strength: 3 }, ['major_righteous'], ['major_righteous_fail']),
      choice('魔道之路（快意恩仇，不拘礼法）', 1.0, '你选择了魔道之路，加入了一个亦正亦邪的门派。在这里，实力就是规矩。你的武功进步神速，但你也成为了正道人士追杀的目标', '你选择了魔道之路，却发现魔教内部倾轧比正道更甚。今日的兄弟，明日的刀下鬼', { strength: 12, special: 5 }, { charisma: -10, health: -10 }, ['major_demonic'], ['major_demonic_fail']),
      choice('逍遥之路（无拘无束，独来独往）', 1.0, '你选择了逍遥之路，不拜门派，只凭一己之力行走江湖。你没有靠山，也没有束缚。风餐露宿，但天地任逍遥', '你选择了逍遥之路，却在{location}遭遇劫匪时无人援手。孤身一人的江湖，比你想象中更冷', { luck: 10, intelligence: 8 }, { luck: -8, health: -15 }, ['major_free'], ['major_free_fail']),
    ],
    flags: ['major_seen_15'],
    chainPriority: 10,
  }));

  // 正道后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `因为你选择了正道之路，{location}的百姓对你交口称赞。但门派长老却警告你："侠名太盛，易招嫉恨。"`,
    `你在{location}奉命铲除一群"山贼"，却发现他们其实是被逼上梁山的饥民。你的剑，第一次犹豫了。`,
  ], { requiredFlags: ['major_righteous'], effects: { charisma: 8, special: 6 }, flags: ['major_righteous_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你因为正道之路而获得了江湖声望，但{npc}警告你："正道之中也有伪君子。小心那些笑着递刀的人。"`,
    `你的侠名传遍了{location}，越来越多的年轻人想拜你为师。但你心中有一个疑问：你教的，真的是正义吗？`,
  ], { requiredFlags: ['major_righteous_1'], effects: { charisma: 10, intelligence: 5, special: 4 } }));

  // 魔道后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `因为你选择了魔道之路，{location}的正道人士对你喊打喊杀。但你也发现，魔教弟子之间有着过命的交情——因为举世皆敌，所以格外团结。`,
    `你在{location}结识了一位魔教女子。她问你："正道说我们是魔，但我们可曾欺辱过百姓？"你答不上来。`,
  ], { requiredFlags: ['major_demonic'], effects: { strength: 8, charisma: -3 }, flags: ['major_demonic_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你因为魔道之路而获得了强大的实力，但{npc}警告你："魔道之所以为魔，不是因为功法，而是因为人心。别让自己变成真正的魔。"`,
    `你的杀意越来越重，{location}的飞鸟经过你上空都会惊飞。你开始怀疑：这真的是你要的江湖吗？`,
  ], { requiredFlags: ['major_demonic_1'], effects: { strength: 10, special: 5, intelligence: -5 } }));

  // 逍遥后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 28, 0.88, [
    `因为你选择了逍遥之路，在{location}结识了来自各地的奇人异士。你的逍遥精神感染了{npc}。`,
    `你在逍遥探索中意外发现了{legend}留下的隐秘线索，命运的齿轮开始转动。`,
  ], { requiredFlags: ['major_free'], effects: { luck: 6, intelligence: 4 }, flags: ['major_free_1'] }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 40, 0.85, [
    `你在逍遥之路上的探索让你发现了{location}不为人知的秘密。{legend}的遗迹因为你的一次偶然探索而被发现。`,
    `{npc}告诉你，你的逍遥精神正是{legend}当年所追求的，你冥冥之中走上了正确的道路。`,
  ], { requiredFlags: ['major_free_1'], effects: { luck: 8, special: 4 } }));

  // 重大抉择2：家国与江湖（30岁）
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 30, 0.97, [
    `{location}发生了一件震动天下的大事。朝廷与武林盟主签订密约，要将江湖门派纳入朝廷管辖，违者以谋反论处。但你在调查中发现，武林盟主其实是被朝廷以家人性命胁迫的——他暗中联络各派，欲反戈一击。{npc}向你提出了一个抉择：效忠朝廷可获荣华富贵，但江湖将不复存在；支持武林盟主可保江湖独立，但可能株连九族；或者联合各派推翻朝廷，重建秩序。这是对你灵魂的考验。`,
  ], {
    choices: [
      choice('忠君报国，约束江湖', 1.0, '你选择了效忠朝廷，协助推行"以武制武"之策。江湖门派纷纷归顺，武林盟主被囚。你获得了高官厚禄，但夜深人静时，你总会想起当年在江湖上纵马高歌的日子', '你选择了效忠朝廷，但朝廷出尔反尔，在你完成任务后便弃之如敝履。你失去了江湖，也失去了朝廷的信任', { intelligence: 10, charisma: 6, special: 5 }, { charisma: -10, luck: -5, special: -5 }, ['major_loyalty'], ['major_loyalty_fail']),
      choice('江湖独立，反抗朝廷', 1.0, '你选择了支持武林盟主，暗中联络各派，在{location}发动了震惊天下的"武林起义"。虽然损失惨重，但江湖最终保住了独立。你的名字，被刻在了武林丰碑之上', '你支持了武林盟主，但消息走漏，朝廷大军压境。{location}血流成河，江湖元气大伤，你成为了朝廷头号通缉犯', { strength: 10, charisma: 8, luck: 5 }, { health: -30, charisma: -10, special: -5 }, ['major_independence'], ['major_independence_fail']),
      choice('推翻朝廷，重建秩序', 1.0, '你选择了最激进的道路——联合魔教、绿林、甚至异域势力，一举推翻了腐朽的朝廷。新朝建立后，你拒绝了封王拜相，只要求"江湖自治"。你说："我要的不是权力，是一个公平的天下"', '你的起义失败了。朝廷与江湖联手镇压了你，说你是"乱臣贼子"。你在{location}被处以极刑，但临死前你笑了："至少我试过了。"', { strength: 12, intelligence: 8, special: 5 }, { health: -100, charisma: -15 }, ['major_revolution'], ['major_revolution_fail']),
    ],
    flags: ['major_seen_30'],
    chainPriority: 10,
  }));

  // 忠君后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `因为你选择了忠君，{location}的武林人士视你为叛徒。但你暗中保护了不少门派，让他们以"归顺"之名得以存续。`,
    `你在朝中步步高升，却始终为江湖留了一扇后门。{npc}感叹："身在曹营心在汉，你比任何人都难。"`,
  ], { requiredFlags: ['major_loyalty'], effects: { intelligence: 8, charisma: 8, luck: 5 } }));

  // 独立后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `你因为江湖独立之战而成为了传奇。{location}的百姓自发为你建立祠堂，虽然简陋但充满诚意。`,
    `新的武林盟主在{location}颁布了第一条江湖自治法令——这是你浴血奋战换来的。`,
  ], { requiredFlags: ['major_independence'], effects: { charisma: 10, strength: 5, special: 3 } }));

  // 推翻后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 35, 45, 0.85, [
    `你因为推翻朝廷而成为了新朝的无冕之王。但你说："我不要王位，我要的是天下再没有人因为出身而被决定命运。"`,
    `{npc}带来了坏消息：新朝内部也开始争权夺利。你苦笑着摇头："推翻一个朝廷容易，推翻人心中的贪婪难。"`,
  ], { requiredFlags: ['major_revolution'], effects: { strength: 10, intelligence: 6, charisma: -3 } }));

  // 重大抉择3：天下第一（45岁）
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 45, 45, 0.96, [
    `你修炼到了一流高手的巅峰，离武林宗师只差一步。{npc}告诉你："你的武功已臻化境，但江湖上有三个人在你之上——武林盟主、魔教教主、以及隐居的天下第一剑。你有三个选择：参加武林盟主之争，号令天下；隐退山林，不问世事；或者挑战天下第一，只求一败。"`,
  ], {
    choices: [
      choice('参加武林盟主之争，号令天下', 1.0, '你参加了{location}的武林大会，连败十八派掌门，登上了武林盟主之位。从此江湖以你为尊，但你也发现，坐在那个位置上的人，往往身不由己', '你参加了武林大会，却在决赛中败给了暗算。对方在兵器上涂了慢性毒药，你虽察觉却已中招，功力大损', { charisma: 15, special: 10, strength: 5 }, { health: -30, strength: -5, charisma: -5 }, ['major_chief'], ['major_chief_fail']),
      choice('隐退山林，不问世事', 1.0, '你选择了隐退，在{location}的深山老林中建了一座茅屋。每日种花养鸟，偶有少年慕名求教，你便指点一二。你说："江湖不是打打杀杀，江湖是人情世故。我累了。"', '你隐退了，但江湖的恩怨没有放过你。昔日的仇家找到了你的隐居之处，你不得不重出江湖', { intelligence: 10, luck: 8, health: 10 }, { health: -20, strength: 5 }, ['major_hermit'], ['major_hermit_fail']),
      choice('挑战天下第一，只求一败', 1.0, '你孤身一人登上了{location}的绝顶峰，向天下第一剑发起了挑战。那一战打了三天三夜，最终你以半招之差落败。但天下第一剑对你说："百年以来，你是第一个让我出全力的人。"你虽败犹荣', '你挑战了天下第一，但实力差距太大。三招之内，你便败下阵来。天下第一剑摇头："你的心不纯，剑也不纯。回去吧。"', { strength: 15, intelligence: 10, charisma: 8 }, { health: -25, charisma: -5 }, ['major_challenge'], ['major_challenge_fail']),
    ],
    flags: ['major_seen_45'],
    chainPriority: 10,
  }));

  // 盟主后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你成为武林盟主后，{location}的大小事务都需要你定夺。你渐渐明白，为什么前任盟主会那般疲惫。`,
    `你在盟主之位上推行改革，减少门派纷争。虽然阻力重重，但你无怨无悔。`,
  ], { requiredFlags: ['major_chief'], effects: { charisma: 8, intelligence: 5, special: 5 } }));

  // 隐退后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你隐退后，{location}的江湖上流传着你的传说。有人说你死了，有人说你成仙了，还有人说你在等一个值得出山的弟子。`,
    `一位少年找到了你的茅屋，跪地三天三夜求你收徒。你叹道："躲了半辈子，还是躲不过缘分。"`,
  ], { requiredFlags: ['major_hermit'], effects: { intelligence: 8, luck: 6, charisma: 4 } }));

  // 挑战后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 48, 58, 0.82, [
    `你虽败于天下第一剑，但那一战让你的武功更上一层楼。{npc}说："失败是最好的老师，但你这次交的学费太高了。"`,
    `天下第一剑托人送来一本剑谱，扉页上写着："赠予让我全力以赴之人。"你捧着剑谱，热泪盈眶。`,
  ], { requiredFlags: ['major_challenge'], effects: { strength: 10, intelligence: 8, special: 5 } }));

  // 重大抉择4：人生终局（60岁）
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 60, 60, 0.95, [
    `你站在{location}的绝顶之上，内力已臻化境，隐隐触摸到了传说中的"破碎虚空"之境。但你也发现了一个秘密：破碎虚空并非飞升仙界，而是将毕生内力散于天地之间，反哺万物——你将失去一切武功，甚至生命。{npc}问你："这是你的选择吗？"`,
  ], {
    choices: [
      choice('破碎虚空，反哺天地', 1.0, '你选择了破碎虚空。毕生内力化作漫天星光，散入山河大地。你没有死，但失去了所有武功，变回了一个普通人。然而，{location}的草木因为你的内力而更加繁茂，百姓因为你的馈赠而百病不侵。你说："这才是武学真正的终点。"', '你试图破碎虚空，但内力反噬，经脉尽断。虽然侥幸保住性命，却从此卧床不起', { special: 20, charisma: 15, health: 10 }, { health: -80, special: -20, strength: -15 }, ['major_shatter'], ['major_shatter_fail']),
      choice('留在江湖，传承武学', 1.0, '你选择了留在江湖。你在{location}开宗立派，将毕生所学倾囊相授。你的弟子遍布天下，有的成为了大侠，有的成为了宗师。临终前，你说："我没有破碎虚空，但我破碎了\'武学不可外传\'的规矩。"', '你留在了江湖，但仇家趁你年老体衰找上门来。你的弟子拼死护你周全，但你看着他们的伤亡，心中满是愧疚', { charisma: 15, intelligence: 10, luck: 10 }, { health: -40, charisma: 5 }, ['major_legacy_wuxia'], ['major_legacy_wuxia_fail']),
      choice('云游四海，不问世事', 1.0, '你选择了最平凡的道路——放下一切，做一名游方老人。你走遍名山大川，将所见所闻写成一本《江湖游记》。书中没有武功秘籍，只有人情冷暖。后人说，这本书比任何武功都珍贵', '你云游途中遭遇山匪，年老体衰的你无力反抗。关键时刻，一位你曾经指点过的少年出现，救了你一命。你说："善因善果，江湖不负我。"', { luck: 12, intelligence: 8, health: 5 }, { health: -20, luck: 5 }, ['major_wander'], ['major_wander_fail']),
    ],
    flags: ['major_seen_60'],
    chainPriority: 10,
  }));

  // 破碎后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你破碎虚空后，{location}的百姓将你奉为神明。但你只是坐在村口晒太阳，和孩童们讲故事。`,
    `一位年轻的武者来挑战你，发现你已没有内力。他愣在原地，你却笑着说："来，我请你喝茶。"`,
  ], { requiredFlags: ['major_shatter'], effects: { charisma: 12, luck: 10, health: 5 } }));

  // 传承后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你留在江湖的举动感动了无数人。{location}建起了你的雕像，不是一个武者，而是一个教书老人的形象。`,
    `你将毕生武学整理成册，存放在{location}，等待有缘人。你说："武功不是用来杀人的，是用来保护所爱之人的。"`,
  ], { requiredFlags: ['major_legacy_wuxia'], effects: { charisma: 12, intelligence: 8, special: 5 } }));

  // 云游后续
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 65, 80, 0.80, [
    `你云游四海的游记成为了畅销书。{location}的书店里，年轻人争相传阅，说这才是真正的江湖。`,
    `你在一座无名山头安详离世。没有墓碑，只有一棵你亲手种下的松树。后人说，那树下常有侠客歇脚，仿佛你还在守护着他们。`,
  ], { requiredFlags: ['major_wander'], effects: { luck: 10, intelligence: 5, charisma: 5 } }));

  return T;
}

// ============================================================
// 武侠世界境界突破事件生成器
// ============================================================

function generateWuxiaRealmEvents(w) {
  const T = [];
  const { prefix } = w;

  const realms = [
    { stage: 1, name: '三流高手', minAge: 18, maxAge: 30, prob: 0.92, reqText: '内力≥20、门派≥15', maxAgeGain: 60, desc: '三流高手是江湖的入门。你的内力已能贯通经脉，招式也有了章法。' },
    { stage: 2, name: '二流高手', minAge: 35, maxAge: 50, prob: 0.88, reqText: '内力≥35、武学≥30、气血≥20', maxAgeGain: 80, desc: '二流高手的内力浑厚数倍，招式融会贯通，在地方上已是一号人物。' },
    { stage: 3, name: '一流高手', minAge: 55, maxAge: 75, prob: 0.85, reqText: '内力≥50、武学≥45', maxAgeGain: 120, desc: '一流高手已能开宗立派，内力收发由心，招式出神入化。' },
    { stage: 4, name: '武林宗师', minAge: 80, maxAge: 110, prob: 0.82, reqText: '内力≥70、武学≥60', maxAgeGain: 200, desc: '武林宗师已臻化境，一招一式皆含武理，弟子遍布江湖。' },
    { stage: 5, name: '大宗师', minAge: 120, maxAge: 160, prob: 0.78, reqText: '内力≥90、武学≥80、气血≥60', maxAgeGain: 300, desc: '大宗师已触摸到武道极限，内力可外放伤人，气势如山如海。' },
    { stage: 6, name: '武圣', minAge: 200, maxAge: 280, prob: 0.75, reqText: '武学≥100', maxAgeGain: 500, desc: '武圣之名震古烁今，你的存在本身就是一部江湖传说。' },
    { stage: 7, name: '破碎虚空', minAge: 300, maxAge: 400, prob: 0.70, reqText: '内力≥120、武学≥100', maxAgeGain: 2000, desc: '破碎虚空是武道的终极。散毕生功力于天地，反哺万物。' },
  ];

  realms.forEach((r, idx) => {
    const prevFlag = idx === 0 ? null : `realm_breakthrough_${realms[idx-1].stage}`;
    const reqFlags = prevFlag ? [prevFlag] : [];

    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge, r.maxAge, r.prob, [
      `你在{location}苦修多年，终于触摸到了${r.name}的门槛。{npc}告诉你："${r.desc}突破需要${r.reqText}。"`,
      `你的武功已达瓶颈，在{location}感应到了${r.name}的契机。但突破之路九死一生，稍有不慎便可能走火入魔。`,
    ], {
      requiredFlags: reqFlags,
      flags: [`realm_attempt_${r.stage}`],
      chainPriority: 5,
      choices: [
        choice('全力冲击，不留退路', 1.0,
          `你孤注一掷，将全部内力灌注于丹田经脉。刹那间，{location}的落叶无风自动——你成功了！你突破到了${r.name}！`,
          `你全力冲击瓶颈，但内力反噬，经脉受损。虽然保住了性命，但武功大跌，需要数年才能恢复。`,
          { realm: 1, special: 5, intelligence: 3, maxAge: r.maxAgeGain },
          { health: -30, special: -10, maxAge: -20 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail_${r.stage}`]
        ),
        choice('稳扎稳打，徐徐图之', 1.0,
          `你选择了最稳妥的方式，以水滴石穿的毅力缓缓磨平瓶颈。虽然耗时更长，但你最终平安突破到了${r.name}。`,
          `你的稳扎稳打被一场意外打断——{npc}的仇家找上门来，打断了你的闭关。突破失败。`,
          { realm: 1, special: 3, intelligence: 5, maxAge: Math.floor(r.maxAgeGain * 0.7) },
          { health: -15, special: -5, maxAge: -10 },
          [`realm_breakthrough_${r.stage}`, `realm_breakthrough_${r.stage}_steady`], [`realm_fail_${r.stage}_steady`]
        ),
        choice('放弃突破，继续积累', 1.0,
          `你选择了继续积累。虽然暂时没能突破，但你的根基更加扎实，为日后的突破打下了坚实的基础。`,
          '',
          { intelligence: 3, special: 2, strength: 2 },
          {},
          [`realm_delay_${r.stage}`], []
        ),
      ]
    }));

    // 突破成功后续事件
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 2, r.maxAge + 15, r.prob * 0.8, [
      `你突破到${r.name}的消息传遍了江湖。{location}的武者们纷纷前来祝贺，你的名字被刻在了武林碑上。`,
      `{npc}看着你，眼中满是欣慰："从江湖新秀到${r.name}，你走了${r.minAge}年。这速度，在江湖上已是中上之资。"`,
    ], {
      requiredFlags: [`realm_breakthrough_${r.stage}`],
      flags: [`realm_stable_${r.stage}`],
      chainPriority: 2,
      effects: { charisma: 3, luck: 2 },
    }));

    // 突破失败后续事件（可以重试）
    T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', r.minAge + 5, r.maxAge + 25, r.prob * 0.7, [
      `上一次突破${r.name}失败后，你在{location}默默疗伤、重新积累。{npc}鼓励你："失败不可怕，可怕的是失去再战的勇气。"`,
      `你的伤势已愈，武功甚至比以前更加精进。你再次感应到了${r.name}的契机——这一次，你更有把握。`,
    ], {
      requiredFlags: [`realm_fail_${r.stage}`],
      flags: [`realm_retry_${r.stage}`],
      chainPriority: 3,
      choices: [
        choice('再次冲击', 1.0,
          `第二次冲击，你总结了上次的教训，一举突破到了${r.name}！{location}的武者们为你喝彩！`,
          `又一次失败。你开始怀疑，自己是否真的与${r.name}无缘...`,
          { realm: 1, special: 5, maxAge: r.maxAgeGain },
          { health: -40, special: -15, maxAge: -30 },
          [`realm_breakthrough_${r.stage}`], [`realm_fail2_${r.stage}`]
        ),
      ]
    }));
  });

  return T;
}

// ============================================================
// 武侠世界通用事件生成器
// ============================================================

function generateWuxiaCommonEvents(w) {
  const T = [];
  const { prefix, scenes, npcs, legends } = w;

  // --- Childhood (0-12) 5 templates ---
  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 0, 3, randProb('legendary'), [
    `你出生那天，{location}突然狂风大作，一道剑气冲天而起。{npc}跪地叩拜，说你是千年一遇的${w.talentNames.legendary}。`,
    `你降生的瞬间，{location}的兵器纷纷出鞘鸣响，{legend}的虚影在天际显现，整个江湖为之震动。`,
    `你的第一声啼哭引发了{location}的内力波动，{npc}颤抖着说："${w.talentNames.legendary}降世了！"`,
  ], { effects: { luck: 10, special: 8, charisma: 5 } }));

  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 2, 7, randProb('epic'), [
    `你在{location}玩耍时，体内突然涌出一股热流。{npc}惊讶地发现你竟是${w.talentNames.good}之资！`,
    `三岁时，你在{location}无意间触发了一套古老的拳法阵势，威力比成年武者还强。`,
    `{npc}为你进行根骨测试，{legend}的印记在你身上一闪而逝——你是被选中的人。`,
  ], { effects: { special: 6, intelligence: 4 } }));

  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 4, 9, randProb('rare'), [
    `你在{location}救了一只受伤的小鹰，它其实是{legend}的信使，临走前留下了一枚暗器铁令。`,
    `{npc}在你满月时送了一块玉佩，后来你发现那是一件上古神兵的碎片。`,
    `你从小就能看见别人看不见的{legend}幻影，{npc}说这是内力初现的征兆。`,
    `你在{location}挖到了一坛百年陈酿，喝了一口后浑身舒畅，经脉隐隐发热。`,
  ], { effects: rand([{ luck: 5 }, { special: 4 }, { intelligence: 4 }]) }));

  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 0, 6, randProb('common', 0, 2), [
    `你生在普通人家，每天在{location}玩耍，日子平淡但快乐。`,
    `{npc}教你读书识字，你学得有模有样。`,
    `你在{location}认识了几个玩伴，度过了无忧无虑的童年。`,
    `家里虽然不富裕，但{npc}总是把最好的留给你。`,
  ], { effects: { charisma: 2, luck: 1 } }));

  T.push(tmpl(makeId(prefix, 'childhood'), 'childhood', 3, 10, randProb('common', 1, 2), [
    `你在{location}帮{npc}干活，学会了很多生活技能。`,
    `你的身体比同龄人强壮，{npc}说你是干农活的好料子。`,
    `你喜欢在{location}发呆，常常一坐就是一整天。`,
    `{npc}给你讲了一个关于{legend}的故事，你听得入了迷。`,
  ], { effects: { strength: 2, intelligence: 1 } }));

  // --- Growth (13-25) 5 templates ---
  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 15, 20, randProb('legendary'), [
    `你在{location}苦悟三日，出关时眼中精光四射——你竟在战斗中顿悟了{legend}的绝世武功！`,
    `一场雷雨夜，你在{location}被天雷击中非但没死，反而打通了任督二脉！`,
    `{legend}的残魂在{location}与你相遇，将毕生武学心得传授于你。`,
  ], { effects: { intelligence: 10, special: 8, strength: 5 } }));

  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 14, 22, randProb('epic'), [
    `你在{location}苦练三年，终于突破了困扰多年的招式瓶颈，实力大增！`,
    `{npc}带你外出历练，你在{location}击败了一个强敌，获得了珍贵的武学秘籍。`,
    `你发现了{legend}留下的试剑场，通过考验后获得了意想不到的收获。`,
  ], { effects: { strength: 6, special: 5 } }));

  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 13, 24, randProb('rare'), [
    `你在{location}遇到了一生的宿敌，你们不打不相识，反而成为了朋友。`,
    `{npc}传授你一项绝技，你花了整整一年才学会，但威力惊人。`,
    `你在{location}救了一个被追杀的人，他为了报答你，送了一件宝物。`,
    `你和同辈在{location}比武，虽然输了但收获巨大。`,
  ], { effects: rand([{ strength: 4, luck: 2 }, { intelligence: 5 }, { charisma: 4 }]) }));

  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 13, 20, randProb('common', 0, 2), [
    `你每天在{location}勤奋练功，虽然进步缓慢但根基扎实。`,
    `{npc}督促你修炼，你不敢懈怠。`,
    `你在{location}读了很多武学典籍，眼界开阔了不少。`,
    `平平淡淡的一年，你在{location}默默积累着。`,
  ], { effects: { intelligence: 2, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'growth'), 'growth', 16, 25, randProb('common', 1, 2), [
    `你在{location}结交了一些朋友，互相切磋进步。`,
    `{npc}给你讲了很多前辈的故事，你深受启发。`,
    `你在{location}处理了一些杂务，锻炼了自己的能力。`,
    `这一年没什么特别的事发生，但你感觉自己在慢慢变强。`,
  ], { effects: { charisma: 2, luck: 2 } }));

  // --- Adult (26-50) 3 templates ---
  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 28, 40, randProb('epic'), [
    `你在{location}开宗立派，广收门徒，一时间名声大噪。`,
    `你参与了{legend}相关的大规模事件，在关键时刻力挽狂澜。`,
    `你在{location}建立了属于自己的势力，各方强者纷纷来投。`,
  ], { effects: { charisma: 8, strength: 5, special: 5 } }));

  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 26, 45, randProb('rare'), [
    `你在{location}收下了第一个弟子，将自己的所学倾囊相授。`,
    `你和宿敌在{location}进行了最终决战，胜负难分。`,
    `你成功铸造了传说中的兵器，引起了不小的轰动。`,
  ], { effects: rand([{ intelligence: 5, special: 4 }, { charisma: 6, luck: 3 }]) }));

  T.push(tmpl(makeId(prefix, 'adult'), 'adult', 26, 50, randProb('common'), [
    `你在{location}处理日常事务，势力稳步发展。`,
    `{npc}来找你帮忙，你出手解决了他的难题。`,
    `你在{location}度过了平静的一年，武功稳步提升。`,
    `平平淡淡的一年，你在{location}默默修炼。`,
  ], { effects: { strength: 2, intelligence: 2, special: 2 } }));

  // --- Elder (50+) 武侠专用 ---
  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 50, 100, randProb('common'), [
    `你在{location}闭关苦修，试图触摸更高境界的门槛。`,
    `你游历天下，在{location}见识了各种奇人异事，武道心境更加坚定。`,
    `你开始招收弟子，在{location}传授毕生所学。`,
  ], { effects: { intelligence: 3, special: 2 } }));

  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 80, 150, randProb('rare'), [
    `你的武功已臻化境，成为了{location}的传说级人物。`,
    `你开始着手准备最终的突破，{npc}专程前来为你护法。`,
    `你将毕生所学整理成册，存放在{location}，等待有缘人。`,
  ], { effects: { intelligence: 8, charisma: 5 } }));

  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 120, 220, randProb('rare'), [
    `你感应到了武道极限的气息，在{location}寻找突破的契机。`,
    `你回顾一生武学，在{location}悟出了新的招式。`,
    `{npc}带来消息：传说中的{legend}可能重现江湖。`,
  ], { effects: { special: 10, intelligence: 5 } }));

  T.push(tmpl(makeId(prefix, 'elder'), 'elder', 200, 350, randProb('epic'), [
    `你已是武林宗师，在{location}静待武道终极的到来。`,
    `你将毕生武学感悟刻入石碑，留给后世有缘人。`,
    `{npc}问你为何不急于追求破碎虚空，你笑答："我在等一个值得托付衣钵的人。"`,
  ], { effects: { charisma: 10, special: 5 } }));

  // --- Combat (15-60) 6 templates ---
  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 20, 40, randProb('legendary'), [
    `你在{location}以一己之力对抗十位同阶高手，最终大获全胜，一战成名！`,
    `{legend}的敌人找上了你，你在{location}展开惊天大战，竟越级将其斩杀！`,
    `你为了保护{location}的百姓，独自对抗入侵的恶徒军团，创造了不可能的奇迹。`,
  ], { effects: { strength: 12, charisma: 8, health: -10 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 18, 45, randProb('epic'), [
    `你参与了一场改变{location}格局的大规模门派战争，立下赫赫战功。`,
    `{npc}挑战你的权威，你们在{location}大战三百回合，最终你险胜一招。`,
    `你在{location}发现了{legend}留下的试剑场，通过了生死考验。`,
  ], { effects: { strength: 8, charisma: 4, health: -5 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 15, 35, randProb('rare', 0, 2), [
    `你在{location}遭遇强敌，展开了一场生死搏斗，最终险胜。`,
    `你和{npc}在{location}切磋，双方都获益匪浅。`,
    `你为了保护同伴，在{location}与敌人激战，受了轻伤。`,
  ], { effects: { strength: 5, health: -3 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 25, 50, randProb('rare', 1, 2), [
    `你在{location}参与了一场小规模冲突，表现出色。`,
    `{npc}偷袭你，你在{location}勉强将其击退。`,
    `你在{location}发现了敌人的据点，果断出击。`,
  ], { effects: { strength: 4, luck: 2 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 15, 40, randProb('common', 0, 2), [
    `你在{location}进行了日常训练，技艺略有精进。`,
    `你和同伴在{location}对练，互相学习。`,
    `你在{location}演练新学的招式，逐渐熟练。`,
  ], { effects: { strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'combat'), 'combat', 30, 60, randProb('common', 1, 2), [
    `你在{location}指导后辈战斗技巧，自己也有所感悟。`,
    `一场友好的比试在{location}举行，你获得了不错的名次。`,
    `你在{location}观摩高手对决，学到了不少实战经验。`,
  ], { effects: { strength: 2, intelligence: 1 } }));

  // --- Romance (16-50) 6 templates ---
  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 18, 30, randProb('legendary'), [
    `你在{location}与{npc}相遇的瞬间，天地变色，{legend}的预言应验——你们是三生石上的命定之人。`,
    `{npc}为了救你，不惜耗尽毕生内力。你跪在{location}发誓：此生不负。`,
    `你们的故事被{legend}记载，成为了{location}永恒的传说。`,
  ], { effects: { charisma: 10, luck: 8, health: 5 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 20, 35, randProb('epic'), [
    `你在{location}邂逅了一位神秘的{npc}，TA的身份让你震惊不已。`,
    `{npc}对你一见倾心，经常在{location}找你，你们的感情迅速升温。`,
    `你们经历了{legend}的考验，感情反而更加坚不可摧。`,
  ], { effects: { charisma: 6, luck: 4 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 16, 30, randProb('rare', 0, 2), [
    `你救了一位落难的{npc}，TA决定以身相许，你们在{location}私定终身。`,
    `你和{npc}在{location}月下相会，互诉衷肠。`,
    `{npc}因为你的才华而倾心，主动向你示好。`,
  ], { effects: { charisma: 4, luck: 3 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 25, 40, randProb('rare', 1, 2), [
    `你和{npc}在{location}相识，虽然起初有些误会，但后来成为了恋人。`,
    `{npc}送你一件定情信物，你珍藏在身边。`,
    `你们一起在{location}经历了危险，感情更加深厚。`,
  ], { effects: { charisma: 3, luck: 2 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 20, 45, randProb('common', 0, 2), [
    `你在{location}认识了一个有趣的人，但关系尚不明确。`,
    `{npc}对你有些好感，但你还没想好如何回应。`,
    `你在{location}参加了一场聚会，结识了不少异性。`,
  ], { effects: { charisma: 2 } }));

  T.push(tmpl(makeId(prefix, 'romance'), 'romance', 30, 50, randProb('common', 1, 2), [
    `你和{npc}保持着朋友以上、恋人未满的关系。`,
    `你在{location}看到了别人恩爱的场景，心中有些羡慕。`,
    `这一年感情上没有太大的波澜，你专注于其他事情。`,
  ], { effects: { luck: 1 } }));

  // --- Practice/Cultivation (13-80) 6 templates ---
  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 40, 70, randProb('legendary'), [
    `你在{location}闭关九九八十一天，出关时内力澎湃，你已触摸到了{legend}的境界！`,
    `你的内力达到了前所未有的高度，{location}的落叶因你而纷飞。`,
    `{legend}的虚影亲自降临{location}，为你指点武学大道。`,
  ], { effects: { special: 12, intelligence: 10, strength: 5 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 30, 60, randProb('epic'), [
    `你成功将{legend}的武功融会贯通，实力暴涨！`,
    `你在{location}经历了一场奇遇，内力大涨，连{npc}都震惊不已。`,
    `你突破了困扰多年的招式瓶颈，{location}的武者们纷纷前来观摩。`,
  ], { effects: { special: 8, intelligence: 5 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 20, 50, randProb('rare', 0, 2), [
    `你在{location}闭关修炼，领悟了新的招式。`,
    `{npc}传授你一项绝技，你勤加练习，终于大成。`,
    `你在{location}发现了一处内力充沛的宝地，修炼事半功倍。`,
  ], { effects: { special: 5, intelligence: 3 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 35, 65, randProb('rare', 1, 2), [
    `你在修炼中遇到了瓶颈，{npc}指点你突破。`,
    `你在{location}经历了一场奇遇，内力有所精进。`,
    `你成功铸造了辅助修炼的兵器，效果显著。`,
  ], { effects: { special: 4, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 13, 40, randProb('common', 0, 2), [
    `你在{location}按部就班地修炼，虽然没有突破但根基更加稳固。`,
    `{npc}检查了你的修炼进度，表示满意。`,
    `你在{location}研读武功秘籍，对一些招式有了新的理解。`,
  ], { effects: { special: 2, intelligence: 1 } }));

  T.push(tmpl(makeId(prefix, 'cultivation'), 'cultivation', 40, 80, randProb('common', 1, 2), [
    `你在{location}巩固已有的内力修为，为下一次突破做准备。`,
    `这一年修炼进度平平，但你没有气馁。`,
    `{npc}提醒你不可急于求成，你虚心接受。`,
  ], { effects: { special: 2 } }));

  // --- Exploration (13-80) 6 templates ---
  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 25, 50, randProb('legendary'), [
    `你深入{location}最深处，发现了{legend}留下的核心传承，获得了改变命运的机缘！`,
    `你在{location}找到了通往神秘洞天的入口，{legend}的秘密向你敞开。`,
    `你解开了一个困扰世人百年的谜题，{location}的真相让你震惊。`,
  ], { effects: { luck: 10, intelligence: 8, special: 6 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 20, 45, randProb('epic'), [
    `你在{location}找到了{legend}留下的遗迹，虽然危险重重但你决定一探究竟。`,
    `你探索了一处危险的{location}，九死一生后带回了珍贵的宝物。`,
    `{npc}告诉你{location}有宝物，你前去寻找，果然不虚此行。`,
  ], { effects: { luck: 6, strength: 4 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 15, 40, randProb('rare', 0, 2), [
    `你深入{location}探险，发现了未知的秘密。`,
    `你在{location}找到了一些有价值的物品，收获颇丰。`,
    `你在{location}迷路了，却意外发现了一处隐蔽的武学圣地。`,
  ], { effects: { luck: 4, strength: 2 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 30, 55, randProb('rare', 1, 2), [
    `你在{location}发现了一些古老的壁画，记录着失传的武功。`,
    `你探索了一处废弃的{location}，找到了一些有用的物资。`,
    `{npc}带你进入了一个秘密的{location}，你大开眼界。`,
  ], { effects: { intelligence: 3, luck: 3 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 13, 35, randProb('common', 0, 2), [
    `你在{location}附近逛了逛，虽然没有大发现但开阔了眼界。`,
    `你跟着{npc}去{location}采集了一些草药。`,
    `你在{location}发现了一些普通的矿石，聊胜于无。`,
  ], { effects: { luck: 2 } }));

  T.push(tmpl(makeId(prefix, 'exploration'), 'exploration', 35, 70, randProb('common', 1, 2), [
    `你在{location}进行了常规的巡查，一切正常。`,
    `你重访了以前去过的{location}，有了一些新的发现。`,
    `你在{location}休息了一段时间，养精蓄锐。`,
  ], { effects: { health: 2 } }));

  // --- World Story (20-100) 5 templates ---
  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 40, 70, randProb('legendary'), [
    `{legend}的封印彻底破碎，整个江湖陷入了前所未有的动荡，你被卷入了漩涡中心！`,
    `一场席卷整个江湖的大战爆发了，{location}首当其冲，你必须做出选择。`,
    `江湖的规则开始改变，{legend}的意志降临，所有人都受到了影响。`,
  ], { effects: { strength: 8, intelligence: 8, charisma: 5, luck: 5 } }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 30, 60, randProb('epic'), [
    `你发现{location}隐藏着改变江湖的秘密，各方势力为此展开了明争暗斗。`,
    `{npc}告诉你一个关于江湖起源的惊天秘密，你的世界观被彻底颠覆。`,
    `传说中的{legend}即将降临，所有人都在做准备，{location}的气氛紧张到了极点。`,
  ], { effects: { intelligence: 6, charisma: 4 } }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 25, 50, randProb('rare'), [
    `{location}附近发生了局部冲突，你不得不卷入其中。`,
    `{npc}带来了一个重要的消息，可能影响到{location}的未来。`,
    `你注意到了{location}的一些异常现象，似乎有什么大事要发生。`,
  ], { effects: { charisma: 3, luck: 3 } }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 20, 45, randProb('common', 0, 2), [
    `你听到了一些关于{legend}的传闻，但真假难辨。`,
    `{location}发生了一些小变化，但你没有太在意。`,
    `{npc}跟你聊了聊最近的江湖时事，你表示关注。`,
  ], { effects: { intelligence: 2 } }));

  T.push(tmpl(makeId(prefix, 'world_story'), 'world_story', 40, 80, randProb('common', 1, 2), [
    `江湖依旧平静，{location}的生活一如既往。`,
    `你听说了一些关于{legend}的新消息，但似乎没什么实质内容。`,
    `这一年没什么大事发生，你在{location}安稳度日。`,
  ], { effects: { luck: 1 } }));

  // --- Hidden (20-150) 4 templates ---
  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 60, 120, randProb('legendary'), [
    `你超越了{legend}，看到了江湖之外的真相——原来一切都只是...`,
    `你发现了这个江湖的运行规则，{location}只是一场巨大棋局的一角。`,
    `{legend}的真正身份让你震惊不已，你终于理解了江湖的本质。`,
  ], { conditions: [{ stat: 'intelligence', min: 120 }], effects: { intelligence: 15, special: 10 } }));

  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 50, 100, randProb('epic'), [
    `你在{location}发现了一个被禁止入内的区域，里面藏着惊人的秘密。`,
    `你解开了{legend}留下的谜题，获得了一份隐藏的武学传承。`,
    `{npc}告诉你一个只有极少数人知道的秘密，你感到责任重大。`,
  ], { conditions: [{ stat: 'intelligence', min: 100 }], effects: { intelligence: 10, special: 8 } }));

  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 35, 80, randProb('rare'), [
    `你在{location}找到了一条隐秘的通道，通向未知的地方。`,
    `你发现了一些关于{legend}的隐藏记录，内容令人费解。`,
    `{npc}偷偷塞给你一张地图，上面标记着{location}的秘密地点。`,
  ], { conditions: [{ stat: 'luck', min: 80 }], effects: { luck: 6, intelligence: 4 } }));

  T.push(tmpl(makeId(prefix, 'hidden'), 'hidden', 20, 60, randProb('common'), [
    `你在{location}听到了一些奇怪的低语，但找不到来源。`,
    `你做了一个关于{legend}的怪梦，醒来后记忆模糊。`,
    `{npc}欲言又止，似乎想告诉你什么秘密但最终没说出口。`,
  ], { conditions: [{ stat: 'intelligence', min: 60 }], effects: { intelligence: 3 } }));

  // --- Death (0-300) 5 templates ---
  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 100, 0.35, [
    `你在{location}遭遇不测，生命力迅速流逝。`,
    `你的身体到达了极限，{npc}无能为力。`,
    `{legend}的诅咒降临在你身上，你无法抵抗。`,
  ], { effects: { health: -60 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 150, 0.45, [
    `你在{location}进行了最后的战斗，英勇牺牲。`,
    `寿元耗尽，你在{location}静静地闭上了眼睛。`,
    `你走火入魔，在{location}经脉尽断而亡。`,
  ], { effects: { health: -80 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 200, 0.55, [
    `你在{location}被强敌击杀，死不瞑目。`,
    `你的伤势恶化，{npc}尽力抢救但回天乏术。`,
    `{legend}的武功反噬，你在{location}力竭而亡。`,
  ], { effects: { health: -100 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 250, 0.65, [
    `你在{location}寿终正寝，周围的人都来为你送行。`,
    `你安详地在{location}离世，一生无憾。`,
    `{npc}守在你的床前，目送你离开这个世界。`,
  ], { effects: { health: -100 } }));

  T.push(tmpl(makeId(prefix, 'death'), 'death', 0, 300, 0.75, [
    `你在{location}结束了这一生，灵魂化作流光消散。`,
    `你的故事成为了{location}的传说，后人会记得你的名字。`,
    `{legend}亲自前来接引你的灵魂，你感到一阵温暖。`,
  ], { effects: { health: -100 } }));

  return T;
}

// ============================================================
// 导出（如需模块导入使用）
// 在 generate-events.cjs 中直接复制粘贴函数定义即可
// ============================================================
module.exports = {
  generateWuxiaIdentityEvents,
  generateWuxiaTrashEvents,
  generateWuxiaMajorChoices,
  generateWuxiaRealmEvents,
  generateWuxiaCommonEvents,
};
