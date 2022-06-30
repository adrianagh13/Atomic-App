import React from 'react';
import {Text, ImageBackground, View, ScrollView} from 'react-native';
import {atomic, background1} from '../assets';
import {Logo, StyledText} from '../components';
import {Color, Size} from '../theme/default';

export const Home = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={background1}
        resizeMode="cover"
        style={{flex: 1}}>
        <Logo />
      </ImageBackground>
    </ScrollView>
  );
};
