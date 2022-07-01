import React from 'react';
import {Color, Size} from '../../../theme/default';
import {Container} from '../../atoms/Container';
import {StyledText} from '../../atoms/StyledText';
import {CardContainer} from '../Card/styled';
import {ImageComponent} from '../ImageComponent';

export const TeamCard = ({name, job, picture}) => {
  return (
    <CardContainer>
      <Container
        radius
        color={Color.blue}
        width="350px"
        height="240px"
        justify="space-around">
        <ImageComponent source={picture} width="120px" height="120px" />
        <Container>
          <StyledText text={name} color={Color.primary} size={Size.h4} weight />
          <StyledText text={job} color={Color.primary} size={Size.h4} />
        </Container>
      </Container>
    </CardContainer>
  );
};
