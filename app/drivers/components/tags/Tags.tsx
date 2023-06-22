import styled from "styled-components"

interface Props {
    items: string[]
    pdf?: boolean
}

export const Tags = ({ items }: Props) =>
    <TagsContainer>
        {items.map(it => <Tag key={it} item={it} />)}
    </TagsContainer>


const Tag = ({ item }: { item: string }) =>
    <TagContainer>
        {item}
    </TagContainer >

const TagsContainer = styled.div`
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
`

const TagContainer = styled.div`
    background-color: skyblue;
    display:inline-block;
    border-radius: 8px;
    padding: 4px;
    font-size: 10px;
`