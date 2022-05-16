import React from "react";


const SearchBar = (props) => {
    function handleSubmit (event){
        event.preventDefault()
        props.getSearchResult()
    } 
    return (
        <form onSubmit={handleSubmit}>
            <input onChange= {(event) => props.setName(event.target.value)} type="search"/> 
            <button type="submit">Search</button>
        </form>
      );
}
 
export default SearchBar;
