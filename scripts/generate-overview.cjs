const fs = require('fs');
const path = require('path');

const worldsPath = path.join(__dirname, '..', 'src', 'engine', 'worlds.ts');
const worldsCode = fs.readFileSync(worldsPath, 'utf-8');

function extractWorlds(code) {
  const worlds = [];
  const inner = code.split('export const worlds: World[] = [')[1]?.split('];')[0];
  if (!inner) return [];
  const rawWorlds = inner.split('\n  },\n  {');
  rawWorlds.forEach((raw, i) => {
    if (i > 0) raw = '  {' + raw;
    const idMatch = raw.match(/id: '([^']+)'/);
    const nameMatch = raw.match(/name: '([^']+)'/);
    const nameEnMatch = raw.match(/nameEn: '([^']+)'/);
    if (!idMatch || !nameMatch || !nameEnMatch) return;
    const idBlock = raw.split('identities: [')[1]?.split('npcs:')[0];
    if (!idBlock) return;
    const identities = [...idBlock.matchAll(/id: '([^']+)',\s*\n\s*name: '([^']+)'/g)].map(m => ({ id: m[1], name: m[2] }));
    worlds.push({ id: idMatch[1], name: nameMatch[1], identities });
  });
  return worlds;
}

const worlds = extractWorlds(worldsCode);

