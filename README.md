# Pizzeria Mamma-mia

Proyecto Pizzeria Mamma Mia!

Este proyecto se agregaron las tecnologias de React, react-router, bootstrap

DEMO: https://fluffy-sfogliatella-d10135.netlify.app/

Hito 3

En esta actualización se agrega un carrito de compra, en esta version no se uso useEffect, ya esta vez la función era aprender a manejar arreglos y modificarlos.

Detalles de esta actualización: Cuando se vuelve a 0 no se elimina el producto de la lista, por ahora no tiene mucha importancia pero se tiene que modificar

Hito 4

En esta ocasión se agrega la información desde una API, la cual se llama desde el componente Home, lo agregue en ese lugar ya que desde ahi se llama al CardPizza, que es el componente que muestra las pizzas.

Este es el código que lo llama(no es la gran cosa 😅)

    const callPizza = async () => {
        const url = "http://localhost:5000/api/pizzas";
        const response = await fetch(url);
        const data = await response.json();
        setListPizza(data);
    };
