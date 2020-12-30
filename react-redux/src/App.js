import './App.css';
import routes from "./routes/config"
import RouteView from "./routes"
function App() {
  return (
    <div className="App">
     <RouteView routes={routes}></RouteView>
    </div>
  );
}

export default App;
