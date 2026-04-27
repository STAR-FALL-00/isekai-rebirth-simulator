import type { EndingData } from './events/types';

// ═══════════════════════════════════════════════════════════════
// ENDINGS — 150+ across 5 worlds
// Each world: 8-10 Normal, 5-6 Good, 5-6 Bad, 3-4 Harem, 4-5 Secret, 2-3 Hidden
// ═══════════════════════════════════════════════════════════════

export const endings: EndingData[] = [
  // ═══════════════════════════════════════════════════════════════
  // 修仙界 endings (30)
  // ═══════════════════════════════════════════════════════════════
  // Normal
  { id: 'cx_end_01', worldId: 'cultivation', category: 'normal', title: '散修一生', description: '你没有加入任何宗门，独自一人修炼了一生，虽然平淡但也逍遥自在。', rarityScore: 100, conditions: [{ type: 'stat', key: 'strength', operator: '<', value: 100, weight: 1 }] },
  { id: 'cx_end_02', worldId: 'cultivation', category: 'normal', title: '宗门长老', description: '你在宗门中兢兢业业，最终成为了长老，过着安稳的晚年生活。', rarityScore: 200, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 80, weight: 1 }] },
  { id: 'cx_end_03', worldId: 'cultivation', category: 'normal', title: '炼丹师', description: '你专注于炼丹之道，成为了远近闻名的炼丹大师。', rarityScore: 150, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 100, weight: 1 }] },
  { id: 'cx_end_04', worldId: 'cultivation', category: 'normal', title: '小有所成', description: '你修炼有成，在修真界闯出了一些名气。', rarityScore: 120, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 60, weight: 1 }] },
  { id: 'cx_end_05', worldId: 'cultivation', category: 'normal', title: '归隐山林', description: '你厌倦了修真界的纷争，选择归隐山林，与自然为伴。', rarityScore: 180, conditions: [{ type: 'stat', key: 'luck', operator: '>', value: 80, weight: 1 }] },
  { id: 'cx_end_06', worldId: 'cultivation', category: 'normal', title: '为人师表', description: '你收了很多弟子，将自己的一生所学传授给了他们。', rarityScore: 160, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 100, weight: 1 }] },
  { id: 'cx_end_07', worldId: 'cultivation', category: 'normal', title: '商会巨贾', description: '你放弃了修炼，转而经商，积累了巨大的财富。', rarityScore: 140, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 80, weight: 1 }] },
  { id: 'cx_end_08', worldId: 'cultivation', category: 'normal', title: '凡人之福', description: '你修炼无成，但平平安安地活到了百岁。', rarityScore: 80, conditions: [{ type: 'stat', key: 'strength', operator: '<', value: 50, weight: 1 }] },
  // Good
  { id: 'cx_end_09', worldId: 'cultivation', category: 'good', title: '一代宗师', description: '你成为了修仙界的一代宗师，万人敬仰。', rarityScore: 2000, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 150, weight: 1 }] },
  { id: 'cx_end_10', worldId: 'cultivation', category: 'good', title: '羽化登仙', description: '你成功飞升仙界，成为了仙人。', rarityScore: 3000, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 150, weight: 1 }] },
  { id: 'cx_end_11', worldId: 'cultivation', category: 'good', title: '逍遥散仙', description: '你不受束缚，成为了自由自在的散仙。', rarityScore: 2500, conditions: [{ type: 'stat', key: 'luck', operator: '>', value: 150, weight: 1 }] },
  { id: 'cx_end_12', worldId: 'cultivation', category: 'good', title: '万妖之王', description: '你统御万妖，成为了妖族之王。', rarityScore: 2800, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 180, weight: 1 }] },
  { id: 'cx_end_13', worldId: 'cultivation', category: 'good', title: '丹圣', description: '你的炼丹术达到了登峰造极的境界。', rarityScore: 2200, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 180, weight: 1 }] },
  { id: 'cx_end_14', worldId: 'cultivation', category: 'good', title: '天道守护者', description: '你被天道选中，成为了世界的守护者。', rarityScore: 3500, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 180, weight: 1 }] },
  // Bad
  { id: 'cx_end_15', worldId: 'cultivation', category: 'bad', title: '走火入魔', description: '你走火入魔，变成了一个只知道杀戮的怪物。', rarityScore: 300, conditions: [{ type: 'stat', key: 'health', operator: '<', value: 10, weight: 1 }] },
  { id: 'cx_end_16', worldId: 'cultivation', category: 'bad', title: '道消身死', description: '你在渡劫中失败，魂飞魄散。', rarityScore: 250, conditions: [{ type: 'stat', key: 'health', operator: '<', value: 20, weight: 1 }] },
  { id: 'cx_end_17', worldId: 'cultivation', category: 'bad', title: '众叛亲离', description: '你被所有人背叛，孤独地死去。', rarityScore: 200, conditions: [{ type: 'stat', key: 'charisma', operator: '<', value: 20, weight: 1 }] },
  { id: 'cx_end_18', worldId: 'cultivation', category: 'bad', title: '堕入魔道', description: '你为了追求力量，彻底堕入了魔道。', rarityScore: 350, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 100, weight: 1 }] },
  { id: 'cx_end_19', worldId: 'cultivation', category: 'bad', title: '身死道消', description: '你在一场大战中陨落，你的传说也随之消逝。', rarityScore: 280, conditions: [{ type: 'stat', key: 'health', operator: '<', value: 5, weight: 1 }] },
  { id: 'cx_end_20', worldId: 'cultivation', category: 'bad', title: '废人一生', description: '你丹田被毁，成为了一个普通人，郁郁而终。', rarityScore: 150, conditions: [{ type: 'stat', key: 'special', operator: '<', value: 10, weight: 1 }] },
  // Harem
  { id: 'cx_end_21', worldId: 'cultivation', category: 'harem', title: '仙侣奇缘', description: '你和三位仙女结为道侣，过上了神仙般的日子。', rarityScore: 3000, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 120, weight: 1 }] },
  { id: 'cx_end_22', worldId: 'cultivation', category: 'harem', title: '群芳环绕', description: '你成为了修仙界最受欢迎的男子，无数女修为你倾心。', rarityScore: 2800, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 150, weight: 1 }] },
  { id: 'cx_end_23', worldId: 'cultivation', category: 'harem', title: '妖女成群', description: '你被一群妖女包围，每天过着醉生梦死的生活。', rarityScore: 2500, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 100, weight: 1 }] },
  { id: 'cx_end_24', worldId: 'cultivation', category: 'harem', title: '双修大帝', description: '你通过双修之法成为了大帝，身边美人如云。', rarityScore: 3500, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 180, weight: 1 }] },
  // Secret
  { id: 'cx_end_25', worldId: 'cultivation', category: 'secret', title: '天道之子', description: '你是天道选中的孩子，注定要改变整个世界。', rarityScore: 5000, conditions: [{ type: 'stat', key: 'luck', operator: '>', value: 180, weight: 1 }] },
  { id: 'cx_end_26', worldId: 'cultivation', category: 'secret', title: '穿越时空', description: '你发现了穿越时空的方法，回到了过去。', rarityScore: 4500, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 180, weight: 1 }] },
  { id: 'cx_end_27', worldId: 'cultivation', category: 'secret', title: '超越天道', description: '你超越了天道的限制，成为了新的创世神。', rarityScore: 5000, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 190, weight: 1 }] },
  { id: 'cx_end_28', worldId: 'cultivation', category: 'secret', title: '重生之路', description: '你在死亡后重生，带着前世的记忆重新开始。', rarityScore: 4000, conditions: [{ type: 'stat', key: 'luck', operator: '>', value: 150, weight: 1 }] },
  { id: 'cx_end_29', worldId: 'cultivation', category: 'secret', title: '仙魔合一', description: '你同时掌握了仙道和魔道，达到了前所未有的境界。', rarityScore: 4800, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 180, weight: 1 }] },
  // Hidden
  { id: 'cx_end_30', worldId: 'cultivation', category: 'hidden', title: '世界真相', description: '你发现了修仙界的真相——整个世界只是一个游戏。', rarityScore: 10000, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 190, weight: 1 }] },
  { id: 'cx_end_31', worldId: 'cultivation', category: 'hidden', title: '超脱轮回', description: '你超越了生死轮回，成为了永恒的存在。', rarityScore: 8000, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 195, weight: 1 }] },
  { id: 'cx_end_32', worldId: 'cultivation', category: 'hidden', title: '创造世界', description: '你成为了创世神，创造了属于自己的世界。', rarityScore: 10000, conditions: [{ type: 'stat', key: 'special', operator: '=', value: 200, weight: 1 }] },

  // ═══════════════════════════════════════════════════════════════
  // 魔法大陆 endings (30)
  // ═══════════════════════════════════════════════════════════════
  // Normal
  { id: 'mg_end_01', worldId: 'magic', category: 'normal', title: '普通法师', description: '你成为了一名普通的法师，过着平淡的生活。', rarityScore: 100, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 60, weight: 1 }] },
  { id: 'mg_end_02', worldId: 'magic', category: 'normal', title: '学院教师', description: '你留在了魔法学院，成为了一名受人尊敬的老师。', rarityScore: 180, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 80, weight: 1 }] },
  { id: 'mg_end_03', worldId: 'magic', category: 'normal', title: '冒险者', description: '你成为了一名流浪冒险者，在世界各地游历。', rarityScore: 150, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 80, weight: 1 }] },
  { id: 'mg_end_04', worldId: 'magic', category: 'normal', title: '商会法师', description: '你用魔法为商会服务，赚了不少钱。', rarityScore: 130, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 70, weight: 1 }] },
  { id: 'mg_end_05', worldId: 'magic', category: 'normal', title: '宫廷法师', description: '你成为了王室的宫廷法师。', rarityScore: 200, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 100, weight: 1 }] },
  { id: 'mg_end_06', worldId: 'magic', category: 'normal', title: '隐居者', description: '你厌倦了纷争，隐居在魔法森林中。', rarityScore: 160, conditions: [{ type: 'stat', key: 'luck', operator: '>', value: 80, weight: 1 }] },
  { id: 'mg_end_07', worldId: 'magic', category: 'normal', title: '研究者', description: '你专注于魔法研究，留下了不少论文。', rarityScore: 170, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 100, weight: 1 }] },
  { id: 'mg_end_08', worldId: 'magic', category: 'normal', title: '平凡一生', description: '你没有成为伟大的法师，但也过得安稳。', rarityScore: 80, conditions: [{ type: 'stat', key: 'intelligence', operator: '<', value: 50, weight: 1 }] },
  // Good
  { id: 'mg_end_09', worldId: 'magic', category: 'good', title: '大贤者', description: '你成为了魔法大陆最智慧的存在，被尊为大贤者。', rarityScore: 2500, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 180, weight: 1 }] },
  { id: 'mg_end_10', worldId: 'magic', category: 'good', title: '元素之主', description: '你掌握了所有元素的力量，成为了元素之主。', rarityScore: 3000, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 180, weight: 1 }] },
  { id: 'mg_end_11', worldId: 'magic', category: 'good', title: '圣光之盾', description: '你成为了守护世界的圣光骑士。', rarityScore: 2200, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 180, weight: 1 }] },
  { id: 'mg_end_12', worldId: 'magic', category: 'good', title: '自然化身', description: '你和自然融为一体，成为了自然的守护者。', rarityScore: 2400, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 150, weight: 1 }] },
  { id: 'mg_end_13', worldId: 'magic', category: 'good', title: '暗影领主', description: '你掌控了暗影之力，但不是用来作恶，而是保护世界。', rarityScore: 2600, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 150, weight: 1 }] },
  { id: 'mg_end_14', worldId: 'magic', category: 'good', title: '全知全能', description: '你掌握了所有魔法的奥秘，成为了全知全能的存在。', rarityScore: 3500, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 190, weight: 1 }] },
  // Bad
  { id: 'mg_end_15', worldId: 'magic', category: 'bad', title: '魔法反噬', description: '你被自己的魔法反噬，变成了一个怪物。', rarityScore: 300, conditions: [{ type: 'stat', key: 'health', operator: '<', value: 10, weight: 1 }] },
  { id: 'mg_end_16', worldId: 'magic', category: 'bad', title: '堕入黑暗', description: '你为了追求力量堕入了黑暗。', rarityScore: 350, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 100, weight: 1 }] },
  { id: 'mg_end_17', worldId: 'magic', category: 'bad', title: '众叛亲离', description: '你被所有人抛弃，孤独地死去。', rarityScore: 200, conditions: [{ type: 'stat', key: 'charisma', operator: '<', value: 20, weight: 1 }] },
  { id: 'mg_end_18', worldId: 'magic', category: 'bad', title: '恶魔傀儡', description: '你被暗影领主控制，成为了他的傀儡。', rarityScore: 400, conditions: [{ type: 'stat', key: 'health', operator: '<', value: 30, weight: 1 }] },
  { id: 'mg_end_19', worldId: 'magic', category: 'bad', title: '魔法失控', description: '你的魔法彻底失控，毁灭了一座城。', rarityScore: 280, conditions: [{ type: 'stat', key: 'special', operator: '<', value: 30, weight: 1 }] },
  { id: 'mg_end_20', worldId: 'magic', category: 'bad', title: '平凡之死', description: '你平庸地度过了一生，无人问津。', rarityScore: 100, conditions: [{ type: 'stat', key: 'intelligence', operator: '<', value: 30, weight: 1 }] },
  // Harem
  { id: 'mg_end_21', worldId: 'magic', category: 'harem', title: '精灵之恋', description: '你和精灵公主、妖精女王同时结为伴侣。', rarityScore: 3000, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 150, weight: 1 }] },
  { id: 'mg_end_22', worldId: 'magic', category: 'harem', title: '龙族新郎', description: '你娶了龙族公主，成为了龙族的一员。', rarityScore: 2800, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 120, weight: 1 }] },
  { id: 'mg_end_23', worldId: 'magic', category: 'harem', title: '后宫之王', description: '你建立了庞大的后宫，各族美女环绕。', rarityScore: 3500, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 180, weight: 1 }] },
  // Secret
  { id: 'mg_end_24', worldId: 'magic', category: 'secret', title: '创世者', description: '你发现了创世的秘密，成为了新世界的创造者。', rarityScore: 5000, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 190, weight: 1 }] },
  { id: 'mg_end_25', worldId: 'magic', category: 'secret', title: '次元旅者', description: '你打开了通往其他世界的大门。', rarityScore: 4500, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 180, weight: 1 }] },
  { id: 'mg_end_26', worldId: 'magic', category: 'secret', title: '永恒之主', description: '你获得了永恒的生命，见证了世界的变迁。', rarityScore: 4800, conditions: [{ type: 'stat', key: 'luck', operator: '>', value: 180, weight: 1 }] },
  { id: 'mg_end_27', worldId: 'magic', category: 'secret', title: '真理之眼', description: '你看到了魔法的本质，成为了真理的化身。', rarityScore: 5000, conditions: [{ type: 'stat', key: 'intelligence', operator: '=', value: 200, weight: 1 }] },
  { id: 'mg_end_28', worldId: 'magic', category: 'secret', title: '万族之王', description: '你统一了所有种族，建立了前所未有的帝国。', rarityScore: 4600, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 190, weight: 1 }] },
  // Hidden
  { id: 'mg_end_29', worldId: 'magic', category: 'hidden', title: '游戏玩家', description: '你发现魔法大陆只是一场游戏，你可以选择退出。', rarityScore: 10000, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 195, weight: 1 }] },
  { id: 'mg_end_30', worldId: 'magic', category: 'hidden', title: '维度之主', description: '你超越了维度的限制，可以自由穿梭于各个世界。', rarityScore: 8000, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 195, weight: 1 }] },

  // ═══════════════════════════════════════════════════════════════
  // 科幻星际 endings (30)
  // ═══════════════════════════════════════════════════════════════
  // Normal
  { id: 'sf_end_01', worldId: 'scifi', category: 'normal', title: '普通公民', description: '你在星际联邦中过着普通但安稳的生活。', rarityScore: 100, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 60, weight: 1 }] },
  { id: 'sf_end_02', worldId: 'scifi', category: 'normal', title: '星际商人', description: '你成为了一名星际商人，在各星球间做生意。', rarityScore: 180, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 80, weight: 1 }] },
  { id: 'sf_end_03', worldId: 'scifi', category: 'normal', title: '殖民地居民', description: '你在一颗和平的殖民星球上安家。', rarityScore: 150, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 60, weight: 1 }] },
  { id: 'sf_end_04', worldId: 'scifi', category: 'normal', title: '科学家', description: '你在科研机构工作，为人类的进步做贡献。', rarityScore: 200, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 100, weight: 1 }] },
  { id: 'sf_end_05', worldId: 'scifi', category: 'normal', title: '机械师', description: '你成为了一名出色的机械师。', rarityScore: 160, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 80, weight: 1 }] },
  { id: 'sf_end_06', worldId: 'scifi', category: 'normal', title: '星际军人', description: '你在军队中服役，保卫人类文明。', rarityScore: 170, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 100, weight: 1 }] },
  { id: 'sf_end_07', worldId: 'scifi', category: 'normal', title: '空间站居民', description: '你在空间站上度过了一生。', rarityScore: 140, conditions: [{ type: 'stat', key: 'luck', operator: '>', value: 80, weight: 1 }] },
  { id: 'sf_end_08', worldId: 'scifi', category: 'normal', title: '平凡一生', description: '你没有特别出彩，但也安稳度过了一生。', rarityScore: 80, conditions: [{ type: 'stat', key: 'intelligence', operator: '<', value: 50, weight: 1 }] },
  // Good
  { id: 'sf_end_09', worldId: 'scifi', category: 'good', title: '星际传奇', description: '你成为了星际联邦的传奇人物。', rarityScore: 2500, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 180, weight: 1 }] },
  { id: 'sf_end_10', worldId: 'scifi', category: 'good', title: '机械飞升', description: '你将意识上传到了机械身体中，获得了永生。', rarityScore: 3000, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 180, weight: 1 }] },
  { id: 'sf_end_11', worldId: 'scifi', category: 'good', title: '维度行者', description: '你掌握了跨维度旅行的技术。', rarityScore: 2800, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 180, weight: 1 }] },
  { id: 'sf_end_12', worldId: 'scifi', category: 'good', title: '舰队统帅', description: '你成为了星际舰队的最高统帅。', rarityScore: 2400, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 180, weight: 1 }] },
  { id: 'sf_end_13', worldId: 'scifi', category: 'good', title: 'AI之父', description: '你创造了具有情感的AI，改变了人类历史。', rarityScore: 2600, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 190, weight: 1 }] },
  { id: 'sf_end_14', worldId: 'scifi', category: 'good', title: '和平使者', description: '你促成了人类和外星文明的和平。', rarityScore: 2200, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 150, weight: 1 }] },
  // Bad
  { id: 'sf_end_15', worldId: 'scifi', category: 'bad', title: '太空遇难', description: '你的飞船出了事故，你在太空中漂流至死。', rarityScore: 300, conditions: [{ type: 'stat', key: 'luck', operator: '<', value: 20, weight: 1 }] },
  { id: 'sf_end_16', worldId: 'scifi', category: 'bad', title: 'AI叛乱', description: '你创造的AI背叛了你，毁灭了一切。', rarityScore: 400, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 100, weight: 1 }] },
  { id: 'sf_end_17', worldId: 'scifi', category: 'bad', title: '虫族寄生', description: '你被虫族寄生，成为了它们的傀儡。', rarityScore: 350, conditions: [{ type: 'stat', key: 'health', operator: '<', value: 30, weight: 1 }] },
  { id: 'sf_end_18', worldId: 'scifi', category: 'bad', title: '流放到异星', description: '你被流放到一颗荒凉的星球，孤独终老。', rarityScore: 250, conditions: [{ type: 'stat', key: 'charisma', operator: '<', value: 20, weight: 1 }] },
  { id: 'sf_end_19', worldId: 'scifi', category: 'bad', title: '时间悖论', description: '你的时间旅行引发了悖论，你消失了。', rarityScore: 380, conditions: [{ type: 'stat', key: 'special', operator: '<', value: 30, weight: 1 }] },
  { id: 'sf_end_20', worldId: 'scifi', category: 'bad', title: '平庸之死', description: '你碌碌无为地度过了一生。', rarityScore: 100, conditions: [{ type: 'stat', key: 'intelligence', operator: '<', value: 30, weight: 1 }] },
  // Harem
  { id: 'sf_end_21', worldId: 'scifi', category: 'harem', title: '星际后宫', description: '你拥有了来自各个星球的伴侣。', rarityScore: 3000, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 150, weight: 1 }] },
  { id: 'sf_end_22', worldId: 'scifi', category: 'harem', title: '人机之恋', description: '你和AI、人类、外星人同时建立了感情。', rarityScore: 2800, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 120, weight: 1 }] },
  // Secret
  { id: 'sf_end_23', worldId: 'scifi', category: 'secret', title: '宇宙之主', description: '你掌握了宇宙的终极力量。', rarityScore: 5000, conditions: [{ type: 'stat', key: 'special', operator: '=', value: 200, weight: 1 }] },
  { id: 'sf_end_24', worldId: 'scifi', category: 'secret', title: '时间主宰', description: '你成为了时间的主宰，可以自由改变历史。', rarityScore: 4800, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 190, weight: 1 }] },
  { id: 'sf_end_25', worldId: 'scifi', category: 'secret', title: '银河守护者', description: '你成为了守护整个银河的存在。', rarityScore: 4500, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 190, weight: 1 }] },
  { id: 'sf_end_26', worldId: 'scifi', category: 'secret', title: '文明播种者', description: '你成为了播种文明的使者，将生命带到宇宙的每个角落。', rarityScore: 4600, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 180, weight: 1 }] },
  { id: 'sf_end_27', worldId: 'scifi', category: 'secret', title: '超维存在', description: '你超越了物理世界，成为了高维存在。', rarityScore: 5000, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 190, weight: 1 }] },
  // Hidden
  { id: 'sf_end_28', worldId: 'scifi', category: 'hidden', title: '模拟者', description: '你发现了宇宙只是一场模拟。', rarityScore: 10000, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 195, weight: 1 }] },
  { id: 'sf_end_29', worldId: 'scifi', category: 'hidden', title: '宇宙管理员', description: '你成为了宇宙的管理员，可以修改规则。', rarityScore: 8000, conditions: [{ type: 'stat', key: 'intelligence', operator: '=', value: 200, weight: 1 }] },

  // ═══════════════════════════════════════════════════════════════
  // 末日废土 endings (30)
  // ═══════════════════════════════════════════════════════════════
  // Normal
  { id: 'ap_end_01', worldId: 'apocalypse', category: 'normal', title: '废土居民', description: '你在废土上勉强生存了下来。', rarityScore: 100, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 60, weight: 1 }] },
  { id: 'ap_end_02', worldId: 'apocalypse', category: 'normal', title: '商人', description: '你通过贸易在废土上积累了一些财富。', rarityScore: 180, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 80, weight: 1 }] },
  { id: 'ap_end_03', worldId: 'apocalypse', category: 'normal', title: '护卫', description: '你成为了一名保镖，保护重要人物。', rarityScore: 150, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 100, weight: 1 }] },
  { id: 'ap_end_04', worldId: 'apocalypse', category: 'normal', title: '医生', description: '你成为了废土上稀缺的医生。', rarityScore: 200, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 100, weight: 1 }] },
  { id: 'ap_end_05', worldId: 'apocalypse', category: 'normal', title: '农民', description: '你在废土上开垦了一片土地。', rarityScore: 140, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 80, weight: 1 }] },
  { id: 'ap_end_06', worldId: 'apocalypse', category: 'normal', title: '工程师', description: '你靠修理技术谋生。', rarityScore: 160, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 100, weight: 1 }] },
  { id: 'ap_end_07', worldId: 'apocalypse', category: 'normal', title: '流浪者', description: '你在废土上四处流浪。', rarityScore: 120, conditions: [{ type: 'stat', key: 'luck', operator: '>', value: 80, weight: 1 }] },
  { id: 'ap_end_08', worldId: 'apocalypse', category: 'normal', title: '幸存者', description: '你活了下来，这本身就是最大的胜利。', rarityScore: 80, conditions: [{ type: 'stat', key: 'health', operator: '>', value: 50, weight: 1 }] },
  // Good
  { id: 'ap_end_09', worldId: 'apocalypse', category: 'good', title: '废土之王', description: '你统一了废土，建立了新的秩序。', rarityScore: 3000, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 180, weight: 1 }] },
  { id: 'ap_end_10', worldId: 'apocalypse', category: 'good', title: '新纪元', description: '你带领人类走向了新的文明时代。', rarityScore: 3500, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 180, weight: 1 }] },
  { id: 'ap_end_11', worldId: 'apocalypse', category: 'good', title: '废土之光', description: '你成为了废土上人们心中的希望。', rarityScore: 2500, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 180, weight: 1 }] },
  { id: 'ap_end_12', worldId: 'apocalypse', category: 'good', title: '进化之巅', description: '你成为了变异者中最强大的存在。', rarityScore: 2800, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 180, weight: 1 }] },
  { id: 'ap_end_13', worldId: 'apocalypse', category: 'good', title: '废土霸主', description: '你成为了废土上最强大的战士。', rarityScore: 2400, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 180, weight: 1 }] },
  { id: 'ap_end_14', worldId: 'apocalypse', category: 'good', title: '新文明之父', description: '你建立了废土上的第一个国家。', rarityScore: 3000, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 190, weight: 1 }] },
  // Bad
  { id: 'ap_end_15', worldId: 'apocalypse', category: 'bad', title: '变异怪物', description: '你彻底变异成了一个没有理智的怪物。', rarityScore: 300, conditions: [{ type: 'stat', key: 'health', operator: '<', value: 10, weight: 1 }] },
  { id: 'ap_end_16', worldId: 'apocalypse', category: 'bad', title: '辐射致死', description: '你死于严重的辐射中毒。', rarityScore: 250, conditions: [{ type: 'stat', key: 'health', operator: '<', value: 20, weight: 1 }] },
  { id: 'ap_end_17', worldId: 'apocalypse', category: 'bad', title: '死于非命', description: '你在废土上被杀死。', rarityScore: 200, conditions: [{ type: 'stat', key: 'strength', operator: '<', value: 30, weight: 1 }] },
  { id: 'ap_end_18', worldId: 'apocalypse', category: 'bad', title: '掠夺者', description: '你堕落成了掠夺者，最终死于内斗。', rarityScore: 280, conditions: [{ type: 'stat', key: 'charisma', operator: '<', value: 20, weight: 1 }] },
  { id: 'ap_end_19', worldId: 'apocalypse', category: 'bad', title: '孤独之死', description: '你孤独地死在了一个角落。', rarityScore: 150, conditions: [{ type: 'stat', key: 'charisma', operator: '<', value: 20, weight: 1 }] },
  { id: 'ap_end_20', worldId: 'apocalypse', category: 'bad', title: '实验体', description: '你成为了疯狂科学家的实验体。', rarityScore: 350, conditions: [{ type: 'stat', key: 'luck', operator: '<', value: 20, weight: 1 }] },
  // Harem
  { id: 'ap_end_21', worldId: 'apocalypse', category: 'harem', title: '废土情圣', description: '你成为了废土上最受欢迎的男人。', rarityScore: 3000, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 150, weight: 1 }] },
  { id: 'ap_end_22', worldId: 'apocalypse', category: 'harem', title: '避难所之王', description: '你成为了避难所的领袖，所有女性都崇拜你。', rarityScore: 2800, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 130, weight: 1 }] },
  // Secret
  { id: 'ap_end_23', worldId: 'apocalypse', category: 'secret', title: '世界真相', description: '你发现了末日的真相。', rarityScore: 4500, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 180, weight: 1 }] },
  { id: 'ap_end_24', worldId: 'apocalypse', category: 'secret', title: '外星接触', description: '你和外星人达成了协议。', rarityScore: 4000, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 150, weight: 1 }] },
  { id: 'ap_end_25', worldId: 'apocalypse', category: 'secret', title: '时间回溯', description: '你成功阻止了末日的发生。', rarityScore: 5000, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 190, weight: 1 }] },
  { id: 'ap_end_26', worldId: 'apocalypse', category: 'secret', title: '新人类之父', description: '你创造了进化后的新人类。', rarityScore: 4600, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 190, weight: 1 }] },
  { id: 'ap_end_27', worldId: 'apocalypse', category: 'secret', title: '星际移民', description: '你带领人类离开了地球。', rarityScore: 4800, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 180, weight: 1 }] },
  // Hidden
  { id: 'ap_end_28', worldId: 'apocalypse', category: 'hidden', title: '实验观察者', description: '你发现末日只是一场实验。', rarityScore: 10000, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 195, weight: 1 }] },
  { id: 'ap_end_29', worldId: 'apocalypse', category: 'hidden', title: '循环打破者', description: '你发现了时间的循环并打破了它。', rarityScore: 8000, conditions: [{ type: 'stat', key: 'special', operator: '>', value: 195, weight: 1 }] },

  // ═══════════════════════════════════════════════════════════════
  // 古代武侠 endings (30)
  // ═══════════════════════════════════════════════════════════════
  // Normal
  { id: 'wx_end_01', worldId: 'wuxia', category: 'normal', title: '江湖侠客', description: '你成为了一名普通的江湖侠客。', rarityScore: 100, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 60, weight: 1 }] },
  { id: 'wx_end_02', worldId: 'wuxia', category: 'normal', title: '门派弟子', description: '你成为了门派中的中坚力量。', rarityScore: 180, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 80, weight: 1 }] },
  { id: 'wx_end_03', worldId: 'wuxia', category: 'normal', title: '隐士', description: '你看破红尘，隐居山林。', rarityScore: 150, conditions: [{ type: 'stat', key: 'luck', operator: '>', value: 80, weight: 1 }] },
  { id: 'wx_end_04', worldId: 'wuxia', category: 'normal', title: '镖师', description: '你成为了一名镖师，走南闯北。', rarityScore: 160, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 80, weight: 1 }] },
  { id: 'wx_end_05', worldId: 'wuxia', category: 'normal', title: '掌柜', description: '你开了一家客栈，听尽了江湖故事。', rarityScore: 140, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 80, weight: 1 }] },
  { id: 'wx_end_06', worldId: 'wuxia', category: 'normal', title: '武师', description: '你成为了武馆教头。', rarityScore: 170, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 100, weight: 1 }] },
  { id: 'wx_end_07', worldId: 'wuxia', category: 'normal', title: '游侠', description: '你行走江湖，行侠仗义。', rarityScore: 130, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 80, weight: 1 }] },
  { id: 'wx_end_08', worldId: 'wuxia', category: 'normal', title: '平常人', description: '你放弃了江湖，过上了普通人的生活。', rarityScore: 80, conditions: [{ type: 'stat', key: 'strength', operator: '<', value: 50, weight: 1 }] },
  // Good
  { id: 'wx_end_09', worldId: 'wuxia', category: 'good', title: '一代宗师', description: '你成为了武林中人人敬仰的一代宗师。', rarityScore: 2500, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 180, weight: 1 }] },
  { id: 'wx_end_10', worldId: 'wuxia', category: 'good', title: '武林盟主', description: '你成为了统领正道的武林盟主。', rarityScore: 3000, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 180, weight: 1 }] },
  { id: 'wx_end_11', worldId: 'wuxia', category: 'good', title: '剑仙', description: '你的剑术达到了登峰造极的境界。', rarityScore: 2800, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 190, weight: 1 }] },
  { id: 'wx_end_12', worldId: 'wuxia', category: 'good', title: '大侠', description: '你成为了江湖上最著名的大侠。', rarityScore: 2200, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 180, weight: 1 }] },
  { id: 'wx_end_13', worldId: 'wuxia', category: 'good', title: '开派祖师', description: '你开创了一派新的武学。', rarityScore: 2600, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 180, weight: 1 }] },
  { id: 'wx_end_14', worldId: 'wuxia', category: 'good', title: '归隐高人', description: '你的武功天下无敌，但你选择了归隐。', rarityScore: 2400, conditions: [{ type: 'stat', key: 'luck', operator: '>', value: 180, weight: 1 }] },
  // Bad
  { id: 'wx_end_15', worldId: 'wuxia', category: 'bad', title: '走火入魔', description: '你走火入魔，变成了一个杀人狂魔。', rarityScore: 300, conditions: [{ type: 'stat', key: 'health', operator: '<', value: 10, weight: 1 }] },
  { id: 'wx_end_16', worldId: 'wuxia', category: 'bad', title: '身败名裂', description: '你被揭发使用禁功，身败名裂。', rarityScore: 250, conditions: [{ type: 'stat', key: 'charisma', operator: '<', value: 20, weight: 1 }] },
  { id: 'wx_end_17', worldId: 'wuxia', category: 'bad', title: '死于非命', description: '你在江湖仇杀中丧命。', rarityScore: 200, conditions: [{ type: 'stat', key: 'strength', operator: '<', value: 50, weight: 1 }] },
  { id: 'wx_end_18', worldId: 'wuxia', category: 'bad', title: '堕入魔道', description: '你为了追求力量加入了魔教。', rarityScore: 350, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 100, weight: 1 }] },
  { id: 'wx_end_19', worldId: 'wuxia', category: 'bad', title: '被废武功', description: '你被仇家废了武功，生不如死。', rarityScore: 280, conditions: [{ type: 'stat', key: 'strength', operator: '<', value: 20, weight: 1 }] },
  { id: 'wx_end_20', worldId: 'wuxia', category: 'bad', title: '孤独终老', description: '你没有朋友，没有爱人，孤独地死去。', rarityScore: 150, conditions: [{ type: 'stat', key: 'charisma', operator: '<', value: 20, weight: 1 }] },
  // Harem
  { id: 'wx_end_21', worldId: 'wuxia', category: 'harem', title: '群美环绕', description: '你同时拥有多位红颜知己。', rarityScore: 3000, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 150, weight: 1 }] },
  { id: 'wx_end_22', worldId: 'wuxia', category: 'harem', title: '武林情圣', description: '你成为了江湖上最受欢迎的男子。', rarityScore: 2800, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 180, weight: 1 }] },
  { id: 'wx_end_23', worldId: 'wuxia', category: 'harem', title: '后宫之主', description: '你建立了武林中最庞大的后宫。', rarityScore: 3500, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 190, weight: 1 }] },
  // Secret
  { id: 'wx_end_24', worldId: 'wuxia', category: 'secret', title: '武道极致', description: '你的武功达到了前所未有的境界。', rarityScore: 5000, conditions: [{ type: 'stat', key: 'strength', operator: '=', value: 200, weight: 1 }] },
  { id: 'wx_end_25', worldId: 'wuxia', category: 'secret', title: '天下无敌', description: '你成为了真正的天下第一。', rarityScore: 4800, conditions: [{ type: 'stat', key: 'strength', operator: '>', value: 190, weight: 1 }] },
  { id: 'wx_end_26', worldId: 'wuxia', category: 'secret', title: '武林至尊', description: '你统一了武林，成为了至尊。', rarityScore: 4500, conditions: [{ type: 'stat', key: 'charisma', operator: '>', value: 190, weight: 1 }] },
  { id: 'wx_end_27', worldId: 'wuxia', category: 'secret', title: '千古一人', description: '你的武功前无古人后无来者。', rarityScore: 5000, conditions: [{ type: 'stat', key: 'intelligence', operator: '=', value: 200, weight: 1 }] },
  { id: 'wx_end_28', worldId: 'wuxia', category: 'secret', title: '江湖传说', description: '你成为了永远的江湖传说。', rarityScore: 4600, conditions: [{ type: 'stat', key: 'luck', operator: '>', value: 180, weight: 1 }] },
  // Hidden
  { id: 'wx_end_29', worldId: 'wuxia', category: 'hidden', title: '打破次元', description: '你发现江湖只是一个故事。', rarityScore: 10000, conditions: [{ type: 'stat', key: 'intelligence', operator: '>', value: 195, weight: 1 }] },
  { id: 'wx_end_30', worldId: 'wuxia', category: 'hidden', title: '武破虚空', description: '你以武力破碎虚空，飞升到了另一个世界。', rarityScore: 8000, conditions: [{ type: 'stat', key: 'strength', operator: '=', value: 200, weight: 1 }] },

  // ═══════════════════════════════════════════════════════════════
  // META ENDINGS (跨世界)
  // ═══════════════════════════════════════════════════════════════
  { id: 'meta_end_01', worldId: 'all', category: 'hidden', title: '超越传说', description: '你在所有世界都留下了传说，成为了真正的神话。', rarityScore: 10000, conditions: [{ type: 'stat', key: 'special', operator: '=', value: 200, weight: 1 }] },
];
