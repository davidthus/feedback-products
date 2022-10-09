import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Add, Edit, Feedback, Home, Roadmap } from "./pages";

export interface user {
  image: string;
  name: string;
  username: string;
}

export interface reply {
  content: string;
  replyingTo: string;
  user: user;
}

export interface comment {
  id: string | number;
  content: string;
  user: user;
  replies: reply[];
}

export interface request {
  id: string | number;
  title: string;
  category: string;
  upvotes: number;
  active: boolean;
  status: string;
  description: string;
  comments: comment[];
}

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
