<script setup lang="ts">
</script>

<template>
  <ThemeSwitcher />
  <section
    class="max-w-3xl flex flex-col gap-8 rounded-xl bg-white p-10 dark:bg-purple-700/30"
  >
    <h1 class="mb-3 text-center text-4xl text-black font-bold dark:text-white">
      Uno CSS + PrimeVue
    </h1>
    <Panel header="PrimeVue Panel">
      <p>This panel is styled with the default preset of UnoCSS.</p>
    </Panel>
  </section>
  <div>
    <Button>
      Button
    </Button>
  </div>
</template>

<style scoped></style>
