import './App.css'
import api from './services/api.js'
import { useState } from 'react';
import { IoMdPin } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
  


  async function searchCep(){
    if(!input || input == ""){
      alert('[ERRO] Digite algo!')
      return
    }
    
    try {
      const apiResponse = await api.get(`${input}/json`)
      setCep(apiResponse.data)
      console.log(apiResponse.data)
    } catch (e) {
      window.alert('[ERRO] Ops! Erro ao buscar...')
    }
    setInput('')
  }

  
  return (
    <div className='App'>
      <header className='main-header'>
        <h1>
          <IoMdPin />CEP Lookup
        </h1>
        <p>
          Ferramenta para consulta de Código de Endereçamento Postal.
        </p>
      </header>

      <main className="cep-lookup">
        <div className="input-cep-container">
          <input 
            className='inputCep' 
            type="text" 
            placeholder='Insira o CEP...' 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            className="submit-cep"
            onClick={searchCep}
          >
            <FiSearch />
          </button>
        </div>

        <div className="cep-response-container">
          <ul className="response-list">
            <li>
              <strong>CEP:</strong> {cep.cep}
            </li>
            <li>
              <strong>ESTADO:</strong> {cep.uf}
            </li>
            <li>
              <strong>CIDADE:</strong> {cep.localidade}
            </li>
            <li>
              <strong>BAIRRO:</strong> {cep.bairro}
            </li>
            <li>
              <strong>RUA:</strong> {cep.logradouro}
            </li>
            <li>
              <strong>COMPLEMENTO:</strong> {cep.complemento}
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
