---
title: Space
subtitle: 间距
map:
  path: /components/
realPath: src\basic\space\__docs__\space.md
---

## 基础用法

<demo src="./basic.vue"></demo>

## 垂直排列

<demo src="./direction.vue"></demo>

## 自定义间距

默认: `8px`

通过调整 size 的值来控制间距的大小。传入 number 类型时，会默认使用 px 单位；

也可以传入 string 类型，比如 2rem 或 5vw 等带有单位的值。

多个方向时可以传入数组 ['8px', '10px'] or [8, 10]

<demo src="./size.vue"></demo>

## 对齐方式

通过调整 align 的值来设置子元素的对齐方式, 可选值为 `start`, `center` ,`end` ,`baseline`。

水平模式。默认: `center`
垂直模式。默认: ``
<demo src="./align.vue"></demo>

## 自动换行

在水平模式下, 通过 `wrap` 属性来控制子元素是否自动换行。

<demo src="./wrap.vue"></demo>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 间距方向	可选值为 | `vertical`\|`horizontal` | `horizontal` |
| size | 间距大小, 默认单位为 `px`，支持数组形式来分别设置横向和纵向间距 | Number, String, [Number,Number], [String,String] | `8px` |
| align | 设置子元素的对齐方式 | `start`\|`end`\|`center`\|`baseline` | - |
| wrap | 是否自动换行，仅适用于水平方向排列 | Boolean | `false` |
| fill | 是否让 `Space` 变为一个块级元素，填充整个父元素 | Boolean | `false` |

## Slots
| 名称 | 说明 |
| --- | --- |
| default | 间距组件内容 |

## 类型定义
``` ts
import type {
  SpaceAlignType,
  SpaceDirectionType,
  SpaceSizeType,
  SpacePropsType
} from '@tetap/components'
```
