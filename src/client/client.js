import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
// import '../asset/client/css/main.css';
import Menu from './module/menu/menu';
import Footer from './module/footer/footer';
import Home from './home/home';
import About from './about/about';
import Service from './service/service';
import Blog from './new/new';
import Info from './info/info';
import Detail from './detailpost/detail';
export default class Client extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
         rerender:false
      }
    }
    
  
      
    render() {
        return (
           
            
            <Router>
             <Fragment>
                <Menu></Menu>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route  path="/gioithieu" component={About}></Route>
                        <Route  path="/dichvu" component={Service}></Route>
                        <Route  path="/tintuc" component={Blog}></Route>
                        <Route  path="/lienhe" component={Info}></Route> 
                        <Route  path="/chitiet/:slug" component={Detail}></Route> 
                    </Switch>
                   
                <Footer></Footer>
                </Fragment>
                </Router>
              
        )
    }
}
