import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ altImg, srcImg ,largeImageURL,onClick}) => {
   return <li onClick={() => onClick(largeImageURL)} className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItem_image} src={srcImg} alt={altImg} />
          </li>
}