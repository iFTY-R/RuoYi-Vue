import { defineConfig, presetAttributify, presetMini , presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetMini(),
    // presetAttributify(), // 属性化模式预设
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: [
    // 自定义快捷方式
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['btn-primary', 'bg-blue-500 hover:bg-blue-600 text-white'],
    ['btn-secondary', 'bg-gray-500 hover:bg-gray-600 text-white'],
  ],
  rules: [
    // 自定义规则
  ],
  theme: {
    colors: {
      // 自定义颜色
      primary: '#409eff',
      success: '#67c23a',
      warning: '#e6a23c',
      danger: '#f56c6c',
      info: '#909399',
    }
  }
})