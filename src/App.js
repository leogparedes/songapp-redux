import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Library from "./components/Library/Library";
import Home from "./pages/Home";
import SongDetail from "./pages/SongDetail";

const App = () => {
  useEffect(() => {
    console.log("La app se ha cargado correctamente 🎵");
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:id" element={<SongDetail />} />
      </Routes>

      
      <Library />
    </div>
  );
};

export default App;



