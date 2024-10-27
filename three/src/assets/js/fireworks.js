import * as THREE from 'three'
import startVertexShader from '../shaders/fireworksStart/vertex.glsl'
import startFragmentShader from '../shaders/fireworksStart/fragment.glsl'
import bombVertexShader from '../shaders/fireworksBomb/vertex.glsl'
import bombFragmentShader from '../shaders/fireworksBomb/fragment.glsl'

const DEFAULT_CONFIG = {
  color: '#FFF',
  position: new THREE.Vector3(0, 0, 0),
  fireworksCount: 300, // 烟花爆炸点数量
  fireworksUpSpeed: 3, // 烟花上升速度
  fireworksBombSpeed: 3, // 烟花爆炸速度
  fireworksSize: 20, // 烟花大小
  fireworksShape: 'circle', // 烟花形状
  resourceLoadingFn: (current, total) => {
    console.log(`资源正在加载中 ${Math.round((current / total) * 100)}%`)
  },
  resourceLoadedFn: () => {
    console.log('资源加载完毕')
  }
}

export default class Fireworks {
  constructor(config) {
    this.config = { ...DEFAULT_CONFIG, ...config }

    this.clock = new THREE.Clock() // 时钟
    this.color = new THREE.Color(this.config.color)
    this.position = this.config.position
    this.isAllowMusic = false

    this.resourcesLoaded = 0 // 已加载资源数
    this.totalResources = 1 // 需要加载的资源总数

    this._initStartPoint()
    this._initBomb()
    this._initListener()
  }

  // 初始化烟花发射点
  _initStartPoint() {
    const startGeometry = new THREE.BufferGeometry()
    const startPointPosition = new Float32Array([this.position.x, 0, this.position.z])
    const startMaterial = new THREE.ShaderMaterial({
      vertexShader: startVertexShader, // 顶点着色器
      fragmentShader: startFragmentShader, // 片元着色器
      transparent: true, // 透明
      blending: THREE.AdditiveBlending, // 混合模式
      depthWrite: false, // 深度写入
      uniforms: {
        // 自定义变量
        uDistance: {
          value: 0
        },
        uColor: {
          value: this.color
        },
        uSize: {
          value: this.config.fireworksSize
        }
      }
    })

    startGeometry.setAttribute('position', new THREE.BufferAttribute(startPointPosition, 3))
    startGeometry.setAttribute('aStep', new THREE.BufferAttribute(new Float32Array([0, 1, 0]), 3))

    this.startPoint = new THREE.Points(startGeometry, startMaterial)
  }

  // 初始化烟花爆炸点
  _initBomb() {
    const bombGeometry = new THREE.BufferGeometry()

    let bombDirectionInfo
    if (this.config.fireworksShape === 'circle') {
      bombDirectionInfo = this._getCircleDirection()
    } else if (this.config.fireworksShape === 'heart') {
      bombDirectionInfo = this._getHeartDirection()
    } else {
      bombDirectionInfo = this._getRandomDirection()
    }

    bombGeometry.setAttribute('position', new THREE.BufferAttribute(bombDirectionInfo.bombPointPosition, 3))
    bombGeometry.setAttribute('aScale', new THREE.BufferAttribute(bombDirectionInfo.bombPointScale, 1))
    bombGeometry.setAttribute('aDirection', new THREE.BufferAttribute(bombDirectionInfo.bombDirection, 3))

    const bombMaterial = new THREE.ShaderMaterial({
      vertexShader: bombVertexShader,
      fragmentShader: bombFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uDistance: {
          value: 0
        },
        uColor: {
          value: this.color
        },
        uSize: {
          value: 0
        }
      }
    })

