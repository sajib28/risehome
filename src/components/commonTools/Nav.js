import React, { Component } from 'react'
import {
    Link,
    NavLink
  } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <nav id="mainMenu" class="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/contact">Dashboard</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}
export default Nav;