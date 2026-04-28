# 新增世界完整检查清单

> 使用本清单确保新增世界符合标准化事件库规范，无需修改核心引擎代码。

---

## 阶段一：准备工作（设计阶段）

### 1.1 世界概念设计

- [ ] 确定世界主题和核心玩法差异
- [ ] 确定世界名称（中文 + 英文）
- [ ] 确定主题色（HEX 格式，如 `#4A90D9`）
- [ ] 确定境界/等级体系名称（8 个阶段）
- [ ] 确定核心叙事差异（与现有 5 个世界的区别）

### 1.2 属性体系设计

- [ ] 确定 6 项基础属性的世界观映射
  - `strength` → ?
  - `intelligence` → ?
  - `charisma` → ?
  - `luck` → ?
  - `health` → ?
  - `special` → ?
- [ ] 确认属性名称在中文语境下的自然度

### 1.3 身份体系设计

- [ ] 设计 10 个可选身份
- [ ] 为每个身份确定：
  - [ ] 身份名称
  - [ ] 背景描述（50-100 字）
  - [ ] 基础属性分配（总和约 100-120 点）
  - [ ] 专属特性名称
  - [ ] 出现权重（影响随机选择概率）
- [ ] 确保至少 3 个身份有明显的叙事差异

### 1.4 NPC 体系设计

- [ ] 设计 6 个 NPC
- [ ] 确定 NPC 类型分布：
  - [ ] 导师型（mentor）：1-2 个
  - [ ] 对手型（rival）：1-2 个
  - [ ] 情感型（romance）：2-3 个
- [ ] 为每个 NPC 确定名称、性格、关联事件

---

## 阶段二：文件创建（数据文件）

### 2.1 创建世界目录

```bash
mkdir -p src/worlds/{worldId}/events/identity-exclusives
```

### 2.2 创建元数据文件

- [ ] `src/worlds/{worldId}/world.json`
  - [ ] 包含：id, name, nameEn, description, themeColor, version, engineVersion
  - [ ] id 使用小写 + 连字符格式（如 `cyberpunk-city`）
  - [ ] themeColor 为有效的 HEX 颜色码

- [ ] `src/worlds/{worldId}/stat-names.json`
  - [ ] 包含 6 项属性的中文映射

- [ ] `src/worlds/{worldId}/realms.json`
  - [ ] 包含 8 个境界阶段
  - [ ] 每个境界包含：stage, name, maxAgeBase

### 2.3 创建内容配置

- [ ] `src/worlds/{worldId}/identities.json`
  - [ ] 10 个身份对象数组
  - [ ] 每个身份符合 Identity JSON Schema

- [ ] `src/worlds/{worldId}/npcs.json`
  - [ ] 6 个 NPC 对象数组
  - [ ] 每个 NPC 包含：id, name, type, description

- [ ] `src/worlds/{worldId}/word-banks.json`
  - [ ] locations（地点）：至少 10 个
  - [ ] npcNames（人名）：至少 10 个
  - [ ] legends（传说）：至少 5 个
  - [ ] items（物品）：至少 10 个
  - [ ] organizations（组织）：至少 5 个

### 2.4 创建事件文件

#### 通用事件（如使用模板工厂，可跳过）

- [ ] `src/worlds/{worldId}/events/common.json`
  - [ ] 童年事件（5 个模板，age 0-6）
  - [ ] 成长事件（5 个模板，age 7-14）
  - [ ] 成年事件（3 个模板，age 15-30）
  - [ ] 老年事件（2-4 个模板，age 60+）

- [ ] `src/worlds/{worldId}/events/combat.json`
  - [ ] 战斗事件（6 个模板，含 choices）

- [ ] `src/worlds/{worldId}/events/romance.json`
  - [ ] 情感事件（6 个模板）

- [ ] `src/worlds/{worldId}/events/cultivation.json`
  - [ ] 修炼/提升事件（6 个模板）

- [ ] `src/worlds/{worldId}/events/exploration.json`
  - [ ] 探索事件（6 个模板）

- [ ] `src/worlds/{worldId}/events/world-story.json`
  - [ ] 世界主线事件（5 个模板）

- [ ] `src/worlds/{worldId}/events/hidden.json`
  - [ ] 隐藏事件（4 个模板，低概率）

- [ ] `src/worlds/{worldId}/events/death.json`
  - [ ] 死亡事件（5 个模板）

#### 特殊事件链

- [ ] `src/worlds/{worldId}/events/major-choices.json`
  - [ ] 重大抉择链（可选，参考 cultivation/magic 的自定义实现）
  - [ ] 或留空，使用系统默认的通用重大抉择

