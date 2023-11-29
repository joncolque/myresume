import { render, screen, waitFor } from '@testing-library/react'
import React from 'react';
import Home from '../../pages/index';

jest.mock('../../app/drivers/components/SocialMedia', () => {
  return {
    __esModule: true,
    SocialMedia: () => <div data-testid="social-media-mock">SocialMedia Mock</div>,
  };
});

jest.setTimeout(10000)

export const givenAHomeScreen = () => {
    render(<Home />);
}

export const whenLoadExperience = async () => {
    let element
    await waitFor(() => {
        element = screen.getByRole('experience')
    })
    await waitFor(() => expect(element).toBeInTheDocument(), { timeout: 10000 })
}

export const thenShowTechnologiesHeader = () => {
    const element = screen.getByTitle('header-technologies')
    expect(element).toBeInTheDocument()
}