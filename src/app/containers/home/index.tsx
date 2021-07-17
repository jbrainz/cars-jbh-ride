import styled from 'styled-components'
import tw from 'twin.macro'

import BookCarCard from '../../components/bookCard/BookCar'
import Marginer from '../../components/marginer/Marginer'
import BookingSteps from './BookingSteps'
import HomeAbout from './HomeAbout'
import TopCars from './TopCars'
import TopSections from './TopSections'
import jeepImg from '../../../assets/images/jeep.png'
import tour from '../../../assets/images/tour.png'

const PageContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  items-center
`}
`
const description = `JBH Global tour and travels formerly Aghori
 Tour & travels has been
firmed in 2014 as JBH GLOBAL with the objective of “providing
excellent travel  & car hire services to Industrial
Houses/Corporate Sectors, BPO (Call Centres) etc. With the growth in
Indian economy the organization has grown at a very fast pace, and
with a fleet of more than 15 cabs (cng/Diesel) and 17 Tempo Travelers
for ETS and above 35 cars for car rental services. The company has
established itself in Delhi NCR, as an Employee Transport Service
Provider of first choice and has also been catering to BPO’s and MNCs
to their full satisfaction, but now we are working on PAN INDIA basis
with branch offices in multiple cities.`
const title = `Best travel experience in India`
const tourDescription = `JBH GLOBAL with the objective of “providing
excellent travel  & car hire services to Industrial
Houses/Corporate Sectors, BPO (Call Centres) etc. With the growth in
Indian economy the organization has grown at a very fast pace, and
with a fleet of more than 15 cabs (cng/Diesel) and 17 Tempo Travelers
for ETS and above 35 cars for car rental services. The company has
established itself in Delhi NCR, as an Employee Transport Service
Provider of first choice and has also been catering to BPO’s and MNCs
to their full satisfaction, but now we are working on PAN INDIA basis
with branch offices in multiple cities.`

const Homepage: React.FC = () => {
  return (
    <PageContainer>
      <TopSections />
      <Marginer direction='vertical' margin='4em' />
      <BookCarCard />
      <Marginer direction='vertical' margin='8em' />
      <BookingSteps />
      <Marginer direction='vertical' margin='8em' />
      <HomeAbout title={title} img={jeepImg} description={description} />
      <Marginer margin='6em' direction='vertical' />
      <TopCars />
      <Marginer margin='10em' direction='vertical' />
      <HomeAbout
        description={tourDescription}
        title='Check Out our Tour Packages'
        img={tour}
      />
    </PageContainer>
  )
}

export default Homepage
