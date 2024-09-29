import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [listPizza, setListPizza] = useState([]);

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

    console.log("add", cart);

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
          image: pizza.image,
          quantity: 1,
        },
      ]);
    }
  };

  const delToCart = (pizza) => {
    // Lo mismo que arriba pero eliminando
    const existingProduct = cart.find((item) => item.id === pizza.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id && item.quantity !== 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const PizzasProviderValues = {
    cart,
    setCart,
    listPizza,
    setListPizza,
    addToCart,
    delToCart,
    totalPrice,
  };

  return (
    <PizzaContext.Provider value={PizzasProviderValues}>
      {children}
    </PizzaContext.Provider>
  );
};
