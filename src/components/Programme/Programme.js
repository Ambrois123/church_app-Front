import React from 'react'
import styled from 'styled-components'


function Programme() {
  return (
    
            <Main>
                <Div>
                   <H>Culte du dimanche à 10h30</H>
                    <Para>Fasthotel Balma au 2 rue Louis Renault 31130 Balma</Para>
                    <Para>Métro : Balma-Gramont <span>(5 minutes à pied du métro)</span></Para>
                    
                </Div>
               <Div>
                    <H>Evangélisation les samedis </H>
                    <Para>Rendez-vous samedi à 15h30 au parc de la prairie des filtres</Para>
                    <Para>Métro : Saint Cyprien</Para>
                </Div>
                <Div>
                    <H>Etude biblique en semaine les mercredis et jeudis à 20h</H>
                    <Para>Intéressé ?</Para>
                    <Para>Contactez-nous au 06 79 27 32 52</Para>
                </Div>
            </Main>
    
  )
}

// const Wrapper = styled.div`
// display: grid;
// width: 100%;
// padding: 3em;
// grid-gap: 1.2em;
// margin: auto;
// margin-bottom: 20px;
// margin-top: 20px;
// grid-template-columns: 1fr;
// box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);

// `;

const Main = styled.div`
display: grid;
padding: 25px;
grid-gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))

`;

const Div =styled.div`
text-align: center;
box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
padding: 5px;

`;


const H = styled.h4`
letter-spacing: 1px;
font-size: 16px;
font-weight: 600;
`;

const Para =styled.p`
color: inherit;
${'' /* font-size: 15px; */}
`;

export default Programme