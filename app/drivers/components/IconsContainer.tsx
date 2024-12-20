import styled from 'styled-components'

interface IconsContainerProps {
    iconSrc: string,
    actionIconSrc: string,
}

export const IconsContainer = ({ iconSrc, actionIconSrc }: IconsContainerProps) => {
    return (
        <SocialMediaItemIcons>
            <SocialMediaItemBackgroundIcon src={iconSrc} />
            <SocialMediaItemOverlayIcon src={actionIconSrc} />
        </SocialMediaItemIcons>
    )
}



export const SocialMediaItemIcons = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
`

export const SocialMediaItemBackgroundIcon = styled.img`
    width: 24px;
`

export const SocialMediaItemOverlayIcon = styled.img`
    background-color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 1px solid transparent;
    transform: translate(70%, 40%);
    width: 12px;
    height: 12px;
`
