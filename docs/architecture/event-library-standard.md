# 事件库标准化架构设计

> 文档版本：v1.0
> 适用项目：转生模拟器 (Reincarnation Simulator)
> 目标：建立"即插即用"式世界扩展机制，使新增世界无需改动核心引擎代码

---

## 1. 设计目标

| 目标 | 说明 |
|------|------|
| **零侵入扩展** | 新增世界时，不修改 `src/engine/` 下任何已有文件 |
| **类型安全** | 保持 TypeScript 编译时类型检查，拒绝运行时类型错误 |
| **自动发现** | 使用 Vite 的 `import.meta.glob` 实现编译时自动扫描，无需手动注册 |
| **内容驱动** | 90% 的世界内容通过声明式 JSON 配置，仅特殊逻辑使用 TS |
| **向后兼容** | 现有 5 个世界在迁移期内继续正常工作 |

---

## 2. 标准化文件格式

### 2.1 世界模块目录结构

每个世界是一个自包含模块，目录结构如下：

```
src/worlds/{worldId}/
├── world.json          # 世界元数据（名称、描述、主题色等）
├── identities.json     # 身份配置（10个身份）
├── npcs.json           # NPC配置（6个NPC）
├── realms.json         # 境界/等级体系
├── stat-names.json     # 属性名称映射
├── events/
│   ├── index.ts        # 事件模块入口（可选，默认由工厂生成）
│   ├── common.json     # 通用生命周期事件（童年/成长/成年/老年/死亡）
│   ├── combat.json     # 战斗事件
│   ├── romance.json    # 情感事件
│   ├── cultivation.json # 修炼/提升事件
│   ├── exploration.json # 探索事件
│   ├── world-story.json # 世界主线事件
│   ├── hidden.json     # 隐藏事件
│   ├── major-choices.json # 重大抉择链
│   ├── trash-chain.json   # 废材逆袭链
│   └── identity-exclusives/ # 身份专属事件
│       ├── {identityId}-childhood.json
│       ├── {identityId}-growth.json
│       ├── {identityId}-adult.json
│       └── {identityId}-special.json
└── word-banks.json     # 词汇库（地点/人名/传说等占位符替换）
```

### 2.2 核心 JSON Schema

