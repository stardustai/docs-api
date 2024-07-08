---
title: 'Errors'
---

## API error code

Stardust's API uses the following HTTP codes and business-specific codes:

<table>
	<tr>
		<th>Error Code</th>
		<th>Description</th>
	</tr>
	<tr>
	  <td>400</td>
	  <td>Illegal Parameter</td>
	</tr>
	<tr>
	  <td>401</td>
	  <td>Wrong Signature</td>
	</tr>
	<tr>
	  <td>402</td>
	  <td>Authentication Failed</td>
	</tr>
	<tr>
	  <td>403</td>
	  <td>Signature Expired </td>
	</tr>
	<tr>
	  <td>404</td>
	  <td>Not Found, the resource is missing</td>
	</tr>
	<tr>
	  <td>500</td>
	  <td>Internal Error, please try again later</td>
	</tr>
	<tr>
	  <td colspan="2"></td>
	</tr>
	<tr>
	  <td>5801</td>
	  <td rowspan="2">The project name already exists</td>
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
  "code": 500,
  "data": null,
  "date": "",
  "message": "Internal Error, please try again later",
  "requestId": "",
  "success": false
}
```

:::
