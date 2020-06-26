import React, { useContext } from 'react'
import {
    Grid,
    Typography,
    IconButton,
    Tooltip,
    AppBar,
    Toolbar,
    useTheme,
    Theme,
} from '@material-ui/core'
import { Tune, GetApp, OpenInBrowser, PlayArrow } from '@material-ui/icons'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import { EditorContext } from '../contexts/EditorContext'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
    })
)

const Header = () => {
    const theme = useTheme()
    const classes = useStyles()
    const editorContext = useContext(EditorContext)

    const filterVerb = editorContext.state.isFiltersOpen ? 'Hide' : 'Show'

    return (
        <AppBar position="sticky" className={classes.appBar}>
            <Toolbar>
                <Tooltip title={`${filterVerb} filters`} arrow>
                    <IconButton
                        aria-label={`${filterVerb} filters`}
                        edge="start"
                        onClick={() =>
                            editorContext.setFiltersOpen(
                                !editorContext.state.isFiltersOpen
                            )
                        }>
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
                        <IconButton aria-label="Download scenario" edge="end">
                            <GetApp fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
