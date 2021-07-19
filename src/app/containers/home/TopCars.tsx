import styled from 'styled-components'
import tw from 'twin.macro'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import Cars from '../../components/car/Car'
import { useState } from 'react'
import { SCREENS } from '../../components/responsive/responsive'
import { useMediaQuery } from 'react-responsive'

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`

const cars = [
  {
    name: 'Tempo Traveler 12 seater',
    mileage: '10k',
    thumbnailsSrc:
      'https://5.imimg.com/data5/JN/HN/GB/SELLER-10984172/26-seater-outstation-tempo-traveller-rental-services-500x500.jpg',
    fareRate: 20,
    driverRate: 50,
    speed: '60rpm',
  },
  {
    name: 'Tempo Traveler 14 seater',
    mileage: '10k',
    thumbnailsSrc:
      'https://5.imimg.com/data5/DH/NB/MC/SELLER-53373676/tempo-traveller-outstation-service-500x500.jpg',
    fareRate: 20,
    driverRate: 50,
    speed: '60rpm',
  },
  {
    name: 'Tempo Traveler 9 seater',
    mileage: '10k',
    thumbnailsSrc:
      'https://5.imimg.com/data5/JK/LQ/WT/SELLER-53373676/16-seater-tempo-traveller-rental-500x500.jpg',
    fareRate: 20,
    driverRate: 50,
    speed: '60rpm',
  },
  {
    name: 'Tempo Traveler 9 seater',
    mileage: '10k',
    thumbnailsSrc:
      'https://5.imimg.com/data5/JK/LQ/WT/SELLER-53373676/16-seater-tempo-traveller-rental-500x500.jpg',
    fareRate: 20,
    driverRate: 50,
    speed: '60rpm',
  },
  {
    name: 'Tempo Traveler 9 seater',
    mileage: '10k',
    thumbnailsSrc:
      'https://5.imimg.com/data5/JK/LQ/WT/SELLER-53373676/16-seater-tempo-traveller-rental-500x500.jpg',
    fareRate: 20,
    driverRate: 50,
    speed: '60rpm',
  },
]

const Title = styled.div`
  ${tw`
  text-3xl
  lg:text-5xl
  text-black
  font-extrabold
`}
`

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `}
`

const TopCars = () => {
  const [current, setCurrent] = useState(0)
 
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
  const isTablet = useMediaQuery({ maxWidth: SCREENS.md })

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3)

  return (
    <TopCarsContainer>
      <Title>Start Booking now</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          plugins={[
            'clickToChange',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: isMobile ? 1 : isTablet ? 2 : 3,
              },
            },
          ]}
        >
          {cars.map((car,idx) => (
            <Cars key={idx} {...car} />
          ))}
        </Carousel>
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  )
}

export default TopCars
