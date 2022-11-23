import MainProfileUserSettings from './mainProfileUserSettings/MainProfileUserSettings'

import './MainProfile.scss'
import MainProfileImg from '../../../resources/img/mainProfile.jpg'

const MainProfile = () => {
  return (
    <main>
      <img src={MainProfileImg} alt="header image" />
      <div className="main-profile-container">
        <MainProfileUserSettings />
      </div>
    </main>
  )
}

export default MainProfile