import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Box } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "@/scenes/navbar/Index"

function App() {

  const theme = useMemo(() => createTheme(themeSettings), [])

  return (<div className="app">

    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar />
          <Routes>
            <Route path='/' element={<div>Dashboard Page</div>} />
            <Route path='/prediction' element={<div>Prediction Page</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  </div>)
}

export default App
