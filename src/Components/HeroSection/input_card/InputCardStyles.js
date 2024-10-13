import styled from "styled-components";

export const InputCardForm = styled.form`
    input{
        margin: 0;
        font-size: 18px;
        padding-left: 28px;
    }
    fieldset, 
    fieldset input, 
    fieldset button{
        border-radius: 50px;
    }
`

export const ErrorLog = styled.p`
    margin: -12px 0 32px 0;
    padding: 0;

    position: relative;
    top: 8px;

    text-align: center;
    font-size: 19px;

    opacity: 0.7;
`