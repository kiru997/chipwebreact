import React, { Component,Fragment } from 'react';
import Slider from './slider/slider';
import About from './about/about';
import Card from './card/card';
import ServiceChil from './service/service';
import Pricing from './pricing/pricing';
import NewLetter from './newletter/newletter';
export default class Service extends Component {
  render() {
    return (
      <Fragment>
          <Slider></Slider>
          <About></About>
          <Card></Card>
          <ServiceChil></ServiceChil>
          <Pricing></Pricing>
          <NewLetter></NewLetter>
      </Fragment>
    )
  }
}
