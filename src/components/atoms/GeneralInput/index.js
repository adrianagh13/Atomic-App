import React from 'react';
import { lock } from '../../../assets/images';
import {Color, Size} from '../../../theme/default';
import { ImageComponent } from '../../molecules/ImageComponent';
import {Container} from '../Container';
import {StyledText} from '../StyledText';
import {Input} from './styled';

export const GeneralInput = ({text}) => {
  return (
    <Container
      width="100%"
      align="flex-start"
      justify="space-around"
      height="90px"
      margin="2%">
      <StyledText text={text} size={Size.h4} color={Color.primary} />
      <Input />
    </Container>
  );
};
