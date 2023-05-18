import React, { Component } from "react";
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import { api } from '../api/api';
import css from './ImageGallery.module.css'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../Button/Button'
import { InfinitySpin } from 'react-loader-spinner'
import { Modal } from "components/Modal/Modal";
import PropTypes from 'prop-types';
  
export class ImageGallery extends Component {
    state = {
        data: null,
        value: '',
        loading: false,
        total: 0,
        show: false,
        imgLink: ''
    }
    
    #PER_PAGE = 12;

    componentDidUpdate(prevProps) {

        if (prevProps.valueInput !== this.props.valueInput) {
            if (this.props.valueInput === "") {
                return toast.error("Enter a valid value", {
                    position: toast.POSITION.TOP_CENTER
            })}
            
            this.setState({loading: true})
            api(this.props.valueInput).then(data => {
                
                if (data.hits.length === 0) {
                    this.setState({value: ''})
                    toast.error("Nothing found", {
                    position: toast.POSITION.TOP_CENTER
                })
                    return;
                }

                this.setState({
                    data: [...data.hits],
                    value: this.props.valueInput,
                    total: data.totalHits
                })

                if (data.total < this.#PER_PAGE) { this.setState({ value: '' }) }
                
            }).finally(() => {this.setState({loading: false})});   
            
            return;
        }       

        if (prevProps.page !== this.props.page) {

            let contentImput = this.props.valueInput;
            this.setState({loading: true})
            api(prevProps.valueInput, this.props.page).then(dataImage => this.setState(lastProp => {
                
                if (this.state.data.length === this.state.total) {
                    toast.info("The End", {
                        position: toast.POSITION.TOP_CENTER
                    })
                    contentImput = ''
                }
                return {
                    data: [...lastProp.data, ...dataImage.hits],
                    value: contentImput}
            })).finally(() => { this.setState({ loading: false }) });
        }   
    }

    showModal = (imgLink) => {
        this.setState(({show}) => {
            return {
                show: !show,
                imgLink: imgLink
            }
        })
    }

    render() {
        return <>
            {this.state.data && <ul className={css.ImageGallery}>
                {this.state.data.map(el => {
                    return <ImageGalleryItem key={el.id} altImg={el.tags} srcImg={el.webformatURL} onClick={this.showModal} largeImageURL={el.largeImageURL} />
                })}
            </ul>}
            <div className={css.SpinerContainer}>
                {this.state.loading && <InfinitySpin
                width='200'
                color="#3f51b5"
                />}
            </div>
            {this.state.value && <Button onClick={this.props.onClick} />} 
            
            {this.state.show && <Modal onClose={this.showModal} imgLink={this.state.imgLink} />}
            </>
    };
}

ImageGallery.propTypes = {
    valueInput: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};