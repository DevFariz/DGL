import './styles.scss';

const FinishSignUpPage = () => {
  return (
    <div className='login-signup '>
      <div className="container">
        <form className="login-signup-container signup-finish" style={{textAlign: "left"}}>
          <a href="#a" className="login-signup__link">zurück</a>
          <h1 className="signup__title signup__title_lg">»Hallo Clara! Ich bin Knud, dein digitaler Klima-Assistent«</h1>
          <p className="login-signup__text" style={{textAlign: "left", maxWidth: "990px", marginLeft: 0}}>
            »Toll, dass du dich angemeldet hast. Ich helfe dir, dich in »Der Grünen Lösung« zurecht zu finden. Lass uns gemeinsam nachhaltig aktiv werden. 
            Ich erkläre dir, wie du dich auf deinem Dashboard zurecht findest«
          </p>
          <button className="btn-green login-signup__finish-btn" style={{marginRight: "50px"}}>LOS GEHT’S</button>
          <button className="btn-green login-signup__finish-btn">ÜBERSPRINGEN</button>
        </form>
      </div>
    </div>
  )
}

export default FinishSignUpPage