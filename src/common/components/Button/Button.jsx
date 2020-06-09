import React from 'react';
import styled from '@emotion/styled';
import { darken } from "polished";


const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  min-width: 8rem;
  text-align: left;
  border: none;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 1em;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    background-color: ${props => darken(0.2, props.theme.colors.primary)};
  }
`;

function Button({ children, type, wrapperClassName }) {
  return (
    <ActionButton className={wrapperClassName} type={type}>
      {children}
    </ActionButton>
  );
}

export { Button };
