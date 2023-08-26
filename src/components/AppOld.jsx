import { useState } from 'react';
import { Button } from './Button/Button';
import { GlobalStyle, Thumb } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import { success, error, warn, info, empty } from '../services/toasts';
import { fetchImages } from '../services/api';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImg, setTotalImg] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitSearch = async e => {
    e.preventDefault();
    setIsLoading(true);

    const currentSearch = e.target.elements.search.value.trim();
    if (currentSearch === '') {
      warn();
      setIsLoading(false);
      return;
    }

    onChangeSearch(currentSearch);

    setTimeout(async () => {
      try {
        const { hits, totalHits } = await fetchImages(currentSearch, 1);
        if (totalHits !== 0 && totalImg === 0) {
          success(totalHits);
        } else if (totalHits === 0) {
          empty();
        }

        setImages(prev => [...prev, ...hits]);
        setTotalImg(totalHits);
        setPage(2);
      } catch (err) {
        console.info(err);
        error();
      } finally {
        setIsLoading(false);
      }
    }, 800);
  };

  const onChangeSearch = async newSymbol => {
    setSearch(`${nanoid(8)}/${newSymbol}`);
    setImages([]);
    setPage(1);
    setTotalImg(0);
  };

  const onChangePage = async () => {
    const mainSearch = search.slice(9, search.length);

    setIsLoading(true);
    const { hits, totalHits } = await fetchImages(mainSearch, page);
    setImages(prev => [...prev, ...hits]);
    setPage(prev => prev + 1);
    if (images.length + hits.length === totalHits && totalImg > 0) {
      info();
    }
    setIsLoading(false);
  };

  return (
    <Thumb>
      <Searchbar onSubmit={onSubmitSearch} />

      <ImageGallery images={images} />

      {isLoading && <Loader />}

      {images.length === 0 || images.length === totalImg ? null : (
        <Button changePage={onChangePage} />
      )}

      <ToastContainer />
      <GlobalStyle />
    </Thumb>
  );
};
