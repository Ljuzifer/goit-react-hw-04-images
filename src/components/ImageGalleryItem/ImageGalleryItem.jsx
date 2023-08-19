import { ModalBox } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { image, largeImage, description } = this.props;

    return (
      <>
        <img src={image} alt={description} onClick={this.openModal} />
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
