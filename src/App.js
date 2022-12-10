import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Thankyou from "./Components/Thankyou";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </div>
  );
}

export default App;
