import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import tw from 'twin.macro'
import Button from '../../components/buttons/Button'

import { ICar } from '../../typings/car'

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  width: 16.5em;
  min-height: 23em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.5);
  ${tw`
  flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
`}
`
const CarThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`

const CarName = styled.h3`
  ${tw`
  text-base
  font-bold
  text-black
  mt-1
  mb-1

`}
`

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
  `}
`

// const SmallText = styled.p`
//   color: inherit;

//   ${tw`
//     text-xs
//     font-semibold
//     flex
//   `}
// `

const ShortDescription = styled.div`
  ${tw`
    text-gray-800
    font-thin
    text-sm
  `}
`

const Description = styled.h5`
  ${tw`
    text-gray-800
    font-bold
    text-sm
  `}
`
const SmallIcon = styled.span`
  ${tw`
  text-gray-400
  text-sm
  mr-1
  `}
`

const CardDetailsContainer = styled.div`
  ${tw`
  flex
  w-full
  justify-between
`}
`
const CarDetail = styled.span`
  ${tw`
  flex
  items-center
`}
`

const CarInfo = styled.h6`
  ${tw`
text-gray-400
text-xs
`}
`

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
  flex
  bg-gray-300
  mt-2
  mb-2
  `}
`
const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `}
`

const Cars = (props: ICarProps) => {
  const { name, thumbnailsSrc, fareRate, driverRate, mileage, speed } = props
  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailsSrc} alt={name} />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <ShortDescription>
          <Description>Driver Charges: {driverRate}</Description>
          <Description>Facility: AC Mic, Luxary seat...</Description>
          <Description>Fare per km: {fareRate}</Description>
        </ShortDescription>
      </PricesContainer>
      <Seperator />
      <CardDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{speed}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{speed}</CarInfo>
        </CarDetail>
      </CardDetailsContainer>
      <RentButton text='book now' />
    </CarContainer>
  )
}

export default Cars
