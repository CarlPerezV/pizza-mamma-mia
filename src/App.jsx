import "./App.css";

import NavbarContainer from "./components/NavbarContainer";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <body>
        <NavbarContainer />
        {/* <Home /> */}
        {/* <Register /> */}
        <Login />
        <Footer />
      </body>
    </>
  );
}

export default App;
