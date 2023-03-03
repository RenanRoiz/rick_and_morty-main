import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {Link} from "react-router-dom"


export default function Detail (props){
    const {detailId} = useParams()
    const [character,setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return <div>
        <Link to="/home">
            <button>Volver a Inicio</button>
        </Link>
        <h1>NOMBRE: {character.name}</h1>
        <h4>Status: {character.status}</h4>
        <h4>Especie: {character.species}</h4>
        <h4>Género: {character.gender}</h4>
        <h4>ORIGIN: {character.origin}</h4>
        <img src={character.image} alt={character.name}/>
    </div>
    
}