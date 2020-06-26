import { GameWorld, WorldQuery } from './ContentTypes'

export interface Filter {
    name: string
    filter: WorldQuery
}

export interface Scenario {
    id: string
    name: string
    description: string
    splashImage: string
    gameWorld: GameWorld
    savedFilters: Filter[]
}

class ScenarioController implements Scenario {
    id: string
    name: string
    description: string
    splashImage: string
    gameWorld: GameWorld
    savedFilters: Filter[]

    /**
     * Create a new Scenario instance, used to modify and store changes in the editor.
     */
    constructor({
        id,
        name,
        description,
        splashImage,
        gameWorld,
        savedFilters,
    }: Scenario) {
        this.id = id
        this.name = name
        this.description = description
        this.splashImage = splashImage
        this.gameWorld = gameWorld
        this.savedFilters = savedFilters
    }
}

export default ScenarioController
