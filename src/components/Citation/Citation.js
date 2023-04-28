import React from 'react'
import styled from 'styled-components/macro';

export default function Citation(props) {
  return (
    <Wrapper>
        <Quote>{props.citation}</Quote>
        <Span>{props.auteur}</Span>
    </Wrapper>
  )
}



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  border-radius: 5px;
  width: 100%;
  margin: auto;
  box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.9);
  text-align: center;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  ${'' /* font-size: 1.2rem; */}
  line-height : 1.5;
`;

const Quote = styled.p`
${'' /* font-weight: 600; */}
font-size: 1.3em;
color: inherit;
`;

const Span = styled.span`
${'' /* font-weight: 600; */}
font-size: 15px;
color: inherit;
`;