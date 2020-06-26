import React, { useState } from 'react'
import { Container } from '@material-ui/core'

import Header from './Header'
import Footer from './Footer'
import CreateButton from './CreateButton'
import Filters from './Filters'
import { EditorContext, EditorState } from '../contexts/EditorContext'

const ScenarioEditor = () => {
    const [editorState, setEditorState] = useState<EditorState>({
        isFiltersOpen: false,
    })
    const setFiltersOpen = (isOpen: boolean) => {
        setEditorState({ isFiltersOpen: isOpen })
    }

    return (
        <EditorContext.Provider
            value={{
                state: editorState,
                setFiltersOpen,
            }}>
            <Header />
            <Container maxWidth="xl">
                <Filters />
                <CreateButton />
                <Footer />
            </Container>
        </EditorContext.Provider>
    )
}

export default ScenarioEditor
