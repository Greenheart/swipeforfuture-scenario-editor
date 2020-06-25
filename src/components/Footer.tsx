import React from 'react'
import { Icon, Grid, useTheme, Link } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'

const Footer = () => {
    const theme = useTheme()

    return (
        <Grid
            container
            justify="center"
            style={{
                position: 'fixed',
                bottom: theme.spacing(1),
                width: '100vw',
            }}>

            <Link
                href="https://github.com/Greenheart/sff-scenario-editor/"
                target="_blank"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <Icon style={{ marginRight: theme.spacing(1) }}>
                    <GitHub />
                </Icon>
                Contribute on GitHub
            </Link>
        </Grid>
    )
}

export default Footer
