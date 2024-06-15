import { useState, useEffect } from 'react'
import './styles/styles.scss'
import { Outlet } from "react-router-dom";
import ErrorWrapper from './Errors/Error-Wrapper';
import { onAuthStateChangeListner } from './Firebase/firebase';
import NavBar from './Components/NavBar/index.compnent';
import Banner from './Components/Banner/index.component';
import Footer from './Components/Footer ';
import { useLocation } from 'react-router-dom';
import LandingPage from './Components/Landing-page/index.component';

function App(  ) {

  let location = useLocation();

  window.onresize = function () {
  console.log(window.innerWidth)}

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      // setCurrentUser(user)
      if (user) {
          // createUserDocumentFromAuth(user)
          // console.log('state change')
      }
      // console.log(user)
    }
      )
  return unsubscribe
  },[])

  return (
    <>
      <ErrorWrapper >
        <Banner url={location.pathname} />
        <NavBar />
        <div className='padding-left-right'>
          {location.pathname === '/' && <LandingPage />}
          <Outlet />
        </div>
        <Footer />
      </ErrorWrapper>
    </>
  );
}

export default App;