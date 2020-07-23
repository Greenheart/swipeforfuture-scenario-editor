import React, { useState, useMemo, useEffect } from 'react'
import { Container } from '@material-ui/core'

import Header from './Header'
import Footer from './Footer'
import CreateButton from './CreateButton'
import Filters from './Filters'
import { EditorContext, EditorState } from '../contexts/EditorContext'
import {
    ScenarioState,
    buildScenarioController,
    ScenarioContext,
    ScenarioController,
    defaultScenario,
} from '../contexts/ScenarioContext'

const ScenarioEditor = () => {
    const [editorState, setEditorState] = useState<EditorState>({
        isFiltersOpen: false,
    })
    const setFiltersOpen = (isOpen: boolean) => {
        setEditorState({ isFiltersOpen: isOpen })
    }

    const [state, setScenarioState] = useState<ScenarioState | null>(null)
    const scenarioController = useMemo<ScenarioController | null>(
        () => (state ? buildScenarioController(state, setScenarioState) : null),
        [state, setScenarioState]
    )

    useEffect(() => {
        if (state === null) {
            const scenarioData: string | null = window.localStorage.getItem(
                'scenario'
            )
            const scenario: ScenarioState = scenarioData
                ? JSON.parse(scenarioData)
                : defaultScenario
            setScenarioState(scenario)
        }
    }, [state])

    return (
        <EditorContext.Provider
            value={{
                state: editorState,
                setFiltersOpen,
            }}>
            {scenarioController && (
                <ScenarioContext.Provider value={scenarioController}>
                    <Header />
                    <Container maxWidth="xl">
                        <Filters />
                        <CreateButton />
                        <Footer />
                    </Container>
                </ScenarioContext.Provider>
            )}
        </EditorContext.Provider>
    )
}

export default ScenarioEditor
