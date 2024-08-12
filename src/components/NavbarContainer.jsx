import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const NavbarContainer = () => {
  const [token, setToken] = useState(false);
  const [total, setTotal] = useState(25000);

  const handleUser = () => {
    token ? setToken(false) : setToken(true);
  };

  return (
    <Navbar className="px-5 p-2 gap-2 justify-content-between" bg="dark">
      <div>
        <a className="navbar-brand text-white fw-bold" href="#">
          Pizzeria Mamma Mia!
        </a>
        <Button className="mx-2" variant="outline-light">
          🍕 Home
        </Button>
        {!token ? (
          <>
            <Button
              className="mx-2"
              variant="outline-light"
              onClick={handleUser}
            >
              🔐 Login
            </Button>
            <Button className="mx-2" variant="outline-light">
              🔐 Register
            </Button>
          </>
        ) : (
          <>
            <Button className="mx-2" variant="outline-light">
              🔓 Profile
            </Button>
            <Button
              className="mx-2"
              variant="outline-light"
              onClick={handleUser}
            >
              🔓 Logout
            </Button>
          </>
        )}
      </div>

      <Button className="text-white" variant="outline-info">
        🛒 Total: ${new Intl.NumberFormat().format(total)}
      </Button>
    </Navbar>
  );
};

export default NavbarContainer;
