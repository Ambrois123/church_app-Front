import React from 'react'
import styled from 'styled-components'
import MotBienvenue from './MotBienvenue'
import {NavLink} from 'react-router-dom'

export default function PagePredication() {
  return (
    <Wrapper>
        <MotBienvenue />
        <Box>
            <h6><NavLink className="" to='/Predication' rel='noreferrer'>Nos prédications</NavLink></h6>
            <h6><NavLink to='/EtudesBiblique'  rel='noreferrer'>Nos études bibliques</NavLink></h6>
        </Box>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${'' /* width: 70%; */}
  height: 80vh;
  margin-top: 7em;
  ${'' /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4em; */}
  ${'' /* border: 1px solid black; */}
  ${'' /* box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.9); */}
  ${'' /* border-radius: 10px;
  margin: auto;
  margin-bottom: 40px; 
  margin-top: 40px;
  padding-top: 2em;
  padding-bottom: 2.5em; */}
    
  `;

  const Box = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    & h6 {
        margin-top: 3em;
    };
    & a {
        text-decoration: none;
        color: #f87c6d;
        border: 1px solid #f87c6d;
        padding: 1em;
        border-radius: 10px;
        ${'' /* background-color: ; */}
    };
    @media(max-width:1150px){
        flex-direction: column;
        gap: 3em;
        margin-bottom: 60px;
        margin-top: 60px;
        & a {
            padding: 0.8em;
            gap: 1em;
            margin-top: 1.5em;
        }
    }
  `;

