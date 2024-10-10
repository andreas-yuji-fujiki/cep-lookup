import axios from "axios";

const ViaCepAPI = axios.create({
    baseURL: "https://viacep.com.br/ws/",
})
export default ViaCepAPI