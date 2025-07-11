import { Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Books from "./pages/Books";
import Users from "./pages/Users";

import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>

      <Route path="/menu" element={<DashboardLayout></DashboardLayout>}>
        <Route path="books" element={<Books></Books>}></Route>
        <Route path="users" element={<Users></Users>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
