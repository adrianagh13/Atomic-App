import React from 'react';
import {Size} from '../../../theme/default';
import {Container} from '../../atoms/Container';
import {StyledText} from '../../atoms/StyledText';
import {ButtonStyled} from './styled';

export const GeneralButton = ({text, background, color}) => {
  return (
    <Container padding='16px'>
      <ButtonStyled background={background} color={color}>
        <StyledText text={text} color={color} size={Size.h4} />
      </ButtonStyled>
    </Container>
  );
};
