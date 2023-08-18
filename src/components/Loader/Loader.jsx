import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Dna
        visible={true}
        height="222"
        width="222"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </>
  );
};
