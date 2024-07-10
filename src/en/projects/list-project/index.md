---
title: 'List Project'
description: 'This page will help you get started with list project.'
api:
  method: POST
  url: /project/list
---

<Params
  :body="body"
  :results="results"
/>

<script setup>
import results from './results.json'

const body = {
  status: {
    type: 'integer',
    description: 'status: 0 represents DRAFT, 1 represents START, 2 represents PAUSE, 3 represents DONE'
  },
  dataType: {
    type: 'integer',
    description: 'project data type: 1 represents TEXT, 2 represents 2D, 3 represents 3D'
  },
  offset: {
    type: 'integer',
    default: 1,
    description: 'Start page number',
        required: false
  },
  limit: {
    type: 'integer',
    default: 10,
    description: 'Number of posts per page',
        required: false
  },
}
</script>
