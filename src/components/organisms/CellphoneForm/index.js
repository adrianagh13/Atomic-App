import React, { useState } from 'react';
import {Color} from '../../../theme/default';
import {Container} from '../../atoms/Container';
import {GeneralInput} from '../../atoms/GeneralInput';
import {GeneralButton} from '../../molecules/GeneralButton';
import {useNavigation} from '@react-navigation/native';

export const CellphoneForm = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [phoneBoolean, setPhoneBoolean] = useState(true);

  const handlePhone = text => {
    setPhoneBoolean(false);
    if (text.length === 10) {
      setPhoneBoolean(true);
      setPhone(text);
    }
  };
  return (
    <Container padding="3%" height="180px">
      <GeneralInput
        text="Número de celular"
        onChange={handlePhone}
        error={phoneBoolean}
        errorText="El número de celular debe ser de 10 dígitos"
        length={10}
        type="numeric"
      />
      <GeneralButton
        background={Color.secondary}
        text="Enviar"
        color={Color.primary}
        width="80%"
        weight
        margin="8%"
        action={() => navigation.navigate('Registered')}
      />
    </Container>
  );
};
