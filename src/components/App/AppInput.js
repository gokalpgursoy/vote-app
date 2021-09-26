import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
  gap: 8px;
`;

const AppLabel = styled.div`
  font-size: 18px;
  font-weight: 300;
  padding: 0 8px;
`;

const Input = styled.input`
  height: 50px;
  padding: 0 8px;
  border: 1px solid gray;
  border-radius: 8px;
  font-size: 18px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: gray;
    opacity: 0.4;
  }
  :-ms-input-placeholder {
    color: gray;
    opacity: 0.4;
  }
`;

function AppInput({ inputRef, label, placeholder, required }) {
  return (
    <InputWrapper>
      <AppLabel>{label}:</AppLabel>
      <Input
        ref={inputRef}
        type='text'
        placeholder={placeholder}
        required={required}
      />
    </InputWrapper>
  );
}

export default AppInput;
