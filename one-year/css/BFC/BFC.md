## BFC
块级格式上下文

BFC是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局

## 触发BFC的`css`属性：
- overflow: hidden
- display: inline-block
- position: absolute
- position: fixed
- display: table-cell
- display: flex

## BFC的规则
- BFC就是一个块级元素，块级元素会在垂直方向一个接一个的排列
- BFC就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
- 垂直方向的距离由margin决定， 属于同一个BFC的两个相邻的标签外边距会发生重叠
- 计算BFC的高度时，浮动元素也参与计算

## BFC解决的问题
- 浮动导致高度坍塌

```html
  <title>高度坍塌</title>
  <style>
    .box{
      height: 100px;
      width: 100px;
      margin: 100px;
      background-color: red;
      float: left;
    }
    .container{
      background-color: #000;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box"></div>
    <div class="box"></div>
  </div>
</body>
```
父级元素`container`因为子元素浮动脱离文档流，没有内容撑起高度，导致高度坍塌。解决此问题可以给`container`设置触发BFC，上面说的属性都可以。

- margin边距重叠

当两个块级元素上下排列的时候，margin上下会取最大的保留。为了解决这个问题就可以给其中一个设置触发BFC
```html
  <title>margin边距重叠</title>
  <style>
    .box{
      width: 100px;
      height: 100px;
      margin: 10px;
      background-color: red;
    }
  </style>
</head>
<body>
<div class="container">
  <div class="box"></div>
    <div class="box" style="display: inline-block;"></div>
</div>
</body>
```

- 两栏布局
有两个div如下：
```html
   <style>
    div{
      height: 100px;
      width: 100px;
      border: 1px solid red;
    }
  </style>
</head>
<body>
  <div class="box" style="float: left;">
    两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局
  </div>
  <div class="box" style="width: 300px;">
    哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
  </div>
</body>
```
第二个div跨度为300px，但是因为第一个div浮动导致第二个div被盖住了，为了解决这个问题，我们可以给第一个div触发BFC
```html
<div class="box" style="width: 300px; display: inline-block;">
  哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
</div>
```