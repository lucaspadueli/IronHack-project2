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



function handleCategoryChange (e) {
 const selectedCategory = e.target.value;
 let charactersToFilter = [...characters];


 if(selectedCategory.toLowerCase() === "human"){
  var filteredSpecies = charactersToFilter.filter((character)=> character.species.toLowerCase()=== "human")
 }
 else if(selectedCategory.toLowerCase()==="alien"){
  filteredSpecies = charactersToFilter.filter((character)=> character.species.toLowerCase() === "alien")
 }
 else if (selectedCategory.toLowerCase()=== "others"){
  filteredSpecies = charactersToFilter.filter((character)=> character.species.toLowerCase()!== "alien" && character.species.toLowerCase()!== "human")
 }
  else if(selectedCategory.toLowerCase()=== "all"){
    filteredSpecies = characters;
  }
  setFilteredCharacters(filteredSpecies);
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

    
  <div className="form-row align-items-center">
    <div className="col-auto my-1">
      <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Sort by:</label>
      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange = {handleCategoryChange}>
        <option value="">Select a species</option>
        <option value = "all"> All </option>
        <option value="human">Humans</option>
        <option value="alien">Aliens</option>
        <option value="others">Others</option>
      </select>
     </div>
     </div> 
     

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






