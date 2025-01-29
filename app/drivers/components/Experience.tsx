import styled from "styled-components"
import { Resume } from "../../../core/entities/Resume"
import { Tags } from "./tags/Tags"

interface Props {
    resume: Resume
}

export const Experience = ({ resume }: Props) => <>
    {resume.companies.map(c => <CompanyItem
        key={c.name}
        companiTitle={c.name}
        jobs={c.jobs}
    />)}
</>


interface CompanyItemProps {
    companiTitle: string
    jobs: any[]
}

const CompanyItem = ({ companiTitle, jobs }: CompanyItemProps) => {
    return (
        <CompanyContainer key={companiTitle}>
            <strong>{companiTitle}</strong>
            {jobs.map(j => <JobItem
                key={j.name}
                name={j.name}
                years={j.years}
                desc={j.desc}
                technologies={j.technologies}
            />)}
        </CompanyContainer>
    )
}

const CompanyContainer = styled.div`
  margin-block: 32px;
`

interface JobItemProps {
    name: string
    years: string
    desc: string
    technologies: any[] | undefined
}

const JobItem = ({ name, years, desc, technologies }: JobItemProps) => {
    return (
        <JobItemContainer key={name}>
            <HeaderJob>
                <JobTitle>{name}</JobTitle>
                <JobTitle>{years}</JobTitle>
            </HeaderJob>
            <JobDesc>{desc}</JobDesc>
            {technologies && <Tags items={technologies} />}
        </JobItemContainer>
    )
}

const JobItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`


const HeaderJob = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-block: 8px;
`

const JobTitle = styled.strong`
    color: gray;
    font-size: 18px;
`

const JobDesc = styled.span`
    font-size: 14px;
    color: gray;
`