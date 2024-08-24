import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import CardPizza from "./CardPizza";
import Header from "./Header";
// import Cart from "./Cart";

const Home = () => {
  const [listPizza, setListPizza] = useState([]);

  useEffect(() => {
    callPizza();
  }, []);

  const callPizza = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setListPizza(data);
  };

  return (
    <>
      <Header />
      {/* <Cart /> */}
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
