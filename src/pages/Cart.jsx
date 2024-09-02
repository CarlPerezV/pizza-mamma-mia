import { useState } from "react";
import { Container } from "react-bootstrap";

import { Pizzas } from "../Pizzas";

import CartCardPizza from "../components/CartCardPizza";

const Cart = () => {
  const [listPizza] = useState(Pizzas);
  const [cart, setCart] = useState([]);

  const handleAdd = (pizza) => {
    // Hasta la linea -- verificamos si existe producto, si no, se agrega uno mas (para no hacer un array tan gigante)
    const existingProduct = cart.find((item) => item.id === pizza.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        { id: pizza.id, name: pizza.name, price: pizza.price, quantity: 1 },
      ]);
    }
    console.log("add", cart);
  };

  const handleDel = (pizza) => {
    // Lo mismo que arriba pero eliminando
    const existingProduct = cart.find((item) => item.id === pizza.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id && item.quantity !== 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
    console.log("del", cart);
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Container className="d-flex justify-content-between w-100">
      <Container className="text-center ">
        <div className="row row-cols-3 justify-content-md-center gap-4 my-4">
          {listPizza.map((pizza) => (
            <CartCardPizza
              id={pizza.id}
              key={pizza.id}
              image={pizza.img}
              name={pizza.name}
              price={pizza.price}
              addPizza={() => handleAdd(pizza)}
              delPizza={() => handleDel(pizza)}
            />
          ))}
        </div>
      </Container>
      {/* Contenedor del carrito */}
      <Container
        className="d-flex justify-content-center"
        style={{ width: "35%" }}
      >
        <ul className="list-group w-100 pt-4">
          {cart.map((prod) => (
            <li
              key={prod.id}
              className="list-group-item d-flex justify-content-between align-items-start text-warning text-bg-dark text-capitalize"
            >
              {prod.name}
              <span className="badge text-bg-warning rounded-pill">
                {prod.quantity}
              </span>
            </li>
          ))}

          <li className="list-group-item d-flex align-items-center justify-content-center text-warning text-bg-dark">
            Total: ${new Intl.NumberFormat().format(totalPrice)}
          </li>
        </ul>
      </Container>
    </Container>
  );
};

export default Cart;
