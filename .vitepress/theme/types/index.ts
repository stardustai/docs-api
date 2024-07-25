interface Common {
  hidden?: boolean
  default?: string
  required?: boolean
  description?: string
}

interface BaseData extends Common {
  type: 'string' | 'integer' | 'long' | 'number' | 'boolean' | 'null' | 'file'
}

export interface ObjectData extends Common {
  type: 'object | object[]'
  properties: {
    [key: string]: Data
  }
}

export interface ArrayData extends Common {
  type: 'array'
  items: Data
}

export type Data = BaseData | ObjectData | ArrayData
