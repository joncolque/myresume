import { Resume } from "../core/entities/Resume";

export const resume: Resume = {
    name: 'Jon Wilson Colque Limachi',
    profession: 'Software Engineer',
    email: 'joncolque@gmail.com',
    professionalMedia: 'https://www.linkedin.com/in/jon-wilson-colque-limachi/',
    aboutme: 'I’m a software engineer with over 7 years of experience in full-stack development, specializing in front-end technologies like React and React Native. I’ve worked in fintech, SMEs, and startup environments, always striving to deliver clean, efficient, and maintainable code.',
    companies: [
        {
            name: 'Veritran - Business solutions with Low-Code core',
            jobs: [
                {
                    years: `2023 - 2024`,
                    name: `Software Engineer`,
                    desc: `Full-stack development for an enterprise low-code platform tailored for banks. Enhancing the experience of low-code developers by developing services for the platform. Integrated Google Analytics into a B2B implementation to track service usage across banks. Led efforts from UX and QA teams to update frontend components during a core migration. Enhanced the exploration of components in the apps that low-code developers are building.`,
                    technologies: ['React', 'Kotlin', 'Java', 'MongoDB', 'PostgreSQL'],
                    methodologies: ['Clean architecture', 'Clean code', 'TDD'],
                    languages: ['Typescript', 'Javascript', 'Google Analytics', 'Kotlin', 'Java'],
                }
            ]
        },
        {
            name: 'Fiera Studio - Venture Studio',
            jobs: [
                {
                    name: `Lead Frontend Engineer`,
                    years: `2022`,
                    desc: `Frontend lead and development for MVP websites and apps for large companies and other startups. Led a team of 3 developers in building scalable React and React Native applications. Led all stages of the web and mobile app development. Explored new technologies and tools with the CTO and Lead Backend Engineer.`,
                },
                {
                    name: `Frontend Software Engineer`,
                    years: `2020 - 2022`,
                    desc: `Frontend development for MVP websites and apps for large companies and other startups using React and React Native.`,
                    technologies: ['React', 'React Native', 'Next.js', 'Node.js', 'MongoDB'], //'Firebase', 'Android Studio', 'Xcode'
                    methodologies: ['Clean Architecture'],
                    languages: ['Typescript', 'Javascript']
                }
            ]
        },
        {
            name: 'C&S - Software Factory',
            jobs: [
                {
                    name: `Mobile Developer`,
                    years: '2020',
                    desc: `React Native development for the new mobile department and maintenance of older Android and iOS apps. Trained new collaborators. Gave workshops on React & React Native. Developed POCs on backend side for mobile features.`,
                    technologies: ['React native', 'Node.js', 'Go'], //Xcode
                    methodologies: ['Scrum'],
                    languages: ['Javascript', 'Kotlin', 'Swift']
                },
                {
                    name: `Full Stack developer`,
                    years: `2017 - 2020`,
                    desc: `Full-stack development of apps for internal use by the company and for other companies. Researched new technologies and their potential for the company. Taught capitalized technologies to the development areas as a mentor. Gave workshops on Angular and Go`,
                    technologies: ['Angular', 'React', 'Node.js', 'Go', 'MongoDB'], //Express 'Firebase','Mongodb', 'Docker','Electron'
                    methodologies: ['Scrum'],
                    languages: ['Javascript', 'Go']
                }
            ]
        },
        {
            name: 'Blended - School Communication Platform',
            jobs: [
                {
                    name: `Android Developer Trainee`,
                    years: '2016 - 2017',
                    desc: `Maintenance of the app used by the school community to track payments and official school communications. Developed UI components for chat interactions. Fixed minor bugs. Tested the app.`,
                    technologies: ['Java'], //Android Studio
                    languages: ['Java'],
                    methodologies: []
                },
            ]
        },
        {
            name: 'Banco Hipotecario - Bank Industry',
            jobs: [
                {
                    name: `Analyst Programmer`,
                    years: '2015 - 2016',
                    desc: `Obtaining customer information to offer them products such as loans, credit cards, and others. Created database queries to obtain customer information. Campaign deployment through email and SMS. Created database queries to automate reports.`,
                    technologies: ['SQL Server'], //Excel
                    languages: [],
                    methodologies: [],
                },
            ]
        }
    ]
}