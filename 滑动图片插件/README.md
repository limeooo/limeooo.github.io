# 滑动图片插件文档

### 使用说明

```html
<!-- 引入css文件和js文件 -->
<link rel="stylesheet" href="css/xsliderImage.css" />
<script src="js/xsliderImage.js"></script>
<!-- 挂载的dom元素 -->
<div id="xsliderImage"></div>
```

```js
// 配置项
const params = {
  width: '100%',
  height: '240px',
  isLoop: true,
  isShowIndicators: true,
  data: [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    `<span style="color: red;font-size: ${20}px">哈哈哈</span>`,
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    './images/bg1.png',
  ],
}
// 初始化滑动对象
const mySliderImage = new MySliderImage(params)
// 异步设置数据
setTimeout(() => {
  mySliderImage.setData(['1', '2', '3', '4', '5', '6', '7'])
  setTimeout(() => {
    mySliderImage.jumpToIndex(4, false)
  }, 1000)
}, 1000)
```

### 配置参数

| 参数               | 说明                                      | 类型     | 默认值       |
| :----------------- | ----------------------------------------- | -------- | ------------ |
| el                 | 挂载的 dom 元素 id                        | string   | xsliderImage |
| width              | 宽度                                      | string   | 100%         |
| height             | 高度                                      | string   | 300px        |
| initialIndex       | 初始状态激活的索引                        | number   | 0            |
| offsetSlider       | 滑动多少距离切换图片（px）                | number   | 50           |
| isLoop             | 是否开启循环                              | boolean  | false        |
| isAllowScale       | 是否开启两指缩放功能                      | boolean  | false        |
| isShowIndicators   | 是否显示圆点指示器                        | boolean  | false        |
| isShowTransition   | 是否展示动画                              | boolean  | false        |
| transitionDuration | 滑动和回弹图片速度（ms）                  | number   | 500          |
| data               | 数据数组，可以是图片 url 地址或 html 文本 | string[] | []           |

### 实例方法

| 方法名      | 说明           | 参数                                       |
| ----------- | -------------- | ------------------------------------------ |
| setData     | 重新设置数据   | data: string[]                             |
| resize      | 重置大小       | width: string \| height: string            |
| slideLeft   | 图片左滑       | -                                          |
| slideRight  | 图片右滑       | -                                          |
| jumpToIndex | 跳转到指定索引 | index: number \| isShowTransition: boolean |
| destroy     | 销毁事件       | -                                          |
