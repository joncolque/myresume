import { render } from '@testing-library/react'
import { ProfileUser } from '../../app/drivers/components/ProfileUser';
import { resume } from '../../src-data/resume';

export const givenProfileUser = () => {
    render(<ProfileUser resume={resume} />);
}
