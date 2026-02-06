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
      {numpizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza PizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

// Pizza Component

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.PizzaObject.photoName} alt={props.PizzaObject.name} />
      <div>
        <h3>{props.PizzaObject.name}</h3>
        <p>{props.PizzaObject.ingredients}</p>
        <span>{props.PizzaObject.price}</span>
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
        {isOpen && (
          <div className="order">
            <p>
              We're open until until {closeHour}:00. Come visit us order online.
            </p>
            <button className="btn">Vist</button>
          </div>
        )}
      </footer>
    </>
  );
}

// Rendring Root

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
