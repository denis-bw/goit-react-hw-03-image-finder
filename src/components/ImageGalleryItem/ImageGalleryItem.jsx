import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ altImg, srcImg='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' ,largeImageURL,onClick}) => {
   return <li onClick={() => onClick(largeImageURL)} className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItem_image} src={srcImg} alt={altImg} />
          </li>
}

ImageGalleryItem.propTypes = {
    altImg: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};