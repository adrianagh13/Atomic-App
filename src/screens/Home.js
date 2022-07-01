import React from 'react';
import {Text, ImageBackground, View, ScrollView} from 'react-native';
import {astronaut, atomic, background1} from '../assets/images';
import {
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
      </ImageBackground>
    </ScrollView>
  );
};
