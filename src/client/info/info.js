import React, { Component,Fragment } from 'react'
import Slider from './slider/slider';
import Grid from './grid/grid';
import Form from './form/form';
import Map from './map/map';
import Follow from './follow/follow';
export default class Info extends Component {
  render() {
    return (
     <Fragment>
         <Slider></Slider>
         <Grid></Grid>
         <Form></Form>
         <Map></Map>
         <Follow></Follow>
     </Fragment>
    )
  }
}
