// styled components
import { MainTitles } from "./AppHeaderStyles"
import { MainParagraph } from "./AppHeaderStyles";
import { AppHeaderContainer } from "./AppHeaderStyles";

// icons
import { FaSearch } from "react-icons/fa";

function AppHeader(){
    return(
        <AppHeaderContainer>
            <main>
                <MainTitles>
                    {/* <h2> 
                        Made by <a href="#" className="andreas-span">andreas.yuji</a>
                    </h2> */}
                    
                    <h1>
                        <FaSearch className="icon"/>
                        CEP Lookup
                    </h1>
                </MainTitles>
                <MainParagraph>
                    Consulta de código de endereçamento postal
                </MainParagraph>
            </main>
        </AppHeaderContainer>
    )
}
export default AppHeader