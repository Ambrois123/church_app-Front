import React from 'react';
import styled from 'styled-components/macro';





export default function WelcomeSermon() {
  return (
    <Wrapper>
      <Para>
      Jésus dit aux Juifs qui avaient cru en lui: «Si vous demeurez dans ma parole, vous êtes vraiment 
      mes disciples, vous connaîtrez la vérité, et la vérité vous rendra libres.»
      </Para>
    </Wrapper>
  )
};

const Wrapper = styled.div`
display: grid;
width: 80%;
min-height: 150px;
margin: auto;
grid-template-columns: 1fr;
row-gap: 20px;
@media(min-width: 1400px){
  min-height: 120px;
}
`;

const Para = styled.div`
  border-radius: 5px;
  box-shadow: 0px 3px 7.4564px rgb(0, 0, 0, 2);;
  text-align: center;
  padding: 25px;
  font-size: 2rem;
  font-family: 'Great Vibes', cursive;
  line-height : 1.5;
  font-weight: 300;
  margin-top: 0.4em;
  ${'' /* background-color: #f5f5f5; */}
  @media(max-width: 1200px){
  font-size: 1.8rem;
}
@media(max-width: 768px){
  font-size: 1.6rem;
}
@media(max-width: 576px){
  font-size: 1.4rem;
}
`;

