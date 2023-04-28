import React from 'react'
import styled from 'styled-components'
import Citation from './Citation';
import axios from 'axios';

const baseURL = "http://localhost/server_aegt/citations";

export default function CitationTemplate() {
  const [citations, setCitations] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);

      // {/**Object.values pour transformer l'objet en tableau */}
      setCitations(Object.values(response.data));
    });
  }, []);

  if(!citations) return "No citations";

  return (
    <Wrapper>
    {/* <h5>Pensée à méditer</h5> */}
    {citations.map((citation) => {
      const list =(
        <div key={citation.id}>
        {/* {Opérateur spread pour envoyer toutes les propriétés de notre objet} */}
          <Citation {...citation} />
        </div>
      );
      return list;
    })}
    
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 60%;
min-height: 150px;
margin: auto;
padding: 24px;
border-radius: 10px;
box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
${'' /* @media(max-width:1250px){
    grid-template-columns: 1fr;
} */}
`;