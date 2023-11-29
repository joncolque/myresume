import {useEffect, useState} from 'react';
import { Resume } from '../../core/entities/Resume';
import { GetResume } from '../../core/interactors/GetResume';
import { APIResumesRepository } from '../../core/repositories/APIResumeRepository';

export default () => {
  const resumeRepository = new APIResumesRepository()
  const getResume = new GetResume(resumeRepository);
  const [resume, setResume] = useState<Resume>();
  const [distinctTechnologies, setDistinctTechnologies] = useState<string[]>() 

  useEffect(() => {
    getResume.get({
      result: (resume:Resume) => {
        setResume(resume)
        const distinctTechnologiesAux = new Set<string>();
        resume.companies.forEach((company) => {
          company.jobs.forEach((job) => {
            if (job.technologies) {
              job.technologies.forEach((technology) => {
                distinctTechnologiesAux.add(technology);
              });
            }
          });
        });
        setDistinctTechnologies([...Array.from(distinctTechnologiesAux)])
      }
    });
  }, []);

  return {resume, distinctTechnologies};
};