#### world.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["id", "name", "nameEn", "description", "themeColor", "version"],
  "properties": {
    "id": { "type": "string", "pattern": "^[a-z][a-z0-9-]*$" },
    "name": { "type": "string" },
    "nameEn": { "type": "string" },
    "description": { "type": "string" },
    "themeColor": { "type": "string", "pattern": "^#[0-9A-Fa-f]{6}$" },
    "version": { "type": "string", "default": "1.0.0" },
    "engineVersion": { "type": "string", "default": "1.0" },
    "features": {
      "type": "array",
      "items": {
        "enum": ["realm-system", "talent-system", "relationship-system", "mentor-system", "rival-system", "romance-system", "combat-system"]
      }
    }
  }
}
```

#### identities.json

```json
{
  "type": "array",
  "minItems": 10,
  "maxItems": 10,
  "items": {
    "type": "object",
    "required": ["id", "name", "description", "baseStats", "spawnWeight"],
    "properties": {
      "id": { "type": "string" },
      "name": { "type": "string" },
      "description": { "type": "string" },
      "baseStats": {
        "type": "object",
        "properties": {
          "strength": { "type": "number", "minimum": 1, "maximum": 100 },
          "intelligence": { "type": "number", "minimum": 1, "maximum": 100 },
          "charisma": { "type": "number", "minimum": 1, "maximum": 100 },
          "luck": { "type": "number", "minimum": 1, "maximum": 100 },
          "health": { "type": "number", "minimum": 1, "maximum": 100 },
          "special": { "type": "number", "minimum": 1, "maximum": 100 }
        },
        "required": ["strength", "intelligence", "charisma", "luck", "health", "special"]
      },
      "exclusiveEvents": { "type": "array", "items": { "type": "string" } },
      "specialTrait": { "type": "string" },
      "spawnWeight": { "type": "number", "minimum": 1 }
    }
  }
}
```

#### events/*.json 通用结构

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "required": ["id", "category", "minAge", "maxAge", "templates", "probability"],
    "properties": {
      "id": { "type": "string" },
      "category": {
        "enum": ["childhood", "growth", "adult", "elder", "combat", "romance", "cultivation", "exploration", "world_story", "identity_exclusive", "hidden", "death", "major_choice", "trash_chain"]
      },
      "minAge": { "type": "integer", "minimum": 0, "maximum": 120 },
      "maxAge": { "type": "integer", "minimum": 0, "maximum": 120 },
      "templates": { "type": "array", "items": { "type": "string" }, "minItems": 1 },
      "choices": {
        "type": "array",
        "items": {
          "type": "object",
          "required": ["text"],
          "properties": {
            "text": { "type": "string" },
            "successText": { "type": "string" },
            "failText": { "type": "string" },
            "successRate": { "type": "number", "minimum": 0, "maximum": 1 },
            "effects": { "type": "object" },
            "failEffects": { "type": "object" },
            "flags": { "type": "array", "items": { "type": "string" } },
            "failFlags": { "type": "array", "items": { "type": "string" } },
            "requiredFlags": { "type": "array", "items": { "type": "string" } }
          }
        }
      },
      "effects": { "type": "object" },
      "conditions": { "type": "array" },
      "requiredFlags": { "type": "array", "items": { "type": "string" } },
      "flags": { "type": "array", "items": { "type": "string" } },
      "probability": { "type": "number", "minimum": 0, "maximum": 1 },
      "identityExclusive": { "type": "string" },
      "talentExclusive": { "type": "string" },
      "chainPriority": { "type": "integer", "minimum": 1 }
    }
  }
}
```

---

## 3. TypeScript 接口定义

### 3.1 新增接口（src/engine/events/types.ts 扩展）

```typescript
// ===== 世界模块接口 =====

/** 世界模块元数据 */
export interface WorldModule {
  id: string;
  meta: WorldMeta;
  identities: Identity[];
  npcs: NPC[];
  realms: RealmStage[];
  statNames: Record<string, string>;
  events: EventTemplate[];
  wordBanks: WordBanks;
}

/** 世界元数据（从 world.json 解析） */
export interface WorldMeta {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  themeColor: string;
  version: string;
  engineVersion: string;
  features: WorldFeature[];
}

export type WorldFeature =
  | 'realm-system'
  | 'talent-system'
  | 'relationship-system'
  | 'mentor-system'
  | 'rival-system'
  | 'romance-system'
  | 'combat-system';

/** 境界阶段（从 realms.json 解析） */
export interface RealmStage {
  stage: number;
  name: string;
  maxAgeBase: number;
}

/** 词汇库（从 word-banks.json 解析） */
export interface WordBanks {
  locations: string[];
  npcNames: string[];
  legends: string[];
  items: string[];
  organizations: string[];
  [key: string]: string[];
}

// ===== 模板工厂接口 =====

/** 模板工厂配置 */
export interface TemplateFactoryConfig {
  worldId: string;
  worldName: string;
  statNames: Record<string, string>;
  wordBanks: WordBanks;
  customTemplates?: Partial<Record<EventCategory, EventTemplate[]>>;
}

/** 模板生成器函数签名 */
export type TemplateGenerator = (config: TemplateFactoryConfig) => EventTemplate[];

/** 注册到模板工厂的生成器 */
export interface RegisteredGenerator {
  category: EventCategory;
  generator: TemplateGenerator;
  priority: number; // 优先级，高优先级覆盖低优先级
}

// ===== 运行时验证接口 =====

/** JSON 验证结果 */
export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  path: string;
  message: string;
  value?: unknown;
}

/** 世界模块加载结果 */
export interface WorldModuleLoadResult {
  worldId: string;
  success: boolean;
  module?: WorldModule;
  errors?: ValidationError[];
}
```

### 3.2 运行时类型守卫

