import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {   faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import tw from 'twin.macro'


import Logo from '../../components/logo/Logo'

const FooterContainer = styled.div`
  background-color: #001219;
  ${tw`
    flex
    justify-center
    min-w-full
    pt-9
    md:pt-12
    flex-col
    items-center
    pb-1
  `}
`
const InnerContainer = styled.div`
  ${tw`
    flex
    h-full
    w-full
    max-w-screen-2xl
    flex-wrap
    ml-5
    md:ml-16
  `}
`
const AboutContainer = styled.div`
  ${tw`
  flex
  flex-col
  mr-2
  md:mr-12
`}
`

const AboutText = styled.p`
  ${tw`
  text-white
  text-xs
  font-normal
  max-w-xs
  mt-3
  leading-5
`}
`

const ListContainer = styled.div`
  ${tw`
  flex
  flex-col
  mr-5
  mt-5
  md:mt-0
  md:mr-16
 `}
`
const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`
const ListItem = styled.li`
  ${tw`
  mb-3
`}
  & > a {
    ${tw`
      text-xs
      text-white
      transition-all

    `}
  }
`
const HeaderTitle = styled.h3`
  ${tw`
  text-xl
    md:text-2xl
    font-bold
    text-white
    mb-3
  `}
`
const IconContainer = styled.div`
  ${tw`flex items-center`}
`

const RedIcon = styled.span`
  background-color: #f77f00;
  ${tw`
    w-6
    h-6
    md:w-8
    md:h-8
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`
const SmallText = styled.h6`
${tw`
text-sm
text-white
`}
`

const CopyrightWrapper = styled.div`
  ${tw`
    flex
    min-w-full
    justify-start
  `}
`

const CopyrightText = styled.small`
  font-size: 11px;
  ${tw`
    text-gray-500
  `}
`

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color='white' />
          <AboutText>
            JBH is India's tempo traveller service provider and one of the best
            rental services u can get, safer rides across india.
          </AboutText>
        </AboutContainer>
        <ListContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href='/'>Home</a>
            </ListItem>
            <ListItem>
              <a href='/'>Tempo</a>
            </ListItem>
            <ListItem>
              <a href='/'>Tours</a>
            </ListItem>
            <ListItem>
              <a href='/'>Services</a>
            </ListItem>
            <ListItem>
              <a href='/'>Contact us</a>
            </ListItem>
            <ListItem>
              <a href='/'>About us</a>
            </ListItem>
          </LinksList>
        </ListContainer>
        <ListContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href='/'>Book a ride</a>
            </ListItem>
            <ListItem>
              <a href='/'>FAQ</a>
            </ListItem>
            <ListItem>
              <a href='/'>Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href='/'>Terms & conditions</a>
            </ListItem>
          </LinksList>
        </ListContainer>
        <ListContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <IconContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt}/>
            </RedIcon>
            <SmallText>+234(0)-7023-4555-44</SmallText>
          </IconContainer>
        </ListContainer>
        <ListContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <IconContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope}/>
            </RedIcon>
            <SmallText>jbh.global@gmail.com</SmallText>
          </IconContainer>
        </ListContainer>
        <CopyrightWrapper>
          <CopyrightText>Copyright &copy; {new Date().getFullYear()} JBH. all Rights reserved</CopyrightText>
        </CopyrightWrapper>
      </InnerContainer>
    </FooterContainer>
  )
}
export default Footer
