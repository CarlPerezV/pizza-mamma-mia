import "./App.css";

import { Route, Routes } from "react-router-dom";

import NavbarContainer from "./components/NavbarContainer";
import Footer from "./components/Footer";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <body className="bg-warning">
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </body>
  );
}

export default App;