```typescript
// src/engine/events/validation.ts

export function isValidEventTemplate(obj: unknown): obj is EventTemplate {
  if (!obj || typeof obj !== 'object') return false;
  const t = obj as Record<string, unknown>;
  
  return (
    typeof t.id === 'string' &&
    typeof t.category === 'string' &&
    typeof t.minAge === 'number' &&
    typeof t.maxAge === 'number' &&
    Array.isArray(t.templates) &&
    t.templates.length > 0 &&
    typeof t.probability === 'number'
  );
}

export function isValidWorldMeta(obj: unknown): obj is WorldMeta {
  if (!obj || typeof obj !== 'object') return false;
  const m = obj as Record<string, unknown>;
  
  return (
    typeof m.id === 'string' &&
    typeof m.name === 'string' &&
    typeof m.nameEn === 'string' &&
    typeof m.description === 'string' &&
    typeof m.themeColor === 'string'
  );
}
```

---

## 4. 注册机制

### 4.1 自动发现（推荐方案）

利用 Vite 的 `import.meta.glob` 在编译时扫描所有世界模块：

```typescript
// src/engine/world-loader.ts

/**
 * 世界模块自动加载器
 * 
 * 使用 Vite 的 import.meta.glob 在编译时扫描 src/worlds/*/ 目录
 * 无需手动维护注册表，新增世界只需创建目录即可
 */
export async function loadAllWorldModules(): Promise<Record<string, WorldModule>> {
  // 扫描所有 world.json 文件
  const worldMetaFiles = import.meta.glob<WorldMeta>('/src/worlds/*/world.json', {
    eager: true,
    import: 'default',
  });

  // 扫描所有事件 JSON 文件
  const eventFiles = import.meta.glob<EventTemplate[]>('/src/worlds/*/events/*.json', {
    eager: true,
    import: 'default',
  });

  // 扫描 identities.json
  const identityFiles = import.meta.glob<Identity[]>('/src/worlds/*/identities.json', {
    eager: true,
    import: 'default',
  });

  // 扫描 npcs.json
  const npcFiles = import.meta.glob<NPC[]>('/src/worlds/*/npcs.json', {
    eager: true,
    import: 'default',
  });

  // 扫描 realms.json
  const realmFiles = import.meta.glob<RealmStage[]>('/src/worlds/*/realms.json', {
    eager: true,
    import: 'default',
  });

  // 扫描 stat-names.json
  const statNameFiles = import.meta.glob<Record<string, string>>('/src/worlds/*/stat-names.json', {
    eager: true,
    import: 'default',
  });

  // 扫描 word-banks.json
  const wordBankFiles = import.meta.glob<WordBanks>('/src/worlds/*/word-banks.json', {
    eager: true,
    import: 'default',
  });

  const worlds: Record<string, WorldModule> = {};

  for (const [path, meta] of Object.entries(worldMetaFiles)) {
    const worldId = path.split('/')[3]; // /src/worlds/{id}/world.json
    
    if (!isValidWorldMeta(meta)) {
      console.error(`[WorldLoader] 无效的世界元数据: ${worldId}`);
      continue;
    }

    // 收集该世界的事件
    const worldEvents: EventTemplate[] = [];
    for (const [eventPath, events] of Object.entries(eventFiles)) {
      if (eventPath.includes(`/worlds/${worldId}/events/`)) {
        if (Array.isArray(events)) {
          worldEvents.push(...events.filter(isValidEventTemplate));
        }
      }
    }

    // 使用模板工厂补全缺失的事件类别
    const factoryEvents = generateMissingTemplates({
      worldId,
      worldName: meta.name,
      statNames: statNameFiles[`/src/worlds/${worldId}/stat-names.json`] || {},
      wordBanks: wordBankFiles[`/src/worlds/${worldId}/word-banks.json`] || { locations: [], npcNames: [], legends: [], items: [], organizations: [] },
    });

    // 合并：自定义事件覆盖工厂默认事件
    const mergedEvents = mergeEvents(factoryEvents, worldEvents);

    worlds[worldId] = {
      id: worldId,
      meta,
      identities: identityFiles[`/src/worlds/${worldId}/identities.json`] || [],
      npcs: npcFiles[`/src/worlds/${worldId}/npcs.json`] || [],
      realms: realmFiles[`/src/worlds/${worldId}/realms.json`] || [],
      statNames: statNameFiles[`/src/worlds/${worldId}/stat-names.json`] || {},
      events: mergedEvents,
      wordBanks: wordBankFiles[`/src/worlds/${worldId}/word-banks.json`] || { locations: [], npcNames: [], legends: [], items: [], organizations: [] },
    };
  }

  return worlds;
}
```

