import React from 'react'
import {
    Grid,
    Typography,
    IconButton,
    Tooltip,
    AppBar,
    Toolbar,
    useTheme,
} from '@material-ui/core'
import { Tune, GetApp, OpenInBrowser, PlayArrow } from '@material-ui/icons'

const Header = () => {
    const theme = useTheme()

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Tooltip title="Change filters" arrow>
                    <IconButton aria-label="Change filters" edge="start">
                        <Tune fontSize="large" />
                    </IconButton>
                </Tooltip>

                <Typography
                    variant="h5"
                    component="h1"
                    style={{ flex: 'auto', marginLeft: theme.spacing(1) }}>
                    Swipe for Future Scenario Editor
                </Typography>

                <Grid>
                    <Tooltip title="Play scenario" arrow>
                        <IconButton aria-label="Play scenario">
                            <PlayArrow fontSize="large" />
                        </IconButton>
                    </Tooltip>

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
