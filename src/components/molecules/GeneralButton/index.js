import React from 'react';
import {Size} from '../../../theme/default';
import {Container} from '../../atoms/Container';
import {StyledText} from '../../atoms/StyledText';
import {ButtonStyled} from './styled';

export const GeneralButton = ({
  text,
  background,
  color,
  action,
  width,
  weight,
  margin,
}) => {
  return (
    <Container margin={margin} width={width}>
      <ButtonStyled
        background={background}
        color={color}
        onPress={action}
        width={width}>
        <StyledText text={text} color={color} size={Size.h4} weight={weight} />
      </ButtonStyled>
    </Container>
  );
};
