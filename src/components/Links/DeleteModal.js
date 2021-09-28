import styled from 'styled-components';
import AppModal from '../App/AppModal';

const Title = styled.h3`
  color: #595959;
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0;
`;

const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: 900;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
  text-align: center;
`;

function DeleteModal({ linkName, handleDeleteLink, handleCancelClick }) {
  return (
    <AppModal
      title='Remove Link'
      handleOkClick={() => handleDeleteLink()}
      handleCancelClick={() => handleCancelClick()}
    >
      <Title>Do you want to remove:</Title>
      <SubTitle title={linkName}>{linkName}</SubTitle>
    </AppModal>
  );
}

export default DeleteModal;
