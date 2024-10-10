import styled from "styled-components";

export const OutputContainer = styled.article`
    width: 94%;
    margin: 0 auto;
    margin-top: -30px;
    padding-top: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-self: center;

    border-top: none;
    border-radius: 0 0 25px 25px;

    h3{
        font-size: 18px;
    }
    pre{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px;
    }
`

export const OutputImage = styled.img`
    opacity: 0.5;
    width: 80%;
    margin: 0 auto;
    margin-top: 28px;
    padding-bottom: 16px;
`