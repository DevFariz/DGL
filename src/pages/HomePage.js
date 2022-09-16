import React from 'react';
import Contacts from '../components/contacts/Contacts';
import FooterHome from '../components/footerHome/FooterHome';
import HeaderHome from '../components/headerHome/HeaderHome';
import Intro from '../components/intro/Intro';
import StartNow from '../components/startNow/StartNow';
import WePresent from '../components/we-present/WePresent';
import WorkWithUs from '../components/work-with-us/WorkWithUs';

const HomePage = () => {
  return (
    <>
      <HeaderHome />
      {/* <main className="main">
        <Intro />
        <WorkWithUs />
        <StartNow />
        <WePresent />
        <Contacts />
      </main> */}
      {/* <FooterHome /> */}
    </>
  )
}

export default HomePage