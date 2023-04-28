import styled from 'styled-components/macro';

export default function CredoTitle() {
  return (
    <Wrapper>
      <Para>Notre confession de foi</Para>
    </Wrapper>
  )
};

const Wrapper = styled.div`
text-align: center;
font-weight: 500;
width: 100%;
height: 4rem;
margin: auto;
margin-top: 35px;
padding: 10px;
display: block;
box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
`;

const Para = styled.h2`
font-size: 1.4rem;
font-weight: 600;
margin-top: 10px;
color: orange;
@media(max-width: 576px){
    font-size: 17px;
  }
  @media(max-width: 768px){
    f
  }
  @media(max-width: 992px){}
  @media(max-width: 1200px){}
  @media(max-width: 1400px){}
`;