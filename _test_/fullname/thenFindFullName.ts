import { screen } from '@testing-library/react'

export const thenFindFullName = (name: string) => {
    screen.getByText(name);
}