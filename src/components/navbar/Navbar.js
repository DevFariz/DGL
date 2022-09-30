import './Navbar.scss';

import logo from '../../resources/img/user-profile-logo.png';
import dashboardLogo from '../../resources/svg/dashboard-logo.svg';
import profileLogo from '../../resources/svg/profile-logo.svg';
import activitiesLogo from '../../resources/svg/activities-logo.svg';
import dataLogo from '../../resources/svg/data-logo.svg';
import forumLogo from '../../resources/svg/forum-logo.svg';
import learnLogo from '../../resources/svg/learn-logo.svg';

const Navbar = () => {
  return (
    <nav className='nav-panel'>
      <img src={logo} alt="logo" className="nav-panel__logo" />
      <ul className="nav-panel__menu">
        <li className="nav-panel__item">
          <a href="#a" className="nav-panel__link nav-panel__link_active">
            <img src={dashboardLogo} alt="dashboard-icon" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-panel__item">
          <a href="#a" className="nav-panel__link">
            <img src={profileLogo} alt="profile-icon" />
            <span>Profil</span>
          </a>
        </li>
        <li className="nav-panel__item">
          <a href="#a" className="nav-panel__link">
            <img src={activitiesLogo} alt="activities-icon" />
            <span>Aktivitäten</span>
          </a>
        </li>
        <li className="nav-panel__item">
          
          <a href="#a" className="nav-panel__link">
            <img src={dataLogo} alt="data-icon" />
            <span>Daten</span>
          </a>
        </li>
        <li className="nav-panel__item">
          
          <a href="#a" className="nav-panel__link">
            <img src={forumLogo} alt="forum-icon" />
            <span>Forum</span>
          </a>
        </li>
        <li className="nav-panel__item">
          
          <a href="#a" className="nav-panel__link">
            <img src={learnLogo} alt="learn-icon" />
            <span>Lernen</span>
          </a>
        </li>
      </ul>
      <div className="nav-panel__bottom">
        <a href="#a" className="nav-panel__bottom-link">Impressum</a>
        <a href="#a" className="nav-panel__bottom-link">FAQ</a>
      </div>
    </nav>
  )
}

export default Navbar