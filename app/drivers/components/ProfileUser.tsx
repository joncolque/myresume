import { styled } from "styled-components";
import { Resume } from "../../../core/entities/Resume";
import { AboutMeWeb } from "./headPage/AboutMe";
import { Subtitle, Title } from "./ProfileUser.style";

interface Props {
  resume: Resume
}

export const ProfileUser = ({ resume }: Props) => <ProfileUserContainer>
  <Title data-test={'title-name'}>
    {resume.name}
  </Title>
  <Subtitle data-test={'subtitle-profession'}>
    {resume.profession}
  </Subtitle>
  <AboutMeWeb data-test={'p-aboutme'}>
    {resume.aboutme}
  </AboutMeWeb>
</ProfileUserContainer>

const ProfileUserContainer = styled.div`
  display: flex;
  flex-direction: column;
`
