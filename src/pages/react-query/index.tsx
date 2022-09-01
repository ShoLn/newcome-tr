import { useToken } from '../../hooks/useToken'
import { useHistory } from '../../hooks/useHistory'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'


export const loginBody = {
  account: process.env.REACT_APP_ACCOUNT!,
  password: process.env.REACT_APP_HELLOKITTY!,
}



const ReactQueryPage = () => {
  const token = useToken(loginBody)
  console.log("token" ,token);
  const { data, isLoading } = useHistory({ limit: 15 }, token)
  return (
    <Box sx={{ pt: '2rem' }}>
      ReactQueryPage
      {isLoading ? <Typography>Loading....</Typography>: (
        <>
         <Typography>
           Counts: {data?.counts}
         </Typography>
         <Typography>
           data: {JSON.stringify(data?.data)}
         </Typography>
        </>
      )}
    </Box>
  )
}

export default ReactQueryPage
