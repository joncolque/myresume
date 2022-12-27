import { Resume } from "../../../core/entities/Resume";
import styles from './profileUser.module.css'

interface Props {
  resume: Resume
}

export const ProfileUser = ({ resume }: Props) => <div>
  <h1 className={styles.title} data-test={'title-name'}>
    {resume.name}
  </h1>
  <h2 className={styles.subtitle} data-test={'subtitle-profession'}>
    {resume.profession}
  </h2>
  <p className={styles.aboutme} data-test={'p-aboutme'}>
    {resume.aboutme}
  </p>
</div>