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
  radius,
  top,
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
      radius={radius}
      top={top}
      color={color}>
      {children}
    </ContainerView>
  );
};
