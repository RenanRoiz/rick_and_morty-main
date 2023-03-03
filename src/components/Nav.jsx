import SearchBar from "./SearchBar";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
const Navegacion = styled.nav`
    background-color: blue;
    margin: 3px;
    align-items: end;;
`


export default function Nav(props){
    return <Navegacion>
        <SearchBar onSearch={props.onSearch} />
        <NavLink to="/home"><button>Home</button></NavLink>
        <NavLink to="/About"><button>About</button></NavLink>
    </Navegacion>

}