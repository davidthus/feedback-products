import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Add, Edit, Feedback, Home, Roadmap } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/:id" element={<Feedback />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
}

export default App;
