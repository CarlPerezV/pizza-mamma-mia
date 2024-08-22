import { Container } from "react-bootstrap";
import CardPizza from "./CardPizza";
import Header from "./Header";
import { useState } from "react";
import { Pizzas } from "../Pizzas";
import Cart from "./Cart";

const Home = () => {
  const [listPizza, setListPizza] = useState(Pizzas);

  return (
    <>
      <Header />
      <Cart />
      <Container className="text-center">
        <div className="row gap-2 my-4">
          {listPizza.map(({ id, name, img, price, ingredients }) => (
            <CardPizza
              key={id}
              image={img}
              name={name}
              price={price}
              ingredients={ingredients}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
