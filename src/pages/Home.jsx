import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

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
    <div className="d-flex bg-warning row">
      <Header />
      <Container className="d-flex flex-wrap justify-content-center gap-4 my-5 px-5">
        {listPizza.map(({ id, name, img, price, ingredients }) => (
          <CardPizza
            key={id}
            image={img}
            name={name}
            price={price}
            ingredients={ingredients}
          />
        ))}
      </Container>
    </div>
  );
};

export default Home;
