::: code-group

```json [Algorithm Sample]
{
  "pools": [
    {
      "name": "Distribution pool",
      "runMode": 0,
      "type": 0,
      "workers": []
    },
    {
      "name": "Algorithm pool",
      "algorithmList": ["3D-MOT-V1"],
      "runMode": 1,
      "type": 4
    },
    {
      "name": "Labeling pool",
      "type": 1,
      "workers": [],
      "disableOperationItem": []
    },
    {
      "name": "Inspection pool",
      "type": 2,
      "workers": [],
      "disableOperationItem": []
    },
    {
      "name": "Spot check pool",
      "type": 3,
      "workers": []
    },
    {
      "name": "Completion pool",
      "type": 5,
      "workers": []
    }
  ]
}
```

```json [Default Sample]
{
  "pools": [
    {
      "name": "Distribution pool",
      "runMode": 0,
      "type": 0,
      "workers": []
    },
    {
      "name": "Labeling pool",
      "type": 1,
      "workers": [],
      "disableOperationItem": []
    },
    {
      "name": "Inspection pool",
      "type": 2,
      "workers": [],
      "disableOperationItem": []
    },
    {
      "name": "Completion pool",
      "type": 5,
      "workers": []
    }
  ]
}
```

:::
