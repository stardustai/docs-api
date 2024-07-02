---
title: '重新发送回调'
hidden: false
createdAt: 'Fri May 17 2024 08:13:16 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Fri May 17 2024 16:08:18 GMT+0000 (Coordinated Universal Time)'
---

<API
	method="POST"
	url="/task/{taskId}/callback"
	:body="body"
	:results="results"
/>

<script setup>
const body = {
	taskId: {
		type: 'string',
		default: '358183635595169792',
		description: 'Task ID'
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
