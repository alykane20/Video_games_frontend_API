import SearchBar from "../SearchBar/SearchBar";
import {useState,useEffect} from "react"
import DisplaySearchResults from "./DisplaySearchResults"

const SearchResults = (props) => {
    const[name , setName] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const getSearchResult =() => {
        let currentSearch = props.videoGames.filter(el => el.name === name) 
        console.log(currentSearch)
        setSearchResults(currentSearch)
        //return currentSearch
    }
    
    // useEffect(()=> {
//     console.log(name)
// }, [name])
    
     
    return (
    <div>
        <SearchBar setName={setName} getSearchResult={getSearchResult}/>
        <DisplaySearchResults searchResults={searchResults}/>
    </div>
    );
}
 
export default SearchResults;