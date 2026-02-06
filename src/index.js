import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

console.log(pizzaData);

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header Component

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co</h1>
    </header>
  );
}

// Menu Component

function Menu() {
  const pizzas = pizzaData;
  const numpizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numpizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza PizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on menu. Please come back later :)</p>
      )}
    </main>
  );
}

// Pizza Component

function Pizza({ PizzaObject }) {
  return (
    <li className="pizza">
      <img src={PizzaObject.photoName} alt={PizzaObject.name} />
      <div>
        <h3>{PizzaObject.name}</h3>
        <p>{PizzaObject.ingredients}</p>
        <span>{PizzaObject.price}</span>
      </div>
    </li>
  );
}

// Footer Component

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <Openhour closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>
        )}
      </footer>
    </>
  );
}

function Openhour({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open {openHour}:00 to {closeHour}:00. Come visit us order online.
      </p>
      <button className="btn">Vist</button>
    </div>
  );
}

// Rendring Root

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
