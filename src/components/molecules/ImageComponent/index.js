import React from 'react';
import {Container} from '../../atoms/Container';
import {ImageStyled} from './styled';

export const ImageComponent = ({source, height, width}) => {
  return (
    <Container margin="10px">
      <ImageStyled source={source} height={height} width={width} />
    </Container>
  );
};
