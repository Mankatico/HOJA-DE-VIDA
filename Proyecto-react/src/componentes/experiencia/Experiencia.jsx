import React from 'react';
import imgError404 from './assets/error-404.png';
import './Styles.css';

const Experiencia = () => {
    return (
        <div className='Container-Xp' id='xp'>
            <h1>Experiencia</h1>
            <div className='Container-Xp-img'>
                <img src={imgError404} alt="" />
            </div>
            <p className='Xp-title'>No hay :(</p>
        </div>
    );
}

export default Experiencia;
