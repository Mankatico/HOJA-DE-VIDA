import React from 'react';
import './Styles.css';
import LogoChinca from './assets/Logo-Chinca.jpeg';
import LogoIser from './assets/Logo-Iser.jpg';
import LogoUdemy from './assets/logo-udemy.jpg';

const Education = () => {
    return (
        <div >
            <h1 id='estudios'>Estudios</h1>
            <div className='Container-Cards-Education'>
                <div className='Card'>
                    <figure>
                        <img src={LogoChinca} alt="" />
                    </figure>
                    <div className='Cards-body'>
                        <h3>Institucion Educativa Inocencio Chinca</h3>
                        <p className="curso">Primaria - Bachillerato</p>
                        <p className="proceso">Finalizado</p>
                        <p>Tame - Arauca</p>
                        <p>2007 - 2019</p>
                    </div>
                </div>
                <div className='Card'>
                    <figure>
                        <img src={LogoIser} alt="" />
                    </figure>
                    <div className='Cards-body'>
                        <h3>Instituto Superior de Educacion Rural</h3>
                        <p className="curso">Tegnologia en Gestion de Redes y Sistemas</p>
                        <p className="proceso1">En curso</p>
                        <p>Pamplona - Norte de Santander</p>
                        <p>2020 - ....</p>
                    </div>
                </div>
                <div className='Card'>
                    <figure>
                        <img src={LogoUdemy} alt="" />
                    </figure>
                    <div className='Cards-body'>
                        <h3>Crear Sistemas Marketplace con Angular y Firebase Database</h3>
                        <p className="curso">Curso</p>
                        <p className="proceso">Finalizado</p>
                        <p>Udemy</p>
                        <p>2022</p>
                    </div>
                </div>
                <div className='Card'>
                    <figure>
                        <img src={LogoUdemy} alt="" />
                    </figure>
                    <div className='Cards-body'>
                        <h3>Flutter: Guia Completa para IOS y Android</h3>
                        <p className="curso">Curso</p>
                        <p className="proceso1">En curso</p>
                        <p>Udemy</p>
                        <p>2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
