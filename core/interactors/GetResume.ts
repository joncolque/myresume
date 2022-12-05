
import { IResumeRepository } from '../adapters/IResumeRepository';
import { Resume } from '../entities/Resume';
import { InteractorListener } from './types';


export class GetResume {
  private resumeRepository: IResumeRepository;

  constructor(resumeRepository: IResumeRepository) {
    this.resumeRepository = resumeRepository;
  }

  get(handler: InteractorListener<Resume>) {
    this.resumeRepository.get().then((resume:Resume) =>
      handler.result(resume),
    );
  }
}
