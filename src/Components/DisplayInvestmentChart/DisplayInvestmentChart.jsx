import { useState } from "react";
import {Chart} from "react-google-charts";

const DisplayInvestmentChart = ({videoGames}) => {

    function generateChartData(){

       let filteredGames = videoGames.filter(game => game.year >= 2013);
       console.log("filter", filteredGames);

       let platforms = filteredGames.map(game => {
          return game.platform
       });


       let distinctPlatforms = [...new Set(platforms)]
       console.log("distinct", distinctPlatforms)

       let platformArrays = distinctPlatforms.map(platform =>{
        

        let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);
        console.log("All games for platform: ", allGamesForPlatform)
        //now we need to loop through allGamesForPlaform and sum each games global sales
        //Once we have the sum of all those games global sales
        // let sumOfGamesGlobalSales = allGamesForPlaform.map
        //for each game in current platform add global sales
        let total = 0;
        for(var games in allGamesForPlatform){
            total += games.globalSales;
            console.log("total: ", total)
        }

        return [platform, 10, "silver"]

       });

    const data = [
    ["Platform", "Sales", { role: "style" } ],
        ...platformArrays
        
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
 
export default DisplayInvestmentChart;