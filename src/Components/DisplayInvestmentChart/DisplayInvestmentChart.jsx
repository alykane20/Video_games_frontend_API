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
        

        let allGamesForPlatform = filteredGames.filter(game => game.platform === platform);
        console.log("All games for platform: ", allGamesForPlatform)

        let globalSalesSum = allGamesForPlatform.map(game => {return(game.globalSales)}).reduce((currIndex, prevIndex) => (currIndex + prevIndex))

        return [platform, globalSalesSum, "silver"]

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