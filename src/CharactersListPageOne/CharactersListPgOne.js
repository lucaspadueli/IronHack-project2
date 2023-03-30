import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CharactersListPgOne.css"

function CharactersListPgOne() {
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
    <div className="characters-container">
      <h2> List of Characters: </h2>
      <p id="pages"> page 1</p>
      <ul className="list-group c-list">
        {characters.map((character) => {
          return (
            <li className="list-group-item list-group-item-success">
              {" "}
              <h4> {character.name} </h4>
              <p> Species: {character.species}</p>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="button"
              >
                <span>Show {character.name } </span> <span> Info</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


export default CharactersListPgOne;