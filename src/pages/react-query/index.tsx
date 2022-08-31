import { useToken } from '../../hooks/useToken'
import { useHistory } from '../../hooks/useHistory'
import Box from '@mui/material/Box'


export const loginBody = {
  account: process.env.REACT_APP_ACCOUNT!,
  password: process.env.REACT_APP_HELLOKITTY!,
}



const ReactQueryPage = () => {
  const token = useToken(loginBody)
  console.log(token)

  const { data, isLoading } = useHistory({ limit: 15 }, token)
  console.log(data)

  return (
    <Box sx={{ pt: '2rem' }}>
      ReactQueryPage
      {!isLoading && JSON.stringify(data)}
    </Box>
  )
}

export default ReactQueryPage
