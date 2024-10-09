import styled from "styled-components";

export const MainTitle = styled.h1`
    display: flex;
    gap: 10px;
    align-items: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 0;

    .icon{
        fill: #5ed3f3;
    }
    small{
        font-size: 12.5px;
        position: relative;
        top: -28px;
        left: -220px;
        gap: 6px;
        opacity: 0.6;
    }
    small .react-span{
        color: #5ed3f3;
    }
`

export const MainParagraph = styled.p`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bolder;
    opacity: 0.88;
    margin-bottom: 10px;
`

export const AppHeaderContainer = styled.div`
    margin-top: -80px;
`