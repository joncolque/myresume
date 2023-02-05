import { useState } from 'react'
import { Tooltip } from '../ui-elements/Tooltip'
import styles from './socialmedia.module.css'

const email = 'joncolque@gmail.com'
const linkedin = 'https://www.linkedin.com/in/jon-wilson-colque-limachi-0439abb2'
const github = 'https://github.com/joncolque/myresume'
const defaultTooltipText = 'Click to copy: ' + email
const copiedTooltipText = 'Copied!'

const iconSize = '40px'
const iconLinkdinSrc = 'linkedin.svg'
const iconGithubSrc = 'github.svg'
const iconGmailSrc = 'gmail.svg'

export const SocialMedia = () => {
    const [tooltipText, setTooltipText] = useState<string>(defaultTooltipText)

    const onClickEmailIcon = () => {
        navigator.clipboard.writeText(email)
        setTooltipText(copiedTooltipText)
        setTimeout(() => {
            setTooltipText(defaultTooltipText)
        }, 3000)
    }

    return <section className={styles.container}>
        <a target={'_blank'} href={linkedin} rel="noreferrer">
            <img src={iconLinkdinSrc} width={iconSize} />
        </a>
        <a target={'_blank'} href={github} rel="noreferrer">
            <img src={iconGithubSrc} width={iconSize} />
        </a>
        <Tooltip text={tooltipText}>
            <img
                onClick={onClickEmailIcon}
                src={iconGmailSrc}
                width={iconSize}
                style={{ cursor: 'pointer' }}
            />
        </Tooltip>
    </section>
}