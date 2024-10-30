import { styled } from "styled-components";
import { Resume } from "../../../core/entities/Resume";

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

</ProfileUserContainer>

const ProfileUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    align-items: center;
  }
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
  white-space: nowrap;
`

const Subtitle = styled.div`
  font-size: 14px;
`