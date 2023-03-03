import Card from './Card';
import styled from "styled-components";

const Wrapper=styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   flex-direction: row;
`

export default function Cards(props) {
   const { characters } = props;
   return <Wrapper>
      {characters.map(character=>(
         <Card id={character.id}
         key={character.id}
         name={character.name}
         species={character.species}
         gender={character.gender}
         image={character.image}
         onClose={()=>props.onClose(character.id)}/>
      ))}
   </Wrapper>;
}
