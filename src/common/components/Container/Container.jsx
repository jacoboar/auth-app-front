import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

function Container({ children, wrapperClassName }) {
  return (
    <Main className={wrapperClassName} role='main'>
      {children}
    </Main>
  );
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export { Container };
