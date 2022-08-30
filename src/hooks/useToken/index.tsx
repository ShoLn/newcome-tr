import axios from 'axios'
import { useState, useEffect } from 'react'
import { SuccessType } from '../../apis/type'

// Type
export type Body = {
  account: string
  password: string
}

export type LoginDto = {
  accessToken: string
}

// Hook
const login = async (body: Body): Promise<SuccessType<LoginDto>> => {
  const res = await axios.post('/auth/login', body)

  return res.data
}

export const useToken = (body: Body) => {
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    const getToken = async () => {
      const { data } = await login(body)
      setToken(data.accessToken)
    }

    getToken()
  }, [body])

  return token
}
