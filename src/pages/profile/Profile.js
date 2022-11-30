import MainProfile from './mainProfile/MainProfile';
import PostOfficeBox from './postOfficeBox/PostOfficeBox';

import './Profile.scss'

import MainProfileImg from "../../resources/img/mainProfile.jpg";


const Profile = () => {
  return (
    <main className='profile'>
      <img src={MainProfileImg} alt="header image" />
      {/* <MainProfile /> */}
      <PostOfficeBox />
    </main>

  )
}

export default Profile