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
  opacity,
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
      opacity={opacity}
      color={color}>
      {children}
    </ContainerView>
  );
};
