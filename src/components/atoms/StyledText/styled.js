import styled from 'styled-components';

export const StyledTextComponent = styled.Text`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => (props.weight ? 'bold' : 'normal')};
`;
