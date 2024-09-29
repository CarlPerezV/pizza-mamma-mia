import { useContext } from "react";
import { Alert, Container } from "react-bootstrap";
import CartPizza from "../components/CartPizza";

import { PizzaContext } from "../context/PizzaContext";

const Cart = () => {
  const { cart, totalPrice } = useContext(PizzaContext);

  return (
    <Container className="d-flex justify-content-between w-100">
      {totalPrice == 0 ? (
        <Alert className="w-100 m-5" key="warning" variant="warning">
          No hay pizzas agregadas!
        </Alert>
      ) : (
        <Container>
          {cart.map((pizza) => (
            <CartPizza
              key={pizza.id}
              id={pizza.id}
              image={pizza.image}
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
            <li className="list-group-item d-flex justify-content-between align-items-start text-warning text-bg-dark text-capitalize">
              Agrega productos
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
        </ul>
      </Container>
    </Container>
  );
};

export default Cart;
