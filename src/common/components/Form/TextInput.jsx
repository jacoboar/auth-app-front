import React from 'react';
import styled from '@emotion/styled';

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 0.8rem;
`;

const Label = styled.label`
  font-size: 1em;
  color: #444;
`;

const Description = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.8em;
`;

const InputBox = styled.input`
  width: 100%;
  height: 2.5em;
  padding: 0 1em;
  border: none;
  border-bottom: 1px solid #8d8d8d;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  font-family: inherit;
  color: #161616;
  line-height: 1.2;
  font-size: 1em;
  appearance: none;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    border: none;
  }
`;

function TextInput({
  name,
  label,
  type,
  placeholder,
  description,
  parentState,
  setParentState,
}) {

  const handleChange = (e) => {
    setParentState({
      ...parentState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Description>{description}</Description>
      <InputBox
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputWrapper>
  );
}

export { TextInput };
