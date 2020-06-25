import React from 'react'
import {
    Grid,
    Typography,
    IconButton,
    Tooltip,
    AppBar,
    Toolbar,
} from '@material-ui/core'
import { Tune, GetApp, OpenInBrowser } from '@material-ui/icons'

const Header = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: 'lightgreen' }}>
            <Toolbar>
                <Tooltip title="Change filters" arrow>
                    <IconButton aria-label="Change filters" edge="start">
                        <Tune fontSize="large" />
                    </IconButton>
                </Tooltip>

                <Typography
                    variant="h5"
                    component="h1"
                    style={{ flex: 'auto', textAlign: 'center' }}>
                    Swipe for Future Scenario Editor
                </Typography>

                <Grid>
                    <Tooltip title="Open scenario" arrow>
                        <IconButton aria-label="Open scenario">
                            <OpenInBrowser fontSize="large" />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Download scenario" arrow>
                        <IconButton aria-label="Download scenario">
                            <GetApp fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