- [ ] `src/worlds/{worldId}/events/trash-chain.json`
  - [ ] 废材逆袭链（8-10 个链式事件）
  - [ ] 包含 2 个关键 choices
  - [ ] 使用 chainPriority 确保链式触发

#### 身份专属事件（10 个身份 × 4 阶段 = 最多 40 个文件）

- [ ] `src/worlds/{worldId}/events/identity-exclusives/{identityId}-childhood.json`
  - [ ] 每个身份 2 个童年事件
  - [ ] 设置初始标志

- [ ] `src/worlds/{worldId}/events/identity-exclusives/{identityId}-growth.json`
  - [ ] 每个身份 2 个成长事件
  - [ ] 检查前期标志，推进故事

- [ ] `src/worlds/{worldId}/events/identity-exclusives/{identityId}-adult.json`
  - [ ] 每个身份 2 个成年事件
  - [ ] 至少 1 个含 choices

- [ ] `src/worlds/{worldId}/events/identity-exclusives/{identityId}-special.json`
  - [ ] 每个身份 2 个特殊事件
  - [ ] 身份高光时刻

---

## 阶段三：可选自定义（高级）

### 3.1 自定义模板生成器

如果需要覆盖模板工厂的默认行为：

- [ ] 创建 `src/worlds/{worldId}/events/index.ts`
- [ ] 导入并注册自定义生成器：

```typescript
import { templateFactory } from '../../../engine/events/template-factory';

templateFactory.register('combat', (config) => {
  // 返回该世界特有的战斗事件
  return [...];
}, 100); // 高优先级覆盖默认生成器
```

### 3.2 自定义游戏逻辑

如果世界需要特殊机制（如科幻世界的"义体改造"系统）：

- [ ] 创建 `src/worlds/{worldId}/systems/` 目录
- [ ] 实现扩展接口：

```typescript
// src/worlds/{worldId}/systems/cyberware-system.ts
export interface CyberwareSystem {
  installCyberware(type: string): void;
  getCyberwareStats(): Partial<Stats>;
}
```

- [ ] 在 `src/hooks/useGame.ts` 中通过条件判断调用：
  - ⚠️ **注意**：这会轻微侵入核心代码，应尽量减少

---

## 阶段四：验证与测试

### 4.1 结构验证

- [ ] 所有 JSON 文件通过 Schema 验证
- [ ] 事件 ID 格式正确：`{worldId}-{category}-{序号}`
- [ ] 标志引用一致（无悬空 requiredFlags）
- [ ] 年龄范围不重叠（同类别事件）

### 4.2 内容验证

- [ ] 所有 `{location}`、`{npc}`、`{legend}` 占位符在 word-banks.json 中有对应条目
- [ ] 概率值在 0-1 范围内
- [ ] successRate 在 0-1 范围内
- [ ] choices 的 effects 不会导致负属性

### 4.3 运行时测试

- [ ] 世界列表中显示新世界
- [ ] 选择身份时正确加载身份描述
- [ ] 游戏过程中触发世界专属事件
- [ ] 身份专属事件链正常推进
- [ ] 废材逆袭链正常触发
- [ ] 结局计算包含新世界的结局条件
- [ ] 无控制台报错

### 4.4 叙事连贯性测试

- [ ] 事件文本风格与世界主题一致
- [ ] 无明显的跨世界术语混淆（如修仙术语出现在科幻世界）
- [ ] choices 的文本有实际叙事差异，而非单纯数值变化

---

## 阶段五：文档与交付

- [ ] 在 `docs/worlds/{worldId}.md` 添加世界设定文档
- [ ] 在 `docs/lore/{worldId}/` 添加背景故事
- [ ] 更新根目录 README，添加新世界到世界列表
- [ ] 运行 `npm run build` 确认无编译错误
- [ ] 运行 `npm run test` 确认所有测试通过（如有）

---

## 快速参考：最小可运行世界

如果希望快速验证架构，可以只创建以下 **5 个必需文件**：

1. `src/worlds/{worldId}/world.json` — 世界元数据
2. `src/worlds/{worldId}/identities.json` — 身份配置
3. `src/worlds/{worldId}/npcs.json` — NPC 配置
4. `src/worlds/{worldId}/stat-names.json` — 属性名称
5. `src/worlds/{worldId}/word-banks.json` — 词汇库

模板工厂会自动生成所有标准事件。之后可以逐步添加自定义事件覆盖默认行为。