### 4.2 手动注册（向后兼容）

在迁移期内，现有世界保留手动注册入口：

```typescript
// src/engine/world-loader.ts

/** 手动注册的世界模块（向后兼容） */
const manualWorldModules: Record<string, WorldModule> = {};

/**
 * 手动注册世界模块（用于向后兼容）
 * 新世界应使用自动发现机制
 */
export function registerWorldModule(worldId: string, module: WorldModule): void {
  manualWorldModules[worldId] = module;
}

/**
 * 获取所有世界（自动发现 + 手动注册）
 */
export function getAllWorlds(): Record<string, WorldModule> {
  // 自动发现的 worlds（在应用启动时加载）
  const autoWorlds = /* ... */;
  
  return {
    ...autoWorlds,
    ...manualWorldModules, // 手动注册的覆盖自动发现的
  };
}
```

---

## 5. 模板工厂

### 5.1 工厂架构

```typescript
// src/engine/events/template-factory.ts

/**
 * 事件模板工厂
 * 
 * 根据世界配置自动生成标准事件结构。
 * 世界只需提供：
 * 1. word-banks.json（词汇库）
 * 2. stat-names.json（属性名称）
 * 3. 可选：覆盖特定类别的事件 JSON
 * 
 * 工厂会自动生成所有缺失的标准事件类别
 */

class TemplateFactory {
  private generators = new Map<EventCategory, RegisteredGenerator[]>();

  register(category: EventCategory, generator: TemplateGenerator, priority = 0): void {
    const list = this.generators.get(category) || [];
    list.push({ category, generator, priority });
    list.sort((a, b) => b.priority - a.priority);
    this.generators.set(category, list);
  }

  generate(config: TemplateFactoryConfig): Record<EventCategory, EventTemplate[]> {
    const result: Partial<Record<EventCategory, EventTemplate[]>> = {};
    
    for (const [category, generators] of this.generators) {
      // 使用最高优先级的生成器
      if (generators.length > 0) {
        const templates = generators[0].generator(config);
        if (templates.length > 0) {
          result[category] = templates;
        }
      }
    }
    
    // 应用自定义模板覆盖
    if (config.customTemplates) {
      for (const [category, templates] of Object.entries(config.customTemplates)) {
        result[category as EventCategory] = templates;
      }
    }
    
    return result as Record<EventCategory, EventTemplate[]>;
  }
}

export const templateFactory = new TemplateFactory();
```

### 5.2 标准生成器注册

