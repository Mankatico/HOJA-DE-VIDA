import React from 'react';
import './styles.css';
import Image from './assets/Fondo_Gato.jpg';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="image-container">
          <img src={Image} alt="Fondo_Gato" />
        </div>
        <div className="content-container">
          <h2>ANDERSSON JULIAN MUÑOZ BUSTOS</h2>
          <p>Tecnólogo en gestión de redes y sistemas teleinformáticos</p>
          <p>Desarrollador Full Stack</p>
          <div className="quote-container">
            <p>"Soy un apasionado de la programación, destacándome por mi comunicación efectiva y capacidad de liderazgo."</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
