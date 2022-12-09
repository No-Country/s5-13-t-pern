import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@mui/material/styles'
import Theme from '../src/theme/Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={Theme}>
        <App />
    </ThemeProvider>
)
