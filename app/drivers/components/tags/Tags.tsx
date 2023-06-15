import { View } from "@react-pdf/renderer"

interface Props {
    items: string[]
    pdf?: boolean
}

export const Tags = ({ items }: Props) =>
    <div
        style={{
            display: 'flex',
            gap: '4px'
        }}
    >
        {items.map(it => <Tag key={it} item={it} />)}
    </div>

const Tag = ({ item, pdf = false }: { item: string, pdf?: boolean }) => <div
    style={{
        background: 'skyblue',
        display: 'inline-block',
        borderRadius: '8px',
        padding: '4px',
        fontSize: '10px'
    }}
>
    {item}
</div >