<script setup lang="ts">
defineProps({
  option: {},
})

const selectValue = ref('option1')

watchEffect(() => {
  console.log(selectValue.value)
})
</script>

<template>
  <div relative h-full w-full>
    <VChart :option="option" autoresize />
    <div class="chart-select">
      <Select v-model="selectValue">
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="option1">
              Option 1
            </selectitem>
            <SelectItem value="option2">
              Option 2
            </selectitem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>

<style scoped>
.chart-select {
  position: absolute;
  top: 2.7%;
  right: 5%;
  z-index: 10;
  width: 150px;
}
</style>
