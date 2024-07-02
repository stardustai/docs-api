---
title: 'Send Tasks'
slug: 'send-task'
description: 'This page will help you get started with send annotation tasks to a project.'
hidden: false
metadata:
  image: []
  keywords: 'Send Annotation Task'
  robots: 'index'
createdAt: 'Thu May 16 2024 13:39:14 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Fri May 17 2024 16:22:02 GMT+0000 (Coordinated Universal Time)'
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
