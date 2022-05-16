import SearchResults from "./SearchResults";
import {Chart} from "react-google-charts";

const DisplaySearchResults = ({searchResults}) => {

   function gameChartData(){

    let platforms = searchResults.map(game => {
        return game.platform
     });

     let distinctPlatforms = [...new Set(platforms)]

     let platformArrays = distinctPlatforms.map(platform =>{

      let allGamesForPlatform = searchResults.filter(game => game.platform === platform);
        console.log(allGamesForPlatform)
      let globalSalesSum = allGamesForPlatform.map(game => {return(game.globalSales)})

      return [platform, globalSalesSum, "silver"]

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
        />
    );
    }
 
export default DisplaySearchResults;     