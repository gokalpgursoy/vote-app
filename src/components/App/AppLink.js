import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 5px;
  font-weight: 500;
`;

function AppLink({ text, href, children }) {
  return (
    <LinkWrapper>
      {children}
      <Link to={href}>{text}</Link>
    </LinkWrapper>
  );
}

export default AppLink;
