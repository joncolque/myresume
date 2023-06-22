import { Resume } from "../../../core/entities/Resume";
import { AboutMe, Subtitle, Title } from "./ProfileUser.style";

interface Props {
  resume: Resume
}

export const ProfileUser = ({ resume }: Props) => <>
  <Title data-test={'title-name'}>
    {resume.name}
  </Title>
  <Subtitle data-test={'subtitle-profession'}>
    {resume.profession}
  </Subtitle>
  <AboutMe data-test={'p-aboutme'}>
    {resume.aboutme}
  </AboutMe>
</>
