import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { Water } from 'three/examples/jsm/objects/Water2'
import Fireworks from './fireworks'
import FlowerText from './flowerText'

const DEFAULT_CONFIG = {
  snowCount: 5000, // 雪花个数
  particleCount: 100, // 粒子个数
  shapeScale: 0.4, // 形状比例
  shapePath: 'M24,0 C12,-12 0,12 24,24 C48,12 36,-12 24,0 Z', // 形状path路径
  sceneText: ['跟着天空的暗示', '离开冰冷的城市', '踏上飞驰的列车消失', '脱离黑夜的控制', '现在就抛弃一切出发'], // 场景文字
  sceneTextThickness: 200, // 场景文字厚度
  fireworksPositions: [], // 烟花位置
  fireworksColor: [], // 烟花颜色
  fireworksCount: 180, // 烟花爆炸点数量
  fireworksUpSpeed: 3, // 烟花上升速度
  fireworksBombSpeed: 3, // 烟花爆炸速度
  fireworksSize: 20, // 烟花大小
  fireworksShape: 'circle', // 烟花形状
  resourceLoadingFn: () => {
    console.log('资源正在加载中')
  },
  resourceLoadedFn: () => {
    console.log('资源加载完毕')
  }
}

export default class Confession {
  constructor(str, config) {
    const el = document.querySelector(str)
    if (!el) throw new Error('未找到挂载元素')

    this.el = el
    this.config = { ...DEFAULT_CONFIG, ...config }
    this._init()
  }

  // 初始化
  _init() {
    this._initData()
    this._initLoader()
    this._initScene()
    this._initCamera()
    this._initRenderer()
    this._initControls()
    this._initLight()
    this._initStar()
    this._initSnow()
    this._initText()
    this._initBear()
    this._initFireworks()
    this._initBackgroundMusic()

    const render = () => {
      this.renderer.render(this.scene, this.camera) // 渲染场景
      this.controls.update() // 更新控制器
      requestAnimationFrame(render) // 请求动画帧
    }
    render()

    // PC端鼠标滚轮切换场景
    this.el.addEventListener(
      'wheel',
      debounce((event) => {
        if (event.deltaY > 0) {
          this.sceneIndex = (this.sceneIndex + 1) % this.sceneCallback.length
        } else {
          this.sceneIndex = (this.sceneIndex - 1 + this.sceneCallback.length) % this.sceneCallback.length
        }

        this.sceneCallback[this.sceneIndex]()
      }, 100)
    )

    // 移动端双击切换场景
    let lastTouchEnd = 0
    this.el.addEventListener('touchend', () => {
      const now = new Date().getTime()
      if (now - lastTouchEnd <= 300) {
        // 300毫秒内的两次touchend视为双击
        this.sceneIndex = (this.sceneIndex + 1) % this.sceneCallback.length
        this.sceneCallback[this.sceneIndex]()
      }
      lastTouchEnd = now
    })

    window.addEventListener('resize', () => {
      this.renderer.setSize(this.el.clientWidth, this.el.clientHeight) // 重置渲染器宽高
      this.camera.aspect = this.el.clientWidth / this.el.clientHeight // 重新计算相机宽高比
      this.camera.updateProjectionMatrix() // 更新相机投影矩阵
    })
  }

