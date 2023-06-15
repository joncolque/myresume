import { screen } from '@testing-library/react'

export const thenFindTags= (items: string[]) => {
    items.forEach(it=>
        screen.getByText(it)
    )
}