import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { Button, Card, Container, ListGroup } from "react-bootstrap";

const Pizza = () => {
  const { id } = useParams();
  const { listPizza, addToCart, delToCart, backTo } = useContext(PizzaContext);

  const pizza = listPizza.find((pizza) => pizza.id === id);

  return (
    <Container className="m-auto d-flex justify-content-center">
      <Card
        className="text-bg-dark border-danger text-warning overflow-hidden"
        style={{ width: "20rem" }}
      >
        <Card.Img variant="card-img-bottom" src={pizza.img}></Card.Img>
        <Card.Body>
          <Card.Title className="text-center text-success  text-capitalize">
            Pizza {pizza.name}
          </Card.Title>
        </Card.Body>
        <ListGroup className="text-center list-group-flush py-2">
          <small>🍕 Ingredientes:</small>
          <small className="fw-semibold">
            {pizza.ingredients.map((ingredient, i) => (
              <small key={i}> {ingredient}, </small>
            ))}
          </small>
        </ListGroup>
        <Card.Body className="text-center">
          <Card.Title>
            Precio: ${new Intl.NumberFormat().format(pizza.price)}
          </Card.Title>
          <Card.Body className="d-flex justify-content-between px-2">
            <Button
              id={pizza.idPizza}
              className="btn-sm"
              variant="outline-success"
              onClick={backTo}
            >
              Volver ↩
            </Button>
            <Button
              id={pizza.idPizza}
              className="btn-sm"
              variant="outline-danger"
              onClick={() => delToCart(pizza)}
            >
              Quitar ✖
            </Button>
            <Button
              id={pizza.idPizza}
              className="btn-sm"
              variant="outline-warning"
              onClick={() => addToCart(pizza)}
            >
              Añadir 🛒
            </Button>
          </Card.Body>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Pizza;
