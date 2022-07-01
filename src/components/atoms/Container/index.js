import React from 'react';
import {ContainerView} from './styled';

export const Container = ({
  align,
  children,
  padding,
  row,
  height,
  margin,
  width,
  color,
  justify,
}) => {
  return (
    <ContainerView
      align={align}
      padding={padding}
      row={row}
      justify={justify}
      height={height}
      margin={margin}
      width={width}
      color={color}>
      {children}
    </ContainerView>
  );
};
