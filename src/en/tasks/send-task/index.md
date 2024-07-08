---
title: 'Send Tasks'
description: 'This page will help you get started with send annotation tasks to a project.'
---

<API
	method="POST"
	url="/task/send"
	:body="body"
	:results="results"
/>

<script setup>
import body from './body.json'
import results from './results.json'
</script>
