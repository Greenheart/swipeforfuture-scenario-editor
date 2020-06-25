import React from 'react'
import { Container } from '@material-ui/core'

import Header from './Header'

const ScenarioEditor = () => {
    return (
        <>
            <Header />
            <Container maxWidth="xl" style={{ backgroundColor: 'skyblue' }}>
                <p>Body</p>
            </Container>
        </>
    )
}

export default ScenarioEditor
