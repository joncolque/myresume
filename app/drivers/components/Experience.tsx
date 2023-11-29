import { Resume } from "../../../core/entities/Resume"
import { Tags } from "./tags/Tags"

const experienceTagColor = '#daffed'

interface Props {
    resume: Resume
}

export const Experience = ({ resume }: Props) => <>
    {resume.companies.map(c => <p key={c.name}>
        <strong>{c.name}</strong>
        {c.jobs.map(j => <div key={j.name}>
            <div>{j.years} - {j.name}</div>
            <div>{j.desc}</div>
            {j.technologies && <div style={{marginTop: '4px'}}><Tags items={j.technologies} backgroundColor={ experienceTagColor}/></div>}
            {j.methodologies && <div style={{marginTop: '4px'}}><Tags items={j.methodologies} backgroundColor={ experienceTagColor}/></div>}
            {j.languages && <div style={{marginTop: '4px'}}><Tags items={j.languages} backgroundColor={ experienceTagColor}/></div>}
        </div>)}
    </p>)}
</>