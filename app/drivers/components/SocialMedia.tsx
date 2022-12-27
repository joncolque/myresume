import styles from './socialmedia.module.css'

const email = 'joncolque@gmail.com'
const linkedin = 'https://www.linkedin.com/in/jon-wilson-colque-limachi-0439abb2'
const github = 'https://github.com/joncolque/myresume'

export const SocialMedia = () => <section className={styles.container}>
    <div style={{ justifyContent: 'center' }}>
        <img src="gmail.svg" width={'20px'} style={{ marginRight: '4px' }} />
        <text>{email}</text>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="linkedin.svg" width={'20px'} style={{ marginRight: '4px' }} />
        <a target={'_blank'} href={linkedin} rel="noreferrer">joncolque</a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="github.svg" width={'20px'} style={{ marginRight: '4px' }} />
        <a target={'_blank'} href={github} rel="noreferrer">joncolque</a>
    </div>
</section>