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
import styled from 'styled-components'

const footerText = `This page is a proof of concept built with React on Next.js and will be modified to test several concepts.`;

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
          <LeftContainer>
            <ProfileUser resume={resume} />
            <AboutMe data-test={'p-aboutme'}>
              {resume.aboutme}
            </AboutMe>
            <SocialMedia resume={resume} />
          </LeftContainer>
          <RightContainer>
            <ProfilePicture src={srcProfilePicture} />
          </RightContainer>
        </UserContainer>
      </MainContainer>
    )}
    {/* {distinctTechnologies && (
      <SkillsSummaryContainer>
        <div title='header-technologies'>
          <Tags large items={distinctTechnologies} backgroundColor={'skyblue'} />
        </div>
      </SkillsSummaryContainer>
    )} */}
    {resume && (
      <section role='experience'>
        <Experience resume={resume} />
      </section>
    )}
    <footer className={styles.footer}>
      <span>{footerText}</span>
    </footer>
  </Container>
);

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  justify-self: center;
`

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`


const SkillsSummaryContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  max-width: 1200px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  @media (max-width: 800px) {
    order: -1;
  }
`

const AboutMe = styled.div`
  font-size: 14px;
  color: gray;
  margin-block: 8px;
`
