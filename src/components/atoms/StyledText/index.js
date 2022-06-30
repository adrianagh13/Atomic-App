import React from 'react';
import {StyledTextComponent} from './styled';

export const StyledText = ({text, size, color, weight}) => {
  return (
    <>
      <StyledTextComponent size={size} color={color} weight={weight}>
        {text}
      </StyledTextComponent>
    </>
  );
};
