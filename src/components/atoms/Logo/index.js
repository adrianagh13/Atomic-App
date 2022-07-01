import React from 'react';
import {atomic} from '../../../assets/images';
import {LogoImg, LogoContainer} from './styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg source={atomic} />
    </LogoContainer>
  );
};
