
import React from 'react';
import styled from 'styled-components/macro';
import '../Admin/AdminChurch.css';
import PageLogin from './PageLogin';

export default function AdminChurch() {
  return (
    <Wrapper>
      <div>
        <Title>La page de connexion</Title>

        <PageLogin  />

      </div> 
      
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 50px; 
  margin-top: 50px;
  `;

const Title = styled.h1`
font-weight: 600;
color: #f87c6d;
`;





  