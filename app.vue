<template>
  <div class="max-w-3xl px-4 mx-auto">
    <!-- <Header> -->
      <header class="mt-8 mb-4 flex justify-between items-end">
        <div>
          <h1 class="text-2xl font-semibold">
            <NuxtLink to="/">Bad Dog Data</NuxtLink>
          </h1>
          <p class="text-gray-500">From Basic Stats To ML</p>
        </div>

        <div class="align-right">
          <Btn>
            <a href="https://www.linkedin.com/in/akzhanberdi" target="_blank">LinkedIn Me</a>
          </Btn>
          <Btn>
            <a href="https://t.me/akzhan_berdi" target="_blank">Telegram Me</a>
          </Btn>
        </div>

      </header>
    <!-- </Header> -->
      <!-- <MainContent>  -->
        <NuxtPage />
      <!-- </MainContent> -->
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