import React from "react";
import "../pages/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Welcome to Real Estate Listings</h1>
        <p className="subtitle">Find, explore, and list properties with ease.</p>
        <nav>
          <ul className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <h2>Find Your Dream Home</h2>
          <p>Browse the best properties at the best prices, tailored for you.</p>
          <input type="text" className="search-bar" placeholder="Search properties..." />
          <button className="btn btn-primary">Search</button>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="feature-box">
            <h3>🏡 Buy a Home</h3>
            <p>Explore top listings in your preferred location.</p>
          </div>
          <div className="feature-box">
            <h3>📍 Rent a Property</h3>
            <p>Find budget-friendly rental options with verified listings.</p>
          </div>
          <div className="feature-box">
            <h3>📝 List Your Property</h3>
            <p>Sell or rent your property with just a few clicks.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial">
            <p>“I found my perfect home within days! The search process was super easy.”</p>
            <strong>- Sarah M.</strong>
          </div>
          <div className="testimonial">
            <p>“Listing my apartment for rent was seamless, and I found a tenant quickly.”</p>
            <strong>- John D.</strong>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Real Estate Listings. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
