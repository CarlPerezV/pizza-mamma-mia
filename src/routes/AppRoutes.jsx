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
  const { token } = useContext(PizzaContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to={"<Login />"} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
