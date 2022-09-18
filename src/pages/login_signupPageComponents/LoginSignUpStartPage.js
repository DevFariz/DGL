import './styles.scss';

const LoginSignUpStartPage = () => {
  return (
    <div className='login-signup login-signup-form'>
      <div className="container">
        <div className="login-signup-container">
          <a href="#a" className="login-signup__back">zurück</a>
          <h1 className='login-signup__title'>ECHTE NACHHALTIGKEIT AM ARBEITSPLATZ</h1>
          <p className="login-signup__text">Jetzt wird Umweltschutz in deinem Unternehmen: 
            einfach, ökonomisch und modern.
            DieGrüneLösung - alles mit nur einem Werkzeug.
          </p>
          <button className="login-signup__create btn-green">KONTO ERSTELLEN</button> <br />
          <button className="login-signup__login">ANMELDEN</button>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUpStartPage