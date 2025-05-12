<script setup lang="ts">
import { ref } from 'vue';
import { useClipboard } from '~/composables/useClipboard';

const props = defineProps<{
  code: string;
  language?: string;
}>();

const copied = ref(false);
const { copy } = useClipboard();

const handleCopy = async () => {
  const success = await copy(props.code);
  if (success) {
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  }
};
</script>

<template>
  <div class="relative">
    <pre :class="`language-${props.language}`"><code>{{ props.code }}</code></pre>
    <button 
  class="copy-button" 
  :class="{ 'copied': copied }" 
  @click="handleCopy"
  :title="copied ? 'Copied!' : 'Copy to clipboard'"
>
  <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
  </svg>
</button>
  </div>
</template>
