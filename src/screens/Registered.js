import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {background1, finished} from '../assets/images';
import {
  Container,
  Footer,
  ImageComponent,
  Logo,
  StyledText,
} from '../components';
import {Color, Size} from '../theme/default';

const SuccessText = () => {
  return (
    <Container margin="1%">
      <StyledText
        text="TUS DATOS"
        color={Color.primary}
        size={Size.h3}
        weight
      />
      <Container row>
        <StyledText
          text="HAN SIDO"
          color={Color.primary}
          size={Size.h3}
          weight
        />
        <StyledText
          text=" ENVIADOS"
          color={Color.secondary}
          size={Size.h3}
          weight
        />
      </Container>
      <StyledText
        text="CON ÉXITO"
        color={Color.secondary}
        size={Size.h3}
        weight
      />
    </Container>
  );
};

const ConfirmationText = () => {
  return (
    <Container height="160px" justify="space-around">
      <Container align="flex-start">
        <StyledText
          text="En breve recibirás un correo de"
          color={Color.primary}
          size={Size.h4}
        />
        <StyledText
          text="confirmación por parte del equipo de "
          color={Color.primary}
          size={Size.h4}
        />
        <StyledText text="Atomic Labs " color={Color.primary} size={Size.h4} />
      </Container>
      <Container align="flex-start">
        <StyledText
          text="Recuerda revisar tu bandeja de SPAM"
          color={Color.primary}
          size={Size.h4}
        />
        <StyledText
          text="¡Esperamos verte pronto!"
          color={Color.primary}
          size={Size.h4}
        />
      </Container>
    </Container>
  );
};

export const Registered = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={background1}
        resizeMode="cover"
        style={{marginTop: -50}}>
        <Logo />
        <SuccessText />
        <ConfirmationText />
        <ImageComponent
          source={finished}
          width="350px"
          height="390px"
          margin="3%"
        />
        <Footer />
      </ImageBackground>
    </ScrollView>
  );
};
