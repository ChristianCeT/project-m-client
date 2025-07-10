import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Menu } from "@mui/material";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
    </Routes>
  );
}

export default App;
