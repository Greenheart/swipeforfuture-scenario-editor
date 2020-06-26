import { createContext } from 'react'

export type ScenarioState = {}

export const ScenarioContext = createContext<{
    state: ScenarioState
}>({
    state: {},
})
