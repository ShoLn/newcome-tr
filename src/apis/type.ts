import { AxiosError } from 'axios'

export interface AxiosErrorType {
  statusCode: number
  message: string
  code: string
}

export type ErrorType = AxiosError<AxiosErrorType>
export type SuccessType<D> = { message: string; data: D }
