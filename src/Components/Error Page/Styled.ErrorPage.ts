import styled from "styled-components";

export const StyledErrorPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15% 0 0 0;
    font-family: 'Montserrat';
.error__code{
    font-size: 300px;
    font-weight: bold;
    margin: 0 50px 0 0;
    background: linear-gradient(90deg, rgba(175,7,212,1) 13%, rgba(0,212,255,1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.error__title{
    font-size: 50px;
    margin: 0;
}
.error__text{
    font-size: 20px;
}
a{
    border: black 1px solid;
    border-radius: 16px;
    padding: 5px 20px;
    text-decoration: none;
    color: black;
}
`