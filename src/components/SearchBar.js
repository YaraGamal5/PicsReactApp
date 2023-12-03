import './SearchBar.css';
import { useState } from "react";

function SearchBar({onSubmit}) {
const[term,setTerm] = useState('');

    const handlerFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

const handleChange = (event) => {
setTerm(event.target.value);
};

    return  (
    <div className="search-bar">
        <form onSubmit={handlerFormSubmit}>
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
    );
    }
   
  export default SearchBar;