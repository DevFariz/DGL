import { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';

import './Navbar.scss';

import logo from '../../resources/img/user-profile-logo.png';
import dashboardLogo from '../../resources/svg/dashboard-logo.svg';
import profileLogo from '../../resources/svg/profile-logo.svg';
import activitiesLogo from '../../resources/svg/activities-logo.svg';
import dataLogo from '../../resources/svg/data-logo.svg';
import forumLogo from '../../resources/svg/forum-logo.svg';
import learnLogo from '../../resources/svg/learn-logo.svg';

const Navbar = () => {
  const dropdownData = {
    profile: ['Mein Profil', 'Mein Unternehmen', 'Mein Fortschritt', 'Postfach', 'Benutzereinstellung', 'Abmelden'],
    activities: ['Maßnahmen', 'Quiz', 'Aufgaben'],
    data: ['Strom/ Gas', 'Wasser', 'Heizung', 'Ressourcen'],
    forum: ['Chat', 'Telefon'],
    learn: ['Fortbildungs-Seminare']
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState('');

  function toggleDropdown(){
    setIsDropdownOpen();
  }

  return (
    <nav className='nav-panel'>
      <img src={logo} alt="logo" className="nav-panel__logo" />
      <ul className="nav-panel__menu">
        <li className="nav-panel__item">
          <a href='#a' className="nav-panel__link nav-panel__link_active">
            <img src={dashboardLogo} alt="dashboard-icon" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-panel__item">
          <button className="nav-panel__link" onClick={toggleDropdown}>
            <img src={profileLogo} alt="profile-icon" />
            <span>Profil</span>
          </button>
          <Dropdown links={dropdownData.profile}/> 
        </li>
        <li className="nav-panel__item">
          <button className="nav-panel__link" onClick={toggleDropdown}>
            <img src={activitiesLogo} alt="activities-icon" />
            <span>Aktivitäten</span>
            <Dropdown links={dropdownData.activities}/> 
          </button>
        </li>
        <li className="nav-panel__item">
          <button className="nav-panel__link">
            <img src={dataLogo} alt="data-icon" />
            <span>Daten</span>
          </button>
          <Dropdown links={dropdownData.data}/> 
        </li>
        <li className="nav-panel__item">
          <button className="nav-panel__link">
            <img src={forumLogo} alt="forum-icon" />
            <span>Forum</span>
          </button>
          <Dropdown links={dropdownData.forum}/>
        </li>
        <li className="nav-panel__item">
          <button className="nav-panel__link">
            <img src={learnLogo} alt="learn-icon" />
            <span>Lernen</span>
          </button>
          <Dropdown links={dropdownData.learn}/>
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