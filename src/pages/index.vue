<script setup lang="ts">

</script>

<template>
  <div>
    <p>Hello Vue Starter!</p>
    <Button>Click me</Button>

    <Select>
      <SelectTrigger class="w-80">
        <SelectValue placeholder="Select an Color" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="red">
            Red
          </SelectItem>
          <SelectItem value="green">
            Green
          </SelectItem>
          <SelectItem value="blue">
            Blue
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<style scoped></style>
