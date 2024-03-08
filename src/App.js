import * as React from 'react';
import styled from 'styled-components';
import Game from './components/game';



const AppWrapper = styled.div `
background-color: #cecece;
margin: 20%;
margin-top: 10%;
text-align: center
`;

function App() {
  return (
    <AppWrapper>
      <h1 color='orange'>GUESS THE MOVIE</h1>
      <Game></Game>
    </AppWrapper>
  );

}

export default App;
