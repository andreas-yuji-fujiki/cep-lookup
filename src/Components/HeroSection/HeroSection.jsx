// components
import InputCard from "./input_card/InputCard"
import OutputCard from "./output_card/OutputCard"

// styled components
import { HeroSectionContainer } from "./HeroSectionStyles"

function HeroSection(){
    return(
        <HeroSectionContainer>
            <InputCard/>
        </HeroSectionContainer>
    )
}
export default HeroSection