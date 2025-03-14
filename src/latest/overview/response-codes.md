---
title: 'Response Codes'
description: Stardust's API uses the following HTTP codes and business-specific codes.
---

##

<table>
  <tr>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>200</td>
    <td>Success</td>
  </tr>
  <tr>
    <td>500</td>
    <td>Service hiccuped, please try again later</td>
  </tr>
</table>

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
  "code": 5000,
  "data": null,
  "date": "",
  "message": "Service hiccuped, please try again later",
  "requestId": "",
  "success": false
}
```

:::
