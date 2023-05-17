import React, { Component } from "react";
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import { api } from '../api/api';
import css from './ImageGallery.module.css'
export class ImageGallery extends Component {
    state = {
        data: null,
        status: '',
    }

    

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.valueInput !== this.props.valueInput) {
            // console.log(prevProps.valueInput)
            // console.log(this.props.valueInput)

            api(this.props.valueInput).then(dataImage => this.setState({
                data: dataImage,
            }));   
        }    
    }

    
    render() {
        return this.state.data && <ul className={css.ImageGallery}>
            {this.state.data.hits.map(el => {
                 return <ImageGalleryItem key={el.id} altImg={el.tags} srcImg={el.webformatURL} />
              })}
         </ul>
        
    };
}