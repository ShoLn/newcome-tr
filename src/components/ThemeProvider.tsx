import { ComponentType, ReactNode } from 'react'
// Theme 的相關建置 參考 https://mui.com/material-ui/customization/theming/#theme-provider
import { ThemeProvider, createTheme } from '@mui/material/styles'
// CSS 的normalize 參考 https://mui.com/material-ui/react-css-baseline/
import { CssBaseline } from '@mui/material'

// Type
interface Props {
  children: ReactNode
}

// Provider
const CustomThemeProvider: ComponentType<Props> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1f2678',
      },
      secondary: {
        main: '#666666',
      }
    },
    // 
    typography:{
      h1:{
        fontWeight:500,
        fontSize:"24px",
        letterSpacing:"0.27px"
      },
      h2:{
        fontWeight:700,
        fontSize:"14px",
      }
    },
    spacing:4
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider
