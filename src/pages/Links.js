import styled from 'styled-components';
import OrderSelect from '../components/Links/OrderSelect';
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
      <PageContainer>
        <OrderSelect />
      </PageContainer>
    </PageWrapper>
  );
}

export default Links;
