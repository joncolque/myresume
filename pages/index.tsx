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
        <link rel="icon" href="/j.png" />
      </Head>

      {resume && <main className={styles.main}>
        <img className={styles.img_profile} src="https://media-exp1.licdn.com/dms/image/C4E03AQE1aCQkKfWCHQ/profile-displayphoto-shrink_800_800/0/1579644737769?e=1675296000&v=beta&t=98Dy2W8yZQI8eczWMFxObGYMvAW1ujbiQYBTMT0A644" alt="software engineer" width="500" height="600" />
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
      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '100px', marginBottom:'20px'}}>
        <div style={{ justifyContent: 'center' }}>
          <img src="gmail.svg" width={'20px'} style={{ marginRight: '4px' }} />
          <text>joncolque@gmail.com</text>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="linkedin.svg" width={'20px'} style={{ marginRight: '4px' }} />
          <a target={'_blank'} href='https://www.linkedin.com/in/jon-wilson-colque-limachi-0439abb2' rel="noreferrer">joncolque</a>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>This page is a proof of concept builded with React on Nextjs to use: Clean architecture. Semantic html and css. Custom domain. AWS Amplify. AWS Route 53. And will be modified to test several concepts. Last updated: 7 DEC 2022. Cooming soon: headless cypress,  git repository, among others.</p>
      </footer>
    </div>
  )
}
