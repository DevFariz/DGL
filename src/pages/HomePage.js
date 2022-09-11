import React from 'react';
import HeaderHome from '../components/headerHome/HeaderHome';
import Intro from '../components/intro/Intro';

const HomePage = () => {
  return (
    <>
      <HeaderHome />
      <main className="main">
        <Intro />
      </main>
    </>
  )
}

export default HomePage