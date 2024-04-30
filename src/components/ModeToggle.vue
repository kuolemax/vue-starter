<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '~/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '~/components/ui/dropdown-menu'

const themes = ['blue', 'green']
const modes = ['light', 'dark', 'auto'] as any[]
const mode = useColorMode()
switchTheme(localStorage.getItem('theme') || 'blue')
function getColor() {
  return `bg-${localStorage.getItem('theme')}`
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0 dark:-rotate-90" />
        <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem v-for="m in modes" :key="m" @click="mode = m">
        {{ m }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <span class="h-[1.2rem] w-[1.2rem] rounded-full bg-primary" />
        <span ml-2>Toggle color</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem v-for="theme in themes" :key="theme" @click="switchTheme(theme)">
        {{ theme }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
