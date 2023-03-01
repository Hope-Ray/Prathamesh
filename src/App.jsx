import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "../src/Pages/HomePage";
import GamePage from "./Pages/GamePage";

import RulesPage from "./Pages/RulesPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

// window.addEventListener(
//   "contextmenu",
//   function (e) {
//     e.preventDefault();
//   },
//   false
// );
function App() {
  return (
    <GoogleOAuthProvider clientId="773722654348-d2sflnic4msmbrv6m5o9qne3kc2v77k0.apps.googleusercontent.com">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/rules" element={<RulesPage />} />
          <Route path="/play" element={<GamePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
