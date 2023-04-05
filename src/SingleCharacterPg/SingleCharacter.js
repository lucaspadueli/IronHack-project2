import "./SingleCharacter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SingleCharacter({ characters }) {
  const { charId } = useParams();
  const [selectedChar, setSelectedChar] = useState(null);

  useEffect(() => {
    const character = characters.find((character) => {
      return character.id === parseInt(charId, 10);
    });
    if (character){
      axios.get(`https://rickandmortyapi.com/api/character?page=${character.id}`)
      .then(response => setSelectedChar(character))
    } 
  }, [charId, characters]);

  return (
    <div className="single-char-page">
      {!selectedChar ? (
        <h3> char not found</h3>
      ) : (
        
        <div className="card" key={selectedChar.id}>
          <Link to="/characters">
            {" "}
            <button className="btn btn-primary"> Characters List </button>
          </Link>
          <Link to="/">
            {" "}
            <button className="btn btn-primary"> Home Page </button>
          </Link>
          <img
            className="card-img-top"
            src={selectedChar.image}
            alt="character"
          />
          <div className="card-body">
            <h2 className="card-title"> {selectedChar.name} </h2>
          </div>
          <ul className="list-group list-group-flush list-group-single">
            <li className="list-group-item">
              {" "}
              Species: {selectedChar.species}{" "}
            </li>

            <li className="list-group-item"> Gender: {selectedChar.gender} </li>
            <li className="list-group-item">
              {" "}
              Origin: {selectedChar.origin.name}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              Location: {selectedChar.location.name}
            </li>
            <li className="list-group-item"> Status: {selectedChar.status}</li>
            <li className="list-group-item">
              {" "}
              Created: {selectedChar.created}{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default SingleCharacter;
