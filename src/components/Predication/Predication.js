
import React from 'react'
import styled from 'styled-components'
import WelcomeSermon from '../WelcomeSermon'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import axios from 'axios';

const baseURL = "http://localhost/server_aegt/sermons";


function Predication() {
  const [sermons, setSermons] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);

      // {/**Object.values pour transformer l'objet en tableau */}
      setSermons(Object.values(response.data));
    });
  }, []);

  if(!sermons) return "No sermons";

  return (
    <Wrapper>
      <WelcomeSermon />
        <Main>
        {sermons.map((sermon) => {
          const list =(
            <div key={sermon.id}>
            {/* {Opérateur spread pour envoyer toutes les propriétés de notre objet} */}
              <AudioPlayer {...sermon} />
            </div>
          );
          return list;
        })}
        </Main>
    </Wrapper>
  )
}
const Wrapper = styled.div``;

const Main = styled.div`
display: grid;
padding: 3em;
grid-gap: 1.2em;
margin: auto;
grid-template-columns repeat(auto-fill, minmax(320px, 1fr));
`;

export default Predication
