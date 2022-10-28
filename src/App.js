import Nav from "./components/nav/Nav";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";

import "./App.css";

function App() {
  // useEffect(() => {
  //   const handleRouteChangeStart = (url) => {
  //     console.log(`handleRouteChangeStart: ${url}`);
  //   };
  // });

  return (
    <div className="App">
      {/* <header className="App-header">Hello World</header> */}
      <Nav />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
