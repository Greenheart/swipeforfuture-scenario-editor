import React from 'react'
import { Container } from '@material-ui/core'

import Header from './Header'
import Footer from './Footer'

const ScenarioEditor = () => {
    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <p>Body</p>
                <Footer />
            </Container>
        </>
    )
}

export default ScenarioEditor
