import SearchBar from "../SearchBar/SearchBar";
import {useState,useEffect} from "react"
import axios from "axios";

const SearchResults = (props) => {
    const[name , setName] = useState("")

    useEffect(()=> {
        getSearchResult();
    console.log(name)
}, [name])
    
     function getSearchResult(){
        let currentSearch = props.videoGames.filter(el => el.name === name) 
        console.log(currentSearch)
        return currentSearch
    }
    return (
    <div>
        <SearchBar setName={setName}/>
    
        
    </div>
    );
}
 
export default SearchResults;