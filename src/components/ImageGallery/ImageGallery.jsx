import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageList>
      {images.map(image => (
        <li key={image.id}>
          <ImageGalleryItem
            likes={image.likes}
            image={image.webformatURL}
            largeImage={image.largeImageURL}
            description={image.tags}
          />
        </li>
      ))}
    </ImageList>
  );
};
