export const ImageGalleryItem = ({ image, largeImage, description }) => {
  return (
    <>
      <img src={image} alt={description} />
    </>
  );
};
