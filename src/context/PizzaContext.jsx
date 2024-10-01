import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [listPizza, setListPizza] = useState([]);

  const [token, setToken] = useState(true);

  const goTo = useNavigate();

  useEffect(() => {
    callPizza();
  }, []);

  const callPizza = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setListPizza(data);
  };

  const addToCart = (pizza) => {
    // Hasta la linea -- verificamos si existe producto, si no, se agrega uno mas (para no hacer un array tan gigante)
    const existingProduct = cart.find((item) => item.id === pizza.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
          img: pizza.img,
          quantity: 1,
        },
      ]);
    }
  };

  // remueve del carrito
  const delToCart = (pizza) => {
    const removeToCart = cart
      .map((item) => {
        if (item.id === pizza.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null;
        }
        return item;
      })
      .filter((item) => item !== null);

    setCart(removeToCart);
  };

  // calcula el precio total
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // envía a inicio
  const backTo = () => {
    goTo(`/`);
  };

  // envía a detalle de la pizza
  const details = (pizza) => {
    goTo(`/pizza/${pizza.id}`);
  };

  //cambia el estado del login
  const logInLogOut = () => {
    console.log(token);
    setToken((prevState) => !prevState);
  };

  const PizzasProviderValues = {
    cart,
    setCart,
    listPizza,
    setListPizza,
    addToCart,
    delToCart,
    totalPrice,
    details,
    backTo,
    token,
    logInLogOut,
  };

  return (
    <PizzaContext.Provider value={PizzasProviderValues}>
      {children}
    </PizzaContext.Provider>
  );
};
