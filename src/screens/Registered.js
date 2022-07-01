import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {background1, finished} from '../assets/images';
import {Footer, ImageComponent, Logo} from '../components';

export const Registered = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={background1}
        resizeMode="cover"
        style={{marginTop: -50}}>
        <Logo />
        <ImageComponent source={finished} width="380px" height="410px" />
        <Footer />
      </ImageBackground>
    </ScrollView>
  );
};
