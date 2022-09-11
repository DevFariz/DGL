import './HeaderHome.scss';

import logo from "../../resources/img/logo.jpg";
import headerBg from "../../resources/img/header-bg.jpg";

const HeaderHome = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="DIE GRÜNE LÖSUNG" />
          </div>
          <nav className="nav">
            <ul className="menu">
              <li className="menu__item">
                <a href="#fd" className="menu__link">REGISTRIEREN</a>
              </li>
              <li className="menu__item">
                <a href="#fd" className="menu__link">LOGIN</a>
              </li>
              <li className="menu__item">
                <a href="#fd" className="menu__link">KONTAKT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <img className='header-bg' src={headerBg} alt="background" />
    </header>
  )
}

export default HeaderHome