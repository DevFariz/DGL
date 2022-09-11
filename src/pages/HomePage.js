import React from 'react';
import HeaderHome from '../components/headerHome/HeaderHome';
import Intro from '../components/intro/Intro';
import WorkWithUs from '../components/work-with-us/WorkWithUs';

const HomePage = () => {
  return (
    <>
      <HeaderHome />
      <main className="main">
        <Intro />
        <WorkWithUs />
      </main>
    </>
  )
}

export default HomePage