    this.bomb = new THREE.Points(bombGeometry, bombMaterial)
  }

  // 初始化爆炸音效
  _initListener() {
    this.listener = new THREE.AudioListener()
    this.sound = new THREE.Audio(this.listener)

    const audioLoader = new THREE.AudioLoader()
    const audioPath = this.config.fireworksShape === 'heart' ? './audio/heart.mp3' : './audio/bomb.mp3'
    audioLoader.load(audioPath, (buffer) => {
      this.sound.setBuffer(buffer)
      this.sound.setLoop(false)
      this.sound.setVolume(0.2)
      this.sound.playbackRate = 0.8

      this._checkResourcesLoaded()
    })
  }

  // 获取随机方向
  _getRandomDirection() {
    const bombPointCount = this.config.fireworksCount, // 烟花爆炸点数量
      bombPointPosition = new Float32Array(bombPointCount * 3), // 烟花爆炸点位置
      bombPointScale = new Float32Array(bombPointCount), // 烟花爆炸点缩放比例
      bombDirection = new Float32Array(bombPointCount * 3) // 烟花爆炸点方向
    for (let i = 0; i < bombPointCount; i++) {
      bombPointPosition[i * 3] = this.position.x // x
      bombPointPosition[i * 3 + 1] = this.position.y // y
      bombPointPosition[i * 3 + 2] = this.position.z // z

      bombPointScale[i] = 1

      let theta = Math.random() * Math.PI * 2 // 经度
      let beta = Math.random() * Math.PI * 2 // 纬度
      let r = Math.random() // 半径

      bombDirection[i * 3] = r * Math.sin(theta) + r * Math.sin(beta) // x
      bombDirection[i * 3 + 1] = r * Math.cos(theta) + r * Math.cos(beta) // y
      bombDirection[i * 3 + 2] = r * Math.sin(theta) + r * Math.cos(beta) // z
    }

    return { bombPointPosition, bombPointScale, bombDirection }
  }

  // 获取圆形形状方向
  _getCircleDirection() {
    const bombPointCount = this.config.fireworksCount, // 烟花爆炸点数量
      bombPointPosition = new Float32Array(bombPointCount * 3), // 烟花爆炸点位置
      bombPointScale = new Float32Array(bombPointCount), // 烟花爆炸点缩放比例
      bombDirection = new Float32Array(bombPointCount * 3) // 烟花爆炸点方向
    for (let i = 0; i < bombPointCount; i++) {
      bombPointPosition[i * 3] = this.position.x // x
      bombPointPosition[i * 3 + 1] = this.position.y // y
      bombPointPosition[i * 3 + 2] = this.position.z // z

      bombPointScale[i] = 1

      // 使用球坐标系生成方向向量
      let theta = Math.random() * Math.PI * 2 // 经度
      let phi = Math.acos(2 * Math.random() - 1) // 纬度
      let r = Math.random() // 半径

      bombDirection[i * 3] = r * Math.sin(phi) * Math.cos(theta) // x
      bombDirection[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) // y
      bombDirection[i * 3 + 2] = r * Math.cos(phi) // z
    }
    return { bombPointPosition, bombPointScale, bombDirection }
  }

  // 获取爱心形状方向
  _getHeartDirection() {
    const bombPointCount = this.config.fireworksCount, // 烟花爆炸点数量
      bombPointPosition = new Float32Array(bombPointCount * 3), // 烟花爆炸点位置
      bombPointScale = new Float32Array(bombPointCount), // 烟花爆炸点缩放比例
      bombDirection = new Float32Array(bombPointCount * 3) // 烟花爆炸点方向
    for (let i = 0; i < bombPointCount; i++) {
      bombPointPosition[i * 3] = this.position.x // x
      bombPointPosition[i * 3 + 1] = this.position.y // y
      bombPointPosition[i * 3 + 2] = this.position.z // z

      bombPointScale[i] = 1

      // 使用爱心形状的参数方程生成方向向量
      let t = Math.random() * Math.PI * 2 // 参数 t
      let x = 16 * Math.pow(Math.sin(t), 3)
      let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
      let z = 0 // 平面上的爱心形状

      bombDirection[i * 3] = x / 20
      bombDirection[i * 3 + 1] = y / 20
      bombDirection[i * 3 + 2] = z / 20
    }

    return { bombPointPosition, bombPointScale, bombDirection }
  }

  // 添加到场景中
  addScene(scene, camera) {
    this.scene = scene
    this.camera = camera

    this.scene.add(this.startPoint)
    this.scene.add(this.bomb)
  }

  // 更新
  update() {
    const elapsedTime = this.clock.getElapsedTime()
    const startInstance = elapsedTime * this.config.fireworksUpSpeed
    if (startInstance < this.position.y) {
      this.startPoint.material.uniforms.uDistance.value = startInstance
    } else {
      const bombTime = elapsedTime - this.position.y / this.config.fireworksUpSpeed
      const bombInstance = bombTime * this.config.fireworksBombSpeed
      removeMesh(this.startPoint)

      this.bomb.material.uniforms.uSize.value = this.config.fireworksSize
      this.bomb.material.uniforms.uDistance.value = bombInstance // 爆炸距离
      if (!this.sound.isPlaying && !this.playAudio && this.isAllowMusic) {
        this.playAudio = true
        this.sound.stop()
        this.sound.play()
      }

      if (bombInstance * 4 > this.config.fireworksSize) {
        removeMesh(this.bomb)
        this._resetFirework() // 重置烟花
      }
    }
  }

  // 音乐控制
  musicControl(isAllow) {
    if (isAllow) {
      this.sound.context.resume().then(() => {
        this.isAllowMusic = isAllow
        this.playAudio = true // 用于控制下次烟花才开始播放
      })
    } else {
      this.sound.context.suspend().then(() => {
        this.isAllowMusic = isAllow
      })
    }
  }

  // 重置烟花
  _resetFirework() {
    this.playAudio = false
    this.clock.start() // 重置时钟
    this._initStartPoint() // 重新初始化发射点
    this._initBomb() // 重新初始化爆炸点
    this.scene.add(this.startPoint) // 重新添加发射点到场景
    this.scene.add(this.bomb) // 重新添加爆炸点到场景
  }

  // 校验资源是否加载完成
  _checkResourcesLoaded() {
    this.resourcesLoaded++
    this.config.resourceLoadingFn(this.resourcesLoaded, this.totalResources)
    if (this.resourcesLoaded === this.totalResources) {
      this.config.resourceLoadedFn()
    }
  }
}

// 彻底清除物体
function removeMesh(mesh) {
  if (mesh && mesh.parent) {
    mesh.parent.remove(mesh)
    if (mesh.geometry) {
      mesh.geometry.dispose()
    }
    if (mesh.material) {
      if (Array.isArray(mesh.material)) {
        for (let mat of mesh.material) {
          mat.dispose()
        }
      } else {
        mesh.material.dispose()
      }
    }
  }
}
