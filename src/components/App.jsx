import { Component } from 'react';
import { Button } from './Button/Button';
import { GlobalStyle, Thumb } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../api';

import { nanoid } from 'nanoid';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '38110129-67a9a84d818f0afdbf48a1e7d';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const imagePage = this.state.page;
    const fullSearch = this.state.search;
    const partSearch = fullSearch.slice(9, fullSearch.length);

    try {
      const search = await fetchImages(partSearch, imagePage);
      console.log(search);

      // if (prevState.search !== fullSearch || prevState.page !== imagePage) {
      //   this.setState(prevState => ({
      //     images: [...prevState.images, response.data],
      //   }));
      // }
    } catch (err) {
      console.error(err);
    }
  }

  onSubmitSearch = e => {
    e.preventDefault();
    this.onChangeSearch(e.target.elements.search.value);
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
    const data = this.state.images;
    // console.log(data);
    return (
      <Thumb>
        <Searchbar onSubmit={this.onSubmitSearch} />
        {/* <ImageGallery imageData={data} /> */}
        <Button changePage={this.onChangePage} />

        <GlobalStyle />
      </Thumb>
    );
  }
}
