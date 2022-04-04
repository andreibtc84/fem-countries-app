import "./App.css";
import { Pages } from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
