import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../buttons/Button'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import Marginer from '../marginer/Marginer'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { SCREENS } from '../responsive/responsive'

const CardContainer = styled.div`
  min-height: 4.3rem;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.5);
  ${tw`
  flex
  justify-center
  items-center
  rounded-md
  bg-white
  pt-1
  pb-1
  pr-2
  pl-2
  md:pt-2
  md:pb-2
  md:pl-9
  md:pr-9
`}
`
const ItemsContainer = styled.div`
  ${tw`flex relative cursor-pointer`}
`

const Item = styled.div`
  color: #f77f00;
  ${tw`
  fill-current
  text-xs
  md:text-base
  mr-1
  md:mr-3
  `}
`

const Name = styled.div`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    select-none
  `}
`

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:ml-5

  `}
`

const SmallIcon = styled.span`
  ${tw`
  text-gray-500
  fill-current
  text-xs
  md:text-base
  ml-2
`}
`

const DatePicker = styled(Calendar)`
  position: absolute;
  max-width: none !important;
  top: 2em;
  left:0;
  user-select: none;
  color: #f77f00;

  ${({offset}:any) => offset && css`
    left: -6.4em;
  `}

  @media (min-width : ${SCREENS.md}){
    top: 3.5em;
  left: -2em;
  }
` as any

const ButtonWrapper = styled.div`
  display: flex;
`

const BookCarCard = () => {
  const [startDate, setStartDate] = useState(new Date())

  const [isCalenderOpen, setIsCalenderOpen] = useState(false)
  const [isCalenderOpenEnd, setIsCalenderOpenEnd] = useState(false)

  const openStartDate = () => {
    setIsCalenderOpen(!isCalenderOpen)
    setIsCalenderOpenEnd(false)
  }
  const openEndDate = () => {
    setIsCalenderOpenEnd((prev) => !prev)
    setIsCalenderOpen(false)
  }

  const [dropOffDate, setDropOffDate] = useState(new Date())

  return (
    <CardContainer>
      <ItemsContainer>
        <ButtonWrapper onClick={openStartDate}>
          <Item>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Item>
          <Name>Pick Up Date</Name>
          <SmallIcon>
            <FontAwesomeIcon icon={isCalenderOpen ? faCaretUp : faCaretDown} />
          </SmallIcon>
        </ButtonWrapper>
        {isCalenderOpen && (
          <DatePicker onChange={setStartDate} value={startDate} />
        )}
      </ItemsContainer>
      <LineSeperator />
      <ItemsContainer>
        <ButtonWrapper onClick={openEndDate}>
          <Item>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Item>
          <Name>Drop Off Date</Name>
          <SmallIcon>
            <FontAwesomeIcon
              icon={isCalenderOpenEnd ? faCaretUp : faCaretDown}
            />
          </SmallIcon>
        </ButtonWrapper>
        {isCalenderOpenEnd && (
          <DatePicker offset onChange={setDropOffDate} value={dropOffDate} />
        )}
      </ItemsContainer>
      <Marginer direction='horizontal' margin='2em' />
      <Button text='Book a ride' />
    </CardContainer>
  )
}

export default BookCarCard
