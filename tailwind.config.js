module.exports = {
  content: ['./.vitepress/**/*.{js,mts,ts,vue}', './**/*.md'],
  darkMode: 'class',
  important: 'html',
  plugins: [require('daisyui')],
  daisyui: {
    prefix: 'daisy-'
  }
}
