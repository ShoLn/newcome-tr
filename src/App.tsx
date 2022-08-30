import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Routes from './Routes'
// 請先到'./components/ThemeProvider'了解基本主題設置
import ThemeProvider from './components/ThemeProvider'
// 下面 QueryProvider 到之後 React Query 章節再看就好
import QueryProvider from './components/QueryProvider'

const Navbar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: 10,
        bgcolor: 'transparent',
      }}
    >
      <Link to="/">Home</Link> |&nbsp;
      <Link to="mui-sx">Mui SX</Link> |&nbsp;
      <Link to="mui-styling">Mui Style</Link> |&nbsp;
      <Link to="react-query">React Query</Link> |&nbsp;
      <Link to="table-basic">Table Basic</Link> |&nbsp;
      <Link to="table-fetch">Table Fetch</Link> |&nbsp;
    </Box>
  )
}

// 主要應用程式
function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </ThemeProvider>
    </QueryProvider>
  )
}

export default App
