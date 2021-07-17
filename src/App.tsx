import styled from "styled-components"
import tw from "twin.macro"
import {Footer, Navbar} from "./app/layouts";
import HomePage from './app/containers/home/index'

const AppContainer = styled.div`
${tw`
  w-full
  flex
  flex-col
  overflow-x-hidden
  items-center
`}
`;

function App() {
  return <AppContainer>
    <Navbar/>
    <HomePage/>
    <Footer/>
  </AppContainer>
}

export default App
