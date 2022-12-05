import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import AppProvider from './context/AppProvider'
import Routers from './routers/Routers'

const App = () => (
    <AppProvider>
        <CssBaseline />
        <Routers />
    </AppProvider>
)

export default App
