import React from 'react';
import './styles.css';
import imagen from '../../assets/Fondo_Gato.jpg';
import "../node_modules/bootstrap/scss/bootstrap";

const Header = () => {
    return (
        <header className="header">
        <div className="header__title">
          <h1>Mi Encabezado</h1>
        </div>
        <div className="header__logo">
          <img src={imagen} alt="Logo" />
        </div>
      </header>
    );
};

export default Header;