function countCategories(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const cats = ['childhood','growth','adult','elder','combat','romance','cultivation','exploration','world_story','identity_exclusive','hidden','death'];
  const result = {};
  cats.forEach(c => {
    result[c] = (content.match(new RegExp("category: '" + c + "'", 'g')) || []).length;
  });
  result.chainPriority = (content.match(/chainPriority:/g) || []).length;
  result.choices = (content.match(/choices: \[/g) || []).length;
  result.total = (content.match(/id: '/g) || []).length;
  return result;
}

const eventDir = path.join(__dirname, '..', 'src', 'engine', 'events');
const worldStats = {};
worlds.forEach(w => {
  const file = path.join(eventDir, w.id + 'Templates.ts');
  if (fs.existsSync(file)) {
    worldStats[w.id] = countCategories(file);
  }
});

const worldColors = {
  cultivation: '#2DD4A0', magic: '#9B6BFF', scifi: '#00D4FF', apocalypse: '#FF6B2D', wuxia: '#FF2D55',
};
const worldStatNames = {
  cultivation: '体质 / 悟性 / 机缘 / 气运 / 寿元 / 灵根',
  magic: '力量 / 魔力 / 魅力 / 幸运 / 生命 / 元素亲和',
  scifi: '体能 / 智力 / 社交 / 运气 / 健康 / 科技等级',
  apocalypse: '生存 / 知识 / 声望 / 机遇 / 体质 / 变异度',
  wuxia: '内力 / 武学 / 侠名 / 福缘 / 气血 / 门派',
};
const worldEmoji = { cultivation: '🌿', magic: '🔮', scifi: '🚀', apocalypse: '☢️', wuxia: '⚔️' };

function wstat(id, cat) { return worldStats[id]?.[cat] || 0; }

let md = '# 异世界转生模拟器 — 事件树总览（v2.0）\n\n';
md += '> 更新时间：基于当前代码库最新生成数据\n';
md += '> 模板事件 vs 实际事件：每个模板包含 3~5 条文本变体，通过模板插值系统动态生成\n\n---\n\n';

md += '## 一、全局架构（含事件链）\n\n';
md += '```\n';
md += '游戏启动\n';
md += '└── 转生界面 (Rebirth)\n';
md += '    ├── 随机世界 + 随机身份 + 随机天赋等级\n';
md += '    │   └── 天赋等级：废材(10%) / 平庸(25%) / 普通(35%) / 良才(20%) / 天才(8%) / 绝世(2%)\n';
md += '    └── 装备遗物（影响下一世权重）\n';
md += '        └── 进入游戏 (Gameplay)\n';
md += '            ├── 出生事件（根据天赋等级决定初始剧情）\n';
md += '            ├── 年龄推进 → 事件引擎触发\n';
md += '            │   └── 根据 [世界ID + 年龄 + 属性 + 身份 + 天赋 + 已触发Flags] 筛选可用事件\n';
md += '            │       ├── 【链式事件优先】检查 chainPriority > 0 的事件\n';
md += '            │       │   └── 身份专属链：童年 → 少年 → 成年 → 特殊剧情\n';
md += '            │       ├── 【稀有度分层】传说(≤0.15) / 史诗(0.15-0.35) / 稀有(0.35-0.65) / 普通(>0.65)\n';
md += '            │       ├── 正常事件池（按 category 分类）\n';
md += '            │       │   ├── 年龄段主线（childhood / growth / adult / elder）\n';
md += '            │       │   ├── 跨年龄段通用（combat / romance / exploration / cultivation）\n';
md += '            │       │   └── 世界剧情线（world_story）\n';
md += '            │       ├── 身份专属（identity_exclusive）— 仅特定身份可触发\n';
md += '            │       ├── 隐藏事件（hidden）— 需满足高属性/特殊条件\n';
md += '            │       └── 死亡事件（death）— 寿尽/健康归零时触发\n';
md += '            └── 结局判定（Ending）\n';
md += '                ├── 普通结局（寿终正寝、战死等）\n';
md += '                ├── 传奇结局（各世界巅峰）\n';
md += '                ├── 后宫结局（羁绊达标）\n';
md += '                └── 隐藏结局（跨世界联动、特殊条件）\n';
md += '```\n\n---\n\n';

md += '## 二、五世界事件分布对比\n\n';
md += '| 类别 | 修仙界 | 魔法大陆 | 科幻星际 | 末日废土 | 古代武侠 |\n';
md += '|------|--------|----------|----------|----------|----------|\n';
const cats = ['childhood','growth','adult','elder','combat','romance','cultivation','exploration','world_story','identity_exclusive','hidden','death'];
cats.forEach(c => {
  md += '| **' + c + '** | ' + wstat('cultivation', c) + ' | ' + wstat('magic', c) + ' | ' + wstat('scifi', c) + ' | ' + wstat('apocalypse', c) + ' | ' + wstat('wuxia', c) + ' |\n';
});
md += '| **链式事件** | ' + wstat('cultivation','chainPriority') + ' | ' + wstat('magic','chainPriority') + ' | ' + wstat('scifi','chainPriority') + ' | ' + wstat('apocalypse','chainPriority') + ' | ' + wstat('wuxia','chainPriority') + ' |\n';
md += '| **选择分支** | ' + wstat('cultivation','choices') + ' | ' + wstat('magic','choices') + ' | ' + wstat('scifi','choices') + ' | ' + wstat('apocalypse','choices') + ' | ' + wstat('wuxia','choices') + ' |\n';
md += '| **模板合计** | **' + wstat('cultivation','total') + '** | **' + wstat('magic','total') + '** | **' + wstat('scifi','total') + '** | **' + wstat('apocalypse','total') + '** | **' + wstat('wuxia','total') + '** |\n';
md += '| **预估实际事件** | **~' + (wstat('cultivation','total')*4) + '** | **~' + (wstat('magic','total')*4) + '** | **~' + (wstat('scifi','total')*4) + '** | **~' + (wstat('apocalypse','total')*4) + '** | **~' + (wstat('wuxia','total')*4) + '** |\n';
md += '\n> **事件链统计**：每世界 60 个链式事件（10 身份 × 6 个链式节点），确保每个身份都有独立的故事线。\n\n---\n\n';

md += '## 三、稀有度与概率分布\n\n';
md += '当前每世界的事件按触发概率分为四个稀有度层级：\n\n';
md += '| 稀有度 | 概率范围 | 修仙界示例 | 魔法大陆示例 | 说明 |\n';
md += '|--------|----------|-----------|-------------|------|\n';
md += '| **传说** | ≤ 0.15 | 出生紫气东来、混沌灵根觉醒 | 七彩虹光伴生、创世神龙祝福 | 极小概率，一生难遇一次 |\n';
md += '| **史诗** | 0.15 - 0.35 | 偶遇散修传功、灵脉爆发 | 双元素亲和觉醒、龙族血脉共鸣 | 低概率，转折点事件 |\n';
md += '| **稀有** | 0.35 - 0.65 | 发现灵草、初窥功法 | 意外获得魔法道具、精灵青睐 | 中等概率，小奇遇 |\n';
md += '| **普通** | > 0.65 | 日常修炼、平淡一年 | 学院上课、普通冥想 | 高概率，基础积累 |\n';
md += '\n';
md += '> ⚠️ **当前问题**：生成的事件概率分布较为均匀，传说/史诗级事件偏少，需要进一步按稀有度分层设计。\n\n';
md += '---\n\n';

md += '## 四、天赋系统（设计中）\n\n';
md += '每个角色开局时随机 roll 取天赋等级，影响一生的事件池和属性成长：\n\n';
md += '| 天赋等级 | 概率 | 修仙界称谓 | 魔法大陆称谓 | 属性影响 | 事件池差异 |\n';
md += '|----------|------|-----------|-------------|---------|-----------|\n';
md += '| **绝世** | 2% | 混沌灵根 | 元素之主 | 全属性+30 | 极易触发传说事件 |\n';
md += '| **天才** | 8% | 天灵根 | 魔法宠儿 | 主属性+20 | 容易触发史诗事件 |\n';
md += '| **良才** | 20% | 上品灵根 | 魔法亲和 | 主属性+10 | 正常事件池 |\n';
md += '| **普通** | 35% | 中品灵根 | 魔法感知 | 无加成 | 正常事件池 |\n';
md += '| **平庸** | 25% | 下品灵根 | 魔法迟钝 | 主属性-5 | 偏向普通事件，减少奇遇 |\n';
md += '| **废材** | 10% | 无灵根 | 魔法绝缘 | 主属性-15 | 大幅增加废材专属事件，极小概率触发逆袭 |\n';
md += '\n';
md += '> 💡 **废材逆袭路线**：废材开局有独立的"隐忍→奇遇→逆袭"事件链，虽然起点低，但逆袭成功后的成就感和属性爆发更高。\n\n';
md += '---\n\n';

worlds.forEach((w, idx) => {
  const stats = worldStats[w.id] || {};
  md += '## 五、世界' + (idx + 1) + '：' + w.name + ' ' + worldEmoji[w.id] + '\n\n';
  md += '**主题色**：`' + worldColors[w.id] + '`\n\n';
  md += '**属性名称**：' + worldStatNames[w.id] + '\n\n';
  md += '### 5.1 开局身份（' + w.identities.length + '种）\n\n';
  md += '| # | 身份ID | 名称 |\n';
  md += '|---|--------|------|\n';
  w.identities.forEach((id, i) => {
    md += '| ' + (i + 1) + ' | `' + id.id + '` | ' + id.name + ' |\n';
  });
  md += '\n';

  md += '### 5.2 事件树结构\n\n';
  md += '```\n' + w.name + '事件树\n';
  md += '├── 童年期 (0-12岁) — ' + (stats.childhood || 0) + '个通用模板\n';
  md += '│   ├── 传说(≤0.15)：出生异象、天降祥瑞、上古传承觉醒\n';
  md += '│   ├── 史诗(0.15-0.35)：天赋觉醒、灵根检测、偶遇名师\n';
  md += '│   ├── 稀有(0.35-0.65)：小有奇遇、意外发现、贵人相助\n';
  md += '│   └── 普通(>0.65)：日常修炼、平淡一年、普通遭遇\n';
  md += '│   └── 各身份童年专属：' + w.identities.length + '身份 × 2 = ' + (w.identities.length * 2) + '个链式起点\n';
  md += '│\n';
  md += '├── 少年期 (13-25岁) — ' + (stats.growth || 0) + '个通用模板\n';
  md += '│   ├── 传说：顿悟大道、秘境核心传承\n';
  md += '│   ├── 史诗：重大突破、宗门核心弟子选拔\n';
  md += '│   ├── 稀有：外出历练得宝、同辈切磋顿悟\n';
  md += '│   └── 普通：日常练功、读书识字\n';
  md += '│   └── 各身份少年专属：' + w.identities.length + '身份 × 2 = ' + (w.identities.length * 2) + '个（chainPriority: 1）\n';
  md += '│\n';
  md += '├── 成年期 (26-50岁) — ' + (stats.adult || 0) + '个通用模板\n';
  md += '│   ├── 传说：飞升之劫、天道感悟\n';
  md += '│   ├── 史诗：开宗立派、跨级战斗胜利\n';
  md += '│   ├── 稀有：势力扩张、珍稀资源获取\n';
  md += '│   └── 普通：处理日常事务、平稳修炼\n';
  md += '│   └── 各身份成年专属：' + w.identities.length + '身份 × 2 = ' + (w.identities.length * 2) + '个（chainPriority: 2，含选择分支）\n';
  md += '│\n';
  md += '├── 老年期 (51+岁) — ' + (stats.elder || 0) + '个通用模板\n';
  md += '│   ├── 传说：以身合道、破碎虚空\n';
  md += '│   ├── 史诗：万载传承、不死之身\n';
  md += '│   ├── 稀有：收徒传道、闭关悟道\n';
  md += '│   └── 普通：颐养天年、回忆往事\n';
  md += '│   └── 各身份特殊剧情：' + w.identities.length + '身份 × 2 = ' + (w.identities.length * 2) + '个（chainPriority: 3）\n';
  md += '│\n';
  md += '├── 战斗事件 — ' + (stats.combat || 0) + '个模板\n';
  md += '├── 情缘事件 — ' + (stats.romance || 0) + '个模板\n';
  md += '├── 修炼/成长事件 — ' + (stats.cultivation || 0) + '个模板\n';
  md += '├── 探索事件 — ' + (stats.exploration || 0) + '个模板\n';
  md += '├── 世界剧情 — ' + (stats.world_story || 0) + '个模板\n';
  md += '├── 隐藏事件 — ' + (stats.hidden || 0) + '个模板\n';
  md += '└── 死亡事件 — ' + (stats.death || 0) + '个模板\n';
  md += '```\n\n';

  md += '### 5.3 身份专属事件链示例（以' + w.identities[0].name + '为例）\n\n';
  md += '```\n' + w.identities[0].name + ' 事件链\n';
  md += '├── 童年①（3-7岁）\n';
  md += '│   └── 触发后设置 flag: chain_' + w.identities[0].id + '_childhood_0\n';
  md += '├── 童年②（7-11岁）\n';
  md += '│   └── 设置 flag: chain_' + w.identities[0].id + '_childhood_1\n';
  md += '├── 少年①（14-18岁）<- requiredFlags: [chain_' + w.identities[0].id + '_childhood_0]\n';
  md += '│   └── chainPriority: 1（优先触发）\n';
  md += '│   └── 设置 flag: chain_' + w.identities[0].id + '_growth_0\n';
  md += '├── 少年②（19-24岁）<- requiredFlags: [chain_' + w.identities[0].id + '_growth_0]\n';
  md += '│   └── chainPriority: 1\n';
  md += '│   └── 设置 flag: chain_' + w.identities[0].id + '_growth_1\n';
  md += '├── 成年①（26-35岁）<- requiredFlags: [chain_' + w.identities[0].id + '_growth_0]\n';
  md += '│   └── chainPriority: 2（更高优先级）\n';
  md += '│   └── 设置 flag: chain_' + w.identities[0].id + '_adult_0\n';
  md += '├── 成年②（36-45岁）<- 含关键选择分支\n';
  md += '│   ├── 选择A：坚持' + w.identities[0].name + '之道（成功率50%）\n';
  md += '│   │   └── 成功：属性大增 / 失败：受伤但收获经验\n';
  md += '│   └── 选择B：另辟蹊径（成功率70%）\n';
  md += '│       └── 成功：找到新路 / 失败：迷失方向\n';
  md += '│   └── 设置 flag: chain_' + w.identities[0].id + '_adult_1\n';
  md += '├── 特殊剧情①（10-30岁）<- requiredFlags: [chain_' + w.identities[0].id + '_adult_0]\n';
  md += '│   └── chainPriority: 3（最高优先级）\n';
  md += '└── 特殊剧情②（40-70岁）<- 身份宿命高潮\n';
  md += '    └── chainPriority: 3\n';
  md += '```\n\n';

  md += '> 其余 ' + (w.identities.length - 1) + ' 个身份各有独立的 8 事件链，剧情方向和属性倾向各不相同。\n\n';
  md += '---\n\n';
});

const totalTemplates = Object.values(worldStats).reduce((s, w) => s + (w.total || 0), 0);
const totalChain = Object.values(worldStats).reduce((s, w) => s + (w.chainPriority || 0), 0);
const totalChoices = Object.values(worldStats).reduce((s, w) => s + (w.choices || 0), 0);

md += '## 六、全局统计\n\n';
md += '| 指标 | 数值 |\n';
md += '|------|------|\n';
md += '| 世界数量 | 5 |\n';
md += '| 每世界身份数 | ' + (worlds[0]?.identities.length || 0) + ' |\n';
md += '| 总身份数 | ' + (worlds.reduce((s, w) => s + w.identities.length, 0)) + ' |\n';
md += '| 总模板数 | ' + totalTemplates + ' |\n';
md += '| 预估实际事件数 | ~' + (totalTemplates * 4) + ' |\n';
md += '| 链式事件数 | ' + totalChain + ' |\n';
md += '| 含选择分支事件 | ' + totalChoices + ' |\n';
md += '| 结局数 | 150+ |\n';
md += '\n---\n\n';
md += '*文档自动生成。总计 5 世界、' + (worlds.reduce((s, w) => s + w.identities.length, 0)) + ' 种开局身份、' + totalTemplates + ' 个事件模板、~' + (totalTemplates * 4) + ' 条实际事件变体、' + totalChain + ' 个链式事件节点。*\n';

const outputPath = path.join(__dirname, '..', '事件树总览.md');
fs.writeFileSync(outputPath, md, 'utf-8');
console.log('事件树总览已更新: ' + outputPath);
console.log('总模板: ' + totalTemplates + ', 链式事件: ' + totalChain + ', 选择分支: ' + totalChoices);
