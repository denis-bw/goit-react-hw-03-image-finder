import React, { Component } from "react";
import Searchbar from './Searchbar/Searchbar'
import {ImageGallery} from './ImageGallery/ImageGallery'

export class App extends Component {
  state = {
    valueInput: '',
  }

  findImage = (value) => {
    this.setState({ valueInput: value })
    // console.log(value)
    
  }

  render() {
    return<div>
      <Searchbar onSubmit={this.findImage} />
      <ImageGallery valueInput={this.state.valueInput} />
    </div>
  };
};
