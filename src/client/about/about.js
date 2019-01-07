import React, { Component,Fragment } from 'react';
import Slider from './slider/slider';
import Content from './content/content';
import Video from './video/video';
import Counter from './counter/counter';
import Team from './team/team';
import Skill from './skill/skill';
export default class About extends Component {

  
  render() {
    return (
        <Fragment>
            <Slider></Slider>
            <Content></Content>
            <Video></Video>
            <Counter></Counter>
            <Team></Team>
            <Skill></Skill>
        </Fragment>
        
    )
  }
}