```typescript
// src/engine/events/generators/common-generators.ts

import { templateFactory } from '../template-factory';

// 童年事件生成器
templateFactory.register('childhood', (config) => [
  {
    id: `${config.worldId}-childhood-1`,
    category: 'childhood',
    minAge: 0,
    maxAge: 6,
    templates: [
      `你在{location}出生，家境普通，父母对你寄予厚望。`,
      `自幼在{location}长大，你的童年充满了欢声笑语。`,
    ],
    probability: 1.0,
  },
  // ... 更多童年事件
]);

// 成长事件生成器
templateFactory.register('growth', (config) => [
  {
    id: `${config.worldId}-growth-1`,
    category: 'growth',
    minAge: 7,
    maxAge: 14,
    templates: [
      `你开始在{location}学习基础技能，展现出过人的天赋。`,
      `一位来自{location}的导师发现了你的潜力。`,
    ],
    probability: 0.8,
  },
  // ... 更多成长事件
]);

// 战斗事件生成器
templateFactory.register('combat', (config) => [
  {
    id: `${config.worldId}-combat-1`,
    category: 'combat',
    minAge: 15,
    maxAge: 100,
    templates: [
      `你在{location}遭遇强敌，生死一线！`,
      `一场恶战在{location}爆发，你必须全力以赴。`,
    ],
    choices: [
      {
        text: '奋力一战',
        successText: '你凭借高超的技艺战胜了对手！',
        failText: '你力战不敌，身负重伤...',
        successRate: 0.6,
        effects: { strength: 2, health: -10 },
        failEffects: { health: -30 },
      },
    ],
    probability: 0.5,
  },
  // ... 更多战斗事件
]);

// 情感事件生成器
templateFactory.register('romance', (config) => [
  // ... 情感事件
]);

// 修炼/提升事件生成器
templateFactory.register('cultivation', (config) => [
  // ... 修炼事件
]);

// 探索事件生成器
templateFactory.register('exploration', (config) => [
  // ... 探索事件
]);

// 世界主线事件生成器
templateFactory.register('world_story', (config) => [
  // ... 世界主线事件
]);

// 隐藏事件生成器
templateFactory.register('hidden', (config) => [
  // ... 隐藏事件
]);

// 死亡事件生成器
templateFactory.register('death', (config) => [
  {
    id: `${config.worldId}-death-1`,
    category: 'death',
    minAge: 0,
    maxAge: 120,
    templates: [
      `你在{location}寿终正寝，享年{age}岁。`,
      `一场意外在{location}夺走了你的生命...`,
    ],
    probability: 1.0,
  },
]);
```

### 5.3 身份专属事件链生成器

```typescript
// src/engine/events/generators/identity-chain-generator.ts

import { templateFactory } from '../template-factory';

/**
 * 身份专属事件链生成器
 * 
 * 为每个身份自动生成 4 阶段生命周期事件链：
 * 1. 童年期（2个事件）→ 设置标志
 * 2. 成长期（2个事件）→ 检查标志，推进故事
 * 3. 成年期（2个事件 + 关键抉择）→ 决定命运分支
 * 4. 特殊期（2个事件）→ 专属高光时刻
 */
export function generateIdentityChain(
  worldId: string,
  identity: Identity,
  wordBanks: WordBanks
): EventTemplate[] {
  const { id: identityId, name, specialTrait } = identity;
  const events: EventTemplate[] = [];

  // 阶段 1: 童年期
  events.push(
    {
      id: `${worldId}-${identityId}-childhood-1`,
      category: 'identity_exclusive',
      minAge: 3,
      maxAge: 8,
      templates: [
        `作为${name}的后裔，你从小就展现出与众不同的${specialTrait}。`,
        `你的${specialTrait}在童年时期就已初露锋芒。`,
      ],
      flags: [`${identityId}-awakened`],
      probability: 1.0,
      identityExclusive: identityId,
    },
    {
      id: `${worldId}-${identityId}-childhood-2`,
      category: 'identity_exclusive',
      minAge: 6,
      maxAge: 12,
      templates: [
        `你在{location}接受特殊训练，${specialTrait}日益精进。`,
      ],
      requiredFlags: [`${identityId}-awakened`],
      flags: [`${identityId}-trained`],
      probability: 0.9,
      identityExclusive: identityId,
    }
  );

  // 阶段 2: 成长期
  events.push(
    {
      id: `${worldId}-${identityId}-growth-1`,
      category: 'identity_exclusive',
      minAge: 13,
      maxAge: 20,
      templates: [
        `你离开{location}，踏上了属于自己的道路。`,
      ],
      requiredFlags: [`${identityId}-trained`],
      flags: [`${identityId}-departed`],
      probability: 0.85,
      identityExclusive: identityId,
    },
    {
      id: `${worldId}-${identityId}-growth-2`,
      category: 'identity_exclusive',
      minAge: 15,
      maxAge: 25,
      templates: [
        `一位神秘导师出现在你面前，愿意指点你的${specialTrait}。`,
      ],
      requiredFlags: [`${identityId}-departed`],
      flags: [`${identityId}-mentored`],
      probability: 0.8,
      identityExclusive: identityId,
    }
  );

  // 阶段 3: 成年期（含关键抉择）
  events.push(
    {
      id: `${worldId}-${identityId}-adult-choice`,
      category: 'identity_exclusive',
      minAge: 20,
      maxAge: 40,
      templates: [
        `你面临人生的重大抉择：是追求极致的力量，还是守护身边之人？`,
      ],
      choices: [
        {
          text: '追求力量',
          successText: `你选择了孤独但强大的道路，${specialTrait}达到新境界。`,
          failText: '你过于急功近利，走火入魔...',
          successRate: 0.7,
          effects: { special: 10, strength: 5 },
          flags: [`${identityId}-power-path`],
        },
        {
          text: '守护之人',
          successText: `在羁绊中，你的${specialTrait}获得了前所未有的温暖力量。`,
          failText: '你的软弱让你失去了重要之人...',
          successRate: 0.8,
          effects: { charisma: 10, special: 5 },
          flags: [`${identityId}-bond-path`],
        },
      ],
      requiredFlags: [`${identityId}-mentored`],
      probability: 0.75,
      identityExclusive: identityId,
    }
  );

  // 阶段 4: 特殊期
  events.push(
    {
      id: `${worldId}-${identityId}-special-1`,
      category: 'identity_exclusive',
      minAge: 30,
      maxAge: 80,
      templates: [
        `你终于领悟了${specialTrait}的终极奥义，名震{location}！`,
      ],
      requiredFlags: [`${identityId}-power-path`, `${identityId}-bond-path`],
      flags: [`${identityId}-legend`],
      probability: 0.6,
      identityExclusive: identityId,
    }
  );

  return events;
}

// 注册到工厂
templateFactory.register('identity_exclusive', (config) => {
  // 此生成器需要运行时身份数据，由 WorldLoader 在加载后调用
  return [];
});
```

