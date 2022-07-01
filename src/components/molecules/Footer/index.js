import React from 'react';
import {linkedin, twitter} from '../../../assets/images';
import {Color, Size} from '../../../theme/default';
import {Container} from '../../atoms/Container';
import {StyledText} from '../../atoms/StyledText';
import { ImageComponent } from '../ImageComponent';

export const Footer = () => {
  return (
    <Container
      color={Color.black}
      height="130px"
      justify="space-around"
      top="1%">
      <StyledText
        text="© 2020 AtomicLabs. Todos los derechos reservados."
        size={Size.h5}
        color={Color.primary}
      />
      <StyledText
        text="Aviso de privacidad"
        size={Size.h5}
        color={Color.primary}
      />
      <Container row>
        <ImageComponent source={linkedin} height="20px" width="25px" />
        <ImageComponent source={twitter} height="20px" width="25px" />
      </Container>
    </Container>
  );
};
