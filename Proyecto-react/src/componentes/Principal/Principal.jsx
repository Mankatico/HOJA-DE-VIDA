import React from 'react';
import Header from '../Header/header';
import Education from '../Education/Education';
import './styles.css';
import Cards from '../skills/cards/cards';

const Principal = () => {
    return (
        <>
            <Header></Header>
            <h1 className='Tittle-Skills'>Skills</h1>
            <Cards></Cards>
            <Education></Education>
        </>
    );
}

export default Principal;
