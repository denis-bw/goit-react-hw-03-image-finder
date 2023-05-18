import css from './Modal.module.css'
import { createPortal } from 'react-dom';
import React, { Component } from "react";
import PropTypes from 'prop-types';

const modalRoor = document.querySelector('#modal-root')


export class Modal extends Component {
   
    componentDidMount() {
        
        window.addEventListener('keydown', this.closeOnESC)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeOnESC)
    }

    closeOnESC = (e)  => {
            if (e.code === 'Escape') {
                this.props.onClose()
            }
        }

    handleClicBacldrop = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    }
    
    render() {
        return createPortal(<div onClick={this.handleClicBacldrop} className={css.Overlay}>
                    <div className={css.Modal}>
                        <img  className={css.imgModal} src={this.props.imgLink} alt="" />
                    </div>
                </div>, modalRoor)
    }
}

Modal.propTypes = {
    onClick: PropTypes.func,
    imgLink: PropTypes.string.isRequired,
};