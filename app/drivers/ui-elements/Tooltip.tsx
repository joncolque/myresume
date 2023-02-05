import { ReactComponentElement, ReactElement } from 'react'
import { Tooltip as TooltipImpl } from 'react-tooltip'

interface Props {
    text: string,
    children: ReactElement
}

export const Tooltip = ({children,text}: Props)=><>
<p id="my-element" data-tooltip-content={text}>
    {children}
</p>
<TooltipImpl anchorId='my-element' />
</>