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
import SaveBar from './Components/SaveBar';
import { useDispatch, useSelector } from "react-redux"
import { setEditConfig, setConfig } from './Redux/Slices/config.slice';
import { fetchLandingPageData } from './Firebase/firebase';
import Toast from './Components/Lib/Toast/index.component';

function App() {

  const dispatch = useDispatch()
  const { editMode } = useSelector(state => state.control)

  //fetch data
  useEffect(() => {
    let isMounted = true; 
  
    const fetchData = async () => {
      try {
        const data = await fetchLandingPageData();

        if (isMounted) {
          console.log('Is mounted, config', data)
          dispatch(setEditConfig(data))
          dispatch(setConfig(data))
        }
      } catch (error) {
        console.log('Error in App.js loading data', error)
      }
    };
  
    fetchData();
  
    return () => {
      isMounted = false; 
    };
  }, []);

  let location = useLocation();
  const { user } = useSelector(state => state.users)

  window.onresize = function () {
    // console.log(window.innerWidth)
  }

  useEffect(() => {
    // const unsubscribe = onAuthStateChangeListner((user) => {
    //   // setCurrentUser(user)
    //   // console.log('app user', user)
    //   if (user) {
    //     // createUserDocumentFromAuth(user)
    //     // console.log('state change')
    //   }
    //   // console.log(user)
    // }
    // )
    // return unsubscribe
  }, [])

  return (
    <>
      <ErrorWrapper >
        <Banner url={location.pathname} />
        <Toast />
        <NavBar />
        <div className='padding-left-right background-color'>
          {location.pathname === '/' && <LandingPage />}
          <Outlet />
        </div>
        {editMode && <SaveBar />}
        <Footer />
      </ErrorWrapper>

    </>
  );
}

export default App;
