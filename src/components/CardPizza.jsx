import { Button, Card, ListGroup } from "react-bootstrap";

const CardPizza = ({
  idPizza,
  image,
  name,
  price,
  ingredients,
  addPizza,
  delPizza,
}) => {
  return (
    <Card style={{ width: "17rem" }}>
      <Card.Img variant="top" src={image}></Card.Img>
      <Card.Body>
        <Card.Title className="text-center">Pizza {name}</Card.Title>
      </Card.Body>
      <ListGroup className="text-center list-group-flush py-3">
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
        <Card.Body className="d-flex  btn-sm justify-content-between">
          <Button
            id={idPizza}
            className="btn-sm"
            variant="outline-secondary"
            onClick={delPizza}
          >
            Quitar ✖
          </Button>
          <Button
            id={idPizza}
            className="btn-sm"
            variant="dark"
            onClick={addPizza}
          >
            Añadir 🛒
          </Button>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
