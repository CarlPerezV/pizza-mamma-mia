import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const NavbarContainer = () => {
  const [token, setToken] = useState(false);
  const [total, setTotal] = useState(25000);

  // const handleUser = () => {
  //   token ? setToken(false) : setToken(true);
  // };

  return (
    <Navbar className="justify-content-between px-3" bg="dark">
      <div>
        <a className="navbar-brand text-white fw-bold" href="/">
          <img
            className="d-inline-block mx-1 "
            src="public/pizza.png"
            height="22"
            width="28"
            alt="Logo"
          />
          Pizzeria Mamma Mia!
        </a>
        <Button to="/" as={Link} className="mx-2 " variant="outline-danger">
          🍕 Home
        </Button>
        {!token ? (
          <>
            <Button
              to="/login"
              as={Link}
              className="mx-2"
              variant="outline-danger"
            >
              🔐 Login
            </Button>
            <Button
              to="/register"
              as={Link}
              className="mx-2"
              variant="outline-danger"
            >
              🔐 Register
            </Button>
          </>
        ) : (
          <>
            <Button className="mx-2" variant="outline-danger">
              🔓 Profile
            </Button>
            <Button className="mx-2" variant="outline-danger">
              🔓 Logout
            </Button>
          </>
        )}
        <Button
          to="/profile"
          as={Link}
          className="mx-2"
          variant="outline-danger"
        >
          🔓 Profile
        </Button>
      </div>

      <Button
        to="/cart"
        as={Link}
        className="text-white"
        variant="outline-warning"
      >
        🛒 Total: ${new Intl.NumberFormat().format(total)}
      </Button>
    </Navbar>
  );
};

export default NavbarContainer;
