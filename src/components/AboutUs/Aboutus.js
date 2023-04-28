import styled from 'styled-components/macro';



export default function Aboutus() {
  return (
    <Wrapper>
      <Title>Nous sommes une assemblée évangélique</Title>
      <div>
        <p>
        En tant que chrétiens, nous attachons une grande importance au fait de se rassembler, afin de découvrir 
        et  partager l’amour de Jésus-Christ notre Seigneur. « Car là où deux ou trois sont assemblés en mon nom,
         je (Jésus) suis au milieu d’eux. » (Matthieu 18:20) Dans le monde qui nous entoure, « … qu’il est 
         agréable, qu’il est doux pour des frères (et sœurs) de demeurer ensemble ! » (Psaumes 133:1 ) <Span>C’est 
         dans l’assemblée, unis autour de la personne et l’œuvre de Christ, à l’écoute de Sa Parole qui est la Bible, 
         que nous saisissons tous les trésors de la foi en Jésus-Christ</Span> (Luc 10:38-42). L’assemblée se 
         constitue de personnes de tous horizons, qui ont le désir commun de glorifier Dieu. Ils forment ainsi 
        une famille, dans laquelle l’amour de Dieu devient concret (Jean 13:35). <br/>
        Les églises évangéliques sont issues du protestantisme, qui au travers de la Réforme a réaffirmé <Span>son 
        attachement à l’inspiration des Écritures et à la justification par la foi seule</Span>. Ce qui nous unit, 
        nous réjouit, nous anime, nous motive, c’est l’Évangile qui veut dire Bonne Nouvelle !

        L’Evangile révèle l’amour éternel, infini, inconditionnel et immuable de Dieu. Par Son sacrifice sur 
        la croix, Jésus-Christ a touché notre cœur et ouvert notre intelligence. Il nous offre le pardon de 
        tous nos péchés et la sécurité d’une totale réconciliation avec Dieu le Créateur (Jean 15:13) (Esaïe 53) (1Jean 2:2).
        Remplis de cet amour, notre vision du monde et des autres s’éclaire pour construire des relations saines et durables avec notre prochain (Romains 13:10).
        Étreints par cet amour, nous annonçons cette Bonne Nouvelle afin que quiconque croit en Jésus-Christ 
        ne périsse point, mais qu’il ait la vie éternelle (Matthieu 28:19,20) (Jean 3:16).

        </p>
          </div>

    </Wrapper>
  )
};

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
  text-align: center;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  line-height : 1.5;
  & p {
    text-align: justify;
    padding: 10px;
    font-family : inherit;
    ${'' /* font-size: 15px; */}
    ${'' /* color: inherit; */}
  }
  & a {
    color: beige;
    font-style: italic;
  }
`;
const Title = styled.h4`
font-weight: 600;
font-size: 16px;
color: #dd8125;
`;
const Span = styled.span`
font-weight: 600;
font-size: 15px;
`;
