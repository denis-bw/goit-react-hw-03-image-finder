import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ altImg, srcImg }) => {
   return <li className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItem_image} src={srcImg} alt={altImg} />
          </li>
}