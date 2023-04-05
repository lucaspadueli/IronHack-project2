import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import "./SearchBar.css";



const SearchBar = ({onSearch}) => {
const [searchText,setSearchText] = useState('');
  function handleSearchTextChange(event){
    const text = event.target.value;
    setSearchText(text);
    onSearch(searchText);
  }


return (


<div>

<label>
Search:
<input type = "text" name = "search" value = {searchText} onChange = {handleSearchTextChange}/>
</label>

</div>


)


}

export default SearchBar;