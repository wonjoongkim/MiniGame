import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FrontRoutes } from "./Routes";

import "./css/reset.css";
import "./css/default.css";
import "./css/login.css";
import "./css/content.css";
import "./css/main.css";
// import "./js/learning.js";

function App() {
  return (
    <Router>
      <div className="App">
        <FrontRoutes />
      </div>
    </Router>
  );
}

export default App;
