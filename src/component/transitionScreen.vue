<template>
  <div class="center-wrapper">
    <p class="center-text">
      {{ displayedText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  speed: {
    type: Number,
    default: 100 // ยิ่งน้อยยิ่งเร็ว
  }
})

const displayedText = ref('')
let index = 0
let typingInterval: number | undefined

function startTyping(newText: string) {
  displayedText.value = ''
  index = 0

  if (typingInterval) {
    clearInterval(typingInterval)
  }

  typingInterval = setInterval(() => {
    if (index < newText.length) {
      displayedText.value += newText[index]
      index++
    } else {
      clearInterval(typingInterval)
    }
  }, props.speed)
}

onMounted(() => {
  startTyping(props.text)
})

watch(
  () => props.text,
  (newText) => {
    startTyping(newText)
  }
)
</script>

<style scoped>
.center-wrapper {
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #000000;
}

.center-text {
  color: white;
  font-size: 28px;
  text-align: center;
  max-width: 80%;
  white-space: pre-line;
}
</style>
