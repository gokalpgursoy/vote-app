import { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { addLink } from '../../services/linksService';
import AppInput from '../App/AppInput';
import AppNotify from '../App/AppNotify';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const FormTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 52px;
`;

const AddButton = styled.button`
  background-color: black;
  color: white;
  width: 160px;
  height: 60px;
  border-radius: 24px;
  font-size: 28px;
  font-weight: 600;
  align-self: flex-end;
`;

function LinkForm() {
  const [isShowNotify, setIsShowNotify] = useState(false);

  const linkNameInput = useRef('');
  const linkUrlInput = useRef('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const link = {
      name: linkNameInput.current.value,
      url: linkUrlInput.current.value,
    };
    addLink(link).then(() => {
      setIsShowNotify(true);
      resetInputs();
      setTimeout(() => {
        setIsShowNotify(false);
      }, 1500);
    });
  };

  const resetInputs = () => {
    linkNameInput.current.value = '';
    linkUrlInput.current.value = '';
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      {isShowNotify && (
        <AppNotify linkName={linkNameInput.current.value} isAdd></AppNotify>
      )}
      <FormTitle>Add New Link</FormTitle>
      <AppInput
        inputRef={linkNameInput}
        type='text'
        label='Link Name'
        placeholder='e.g. Alphabet'
        required
      />
      <AppInput
        inputRef={linkUrlInput}
        type='url'
        label='Link URL'
        placeholder='e.g. http://abc.xyz'
        required
      />
      <AddButton>ADD</AddButton>
    </Form>
  );
}

export default LinkForm;
