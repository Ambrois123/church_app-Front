
import React from 'react'
import styled from 'styled-components'
import StudiesBienvenue from '../Predication/StudiesBienvenue'
import StudiesAudio from '../AudioPlayer/StudiesAudio'
// import axios from 'axios';

// const baseURL = "http://localhost/server_aegt/studies";


export default function BibleStudies() {

  return (
    <Wrapper>
      <StudiesBienvenue />
        <Main>
            <StudiesAudio />
        </Main>
    </Wrapper>
  )
}
const Wrapper = styled.div``;

const Main = styled.div`
display: grid;
padding: 3em;
grid-gap: 1.2em;
margin: auto;
grid-template-columns repeat(auto-fill, minmax(320px, 1fr));
`;


