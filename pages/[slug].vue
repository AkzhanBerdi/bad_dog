<script setup lang="ts" >

const { slug } = useRoute().params;

function formatDate(date: string) {
    const dt = new Date(date);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return dt.toLocaleDateString('en-US', options);
}
</script>

<template>
    <article class="bg-white rounded-2xl">
        <ContentDoc :path="`/posts/${slug}`" v-slot="{ doc }">

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