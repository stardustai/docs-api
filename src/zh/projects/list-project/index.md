---
title: "List Project"
slug: "list-project"
description: "This page will help you get started with list project."
hidden: false
createdAt: "Fri May 17 2024 08:03:01 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri May 17 2024 16:07:06 GMT+0000 (Coordinated Universal Time)"
---

<API
	method="POST"
	url="/project/list"
	:body="body"
	:results="results"
/>

<script setup>
import results from './results.json'

const body = {
	status: {
		type: 'integer',
		default: 1,
		description: 'status'
	},
	dataType: {
		type: 'integer',
		default: 1,
		description: 'project data type'
	},
	offset: {
		type: 'integer',
		default: 1,
		description: 'Start page number'
	},
	limit: {
		type: 'integer',
		default: 10,
		description: 'Number of posts per page'
	},
}
</script>
