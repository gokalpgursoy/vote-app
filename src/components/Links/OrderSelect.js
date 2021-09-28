import styled from 'styled-components';
import DownArrowIcon from '../../assets/down-arrow-icon.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex: 0 0 40px;
`;

const Select = styled.select`
  flex: 0 0 205px;
  height: 35px;
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

function OrderSelect({ handleOrderTypeChange }) {
  return (
    <Wrapper>
      <Select defaultValue='' onChange={(e) => handleOrderTypeChange(e)}>
        <option value=''>Order By</option>
        <option value='desc'>{`Most Voted(Z -> A)`}</option>
        <option value='asc'>{`Less Voted(A -> Z)`}</option>
      </Select>
    </Wrapper>
  );
}

export default OrderSelect;
