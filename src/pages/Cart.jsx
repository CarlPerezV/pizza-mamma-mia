import { useContext } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import CartPizza from "../components/CartPizza";

import { PizzaContext } from "../context/PizzaContext";

const Cart = () => {
  const { cart, totalPrice, backTo, user, buyPizza } = useContext(PizzaContext);

  return (
    <Container className="d-flex justify-content-between w-100">
      {totalPrice == 0 ? (
        <Alert
          className="w-100 m-5 d-flex flex-column text-center"
          key="warning"
          variant="warning"
        >
          <div>No hay pizzas agregadas!</div>
          <Button
            variant="success"
            className="w-25 m-auto mt-3"
            onClick={backTo}
          >
            Inicio
          </Button>
        </Alert>
      ) : (
        <Container>
          {cart.map((pizza) => (
            <CartPizza
              key={pizza.id}
              id={pizza.id}
              img={pizza.img}
              name={pizza.name}
              price={pizza.price}
            />
          ))}
        </Container>
      )}
      {/* Contenedor del carrito */}
      <Container
        className="d-flex justify-content-center"
        style={{ width: "35%" }}
      >
        <ul className="list-group w-100 pt-4">
          {totalPrice == 0 ? (
            <li className="list-group-item d-flex justify-content-center text-center text-warning text-bg-dark text-capitalize">
              Sin productos
            </li>
          ) : (
            cart.map((prod) => (
              <li
                key={prod.id}
                className="list-group-item d-flex justify-content-between align-items-start text-warning text-bg-dark text-capitalize"
              >
                {prod.name}
                <span className="badge text-bg-warning rounded-pill">
                  {prod.quantity}
                </span>
              </li>
            ))
          )}

          <li className="list-group-item d-flex align-items-center justify-content-center text-warning text-bg-dark">
            Total: ${new Intl.NumberFormat().format(totalPrice)}
          </li>
          <li className="list-group-item d-flex align-items-center justify-content-center text-warning text-bg-dark">
            <Button
              className={user ? "enabled" : "disabled "}
              variant="success"
              onClick={buyPizza}
            >
              Pagar
            </Button>
          </li>
        </ul>
      </Container>
    </Container>
  );
};

export default Cart;
