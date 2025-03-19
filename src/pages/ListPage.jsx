import React from "react";
import "../pages/Style.css";

function ListPage() {
  const navigate = useNavigate();

  return (
    <div className="list-container">
      <header className="header">
        <h1 className="title">Property Listings</h1>
        <button onClick={() => navigate("/")} className="btn btn-home">
          Home
        </button>
      </header>

      <main className="main-content">
        {properties.length === 0 ? (
          <p className="no-properties">No properties listed yet. Add one!</p>
        ) : (
          <div className="property-grid">
            {properties.map((property, index) => (
              <div key={index} className="property-card">
                <h3>{property.title}</h3>
                <p>{property.description}</p>
                <p className="price">Price: ${property.price}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ListPage;
