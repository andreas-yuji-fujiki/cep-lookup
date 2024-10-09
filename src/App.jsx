// components import
import AppHeader from "./Components/AppHeader/AppHeader"
import HeroSection  from "./Components/HeroSection/HeroSection"
import AppFooter from "./Components/AppFooter/AppFooter"

// styled components
import { AppContainer } from "./AppStyles"

// pico css framework
import '@picocss/pico'

function App(){
  return(
    <>
      <AppContainer>
        <AppHeader/>
        <HeroSection/>
        {/* <AppFooter/> */}
      </AppContainer>
    </>
  )
}
export default App