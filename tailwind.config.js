module.exports = {
  content: ['./.vitepress/**/*.{js,mts,ts,vue}', './**/*.md'],
  darkMode: 'class',
  plugins: [require('daisyui')],
  daisyui: {
    prefix: 'daisy-'
  }
}
