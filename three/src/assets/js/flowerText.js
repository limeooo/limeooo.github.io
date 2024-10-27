import * as THREE from 'three'

const DEFAULT_CONFIG = {
  scene: null,
  camera: null,
  fontSize: 70,
  fontScale: .075,
  fontThickness: 200,
  resourceLoadingFn: (current, total) => {
    console.log(`资源正在加载中 ${Math.round((current / total) * 100)}%`)
  },
  resourceLoadedFn: () => {
    console.log('资源加载完毕')
  }
}

export default class FlowerText {
  constructor(config) {
    this.config = { ...DEFAULT_CONFIG, ...config }
    this.scene = this.config.scene
    this.camera = this.config.camera

    this.meshGroup = new THREE.Group()
    this.scene.add(this.meshGroup)

    this.resourcesLoaded = 0 // 已加载资源数
    this.totalResources = 2 // 需要加载的资源总数

    this._initGeometry()
    this._initTexture()
    this._initData()
  }

  // 初始化几何体
  _initGeometry() {
    this.planeGeometry = new THREE.PlaneGeometry(1.2, 1.2)
  }

  // 初始化纹理
  _initTexture() {
    this.textureLoader = new THREE.TextureLoader()
    this.textureLoader.load('./textures/flower.png', (texture) => {
      this.flowerTexture = texture
      this.flowerMaterial = new THREE.MeshBasicMaterial({
        alphaMap: texture,
        opacity: 0.6,
        depthTest: false,
        transparent: true,
        side: THREE.DoubleSide
      })

      this._checkResourcesLoaded()
    })

    this.textureLoader.load('./textures/leaf.png', (texture) => {
      this.leafTexture = texture
      this.leafMaterial = new THREE.MeshBasicMaterial({
        alphaMap: texture,
        opacity: 0.7,
        depthTest: false,
        transparent: true,
        side: THREE.DoubleSide
      })

      this._checkResourcesLoaded()
    })
  }

  // 初始化数据
  _initData() {
    this.textCanvas = document.createElement('canvas')
    this.textCanvas.width = 0
    this.textCanvas.height = 0
    this.textContext = this.textCanvas.getContext('2d', { willReadFrequently: true })

    this.dummy = new THREE.Object3D()
    this.clock = new THREE.Clock()

    this.textureCoordinates = []
    this.particles = []
  }

  // 校验资源是否加载完成
  _checkResourcesLoaded() {
    this.resourcesLoaded++
    this.config.resourceLoadingFn(this.resourcesLoaded, this.totalResources)
    if (this.resourcesLoaded === this.totalResources) {
      this.config.resourceLoadedFn()
    }
  }

  // 更新点的坐标和粒子
  _updateCoordinatesAndParticles() {
    const lines = this.text.split('\n') // 按行分割文字
    const linesNumber = lines.length // 行数
    const maxLength = Math.max(...lines.map((line) => line.length)) // 找出lines中长度最长的那行
    this.textCanvas.width = this.config.fontSize * maxLength // 设置canvas宽度
    this.textCanvas.height = this.config.fontSize * linesNumber * 1.1 // 设置canvas高度
    this.textContext.font = `${this.config.fontThickness} ${this.config.fontSize}px Verdana`
    this.textContext.fillStyle = '#2a9d8f'
    this.textContext.clearRect(0, 0, this.textCanvas.width, this.textCanvas.height) // 清空canvas
    lines.forEach((line, index) => {
      this.textContext.fillText(line, 0, this.config.fontSize * 1.1 * (index + 0.8)) // 绘制文字
    })

    // 获取每个点的坐标并比对是否需要删除或新建
    if (this.textCanvas.width > 0) {
      const imageData = this.textContext.getImageData(0, 0, this.textCanvas.width, this.textCanvas.height) // 获取图像数据
      const imageMask = Array.from(Array(this.textCanvas.height), () => new Array(this.textCanvas.width)) // 创建一个二维数组
      for (let i = 0; i < this.textCanvas.height; i++) {
        for (let j = 0; j < this.textCanvas.width; j++) {
          imageMask[i][j] = imageData.data[(j + i * this.textCanvas.width) * 4] > 0 // 获取每个像素的透明度
        }
      }

      // 如果之前有创建过点 则更新点的状态
      if (this.textureCoordinates.length) {
        this.textureCoordinates = this.textureCoordinates.filter((c) => !c.toDelete)
        this.particles = this.particles.filter((c) => !c.toDelete)

        this.textureCoordinates.forEach((c) => {
          if (imageMask[c.y] && imageMask[c.y][c.x]) {
            c.old = true
            if (!c.toDelete) {
              imageMask[c.y][c.x] = false // 将该像素设置为不透明 不需要再创建点
            }
          } else {
            c.toDelete = true // 如果该像素透明 则需要删除点
          }
        })
      }

      // 如果之前没有创建过点 则创建点
      for (let i = 0; i < this.textCanvas.height; i++) {
        for (let j = 0; j < this.textCanvas.width; j++) {
          if (imageMask[i][j]) {
            this.textureCoordinates.push({ x: j, y: i, old: false, toDelete: false }) // 新建点
          }
        }
      }
    } else {
      this.textureCoordinates = []
    }

    // 根据点的坐标创建花或叶
    this.particles = this.textureCoordinates.map((c, cIdx) => {
      const x = c.x * this.config.fontScale,
        y = c.y * this.config.fontScale

      if (c.old && this.particles[cIdx]) {
        return this.particles[cIdx]
      } else {
        return Math.random() > 0.2 ? new Flower({ x, y }) : new Leaf({ x, y })
      }
    })
  }

