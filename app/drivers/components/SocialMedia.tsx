import { useState } from 'react'
import { Tooltip } from '../ui-elements/Tooltip'
import styles from './socialmedia.module.css'
import { socialMedia, email } from '../../../src-data/socialMedia'
import { Resume } from '../../../core/entities/Resume'
import DownloadResumePDF from './PDF/DownloadResumePDF'
import { MyResumePDF } from './PDF/MyResumePDF'
import styled from 'styled-components'

const defaultTooltipText = 'Click to copy: ' + email
const copiedTooltipText = 'Copied!'
const iconSize = '24px'
const iconGmailSrc = 'gmail.svg'

interface Props {
    resume: Resume
}

export const SocialMedia = ({ resume }: Props) => {
    const [tooltipText, setTooltipText] = useState<string>(defaultTooltipText)

    const onClickEmailIcon = () => {
        navigator.clipboard.writeText(email)
        setTooltipText(copiedTooltipText)
        setTimeout(() => {
            setTooltipText(defaultTooltipText)
        }, 3000)
    }

    return <section className={styles.container}>
        {socialMedia.map(sm => <SocialMediaItemContainer key={sm.name}>
            <a key={sm.name} target={'_blank'} href={sm.url} rel='noreferrer'>
                <SocialMediaItemBackgroundIcon src={sm.icon} width={iconSize} data-test={sm.name} />
                <SocialMediaItemOverlayIcon
                    src={'new-tab.png'}
                    width={12}
                />
            </a>
        </SocialMediaItemContainer>)}
        <Tooltip text={tooltipText} >
            <SocialMediaItemContainer style={{ cursor: 'pointer' }} onClick={onClickEmailIcon}>
                <SocialMediaItemBackgroundIcon src={iconGmailSrc} width={iconSize} height={iconSize} />
                <SocialMediaItemOverlayIcon
                    src={'copy.png'}

                />
            </SocialMediaItemContainer>
        </Tooltip>
        {resume && <DownloadResumePDF iconWidth={iconSize}><MyResumePDF resume={resume} /></DownloadResumePDF>}
    </section>
}

export const SocialMediaItemContainer = styled.div`
    position: relative;
    display: inline-block;
`

export const SocialMediaItemBackgroundIcon = styled.img`
    
    `

export const SocialMediaItemOverlayIcon = styled.img`
    background-color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 1px solid transparent; /* Optional border for styling */
    transform: translate(70%, 40%);
    width: 12px;
    height: 12px;
`