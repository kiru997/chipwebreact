import React, { Component } from 'react';
import Menu from './module/menu/menu';
import TopBar from './module/topbar/topbar';
import Footer from './module/footer/footer';

export default class Admin extends Component {
  render() {
    return (
        <div className="nav-md">
          <div className="container body">
            <div className="main_container">
                  <Menu></Menu>
                  <TopBar></TopBar>
                  <Footer></Footer>
            </div>
            </div>
          </div>
    )
  }
}
