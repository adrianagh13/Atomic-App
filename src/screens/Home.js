import React from 'react';
import {Text, ImageBackground, View, ScrollView} from 'react-native';
import {astronaut, atomic, background1, division, dots1, imagine} from '../assets/images';
import {
  Card,
  CardsScroll,
  Container,
  DownButton,
  GeneralButton,
  ImageComponent,
  Logo,
  StyledText,
} from '../components';
import {Color, Size} from '../theme/default';

const DescriptionText = () => {
  return (
    <Container>
      <StyledText
        text="Desarrolla todo"
        color={Color.primary}
        size={Size.h2}
        weight
      />
      <StyledText
        text="tu POTENCIAL"
        color={Color.secondary}
        size={Size.h1}
        weight
      />
      <StyledText
        text="dentro del equipo"
        color={Color.primary}
        size={Size.h2}
        weight
      />
      <Container row>
        <StyledText
          text="ATOMIC"
          color={Color.secondary}
          size={Size.h1}
          weight
        />
        <StyledText text="LABS" color={Color.primary} size={Size.h1} weight />
      </Container>
    </Container>
  );
};

const RightArmText = () => {
  return (
    <Container margin="35px">
      <StyledText
        text="SOMOS EL BRAZO"
        color={Color.primary}
        size={Size.h3}
        weight
      />
      <Container row>
        <StyledText
          text="DERECHO"
          color={Color.primary}
          size={Size.h3}
          weight
        />
        <StyledText
          text=" DE LA"
          color={Color.secondary}
          size={Size.h3}
          weight
        />
      </Container>
      <StyledText
        text="TECNOLOGÍA"
        color={Color.secondary}
        size={Size.h3}
        weight
      />
    </Container>
  );
};

export const Home = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={background1}
        resizeMode="cover"
        style={{flex: 1}}>
        <Logo />
        <DescriptionText />
        <DownButton />
        <ImageComponent source={astronaut} width={'360px'} height={'310px'} />
        <GeneralButton text="¡Quiero ser parte!" color={Color.blue} />
        <RightArmText />
        <CardsScroll />
      </ImageBackground>
    </ScrollView>
  );
};
