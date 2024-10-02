import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [listPizza, setListPizza] = useState([]);
  const [user, setUser] = useState(null);

  const goTo = useNavigate();

  useEffect(() => {
    callPizza();

    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, []);

  const callPizza = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setListPizza(data);
  };

  const signIn = async (email, password) => {
    const resp = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await resp.json();
    alert(data?.error || "Authentication successful!");
    localStorage.setItem("token", data.token);

    goTo("/");
  };

  const register = async (email, password) => {
    const resp = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await resp.json();
    alert(data?.error || "Authentication successful!");
    localStorage.setItem("token", data.token);
  };

  // toma los datos del usuario
  const getUserInfo = async () => {
    const resp = await fetch("http://localhost:5000/api/auth/register", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const data = await resp.json();
    localStorage.setItem("token", data.token);
  };

  const buyPizza = async () => {
    const resp = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        cart: cart,
      }),
    });

    if (resp.status == 200) {
      alert("Compra exitosa!");
    } else {
      alert("Hubo un problema con la compra!!");
    }
    console.log(user.token);
  };

  const signOut = () => {
    setUser(null);
    goTo("/");
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
    user,
    getUserInfo,
    buyPizza,
    signIn,
    register,
    signOut,
  };

  return (
    <PizzaContext.Provider value={PizzasProviderValues}>
      {children}
    </PizzaContext.Provider>
  );
};
