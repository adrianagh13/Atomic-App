import styled from 'styled-components';

export const ContainerView = styled.View`
  align-items: ${props => (props.align ? props.align : 'center')};
  padding: ${props => (props.padding ? props.padding : '0px')};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  height: ${props => (props.height ? props.height : 'auto')};
  margin: ${props => (props.margin ? props.margin : '0px')};
`;
