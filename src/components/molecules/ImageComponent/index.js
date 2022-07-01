import React from 'react';
import {Container} from '../../atoms/Container';
import {ImageStyled} from './styled';

export const ImageComponent = ({source, height, width, margin, radius}) => {
  return (
    <Container margin={margin}>
      <ImageStyled
        source={source}
        height={height}
        width={width}
        radius={radius}
      />
    </Container>
  );
};
