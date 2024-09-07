import styled from "styled-components";

export const StyledNewsPage = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    font-family: 'Montserrat';
    max-width: 744px;
    align-items: center;
    font-size: 20px;
    line-height: 36px;
    h1{
        line-height: 1.1
    }
    td{
        border: 1px black solid;
        padding: 5px 10px;
    }
    th {
            font-weight: normal;
    padding: 5px;
    color: white;
    background-color: #888888;
    border: 1px #C6C6C6 solid;
    }
    img{
        border-radius: 21px;
    box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.6);
    width: 120%;
    height: 350px;
    object-fit: cover;
    }
    p{
     max-width: 744px;
    margin: 20px auto;  
    font-weight: 500; 
    }
    table{
    display: flex;
    justify-content: center;
  }
`