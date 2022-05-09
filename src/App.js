import "./App.css";
import { Pages } from "./pages/Pages";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Pages />
      </div>
    </HashRouter>
  );
}

export default App;
