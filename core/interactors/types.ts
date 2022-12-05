
export type InteractorResult<T> = (result: T)=>void
export type InteractorError = (error: Error)=>void

export interface Error {
  key?: string
  message?: string
}

export interface InteractorListener<T> {
  result: InteractorResult<T>
  error?: InteractorError
}
