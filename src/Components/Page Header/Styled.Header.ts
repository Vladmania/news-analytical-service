import styled from 'styled-components'

export const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    gap: 20px;
    max-width: 1240px;
    margin: 0 auto;
    margin-bottom: 20px;
    div{
        display: flex;
        justify-content: space-between;
        grid-column-start: 5;
        grid-column-end: 7;
    }
    h1{
        grid-column-start: 1;
        font-size: 24px;
        font-family: math;
    }
    a{
        font-size: 16px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-decoration: none;
    }
    input[type="checkbox"] {
        position: relative;
        width: 40px;
        height: 20px;
        -webkit-appearance: none;
        outline: none;
        background: #c6c6c6;
        border-radius: 20px;
        transition: .5s;
        box-shadow: inset 0 0 5px rgba(0,0,0);
    }
    input[type="checkbox"]:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        top: 0;
        left: 0;
        background: white;
        transition: .5s;
        transform: scale(1.1);
        box-shadow: 0 0 5px rgb(0 0 0);
    }
    input:checked[type="checkbox"]:before {
        left: 20px;
        background: #2e2d2d;
        background-size: cover;
        background-position-x: -4px;  
            box-shadow: 0 0px 5px rgb(165 165 165); 
    }
`

export const StyledFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    align-items: baseline;
    box-shadow: 0px -7px 26px -17px rgba(0, 0, 0, 0.6);
    .footer__info{
        grid-column-start: 2;
    }
    .footer__link{
        grid-column-start: 4;
        display: flex;
        flex-direction: column;
    }
`