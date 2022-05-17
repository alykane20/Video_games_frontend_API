import {Chart} from "react-google-charts";
import './CustomQuestion.css';


const CustomQuestion = ({videoGames}) => {

    function generateChartData(){

        let filteredGames = videoGames.filter(game => game.year >= 2005 && game.year <= 2015);
        //Sorts rank in ascending order
        filteredGames = filteredGames.sort((a,b) => {
            return a.rank - b.rank
        })
        //Returns 10 element array
        let topTenRankedGames = [...filteredGames.slice(0,10)]

        console.log(topTenRankedGames)
     
        //Returns a map of name and rank for current game
        let gamesArrays = topTenRankedGames.map(currentGame =>{
         return [currentGame.name, parseFloat(currentGame.rank), "silver"]
        });
 
     const data = [
     ["Game Name", "Rank", { role: "style" } ],
         ...gamesArrays
         
   ]
     return data;
 }
 

    return ( 
        <div className="Cqchart">
        <Chart title="Custom Chart"
        chartType="Bar"
        width= "100%"
        height="400px"
        margin-left = "1rem"
        data={generateChartData()}
        // options={options}
        />
        </div>


     );
}
 
export default CustomQuestion;