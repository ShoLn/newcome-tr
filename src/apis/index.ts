import axios from 'axios'
const basicURL = 'http://localhost:3002/v1'

export const basicRequest = axios.create({
  baseURL: basicURL,
})

export const historyLogRequest = axios.create({
  baseURL: `${basicURL} + '/history/log'`,
})
