import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Text = styled.h1`
  z-index: 2;
  padding: 1rem;
  text-align: center;
  color: #fff;
  font-size: 2rem;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

function MobileAlert() {
  return (
    <Wrapper>
      <Text>The document is less than 720px wide.</Text>
    </Wrapper>
  );
}

export { MobileAlert };
