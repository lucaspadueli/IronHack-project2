import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CharactersListPgOne.css"
import { useState} from 'react';
import SearchBar from '../SearchBar';

function CharactersListPgOne({characters}) {
 const[filteredCharacters,setFilteredCharacters] = useState(characters);
  
 function handleSearch(text) {
  if(text === '') {
    setFilteredCharacters(characters)
  }
  else{
    const filteredChars = filteredCharacters.filter((character)=> character.name.toLowerCase().includes(text.toLowerCase()))
    setFilteredCharacters(filteredChars)
  }
}

  return (
    <div className="characters-container">
     <div className='list-header'> 
     <h2> List of Characters: </h2>
      
      <Link to = "/"> <button className="btn btn-primary"> Home Page </button> </Link>
     </div>
      
     <SearchBar onSearch={handleSearch} />
     
     
     
      <ul className="list-group c-list">
      
        {!characters ? <div> Loading... </div> : characters.map((character) => {
          return (
            <li key = {character.id} className="list-group-item list-group-item-success">
              {" "}
              <h4> {character.name} </h4>
              <p> Species: {character.species}</p>
              <Link to = {`/characters/${character.id}`}> <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="button"
              >
                <span>Show {character.name } </span> <span> Info</span>
              </button> </Link>
            </li>
          );
        })} 
      </ul>
    </div>
  );
}


export default CharactersListPgOne;






