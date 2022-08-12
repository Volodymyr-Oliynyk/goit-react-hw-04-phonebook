import styled from "styled-components";

export const Button = styled.button`
  padding: 5px 10px;
  margin: 5px 10px;
  text-transform: capitalize;
  background-color: ${p => p.theme.colors.backgroundButton};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;