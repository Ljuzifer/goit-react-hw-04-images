import { LoadMore } from './Button.styled';

export const Button = ({ changePage }) => {
  return (
    <LoadMore type="button" onClick={changePage}>
      Load more
    </LoadMore>
  );
};
