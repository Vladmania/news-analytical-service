import styled from "styled-components";

export const StyleCompanyStock = styled.div<{$changeColor: boolean;}>`
    max-width: 1240px;
    margin: 0 auto;
    background:  ${(props) => props.$changeColor ? 'white' : '#3d3d3d'};
    border-radius: 16px;
    padding: 20px;
    transition: .3s;
    .name_colums{
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 16px;
    }
    .name_colums_1{
        grid-column-start: 1;
    }
    .name_colums_2{
        grid-column-start: 3;
    }
    .name_colums_3{
        grid-column-start: 5;
    }
    .name_colums_4{
        grid-column-start: 7;
    }
    
`