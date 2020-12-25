import React from 'react';
import styled from 'styled-components';
import Intro from './Intro';
import Main from './Main';

function App(): React.ReactElement {
  return (
    <Root>
      <Container>
        <Intro />
        <Main />
      </Container>
    </Root>
  );
}

const Root = styled.div`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  background-color: #0f0f0f;
  box-sizing: border-box;
  overflow-x: hidden;
  height: 100%;
  color: #979797;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 100%;

  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
  padding: 60px 0;
`;

export default App;
