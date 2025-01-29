import { useState } from 'react'
import { Tooltip } from '../ui-elements/Tooltip'
import styles from './socialmedia.module.css'
import { socialMedia, email } from '../../../src-data/socialMedia'
import { Resume } from '../../../core/entities/Resume'
import DownloadResumePDF from './PDF/DownloadResumePDF'
import { MyResumePDF } from './PDF/MyResumePDF'
import { IconsContainer } from './IconsContainer'
import useClipboard from '../useClipboard'

const defaultTooltipText = email
const copiedTooltipText = 'Copied!'

interface Props {
    resume: Resume
}

export const SocialMedia = ({ resume }: Props) => {
    const [tooltipText, setTooltipText] = useState<string>(defaultTooltipText)
    const { copyToClipboard } = useClipboard()

    const onClickEmailIcon = () => {
        copyToClipboard(email, () => {
            setTooltipText(copiedTooltipText)
        })
        setTimeout(() => {
            setTooltipText(defaultTooltipText)
        }, 3000)
    }

    return <section className={styles.container}>
        {socialMedia.map(sm => <>
            {sm.url && <a target={'_blank'} href={sm.url} rel='noreferrer'>
                <IconsContainer iconSrc={sm.icon} actionIconSrc={sm.actionIcon} />
            </a>}
            {sm.name === 'email' && <Tooltip text={tooltipText} >
                <IconsContainer iconSrc={sm.icon} actionIconSrc={sm.actionIcon} onClick={onClickEmailIcon} />
            </Tooltip>}
            {sm.name === 'cv' && resume && <DownloadResumePDF iconSrc={sm.icon} actionIconSrc={sm.actionIcon}>
                <MyResumePDF resume={resume} />
            </DownloadResumePDF>}
        </>)}
    </section>
}
