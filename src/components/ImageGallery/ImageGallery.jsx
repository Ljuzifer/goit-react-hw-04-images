import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ imageData }) => {
  return (
    <ImageList>
      {imageData.map(image => {
        <li key={image.id}>
          <ImageGalleryItem
            dataImage={(image.webformatURL, image.largeImageURL)}
          />
        </li>;
      })}
    </ImageList>
  );
};
