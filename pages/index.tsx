import Head from 'next/head'
import { Experience } from '../app/drivers/components/Experience'
import { ProfilePicture } from '../app/drivers/components/ProfilePicture'
import { ProfileUser } from '../app/drivers/components/ProfileUser'
import { SocialMedia } from '../app/drivers/components/SocialMedia'
import useGetResume from '../app/drivers/useGetResume'
import styles from './index.module.css'
import 'react-tooltip/dist/react-tooltip.css'

const lastUptaded = 'Last updated: 23 MAR 2023.'
const footerText = `This page is a proof of concept builded with React on Nextjs to use: Clean architecture. Semantic html and css. Custom domain. AWS Amplify. AWS Route 53. And will be modified to test several concepts.`
const coomingSoon = 'Cooming soon: technologies used in companies selector, download pdf, among others.'

export default function Home() {
  const { resume } = useGetResume()

  return (
    <div className={styles.container}>
      <Head>
        <title>Jon Wilson Colque Limachi</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/j.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>

      {resume && <main className={styles.main}>
        <ProfilePicture />
        <ProfileUser resume={resume} />
        <SocialMedia />
      </main>}
      {resume && <section>
        <Experience resume={resume} />
      </section>}
      <footer className={styles.footer}>
        <text>{footerText}</text>
        <text>{coomingSoon}</text>
        <p><em>{lastUptaded}</em></p>
      </footer>
    </div>
  )
}
