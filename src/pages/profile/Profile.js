
import './Profile.scss'

import MainProfile from './mainProfile/MainProfile';
import MainProfileImg from "../../resources/img/mainProfile.jpg";


const Profile = () => {
  return (
    <main className='profile'>
      <img src={MainProfileImg} alt="header image" />
      <MainProfile />
    </main>

  )
}

export default Profile