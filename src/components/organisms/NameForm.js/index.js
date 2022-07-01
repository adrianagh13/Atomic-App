import React from 'react';
import {Color} from '../../../theme/default';
import {Container} from '../../atoms/Container';
import {GeneralInput} from '../../atoms/GeneralInput';
import {GeneralButton} from '../../molecules/GeneralButton';
import {useNavigation} from '@react-navigation/native';

export const NameForm = () => {
  const navigation = useNavigation();
  return (
    <Container padding="3%" height="300px">
      <GeneralInput text="Nombre(s)" />
      <GeneralInput text="Apellidos" />
      <GeneralButton
        background={Color.secondary}
        text="Enviar"
        color={Color.primary}
        width="80%"
        weight
        margin="7%"
        action={() => navigation.navigate('Cellphone')}
      />
    </Container>
  );
};