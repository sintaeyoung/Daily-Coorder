import { createGlobalStyle } from "styled-components";

const ClothesDetailCss=createGlobalStyle`
    .detailContainer{
        width:100%;
        height:auto;
        display:flex;
        flex-direction:column;
        background-color:blue;
    }

    .dataContainer{
        width:100%;
        display:flex;
    }
    .dataimage{
        width:50%;
    }
    .datadescri{
        width:50%;
    }
    .chartContainer{
        width:100%;
        background-color:green;
    }
`;

export default ClothesDetailCss;