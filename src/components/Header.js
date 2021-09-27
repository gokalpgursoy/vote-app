import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 8px;
  border-bottom: 1px solid black;
  flex: 0 0 60px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Brand = styled.h2`
  text-transform: lowercase;
  font-size: 24px;
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: 800;
`;

const SubTitle = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: 200;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Brand>Brand</Brand>
      <div>
        <Title>Link</Title>
        <SubTitle>VOTE Challenge</SubTitle>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
