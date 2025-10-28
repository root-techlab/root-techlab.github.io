<template>
  <Teleport to="body">
    <div 
      v-if="open" 
      class="terminal-modal"
      @click="handleBackdropClick"
      role="dialog"
      :aria-label="t('terminal.modal_label')"
      aria-modal="true"
    >
      <div class="terminal-modal-content" @click.stop>
        <div class="terminal-header">
          <strong>
            <span style="color: white">root</span>
            <span style="color: #53fc6d">@techlab ~&gt;</span>
          </strong>
          <button 
            @click="$emit('close')" 
            class="terminal-close"
            :aria-label="t('terminal.close')"
            type="button"
          >
            ×
          </button>
        </div>
        
        <div class="terminal-content" ref="terminalContent">
          <div v-for="(line, i) in lines" :key="i" class="terminal-line">
            {{ line }}
          </div>
          <div v-if="isTyping" class="terminal-line">
            <span class="typing-indicator">{{ currentLine }}</span>
            <span class="blink" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

const props = defineProps<{
  open: boolean
}>()

const emits = defineEmits<{
  close: []
}>()

const { t } = useI18n()
const lines = ref<string[]>([])
const currentLine = ref('')
const isTyping = ref(false)
const terminalContent = ref<HTMLElement>()

const demoLines = [
  t('terminal.initializing'),
  t('terminal.loading_modules'),
  t('terminal.checking_infra'),
  t('terminal.starting_experiment'),
  t('terminal.ready')
]

const typeText = async (text: string, speed = 50) => {
  currentLine.value = ''
  isTyping.value = true
  
  for (let i = 0; i <= text.length; i++) {
    currentLine.value = text.slice(0, i)
    await new Promise(resolve => setTimeout(resolve, speed))
  }
  
  lines.value.push(text)
  currentLine.value = ''
  isTyping.value = false
  
  // Auto-scroll to bottom
  await nextTick()
  if (terminalContent.value) {
    terminalContent.value.scrollTop = terminalContent.value.scrollHeight
  }
}

const runDemo = async () => {
  lines.value = []
  
  for (let i = 0; i < demoLines.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 600))
    await typeText(demoLines[i])
  }
}

const handleBackdropClick = () => {
  emits('close')
}

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emits('close')
  }
}

watch(() => props.open, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
    runDemo()
    document.addEventListener('keydown', handleEscapeKey)
  } else {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', handleEscapeKey)
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleEscapeKey)
})
</script>

<style scoped>
.terminal-line {
  margin-bottom: 0.25rem;
  word-wrap: break-word;
}

.typing-indicator {
  color: #b8ffb8;
}
</style>