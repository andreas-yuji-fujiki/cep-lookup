import styled from "styled-components";

export const AppHeaderContainer = styled.div`
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    position: relative;
    left: 64px;
    opacity: 0.75;
`

export const MainTitle = styled.h1`
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
    margin-left: 16px;

    .icon{
        fill: #5ed3f3;
        margin-right: 16px;
    }
    small{
        font-size: 12.5px;
        position: relative;
        top: -40px;
        left: -240px;
        gap: 6px;
        opacity: 0.6;
    }
    small .andreas-span{
        color: #5ed3f3;
        text-decoration: none;
    }
    small .andreas-span:hover{
        text-decoration: underline;
    }
`

export const MainParagraph = styled.p`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bolder;
    opacity: 0.88;
    margin-bottom: 10px;
`