import styled from "styled-components";

export const MainTitle = styled.h1`
    display: flex;
    gap: 10px;
    align-items: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0.85;
    margin-bottom: 0;

    .icon{
        fill: #5ed3f3;
    }
    small{
        font-size: 14.5px;

        display: flex;
        align-self: flex-end;
        gap: 6px;
        
        position: relative;
        top: -8px;
        opacity: 0.6;
    }
    small .react-span{
        color: #5ed3f3;
    }
`

export const MainParagraph = styled.p`
    text-transform: uppercase;
    padding-left: 20px;
    font-size: 16px;
    font-weight: bolder;
    opacity: 0.6;
`

export const AppHeaderContainer = styled.div`
    margin-top: -120px;
`