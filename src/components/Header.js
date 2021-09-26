import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 8px;
  border-bottom: 1px solid black;
  flex: 0 0 60px;
`;

function Header() {
  return <HeaderWrapper>Header</HeaderWrapper>;
}

export default Header;
