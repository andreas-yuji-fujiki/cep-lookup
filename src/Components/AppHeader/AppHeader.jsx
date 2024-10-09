// styled components
import { MainTitle } from "./HeroSectionStyles"
import { MainParagraph } from "./HeroSectionStyles";

// icons
import { FaSearch } from "react-icons/fa";

function AppHeader(){
    return(
        <main>
            <MainTitle>
                <FaSearch/>
                CEP Lookup
            </MainTitle>
            <MainParagraph>
                Consulta de código de endereçamento postal.
            </MainParagraph>
        </main>
    )
}
export default AppHeader