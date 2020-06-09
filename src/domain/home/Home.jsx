import React from 'react';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';
import { keyframes } from '@emotion/core';

import { Container } from '../../common/components/Container';

import logo from '../../common/img/logo.svg';

const Animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${Animation} infinite 20s linear;
`;

function Home() {
  return (
    <ClassNames>
      {({ css }) => (
        <Container
          wrapperClassName={css({ justifyContent: 'center', padding: '2rem' })}>
          <Logo src={logo} alt='logo' />
        </Container>
      )}
    </ClassNames>
  );
}

export { Home };
