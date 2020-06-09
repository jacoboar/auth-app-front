import React from 'react';
import styled from '@emotion/styled';

const Alert = styled.p`
  margin-top: 0.1rem;
  font-size: 0.55em;
  color: red;
`;

function ValidationAlert({ content }) {
  return <Alert>{content}</Alert>;
}

export { ValidationAlert };
