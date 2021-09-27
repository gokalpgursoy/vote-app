import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from '@styled-icons/heroicons-solid';

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  gap: 10px;
  color: #000000;
`;

const LeftIcon = styled(ChevronLeft)`
  height: 20px;
  cursor: pointer;
  ${({ disabled }) => disabled && `pointer-events: none`}
`;

const RightIcon = styled(ChevronRight)`
  height: 20px;
  cursor: pointer;
  ${({ disabled }) => disabled && `pointer-events: none`}
`;

const PageItemButton = styled.button`
  width: 30px;
  height: 30px;
  font-weight: bold;
  ${({ active }) => active && `border: 1px solid #bfbfbf; `}
`;

function Pagination({
  totalLinkCount,
  currentPageNumber,
  handleClickPagination,
}) {
  const paginationItemCount = 5;
  const totalPageCount = Math.ceil(totalLinkCount / paginationItemCount);

  const paginationGroupIndex = Math.floor(
    (currentPageNumber - 1) / paginationItemCount
  );

  const pages = [];
  for (let i = 1; i <= paginationItemCount; i++) {
    const pageNumber = i + paginationItemCount * paginationGroupIndex;
    if (pageNumber <= totalPageCount) {
      pages.push(pageNumber);
    } else {
      break;
    }
  }

  const handleClickIcon = (isLeft) => {
    if (isLeft) {
      handleClickPagination(currentPageNumber - 1);
    } else {
      handleClickPagination(currentPageNumber + 1);
    }
  };

  return (
    <PaginationWrapper>
      <LeftIcon
        disabled={currentPageNumber === 1}
        onClick={() => handleClickIcon(true)}
      />
      {pages.map((item, index) => (
        <PageItemButton
          key={index}
          active={item === currentPageNumber}
          onClick={() => handleClickPagination(item)}
        >
          {item}
        </PageItemButton>
      ))}
      <RightIcon
        disabled={currentPageNumber === totalPageCount}
        onClick={() => handleClickIcon(false)}
      />
    </PaginationWrapper>
  );
}

export default Pagination;
