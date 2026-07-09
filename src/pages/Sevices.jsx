import "./Sevices.css";
import { useState } from "react";
import Product from "../assets/Kankariya_Football.jpg";

export function Services() {
  return (
    <>
      <Cart />
      <section className="services">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We provide modern web development solutions using the latest
            technologies to help businesses grow and succeed.
          </p>
        </div>
        <div className="service-container">
          <div className="service-card">
            <div className="icon">💻</div>
            <h3>Web Development</h3>
            <p>
              Build responsive and modern websites using HTML, CSS, JavaScript,
              React, and Bootstrap.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">☕</div>
            <h3>Spring Boot Development</h3>
            <p>
              Develop secure, scalable REST APIs and enterprise applications
              using Java and Spring Boot.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🗄️</div>
            <h3>Database Design</h3>
            <p>
              Design and manage relational and NoSQL databases using MySQL and
              MongoDB.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">☁️</div>
            <h3>Cloud Deployment</h3>
            <p>
              Deploy applications on AWS using Docker and modern DevOps
              practices.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">📱</div>
            <h3>Responsive Design</h3>
            <p>
              Create mobile-friendly websites that look perfect on every device.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🛠️</div>
            <h3>Maintenance & Support</h3>
            <p>
              Keep your applications updated, secure, and running smoothly with
              ongoing support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Cart() {
  const [quantity, setQuantity] = useState(10);
  const [cart, setCart] = useState(0);
  return (
    <>
      <div
        className="cart"
        style={{ width: "50%", backgroundColor: "#a48484" }}
      >
        <h1>Cart = {cart}</h1>
        <img src={Product} alt="Cart" height="150px" />
        <h1>Quantity : {quantity}</h1>
        <button
          onClick={() => {
            setQuantity(quantity - 1);
            setCart(cart + 1);
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}
