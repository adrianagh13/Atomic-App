import {View, Text, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import {
  background1,
  bar2,
  cellimg,
  check,
  filled2,
  two,
} from '../assets/images';
import {
  CellphoneForm,
  Container,
  Footer,
  ImageComponent,
  Logo,
  StyledText,
} from '../components';
import {Color, Size} from '../theme/default';

const ProgressBar = () => {
  return (
    <Container height="90px" justify="space-around">
      <Container row>
        <Container width="50%">
          <ImageComponent source={check} width="40px" height="40px" />
        </Container>
        <Container width="50%">
          <ImageComponent source={two} width="40px" height="40px" />
        </Container>
      </Container>
      <ImageComponent source={bar2} width="350px" height="20px" />
    </Container>
  );
};

const CellphoneText = () => {
  return (
    <Container row justify="center">
      <ImageComponent source={filled2} width="40px" height="40px" />
      <Container width="60%" margin="5%">
        <StyledText
          text="VALIDA TU"
          color={Color.primary}
          size={Size.h3}
          weight
        />
        <StyledText
          text=" CELULAR"
          color={Color.secondary}
          size={Size.h3}
          weight
        />
      </Container>
    </Container>
  );
};

const ValidateText = () => {
  return (
    <Container margin="3%" align="flex-start">
      <StyledText
        text="Necesitamos validar tu numero para"
        color={Color.primary}
        size={Size.h4}
      />
      <StyledText text=" continuar" color={Color.primary} size={Size.h4} />
    </Container>
  );
};

const EnterText = () => {
  return (
    <Container margin="3%" align="flex-start">
      <StyledText
        text="Ingresa tu numero a 10 dígitos y te"
        color={Color.primary}
        size={Size.h4}
      />
      <StyledText
        text=" enviaremos un código SMS"
        color={Color.primary}
        size={Size.h4}
      />
    </Container>
  );
}

export const Cellphone = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={background1}
        resizeMode="cover"
        style={{marginTop: -50}}>
        <Logo />
        <ProgressBar />
        <CellphoneText />
        <ValidateText />
        <EnterText />
        <CellphoneForm />
        <ImageComponent source={cellimg} width="380px" height="580px" />
        <Footer />
      </ImageBackground>
    </ScrollView>
  );
};
