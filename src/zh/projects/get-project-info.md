---
title: "项目详情"
slug: "get-project-info"
description: "This page will help you get started with retrieve project information."
hidden: false
createdAt: "Fri May 17 2024 08:08:23 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri May 17 2024 16:01:31 GMT+0000 (Coordinated Universal Time)"
---

<API
	method="GET"
	url="/project/get"
	:query="query"
	:results="results"
/>

<script setup>
const query = {
	projectId: {
		type: 'long',
		default: 128,
		description: 'project id'
	},
}
const results = {
	200: {
    "code": 200,
    "message": "Success",
    "data": {
        "description": "this project description",
        "created_at":"2024-04-22"
    },
    "date": "2024-05-17 16:04:53",
    "requestId": "71c3ddd6171593314607810011afb4",
    "success": true
	},
	400: {
		"code": 400,
		"data": null,
		"date": "",
		"message": "Illegal Parameter",
		"requestId": "",
		"success": false
	}
}
</script>
