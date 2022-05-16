import {Chart} from "react-google-charts";

const DisplaySearchResults = ({searchResults}) => {
    
    const options = {
        title: "Global Sales per Console",
        hAxis: { title: "Console"},
        vAxis: { title: "Global Sales"},
        legend: "none"
    }

   function gameChartData(){

    let platforms = searchResults.map(game => {
        return game.platform
     });

     let distinctPlatforms = [...new Set(platforms)]

     let platformArrays = distinctPlatforms.map(platform =>{

      let allGamesForPlatform = searchResults.filter(game => game.platform === platform);

      let globalSalesSum = allGamesForPlatform.map(game => {return(game.globalSales)})
      console.log(globalSalesSum)
      return [platform, parseFloat(globalSalesSum), "silver"]

     });


    const data = [
        ["Console", "Global Sales", {role: "style"}],
        ...platformArrays
    ]
    return data
}
    
    return (  
        
        
        <Chart
        chartType="Bar"
        width= "100%"
        height="400px"
        data={gameChartData()}
        options={options}
        
        />
    );
    }
 
export default DisplaySearchResults;     