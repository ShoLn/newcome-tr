import { useMemo } from 'react'
import { useTable } from 'react-table'
import { useToken } from '../../hooks/useToken'
import { useHistory } from '../../hooks/useHistory'
import { loginBody } from '../react-query'

import Box from '@mui/material/Box'


// 請用由 useHistory 串接來的資料，做出有每筆資料 id、device.category、device.roomName 這三直行的表格
// 共一頁 15 筆資料就好，不規定樣式
const TableFetchPage = () => {
  const token = useToken(loginBody)
  const { data, isLoading } = useHistory({ limit: 15 }, token)

  return (
    <Box sx={{ pt: '2rem' }}>
      Fetched Data Table
    </Box>
  )
}

export default TableFetchPage
