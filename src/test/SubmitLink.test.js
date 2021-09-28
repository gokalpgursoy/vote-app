import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';

import SubmitLink from '../components/Links/SubmitLink';

it('should be submit button is clickable', () => {
  let testLocation;
  render(
    <MemoryRouter initialEntries={['/']}>
      <SubmitLink />
      <Route
        path='*'
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
      />
    </MemoryRouter>
  );

  act(() => {
    const submitLinkButton = screen.getByText('SUBMIT A LINK');
    userEvent.click(submitLinkButton);
  });
  expect(testLocation.pathname).toBe('/add-link');
});
