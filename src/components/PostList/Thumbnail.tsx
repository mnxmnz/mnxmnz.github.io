import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import { Img, ImgWrap } from './Thumbnail.style';

function Thumbnail({ thumbnail }: { thumbnail: IGatsbyImageData }) {
  return (
    <ImgWrap>
      <Img image={thumbnail} alt="thumbnail" />
    </ImgWrap>
  );
}

export default Thumbnail;
