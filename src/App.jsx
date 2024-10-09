// components import
import AppHeader from "./Components/AppHeader/AppHeader"
import AppFooter from "./Components/AppFooter/Footer"

// styled components
import { AppContainer } from "./AppStyles"

// pico css framework
import '@picocss/pico'

function App(){
  return(
    <>
      <AppContainer>
        <AppHeader/>
        {/* <AppFooter/> */}
      </AppContainer>
    </>
  )
}
export default App