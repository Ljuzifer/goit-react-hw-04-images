import { Component } from 'react';
import { Button } from './Button/Button';
import { GlobalStyle, Thumb } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../api';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const imagePage = this.state.page;
    const fullSearch = this.state.search;
    const mainSearch = fullSearch.slice(9, fullSearch.length);

    try {
      const searchResult = await fetchImages(mainSearch, imagePage);
      console.log(searchResult);
      const { hits } = searchResult;

      if (prevState.search !== fullSearch || prevState.page !== imagePage) {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }));
      }
    } catch (err) {
      console.error(err);
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
    console.log(e.target.elements.search.value);
    e.target.reset();
  };

  onChangeSearch = newSymbol => {
    this.setState({
      search: `${nanoid(8)}/${newSymbol}`,
      images: [],
      page: 1,
    });
  };

  onChangePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <Thumb>
        <Searchbar onSubmit={this.onSubmitSearch} />
        <ImageGallery images={this.state.images} />
        <Button changePage={this.onChangePage} />

        <GlobalStyle />
      </Thumb>
    );
  }
}
