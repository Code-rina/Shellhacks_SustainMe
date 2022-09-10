
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session?.user)


  return (
    <nav className="navbar-main-container">
      <div className="navbar-sub-container">
        <div className="navbar-div">
          <NavLink className="nav-logo" to='/' exact={true} activeClassName='active'>
            SustainMe
          </NavLink>
        {/* </div> */}
        {/* <div className="navbar-right-div"> */}
          <div className="nav-li">
            <NavLink className="nav-items" to='/about' exact={true} activeClassName='active'>
              About Us
            </NavLink>
          </div>
        {/* {sessionUser &&  */}
              <div className="nav-li">
                <NavLink className="nav-items" to='/events' exact={true} activeClassName='active'>
                  Events
                </NavLink>
              </div>
              <div className="nav-li">
                <NavLink className="nav-items" to='/sign-up' exact={true} activeClassName='active'>
                  Sign Up
                </NavLink>
              </div>
              <div className="nav-li">
                <NavLink className="nav-items" to='/users' exact={true} activeClassName='active'>
                  Users
                </NavLink>
              </div>
              <div className="nav-li">
                <LogoutButton />
              </div>
            </div>
        {/* } */}
      </div>
    </nav>
  );
}

export default NavBar;
