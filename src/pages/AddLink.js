import styled from 'styled-components';
import { ArrowNarrowLeft } from '@styled-icons/heroicons-solid';

import LinkForm from '../components/AddLink/LinkForm';
import AppLink from '../components/App/AppLink';

const PageWrapper = styled.div`
  width: 100%;
`;

const LeftArrowIcon = styled(ArrowNarrowLeft)`
  height: 17px;
`;

function AddLink() {
  return (
    <PageWrapper>
      <AppLink text='Return to List' href='/'>
        <LeftArrowIcon />
      </AppLink>
      <LinkForm />
    </PageWrapper>
  );
}

export default AddLink;
