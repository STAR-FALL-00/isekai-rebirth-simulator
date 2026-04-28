import type { AchievementData } from './events/types';

// ═══════════════════════════════════════════════════════════════
// ACHIEVEMENTS — 80+ achievements across 6 categories
// ═══════════════════════════════════════════════════════════════

export const achievements: AchievementData[] = [
  // ═══════════════════════════════════════════════════════════════
  // WORLD COMPLETION (15)
  // ═══════════════════════════════════════════════════════════════
  { id: 'ach_wc_01', title: '初入修仙', description: '第一次在修仙界完成转生', category: 'world', icon: 'globe', condition: { type: 'complete_world', target: 'cultivation' } },
  { id: 'ach_wc_02', title: '魔法新手', description: '第一次在魔法大陆完成转生', category: 'world', icon: 'wand', condition: { type: 'complete_world', target: 'magic' } },
  { id: 'ach_wc_03', title: '星际旅人', description: '第一次在科幻星际完成转生', category: 'world', icon: 'rocket', condition: { type: 'complete_world', target: 'scifi' } },
  { id: 'ach_wc_04', title: '废土幸存者', description: '第一次在末日废土完成转生', category: 'world', icon: 'shield', condition: { type: 'complete_world', target: 'apocalypse' } },
  { id: 'ach_wc_05', title: '江湖新人', description: '第一次在古代武侠完成转生', category: 'world', icon: 'sword', condition: { type: 'complete_world', target: 'wuxia' } },
  { id: 'ach_wc_06', title: '修仙达人', description: '在修仙界完成10次转生', category: 'world', icon: 'crown', condition: { type: 'complete_world_count', target: 10, worldId: 'cultivation' } },
  { id: 'ach_wc_07', title: '魔法大师', description: '在魔法大陆完成10次转生', category: 'world', icon: 'star', condition: { type: 'complete_world_count', target: 10, worldId: 'magic' } },
  { id: 'ach_wc_08', title: '星际英雄', description: '在科幻星际完成10次转生', category: 'world', icon: 'zap', condition: { type: 'complete_world_count', target: 10, worldId: 'scifi' } },
  { id: 'ach_wc_09', title: '废土传奇', description: '在末日废土完成10次转生', category: 'world', icon: 'trophy', condition: { type: 'complete_world_count', target: 10, worldId: 'apocalypse' } },
  { id: 'ach_wc_10', title: '武林高手', description: '在古代武侠完成10次转生', category: 'world', icon: 'award', condition: { type: 'complete_world_count', target: 10, worldId: 'wuxia' } },
  { id: 'ach_wc_11', title: '世界旅行者', description: '在所有5个世界都完成过转生', category: 'world', icon: 'map', condition: { type: 'all_worlds', target: 5 } },
  { id: 'ach_wc_12', title: '修仙全结局', description: '解锁修仙界的所有结局', category: 'world', icon: 'book', condition: { type: 'all_endings', target: 30, worldId: 'cultivation' } },
  { id: 'ach_wc_13', title: '魔法全结局', description: '解锁魔法大陆的所有结局', category: 'world', icon: 'sparkles', condition: { type: 'all_endings', target: 30, worldId: 'magic' } },
  { id: 'ach_wc_14', title: '百次转生', description: '累计完成100次转生', category: 'world', icon: 'repeat', condition: { type: 'total_reincarnations', target: 100 } },
  { id: 'ach_wc_15', title: '千次轮回', description: '累计完成1000次转生', category: 'world', icon: 'infinity', condition: { type: 'total_reincarnations', target: 1000 } },

  // ── 浮空要塞 ──
  { id: 'ach_fc_01', title: '初入浮空', description: '第一次在浮空要塞完成转生', category: 'world', icon: 'globe', condition: { type: 'complete_world', target: 'floating_citadel' } },
  { id: 'ach_fc_02', title: '浮空达人', description: '在浮空要塞完成10次转生', category: 'world', icon: 'crown', condition: { type: 'complete_world_count', target: 10, worldId: 'floating_citadel' } },
  { id: 'ach_fc_03', title: '浮空全结局', description: '解锁浮空要塞的所有结局', category: 'world', icon: 'book', condition: { type: 'all_endings', target: 30, worldId: 'floating_citadel' } },

  // ═══════════════════════════════════════════════════════════════
  // STAT MILESTONES (18)
  // ═══════════════════════════════════════════════════════════════
  { id: 'ach_sm_01', title: '力大无穷', description: '任意世界的力量属性达到200', category: 'stat', icon: 'dumbbell', condition: { type: 'max_stat', target: 200 } },
  { id: 'ach_sm_02', title: '智慧之光', description: '任意世界的智力属性达到200', category: 'stat', icon: 'brain', condition: { type: 'max_stat_intelligence', target: 200 } },
  { id: 'ach_sm_03', title: '魅力四射', description: '任意世界的魅力属性达到200', category: 'stat', icon: 'heart', condition: { type: 'max_stat_charisma', target: 200 } },
  { id: 'ach_sm_04', title: '天命之子', description: '任意世界的运气属性达到200', category: 'stat', icon: 'clover', condition: { type: 'max_stat_luck', target: 200 } },
  { id: 'ach_sm_05', title: '长生不死', description: '任意世界的生命属性达到200', category: 'stat', icon: 'activity', condition: { type: 'max_stat_health', target: 200 } },
  { id: 'ach_sm_06', title: '特殊极限', description: '任意世界的特殊属性达到200', category: 'stat', icon: 'gem', condition: { type: 'max_stat_special', target: 200 } },
  { id: 'ach_sm_07', title: '六边形战士', description: '单次转生所有属性都超过150', category: 'stat', icon: 'hexagon', condition: { type: 'all_stats_high', target: 150 } },
  { id: 'ach_sm_08', title: '全属性200', description: '单次转生所有属性都达到200', category: 'stat', icon: 'crown', condition: { type: 'all_stats_max', target: 200 } },
  { id: 'ach_sm_09', title: '弱不禁风', description: '力量属性降到0', category: 'stat', icon: 'feather', condition: { type: 'min_stat', target: 0 } },
  { id: 'ach_sm_10', title: '愚不可及', description: '智力属性降到0', category: 'stat', icon: 'cloud', condition: { type: 'min_stat_intelligence', target: 0 } },
  { id: 'ach_sm_11', title: '人见人厌', description: '魅力属性降到0', category: 'stat', icon: 'frown', condition: { type: 'min_stat_charisma', target: 0 } },
  { id: 'ach_sm_12', title: '厄运缠身', description: '运气属性降到0', category: 'stat', icon: 'skull', condition: { type: 'min_stat_luck', target: 0 } },
  { id: 'ach_sm_13', title: '命悬一线', description: '生命属性降到1', category: 'stat', icon: 'alert-triangle', condition: { type: 'min_stat_health', target: 1 } },
  { id: 'ach_sm_14', title: '废柴流', description: '单次转生起始所有属性低于30', category: 'stat', icon: 'trending-down', condition: { type: 'all_stats_low', target: 30 } },
  { id: 'ach_sm_15', title: '百岁老人', description: '活过100岁', category: 'stat', icon: 'cake', condition: { type: 'max_age', target: 100 } },
  { id: 'ach_sm_16', title: '千年王八', description: '活过500岁', category: 'stat', icon: 'timer', condition: { type: 'max_age', target: 500 } },
  { id: 'ach_sm_17', title: '万寿无疆', description: '活过1000岁', category: 'stat', icon: 'infinity', condition: { type: 'max_age', target: 1000 } },
  { id: 'ach_sm_18', title: '天妒英才', description: '在10岁之前死亡', category: 'stat', icon: 'x-circle', condition: { type: 'min_age_death', target: 10 } },

  // ── 浮空要塞 ──
  { id: 'ach_fc_st_01', title: '剑技大师', description: '在浮空要塞技巧属性达到200', category: 'stat', icon: 'brain', condition: { type: 'max_stat_intelligence', target: 200 } },
  { id: 'ach_fc_st_02', title: '力拔山河', description: '在浮空要塞力量属性达到200', category: 'stat', icon: 'dumbbell', condition: { type: 'max_stat_strength', target: 200 } },
  { id: 'ach_fc_st_03', title: '众人敬仰', description: '在浮空要塞人缘属性达到200', category: 'stat', icon: 'heart', condition: { type: 'max_stat_charisma', target: 200 } },
  { id: 'ach_fc_st_04', title: '剑技登峰', description: '在浮空要塞剑技属性达到200', category: 'stat', icon: 'sword', condition: { type: 'max_stat_special', target: 200 } },
  { id: 'ach_fc_st_05', title: '钢铁之躯', description: '在浮空要塞生命值属性达到200', category: 'stat', icon: 'shield', condition: { type: 'max_stat_health', target: 200 } },
  { id: 'ach_fc_st_06', title: '全能冒险者', description: '在浮空要塞单次转生所有属性都超过150', category: 'stat', icon: 'hexagon', condition: { type: 'all_stats_high', target: 150 } },

  // ═══════════════════════════════════════════════════════════════
  // SPECIAL EVENTS (15)
  // ═══════════════════════════════════════════════════════════════
  { id: 'ach_se_01', title: '初出茅庐', description: '第一次触发战斗事件', category: 'event', icon: 'swords', condition: { type: 'event_category', target: 'combat' } },
  { id: 'ach_se_02', title: '桃花运', description: '第一次触发恋爱事件', category: 'event', icon: 'heart', condition: { type: 'event_category', target: 'romance' } },
  { id: 'ach_se_03', title: '探险家', description: '第一次触发探索事件', category: 'event', icon: 'compass', condition: { type: 'event_category', target: 'exploration' } },
  { id: 'ach_se_04', title: '隐藏剧情', description: '触发一次隐藏事件', category: 'event', icon: 'eye', condition: { type: 'event_category', target: 'hidden' } },
  { id: 'ach_se_05', title: '世界线', description: '触发一次世界故事事件', category: 'event', icon: 'book-open', condition: { type: 'event_category', target: 'world_story' } },
  { id: 'ach_se_06', title: '逆天改命', description: '在死亡事件中成功生还', category: 'event', icon: 'refresh-cw', condition: { type: 'survive_death', target: 1 } },
  { id: 'ach_se_07', title: '选择困难', description: '在单次转生中做出100次选择', category: 'event', icon: 'git-branch', condition: { type: 'choices_made', target: 100 } },
  { id: 'ach_se_08', title: '事件达人', description: '单次转生触发500个事件', category: 'event', icon: 'zap', condition: { type: 'events_triggered', target: 500 } },
  { id: 'ach_se_09', title: '后宫起火', description: '同时触发3个恋爱事件', category: 'event', icon: 'flame', condition: { type: 'concurrent_romance', target: 3 } },
  { id: 'ach_se_10', title: '天命之人', description: '连续触发5个好运事件', category: 'event', icon: 'sun', condition: { type: 'lucky_streak', target: 5 } },
  { id: 'ach_se_11', title: '厄运连连', description: '连续触发5个厄运事件', category: 'event', icon: 'cloud-rain', condition: { type: 'unlucky_streak', target: 5 } },
  { id: 'ach_se_12', title: '独行者', description: '单次转生不触发任何恋爱事件', category: 'event', icon: 'user', condition: { type: 'no_romance', target: 1 } },
  { id: 'ach_se_13', title: '杀戮机器', description: '单次转生触发50个战斗事件', category: 'event', icon: 'crosshair', condition: { type: 'combat_events', target: 50 } },
  { id: 'ach_se_14', title: '和平主义者', description: '单次转生不触发任何战斗事件', category: 'event', icon: 'peace', condition: { type: 'no_combat', target: 1 } },
  { id: 'ach_se_15', title: '全事件收集', description: '触发过所有类型的事件', category: 'event', icon: 'check-circle', condition: { type: 'all_categories', target: 12 } },

  // ── 浮空要塞 ──
  { id: 'ach_fc_ev_01', title: '初战告捷', description: '在浮空要塞第一次触发战斗事件', category: 'event', icon: 'swords', condition: { type: 'event_category', target: 'combat' } },
  { id: 'ach_fc_ev_02', title: '命中相遇', description: '在浮空要塞第一次触发恋爱事件', category: 'event', icon: 'heart', condition: { type: 'event_category', target: 'romance' } },
  { id: 'ach_fc_ev_03', title: '隐藏通路', description: '在浮空要塞触发一次隐藏事件', category: 'event', icon: 'eye', condition: { type: 'event_category', target: 'hidden' } },
  { id: 'ach_fc_ev_04', title: '战斗狂人', description: '在浮空要塞单次转生触发50个战斗事件', category: 'event', icon: 'crosshair', condition: { type: 'combat_events', target: 50 } },
  { id: 'ach_fc_ev_05', title: '和平主义者', description: '在浮空要塞单次转生不触发任何战斗事件', category: 'event', icon: 'peace', condition: { type: 'no_combat', target: 1 } },

  // ═══════════════════════════════════════════════════════════════
  // SPEED RUNS (8)
  // ═══════════════════════════════════════════════════════════════
  { id: 'ach_sr_01', title: '速通新手', description: '在30年内完成一次转生', category: 'speed', icon: 'clock', condition: { type: 'speed_run', target: 30 } },
  { id: 'ach_sr_02', title: '速通达人', description: '在20年内完成一次转生', category: 'speed', icon: 'zap', condition: { type: 'speed_run', target: 20 } },
  { id: 'ach_sr_03', title: '速通大师', description: '在10年内完成一次转生', category: 'speed', icon: 'flame', condition: { type: 'speed_run', target: 10 } },
  { id: 'ach_sr_04', title: '速通之神', description: '在5年内完成一次转生', category: 'speed', icon: 'crown', condition: { type: 'speed_run', target: 5 } },
  { id: 'ach_sr_05', title: '极速修仙', description: '在修仙界10年内完成转生', category: 'speed', icon: 'wind', condition: { type: 'speed_run_world', target: 10, worldId: 'cultivation' } },
  { id: 'ach_sr_06', title: '闪电魔法', description: '在魔法大陆10年内完成转生', category: 'speed', icon: 'bolt', condition: { type: 'speed_run_world', target: 10, worldId: 'magic' } },
  { id: 'ach_sr_07', title: '光速星际', description: '在科幻星际10年内完成转生', category: 'speed', icon: 'rocket', condition: { type: 'speed_run_world', target: 10, worldId: 'scifi' } },
  { id: 'ach_sr_08', title: '闪电侠', description: '单次转生触发少于20个事件', category: 'speed', icon: 'timer', condition: { type: 'min_events', target: 20 } },

  // ── 浮空要塞 ──
  { id: 'ach_fc_sp_01', title: '极速攀登', description: '在浮空要塞10年内完成转生', category: 'speed', icon: 'wind', condition: { type: 'speed_run_world', target: 10, worldId: 'floating_citadel' } },

  // ═══════════════════════════════════════════════════════════════
  // SECRET DISCOVERIES (12)
  // ═══════════════════════════════════════════════════════════════
  { id: 'ach_sd_01', title: '第一个结局', description: '解锁第一个结局', category: 'secret', icon: 'lock', condition: { type: 'first_ending', target: 1 } },
  { id: 'ach_sd_02', title: '结局收藏家', description: '解锁10个不同结局', category: 'secret', icon: 'book', condition: { type: 'endings_unlocked', target: 10 } },
  { id: 'ach_sd_03', title: '结局大师', description: '解锁50个不同结局', category: 'secret', icon: 'library', condition: { type: 'endings_unlocked', target: 50 } },
  { id: 'ach_sd_04', title: '全结局', description: '解锁所有结局', category: 'secret', icon: 'award', condition: { type: 'endings_unlocked', target: 150 } },
  { id: 'ach_sd_05', title: '后宫之王', description: '解锁所有后宫结局', category: 'secret', icon: 'heart', condition: { type: 'harem_endings', target: 15 } },
  { id: 'ach_sd_06', title: '隐藏发现者', description: '解锁第一个隐藏结局', category: 'secret', icon: 'eye', condition: { type: 'hidden_endings', target: 1 } },
  { id: 'ach_sd_07', title: '真相探寻者', description: '解锁所有隐藏结局', category: 'secret', icon: 'search', condition: { type: 'hidden_endings', target: 10 } },
  { id: 'ach_sd_08', title: '秘密大师', description: '解锁所有秘密结局', category: 'secret', icon: 'star', condition: { type: 'secret_endings', target: 20 } },
  { id: 'ach_sd_09', title: '完美人生', description: '单次转生解锁好结局', category: 'secret', icon: 'smile', condition: { type: 'good_ending', target: 1 } },
  { id: 'ach_sd_10', title: '悲剧英雄', description: '单次转生解锁坏结局', category: 'secret', icon: 'frown', condition: { type: 'bad_ending', target: 1 } },
  { id: 'ach_sd_11', title: '传奇之路', description: '解锁一个秘密结局', category: 'secret', icon: 'sparkles', condition: { type: 'secret_ending', target: 1 } },
  { id: 'ach_sd_12', title: '成就猎人', description: '解锁50个成就', category: 'secret', icon: 'trophy', condition: { type: 'achievements', target: 50 } },

  // ── 浮空要塞 ──
  { id: 'ach_fc_se_01', title: '千层登顶', description: '在浮空要塞到达解放者境界', category: 'secret', icon: 'crown', condition: { type: 'max_realm', target: 7 } },
  { id: 'ach_fc_se_02', title: '羽衣的守护者', description: '与羽衣达到恋人关系', category: 'secret', icon: 'heart', condition: { type: 'relationship_level', target: 50, key: 'yuhui' } },
  { id: 'ach_fc_se_03', title: '铁锤的搭档', description: '与铁锤达到恋人关系', category: 'secret', icon: 'heart', condition: { type: 'relationship_level', target: 50, key: 'iron_hammer' } },
  { id: 'ach_fc_se_04', title: '师徒同心', description: '与暗影和晨曦同时达到知己关系', category: 'secret', icon: 'star', condition: { type: 'relationship_dual', target: 50, key: 'shadow,dawn' } },
  { id: 'ach_fc_se_05', title: '制裁红名', description: '击败血刃', category: 'secret', icon: 'skull', condition: { type: 'flag_set', target: 1, key: 'defeat_blood_blade' } },
  { id: 'ach_fc_se_06', title: '纯粹之剑', description: '不使用剑技击败守护者', category: 'secret', icon: 'sword', condition: { type: 'flag_set', target: 1, key: 'pure_sword_victory' } },
  { id: 'ach_fc_se_07', title: '独行攻略者', description: '独自击败楼层守护者', category: 'secret', icon: 'user', condition: { type: 'flag_set', target: 1, key: 'solo_boss_clear' } },
  { id: 'ach_fc_se_08', title: '真相追寻者', description: '发现浮空要塞的真相', category: 'secret', icon: 'search', condition: { type: 'flag_set', target: 1, key: 'discover_fc_truth' } },

  // ═══════════════════════════════════════════════════════════════
  // NEW WORLDS — 8 worlds × 10 achievements = 80
  // ═══════════════════════════════════════════════════════════════

  // ── 斗破苍穹 ──
  { id: 'ach_dp_01', title: '初入斗气', description: '第一次在斗破苍穹完成转生', category: 'world', icon: 'globe', condition: { type: 'complete_world', target: 'doupo' } },
  { id: 'ach_dp_02', title: '斗气达人', description: '在斗破苍穹完成10次转生', category: 'world', icon: 'crown', condition: { type: 'complete_world_count', target: 10, worldId: 'doupo' } },
  { id: 'ach_dp_03', title: '斗破全结局', description: '解锁斗破苍穹的所有结局', category: 'world', icon: 'book', condition: { type: 'all_endings', target: 30, worldId: 'doupo' } },
  { id: 'ach_dp_04', title: '力破苍穹', description: '在斗破苍穹力量属性达到200', category: 'stat', icon: 'dumbbell', condition: { type: 'max_stat_strength', target: 200 } },
  { id: 'ach_dp_05', title: '异火掌控', description: '在斗破苍穹特殊属性达到200', category: 'stat', icon: 'gem', condition: { type: 'max_stat_special', target: 200 } },
  { id: 'ach_dp_06', title: '初次战斗', description: '在斗破苍穹第一次触发战斗事件', category: 'event', icon: 'swords', condition: { type: 'event_category', target: 'combat' } },
  { id: 'ach_dp_07', title: '炼药之路', description: '在斗破苍穹第一次触发修炼事件', category: 'event', icon: 'flame', condition: { type: 'event_category', target: 'cultivation' } },
  { id: 'ach_dp_08', title: '速通斗破', description: '在斗破苍穹10年内完成转生', category: 'speed', icon: 'wind', condition: { type: 'speed_run_world', target: 10, worldId: 'doupo' } },
  { id: 'ach_dp_09', title: '完美斗帝', description: '在斗破苍穹单次转生解锁好结局', category: 'secret', icon: 'smile', condition: { type: 'good_ending', target: 1 } },
  { id: 'ach_dp_10', title: '陨落天才', description: '在斗破苍穹单次转生解锁坏结局', category: 'secret', icon: 'frown', condition: { type: 'bad_ending', target: 1 } },

  // ── 龙族 ──
  { id: 'ach_dr_01', title: '初入龙族', description: '第一次在龙族世界完成转生', category: 'world', icon: 'globe', condition: { type: 'complete_world', target: 'dragon_raja' } },
  { id: 'ach_dr_02', title: '屠龙达人', description: '在龙族世界完成10次转生', category: 'world', icon: 'crown', condition: { type: 'complete_world_count', target: 10, worldId: 'dragon_raja' } },
  { id: 'ach_dr_03', title: '龙族全结局', description: '解锁龙族世界的所有结局', category: 'world', icon: 'book', condition: { type: 'all_endings', target: 30, worldId: 'dragon_raja' } },
  { id: 'ach_dr_04', title: '龙血觉醒', description: '在龙族世界力量属性达到200', category: 'stat', icon: 'dumbbell', condition: { type: 'max_stat_strength', target: 200 } },
  { id: 'ach_dr_05', title: '言灵精通', description: '在龙族世界智力属性达到200', category: 'stat', icon: 'brain', condition: { type: 'max_stat_intelligence', target: 200 } },
  { id: 'ach_dr_06', title: '初次屠龙', description: '在龙族世界第一次触发战斗事件', category: 'event', icon: 'swords', condition: { type: 'event_category', target: 'combat' } },
  { id: 'ach_dr_07', title: '探索龙墓', description: '在龙族世界第一次触发探索事件', category: 'event', icon: 'compass', condition: { type: 'event_category', target: 'exploration' } },
  { id: 'ach_dr_08', title: '极速龙族', description: '在龙族世界10年内完成转生', category: 'speed', icon: 'wind', condition: { type: 'speed_run_world', target: 10, worldId: 'dragon_raja' } },
  { id: 'ach_dr_09', title: '龙族荣耀', description: '在龙族世界单次转生解锁好结局', category: 'secret', icon: 'smile', condition: { type: 'good_ending', target: 1 } },
  { id: 'ach_dr_10', title: '血之哀', description: '在龙族世界单次转生解锁坏结局', category: 'secret', icon: 'frown', condition: { type: 'bad_ending', target: 1 } },

  // ── 三体 ──
  { id: 'ach_tb_01', title: '初入三体', description: '第一次在三体世界完成转生', category: 'world', icon: 'globe', condition: { type: 'complete_world', target: 'three_body' } },
  { id: 'ach_tb_02', title: '面壁达人', description: '在三体世界完成10次转生', category: 'world', icon: 'crown', condition: { type: 'complete_world_count', target: 10, worldId: 'three_body' } },
  { id: 'ach_tb_03', title: '三体全结局', description: '解锁三体世界的所有结局', category: 'world', icon: 'book', condition: { type: 'all_endings', target: 30, worldId: 'three_body' } },
  { id: 'ach_tb_04', title: '科学天才', description: '在三体世界智力属性达到200', category: 'stat', icon: 'brain', condition: { type: 'max_stat_intelligence', target: 200 } },
  { id: 'ach_tb_05', title: '生存专家', description: '在三体世界生命属性达到200', category: 'stat', icon: 'activity', condition: { type: 'max_stat_health', target: 200 } },
  { id: 'ach_tb_06', title: '遭遇水滴', description: '在三体世界第一次触发战斗事件', category: 'event', icon: 'swords', condition: { type: 'event_category', target: 'combat' } },
  { id: 'ach_tb_07', title: '宇宙探索', description: '在三体世界第一次触发探索事件', category: 'event', icon: 'compass', condition: { type: 'event_category', target: 'exploration' } },
  { id: 'ach_tb_08', title: '极速三体', description: '在三体世界10年内完成转生', category: 'speed', icon: 'wind', condition: { type: 'speed_run_world', target: 10, worldId: 'three_body' } },
  { id: 'ach_tb_09', title: '人类胜利', description: '在三体世界单次转生解锁好结局', category: 'secret', icon: 'smile', condition: { type: 'good_ending', target: 1 } },
  { id: 'ach_tb_10', title: '黑暗森林', description: '在三体世界单次转生解锁坏结局', category: 'secret', icon: 'frown', condition: { type: 'bad_ending', target: 1 } },

  // ── 葬送的芙莉莲 ──
  { id: 'ach_fr_01', title: '初入芙莉莲', description: '第一次在芙莉莲世界完成转生', category: 'world', icon: 'globe', condition: { type: 'complete_world', target: 'frieren' } },
  { id: 'ach_fr_02', title: '魔法达人', description: '在芙莉莲世界完成10次转生', category: 'world', icon: 'crown', condition: { type: 'complete_world_count', target: 10, worldId: 'frieren' } },
  { id: 'ach_fr_03', title: '芙莉莲全结局', description: '解锁芙莉莲世界的所有结局', category: 'world', icon: 'book', condition: { type: 'all_endings', target: 30, worldId: 'frieren' } },
  { id: 'ach_fr_04', title: '长寿精灵', description: '在芙莉莲世界活过1000岁', category: 'stat', icon: 'timer', condition: { type: 'max_age', target: 1000 } },
  { id: 'ach_fr_05', title: '魔法精通', description: '在芙莉莲世界智力属性达到200', category: 'stat', icon: 'brain', condition: { type: 'max_stat_intelligence', target: 200 } },
  { id: 'ach_fr_06', title: '初次冒险', description: '在芙莉莲世界第一次触发探索事件', category: 'event', icon: 'compass', condition: { type: 'event_category', target: 'exploration' } },
  { id: 'ach_fr_07', title: '魔法修炼', description: '在芙莉莲世界第一次触发修炼事件', category: 'event', icon: 'flame', condition: { type: 'event_category', target: 'cultivation' } },
  { id: 'ach_fr_08', title: '极速芙莉莲', description: '在芙莉莲世界10年内完成转生', category: 'speed', icon: 'wind', condition: { type: 'speed_run_world', target: 10, worldId: 'frieren' } },
  { id: 'ach_fr_09', title: '勇者传承', description: '在芙莉莲世界单次转生解锁好结局', category: 'secret', icon: 'smile', condition: { type: 'good_ending', target: 1 } },
  { id: 'ach_fr_10', title: '魔法失效', description: '在芙莉莲世界单次转生解锁坏结局', category: 'secret', icon: 'frown', condition: { type: 'bad_ending', target: 1 } },

  // ── 高达SEED ──
  { id: 'ach_gs_01', title: '初入高达', description: '第一次在高达SEED世界完成转生', category: 'world', icon: 'globe', condition: { type: 'complete_world', target: 'gundam_seed' } },
  { id: 'ach_gs_02', title: '机师达人', description: '在高达SEED世界完成10次转生', category: 'world', icon: 'crown', condition: { type: 'complete_world_count', target: 10, worldId: 'gundam_seed' } },
  { id: 'ach_gs_03', title: '高达全结局', description: '解锁高达SEED世界的所有结局', category: 'world', icon: 'book', condition: { type: 'all_endings', target: 30, worldId: 'gundam_seed' } },
  { id: 'ach_gs_04', title: '最强调整者', description: '在高达SEED世界力量属性达到200', category: 'stat', icon: 'dumbbell', condition: { type: 'max_stat_strength', target: 200 } },
  { id: 'ach_gs_05', title: '战术天才', description: '在高达SEED世界智力属性达到200', category: 'stat', icon: 'brain', condition: { type: 'max_stat_intelligence', target: 200 } },
  { id: 'ach_gs_06', title: '初次出击', description: '在高达SEED世界第一次触发战斗事件', category: 'event', icon: 'swords', condition: { type: 'event_category', target: 'combat' } },
  { id: 'ach_gs_07', title: '宇宙探索', description: '在高达SEED世界第一次触发探索事件', category: 'event', icon: 'compass', condition: { type: 'event_category', target: 'exploration' } },
  { id: 'ach_gs_08', title: '极速高达', description: '在高达SEED世界10年内完成转生', category: 'speed', icon: 'wind', condition: { type: 'speed_run_world', target: 10, worldId: 'gundam_seed' } },
  { id: 'ach_gs_09', title: '和平之光', description: '在高达SEED世界单次转生解锁好结局', category: 'secret', icon: 'smile', condition: { type: 'good_ending', target: 1 } },
  { id: 'ach_gs_10', title: '战争创伤', description: '在高达SEED世界单次转生解锁坏结局', category: 'secret', icon: 'frown', condition: { type: 'bad_ending', target: 1 } },

  // ── 超电磁炮 ──
  { id: 'ach_rg_01', title: '初入学园都市', description: '第一次在学园都市完成转生', category: 'world', icon: 'globe', condition: { type: 'complete_world', target: 'railgun' } },
  { id: 'ach_rg_02', title: '能力者达人', description: '在学园都市完成10次转生', category: 'world', icon: 'crown', condition: { type: 'complete_world_count', target: 10, worldId: 'railgun' } },
  { id: 'ach_rg_03', title: '超电磁炮全结局', description: '解锁学园都市的所有结局', category: 'world', icon: 'book', condition: { type: 'all_endings', target: 30, worldId: 'railgun' } },
  { id: 'ach_rg_04', title: '超电磁炮', description: '在学园都市特殊属性达到200', category: 'stat', icon: 'gem', condition: { type: 'max_stat_special', target: 200 } },
  { id: 'ach_rg_05', title: '天才少女', description: '在学园都市智力属性达到200', category: 'stat', icon: 'brain', condition: { type: 'max_stat_intelligence', target: 200 } },
  { id: 'ach_rg_06', title: '初次能力对决', description: '在学园都市第一次触发战斗事件', category: 'event', icon: 'swords', condition: { type: 'event_category', target: 'combat' } },
  { id: 'ach_rg_07', title: '学园日常', description: '在学园都市第一次触发成长事件', category: 'event', icon: 'user', condition: { type: 'event_category', target: 'growth' } },
  { id: 'ach_rg_08', title: '极速超电磁炮', description: '在学园都市10年内完成转生', category: 'speed', icon: 'wind', condition: { type: 'speed_run_world', target: 10, worldId: 'railgun' } },
  { id: 'ach_rg_09', title: '能力进化', description: '在学园都市单次转生解锁好结局', category: 'secret', icon: 'smile', condition: { type: 'good_ending', target: 1 } },
  { id: 'ach_rg_10', title: '能力失控', description: '在学园都市单次转生解锁坏结局', category: 'secret', icon: 'frown', condition: { type: 'bad_ending', target: 1 } },

  // ── Fate/stay night ──
  { id: 'ach_ft_01', title: '初入圣杯战争', description: '第一次在Fate世界完成转生', category: 'world', icon: 'globe', condition: { type: 'complete_world', target: 'fate' } },
  { id: 'ach_ft_02', title: '御主达人', description: '在Fate世界完成10次转生', category: 'world', icon: 'crown', condition: { type: 'complete_world_count', target: 10, worldId: 'fate' } },
  { id: 'ach_ft_03', title: 'Fate全结局', description: '解锁Fate世界的所有结局', category: 'world', icon: 'book', condition: { type: 'all_endings', target: 30, worldId: 'fate' } },
  { id: 'ach_ft_04', title: '英灵之力', description: '在Fate世界力量属性达到200', category: 'stat', icon: 'dumbbell', condition: { type: 'max_stat_strength', target: 200 } },
  { id: 'ach_ft_05', title: '魔术回路', description: '在Fate世界特殊属性达到200', category: 'stat', icon: 'gem', condition: { type: 'max_stat_special', target: 200 } },
  { id: 'ach_ft_06', title: '初次战斗', description: '在Fate世界第一次触发战斗事件', category: 'event', icon: 'swords', condition: { type: 'event_category', target: 'combat' } },
  { id: 'ach_ft_07', title: '圣杯探索', description: '在Fate世界第一次触发探索事件', category: 'event', icon: 'compass', condition: { type: 'event_category', target: 'exploration' } },
  { id: 'ach_ft_08', title: '极速圣杯', description: '在Fate世界10年内完成转生', category: 'speed', icon: 'wind', condition: { type: 'speed_run_world', target: 10, worldId: 'fate' } },
  { id: 'ach_ft_09', title: '圣杯实现', description: '在Fate世界单次转生解锁好结局', category: 'secret', icon: 'smile', condition: { type: 'good_ending', target: 1 } },
  { id: 'ach_ft_10', title: '黑泥吞噬', description: '在Fate世界单次转生解锁坏结局', category: 'secret', icon: 'frown', condition: { type: 'bad_ending', target: 1 } },

  // ── 辉夜大小姐 ──
  { id: 'ach_kg_01', title: '初入秀知院', description: '第一次在辉夜世界完成转生', category: 'world', icon: 'globe', condition: { type: 'complete_world', target: 'kaguya' } },
  { id: 'ach_kg_02', title: '恋爱达人', description: '在辉夜世界完成10次转生', category: 'world', icon: 'crown', condition: { type: 'complete_world_count', target: 10, worldId: 'kaguya' } },
  { id: 'ach_kg_03', title: '辉夜全结局', description: '解锁辉夜世界的所有结局', category: 'world', icon: 'book', condition: { type: 'all_endings', target: 30, worldId: 'kaguya' } },
  { id: 'ach_kg_04', title: '恋爱天才', description: '在辉夜世界魅力属性达到200', category: 'stat', icon: 'heart', condition: { type: 'max_stat_charisma', target: 200 } },
  { id: 'ach_kg_05', title: '智将辉夜', description: '在辉夜世界智力属性达到200', category: 'stat', icon: 'brain', condition: { type: 'max_stat_intelligence', target: 200 } },
  { id: 'ach_kg_06', title: '恋爱事件', description: '在辉夜世界第一次触发恋爱事件', category: 'event', icon: 'heart', condition: { type: 'event_category', target: 'romance' } },
  { id: 'ach_kg_07', title: '学生会日常', description: '在辉夜世界第一次触发成长事件', category: 'event', icon: 'user', condition: { type: 'event_category', target: 'growth' } },
  { id: 'ach_kg_08', title: '极速恋爱', description: '在辉夜世界10年内完成转生', category: 'speed', icon: 'wind', condition: { type: 'speed_run_world', target: 10, worldId: 'kaguya' } },
  { id: 'ach_kg_09', title: '恋爱胜利', description: '在辉夜世界单次转生解锁好结局', category: 'secret', icon: 'smile', condition: { type: 'good_ending', target: 1 } },
  { id: 'ach_kg_10', title: '恋爱败北', description: '在辉夜世界单次转生解锁坏结局', category: 'secret', icon: 'frown', condition: { type: 'bad_ending', target: 1 } },

  // ═══════════════════════════════════════════════════════════════
  // META ACHIEVEMENTS (12)
  // ═══════════════════════════════════════════════════════════════
  { id: 'ach_ma_01', title: '转生模拟器', description: '完成第一次转生', category: 'meta', icon: 'refresh-cw', condition: { type: 'first_reincarnation', target: 1 } },
  { id: 'ach_ma_02', title: '十世轮回', description: '完成10次转生', category: 'meta', icon: 'repeat', condition: { type: 'total_reincarnations', target: 10 } },
  { id: 'ach_ma_03', title: '百世轮回', description: '完成100次转生', category: 'meta', icon: 'infinity', condition: { type: 'total_reincarnations', target: 100 } },
  { id: 'ach_ma_04', title: '全后宫收集', description: '解锁所有后宫结局', category: 'meta', icon: 'heart', condition: { type: 'all_harem', target: 15 } },
  { id: 'ach_ma_05', title: '全隐藏发现', description: '发现所有隐藏结局', category: 'meta', icon: 'eye', condition: { type: 'all_hidden', target: 10 } },
  { id: 'ach_ma_06', title: '传奇收藏家', description: '解锁所有秘密结局', category: 'meta', icon: 'crown', condition: { type: 'all_secret', target: 20 } },
  { id: 'ach_ma_07', title: '世界之主', description: '在所有世界都达到最强结局', category: 'meta', icon: 'globe', condition: { type: 'all_worlds_best', target: 5 } },
  { id: 'ach_ma_08', title: '完美主义者', description: '单次转生所有属性达到200', category: 'meta', icon: 'check-circle', condition: { type: 'all_stats_max', target: 200 } },
  { id: 'ach_ma_09', title: '极速挑战', description: '在5年内达到好结局', category: 'meta', icon: 'zap', condition: { type: 'speed_good_ending', target: 5 } },
  { id: 'ach_ma_10', title: '长生不死', description: '单次转生活过1000岁', category: 'meta', icon: 'activity', condition: { type: 'max_age', target: 1000 } },
  { id: 'ach_ma_11', title: '命运之子', description: '单次转生运气始终为200', category: 'meta', icon: 'clover', condition: { type: 'max_stat_luck', target: 200 } },
  { id: 'ach_ma_12', title: '转生之神', description: '解锁所有成就', category: 'meta', icon: 'crown', condition: { type: 'all_achievements', target: 80 } },
];
