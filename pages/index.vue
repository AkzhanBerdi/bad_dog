<script setup lang="ts">

function formatDate(date: string){
   const dt =  new Date(date)

   return `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`
}
</script>

<template>
    <div>
      <ContentList 
        path="/posts"
        :query="{
            draft: false,
            sort: [
                {
                    date: -1,
                },
            ],
        }"
        v-slot="{ list }"
      >
        <div 
            v-for="post in list"
            :key="post._path"
            class="blog-card bg-white rounded-2xl overflow-hidden mb-4"
        >
        <div class="h-[320px] relative">
            <img 
                :src="post.thumbnail"
                class="w-full h-full object-cover absolute" 
            />
        </div>

        <div class="blog-card--meta p-4">
            <h3 class="text-2xl font-semibold">
                <NuxtLink :to="`/${post.slug}`">{{ post.title }}</NuxtLink>
            </h3>
            <div class="text-sm text-gray-500 mt-px">
                {{ formatDate(post.date) }}
            </div>
        </div>
    </div>
    </ContentList>
    </div>
</template>