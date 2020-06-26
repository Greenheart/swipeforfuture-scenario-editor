import React, { useContext } from 'react'
import { Drawer, Toolbar, Divider, Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import { EditorContext } from '../contexts/EditorContext'
import StatSlider from './StatSlider'

const drawerWidth = '20rem'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
            height: '100%',
            padding: theme.spacing(2),
        },
    })
)

const FiltersCore = ({ isOpen }: { isOpen: boolean }) => {
    const classes = useStyles()

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={isOpen}
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}>
            <Toolbar />

            <div className={classes.drawerContainer}>
                <Divider />
                <StatSlider />
            </div>
        </Drawer>
    )
}

const Filters = () => {
    const editorContext = useContext(EditorContext)

    return <FiltersCore isOpen={editorContext.state.isFiltersOpen} />
}

export default Filters
