import React from 'react';
import {division} from '../../../assets/images';
import {Color, Size} from '../../../theme/default';
import {Container} from '../../atoms/Container';
import {StyledText} from '../../atoms/StyledText';
import {ImageComponent} from '../ImageComponent';
import {ImageTitle, CardContainer} from './styled';

export const Card = ({imageTitleSource, titleText, children, dots}) => {
  return (
    <CardContainer>
      <Container
        radius
        color={Color.secondary}
        width="350px"
        height="480px"
        margin={'20px'}>
        <ImageComponent
          margin="5%"
          source={imageTitleSource}
          height="180px"
          width="180px"
        />
        <ImageComponent
          margin="2%"
          source={division}
          width="200px"
          height="10px"
        />
        <StyledText
          text={titleText}
          color={Color.primary}
          weight
          size={Size.h3}
        />
        {children}
      </Container>
      <Container margin={'18px'}>
        <ImageComponent source={dots} width="100px" height="25px" />
      </Container>
    </CardContainer>
  );
};
