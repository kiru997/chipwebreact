import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
        <section className="map-section">
        <div className="toggle-map d-flex justify-content-center align-items-center border-top-simple border-bottom-simple">
          <div className="show active flex-column align-items-center">
            <p>Show Map</p>
            <i className="fa fa-angle-down" />
          </div>
          <div className="hide flex-column align-items-center">
            <p>Hide Map</p>
            <i className="fa fa-angle-up" />
          </div>
        </div>
        <div id="map" />
      </section>
      
    )
  }
}
