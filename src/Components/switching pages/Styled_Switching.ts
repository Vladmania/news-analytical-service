import styled from "styled-components";

export const StyledSwitching = styled.div`
        margin: 30px 0 20px 0;
        display: flex;
        flex-direction: column;
    a{
        display: flex;
        width: 32px;
        height: 32px;
        text-decoration: none;
        align-items: center;
        justify-content: center;
    }
    .curentPage{
        background: gold;
        color: black;
        text-decoration: none;
        text-align: center;
        border-radius: 4px;
}
.switching_add_more{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: #126df7;
    background: aliceblue;
    border-radius: 10px;
    margin: 0 0 20px 0;
    cursor: pointer;
}
.switching_pagination{
    display: flex;
    justify-content: center;
}
`