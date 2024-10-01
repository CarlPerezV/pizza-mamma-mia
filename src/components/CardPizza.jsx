import { useContext } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { PizzaContext } from "../context/PizzaContext";

const CardPizza = (pizza) => {
  const { addToCart, delToCart, details } = useContext(PizzaContext);

  const { idPizza, img, name, price, ingredients } = pizza;

  return (
    <Card
      className="text-bg-dark border-danger text-warning overflow-hidden"
      style={{ width: "20rem" }}
    >
      <Card.Img variant="card-img-bottom" src={img}></Card.Img>
      <Card.Body>
        <Card.Title className="text-center text-success  text-capitalize">
          Pizza {name}
        </Card.Title>
      </Card.Body>
      <ListGroup className="text-center list-group-flush py-2">
        <small>🍕 Ingredientes:</small>
        <small className="fw-semibold">
          {ingredients.map((ingredient, i) => (
            <small key={i}> {ingredient}, </small>
          ))}
        </small>
      </ListGroup>
      <Card.Body className="text-center">
        <Card.Title>
          Precio: ${new Intl.NumberFormat().format(price)}
        </Card.Title>
        <Card.Body className="d-flex justify-content-between px-2">
          <Button
            id={idPizza}
            className="btn-sm"
            variant="outline-info"
            onClick={() => details(pizza)}
          >
            Detalles 🔍
          </Button>
          <Button
            id={idPizza}
            className="btn-sm"
            variant="outline-danger"
            onClick={() => delToCart(pizza)}
          >
            Quitar ✖
          </Button>
          <Button
            id={idPizza}
            className="btn-sm"
            variant="outline-warning"
            onClick={() => addToCart(pizza)}
          >
            Añadir 🛒
          </Button>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
