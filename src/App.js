import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards.jsx'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'


function App () {

  const [characters,setCharacters]= useState([]);


 function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

  const onClose= id=>{
    setCharacters(characters.filter(char=>char.id!==id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      <hr />
      <Routes>
        <Route path="/about" element={<About />}/> 
        <Route path="/home" element={
          <Cards characters={characters} onClose={onClose} />
        }/>
        <Route path="/detail/:detailId" element={<Detail />}/>
        <Route path="/home"/>
      </Routes>
    </div>
  )
}

export default App
