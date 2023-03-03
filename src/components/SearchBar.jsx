import { useState } from "react";
import styled from "styled-components";

const Busqueda= styled.input`
   
`
const Boton= styled.button`
   background-color: green;
   color: white;
   margin: 15px;
`

export default function SearchBar(props) {

   const [character,setCharacter]=useState("")
   const handleChange=e=>{
      const {value} = e.target;
      setCharacter(value);
   }

   return (
      <div>
         <Busqueda type='search' onChange={handleChange}/>
      <Boton onClick={()=> props.onSearch(character)}>Agregar</Boton>
      </div>
   );
}
