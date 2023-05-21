
import { resume } from '../../src-data/resume';
import { IResumeRepository } from '../adapters/IResumeRepository';
import { Resume } from '../entities/Resume';

export class APIResumesRepository implements IResumeRepository {
  get(): Promise<Resume> {
    return Promise.resolve(resume)
  }
}