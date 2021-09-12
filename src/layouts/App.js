import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
