// API
import ViaCepAPI from '../../../Services/ViaCepAPI'
// react
import React, { useState } from 'react';
// styled components
import { InputCardForm } from "./InputCardStyles"
import { ErrorLog } from './InputCardStyles'
// icons
import { SlMagnifier } from "react-icons/sl"

function InputCard({ onApiResponse }) {
    const [cep, setCep] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        const cepPattern = /^\d{5}-?\d{3}$/;

        if (!cepPattern.test(cep)) {
            setError('Por favor, insira um CEP válido (8 dígitos no formato XXXXX-XXX)');
            return;
        }

        // Limpar o erro caso o CEP seja válido
        setError(''); 

        // Remover o traço para enviar à API
        const formatedCep = cep.slice(0, 5) + cep.slice(6, 9);
        
        const ApiResponse = await ViaCepAPI.get(`${formatedCep}/json`)

        if(ApiResponse.data.erro == 'true'){
            setError('Não foi possível encontrar dados sobre esse CEP!');
        }
        
        onApiResponse(ApiResponse.data)
        
        // Limpar o campo de CEP em caso de erro
        setCep('');
    }

    const handleChange = (e) => {
        // Remover todos os caracteres que não sejam dígitos
        let value = e.target.value.replace(/\D/g, ''); 

        if (value.length >= 6) {
            // Adicionar o traço no lugar correto
            value = value.slice(0, 5) + '-' + value.slice(5); 
        }
        setCep(value);
    };
    
    return (
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
                    <SlMagnifier />
                </button>
            </fieldset>
            <ErrorLog>
                {error && <small style={{ color: '#ff0000' }}>{error}</small>}
            </ErrorLog>
        </InputCardForm>
    )
}

export default InputCard;