import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab'
import { Event, PersonAdd, CameraFront } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 260,
            transform: 'translateZ(0px)',
            flexGrow: 1,
            position: 'fixed',
            bottom: 0,
            right: 0,
        },
        speedDial: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    })
)

interface CreateAction {
    icon: JSX.Element
    name?: string | number
    onClick: Function
}

const actions: CreateAction[] = [
    { icon: <CameraFront />, name: 'Card', onClick() {} },
    { icon: <Event />, name: 'Event', onClick() {} },
    { icon: <PersonAdd />, name: 'Character', onClick() {} },
]

export default function SpeedDialTooltipOpen() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleAction = (action: CreateAction) => () => {
        action.onClick()
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                className={classes.speedDial}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}>
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={handleAction(action)}
                    />
                ))}
            </SpeedDial>
        </div>
    )
}
