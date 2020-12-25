import React, { useContext } from 'react';
import styled from 'styled-components';
import Intro from './Intro';
import Main from './Main';

function App() {
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
  color: white;
  background-color: #161819;
  box-sizing: border-box;
  overflow-x: hidden;
  height: 100%;
  color: #636667;
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
