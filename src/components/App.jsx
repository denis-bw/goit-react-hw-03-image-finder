import React, { Component } from "react";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader'
import Searchbar from './Searchbar/Searchbar';
import { Modal } from "./Modal/Modal";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { api } from './api/api';


export class App extends Component {

  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    showModal: false,
    largeImage: '',
    total: 0,
    error: null,
  }

  componentDidUpdate(prevProps,prevState) {
    
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
    this.setState({ loading: true })
      api(this.state.query, this.state.page).then(data => {  
        if (data.hits.length === 0) {
        this.setState({total: 0})
        return toast.error("Nothing found", {
          position: toast.POSITION.TOP_CENTER
        })
      }
         
      return this.setState((lastProp) => {
        if (prevState.query !== this.state.query) { return {images: [...data.hits],total: data.total} }
        return {
          images: [...lastProp.images, ...data.hits],
          total: data.total
        }
      });
    }).finally(() => {this.setState({loading: false})}); 
    }
   }

  
  findImage = (value) => {
    if (value.trim() === "") {
      return toast.error("Enter a valid value", {
                    position: toast.POSITION.TOP_CENTER
    })}

    this.setState({
      page: 1,
      query: value.trim().toLowerCase(),
    })
  }


  incremenPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    })
  }

  showModal = (largeImage) => {
        this.setState(({showModal}) => {
            return {
                showModal: !showModal,
                largeImage: largeImage
            }
        })
    }

  render() {
    const totalPage = this.state.total / this.state.images.length;
    return <div>
            <Searchbar onSubmit={this.findImage} />
        
            <ImageGallery 
              imagesList={this.state.images}
              showModal={this.showModal}
            />

            {this.state.loading && <Loader/>}
        
            {totalPage > 1 && !this.state.loading && this.state.images.length !== 0 && <Button onClick={this.incremenPage} />}
            {this.state.showModal && <Modal onClose={this.showModal} largeImage={this.state.largeImage } />}
            <ToastContainer autoClose={3000} />
          </div>
  };
};


