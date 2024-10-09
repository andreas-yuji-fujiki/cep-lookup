// styled components
import { OutputContainer } from "./OutputCardStyles"
import { OutputImage } from "./OutputCardStyles"

// assets
import TrySearchImage from '../../../Assets/try-search.svg'

function OutputCard(){
    return(
        <OutputContainer>
            <OutputImage src={TrySearchImage} />
        </OutputContainer>
    )
}
export default OutputCard