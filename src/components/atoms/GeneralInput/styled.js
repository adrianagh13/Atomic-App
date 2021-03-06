import styled from "styled-components";

export const Input = styled.TextInput`
  background-color: #ffffff;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  border: ${props => (props.error ? '0' : '2px solid red')};
`;
