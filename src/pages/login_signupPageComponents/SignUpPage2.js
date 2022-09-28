import React from 'react';

import lock from '../../resources/svg/lock.svg';


const SignUpPage2 = () => {
  return (
    <div className='login-signup'>
      <div className="container">
        <div className="login-signup-container">
          <a href="#a" className="login-signup__link">zurück</a>
          <div className="login-signup_2">
            <h1 className="signup__title signup__title_sm">Benutzerkonto erstellen</h1>
            <form>
              <label className='login-signup__label' htmlFor="name">Benutzername</label>
              <input 
                id='name'
                type="text" 
                className="login-signup__input login-signup__input_lg"
                placeholder='Clara Wüst' />
              <label className='login-signup__label' htmlFor="email">E-Mail Adresse:</label>
              <input 
                id='email'
                type='email' 
                className="login-signup__input login-signup__input_lg"
                placeholder='clara.wuest@gmail.com' />
              <label className='login-signup__label' htmlFor="passowrd_1">Passwort</label>
              <input 
                id='passowrd_1'
                type='password' 
                className="login-signup__input login-signup__input_lg"
                placeholder='*********' />
              <label className='login-signup__label' htmlFor="passowrd_2">Passwort wiederholen</label>
              <input 
                id='passowrd_2'
                type='password' 
                className="login-signup__input login-signup__input_lg"
                placeholder='*********' />
              <button className='btn-green login-signup__submit-btn'>REGISTRIEREN</button>
              <p className="login-signup__text_small">Your Info is safely secured <img src={lock} alt="lock" /></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage2