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
    /**
     * 初始化方法（private）
     * @param {object} config 配置对象
     */
    init: function (config) {
      config = config || {}
      // 初始化变量
      this.currentIndex = 0 // 当前索引
      this.initialIndex = config.initialIndex || 0 // 初始状态激活的索引，默认值：0
      this.width = config.width || '100%' // 宽度，默认值：100%
      this.height = config.height || '300px' // 高度，默认值：300px
      this.data = config.data || [] // 数据数组，可以是图片url地址或html文本，默认值：[]
      this.offsetSlider = config.offsetSlider || 100 // 滑动多少距离切换图片，单位：px，默认值：50
      this.isLoop = config.isLoop // 是否开启循环，默认值：false
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
    /**
     * 初始化滑块（private）
     */
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
    /**
     * 初始化圆点指示器（private）
     */
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
    /**
     * 销毁事件
     */
    destroy: function () {
      this.el.removeEventListener('touchstart', this.touchStart)
      this.el.removeEventListener('touchmove', this.touchMove)
      this.el.removeEventListener('touchend', this.touchEnd)
      window.removeEventListener('resize', this.resize)
    },
    /**
     * 重置大小
     * @param {string} width 宽度
     * @param {string} height 高度
     */
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
    /**
     * 重新设置数据
     * @param {string[]} data 设置的数据数组
     */
    setData: function (data) {
      this.el.innerHTML = ''
      this.currentIndex = 0
      this.data = data || []
      this.scaleArr = new Array(this.data.length).fill({ scale: 1, originScale: 1 }) // 缩放比例数组
      this.initTrack()
      if (this.isShowIndicators) this.initIndicators()
      this.jumpToIndex(this.initialIndex, false)
    },
    /**
     * 滑动开始方法（private）
     */
    touchStart: function (e) {
      if (this.data.length === 0) return
      //初始化滑动状态
      this.recoveryTrack()
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
    /**
     * 滑动移动方法（private）
     */
    touchMove: function (e) {
      if (this.data.length === 0) return
      // 单指滑动操作
      if (e.touches.length === 1 && this.oneFingerMoving && this.data.length > 1) {
        var offsetX = e.touches[0].clientX - this.startX
        // 为第一张时且向左移动的操作
        if (this.currentIndex === 0 && offsetX > 0) {
          if (!this.isLoop) return // 不开启循环则不可滑动
          var lastImgEl = this.trackEl.children[this.data.length - 1]
          lastImgEl.style.transform = `
           translateX(${-1 * this.data.length * this.el.clientWidth}px)
          `
        }
        // 为最后一张时且向右移动的操作
        if (this.currentIndex === this.data.length - 1 && offsetX < 0) {
          if (!this.isLoop) return // 不开启循环则不可滑动
          var firstImgEl = this.trackEl.children[0]
          firstImgEl.style.transform = `
           translateX(${this.data.length * this.el.clientWidth}px)
          `
        }
        // 是否展示动画显示滑动动画
        if (this.isShowTransition) {
          this.trackEl.style.transform = `
            translateX(${-1 * this.currentIndex * this.el.clientWidth + offsetX}px)
          `
        }
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
    /**
     * 滑动结束方法（private）
     */
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
          this.recoveryTrack()
        }
        if (offsetX < -1 * this.offsetSlider) {
          // 大于设定偏移量向左滑动
          this.slideRight()
        } else if (offsetX < 0) {
          // 小于设定偏移量且滑动了便回弹
          this.recoveryTrack()
        }
      }
      if (this.twoFingerMoving) {
        this.twoFingerMoving = false
      }
    },
    /**
     * 图片左滑
     */
    slideLeft: function () {
      // 如果禁止循环且下标值为0不可左滑
      if (!this.isLoop && this.currentIndex === 0) return
      this.slide(this.currentIndex - 1)
    },
    /**
     * 图片右滑
     */
    slideRight: function () {
      // 如果禁止循环且下标值为最后一个不可右滑
      if (!this.isLoop && this.currentIndex === this.data.length - 1) return
      this.slide(this.currentIndex + 1)
    },
    /**
     * 跳转到指定索引
     * @param {*} index 跳转的索引值
     * @param {*} isShowTransition 是否展示滑动动画
     */
    jumpToIndex: function (index, isShowTransition) {
      // 没有数据返回
      if (this.data.length === 0) return
      // 下标值错误处理
      if (index < 0) index = 0
      if (index > this.data.length - 1) index = this.data.length - 1
      this.slide(index, isShowTransition)
    },
    /**
     * 滑动窗口（private）
     * @param {*} index 滑动到的索引值
     * @param {*} isShowTransition 是否展示滑动动画
     */
    slide(index, isShowTransition) {
      isShowTransition = isShowTransition === undefined ? this.isShowTransition : isShowTransition
      // 滑动前下标值
      var preIndex = this.currentIndex
      // 滑动后下标值
      var nextIndex = (index + this.data.length) % this.data.length
      // 如果显示指示器则跳转
      if (this.isShowIndicators) {
        this.indicatorsEl.children[preIndex].classList.remove('active')
        this.indicatorsEl.children[nextIndex].classList.add('active')
      }
      // 不展示动画
      if (!isShowTransition) this.trackEl.style.transitionDuration = '0ms'
      // 滑动滑块
      this.trackEl.style.transform = `translateX(${-1 * index * this.el.clientWidth}px)`
      // 不展示动画
      if (!isShowTransition) {
        var _this = this
        setTimeout(function () {
          _this.trackEl.style.transitionDuration = _this.transitionDuration + 'ms'
        }, 20)
      }
      // 设置当前下标
      this.currentIndex = nextIndex
    },
    /**
     * 恢复滑动窗口状态（private）
     */
    recoveryTrack: function () {
      this.trackEl.children[this.currentIndex].style.transform = 'translateX(0)'
      this.trackEl.style.transform = `translateX(-${this.currentIndex * this.el.clientWidth}px)`
    },
  }

  // 全局作用域添加函数
  global.MySliderImage = MySliderImage
})(this || window)
