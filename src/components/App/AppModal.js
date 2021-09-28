import { X } from '@styled-icons/heroicons-solid';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: opacity 0.2s ease;
  z-index: 1;
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 40%;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #696969;
  z-index: 2;
`;

const ModalHeader = styled.div`
  width: 100%
  flex: 0 0 40px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 6px 12px
`;

const ModalContent = styled.div`
  height: 200px;
  overflow: auto;
  padding: 40px 30px;
  background-color: #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalFooter = styled.div`
  flex: 0 0 80px;
  background-color: #d8d8d8;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  padding: 0 10px;
`;

const CloseIcon = styled(X)`
  height: 18px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 24px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  font-size: 24px;
  font-weight: 500;
`;

function AppModal({ title, children, handleOkClick, handleCancelClick }) {
  const handleClickBackground = (e) => {
    e.stopPropagation();
    if (e.target.id === 'app-modal-wrapper') {
      handleCancelClick();
    }
  };

  return (
    <ModalWrapper id='app-modal-wrapper' onClick={handleClickBackground}>
      <Modal>
        <ModalHeader>
          <span>{title}</span>
          <CloseIcon onClick={() => handleCancelClick()} />
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>
          <Button onClick={() => handleOkClick()}>OK</Button>
          <Button onClick={() => handleCancelClick()}>CANCEL</Button>
        </ModalFooter>
      </Modal>
    </ModalWrapper>
  );
}

export default AppModal;
