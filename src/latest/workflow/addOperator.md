# 标注操作配置 Schema 文档

operator作为Rosetta平台标注工具配置项存在，根据不同的operator type提供不同的
| 类型 | 描述 | 嵌套能力 | 典型使用场景 |
|----------------|----------------|-----------------|----------------|
| `Slot` | 单层标注项 | ❌ 不可嵌套 | 基础几何标注 |
| `Input` | 输入配置项 | ✅ 可嵌套选择项 | 参数设置 |
| `SlotChildren` | 多层嵌套标注组 | ✅ 可嵌套任意类型 | 复合标注任务 |

## 接口定义与说明

Slot（单层标注项）
属性 类型 描述
key string 唯一标识，格式为 ${uuid}
type "slot" 固定为 "slot"
label string 显示名称
slotSpecification.type "box3d" | "line3d" | "polygon3d" | "point3d" | "box2d" | "ellipse" | "polygon" | "point" 标注的具体类型

## Input（输入配置项）

属性 类型 描述
key string 唯一标识，格式为 ${uuid}
type "input" 固定为 "input"
label string 显示名称
inputSpecification.type "text" | "boolean" | "select" | "multiple-select" | "nested-select" | "multiple-nested-select" 输入的具体类型
inputSpecification.default string 默认值
inputSpecification.items InputItem[] 选项列表（仅 select 类型需要）
InputItem
属性 类型 描述
label string 选项显示名称
value string 选项值
children InputItem[] 子选项（仅嵌套类型需要）

## SlotChildren（嵌套标注组）

属性 类型 描述
key string 唯一标识，格式为 ${uuid}
type "slotChildren" 固定为 "slotChildren"
label string 显示名称
slotSpecification.imageSourceMapping string[] 关联子项的 key 列表
slotSpecification.type "slot" 固定为 "slot"
children (Slot | Input)[] 嵌套的操作项集合

## 嵌套结构可视化示例

plaintext
SlotChildren (根)
├─ Slot (key: box2d-[73c98])
│ └─ slotSpecification (type: box2d)
├─ Input (key: select-[7a8cb])
│ └─ inputSpecification (type: nested-select)
│ └─ items
│ ├─ label: 一级选项
│ └─ children
│ └─ label: 二级选项
└─ SlotChildren (key: group-[12345])
└─ children
├─ Slot (key: point3d-[67890])
└─ Input (key: boolean-[abcd])
