import { Outlet } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
