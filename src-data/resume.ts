import { Resume } from "../core/entities/Resume";

export const resume: Resume = {
    name: 'Jon Wilson Colque Limachi',
    profession: 'Software Engineer',
    aboutme: 'I am passionate about the transmission of human knowledge, especially when it is technology. I am methodical, I focus on delivering value, I like teamwork. Systems Engineer.',
    companies: [
        {
            name: 'Veritran - Business solutions with Low-Code core',
            jobs: [
                {
                    name: 'Software Engineer',
                    years: '2023',
                    technologies: ['react'],
                    methodologies: ['clean architecture','clean code', 'tdd', 'pair programming'],
                    languages: ['typescript','javascript', 'kotlin','java'],
                }
            ]
        },
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
                    technologies: ['react', 'react native', 'nextjs', 'nodejs', 'mongodb', 'firebase', 'android studio', 'xcode'],
                    methodologies: ['clean architecture','ci'],
                    languages: ['typescript','javascript']
                }
            ]
        },
        {
            name: 'C&S - Software Factory',
            jobs: [
                {
                    name: 'Mobile Developer',
                    years: '2020',
                    desc: 'Responsibilities: Development of the new Mobile department. Train new collaborators. Documentation. Given workshops: React & React Native. Proofs of concept for mobile features on backend side.',
                    technologies: ['react native', 'android studio', 'xcode', 'node', 'go'],
                    methodologies: ['scrum'],
                    languages: ['javascript','kotlin','swift']
                },
                {
                    name: 'Fullstack developer',
                    years: '2017 - 2020',
                    desc: `Development of apps for internal use by the company and for clients. Research of new technologies and their potential for the company. Exhibition of capitalized technologies to the development areas and technical support.
            Given workshops: Angular, Go.
            Projects:
            - Microservices to connect devices regardless of protocol (IOT)
            - Microservice to follow trucks with GPS
            - CLI Framework javascript fullstack to generate applications end to end.
            - Desktop application for public tenders of "Compr.ar" systems from National Goverment.
            - Wiki repository to document the technological solutions for the company.`,
                    technologies: ['angular', 'react', 'node', 'express', 'go', 'firebase','mongodb', 'docker','electron'],
                    methodologies: ['scrum'],
                    languages: ['javascript','go']
                }
            ]
        },
        {
            name: 'Blended - School Communication Platform',
            jobs: [
                {
                    name: 'Android Developer Trainee',
                    years: '2016 - 2017',
                    technologies: ['android studio'],
                    languages: ['java']
                },
            ]
        },
        {
            name: 'Banco Hipotecario - Bank Industry',
            jobs: [
                {
                    name: 'Analyst Programmer',
                    technologies: ['SQL Server'],
                    years: '2015 - 2016',
                },
            ]
        }
    ]
}