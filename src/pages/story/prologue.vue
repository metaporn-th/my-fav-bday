<template>
<TransitionScreen text="เช้าวันหนึ่ง..." v-if="startpage"/>
<div class="container" v-else>
<transition name="fade" mode="out-in">
  <img
    :key="currentSceneData.image"
    :src="currentSceneData.image"
    class="image-container"
  />
</transition>


  <transition name="fade">
    <div v-if="showBox" class="story-box">
      <p>{{ displayedText }}</p>
    </div>
  </transition>

</div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import TransitionScreen from '@/component/transitionScreen.vue'

type Scene = {
  text: string
  image: string
}
const scenes: Scene[] = [
  {
    text: `หื้ม... นี่กี่โมงแล้วนะ...?`,
    image: new URL('@/assets/image/sleepy-1.png', import.meta.url).href
  },
  {
    text: `เสียงอะไรน่ะ!?`,
    image: new URL('@/assets/image/shock.png', import.meta.url).href
  },
  {
    text: `อ๊ะ! เกิดอะไรขึ้นน่ะ!?`,
    image: new URL('@/assets/image/outside.png', import.meta.url).href
  },
    {
    text: `แย่ละ คงต้องออกไปดูหน่อยแล้ว`,
    image: new URL('@/assets/image/dress-1.gif', import.meta.url).href
  }
]

const displayedText = ref('')
const showBox = ref(false)
const startpage = ref(true)
let index = 0

const currentScene = ref(0)

const currentSceneData = computed<Scene>(() => {
  return scenes[currentScene.value]!
})


function typeText(text: string, callback: () => void) {
  displayedText.value = ''
  index = 0

  const typing = setInterval(() => {
    if (index < text.length) {
      displayedText.value += text[index]
      index++
    } else {
      clearInterval(typing)
      setTimeout(callback, 3000) // รอ 3 วิหลังพิมพ์เสร็จ
    }
  }, 40)
}

function startScene() {


  typeText(currentSceneData.value.text, () => {
    if (currentScene.value < scenes.length - 1) {
      currentScene.value++
      startScene()
    }
  })
    showBox.value = true
}


onMounted(() => {
  setTimeout(() => {
    startpage.value = false
    startScene()
  }, 2000)
})

</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background:#000000;

}
.image-container {
    width: 80vw;        /* ปรับตามจอ */
    max-width: 400px;   /* ไม่ให้ใหญ่เกินบนจอใหญ่ */
    height: auto;
    border-radius: 20px;

    display: flex; 
    overflow: hidden; /* ช่วยให้ inset shadow ทำงานได้ดีขึ้น */

    /* เน้นความฟุ้งสีขาวกระจายออกด้านนอก */
    box-shadow: 
        0 0 50px 40px rgba(255, 255, 255, 1), /* แสงขาวเข้มใกล้ขอบ */
        0 0 100px 40px rgba(255, 255, 255, 0.6); /* แสงขาวฟุ้งกว้างๆ */

    /* เพิ่ม Filter เพื่อให้ตัวขอบรูปภาพดูไม่ตัดแข็งจนเกินไป */
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5));

    transition: all 0.4s ease;
}

.image-container img {
    width: 100%;
    display: block;
    /* เทคนิคพิเศษ: ทำให้ขอบภาพด้านในค่อยๆ จางลง */
    mask-image: radial-gradient(circle, black 60%, transparent 100%);
    -webkit-mask-image: radial-gradient(circle, black 60%, transparent 100%);
}
.image-container::before{
      display:block;
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    -moz-box-shadow:inset 0px 0px 6px 6px rgba(255,255,255,1);
    -webkit-box-shadow:inset 0px 0px 6px 6px rgba(255,255,255,1);
    box-shadow:inset 0px 0px 6px 6px rgba(255,255,255,1);
}
.story-box{
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);

    width: 90vw;
    max-width: 900px; /* กันไม่ให้กว้างเกินบนจอใหญ่ */

    padding: 20px;
    background: #dfdfdd;
    backdrop-filter: blur(10px); /* ทำให้ดูนุ่มหรูขึ้น */
    border-radius: 16px;

    color: #000000;
    font-size: 24px;
    text-align: center;
    

    z-index: 10;
      white-space: pre-line;
          @media only screen and (max-width: 600px) {
        width: 80%;
    }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>