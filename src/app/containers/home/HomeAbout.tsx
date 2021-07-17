import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../components/responsive/responsive'


interface IDetails {
  title: string
  img: string
  description: string
}

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
    width: 40em;
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

const HomeAbout = ({title, description, img}: IDetails) => {
  return (
    <Container>
      <CarContainer>
        <img src={img} alt='car-about' />
      </CarContainer>
      <Infocontainer>
        <Title>{title}</Title>
        <InfoText>
          {description}
        </InfoText>
      </Infocontainer>
    </Container>
  )
}

export default HomeAbout
