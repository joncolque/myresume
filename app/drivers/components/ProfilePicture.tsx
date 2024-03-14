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
                width="500"
                height="600"
                onError={() => setShowPicture(false)}
            />}
        </>
    )
}

const ImageContainer = styled.img`
    border-radius: 10%;
    width: 200px;
    height: 200px;
    margin-right: 20px;
    border:4px solid var(--primary);

    @media only screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
  }

    @media only screen and (min-width: 769px) {
        width: 200px;
        height: 200px;
    }
`