  // 初始化数据
  _initData() {
    // 时间轴
    this.clock = new THREE.Clock()
    this.gsapOptions = {
      pointAngel: 0,
      pathTime: 0,
      textTime: 0
    }

    // 星星位置
    this.starPositions = []
    this.pathPositions = []

    // 场景切换数据
    this.sceneIndex = 4
    this.sceneCallback = [
      () => {
        this.translateCamera(new THREE.Vector3(-7.75, 3.09, 6.17), new THREE.Vector3(-8, 2, 0))
        this.translatePath(true)
        this.translateText(
          new THREE.Vector3(-9.4, 4.5, .1),
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(0.15, 0.15, 0.15)
        )
      },
      () => {
        this.translateCamera(new THREE.Vector3(7, 0.1, 23), new THREE.Vector3(0, 0, 0))
        this.translatePath()
        this.translateText(
          new THREE.Vector3(-5.5, 11, 2),
          new THREE.Vector3(0, Math.PI / 8, 0),
          new THREE.Vector3(.4, .4, .4)
        )
      },
      () => {
        this.translateCamera(new THREE.Vector3(10, 3, 0), new THREE.Vector3(5, 2, 0))
        this.translatePath(true)
        this.translateText(
          new THREE.Vector3(4, 4, 1.8),
          new THREE.Vector3(0, Math.PI / 1.5, 0),
          new THREE.Vector3(0.1, 0.1, 0.1)
        )
      },
      () => {
        this.translateCamera(new THREE.Vector3(7, 0.1, 23), new THREE.Vector3(0, 0, 0))
        this.translatePath()
        this.translateText(
          new THREE.Vector3(-5.5, 11, 2),
          new THREE.Vector3(0, Math.PI / 8, 0),
          new THREE.Vector3(.4, .4, .4)
        )
      },
      () => {
        this.translateCamera(new THREE.Vector3(-20, 1.3, 6.6), new THREE.Vector3(5, 2, 0))
        this.translateText(
          new THREE.Vector3(-13, 5, 2.5),
          new THREE.Vector3(0, -Math.PI / 3, 0),
          new THREE.Vector3(0.1, 0.1, 0.1)
        )
      }
    ]

    // 烟花位置
    if (this.config.fireworksPositions?.length) {
      this.fireworksPositions = this.config.fireworksPositions.map((item) => new THREE.Vector3(...item))
    } else {
      this.fireworksPositions = [
        new THREE.Vector3(-20, 5, 4),
        new THREE.Vector3(-18, 6, -2),
        new THREE.Vector3(-30, 14, -20),
        new THREE.Vector3(-2, 13, -12),
        new THREE.Vector3(-10, 8, -10),
        new THREE.Vector3(-10, 7, 15),
        new THREE.Vector3(2, 10, 1),
        new THREE.Vector3(0, 9, 12)
      ]
    }
  }

  // 初始化加载器
  _initLoader() {
    this.dracoLoader = new DRACOLoader() // 创建draco加载器
    this.dracoLoader.setDecoderPath('./draco/') // 设置解码器路径
    this.gltfLoader = new GLTFLoader() // 创建gltf加载器
    this.gltfLoader.setDRACOLoader(this.dracoLoader) // 设置draco加载器
    this.rgbeLoader = new RGBELoader() // 创建rgbe加载器
    this.fontLoader = new FontLoader() // 创建字体加载器
    this.textureLoader = new THREE.TextureLoader() // 创建纹理加载器

    this.resourcesLoaded = 0 // 已加载资源数
    this.totalResources = 6 + this.fireworksPositions.length // 需要加载的资源总数
  }

  // 初始化场景
  _initScene() {
    this.scene = new THREE.Scene() // 创建场景
    this.gltfLoader.load('./model/scene.glb', (gltf) => {
      this.scene.add(gltf.scene) // 添加场景模型
      gltf.scene.traverse((child) => {
        if (child.name === 'Plane') {
          child.visible = false // 隐藏水平面模型
        }
        if (child.isMesh) {
          // 判断是否是物体
          child.castShadow = true // 开启阴影
          child.receiveShadow = true // 开启阴影
        }
      })

      this._checkResourcesLoaded()
    })

    this.rgbeLoader.load('./textures/sky.hdr', (environment) => {
      this.scene.background = environment // 设置场景背景
      this.scene.environment = environment // 设置环境贴图
      environment.mapping = THREE.EquirectangularReflectionMapping // 设置环境贴图球形映射

      this._checkResourcesLoaded()
    })

    const waterGeometry = new THREE.CircleGeometry(300, 32) // 创建水几何体
    const water = new Water(waterGeometry, {
      textureWidth: 1024, // 设置水纹理宽度
      textureHeight: 1024, // 设置水纹理高度
      color: 0xeeeeff, // 设置水颜色
      flowDirection: new THREE.Vector2(1, 1), // 设置水流方向
      scale: 50 // 设置水缩放
    })
    water.rotation.x = -Math.PI / 2 // 设置水旋转
    this.scene.add(water) // 将水添加到场景中
  }

  // 初始化相机
  _initCamera() {
    this.camera = new THREE.PerspectiveCamera(75, this.el.clientWidth / this.el.clientHeight, 0.1, 1000) // 创建相机
    this.camera.position.set(0, 0, 10) // 设置相机位置
    this.camera.updateProjectionMatrix() // 更新投影矩阵
    this.scene.add(this.camera) // 将相机添加到场景中
  }

