import { useContext } from "react";
import { Container } from "react-bootstrap";

import { PizzaContext } from "../context/PizzaContext";

import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

const Home = () => {
  const { listPizza } = useContext(PizzaContext);

  return (
    <div className="d-flex bg-warning row">
      <Header />
      <Container className="d-flex flex-wrap justify-content-center gap-4 my-5 px-5">
        {listPizza.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            img={pizza.img}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
          />
        ))}
      </Container>
    </div>
  );
};

export default Home;
