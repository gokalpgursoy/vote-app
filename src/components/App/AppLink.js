import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Text = styled.span`
  font-weight: 500;
  margin: 0 5px;
`;

function AppLink({ text, href, children }) {
  return (
    <LinkWrapper to={href}>
      {children}
      <Text>{text}</Text>
    </LinkWrapper>
  );
}

export default AppLink;
