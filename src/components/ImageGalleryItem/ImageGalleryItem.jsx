import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ altImg, srcImg='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' ,largeImageURL,onClick}) => {
   return <li onClick={() => onClick(largeImageURL)} className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItem_image} src={srcImg} alt={altImg} />
          </li>
}