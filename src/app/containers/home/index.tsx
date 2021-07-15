import styled from "styled-components"
import tw from "twin.macro"
import Navbar from "../../components/navbar/Navbar"
import TopSections from "./TopSections"

const PageContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  items-center
  overflow-x-hidden
`}
`

const Homepage: React.FC = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSections/>
    </PageContainer>
  )
}

export default Homepage
