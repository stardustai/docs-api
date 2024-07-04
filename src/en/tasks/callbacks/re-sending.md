---
title: 'Re-sending a Callback'
hidden: false
createdAt: 'Fri May 17 2024 08:13:16 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Fri May 17 2024 16:08:18 GMT+0000 (Coordinated Universal Time)'
---

<API
	method="POST"
	url="/task/{taskId}/callback"
	:path="path"
	:results="results"
/>

<script setup>
const path = {
  "taskId": {
    "type": "string",
    "description": "Task Id"
  }
}

const results = {
  200: {
    "code": 200,
    "message": "Success",
    "data": null,
    "date": "2024-05-17 17:45:50",
    "requestId": "77bdf4cd171593981208210031afb4",
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
