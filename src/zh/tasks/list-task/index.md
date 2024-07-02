---
title: '任务列表'
slug: 'list-task'
description: 'This page will help you get started with list all tasks in a project.'
hidden: false
createdAt: 'Fri May 17 2024 08:13:16 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Fri May 17 2024 16:08:18 GMT+0000 (Coordinated Universal Time)'
---

<API
	method="GET"
	url="/project/tasks"
	:body="body"
	:results="results"
/>

<script setup>
import body from './body.json'
import results from './results.json'
</script>
