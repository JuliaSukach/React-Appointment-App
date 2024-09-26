import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route exact path='/'></Route>
                <Route path='/confirmed'></Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
