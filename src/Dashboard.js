import React from "react";
import Nav from "./components/nav/Nav";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import useAuth from "./useAuth";

function Dashboard({code}) {
  const access_token = useAuth(code);
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <Main />
      <Footer />
      {/* {code} */}
    </div>
  );
}

export default Dashboard;
