# 世界开发标准 v2.0 — 批量生产规范

> 用于快速、标准化地添加新世界到转生模拟器。

---

## 一、命名规范

| 项目 | 规则 | 示例 |
|------|------|------|
| 世界ID | 小写，下划线分隔 | `doupo`, `dragon_raja`, `three_body`, `frieren` |
| 事件ID前缀 | `{worldId前2字母}_` | `dp_` (斗破), `dr_` (龙族), `tb_` (三体) |
| 文件名 | `{worldId}Templates.ts` | `doupoTemplates.ts`, `frierenTemplates.ts` |
| 境界表常量 | `{WORLD_ID}_REALMS` | `DOUPO_REALMS` |

---

## 二、世界基础配置清单

### 2.1 必填字段
```typescript
{
  id: string;           // 世界ID
  name: string;         // 中文名
  nameEn: string;       // 英文名
  description: string;  // 世界描述（50-100字）
  themeColor: string;   // HEX主题色，避免与现有世界重复
  statNames: {          // 6项属性中文映射
    strength: string;
    intelligence: string;
    charisma: string;
    luck: string;
    health: string;
    special: string;
  };
  identities: Identity[];  // 10个身份
  npcs: NPC[];            // 6个NPC (2 mentor + 2 rival + 2 romance)
}
```

### 2.2 主题色分配（已有）
| 世界 | 颜色 |
|------|------|
| cultivation | `#2DD4A0` |
| magic | `#9B6BFF` |
| scifi | `#3498DB` |
| apocalypse | `#E67E22` |
| wuxia | `#E74C3C` |
| floating_citadel | `#2ECC71` |
| **doupo** | `#FF6B35` (火焰橙) |
| **dragon_raja** | `#1E3A8A` (龙血蓝) |
| **three_body** | `#0F172A` (宇宙黑) |
| **frieren** | `#C084FC` (精灵紫) |
| **gundam_seed** | `#00B894` (seed绿) |
| **railgun** | `#F39C12` (电磁橙) |
| **fate** | `#C0392B` (深红) |
| **kaguya** | `#E91E63` (粉红) |

### 2.3 境界表（8阶段）
```typescript
export const XXX_REALMS = [
  { stage: 0, name: '阶段1', maxAgeBase: 100 },
  { stage: 1, name: '阶段2', maxAgeBase: 180 },
  { stage: 2, name: '阶段3', maxAgeBase: 300 },
  { stage: 3, name: '阶段4', maxAgeBase: 500 },
  { stage: 4, name: '阶段5', maxAgeBase: 800 },
  { stage: 5, name: '阶段6', maxAgeBase: 1200 },
  { stage: 6, name: '阶段7', maxAgeBase: 2000 },
  { stage: 7, name: '阶段8', maxAgeBase: 9999 },
];
```

### 2.4 身份设计（10个）
每个身份必须包含：
- `id`: 小写下划线
- `name`: 中文名
- `description`: 背景描述（30-50字）
- `baseStats`: 6项属性，总和100-120
- `exclusiveEvents`: 2个字符串标识
- `specialTrait`: 专属特质名称
- `spawnWeight`: 1-25

**身份类型建议**（至少覆盖）：
- 平民型 × 2-3（高权重）
- 贵族/精英型 × 2
- 特殊血统/异能型 × 2
- 异类/边缘型 × 2
- 天选者型 × 1-2（低权重）

### 2.5 NPC设计（6个）
| 类型 | 数量 | 职责 |
|------|------|------|
| mentor | 2 | 传授技能、指引道路 |
| rival | 2 | 制造冲突、提供挑战 |
| romance | 2 | 情感线、羁绊结局 |

每个NPC：
- `id`: 小写下划线
- `name`: 中文名
- `type`: 'mentor' | 'rival' | 'romance'
- `description`: 性格描述
- `avatar`: emoji
- `introEvent`: 首次相遇文本
- `maxRelationshipEvents`: [满好感事件文本]

---

## 三、事件模板规范

### 3.1 文件格式
```typescript
import type { EventTemplate } from './types';

export const xxxTemplates: EventTemplate[] = [
  // ... 事件数组
];
```

### 3.2 事件数量标准

