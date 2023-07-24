export interface IBaseResponse<T> {
  errMsg: string
  code: number
  data: T
}
