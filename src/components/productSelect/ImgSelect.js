import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ImgSelect = ({ fotoSelec }) => {
  return (
    <>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: 'fotoSelec',
            isFluidWidth: true,
            src: fotoSelec,
          },
          largeImage: {
            src: fotoSelec,
            width: 1200,
            height: 1800,
          },
        }}
      />
    </>
  );
};

export default ImgSelect;
