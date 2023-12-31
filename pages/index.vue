<script setup lang="ts">

function formatDate(date: string) {
    const dt = new Date(date);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return dt.toLocaleDateString('en-US', options);
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
        <div class="h-[300px] relative">
            <img
                v-if="post.thumbnail" 
                :src="post.thumbnail"
                :alt="post.title"
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