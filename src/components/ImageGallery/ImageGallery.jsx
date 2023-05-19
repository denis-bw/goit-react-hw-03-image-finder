import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'
import PropTypes from 'prop-types';
  
export const ImageGallery = ({imagesList,showModal}) => {
    
        return imagesList.length > 0 && <ul className={css.ImageGallery}>
                {imagesList.map(el => {
                    return <ImageGalleryItem key={el.id} altImg={el.tags} srcImg={el.webformatURL} onClick={showModal} largeImageURL={el.largeImageURL} />
                })}
            </ul>
            
    
}

ImageGallery.propTypes = {
    imagesList: PropTypes.arrayOf(PropTypes.object).isRequired,
    showModal: PropTypes.func.isRequired,
};