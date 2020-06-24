import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'
import orange from '@material-ui/core/colors/orange'

import './index.css'
import App from './App'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500],
        },
        secondary: {
            main: blue[500],
        },
    },
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
