import Head from 'next/head'
import useGetResume from '../app/drivers/useGetResume'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { resume } = useGetResume()

  return (
    <div className={styles.container}>
      <Head>
        <title>Jon Wilson Colque Limachi</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {resume && <main className={styles.main}>
        <img className={styles.img_profile} src="https://media-exp1.licdn.com/dms/image/C4E03AQE1aCQkKfWCHQ/profile-displayphoto-shrink_800_800/0/1579644737769?e=1675296000&v=beta&t=98Dy2W8yZQI8eczWMFxObGYMvAW1ujbiQYBTMT0A644" alt="Girl in a jacket" width="500" height="600" />
        <div className={styles.info_profile}>
          <h1 className={styles.title} data-test={'title-name'}>
            {resume.name}
          </h1>
          <h2 className={styles.subtitle} data-test={'subtitle-profession'}>
            {resume.profession}
          </h2>
          <p className={styles.aboutme} data-test={'p-aboutme'}>
            {resume.aboutme}
          </p>
        </div>
      </main>}
      {resume && <section>
        {resume.companies.map(c => <p key={c.name}>
          <strong>{c.name}</strong>
          {c.jobs.map(j => <div key={j.name}>
            <div>{j.years} - {j.name}</div>
            <div>{j.desc}</div>
          </div>)}
        </p>)}
      </section>}
      <footer className={styles.footer}>
        <p>This page is a proof of concept builded with React on Nextjs to use: Clean architecture. Semantic html and css. Custom domain. AWS Amplify. AWS Route 53. And will be modified to test several concepts. Last updated: 5 DEC 2022. Cooming soon: Social media links, headless cypress, among others.</p>
      </footer>
    </div>
  )
}
