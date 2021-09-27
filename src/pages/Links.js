import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import LinkCard from '../components/Links/LinkCard';
import OrderSelect from '../components/Links/OrderSelect';
import SubmitLink from '../components/Links/SubmitLink';
import { deleteLinkById, getPaginatedLinks } from '../services/linksService';

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
  const [pageNumber, setPageNumber] = useState(1);

  const fetchPaginatedLinks = useCallback(() => {
    getPaginatedLinks(pageNumber).then((data) => {
      setLinks(data);
    });
  }, [pageNumber]);

  useEffect(() => {
    fetchPaginatedLinks(pageNumber);
    return () => console.log('unmounting...');
  }, [pageNumber, fetchPaginatedLinks]);

  const deleteLink = (id) => {
    deleteLinkById(id).then(() => {
      fetchPaginatedLinks();
    });
  };

  return (
    <PageWrapper>
      <PageContainer>
        <SubmitLink />
      </PageContainer>
      <Seperator />
      <PageContainer>
        <OrderSelect />
        {links.map((item) => (
          <LinkCard link={item} key={item.id} handleDelete={deleteLink} />
        ))}
      </PageContainer>
    </PageWrapper>
  );
}

export default Links;
