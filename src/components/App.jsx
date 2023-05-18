import React, { Component } from "react";
import Searchbar from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
// import { Button } from './Button/Button' 
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    valueInput: '',
    page: 0,
  }


  findImage = (value) => {
    this.setState({
      page: 1,
      valueInput: value.trim().toLowerCase(),
    })
  }

  incremenPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    })
  }


  render() {
    return <div>
            <Searchbar onSubmit={this.findImage} />
            <ImageGallery 
              valueInput={this.state.valueInput}
              page={this.state.page}
              resetStateInput={this.resetStateInput}
              onClick={this.incremenPage}
            />
            <ToastContainer autoClose={3000} />
           </div>
  };
};
