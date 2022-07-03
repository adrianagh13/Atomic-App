import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {arrow, astronaut, background1, team} from '../assets/images';
import {
  CardsScroll,
  Container,
  DownButton,
  Footer,
  GeneralButton,
  ImageComponent,
  Logo,
  StyledText,
  TeamCards,
} from '../components';
import {Color, Size} from '../theme/default';
import {useNavigation} from '@react-navigation/native';

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

export const RightArmText = () => {
  return (
    <Container margin="8%">
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

const LoveToText = () => {
  return (
    <Container margin="5%">
      <StyledText
        text="¡TE ENCANTARÁ"
        color={Color.primary}
        size={Size.h3}
        weight
      />
      <StyledText
        text="TRABAJAR CON"
        color={Color.secondary}
        size={Size.h3}
        weight
      />
      <StyledText
        text="NOSTROS!"
        color={Color.secondary}
        size={Size.h3}
        weight
      />
    </Container>
  );
};

const TeamText = () => {
  return (
    <Container row justify="center">
      <Container>
        <StyledText text="Contratación" color={Color.primary} size={Size.h5} />
        <StyledText text="remota" color={Color.primary} size={Size.h5} />
      </Container>
      <ImageComponent margin="1%" source={arrow} height="10px" width="20px" />
      <Container>
        <StyledText
          text="Entrevista con"
          color={Color.primary}
          size={Size.h5}
        />
        <StyledText text="el área de RH" color={Color.primary} size={Size.h5} />
      </Container>
      <ImageComponent margin="1%" source={arrow} height="10px" width="20px" />
      <Container>
        <StyledText text="Prueba" color={Color.primary} size={Size.h5} />
        <StyledText text="Práctica" color={Color.primary} size={Size.h5} />
      </Container>
      <ImageComponent margin="1%" source={arrow} height="10px" width="20px" />
      <Container>
        <StyledText text="Entrevista" color={Color.primary} size={Size.h5} />
        <StyledText text="técnica" color={Color.primary} size={Size.h5} />
      </Container>
    </Container>
  );
};

const OurTeamText = () => {
  return (
    <Container row justify="center" margin="5%">
      <StyledText text="NUESTRO" color={Color.primary} size={Size.h3} weight />
      <StyledText
        text=" EQUIPO"
        color={Color.secondary}
        size={Size.h3}
        weight
      />
    </Container>
  );
};

export const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <ImageBackground
        source={background1}
        resizeMode="cover"
        style={{marginTop: -50}}>
        <Logo />
        <DescriptionText />
        <DownButton action={() => navigation.push('Home')} />
        <ImageComponent
          margin="3%"
          source={astronaut}
          width={'360px'}
          height={'310px'}
        />
        <GeneralButton
          text="¡Quiero ser parte!"
          color={Color.blue}
          action={() => navigation.navigate('Name')}
          margin="12%"
        />
        <RightArmText />
        <CardsScroll />
        <LoveToText />
        <ImageComponent
          margin="6%"
          source={team}
          width="360px"
          height="120px"
        />
        <TeamText />
        <GeneralButton
          text="¡Quiero ser parte!"
          color={Color.blue}
          action={() => navigation.navigate('Name')}
          margin="12%"
        />
        <OurTeamText />
        <TeamCards />
      </ImageBackground>
      <Footer />
    </ScrollView>
  );
};
