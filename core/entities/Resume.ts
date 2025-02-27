export interface Resume {
    name: string
    profession: string
    email: string
    professionalMedia: string
    aboutme: string
    companies: Company[]
}

interface Company {
    name: string,
    jobs: Job[]
}

interface Job {
    years: string,
    name: string,
    desc?: string,
    technologies?: string[],
    methodologies?: string[],
    languages?: string[],
}