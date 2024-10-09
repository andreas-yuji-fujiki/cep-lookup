// react
import React, { useState } from 'react';

// styled components
import { InputCardForm } from "./InputCardStyles"

// icons
import { SlMagnifier } from "react-icons/sl";

function InputCard(){
    const [cep, setCep] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const cepPattern = /^\d{5}-?\d{3}$/;
        if (!cepPattern.test(cep)) {
            setError('Por favor, insira um CEP válido (8 dígitos no formato XXXXX-XXX)');
            return;
        }
        setError('');
        console.log("CEP enviado:", cep);
    };

    const handleChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 6) {
            value = value.slice(0, 5) + '-' + value.slice(5);
        }
        setCep(value);
    };
    
    return(
        <InputCardForm onSubmit={handleSubmit}>
            <fieldset role="group">
                <input
                    type="text"
                    name="CepInput"
                    autoComplete="off"
                    placeholder="Digite um CEP para começar"
                    maxLength="9"
                    value={cep}
                    onChange={handleChange}
                />
                <button type="submit">
                    <SlMagnifier/>
                </button>
            </fieldset>
            {error && <small style={{ color: '#ff0000' }}>{error}</small>}
        </InputCardForm>
    )
}
export default InputCard