import React, {useEffect, useState} from 'react';
import {Color} from '../../../theme/default';
import {Container} from '../../atoms/Container';
import {GeneralInput} from '../../atoms/GeneralInput';
import {GeneralButton} from '../../molecules/GeneralButton';
import {useNavigation} from '@react-navigation/native';

export const NameForm = () => {
  const navigation = useNavigation();
  const [nameBoolean, setNameBoolean] = useState(true);
  const [name, setName] = useState('');
  const [lastNameBoolean, setLastNameBoolean] = useState(true);
  const [lastName, setLastName] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleName = text => {
    setNameBoolean(false);
    if (text.length >= 5) {
      setNameBoolean(true);
      setName(text);
    }
  };

  const handleEnable = text => {
    setLastNameBoolean(false);
    if (text.length >= 5) {
      setLastNameBoolean(true);
      setLastName(text);
    }
    if (nameBoolean === true && lastNameBoolean === true) {
      setDisabled(false);
    }
  };

  return (
    <Container padding="3%" height="300px">
      <GeneralInput
        text="Nombre(s)"
        onChange={handleName}
        error={nameBoolean}
        errorText="El nombre deberá tener mínimo 5 caracteres"
      />
      <GeneralInput
        text="Apellidos"
        onChange={handleEnable}
        error={lastNameBoolean}
        errorText="Los apellidos deben tener mínimo 5 caracteres"
      />
      <GeneralButton
        background={Color.secondary}
        text="Enviar"
        color={Color.primary}
        width="80%"
        weight
        margin="7%"
        disabled={disabled}
        action={() => navigation.navigate('Cellphone')}
      />
    </Container>
  );
};
