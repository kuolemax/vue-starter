<script setup lang="ts">
// 左侧图表
const leftOptions = ref({
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
  },
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25],
      itemStyle: {
        color: 'var(hsl(--primary))',
      },
    },
  ],
})

nextTick(() => {
  changeColor()
})
const state = useStorage('theme', 'blue')

watchEffect(() => {
  console.log(state.value)
  changeColor()
})

function changeColor() {
  const computedStyle = window.getComputedStyle(document.querySelector('body')!)
  // 提取 --primary 和 --un-text-opacity 的值
  const primaryColor = computedStyle.getPropertyValue('--primary')
  const opacity = Number.parseFloat(computedStyle.getPropertyValue('--un-text-opacity')) || 1

  // 解析 HSL 颜色值
  const primaryHSL = primaryColor.match(/\d+(\.\d+)?/g)!
  const h = Number.parseFloat(primaryHSL[0])
  const s = Number.parseFloat(primaryHSL[1])
  const l = Number.parseFloat(primaryHSL[2])

  // 计算最终的RGBA颜色值
  const r = hslToRgb(h / 360, s / 100, l / 100)
  const rgbaColor = `rgba(${r.r}, ${r.g}, ${r.b}, ${opacity})`

  leftOptions.value.series[0].itemStyle.color = rgbaColor
}
</script>

<template>
  <div>
    Top Query Form
  </div>
  <div flex="~ justify-between" h-50vh>
    <div h-full w-40vw>
      <BarLineChart :option="leftOptions" />
    </div>
    <div h-full w-40vw>
      <BarLineChart :option="leftOptions" />
    </div>
  </div>
  <div>
    <ComplexDataTable />
  </div>
</template>

<style scoped></style>
