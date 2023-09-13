import { Experience } from '../app/drivers/components/Experience'
import { ProfilePicture } from '../app/drivers/components/ProfilePicture'
import { ProfileUser } from '../app/drivers/components/ProfileUser'
import { SocialMedia } from '../app/drivers/components/SocialMedia'
import useGetResume from '../app/drivers/useGetResume'
import styles from './index.module.css'
import 'react-tooltip/dist/react-tooltip.css'
import { srcProfilePicture } from '../src-data/socialMedia'
import { HeadPage } from '../app/drivers/components/headPage/HeadPage'

const lastUptaded = 'Last updated: 13 SEP 2023.'
const footerText = `This page is a proof of concept builded with React on Nextjs to use: Clean architecture. Semantic html and css. Custom domain. AWS Amplify. AWS Route 53. And will be modified to test several concepts.`
const coomingSoon = 'Cooming soon: selector technologies.'

export default function Home() {
  const { resume } = useGetResume()

  return (
    <div className={styles.container}>
      <HeadPage />
      {resume && <main className={styles.main}>
        <ProfilePicture src={srcProfilePicture} />
        <ProfileUser resume={resume} />
        <SocialMedia resume={resume} />
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
