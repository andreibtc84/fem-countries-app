import "./App.css";
import { Pages } from "./pages/Pages";
import { FilterRegion } from "./components/FilterRegion";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Countries App</h1>
        <FilterRegion />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
