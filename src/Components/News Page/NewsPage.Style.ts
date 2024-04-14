import styled from "styled-components";

export const StyledNewsPage = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1240px;
    margin: 0 auto;
    font-family: 'Montserrat';
    img{
        border-radius: 21px;
    box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 350px;
    object-fit: cover;
    }
    .news__description__p{
        font-size: 24px;
        line-height: 1.7;
    }
`