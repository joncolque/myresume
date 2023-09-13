import styled from "styled-components"

interface Props {
    items: string[]
    backgroundColor?: string
}

export const Tags = ({ items, backgroundColor }: Props) =>
    <TagsContainer>
        {items.map(it => <Tag key={it} item={it} backgroundColor={backgroundColor} />)}
    </TagsContainer>


const Tag = ({ item, backgroundColor }: { item: string, backgroundColor?: string }) => {
    return <TagContainer style={{ backgroundColor: backgroundColor?? 'skyblue' }}>
        {item}
    </TagContainer >
}


const TagsContainer = styled.div`
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
`

const TagContainer = styled.div`
    display:inline-block;
    border-radius: 8px;
    padding: 4px;
    font-size: 10px;
`

const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;