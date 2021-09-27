import styled from 'styled-components';
import SubmitLink from '../components/Links/SubmitLink';

const Seperator = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ececec;
  margin: 20px 0;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PageContainer = styled.div`
  padding: 0 15px;
`;

function Links() {
  return (
    <PageWrapper>
      <PageContainer>
        <SubmitLink />
      </PageContainer>
      <Seperator />
    </PageWrapper>
  );
}

export default Links;
