import "./App.css";
import { Pages } from "./pages/Pages";
import { FilterRegion } from "./components/FilterRegion";

function App() {
  return (
    <div className="App">
      <h1>Countries App</h1>
      <FilterRegion />
      <Pages />
    </div>
  );
}

export default App;
