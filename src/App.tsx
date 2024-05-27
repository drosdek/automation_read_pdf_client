import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import BasicAppBar from "./components/AppBar/BasicAppBar";

function App() {
  return (
    <BrowserRouter>
      <BasicAppBar />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
