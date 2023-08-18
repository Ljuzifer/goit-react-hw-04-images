import { HeaderThumb, IconSearch } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <HeaderThumb>
      <form onSubmit={onSubmit}>
        <button type="submit">
          <IconSearch />
        </button>

        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </HeaderThumb>
  );
};
