<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const { params } = useRoute();

function formatDate(date: string) {
  const dt = new Date(date);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return dt.toLocaleDateString('en-US', options);
}
</script>

<template>
  <article class="bg-white rounded-2xl">
    <ContentDoc :path="`/posts/${params.slug}`" v-slot="{ doc }">
      <header>
        <div class="text-center p-5">
          <h1 class="text-4xl font-semibold text-gray-900">{{ doc.title }}</h1>
          <div class="flex justify-center items-center gap-4 mt-4">
            <time :datetime="doc.date" class="text-gray-500 text-sm">
              {{ formatDate(doc.date) }}
            </time>
            <div class="flex gap-2">
              <span v-for="tag in doc.tags" :key="tag" 
                    class="bg-gray-100 px-2 py-1 rounded-full text-sm text-gray-600">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <img 
          :src="doc.thumbnail" 
          :alt="doc.alt_description"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </header>

      <div class="p-5 content">
        <div class="max-w-screen-lg mx-auto prose prose-lg">
          <ContentRenderer :value="doc" />
        </div>
      </div>

      <footer class="px-5 pb-5 mt-8 border-t border-gray-100">
        <div class="max-w-screen-lg mx-auto pt-4 text-gray-500 text-sm">
          <p>Written by Bad Dog</p>
        </div>
      </footer>
    </ContentDoc>
  </article>
</template>

<style>
/* Base content styling */
.prose {
  @apply text-gray-700 leading-relaxed;
  font-size: 1.125rem;
}

/* Headers */
.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
  scroll-margin-top: 100px;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-800 mt-6 mb-3;
}

/* Code blocks */
.prose pre {
  @apply bg-[#1A1A1A] text-gray-100 rounded-lg p-4 my-4 relative;
  font-family: Menlo, Monaco, "Courier New", monospace;
  line-height: 1.6;
  font-size: 0.95rem;
  letter-spacing: 0.025em;
}

.prose pre code {
  @apply text-[0.95rem] leading-relaxed;
  font-feature-settings: "ss01" on, "ss02" on, "ss03" on;
}

/* Inline code */
.prose :not(pre) > code {
  @apply bg-gray-100 rounded px-2 py-0.5 text-sm text-gray-800 border border-gray-200;
}

/* Blockquotes */
.prose blockquote {
  @apply border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700;
}

/* Lists */
.prose ul {
  @apply list-disc list-outside ml-6 my-4 space-y-2;
}

.prose ol {
  @apply list-decimal list-outside ml-6 my-4 space-y-2;
}

/* Links */
.prose a {
  @apply text-blue-600 hover:text-blue-800 underline;
  text-underline-offset: 2px;
}

/* Tables - Professional styling */
.prose table {
  @apply w-full my-6 border-collapse bg-white shadow-sm rounded-lg overflow-hidden;
  min-width: 500px; /* Set minimum width */
}

.prose thead {
  @apply bg-gray-50;
}

.prose th {
  @apply px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200;
}

.prose td {
  @apply px-6 py-4 text-sm text-gray-700 border-b border-gray-100;
}

/* Responsive table container */
.prose .table-container {
  @apply w-full overflow-x-auto my-6;
  -webkit-overflow-scrolling: touch;
}

/* Images */
.prose img {
  @apply rounded-lg my-4;
  max-width: 100%;
  height: auto;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .prose {
    font-size: 1rem;
  }
  
  .prose pre {
    @apply mx-[-1rem];
    border-radius: 0;
  }
  
  .prose table {
    @apply mx-[-1rem];
    width: calc(100% + 2rem);
  }
}

/* Print optimization */
@media print {
  .prose {
    @apply text-black;
  }
  
  .prose pre {
    @apply border border-gray-300;
    white-space: pre-wrap;
  }
  
  .prose a {
    @apply text-black;
  }
}
/* Code block container */
.prose pre {
  @apply bg-[#1A1A1A] text-gray-100 rounded-lg p-4 my-4 relative;
  font-family: Menlo, Monaco, "Courier New", monospace;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Compact copy button */
.copy-button {
  @apply absolute top-2 right-2 
         p-1.5 /* Reduced padding */
         bg-gray-800 hover:bg-gray-700
         text-gray-400 hover:text-gray-300
         rounded-md
         opacity-80 hover:opacity-100
         transition-all duration-200;
}

/* Icon only, no text */
.copy-button svg {
  @apply w-3.5 h-3.5; /* Smaller icon */
}

/* Success state */
.copy-button.copied {
  @apply text-green-400;
}
</style>