import './DashboardHeader.scss';

import searchLogo from '../../../resources/svg/lupa.svg';
import dashboardProfile from '../../../resources/img/dashboard-profile-img.png';
import notificationsImg from '../../../resources/svg/notifications.svg';

const DashboardHeader = () => {

  const userName = 'Clara Wüst';
  const profession = 'Zahnärztin';

  return (
    <header className="dashboard-header">
      <div className="dashboard-greeting">
        <h1>Hallo <span>{userName}</span></h1>
        <p>Willkommen auf deinem Dashboard!</p>
      </div>
      <div className='dashboard-right'>
        <div className="dashboard-search">
          <input type="text" placeholder='Suche'/>
          <button>
            <img src={searchLogo} alt="search" />
          </button>
        </div>
        <div className="dashboard-profile">
          <div className="dashboard-profile__left">
            <img src={dashboardProfile} alt="profile-img" />
            <div className="dashboard-profile__content">
              <h5 className="dashboard-profile__name">{userName}</h5>
              <h5 className='dashboard-profile__profession'>{profession}</h5>
            </div>
          </div>
          <button className="dashboard-profile__notifications">
            <img src={notificationsImg} alt="notifications" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader