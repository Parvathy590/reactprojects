import React, { useState } from "react";
import "../pages/Style.css";

const InputPage = ({ addProperty }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !price) {
      alert("Please fill in all fields!");
      return;
    }
    
    addProperty({ title, description, price });
    alert("Property added successfully!");
    navigate("/list");
  };

  return (
    <div className="input-container">
      <header className="header">
        <h1 className="title">Add New Property</h1>
        <button onClick={() => navigate("/")} className="btn btn-home">Home</button>
      </header>

      <main className="main-content">
        <form onSubmit={handleSubmit} className="property-form">
          <input 
            type="text" 
            placeholder="Property Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
          <textarea 
            placeholder="Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
          <input 
            type="number" 
            placeholder="Price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
          />
          <button type="submit" className="btn btn-primary">Add Property</button>
        </form>
      </main>
    </div>
  );
};

export default InputPage;
