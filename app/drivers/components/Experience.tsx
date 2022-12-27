import { Resume } from "../../../core/entities/Resume"

interface Props {
    resume: Resume
}

export const Experience = ({ resume }: Props) => <>
    {resume.companies.map(c => <p key={c.name}>
        <strong>{c.name}</strong>
        {c.jobs.map(j => <div key={j.name}>
            <div>{j.years} - {j.name}</div>
            <div>{j.desc}</div>
        </div>)}
    </p>)}
</>