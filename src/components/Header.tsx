import React from 'react'
import { Grid, Typography, IconButton, Tooltip } from '@material-ui/core'
import { Tune, GetApp, OpenInBrowser } from '@material-ui/icons'

const Header = () => {
    return (
        <Grid
            style={{
                backgroundColor: 'lightskyblue',
                width: '100vw',
                left: 0,
                top: 0,
                position: 'fixed',
            }}
            container
            justify="space-between"
            alignItems="center">
            <Tooltip title="Change filters" arrow>
                <IconButton aria-label="Change filters">
                    <Tune fontSize="large" />
                </IconButton>
            </Tooltip>

            <Typography variant="h4" component="h1">
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
        </Grid>
    )
}

export default Header
