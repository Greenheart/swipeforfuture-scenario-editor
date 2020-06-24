import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const Header = () => {
    return (
        <Grid
            style={{ backgroundColor: 'tomato' }}
            container
            justify="center"
            alignItems="center">
            <Typography variant="h4" component="h1">
                Swipe for Future Scenario Editor
            </Typography>
        </Grid>
    )
}

export default Header
