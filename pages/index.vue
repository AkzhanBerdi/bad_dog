<template>
  <div class="max-w-3xl px-4 mx-auto">

    <!-- Article -->
    <article class="bg-white rounded-2xl px-8 py-10 mt-8 mb-8">

      <header class="mb-8">
        <p class="text-xs text-gray-400 uppercase tracking-widest mb-3">Since December 16, 2023</p>
        <h1 class="text-2xl font-semibold leading-snug">
          Greetings to all curious minds!
        </h1>
      </header>

      <img
        src="/img/hello_world.png"
        alt="Bad Dog Data"
        class="w-full rounded-xl mb-8 object-cover"
      />

      <div class="prose prose-gray max-w-none">

        <p>
          I'm Akzhan — a Data &amp; AI Team Lead based in Almaty, Kazakhstan, and this is Bad Dog Data.
        </p>

        <p>
          I started this blog in 2023 when I was a Data Product Manager at a marketplace, mostly
          writing for myself and anyone curious enough to read about statistics, engineering, and
          the occasional rabbit hole. The posts were technical, a bit rough, and genuinely fun to
          write. That part hasn't changed.
        </p>

        <p>
          Today, I lead a data team dedicated to cross-border e-commerce. My
          day-to-day is spent building the middleware and intelligence layers that connect massive
          international marketplaces to local platforms. We handle heavy market data ingestion,
          pull and normalize complex partner feeds, and build RAG (Retrieval-Augmented Generation)
          systems for dynamic resource localization. We also design and implement dynamic pricing
          pipelines that react in real-time to global market signals.
        </p>

        <p>
          I also write open source. Right now, I'm implementing my library, lyubishchev, directly
          into our day-to-day production workflows. The R package is already out in the wild, and
          I'm actively preparing to propose the Python version for inclusion in SciPy and
          scikit-learn.
        </p>

        <p>
          This blog still lives at the intersection of data, business, and the human experience.
          Some posts will be deep technical dives into vector search layers, dynamic pricing
          models, or normalization pipelines. Others will be about what actually happens when you
          try to build resilient data systems across borders with real constraints, messy APIs,
          and real politics.
        </p>

        <p>
          If you're an engineer or analyst — welcome, there's plenty here for you. If you're a
          product owner or decision-maker trying to figure out how to leverage RAG, complex
          partner data, or automated pricing for your business — you might find this useful too.
        </p>

        <p>
          Yours,<br />
          Bad Dog.
        </p>
      </div>
    </article>

    <!-- Get in touch -->
    <section class="bg-white rounded-2xl px-8 py-10 mb-8">

      <h2 class="text-lg font-semibold mb-1">Get in touch</h2>
      <p class="text-gray-500 text-sm mb-6">
        Tell me what you're working on — I'll come back with a clear picture of how I can help.
      </p>

      <div class="flex flex-col gap-3">

        <!-- WhatsApp -->
        <a
          href="https://wa.me/77713974173"
          target="_blank"
          class="flex items-center gap-4 rounded-xl border border-green-200 bg-green-50 px-5 py-4 hover:bg-green-100 transition-colors"
        >
          <span class="text-xl">✓</span>
          <div>
            <p class="font-medium text-sm">WhatsApp</p>
            <p class="text-xs text-gray-500">+7 771 397 4173 — fastest response</p>
          </div>
        </a>

        <!-- Telegram -->
        <a
          href="https://t.me/akzhan_berdi"
          target="_blank"
          class="flex items-center gap-4 rounded-xl border border-gray-200 px-5 py-4 hover:bg-gray-50 transition-colors"
        >
          <span class="text-xl">✈</span>
          <div>
            <p class="font-medium text-sm">Telegram</p>
            <p class="text-xs text-gray-500">@akzhan_berdi</p>
          </div>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://linkedin.com/in/akzhanberdi"
          target="_blank"
          class="flex items-center gap-4 rounded-xl border border-gray-200 px-5 py-4 hover:bg-gray-50 transition-colors"
        >
          <span class="text-xl font-bold text-sm">in</span>
          <div>
            <p class="font-medium text-sm">LinkedIn</p>
            <p class="text-xs text-gray-500">linkedin.com/in/akzhanberdi</p>
          </div>
        </a>

        <!-- Email -->
        <a
          href="mailto:akzhan.berdeyev@gmail.com"
          class="flex items-center gap-4 rounded-xl border border-gray-200 px-5 py-4 hover:bg-gray-50 transition-colors"
        >
          <span class="text-xl">@</span>
          <div>
            <p class="font-medium text-sm">Email</p>
            <p class="text-xs text-gray-500">akzhan.berdeyev@gmail.com</p>
          </div>
        </a>

      </div>
    </section>

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Bad Dog Data',
  ogTitle: 'Bad Dog Data',
  description: 'Bad Dog Data has evolved. From a data science journal to a consulting practice — still technical, now global.',
  ogDescription: 'Bad Dog Data has evolved. From a data science journal to a consulting practice — still technical, now global.',
  ogImage: 'https://baddogdata.com/img/hello_world.png',
  ogType: 'website',
  ogUrl: 'https://baddogdata.com/',
})
</script>