import React from 'react';
import './Styles.css';

const Contacto = () => {
    return (
        <>
            <div class="contact_form">
                <div class="formulario">
                    <h1>Formulario de contacto</h1>
                    <h3 className='SubContacto'>Escríbenos y en breve nos pondremos en contacto contigo</h3>
                    <form action="" method="">
                        <p>
                            <label for="nombre" class="colocar_nombre">Nombre
                                <span class="obligatorio">*</span>
                            </label>
                            <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre" />
                        </p>
                        <p>
                            <label for="email" class="colocar_email">Email
                                <span class="obligatorio">*</span>
                            </label>
                            <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email" />
                        </p>
                        <p>
                            <label for="mensaje" class="colocar_mensaje">Mensaje
                                <span class="obligatorio">*</span>
                            </label>
                            <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea>
                        </p>
                        <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
                        <p class="aviso">
                            <span class="obligatorio"> * </span>los campos son obligatorios.
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contacto;
