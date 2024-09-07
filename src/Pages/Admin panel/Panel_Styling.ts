import styled from "styled-components";

export const PanelStyling = styled.div`
    display: flex;
    width: 100%;
    border-top: 2px #3d3d3d solid;
       input{
            width: 500px;
            height: 30px;
            border-radius: 10px;
            margin: 10px;
       }
       textarea{
        width: 500px;
        height: 500px;
        resize: none;
       }
       .admin_panel{
        background: #3d3d3d;
        color: white;
        width: 200px;
        margin: 0 100px 0 0;
       }
       p{
            margin: 30px 0 0 10px;
       }
       ul{
        list-style-type: none;
        padding: 0;
        margin: 20px;
       }
       li{
        margin: 10px 0;
       }
       a{
        margin: 10px 0;
        text-decoration: none;
        color: white;
       }
       .admin_panel__button{
        cursor: pointer;
        background: #3d3d3d;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    color: white;
       }
`