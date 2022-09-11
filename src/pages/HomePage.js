import React from 'react';
import HeaderHome from '../components/headerHome/HeaderHome';
import Intro from '../components/intro/Intro';
import StartNow from '../components/startNow/StartNow';
import WorkWithUs from '../components/work-with-us/WorkWithUs';

const HomePage = () => {
  return (
    <>
      <HeaderHome />
      <main className="main">
        <Intro />
        <WorkWithUs />
        <StartNow />
      </main>
    </>
  )
}

export default HomePage