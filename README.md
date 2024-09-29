# Pizzeria Mamma-mia

Proyecto Pizzeria Mamma Mia!

Este proyecto se agregaron las tecnologías de React, react-router, bootstrap

DEMO: https://fluffy-sfogliatella-d10135.netlify.app/

Hito 3

En esta actualización se agrega un carrito de compra, en esta version no se uso useEffect, ya esta vez la función era aprender a manejar arreglos y modificarlos.

Detalles de esta actualización: Cuando se vuelve a 0 no se elimina el producto de la lista, por ahora no tiene mucha importancia pero se tiene que modificar

Hito 4

En esta ocasión se agrega la información desde una API, la cual se llama desde el componente Home, lo agregue en ese lugar ya que desde ahi se llama al CardPizza, que es el componente que muestra las pizzas.
Adicionalmente se agrega useEffect.

Hito 5

En esta parte del código se pasa parte de los componentes a la carpeta pages, ya que en esta version se agrega react-router, se cambia un poco el estilo y en el cart (carrito) se modifica parte del mismo para ver lo que se agrega (se debe mejorar mas el diseño)

Hito 6

En esta parte se modifica el código para hacer uso de context, ahora se puede agregar desde el inicio y desde el carrito de compra, al agregar se ve el precio en la parte superior del navbar.
Punto a considerar: al eliminar desde el cart cuando el producto llega a 0 sigue en la lista, debo cambiar ese detalle, pero por ahora se mantendrá asi
