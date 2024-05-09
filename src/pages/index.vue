<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <p>Hello Vue Starter!</p>
    <Button>Click me</Button>

    <div flex="~ justify-center" mt-10>
      <Button @click="router.push('/base-analysis')">
        基础数据分析页
      </Button>
    </div>
  </div>
</template>

<style scoped></style>
