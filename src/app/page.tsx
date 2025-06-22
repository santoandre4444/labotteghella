'use client';
import React, { useState } from 'react';
import './globals.css'; // Assicurati che il CSS sia lì

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  icon: string;
};

const products: Product[] = [
  { id: 1, name: 'Prosciutto di Parma DOP', description: 'Prosciutto stagionato 18 mesi, dolce e delicato', price: '€32.50/kg', category: 'salumi', icon: '🥓' },
  { id: 2, name: 'Salame Felino IGP', description: 'Salame tradizionale di Parma, sapore intenso', price: '€28.00/kg', category: 'salumi', icon: '🥓' },
  { id: 3, name: 'Parmigiano Reggiano 24 mesi', description: 'Formaggio stagionato, sapore ricco e corposo', price: '€42.00/kg', category: 'formaggi', icon: '🧀' },
  { id: 4, name: 'Gorgonzola DOP', description: 'Formaggio cremoso dal sapore piccante', price: '€18.50/kg', category: 'formaggi', icon: '🧀' },
  { id: 5, name: 'Tartufo Nero Pregiato', description: 'Tartufo nero fresco di stagione', price: '€85.00/100g', category: 'tartufi', icon: '🍄' },
  { id: 6, name: 'Crema di Tartufo', description: 'Crema spalmabile al tartufo bianco', price: '€12.50/vasetto', category: 'tartufi', icon: '🍄' },
  { id: 7, name: 'Olio al Tartufo', description: 'Olio extravergine aromatizzato al tartufo', price: '€15.00/bottiglia', category: 'conserve', icon: '🫒' },
  { id: 8, name: 'Miele Millefiori', description: 'Miele artigianale di produzione locale', price: '€8.50/vasetto', category: 'conserve', icon: '🍯' },
];

export default function HomePage() {
  const [category, setCategory] = useState<string>('tutti');

  const filteredProducts = category === 'tutti'
    ? products
    : products.filter(p => p.category === category);

 {/* return (
    <main>
       Header 
      <header className="header">
        <div className="nav-container">
          <div className="logo">La Botteghella</div>
          <nav>
            <ul className="nav-menu">
              <li><a href="#" onClick={() => setCategory('tutti')}>Home</a></li>
              <li><a href="#" onClick={() => setCategory('shop')}>Negozio</a></li>
              <li><a href="#contatti">Contatti</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero 
      <section className="hero">
        <div className="hero-content">
          <h1>La Botteghella</h1>
          <p>Alimentari e Tartufo di Qualità<br />Tradizione e Sapori Autentici dal 2017</p>
          <a href="#" className="cta-button" onClick={() => setCategory('shop')}>Scopri i Nostri Prodotti</a>
        </div>
      </section>

      {/* Features 
      <section className="features">
        <div className="container">
          <h2 className="section-title">Perché Scegliere La Botteghella</h2>
          <p className="section-subtitle">La nostra passione per la qualità e la tradizione gastronomica italiana</p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🥓</div>
              <h3>Salumi Artigianali</h3>
              <p>Selezione di salumi tradizionali preparati con metodi artigianali e ingredienti di prima qualità</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍄</div>
              <h3>Tartufi Pregiati</h3>
              <p>Tartufi freschi e prodotti a base di tartufo, per esperienze gastronomiche uniche</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧀</div>
              <h3>Formaggi Stagionati</h3>
              <p>Ampia selezione di formaggi italiani stagionati, dalle tradizioni casearie più antiche</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop 
      <section className="shop active">
        <div className="container">
          <h2 className="section-title">I Nostri Prodotti</h2>
          <p className="section-subtitle">Scopri la nostra selezione di eccellenze gastronomiche</p>

          <div className="categories">
            {['tutti', 'salumi', 'formaggi', 'tartufi', 'conserve'].map(cat => (
              <button
                key={cat}
                className={`category-btn ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map(prod => (
              <div key={prod.id} className="product-card">
                <div className="product-image">{prod.icon}</div>
                <div className="product-info">
                  <h3 className="product-name">{prod.name}</h3>
                  <p className="product-description">{prod.description}</p>
                  <div className="product-price">{prod.price}</div>
                  <button className="add-to-cart" onClick={() => alert('Aggiunto!')}>
                    Aggiungi al carrello
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer 
      <footer className="footer" id="contatti">
        <div className="container">
          <h3>La Botteghella</h3>
          <p>Alimentari e Tartufo</p>
          <p> Via Gabriele Fusco 4, Caserta | +39 123 456 7890 | ✉️ info@labotteghella.it</p>
          <p style={{ marginTop: '1rem', opacity: 0.7 }}>© 2024 La Botteghella. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </main>
  );
} */}

return (
  <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>🚧 Sito in fase di creazione 🚧</h1>
  </main>
);
}