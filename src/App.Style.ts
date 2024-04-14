import styled from "styled-components";

export const StyledApp = styled.div<{$stylesubject: boolean}>`
  background: ${(props) => !props.$stylesubject ? "#2e2d2d": "white"};
  color: ${(props) => props.$stylesubject ? "#2e2d2d": "white"};
  transition: .5s;
  a{
    color: ${(props) => props.$stylesubject ? "#2e2d2d": "white"};;
  }
`