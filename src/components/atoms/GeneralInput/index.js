import React, { useState } from 'react';
import {Color, Size} from '../../../theme/default';
import {Container} from '../Container';
import {StyledText} from '../StyledText';
import {Input} from './styled';

export const GeneralInput = ({
  text,
  onChange,
  error,
  errorText,
  length,
  type,
}) => {
  const [phoneBoolean, setPhoneBoolean] = useState(true);
  const [phone, setPhone] = useState('');
  const handlePhone = text => {
    if (text.length === 10) {
      setPhoneBoolean(false);
      setPhone(text);
    }
  };
  return (
    <Container
      width="100%"
      align="flex-start"
      justify="space-around"
      height="90px"
      margin="2%">
      <StyledText text={text} size={Size.h4} color={Color.primary} />
      <Input
        onChangeText={onChange}
        error={error}
        maxLength={length}
        keyboardType={type}
      />
      {error ? null : (
        <StyledText text={errorText} size={Size.h5} color={Color.wrong} />
      )}
    </Container>
  );
};
