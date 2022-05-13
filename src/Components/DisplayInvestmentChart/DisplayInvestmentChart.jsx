import { useState } from "react";
import {Chart} from "react-google-charts";

const DisplayInvestmentChart = ({videoGames}) => {

    function generateChartData(){

       let filteredGames = videoGames.filter(game => game.year >= 2013);
       console.log("filter", filteredGames)

       let platforms = filteredGames.map(game => {
          return game.platform
       });


       let distinctPlatforms = [...new Set(platforms)]
       console.log("distinct", distinctPlatforms)

       let platformArrays = distinctPlatforms.map(platform =>{
           return [platform, 10, "silver"]
       });

    const data = [
    ["Platform", "Sales", { role: "style" } ],
        ["PS4", 10, "Red"],
        ["GB", 30, "Purple"]
        
  ]
    return data;
}
    return (  
       
        <Chart
        chartType="Bar"
        width= "100%"
        height="400px"
        data={generateChartData}
        //options={options}
        />
    );
}
 
export default DisplayInvestmentChart;