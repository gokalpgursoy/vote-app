import styled from 'styled-components';

const Container = styled.main`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

function MainLayout({ children }) {
  return (
    <Container>
      <h1>main</h1>
      {children}
    </Container>
  );
}

export default MainLayout;
