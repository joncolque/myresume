import { useState } from 'react'
import { Tooltip } from '../ui-elements/Tooltip'
import styles from './socialmedia.module.css'
import { socialMedia, email } from '../../../src-data/socialMedia'
import { Resume } from '../../../core/entities/Resume'
import DownloadResumePDF from './PDF/DownloadResumePDF'
import { MyResumePDF } from './PDF/MyResumePDF'

const defaultTooltipText = 'Click to copy: ' + email
const copiedTooltipText = 'Copied!'
const iconSize = '40px'
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
        {socialMedia.map(sm => <a key={sm.name} target={'_blank'} href={sm.url} rel='noreferrer'>
            <img src={sm.icon} width={iconSize} data-test={sm.name} />
        </a>)}
        <Tooltip text={tooltipText}>
            <img
                onClick={onClickEmailIcon}
                src={iconGmailSrc}
                width={iconSize}
                style={{ cursor: 'pointer' }}
                data-test={'email'}
            />
        </Tooltip>
        {resume && <DownloadResumePDF><MyResumePDF resume={resume} /></DownloadResumePDF>}
    </section>
}