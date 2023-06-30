import React from 'react';
import './styles.css';
import logo from './assets/menu.png';
import logo1 from './assets/perfil.png';

const Navbar = () => {
    const buscar = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    const buscarInicio = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <nav className='navbar'>
                <a href="#" className='Logo' onClick={buscarInicio}>
                    <figure>
                        <img src={logo1} className="logoNav" alt="Logo" />
                    </figure>
                </a>
                <input type="checkbox" id="toggler" />
                <label htmlFor="toggler">
                    <figure>
                        <img src={logo} alt="Menu" />
                    </figure>
                </label>
                <div className='menu'>
                    <ul className='list'>
                        <li>
                            <a onClick={() => buscar('skills')}>Skills</a>
                        </li>
                        <li>
                            <a onClick={() => buscar('estudios')}>Estudios</a>
                        </li>
                        <li>
                            <a onClick={() => buscar('xp')}>Experiencia</a>
                        </li>
                        <li>
                            <a onClick={() => buscar('contacto')}>Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
