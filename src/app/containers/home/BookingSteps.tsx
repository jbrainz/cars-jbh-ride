import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faCarSide, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
  `}
`

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-black
  `}
`

const StepWrapper = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `}
`

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:w-96
    items-center
    transition-colors
    hover:text-yellow-600
    m-3
  `}
`

const Step = styled.div`
box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
  ${tw`
  flex
  rounded-lg
  items-center
  justify-center
  p-6
 `}
`

const StepTitle = styled.h4`
  ${tw`
  text-black
  text-lg
  font-semibold
  mt-4
`}
`

const StepDescription = styled.p`
  ${tw`
  w-10/12
  text-xs
  md:text-sm
  text-center
  text-gray-600
  `}
`

const StepIcon = styled.span`
  color: #f77f00 ${tw`
text-3xl
`};
`

const BookingSteps = () => {
  return (
    <Container>
      <Title>Our Booking Steps</Title>
      <StepWrapper>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Enter Pick Up Location</StepTitle>
          <StepDescription>
            Find route end point, and book your car
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Select a Pick Up Date</StepTitle>
          <StepDescription>
           Tell us when you want to travel, or need to rent a car/tempo.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book your Ride</StepTitle>
          <StepDescription>
            Finally please click the book button
          </StepDescription>
        </StepContainer>
      </StepWrapper>
    </Container>
  )
}

export default BookingSteps
