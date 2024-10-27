<script setup>
import { ref, shallowRef, onMounted } from 'vue'
import Confession from './assets/js/confession.js'

const instance = shallowRef(null)
const isAllowMusic = ref(false)
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
onMounted(() => {
  instance.value = new Confession('#xmyThree', {
    // 雪花个数
    snowCount: 5000,
    // 粒子个数用于变换形状
    particleCount: 50,
    // 形状比例
    shapeScale: 0.07,
    // 形状path路径
    // shapePath: 'M17.1663 19.4099C17.3821 22.6406 19.6189 25.4845 23.1501 27.5549H29.4063C23.854 25.8485 20.039 22.4813 19.8232 18.4543C19.7676 16.5955 20.3891 14.7799 21.5718 13.3466L24.4104 9.42195L29.1111 10.5595L26.2498 6.68039L28.8272 2.52824L24.2287 4.07534L21.1176 0.355469V5.20154L16.5759 7.02166C7.18588 10.9463 0.679847 18.6477 0.441406 27.5549H5.19887C5.08064 26.7755 5.01992 25.9885 5.0172 25.2001C5.0172 17.8286 10.1721 11.3217 18.0293 7.47669L19.0511 7.80659C11.3643 11.6857 6.48191 18.1927 7.00421 25.1774C7.06 25.9808 7.19308 26.7771 7.40161 27.5549H12.3635C11.4988 26.0427 10.9829 24.3558 10.8533 22.6178C10.4332 17.0323 14.1574 11.7767 20.232 8.21612L21.2312 8.54601C15.554 12.2659 12.1477 17.2143 12.6814 22.2879C12.9006 24.2017 13.6301 26.0211 14.7933 27.5549H20.3683C19.1511 26.7023 18.1206 25.6098 17.3396 24.3442C16.5587 23.0786 16.0438 21.6667 15.8265 20.1948C15.4291 16.4067 17.5524 12.7323 21.3447 9.76322L21.4356 11.1169C18.5856 13.5058 16.9847 16.3953 17.189 19.4099',
    // 场景文字
    sceneText: ['依依', '想和你看世界', '一直到尽头', '想和你在一起', '一直到永远'],
    // 场景文字厚度
    sceneTextThickness: 200,
    // 烟花位置，不传则默认位置释放烟花，[[x,y,z],[x,y,z]]
    fireworksPositions: [],
    // 烟花颜色，不传随机
    fireworksColor: [],
    // 烟花爆炸点数量
    fireworksCount: 300,
    // 烟花上升速度
    fireworksUpSpeed: 3,
    // 烟花爆炸速度
    fireworksBombSpeed: 5,
    // 烟花大小
    fireworksSize: 20,
    // 烟花形状 可选参数 circle圆形 heart心形 random随机
    fireworksShape: 'heart',
    // 资源加载
    resourceLoadingFn: (resourcesLoaded, totalResources) => {
      const widEl = document.querySelector('.xmyThree_loading .xwid')
      widEl.style.width = `${(resourcesLoaded / totalResources) * 100}%`
    },
    // 资源加载完毕
    resourceLoadedFn: () => {
      setTimeout(() => {
        const loadingEl = document.querySelector('.xmyThree_loading')
        loadingEl.style.display = 'none'
      }, 1000)
    }
  })

  window.instance = instance.value
})

// 音乐控制
function handleMusicControl() {
  isAllowMusic.value = !isAllowMusic.value
  instance.value.musicControl(isAllowMusic.value)
}
</script>

<template>
  <div class="xmyThree" id="xmyThree">
    <div class="xmyThree_tip">{{ isMobile ? '双击切换场景' : '鼠标滚轮切换场景' }}</div>
    <div class="xmyThree_music" :class="{ stop: !isAllowMusic }" @click="handleMusicControl"></div>
    <div class="xmyThree_loading">
      <p class="xstar"></p>
      <p class="xtext">Loading</p>
      <p class="xbar">
        <span class="xwid"></span>
      </p>
    </div>
  </div>
</template>

<style>
@import url(./assets/css/global.css);
@import url(./assets/css/style.css);
</style>
