'use client'

import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  placeholder: string;
}

const LaBotteghella: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const products: Product[] = [
    {
      id: 1,
      title: "Salumi",
      description: "La nostra forza dal 1980. Tutti i nostri salumi sono da noi prodotti con carni suine prevalentemente italiane e sono tutti senza coloranti, glutine, latte e i suoi derivati.",
      placeholder: "Salumi Placeholder"
    },
    {
      id: 2,
      title: "Formaggi",
      description: "La migliore selezione di formaggi provenienti esclusivamente dal nostro territorio e prodotti secondo le più antiche tradizioni.",
      placeholder: "Formaggi Placeholder"
    },
    {
      id: 3,
      title: "Legumi",
      description: "I legumi in vendita sullo shop sono tutti origine Norcia al 100% e sono prodotti dalla nostra azienda agricola di famiglia.",
      placeholder: "Legumi Placeholder"
    },
    {
      id: 4,
      title: "Pasta",
      description: "La pasta che vi proponiamo è prodotta solo con grano coltivato e macinato in Italia. È trafilata al bronzo e rispecchia tutta la migliore tradizione umbra.",
      placeholder: "Pasta Placeholder"
    },
    {
      id: 5,
      title: "Tartufi e Salse",
      description: "Da un'attenta selezione vi presentiamo tartufi e salse di qualità superiore.",
      placeholder: "Tartufi Placeholder"
    },
    {
      id: 6,
      title: "Dolci",
      description: "Biscotti tipici preparati con l'aggiunta di farina di farro. Farfalline, strudel, cantucci, ciambelline, minicrostatine al cioccolato e alla confettura.",
      placeholder: "Dolci Placeholder"
    }
  ];

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Grazie per la tua iscrizione! Email: ${email}`);
    setEmail('');
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string): void => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
          header.style.backgroundColor = '#fff';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        SPEDIZIONE GRATUITA | Con un importo minimo di 50.00 € puoi usufruire della Spedizione Gratuita!
      </div>

      {/* Header */}
      <header>
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">LA BOTTEGHELLA</a>
            
            <button className="menu-toggle" onClick={toggleMenu}>☰</button>
            
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul>
                <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
                <li><a href="#prodotti" onClick={(e) => handleSmoothScroll(e, '#prodotti')}>Prodotti</a></li>
                <li><a href="#azienda" onClick={(e) => handleSmoothScroll(e, '#azienda')}>Azienda</a></li>
                <li><a href="#territorio" onClick={(e) => handleSmoothScroll(e, '#territorio')}>Territorio</a></li>
                <li><a href="#contatti" onClick={(e) => handleSmoothScroll(e, '#contatti')}>Contatti</a></li>
              </ul>
            </nav>
            
            <a href="#" className="cart-icon">🛒 Carrello</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <h1>LA BOTTEGHELLA</h1>
          <p>A Mezzano, la salumeria La Botteghella, dove la qualità ha profonde radici e grande prestigio, perché interpreta alla perfezione la storia e la cultura di questa terra antica, ma allo stesso tempo viva.</p>
          <a href="#prodotti" className="btn-primary" onClick={(e) => handleSmoothScroll(e, '#prodotti')}>
            Scopri i Prodotti
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="azienda">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>La Nostra Tradizione</h2>
              <p>Le migliori mozzarelle nazionali e non solo dal 2017.</p>
              <p>Ogni prodotto...</p>
            </div>
            <div className="about-image">
              <div className="placeholder-img">Immagine Azienda Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="prodotti">
        <div className="container">
          <h2 className="section-title">I Prodotti</h2>
          <p className="section-subtitle">Le Nostre Specialità</p>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
            Nel nostro shop on-line potete trovare, oltre a tutta la gamma di salumi di nostra produzione, anche tutti i prodotti tipici della nostra terra come legumi, formaggi, salse, confetture, pasta, liquori.
          </p>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="placeholder-img">{product.placeholder}</div>
                <div className="card-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Territory Section */}
      <section className="territory-section" id="territorio">
        <div className="container">
          <div className="territory-content">
            <div className="about-image">
              <div className="placeholder-img">Norcia Territory Placeholder</div>
            </div>
            <div className="about-text">
              <h2>A Mezzano dal 2017</h2>
              <h3 style={{ color: '#ff6b35', marginBottom: '20px' }}>Il Nostro Territorio</h3>
              <p>La nostra città, </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Le Nostre Carni</h2>
              <h3 style={{ color: '#ff6b35', marginBottom: '20px' }}>Le Materie Prime</h3>
              <p>Tutte le carni che lavoriamo provengono esclusivamente da suini nati e allevati in Italia.</p>
              <p>Dal 1980 utilizziamo per i nostri salumi solo materie prime semplici e uniche: carne suina di qualità superiore proveniente da animali nati e allevati nel territorio italiano, sale marino sapientemente dosato, equilibrio aromatico di spezie, il tempo giusto di stagionatura per ogni prodotto.</p>
            </div>
            <div className="about-image">
              <div className="placeholder-img">Allevamento Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section" id="contatti">
        <div className="container">
          <h2>CONTATTACI</h2>
          <h3>Iscriviti alla newsletter!</h3>
          <p>RIMANI AGGIORNATO E RICEVI TUTTE LE NOVITÀ IN ANTICIPO!</p>
          <form className="newsletter-form" onSubmit={handleNewsletter}>
            <input 
              type="email" 
              placeholder="Inserisci la tua email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit">Iscriviti</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>LA BOTTEGHELLA</h3>
              <p>Tradizione artigianale. Qualità e autenticità dei sapori di Caserta.</p>
            </div>
            <div className="footer-section">
              <h3>Prodotti</h3>
              <ul>
                <li><a href="#">Salumi</a></li>
                <li><a href="#">Formaggi</a></li>
                <li><a href="#">Legumi</a></li>
                <li><a href="#">Pasta</a></li>
                <li><a href="#">Tartufi</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Informazioni</h3>
              <ul>
                <li><a href="#">Chi Siamo</a></li>
                <li><a href="#">Spedizioni</a></li>
                <li><a href="#">Pagamenti</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Termini e Condizioni</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contatti</h3>
              <ul>
                <li>📍 Mezzano di Caserta, Campania</li>
                <li>📞 +39 XXX XXXXXXX</li>
                <li>✉️ info@labotteghella.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 La Botteghella. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LaBotteghella;
