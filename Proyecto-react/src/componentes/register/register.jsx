import React, { useState } from 'react';
import './styles.css';
import accesoImage from './assets/acceso.png';

function Register() {
  // Estados para almacenar los valores del correo electrónico y la contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar cambios en el campo de correo electrónico
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Función para manejar cambios en el campo de contraseña
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Verificar si el formulario está completo (ambos campos no están vacíos)
  const isFormComplete = email !== '' && password !== '';

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <div>
            <figure>
              <img className="logo-image" src={accesoImage} alt="Logo" />COMPONENTE REGISTRAR
            </figure>
          </div>
          <form action="" autoComplete='off'>
            {/* Campo de correo electrónico */}
            <div className="inputbox">
              <ion-icon className="small-icon" name="mail-outline"></ion-icon>
              <input type="email" required value={email} onChange={handleEmailChange} />
              <label>Email</label>
            </div>
            {/* Campo de contraseña */}
            <div className="inputbox">
              <ion-icon className="small-icon" name="lock-closed-outline"></ion-icon>
              <input type="password" required value={password} onChange={handlePasswordChange} />
              <label>Password</label>
            </div>
            {/* Opción de recordar contraseña */}
            <div className="forget">
              <label>
                <input type="checkbox" />
                Remember Me <a href="#">Forget Password</a>
              </label>
            </div>
            {/* Botón de inicio de sesión */}
            <button className={isFormComplete ? 'complete' : ''}>Log in</button>
            {/* Opción de registro */}
            <div className="register">
              <p>
                Don't have an account <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
