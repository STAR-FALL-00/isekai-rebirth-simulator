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
    const themeMatch = raw.match(/themeColor: '([^']+)'/);
    if (!idMatch || !nameMatch) return;
    const idBlock = raw.split('identities: [')[1]?.split('npcs:')[0];
    if (!idBlock) return;
    const identities = [...idBlock.matchAll(/id: '([^']+)',\s*\n\s*name: '([^']+)'/g)].map(m => ({ id: m[1], name: m[2] }));
    const statBlock = raw.split('statNames:')[1]?.split('identities:')[0];
    const statNames = {};
    if (statBlock) {
      const matches = [...statBlock.matchAll(/(\w+): '([^']+)'/g)];
      matches.forEach(m => statNames[m[1]] = m[2]);
    }
    worlds.push({ id: idMatch[1], name: nameMatch[1], themeColor: themeMatch?.[1] ?? '#2DD4A0', identities, statNames });
  });
  return worlds;
}

const worlds = extractWorlds(worldsCode);

function parseTemplates(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const templates = [];
  const blocks = content.split(/  \{\s*\n    id: '/g).slice(1);
  blocks.forEach(block => {
    const idMatch = block.match(/^([^']+)'/);
    const catMatch = block.match(/category: '([^']+)'/);
    const probMatch = block.match(/probability: ([0-9.]+)/);
    const minAgeMatch = block.match(/minAge: (\d+)/);
    const maxAgeMatch = block.match(/maxAge: (\d+)/);
    const ieMatch = block.match(/identityExclusive: '([^']+)'/);
    const teMatch = block.match(/talentExclusive: '([^']+)'/);
    const chainMatch = block.match(/chainPriority: (\d+)/);
    const hasChoices = block.includes('choices:');
    if (!idMatch || !catMatch || !probMatch) return;
    templates.push({
      id: idMatch[1],
      category: catMatch[1],
      probability: parseFloat(probMatch[1]),
      minAge: parseInt(minAgeMatch?.[1] || '0'),
      maxAge: parseInt(maxAgeMatch?.[1] || '0'),
      identityExclusive: ieMatch?.[1],
      talentExclusive: teMatch?.[1],
      chainPriority: chainMatch ? parseInt(chainMatch[1]) : 0,
      hasChoices,
    });
  });
  return templates;
}

function getRarity(prob) {
  if (prob <= 0.10) return { level: 'legendary', label: '传说', color: '#FFD700', bg: '#FFF8E1' };
  if (prob <= 0.25) return { level: 'epic', label: '史诗', color: '#9B6BFF', bg: '#F3E8FF' };
  if (prob <= 0.50) return { level: 'rare', label: '稀有', color: '#4ECDC4', bg: '#E0F7FA' };
  if (prob <= 0.90) return { level: 'common', label: '普通', color: '#95A5A6', bg: '#F5F5F5' };
  return { level: 'trash', label: '废材专属', color: '#E74C3C', bg: '#FFEBEE' };
}

const eventDir = path.join(__dirname, '..', 'src', 'engine', 'events');

const worldData = {};
worlds.forEach(w => {
  const file = path.join(eventDir, w.id + 'Templates.ts');
  if (fs.existsSync(file)) {
    worldData[w.id] = parseTemplates(file);
  }
});

function buildWorldSection(w) {
  const templates = worldData[w.id] || [];
  const stats = {};
  const categories = ['childhood','growth','adult','elder','combat','romance','cultivation','exploration','world_story','identity_exclusive','hidden','death','trash_exclusive'];
  categories.forEach(c => stats[c] = []);
  let chainCount = 0, choiceCount = 0;

  templates.forEach(t => {
    if (stats[t.category]) stats[t.category].push(t);
    if (t.chainPriority > 0) chainCount++;
    if (t.hasChoices) choiceCount++;
  });

  const rarityCounts = { legendary: 0, epic: 0, rare: 0, common: 0, trash: 0 };
  templates.forEach(t => { rarityCounts[getRarity(t.probability).level]++; });

  const total = templates.length;

  let html = `<section class="world-section" id="world-${w.id}" style="display:none;">`;
  html += `<div class="world-header" style="border-left-color:${w.themeColor}">`;
  html += `<h2 style="color:${w.themeColor}">${w.name}</h2>`;
  html += `<div class="stat-names">`;
  Object.entries(w.statNames).forEach(([k, v]) => {
    html += `<span class="stat-tag">${v}</span>`;
  });
  html += `</div></div>`;

  // Identities
  html += `<div class="card"><h3>开局身份（${w.identities.length}种）</h3><div class="identity-grid">`;
  w.identities.forEach((id, i) => {
    html += `<div class="identity-item"><span class="identity-num">${i+1}</span><span class="identity-name">${id.name}</span><code>${id.id}</code></div>`;
  });
  html += `</div></div>`;

  // Rarity distribution
  html += `<div class="card"><h3>事件稀有度分布（${total}个模板）</h3>`;
  html += `<div class="rarity-bars">`;
  [
    { key: 'legendary', label: '传说', desc: '≤10%', color: '#FFD700' },
    { key: 'epic', label: '史诗', desc: '10%-25%', color: '#9B6BFF' },
    { key: 'rare', label: '稀有', desc: '25%-50%', color: '#4ECDC4' },
    { key: 'common', label: '普通', desc: '50%-90%', color: '#95A5A6' },
    { key: 'trash', label: '废材专属', desc: '仅限废材天赋', color: '#E74C3C' },
  ].forEach(r => {
    const count = rarityCounts[r.key] || 0;
    const pct = total > 0 ? (count / total * 100).toFixed(1) : 0;
    html += `<div class="rarity-bar">`;
    html += `<div class="rarity-info"><span class="rarity-dot" style="background:${r.color}"></span><span class="rarity-label">${r.label}</span><span class="rarity-desc">${r.desc}</span><span class="rarity-count">${count}</span></div>`;
    html += `<div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${r.color}"></div></div>`;
    html += `</div>`;
  });
  html += `</div></div>`;

  // Category breakdown
  html += `<div class="card"><h3>事件类别分布</h3><div class="category-grid">`;
  const catLabels = {
    childhood: '童年期', growth: '少年期', adult: '成年期', elder: '老年期',
    combat: '战斗', romance: '情缘', cultivation: '修炼', exploration: '探索',
    world_story: '世界剧情', identity_exclusive: '身份专属', hidden: '隐藏事件', death: '死亡', trash_exclusive: '废材逆袭'
  };
  categories.forEach(c => {
    const items = stats[c] || [];
    if (items.length === 0) return;
    const avgProb = items.reduce((s, t) => s + t.probability, 0) / items.length;
    const r = getRarity(avgProb);
    html += `<div class="category-item">`;
    html += `<div class="cat-header"><span class="cat-name">${catLabels[c]}</span><span class="cat-count">${items.length}</span></div>`;
    html += `<div class="cat-prob">平均概率: ${(avgProb*100).toFixed(1)}% <span class="cat-rarity" style="background:${r.bg};color:${r.color}">${r.label}</span></div>`;
    html += `<div class="cat-ages">年龄: ${Math.min(...items.map(i=>i.minAge))}-${Math.max(...items.map(i=>i.maxAge))}岁</div>`;
    html += `</div>`;
  });
  html += `</div></div>`;

  // Event tree by age
  html += `<div class="card"><h3>事件树（按年龄段）</h3>`;
  const ageGroups = [
    { name: '童年期', min: 0, max: 12, cats: ['childhood','trash_exclusive'] },
    { name: '少年期', min: 13, max: 25, cats: ['growth','combat','romance','cultivation','exploration','trash_exclusive'] },
    { name: '成年期', min: 26, max: 50, cats: ['adult','combat','romance','cultivation','exploration','world_story','trash_exclusive'] },
    { name: '老年期', min: 51, max: 999, cats: ['elder','cultivation','exploration','world_story','hidden','death','trash_exclusive'] },
  ];
  ageGroups.forEach(g => {
    const items = templates.filter(t => g.cats.includes(t.category) && t.maxAge >= g.min && t.minAge <= g.max && !t.identityExclusive);
    const ieItems = templates.filter(t => t.identityExclusive && t.category === 'identity_exclusive' && t.maxAge >= g.min && t.minAge <= g.max);
    html += `<div class="age-group">`;
    html += `<div class="age-header" onclick="toggleGroup(this)"><span class="age-name">${g.name}（${g.min}-${g.max === 999 ? '∞' : g.max}岁）</span><span class="age-count">通用${items.length} + 身份专属${ieItems.length / 10}种身份</span><span class="toggle-icon">▼</span></div>`;
    html += `<div class="age-content">`;
    if (items.length > 0) {
      html += `<div class="event-list">`;
      items.sort((a,b) => a.probability - b.probability).forEach(t => {
        const r = getRarity(t.probability);
        const choiceMark = t.hasChoices ? ' ⚡' : '';
        html += `<div class="event-item" style="border-left-color:${r.color}"><span class="event-rarity" style="background:${r.bg};color:${r.color}">${r.label}</span><span class="event-id">${t.id}</span><span class="event-prob">${(t.probability*100).toFixed(1)}%</span><span class="event-age">${t.minAge}-${t.maxAge}岁</span>${choiceMark}</div>`;
      });
      html += `</div>`;
    }
    html += `</div></div>`;
  });
  html += `</div>`;

  // Identity chains
  html += `<div class="card"><h3>身份专属事件链</h3>`;
  w.identities.forEach(id => {
    const idTemplates = templates.filter(t => t.identityExclusive === id.id);
    idTemplates.sort((a,b) => (a.chainPriority||0) - (b.chainPriority||0) || a.minAge - b.minAge);
    html += `<div class="chain-group">`;
    html += `<div class="chain-header" onclick="toggleGroup(this)"><span class="chain-name">${id.name}</span><span class="chain-count">${idTemplates.length}个事件</span><span class="toggle-icon">▼</span></div>`;
    html += `<div class="chain-content">`;
    html += `<div class="chain-flow">`;
    idTemplates.forEach((t, i) => {
      const r = getRarity(t.probability);
      html += `<div class="chain-node" style="border-color:${r.color}">`;
      html += `<div class="chain-node-title">${t.id}</div>`;
      html += `<div class="chain-node-meta"><span class="chain-rarity" style="background:${r.bg};color:${r.color}">${r.label}</span> ${t.minAge}-${t.maxAge}岁 ${t.chainPriority ? `P${t.chainPriority}` : ''}</div>`;
      html += `</div>`;
      if (i < idTemplates.length - 1) html += `<div class="chain-arrow">→</div>`;
    });
    html += `</div></div></div>`;
  });
  html += `</div>`;

  // Trash comeback chain
  const trashTemplates = templates.filter(t => t.talentExclusive === 'trash');
  if (trashTemplates.length > 0) {
    html += `<div class="card trash-card"><h3>🔥 废材逆袭事件链（${trashTemplates.length}个事件）</h3>`;
    html += `<div class="trash-chain">`;
    trashTemplates.sort((a,b) => a.minAge - b.minAge).forEach((t, i) => {
      const r = getRarity(t.probability);
      html += `<div class="trash-node">`;
      html += `<div class="trash-step">Step ${i+1}</div>`;
      html += `<div class="trash-id">${t.id}</div>`;
      html += `<div class="trash-meta">${t.minAge}-${t.maxAge}岁 · ${(t.probability*100).toFixed(0)}% · ${t.chainPriority ? `优先级${t.chainPriority}` : '常规'}</div>`;
      if (t.hasChoices) html += `<div class="trash-choice">⚡ 含关键选择</div>`;
      html += `</div>`;
      if (i < trashTemplates.length - 1) html += `<div class="trash-arrow">↓</div>`;
    });
    html += `</div></div>`;
  }

  html += `</section>`;
  return html;
}

// Build HTML
let html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>异世界转生模拟器 — 交互式事件树总览</title>
<style>
:root { --bg: #0f172a; --card: #1e293b; --text: #e2e8f0; --muted: #94a3b8; --border: #334155; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }
.container { max-width: 1200px; margin: 0 auto; padding: 24px; }
header { text-align: center; padding: 40px 0 30px; }
header h1 { font-size: 2rem; background: linear-gradient(90deg, #2DD4A0, #9B6BFF, #00D4FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px; }
header p { color: var(--muted); font-size: 0.95rem; }

/* Tabs */
.tabs { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px; }
.tab { padding: 10px 20px; border-radius: 12px; background: var(--card); border: 1px solid var(--border); color: var(--muted); cursor: pointer; transition: all 0.2s; font-weight: 600; }
.tab:hover { border-color: #475569; color: var(--text); }
.tab.active { background: linear-gradient(135deg, #2DD4A020, #9B6BFF20); border-color: #2DD4A0; color: #2DD4A0; }

/* Overview */
.overview { background: var(--card); border-radius: 16px; padding: 24px; margin-bottom: 24px; border: 1px solid var(--border); }
.overview h2 { font-size: 1.2rem; margin-bottom: 16px; }
.overview-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; }
.overview-item { background: #0f172a; border-radius: 12px; padding: 16px; text-align: center; border: 1px solid var(--border); }
.overview-num { font-size: 1.8rem; font-weight: 800; color: #2DD4A0; }
.overview-label { font-size: 0.85rem; color: var(--muted); margin-top: 4px; }

/* Talent table */
.talent-table { width: 100%; border-collapse: collapse; margin-top: 12px; }
.talent-table th, .talent-table td { padding: 10px 12px; text-align: left; border-bottom: 1px solid var(--border); font-size: 0.9rem; }
.talent-table th { color: var(--muted); font-weight: 600; font-size: 0.8rem; text-transform: uppercase; }
.talent-badge { display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; }

/* World section */
.world-header { padding: 20px 24px; border-left: 4px solid; background: var(--card); border-radius: 0 16px 16px 0; margin-bottom: 20px; }
.world-header h2 { font-size: 1.5rem; margin-bottom: 8px; }
.stat-names { display: flex; gap: 8px; flex-wrap: wrap; }
.stat-tag { background: #0f172a; padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; color: var(--muted); border: 1px solid var(--border); }

.card { background: var(--card); border-radius: 16px; padding: 24px; margin-bottom: 20px; border: 1px solid var(--border); }
.card h3 { font-size: 1.1rem; margin-bottom: 16px; color: var(--text); }

.identity-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; }
.identity-item { display: flex; align-items: center; gap: 10px; background: #0f172a; padding: 10px 14px; border-radius: 10px; border: 1px solid var(--border); }
.identity-num { width: 24px; height: 24px; border-radius: 50%; background: #2DD4A020; color: #2DD4A0; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; }
.identity-name { flex: 1; font-size: 0.9rem; }
.identity-item code { font-size: 0.7rem; color: var(--muted); background: #0f172a; padding: 2px 6px; border-radius: 4px; }

.rarity-bars { display: flex; flex-direction: column; gap: 12px; }
.rarity-info { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
.rarity-dot { width: 10px; height: 10px; border-radius: 50%; }
.rarity-label { font-weight: 700; font-size: 0.9rem; }
.rarity-desc { color: var(--muted); font-size: 0.8rem; flex: 1; }
.rarity-count { font-weight: 800; font-size: 1rem; }
.bar-track { height: 8px; background: #0f172a; border-radius: 4px; overflow: hidden; }
.bar-fill { height: 100%; border-radius: 4px; transition: width 0.6s ease; }

.category-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
.category-item { background: #0f172a; padding: 14px; border-radius: 12px; border: 1px solid var(--border); }
.cat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.cat-name { font-weight: 600; font-size: 0.9rem; }
.cat-count { background: #2DD4A020; color: #2DD4A0; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; }
.cat-prob, .cat-ages { font-size: 0.8rem; color: var(--muted); }
.cat-rarity { display: inline-block; padding: 1px 6px; border-radius: 4px; font-size: 0.7rem; margin-left: 4px; }

.age-group { margin-bottom: 12px; }
.age-header { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #0f172a; border-radius: 10px; cursor: pointer; border: 1px solid var(--border); transition: all 0.2s; }
.age-header:hover { border-color: #475569; }
.age-name { font-weight: 600; }
.age-count { font-size: 0.8rem; color: var(--muted); }
.toggle-icon { transition: transform 0.2s; font-size: 0.8rem; color: var(--muted); }
.age-header.collapsed .toggle-icon { transform: rotate(-90deg); }
.age-content { padding: 12px 0 0 8px; }
.age-content.hidden { display: none; }

.event-list { display: flex; flex-direction: column; gap: 6px; }
.event-item { display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: #0f172a; border-radius: 8px; border-left: 3px solid; font-size: 0.85rem; }
.event-rarity { padding: 1px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 700; }
.event-id { font-family: monospace; color: var(--muted); font-size: 0.8rem; }
.event-prob { margin-left: auto; font-family: monospace; color: var(--muted); }
.event-age { font-size: 0.75rem; color: var(--muted); }

.chain-group { margin-bottom: 10px; }
.chain-header { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #0f172a; border-radius: 10px; cursor: pointer; border: 1px solid var(--border); }
.chain-header:hover { border-color: #475569; }
.chain-name { font-weight: 600; font-size: 0.9rem; }
.chain-count { font-size: 0.8rem; color: var(--muted); }
.chain-content { padding: 12px 0 0 8px; }
.chain-content.hidden { display: none; }
.chain-flow { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.chain-node { background: #0f172a; padding: 10px 14px; border-radius: 10px; border: 1px solid; min-width: 120px; }
.chain-node-title { font-family: monospace; font-size: 0.8rem; margin-bottom: 4px; }
.chain-node-meta { font-size: 0.75rem; color: var(--muted); }
.chain-rarity { padding: 1px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: 700; }
.chain-arrow { color: var(--muted); font-size: 1.2rem; }

.trash-card { border-color: #E74C3C40; }
.trash-chain { display: flex; flex-direction: column; gap: 8px; }
.trash-node { background: #0f172a; padding: 14px 18px; border-radius: 12px; border: 1px solid #E74C3C30; }
.trash-step { font-size: 0.75rem; color: #E74C3C; font-weight: 700; margin-bottom: 4px; }
.trash-id { font-family: monospace; font-size: 0.9rem; margin-bottom: 4px; }
.trash-meta { font-size: 0.8rem; color: var(--muted); }
.trash-choice { font-size: 0.8rem; color: #FFD700; margin-top: 4px; }
.trash-arrow { text-align: center; color: #E74C3C; font-size: 1.5rem; }

footer { text-align: center; padding: 40px 0; color: var(--muted); font-size: 0.85rem; }
</style>
</head>
<body>
<div class="container">
<header>
  <h1>异世界转生模拟器 — 交互式事件树总览</h1>
  <p>5 世界 · 50 种开局身份 · 分层稀有度概率 · 废材逆袭事件链 · 天赋系统</p>
</header>

<div class="overview">
  <h2>全局概览</h2>
  <div class="overview-grid">
    <div class="overview-item"><div class="overview-num">5</div><div class="overview-label">世界</div></div>
    <div class="overview-item"><div class="overview-num">50</div><div class="overview-label">开局身份</div></div>
    <div class="overview-item"><div class="overview-num">740</div><div class="overview-label">事件模板</div></div>
    <div class="overview-item"><div class="overview-num">~2,960</div><div class="overview-label">实际事件变体</div></div>
    <div class="overview-item"><div class="overview-num">320</div><div class="overview-label">链式事件</div></div>
    <div class="overview-item"><div class="overview-num">75</div><div class="overview-label">废材逆袭事件</div></div>
    <div class="overview-item"><div class="overview-num">60+</div><div class="overview-label">选择分支</div></div>
    <div class="overview-item"><div class="overview-num">6</div><div class="overview-label">天赋等级</div></div>
  </div>

  <h3 style="margin-top:24px;font-size:1rem;">天赋等级系统</h3>
  <table class="talent-table">
    <tr><th>等级</th><th>概率</th><th>修仙界</th><th>魔法大陆</th><th>属性影响</th></tr>
    <tr><td><span class="talent-badge" style="background:#FFF8E1;color:#B8860B">绝世 2%</span></td><td>2%</td><td>混沌灵根</td><td>元素之主</td><td>全属性+30</td></tr>
    <tr><td><span class="talent-badge" style="background:#FFEBEE;color:#C62828">天才 8%</span></td><td>8%</td><td>天灵根</td><td>魔法宠儿</td><td>主属性+20</td></tr>
    <tr><td><span class="talent-badge" style="background:#F3E8FF;color:#7B1FA2">良才 20%</span></td><td>20%</td><td>上品灵根</td><td>魔法亲和</td><td>主属性+10</td></tr>
    <tr><td><span class="talent-badge" style="background:#E0F7FA;color:#00695C">普通 35%</span></td><td>35%</td><td>中品灵根</td><td>魔法感知</td><td>无加成</td></tr>
    <tr><td><span class="talent-badge" style="background:#F5F5F5;color:#616161">平庸 25%</span></td><td>25%</td><td>下品灵根</td><td>魔法迟钝</td><td>主属性-5</td></tr>
    <tr><td><span class="talent-badge" style="background:#FFEBEE;color:#B71C1C">废材 10%</span></td><td>10%</td><td>无灵根</td><td>魔法绝缘</td><td>主属性-15</td></tr>
  </table>

  <h3 style="margin-top:24px;font-size:1rem;">稀有度分层规则</h3>
  <table class="talent-table">
    <tr><th>稀有度</th><th>概率范围</th><th>说明</th></tr>
    <tr><td><span class="talent-badge" style="background:#FFF8E1;color:#B8860B">传说</span></td><td>≤ 10%</td><td>出生异象、顿悟大道、跨级战斗、三生石缘。极小概率，一生难遇。</td></tr>
    <tr><td><span class="talent-badge" style="background:#F3E8FF;color:#7B1FA2">史诗</span></td><td>10% - 25%</td><td>天赋觉醒、重大突破、开宗立派。低概率，人生转折点。</td></tr>
    <tr><td><span class="talent-badge" style="background:#E0F7FA;color:#00695C">稀有</span></td><td>25% - 50%</td><td>小有奇遇、外出历练、势力扩张。中等概率，小惊喜。</td></tr>
    <tr><td><span class="talent-badge" style="background:#F5F5F5;color:#616161">普通</span></td><td>50% - 90%</td><td>日常修炼、平淡一年。高概率，基础积累。</td></tr>
    <tr><td><span class="talent-badge" style="background:#FFEBEE;color:#B71C1C">废材专属</span></td><td>仅限废材天赋</td><td>废材童年→暗中积累→崭露头角→逆袭关键→传奇延续。独立剧情线。</td></tr>
  </table>
</div>

<div class="tabs">
  ${worlds.map((w, i) => `<button class="tab ${i===0?'active':''}" onclick="switchWorld('${w.id}', this)">${w.name}</button>`).join('\n  ')}
</div>

${worlds.map(w => buildWorldSection(w)).join('\n')}

<footer>
  异世界转生模拟器 v2.0 · 事件树总览 · 自动生成
</footer>
</div>

<script>
function switchWorld(id, btn) {
  document.querySelectorAll('.world-section').forEach(s => s.style.display = 'none');
  document.getElementById('world-' + id).style.display = 'block';
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}
function toggleGroup(header) {
  const content = header.nextElementSibling;
  header.classList.toggle('collapsed');
  content.classList.toggle('hidden');
}
// Show first world
document.getElementById('world-${worlds[0]?.id}').style.display = 'block';
</script>
</body>
</html>`;

const outputPath = path.join(__dirname, '..', '事件树总览.html');
fs.writeFileSync(outputPath, html, 'utf-8');
console.log('HTML事件树总览已生成: ' + outputPath);
