import Dashboard from "./Dashboard";
// import 'bootstrap/dist/bootstrap/css/bootstrap.min.css';
import Login from "./Login"
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const code = new URLSearchParams(window.location.search).get('code');

function App() {

  return (
    // <div className="App">
      code ? <Dashboard code={code} /> : <Login />
    // </div>

    // <Dashboard />
  );
}

export default App;