  // 重新创建实例化网格
  _recreateInstancedMesh() {
    this.meshGroup.remove(this.flowerInstancedMesh, this.leafInstancedMesh) // 删除之前的实例化网格

    const flowersNumber = this.particles.filter((p) => p.type === 0).length
    const leavesNumber = this.particles.filter((p) => p.type === 1).length

    this.flowerInstancedMesh = new THREE.InstancedMesh(this.planeGeometry, this.flowerMaterial, flowersNumber)
    this.leafInstancedMesh = new THREE.InstancedMesh(this.planeGeometry, this.leafMaterial, leavesNumber)
    this.meshGroup.add(this.flowerInstancedMesh, this.leafInstancedMesh)

    let flowerIdx = 0,
      leafIdx = 0
    this.particles.forEach((p) => {
      if (p.type === 0) {
        this.flowerInstancedMesh.setColorAt(flowerIdx++, new THREE.Color(`hsl(${p.color}, 100%, 70%)`))
      } else {
        this.leafInstancedMesh.setColorAt(leafIdx++, new THREE.Color(`hsl(${p.color}, 100%, 40%)`))
      }
    })
  }

  // 绘制文字
  drawText(text) {
    this.text = text
    this.textureCoordinates = []
    this._updateCoordinatesAndParticles()
    this._recreateInstancedMesh()
    return this.meshGroup
  }

  // 更新
  update() {
    let flowerIdx = 0,
      leafIdx = 0
    this.particles.forEach((p) => {
      p.grow() // 更新粒子
      this.dummy.quaternion.copy(this.camera.quaternion) // 将相机的四元数复制给dummy对象，以确保粒子面向相机
      this.dummy.rotation.z += p.rotationZ // 更新粒子的旋转
      this.dummy.scale.set(p.scale, p.scale, p.scale) // 更新粒子的缩放
      this.dummy.position.set(p.x, this.textCanvas.height * this.config.fontScale - p.y, p.z) // 更新粒子的位置
      if (p.type === 1) {
        this.dummy.position.y += 0.5 * p.scale
      }
      this.dummy.updateMatrix()

      if (p.type === 0) {
        this.flowerInstancedMesh.setMatrixAt(flowerIdx++, this.dummy.matrix)
      } else {
        this.leafInstancedMesh.setMatrixAt(leafIdx++, this.dummy.matrix)
      }
    })

    if (this.flowerInstancedMesh && this.leafInstancedMesh) {
      this.flowerInstancedMesh.instanceMatrix.needsUpdate = true
      this.leafInstancedMesh.instanceMatrix.needsUpdate = true
    }
  }
}

class Flower {
  constructor({ x, y }) {
    this.type = 0 // 0: 花 1: 叶
    this.x = x + 0.2 * (Math.random() - 0.5) // 随机偏移
    this.y = y + 0.2 * (Math.random() - 0.5) // 随机偏移
    this.z = 0

    this.color = Math.random() * 60 // 随机颜色

    this.isGrowing = true // 是否正在生长
    this.toDelete = false // 是否需要删除

    this.scale = 0 // 缩放
    this.maxScale = 0.9 * Math.pow(Math.random(), 20) // 最大缩放
    this.deltaScale = 0.03 + 0.1 * Math.random() // 缩放变化率
    this.age = Math.PI * Math.random() // 年龄 用于
    this.ageDelta = 0.01 + 0.02 * Math.random() // 年龄变化率
    this.rotationZ = 0.5 * Math.random() * Math.PI // 旋转

    this.grow = function () {
      this.age += this.ageDelta
      if (this.isGrowing) {
        this.deltaScale *= 0.99
        this.scale += this.deltaScale
        if (this.scale >= this.maxScale) {
          this.isGrowing = false
        }
      } else if (this.toDelete) {
        this.deltaScale *= 1.1
        this.scale -= this.deltaScale
        if (this.scale <= 0) {
          this.scale = 0
          this.deltaScale = 0
        }
      } else {
        this.scale = this.maxScale + 0.2 * Math.sin(this.age)
        this.rotationZ += 0.001 * Math.cos(this.age)
      }
    }
  }
}

class Leaf {
  constructor({ x, y }) {
    this.type = 1
    this.x = x
    this.y = y
    this.z = 0

    this.rotationZ = 0.6 * (Math.random() - 0.5) * Math.PI

    this.color = 100 + Math.random() * 50

    this.isGrowing = true
    this.toDelete = false

    this.scale = 0
    this.maxScale = 0.1 + 0.7 * Math.pow(Math.random(), 7)
    this.deltaScale = 0.03 + 0.03 * Math.random()
    this.age = Math.PI * Math.random()

    this.grow = function () {
      if (this.isGrowing) {
        this.deltaScale *= 0.99
        this.scale += this.deltaScale
        if (this.scale >= this.maxScale) {
          this.isGrowing = false
        }
      }
      if (this.toDelete) {
        this.deltaScale *= 1.1
        this.scale -= this.deltaScale
        if (this.scale <= 0) {
          this.scale = 0
        }
      }
    }
  }
}
