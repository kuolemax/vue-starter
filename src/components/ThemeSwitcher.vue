<script setup>
const iconClass = ref('pi-moon')

function onThemeToggler() {
  const root = document.getElementsByTagName('html')[0]

  root.classList.toggle('dark')
  iconClass.value = iconClass.value === 'pi-moon' ? 'pi-sun' : 'pi-moon'
}
</script>

<template>
  <div class="card fixed right-5 top-5 mb-4 flex justify-end p-2">
    <button
      type="button"
      class="flex cursor-pointer rounded-full border-none bg-purple-500 p-3 text-white transition-duration-200 hover:bg-purple-600"
      @click="onThemeToggler"
    >
      <i :class="`dark:text-white pi ${iconClass}`" />
    </button>
  </div>
</template>
