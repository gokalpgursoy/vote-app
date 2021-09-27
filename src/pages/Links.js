import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import LinkCard from '../components/Links/LinkCard';
import OrderSelect from '../components/Links/OrderSelect';
import SubmitLink from '../components/Links/SubmitLink';
import Pagination from '../components/Pagination';
import { pageSizeConstant } from '../helpers/contants';
import {
  deleteLinkById,
  fetchPaginatedLinks,
  fetchTotalLinkCount,
} from '../services/linksService';

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
  const [totalLinkCount, setTotalLinkCount] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const getPaginatedLinks = useCallback(() => {
    fetchPaginatedLinks(currentPageNumber).then((data) => {
      setLinks(data);
    });
  }, [currentPageNumber]);

  const getTotalLinkCount = useCallback(() => {
    fetchTotalLinkCount().then((count) => {
      const minDataCountShouldBe =
        (currentPageNumber - 1) * pageSizeConstant + 1;
      const isRedirectToPreviousPage =
        currentPageNumber > 1 && count < minDataCountShouldBe;
      if (isRedirectToPreviousPage) {
        // after last item deleted at last page go to previous page
        setCurrentPageNumber(currentPageNumber - 1);
      }
      setTotalLinkCount(count);
    });
    return () => console.log('unmounting...');
  }, [currentPageNumber]);

  const handleDeleteLink = (id) => {
    deleteLinkById(id).then(() => {
      getPaginatedLinks();
      getTotalLinkCount();
    });
  };

  const handleClickPagination = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  useEffect(() => {
    getPaginatedLinks();
    getTotalLinkCount();
    return () => console.log('unmounting...');
  }, [getPaginatedLinks, getTotalLinkCount]);

  return (
    <PageWrapper>
      <PageContainer>
        <SubmitLink />
      </PageContainer>
      <Seperator />
      <PageContainer>
        {!!totalLinkCount && <OrderSelect />}

        {links.map((item) => (
          <LinkCard
            link={item}
            key={item.id}
            handleDelete={handleDeleteLink}
            getPaginatedLinks={getPaginatedLinks}
          />
        ))}
        {!!totalLinkCount && (
          <Pagination
            totalLinkCount={totalLinkCount}
            currentPageNumber={currentPageNumber}
            handleClickPagination={handleClickPagination}
          />
        )}
      </PageContainer>
    </PageWrapper>
  );
}

export default Links;
