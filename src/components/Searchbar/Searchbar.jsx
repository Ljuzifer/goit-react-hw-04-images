import { HeaderThumb, IconSearch } from './Searchbar.styled';
// import { FcSearch } from 'react-icons/fc';

export const Searchbar = ({ onSubmit }) => {
  return (
    <HeaderThumb>
      <form onSubmit={onSubmit}>
        <button type="submit">
          <IconSearch />
        </button>

        <input
          name="search"
          // class="input"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </form>
    </HeaderThumb>
  );
};
