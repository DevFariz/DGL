import React from 'react';
import Contacts from '../components/mainPageComponents/contacts/Contacts';
import FooterHome from '../components/mainPageComponents/footerHome/FooterHome';
import HeaderHome from '../components/mainPageComponents/headerHome/HeaderHome';
import Intro from '../components/mainPageComponents/intro/Intro';
import StartNow from '../components/mainPageComponents/startNow/StartNow';
import WePresent from '../components/mainPageComponents/we-present/WePresent';
import WorkWithUs from '../components/mainPageComponents/work-with-us/WorkWithUs';

const HomePage = () => {
  return (
    <>
      <HeaderHome />
      <main className="main">
        <Intro />
        <WorkWithUs />
        <StartNow />
        <WePresent />
        <Contacts />
      </main>
      <FooterHome />
    </>
  )
}

export default HomePage