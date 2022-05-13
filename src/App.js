import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';

import SearchBar from './Components/SearchBar/SearchBar';
import DisplayInvestmentChart from './Components/DisplayInvestmentChart/DisplayInvestmentChart';

function App() {

const [videoGames, setVideoGames] = useState([]);

useEffect(() => {
  getVideoGames();
}, []);


async function getVideoGames(){
  try{
    const response = await axios.get('https://localhost:7260/api/games/getallgames')
    setVideoGames(response.data);
  } catch(ex){
    console.log(`ERROR in getVideoGames EXCEPTION: ${ex}`)
  }
}

  return (
    <div >
      Video games!
      <SearchBar/>
      <DisplayInvestmentChart videoGames={videoGames}/>
    </div>
  );
}

export default App;
