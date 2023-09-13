import React from 'react';
import { render } from '@testing-library/react'
import { Tags } from '../../app/drivers/components/tags/Tags';

export const givenTagsWithBackgroundColor = (items: string[], backgroundColor: string) => {
    render(<Tags items={items} backgroundColor={backgroundColor} />);
}
