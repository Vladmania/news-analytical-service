import styled from 'styled-components'

export const StyledCompanyPage = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    gap: 20px;
    max-width: 1240px;
    margin: 0 auto;
    .company__div__info{
       grid-column-start: 2;
       grid-column-end: 4;
       font-weight: 600;
    }
    .company__div__chart{
       grid-column-start: 4;
       grid-column-end: 7;
       background: transparent;
    }
    .company__div__description{
       grid-column-start: 1;
       grid-column-end: 7;
    }
    img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
`