import styled from 'styled-components';
import Container from './Container';
import Header from './Header';

const MainWrappper = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ChildrenWrapper = styled.div`
  width: 460px;
  flex: 1;
  overflow: hidden;
  padding: 32px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

function MainLayout({ children }) {
  return (
    <Container>
      <MainWrappper>
        <Header />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </MainWrappper>
    </Container>
  );
}

export default MainLayout;