| 类别 | 数量 | 年龄区间 | 必含choices |
|------|------|----------|:-----------:|
| 通用童年 | 5 | 0-10 | — |
| 通用成长 | 5 | 10-20 | — |
| 通用成年 | 3 | 20-35 | — |
| 通用老年 | 2 | 60+ | — |
| 战斗 | 6 | 15+ | ✅ |
| 恋爱/羁绊 | 6 | 15+ | ✅(3个) |
| 修炼/提升 | 6 | 10+ | — |
| 探索 | 6 | 10+ | — |
| 世界主线 | 5 | 20+ | — |
| 隐藏 | 4 | 15+ | — |
| 死亡 | 5 | 全年龄 | — |
| **身份专属** | **80** | 3-60 | ✅(成年) |
| **废材逆袭** | **10-12** | 8-50 | ✅(2个) |
| **重大抉择** | **4** | 15/30/45/60 | ✅ |
| **境界突破** | **21** | 18+ | ✅ |
| **合计** | **170±** | — | — |

### 3.3 ID前缀规则
- 通用事件: `{prefix}_ch_01`, `{prefix}_gr_01`, `{prefix}_combat_01`
- 身份事件: `{prefix}_{identityId}_childhood_0`
- 废材链: `{prefix}_trash_01`
- 抉择: `{prefix}_major_15`, `{prefix}_major_30`
- 突破: `{prefix}_realm_1`, `{prefix}_realm_1_steady`, `{prefix}_realm_1_retry`

### 3.4 文本规范
- 中文，贴合世界观风格
- 使用占位符: `{location}`, `{npc}`, `{legend}`, `{discovery}`, `{reaction}`
- 每个模板至少3个文本变体
- choices 必须包含 `successText`, `failText`, `effects`, `successRate`

---

## 四、注册清单

新建世界后，必须修改以下文件：

### 4.1 `src/engine/types.ts`
- [ ] 添加 `XXX_REALMS` 常量
- [ ] 在 `WORLD_REALM_TABLES` 中注册

### 4.2 `src/engine/worlds.ts`
- [ ] 在 `worlds` 数组中添加世界配置

### 4.3 `src/engine/events/index.ts`
- [ ] `import { xxxTemplates } from './xxxTemplates'`
- [ ] `worldTemplates[id] = xxxTemplates`
- [ ] `IDENTITY_ROMANCE_MAP[id] = { ... }`
- [ ] `wordBanks[id] = { location, npc, legend, discovery, reaction }`

### 4.4 `src/engine/items.ts`
- [ ] `calculateWorldWeights` 中 `baseWeights[id] = 1`
- [ ] 添加世界专属道具（至少3个）

### 4.5 `src/engine/achievements.ts`
- [ ] 添加世界专属成就（至少10个）

---

## 五、快速参考：批量开发工作流

```
Step 1: 确定世界核心参数（ID/境界/身份/NPC/主题色）
   ↓
Step 2: 修改 types.ts + worlds.ts（基础配置）
   ↓
Step 3: 生成事件模板文件（~170个模板）
   ↓
Step 4: 注册到 events/index.ts
   ↓
Step 5: 添加成就 + 道具
   ↓
Step 6: npm run build 验证
   ↓
Step 7: 提交推送
```

---

## 六、附录：当前世界列表

| ID | 中文名 | 主题 | 境界体系 |
|:---|:---|:---|:---|
| cultivation | 修仙界 | 修真长生 | 炼气→飞升 |
| magic | 魔法大陆 | 西幻魔法 | 学徒→虚空行者 |
| scifi | 科幻星际 | 星际探索 | 殖民者→星神 |
| apocalypse | 末日废土 | 末日生存 | 居民→永恒存在 |
| wuxia | 古代武侠 | 江湖恩怨 | 新秀→破碎虚空 |
| floating_citadel | 浮空要塞 | 千层巨塔(SAO) | 初学者→解放者 |
| doupo | 斗破苍穹 | 斗气修炼 | 斗之气→斗帝 |
| dragon_raja | 龙族 | 现代龙族 | 普通人→龙王级 |
| three_body | 三体 | 宇宙文明 | 平民→宇宙级存在 |
| frieren | 葬送的芙莉莲 | 魔法冒险 | 学徒→魔法之神 |
| gundam_seed | 高达SEED | 机甲战争 | 平民→和平缔造者 |
| railgun | 超电磁炮 | 学园都市 | 无能力者→系统外存在 |
| fate | Fate/stay night | 圣杯战争 | 普通人→抑止力 |
| kaguya | 辉夜大小姐 | 恋爱头脑战 | 学生→国家栋梁 |
