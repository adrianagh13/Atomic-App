import styled from 'styled-components';
import {Color} from '../../../theme/default';

export const ButtonStyled = styled.TouchableOpacity`
  align-items: center;
  background-color: ${props =>
    props.background ? props.background : Color.primary};
  border-radius: 14px;
  justify-content: center;
  padding: 10px;
  height: ${props => (props.height ? props.height : '60px')};
  width: ${props => (props.width ? props.width : '60%')};
`;
