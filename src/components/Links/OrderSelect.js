import styled from 'styled-components';
import DownArrowIcon from '../../assets/down-arrow-icon.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 35px;
  position: relative;
`;

const Select = styled.select`
  flex: 0 0 205px;
  height: 100%;
  background-color: #f2f2f2;
  color: black;
  padding: 0 10px;
  -webkit-appearance: none;
  border: 1px solid #d7d1d1;
  border-radius: 5px;
  background-image: url(${DownArrowIcon});
  background-size: 40px 40px;
  background-position: 165px -5px;
  background-repeat: no-repeat;
`;

function OrderSelect() {
  return (
    <Wrapper>
      <Select placeholder='Order By' defaultValue=''>
        <option value=''>Order By</option>
        <option value='most'>{`Most Voted(Z -> A)`}</option>
        <option value='less'>{`Less Voted(A -> Z)`}</option>
      </Select>
    </Wrapper>
  );
}

export default OrderSelect;
