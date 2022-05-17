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
     
     return [platform, parseFloat(globalSalesSum), "silver"]

     });


    const data = [
        ["Console", "Global Sales", {role: "style"}],
        ...platformArrays
    ]
    return data
}
    
    return (  
        
        <div>
        <Chart className="DsrChart"
        chartType="Bar"
        width= "50%"
        height="200px"
        data={gameChartData()}
        options={options}
        
        />
        <table>
        <tr className="table-header">
                        <th>Name</th>
                        <th>Platform</th>
                        <th>Year</th>
                        <th>Publisher</th>
                        <th>Genre</th>
                    </tr>
                    {searchResults.map((game)=>(
                    <tr className="row" key={game.id}>
                        <td className="row">{game.name}</td>
                        <td className="row">{game.platform}</td>
                        <td className="row">{game.year}</td>
                        <td className="row">{game.publisher}</td>
                        <td className="row">{game.genre}</td>
                    </tr>))}
                 </table>
        </div>
            );
    }
 
export default DisplaySearchResults;     