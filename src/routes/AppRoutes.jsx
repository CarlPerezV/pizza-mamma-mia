import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { PizzaContext } from "../context/PizzaContext";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Pizza from "../pages/Pizza";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  const { user } = useContext(PizzaContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
