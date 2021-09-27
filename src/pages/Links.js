import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import LinkCard from '../components/Links/LinkCard';
import OrderSelect from '../components/Links/OrderSelect';
import SubmitLink from '../components/Links/SubmitLink';
import { getLinks } from '../services/linksService';

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
  const [links, setLinks] = useState([]);
  useEffect(() => {
    getLinks().then((data) => {
      setLinks(data);
    });
  }, []);

  return (
    <PageWrapper>
      <PageContainer>
        <SubmitLink />
      </PageContainer>
      <Seperator />
      <PageContainer>
        <OrderSelect />
        {links.map((item) => (
          <LinkCard link={item} key={item.id} />
        ))}
      </PageContainer>
    </PageWrapper>
  );
}

export default Links;
