;(function (global) {
  'use strict'

  // 定义插件函数
  var MySliderImage = function (config) {
    return this.init(config)
  }

  // 判断是否是图片地址
  var isImagePath = function (path) {
    return /\.(png|jpe?g|gif|svg)(\?.*)?$/.test(path)
  }

  // 获取坐标之间的距离
  var getDistance = function (start, stop) {
    return Math.hypot(stop.x - start.x, stop.y - start.y)
  }

  MySliderImage.prototype = {
    // 初始化方法
    init: function (config) {
      config = config || {}
      // 初始化变量
      this.currentIndex = 0 // 当前索引
      this.initialIndex = config.initialIndex || 0 // 初始状态激活的索引，默认值：0
      this.width = config.width || '100%' // 宽度，默认值：100%
      this.height = config.height || '300px' // 高度，默认值：300px
      this.data = config.data || [] // 数据数组，可以是图片url地址或html文本，默认值：[]
      this.scaleArr = new Array(this.data.length).fill({ scale: 1, originScale: 1 }) // 缩放比例数组
      this.offsetSlider = config.offsetSlider || 100 // 滑动多少距离切换图片，单位：px，默认值：50
      this.isAllowScale = config.isAllowScale // 是否开启两指缩放功能，默认值：false
      this.isShowIndicators = config.isShowIndicators // 是否显示圆点指示器，默认值：false
      this.isShowTransition = config.isShowTransition // 是否展示动画，默认值：false
      this.transitionDuration = config.isShowTransition ? config.transitionDuration || 500 : 0 // 滑动和回弹图片速度，单位：ms，默认值：500
      // 设置保存最外层dom
      this.el = document.getElementById(config.el || 'xsliderImage') // 挂载的dom元素id，默认值：xsliderImage
      if (!this.el) {
        throw new Error('Failed to mount the element')
      }
      this.el.classList.add('x-sliderImage')
      this.el.style.width = this.width
      this.el.style.height = this.height
      // 设置数据 / 添加监听事件
      this.setData(this.data)
      this.el.addEventListener('touchstart', this.touchStart.bind(this), { passive: true })
      this.el.addEventListener('touchmove', this.touchMove.bind(this), { passive: true })
      this.el.addEventListener('touchend', this.touchEnd.bind(this))
      window.addEventListener('resize', this.resize.bind(this))
      // 返回实例对象
      return this
    },
    // 初始化滑块
    initTrack: function () {
      var trackEl_html = ''
      for (var i = 0; i < this.data.length; i++) {
        trackEl_html += `
          <li class='x-sliderImage-item' style='width: ${this.el.clientWidth}px'>
            ${isImagePath(this.data[i]) ? `<img src='${this.data[i]}' />` : this.data[i]}
          </li>
        `
      }
      this.trackEl = document.createElement('div')
      this.trackEl.className = 'x-sliderImage__track'
      this.trackEl.style.width = this.el.clientWidth * this.data.length + 'px'
      this.trackEl.style.transitionDuration = this.transitionDuration + 'ms'
      this.trackEl.innerHTML = trackEl_html
      this.el.appendChild(this.trackEl)
    },
    // 初始化圆点指示器
    initIndicators: function () {
      var indicatorsEl_html = ''
      for (var i = 0; i < this.data.length; i++) {
        indicatorsEl_html += `
          <i class='x-sliderImage__indicator'></i>
        `
      }
      this.indicatorsEl = document.createElement('div')
      this.indicatorsEl.className = 'x-sliderImage__indicators'
      this.indicatorsEl.innerHTML = indicatorsEl_html
      this.el.appendChild(this.indicatorsEl)
    },
    // 销毁事件
    destroy: function () {
      this.el.removeEventListener('touchstart', this.touchStart)
      this.el.removeEventListener('touchmove', this.touchMove)
      this.el.removeEventListener('touchend', this.touchEnd)
      window.removeEventListener('resize', this.resize)
    },
    // 重置大小
    resize: function (width, height) {
      this.width = width || this.width
      this.height = height || this.height
      this.el.style.width = this.width
      this.el.style.height = this.height
      this.trackEl.style.width = this.el.clientWidth * this.data.length + 'px'
      for (var i = 0; i < this.trackEl.children.length; i++) {
        var el = this.trackEl.children[i]
        el.style.width = this.el.clientWidth + 'px'
      }
    },
    // 重新设置数据
    setData: function (data) {
      this.data = data || []
      this.el.innerHTML = ''
      this.currentIndex = 0
      this.initTrack()
      if (this.isShowIndicators) this.initIndicators()
      this.jumpToIndex(this.initialIndex)
    },
    // 滑动开始方法
    touchStart: function (e) {
      if (this.data.length === 0) return
      // 单指滑动
      this.oneFingerMoving = true
      this.startX = e.touches[0].clientX
      this.trackEl.style.transitionDuration = '0ms'
      // 两指触摸放大缩小
      if (this.isAllowScale && e.touches.length === 2) {
        this.oneFingerMoving = false
        this.twoFingerMoving = true
        // 获取两指开始时的直线距离
        this.scaleArr[this.currentIndex].originScale = this.scaleArr[this.currentIndex].scale
        this.startDistance = getDistance(
          { x: e.touches[0].clientX, y: e.touches[0].clientY },
          { x: e.touches[1].clientX, y: e.touches[1].clientY }
        )
      }
    },
    // 滑动移动方法
    touchMove: function (e) {
      if (this.data.length === 0) return
      // 是否展示动画且正在移动时显示滑动动画
      if (this.isShowTransition && this.oneFingerMoving) {
        var offsetX = e.touches[0].clientX - this.startX
        // 为第一张时且向左移动不触发动画
        if (this.currentIndex === 0 && offsetX > 0) return
        // 为最后一张时且向右移动不触发动画
        if (this.currentIndex === this.data.length - 1 && offsetX < 0) return
        this.trackEl.style.transform = `
          translateX(${-1 * this.currentIndex * this.el.clientWidth + offsetX}px)
        `
      }
      // 两指触摸放大缩小
      if (e.touches.length === 2 && this.twoFingerMoving) {
        // 获取两指结束时的直线距离
        var endDistance = getDistance(
          { x: e.touches[0].clientX, y: e.touches[0].clientY },
          { x: e.touches[1].clientX, y: e.touches[1].clientY }
        )
        // 获取缩放比例
        var zoom = endDistance / this.startDistance
        var newScale = zoom * this.scaleArr[this.currentIndex].originScale
        if (newScale < 0.3) newScale = 0.3
        if (newScale > 3) newScale = 3
        // 设置图片缩放
        var curImgEl = this.trackEl.children[this.currentIndex].querySelector('img')
        if (curImgEl) {
          curImgEl.style.transform = `scale(${newScale})`
          this.scaleArr[this.currentIndex].scale = newScale
        }
      }
    },
    // 滑动结束方法
    touchEnd: function (e) {
      if (this.data.length === 0) return
      // 单指滑动结束的操作
      if (this.oneFingerMoving) {
        this.oneFingerMoving = false
        this.trackEl.style.transitionDuration = this.transitionDuration + 'ms'
        var offsetX = e.changedTouches[0].clientX - this.startX
        if (offsetX > this.offsetSlider) {
          // 大于设定偏移量向左滑动
          this.slideLeft()
        } else if (offsetX > 0) {
          // 小于设定偏移量且滑动了便回弹
          this.springback()
        }
        if (offsetX < -1 * this.offsetSlider) {
          // 大于设定偏移量向左滑动
          this.slideRight()
        } else if (offsetX < 0) {
          // 小于设定偏移量且滑动了便回弹
          this.springback()
        }
      }
      if (this.twoFingerMoving) {
        this.twoFingerMoving = false
      }
    },
    // 图片左滑
    slideLeft: function () {
      // 为第一张时结束不滑动
      if (this.currentIndex === 0) return
      // 展示圆点指示器设定active活跃类名
      if (this.isShowIndicators) {
        this.indicatorsEl.children[this.currentIndex].classList.remove('active')
        this.indicatorsEl.children[this.currentIndex - 1].classList.add('active')
      }
      // 下标值减一
      this.currentIndex--
      this.trackEl.style.transform = `translateX(-${this.currentIndex * this.el.clientWidth}px)`
    },
    // 图片右滑
    slideRight: function () {
      // 为最后一张时结束不滑动
      if (this.data.length - 1 === this.currentIndex) return
      // 展示圆点指示器设定active活跃类名
      if (this.isShowIndicators) {
        this.indicatorsEl.children[this.currentIndex].classList.remove('active')
        this.indicatorsEl.children[this.currentIndex + 1].classList.add('active')
      }
      // 下标值加一
      this.currentIndex++
      this.trackEl.style.transform = `translateX(-${this.currentIndex * this.el.clientWidth}px)`
    },
    // 跳转到指定索引
    jumpToIndex: function (index) {
      // 没有数据返回
      if (this.data.length === 0) return
      // 下标值错误处理
      if (index < 0) index = 0
      if (index > this.data.length - 1) index = this.data.length - 1
      // 如果显示指示器则跳转
      if (this.isShowIndicators) {
        this.indicatorsEl.children[this.currentIndex].classList.remove('active')
        this.indicatorsEl.children[index].classList.add('active')
      }
      // 暂时停止动画并跳转到指定数据
      this.trackEl.style.transitionDuration = '0ms'
      this.trackEl.style.transform = `translateX(-${index * this.el.clientWidth}px)`
      var _this = this
      setTimeout(function () {
        _this.trackEl.style.transitionDuration = _this.transitionDuration + 'ms'
      }, 20)
      // 设置当前索引
      this.currentIndex = index
    },
    // 滑动距离不足失败回弹方法
    springback: function () {
      this.trackEl.style.transform = `translateX(-${this.currentIndex * this.el.clientWidth}px)`
    },
  }

  // 全局作用域添加函数
  global.MySliderImage = MySliderImage
})(this || window)
