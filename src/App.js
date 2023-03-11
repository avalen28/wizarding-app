import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HouseSelected from "./pages/HouseSelected";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/house/:houseId" element={<HouseSelected />} />
      </Routes>
    </div>
  );
}

export default App;
