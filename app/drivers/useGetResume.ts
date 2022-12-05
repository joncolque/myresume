import {useEffect, useState} from 'react';
import { Resume } from '../../core/entities/Resume';
import { GetResume } from '../../core/interactors/GetResume';
import { APIResumesRepository } from '../../core/repositories/APIResumeRepository';

export default () => {
  const resumeRepository = new APIResumesRepository()
  const getResume = new GetResume(resumeRepository);
  const [resume, setResume] = useState<Resume>();

  useEffect(() => {
    getResume.get({
      result: (resume:Resume) => setResume(resume),
    });
  }, []);

  return {resume};
};
