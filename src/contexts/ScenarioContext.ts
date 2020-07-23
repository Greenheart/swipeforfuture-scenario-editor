import { createContext } from 'react'

import { WorldQuery, GameWorld } from '../scenario/ContentTypes'

export interface Filter {
    name: string
    filter: WorldQuery
}

export interface ScenarioState {
    id: string
    name: string
    description: string
    splashImage: string
    gameWorld: GameWorld
    savedFilters: Filter[]
}

export interface ScenarioController {
    state: ScenarioState
    setScenarioName(name: string): void
}

export const defaultScenario: ScenarioState = {
    id: '',
    name: '',
    description: '',
    splashImage: '',
    gameWorld: {
        stats: [],
        events: [],
        eventCards: {},
        cards: [],
        defaultState: {
            state: {},
            flags: {},
        },
    },
    savedFilters: [],
}

export const ScenarioContext = createContext<ScenarioController>({
    state: defaultScenario,
    setScenarioName() {},
})

export function buildScenarioController(
    state: ScenarioState,
    onUpdate: () => void
): ScenarioController {
    return {
        state,
        setScenarioName: (name: string) => {
            state.name = name
            onUpdate()
        },
    }
}
