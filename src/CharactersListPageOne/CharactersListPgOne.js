import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CharactersListPgOne.css"
import { useState} from 'react';


function CharactersListPgOne({characters}) {
const [filteredCharacters,setFilteredCharacters] = useState(characters);
  const [searchText,setSearchText] = useState('');

  function handleSearch (searchText) {
    if(searchText === ''){
      setFilteredCharacters(characters)
    }
    else{
      const filtered = (characters.filter((character)=> character.name.toLowerCase().includes(searchText.toLowerCase())))
      setFilteredCharacters(filtered);
    }
}
function handleSearchTextChange(event){
  const text = event.target.value;
  setSearchText(text);
  handleSearch(text)
}

  return (
    <div className="characters-container">
     <div className='list-header'> 
     <h2> List of Characters: </h2>
      
      <Link to = "/"> <button className="btn btn-primary"> Home Page </button> </Link>
     </div>
      
     <div>

    <label>
      Search:
      <input type = "text" name = "search" value = {searchText} onChange = {handleSearchTextChange} />
    </label>

     </div>
     
     
     
      <ul className="list-group c-list">
      
        {!filteredCharacters ? <div> Loading... </div> : filteredCharacters.map((character) => {
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






