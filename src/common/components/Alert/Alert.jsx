import React from 'react';
import styled from '@emotion/styled';
import { lighten } from 'polished';

const getAlertColor = (category) => {
  switch (category) {
    case 'error':
      return (props) => props.theme.colors.danger;
    default:
      return '#000';
  }
};

function Alert({ msg, category }) {
  const AlertWrapper = styled.div`
    padding: 0.5em 1.5em;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    background-color: ${(props) =>
      lighten(0.5, getAlertColor(category)(props))};
    border-left: 4px solid ${getAlertColor(category)};
  `;

  const Text = styled.p`
    color: #444;
    font-size: 1em;
  `;

  return (
    <AlertWrapper>
      <Text>{msg}</Text>
    </AlertWrapper>
  );
}

export { Alert };
