import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../components/responsive/responsive'

import jeepImg from '../../../assets/images/jeep.png'

const Container = styled.div`
  ${tw`
  w-full
  flex
  flex-wrap
  items-center
  2xl:justify-center
  pt-4
  pb-4
  pr-7
  pl-7
  md:pl-0
  md:pr-0
  bg-white

`}
`
const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;
  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS.xxl}) {
    height: 35em;
    margin-left: 0;
  }
`

const Infocontainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
    align-middle
  `}
`

const InfoText = styled.div`
  ${tw`
  lg:max-w-2xl
  text-sm
  md:text-base
  text-gray-500
  mt-4
  font-bold
`}
`

const HomeAbout = () => {
  return (
    <Container>
      <CarContainer>
        <img src={jeepImg} alt='car-about' />
      </CarContainer>
      <Infocontainer>
        <Title>The Best Travel Experience In India</Title>
        <InfoText>
          JBH Global tour and travels formerly Aghori Tour & travels has been
          firmed in 2014 as JBH GLOBAL with the objective of “providing
          excellent travel  & car hire services to Industrial
          Houses/ Corporate Sectors, BPO (Call Centres) etc. With the growth in
          Indian economy the organization has grown at a very fast pace, and
          with a fleet of more than 15 cabs (cng/Diesel) and 17 Tempo Travelers
          for ETS and above 35 cars for car rental services. The company has
          established itself in Delhi NCR, as an Employee Transport Service
          Provider of first choice and has also been catering to BPO’s and MNCs
          to their full satisfaction, but now we are working on PAN INDIA basis
          with branch offices in multiple cities.
        </InfoText>
      </Infocontainer>
    </Container>
  )
}

export default HomeAbout
