import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Homepage from "./components/pages/frontend/Homepage";
import Movies from "./components/pages/backend/movies/Movies";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/admin/movies" element={<Movies/>}/>
      <Route index element={<Homepage />} />
    </Routes>
  </Router>
  )
}

export default App