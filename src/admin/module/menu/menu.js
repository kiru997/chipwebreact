import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div className="col-md-3 left_col">
      <div className="left_col scroll-view">
        <div className="navbar nav_title" style={{border: 0}}>
          <a href="index.html" className="site_title"><i className="fa fa-paw" /> <span>ChipWeb.VN</span></a>
        </div>
        <div className="clearfix" />
        {/* menu profile quick info */}
        <div className="profile clearfix">
          <div className="profile_pic">
            <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
          </div>
          <div className="profile_info">
            <span>Welcome,</span>
            <h2>Admin</h2>
          </div>
        </div>
        {/* /menu profile quick info */}
        <br />
        {/* sidebar menu */}
        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
          <div className="menu_section">
            <h3>General</h3>
            <ul className="nav side-menu">
              <li className="active"><a href="index.html"><i className="fa fa-home" /> Dashboard </a></li>
              <li><a><i className="fa fa-edit" /> Tin tức <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="tintuc.html">Tất cả bài viết</a></li>
                  <li><a href="addnews.html">Viết bài mới</a></li>
                  <li><a href="category.html">Danh mục</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-desktop" />Dự án <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="duan.html">Tất cả dự án</a></li>
                  <li><a href="addproject.html">Thêm dự án</a></li>
                  <li><a href="loaiduan.html">Thêm loại</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-user" /> Đội ngũ <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="team.html">Đội ngũ nhân viên</a></li>
                  <li><a href="addteam.html">Thêm nhân viên</a></li>
                </ul>
              </li>
              <li><a href="lienhe.html"><i className="fa fa-comment" /> Yêu cầu liên hệ</a>
              </li>
            </ul>
          </div>
          <div className="menu_section">
            <h3>WEBSITE</h3>
            <ul className="nav side-menu">
              <li><a><i className="fa fa-bug" /> Cấu hình website <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="trangchu.html">Cấu hình trang chủ</a></li>
                  <li><a href="cauhinhweb.html">Cấu hình web</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* /sidebar menu */}
        {/* /menu footer buttons */}
        <div className="sidebar-footer hidden-small">
          <a data-toggle="tooltip" data-placement="top" title="Settings">
            <span className="glyphicon glyphicon-cog" aria-hidden="true" />
          </a>
          <a data-toggle="tooltip" data-placement="top" title="FullScreen">
            <span className="glyphicon glyphicon-fullscreen" aria-hidden="true" />
          </a>
          <a data-toggle="tooltip" data-placement="top" title="Lock">
            <span className="glyphicon glyphicon-eye-close" aria-hidden="true" />
          </a>
          <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
            <span className="glyphicon glyphicon-off" aria-hidden="true" />
          </a>
        </div>
        {/* /menu footer buttons */}
      </div>
    </div>
    
    )
  }
}
