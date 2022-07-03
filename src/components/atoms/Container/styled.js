import styled from 'styled-components';

export const ContainerView = styled.View`
  align-items: ${props => (props.align ? props.align : 'center')};
  display: flex;
  padding: ${props => (props.padding ? props.padding : '0px')};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  height: ${props => (props.height ? props.height : 'auto')};
  margin: ${props => (props.margin ? props.margin : '0px')};
  width: ${props => (props.width ? props.width : 'auto')};
  background-color: ${props => props.color};
  border-radius: 12px;
  border-radius: ${props => (props.radius ? '12px' : '0')};
  justify-content: ${props => (props.justify ? props.justify : 'center')};
  opacity: ${props => (props.opacity ? '0.5' : '1')};
`;
