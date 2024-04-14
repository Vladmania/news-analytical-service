import styled from "styled-components";

export const StyledApp = styled.div<{$stylesubject: boolean}>`
  background: ${(props) => !props.$stylesubject ? "#2e2d2d": "aliceblue"};
  color: ${(props) => props.$stylesubject ? "#2e2d2d": "aliceblue"};
  transition: .5s;
  a{
    color: ${(props) => props.$stylesubject ? "#2e2d2d": "aliceblue"};;
  }
`