### 5.4 废材逆袭链生成器

```typescript
// src/engine/events/generators/trash-chain-generator.ts

/**
 * 废材逆袭事件链生成器
 * 
 * 所有世界共用的经典叙事结构：
 * - 被判定为"废物" → 遭受嘲讽 → 意外发现 → 秘密修炼 → 一鸣惊人
 * - 包含 8-10 个链式事件，2 个关键抉择点
 */
export function generateTrashChain(
  worldId: string,
  worldName: string,
  statNames: Record<string, string>,
  wordBanks: WordBanks
): EventTemplate[] {
  return [
    {
      id: `${worldId}-trash-1`,
      category: 'trash_chain',
      minAge: 8,
      maxAge: 14,
      templates: [
        `测试结果显示你是百年难遇的废材，${statNames.special || '资质'}近乎为零。`,
        `所有人都摇头叹息：这孩子怕是一辈子都难有作为。`,
      ],
      flags: [`${worldId}-trash-talent`],
      probability: 0.3,
    },
    {
      id: `${worldId}-trash-2`,
      category: 'trash_chain',
      minAge: 10,
      maxAge: 16,
      templates: [
        `你在{location}受尽白眼，连最基础的修炼都无法入门。`,
      ],
      requiredFlags: [`${worldId}-trash-talent`],
      flags: [`${worldId}-bullied`],
      probability: 1.0,
      chainPriority: 1,
    },
    // ... 更多链式事件
    {
      id: `${worldId}-trash-choice-1`,
      category: 'trash_chain',
      minAge: 15,
      maxAge: 25,
      templates: [
        `你在{location}偶然发现了一处古老遗迹，里面似乎藏着改变命运的秘密。`,
      ],
      choices: [
        {
          text: '冒险进入',
          successText: '你获得了失传已久的秘法！',
          failText: '遗迹中机关重重，你险些丧命...',
          successRate: 0.5,
          effects: { special: 15 },
          flags: [`${worldId}-secret-method`],
        },
        {
          text: '谨慎观察',
          successText: '你发现了一条安全的通道，获得了部分传承。',
          failText: '你犹豫太久，遗迹入口坍塌了。',
          successRate: 0.8,
          effects: { special: 5, intelligence: 3 },
          flags: [`${worldId}-partial-method`],
        },
      ],
      requiredFlags: [`${worldId}-bullied`],
      probability: 0.9,
      chainPriority: 2,
    },
    // ... 最终逆袭事件
  ];
}
```

