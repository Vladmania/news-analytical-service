import styled from "styled-components";

export const StyledApp = styled.div<{$stylesubject: boolean}>`
  background: ${(props) => !props.$stylesubject ? "#2e2d2d": "#f6f7f8"};
  color: ${(props) => props.$stylesubject ? "#2e2d2d": "white"};
  font-family: "Montserrat";
  transition: .5s;
  a{
    color: ${(props) => props.$stylesubject ? "#2e2d2d": "white"};;
  }
`