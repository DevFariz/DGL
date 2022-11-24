import MainProfileUserSettings from './mainProfileUserSettings/MainProfileUserSettings';
import MessageBox from './messageBox/MessageBox';
import Progress from './progress/Progress';

import './MainProfile.scss'
import MainProfileImg from '../../../resources/img/mainProfile.jpg'

const MainProfile = () => {
  return (
    <main>
      <img src={MainProfileImg} alt="header image" />
      <div className="main-profile-container">
        <MainProfileUserSettings />
        <MessageBox />
        <Progress />
      </div>
    </main>
  )
}

export default MainProfile