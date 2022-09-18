import './FooterHome.scss';

const FooterHome = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="footer-left">
          <h5 className="footer__title">Rechtliches</h5>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#s" className="footer-link">Impressum</a>
            </li>
            <li className="footer-item">
              <a href="#s" className="footer-link">Datenschutzerklärung</a>
            </li>
            <li className="footer-item">
              <a href="#s" className="footer-link">Cookie-Richtlinien (EU)</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h5 className="footer__title">Informationen</h5>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#s" className="footer-link">üBer Uns</a>
            </li>
            <li className="footer-item">
              <a href="#s" className="footer-link">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <span>© Copyright 2022 Die Grüne Lösung</span>
        <a href="#s" className="footer-link">Impressum</a>
        <a href="#a" className="footer-link">Datenschutzerklärung</a>
        </div>
    </footer>
  )
}

export default FooterHome