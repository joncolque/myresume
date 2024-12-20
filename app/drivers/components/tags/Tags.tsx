import styled from "styled-components"

interface Props {
    items: string[]
    backgroundColor?: string
    large?: boolean
}

export const Tags = ({ items, backgroundColor, large = false }: Props) =>
    <TagsContainer>
        {items.map(it => <Tag key={it} item={it} backgroundColor={backgroundColor} large={large} />)}
    </TagsContainer>


const Tag = ({ item }: { item: string, backgroundColor?: string, large?: boolean }) => {
    return <TagContainer>
        {item}
    </TagContainer >
}


const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    //justify-content: center;
    justify-content: flex-end;
    gap: 4px;
`

const TagContainer = styled.strong`
    border-radius: 8px;
    padding: 4px;
    font-size: 12px;
    //border: 2px solid skyblue;
    color: gray;
`