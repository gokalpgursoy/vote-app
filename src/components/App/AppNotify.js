import styled from 'styled-components';

const NotifyWrapper = styled.div`
  position: absolute;
  top: 20px;
  z-index: 1;
  width: 370px;
  height: 65px;
  background-color: #ddf9d2;
  color: #5aad5a;
  border: 1px solid #5aad5a;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px #5aad5a;
  font-size: 18px;
  gap: 5px;
`;

const LinkName = styled.span`
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function AppNotify({ linkName, isAdd }) {
  return (
    <NotifyWrapper>
      <LinkName title={linkName}>{linkName}</LinkName>
      <span> {isAdd ? 'added.' : 'removed.'}</span>
    </NotifyWrapper>
  );
}

export default AppNotify;
