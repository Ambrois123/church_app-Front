import styled from 'styled-components/macro';



export default function CredoHomePage() {
  return (
    <Wrapper>
     <Title>L'évangile de la grâce de Dieu</Title>
     <div>
            <p>La grâce est la provision parfaite et suffisante que Dieu nous offre ici-bas, pour découvrir 
            pleinement cette vie éternelle que nous avons reçue (1 Corinthiens 12:9). Grâce signifie faveur 
            imméritée de Dieu envers l’être humain. En effet, la vie chrétienne ne consiste pas à accomplir 
            des rites, des lois pour atteindre Dieu et Lui plaire mais à se laisser humblement aimer par Lui, 
            croire Sa Parole et la garder. Alors, jour après jour, Dieu dans Sa grâce, nous transforme à Son 
            image. Nous commençons à aimer la Vérité, ce qui est honorable, juste, pur, vertueux. La Grâce de 
            Dieu est toujours là pour nous relever, nous assurer Ses bontés et nous soutenir (Lamentations de 
            Jérémie 3:22,23) (Philippiens1:6 & 4:8) (Psaumes 18:36 & 119:57).
            La grâce de Dieu, « redécouverte » par les réformateurs, est le précieux trésor du croyant pour 
            vivre pieusement (Tite 2:11,12).</p>
            <p>L’Evangile révèle l’amour éternel, infini, inconditionnel et 
            immuable de Dieu. Par Son sacrifice sur la croix, Jésus-Christ 
            a touché notre cœur et ouvert notre intelligence. Il nous offre 
            le pardon de tous nos péchés et la sécurité d’une totale réconciliation 
            avec Dieu le Créateur - Jean 15:13, Esaïe 53 et 1Jean 2:2.</p>
     </div>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
  text-align: center;
  padding : 12px;
  ${'' /* padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px; */}
  ${'' /* font-size: 1.2rem; */}
  line-height : 1.5;
  & p {
    text-align: justify;
    color: inherit;
    font-family : inherit;
    ${'' /* font-size: 15px; */}
  }
  & a {
    color: beige;
    font-style: italic;
  }
`;

const Title = styled.h4`
font-weight: 600;
font-size: 17px;
color: #dd8125;
`;
// const Span = styled.span`
// font-weight: 600;
// ${'' /* font-size: 15px; */}
// `;
