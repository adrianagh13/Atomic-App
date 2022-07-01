import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import {background1, bar1, filled1, two, twoGray} from '../assets/images';
import {Container, ImageComponent, Logo, StyledText} from '../components';
import { Color, Size } from '../theme/default';

const ProgressBar = () => {
  return (
    <Container height="90px" justify="space-around">
      <Container row>
        <Container width="50%">
          <ImageComponent source={filled1} width="40px" height="40px" />
        </Container>
        <Container width="50%">
          <ImageComponent source={twoGray} width="40px" height="40px" />
        </Container>
      </Container>
      <ImageComponent source={bar1} width="350px" height="20px" />
    </Container>
  );
};

const KnowText = () => {
  return (
    <Container row justify="center">
      <ImageComponent source={filled1} width="40px" height="40px" />
      <Container width="75%" margin="5%">
        <StyledText
          text="TE QUEREMOS"
          color={Color.primary}
          size={Size.h3}
          weight
        />
        <StyledText
          text=" CONOCER"
          color={Color.secondary}
          size={Size.h3}
          weight
        />
      </Container>
    </Container>
  );
};

export const Name = ({navigation}) => {
  return (
    <ScrollView>
      <ImageBackground
        source={background1}
        resizeMode="cover"
        style={{marginTop: -50}}>
        <Logo />
        <ProgressBar />
        <KnowText />
      </ImageBackground>
    </ScrollView>
  );
};
