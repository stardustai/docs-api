module.exports = {
	content: [
		'./.vitepress/**/*.{js,ts,vue}',
		'./**/*.md',
	],
  darkMode: 'class',
	plugins: [
    require('daisyui'),
  ],
	daisyui: {
    prefix: "daisy-"
  },
}
