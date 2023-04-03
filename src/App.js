import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import CharactersListPgOne from "./CharactersListPageOne/CharactersListPgOne"
import HomePage from "./HomePage/HomePage"
import { useState,useEffect } from 'react';
import SingleCharacter from './SingleCharacterPg/SingleCharacter';
import axios from 'axios';
import FeaturedEpisodes from './FeaturedEpisodes/FeaturedEpisodes';

function App() { 
  const [characters, setCharacters] = useState([]);
 useEffect(() => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => {
      setCharacters(response.data.results);
    })
    .catch((err) => console.log(err));
}, []);

  return (
    <div className="App">
      
      <Routes> 
        <Route path="/" element={<HomePage  />} />
        <Route path = "/characters" element = {<CharactersListPgOne characters = {characters}/>}/>
        <Route path = "/characters/:charId" element = {<SingleCharacter characters = {characters} />} />
        <Route path = "/featured-episodes" element = {<FeaturedEpisodes/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
