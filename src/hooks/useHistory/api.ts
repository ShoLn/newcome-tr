import axios from 'axios'
import { HistoryFetcherType } from './type'

// 如果對 axios 還不熟，可以看它文件的 Example、axios API 這兩個段落的程式碼
// https://github.com/axios/axios#example

export const historyFetcher: HistoryFetcherType = async (context) => {
  const [, params, token] = context.queryKey

  const res = await axios.get('/history/log', {
    params: {
      // 這裡可以放一些這支API需要預設的搜尋條件
      type: 'telemetry',
      limit: 10,
      alive: 0,
      powerOff: 1,
      // 再與傳入的 params merge
      ...params,
    },
    headers: { Authorization: 'Bearer ' + token },
  })

  return res.data.data
}
