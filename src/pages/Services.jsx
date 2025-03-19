import React from "react";
import "../pages/Services.css";

function Services() {
  return (
    <div className="services-container">
      <header className="header">
        <h1 className="title">Our Services</h1>
        <p className="subtitle">Comprehensive Real Estate Solutions</p>
      </header>

      <main className="main-content">
        {/* Property Listings */}
        <section className="service">
          <h2>🏡 Property Listings</h2>
          <p>
            Discover a wide range of properties for sale and rent, carefully
            curated to match your needs and preferences.
          </p>
        </section>

        {/* Advanced Search */}
        <section className="service">
          <h2>🔍 Advanced Search</h2>
          <p>
            Use our powerful search filters to find properties based on location,
            price range, property type, and more.
          </p>
        </section>

        {/* Market Insights */}
        <section className="service">
          <h2>📊 Market Insights</h2>
          <p>
            Stay informed with real estate trends, market reports, and expert
            analysis to make the best investment decisions.
          </p>
        </section>

        {/* Verified Agents */}
        <section className="service">
          <h2>🤝 Verified Agents</h2>
          <p>
            Connect with our trusted real estate professionals who can guide you
            through buying, selling, and renting properties.
          </p>
        </section>

        {/* Property Management */}
        <section className="service">
          <h2>🏢 Property Management</h2>
          <p>
            Let us handle property maintenance, tenant management, and rental
            agreements for a hassle-free experience.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Real Estate Listings. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Services;
