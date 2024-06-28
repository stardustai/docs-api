---
title: "异常"
slug: "errors"
createdAt: "Thu May 16 2024 14:00:48 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri May 17 2024 16:06:01 GMT+0000 (Coordinated Universal Time)"
---

## API error code

Stardust's API uses the following HTTP code:

| Error Code | Description                            |
| :--------- | :------------------------------------- |
| 400        | Illegal Parameter                      |
| 401        | Wrong Signature                        |
| 402        | Authentication Failed                  |
| 403        | Signature Expired                      |
| 404        | Not Found, the resource is missing     |
| 500        | Internal Error, please try again later |

::: code-group

```json [400 Example]
{
	"code": 400,
	"data": null,
	"date": "",
	"message": "Illegal Parameter",
	"requestId": "",
	"success": false
}
```
```json [404 Example]
{
	"code": 404,
	"data": null,
	"date": "",
	"message": "Not Found, the resource is missing",
	"requestId": "",
	"success": false
}
```
```json [500 Example]
{
	"code": 500,
	"data": null,
	"date": "",
	"message": "Internal Error, please try again later",
	"requestId": "",
	"success": false
}
```

:::
