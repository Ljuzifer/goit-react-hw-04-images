import { ModalBox } from 'components/Modal/Modal';
import { SlLike } from 'react-icons/sl';
import { Component } from 'react';
import { LikeThumb } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    isLikesVisible: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleLikesVisible = () => {
    this.setState({ isLikesVisible: true });
  };

  handleLikesUnvisible = () => {
    this.setState({ isLikesVisible: false });
  };

  render() {
    const { image, largeImage, description, likes } = this.props;

    return (
      <>
        <img
          src={image}
          alt={description}
          onClick={this.openModal}
          onMouseOver={this.handleLikesVisible}
          onMouseOut={this.handleLikesUnvisible}
        />
        {this.state.isLikesVisible && (
          <LikeThumb>
            <SlLike /> {likes}
          </LikeThumb>
        )}
        <ModalBox
          bigPhoto={largeImage}
          alt={description}
          forClose={this.closeModal}
          state={this.state.isModalOpen}
        />
      </>
    );
  }
}