  // 初始化渲染器
  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true, // 透明
      antialias: true, // 抗锯齿
      toneMapping: THREE.ACESFilmicToneMapping, // 色调映射
      toneMappingExposure: 0.5, // 色调映射曝光
      outputEncoding: THREE.sRGBEncoding, // 输出编码
      physicallyCorrectLights: true // 物理正确灯光
    }) // 创建渲染器
    this.renderer.setPixelRatio(window.devicePixelRatio) // 设置像素比
    this.renderer.setSize(this.el.clientWidth, this.el.clientHeight) // 设置渲染器尺寸
    this.renderer.shadowMap.enabled = true // 开启阴影
    this.el.appendChild(this.renderer.domElement) // 将渲染器添加到el中
  }

  // 初始化控制器
  _initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement) // 创建控制器
    this.controls.enableZoom = false // 禁用缩放
    this.controls.enableDamping = true // 启用阻尼
  }

  // 初始化灯光
  _initLight() {
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1) // 创建平行光
    this.directionalLight.position.set(0, 50, 0) // 设置平行光位置
    this.scene.add(this.directionalLight) // 将平行光添加到场景中

    this.pointLight = new THREE.PointLight(0xffffff, 50) // 创建点光源
    this.pointLight.position.set(0.1, 2, 0) // 设置点光源位置
    this.pointLight.castShadow = true // 开启阴影
    this.scene.add(this.pointLight) // 将点光源添加到场景中

    const radius = 3 // 半径
    this.pointLightGroup = new THREE.Group() // 创建点光源组
    this.pointLightGroup.position.set(-7, 2.5, -1.5) // 设置点光源组位置
    for (let i = 0; i < 3; i++) {
      const shapeGeometry = new THREE.SphereGeometry(0.2, 32, 32) // 创建球体几何体
      const shapeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff, // 颜色
        emissive: 0xffffff, // 自发光
        emissiveIntensity: 10 // 自发光强度
      }) // 创建球体材质
      const shape = new THREE.Mesh(shapeGeometry, shapeMaterial) // 创建球体
      shape.position.set(
        Math.cos((i * 2 * Math.PI) / 3) * radius,
        Math.cos((i * 2 * Math.PI) / 3),
        Math.sin((i * 2 * Math.PI) / 3) * radius
      )

      const pointLight = new THREE.PointLight(0xffffff, 20) // 创建点光源
      shape.add(pointLight) // 将点光源添加到球体上

      this.pointLightGroup.add(shape) // 将球体添加到点光源组中
    }
    this.scene.add(this.pointLightGroup) // 将点光源组添加到场景中

    // 点光源组旋转动画
    gsap.to(this.gsapOptions, {
      pointAngel: Math.PI * 2, // 目标角度
      duration: 10, // 持续时间 10s
      ease: 'linear', // 线性运动
      repeat: -1, // 无限循环
      onUpdate: () => {
        this.pointLightGroup.rotation.y = this.gsapOptions.pointAngel // 更新点光源组旋转
        this.pointLightGroup.children.forEach((shape, index) => {
          shape.position.y = Math.cos((index * 2 * Math.PI) / 3 + this.gsapOptions.pointAngel * 5) // 更新点光源位置上下移动
        })
      }
    })
  }

  // 实例化创建漫天星星 提升性能
  _initStar() {
    this.starInstance = new THREE.InstancedMesh(
      new THREE.SphereGeometry(0.03, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 10
      }),
      this.config.particleCount // 星星数量
    )
    for (let i = 0; i < this.starInstance.count; i++) {
      const x = Math.random() * 100 - 50
      const y = Math.random() * 100 - 50
      const z = Math.random() * 100 - 50
      this.starPositions.push(new THREE.Vector3(x, y, z))

      const matrix = new THREE.Matrix4() // 创建矩阵
      matrix.setPosition(x, y, z) // 设置矩阵位置
      this.starInstance.setMatrixAt(i, matrix) // 设置矩阵用于变换
    }
    this.scene.add(this.starInstance)

    // 根据路径获取点，并根据中心点和比例计算星星位置
    const shapeCenter = new THREE.Vector3(4.2, .5, 18)
    const path = getPath(this.config.shapePath)
    for (let i = 0; i < this.starInstance.count; i++) {
      const point = path.getPoint(i / this.starInstance.count)
      const starPosition = new THREE.Vector3(
        point.x * this.config.shapeScale + shapeCenter.x,
        point.y * this.config.shapeScale + shapeCenter.y,
        shapeCenter.z
      )
      this.pathPositions[i] = starPosition
    }
  }

  // 初始化雪花
  _initSnow() {
    this.textureLoader.load('./textures/snow.png', (texture) => {
      const snowGeometry = new THREE.BufferGeometry()
      const snowPositions = new Float32Array(this.config.snowCount * 3)
      for (let i = 0; i < this.config.snowCount; i++) {
        snowPositions[i * 3] = Math.random() * 300 - 150
        snowPositions[i * 3 + 1] = Math.random() * 300
        snowPositions[i * 3 + 2] = Math.random() * 300 - 150
      }
      snowGeometry.setAttribute('position', new THREE.BufferAttribute(snowPositions, 3))

      this.snowInstance = new THREE.Points(
        snowGeometry,
        new THREE.PointsMaterial({
          size: 0.5,
          map: texture,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        })
      )
      this.scene.add(this.snowInstance)

      const updateSnow = () => {
        // 更新雪花位置
        const positions = this.snowInstance.geometry.attributes.position.array
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] -= 0.1 // 雪花下降速度
          if (positions[i + 1] < 0) {
            positions[i + 1] = 300 // 重置雪花位置
          }
        }
        this.snowInstance.geometry.attributes.position.needsUpdate = true // 更新位置属性

        requestAnimationFrame(updateSnow)
      }
      updateSnow()

      this._checkResourcesLoaded()
    })
  }

  // 初始化文字
  _initText() {
    const flowerTextInstance = new FlowerText({
      scene: this.scene,
      camera: this.camera,
      fontThickness: this.config.sceneTextThickness,
      resourceLoadingFn: () => {},
      resourceLoadedFn: () => this._checkResourcesLoaded()
    })

    this.flowerTextInstance = flowerTextInstance

    const update = () => {
      flowerTextInstance.update()
      requestAnimationFrame(update)
    }
    update()
  }

  // 初始化熊
  _initBear() {
    this.gltfLoader.load('./model/bear/scene.gltf', (gltf) => {
      this.bear = gltf.scene // 获取小熊模型
      this.bear.position.set(-9.5, 2.5, 0.4) // 设置小熊位置
      this.bear.scale.set(0.5, 0.5, 0.5) // 设置小熊缩放
      this.bear.rotation.set(0, Math.PI / 6, 0) // 设置小熊旋转
      this.scene.add(this.bear) // 将小熊模型添加到场景中

      this._checkResourcesLoaded()
    })
  }

  // 初始化烟花
  _initFireworks() {
    this.fireworks = []
    this.fireworksPositions.forEach((position, index) => {
      let color
      if (this.config.fireworksColor.length) {
        color = this.config.fireworksColor[index % this.config.fireworksColor.length]
      } else {
        color = `hsl(${Math.random() * 360}, 100%, 80%)`
      }

      const fireworks = new Fireworks({
        color,
        position,
        fireworksCount: this.config.fireworksCount,
        fireworksUpSpeed: this.config.fireworksUpSpeed,
        fireworksBombSpeed: this.config.fireworksBombSpeed,
        fireworksSize: this.config.fireworksSize,
        fireworksShape: this.config.fireworksShape,
        resourceLoadingFn: () => {},
        resourceLoadedFn: () => this._checkResourcesLoaded()
      })
      fireworks.addScene(this.scene, this.camera)

      this.fireworks.push(fireworks)
    })

    const updateFireworks = () => {
      this.fireworks.forEach((fireworks) => {
        fireworks.update()
      })

      requestAnimationFrame(updateFireworks)
    }
    updateFireworks()
  }

  // 初始化背景音乐
  _initBackgroundMusic() {
    this.listener = new THREE.AudioListener()
    this.backgroundMusic = new THREE.Audio(this.listener)

    const audioLoader = new THREE.AudioLoader()
    audioLoader.load('./audio/background.mp3', (buffer) => {
      this.backgroundMusic.setBuffer(buffer)
      this.backgroundMusic.setLoop(true)
      this.backgroundMusic.setVolume(0.7)

      this._checkResourcesLoaded()
    })
  }

  // 创建花朵文字
  _createFlowerText() {}

  // 校验资源是否加载完成
  _checkResourcesLoaded() {
    this.resourcesLoaded++
    this.config.resourceLoadingFn(this.resourcesLoaded, this.totalResources)
    if (this.resourcesLoaded === this.totalResources) {
      this.config.resourceLoadedFn()
      this.sceneCallback[this.sceneIndex]()
    }
  }

  // 星星路径动画
  translatePath(reverse = false) {
    gsap.to(this.gsapOptions, {
      pathTime: 1,
      duration: 1,
      onUpdate: () => {
        for (let i = 0; i < this.starInstance.count; i++) {
          const startPos = reverse ? this.pathPositions[i] : this.starPositions[i]
          const endPos = reverse ? this.starPositions[i] : this.pathPositions[i]
          const x = startPos.x + (endPos.x - startPos.x) * this.gsapOptions.pathTime // 计算星星位置
          const y = startPos.y + (endPos.y - startPos.y) * this.gsapOptions.pathTime
          const z = startPos.z + (endPos.z - startPos.z) * this.gsapOptions.pathTime
          const matrix = new THREE.Matrix4() // 创建矩阵
          matrix.setPosition(x, y, z) // 设置矩阵位置
          this.starInstance.setMatrixAt(i, matrix) // 设置矩阵用于变换
        }
        this.starInstance.instanceMatrix.needsUpdate = true // 更新实例矩阵
      },
      onComplete: () => {
        this.gsapOptions.pathTime = 0
      }
    })
  }

  // 相机移动
  translateCamera(position, target) {
    gsap.to(this.camera.position, {
      x: position.x,
      y: position.y,
      z: position.z,
      duration: 1,
      ease: 'power2.inOut'
    })

    gsap.to(this.controls.target, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: 1,
      ease: 'power2.inOut'
    })
  }

  // 文字变换
  translateText(position, rotation, scale) {
    const str = this.config.sceneText[this.sceneIndex]
    this.text = this.flowerTextInstance.drawText(str)

    gsap.to(this.text.position, {
      x: position.x,
      y: position.y,
      z: position.z,
      duration: 1,
      ease: 'power2.inOut'
    })

    gsap.to(this.text.rotation, {
      x: rotation.x,
      y: rotation.y,
      z: rotation.z,
      duration: 1,
      ease: 'power2.inOut'
    })

    gsap.to(this.text.scale, {
      x: scale.x,
      y: scale.y,
      z: scale.z,
      duration: 1,
      ease: 'power2.inOut'
    })
  }

  // 音乐控制
  musicControl(isAllow) {
    this.fireworks.forEach((fireworks) => {
      fireworks.musicControl(isAllow)
    })
    if (isAllow) {
      this.backgroundMusic.context.resume().then(() => {
        this.backgroundMusic.play()
      })
    } else {
      this.backgroundMusic.context.suspend().then(() => {
        this.backgroundMusic.pause()
      })
    }
  }
}

