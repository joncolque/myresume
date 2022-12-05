
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
          desc: 'Responsibilities: Development of the new Mobile department. Train new collaborators. Documentation. Technologies & Skills: React Native, Firebase services, environment settings, deployments PlayStore & AppleStore. Given workshops: React & React Native. Secondary skills: Kotlin for Android, Swift configurations for iOS, Go and NodeJS for microservices and proofs of concept for mobile features on backend side.',
        },
        {
          name: 'Fullstack developer',
          years: '2017 - 2020',
          desc: `Development of apps for internal use by the company and for clients. Research of new technologies and their potential for the company. Exhibition of capitalized technologies to the development areas and technical support.
          Technologies & frameworks: Angular, React, Node, Express, Golang, Firebase, MongoDB, Docker, Electron.
          Agile methodologies: Scrum, TDD.
          Given workshops: Angular, Go.
          Projects:
          - Microservices to connect devices regardless of protocol (IOT)
          - Microservice to follow trucks with GPS
          - CLI Framework javascript fullstack to generate applications end to end.
          - Desktop application for public tenders of "Compr.ar" systems from National Goverment.
          - Wiki repository to document the technological solutions for the company.`,
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