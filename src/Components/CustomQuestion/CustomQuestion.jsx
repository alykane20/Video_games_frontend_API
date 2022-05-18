import {Chart} from "react-google-charts";
import { useState } from 'react'
import './CustomQuestion.css';


const CustomQuestion = ({videoGames}) => {
    const [chart, setChart] = useState("PieChart")
    const displayChart = ["PieChart", "Bar", "ScatterChart", "LineChart"]
    const HandleButtonClick = (event) => {
        event.preventDefault()
        setChart(displayChart[Math.floor((Math.random()*4))])
        console.log(chart)
    }
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
         return [currentGame.name, parseFloat(currentGame.globalSales), "silver"]
        });
 
     const data = [
     ["Game Name", "Global Sales", { role: "style" } ],
         ...gamesArrays
         
   ]
     return data;
 }
 

    return ( 
        <div className="Cqchart">
        <h3>Top 10 Games from 2005-2015</h3>
        <Chart title="Custom Chart"
        chartType={chart}
        width= "100%"
        height="400px"
        margin-left = "1rem"
        data={generateChartData()}
        // options={options}
        />
        <button className="button" onClick={HandleButtonClick}>Toggle Chart</button>
        </div>


     );
}
 
export default CustomQuestion;