---

## 6. 向后兼容

### 6.1 过渡期策略（3 阶段）

| 阶段 | 时间 | 目标 |
|------|------|------|
| **共存期** | 1-2 周 | 新系统上线，旧系统继续运行。新增世界使用新格式，旧世界保持原样。 |
| **迁移期** | 2-4 周 | 逐个将旧世界迁移到新格式。每迁移一个，通过 `registerWorldModule` 注册。 |
| **废弃期** | 4 周后 | 移除 `worlds.ts` 中的硬编码数据，完全依赖自动发现。 |

### 6.2 旧世界适配器

```typescript
// src/engine/worlds-adapter.ts

/**
 * 旧世界适配器
 * 
 * 将现有 5 个世界的硬编码数据转换为新的 WorldModule 格式
 */
import { cultivationTemplates } from './events/cultivationTemplates';
import { magicTemplates } from './events/magicTemplates';
import { scifiTemplates } from './events/scifiTemplates';
import { apocalypseTemplates } from './events/apocalypseTemplates';
import { wuxiaTemplates } from './events/wuxiaTemplates';
import { WORLDS, WORLD_REALM_TABLES } from './worlds';

export function adaptLegacyWorlds(): Record<string, WorldModule> {
  const legacyWorlds: Record<string, WorldModule> = {};

  for (const world of WORLDS) {
    const worldId = world.id;
    
    // 获取该世界的事件模板
    let events: EventTemplate[] = [];
    switch (worldId) {
      case 'cultivation': events = cultivationTemplates; break;
      case 'magic': events = magicTemplates; break;
      case 'scifi': events = scifiTemplates; break;
      case 'apocalypse': events = apocalypseTemplates; break;
      case 'wuxia': events = wuxiaTemplates; break;
    }

    legacyWorlds[worldId] = {
      id: worldId,
      meta: {
        id: worldId,
        name: world.name,
        nameEn: world.nameEn,
        description: world.description,
        themeColor: world.themeColor,
        version: '1.0.0',
        engineVersion: '1.0',
        features: ['realm-system', 'talent-system', 'relationship-system'],
      },
      identities: world.identities,
      npcs: world.npcs,
      realms: WORLD_REALM_TABLES[worldId] || [],
      statNames: world.statNames,
      events,
      wordBanks: { locations: [], npcNames: [], legends: [], items: [], organizations: [] },
    };
  }

  return legacyWorlds;
}
```

### 6.3 事件引擎兼容层

```typescript
// src/engine/events/index.ts

/**
 * 获取可用事件（兼容层）
 * 
 * 同时支持旧格式和新格式的世界模块
 */
export function getAvailableEvents(
  worldId: string,
  age: number,
  stats: Stats,
  flags: string[],
  identityId: string,
  talentLevel: number
): GameEvent[] {
  // 优先从新模块获取
  const worldModule = getWorldModule(worldId);
  
  if (worldModule) {
    // 新格式：从 worldModule.events 过滤
    return getAvailableEventsFromModule(worldModule, age, stats, flags, identityId, talentLevel);
  } else {
    // 旧格式：从 worldTemplates[worldId] 过滤（向后兼容）
    const templates = worldTemplates[worldId] || [];
    return getAvailableEventsFromTemplates(templates, age, stats, flags, identityId, talentLevel);
  }
}
```

---

