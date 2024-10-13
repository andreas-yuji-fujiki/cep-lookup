import styled from "styled-components";

export const AppHeaderContainer = styled.div`
    *{
        padding: 0;
        margin: 0;
        text-align: center;
    }

    gap: 18px;
`

export const MainTitles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;

    h2{
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 700;
        opacity: 0.7;
    }

    h1{
        text-transform: uppercase;
        letter-spacing: 3px;
        display: flex;
        justify-content: center;
        gap: 8px;
        opacity: 0.8;
    }

    .icon{
        width: 35px;
        fill: #499aae;
    }
`

export const MainParagraph = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0.7;
    font-size: 16px;
    margin-bottom: 16px;
`