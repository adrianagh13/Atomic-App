import React from 'react';
import {jaime, ramon, ximena} from '../../../assets/images';
import {Container} from '../../atoms/Container';
import {TeamCard} from '../../molecules/TeamCard';

export const TeamCards = () => {
  return (
    <Container justify="center" height="880px">
      <TeamCard name="Ramón Gómez" job="Front-end developer" picture={ramon} />
      <TeamCard name="Ximena Mejía" job="UX Designer" picture={ximena} />
      <TeamCard
        name="Jaime Domínguez"
        job="Back-end developer"
        picture={jaime}
      />
    </Container>
  );
};
