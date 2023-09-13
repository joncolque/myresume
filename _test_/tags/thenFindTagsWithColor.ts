import { screen } from '@testing-library/react'
import { thenFindTags } from './thenFindTags'
import '@testing-library/jest-dom/extend-expect';

export const thenFindTagsWithBackgroundColor = (items: string[], backgroundColor: string) => {
    thenFindTags(items)
    items.forEach(it => {
        const element = screen.getByText(it)
        expect(element).toBeInTheDocument()
        expect(element).toHaveStyle({ backgroundColor })
    })
}