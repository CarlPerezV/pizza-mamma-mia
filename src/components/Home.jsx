import { Container } from "react-bootstrap";
import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
  const pizzas = {
    napolitana:
      "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    espanola:
      "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    pepperoni:
      "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
  };
  return (
    <>
      <Header />
      <Container className="d-flex  justify-content-center gap-3 p-5">
        <CardPizza
          image={pizzas.napolitana}
          name={"Napolitana"}
          price={5950}
          ingredients={"mozzarella, tomates, jamón orégano"}
        />
        <CardPizza
          image={pizzas.espanola}
          name={"Pizza Española"}
          price={6950}
          ingredients={"mozzarella, gorgonzola, parmesano, provologe"}
        />
        <CardPizza
          image={pizzas.pepperoni}
          name={"Pizza Pepperoni"}
          price={6950}
          ingredients={"mozzarella, pepperoni, orégano"}
        />
      </Container>
    </>
  );
};

export default Home;
