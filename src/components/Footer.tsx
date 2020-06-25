import React from 'react'
import { Icon, Grid, useTheme, Link } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'
import { styled } from '@material-ui/core/styles'

const Footer = () => {
    const theme = useTheme()

    const ContributeLink = styled(Link)({
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'repeat(2, auto)',
        gridGap: theme.spacing(1),
    })

    const FixedFooter = styled(Grid)({
        position: 'fixed',
        bottom: theme.spacing(1),
        width: '100%',
    })

    return (
        <FixedFooter container justify="center">
            <ContributeLink
                href="https://github.com/Greenheart/sff-scenario-editor/"
                target="_blank"
                color="secondary">
                <Icon>
                    <GitHub />
                </Icon>
                Contribute on GitHub
            </ContributeLink>
        </FixedFooter>
    )
}

export default Footer
