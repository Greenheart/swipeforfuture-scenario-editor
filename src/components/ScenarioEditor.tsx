import React from 'react'
import { Container } from '@material-ui/core'

import Header from './Header'
import Footer from './Footer'
import CreateButton from './CreateButton'

const ScenarioEditor = () => {
    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <CreateButton />
                <Footer />
            </Container>
        </>
    )
}

export default ScenarioEditor
