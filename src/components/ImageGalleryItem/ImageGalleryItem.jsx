import { ModalBox } from 'components/Modal/Modal';
import { SlLike } from 'react-icons/sl';
import { useState } from 'react';
import { LikeThumb } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, largeImage, description, likes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLikesVisible, setIsLikesVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLikesVisible = () => {
    setIsLikesVisible(true);
  };

  const handleLikesUnvisible = () => {
    setIsLikesVisible(false);
  };

  return (
    <>
      <img
        src={image}
        alt={description}
        onClick={openModal}
        onMouseOver={handleLikesVisible}
        onMouseOut={handleLikesUnvisible}
      />
      {isLikesVisible && (
        <LikeThumb>
          <SlLike /> {likes}
        </LikeThumb>
      )}
      <ModalBox
        bigPhoto={largeImage}
        alt={description}
        forClose={closeModal}
        state={isModalOpen}
      />
    </>
  );
};
