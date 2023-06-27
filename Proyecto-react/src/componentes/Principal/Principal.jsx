import React from 'react';
import Header from '../Header/header';
import Education from '../Education/Education';
import './styles.css';
import Cards from '../skills/cards/cards';
import Contacto from '../Contacto/Contacto';
import Footer from '../Footer/Footer';

const Principal = () => {
    return (
        <>
            <Header></Header>
            <h1 className='Tittle-Skills'>Skills</h1>
            <Cards></Cards>
            <Education></Education>
            <Contacto></Contacto>
            <Footer></Footer>
        </>
    );
}

export default Principal;
