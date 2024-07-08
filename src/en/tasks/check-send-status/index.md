---
title: 'Check Send Status'
---

<API
	method="POST"
	url="/task/send/status"
	:body="body"
	:results="results"
/>

<script setup>
import body from './body.json'
import results from './results.json'
</script>