## 7. 完整数据流图

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          编译时 (Vite 构建)                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   src/worlds/*/world.json ──┐                                          │
│   src/worlds/*/identities.json ──┐                                     │
│   src/worlds/*/npcs.json ────────┼──► import.meta.glob(eager: true)    │
│   src/worlds/*/realms.json ──────┤      ▼                              │
│   src/worlds/*/stat-names.json ──┤   [WorldLoader]                     │
│   src/worlds/*/word-banks.json ──┤      ▼                              │
│   src/worlds/*/events/*.json ────┘   [TemplateFactory]                 │
│                                         ▼                              │
│                                    WorldModule[]                        │
│                                         │                              │
└─────────────────────────────────────────┼──────────────────────────────┘
                                          │
                                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          运行时 (浏览器)                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   WorldModule[] ──► [EventEngine]                                       │
│                        │                                                │
│                        ├──► getAvailableEvents() ──► GameEvent[]       │
│                        │                                                │
│                        ├──► pickEvent() ──► GameEvent                   │
│                        │                                                │
│                        └──► processChoice() ──► EventEffects            │
│                                                                         │
│   [LegacyAdapter] ──► 旧世界数据 ──► 同上流程（兼容层）                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 8. 命名规范

| 类型 | 命名规则 | 示例 |
|------|----------|------|
| 世界 ID | 小写，连字符分隔 | `cultivation`, `magic-realm` |
| 事件 ID | `{worldId}-{category}-{序号}` | `cultivation-childhood-1` |
| 标志 (flag) | `{worldId}-{context}-{状态}` | `cultivation-trash-talent` |
| 身份 ID | 小写，描述性 | `reincarnator`, `noble`, `android` |
| NPC ID | `{类型}-{序号}` | `mentor-1`, `rival-2`, `romance-1` |
| 文件命名 | 小写，连字符分隔 | `world-story.json`, `trash-chain.json` |

---

## 9. 性能考量

1. **编译时加载**：`import.meta.glob({ eager: true })` 在构建时将 JSON 内联到 JS bundle 中，无运行时 HTTP 请求
2. **Tree Shaking**：未引用的世界模块事件不会被包含在最终 bundle 中
3. **懒加载优化**：未来可考虑 `eager: false` + 按世界动态加载，减少首屏体积
4. **JSON 体积**：建议单个事件文件不超过 100KB，总世界数据不超过 2MB

---

## 10. 附录：参考实现

### 10.1 最小世界示例

```json
// src/worlds/demo/world.json
{
  "id": "demo",
  "name": "演示世界",
  "nameEn": "Demo World",
  "description": "一个用于演示标准化事件库的最小世界",
  "themeColor": "#FF6B6B",
  "version": "1.0.0",
  "engineVersion": "1.0",
  "features": ["realm-system", "talent-system"]
}

// src/worlds/demo/stat-names.json
{
  "strength": "力量",
  "intelligence": "智慧",
  "charisma": "魅力",
  "luck": "运气",
  "health": "生命",
  "special": "特殊"
}

// src/worlds/demo/word-banks.json
{
  "locations": ["新手村", "迷雾森林", "古代遗迹", "王都"],
  "npcNames": ["艾琳", "雷恩", "索菲亚", "格雷"],
  "legends": ["远古之神", "失落帝国", "星空传说"],
  "items": ["铁剑", "魔法卷轴", "生命药水"],
  "organizations": ["冒险者公会", "皇家骑士团"]
}
```

### 10.2 运行时验证示例

```typescript
// 在应用启动时验证所有世界模块
import { loadAllWorldModules } from './engine/world-loader';

async function initializeGame() {
  const worlds = await loadAllWorldModules();
  
  for (const [worldId, module] of Object.entries(worlds)) {
    console.log(`[Init] 加载世界: ${module.meta.name} (${worldId})`);
    console.log(`         身份: ${module.identities.length}`);
    console.log(`         NPC: ${module.npcs.length}`);
    console.log(`         事件: ${module.events.length}`);
    console.log(`         境界: ${module.realms.length}`);
  }
  
  // 存储到全局状态
  gameState.worlds = worlds;
}
```
