import styled from 'styled-components/macro';

export default function ChurchPartenerTitle() {
  return (
    <Wrapper>
      <Para>Agenda de la semaine</Para>
    </Wrapper>
  )
};

const Wrapper = styled.div`
text-align: center;
font-weight: 500;
width: 100%;
height: 4rem;
margin: auto;
margin-top: 45px;
padding: 10px;
display: block;
box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
`;

const Para = styled.h2`
font-size: 1.4rem;
font-weight: 600;
margin-top: 10px;
color: #f87c6d;
@media(max-width: 576px){}
  @media(max-width: 768px){
    font-size: 1.2rem;
  }
  @media(max-width: 992px){}
  @media(max-width: 1200px){}
  @media(max-width: 1400px){}
`;