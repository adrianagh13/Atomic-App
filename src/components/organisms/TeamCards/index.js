import React from 'react';
import {jaime, ramon, ximena} from '../../../assets/images';
import { Container } from '../../atoms/Container';
import {TeamCard} from '../../molecules/TeamCard';

export const TeamCards = () => {
  return (
    <Container padding="8%" justify="space-between" height="850px">
      <TeamCard name="Ramón Gómez" job="Front-end developer" picture={ramon} />
      <TeamCard
        name="Ximena Mejía"
        job="Front-end developer"
        picture={ximena}
      />
      <TeamCard
        name="Jaime Domínguez"
        job="Front-end developer"
        picture={jaime}
      />
    </Container>
  );
};
