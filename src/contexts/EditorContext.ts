import { createContext } from 'react'

export type EditorState = {
    isFiltersOpen: boolean
}

export const EditorContext = createContext<{
    state: EditorState
    setFiltersOpen(isOpen: boolean): void
}>({
    state: {
        isFiltersOpen: false,
    },
    setFiltersOpen() {},
})
