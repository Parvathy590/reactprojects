import React from 'react'

import "../pages/About.css";

function About() {
  return (
    <div className="about-container">
      <header className="header">
        <h1 className="title">About Us</h1>
        <p className="subtitle">Your Trusted Partner in Real Estate</p>
      </header>

      <main className="main-content">
        {/* Company Overview */}
        <section className="company-overview">
          <h2>Who We Are</h2>
          <p>
            Real Estate Listings is a premier platform dedicated to helping buyers,
            sellers, and renters navigate the property market with ease. With a
            vast network of verified listings and a user-friendly interface, we
            ensure seamless property transactions.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify real estate transactions by providing an
            intuitive platform where users can discover, buy, rent, and list
            properties effortlessly.
          </p>
        </section>

        {/* Services */}
        <section className="services">
          <h2>What We Offer</h2>
          <ul>
            <li>🏡 Property Listings – Buy, sell, and rent properties with ease.</li>
            <li>🔍 Advanced Search – Find properties based on your preferences.</li>
            <li>📊 Market Insights – Get data-driven insights into property trends.</li>
            <li>🤝 Verified Agents – Connect with experienced real estate professionals.</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="contact">
          <h2>Contact Us</h2>
          <p>
            Have questions? Get in touch with our team.
          </p>
          <ul>
            <li>📍 Address: 123 Main Street, Your City, Your Country</li>
            <li>📧 Email: support@realestatelistings.com</li>
            <li>📞 Phone: +123 456 7890</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Real Estate Listings. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
