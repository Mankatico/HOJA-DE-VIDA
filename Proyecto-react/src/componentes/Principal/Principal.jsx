import React from 'react';
import Header from '../Header/header';

import './styles.css';
import Cards from '../skills/cards/cards';

const Principal = () => {
    return (
        <>
            <Header></Header>
            <h1 className='Tittle-Skills'>Skills</h1>
            <Cards></Cards>
        </>
    );
}

export default Principal;
