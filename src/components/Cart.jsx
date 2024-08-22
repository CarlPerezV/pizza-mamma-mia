import { useState } from "react";
import { Container } from "react-bootstrap";

import { Pizzas } from "../Pizzas";

import CardPizza from "./CardPizza";

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
    <Container>
      <Container className="text-center ">
        <div className="row row-cols-3 justify-content-md-center gap-4 my-4">
          {listPizza.map((pizza) => (
            <CardPizza
              id={pizza.id}
              key={pizza.id}
              image={pizza.img}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              addPizza={() => handleAdd(pizza)}
              delPizza={() => handleDel(pizza)}
            />
          ))}
        </div>
      </Container>
      <Container className="justify-content-center d-flex ">
        <ul className="list-group pt-4 m-2 d-flex  ">
          {cart.map((prod) => (
            <li
              key={prod.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {prod.name}
              <span className="badge text-bg-secondary rounded-pill m-2">
                {prod.quantity}
              </span>
            </li>
          ))}

          <li className="list-group-item d-flex justify-content-between align-items-center">
            Total: ${new Intl.NumberFormat().format(totalPrice)}
            <span className="badge">{totalPrice}</span>
          </li>
        </ul>
      </Container>
    </Container>
  );
};

export default Cart;
