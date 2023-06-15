import React, { useState } from 'react';
import './styles.css';
import accesoImage from './assets/registered.png';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  const capturarDatos = (event) => {
    event.preventDefault();
    if (password !== password2) {
      alert('Verifica que las 2 password coincidan.');
    }
  };

  const isFormComplete = email !== '' && password !== '' && password2 !== '';

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <div>
            <figure>
              <img className="logo-image" src={accesoImage} alt="Logo" />
            </figure>
          </div>
          <form action="" autoComplete="off" onSubmit={capturarDatos}>
            <div className="inputbox">
              <ion-icon className="small-icon" name="mail-outline"></ion-icon>
              <input type="email" required value={email} onChange={handleEmailChange} />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <ion-icon className="small-icon" name="lock-closed-outline"></ion-icon>
              <input type="password" required value={password} onChange={handlePasswordChange} />
              <label>Password</label>
            </div>
            <div className="inputbox">
              <ion-icon className="small-icon" name="lock-closed-outline"></ion-icon>
              <input type="password" required value={password2} onChange={handlePassword2Change} />
              <label>Password</label>
            </div>
            <button className={isFormComplete ? 'complete' : ''} type="submit">Register</button>
            <div className="register">
              <p>
                You have an account / <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
