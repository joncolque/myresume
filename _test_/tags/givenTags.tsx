import { render } from '@testing-library/react'
import { Tags } from '../../app/drivers/components/tags/Tags';

export const givenTags = (items: string[]) => {
    render(<Tags items={items} />);
}
