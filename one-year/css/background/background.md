## `background-color`：背景颜色
可以接收任何有效的`color`值

## `background-image`：背景图
默认情况下，大图不会缩小适应容器，小图则会平铺展开铺满容器。

**<font color="red">如果同时设置了背景色和背景图，那么背景图会盖在背景色上面</font>**

## `background-repeat`：控制背景平铺
- no-repeat — 不重复。
- repeat-x —水平重复。
- repeat-y —垂直重复。
- repeat — 在两个方向重复。

## `background-size`：设置背景图片大小
- cover：缩放背景图片以完全覆盖背景区，可能背景图片部分看不见
- contain：缩放背景图片以完全装入背景区，可能背景区部分空白
- 一个参数：图片的宽度，高度为隐式的`auto`
- 两个参数：宽高

## `background-position`：背景图定位
一般是两个参数：水平值 和 垂直值
可以使用`top`,`center`,`right`等等关键字

## 背景渐变
### 线性渐变  默认是从上到下
语法：`background-image: linear-gradient(to 方向, 开始颜色, 结束颜色)`

比如一个从右上角到左下角的渐变：
```html
background-image: linear-gradient(to left top, blue , yellow);
```
### 角度渐变
语法：`background-image: linear-gradient(坐标dge, 开始颜色, 结束颜色);`

即0dge是从下向上渐变
![坐标](/one-year/css/background/pic/zuobiao.jpeg)