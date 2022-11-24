import MainProfileUserSettings from './mainProfileUserSettings/MainProfileUserSettings';
import MessageBox from './messageBox/MessageBox';

import './MainProfile.scss'
import MainProfileImg from '../../../resources/img/mainProfile.jpg'

const MainProfile = () => {
  return (
    <main>
      <img src={MainProfileImg} alt="header image" />
      <div className="main-profile-container">
        <MainProfileUserSettings />
        <MessageBox />
      </div>
    </main>
  )
}

export default MainProfile