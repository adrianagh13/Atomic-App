import React from 'react';
import {Color} from '../../../theme/default';
import {Container} from '../../atoms/Container';
import {GeneralInput} from '../../atoms/GeneralInput';
import {GeneralButton} from '../../molecules/GeneralButton';
import {useNavigation} from '@react-navigation/native';

export const CellphoneForm = () => {
  const navigation = useNavigation();
  return (
    <Container padding="3%" height="180px">
      <GeneralInput text="Número de celular" />
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
