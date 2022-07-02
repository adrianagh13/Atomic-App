import React from 'react';
import {Color, Size} from '../../../theme/default';
import {Container} from '../Container';
import {StyledText} from '../StyledText';
import {Input} from './styled';

export const GeneralInput = ({text, onChange, error, errorText, border}) => {
  return (
    <Container
      width="100%"
      align="flex-start"
      justify="space-around"
      height="90px"
      margin="2%">
      <StyledText text={text} size={Size.h4} color={Color.primary} />
      <Input onChangeText={onChange} border={border} error={error} />
      {error ? null : (
        <StyledText text={errorText} size={Size.h5} color={Color.wrong} />
      )}
    </Container>
  );
};
