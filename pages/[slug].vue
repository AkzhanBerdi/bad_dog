<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const { params } = useRoute();
  const utterancesScriptAdded = ref(false);

  function formatDate(date: string) {
    const dt = new Date(date);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return dt.toLocaleDateString('en-US', options);
  }

  onMounted(() => {
    // Check if it's a slug page and the Utterances script is not added
    if (params.slug && !utterancesScriptAdded.value) {
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', 'AkzhanBerdi/bad_dog');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('theme', 'boxy-light');
      script.setAttribute('crossorigin', 'anonymous');
      script.setAttribute('async', '');

      document.body.appendChild(script);
      utterancesScriptAdded.value = true;
    }
  });
</script>

<template>
  <article class="bg-white rounded-2xl">
    <ContentDoc :path="`/posts/${params.slug}`" v-slot="{ doc }">
      <header>
        <div class="text-center p-5">
          <h1 class="text-4xl font-semibold">{{ doc.title }}</h1>
          <div class="text-gray-500 text-sm mt-2">
            {{ formatDate(doc.date) }}
          </div>
        </div>

        <img :src="doc.thumbnail" class="w-full h-full object-cover" />
      </header>

      <div class="p-5 content">
        <div class="max-w-screen-lg mx-auto prose">
          <ContentRenderer :value="doc"></ContentRenderer>
        </div>
      </div>
    </ContentDoc>
  </article>
</template>

<style>
</style>
