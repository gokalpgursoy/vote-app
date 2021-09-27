import styled from 'styled-components';
import { Plus } from '@styled-icons/heroicons-solid';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 110px;
  width: 100%;
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #ededed;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #ececec;
  height: 100%;
  flex: 0 0 90px;
  border: 1px solid #a8a8a8;
  border-radius: 5px;
`;

const PlusIcon = styled(Plus)`
  height: 50px;
`;

const TextWrapper = styled.span`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  flex: 1;
`;

const StyledLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SubmitLink() {
  return (
    <Wrapper>
      <StyledLink to='/add-link'>
        <Button>
          <PlusIcon />
        </Button>
        <TextWrapper>SUBMIT A LINK</TextWrapper>
      </StyledLink>
    </Wrapper>
  );
}

export default SubmitLink;
