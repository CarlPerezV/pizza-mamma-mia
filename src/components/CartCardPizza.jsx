import { Button, Card } from "react-bootstrap";

const CardPizza = ({ idPizza, image, name, price, addPizza, delPizza }) => {
  return (
    <Card
      className="text-bg-dark border-danger text-warning overflow-hidden"
      style={{ width: "14rem" }}
    >
      <Card.Img variant="card-img-bottom" src={image}></Card.Img>
      <Card.Body>
        <Card.Title className="text-center text-capitalize ">
          Pizza {name}
        </Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Title>
          Precio: ${new Intl.NumberFormat().format(price)}
        </Card.Title>
        <Card.Body className="d-flex btn-group px-2 justify-content-between">
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
