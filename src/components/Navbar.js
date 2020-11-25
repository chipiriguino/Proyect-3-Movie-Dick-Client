import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE


class Navbar extends Component {
  render() {

    const {logout, isLoggedin } = this.props;	//	<-- UPDATE HERE
    return (
      <header className="header">
        <a href="/" className="logo"><img className="logo-nav" src="./Logos/cola.png" width="40" height="40"></img></a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          {
            isLoggedin ?
              (<>
              <li><a href="/popular">Most Popular</a></li>
              <li><a href="/movies">All Movies</a></li>
              <li><a href="/private">My profile</a></li>
              <li><a href="#" className="navbar-button" onClick={logout}>Logout</a></li>
              </>) :
              (
                <>
                  <li><a href="/login">LogIn</a></li>
                  <li><a href="/signup">Sign Up</a></li>
                </>)
          }
        </ul>
      </header>
    );
  }
}

export default withAuth(Navbar);