// 防抖函数
function debounce(fn, delay, immediate = false, callBack) {
  let timer = null
  let isInvoke = false

  const _debounce = function (...args) {
    if (timer) clearTimeout(timer)

    if (immediate && !isInvoke) {
      const result = fn.apply(this, args)
      if (callBack) callBack(result)
      isInvoke = true
    } else {
      timer = setTimeout(() => {
        const result = fn.apply(this, args)
        if (callBack) callBack(result)
        isInvoke = false
      }, delay)
    }
  }

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}

// 传入path字符串，返回path对象
function getPath(pathStr) {
  const path = new THREE.Path()
  const commands = pathStr.match(/[a-zA-Z][^a-zA-Z]*/g)

  commands.forEach((command) => {
    const type = command[0]
    const args = command
      .slice(1)
      .trim()
      .split(/[\s,]+/)
      .map(Number)

    switch (type) {
      case 'M':
        path.moveTo(args[0], args[1])
        break
      case 'C':
        path.bezierCurveTo(args[0], args[1], args[2], args[3], args[4], args[5])
        break
      case 'L':
        path.lineTo(args[0], args[1])
        break
      case 'V':
        path.lineTo(path.currentPoint.x, args[0])
        break
      case 'H':
        path.lineTo(args[0], path.currentPoint.y)
        break
      case 'Q':
        path.quadraticCurveTo(args[0], args[1], args[2], args[3])
        break
      case 'A':
        path.absarc(args[0], args[1], args[2], args[3], args[4], args[5] === 1)
        break
      case 'Z':
        path.closePath()
        break
      default:
        console.warn(`未知的路径命令: ${type}`)
    }
  })

  return path
}
