---
title: "导出任务"
slug: "export-task"
description: "Export all data of the task, include annotation results, metadata, assets, etc."
hidden: false
createdAt: "Fri May 17 2024 08:08:23 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri May 17 2024 16:01:31 GMT+0000 (Coordinated Universal Time)"
---

<API
	method="POST"
	url="/tasks/export"
	:body="body"
	:results="results"
/>

<script setup>
import results from './results'

const body = {
	projectId: {
		type: 'long',
		default: 2695,
		description: 'project id'
	},
	completeTimeAfter: {
		type: 'string',
		default: '2023-04-01',
		description: 'Complete time of task after the date, include the day'
	},
	completeTimeBefore: {
		type: 'string',
		default: '2023-05-01',
		description: 'Complete time of task before the date'
	},
	taskIds: {
		type: 'long[]',
		default: [],
		description: 'Task Id List'
	},
}
</script>
