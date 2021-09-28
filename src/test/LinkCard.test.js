import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import LinkCard from '../components/Links/LinkCard';

describe('LinkCard Tests', () => {
  let link = {};
  let voteCount = null;

  beforeEach(() => {
    link = {
      id: 1632854881407,
      modifiedDate: '2021-09-28T18:48:01.407Z',
      name: 'Facebook',
      url: 'https://tr-tr.facebook.com/',
      voteCount: 0,
    };
    render(
      <MemoryRouter initialEntries={['/']}>
        <LinkCard link={link} />
      </MemoryRouter>
    );
    voteCount = screen.getByText('0');
  });

  it('should be increased vote count after click Up Vote button', () => {
    const upVoteButton = screen.getByText('Up Vote');
    userEvent.click(upVoteButton);
    expect(voteCount).toHaveTextContent('1');
  });

  it('should be decreased vote count after click Down Vote button', () => {
    const upVoteButton = screen.getByText('Down Vote');
    userEvent.click(upVoteButton);
    expect(voteCount).toHaveTextContent('-1');
  });
});
