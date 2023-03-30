import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharactersOne from "./CharactersListPageOne/CharactersListPgOne"
import HomePage from "./HomePage/HomePage"

function App() { 
  return (
    <div className="App">
      
      <Routes> 
        <Route path="/" element={<HomePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
