import React, { Component } from 'react'

export default class Topbar extends Component {
  render() {
    return (
      <div className="top_nav">
      <div className="nav_menu">
        <nav>
          <div className="nav toggle">
            <a id="menu_toggle"><i className="fa fa-bars" /></a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li >
              <a  className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <img alt="" src="images/img.jpg"  />John Doe
                <span className=" fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu dropdown-usermenu pull-right">
                <li><a > Profile</a></li>
                <li>
                  <a >
                    <span className="badge bg-red pull-right">50%</span>
                    <span>Settings</span>
                  </a>
                </li>
                <li><a >Help</a></li>
                <li><a href="login.html"><i className="fa fa-sign-out pull-right" /> Log Out</a></li>
              </ul>
            </li>
            <li role="presentation" className="dropdown">
              <a  className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    
    )
  }
}
