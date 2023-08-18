import { Component } from 'react';
import { Button } from './Button/Button';
import { GlobalStyle, Thumb } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../api';
import { Loader } from './Loader/Loader';

import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notiOps = {
  position: 'top-right',
  autoClose: 2800,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

const error = () => toast.error('Oops, something went wrong...', notiOps);
const success = total =>
  toast.success(`Cool!!! We find ${total} photos!`, notiOps);
const warn = () => toast.warn('Sorry, you must enter some text...', notiOps);
const info = () => toast.info('Oops! No more photos :(', notiOps);

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    totalImg: 0,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const imagePage = this.state.page;
    const fullSearch = this.state.search;
    const mainSearch = fullSearch.slice(9, fullSearch.length);

    if (prevState.search !== fullSearch || prevState.page !== imagePage) {
      this.setState({ isLoading: true });

      setTimeout(async () => {
        try {
          const { hits, totalHits } = await fetchImages(mainSearch, imagePage);
          if (this.state.totalImg === 0) {
            success(totalHits);
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            totalImg: totalHits,
          }));

          if (prevState.images.length + hits.length === totalHits) {
            info();
          }
        } catch (err) {
          console.info(err);
          error();
        } finally {
          this.setState({ isLoading: false });
        }
      }, 800);
    }
  }

  onSubmitSearch = e => {
    e.preventDefault();
    const currentSearch = e.target.elements.search.value.trim();
    if (currentSearch === '') {
      e.target.reset();
      warn();
      return;
    }
    this.onChangeSearch(currentSearch);
    e.target.reset();
  };

  onChangeSearch = newSymbol => {
    this.setState({
      search: `${nanoid(8)}/${newSymbol}`,
      images: [],
      page: 1,
      totalImg: 0,
    });
  };

  onChangePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, totalImg, isLoading } = this.state;
    return (
      <Thumb>
        <Searchbar onSubmit={this.onSubmitSearch} />

        <ImageGallery images={images} />

        {isLoading && <Loader />}

        {images.length === 0 || images.length === totalImg ? null : (
          <Button changePage={this.onChangePage} />
        )}

        <ToastContainer />
        <GlobalStyle />
      </Thumb>
    );
  }
}
