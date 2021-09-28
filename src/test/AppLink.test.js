import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';

import AppLink from '../components/App/AppLink';

it('should be redirect by href prop after click Applink', () => {
  let testLocation;
  const text = 'Return to List';
  const href = '/';
  render(
    <MemoryRouter initialEntries={['/add-link']}>
      <AppLink text={text} href={href} />
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
    const link = screen.getByText(text);
    userEvent.click(link);
  });
  expect(testLocation.pathname).toBe(href);
});
