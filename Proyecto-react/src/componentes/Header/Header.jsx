import React from 'react';
import './styles.css';
import Image from './assets/Fondo_Gato.jpg';
import LogoColombia from './assets/colombia.png';

function Header() {
  return (
    <>
    <header>
      <div className="header-container">
        <div className="image-container">
          <img src={Image} alt="Fondo_Gato" />
        </div>
        <div className="content-container">
          <h1>ANDERSSON JULIAN MUÑOZ BUSTOS</h1>
          <p>Desarrollador Full Stack</p>
          <p>20 años</p>
          <p><img src={LogoColombia} alt="" /></p>
          <div className="quote-container">
            <p>"Soy un apasionado de la programación, destacándome por mi comunicación efectiva y capacidad de liderazgo."</p>
          </div>
        </div>
      </div>
      <div className="navbar-container">
      </div>
      </header>
    </>
  );
}

export default Header;
