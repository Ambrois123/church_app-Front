import styled from 'styled-components/macro';


export default function FamilleContact() {
  const FamilleCont = new URL("../imgs/Famille.jpeg", import.meta.url)
  return (
    <Wrapper>
      <div>
        <img  src={FamilleCont} alt=""/>
        <Para>Alycia, Melody, Fabien ,Ambroise et Raphaël</Para>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.div`
border-radius: 5px;
  box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
  text-align: center;
  padding-top: 10px;
  font-size: 1.4em;
& img {
  max-width: 50%;
  height: 50%;
  object-fit: contain;
  margin: auto;
}
`;

const Para = styled.p`
font-size: 0.8em;
font-family: 'Great Vibes', cursive;
text-align: center;
color: inherit;
`;

