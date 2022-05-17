import {Chart} from "react-google-charts";
import './DisplayInvestmentChart.css';

const DisplayInvestmentChart = ({videoGames}) => {

    function generateChartData(){

       let filteredGames = videoGames.filter(game => game.year >= 2013);
      

       let platforms = filteredGames.map(game => {
          return game.platform
       });


       let distinctPlatforms = [...new Set(platforms)]
      

       let platformArrays = distinctPlatforms.map(platform =>{
        

        let allGamesForPlatform = filteredGames.filter(game => game.platform === platform);
       

        let globalSalesSum = allGamesForPlatform.map(game => {return(game.globalSales)}).reduce((currIndex, prevIndex) => (currIndex + prevIndex))

        return [platform, globalSalesSum, "silver"]

       });

    const data = [
    ["Platform", "Sales in Millions", { role: "style" } ],
        ...platformArrays
        
  ]
    return data;
}

    return (  
       <div className="DIChart">
           <h3>Total Global Sales Per Platform</h3>
        <Chart 
        chartType="Bar"
        width= "100%"
        height="400px"
        data={generateChartData()}
        //options={options}
        /></div>
    );
}
 
export default DisplayInvestmentChart;