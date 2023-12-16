<!-- components/MarkdownContent.vue -->
<template>
  <div v-if="compiledMarkdown !== null" v-html="compiledMarkdown" class="markdown-content"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';

const compiledMarkdown = ref<string | null>(null);

onMounted(() => {
  compiledMarkdown.value = renderMarkdown($props.content);
});

function renderMarkdown(content: string): string {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (str, lang) => {
      if (lang && Prism.languages[lang]) {
        try {
          return Prism.highlight(str, Prism.languages[lang], lang);
        } catch (e) {
          console.error(e);
        }
      }
      return ''; // use external default escaping
    },
  });

  return md.render(content);
}
</script>

<style scoped>
/* Add any styles for your markdown content here */
.markdown-content {
  /* Add styles for your markdown content, including prism themes if needed */
}
</style>
