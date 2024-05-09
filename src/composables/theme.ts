export function switchTheme(theme: string) {
  // 获取<body>元素
  const body = document.querySelector('body')!

  // 删除以 "theme-" 开头的class
  const bodyClasses = body.classList
  for (let i = bodyClasses.length - 1; i >= 0; i--) {
    if (bodyClasses[i].startsWith('theme-'))
      bodyClasses.remove(bodyClasses[i])
  }

  // 添加新class
  body.classList.add(`theme-${theme}`)
  const themeState = useStorage('theme', '')
  themeState.value = theme
}
