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
  <tr><td>50522</td><td>The pool vertex information is incorrect.</td></tr>
  <tr><td>50523</td><td>The last pool is not the finish pool.</td></tr>
  <tr><td>50524</td><td>The workflow template name already exists.</td></tr>
  <tr><td>50525</td><td>The pool name in the workflow template is the same.</td></tr>
  <tr><td>50526</td><td>There are some pools that have no edges.</td></tr>
  <tr><td>50527</td><td>The annotaion/check/sampling/algorithm pool can output only one edge.</td></tr>
  <tr><td>50528</td><td>The number of pools exceeds the limit of 20.</td></tr>
  <tr><td>50529</td><td>TemplateName is already exists.</td></tr>
  <tr><td>50530</td><td>The pool type has not exists.</td></tr>
  <tr><td>50531</td><td>The completion pool cannot be connected to other pools.</td></tr>
  <tr><td>51001</td><td>Do not create campaign repeatedly.</td></tr>
  <tr><td>51002</td><td>Unknown annotation type.</td></tr>
  <tr><td>51002</td><td>Unknown campaignType.</td></tr>
  <tr><td>51003</td><td>campaignId is already exists.</td></tr>
  <tr><td>51004</td><td>campaignName is already exists.</td></tr>
  <tr><td>51005</td><td>Campaign create has error.</td></tr>
  <tr><td>51006</td><td>CampaignId not exists.</td></tr>
  <tr><td>51007</td><td>workflowType error.</td></tr>
  <tr><td>51008</td><td>Campaign not exists.</td></tr>
  <tr><td>51009</td><td>campaignName not exists.</td></tr>
  <tr><td>52001</td><td>Create workflow failed.</td></tr>
  <tr><td>52002</td><td>Workflow pool is empty.</td></tr>
  <tr><td>53001</td><td>Do not create annotation request repeatedly.</td></tr>
  <tr><td>53002</td><td>Create annotation request has error.</td></tr>
  <tr><td>53003</td><td>Annotation request has not exists.</td></tr>
  <tr><td>53004</td><td>annotationRequestId is already exists.</td></tr>
  <tr><td>53005</td><td>annotationRequestName is already exists.</td></tr>
  <tr><td>53006</td><td>Unknown folder relation.</td></tr>
  <tr><td>53007</td><td>folder is not exists.</td></tr>
  <tr><td>54001</td><td>folder already exists.</td></tr>
  <tr><td>54002</td><td>folderId already exists.</td></tr>
  <tr><td>54003</td><td>Name already exists.</td></tr>
  <tr><td>54004</td><td>folderId is not exists.</td></tr>
  <tr><td>54004</td><td>folderName is not exists.</td></tr>
  <tr><td>54005</td><td>Create folder failed.</td></tr>
  <tr><td>54006</td><td>HelixBucketName already exists.</td></tr>
  <tr><td>54007</td><td>Bucket connection failed. Check whether the bucket exists.</td></tr>
  <tr><td>54008</td><td>Folder status has not exists.</td></tr>
  <tr><td>54009</td><td>Update folder failed.</td></tr>
  <tr><td>55001</td><td>Description Failed to create a pool.</td></tr>
  <tr><td>55002</td><td>Workflow not found.</td></tr>
  <tr><td>55003</td><td>Pools are not the type of work.</td></tr>
  <tr><td>55004</td><td>The AR pool subtype must match the campaign type.</td></tr>
  <tr><td>55005</td><td>Pool not found.</td></tr>
  <tr><td>56001</td><td>SceneId is not exists.</td></tr>
</table>

::: code-group

```json [2000 Example]
{
  "code": 2000,
  "data": null,
  "date": "2025-03-13 20:00:00",
  "message": "",
  "requestId": "7610aa38c0fc409d98c827a879d9cae5",
  "success": true
}
```

```json [5000 Example]
{
  "code": 5000,
  "data": null,
  "date": "2025-03-13 20:00:00",
  "message": "Service hiccuped, please try again later",
  "requestId": "7610aa38c0fc409d98c827a879d9cae5",
  "success": false
}
```

:::
