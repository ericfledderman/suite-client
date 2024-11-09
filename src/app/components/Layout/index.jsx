import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ minHeight: '100dvh', width: '100dvw ' }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}