import styled from 'styled-components';

export const ImageStyled = styled.Image`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: ${props => (props.radius ? '20px' : '0')};
`;
