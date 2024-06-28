<template>
	<span class="underline decoration-dotted daisy-tooltip" :data-tip="glossary[title]">
  	{{ title }}
	</span>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
}>();

const glossary = {
	"MorningStar": "MorningStar is a cutting-edge, full-stack AI data platform designed specifically for the AI 2.0 era launched by Stardust.",
	"Rosetta": "Rosetta is a powerful and versatile platform designed to streamline your AI labeling and data management workflows. It can be seamlessly integrated into MorningStar or used as a standalone product, catering to various data annotation and human feedback needs.",
}
</script>
