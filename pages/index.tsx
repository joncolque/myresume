import Head from 'next/head'
import { Experience } from '../app/drivers/components/Experience'
import { ProfilePicture } from '../app/drivers/components/ProfilePicture'
import { ProfileUser } from '../app/drivers/components/ProfileUser'
import { SocialMedia } from '../app/drivers/components/SocialMedia'
import useGetResume from '../app/drivers/useGetResume'
import styles from './index.module.css'

const footerText = 'This page is a proof of concept builded with React on Nextjs to use: Clean architecture. Semantic html and css. Custom domain. AWS Amplify. AWS Route 53. And will be modified to test several concepts. Last updated: 7 DEC 2022. Cooming soon: headless cypress,  git repository, among others.'

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

      {resume && <main>
        <ProfilePicture />
        <ProfileUser resume={resume} />
      </main>}
      {resume && <section>
        <Experience resume={resume} />
      </section>}
      <SocialMedia />
      <footer className={styles.footer}>
        <p>{footerText}</p>
      </footer>
    </div>
  )
}
