import styled from "styled-components"
import {Link} from "react-router-dom"

const Hijo= styled.div`
      margin: 15px;
      border: 1px;
`

const Cerrar = styled.button`
      background-color: red;
      color: white;
`
const Textos = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   flex-direction: row;
`
const H4 = styled.h4`
   margin: 10px
`

export default function Card(props) {
   return (
      <Hijo>
         
         <Cerrar onClick={props.onClose}>X</Cerrar>
         <h2>{props.name}</h2>
      <Textos>
         <H4>{props.species}</H4>
         <H4>{props.gender}</H4>
      </Textos>
      <Link to={`/detail/${props.id}`}>
         <img  src={props.image} alt={props.name} />
      </Link>
      </Hijo>
   );
}
