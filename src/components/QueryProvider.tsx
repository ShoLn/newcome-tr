import axios from 'axios'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
// 若不知道下面這行在做什麼，快速看一眼 https://github.com/axios/axios#config-defaults 的 Config Defaults 段落就好
axios.defaults.baseURL = 'http://localhost:3002/v1'

// Type
interface Props {
  children: ReactNode
}

// Provider
const CustomQueryProvider = ({ children }: Props) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default CustomQueryProvider
