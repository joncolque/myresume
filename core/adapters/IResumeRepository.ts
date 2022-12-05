
import { Resume } from '../entities/resume';

export interface IResumeRepository {
  get(): Promise<Resume>
}
