import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  handleToggleCycling = (e) => {
    toggleCycling()
  }

  handleResize = (e) => {
    if (e.key === "a"){
      resize("+")
    }
    else if (e.key === "s"){
      resize("-")
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick = {this.handleToggleCycling}
        onKeyDown = {this.handleResize}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
