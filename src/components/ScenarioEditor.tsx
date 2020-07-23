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

    const [state, setScenarioState] = useState<{
        scenario: ScenarioState
    } | null>(null)
    const scenario = state && state.scenario
    const scenarioController = useMemo<ScenarioController | null>(
        () =>
            scenario
                ? buildScenarioController(scenario, () => {
                      setScenarioState({ scenario })
                  })
                : null,
        [scenario, setScenarioState]
    )

    useEffect(() => {
        if (state === null) {
            const scenarioData: string | null = window.localStorage.getItem(
                'scenario'
            )
            const loadedScenario: ScenarioState = scenarioData
                ? JSON.parse(scenarioData)
                : defaultScenario
            setScenarioState({ scenario: loadedScenario })
        } else {
            window.localStorage.setItem('scenario', JSON.stringify(state))
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
