import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import {Accounts} from "./pages/Accounts";
import {MoveMoney} from "./pages/MoveMoney";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accounts />} />
        <Route path="/move-money" element={<MoveMoney />} />
      </Routes>
    </Router>
  );
}
export default App;
