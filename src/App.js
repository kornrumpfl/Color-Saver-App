import MainCard from "./components/mainCard/MainCard";
import "./App.css";
import colorObjects from "./components/ColorCard/colorObjects";
import Card from "./components/card/Card";

function App() {
 
   return (
    <div>
    <h1>Color Saver App</h1>
    <div className="App">
      <MainCard />
    </div>  
    <div className="App__Cards">{colorObjects.map((colorObject)=>{
        return(   
            <div>
                <Card colorCode={colorObject.colorCode}/>
            </div> 
            )}
    )}</div>
    </div>
  )
}

export default App;
