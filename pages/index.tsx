import { Experience } from '../app/drivers/components/Experience'
import { ProfilePicture } from '../app/drivers/components/ProfilePicture'
import { ProfileUser } from '../app/drivers/components/ProfileUser'
import { SocialMedia } from '../app/drivers/components/SocialMedia'
import useGetResume from '../app/drivers/useGetResume'
import styles from './index.module.css'
import 'react-tooltip/dist/react-tooltip.css'
import { srcProfilePicture } from '../src-data/socialMedia'
import { HeadPage } from '../app/drivers/components/headPage/HeadPage'
import { Resume } from '../core/entities/Resume'
import { Tags } from '../app/drivers/components/tags/Tags'
import styled from 'styled-components'

const lastUpdated = 'Last updated: 28 NOV 2023.';
const footerText = `This page is a proof of concept built with React on Next.js using: Clean architecture, semantic HTML and CSS, custom domain, AWS Amplify, AWS Route 53, and will be modified to test several concepts.`;
const comingSoon = 'Coming soon: selector technologies.';

export default function Home() {
  const { resume, distinctTechnologies } = useGetResume();

  if (!resume || !distinctTechnologies) {
    return <>...loading</>;
  }

  return <HomeStatic resume={resume} distinctTechnologies={distinctTechnologies} />;
}

export const HomeStatic = ({ resume, distinctTechnologies }: { resume: Resume; distinctTechnologies: string[] }) => (
  <Container>
    <HeadPage />
    {resume && (
      <MainContainer>
        <UserContainer>
          <ProfileContainer>
            <ProfilePicture src={srcProfilePicture} />
            <ProfileUser resume={resume} />
          </ProfileContainer>
          <AboutMe data-test={'p-aboutme'}>
            {resume.aboutme}
          </AboutMe>
        </UserContainer>
        <SocialMedia resume={resume} />
      </MainContainer>
    )}
    {distinctTechnologies && (
      <SkillsSummaryContainer>
        <div title='header-technologies'>
          <Tags large items={distinctTechnologies} backgroundColor={'#daffed'} />
        </div>
      </SkillsSummaryContainer>
    )}
    {resume && (
      <section role='experience'>
        <Experience resume={resume} />
      </section>
    )}
    <footer className={styles.footer}>
      <span>{footerText}</span>
      <span>{comingSoon}</span>
      <p>
        <em>{lastUpdated}</em>
      </p>
    </footer>
  </Container>
);

const Container = styled.div`
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`


const SkillsSummaryContainer = styled.div`
  margin: 20px
`

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  max-width: 1200px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const AboutMe = styled.div`
  font-size: 14px;
  color: gray;
  text-align: justify;
`
