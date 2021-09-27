import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowUp, ArrowDown } from '@styled-icons/heroicons-solid';

const CardWrapper = styled.div`
  height: 95px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const VoteCountWrapper = styled.div`
  flex: 0 0 95px;
  height: 95px;
  background-color: #ececec;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #a9a9a9;
  border-radius: 5px;
`;

const VoteCountText = styled.span`
  font-size: 50px;
  font-weight: bold;
`;

const VoteCountSubTitle = styled.span`
  font-size: 14px;
  text-transform: uppercase;
`;

const VoteContent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
`;

const LinkName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const LinkAddress = styled.span`
  font-size: 16px;
  color: #8b8b8b;
  font-weight: 200;
`;

const IconsWrapper = styled.div`
  flex: 1;
  width: 100;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const IconButton = styled.button`
  color: #8b8b8b;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

const ArrowUpIcon = styled(ArrowUp)`
  height: 15px;
`;

const ArrowDownIcon = styled(ArrowDown)`
  height: 15px;
`;

function LinkCard({ link }) {
  return (
    <CardWrapper>
      <VoteCountWrapper>
        <VoteCountText>{link.voteCount}</VoteCountText>
        <VoteCountSubTitle>Points</VoteCountSubTitle>
      </VoteCountWrapper>
      <VoteContent>
        <LinkName>{link.name}</LinkName>
        <LinkAddress>
          <Link
            to={{
              pathname: link.url,
            }}
            target='_blank'
          >
            ({link.url})
          </Link>
        </LinkAddress>
        <IconsWrapper>
          <IconButton>
            <ArrowUpIcon></ArrowUpIcon>
            Up Vote
          </IconButton>
          <IconButton>
            <ArrowDownIcon></ArrowDownIcon>
            Down Vote
          </IconButton>
        </IconsWrapper>
      </VoteContent>
    </CardWrapper>
  );
}

export default LinkCard;
