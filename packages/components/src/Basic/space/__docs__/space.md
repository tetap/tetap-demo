---
map:
  path: /components/
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

只在水平模式下生效。默认: `center`
<demo src="./align.vue"></demo>

## 自动换行

在水平模式下, 通过 `wrap` 属性来控制子元素是否自动换行。

<demo src="./wrap.vue"></demo>

<!-- <API src="../button.vue" lang="zh"></API> -->
