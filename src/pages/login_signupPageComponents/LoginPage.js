import './styles.scss';

import logo from  '../../resources/img/logo.jpg';
import lock from '../../resources/svg/lock.svg';
import globus from '../../resources/img/globus.png';

const LoginPage = () => {
  return (
    <div className='login-signup login'>
      <div className="container">
        <form className="login-signup-container">
            <a href="#a" className="login-signup__link">zurück</a>
            <img src={logo} alt="logo" className="login-signup__logo" />
            <input type="text" className='login-signup__input login-signup__input_lg' placeholder='Benutzername' /> <br />
            <input type="password" className='login-signup__input login-signup__input_lg' placeholder='Passwort'/> <br />
            <a href="#a" className='login-signup__link login-signup__link_forgot'>Passwort vergessen?</a> <br />
            <button className='btn-green' style={{padding: "15px 100px 12px", fontSize: '27px', lineHeight: "44px", fontWeight: '500', marginBottom:'45px'}}>ANMELDEN</button>
            <p className="login-signup__text_small">Your Info is safely secured <img src={lock} alt="lock" /></p>
            <p className='login-signup__text_medium'>
              Du hast noch kein Konto? Registriere dich <a href="#a">hier</a>.
            </p>
            <a href='#a' style={{fontWeight: '500', fontSize: '17px', color: "#707070"}}>Zurück zur Startseite</a>
        </form>
      </div>
      <img className='login-signup__dec-img' src={globus} alt="globus" />
    </div>
  )
}

export default LoginPage