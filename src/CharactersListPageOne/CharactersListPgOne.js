import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CharactersListPgOne.css"

function CharactersListPgOne({characters}) {
 
  return (
    <div className="characters-container">
      <h2> List of Characters: </h2>
      <p id="pages"> page 1</p>
      <Link to = "/"> <button className="btn btn-primary"> Home Page </button> </Link>
      <ul className="list-group c-list">
      
        {!characters ? <div> Loading... </div> : characters.map((character) => {
          return (
            <li className="list-group-item list-group-item-success">
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