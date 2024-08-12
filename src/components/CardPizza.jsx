import { Button, Card, ListGroup } from "react-bootstrap";

const CardPizza = ({ image, name, price, ingredients }) => {
  return (
    <Card style={{ width: "17rem" }}>
      <Card.Img variant="top" src={image}></Card.Img>
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
      </Card.Body>
      <ListGroup className="text-center list-group-flush p-3">
        <small>Ingredientes:</small>
        <small className="fw-semibold">🍕 {ingredients}</small>
      </ListGroup>
      <Card.Body className="text-center">
        <Card.Title>
          Precio: ${new Intl.NumberFormat().format(price)}
        </Card.Title>
        <Card.Body className="d-flex justify-content-between">
          <Button variant="outline-secondary" size="sm">
            Ver más 👀
          </Button>
          <Button variant="dark" size="sm">
            Añadir 🛒
          </Button>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
