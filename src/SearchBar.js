import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({onSearch}) => {
const [searchText, setSearchText] = useState('');
    function handleSearchTextChange (e){
        const text = e.target.value;
        setSearchText(text);
        onSearch(text);
    }


return (


<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Search:</span>
  </div>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name = "search" value = {searchText} onChange = {handleSearchTextChange}/>
</div>



)


}

export default SearchBar;