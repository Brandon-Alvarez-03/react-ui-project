import Nav from "./components/nav/Nav";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
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
