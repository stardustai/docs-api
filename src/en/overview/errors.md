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
    <th colspan="2">Business-specific Codes</th>
  </tr>
  <tr>
    <td>5308</td>
    <td>Dataset not exists</td>
  </tr>
  <tr>
    <td>5708</td>
    <td>File size exceeds 100MB limit</td>
  </tr>
  <tr>
    <td>5709</td>
    <td>File must be in ZIP format</td>
  </tr>
  <tr>
    <td>5710</td>
    <td>File tree misalignment, refer to API doc for correction</td>
  </tr>
  <tr>
    <td>5801</td>
    <td>Project name already exists</td>
  </tr>
  <tr>
    <td>5836</td>
    <td>Folder name already exists</td>
  </tr>
  <tr>
    <td>5838</td>
    <td>Wrong data type</td>
  </tr>
  <tr>
    <td>5839</td>
    <td>Operation item structure error</td>
  </tr>
  <tr>
    <td>5840</td>
    <td>Project manager not exists</td>
  </tr>
  <tr>
    <td>5841</td>
    <td>Workflow structure error</td>
  </tr>
  <tr>
    <td>5842</td>
    <td>Project not exists</td>
  </tr>
  <tr>
    <td>5843</td>
    <td>Algorithm is not available</td>
  </tr>
  <tr>
    <td>5844</td>
    <td>Algorithm Mapping structure error</td>
  </tr>
  <tr>
    <td>5845</td>
    <td>Workflow not exists</td>
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
