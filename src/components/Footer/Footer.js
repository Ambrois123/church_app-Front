import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Wrapper>
    <Para>Assemblée Evangélique de la Grâce de Toulouse <span>&copy;</span> 2022 Crée par Ambroise A.</Para>
    <p></p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items:center;
height: 5rem;
box-shadow: -1px -11px 12px -7px rgba(0, 0, 0, 1);
text-align: center;
font-size: 12px;
color: inherit;
@media(max-width: 400px){
  
}
`;

const Para = styled.p`
margin: 20px;
`;

export default Footer