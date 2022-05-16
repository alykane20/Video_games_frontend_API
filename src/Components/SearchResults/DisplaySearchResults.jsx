import SearchResults from "./SearchResults";
import {Chart} from "react-google-charts";

const DisplaySearchResults = ({searchResults}) => {

   function gameChartData(){
    debugger
    let platforms = searchResults.map(game => {
        return game.platform
     });

     let distinctPlatforms = [...new Set(platforms)]

     let platformArrays = distinctPlatforms.map(platform =>{

      let allGamesForPlatform = searchResults.filter(game => game.platform === platform);
     
      let globalSalesSum = allGamesForPlatform.map(game => {return(game.globalSales)})

      return [platform, globalSalesSum, "silver"]

     });

    const data = [
        ["Console", "Copies Sold", {role: "style"}],
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
        />
    );
    }
 
export default DisplaySearchResults;     