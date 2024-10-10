// styled components
import { OutputContainer } from "./OutputCardStyles";
import { OutputImage } from "./OutputCardStyles";

// assets
import TrySearchImage from '../../../Assets/try-search.svg';

function OutputCard({ data }) {
    if (!data || data.erro === "true") {
        return (
            <OutputContainer>
                <OutputImage src={TrySearchImage} />
            </OutputContainer>
        );
    }

    const address = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <OutputContainer>
            <h3>Dados disponíveis:</h3>
            <pre>
                {JSON.stringify(data, null, 2)
                    .replace(/"([^"]+)":/g, '$1:')
                    .replace(/"/g, '')
                    .replace(/[{},]/g, '')
                    .split('\n')
                    .filter((line) => line.trim() !== '') 
                    .map((line, index) => {
                        const [key, value] = line.split(':')
                        if (value && value.trim() === '') return null

                        return (
                            <div key={index}>
                                <span style={{ color: '#0172ad' }}>{key && key.trim()}:</span>
                                <span> {value && value.trim()}</span>
                            </div>
                        );
                    })
                }
            </pre>
            {/* Link para o Google Maps */}
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                Ver no Google Maps
            </a>
        </OutputContainer>
    );
}

export default OutputCard;
