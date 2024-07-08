---
title: 'List Task'
description: 'This page will help you get started with list all tasks in a project.'
---

<API
	method="POST"
	url="/project/tasks"
	:body="body"
	:results="results"
/>

<script setup>
import body from './body.json'
import results from './results.json'
</script>
