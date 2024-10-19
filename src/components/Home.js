import React from "react";
import Products from "./Products";
import About from "./About";
import Footer from "./Footer";
import "./Home.css";

function Home({ addToCart, addToFavorites }) {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to MyCompany</h1>
      </header>
      <section className="products-home">
        <h2>Our Products</h2>
        <Products addToCart={addToCart} addToFavorites={addToFavorites} limit={6} />
      </section>
      <About />
      <Footer />
    </div>
  );
}

export default Home;
