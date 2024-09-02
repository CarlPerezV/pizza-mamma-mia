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
    <Card
      className="text-bg-dark border-danger overflow-hidden"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="card-img-bottom" src={image}></Card.Img>
      <Card.Body>
        <Card.Title className="text-center text-capitalize">
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
            variant="outline-danger"
            onClick={delPizza}
          >
            Quitar ✖
          </Button>
          <Button
            id={idPizza}
            className="btn-sm"
            variant="outline-warning"
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
