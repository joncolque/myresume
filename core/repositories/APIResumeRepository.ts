
import { IResumeRepository } from '../adapters/IResumeRepository';
import { Resume } from '../entities/Resume';

const resume: Resume = {
  name: 'Jon Wilson Colque Limachi',
  profession: 'Software Engineer',
  aboutme: 'I am passionate about the transmission of human knowledge, especially when it is technology. I am methodical, I focus on delivering value, I like teamwork. Systems Engineer.',
  companies: [
    {
      name: 'Fiera Studio - Venture Studio',
      jobs: [
        {
          name: 'Lead Frontend Engineer',
          years: '2022',
          desc: 'Responsible for all stages of the apps. Code reviewer. Use clean architecture. Develop core integrations. Technical interviews.',
        },
        {
          name: 'Frontend Software Engineer',
          years: '2020 - 2022',
          desc: 'React Native & React. Nextjs. CI. Typescript. Clean Architecture',
        }
      ]
    },
    {
      name: 'C&S - Software Factory',
      jobs: [
        {
          name: 'Mobile Developer',
          years: '2020',
          desc: 'Responsible for all stages of the apps. Code reviewer. Use clean architecture. Develop core integrations. Technical interviews.',
        },
        {
          name: 'Fullstack developer',
          years: '2017 - 2020',
          desc: 'React Native & React. Nextjs. CI. Typescript. Clean Architecture',
        }
      ]
    },
    {
      name: 'Blended - School Communication Platform',
      jobs: [
        {
          name: 'Android Developer Trainee',
          years: '2016 - 2017',
        },
      ]
    },
    {
      name: 'Banco Hipotecario - Bank Industry',
      jobs: [
        {
          name: 'SQL Server Analyst Programmer',
          years: '2015 - 2016',
        },
      ]
    }
  ]
}

export class APIResumesRepository implements IResumeRepository{
  get(): Promise<Resume> {
    return Promise.resolve(resume)
  }
}