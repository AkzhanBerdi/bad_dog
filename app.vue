<script setup lang="ts">

import CommentWidget from './components/content/CommentWidget.vue';

useSeoMeta({
  title: 'Bad Dog Data',
  ogTitle: 'Bad Dog Data',
  description: 'Self-Taught Data Science / Machine Learning Journal',
  ogDescription: 'Self-Taught Data Science / Machine Learning Journal',
  ogImage: 'https://baddogdata.com/img/hello_world.png',
  ogType: 'website',
  ogUrl: 'https://baddogdata.com/',
});

useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-VSDTCMMC1P',
      async: true,
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VSDTCMMC1P');
      `,
    },
    // {
    //   type: 'text/javascript',
    //   innerHTML:`
    //   const script = window.document.createElement('script');
    //   script.src = 'https://utteranc.es/client.js';
    //   script.setAttribute('repo', 'AkzhanBerdi/bad_dog');
    //   script.setAttribute('issue-term', 'pathname');
    //   script.setAttribute('theme', 'boxy-light');
    //   script.setAttribute('crossorigin', 'anonymous');
    //   script.setAttribute('async', '');

    //   window.document.body.appendChild(script);
    //   `,
    //   tagPosition: 'bodyClose',
    //   async: true,
    // }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
  ],
  htmlAttrs: {
      lang: 'en',
      //style: 'font-size: 13px',
    },
})
;
</script>

<template>
  <div class="max-w-3xl px-4 mx-auto">
    <!-- <Header> -->
      <header class="mt-8 mb-4 flex justify-between items-end">
        <div>
          <h1 class="text-2xl font-semibold">
            <NuxtLink to="/">Bad Dog Data</NuxtLink>
          </h1>
          <p class="text-gray-500">Self-Taught Data-Science / Machine Learning Journal</p>
        </div>

        <div class="align-right">
          <!-- <Btn>
            <a href="https://baddogdata.com/hello-world" target="_blank">About me</a>
          </Btn> -->
          <Btn>
            <a href="https://www.linkedin.com/in/akzhanberdi" target="_blank">DM Author</a>
          </Btn>
          <Btn>
            <a href="https://t.me/baddogdata" target="_blank">Community</a>
          </Btn>
        </div>

      </header>
        <NuxtPage />
        <CommentWidget />
  </div>
</template>

<style>
body {
  /* @apply bg-gray-100; */
  background-color: #f2f2f2; 
  font-size: 0.875rem; 
}
.align-right {
  text-align: right;
}
</style>