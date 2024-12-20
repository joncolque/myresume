import { useState } from 'react'
import { styled } from 'styled-components'

interface Props {
    src: string
}

export const ProfilePicture = ({ src }: Props) => {
    const [showPicture, setShowPicture] = useState<boolean>(true)

    return (
        <>
            {showPicture && <ImageContainer
                src={'/profilePicture.jpg'}
                alt="software engineer"
            />}
        </>
    )
}

const ImageContainer = styled.img`
    border-radius: 10%;
    width: 120px;
    height: 120px;
    border:4px solid var(--primary);
`