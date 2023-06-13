import React, { useState } from 'react';
import './styles.scss';
import accesoImage from './assets/acceso.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isFormComplete = email !== '' && password !== '';

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <div>
            <figure>
              <img className="logo-image" src={accesoImage} alt="Logo" />
            </figure>
          </div>
          <form action="">
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
            <div className="forget">
              <label>
                <input type="checkbox" />
                Remember Me <a href="#">Forget Password</a>
              </label>
            </div>
            <button className={isFormComplete ? 'complete' : ''}>Log in</button>
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

export default Login;
