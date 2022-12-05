import { Resume } from "../entities/Resume";

export interface IResumeRepository {
  get(): Promise<Resume>
}
