import styled from "styled-components"
import tw from "twin.macro"
import BookCarCard from "../../components/bookCard/BookCar"
import Marginer from "../../components/marginer/Marginer"
import Navbar from "../../components/navbar/Navbar"
import BookingSteps from "./BookingSteps"
import HomeAbout from "./HomeAbout"
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
      <Marginer direction="vertical" margin="4em"/>
      <BookCarCard/>
      <Marginer direction="vertical" margin="8em"/>
      <BookingSteps/>
      <Marginer direction="vertical" margin="8em"/>
      <HomeAbout/>
    </PageContainer>
  )
}

export default Homepage
