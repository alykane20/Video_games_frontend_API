import {Chart} from "react-google-charts";

const CustomQuestion = ({videoGames}) => {

    function generateChartData(){

        let filteredGames = videoGames.filter(game => game.year >= 2005 && game.year <= 2015);
        
        filteredGames.sort((a,b) => {
            return b.rank - a.rank
        })
        console.log(filteredGames)
        
       
        let gamesArrays = gamesByRank.map(name =>{
         
         let allGamesForPlatform = filteredGames.filter(game => game.name === name);
        
 
         let rankedByPlatform = allGamesForPlatform.map(game => {return(game.rank)})
 
         return [name, parseFloat(rankedByPlatform), "silver"]
 
        });
 
     const data = [
     ["Year", "Rank", { role: "style" } ],
         ...gamesArrays
         
   ]
     return data;
 }
 

    return ( 
        <Chart
        chartType="Bar"
        width= "100%"
        height="400px"
        data={generateChartData()}
        //options={options}
        />


     );
}
 
export default CustomQuestion;