export interface Data {
  type:
    | 'string'
    | 'integer'
    | 'long'
    | 'number'
    | 'boolean'
    | 'object'
    | 'array'
    | 'null'
    | 'file'
  description?: string
  required?: boolean
  default?: string
  children?: object
}
