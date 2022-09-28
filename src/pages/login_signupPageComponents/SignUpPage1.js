import React from 'react'

const SignUpPage1 = () => {
  return (
    <div className='login-signup login'>
      <div className="container">
        <div className="login-signup-container">
          <a href="#a" className="login-signup__link">zurück</a>
          <div className="signup__title">Benutzerkonto erstellen</div>
          <form className='login-signup_1'>
            <div className="signup-inputs-container">
              <input 
                type="text" 
                className="login-signup__input login-signup__input_sm"
                placeholder='Clara' />
              <input 
                type="text" 
                className="login-signup__input login-signup__input_sm"
                placeholder='Wüst' />
            </div>
            <input 
                type="text" 
                className="login-signup__input login-signup__input_lg"
                placeholder='Zahnmedizin' />
            <div className="signup-inputs-container">
              <input 
                type="text" 
                className="login-signup__input login-signup__input_md"
                placeholder='Musterstraße' />
              <input 
                type="text" 
                className="login-signup__input login-signup__input_esm"
                placeholder='234' />
            </div>
            <input 
                type="text" 
                className="login-signup__input login-signup__input_lg"
                placeholder='50668' />
            <button className='btn-green login-signup__submit-btn'>WEITER</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage1