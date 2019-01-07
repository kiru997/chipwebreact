import React, { Component,Fragment } from 'react';
import Slider from './slider/slider';
import Blog from './blog/blog';
export default class New extends Component {
  render() {
    return (
     <Fragment>
        <Slider></Slider>
        <Blog></Blog>
     </Fragment>
    )
  }
}
