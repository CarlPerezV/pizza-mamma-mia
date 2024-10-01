import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { PizzaContext } from "../context/PizzaContext";

const CardPizza = (pizza) => {
  const { addToCart, delToCart } = useContext(PizzaContext);

  const { idPizza, img, name, price } = pizza;

  return (
    <Card
      className="text-bg-dark border-danger text-warning fs-6 m-2 overflow-hidden d-flex flex-row"
      style={{ height: "8rem", width: "30rem" }}
    >
      <Card.Img variant="card-img-bottom" src={img}></Card.Img>
      <Card.Body>
        <Card.Title className="text-center fs-6 text-capitalize ">
          Pizza {name}
        </Card.Title>
        <Card.Title className="fs-6">
          Precio: ${new Intl.NumberFormat().format(price)}
        </Card.Title>
        <Card.Body className="d-flex btn-group fs-6 px-2 justify-content-between">
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
