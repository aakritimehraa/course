import React from 'react'
import './Header.css'
function Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Coursify</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem ">
           Boards
            </li>
            <li className="navitem">
         books
            </li>
            <li className="navitem ">
            Exams
            </li>
            <li className="navitem">
             Why us?
            </li>

          </ul>
          <ul className="navbar-nav my-2 my-lg-0">

            <li className="navitem btn btn-primary">
              Sign in
            </li>
          
          </ul>
        </div>
      </nav>

    )
}

export default Header
