import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CharactersListPgOne from "./CharactersListPageOne/CharactersListPgOne";
import HomePage from "./HomePage/HomePage";
import { useState, useEffect } from "react";
import SingleCharacter from "./SingleCharacterPg/SingleCharacter";
import FeaturedEpisodes from "./FeaturedEpisodes/FeaturedEpisodes";
function App() {
  const [characters, setCharacters] = useState([]);
  const [originalCharacters, setOriginalCharacters] = useState(characters);
  useEffect(() => {
    const fetchData = async () => {
     try{
     const page1Request = fetch("https://rickandmortyapi.com/api/character");
     const page2Request = fetch(
       "https://rickandmortyapi.com/api/character?page=2"
     );
     const page3Request = fetch(
       "https://rickandmortyapi.com/api/character?page=3"
     );
     const page4Request = fetch(
       "https://rickandmortyapi.com/api/character?page=4"
     );
     const page5Request = fetch(
       "https://rickandmortyapi.com/api/character?page=5"
     );
     const page6Request = fetch(
       "https://rickandmortyapi.com/api/character?page=6"
     );
     const page7Request = fetch(
       "https://rickandmortyapi.com/api/character?page=7"
     );
     const page8Request = fetch(
       "https://rickandmortyapi.com/api/character?page=8"
     );
     const page9Request = fetch(
       "https://rickandmortyapi.com/api/character?page=9"
     );
     const page10Request = fetch(
       "https://rickandmortyapi.com/api/character?page=10"
     );

     const [
       page1Response,
       page2Response,
       page3Response,
       page4Response,
       page5Response,
       page6Response,
       page7Response,
       page8Response,
       page9Response,
       page10Response,
     ] = await Promise.all([
       page1Request,
       page2Request,
       page3Request,
       page4Request,
       page5Request,
       page6Request,
       page7Request,
       page8Request,
       page9Request,
       page10Request,
     ])

     if (!page1Response.ok || !page2Response.ok|| !page3Response.ok|| !page4Response.ok|| !page5Response.ok|| !page6Response.ok|| !page7Response.ok|| !page8Response.ok|| !page9Response.ok|| !page10Response.ok){
      throw new Error ("Character not Found");
     }

     const page1Data = await page1Response.json();
     const page2Data = await page2Response.json();
     const page3Data = await page3Response.json();
     const page4Data = await page4Response.json();
     const page5Data = await page5Response.json();
     const page6Data = await page6Response.json();
     const page7Data = await page7Response.json();
     const page8Data = await page8Response.json();
     const page9Data = await page9Response.json();
     const page10Data = await page10Response.json();
    
     const allCharacters = [...page1Data.results, ...page2Data.results, ...page3Data.results, ...page4Data.results, ...page5Data.results, ...page6Data.results, ...page7Data.results, ...page8Data.results, ...page9Data.results, ...page10Data.results];

     setOriginalCharacters(allCharacters);
      setCharacters(allCharacters);
    } catch (err){
      console.log(err);
     }
      
    };
    fetchData();

  }, []); 

  function handleSearch (text) {
    if (text === ''){
      setCharacters(originalCharacters)
    }
    else {
      const filteredCharacters = characters.filter((character)=> character.name.toLowerCase().includes(text.toLowerCase()));
      setCharacters(filteredCharacters)
    }
  }

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/characters"
          element={ <CharactersListPgOne characters={characters}  onSearch = {handleSearch}/> }
        />
        <Route
          path="/characters/:charId"
          element={<SingleCharacter characters={characters} />}
        />
        <Route path="/featured-episodes" element={<FeaturedEpisodes />} />
      </Routes>
    </div>
  );
}

export default App;
