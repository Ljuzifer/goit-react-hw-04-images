import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Dna
        visible={true}
        height="180"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </>
  );
};
