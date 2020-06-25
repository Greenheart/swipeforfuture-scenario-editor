import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import './index.css'
import App from './App'

const theme = createMuiTheme({
    palette: {
        common: {
            black: 'rgba(0, 13, 10, 1)',
            white: 'rgba(251, 254, 249, 1)',
        },
        background: {
            paper: 'rgba(251, 254, 249, 1)',
            default: 'rgba(251, 254, 249, 1)',
        },
        primary: {
            light: 'rgba(10, 177, 255, 1)',
            main: 'rgba(0, 158, 234, 1)',
            dark: 'rgba(0, 139, 204, 1)',
            contrastText: 'rgba(251, 254, 249, 1)',
        },
        secondary: {
            light: 'rgba(249, 118, 57, 1)',
            main: 'rgba(248, 102, 36, 1)',
            dark: 'rgba(237, 80, 7, 1)',
            contrastText: 'rgba(251, 254, 249, 1)',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: 'rgba(251, 254, 249, 1)',
        },
        text: {
            primary: 'rgba(0, 13, 10, 1)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
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
