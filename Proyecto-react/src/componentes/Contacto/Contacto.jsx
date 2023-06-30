import React from 'react';
import './Styles.css';
import LogoEscribir from './assets/escribir.png';

const Contacto = () => {
    return (
        <>
            <div className="contact_form" id="contacto">
                <div className="formulario">
                    <h1>Formulario de contacto</h1>
                    <h3 className="SubContacto">Escríbenos y en breve nos pondremos en contacto contigo</h3>
                    <form action="" method="">
                        <p>
                            <label htmlFor="nombre" className="colocar_nombre">Nombre
                                <span className="obligatorio">*</span>
                            </label>
                            <input type="text" name="introducir_nombre" id="nombre" required placeholder="Escribe tu nombre" />
                        </p>
                        <p>
                            <label htmlFor="email" className="colocar_email">Email
                                <span className="obligatorio">..  *</span>
                            </label>
                            <input type="email" name="introducir_email" id="email" required placeholder="Escribe tu Email" />
                        </p>
                        <p>
                            <label htmlFor="mensaje" className="colocar_mensaje">Mensaje
                                <span className="obligatorio">*</span>
                            </label>
                            <textarea name="introducir_mensaje" className="texto_mensaje" id="mensaje" required placeholder="Deja aquí tu comentario..."></textarea>
                        </p>
                        <button type="submit" name="enviar_formulario" id="enviar" className='enviar'><p>Enviar</p></button>
                        <p className="aviso">
                            <span className="obligatorio"> *</span>los campos son obligatorios.
                        </p>
                    </form>
                </div>
                <figure className='Logo-Escribir'>
                    <img src={LogoEscribir} alt="" />
                </figure>
            </div>
        </>
    );
}

export default Contacto;
