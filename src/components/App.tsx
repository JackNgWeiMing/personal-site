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

  line-height: 1.5em;

  h1 {
    padding-top: 20px;
    font-size: 1.5em;
  }
  h2 {
    margin-top: 0;
    font-size: 1.2em;
  }
`;

const Container = styled.div`
  @media only screen and (min-width: 320px) {
    display: block;
    width: 90vw;
    max-width: 90vw;
    padding: 20px 0;
    margin: 0 auto;
    /* font-size: 18px; */
  }

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100%;
    font-size: 18px;

    max-width: 1024px;
    width: 90%;
    margin: 0 auto;
    padding: 60px 0;
  }
`;

export default App;
