import React, { useContext } from 'react'
import { Drawer, IconButton, Divider } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'
import { styled } from '@material-ui/core/styles'

import { EditorContext } from '../contexts/EditorContext'

const FiltersDrawer = styled(Drawer)({
    '& > *': {
        maxWidth: '20rem',
    },
})

const FiltersCore = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean
    setIsOpen(isOpen: boolean): void
}) => {
    return (
        <FiltersDrawer variant="persistent" anchor="left" open={isOpen}>
            <div>
                <IconButton onClick={() => setIsOpen(false)}>
                    <ChevronLeft />
                </IconButton>
            </div>
            <Divider />
            <p>secret filters very secret indeed</p>
            <p>
                secret filters very secret indeed long text super secret super
                super super secret
            </p>
        </FiltersDrawer>
    )
}

const Filters = () => {
    const editorContext = useContext(EditorContext)

    return (
        <FiltersCore
            isOpen={editorContext.state.isFiltersOpen}
            setIsOpen={editorContext.setFiltersOpen}
        />
    )
}

export default Filters
