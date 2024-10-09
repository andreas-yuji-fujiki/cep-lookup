// styled components
import { MainTitle } from "./AppHeaderStyles"
import { MainParagraph } from "./AppHeaderStyles";
import { AppHeaderContainer } from "./AppHeaderStyles";

// icons
import { FaSearch } from "react-icons/fa";

function AppHeader(){
    return(
        <AppHeaderContainer>
            <main>
                <MainTitle>
                    <FaSearch className="icon"/>
                    CEP Lookup
                    <small>
                        made by <a href="#" className="andreas-span">andreas.yuji</a>
                    </small>
                </MainTitle>
                <MainParagraph>
                    Consulta de código de endereçamento postal
                </MainParagraph>
            </main>
        </AppHeaderContainer>
    )
}
export default AppHeader