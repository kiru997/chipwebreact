import React, { Component,Fragment } from 'react';
import Slider from './slider/slider';
import About from './about/about';
import Service from './service/service';
import Counter from './counter/counter';
import Content from './content/content';
import Blockquote from './blockquote/blockquote';
import RecentProject from './recentproject/recentproject';
import Monial from './monial/monial';
import RecentPost from './recentpost/recentpost';
export default class Home extends Component {

 
  render() {
    return (
      <Fragment>
          <Slider></Slider>
          <About></About>
          <Service></Service>
          <Counter></Counter>
          <Content></Content>
          <Blockquote></Blockquote>
          <RecentProject></RecentProject>
          <Monial></Monial>
          <RecentPost></RecentPost>
      </Fragment>
    )
  }
}
