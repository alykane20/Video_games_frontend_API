import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import DisplayInvestmentChart from './Components/DisplayInvestmentChart/DisplayInvestmentChart';
import SearchResults from './Components/SearchResults/SearchResults';

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
      <SearchResults videoGames={videoGames}/>
      <DisplayInvestmentChart videoGames={videoGames}/>
    </div>
  );
}

export default App;
