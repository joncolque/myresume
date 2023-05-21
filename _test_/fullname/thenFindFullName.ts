export const thenFindFullName = (rendered: any, name: string) => {
    const { getByText } = rendered
    return getByText(name)
}