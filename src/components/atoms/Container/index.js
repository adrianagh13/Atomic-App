import React from 'react';
import {ContainerView} from './styled';

export const Container = ({children, padding, row, height, margin}) => {
  return (
    <ContainerView padding={padding} row={row} height={height} margin={margin}>
      {children}
    </ContainerView>
  );
};
