import React, { useContext } from 'react'
import { Drawer, Toolbar } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import { EditorContext } from '../contexts/EditorContext'

const drawerWidth = '20rem'

const useStyles = makeStyles(() =>
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
            <div className={classes.drawerContainer}>
                <Toolbar />
                <p>secret filters very secret indeed</p>
                <p>
                    secret filters very secret indeed long text super secret
                    super super super secret
                </p>
            </div>
        </Drawer>
    )
}

const Filters = () => {
    const editorContext = useContext(EditorContext)

    return <FiltersCore isOpen={editorContext.state.isFiltersOpen} />
}

export default Filters
