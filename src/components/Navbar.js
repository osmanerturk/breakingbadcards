import React from "react";
import { Routes, Route } from "react-router-dom";
import Quotes from "../Routes/Quotes";
import Characters from "../Routes/Characters";
import CharacterDetails from "../Routes/CharacterDetails";
function Navbar() {
  return (
    <nav className="bg-gray-400 h-6">
      <div>
        <Routes>
          <Route exact path="/" element={<Characters  />} />
          <Route path="/details/:char_id" element={<CharacterDetails />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </nav>
  );
}

export default Navbar;
