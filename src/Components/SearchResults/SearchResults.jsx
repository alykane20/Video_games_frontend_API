import SearchBar from "../SearchBar/SearchBar";
import {useState,useEffect} from "react"
import DisplaySearchResults from "./DisplaySearchResults"

const SearchResults = (props) => {
    const[name , setName] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=> {
        getSearchResult();
    console.log(name)
}, [getSearchResults, name])
    
     function getSearchResult(){
        let currentSearch = props.videoGames.filter(el => el.name === name) 
        console.log(currentSearch)
        setSearchResults(currentSearch)
        return currentSearch
    }
    return (
    <div>
        <SearchBar setName={setName}/>
        <DisplaySearchResults searchResults={searchResults}/>
    </div>
    );
}
 
export default SearchResults;