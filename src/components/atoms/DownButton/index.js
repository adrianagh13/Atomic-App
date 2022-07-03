import React from 'react';
import {downArrow} from '../../../assets/images';
import {Color, Size} from '../../../theme/default';
import {StyledText} from '../StyledText';
import {DownButtonStyled, DownIcon} from './styled';

export const DownButton = ({action}) => {
  return (
    <DownButtonStyled onPress={action}>
      <DownIcon source={downArrow} />
      <StyledText
        text="Quiero saber más"
        color={Color.primary}
        size={Size.h4}
        weight
      />
    </DownButtonStyled>
  );
};
