import React from 'react';
import './styles.css';
import logo from './assets/menu.png';
import logo1 from './assets/perfil.png';


const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <a href="#" className='Logo'><figure><img src={logo1} className="logoNav" /></figure></a>
                <input type="checkbox" id="toggler" />
                <label htmlFor="toggler"><figure><img src={logo} alt="" /></figure></label>
                <div className='menu'>
                    <ul className='list'>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Estudios</a></li>
                        <li><a href="#">Experiencia Laboral</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
