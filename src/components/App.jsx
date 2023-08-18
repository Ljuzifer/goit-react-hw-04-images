import { Component } from 'react';
import { Button } from './Button/Button';
import { GlobalStyle, Thumb } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../api';
import { Loader } from './Loader/Loader';

import { nanoid } from 'nanoid';

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

          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            totalImg: totalHits,
          }));
        } catch (err) {
          console.error(err);
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
      alert('No, no, no...');
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
        <GlobalStyle />
      </Thumb>
    );
  }
}
