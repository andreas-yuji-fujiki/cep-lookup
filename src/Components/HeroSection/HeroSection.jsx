// react
import React, { useState } from 'react';
// components
import InputCard from "./input_card/InputCard"
import OutputCard from "./output_card/OutputCard"
// styled components
import { HeroSectionContainer } from "./HeroSectionStyles"

function HeroSection(){
    const [apiResponse, setApiResponse] = useState(null);

    const handleApiResponse = (data) => {
        setApiResponse(data);
    };
    
    return(
        <HeroSectionContainer>
            <InputCard onApiResponse={handleApiResponse}/>
            <OutputCard data={apiResponse}/>
        </HeroSectionContainer>
    )
}
export default HeroSection